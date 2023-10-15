interface Props {
  label: string
  onClick: () => void
  disabled?: boolean
}
const ConfirmButton = ({ label, disabled, onClick }: Props) => {
  return (
    <button
      type="button"
      className={
        !disabled
          ? "inline-flex w-full justify-center rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400"
          : "inline-flex w-full justify-center rounded-md bg-indigo-400 px-3 py-2 text-sm font-semibold text-indigo-200 shadow-sm cursor-not-allowed"
      }
      onClick={onClick}
      disabled={disabled != undefined ? disabled : false}>
      {label}
    </button>
  )
}
export default ConfirmButton
