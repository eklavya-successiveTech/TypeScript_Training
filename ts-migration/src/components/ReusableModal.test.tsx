import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ReusableModal from "./ReusableModal";

describe("ReusableModal", () => {
  test("does not render when open is false", () => {
    render(
      <ReusableModal open={false} onClose={jest.fn()}>
        <p>Hidden content</p>
      </ReusableModal>
    );
   
    expect(screen.queryByText("Hidden content")).toBeNull();
  });

  test("renders content when open is true", () => {
    render(
      <ReusableModal open={true} onClose={jest.fn()}>
        <p>Visible content</p>
      </ReusableModal>
    );
    expect(screen.getByText("Visible content")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /close/i })).toBeInTheDocument();
  });

  test("calls onClose when Close button is clicked", () => {
    const mockOnClose = jest.fn();
    render(
      <ReusableModal open={true} onClose={mockOnClose}>
        <p>Close me</p>
      </ReusableModal>
    );
    const closeButton = screen.getByRole("button", { name: /close/i });
    fireEvent.click(closeButton);
    expect(mockOnClose).toHaveBeenCalledTimes(1);
  });
});
