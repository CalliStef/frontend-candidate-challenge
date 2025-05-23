import { useState } from "react";
import { TodoItemData } from "..";

export type EditTodoProps = {
  todoData: TodoItemData;
  onEditToggle: (id: string) => void;
  onUpdate: (id: string, v: string) => void;
};

export const EditTodo = ({
  todoData,
  onEditToggle,
  onUpdate,
}: EditTodoProps) => {
  const { text, id } = todoData;
  const [editedText, setEditedText] = useState(text);
  return (
    <li>
      <input
        type="text"
        className="todoList-edit-input"
        id="todo-input"
        value={editedText}
        onChange={(e) => setEditedText(e.target.value)}
      />
      <div className="todoList-configure-cont">
        <i
          className="configure-icon fa-solid fa-check"
          onClick={() => onUpdate(id, editedText)}
        />
        <i
          className="configure-icon fa-solid fa-xmark"
          onClick={() => onEditToggle(id)}
        />
      </div>
    </li>
  );
};
