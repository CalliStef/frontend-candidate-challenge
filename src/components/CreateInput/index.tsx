import React, { useState } from "react";

import "./styles.scss";

type CreateInputProps = {
  onSubmit: (v: string) => void;
};

export const CreateInput = ({ onSubmit }: CreateInputProps) => {
  const [inputValue, setInputValue] = useState<string>("");
  return (
    <div className="addTodo">
      <label htmlFor="task">Create a todo task:</label>
      <div>
        <input
          data-testid="add-todo-input"
          type="text"
          id="todo-input"
          name="add-todo-input"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button
          onClick={() => {
            onSubmit(inputValue);
            setInputValue("");
          }}
        >
          Add
        </button>
      </div>
    </div>
  );
};
