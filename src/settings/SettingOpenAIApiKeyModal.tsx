import { Dialog, Transition } from "@headlessui/react"

import BaseDialog from "~src/components/BaseDialog"
import CancelButton from "~src/components/CancelButton"
import ConfirmButton from "~src/components/ConfirmButton"
import { type UseModal } from "~src/hooks/useModal"

type Props = Pick<UseModal, "isOpen" | "close">

const SettingOpenAIApiKeyModal = ({ isOpen, close }: Props) => {
  return (
    <BaseDialog isOpen={isOpen} close={close}>
      <div className="flex flex-col">
        <Dialog.Title
          as="h3"
          className="text-base font-semibold leading-6 text-gray-900">
          OpenAI API Key
        </Dialog.Title>
        <p className="text-sm text-gray-500 mt-1">
          解説に使用するOpenAI API Keyを設定してください。
          <a
            href="https://platform.openai.com/account/api-keys"
            className="font-medium text-indigo-700 underline hover:text-indigo-500"
            target="_blank">
            API keys(OpenAI)
          </a>
          で取得できます。
        </p>

        <div className="flex mt-2">
          <input
            type="password"
            className="block flex-1 px-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2  focus:ring-indigo-300 focus:ring-inset sm:text-sm sm:leading-6 focus:outline-none"
            placeholder="sk-**************"
          />
          <ConfirmButton label="設定" onClick={() => {}} />
        </div>
      </div>
    </BaseDialog>
  )
}

export default SettingOpenAIApiKeyModal
