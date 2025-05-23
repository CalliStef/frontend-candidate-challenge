import React, { useState } from "react";
import { TodoList, CreateInput, type TodoItemData } from "./components";

import "./styles.scss";

export default function App() {
  const [todos, setTodos] = useState<TodoItemData[]>([]);

  // todo item state interactions below
  const onAdd = (newTodo: string) => {
    if (!newTodo.length) return;
    setTodos([
      {
        id: Date.now(),
        text: newTodo,
        done: false,
        isEditing: false,
      },
      ...todos,
    ]);
  };

  const onDelete = (selectedTodoID: number) => {
    setTodos(todos.filter((todo) => todo.id !== selectedTodoID));
  };

  const onEditToggle = (selectedTodoID: number) => {
    setTodos(
      todos.map((t) => ({
        ...t,
        isEditing: selectedTodoID === t.id ? !t.isEditing : t.isEditing,
      }))
    );
  };

  const onUpdate = (updateTaskID: number, updatedValue: string) => {
    if (!updatedValue.length) return;

    setTodos(
      todos.map((t) => ({
        ...t,
        text: updateTaskID === t.id ? updatedValue : t.text,
        isEditing: updateTaskID === t.id ? false : t.isEditing,
      }))
    );
  };

  const onTodoCompletionToggle = (selectedTodoID: number) => {
    const updatedTodoStates = todos.map((t) => ({
      ...t,
      done: selectedTodoID === t.id ? !t.done : t.done,
    }));

    // priortize showing in-progress todos first, completed ones are pushed below
    const sortedTodos = updatedTodoStates.sort((todoA, todoB) => {
      if (todoA.done === todoB.done) {
        return todoB.id - todoA.id;
      }

      return todoA.done ? 1 : -1;
    });

    setTodos(sortedTodos);
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
