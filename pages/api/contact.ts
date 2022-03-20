import type { NextApiRequest, NextApiResponse } from 'next'

export default async function Contact(req:NextApiRequest, res:NextApiResponse) {
    console.log("here")
    if (req.method != "POST") {
        res.status(405).end("Method not allowed");
        return;
    }
    const email = req.body.email;
    const message = req.body.message;
    console.log(email)
}  