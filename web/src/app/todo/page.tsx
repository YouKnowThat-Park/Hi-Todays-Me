"use client";
import { useRecoilState } from "recoil";
import EditTodoModal from "./_components/EditTodoModal";
import TodoList from "./_components/TodoList";
import { dayFilterState } from "@/state/todo-List/todoAtom";
import { useEffect } from "react";
import { AiOutlineEdit } from "react-icons/ai";
import ExpandingSearchInput from "./_components/ExpandingSearchInput";
import { scrollTodoModal } from "@/state/modal/ModalAtom";
import TodoInput from "./_components/TodoInput";

const DAYS = ["🌱Mon", "🌼Tue", "🌿Wed", "🌷Thu", "🌞Fri", "🌑Sat", "🌑Sun"];

export default function Todo() {
  const [selectedDay, setSelectedDay] = useRecoilState(dayFilterState);
  const [, setScrollTodo] = useRecoilState(scrollTodoModal);

  useEffect(() => {
    if (!selectedDay) {
      const today = new Date().getDay(); // 0 ~ 6
      setSelectedDay(DAYS[today]);
    }
  }, [selectedDay, setSelectedDay]);

  return (
    <>
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-[1300px] h-[700px] p-6 bg-white dark:bg-neutral-800 rounded-lg shadow-md flex flex-col border border-gray-300 relative">
          <h2 className="text-2xl font-bold text-center mb-4 text-gray-800 dark:text-white">
            Dear Someday
          </h2>

          <div className="flex flex-1 gap-10">
            {/* 📌 Left: To-Do 영역 */}
            <div className="flex-1 flex flex-col relative">
              {/* 요일 선택 */}
              <div className="flex gap-2 flex-wrap mb-4">
                {DAYS.map((day) => (
                  <button
                    key={day}
                    onClick={() => setSelectedDay(day)}
                    className={`px-4 py-2 text-sm rounded-md border transition ${
                      selectedDay === day
                        ? "bg-blue-500 text-white border-blue-500"
                        : "bg-gray-300 text-white border-gray-300 hover:bg-gray-100 hover:text-black"
                    }`}
                  >
                    {day}
                  </button>
                ))}
              </div>

              {/* 상태 뱃지 (To-Do 박스 내부 오른쪽 정렬) */}
              <div className="flex justify-end gap-2 text-sm text-gray-700 mb-2">
                <span className="bg-gray-100 rounded-full px-3 py-1">😄 3</span>
                <span className="bg-gray-100 rounded-full px-3 py-1">⏳ 5</span>
                <span className="bg-gray-100 rounded-full px-3 py-1">❌ 3</span>
              </div>

              {/* 투두 리스트 */}
              <div className="flex-1 overflow-y-auto">
                <TodoList />
              </div>

              {/* 입력창 */}
              <div className="flex gap-2 justify-end">
                <button
                  onClick={() => setScrollTodo({ isOpen: true })}
                  className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-full shadow transition duration-200 w-10 h-10 flex items-center justify-center"
                >
                  <AiOutlineEdit size={20} />
                </button>

                <ExpandingSearchInput />
              </div>
              <TodoInput />
            </div>

            {/* 📌 Divider (세로 점선) */}
            <div className="w-px h-auto border-l border-gray-300 border-dashed" />

            {/* 📌 Right: Diary 영역 */}
            <div className="flex-1 flex flex-col">
              <h2 className="text-xl font-semibold text-gray-700 mb-2">
                Diary
              </h2>
              {/* Diary 내용 들어갈 곳 */}
              <div className="flex-1 border border-gray-200 rounded p-4 text-gray-600">
                오늘 하루를 기록해보세요...
                <button className="absolute bottom-6 right-7 bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-full shadow transition duration-200 w-10 h-10 flex items-center justify-center">
                  <AiOutlineEdit size={20} />
                </button>
              </div>
            </div>
          </div>
          <EditTodoModal />
        </div>
      </div>
    </>
  );
}
