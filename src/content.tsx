import cssText from "data-text:~style.css"
import type { PlasmoCSConfig, PlasmoGetInlineAnchor } from "plasmo"

import ResultView from "./components/ResultView"
import TriggerButton from "./components/TriggerButton"
import { useButtonProps } from "./hooks/useButtonProps"
import { useChat } from "./hooks/useChat"
import { useOpenAIApiKey } from "./hooks/useOpenAIApiKey"
import { getCurrentTweetTextEl } from "./tweetDetail/TweetDetailInfo"

export const config: PlasmoCSConfig = {
  matches: ["https://twitter.com/*", "https://x.com/*"]
}

export const getInlineAnchor: PlasmoGetInlineAnchor = getCurrentTweetTextEl

export const getStyle = () => {
  const style = document.createElement("style")
  style.textContent = cssText
  return style
}

const CustomButton = () => {
  const { state } = useOpenAIApiKey()
  const { buttonProps } = useButtonProps()
  const { streamCompletion, result } = useChat({
    apiKey: state.type === "loaded" ? state.apiKey : undefined
  })
  const onClick = async () => {
    const el = getCurrentTweetTextEl()
    if (el === null) return

    await streamCompletion(el.textContent)
  }
  return (
    <>
      {state.type !== "loading" && state.apiKey !== undefined ? (
        <div className="my-2 w-full">
          {result !== null ? (
            <ResultView result={result} />
          ) : (
            <TriggerButton label={buttonProps.buttonName} onClick={onClick} />
          )}
        </div>
      ) : (
        <div></div>
      )}
    </>
  )
}

export default CustomButton
