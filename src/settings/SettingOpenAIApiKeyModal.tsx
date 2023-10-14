import { Dialog, Transition } from "@headlessui/react"

import BaseDialog from "~src/components/BaseDialog"
import CancelButton from "~src/components/CancelButton"
import ConfirmButton from "~src/components/ConfirmButton"
import { type UseModal } from "~src/hooks/useModal"

type Props = Pick<UseModal, "isOpen" | "close">

const SettingOpenAIApiKeyModal = ({ isOpen, close }: Props) => {
  return (
    <BaseDialog isOpen={isOpen} close={close}>
      <div className="sm:flex sm:items-start">
        <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10"></div>
        <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
          <Dialog.Title
            as="h3"
            className="text-base font-semibold leading-6 text-gray-900">
            Deactivate account
          </Dialog.Title>
          <div className="mt-2">
            <p className="text-sm text-gray-500">
              Are you sure you want to deactivate your account? All of your data
              will be permanently removed from our servers forever. This action
              cannot be undone.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
        <ConfirmButton label="Confirm" onClick={() => {}} />

        <CancelButton onClick={close} />
      </div>
    </BaseDialog>
  )
}

export default SettingOpenAIApiKeyModal
