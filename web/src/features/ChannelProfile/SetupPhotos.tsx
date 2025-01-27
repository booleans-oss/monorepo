import { useState, useEffect } from "react"
import styled from "styled-components"

import { download } from "@Services/firebase/storage"
import { H2 } from "./style"
import { Spinner } from "@Components/shared"
import { SideScroller } from "@Components/shared"

const SetupPhotos = ({ _id, meta }: IChannel) => {
	const { setupPhotos } = meta
	const [isLoading, setIsLoading] = useState(true)
	const [photoPathsArray, setPhotoPathsArray] = useState<Array<string>>([])

	useEffect(() => {
		const setupEntries = Object.entries(setupPhotos || {}).filter((elem) => !!elem[1])

		const fetchImages = async () => {
			const result = await Promise.all(
				setupEntries.map(async (entry) => {
					return await download(`${_id}-setup-photo-${entry[0]}`)
				})
			)

			if (result) {
				setPhotoPathsArray(result.filter((elem) => !!elem))
				setIsLoading(false)
			}
		}

		fetchImages()
	}, [])

	if (isLoading) {
		return (
			<div id="setup">
				<Spinner width="24px" />
			</div>
		)
	}

	if (Object.values(setupPhotos || {}).length === 0) return null

	return (
		<section id="setup">
			<H2>SETUP</H2>
			<SideScroller childMargin="20px" wrapperStyles={{ width: "100vw" }}>
				{photoPathsArray.map((photo) => {
					return <Image key={photo} src={photo} />
				})}
			</SideScroller>
		</section>
	)
}

export default SetupPhotos

// Styled Components

const Image = styled.img`
	max-width: 500px;
	max-height: 300px;
	object-fit: contain;
`
