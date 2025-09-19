import { atom } from "recoil";
import { Todo } from "../todo-List/todoAtom";

export const editTodoModalState = atom<{ isOpen: boolean; todo: Todo | null }>({
  key: "editTodoModalState",
  default: { isOpen: false, todo: null },
});

export const calendarModal = atom<{
  isOpen: boolean;
  selectedDate: string | null;
}>({
  key: "calendarModalState",
  default: { isOpen: false, selectedDate: null },
});
