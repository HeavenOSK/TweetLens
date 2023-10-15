import ConfirmButton from "~src/components/ConfirmButton"
import { defaultPrompt } from "~src/hooks/useButtonProps"
import { useGptModel } from "~src/hooks/useGptModel"
import { useLanguageSetting } from "~src/hooks/useLanguageSetting"

import SettingItemContainer from "./SettingItemContainer"
import SettingList from "./SettingList"
import SettingTitle from "./SettingTitle"

type Props = {
  prompt: string
  setPrompt: (prompt: string) => void
}
const SettingPrompt = ({ prompt, setPrompt }: Props) => {
  return (
    <SettingItemContainer>
      <SettingTitle title="プロンプト" />
      <textarea
        rows={5}
        name="comment"
        id="comment"
        className="block w-72 form-sizing-content resize-none px-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2  focus:ring-indigo-300 focus:ring-inset sm:text-sm sm:leading-6 focus:outline-none"
        placeholder={defaultPrompt}
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />
    </SettingItemContainer>
  )
}
export default SettingPrompt
