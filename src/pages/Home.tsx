import { useEffect, useState } from "react";
import { InputAdd } from "../components/InputAdd";
import { TodoItem, type ITodoItem } from "../components/TodoItem";
import { List } from "../components/List";
import { TodoAPI } from "../shared/services/api/TodoAPI";
import { PageLayout } from "../shared/layout/page-layout/PageLayout";

export function Home() {
  const [list, setList] = useState<ITodoItem[]>([]);

  useEffect(() => {
    TodoAPI.getAll().then((data) => {
      setList(data);
    });
  }, []);

  const handleAdd = (label: string) => {
    TodoAPI.create({ label, completed: false }).then((data) => {
      setList([...list, data]);
    });
  };

  const handleRemove = (id: string) => {
    TodoAPI.deleteById(id).then(() =>
      setList(list.filter((itemToRemove) => itemToRemove.id !== id))
    );
  };

  const handleComplete = (id: string) => {
    TodoAPI.updateById(id, { completed: true }).then(() =>
      setList(
        list.map((itemToComplete) => ({
          ...itemToComplete,
          completed: itemToComplete.id === id ? true : itemToComplete.completed,
        }))
      )
    );
  };

  return (
    <PageLayout title="Homepage">
      <InputAdd onAdd={handleAdd} />

      <List>
        {list.map((listItem) => (
          <TodoItem
            key={listItem.id}
            {...listItem}
            onComplete={() => handleComplete(listItem.id)}
            onRemove={() => handleRemove(listItem.id)}
          />
        ))}
      </List>
    </PageLayout>
  );
}
