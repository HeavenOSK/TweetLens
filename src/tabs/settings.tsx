// chrome-extension://mifpjfnhegkajmcblhgnklnajgjggmkg/tabs/settings.html
import TriggerButton from "~src/components/TriggerButton"
import SettingButtonName from "~src/settings/SettingButtonName"
import SettingButtonProperties from "~src/settings/SettingButtonProps"
import SettingGptModel from "~src/settings/SettingGptModel"
import SettingInputGroup from "~src/settings/SettingInputGroup"
import SettingItemContainer from "~src/settings/SettingItemContainer"
import SettingLanguage from "~src/settings/SettingLanguage"
import SettingOpenAIApiKey from "~src/settings/SettingOpenAIApiKey"
import SettingPrompt from "~src/settings/SettingPrompt"
import SettingTitle from "~src/settings/SettingTitle"

import "~style.css"

const Container = ({ children }: { children: React.ReactNode }) => {
  return <div className="px-6  py-6 flex flex-col gap-2">{children}</div>
}

const Settings = () => {
  return (
    <div className="h-full w-full">
      <Container>
        <h2 className="text-2xl">Tweet Explainer Button</h2>
      </Container>
      <div className="w-full h-1 border-b border-gray-200"></div>
      <Container>
        <p className="text-2xl font-bold">基本設定</p>
        <SettingInputGroup>
          <SettingOpenAIApiKey />
          <SettingLanguage />
          <SettingGptModel />
        </SettingInputGroup>
      </Container>
      <Container>
        <p className="text-2xl font-bold">ボタン設定</p>
        <SettingButtonProperties />
      </Container>
    </div>
  )
}

export default Settings
