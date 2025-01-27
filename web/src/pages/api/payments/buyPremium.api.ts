import type { NextApiRequest, NextApiResponse } from "next"
import { createHandler } from "@Utils/middlewares/createHandler"
import Stripe from "stripe"
import { userAuth } from "@Middlewares/auth"

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, { apiVersion: "2020-08-27" })

const handler = createHandler(userAuth)

// Create a Stripe subscription checkout
handler.post(async (req: NextApiRequest, res: NextApiResponse) => {
	const { _id, displayName, urlSafeName } = req.body
	const origin = req.headers.origin

	try {
		const session = await stripe.checkout.sessions.create({
			mode: "subscription",
			payment_method_types: ["card"],
			line_items: [
				{
					price: process.env.SUBSCRIPTION_PRICE_ID,
					quantity: 1
				},
				{
					price: process.env.MONTHLY_TIP_PRICE_ID,
					quantity: 1,
					adjustable_quantity: {
						enabled: true,
						minimum: 0
					}
				}
			],
			allow_promotion_codes: true,
			metadata: { _id, displayName, urlSafeName },
			success_url: `${origin}/premium-success?session_id={CHECKOUT_SESSION_ID}`,
			cancel_url: `${origin}/back-to-dashboard`
		})

		return res.status(200).json(session)
	} catch (error) {
		console.error("threw in session creation", error)
		return res.status(500).json(error)
	}
})

export default handler
