import React from "react";

export type TodoListItem = {
  text: string;
  done: boolean;
};

type TodoListProps = {
  todos: TodoListItem[];
};
export const TodoList = ({ todos }: TodoListProps) => {
  return (
    <ul className="todoList">
      {todos.map((item, i) => (
        <li key={i}>
          <span data-testid={`todo${i}`}>{item.text}</span>
        </li>
      ))}
    </ul>
  );
};
