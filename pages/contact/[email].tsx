import Navbar from "../../components/Navbar"
import {useState, useEffect} from "react";
import { Button, Input, Textarea } from '@nextui-org/react';
import {useRouter} from 'next/router'
import server from "../../server";

export default function Contact({email}) {
	const router = useRouter()
    const isProd = process.env.NODE_ENV == "production";
	const [emailValue, setEmailValue] = useState(String(email) || '');
	const [mobile, setMobile] = useState(false);
	const [width, setWidth] = useState(764);
	const [height, setHeight] = useState(440);
	const [contactOpen, setContactOpen] = useState(false);
	const [inputColor, setInputColor] = useState(false)
	const [helperText, setHelperText] = useState('')
	const [formText, setFormText] = useState('')
	const [formHelperText, setFormHelperText] = useState('')
	const [formColor, setFormColor] = useState(false)
	const validateEmail = (input) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        return re.test(input)
    }
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
        <div className={"contact-page"}>
            <Navbar mobile={mobile} />
			<div className={"contact-page-content"}>
				<div className="contact-page-content-inner">
				<h1>
					Contact Me
				</h1>
					<Input labelPlaceholder="Email" value={emailValue} color={inputColor ? "error" : "default"} helperText={helperText} onChange={e => {
						setEmailValue(e.target.value)
						setInputColor(false)
						
					}} css={{
						marginTop: "2vh",
						width: "40vw"
					}}  />
					<div style={{
						marginTop:"10vh"
					}}>
						<Textarea labelPlaceholder="Bordered Textarea" helperText={formHelperText} color={formColor ? "error" : "default"} minRows={10} value={formText} css={{width:"40vw"}} onChange={(e) => {
							setFormText(e.target.value)
							setFormColor(false)
						}} />
					</div>
					<div style={{
						marginTop:"6vh",
						textAlign: "center",
						display: "flex",
						justifyContent: "center",
						alignItems: "center"
					}}>
						<Button onClick={() => {
							if (formText == '') {
								setFormColor(true)
								setFormHelperText('Please enter a message')
							}
							if (validateEmail(emailValue)) {
								if (formText != '') {
									fetch(`${server}/api/contact`, {
										method: "POST",
										headers: {
											"Content-Type": "application/json"
										},
										body: JSON.stringify({email: emailValue, message: formText})
									}).then(() => {
										router.push('/')
									})
								}
							} else {
								setInputColor(true)
								setHelperText('Please enter a valid email')
							}
						}}>
							Submit
						</Button>
					</div>
				</div>
			</div>

        </div>
    )
}

export function getServerSideProps(context) {
	const email = context.query.email;
	return {
		props: {
			email
		}
	}
}