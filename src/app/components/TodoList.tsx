"use client";

import { useRecoilValue, useRecoilState } from "recoil";
import { todoListState } from "@/recoil/atom";
import { filteredTodoSelector } from "@/recoil/selectors";
import { useEffect, useState } from "react";

export default function TodoList() {
  const filteredTodos = useRecoilValue(filteredTodoSelector); // ✅ 이게 배열
  const [todos, setTodos] = useRecoilState(todoListState);
  const [hasHydrated, setHasHydrated] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editText, setEditText] = useState("");

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

  const startEdit = (id: number, text: string) => {
    setEditingId(id);
    setEditText;
  };

  const cancelEdit = () => {
    setEditingId(null);
    setEditText("");
  };

  const saveEdit = (id: number) => {
    if (!editText.trim()) return;
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, text: editText.trim() } : todo
      )
    );
    cancelEdit();
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
            {editingId === todo.id ? (
              <>
                <input
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                  className="border px-1 rounded"
                />
                <button
                  onClick={() => saveEdit(todo.id)}
                  className="border px-1"
                >
                  저장
                </button>
                <button onClick={cancelEdit} className="border px-1">
                  취소
                </button>
              </>
            ) : (
              <>
                <span
                  style={{
                    textDecoration: todo.completed ? "line-through" : "",
                  }}
                >
                  {todo.text}
                </span>
                <button
                  onClick={() => startEdit(todo.id, todo.text)}
                  className="border px-1"
                >
                  수정
                </button>
                <button
                  onClick={() => deleteTodo(todo.id)}
                  className="border px-1"
                >
                  삭제
                </button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
