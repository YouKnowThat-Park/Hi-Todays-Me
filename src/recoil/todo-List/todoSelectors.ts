import { selector } from "recoil";
import { dayFilterState, filterState, todoListState } from "./todoAtom";
import { todoSearchState } from "./todoSearchAtom";

export const filteredTodoSelector = selector({
  key: "filteredTodoSelector",
  get: ({ get }) => {
    const filter = get(filterState);
    const todos = get(todoListState);
    const day = get(dayFilterState);
    const search = get(todoSearchState).toLowerCase();

    let filtered = todos;

    // 완료 상태 필터
    if (filter === "completed") {
      filtered = filtered.filter((todo) => todo.completed);
    } else if (filter === "active") {
      filtered = filtered.filter((todo) => !todo.completed);
    }

    // 요일 필터 (selectedDay가 비어있지 않은 경우만 적용)
    if (day) {
      filtered = filtered.filter((todo) => todo.day === day);
    }

    if (search) {
      filtered = filtered.filter((todo) =>
        todo.text.toLowerCase().includes(search)
      );
    }

    return filtered;
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
