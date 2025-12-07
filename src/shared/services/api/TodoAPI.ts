import axios from "axios";
import type {
  ITodoItem,
  ITodoItemWithoutId,
} from "../../../components/TodoItem";

const axiosInstance = axios.create();

export const TodoAPI = {
  async getAll(): Promise<ITodoItem[]> {
    const response = await axiosInstance.get("/api/todos");

    return response.data.todos as ITodoItem[];
  },

  async create(createTodoDto: ITodoItemWithoutId): Promise<ITodoItem> {
    const createdTodo = await axiosInstance.post("/api/todos", createTodoDto);

    return createdTodo.data.todos as ITodoItem;
  },

  async updateById(
    id: string,
    updateTodoDto: Partial<ITodoItemWithoutId>
  ): Promise<ITodoItem> {
    const updatedTodo = await axiosInstance.patch(
      `/api/todos/${id}`,
      updateTodoDto
    );

    return updatedTodo.data.todos as ITodoItem;
  },

  async deleteById(id: string) {
    await axiosInstance.delete(`/api/todos/${id}`);

    return;
  },
};
