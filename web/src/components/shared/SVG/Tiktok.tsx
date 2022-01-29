import { useState } from "react"
import colors from "@Colors" /** The Tiktok logo. Use fill for color. */
export const Tiktok = (props: any) => {
	const [isHovered, setIsHovered] = useState(false)

	const { width = "100%", fill = colors.white, colorHover = colors.white, dataCy, ...rest } = props

	return (
		<svg
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
			width={width}
			data-cy={dataCy}
			viewBox="0 0 51 59"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...rest}
		>
			<path
				d="M27.0342 0H36.8342C36.9394 0.428049 37.0212 0.861527 37.0792 1.2985C37.3779 4.70663 38.937 7.88084 41.4516 10.2006C43.9662 12.5204 47.2555 13.819 50.6767 13.8425V23.079C50.2183 23.228 49.7372 23.2944 49.2557 23.275C46.9761 23.0232 44.7167 22.6139 42.4937 22.05C40.5751 21.3117 38.7088 20.444 36.9076 19.453V20.678C36.9076 25.578 36.9076 30.625 36.9076 35.5985C36.9322 37.6227 36.8011 39.6459 36.5157 41.65C36.0859 44.9953 34.8064 48.1748 32.7992 50.8853C30.7921 53.5958 28.1241 55.7471 25.0497 57.134C23.2429 57.7984 21.393 58.3387 19.5127 58.751H16.1072C15.9645 58.6833 15.8171 58.626 15.6662 58.5795C12.2145 58.1406 8.97222 56.6823 6.35369 54.3911C3.73516 52.0999 1.85938 49.0798 0.966156 45.717C0.554914 44.2535 0.24386 42.7638 0.0351562 41.258V38.3915C0.304656 37.044 0.500657 35.6965 0.892657 34.3735C1.99684 30.8407 4.13016 27.7179 7.01954 25.4046C9.90892 23.0914 13.4229 21.693 17.1117 21.3885C18.2142 21.217 19.3167 21.168 20.4927 21.07C20.4927 24.255 20.4927 27.195 20.4927 30.1595C20.4927 30.87 20.1252 30.968 19.5372 31.1395C17.6587 31.5701 15.8159 32.1434 14.0247 32.8545C12.6451 33.3743 11.4598 34.3077 10.631 35.5268C9.80212 36.746 9.37015 38.1915 9.39415 39.6655C9.29025 41.3371 9.68097 43.0022 10.5175 44.4531C11.3541 45.9041 12.5994 47.0765 14.0982 47.824C15.4686 48.6715 17.0605 49.0914 18.6707 49.0303C20.2809 48.9692 21.8363 48.4299 23.1387 47.481C24.1138 46.7828 24.9316 45.8879 25.5393 44.8539C26.147 43.82 26.531 42.6701 26.6667 41.4785C26.9596 39.04 27.0824 36.5841 27.0342 34.1285C27.0342 23.2505 27.0342 12.3643 27.0342 1.47C27.1077 0.955501 27.0587 0.49 27.0342 0Z"
				fill={isHovered ? colorHover : fill}
				style={{ transition: ".1s" }}
			/>
		</svg>
	)
}