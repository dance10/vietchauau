# Plan 002: Viết README.md cho dự án

> **Executor instructions**: Follow this plan step by step. Run the verification commands. If the STOP condition occurs, stop and report. When done, update the status row in `plans/README.md`.

## Status

- **Priority**: P1
- **Effort**: S
- **Risk**: LOW
- **Depends on**: none
- **Category**: docs
- **Planned at**: 2026-06-26 (no git)

## Why this matters

Dự án không có README.md. Người mới (developer khác, hoặc AI agent) không biết:
- Dự án làm gì
- Cách cài đặt và chạy
- Tech stack
- Cấu trúc thư mục
- Các lệnh có sẵn

README là file đầu tiên mọi người đọc. Thiếu nó gây friction không cần thiết.

## Current state

- **Không có README.md** ở thư mục gốc
- **package.json** có đủ thông tin: name, description, scripts, dependencies
- **index.html** có meta description
- Cấu trúc thư mục đã rõ ràng: `src/{components,pages,hooks,config}`
- Sau plan 001, có thêm script `test` và `test:watch`

## Commands you will need

| Purpose | Command | Expected on success |
|---------|---------|---------------------|
| Lint | `npm run lint` | exit 0 |

## Scope

**In scope**:
- `README.md` — tạo mới ở thư mục gốc

**Out of scope**:
- Không tạo file docs nào khác
- Không sửa `package.json`, `index.html`, hoặc bất kỳ source file nào

## Git workflow

- Không có git repo. Tạo file và verify.

## Steps

### Step 1: Tạo README.md

Tạo file `README.md` tại thư mục gốc với nội dung sau:

```markdown
# BaiKiemTraVEU — Anh Ngữ Việt Châu Âu Online Exam Platform

Hệ thống luyện thi trực tuyến cho **Anh Ngữ Việt Châu Âu (VEU)** — nền tảng giúp học viên luyện tập các kỳ thi chuẩn quốc tế: Cambridge Starters/Movers/Flyers, KET, PET, IELTS, TOEIC và Tuyển Sinh lớp 10.

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | React 19 |
| Build Tool | Vite 6 |
| Styling | Tailwind CSS v4 |
| Routing | React Router v7 |
| Icons | Lucide React |
| Testing | Vitest + React Testing Library |

## Prerequisites

- **Node.js** ≥ 18
- **npm** ≥ 9

## Getting Started

```bash
# Clone repository
git clone <repo-url>
cd BaiKiemTraVEU

# Install dependencies
npm install

# Start dev server
npm run dev
# → http://localhost:5173

# Run tests
npm run test

# Lint
npm run lint

# Production build
npm run build
# → output: dist/
```

## Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start Vite dev server with HMR |
| `npm run build` | Production build to `dist/` |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run oxlint on `src/` |
| `npm run test` | Run Vitest test suite |
| `npm run test:watch` | Run tests in watch mode |

## Project Structure

```
src/
├── main.jsx                    # React entry point
├── App.jsx                     # Root component + router
├── index.css                   # Tailwind imports + theme tokens
├── config/
│   └── constants.js            # Exam data, leaderboard mock data, level colors
├── pages/
│   ├── HomePage.jsx            # Landing page: hero + exam cards + leaderboard
│   └── NotFound.jsx            # 404 page
├── components/
│   ├── layout/
│   │   ├── Layout.jsx          # Page shell (nav + main + footer)
│   │   ├── TopNav.jsx          # Navigation bar with dark mode + mobile menu
│   │   └── Footer.jsx          # Site footer
│   ├── home/
│   │   ├── HeroSection.jsx     # Hero banner with CTA + stats
│   │   ├── ExamSection.jsx     # Horizontal scroll exam list per level
│   │   ├── ExamCard.jsx        # Individual exam card
│   │   ├── LeaderboardSection.jsx  # Ranking with podium + table
│   │   ├── LeaderboardPodium.jsx   # Top 3 podium display
│   │   └── LeaderboardTable.jsx    # Ranked rows table
│   └── ui/
│       ├── Button.jsx          # Reusable button (variants: primary, gold, cta)
│       ├── Badge.jsx           # Inline badge/tag
│       ├── SectionTitle.jsx    # Section heading with gradient line
│       └── Toast.jsx           # Toast notification (success/error)
├── hooks/
│   ├── useDarkMode.jsx         # Dark mode context + provider + hook
│   ├── useScrollNav.js         # Scroll-aware nav state
│   └── useScrollReveal.js      # Intersection Observer reveal animation
└── test/
    └── setup.js                # Test setup (jsdom + jest-dom matchers)
```

## Design System

- **Color**: Primary `#003399` (navy blue), Gold `#c8a84e`, CTA `#f59e0b`
- **Typography**: Inter (Google Fonts), weight 400/700/900
- **Dark Mode**: Supported via `DarkModeProvider` context, persisted in localStorage
- **Responsive**: Mobile-first, breakpoints at `md:` (768px) and `lg:` (1024px)

## License

Private — Anh Ngữ Việt Châu Âu (VEU)

---

Built with ❤️ for VEU students.
```

**Verify**: File `README.md` tồn tại ở thư mục gốc. Mở file kiểm tra nội dung đầy đủ các section: Tech Stack, Getting Started, Scripts, Project Structure, Design System.

## Done criteria

- [ ] `README.md` tồn tại ở thư mục gốc
- [ ] File chứa đủ: project name, description, prerequisites, install steps, dev/build/test/lint commands, folder structure
- [ ] `npm run lint` exit 0 (README không ảnh hưởng lint)
- [ ] `plans/README.md` status row updated to DONE

## STOP conditions

Stop and report back if:
- Không thể tạo file ở thư mục gốc (permission issue)
- Nội dung README có thông tin sai với thực tế codebase (kiểm tra lại package.json, index.html, số lượng file thực tế)

## Maintenance notes

- Cập nhật README khi thêm route mới (plan 005 ExamPage)
- Cập nhật "Available Scripts" khi thêm script mới vào package.json
- Giữ "Project Structure" đồng bộ với cấu trúc thư mục thực tế
