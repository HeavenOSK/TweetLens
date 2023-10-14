const SettingButton = ({ label }: { label: string }) => {
  return (
    <button className="rounded-md bg-indigo-50 px-2.5 py-1.5 text-sm font-semibold text-indigo-600 shadow-sm hover:bg-indigo-100">
      {label}
    </button>
  )
}

export default SettingButton
