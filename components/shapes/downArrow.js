import Link from "next/link";
export default function downArrow() {
	return (
		<Link href="/#projects" className={"clickable"}>
			<svg
				width="50"
				height="50"
				viewBox="0 0 50 50"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<g clipPath="url(#clip0_18_16)">
					<path
						d="M49.3343 12.0293C48.4469 11.1418 47.0078 11.1417 46.1202 12.0294L25.0005 33.1496L3.87977 12.0293C2.99235 11.1418 1.55326 11.1417 0.665682 12.0294C-0.221894 12.917 -0.221894 14.3559 0.665682 15.2435L23.3936 37.9708C23.8198 38.397 24.3978 38.6364 25.0005 38.6364C25.6033 38.6364 26.1814 38.3968 26.6075 37.9706L49.3342 15.2433C50.2219 14.3559 50.2219 12.9168 49.3343 12.0293Z"
						fill="white"
					/>
				</g>
				<defs>
					<clipPath id="clip0_18_16">
						<rect width="50" height="50" fill="white" />
					</clipPath>
				</defs>
			</svg>
		</Link>
	);
}
