// chrome-extension://mifpjfnhegkajmcblhgnklnajgjggmkg/tabs/settings.html
import "~style.css"

const Container = ({ children }: { children: React.ReactNode }) => {
  return <div className="px-6  py-6">{children}</div>
}

const InputItem = ({
  title,
  children
}: {
  title: string
  children: React.ReactNode
}) => {
  return (
    <label className="text-lg font-semibold flex flex-col gap-6">
      {title}
      {children}
    </label>
  )
}
const Settings = () => {
  return (
    <div className="h-full w-full">
      <Container>
        <h2 className="text-2xl">Tweet Explainer Button</h2>
      </Container>
      <div className="w-full h-1 border-b border-gray-200"></div>
      <Container>
        <InputItem title="OpenAI API key">
          <input type="text" className="w-full" />
        </InputItem>
        <InputItem title="言語設定">
          <input type="text" className="w-full" />
        </InputItem>
        <InputItem title="解説用プロンプト">
          <input type="text" className="w-full" />
        </InputItem>
        <InputItem title="使用するモデル">
          <input type="text" className="w-full" />
        </InputItem>
      </Container>
    </div>
  )
}

export default Settings
