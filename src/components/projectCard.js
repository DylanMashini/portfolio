import { Card, Grid, Col, Row, Button, Text } from "@nextui-org/react";
import { useRouter } from "next/router";
import { useEffect } from "preact/compat";

export default function ProjectCard({
	imageClassName,
	width,
	tech,
	project,
	href,
}) {
	const router = useRouter();
	useEffect(() => {
		router.prefetch(href);
	});

	return (
		<div>
			<Grid xs={11} sm={5}>
				<Card
					className={imageClassName}
					cover
					hoverable
					clickable
					css={{
						w: "100%",
						p: 0,
						// maxWidth: `${width - 7}px`,
						maxWidth: "90vw",
					}}
					onClick={() => {
						router.push(href);
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
								{tech}
							</Text>
							<Text h3 color="black">
								{project}
							</Text>
						</Col>
					</Card.Header>
				</Card>
			</Grid>
		</div>
	);
}
