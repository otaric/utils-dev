import { useState } from "react";
import Button from "./components/Button";
import { captalizeText, slugifyText } from "./utils/utils";

function App() {
  const [text, setText] = useState("");

  function Upper() {
    setText(text.toUpperCase());
  }

  function Lower() {
    setText(text.toLocaleLowerCase());
  }

  function Slugify() {
    setText(slugifyText(text));
  }

  function Captalize() {
    setText(captalizeText(text));
  }

  return (
    <div className="mx-auto flex h-screen max-w-7xl flex-col items-center justify-center">
      <input
        autoFocus
        className="mb-2 w-1/2 border border-neutral-200 bg-neutral-900 p-2 text-neutral-200 focus:outline-none"
        type="text"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />

      <div className="flex flex-wrap gap-2">
        <Button click={Upper} text="Upper" />
        <Button click={Lower} text="Lower" />
        <Button click={Slugify} text="Slugify" />
        <Button click={Captalize} text="Captalize" />
      </div>
    </div>
  );
}

export default App;
