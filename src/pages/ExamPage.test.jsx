import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { describe, it, expect } from "vitest";
import ExamPage from "./ExamPage";

function renderWithRouter(examId = "starters") {
  return render(
    <MemoryRouter initialEntries={[`/exam/${examId}`]}>
      <Routes>
        <Route path="/exam/:examId" element={<ExamPage />} />
        <Route path="/" element={<div>Home</div>} />
      </Routes>
    </MemoryRouter>
  );
}

describe("ExamPage", () => {
  it("renders exam title for starters", () => {
    renderWithRouter("starters");
    expect(screen.getByText("Thi thử Starters")).toBeInTheDocument();
  });

  it("renders question count in start screen", () => {
    renderWithRouter("starters");
    expect(screen.getByText(/\d+ câu hỏi/)).toBeInTheDocument();
  });

  it("renders start screen with student name input", () => {
    renderWithRouter("starters");
    expect(screen.getByText("Họ và tên học sinh")).toBeInTheDocument();
  });

  it("renders start button", () => {
    renderWithRouter("starters");
    expect(screen.getByText("BẮT ĐẦU LÀM BÀI")).toBeInTheDocument();
  });

  it("renders location info", () => {
    renderWithRouter("starters");
    expect(screen.getByText(/1031 Nguyễn Ảnh Thủ/)).toBeInTheDocument();
  });

  it("shows not-found message for invalid exam", () => {
    renderWithRouter("nonexistent");
    expect(screen.getByText("Bài thi không tìm thấy")).toBeInTheDocument();
  });

  it("renders back-to-home link on not found", () => {
    renderWithRouter("nonexistent");
    expect(screen.getByRole("link", { name: /Quay về trang chủ/i })).toBeInTheDocument();
  });
});
