export interface ITodoItem {
  id: string;
  label: string;
  completed: boolean;
}

export interface ITodoItemWithoutId extends Omit<ITodoItem, "id"> {}

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
    <li key={id}>
      {label + " "}
      {completed ? " Completed" : ""}
      <button onClick={onComplete}>To complete</button>
      <button onClick={onRemove}>To Remove</button>
    </li>
  );
}
