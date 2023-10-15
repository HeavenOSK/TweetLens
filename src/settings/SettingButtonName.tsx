import ConfirmButton from "~src/components/ConfirmButton"
import { defaultButtonName } from "~src/hooks/useButtonProps"

import SettingItemContainer from "./SettingItemContainer"
import SettingTitle from "./SettingTitle"

type Props = {
  buttonName: string
  setButtonName: (buttonName: string) => void
}
const SettingButtonName = ({ buttonName, setButtonName }: Props) => {
  return (
    <SettingItemContainer>
      <SettingTitle title="ボタン名" />
      <div className="flex flex-col gap-2">
        <input
          type="text"
          value={buttonName}
          className="block w-72 px-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2  focus:ring-indigo-300 focus:ring-inset sm:text-sm sm:leading-6 focus:outline-none"
          placeholder={defaultButtonName}
          onChange={(e) => setButtonName(e.target.value)}
        />
      </div>
    </SettingItemContainer>
  )
}

export default SettingButtonName
