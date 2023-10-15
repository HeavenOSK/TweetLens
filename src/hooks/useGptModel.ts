import { useEffect, useMemo, useState } from "react"

import { Storage } from "@plasmohq/storage"

import type { ChoiceModel } from "~src/settings/SettingList"

export const STORAGE_KEY_GPT_MODEL = "GPT_MODEL"

export const gpt4 = "gpt-4"

const gptModels = [
  "gpt-3.5-turbo-0301",
  "gpt-3.5-turbo-0613",
  "gpt-3.5-turbo-16k",
  "gpt-3.5-turbo-16k-0613",
  // "gpt-3.5-turbo-instruct",
  // "gpt-3.5-turbo-instruct-0914",
  gpt4,
  "gpt-4-0314",
  "gpt-4-0613",
  "gpt-4-0613a"
] as const

type GptModel = (typeof gptModels)[number]

export interface GptModelChoice extends ChoiceModel {
  id: GptModel
  name: GptModel
}

const storage = new Storage()

export const useGptModel = () => {
  const [savedModel, setSavedModel] = useState<GptModel | null>(null)

  const model = useMemo<GptModelChoice>(() => {
    const val = savedModel || gpt4
    return {
      id: val,
      name: val
    } as GptModelChoice
  }, [savedModel])

  const modelChoices = useMemo(() => {
    return gptModels.map((model) => {
      return {
        id: model,
        name: model
      }
    })
  }, [model])

  const getGPTModelFromStorage = async () => {
    const value = await storage.get(STORAGE_KEY_GPT_MODEL)
    if (value) {
      setSavedModel(value as GptModel)
    }
  }

  const updateModel = (model: GptModelChoice) => {
    setSavedModel(model.id)
    storage.set(STORAGE_KEY_GPT_MODEL, model.id)
  }

  useEffect(() => {
    getGPTModelFromStorage()
    return () => {}
  }, [])

  return {
    model,
    modelChoices,
    updateModel
  }
}
