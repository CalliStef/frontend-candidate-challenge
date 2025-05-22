import React, { useState } from "react";

import { TodoList, CreateInput, type TodoListItem } from "./components";

import "./styles.scss";

export default function App() {
  const [todos, setTodos] = useState<TodoListItem[]>([
    { text: "Buy milk", done: true },
    { text: "Buy bread", done: false },
  ]);

  const onAdd = (newTask: string) => {
    if (!newTask.length) return; // make sure input is a valid text

    // add a new task to the todo list
    const newTaskObj: TodoListItem = {
      text: newTask,
      done: false,
    };

    setTodos([...todos, newTaskObj]);
  };

  return (
    <div className="todoListApp">
      <div className="forsta-logo" />
      <CreateInput onSubmit={onAdd} />
      <TodoList todos={todos} />
    </div>
  );
}
