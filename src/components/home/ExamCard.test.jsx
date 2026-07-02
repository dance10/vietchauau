import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, it, expect } from "vitest";
import ExamCard from "./ExamCard";
import { EXAM_DATA } from "../../config/constants";

describe("ExamCard", () => {
  const starters = EXAM_DATA.find((e) => e.id === "starters");
  const ket = EXAM_DATA.find((e) => e.id === "ket-1");

  it("renders exam title", () => {
    render(<MemoryRouter><ExamCard exam={starters} /></MemoryRouter>);
    expect(screen.getByText("Thi thử Starters")).toBeInTheDocument();
  });

  it("renders description", () => {
    render(<MemoryRouter><ExamCard exam={starters} /></MemoryRouter>);
    expect(screen.getByText(/Kiểm tra trình độ cơ bản/)).toBeInTheDocument();
  });

  it("renders time and questions", () => {
    render(<MemoryRouter><ExamCard exam={starters} /></MemoryRouter>);
    expect(screen.getByText("45 Phút")).toBeInTheDocument();
    expect(screen.getByText("30 Câu")).toBeInTheDocument();
  });

  it("renders badge", () => {
    render(<MemoryRouter><ExamCard exam={starters} /></MemoryRouter>);
    expect(screen.getByText("Starters")).toBeInTheDocument();
  });

  it("renders 'Vào thi' button", () => {
    render(<MemoryRouter><ExamCard exam={starters} /></MemoryRouter>);
    expect(screen.getByText("Vào thi")).toBeInTheDocument();
  });

  it("renders KET exam correctly", () => {
    render(<MemoryRouter><ExamCard exam={ket} /></MemoryRouter>);
    expect(screen.getByText("A2 Key (KET)")).toBeInTheDocument();
    expect(screen.getByText("KET")).toBeInTheDocument();
  });
});
