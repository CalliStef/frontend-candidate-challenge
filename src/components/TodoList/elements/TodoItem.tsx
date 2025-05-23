import { ElementType } from "react";
import { TodoItemData } from "..";

export type TodoItemProps = {
  todoData: TodoItemData;
  onEditToggle: (id: number) => void;
  onDelete: (id: number) => void;
  onCompletionToggle: (id: number) => void;
};

const getCompletionClass = (done: boolean) => {
  return done ? "fa-solid complete-icon" : "fa-regular";
};

export const TodoItem = ({
  todoData,
  onEditToggle,
  onDelete,
  onCompletionToggle,
}: TodoItemProps) => {
  const { text, id, done } = todoData;

  // if a todo is completed, strikethrough the text to symbolize it completed
  const TextEl: ElementType = done ? "s" : "span";

  return (
    <li className={done ? "todo-done" : undefined}>
      <i
        data-testid="todo-completion-toggle"
        className={`${getCompletionClass(done)} fa-square-check`}
        onClick={() => onCompletionToggle(id)}
      />
      <TextEl>{text}</TextEl>
      <div className="todoList-configure-cont">
        <i
          data-testid="todo-edit-toggle"
          className="configure-icon fa-solid fa-pen"
          onClick={() => onEditToggle(id)}
        />
        <i
          data-testid="todo-delete"
          className="configure-icon fa-solid fa-trash"
          onClick={() => onDelete(id)}
        />
      </div>
    </li>
  );
};
