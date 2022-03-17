import BlueEclipse from "../components/shapes/blueEclipse";
import OrangeEclipse from "../components/shapes/orangeEclipse";
import Link from "next/link";
import DownArrow from "../components/shapes/downArrow";
import Navbar from "../components/Navbar";
import Projects from "../components/projects";
import { useState, useEffect } from "react";

export default function Home() {
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
	useEffect(() => {
		getMobile();
		window.addEventListener("resize", getMobile);
	});
	return (
		<div>
			<div
				style={{
					position: "relative",
					minHeight: "100vh",
					minWidth: "100%",
					clear: "both",
				}}
			>
				<Navbar mobile={mobile} />
				<BlueEclipse width={width} height={height} mobile={mobile} />
				<OrangeEclipse width={width} height={height} />
				<div
					style={{
						position: "absolute",
						top: "50%",
						left: "50%",
						transform: "translate(-50%, -45%)",
						height: "80vh",
						width: "90%",
						borderRadius: "20px",
						background:
							"linear-gradient(116.53deg, rgba(255, 255, 255, 0.49) -0.86%, rgba(255, 255, 255, 0.07) 100%)",
						backdropFilter: "blur(30px)",
					}}
				>
					<div
						style={{
							position: "relative",
							margin: "0",
							position: "absolute",
							top: "50%",
							left: "50%",
							transform: "translate(-50%, -50%)",
							textAlign: "center",
						}}
					>
						<h1>Hi, I'm Dylan</h1>
						<h3>
							{mobile
								? "I'm a full stack software developer."
								: "I'm a full stack software developer based in Atlanta."}
						</h3>
					</div>
					<div className={"down-arrow"}>
						<h3>Scroll Down to see more</h3>
						<DownArrow></DownArrow>
					</div>
				</div>
			</div>
			<div className={"projects"}>
				<Projects width={width} />
			</div>
		</div>
	);
}
