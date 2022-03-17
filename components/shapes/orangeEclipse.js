export default function orangeEclipse({ width, height }) {
	const svgWidth = Math.trunc(width * 0.40526315789);
	const svgHeight = Math.trunc(height * 0.88612565445);
	console.log(width, height);
	return (
		<svg
			width={`${svgWidth}`}
			height={`${svgHeight}`}
			viewBox={`0 0 ${svgWidth} ${svgHeight}`}
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			style={{
				position: "absolute",
				bottom: "-300",
				right: "0px",
			}}
		>
			<circle
				cx="338.717"
				cy="338.717"
				r="338"
				transform="rotate(30 338.717 338.717)"
				fill="url(#paint0_diamond_18_3)"
			/>
			<defs>
				<radialGradient
					id="paint0_diamond_18_3"
					cx="0"
					cy="0"
					r="1"
					gradientUnits="userSpaceOnUse"
					gradientTransform="translate(455.809 127.467) rotate(102.035) scale(561.593)"
				>
					<stop stopColor="#B31721" />
					<stop offset="1" stopColor="#DFA309" />
				</radialGradient>
			</defs>
		</svg>
	);
}
