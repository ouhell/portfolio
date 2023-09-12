// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "GET") return GET(req, res);
  if (req.method === "POST") return POST(req, res);

  return res.status(200).json({ name: "John Doe" });
}

function GET(req: NextApiRequest, res: NextApiResponse<Data>) {
  return res.status(200).json({
    name: "hello",
  });
}

function POST(req: NextApiRequest, res: NextApiResponse<Data>) {
  console.log("posting");
  return res.status(200).json({
    name: "posted mf",
  });
}
