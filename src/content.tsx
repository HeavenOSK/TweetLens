import cssText from "data-text:~style.css"
import type { PlasmoCSConfig, PlasmoGetInlineAnchor } from "plasmo"

import { useChat } from "./hooks/useChat"
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
const text =
  "このツイートは、Open AIの人工知能（AI）であるDALL-Eの使用に言及しています。DALL-EはAIが一部の記述に基づいて画像を生成するためのプログラムです。「DALL-E 2のクレジットがめっちゃ余ってる」とは、使用者がDALL-Eを使うために必要なクレジット（おそらくはAPIの使用料）が大量に残っているという意味です。しかし、「使うタイミングないな」と述べていることから、その使用者がDALL-Eを活用する適切なシチュエーションや機会がないことを表現しています。"

const CustomButton = () => {
  const { streamCompletion, result } = useChat()
  const onClick = async () => {
    const el = getCurrentTweetTextEl()
    if (el === null) return

    await streamCompletion(el.textContent)
  }
  return (
    <div className="mt-2 w-full">
      {result !== null ? (
        <div className="p-3 min-h-[44px] w-full bg-white text-base font-semibold text-gray-500 tracking-wide border rounded-md drop-shadow-sm leading-6">
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
  )
}

export default CustomButton
