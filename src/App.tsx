import { useState } from 'react'
import Button from './components/Button'

function App() {
  const [text, setText] = useState('')

  function Upper() {
    setText(text.toUpperCase())
  }

  function Lower() {
    setText(text.toLocaleLowerCase())
  }

  function Slugify() {
    setText(
      text
        .toString()
        .normalize('NFKD')
        .toLowerCase()
        .trim()
        .replace(/\s+/g, '-')
        .replace(/[^\w\-]+/g, '')
        .replace(/\_/g, '-')
        .replace(/\-\-+/g, '-')
        .replace(/\-$/g, '')
    )
  }

  function Captalize() {
    const words = text.split(' ')
    for (let i = 0; i < words.length; i++) {
      words[i] = words[i][0].toUpperCase() + words[i].substring(1)
    }
    const wordsJoin = words.join(' ')
    setText(wordsJoin)
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
