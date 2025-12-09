import TodoItemStyles from "./TodoItem.module.css";

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
    <li key={id} className={TodoItemStyles.Item} data-complete={completed}>
      <span className={TodoItemStyles.Text}>{label}</span>

      <div className={TodoItemStyles.ButtonGroup}>
        {!completed && (
          <button
            onClick={onComplete}
            className={TodoItemStyles.ButtonComplete}
          >
            To complete
          </button>
        )}
        <button onClick={onRemove} className={TodoItemStyles.ButtonRemove}>
          To Remove
        </button>
      </div>
    </li>
  );
}
