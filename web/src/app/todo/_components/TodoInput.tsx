"use client";

import { useState } from "react";
import { useRecoilState } from "recoil";
import { todoListState, dayFilterState } from "@/state/todo-List/todoAtom";
import ExpandingSearchInput from "./ExpandingSearchInput";

export default function TodoInput() {
  const [todos, setTodos] = useRecoilState(todoListState);
  const [day] = useRecoilState(dayFilterState);
  const [input, setInput] = useState("");
  const [isSearchOpen, setIsSearchOpen] = useState(false); // 🔄 검색창 열림 여부

  const addTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input.trim()) return;

    const newTodo = {
      id: Date.now(),
      text: input.trim(),
      completed: false,
      day: day || "",
    };

    const updated = [...todos, newTodo];
    setTodos(updated);
    localStorage.setItem("todos", JSON.stringify(updated));
    setInput("");
  };

  return (
    <div>
      <form
        onSubmit={addTodo}
        className="flex justify-center items-center gap-3 "
      >
        {!isSearchOpen && (
          <>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="할 일을 입력해주세요."
              className="border w-[250px] h-12 text-center"
            />
            <button
              type="submit"
              className="border bg-blue-500 text-white px-4 h-12 rounded"
            >
              추가
            </button>
          </>
        )}
        <ExpandingSearchInput onToggle={setIsSearchOpen} />
      </form>
    </div>
  );
}
