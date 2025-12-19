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
    <div className="flex gap-2 p-2">
      <input
        className="flex-1 px-3 py-2 text-base rounded-sm border border-black/12 outline-none focus:border-gray-300 focus:ring-1 focus:ring-gray-300"
        value={inputValue}
        onKeyDown={(e) => {
          if (e.key === "Enter") handleAdd();
        }}
        ref={inputRef}
        onChange={(event) => setInputValue(event.target.value)}
      />
      <button
        className="px-3 py-2 text-base text-white cursor-pointer rounded-sm bg-green-500 hover:bg-green-600 active:bg-green-700"
        onClick={handleAdd}
      >
        Add to list
      </button>
    </div>
  );
}
