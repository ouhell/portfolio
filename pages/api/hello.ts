// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") return GET(req, res);

  return res.status(200).json({ name: "John Doe" });
}

function GET(req: NextApiRequest, res: NextApiResponse<unknown>) {
  return res.status(200).json({
    name: "hello",
    data: {
      username: process.env.EMAIL_USER,
      password: process.env.EMAIL_PASSWORD,
    },
  });
}
