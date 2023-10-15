interface Props {
  label: string
  onClick: () => void
}

const DeleteButton = ({ label, onClick }: Props) => {
  return (
    <button
      className="rounded-md bg-red-50 px-2.5 py-1.5 text-sm font-semibold text-red-600 shadow-sm hover:bg-red-100"
      onClick={onClick}>
      {label}
    </button>
  )
}

export default DeleteButton
