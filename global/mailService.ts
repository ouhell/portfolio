import { createTransport, SendMailOptions } from "nodemailer";
export const transporter = createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  port: 587,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

export async function sendMail(options: SendMailOptions) {
  await transporter.sendMail(options);
}
