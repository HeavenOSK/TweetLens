import UserCircleIcon from "@heroicons/react/20/solid/UserCircleIcon"

import TriggerButton from "~src/components/TriggerButton"

import SettingTitle from "./SettingTitle"

const SettingButtonPreview = () => {
  return (
    <div className="flex flex-col w-80 gap-1">
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
          <div className="flex mt-1">
            <TriggerButton label={"ツイートを解説"} onClick={() => {}} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default SettingButtonPreview
