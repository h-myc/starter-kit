import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Home from "../app/page";

describe("Home Page", () => {
  it("renders the main heading", () => {
    render(<Home />);
    const heading = screen.getByRole("heading", {
      level: 1,
      name: /Starter Kit/i,
    });
    expect(heading).toBeInTheDocument();
  });

  it("renders the description text", () => {
    render(<Home />);
    const description = screen.getByText(
      /A secure, robust Next.js template for solo developers./i,
    );
    expect(description).toBeInTheDocument();
  });
});
