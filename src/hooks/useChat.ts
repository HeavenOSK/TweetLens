import OpenAI from "openai"
import { outdent } from "outdent"
import { useState } from "react"

import { Storage } from "@plasmohq/storage"

import { defaultPrompt, STORAGE_KEY_BUTTON_PROPS } from "./useButtonProps"
import { gpt4, STORAGE_KEY_GPT_MODEL } from "./useGptModel"
import { getBrowserLanguage, STORAGE_KEY_LANGUAGE } from "./useLanguageSetting"
import { STORAGE_KEY_OPEN_AI_API_KEY } from "./useOpenAIApiKey"

const storage = new Storage()

const getModel = async () => {
  const result = await storage.get(STORAGE_KEY_GPT_MODEL)
  return result || gpt4
}
const getLanguage = async () => {
  const result = await storage.get(STORAGE_KEY_LANGUAGE)
  return result || getBrowserLanguage()
}

const getApiKey = async () => {
  const result = await storage.get(STORAGE_KEY_OPEN_AI_API_KEY)
  return result
}
const usePrompt = async () => {
  const result = await storage.get(STORAGE_KEY_BUTTON_PROPS)
  if (!result) return defaultPrompt
  try {
    const json = JSON.parse(result)
    return json.prompt || defaultPrompt
  } catch (e) {
    return defaultPrompt
  }
}

type Props = {
  apiKey?: string
}

export const useChat = ({ apiKey }: Props) => {
  const [result, setResult] = useState<string[] | null>(null)

  const streamCompletion = async (content: string) => {
    const key = apiKey
    if (!key) return
    const model = await getModel()
    const language = await getLanguage()
    const prompt = await usePrompt()
    const openai = new OpenAI({
      apiKey: key,
      dangerouslyAllowBrowser: true
    })
    const filledPrompt = outdent`
        ${prompt || defaultPrompt}
        output_language: ${language}
        ---
        ${content}`
    setResult([])
    const stream = await openai.chat.completions.create({
      model: model,
      messages: [{ role: "user", content: filledPrompt }],
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

export const useChatPreview = () => {
  const [result, setResult] = useState<string[] | null>(null)

  const resetResult = () => {
    setResult(null)
  }
  const previewStreamCompletion = async ({
    content,
    prompt
  }: {
    content: string
    prompt: string
  }) => {
    const key = await getApiKey()
    if (!key) return
    const openai = new OpenAI({
      apiKey: key,
      dangerouslyAllowBrowser: true
    })
    const language = await getLanguage()
    const model = await getModel()

    const filledPrompt = outdent`
        ${prompt || defaultPrompt}
        output_language: ${language}
        ---
        ${content}`
    setResult([])
    const stream = await openai.chat.completions.create({
      model: model,
      messages: [
        {
          role: "user",
          content: filledPrompt
        }
      ],
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
    previewStreamCompletion,
    resetResult
  }
}
