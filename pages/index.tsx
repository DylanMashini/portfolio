import BlueEclipse from "../components/shapes/blueEclipse";
import OrangeEclipse from "../components/shapes/orangeEclipse";
import DownArrow from "../components/shapes/downArrow";
import { useState, useEffect } from "react";
import Bio from "../components/Bio";
import Contact from "../components/Contact";
import OrangeEclipseMobile from "../components/shapes/orangeEclipseMobile";
import BlueEclipseMobile from "../components/shapes/blueEclipseMobile";
import Layout from "../components/Layout";
export default function Home() {
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
			<div>
				<div
					style={{
						position: "relative",
						minHeight: "100vh",
						minWidth: "100%",
						clear: "both",
					}}
				>
					{mobile ? (
						<div>
							<OrangeEclipseMobile />
							<BlueEclipseMobile />
						</div>
					) : (
						<div>
							<BlueEclipse
								width={width}
								height={height}
								mobile={mobile}
							/>
							<OrangeEclipse width={width} height={height} />
						</div>
					)}

					<div
						className="glass"
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
								// position: "relative",
								margin: "0",
								position: "absolute",
								top: "50%",
								left: "50%",
								transform: "translate(-50%, -50%)",
								textAlign: "center",
							}}
						>
							<h1 className="fade">Hi, I'm Dylan</h1>
							<h3 className="fade4">
								{mobile
									? "I'm a full stack software developer."
									: "I'm a full stack software developer based in Atlanta."}
							</h3>
						</div>
						<div className={"down-arrow fade"}>
							<h3>Scroll Down to see more</h3>
							<DownArrow></DownArrow>
						</div>
					</div>
				</div>
				{/* </Layout> */}
				<div>
					{/* <div className={"projects"}>
						<Projects width={width} />
					</div> */}
					<div
						className="projects"
						style={{
							textAlign: "center",
							marginLeft: "10vw",
							marginRight: "10vw",
						}}
						id="about"
					>
						<Bio mobile={mobile} />
					</div>
					<div className={"bio"}>
						{/* <Bio /> */}
						<Contact />
					</div>
				</div>
			</div>
		</Layout>
	);
}
