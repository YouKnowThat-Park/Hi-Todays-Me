import EditTodoModal from "./_components/EditTodoModal";
import TodoInput from "./_components/TodoInput";
import TodoList from "./_components/TodoList";

export default function TodoListPage() {
  return (
    <div>
      <TodoInput />
      <TodoList />
      <EditTodoModal />
    </div>
  );
}
