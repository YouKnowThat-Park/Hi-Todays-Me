"use client";

import { todoListState } from "@/recoil/todo-List/todoAtom";
import { useState } from "react";
import { useRecoilState } from "recoil";

export default function TodoInput() {
  const [todos, setTodos] = useRecoilState(todoListState);
  const [input, setInput] = useState("");

  const addTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input.trim()) return;

    const newTodo = {
      id: Date.now(),
      text: input.trim(),
      completed: false,
    };

    const updated = [...todos, newTodo];

    setTodos(updated); // Recoil 상태 업데이트
    localStorage.setItem("todos", JSON.stringify(updated));

    setInput("");
  };

  return (
    <div>
      <form onSubmit={addTodo} className="flex">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="할 일을 입력해주세요."
          className="ml-[50px] border w-[350px] justify-center items-center"
        />
        <button
          type="submit"
          className="ml-[20px] border bg-blue-500 text-white w-15 h-12"
        >
          추가
        </button>
      </form>
    </div>
  );
}
