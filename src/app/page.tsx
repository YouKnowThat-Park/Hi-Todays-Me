"use client";
import React from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

const page = () => {
  return (
    <div className="w-[500px] h-[500px] ml-[100px] mt-[100px] border">
      <h2 className="my-2 flex justify-center items-center">To Do List</h2>
      <TodoInput />
      <TodoList />
    </div>
  );
};

export default page;
