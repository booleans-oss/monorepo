import mongoose from "mongoose"
import type { NextApiRequest, NextApiResponse } from "next"
import { createHandler } from "@Middlewares/createHandler"
import Channel from "@Services/mongodb/models/Channel"
import { userAuth } from "@Middlewares/auth"
import { sanitize } from "@Services/mongodb/utils/sanitize"

const handler = createHandler(userAuth)

// Set channel's PC spec
handler.post(async (req: NextApiRequest, res: NextApiResponse) => {
	try {
		const { _id, keyName, description } = req.body

		const data = await Channel.findByIdAndUpdate(
			{
				_id: new mongoose.Types.ObjectId(sanitize(_id))
			},
			{
				$set: { [`meta.specs.${keyName.replace(/[^\w\s-]/g, "")}`]: sanitize(description) }
			},
			{ new: true }
		)

		return res.status(200).json(data)
	} catch (error) {
		console.log(error)
		return res.status(500).json({ isError: true, error })
	}
})

// Delete a channel's PC spec
handler.delete(async (req: NextApiRequest, res: NextApiResponse) => {
	try {
		const { _id, keyName } = req.body

		const data = await Channel.findByIdAndUpdate(
			{
				_id: new mongoose.Types.ObjectId(sanitize(_id))
			},
			{
				$unset: { [`meta.specs.${keyName.replace(/[^\w\s-]/g, "")}`]: 1 }
			},
			{ new: true }
		)

		return res.status(200).json(data)
	} catch (error) {
		console.log(error)
		return res.status(500).json({ isError: true, error })
	}
})

export default handler
