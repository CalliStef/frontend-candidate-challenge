import { TodoItemData } from "..";

export type TodoItemProps = {
  todoData: TodoItemData;
  onEditToggle: (id: string) => void;
  onDelete: (id: string) => void;
};

export const TodoItem = ({
  todoData,
  onEditToggle,
  onDelete,
}: TodoItemProps) => {
  const { text, id } = todoData;
  return (
    <li>
      {/* TODO:  bring back `data-testid` attribute for automated testing later on */}
      <span>{text}</span>
      <div className="todoList-configure-cont">
        <i
          className="configure-icon fa-solid fa-pen"
          onClick={() => onEditToggle(id)}
        />
        <i
          className="configure-icon fa-solid fa-trash"
          onClick={() => onDelete(id)}
        />
      </div>
    </li>
  );
};
