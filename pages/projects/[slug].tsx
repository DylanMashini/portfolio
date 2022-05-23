import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import fs from "fs";
import Layout from "../../components/Layout";
import { useState, useEffect } from "react";
import Image from "next/image";
import ReactPlayer from "react-player";

export default function Projects({ source }) {
	const isProd = process.env.NODE_ENV == "production";
	const [mobile, setMobile] = useState(false);
	const [width, setWidth] = useState(764);
	const [height, setHeight] = useState(440);
	const [contactOpen, setContactOpen] = useState(false);

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
	const components = {
		img: props => (
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
		Image: props => (
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
		fetch(projects.find(p => p.slug == slug)["url"])
			.then(res => res.text())
			.then(res => serialize(res))
			.then(res => {
				resolve({ props: { source: res } });
			});
	});
}
export async function getStaticPaths() {
	return new Promise((resolve, reject) => {
		const projects = require("../../projects.json")["posts"];
		console.log(projects);
		console.log(projects[0]);
		resolve({
			paths: projects.map(project => {
				return { params: { slug: project.slug } };
			}),
			fallback: false,
		});
	});
	return new Promise((resolve, reject) => {
		fs.readdir("./projects", (err, paths) => {
			resolve({
				paths: paths.map(path => {
					return { params: { slug: path.split(".")[0] } };
				}),
				fallback: false,
			});
		});
	});
}
