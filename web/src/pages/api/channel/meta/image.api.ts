import type { NextApiRequest, NextApiResponse } from "next"
import { createHandler } from "@Utils/middlewares/createHandler"
import mongoose from "mongoose"
import { Channel } from "@Services/mongodb/models"
import { userAuth } from "@Middlewares/auth"
import { sanitize } from "@Services/mongodb/utils/sanitize"

const handler = createHandler(userAuth)

handler.post(async (req: NextApiRequest, res: NextApiResponse) => {
	const { _id } = req.body

	try {
		const data = await Channel.findOneAndUpdate(
			{ _id: new mongoose.Types.ObjectId(sanitize(_id)) },
			{ $set: { "meta.hasProfileImage": true, "meta.profileImage": sanitize(_id) } }
		)

		return res.status(200).json({ data })
	} catch (error) {
		return res.status(400).json({ error })
	}
})

export default handler
