// chrome-extension://mifpjfnhegkajmcblhgnklnajgjggmkg/tabs/settings.html
import { useMemo } from "react"

import TriggerButton from "~src/components/TriggerButton"
import { useOpenAIApiKey } from "~src/hooks/useOpenAIApiKey"
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

const Container = ({
  children,
  disabled
}: {
  children: React.ReactNode
  disabled?: boolean
}) => {
  const className = useMemo(() => {
    return disabled
      ? "px-6  py-6 flex flex-col gap-2 opacity-40 pointer-events-none select-none transition-opacity"
      : "px-6  py-6 flex flex-col gap-2 transition-opacity	"
  }, [disabled])
  return <div className={className}>{children}</div>
}

const Settings = () => {
  const { state, setOpenAIApiKey, deleteOpenAIApiKey } = useOpenAIApiKey()
  const completedSettingApiKey = useMemo(() => {
    return state.type === "loaded" && !!state.apiKey
  }, [state])
  return (
    <div className="h-full w-full">
      <Container>
        <h2 className="text-2xl font-bold">ツイートレンズ</h2>
      </Container>
      <div className="w-full h-1 border-b border-gray-200"></div>
      <Container>
        <p className="text-2xl font-bold">基本設定</p>
        <SettingInputGroup>
          <SettingOpenAIApiKey
            state={state}
            setOpenAIApiKey={setOpenAIApiKey}
            deleteOpenAIApiKey={deleteOpenAIApiKey}
          />
          <SettingLanguage />
          <SettingGptModel />
        </SettingInputGroup>
      </Container>
      <Container disabled={!completedSettingApiKey}>
        <p className="text-2xl font-bold">ボタン設定</p>
        <SettingButtonProperties />
      </Container>
    </div>
  )
}

export default Settings
