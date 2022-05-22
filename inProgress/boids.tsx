import Navbar from "../components/Navbar";
import { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import Image from "next/image";
import Layout from "../components/Layout";

export default function Boids() {
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
			<Layout mobile={mobile}>
				<div
					className="project-page-content"
					style={{
						marginTop: "9vh",
					}}
				>
					<h1>3D Boids</h1>
					<a
						href="https://boids.dylanmashini.com"
						target="_blank"
						rel="noopener noreferer"
					>
						<h3>Click Here to see a live demo</h3>
					</a>
					<p>
						This is a 3D version of Craig Reynolds' flocking
						simulation, invented in 1986. It simulates the behavior
						of birds with three simple rules. I originally wrote it
						in Typescript, but that was too slow, so I rewrote it in
						rust and compiled it into wasm.{" "}
					</p>
					<a
						href="https://boids.dylanmashini.com/js-only"
						target="_blank"
						rel="noopener noreferer"
					>
						<h3>Here's a demo of the javascript only version</h3>
					</a>
					<h2>Separation</h2>
					<p>
						The seperation rule is probably the most simple, and its
						primary function is to prevent colision. Note that this
						rule does not disallow collisions, it just applies a
						force on each boid steering it away from other boids.
					</p>
					<h3
						style={{
							marginLeft: "1em",
						}}
					>
						How it works?
					</h3>
					<p>
						All the rules use a Vector3 sum to apply a force to the
						boid. The Vector3 is coppied from three.js, and I just
						rewrote the nececary methods in Rust. This rule adds all
						boids within it's vision to a seperation_sum value, and
						increments a count each time it adds a value to the sum.
						Next, the sum is divided by the count, and the length is
						set to the maxSpeed. This is then added to the boids
						acceleration. This happens for each boid every animation
						frame.
					</p>
					{/* <h3>The Code</h3>
					<pre>
						<code className="language-rust">
							let mut seperation_sum = Vector3::new(0.0, 0.0,0.0);
							{"\n"}
							let mut seperation_count = 0.0;
							{"\n"}
							//occurs inside nested for loop of boids {`\n`}
							let mut vec_dir = Vector3::new(0.0, 0.0, 0.0);
							{"\n"}
							vec_dir.sub_vectors(&boid_vector, &boid2_vector);
							//gets direction that boid2 is going relative to
							boid1
							{"\n"}
							vec_dir.normalize();
							{"\n"}
							vec_dir.divide_scalar(distance);
							{"\n"}
							seperation_sum.add(&vec_dir); {"\n"}
							seperation_count += 1.0;
						</code>
					</pre> */}
					<h2>Alignment</h2>
					<p>
						The Purpose of the Alignment rule is to make all the
						boids in a region have a simaler heading, making them go
						in a simaler direction.{" "}
					</p>
					<h3
						style={{
							marginLeft: "1em",
						}}
					>
						How it works?
					</h3>
					<p>
						Much like the seperation rule, this uses a Vector3 sum,
						but instead of the boid's position, it adds the boid's
						velocity to steer all the boids in a simaler direction
					</p>
					<h2>Cohesion</h2>
					<p>
						This is arguably the most important rule, as it dictates
						the clumping and cohesive behavior of the boids. This
						rule works by directing a boid towards the "center of
						gravity" of all the other boids in it's neighborhood.
					</p>
				</div>
			</Layout>
		</div>
	);
}
