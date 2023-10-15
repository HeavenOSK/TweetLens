import UserCircleIcon from "@heroicons/react/20/solid/UserCircleIcon"
import { useEffect } from "react"

import ResultView from "~src/components/ResultView"
import TriggerButton from "~src/components/TriggerButton"
import type { ButtonProps } from "~src/hooks/useButtonProps"
import { useChat, useChatPreview } from "~src/hooks/useChat"

import SettingTitle from "./SettingTitle"

const content =
  "今日のコーヒーはエチオピア産のシングルオリジン。フローラルな香りとクリアな酸味が絶妙。小さな幸せを感じる瞬間。☕️"
const SettingButtonPreview = ({ buttonName, prompt }: ButtonProps) => {
  const { result, previewStreamCompletion, resetResult } = useChatPreview()
  useEffect(() => {
    resetResult()
  }, [prompt])

  const onClick = () => {
    previewStreamCompletion({
      content,
      prompt
    })
  }
  return (
    <div className="flex flex-col gap-1 w-96">
      <SettingTitle title="プレビュー" />
      <div className="flex flex-col bg-white shadow-lg shadow-blue-gray-400 rounded-lg px-4 py-4">
        <div className="flex flex-col items-start gap-1">
          <div className="flex ml-[-8px] gap-2">
            <UserCircleIcon
              className="h-12 w-12 text-gray-300"
              aria-hidden="true"
            />
            <div className="flex flex-col justify-center">
              <div className="text-sm font-bold">User A</div>
              <div className="text-sm text-gray-500">@sample</div>
            </div>
          </div>
          <p className="text-base">
            今日のコーヒーはエチオピア産のシングルオリジン。フローラルな香りとクリアな酸味が絶妙。小さな幸せを感じる瞬間。☕️
          </p>
          {result !== null ? (
            <ResultView result={result} />
          ) : (
            <div className="flex mt-1">
              <TriggerButton label={buttonName} onClick={onClick} />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default SettingButtonPreview
