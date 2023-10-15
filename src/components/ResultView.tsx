type Props = {
  result: string[]
}

const ResultView = ({ result }: Props) => {
  return (
    <div className="p-3 min-h-[44px] w-full bg-white text-base text-gray-600 tracking-wide border rounded-md drop-shadow-sm leading-6">
      {result.map((word, index) => {
        return <span key={index}>{word}</span>
      })}
    </div>
  )
}

export default ResultView
