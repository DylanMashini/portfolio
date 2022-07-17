export default function blueEclipse({ width, height, mobile }) {
	const svgWidth = Math.trunc(width * 0.34122807017);
	const svgHeight = Math.trunc(height * 0.81413612565);
	let svgR = 338;
	if (mobile) {
		svgR = Math.trunc(width * 0.2);
	}

	return (
		<svg
			width={`${svgWidth}`}
			height={`${svgHeight}`}
			viewBox={`0 0 ${svgWidth} ${svgHeight}`}
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<circle
				cx="50"
				cy="283"
				r={`${svgR}`}
				transform="rotate(30 50 283)"
				fill="url(#paint0_diamond_4_49)"
			/>
			<defs>
				<radialGradient
					id="paint0_diamond_4_49"
					cx="0"
					cy="0"
					r="1"
					gradientUnits="userSpaceOnUse"
					gradientTransform="translate(167.093 71.75) rotate(102.035) scale(561.593)"
				>
					<stop stopColor="#17B3A9" />
					<stop offset="1" stopColor="#0945DF" />
				</radialGradient>
			</defs>
		</svg>
	);
}
