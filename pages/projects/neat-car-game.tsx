import Navbar from "../../components/Navbar";
import { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

export default function Lane() {
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
			<Script src={"/prism.js"} />
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
				<h1>Neat Car Game</h1>
				<h3>Overview:</h3>
				<p>
					This project was a great way to learn neat and pygame, and
					the end result was pretty cool.
				</p>
				<h3>The AI: </h3>
				<p>
					This project used NEAT for the AI, which is a genitic
					algorithm. This takes in the data from the{" "}
					<Link href="#radars">
						<a>"Radars"</a>
					</Link>
					, and outputs the data to control the car. It also uses a
					fitness value to control the evolution.
				</p>
				<h4>
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The
					fitness:
				</h4>
				<p>
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The
					fitness was determined by the ability to reach predetermined
					"reward points", which incremented the fitness by 10.
				</p>
				{/* Picture of rewpoints */}
				<h3>The car</h3>

				<p>
					The car class had all of the functionality for the car,
					except for the{" "}
					<Link href="#radars">
						<a>Radars</a>
					</Link>
					. This included checking if the car was dead, updating the
					fitness of the car, and controlling the car.{" "}
				</p>
				{/* Picture of car sprite */}
				<h3 id="radars">The radars</h3>
				{/* Picture of car on track */}
				<p>
					The radars worked by drawing three lines out, and detecting
					collision with the edges of the course. If there was
					colision, it returned how far away the collision was from
					the car. This was used as input data for the AI.
				</p>
				<h3>The course and collision</h3>
				<p>
					The collision mechanics work by having a precalculated list
					of points that are off of the course. I created the list by
					iterating through all of the pixels, and adding the white
					ones boardering nonwhite pixels to an array.{" "}
				</p>
			</div>
		</div>
	);
}
