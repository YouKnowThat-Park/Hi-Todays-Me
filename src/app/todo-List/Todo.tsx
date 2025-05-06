import { useRecoilState } from "recoil";
import EditTodoModal from "./_components/EditTodoModal";
import TodoInput from "./_components/TodoInput";
import TodoList from "./_components/TodoList";
import { dayFilterState } from "@/recoil/todo-List/todoAtom";
import { useEffect } from "react";

export default function TodoListPage() {
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const [selectedDay, setSelectedDay] = useRecoilState(dayFilterState);

  useEffect(() => {
    if (!selectedDay) {
      const today = new Date().getDay(); // 0 ~ 6
      setSelectedDay(days[today]);
    }
  }, [selectedDay, setSelectedDay]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 ">
      <div className="w-[500px] h-[600px] p-6 bg-white dark:bg-neutral-800 rounded-lg shadow-md flex flex-col">
        <h2 className="text-2xl font-bold text-center mb-4 text-gray-800 dark:text-white">
          To Do List
        </h2>
        <div className="flex gap-2 flex-wrap mb-2">
          {days.map((day) => (
            <button
              key={day}
              onClick={() => setSelectedDay(day)} // ✅ 여기 추가
              className={`px-4 py-2 text-sm rounded-md border transition ${
                selectedDay === day
                  ? "bg-blue-500 text-white border-blue-500"
                  : "border-gray-300 hover:bg-gray-100"
              }`}
            >
              {day}
            </button>
          ))}
        </div>
        <TodoInput />
        <div className="flex-1 overflow-y-auto">
          <TodoList />
        </div>
        <EditTodoModal />
      </div>
    </div>
  );
}
