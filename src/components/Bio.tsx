import { useEffect, useState } from "preact/compat";

export default function Bio({ mobile }) {
	useEffect(() => {
		let observer = new IntersectionObserver(function (entries) {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					entry.target.classList.remove("hidden");
					entry.target.classList.add("fade");
				}
			});
		});
		observer.observe(document.querySelector("#about h1"));
	});

	return (
		<>
			<h1
				style={{
					textAlign: "center",
				}}
				className="hidden"
			>
				About Me
			</h1>
			<p>
				I have been programming for 4 years, and have lots of experience
				in python and javascript. I enjoy programming and mountain
				biking in my free time. I also am the Co-President of the Pope
				High School Robotics Team, and do public fourm debate.
			</p>
		</>
	);
}
