import { useEffect, useMemo, useState } from "react"

import { Storage } from "@plasmohq/storage"

const STORAGE_KEY_BUTTON_PROPS = "BUTTON_PROPS"

interface ButtonProps {
  // 空文字を許容する
  buttonName: string
  // 空文字を許容する
  prompt: string
}

export const defaultButtonName = "ツイートを解説"

export const defaultPrompt =
  "Could you explain this tweet in a way that's easy to understand?"

const defaultProps: ButtonProps = {
  buttonName: defaultButtonName,
  prompt: defaultPrompt
}

const storage = new Storage()

export const useButtonProps = () => {
  const [savedButtonProps, setSavedButtonProps] =
    useState<ButtonProps>(defaultProps)
  const buttonProps = useMemo<ButtonProps>(() => {
    const buttonName = savedButtonProps?.buttonName || defaultButtonName
    const prompt = savedButtonProps?.prompt || defaultPrompt
    return {
      buttonName,
      prompt
    }
  }, [savedButtonProps])

  const getButtonProps = async () => {
    const value = await storage.get(STORAGE_KEY_BUTTON_PROPS)
    if (value) {
      try {
        const json = JSON.parse(value)
        if (json) {
          setSavedButtonProps(json)
        }
      } catch (e) {
        // no op
      }
    }
  }

  const setButtonProps = async (props: ButtonProps) => {
    if (props) {
      await storage.set(STORAGE_KEY_BUTTON_PROPS, JSON.stringify(props))
      setSavedButtonProps({
        ...props
      })
    }
  }

  useEffect(() => {
    getButtonProps()
    return () => {}
  }, [])

  return {
    savedButtonProps,
    buttonProps,
    setButtonProps
  }
}
