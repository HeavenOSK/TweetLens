// chrome-extension://mifpjfnhegkajmcblhgnklnajgjggmkg/tabs/settings.html
import TriggerButton from "~src/components/TriggerButton"
import SettingGptModel from "~src/settings/SettingGptModel"
import SettingItemContainer from "~src/settings/SettingItemContainer"
import SettingLanguage from "~src/settings/SettingLanguage"
import SettingOpenAIApiKey from "~src/settings/SettingOpenAIApiKey"
import SettingTitle from "~src/settings/SettingTitle"

import "~style.css"

const Container = ({ children }: { children: React.ReactNode }) => {
  return <div className="px-6  py-6 flex flex-col gap-6">{children}</div>
}

const InputItem = ({
  title,
  children
}: {
  title: string
  children: React.ReactNode
}) => {
  return (
    <SettingItemContainer>
      <SettingTitle title={title} />
      {children}
    </SettingItemContainer>
  )
}

const Settings = () => {
  return (
    <div className="h-full w-full">
      <Container>
        <h2 className="text-2xl">Tweet Explainer Button</h2>
      </Container>
      <div className="w-full h-1 border-b border-gray-200"></div>
      <Container>
        <SettingOpenAIApiKey />
        <SettingLanguage />
        <SettingGptModel />

        {/* <InputItem title="解説用プロンプト">
          <input type="text" className="w-full" />
        </InputItem> */}
      </Container>
    </div>
  )
}

export default Settings
