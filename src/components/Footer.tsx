import Carbonbadge from "react-carbonbadge";

export default function Footer({ mobile }: { mobile: boolean }) {
	return (
		<div className="footer">
			<div
				style={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					width: "100vw",
					height: !mobile ? "4.5rem" : "7rem",
					flexDirection: "row",
				}}
			>
				<h5
					style={{
						marginBottom: "1.5em",
						marginRight: "1em",
					}}
				>
					This site is <a href="/sustainability">made sustainibly</a>{" "}
				</h5>
				<Carbonbadge />
			</div>
		</div>
	);
}
