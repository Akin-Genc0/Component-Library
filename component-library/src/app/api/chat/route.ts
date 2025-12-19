import { OpenAI } from "openai";
import { NextRequest, NextResponse } from "next/server";
import { InferenceClient } from "@huggingface/inference";

export async function POST(request: NextRequest) {
  const client = new OpenAI({
    baseURL: "https://router.huggingface.co/v1",
    apiKey: process.env.NEXT_PUBLIC_HF_TOKEN as string,
    dangerouslyAllowBrowser: true,
  });

  const data = await request.json();
  const message = data.message;

  if (message.includes("generate image")) {
    const client = new InferenceClient(
      process.env.NEXT_PUBLIC_HF_TOKEN as string
    );

    const image = await client.textToImage({
      provider: "wavespeed",
      model: "black-forest-labs/FLUX.1-dev",
      inputs: message,
      parameters: { num_inference_steps: 5, width: 512, height: 512 },
    });

    return NextResponse.json({
      message: `data:image/png;base64,${image}`,
    });
  }

  const chatCompletion = await client.chat.completions.create({
    model: "openai/gpt-oss-120b:together",

    messages: [
      {
        role: "user",
        content: message,
      },
    ],
  });

  return NextResponse.json({
    message: chatCompletion.choices[0].message.content,
  });
}
