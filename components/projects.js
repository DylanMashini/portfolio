import "../styles/projects.module.css";
import { Card, Grid, Col, Row, Button, Text } from "@nextui-org/react";
import Router from "next/router";
export default function Projects() {
	return (
		<div
			className="scrollContainer"
			style={{
				display: "inline-block",
			}}
		>
			<Grid.Container
				gap={2}
				justify="center"
				style={{
					overflow: "hidden",
				}}
			>
				{/* Card 1 */}
				<Grid xs={12} sm={4}>
					<Card
						hoverable
						clickable
						cover
						onClick={() => {
							Router.push("/projects/neat-car-game");
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
								<Text h4 color="black">
									AI Car Game
								</Text>
							</Col>
						</Card.Header>
						<Card.Image
							src="/images/Neat.png"
							height={340}
							width="100%"
							alt="Card image background"
						/>
					</Card>
				</Grid>

				{/* Card 2 */}
				<Grid xs={12} sm={5}>
					<Card
						cover
						hoverable
						clickable
						css={{ bg: "$black", w: "100%" }}
						onClick={() => {
							Router.push("/projects/ecommerce");
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
						<Card.Image
							src="/images/Ecommerce.png"
							height={340}
							width={650}
							alt="Card image background"
						/>
					</Card>
				</Grid>
				{/* Card 3 */}
				<Grid xs={12} sm={5}>
					<Card
						cover
						hoverable
						clickable
						css={{ w: "100%" }}
						onClick={() => {
							Router.push("/projects/lane-lines");
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
						<Card.Body>
							<Card.Image
								src="/images/lane.png"
								height={400}
								width="100%"
								alt="Card example background"
							/>
						</Card.Body>
					</Card>
				</Grid>
				{/* Card 4 */}
				<Grid xs={12} sm={7}>
					<Card
						cover
						hoverable
						clickable
						css={{ w: "100%", p: 0 }}
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
									color="#9E9E9E"
								>
									Javascript
								</Text>
								<Text h3 color="white">
									Portfolio Page
								</Text>
							</Col>
						</Card.Header>
						<Card.Body>
							<Card.Image
								src="/images/Portfolio.png"
								height={400}
								width="100%"
								alt="Relaxing app background"
							/>
						</Card.Body>
					</Card>
				</Grid>
			</Grid.Container>
		</div>
	);
}
