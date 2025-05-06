"use client";
import React from "react";
import TodoInput from "./todo-List/_components/TodoInput";
import TodoList from "./todo-List/_components/TodoList";
import TodoListPage from "./todo-List/Todo";

const page = () => {
  return (
    <div className="w-[500px] h-[500px] ml-[100px] mt-[100px] border">
      <h2 className="my-2 flex justify-center items-center">To Do List</h2>
      <TodoListPage />
    </div>
  );
};

export default page;
