import { useState, useEffect } from "react";
import Layout from "../../components/Layout";

export default function portfolio() {
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
		<div>
			<Layout mobile={mobile}>
				<div
					className="project-page-content"
					style={{ marginTop: "9vh" }}
					id="0"
				>
					<h1>Portfolio Page</h1>
					<h5>This page is currently under construction.</h5>
				</div>
			</Layout>
		</div>
	);
}
