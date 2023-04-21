import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Button from "./Button";

describe("Button component", () => {
  it("renders children passed as props", () => {
    const buttonText = "Click me";
    render(<Button>{buttonText}</Button>);
    expect(screen.getByText(buttonText)).toBeInTheDocument();
  });

  it("adds className passed as prop to the button's classList", () => {
    const testClassName = "test-class";
    render(<Button className={testClassName}>Click me</Button>);
    const button = screen.getByRole("button");
    expect(button.classList.contains(testClassName)).toBe(true);
  });
});
