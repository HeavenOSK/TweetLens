import { useEffect, useMemo, useState } from "react"

import { Storage } from "@plasmohq/storage"

const STORAGE_KEY_PROMPT = "PROMPT"
export const defaultPrompt =
  "Could you explain this tweet in a way that's easy to understand?"

const storage = new Storage()

export const usePrompt = () => {
  const [savedPrompt, setSavedPrompt] = useState<string | null>(null)

  const prompt = useMemo(() => {
    return savedPrompt || defaultPrompt
  }, [savedPrompt])
  const getPrompt = async () => {
    const value = await storage.get(STORAGE_KEY_PROMPT)
    if (value) {
      setSavedPrompt(value)
    }
  }

  const setPrompt = async (prompt: string) => {
    if (prompt) {
      await storage.set(STORAGE_KEY_PROMPT, prompt)
      setSavedPrompt(prompt)
    }
  }

  useEffect(() => {
    getPrompt()
    return () => {}
  }, [])

  return {
    prompt,
    setPrompt
  }
}
