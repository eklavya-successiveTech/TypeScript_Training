import React from "react";
import { render, screen } from "@testing-library/react";
import UserCard from "./UserCard";

describe("UserCard component", () => {
  it("renders user information and avatar", () => {
    render(
      <UserCard
        name="Jane Doe"
        email="john@gmail.com"
        avatarURL="https://unsplash.com/photos/a-woman-with-long-hair-and-a-black-shirt-Ud4bLEy4gC0"
      />
    );
    expect(screen.getByText(/Name:/)).toHaveTextContent("Name: Jane Doe");
    expect(screen.getByText(/Email:/)).toHaveTextContent("Email: john@gmail.com");
    const img = screen.getByAltText("User avatar");
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute("src", "https://unsplash.com/photos/a-woman-with-long-hair-and-a-black-shirt-Ud4bLEy4gC0");
  });
});
