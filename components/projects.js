import "../styles/projects.module.css";
import { Card, Grid, Col, Row, Button, Text } from "@nextui-org/react";
import Router from "next/router";
import { useState, useEffect } from "react";

export default function Projects({ width }) {

	useEffect(() => {
		let observer = new IntersectionObserver(function(entries) {
			entries.forEach(entry => {
			  if (entry.isIntersecting) {
					entry.target.classList.remove("hidden");
					entry.target.classList.add("fade");
			  }
			 
			})
		});
		observer.observe(document.querySelector(".projectsTitle"));
	})
	return (
		<div
			id="projects"
			className="scrollContainer"
			style={{
				display: "inline-block",
			}}
		>
			<h1
				className="projectsTitle hidden"
				style={{
					textAlign: "center",
					marginTop: "50px",
				}}
			>
				Select Portfolio
			</h1>
			<Grid.Container
				gap={2}
				justify="center"
				style={{
					overflow: "hidden",
				}}
			>
				{/* Card 1 */}

				{/* Card 2 */}

				{/* Card 3 */}
				<Grid xs={11} sm={5}>
					<Card
						className="boids-card"
						cover
						hoverable
						clickable
						css={{
							w: "100%",
							p: 0,
							maxWidth: `${width - 7}px`,
						}}
						onClick={() => {
							window.location.href =
								"https://boids.dylanmashini.com";
						}}
					>
						<Card.Header
							css={{ position: "absolute", zIndex: 1, top: 5 }}
						>
							<Col>
								<Text
									size={12}
									weight="bold"
									transform="uppercase"
									color="black"
								>
									Javascript
								</Text>
								<Text h3 color="black">
									3D Boids
								</Text>
							</Col>
						</Card.Header>
					</Card>
				</Grid>
				<Grid xs={11} sm={5}>
					<Card
						className="lane-card"
						cover
						hoverable
						clickable
						css={{ w: "100%", maxWidth: `${width - 7}px` }}
						onClick={() => {
							Router.push("/projects/lane-lines/#0").then(() =>
								window.scrollTo(0, 0)
							);
						}}
					>
						<Card.Header
							css={{ position: "absolute", zIndex: 1, top: 5 }}
						>
							<Col>
								<Text
									size={12}
									weight="bold"
									transform="uppercase"
									color="black"
								>
									Python
								</Text>
								<Text h3 color="black">
									Lane Line Detection
								</Text>
							</Col>
						</Card.Header>
					</Card>
				</Grid>
				<Grid xs={11} sm={5}>
					<Card
						className="ecommerce-card"
						cover
						hoverable
						clickable
						css={{
							bg: "$black",
							w: "100%",
							maxWidth: `${width - 7}px`,
						}}
						onClick={() => {
							Router.push("/projects/ecommerce/#0");
						}}
					>
						<Card.Header
							css={{ position: "absolute", zIndex: 1, top: 5 }}
						>
							<Col>
								<Text
									size={12}
									weight="bold"
									transform="uppercase"
									color="black"
								>
									Javascript
								</Text>
								<Text h4 color="black">
									Ecommerce Website
								</Text>
							</Col>
						</Card.Header>
					</Card>
				</Grid>
				{/* Card 4 */}
				<Grid xs={11} sm={5}>
					<Card
						className="portfolio-card"
						cover
						hoverable
						clickable
						css={{
							w: "100%",
							p: 0,
							maxWidth: `${width - 7}px`,
						}}
						onClick={() => {
							Router.push("/projects/portfolio");
						}}
					>
						<Card.Header
							css={{ position: "absolute", zIndex: 1, top: 5 }}
						>
							<Col>
								<Text
									size={12}
									weight="bold"
									transform="uppercase"
									color="black"
								>
									Javascript
								</Text>
								<Text h3 color="black">
									Portfolio Page
								</Text>
							</Col>
						</Card.Header>
					</Card>
				</Grid>

				<Grid xs={11} sm={5}>
					<Card
						className={"neat-card"}
						hoverable
						clickable
						cover
						onClick={() => {
							Router.push("/projects/neat-car-game");
						}}
						css={{ maxWidth: `${width - 7}px` }}
					>
						<Card.Header
							css={{ position: "absolute", zIndex: 1, top: 5 }}
						>
							<Col>
								<Text
									size={12}
									weight="bold"
									transform="uppercase"
									color="black"
								>
									Python
								</Text>
								<Text h4 color="black">
									AI Car Game
								</Text>
							</Col>
						</Card.Header>
					</Card>
				</Grid>
			</Grid.Container>
		</div>
	);
}
