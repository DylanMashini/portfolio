import BlueEclipse from "../components/shapes/blueEclipse";
import OrangeEclipse from "../components/shapes/orangeEclipse";
import DownArrow from "../components/shapes/downArrow";
import getMobile from "../mobile";
import { useState } from "preact/compat";
import Bio from "../components/Bio";
import Contact from "../components/Contact";
import OrangeEclipseMobile from "../components/shapes/orangeEclipseMobile";
import BlueEclipseMobile from "../components/shapes/blueEclipseMobile";
import Layout from "../components/Layout";
export default function Home() {
	const [mobile, setMobile] = useState(false);
	const [width, setWidth] = useState(764);
	const [height, setHeight] = useState(440);
	const changeMobile = (value: boolean) => {
		setMobile(value);
	};
	const changeWidth = (value: number) => {
		setWidth(value);
	};
	const changeHeight = (value: number) => {
		setHeight(value);
	};

	getMobile(changeMobile, changeWidth, changeHeight);
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
				<div>
					<div className={"bio"}>
						{/* <Bio /> */}
						<Contact mobile={mobile} />
					</div>
				</div>
			</div>
		</Layout>
	);
}
