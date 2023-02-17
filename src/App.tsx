import { useState } from 'react'
import Button from './components/Button'
import { captalizeText, slugifyText } from './utils/utils'

function App() {
  const [text, setText] = useState('')

  function Upper() {
    setText(text.toUpperCase())
  }

  function Lower() {
    setText(text.toLocaleLowerCase())
  }

  function Slugify() {
    setText(slugifyText(text))
  }

  function Captalize() {
    setText(captalizeText(text))
  }

  return (
    <div className="flex flex-col items-center justify-center max-w-7xl mx-auto h-screen">
      <input
        className="border border-neutral-200 bg-neutral-900 text-neutral-200 focus:outline-none mb-2 w-1/2 p-2"
        type="text"
        value={text}
        onChange={e => {
          setText(e.target.value)
        }}
      />

      <div className="flex flex-wrap gap-2">
        <Button click={Upper} text="Upper" />
        <Button click={Lower} text="Lower" />
        <Button click={Slugify} text="Slugify" />
        <Button click={Captalize} text="Captalize" />
      </div>
    </div>
  )
}

export default App
