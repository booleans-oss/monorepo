import { getFromApi } from "../utils/getFromApi"

interface IFunc {
	/**
	 * @params
	 * user_id: Twitch broadcaster_id of the user.
	 *
	 * @returns
	 * Promise fulfilled with Twitch videos for the user.
	 *
	 */
	(user_id: string): Promise<ITwitchClip[]>
}

export const getRecentVideos: IFunc = async (user_id): Promise<ITwitchClip[]> => {
	try {
		const { data } = await getFromApi<ITwitchClip[]>({
			endpointBaseUrl: "https://api.twitch.tv/helix/videos",
			queryParams: { user_id }
		})

		return data
	} catch (error) {
		throw error
	}
}
