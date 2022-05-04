import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ mobile, children }) {
	return (
		<div
			style={{
				position: "relative",
				minHeight: "100vh",
			}}
		>
			<div className="wrapper">
				<Navbar mobile={mobile} />
				{children}
			</div>

			<Footer />
		</div>
	);
}
