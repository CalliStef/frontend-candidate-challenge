import React from "react";
import { EditTodo, type EditTodoProps } from "./elements/EditTodo";
import { TodoItem, type TodoItemProps } from "./elements/TodoItem";

import "./styles.scss";

export type TodoItemData = {
  id: string;
  text: string;
  done: boolean;
  isEditing: boolean;
};

type TodoListProps = {
  todos: TodoItemData[];
} & Pick<EditTodoProps, "onEditToggle" | "onUpdate"> &
  Pick<TodoItemProps, "onDelete">;

export const TodoList = ({
  todos,
  onEditToggle,
  onUpdate,
  onDelete,
}: TodoListProps) => {
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
          <TodoItem
            key={todo.id}
            todoData={todo}
            onEditToggle={onEditToggle}
            onDelete={onDelete}
          />
        )
      )}
    </ul>
  );
};
