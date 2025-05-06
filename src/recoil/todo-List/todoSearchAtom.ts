import { atom } from "recoil";

export const todoSearchState = atom<string>({
  key: "todoSearchState",
  default: "",
});
