import { useStorage } from "@plasmohq/storage/hook"

import { useModal } from "~src/hooks/useModal"
import { useOpenAIApiKey } from "~src/hooks/useOpenAIApiKey"

import TriggerButton from "../components/TriggerButton"
import SettingItemContainer from "./SettingItemContainer"
import SettingOpenAIApiKeyModal from "./SettingOpenAIApiKeyModal"
import SettingTitle from "./SettingTitle"

const SettingOpenAIApiKey = () => {
  const { isOpen, open, close } = useModal(false)
  const { state, setOpenAIApiKey } = useOpenAIApiKey()
  return (
    <SettingItemContainer>
      <div className="flex gap-2 items-center">
        <SettingTitle title="OpenAI API key" />
        {state.type === "loading" ? (
          <></>
        ) : (
          <p className="text-sm font-bold text-gray-500">
            {state.apiKey !== undefined ? "設定済み" : "未設定"}
          </p>
        )}
      </div>
      <TriggerButton label="API keyを設定" onClick={open} />
      <SettingOpenAIApiKeyModal
        isOpen={isOpen}
        close={close}
        updateApiKey={setOpenAIApiKey}
      />
    </SettingItemContainer>
  )
}

export default SettingOpenAIApiKey
