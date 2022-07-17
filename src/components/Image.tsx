import Image from "next/image";
export default function Named(props) {
	return (
		<div className="blogImage">
			<Image {...props} layout="fill" object-fit="contain" />
		</div>
	);
}
