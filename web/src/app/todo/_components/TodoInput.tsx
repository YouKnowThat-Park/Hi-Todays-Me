"use client";

import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { todoListState, dayFilterState } from "@/state/todo-List/todoAtom";
import ScrollTodoUI from "@/components/todo/ScrollTodoUI";
import { scrollTodoModal } from "@/state/modal/ModalAtom";

export default function TodoInput() {
  const [todos, setTodos] = useRecoilState(todoListState);
  const [day] = useRecoilState(dayFilterState);
  const [modal, setModal] = useRecoilState(scrollTodoModal);
  const [input, setInput] = useState("");

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
    setModal({ isOpen: false }); // 저장 후 닫기
  };

  // 뒤로가기 핸들링
  useEffect(() => {
    const handlePopState = () => {
      setModal({ isOpen: false });
    };

    if (modal.isOpen) {
      window.history.pushState({ modal: true }, ""); // 모달 열릴 때 히스토리 추가
      window.addEventListener("popstate", handlePopState);
    }

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, [modal.isOpen, setModal]);

  return (
    <div>
      {modal.isOpen && (
        <ScrollTodoUI
          isOpen={modal.isOpen}
          onClose={() => {
            setModal({ isOpen: false });
            window.history.back(); // 닫을 때 히스토리 되돌리기
          }}
        >
          <form
            onSubmit={addTodo}
            className="flex justify-end items-center gap-3 w-full"
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="할 일을 입력해주세요."
              className="border flex-1 h-12 px-3 rounded"
            />
            <button
              type="submit"
              className="border bg-blue-500 text-white px-4 h-12 rounded"
            >
              추가
            </button>
          </form>
        </ScrollTodoUI>
      )}
    </div>
  );
}
