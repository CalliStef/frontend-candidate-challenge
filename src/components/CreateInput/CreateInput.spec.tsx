import { act, render, screen } from "@testing-library/react";
import { CreateInput } from ".";
import userEvent from "@testing-library/user-event";

describe("CreateInput", () => {
  const onSubmit = jest.fn();

  it("should render", () => {
    const Component = render(<CreateInput onSubmit={onSubmit} />);
    expect(Component).not.toBeUndefined();
  });

  it("calls 'onSubmit' upon user submission", async () => {
    const user = userEvent.setup();
    render(<CreateInput onSubmit={onSubmit} />);

    const inputField = screen.getByTestId("add-todo-input");
    const submitButton = screen.getByRole("button", {
      name: "Add",
    });

    await act(async () => {
      await user.type(inputField, "throw out the trash");
      await user.click(submitButton);
    });

    expect(onSubmit).toHaveBeenCalledWith("throw out the trash");
  });
});
