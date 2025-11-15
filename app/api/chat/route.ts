import { createOpenAI } from "@ai-sdk/openai";
import { streamText } from "ai";
import { auth } from "@clerk/nextjs/server";

export const runtime = "nodejs";
export const maxDuration = 60;

// Create OpenRouter client with custom fetch for headers
const openrouter = createOpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  baseURL: "https://openrouter.ai/api/v1",
  fetch: async (url, options) => {
    const headers = new Headers(options?.headers);
    headers.set("HTTP-Referer", process.env.SITE_URL || "http://localhost:3000");
    headers.set("X-Title", process.env.SITE_NAME || "DeepSeek Assistant");
    return fetch(url, { ...options, headers });
  },
});

export async function POST(req: Request) {
  try {
    // Check authentication - get userId if available
    const { userId } = await auth();
    
    // Log authentication status
    console.log("Auth check - userId:", userId ? "present" : "missing");

    let body;
    try {
      body = await req.json();
    } catch (e) {
      console.error("Failed to parse request body:", e);
      return new Response(JSON.stringify({ error: "Invalid request body" }), { 
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }

    const { messages } = body;

    if (!messages || !Array.isArray(messages)) {
      console.error("Invalid messages:", messages);
      return new Response(JSON.stringify({ error: "Messages array is required" }), { 
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }

    console.log("Processing chat request with", messages.length, "messages");

    const result = streamText({
      model: openrouter("deepseek/deepseek-chat"),
      messages,
      system: `You are a helpful AI assistant.${userId ? ` The user's ID is ${userId}.` : ''}`,
      maxTokens: 2000,
    });

    const response = (await result).toDataStreamResponse();
    console.log("Streaming response initiated");
    return response;
  } catch (error) {
    console.error("Chat API Error:", error);
    const errorMessage = error instanceof Error ? error.message : "Internal server error";
    console.error("Full error:", error);
    return new Response(
      JSON.stringify({ 
        error: errorMessage,
        details: process.env.NODE_ENV === "development" ? String(error) : undefined
      }),
      { 
        status: 500,
        headers: { "Content-Type": "application/json" }
      }
    );
  }
}
