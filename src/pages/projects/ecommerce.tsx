import Navbar from "../../components/Navbar";
import { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import Image from "next/image";
import Layout from "../../components/Layout";

export default function Ecommerce({ skillIcons }) {
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
		<div
			className="project-page"
			id="0"
			style={{
				scrollBehavior: "auto",
			}}
		>
			{/* <Script src={"/prism.js"} /> */}

			<Layout mobile={mobile}>
				<div
					className="project-page-content"
					style={{
						marginTop: "9vh",
					}}
				>
					<h1>Ecommerce Website</h1>
					<a
						className="clickable clickableul"
						href="https://www.dncnutrition.com/"
						target="_blank"
						rel="noopener noreferer"
					>
						<h3>Here's the link to the final product</h3>
					</a>
					<h4>
						This page is under construction, come back later to see
						more details
					</h4>
					<h2>Technologies Used</h2>
					<div dangerouslySetInnerHTML={{ __html: skillIcons }}></div>
				</div>
			</Layout>
		</div>
	);
}

export function getStaticProps() {
	return new Promise(resolve => {
		fetch("https://skillicons.dev/icons?i=next,ts,mongo,vercel,")
			.then(res => res.text())
			.then(res => {
				resolve({
					props: {
						skillIcons: res,
					},
				});
			});
	});
}
