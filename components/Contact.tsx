import { Input, Button, Textarea} from '@nextui-org/react';
import Router from 'next/router';
import {useState} from 'react';
import server from '../server';
export default function Contact() {
    type color = 'primary' | 'secondary' | 'success' | 'warning' | 'default' | 'error' | 'gradient' | 'primary' | 'secondary' | 'success' | 'warning' | 'default' | 'error' | 'gradient';
    const [email, setEmail] = useState('');
    const [formColor, setFormColor] = useState(false);
    const [helperText, setHelperText] = useState('');
    const [fullSize, setFullSize] = useState(false);
    const [showElements, setShowElements] = useState(false);
    const [emailValue, setEmailValue] = useState(String(email) || '');
    const [mobile, setMobile] = useState(false);
    const [width, setWidth] = useState(764);
    const [height, setHeight] = useState(440);
    const [contactOpen, setContactOpen] = useState(false);
    const [inputColor, setInputColor] = useState(false)
    const [helperText2, setHelperText2] = useState('')
    const [formText, setFormText] = useState('')
    const [formHelperText, setFormHelperText] = useState('')
    const [formColor2, setFormColor2] = useState(false)
    const [buttonColor, setButtonColor] = useState<color>("default")

    const validateEmail = (input) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        return re.test(input)
    }
    const submitButton = async () => {

        setButtonColor("success");
        setTimeout(() => {
            setButtonColor("default");
        }, 2500)
    }
    return(
        <div style={{textAlign: 'center'}}>
            <h1>Contact Me</h1>
            <div id="contact" className={"contactWrapper"}>
                <div className={fullSize ? "contact full" : "contact"}>
                    <div>
                    <h3>Contact Me</h3>
                    
                    <Input bordered labelPlaceholder="Email" color={formColor ? "error" : "default"} helperText={helperText} css={{
                        marginTop: "10%",
                        marginBottom: "10%"

                    }} width={"300px"} value={email} onChange={e => {
                        setEmail(e.target.value)
                        setFormColor(false)
                        if (!showElements) {
                            setFullSize(true)
                            setTimeout(() => {
                                setShowElements(true)
                                Router.push("/#contact")
                                
                            }, 280)}
                    }}/>
                    {showElements ? <div>
                        
					<div style={{
						marginTop:"0vh"
					}}>
						<Textarea bordered labelPlaceholder="Message" helperText={formHelperText} color={formColor2 ? "error" : "default"} minRows={10} value={formText} css={{ marginTop: "3vh"}} onChange={(e) => {
							setFormText(e.target.value)
							setFormColor2(false)
						}} />
					</div>
                    </div> : null}
                    <div style={{
                        width:"100%",
                        display:"flex",
                        justifyContent:"center",
                        alignContent:"center",
                    }}>
                    <Button color={buttonColor} style={{width: "20vw", marginTop: "3vh"}} onClick={() => {
                        if (formText == '') {
                            setFormHelperText("Please enter a message")
                            setFormColor2(true)
                        }
                        if (validateEmail(email)) {
                            if (formText != '') {
                                //call api
                                fetch(`${server}/api/contact`, {
                                    method: 'POST',
                                    headers: {
                                        'Content-Type': 'application/json'
                                    },
                                    body: JSON.stringify({email:email, message:formText})
                                
                                })
                                setFullSize(false)
                                setShowElements(false)
                                setEmail('')
                                setFormText('')
                                setHelperText('')
                                setHelperText2('')
                                submitButton();
                            }
                            
                        } else {
                            setFormColor(true)
                            setHelperText('Please enter a valid email')
                        }
                        
                        
                    }}>{(buttonColor == "default") ? "Continue" : "Message Sent"}</Button>
                    </div>
                    
                    </div>

                </div>
            </div>
        </div>
    )
}