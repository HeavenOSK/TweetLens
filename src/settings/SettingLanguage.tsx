import { useLanguageSetting } from "~src/hooks/useLanguageSetting"

import SettingItemContainer from "./SettingItemContainer"
import SettingList from "./SettingList"
import SettingTitle from "./SettingTitle"

const SettingLanguage = () => {
  const { language, languageChoices, updateLanguage } = useLanguageSetting()
  return (
    <SettingItemContainer>
      <SettingTitle title="言語設定" />
      <SettingList
        selected={language}
        setSelected={updateLanguage}
        languages={languageChoices}
      />
    </SettingItemContainer>
  )
}
export default SettingLanguage
