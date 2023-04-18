import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import StyledCard from "../StyledCard";

describe("StyledCard", () => {
  test("renders a card with children", () => {
    const { getByText } = render(
      <StyledCard>
        <h1>Card Title</h1>
        <p>Card Content</p>
      </StyledCard>
    );

    expect(getByText(/Card Title/i)).toBeInTheDocument();
    expect(getByText(/Card Content/i)).toBeInTheDocument();
  });
});
