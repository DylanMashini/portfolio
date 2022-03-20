import { Grid, Switch, useTheme } from "@nextui-org/react";
import Link from "next/link";
import { useTheme as useNextTheme } from "next-themes";
import Moon from "./shapes/Moon";
import Sun from "./shapes/Sun";
import { useState } from "react";
import styled from "styled-components";

export default function Navbar({ mobile }) {
	const { isDark, type } = useTheme();
	const { setTheme } = useNextTheme();
	const [open, setOpen] = useState(false);

	if (mobile) {
		const StyledMenu = styled.nav`
			display: flex;
			flex-direction: column;
			justify-content: center;
			background: #effffa;
			transform: ${({ open }) =>
				open ? "translateX(0)" : "translateX(-100%)"};
			height: 100vh;
			text-align: left;
			padding: 2rem;
			position: absolute;
			top: 0;
			left: 0;
			transition: transform 0.3s ease-in-out;

			@media (max-width: 576px) {
				width: 100%;
			}

			a {
				font-size: 2rem;
				text-transform: uppercase;
				padding: 2rem 0;
				font-weight: bold;
				letter-spacing: 0.5rem;
				color: #0d0c1d;
				text-decoration: none;
				transition: color 0.3s linear;

				@media (max-width: 576px) {
					font-size: 1.5rem;
					text-align: center;
				}

				&:hover {
					color: #343078;
				}
			}
		`;

		const Menu = ({ open }) => {
			return (
				<StyledMenu open={open}>
					<Link href="/">
						<a>Home</a>
					</Link>
					<Link href="/#Projects">
						<a>Projects</a>
					</Link>
					<Link href="/#about">
						<a>About Me</a>
					</Link>
					<Link href="/#contact">
						<a>Contact Me</a>
					</Link>
				</StyledMenu>
			);
		};

		const StyledBurger = styled.button`
			position: absolute;
			top: 30%;
			left: 2rem;
			display: flex;
			flex-direction: column;
			justify-content: space-around;
			width: 2rem;
			height: 2rem;
			background: transparent;
			border: none;
			cursor: pointer;
			padding: 0;
			z-index: 10;

			&:focus {
				outline: none;
			}

			div {
				width: 2rem;
				height: 0.25rem;
				background: ${({ open }) => (open ? "#0D0C1D" : "#EFFFFA")};
				border-radius: 10px;
				transition: all 0.3s linear;
				position: relative;
				transform-origin: 1px;

				:first-child {
					transform: ${({ open }) =>
						open ? "rotate(45deg)" : "rotate(0)"};
				}

				:nth-child(2) {
					opacity: ${({ open }) => (open ? "0" : "1")};
					transform: ${({ open }) =>
						open ? "translateX(20px)" : "translateX(0)"};
				}

				:nth-child(3) {
					transform: ${({ open }) =>
						open ? "rotate(-45deg)" : "rotate(0)"};
				}
			}
		`;

		const Burger = ({ open, setOpen }) => {
			return (
				<div>
					<StyledBurger open={open} onClick={() => setOpen(!open)}>
						<div />
						<div />
						<div />
					</StyledBurger>
					<span
						style={{
							display: "inline-block",
							width: "30vh",
							position: "fixed",
							right: "0px",
							top: "2.5vh",
						}}
					>
						<a
							target="_blank"
							href="https://www.instagram.com/dylanmashini/"
							rel="noopener noreferrer"
						>
							{" "}
							<i
								className="bx bxl-instagram clickable"
								style={{
									fontSize: "30px",
									marginRight: "20px",
								}}
							></i>
						</a>
						<a
							target="_blank"
							href="https://github.com/DylanMashini"
							rel="noopener noreferrer"
						>
							<i
								className="bx bxl-github clickable"
								style={{
									fontSize: "30px",
									marginRight: "20px",
								}}
							/>
						</a>
						<Switch
							css={{
								marginRight: "30px",
							}}
							checked={isDark}
							size="sm"
							iconOn={<Moon filled />}
							iconOff={<Sun />}
							onChange={() => {
								setTheme(type === "light" ? "dark" : "light");
							}}
						></Switch>
					</span>
				</div>
			);
		};

		return (
			<div
				className={isDark ? "navbar" : "navbar-light"}
				style={{
					justifyContent: "left",
					alignItems: "left",
				}}
			>
				<Grid.Container>
					<Burger open={open} setOpen={setOpen} />
				</Grid.Container>
				<Menu open={open}></Menu>
			</div>
		);
	}
	return (
		<div className={isDark ? "navbar" : "navbar-light"}>
			<Grid.Container justify="left">
				<Grid>
					<Link href="/">
						<h3 className="nav-item">Home</h3>
					</Link>
				</Grid>
				<Grid>
					<Link href="/#projects">
						<h3 className="nav-item">Projects</h3>
					</Link>
				</Grid>
				<Grid>
					<Link href="/#about">
						<h3 className="nav-item">About Me</h3>
					</Link>
				</Grid>
				<Grid>
					<Link href="/#contact">
						<h3 className="nav-item">Contact Me</h3>
					</Link>
				</Grid>
			</Grid.Container>
			<span
				style={{
					display: "inline-block",
					width: "30vh",
				}}
			>
				<a
					target="_blank"
					href="https://www.instagram.com/dylanmashini/"
					rel="noopener noreferrer"
				>
					{" "}
					<i
						className="bx bxl-instagram clickable"
						style={{
							fontSize: "30px",
							marginRight: "20px",
						}}
					></i>
				</a>
				<a
					target="_blank"
					href="https://github.com/DylanMashini"
					rel="noopener noreferrer"
				>
					<i
						className="bx bxl-github clickable"
						style={{
							fontSize: "30px",
							marginRight: "20px",
						}}
					/>
				</a>
				<Switch
					css={{
						marginRight: "30px",
					}}
					checked={isDark}
					size="sm"
					iconOn={<Moon filled />}
					iconOff={<Sun />}
					onChange={() => {
						setTheme(type === "light" ? "dark" : "light");
					}}
				></Switch>
			</span>
		</div>
	);
}
