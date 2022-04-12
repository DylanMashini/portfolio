import type { NextApiRequest, NextApiResponse } from 'next'

export default async function Contact(req:NextApiRequest, res:NextApiResponse) {
    console.log("here")
    if (req.method != "POST") {
        console.error("bad method")
        res.status(405).end("Method not allowed");
        return;
    }
    const email = req.body.email;
    const message = req.body.message;
    const sgMail = require('@sendgrid/mail')
    sgMail.setApiKey(process.env.SENDGRID_API_KEY)
    const msg = {
    to: "dylanmashini123@gmail.com", // Change to your recipient
    from: 'dylan@dylanmashini.com', // Change to your verified sender
    subject: `Message from ${email}`,
    text: 'Message sent from dylanmashini.com',
    html: message,
    }
    sgMail.send(msg)
    .then(() => {
        console.log('Email sent')
        res.status(200).json({
        message: "success"
    })
    })
    .catch((error) => {
        console.error(error)
        res.status(200).json({error: error})
    })
    
}  