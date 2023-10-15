import snarkdown from "snarkdown"

type Props = {
  result: string[]
}
const parser = new DOMParser()

export function afterCare(htmlString: string): string {
  const doc = parser.parseFromString(htmlString, "text/html")

  const anchors = doc.getElementsByTagName("a")
  for (let i = 0; i < anchors.length; i++) {
    anchors[i].setAttribute("target", "_blank")
  }

  const images = doc.getElementsByTagName("img")
  for (let i = 0; i < images.length; i++) {
    images[i].setAttribute("onclick", "showAIPopup(this)")
  }
  return doc.documentElement.innerHTML
}

const ResultView = ({ result }: Props) => {
  return (
    <div className="p-3 min-h-[44px] w-full bg-white text-base text-gray-600 tracking-wide border rounded-md drop-shadow-sm leading-6">
      <p
        className="markdown-content"
        dangerouslySetInnerHTML={{
          __html: snarkdown(result.join(""))
        }}></p>
    </div>
  )
}

export default ResultView
