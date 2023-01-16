import { getByRole, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greeting from "./Greeting";

describe("Greeting component", () => {
  test("renders hello world as text", () => {
    // Arange
    render(<Greeting />);

    //Act
    // null

    // Assert
    const helloWorldElement = screen.getByText("Hello World");
    expect(helloWorldElement).toBeInTheDocument();
  });

  test("renders Default if button was not clicked", () => {
    // Arange
    render(<Greeting />);

    // Act
    // null

    // Assert
    const outputElement = screen.getByText("Default", { exact: false });
    expect(outputElement).toBeInTheDocument();
  });

  test("renders Changed! if the button was clicked", () => {
    // Arange
    render(<Greeting />);

    //Act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    // Assert
    const outputElement = screen.getByText("Changed!");
    expect(outputElement).toBeInTheDocument();
  });

  test("Does not render Default if the button was clicked", () => {
    // Arange
    render(<Greeting />);

    //Act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    // Assert
    const outputElement = screen.queryByText("Default", { exact: false });
    expect(outputElement).toBeNull();
  });
});
