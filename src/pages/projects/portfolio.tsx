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
					<h1>Portfolio Page</h1>
					<h4>This page is currently under construction.</h4>
					<h3>Github Repo: </h3>
					<a
						target="_blank"
						href="https://github.com/DylanMashini/portfolio"
						rel="noopener noreferrer"
						style={{
							textAlign: "center",
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							marginBottom: "4vh",
							textDecoration: "none",
						}}
					>
						<i
							className="bx bxl-github clickable"
							style={{
								fontSize: "60px",
								marginRight: "20px",
							}}
						/>
					</a>
					<h2>Technologies Used</h2>
					<div dangerouslySetInnerHTML={{ __html: skillIcons }}></div>
				</div>
			</Layout>
		</div>
	);
}

export function getStaticProps() {
	return new Promise(resolve => {
		fetch("https://skillicons.dev/icons?i=next,ts,vercel,figma")
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
