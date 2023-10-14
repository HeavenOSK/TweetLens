import SettingButton from "./SettingButton"
import SettingItemContainer from "./SettingItemContainer"
import SettingTitle from "./SettingTitle"

const SettingOpenAIApiKey = () => {
  return (
    <SettingItemContainer>
      <div className="flex gap-2 items-center">
        <SettingTitle title="OpenAI API key" />
        <p className="text-sm font-bold text-gray-500">設定済み</p>
      </div>
      <SettingButton label="API keyを設定" />
    </SettingItemContainer>
  )
}

export default SettingOpenAIApiKey
