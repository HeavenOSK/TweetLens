import OpenAI from "openai"
import { outdent } from "outdent"
import { useState } from "react"

export const useChat = () => {
  const [result, setResult] = useState<string[] | null>(null)

  const streamCompletion = async (content: string) => {
    const openai = new OpenAI({
      apiKey: process.env.PLASMO_PUBLIC_OPEN_AI_API_KEY,
      dangerouslyAllowBrowser: true
    })
    const prompt = outdent`
        以下ツイートの意味が分からないので解説してください。
        ---
        ${content}
        `
    setResult([])
    const stream = await openai.chat.completions.create({
      model: "gpt-3.5-turbo-16k",
      messages: [{ role: "user", content: prompt }],
      stream: true
    })
    const streamed = []
    for await (const part of stream) {
      const newDiff = part.choices[0]?.delta?.content || ""
      if (newDiff !== "") {
        streamed.push(newDiff)
        setResult([...streamed])
      }
    }
  }
  return {
    result,
    streamCompletion
  }
}
