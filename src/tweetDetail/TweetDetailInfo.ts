interface TweetDetailInfo {
  username: string
  tweetId: string
}
const tweetDetailRegex =
  /https:\/\/(twitter|x)\.com\/([a-zA-Z0-9_]+)\/status\/(\d+)/

export const extractTweetDetailInfo = (url: string): TweetDetailInfo | null => {
  const matches = url.match(tweetDetailRegex)
  if (matches === null) return null
  const username = matches[2]
  const tweetId = matches[3]
  return { username, tweetId }
}

export const getCurrentTweetTextEl = () => {
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
