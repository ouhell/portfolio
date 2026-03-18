import { NextApiRequest, NextApiResponse } from "next";
import { generateText } from "ai";
import { createGoogleGenerativeAI } from "@ai-sdk/google";

const ai = createGoogleGenerativeAI({
  apiKey: "AIzaSyBGwWYKfDb3T1IX_-n4VYfA7gKQOucJ0-k",
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case "GET":
      return await GET(req, res);
    default:
      return res.status(404).json({ message: "method not supported" });
  }
}

const GET = async (req: NextApiRequest, res: NextApiResponse) => {

   const prompt = req.query.prompt as string || "the user did not send any prompts";


  try {
    const { text } = await generateText({
      model: ai("gemini-2.5-flash"),
      prompt: prompt,
 
     
      
    });

    return res.status(200).json(text);
  } catch (error: any) {
    return res.status(500).json({ 
      error: "AI Generation failed", 
      message: error.message 
    });
  }
};