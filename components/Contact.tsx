import { Input, Button, Textarea } from "@nextui-org/react";
import Router from "next/router";
import { useState } from "preact/compat";
import server from "../server";
export default function Contact({ mobile }: { mobile: boolean }) {
	type color =
		| "primary"
		| "secondary"
		| "success"
		| "warning"
		| "default"
		| "error"
		| "gradient"
		| "primary"
		| "secondary"
		| "success"
		| "warning"
		| "default"
		| "error"
		| "gradient";
	const [email, setEmail] = useState("");
	const [formColor, setFormColor] = useState(false);
	const [helperText, setHelperText] = useState("");
	const [fullSize, setFullSize] = useState(false);
	const [showElements, setShowElements] = useState(false);
	const [helperText2, setHelperText2] = useState("");
	const [formText, setFormText] = useState("");
	const [formHelperText, setFormHelperText] = useState("");
	const [formColor2, setFormColor2] = useState(false);
	const [buttonColor, setButtonColor] = useState<color>("default");
	const formWidth = mobile ? "200px" : "300px";
	const validateEmail = input => {
		const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		return re.test(input);
	};
	const submitButton = async () => {
		setButtonColor("success");
		setTimeout(() => {
			setButtonColor("default");
		}, 2500);
	};
	return (
		<div style={{ textAlign: "center" }}>
			<h1>Contact Me</h1>
			<div id="contact" className={"contactWrapper"}>
				<div className={fullSize ? "contact full" : "contact"}>
					<div>
						<h3>Contact Me</h3>
						<div style={{ width: formWidth }}>
							<Input
								bordered
								labelPlaceholder="Email"
								color={formColor ? "error" : "default"}
								helperText={helperText}
								css={{
									marginTop: "10%",
									marginBottom: "10%",
								}}
								fullWidth
								// width={formWidth}
								value={email}
								onChange={e => {
									setEmail(e.target.value);
									setFormColor(false);
									if (!showElements) {
										setFullSize(true);
										setTimeout(() => {
											setShowElements(true);
											Router.push("/#contact");
										}, 280);
									}
								}}
							/>
							{showElements ? (
								<Textarea
									fullWidth
									bordered
									labelPlaceholder="Message"
									helperText={formHelperText}
									color={formColor2 ? "error" : "default"}
									minRows={10}
									value={formText}
									css={{ marginTop: "3vh" }}
									onChange={e => {
										setFormText(e.target.value);
										setFormColor2(false);
									}}
								/>
							) : null}
						</div>
						<div
							style={{
								width: "100%",
								display: "flex",
								justifyContent: "center",
								alignContent: "center",
							}}
						>
							{/* @ts-ignore */}
							<Button
								color={buttonColor}
								style={{ width: "20vw", marginTop: "3vh" }}
								onClick={() => {
									if (formText == "") {
										setFormHelperText(
											"Please enter a message"
										);
										setFormColor2(true);
									}
									if (validateEmail(email)) {
										if (formText != "") {
											//call api
											console.log(
												"fetching from" +
													`${server}/api/contact/`
											);
											fetch(`${server}/api/contact`, {
												method: "POST",
												headers: {
													"Content-Type":
														"application/json",
												},
												body: JSON.stringify({
													email: email,
													message: formText,
												}),
											});
											setFullSize(false);
											setShowElements(false);
											setEmail("");
											setFormText("");
											setHelperText("");
											setHelperText2("");
											submitButton();
										}
									} else {
										setFormColor(true);
										setHelperText(
											"Please enter a valid email"
										);
									}
								}}
							>
								{buttonColor == "default"
									? "Continue"
									: "Message Sent"}
							</Button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
