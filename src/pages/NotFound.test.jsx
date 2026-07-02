import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, it, expect } from "vitest";
import NotFound from "./NotFound";

describe("NotFound", () => {
  it("renders 404 heading", () => {
    render(<MemoryRouter><NotFound /></MemoryRouter>);
    expect(screen.getByText("404")).toBeInTheDocument();
  });

  it("renders 'Trang không tồn tại'", () => {
    render(<MemoryRouter><NotFound /></MemoryRouter>);
    expect(screen.getByText("Trang không tồn tại")).toBeInTheDocument();
  });

  it("renders a link back to home", () => {
    render(<MemoryRouter><NotFound /></MemoryRouter>);
    const link = screen.getByRole("link", { name: /Quay về trang chủ/i });
    expect(link).toHaveAttribute("href", "/");
  });
});
