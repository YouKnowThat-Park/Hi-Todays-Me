import EditTodoModal from "./_components/EditTodoModal";
import TodoInput from "./_components/TodoInput";
import TodoList from "./_components/TodoList";

export default function TodoListPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 ">
      <div className="w-[500px] h-[600px] p-6 bg-white dark:bg-neutral-800 rounded-lg shadow-md flex flex-col">
        <h2 className="text-2xl font-bold text-center mb-4 text-gray-800 dark:text-white">
          To Do List
        </h2>
        <TodoInput />
        <div className="flex-1 overflow-y-auto">
          <TodoList />
        </div>
        <EditTodoModal />
      </div>
    </div>
  );
}
