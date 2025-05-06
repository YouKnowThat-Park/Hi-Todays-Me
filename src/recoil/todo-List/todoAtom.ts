import { atom } from "recoil";

export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

export const isHydratedState = atom({
  key: "isHydratedState",
  default: false,
});

export const userState = atom({
  key: "userState",
  default: null as null | { id: number; name: string },
});

export const todoListState = atom<Todo[]>({
  key: "todoListState",
  default: [],
  effects_UNSTABLE: [
    ({ setSelf, onSet }) => {
      if (typeof window === "undefined") return;

      const saved = localStorage.getItem("todos");
      if (saved) {
        try {
          setSelf(JSON.parse(saved));
        } catch (e) {
          console.error("invalid localStorage format");
        }
      }

      onSet((newValue) => {
        localStorage.setItem("todos", JSON.stringify(newValue));
      });
    },
  ],
});

export const filterState = atom<"all" | "active" | "completed">({
  key: "filterState",
  default: "all",
});
