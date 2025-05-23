import React from "react";

import "./styles.scss";
import { EditTodo, EditTodoProps } from "./elements/EditTodo";
import { TodoItem } from "./elements/TodoItem";

export type TodoItemData = {
  id: string;
  text: string;
  done: boolean;
  isEditing: boolean;
};

type TodoListProps = {
  todos: TodoItemData[];
} & Pick<EditTodoProps, "onEditToggle" | "onUpdate">;

export const TodoList = ({ todos, onEditToggle, onUpdate }: TodoListProps) => {
  return (
    <ul className="todoList">
      {todos.map((todo) =>
        todo.isEditing ? ( // render the todo variants based on the todo's editing state
          <EditTodo
            key={todo.id}
            todoData={todo}
            onEditToggle={onEditToggle}
            onUpdate={onUpdate}
          />
        ) : (
          <TodoItem key={todo.id} todoData={todo} onEditToggle={onEditToggle} />
        )
      )}
    </ul>
  );
};
