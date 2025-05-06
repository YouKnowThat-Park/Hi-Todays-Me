import { selector } from "recoil";
import { filterState, todoListState } from "./atom";

export const filteredTodoSelector = selector({
  key: "filteredTodoSelector",
  get: ({ get }) => {
    const filter = get(filterState);
    const todos = get(todoListState);

    switch (filter) {
      case "completed":
        return todos.filter((todo) => todo.completed);
      case "active":
        return todos.filter((todo) => !todo.completed);
      default:
        return todos;
    }
  },
});

export const todoListStateSelector = selector({
  key: "todoListStateSelector",
  get: ({ get }) => {
    const todos = get(todoListState);
    const total = todos.length;
    const completed = todos.filter((t) => t.completed).length;
    const active = total - completed;
    return { total, completed, active };
  },
});
