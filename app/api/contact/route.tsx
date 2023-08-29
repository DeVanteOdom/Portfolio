import nodemailer from "nodemailer";
import { NextRequest } from "next/server";
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true, // use SSL
  auth: {
    user: 'prodevoe@gmail.com',
    pass: process.env.EMAIL_TRANSPORT_PASSWORD
  }
});

const mailOptions = ({body, email, name}: ContactEmailRequest) => ({
  from: 'prodevoe@gmail.com',
  to: "prodevoe@gmail.com",
  subject: `Portfolio Message${name ? ` from ${name}!!!` : "!!!"}`,
  html: `
      <!DOCTYPE html>

      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Portfolio Message!!!</title>
        </head>

        <body>
          <main>${body}</main>
          <hr/>
          ${email ? `Email: ${email}` : ""}            
        </body>
      </html>
        `,
});

type ContactEmailRequest = {body: string, email: string, name: string}


export async function POST(request: Request | NextRequest) {
  try {
    
    const body = await request.json() as ContactEmailRequest;

    await transporter.sendMail(mailOptions(body))


    return new Response("Email Sent", {
      status: 200,
    });
  } catch (e) {
    return new Response(JSON.stringify(e.message), {
      status: 400
    })
  }

}
