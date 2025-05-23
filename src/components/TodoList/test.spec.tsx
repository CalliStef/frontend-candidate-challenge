import { render, screen } from "@testing-library/react";
import { TodoList } from ".";

describe("CreateInput", () => {
  const todoListFnProps = {
    onEditToggle: jest.fn(),
    onUpdate: jest.fn(),
    onDelete: jest.fn(),
    onCompletionToggle: jest.fn(),
  };

  it("should render", () => {
    const Component = render(<TodoList todos={[]} {...todoListFnProps} />);
    expect(Component).not.toBeUndefined();
  });

  it("render empty text if there is no todos", () => {
    render(<TodoList todos={[]} {...todoListFnProps} />);
    expect(screen.getByText(/I'm jealous/i)).toBeDefined();
  });

  it("render the listed todos", async () => {
    const todo = {
      id: "a-very-unique-id",
      text: "sleep for 60 hours",
      done: false,
      isEditing: false,
    };

    render(<TodoList todos={[todo]} {...todoListFnProps} />);

    expect(await screen.findByText("sleep for 60 hours")).toBeInTheDocument();
  });
});
