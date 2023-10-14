interface Props {
  label: string
  onClick: () => void
}
const ConfirmButton = ({ label, onClick }: Props) => {
  return (
    <button
      type="button"
      className=" inline-flex w-full justify-center rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 sm:ml-3 sm:w-auto"
      onClick={onClick}>
      {label}
    </button>
  )
}
export default ConfirmButton
