import React, { useState } from "react";

import { TodoList, type TodoListItem } from "./components";

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
