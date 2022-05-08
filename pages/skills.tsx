import { useState, useEffect } from "react";
import Layout from "../components/Layout";

export default function Skills({ svg }) {
	const isProd = process.env.NODE_ENV == "production";
	const [mobile, setMobile] = useState(false);
	const [width, setWidth] = useState(764);
	const [height, setHeight] = useState(440);
	const getMobile = () => {
		setWidth(window.innerWidth);
		setHeight(window.innerHeight);
		if (window.innerWidth < 905) {
			setMobile(true);
		} else {
			setMobile(false);
		}
	};
	if (!isProd) {
		useEffect(() => {
			getMobile();
			window.addEventListener("resize", getMobile);
		});
	} else {
		useEffect(() => {
			getMobile();
		});
	}
	return (
		<Layout mobile={mobile}>
			<div
				className="fade"
				style={{
					marginTop: "7vh",
					marginLeft: "2em",
				}}
			>
				<h2>
					Here are the skills and technologies I use to build things:
				</h2>
			</div>
			<div
				className="fade"
				style={{
					marginLeft: "2em",
				}}
				dangerouslySetInnerHTML={{ __html: svg }}
			/>
		</Layout>
	);
}

export async function getStaticProps() {
	const svg = await fetch(
		"https://skillicons.dev/icons?theme=dark&perline=5&i=ts,js,rust,wasm,python,react,figma,mongodb,nextjs,vscode"
	).then(res => res.text());
	return { props: { svg: svg } };
}
