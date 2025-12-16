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
        className="flex-1 p-2 text-base border border-black/12 rounded-sm pl-3 pr-3 outline-none focus:border-gray-300 focus:shadow-[0_1px_0_#c9c9c9]"
        value={inputValue}
        onKeyDown={(e) => {
          if (e.key === "Enter") handleAdd();
        }}
        ref={inputRef}
        onChange={(event) => setInputValue(event.target.value)}
      />
      <button
        className="text-base border-none p-2 text-white cursor-pointer rounded-sm pl-3 pr-3 bg-green-500 hover:bg-green-600 active:bg-green-700"
        onClick={handleAdd}
      >
        Add to list
      </button>
    </div>
  );
}
