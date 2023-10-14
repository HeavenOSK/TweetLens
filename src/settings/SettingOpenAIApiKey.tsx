import { useModal } from "~src/hooks/useModal"

import SettingButton from "./SettingButton"
import SettingItemContainer from "./SettingItemContainer"
import SettingOpenAIApiKeyModal from "./SettingOpenAIApiKeyModal"
import SettingTitle from "./SettingTitle"

const SettingOpenAIApiKey = () => {
  const { isOpen, open, close } = useModal(true)

  return (
    <SettingItemContainer>
      <div className="flex gap-2 items-center">
        <SettingTitle title="OpenAI API key" />
        <p className="text-sm font-bold text-gray-500">設定済み</p>
      </div>
      <SettingButton label="API keyを設定" onClick={open} />
      <SettingOpenAIApiKeyModal isOpen={isOpen} close={close} />
    </SettingItemContainer>
  )
}

export default SettingOpenAIApiKey
