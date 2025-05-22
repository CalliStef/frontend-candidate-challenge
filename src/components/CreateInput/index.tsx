import React, { useState } from "react";

import "./styles.scss";

type CreateInputProps = {
  onSubmit: (v: string) => void;
};

export const CreateInput = ({ onSubmit }: CreateInputProps) => {
  const [inputValue, setInputValue] = useState<string>("");
  return (
    <div className="addTodo">
      <label htmlFor="task">Create a task:</label>
      <div>
        <input
          type="text"
          id="todo-input"
          name="addTodo"
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={() => onSubmit(inputValue)}>Add</button>
      </div>
    </div>
  );
};
