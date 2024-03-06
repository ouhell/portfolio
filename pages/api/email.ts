import { createMessage, sendMail } from "@/global/mailService";
import { NextApiRequest, NextApiResponse } from "next";
import { SendMailOptions, createTransport } from "nodemailer";
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") return POST(req, res);
  return res.status(404).send("method not supported");
}

async function POST(req: NextApiRequest, res: NextApiResponse) {
  const data = req.body;
  const mailOptions: SendMailOptions = {
    from: {
      name: `Code Baker :: ${data?.sender}`,
      address: process.env.EMAIL_USER,
    },
    to: [process.env.EMAIL_RECEIVER],
    subject: "Portfolio Contact : " + data?.subject,
    html:
      createMessage(data?.content) + `<h2> email : ${data?.senderEmail}</h2>`,
  };
  try {
    await sendMail(mailOptions);
    return res.status(200).send("email sent");
  } catch (err) {
    return res.status(500).send("failed to send email");
  }
}
