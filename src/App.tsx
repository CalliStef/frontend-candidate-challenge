import React, { useState } from "react";

import { TodoList, TodoListItem } from "./components/TodoList";

import "./styles.scss";

export default function App() {
  const [todos] = useState<TodoListItem[]>([
    { text: "Buy milk", done: true },
    { text: "Buy bread", done: false },
  ]);

  return (
    <div className="todoListApp">
      <div className="forsta-logo" />
      <TodoList todos={todos} />
    </div>
  );
}
