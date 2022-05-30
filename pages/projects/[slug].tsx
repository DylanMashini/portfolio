import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import fs from "fs";
import Layout from "../../components/Layout";
import { useState } from "react";
import getMobile from "../../mobile";
import Image from "next/image";
import ReactPlayer from "react-player";
import fetch from "node-fetch";

export default function Projects({ source }) {
  const [mobile, setMobile] = useState(false);
  const changeMobile = (value: boolean) => {
    setMobile(value);
  };
  getMobile(changeMobile);
  const components = {
    img: (props) => (
      <div
        style={{
          width: "50vw",
          marginLeft: "25vw",
          marginRight: "25vw",
          marginBottom: "2vh",
        }}
      >
        <Image {...props} />
      </div>
    ),
    ReactPlayer,
    Image: (props) => (
      <div
        style={{
          marginLeft: "25vw",
          marginRight: "25vw",
          marginBottom: "2vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image {...props} />
      </div>
    ),
  };
  return (
    <div
      style={{
        marginTop: "9vh",
      }}
      className="project-page"
    >
      <Layout mobile={mobile}>
        <div className="project-page-content">
          <MDXRemote {...source} components={components} />
        </div>
      </Layout>
    </div>
  );
}
export async function getStaticProps({ params }) {
  return new Promise((resolve, rejcet) => {
    const slug = params.slug;
    const projects = require("../../projects.json")["posts"];
    fetch(projects.find((p) => p.slug == slug)["url"])
      .then((res) => res.text())
      .then((res) => serialize(res))
      .then((res) => {
        resolve({ props: { source: res } });
      });
  });
}
export async function getStaticPaths() {
  return new Promise((resolve, reject) => {
    const projects = require("../../projects.json")["posts"];
    resolve({
      paths: projects.map((project) => {
        return { params: { slug: project.slug } };
      }),
      fallback: false,
    });
  });
}
