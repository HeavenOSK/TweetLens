import { useMemo, useState } from "react"

import ConfirmButton from "~src/components/ConfirmButton"
import {
  defaultButtonName,
  defaultPrompt,
  useButtonProps
} from "~src/hooks/useButtonProps"

import SettingButtonName from "./SettingButtonName"
import SettingButtonPreview from "./SettingButtonPreview"
import SettingInputGroup from "./SettingInputGroup"
import SettingPrompt from "./SettingPrompt"

const SettingButtonProps = () => {
  const { buttonProps, setButtonProps, savedButtonProps } = useButtonProps()
  const [buttonName, setButtonName] = useState(
    savedButtonProps.buttonName || ""
  )
  const [prompt, setPrompt] = useState(savedButtonProps.prompt || "")

  const shouldSave = useMemo(() => {
    return (
      buttonName !== savedButtonProps.buttonName ||
      prompt !== savedButtonProps.prompt
    )
  }, [buttonName, prompt, buttonProps])
  const onSave = () => {
    setButtonProps({ buttonName, prompt })
  }
  return (
    <div className="flex">
      <div className="flex bg-gray-50 border-gray-200 border-[1px] p-4 rounded-md gap-12">
        <SettingInputGroup>
          <SettingButtonName
            buttonName={buttonName}
            setButtonName={setButtonName}
          />
          <SettingPrompt prompt={prompt} setPrompt={setPrompt} />
          <ConfirmButton
            label="設定を保存"
            onClick={onSave}
            disabled={!shouldSave}
          />
        </SettingInputGroup>
        <div className="flex">
          <SettingButtonPreview
            buttonName={buttonName || defaultButtonName}
            prompt={prompt || defaultPrompt}
          />
        </div>
      </div>
    </div>
  )
}

export default SettingButtonProps
