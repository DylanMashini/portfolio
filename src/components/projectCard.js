import { Card, Grid, Col, Row, Button, Text } from "@nextui-org/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "preact/compat";
import styles from "../styles/projects.module.css";

export default function ProjectCard({
  imageClassName,
  width,
  tech,
  project,
  href,
}) {
  const [webp, setWebp] = useState(true);
  const router = useRouter();
  useEffect(() => {
    if (!href.includes("http")) {
      router.prefetch(href);
    }
    if (window.document.body.className.includes("no-webp")) setWebp(false);
  }, []);

  return (
    <div>
      <Grid xs={11} sm={5}>
        <Card
          className={`${styles[imageClassName]} ${
            webp ? styles["webp"] : styles["no-webp"]
          }`}
          cover
          hoverable
          clickable
          css={{
            w: "100%",
            p: 0,
            minWidth: `${width - 7 / 2}px`,
            maxWidth: "90vw",
          }}
          onClick={() => {
            router.push(href);
          }}
        >
          <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
            <Col>
              <Text size={12} weight="bold" transform="uppercase" color="black">
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
