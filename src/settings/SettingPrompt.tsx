import ConfirmButton from "~src/components/ConfirmButton"
import { useGptModel } from "~src/hooks/useGptModel"
import { useLanguageSetting } from "~src/hooks/useLanguageSetting"
import { defaultPrompt, usePrompt } from "~src/hooks/usePrompt"

import SettingItemContainer from "./SettingItemContainer"
import SettingList from "./SettingList"
import SettingTitle from "./SettingTitle"

const SettingPrompt = () => {
  const { model, modelChoices, updateModel } = useGptModel()
  const { prompt, setPrompt } = usePrompt()
  return (
    <SettingItemContainer>
      <SettingTitle title="プロンプト" />
      <div className="flex">
        <div className="flex flex-col gap-2 min-w-[200px]">
          <textarea
            rows={5}
            name="comment"
            id="comment"
            className="block w-72 form-sizing-content resize-none px-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2  focus:ring-indigo-300 focus:ring-inset sm:text-sm sm:leading-6 focus:outline-none"
            placeholder={defaultPrompt}
            defaultValue={""}
          />
          <div className="flex justify-end">
            <ConfirmButton label="保存" onClick={() => {}} />
          </div>
        </div>
        <div></div>
      </div>
    </SettingItemContainer>
  )
}
export default SettingPrompt
