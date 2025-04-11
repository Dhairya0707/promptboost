// import { error } from "console";
import { NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai"; // Change to import
// ... existing code ...

const genAI = new GoogleGenerativeAI(process.env.API_KEY);

const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

export async function POST(req) {
  const body = await req.json();
  const { msg, activetype, tone, outputLength, emojiEnabled, creativity } =
    body;

  const systemPrompt = `
    You are a prompt enhancement assistant.

    Your only task is to rewrite and improve the user's prompt based on the following settings:
    - Enhancement Type: ${activetype}
    - Tone: ${tone}
    - Output Length: ${outputLength}
    - Creativity Level: ${creativity}
    - Include Emojis: ${emojiEnabled}

    ⚠️ Do NOT answer or perform the prompt's request. Only enhance how the prompt is written.

    Just return the enhanced prompt directly, with no intro or explanation.
    give ans response into markdwon simple formate like bold new line etc.

    Prompt to enhance:
    "${msg}"
    `.trim();

  try {
    const result = await model.generateContent([systemPrompt]);
    console.log(result.response.text());

    return NextResponse.json(
      {
        message: "done",
        output: result.response.text(),
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Prompt Enhancement Error:", error);

    return NextResponse.json(
      {
        message: `error : ${error} `,
      },
      { status: 400 }
    );
  }
}

export async function GET() {
  return NextResponse.json({
    message: "Hello World 👋 from Next.js API route!",
  });
}
