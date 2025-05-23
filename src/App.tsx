import React, { useState } from "react";
import { TodoList, CreateInput, type TodoItemData } from "./components";
import { v4 as uuidv4 } from "uuid";

import "./styles.scss";

export default function App() {
  const [todos, setTodos] = useState<TodoItemData[]>([
    // the default todos as set initially upon forked repo
    { id: "1", text: "Buy milk", done: true, isEditing: false },
    { id: "2", text: "Buy bread", done: false, isEditing: false },
  ]);

  // Create Todo Feature
  const onAdd = (newTodo: string) => {
    if (!newTodo.length) return; // make sure input is a valid text

    // create the required todo obj with the default value details
    const newTodoObj: TodoItemData = {
      id: uuidv4(),
      text: newTodo,
      done: false,
      isEditing: false,
    };

    // add the new task to the existing list
    setTodos([...todos, newTodoObj]);
  };

  // Delete Todo Feature
  const onDelete = (selectedTodoID: string) => {
    // filter out the removed todo based on the selected id
    setTodos(todos.filter((todo) => todo.id !== selectedTodoID));
  };

  // Edit Toggle Feature
  const onEditToggle = (selectedTodoID: string) => {
    // update the todo list and update the necessary states matching with the passed task index
    setTodos(
      todos.map((todo) =>
        selectedTodoID === todo.id
          ? {
              ...todo,
              isEditing: !todo.isEditing,
            }
          : todo
      )
    );
  };

  // Update Todo Feature
  const onUpdate = (updateTaskID: string, updatedValue: string) => {
    if (!updatedValue.length) return; // make sure input value exists

    // update the todo list and update the necessary states matching with the passed task index
    setTodos(
      todos.map((todo) =>
        updateTaskID === todo.id
          ? {
              ...todo,
              text: updatedValue,
              isEditing: false,
            }
          : todo
      )
    );
  };

  // Completion Toggle Feature
  const onTodoCompletionToggle = (selectedTodoID: string) => {
    setTodos(
      todos.map((todo) =>
        selectedTodoID === todo.id ? { ...todo, done: !todo.done } : todo
      )
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
