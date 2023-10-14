import { Dialog, Transition } from "@headlessui/react"
import { Fragment, useRef } from "react"
import { useToggle } from "react-use"

import BaseDialog from "~src/components/BaseDialog"
import { useModal, type UseModal } from "~src/hooks/useModal"

import SettingButton from "./SettingButton"
import SettingItemContainer from "./SettingItemContainer"
import SettingTitle from "./SettingTitle"

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
        <button
          type="button"
          className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
          onClick={close}>
          Deactivate
        </button>
        <button
          type="button"
          className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
          onClick={close}>
          Cancel
        </button>
      </div>
    </BaseDialog>
  )
}

export default SettingOpenAIApiKeyModal
