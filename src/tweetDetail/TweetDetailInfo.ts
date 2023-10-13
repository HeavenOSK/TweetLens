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
