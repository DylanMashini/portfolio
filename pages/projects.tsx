import Layout from "../components/Layout";
import { useState, useEffect } from "react";
import ProjectContent from "../components/projects";

export default function Projects() {
	const isProd = process.env.NODE_ENV == "production";
	const [mobile, setMobile] = useState(false);
	const [width, setWidth] = useState(764);
	const [height, setHeight] = useState(440);
	const [contactOpen, setContactOpen] = useState(false);
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
				style={{
					marginTop: "9vh",
					marginBottom: "9vh",
				}}
			>
				<ProjectContent width={width}></ProjectContent>
			</div>
		</Layout>
	);
}
