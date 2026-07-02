import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import LeaderboardSection from "./LeaderboardSection";

describe("LeaderboardSection", () => {
  it("renders section heading", () => {
    render(<LeaderboardSection />);
    expect(screen.getByText("BẢNG XẾP HẠNG")).toBeInTheDocument();
  });

  it("renders tabs", () => {
    render(<LeaderboardSection />);
    expect(screen.getByText("Bảng Vàng")).toBeInTheDocument();
  });

  it("renders time filters", () => {
    render(<LeaderboardSection />);
    ["Tất cả", "Tháng này", "Tuần này", "Hôm nay"].forEach((t) =>
      expect(screen.getByText(t)).toBeInTheDocument()
    );
  });

  it("renders podium top names", () => {
    render(<LeaderboardSection />);
    ["Hoàng Anh", "Minh Trí", "Linh Nhi"].forEach((n) =>
      expect(screen.getByText(n)).toBeInTheDocument()
    );
  });

  it("renders leaderboard table rows", () => {
    render(<LeaderboardSection />);
    expect(screen.getByText("Bảo An")).toBeInTheDocument();
    expect(screen.getByText("Khánh Vy")).toBeInTheDocument();
  });

  it("renders 'Xem thêm' button", () => {
    render(<LeaderboardSection />);
    expect(screen.getByText("Xem thêm danh sách")).toBeInTheDocument();
  });
});
