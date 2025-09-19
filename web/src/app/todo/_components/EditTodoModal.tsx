import { editTodoModalState } from "@/state/modal/ModalAtom";
import { todoListState } from "@/state/todo-List/todoAtom";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";

export default function EditTodoModal() {
  const [modal, setModal] = useRecoilState(editTodoModalState);
  const [todos, setTodos] = useRecoilState(todoListState);
  const [text, setText] = useState("");

  useEffect(() => {
    if (modal.isOpen && modal.todo) {
      setText(modal.todo.text);
    }
  }, [modal]);

  const closeModal = () => {
    setModal({ isOpen: false, todo: null });
    setText("");
  };

  const save = () => {
    if (!text.trim()) return;
    const updated = todos.map((t) =>
      t.id === modal.todo?.id ? { ...t, text: text.trim() } : t
    );
    setTodos(updated);
    closeModal();
  };

  if (!modal.isOpen || !modal.todo) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white p-4 rounded shadow w-[400px] h-[500px]">
        <h2 className="text-lg mb-2 font-semibold">할 일 수정</h2>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          rows={5}
          className="w-full border px-3 py-2 rounded resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="내용을 수정하세요"
        />
        <div className="flex justify-end gap-2">
          <button
            onClick={save}
            className="px-3 py-1 border rounded bg-blue-500 text-white"
          >
            저장
          </button>
          <button onClick={closeModal} className="px-3 py-1 border rounded">
            취소
          </button>
        </div>
      </div>
    </div>
  );
}
