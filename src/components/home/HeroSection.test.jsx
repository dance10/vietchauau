import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, it, expect } from "vitest";
import HeroSection from "./HeroSection";

function renderWithRouter() {
  return render(<MemoryRouter><HeroSection /></MemoryRouter>);
}

describe("HeroSection", () => {
  it("renders main heading", () => {
    renderWithRouter();
    expect(screen.getByText("Vừa Học")).toBeInTheDocument();
    expect(screen.getByText("Vừa Chill")).toBeInTheDocument();
  });

  it("renders VEU badge", () => {
    renderWithRouter();
    expect(screen.getByText("Anh Ngữ Việt Châu Âu")).toBeInTheDocument();
  });

  it("renders CTA buttons", () => {
    renderWithRouter();
    expect(screen.getByText("Bắt đầu ngay")).toBeInTheDocument();
    expect(screen.getByText("Đăng ký học thử")).toBeInTheDocument();
  });

  it("renders stat cards", () => {
    renderWithRouter();
    expect(screen.getByText("13+")).toBeInTheDocument();
    expect(screen.getByText("100+")).toBeInTheDocument();
    expect(screen.getByText("Tự động")).toBeInTheDocument();
  });
});
