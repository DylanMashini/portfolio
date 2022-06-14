import Navbar from "./Navbar";
import Footer from "./Footer";
import Head from "next/head";

export default function Layout({
	mobile,
	children,
	title = "Dylan Mashini's Portfolio",
}) {
	return (
		<div
			style={{
				position: "relative",
				minHeight: "100vh",
			}}
		>
			<Head>
				<title>{title}</title>
			</Head>
			<div className={`wrapper ${mobile ? "mobile" : ""}`}>
				<Navbar mobile={mobile} />
				{children}
			</div>

			<Footer mobile={mobile} />
		</div>
	);
}
