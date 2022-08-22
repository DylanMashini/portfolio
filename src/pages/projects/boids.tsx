import Navbar from "../../components/Navbar";
import { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import Image from "next/image";
import Layout from "../../components/Layout";

export default function Boids({ skillIcons }) {
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
					<h1>3D Boids Using Rust and THREE.JS</h1>
					<a
						href="https://boids.dylanmashini.com"
						target="_blank"
						rel="noopener noreferer"
					>
						<h3>Click Here for the project</h3>
					</a>
					<h2>Introduction</h2>
					<p>
						Boids is a natural life simulation of the behavior of
						boids (birds) in flocks. It was first developed by Craig
						Reynolds in 1986, and was initially implemented in 2D
						space, but works in 3D space. It's often used to
						simulate motion of birds or even aquatic life in video
						games and animations.
					</p>
					<h2>Boid Rules</h2>
					<p>
						The Boids Simulation uses three simple rules to
						determine the behavior of the boids, these rules apply
						to a boid based on all the other boids in it's
						neighborhood. The neighborhood is a sphere around the
						boid that is where it can see other boids. In all the
						pictures the grey area refers to the neighborhood.
					</p>
					<h3>Separation</h3>
					<p>
						The seperation rule is probably the most simple, and its
						primary function is to prevent colision between boids.
						Note that this rule does not disallow collisions, it
						just applies a force on each boid steering it away from
						other boids.
					</p>
					<figure
						style={{
							width: "100%",
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							flexDirection: "column",
						}}
					>
						<Image
							src="/separation.jpeg"
							width="217"
							height="145"
						/>
						<figcaption>
							<b>
								<a
									href="https://cs.stanford.edu/people/eroberts/courses/soco/projects/2008-09/modeling-natural-systems/boids.html"
									target="_blank"
									rel="noopener noreferer"
								>
									Picture by Timm Wong at Stanford CS
								</a>
							</b>
						</figcaption>
					</figure>
					<h3>Alignment</h3>
					<p>
						The Purpose of the Alignment rule is to make all the
						boids within a boid's neighborhood have similar
						headings. This makes it to where all the boids are going
						in a similar direction, creating flocks that appear to
						have planned movements.
					</p>
					<figure
						style={{
							width: "100%",
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							flexDirection: "column",
						}}
					>
						<Image src="/alignment.jpeg" width="217" height="145" />
						<figcaption
							style={{
								marginLeft: "25vw",
								marginRight: "25vw",
							}}
						>
							<b>
								<a
									href="https://cs.stanford.edu/people/eroberts/courses/soco/projects/2008-09/modeling-natural-systems/boids.html"
									target="_blank"
									rel="noopener noreferer"
								>
									Picture by Timm Wong at Stanford CS
								</a>
							</b>
						</figcaption>
					</figure>
					<h3>Cohesion</h3>
					<p>
						This rule makes the boids go towards the "center of
						gravity" of their neighborhood. This creates cohesive
						flocks, but if the boids get too close, they won't
						continue towards the center of gravity due to the
						seperation rule mentioned above.
					</p>
					<figure
						style={{
							width: "100%",
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							flexDirection: "column",
						}}
					>
						<Image src="/cohesion.jpeg" width="217" height="145" />
						<figcaption
							style={{
								marginLeft: "25vw",
								marginRight: "25vw",
							}}
						>
							<b>
								<a
									href="https://cs.stanford.edu/people/eroberts/courses/soco/projects/2008-09/modeling-natural-systems/boids.html"
									target="_blank"
									rel="noopener noreferer"
								>
									Picture by Timm Wong at Stanford CS
								</a>
							</b>
						</figcaption>
					</figure>
					<h2>Why Rust?</h2>
					<p>
						Rust is a fast language, thats (relatively) easy to use
						with wasm. I originally wrote the whole thing in
						TypeScript, but I wasn't getting good performace, so I
						switched to Rust. Rust is also the fastest memory safe
						language that I know of, allowing for efficient and
						correct code.
					</p>
					<h2>How does THREE.JS work with Rust</h2>
					<p>
						To get THREE.js to work with rust, I kept all the
						rendering in the main thread of Javascript, but all of
						the calculations for the position of the Birds is done
						in a Web Worker using Wasm. To keep my calculations
						simple, I rewrote part of the THREEJS Vector3 Class in
						Rust.
					</p>
					<h2>
						Data Synchronization between Web Workers and Main thread
					</h2>
					<p>
						For Data Synchronization between the webworkers and the
						main thread, I used a SharedArrayBuffer, rather than
						using the postMessage() Method because with postMessage,
						a copy of the data is made each time it moves between
						threads, causing a dramtic slowdown. SharedArrayBuffer
						actually shares a space in memory between the threads,
						to where the threads are reading and writing to the same
						place. The sharedArrayBuffer used the Float64Array
						TypedArray, and had 9 floats for each boid (posX, posY,
						posZ, velX, velY, velZ, homeX, HomeY, homeZ).
					</p>
					<h2>Different Versions</h2>
					<p>Here's all the versions of the project I've made.</p>
					<br />
					<a
						target="_blank"
						rel="noopener noreferer"
						href="https://boids.dylanmashini.com"
					>
						Rust/wasm multithreaded
					</a>
					<br />
					<a
						target="_blank"
						rel="noopener noreferer"
						href="https://boids.dylanmashini.com/no-workers"
					>
						Rust/wasm singlethreaded
					</a>
					<br />
					<a
						target="_blank"
						rel="noopener noreferer"
						href="https://boids.dylanmashini.com/js-only"
					>
						TypeScript singlethreaded
					</a>
					<br />
					<h2>Github Repo</h2>
					<a
						target="_blank"
						href="https://github.com/DylanMashini/boids"
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
		fetch("https://skillicons.dev/icons?i=rust,ts,wasm,webpack")
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
