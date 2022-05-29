import "../styles/projects.module.css";
import { Card, Grid, Col, Row, Button, Text } from "@nextui-org/react";
import Router from "next/router";
import { useEffect } from "react";
import ProjectCard from "./projectCard";

export default function Projects({ width }) {
  useEffect(() => {
    let observer = new IntersectionObserver(function (entries) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove("hidden");
          entry.target.classList.add("fade");
        }
      });
    });
    observer.observe(document.querySelector(".projectsTitle"));
  });
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
        <ProjectCard
          imageClassName="boids-card"
          width={width}
          tech={"Rust"}
          project={"3D Boids"}
          href="/projects/boids"
        />
        <ProjectCard
          imageClassName="lane-card"
          width={width}
          tech="Python"
          project={"Lane Line Detection"}
          href="/projects/lane-lines"
        />
        <ProjectCard
          imageClassName={"ecommerce-card"}
          width={width}
          tech="javascript"
          project="Ecommerce Website"
          href="projects/ecommerce"
        />
        <ProjectCard
          imageClassName={"portfolio-card"}
          width={width}
          tech={"javascript"}
          project="Portfolio Page"
          href="/projects/portfolio"
        />
        <ProjectCard
          imageClassName={"neat-card"}
          width={width}
          tech="python"
          project="AI Car Game"
          href="/projects/neat-car-game"
        />
        {/* Card 4 */}
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
            <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
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
