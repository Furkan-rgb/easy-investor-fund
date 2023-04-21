import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import StyledCard from "./StyledCard";

describe("StyledCard component", () => {
  it("renders the component with children", () => {
    render(
      <StyledCard>
        <p>Test content</p>
      </StyledCard>
    );

    const testContent = screen.getByText("Test content");
    expect(testContent).toBeInTheDocument();
  });

  it("has the correct structure and classNames", () => {
    const { container } = render(
      <StyledCard>
        <p>Test content</p>
      </StyledCard>
    );

    const outerDiv = container.firstChild;
    expect(outerDiv).toHaveClass("relative grid");

    if (outerDiv) {
      const childDiv = outerDiv.firstChild;
      if (childDiv) {
        expect(childDiv).toHaveClass(
          "z-10 p-4 transition bg-white border-2 rounded-sm hover:translate-x-1 hover:-translate-y-1 border-gray-950"
        );

        const proseDiv = childDiv.firstChild;
        if (proseDiv) {
          expect(proseDiv).toHaveClass("z-20 prose");
        }
      }

      const backgroundDiv = outerDiv.lastChild;
      if (backgroundDiv) {
        expect(backgroundDiv).toHaveClass(
          "absolute inset-0 z-0 w-full h-full bg-gray-800 rounded-sm"
        );
      }
    }
  });
});
