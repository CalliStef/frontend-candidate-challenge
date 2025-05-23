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

export type TodoListProps = {
  todos: TodoItemData[];
} & Pick<EditTodoProps, "onEditToggle" | "onUpdate"> &
  Pick<TodoItemProps, "onDelete" | "onCompletionToggle">;

export const TodoList = ({
  todos,
  onEditToggle,
  onUpdate,
  onDelete,
  onCompletionToggle,
}: TodoListProps) => {
  if (!todos.length) {
    return (
      <p className="todoList-empty">
        Your life seems pretty relaxing. I'm jealous.
        <img
          src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Face%20Holding%20Back%20Tears.png"
          alt="Face Holding Back Tears"
          width="30"
          height="30"
        />
      </p>
    );
  }

  return (
    <ul className="todoList">
      {todos.map((todo) =>
        todo.isEditing ? (
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
            onCompletionToggle={onCompletionToggle}
          />
        )
      )}
    </ul>
  );
};
