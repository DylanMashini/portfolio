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
				<div className="relative min-h-screen clear-both min-w-screen">
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
						className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-45%] h-[80vh] w-[90vw] rounded-2xl backdrop-blur-2xl"
						style={{
							background:
								"linear-gradient(116.53deg, rgba(255, 255, 255, 0.49) -0.86%, rgba(255, 255, 255, 0.07) 100%)",
						}}
					>
						<div className="m-0 absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] text-center">
							<h1 className="fade">Hi, I'm Dylan</h1>
							<h3 className="fade4">
								{mobile
									? "I'm a full stack software developer."
									: "I'm a full stack software developer based in Atlanta."}
							</h3>
						</div>
						<div
							className={
								"absolute h-1/5 w-full text-center bottom-0.5 fade"
							}
						>
							<h3>Scroll Down to see more</h3>
							<DownArrow></DownArrow>
						</div>
					</div>
				</div>
				<div>
					<div className="relative mt-[10vh] mb-[10vh]">
						<Contact mobile={mobile} />
					</div>
				</div>
			</div>
		</Layout>
	);
}
