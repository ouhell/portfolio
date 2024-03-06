import { createTransport, SendMailOptions } from "nodemailer";
export const transporter = createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

export const createMessage = (content: string) => {
  return `<div>${content}</div>`;
};

export async function sendMail(options: SendMailOptions) {
  await transporter.sendMail(options);
}
