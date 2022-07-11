import { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import Layout from "../../components/Layout";

export default function NeatCarGame({ skillIcons }) {
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
					<h1>Neat Car Game</h1>
					<h2>
						Video of two models, Blue was trained for 25
						generations, and red was trained for 15 generations
					</h2>
					<ReactPlayer
						url={"https://vimeo.com/714988702"}
						muted={true}
						loop={true}
						playing={true}
					/>
					<h2>What are the Blue Lines?</h2>
					<p>
						The blue lines are "radars" that detect if they hit the
						edge of the track. If the "radars" collide with the
						track at any point, it passes the distance from the car
						to the collision into the nueral network.{" "}
					</p>
					<h2>What's happening?</h2>
					<p>
						I created a pygame car game, where points are given
						every time the car runs over a "reward point" these
						reward points are after every turn. If a car touches the
						white, it dies. To encourage speed, if a car goes too
						slow it dies. These points are then fed into a genetic
						machine learning algorithim called NEAT that uses the
						points as fitness. This algorithim uses generations of
						30 that all train in parellel.
					</p>
					<h2>What is a genitic algorithim?</h2>
					<h3>Genitic Algorithim vs Backpropigation</h3>
					<p>
						Rather than the most common method of training a NN
						(nueral network) that uses backpropigation, genetic
						alogritims use populations of many NNs. What this means
						is that it starts off completely random, then it takes
						the best performing Nueral Networks, and creates a
						hybrid of them, taking their features and some random to
						create a new generation. This allows the benifitial
						adaptations to continue while the negative ones die out.
					</p>
					<h2>
						What does NEAT do differently from most genetic
						algorithims?
					</h2>
					<p>
						NEAT is a uniqe type of genitic algorithim because
						rather than just alterning the weights and biases based
						on the performace, it also modifies the topology of the
						nueral network. This gives the algorithim more control,
						and prevents the software engineer from having to find
						"perfect constants" that allow the AI to preform well.{" "}
					</p>
					<h3>To see the github click below:</h3>
					<a
						target="_blank"
						href="https://github.com/DylanMashini/neat-car-game"
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
					<h3>Technologies used: </h3>
					<div dangerouslySetInnerHTML={{ __html: skillIcons }}></div>
				</div>
			</Layout>
		</div>
	);
}

export function getStaticProps() {
	return new Promise(resolve => {
		fetch("https://skillicons.dev/icons?i=py")
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
