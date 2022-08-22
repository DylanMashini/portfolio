import Layout from "../../components/Layout";
import { useState, useEffect } from "preact/compat";
import ProjectContent from "../../components/projects";
import getMobile from "../../mobile";

export default function Projects() {
	const isProd = process.env.NODE_ENV == "production";
	const [mobile, setMobile] = useState(false);
	const [width, setWidth] = useState(764);
	const changeMobile = (value: boolean) => {
		setMobile(value);
	};
	const changeWidth = (value: number) => {
		setWidth(value);
	};

	getMobile(changeMobile, changeWidth);
	return (
		<Layout mobile={mobile}>
			<div
				style={{
					marginTop: "9vh",
					marginBottom: "9vh",
				}}
			>
				<ProjectContent
					width={(width - 0.2 * width) / 2}
				></ProjectContent>
			</div>
		</Layout>
	);
}
