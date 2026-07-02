# Plan 001: Cài đặt Test Infrastructure (Vitest + React Testing Library)

> **Executor instructions**: Follow this plan step by step. Run every verification command and confirm the expected result before moving to the next step. If any STOP condition occurs, stop and report.

## Status

- **Priority**: P1 | **Effort**: M | **Risk**: LOW | **Depends on**: none | **Category**: tests
- **Planned at**: 2026-06-26 (no git)

## Why this matters

Dự án không có bất kỳ test nào. Mọi thay đổi sau này — đặc biệt plan 005 (Exam Page) — không có safety net. Thiết lập test infrastructure giúp characterize behavior hiện tại và ngăn regression.

## Current state

- Không có test framework: package.json không có script test
- Không có file *.test.* / *.spec.* trong toàn bộ src/
- Build: npm run build exit 0 | Lint: npm run lint exit 0
- Package manager: npm | Module type: ESM

Key files cần characterize: HeroSection, ExamCard, ExamSection, LeaderboardSection, LeaderboardPodium, LeaderboardTable, TopNav, NotFound, HomePage, Button, Badge.

## Commands

| Purpose | Command | Expected |
|---------|---------|----------|
| Install | npm install | exit 0 |
| Lint | npm run lint | exit 0 |
| Build | npm run build | exit 0 |
| Test | npx vitest run | all pass |

## Scope

**In scope:** package.json, vitest.config.js, src/test/setup.js, 5 test files
**Out of scope:** src/ source files, vite.config.js, Tailwind/CSS config

## Steps

### Step 1: Cài đặt dependencies
`npm install --save-dev vitest @testing-library/react @testing-library/jest-dom jsdom @testing-library/user-event`
**Verify**: `npm ls vitest` hien thi version

### Step 2: Tao vitest.config.js
File `vitest.config.js` o root:
```js
import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
export default defineConfig({
  plugins: [react()],
  test: { environment: "jsdom", setupFiles: ["./src/test/setup.js"], globals: true },
});
```
**Verify**: `npx vitest --version` hien thi version

### Step 3: Tao src/test/setup.js
```js
import "@testing-library/jest-dom";
```
**Verify**: File ton tai

### Step 4: Them test script vao package.json
Them vao `"scripts"`: `"test": "vitest run"`, `"test:watch": "vitest"`
**Verify**: `npm run test -- --version` khong loi

### Step 5: Viet test cho Button — `src/components/ui/Button.test.jsx`
```jsx
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
    expect(screen.getByText("Default").className).toMatch(/bg-primary/);
  });
  it("applies cta variant classes", () => {
    render(<Button variant="cta">CTA</Button>);
    expect(screen.getByText("CTA").className).toMatch(/bg-cta/);
  });
  it("applies size lg classes", () => {
    render(<Button size="lg">Large</Button>);
    expect(screen.getByText("Large").className).toMatch(/text-base/);
  });
});
```
**Verify**: `npx vitest run src/components/ui/Button.test.jsx` → 5 tests pass

### Step 6: Viet test cho NotFound — `src/pages/NotFound.test.jsx`
```jsx
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, it, expect } from "vitest";
import NotFound from "./NotFound";

describe("NotFound", () => {
  it("renders 404 heading", () => {
    render(<MemoryRouter><NotFound /></MemoryRouter>);
    expect(screen.getByText("404")).toBeInTheDocument();
  });
  it("renders 'Trang khong ton tai'", () => {
    render(<MemoryRouter><NotFound /></MemoryRouter>);
    expect(screen.getByText("Trang khong ton tai")).toBeInTheDocument();
  });
  it("renders link back to home", () => {
    render(<MemoryRouter><NotFound /></MemoryRouter>);
    const link = screen.getByRole("link", { name: /quay ve trang chu/i });
    expect(link).toHaveAttribute("href", "/");
  });
});
```
**Verify**: `npx vitest run src/pages/NotFound.test.jsx` → 3 tests pass

### Step 7: Viet test cho HeroSection — `src/components/home/HeroSection.test.jsx`
```jsx
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import HeroSection from "./HeroSection";

describe("HeroSection", () => {
  it("renders main heading", () => {
    render(<HeroSection />);
    expect(screen.getByText(/Vua Hoc/i)).toBeInTheDocument();
    expect(screen.getByText(/Vua Chill/i)).toBeInTheDocument();
  });
  it("renders VEU badge", () => {
    render(<HeroSection />);
    expect(screen.getByText("Anh Ngu Viet Chau Au")).toBeInTheDocument();
  });
  it("renders CTA buttons", () => {
    render(<HeroSection />);
    expect(screen.getByText("Bat dau ngay")).toBeInTheDocument();
    expect(screen.getByText("Dang ky hoc thu")).toBeInTheDocument();
  });
  it("renders stat cards", () => {
    render(<HeroSection />);
    expect(screen.getByText("18+")).toBeInTheDocument();
    expect(screen.getByText("85+")).toBeInTheDocument();
    expect(screen.getByText("100%")).toBeInTheDocument();
  });
});
```
**Verify**: `npx vitest run src/components/home/HeroSection.test.jsx` → 4 tests pass

