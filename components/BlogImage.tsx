import NextImage from "next/image";

export default function Image(props) {
	return (
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
			<NextImage {...props} />
		</div>
	);
}
