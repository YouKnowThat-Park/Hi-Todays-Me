import { atom } from "recoil";
import { Todo } from "../todo-List/todoAtom";

export const editTodoModalState = atom<{ isOpen: boolean; todo: Todo | null }>({
  key: "editTodoModalState",
  default: { isOpen: false, todo: null },
});
