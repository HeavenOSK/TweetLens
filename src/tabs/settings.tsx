// chrome-extension://mifpjfnhegkajmcblhgnklnajgjggmkg/tabs/settings.html
import SettingButton from "~src/components/SettingButton"
import SettingItemContainer from "~src/components/SettingItemContainer"
import SettingOpenAIApiKey from "~src/components/SettingOpenAIApiKey"
import SettingTitle from "~src/components/SettingTitle"

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
        <InputItem title="言語設定">
          <input type="text" className="w-full" />
        </InputItem>
        <InputItem title="使用するモデル">
          <input type="text" className="w-full" />
        </InputItem>
        <InputItem title="解説用プロンプト">
          <input type="text" className="w-full" />
        </InputItem>
      </Container>
    </div>
  )
}

export default Settings
