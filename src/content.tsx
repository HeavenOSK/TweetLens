import cssText from "data-text:~style.css"
import type { PlasmoCSConfig, PlasmoGetInlineAnchor } from "plasmo"

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
            <div className="p-3 min-h-[44px] w-full bg-white text-base text-gray-600 tracking-wide border rounded-md drop-shadow-sm leading-6">
              {result.map((word, index) => {
                return <span key={index}>{word}</span>
              })}
            </div>
          ) : (
            <button
              type="button"
              className="rounded-md bg-indigo-50 px-2.5 py-1.5 text-sm font-semibold text-indigo-600 shadow-sm hover:bg-indigo-100"
              onClick={onClick}>
              ツイートを解説
            </button>
          )}
        </div>
      ) : (
        <div></div>
      )}
    </>
  )
}

export default CustomButton
