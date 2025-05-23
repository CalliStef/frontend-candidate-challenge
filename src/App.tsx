import React, { useState } from "react";
import { TodoList, CreateInput, type TodoItemData } from "./components";
import { v4 as uuidv4 } from "uuid";

import "./styles.scss";

export default function App() {
  const [todos, setTodos] = useState<TodoItemData[]>([]);

  // todo item state interactions below
  const onAdd = (newTodo: string) => {
    if (!newTodo.length) return;
    setTodos([
      ...todos,
      {
        id: uuidv4(),
        text: newTodo,
        done: false,
        isEditing: false,
      },
    ]);
  };

  const onDelete = (selectedTodoID: string) => {
    setTodos(todos.filter((todo) => todo.id !== selectedTodoID));
  };

  const onEditToggle = (selectedTodoID: string) => {
    setTodos(
      todos.map((t) => ({
        ...t,
        isEditing: selectedTodoID === t.id ? !t.isEditing : t.isEditing,
      }))
    );
  };

  const onUpdate = (updateTaskID: string, updatedValue: string) => {
    if (!updatedValue.length) return;

    setTodos(
      todos.map((t) => ({
        ...t,
        text: updateTaskID === t.id ? updatedValue : t.text,
        isEditing: false,
      }))
    );
  };

  const onTodoCompletionToggle = (selectedTodoID: string) => {
    setTodos(
      todos.map((t) => ({
        ...t,
        done: selectedTodoID === t.id ? !t.done : t.done,
      }))
    );
  };

  return (
    <div className="todoListApp">
      <div className="forsta-logo" />
      <CreateInput onSubmit={onAdd} />
      <TodoList
        todos={todos}
        onEditToggle={onEditToggle}
        onUpdate={onUpdate}
        onDelete={onDelete}
        onCompletionToggle={onTodoCompletionToggle}
      />
    </div>
  );
}
