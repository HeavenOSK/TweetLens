import { useState } from "react"

function IndexPopup() {
  const [data, setData] = useState("")

  return (
    <div className="w-48">
      <h2>
        Welcome to your
        <a
          href="chrome-extension://mifpjfnhegkajmcblhgnklnajgjggmkg/tabs/settings.html"
          target="_blank">
          {" "}
          Plasmo
        </a>{" "}
        Extension!
      </h2>
      <input onChange={(e) => setData(e.target.value)} value={data} />
      <a href="https://docs.plasmo.com" target="_blank">
        View Docs
      </a>
    </div>
  )
}

export default IndexPopup
