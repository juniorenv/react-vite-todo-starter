import { useState } from "react";

interface IInputAddProps {
  onAdd(label: string): any;
}

export function InputAdd({ onAdd }: IInputAddProps) {
  const [inputValue, setInputValue] = useState("");

  const handleAdd = () => {
    if (!inputValue.trim()) return;

    setInputValue("");
    onAdd(inputValue);
  };

  return (
    <div>
      <input
        value={inputValue}
        onKeyDown={(e) => {
          if (e.key === "Enter") handleAdd();
        }}
        onChange={(event) => setInputValue(event.target.value)}
      />
      <button onClick={handleAdd}>Add to list</button>
    </div>
  );
}
