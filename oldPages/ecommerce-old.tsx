import { useState, useEffect } from "react";
import Layout from "../components/Layout";

export default function Ecommerce() {
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
		<Layout mobile={mobile}>
			<div>
				<div
					className="project-page-content"
					id="0"
					style={{
						marginTop: "9vh",
					}}
				>
					<h1>Ecommerce Website</h1>
					<h3>
						<a
							className="clickable clickableul"
							href="https://www.dncnutrition.com/"
						>
							Here's the link to the final product
						</a>
					</h3>
					<h2>My Tech Stack</h2>
					<h4>Next.JS</h4>
					<h4>Node.js backend with nextjs api routes</h4>
					<h4>Sync with Clover POS for inventory management</h4>
					<h2>Desgin</h2>
					<h4>
						I copied{" "}
						<a
							className="clickable clickableul"
							href="https://www.xdguru.com/free-xd-ecommerce-ui-kit-by-iceo/"
						>
							this
						</a>{" "}
						design off the internet
					</h4>
					<h2>Features</h2>
					<h4>
						I added support for accounts, promo codes, newsletter
						sign up, and payment using stripe.
					</h4>
					<h2>In Progress Features</h2>
					<h4>Multi Store Sync</h4>
					<h5>
						&nbsp;&nbsp;&nbsp;&nbsp;Sync inventory between two or
						more clover stores and automatically set order to
						fulfill in store based on stock
					</h5>
					<h4>Blog with CMS for easy management</h4>
					<h4>Category filter on products page</h4>
				</div>
			</div>
		</Layout>
	);
}
