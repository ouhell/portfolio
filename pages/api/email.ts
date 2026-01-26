import { sendMail } from "@/global/mailService";
import { NextApiRequest, NextApiResponse } from "next";
import { SendMailOptions, createTransport } from "nodemailer";
import z from "zod";

const emailTemplate = z.object({
  sender: z.string(),
  email: z.email(),
  title: z.string(),
  content: z.string(),
});

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") return POST(req, res);
  return res.status(404).send("method not supported");
}

async function POST(req: NextApiRequest, res: NextApiResponse) {
  const data = emailTemplate.parse(req.body);
  console.log("body ", data);
  const mailOptions: SendMailOptions = {
    from: {
      name: `Code Baker :: ${data.sender}`,
      address: process.env.EMAIL_USER,
    },
    to: ["hamida.oussama@outlook.com"],
    subject: "Portfolio Contact : " + data?.title,
    html: `<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        body {
            margin: 0;
            padding: 0;
            font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
            background-color: #f9f9f9;
            color: #333333;
        }
        .container {
            width: 100%;
            max-width: 600px;
            margin: 40px auto;
            background-color: #ffffff;
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 4px 10px rgba(0,0,0,0.05);
            border: 1px solid #eeeeee;
        }
        .content {
            padding: 40px;
        }
        .header {
            border-bottom: 1px solid #f0f0f0;
            margin-bottom: 30px;
            padding-bottom: 20px;
        }
        .label {
            font-size: 12px;
            text-transform: uppercase;
            letter-spacing: 1px;
            color: #999999;
            margin-bottom: 4px;
        }
        .value {
            font-size: 16px;
            font-weight: 500;
            margin-bottom: 15px;
        }
        .message-body {
            line-height: 1.6;
            font-size: 16px;
            color: #444444;
        }
        .footer {
            background-color: #fafafa;
            padding: 20px;
            text-align: center;
            font-size: 12px;
            color: #aaaaaa;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="content">
            <div class="header">
                <div class="label">Subject</div>
                <div class="value"><strong>${data.title}</strong></div>
                
                <div class="label">From</div>
                <div>${data.email}</div> 
                <div class="value">${data.sender} </div>
            </div>

            <div class="message-body">
                ${data.content}
            </div>
        </div>
        <div class="footer">
            Sent via MinimalMail
        </div>
    </div>
</body>
</html>`,
  };
  try {
    await sendMail(mailOptions);
    return res.status(200).send("email sent");
  } catch (err) {
    console.log(err);
    return res.status(500).send("failed to send email");
  }
}
