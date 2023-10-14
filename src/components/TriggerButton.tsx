interface Props {
  label: string
  onClick: () => void
}

const TriggerButton = ({ label, onClick }: Props) => {
  return (
    <button
      className="rounded-md bg-indigo-50 px-2.5 py-1.5 text-sm font-semibold text-indigo-600 shadow-sm hover:bg-indigo-100"
      onClick={onClick}>
      {label}
    </button>
  )
}

export default TriggerButton
