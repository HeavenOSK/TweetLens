import { useGptModel } from "~src/hooks/useGptModel"
import { useLanguageSetting } from "~src/hooks/useLanguageSetting"

import SettingItemContainer from "./SettingItemContainer"
import SettingList from "./SettingList"
import SettingTitle from "./SettingTitle"

const SettingGptModel = () => {
  const { model, modelChoices, updateModel } = useGptModel()
  return (
    <SettingItemContainer>
      <SettingTitle title="使用モデル" />
      <SettingList
        selected={model}
        setSelected={updateModel}
        languages={modelChoices}
      />
    </SettingItemContainer>
  )
}
export default SettingGptModel
