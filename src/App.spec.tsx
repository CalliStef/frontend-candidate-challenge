import { act, render, screen, waitFor } from "@testing-library/react";
import App from "./App";
import { UserEvent, userEvent } from "@testing-library/user-event";

describe("App", () => {
  const createTodo = async (user: UserEvent, todoText: string) => {
    const inputField = screen.getByTestId("add-todo-input");
    const submitButton = screen.getByRole("button", {
      name: "Add",
    });

    await act(async () => {
      await user.type(inputField, todoText);
      await user.click(submitButton);
    });
  };

  it("should render", () => {
    const Component = render(<App />);
    expect(Component).not.toBeUndefined();
  });

  it("creating todo items matches with the rendered amount", async () => {
    const user = userEvent.setup();
    render(<App />);

    await createTodo(user, "todo test item 1");
    await createTodo(user, "todo test item 2");

    expect(screen.getAllByText(/todo test item/i)).toHaveLength(2);
  });

  it("remove todo item", async () => {
    const user = userEvent.setup();
    render(<App />);

    await createTodo(user, "todo test item 1");

    expect(screen.getAllByText(/todo test item/i)).toHaveLength(1);

    const deleteIconBtns = screen.getAllByTestId("todo-delete");

    await act(async () => {
      await user.click(deleteIconBtns[0]);
    });

    // `getBy` throws an error when it can't find anything. Hence `queryBy`
    expect(screen.queryAllByText(/todo test item/i)).toHaveLength(0);
  });

  it("update todo item", async () => {
    const user = userEvent.setup();
    render(<App />);

    await createTodo(user, "todo test item 1");

    const editToggle = screen.getByTestId("todo-edit-toggle");

    // toggle the todo item's editing state
    await act(async () => {
      await user.click(editToggle);
    });

    const editInput = screen.getByTestId("todo-edit-input");
    const editConfirmBtn = screen.getByTestId("todo-edit-confirm");

    // update todo item's text
    await act(async () => {
      await user.type(editInput, "updated item!");
      await user.click(editConfirmBtn);
    });

    await waitFor(() => {
      expect(screen.getByText(/updated/i)).toHaveTextContent("updated item!");
    });
  });

  it("toggle todo item completion status", async () => {
    const user = userEvent.setup();
    render(<App />);

    await createTodo(user, "todo test item 1");

    const completionToggle = screen.getByTestId("todo-completion-toggle");

    await act(async () => {
      await user.click(completionToggle);
    });

    // `hidden` is the aria attribute for strikethrough element
    expect(screen.queryByRole("hidden")).toBeDefined();
  });
});
