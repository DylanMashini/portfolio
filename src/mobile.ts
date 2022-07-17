import { useState, useEffect } from "preact/compat";

export default function useMobile(
	setMobile,
	setParentWidth?,
	setParentHeight?
) {
	const isProd = process.env.NODE_ENV == "production";
	const [width, setWidth] = useState(764);
	const [height, setHeight] = useState(440);

	const getMobile = () => {
		setWidth(window.innerWidth);
		setHeight(window.innerHeight);
		if (setParentWidth) {
			setParentWidth(width);
		}
		if (setParentHeight) {
			setParentHeight(height);
		}
		if (window.innerWidth < 905) {
			setMobile(true);
		} else {
			setMobile(false);
		}
	};
	useEffect(() => {
		getMobile();
	});
}
