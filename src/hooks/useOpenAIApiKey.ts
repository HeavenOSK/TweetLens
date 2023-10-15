import { useEffect, useState } from "react"

import { Storage } from "@plasmohq/storage"

export const STORAGE_KEY_OPEN_AI_API_KEY = "OPEN_AI_API_KEY"

type OpenAIApiKeyState = OpenAIApiKeyStateLoading | OpenAIApiKeyStateLoaded

interface OpenAIApiKeyStateBase {
  type: string
}
interface OpenAIApiKeyStateLoading extends OpenAIApiKeyStateBase {
  type: "loading"
}
interface OpenAIApiKeyStateLoaded extends OpenAIApiKeyStateBase {
  type: "loaded"
  apiKey?: string
}

const storage = new Storage()

export const useOpenAIApiKey = () => {
  const [state, setState] = useState<OpenAIApiKeyState>({
    type: "loading"
  })

  const getOpenAIApiKey = async () => {
    const value = await storage.get(STORAGE_KEY_OPEN_AI_API_KEY)
    setState({
      type: "loaded",
      apiKey: (value || "").length === 0 ? undefined : value
    })
  }

  const setOpenAIApiKey = async (apiKey: string) => {
    if (apiKey) {
      await storage.set(STORAGE_KEY_OPEN_AI_API_KEY, apiKey)
      setState({ type: "loaded", apiKey })
    }
  }

  const deleteOpenAIApiKey = async () => {
    await storage.remove(STORAGE_KEY_OPEN_AI_API_KEY)
    setState({ type: "loaded" })
  }

  useEffect(() => {
    getOpenAIApiKey()
    return () => {}
  }, [])
  return {
    state,
    setOpenAIApiKey,
    deleteOpenAIApiKey
  }
}
