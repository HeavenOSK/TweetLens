import { useState } from "react"

export type UseModal = ReturnType<typeof useModal>

export const useModal = (initialValue?: boolean) => {
  const [isOpen, setIsOpen] = useState(initialValue || false)
  const open = () => setIsOpen(true)
  const close = () => setIsOpen(false)
  return {
    isOpen,
    open,
    close
  }
}
