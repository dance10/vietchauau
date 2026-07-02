import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import HeroSection from "./HeroSection";

describe("HeroSection", () => {
  it("renders main heading", () => {
    render(<HeroSection />);
    expect(screen.getByText("Vừa Học")).toBeInTheDocument();
    expect(screen.getByText("Vừa Chill")).toBeInTheDocument();
  });

  it("renders VEU badge", () => {
    render(<HeroSection />);
    expect(screen.getByText("Anh Ngữ Việt Châu Âu")).toBeInTheDocument();
  });

  it("renders CTA buttons", () => {
    render(<HeroSection />);
    expect(screen.getByText("Bắt đầu ngay")).toBeInTheDocument();
    expect(screen.getByText("Đăng ký học thử")).toBeInTheDocument();
  });

  it("renders stat cards", () => {
    render(<HeroSection />);
    expect(screen.getByText("18+")).toBeInTheDocument();
    expect(screen.getByText("85+")).toBeInTheDocument();
    expect(screen.getByText("100%")).toBeInTheDocument();
  });
});
