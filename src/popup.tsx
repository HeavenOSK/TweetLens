import { useState } from "react"

import "../style.css"

import ConfirmButton from "./components/ConfirmButton"
import TriggerButton from "./components/TriggerButton"

function IndexPopup() {
  const [data, setData] = useState("")

  return (
    <div className="w-48 flex flex-col items-center py-4 gap-2">
      <p className="text-lg font-bold">TweetLens</p>
      <a
        className="rounded-md bg-indigo-50 px-2.5 py-1.5 text-sm font-semibold text-indigo-600 shadow-sm hover:bg-indigo-100"
        href={"chrome-extension://" + chrome.runtime.id + "/tabs/settings.html"}
        target="_blank">
        {"設定画面へ"}
      </a>
    </div>
  )
}

export default IndexPopup
