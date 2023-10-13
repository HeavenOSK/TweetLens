import type { PlasmoCSConfig, PlasmoGetInlineAnchor } from "plasmo"

import { extractTweetDetailInfo } from "./tweetDetail/TweetDetailInfo"

export const config: PlasmoCSConfig = {
  matches: ["https://twitter.com/*", "https://x.com/*"]
}

export const getInlineAnchor: PlasmoGetInlineAnchor = async () => {
  const info = extractTweetDetailInfo(window.location.href)
  if (!info) return null
  const tweets = document.querySelectorAll("[data-testid='tweet']")
  if (!tweets.length) return null
  const targetHref = `/${info.username}/status/${info.tweetId}`
  const targetTweet = Array.from(tweets).find((tweet) => {
    return tweet.querySelector(`[href='${targetHref}']`) !== null
  })
  return targetTweet?.querySelector("[data-testid='tweetText']") || null
}

const CustomButton = () => {
  const onClick = () => {}
  return (
    <div>
      <button onClick={onClick}>説明</button>
    </div>
  )
}

export default CustomButton
