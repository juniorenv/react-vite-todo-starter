import { createServer, Model, Server } from "miragejs";
import type { ITodoItem } from "../components/TodoItem";

const STORAGE_KEY = "MOCK_TODOS";

const saveTodos = (schema: Server["schema"]) => {
  const todos = schema.all("todos");
  localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
};

createServer({
  models: {
    todos: Model,
  },
  seeds(server) {
    const todosAsString = localStorage.getItem("MOCK_TODOS");
    if (!todosAsString) return;

    const todos = JSON.parse(todosAsString);
    todos.models.forEach((todo: ITodoItem) =>
      server.schema.create("todos", todo)
    );
  },
  routes() {
    this.namespace = "api";

    this.get("/todos", (schema) => {
      return schema.all("todos");
    });

    this.post("todos", (schema, request) => {
      const attrs = JSON.parse(request.requestBody);

      const todo = schema.create("todos", attrs);

      saveTodos(schema);

      return todo;
    });

    this.patch("todos/:id", (schema, request) => {
      const id = request.params.id;

      const newAttrs = JSON.parse(request.requestBody);

      const found = schema.find("todos", id);
      found?.update(newAttrs);

      saveTodos(schema);

      return found;
    });

    this.delete("todos/:id", (schema, request) => {
      const id = request.params.id;

      const found = schema.find("todos", id);
      found?.destroy();

      saveTodos(schema);

      return found;
    });
  },
});
