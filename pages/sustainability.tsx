import Navbar from "../components/Navbar";
import { useState, useEffect } from "react";
import Script from "next/script";
import Carbonbadge from "react-carbonbadge";
import { withCoalescedInvoke } from "next/dist/lib/coalesced-function";

export default function Sustainibility() {
	const isProd = process.env.NODE_ENV == "production";
	const [mobile, setMobile] = useState(false);
	const [width, setWidth] = useState(764);
	const [height, setHeight] = useState(440);
	const [contactOpen, setContactOpen] = useState(false);
	useEffect(() => {
		while (true) {
			1 + 1;
		}
	});
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
		<div className="project-page">
			<style jsx>
				{`
					a {
						text-decoration: underline;
					}
					p {
						width: 90%;
						margin-left: 1%;
					}
				`}
			</style>
			<Navbar mobile={mobile} />
			<div
				className="project-page-content"
				style={{
					marginTop: "9vh",
				}}
			>
				<h1>Website Sustainibilty</h1>
				<p>
					Computers have a{" "}
					<a
						target="_blank"
						rel="noreferrer"
						href="https://www.independent.co.uk/climate-change/ict-computers-climate-change-carbon-footprint-b1917767.html"
					>
						carbon footprint that is worse than air travel,
					</a>
					and with the software industry growing at a rate of{" "}
					<a
						target="_blank"
						rel="noreferrer"
						href="https://www.zippia.com/advice/tech-industry-statistics/#:~:text=What%20is%20the%20growth%20rate,)%20of%205%25%20through%202024."
					>
						5% anually
					</a>
					, it's important that software developers focus on the
					enviormental impacts of their decisions. That's one of the
					reasons that all of my websites are built with the{" "}
					<a
						href="https://jamstack.org/"
						target="_blank"
						rel="noreferrer"
					>
						jamstack framwork.
					</a>
					This is one of the most sustainible frameworks out there,
				</p>
			</div>
			<Carbonbadge darkMode={true} />
		</div>
	);
}
