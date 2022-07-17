import { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import Layout from "../../components/Layout";
import Image from "../../components/BlogImage";

export default function LaneLines({ skillIcons }) {
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
					<h1>Lane Line Detection</h1>
					<p>
						This project was a great project to learn Python, and
						used open-cv to detect and draw lane lines on a road.
						Here is a output video from it.
					</p>
					<ReactPlayer
						url={"https://vimeo.com/689504715"}
						muted={true}
						loop={true}
						playing={true}
					/>
					<h2>It works in 6 Steps</h2>
					<h3>Step 1:</h3>
					<p>Greyscale the image with open-cv</p>
					<pre>
						<code className="language-python">
							cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)
						</code>
					</pre>
					<p>Output Image:</p>
					<Image
						src="/images/greyscale.jpg"
						width={1914}
						height={1061}
					/>
					<h3>Step 2:</h3>
					<p>
						Step two is to blur the image using the{" "}
						<a
							href="https://docs.opencv.org/2.4/modules/imgproc/doc/filtering.html?highlight=gaussianblur#gaussianblur"
							rel="noopener noreferer"
							target="_blank"
						>
							Gaussian Blur algorithm
						</a>{" "}
						We do this to prevent unnecessary noise from showing up
						when we detect the lane lines.
					</p>

					<pre>
						<code className="language-python">
							cv2.blur(greyscaled-image, (5,5))
						</code>
					</pre>
					<p>
						The (5,5) repersents the blurring kernel size, or the
						ammount to blur the image, with a higher value making
						the image more blurry.
					</p>
					<p>Output Image:</p>
					<Image
						src="/images/blurred.jpg"
						width={1914}
						height={1061}
					/>
					<h3>Step 3:</h3>
					<p>
						Detect the edges in the image using the{" "}
						<a
							href="https://docs.opencv.org/3.4/da/d22/tutorial_py_canny.html"
							rel="noopener noreferer"
							target="_blank"
						>
							Canny Edge Detection algorithm.
						</a>
						This works by looking at the differences in color
						between pixels to determine if there was a edge. If we
						didn't blur the image in the previous step, there would
						be too many edges, and it would add lots of noise to the
						output.
					</p>
					<pre>
						<code className="language-python">
							cv2.Canny(image,50,150)
						</code>
					</pre>
					<p>Output Image:</p>
					<Image
						src={"/images/edges.jpg"}
						width={1914}
						height={1061}
					/>
					<h3>Step 4:</h3>
					<p>
						Select the areas of interest (lane lines) out of the
						image using opencv. Step one is to make a blank image
						(or a mask) of the image. Next we create a polygon shape
						covering where the lane lines will be positioned looking
						from a dashcam. After that we put that polygon onto our
						mask, creating a filter to sort out our lane lines.
						Finally we can combine our mask and our original image
						to filter out only the lane lines.
					</p>
					<pre>
						<code className="language-python">
							#make the polygon to mask the lane lines rows, cols
							= image.shape[:2] bottom_left = [cols * 0.1, rows *
							0.95] top_left = [cols * 0.4, rows * 0.6]
							bottom_right = [cols * 0.9, rows * 0.95] top_right =
							[cols * 0.6, rows * 0.6] #create a numpy array of
							the polygon vertices = np.array([[bottom_left,
							top_left, top_right, bottom_right]], dtype=np.int32)
							#create a mask/filter of the polygon's shape
							cv2.fillPoly(mask, vertices) #apply the mask to the
							image masked_image = cv2.bitwise_and(image, mask)
						</code>
					</pre>
					<p>Output Image:</p>
					<Image src="/images/mask.jpg" width={1914} height={1061} />
					<p>Now we're left with just the lane lines.</p>
					<h5>Step 5:</h5>
					<p>
						Detect the lines within our masked image. To do this, we
						use the hough transform fourmula. What this does is
						returns the lines it finds within a image. The downside
						to using this strategy is that it can only detect
						straight lines within a image, so I might switch to a
						different approach in the future.
					</p>
					<pre>
						<code className="language-python">
							cv2.HoughLinesP(image)
						</code>
					</pre>
					<p>
						There isn't a output image for this because it generates
						a mathamatical repersentation of the lane lines rather
						than a image.
					</p>
					<h3>Step 6:</h3>
					<p>
						We're almost done! We need to draw the lines on the
						original image. To do this we iterate through the list
						of lines from the last step and use the cv2.line()
						function to draw the lines on the original image.
					</p>
					<pre>
						<code className="language-python">
							for line in lines:{"\n"}
							{"  "}for x1, y1, x2, y2 in line:{"\n"}
							{"      "}cv2.line(image, (x1, y1), (x2, y2),
							color,thickness)
						</code>
					</pre>
					<p>Output Image:</p>
					<Image src="/images/Final.jpg" width={1914} height={1061} />
					<p>
						There's a{" "}
						<a
							href="https://replit.com/@DylanMashini/Lane-Lines"
							rel="noopener noreferer"
							target="_blank"
						>
							Playground
						</a>{" "}
						for you to try it out below, and here's the github:
					</p>
					<a
						target="_blank"
						href="https://github.com/DylanMashini/Lane-Lines"
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
					<div style={{ marginBottom: "8vh" }}>
						<iframe
							frameBorder="0"
							width="100%"
							height="500px"
							src="https://replit.com/@DylanMashini/Lane-Lines?embed=true"
						/>
					</div>
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
