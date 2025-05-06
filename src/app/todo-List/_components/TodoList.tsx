"use client";

import { useRecoilValue, useRecoilState, useSetRecoilState } from "recoil";
import { Todo, todoListState } from "@/recoil/todo-List/todoAtom";
import { useEffect, useState } from "react";
import { filteredTodoSelector } from "@/recoil/todo-List/todoSelectors";
import { editTodoModalState } from "@/recoil/todo-List/editTodomodalAtom";

export default function TodoList() {
  const filteredTodos = useRecoilValue(filteredTodoSelector);
  const [todos, setTodos] = useRecoilState(todoListState);
  const setModal = useSetRecoilState(editTodoModalState);
  const [hasHydrated, setHasHydrated] = useState(false);

  useEffect(() => {
    setHasHydrated(true);
  }, []);

  if (!hasHydrated) return null;

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              completed: !todo.completed,
              completedAt: !todo.completed
                ? new Date().toISOString()
                : undefined,
            }
          : todo
      )
    );
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const openEditModal = (todo: Todo) => {
    setModal({ isOpen: true, todo });
  };

  return (
    <div className="mx-4 my-4">
      <ul className="space-y-3">
        {filteredTodos.map((todo) => (
          <li
            key={todo.id}
            className="flex justify-between items-center px-4 py-3 bg-white dark:bg-neutral-800 border border-gray-200 dark:border-neutral-700 rounded-lg shadow-sm hover:shadow-md transition duration-200"
          >
            {/* 체크박스 + 텍스트 */}
            <div className="flex items-center gap-3 overflow-hidden flex-1 min-w-0">
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleTodo(todo.id)}
                className="w-5 h-5 accent-blue-500 shrink-0"
              />
              <span
                className={`text-base text-gray-800 dark:text-white ${
                  todo.completed ? "line-through text-gray-400" : ""
                }`}
                style={{
                  display: "-webkit-box",
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                {todo.text}
              </span>
            </div>

            {/* 수정 / 삭제 버튼 */}
            <div className="flex flex-col items-end gap-1 shrink-0">
              {todo.completed && todo.completedAt && (
                <span className="text-xs text-gray-400 leading-snug text-right">
                  완료됨:
                  {new Date(todo.completedAt).toLocaleDateString()}
                  <br />
                  {new Date(todo.completedAt).toLocaleTimeString()}
                </span>
              )}
              <div className="flex gap-2">
                <button
                  onClick={() => openEditModal(todo)}
                  className="px-3 py-1 text-sm rounded-md text-gray-700 dark:text-gray-200 border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-neutral-700 transition"
                >
                  수정
                </button>
                <button
                  onClick={() => deleteTodo(todo.id)}
                  className="px-3 py-1 text-sm rounded-md text-red-500 border border-red-300 hover:bg-red-50 dark:hover:bg-red-900/20 transition"
                >
                  삭제
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
