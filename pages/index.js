import BlueEclipse from "../components/shapes/blueEclipse";
import OrangeEclipse from "../components/shapes/orangeEclipse";
import Link from "next/link";
import DownArrow from "../components/shapes/downArrow";
import { Grid, Spacer, Switch, useTheme } from "@nextui-org/react";
import { useTheme as useNextTheme } from "next-themes";
import Insta from "../components/shapes/insta";

import Projects from "../components/projects";
import { SP } from "next/dist/shared/lib/utils";
import Moon from "../components/shapes/Moon";
import Sun from "../components/shapes/Sun";
export default function Home() {
	const { isDark, type } = useTheme();
	const { setTheme } = useNextTheme();

	return (
		<div>
			<div
				style={{
					position: "relative",
					minHeight: "100vh",
					minWidth: "100%",
				}}
			>
				<div
					className="navbar"
					style={{
						position: "fixed",
						top: 0,
						left: 0,
						right: 0,
						backgroundColor: "rgba(0,0,0,0.5)",
						backdropFilter: "blur(10px)",
						height: "8%",
						textAlign: "right",
						zIndex: "999",
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
					}}
				>
					<Grid.Container justify="left">
						<Grid>
							<Link href="/about">
								<h2 className="nav-item">Home</h2>
							</Link>
						</Grid>
						<Grid>
							<Link href="/about">
								<h2 className="nav-item">Projects</h2>
							</Link>
						</Grid>
						<Grid>
							<Link href="/about">
								<h2 className="nav-item">About Me</h2>
							</Link>
						</Grid>
						<Grid>
							<Link href="/about">
								<h2 className="nav-item">Contact Me</h2>
							</Link>
						</Grid>
					</Grid.Container>
					<span
						style={{
							display: "inline-block",
							width: "30vh",
						}}
					>
						<a
							target="_blank"
							href="https://www.instagram.com/dylanmashini/"
							rel="noopener noreferrer"
						>
							{" "}
							<i
								className="bx bxl-instagram clickable"
								style={{
									fontSize: "30px",
									marginRight: "20px",
								}}
							></i>
						</a>
						<a
							target="_blank"
							href="https://github.com/DylanMashini"
							rel="noopener noreferrer"
						>
							<i
								className="bx bxl-github clickable"
								style={{
									fontSize: "30px",
									marginRight: "20px",
								}}
							/>
						</a>
						<Switch
							css={{
								marginRight: "30px",
							}}
							checked={isDark}
							size="sm"
							iconOn={<Moon filled />}
							iconOff={<Sun />}
							onChange={() => {
								setTheme(type === "light" ? "dark" : "light");
							}}
						></Switch>
					</span>
				</div>
				<BlueEclipse />
				<OrangeEclipse />
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
							I'm a full stack software developer based in
							Atlanta.
						</h3>
					</div>
					<div className={"down-arrow"}>
						<h3>Scroll Down to see more</h3>
						<DownArrow></DownArrow>
					</div>
				</div>
			</div>
			<div className={"projects"}>
				<Projects></Projects>
			</div>
		</div>
	);
}
