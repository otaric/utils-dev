import { MouseEventHandler } from 'react'

interface Props {
  click: MouseEventHandler<HTMLButtonElement>
  text: string
}

export default function Button({ click, text }: Props) {
  return (
    <button
      className="border px-4 py-1 border-neutral-200 text-neutral-200"
      onClick={click}
    >
      {text}
    </button>
  )
}