### Step 8: Viet test cho ExamCard — `src/components/home/ExamCard.test.jsx`
```jsx
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import ExamCard from "./ExamCard";
import { EXAM_DATA } from "../../config/constants";

describe("ExamCard", () => {
  const starters = EXAM_DATA.find((e) => e.id === "starters");
  const ket = EXAM_DATA.find((e) => e.id === "ket-1");

  it("renders exam title", () => {
    render(<ExamCard exam={starters} />);
    expect(screen.getByText("Thi thu Starters")).toBeInTheDocument();
  });
  it("renders description", () => {
    render(<ExamCard exam={starters} />);
    expect(screen.getByText(/Kiem tra trinh do co ban/)).toBeInTheDocument();
  });
  it("renders time and questions", () => {
    render(<ExamCard exam={starters} />);
    expect(screen.getByText("45 Phut")).toBeInTheDocument();
    expect(screen.getByText("30 Cau")).toBeInTheDocument();
  });
  it("renders badge", () => {
    render(<ExamCard exam={starters} />);
    expect(screen.getByText("Starters")).toBeInTheDocument();
  });
  it("renders 'Vao thi' button", () => {
    render(<ExamCard exam={starters} />);
    expect(screen.getByText("Vao thi")).toBeInTheDocument();
  });
  it("renders KET exam correctly", () => {
    render(<ExamCard exam={ket} />);
    expect(screen.getByText("A2 Key (KET)")).toBeInTheDocument();
    expect(screen.getByText("KET")).toBeInTheDocument();
  });
});
```
**Verify**: `npx vitest run src/components/home/ExamCard.test.jsx` → 6 tests pass

### Step 9: Viet test cho LeaderboardSection — `src/components/home/LeaderboardSection.test.jsx`
```jsx
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import LeaderboardSection from "./LeaderboardSection";

describe("LeaderboardSection", () => {
  it("renders section heading", () => {
    render(<LeaderboardSection />);
    expect(screen.getByText("BANG XEP HANG")).toBeInTheDocument();
  });
  it("renders tabs", () => {
    render(<LeaderboardSection />);
    expect(screen.getByText("Bang Vang")).toBeInTheDocument();
  });
  it("renders time filters", () => {
    render(<LeaderboardSection />);
    ["Tat ca", "Thang nay", "Tuan nay", "Hom nay"].forEach(t =>
      expect(screen.getByText(t)).toBeInTheDocument()
    );
  });
  it("renders podium top names", () => {
    render(<LeaderboardSection />);
    ["Hoang Anh", "Minh Tri", "Linh Nhi"].forEach(n =>
      expect(screen.getByText(n)).toBeInTheDocument()
    );
  });
  it("renders leaderboard table rows", () => {
    render(<LeaderboardSection />);
    expect(screen.getByText("Bao An")).toBeInTheDocument();
    expect(screen.getByText("Khanh Vy")).toBeInTheDocument();
  });
  it("renders 'Xem them' button", () => {
    render(<LeaderboardSection />);
    expect(screen.getByText("Xem them danh sach")).toBeInTheDocument();
  });
});
```
**Verify**: `npx vitest run src/components/home/LeaderboardSection.test.jsx` → 6 tests pass

### Step 10: Chay toan bo test suite
`npm run test`
**Verify**: Tat ca tests pass (~25+ tests). Exit code 0.

## Done criteria

- [ ] `npm run test` exits 0, tat ca tests pass
- [ ] `npm run build` exits 0 (khong regression)
- [ ] `npm run lint` exits 0 (khong loi moi)
- [ ] `vitest.config.js` ton tai
- [ ] `src/test/setup.js` ton tai
- [ ] 5 test files ton tai: Button, NotFound, HeroSection, ExamCard, LeaderboardSection
- [ ] `package.json` co script `"test"` va `"test:watch"`
- [ ] `plans/README.md` status row updated to DONE

## STOP conditions

Stop and report back if:
- `npm install` fails voi dependency conflict
- Vitest khong tuong thich voi React 19
- Test fail do can mock useScrollReveal (IntersectionObserver) hoac useDarkMode context
- `npm run build` breaks sau khi them devDependencies

## Maintenance notes

- Khi them component moi (plan 005 ExamPage), phai them test file tuong ung
- Khi migrate sang TypeScript, cap nhat vitest.config.js them typecheck
- File test dung describe/it tu vitest (khong can import global neu globals: true)
- Neu LeaderboardSection test fail vi useScrollReveal dung IntersectionObserver → them mock: `window.IntersectionObserver = class { observe(){} unobserve(){} disconnect(){} }` trong setup.js
