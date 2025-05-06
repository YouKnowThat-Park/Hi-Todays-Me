"use client";

import { useRecoilValue, useRecoilState, useSetRecoilState } from "recoil";
import { Todo, todoListState } from "@/recoil/todo-List/todoAtom";
import { useEffect, useState } from "react";
import { filteredTodoSelector } from "@/recoil/todo-List/todoSelectors";
import { editTodoModalState } from "@/recoil/todo-List/editTodomodalAtom";

export default function TodoList() {
  const filteredTodos = useRecoilValue(filteredTodoSelector); // ✅ 이게 배열
  const [todos, setTodos] = useRecoilState(todoListState);
  const [hasHydrated, setHasHydrated] = useState(false);
  const setModal = useSetRecoilState(editTodoModalState);

  useEffect(() => {
    setHasHydrated(true);
  }, []);

  if (!hasHydrated) return null;

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
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
      <ul>
        {filteredTodos.map((todo) => (
          <li key={todo.id} className="flex items-center gap-2 py-1">
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id)}
            />
            <span
              style={{
                textDecoration: todo.completed ? "line-through" : "",
              }}
            >
              {todo.text}
            </span>
            <button onClick={() => openEditModal(todo)} className="border px-1">
              수정
            </button>
            <button onClick={() => deleteTodo(todo.id)} className="border px-1">
              삭제
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
