import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Button from "./Button";
import { Star } from "lucide-react";

describe("Button", () => {
  it("renders children text", () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText("Click me")).toBeInTheDocument();
  });

  it("renders an icon when provided", () => {
    render(<Button icon={Star}>With icon</Button>);
    expect(screen.getByText("With icon")).toBeInTheDocument();
  });

  it("applies primary variant classes by default", () => {
    render(<Button>Default</Button>);
    const btn = screen.getByText("Default");
    expect(btn.className).toMatch(/bg-primary/);
  });

  it("applies cta variant classes", () => {
    render(<Button variant="cta">CTA</Button>);
    const btn = screen.getByText("CTA");
    expect(btn.className).toMatch(/bg-cta/);
  });

  it("applies size lg classes", () => {
    render(<Button size="lg">Large</Button>);
    const btn = screen.getByText("Large");
    expect(btn.className).toMatch(/text-base/);
  });
});
