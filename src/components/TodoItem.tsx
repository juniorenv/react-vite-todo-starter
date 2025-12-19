export interface ITodoItem {
  id: string;
  label: string;
  completed: boolean;
}

export interface ITodoItemWithoutId extends Omit<ITodoItem, "id"> {}

const buttonClasses = "px-3 py-2 text-white cursor-pointer rounded-sm";

interface ITodoItemProps extends ITodoItem {
  onComplete(): void;
  onRemove(): void;
}

export function TodoItem({
  id,
  label,
  completed,
  onComplete,
  onRemove,
}: ITodoItemProps) {
  return (
    <li
      className="flex p-2 rounded-sm items-center justify-between hover:bg-gray-100"
      data-complete={completed}
    >
      <span className={completed ? "line-through" : ""}>{label}</span>

      <div className="flex gap-2">
        {!completed && (
          <button
            className={`${buttonClasses} bg-green-500 hover:bg-green-600 active:bg-green-700`}
            onClick={onComplete}
          >
            To complete
          </button>
        )}
        <button
          className={`${buttonClasses} bg-rose-600 hover:bg-rose-700 active:bg-rose-800`}
          onClick={onRemove}
        >
          To Remove
        </button>
      </div>
    </li>
  );
}
