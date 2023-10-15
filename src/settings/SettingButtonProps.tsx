import { useMemo, useState } from "react"

import { useButtonProps } from "~src/hooks/useButtonProps"

import SettingButtonName from "./SettingButtonName"
import SettingButtonPreview from "./SettingButtonPreview"
import SettingInputGroup from "./SettingInputGroup"
import SettingPrompt from "./SettingPrompt"

const SettingButtonProps = () => {
  const { buttonProps, setButtonProps, savedButtonProps } = useButtonProps()
  const [buttonName, setButtonName] = useState(buttonProps.buttonName)
  const [prompt, setPrompt] = useState(buttonProps.prompt)

  const shouldSave = useMemo(() => {
    return (
      buttonName !== savedButtonProps.buttonName ||
      prompt !== savedButtonProps.prompt
    )
  }, [buttonName, prompt, buttonProps])
  return (
    <div className="flex">
      <div className="flex bg-gray-50 border-gray-200 border-[1px] p-4 rounded-md gap-12">
        <SettingInputGroup>
          <SettingButtonName />
          <SettingPrompt />
        </SettingInputGroup>
        <div className="flex">
          <SettingButtonPreview />
        </div>
      </div>
    </div>
  )
}

export default SettingButtonProps
function setState(buttonName: string): [any, any] {
  throw new Error("Function not implemented.")
}
