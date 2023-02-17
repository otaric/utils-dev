import { MouseEventHandler } from "react";

interface Props {
  click: MouseEventHandler<HTMLButtonElement>;
  text: string;
}

export default function Button({ click, text }: Props) {
  return (
    <button
      className="border border-neutral-200 px-4 py-1 text-neutral-200"
      onClick={click}
    >
      {text}
    </button>
  );
}
