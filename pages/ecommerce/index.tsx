import {useState, useEffect} from "react";
import Navbar from "../../components/Navbar";
import DownArrow from "../../components/shapes/downArrow";
import EcommerceProjects from "../../components/EcommerceProjects";
import Contact from "../../components/Contact";
export default function Ecommerce() {
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
    return(
        <div>
            <Navbar mobile={mobile} />
            <div
					className="glass"
					style={{
						position: "absolute",
						top: "50%",
						left: "50%",
						transform: "translate(-50%, -45%)",
						height: "80vh",
						width: "90%",
						borderRadius: "20px",
						background:
							"linear-gradient(116.53deg, rgba(255, 255, 255, 0.49) -0.86%, rgba(255, 255, 255, 0.07) 100%)",
						backdropFilter: "blur(30px)",
					}}
				>
					<div
						style={{
							// position: "relative",
							margin: "0",
							position: "absolute",
							top: "50%",
							left: "50%",
							transform: "translate(-50%, -50%)",
							textAlign: "center",
						}}
						
					>
						<h1 className="fade">Hi, I'm Dylan</h1>
						<h3 className="fade4">
                        I make ecommerce websites for small buisnesses.
						</h3>
					</div>
					<div className={"down-arrow fade"}>
						<h3>Scroll Down to see more</h3>
						<DownArrow link={"/ecommerce/#content"}/>
					</div>
                    <div className="projects">
                        
                    </div>
				</div>
                <div className="projects ecommerce-projects" id={"content"}>
                    <EcommerceProjects width={width} />
                </div>
                <div className={"bio"}>
					{/* <Bio /> */}
					<Contact />
				</div>
        </div>
    )
}