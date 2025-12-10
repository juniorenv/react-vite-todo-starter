import InputAddStyles from "./InputAdd.module.css";
import { useRef, useState } from "react";

interface IInputAddProps {
  onAdd(label: string): any;
}

export function InputAdd({ onAdd }: IInputAddProps) {
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const handleAdd = () => {
    if (!inputValue.trim()) return;

    setInputValue("");
    onAdd(inputValue);
    inputRef.current?.focus();
  };

  return (
    <div className={InputAddStyles.Container}>
      <input
        value={inputValue}
        onKeyDown={(e) => {
          if (e.key === "Enter") handleAdd();
        }}
        ref={inputRef}
        onChange={(event) => setInputValue(event.target.value)}
      />
      <button onClick={handleAdd}>Add to list</button>
    </div>
  );
}
