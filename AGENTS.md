# AGENTS.md — BaiKiemTraVEU (Anh Ngữ Việt Châu Âu)

Baseline agent description cho dự án Nền tảng Luyện Thi Trực Tuyến.

---

## Project Overview

BaiKiemTraVEU là hệ thống luyện thi trực tuyến cho **Anh Ngữ Việt Châu Âu (VEU)** — giúp học viên luyện tập các kỳ thi chuẩn quốc tế: Cambridge Starters/Movers/Flyers, KET, PET, IELTS, TOEIC và Tuyển Sinh lớp 10.

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React 19 + Vite 6 + Tailwind CSS v4 |
| UI Icons | Lucide React |
| Routing | React Router v7 |
| Testing | Vitest + React Testing Library |
| Linting | oxlint |

## Architecture

```
src/
├── main.jsx                  # React entry point
├── App.jsx                   # Root component + router
├── index.css                 # Tailwind imports + theme tokens
├── config/
│   └── constants.js          # Exam data, leaderboard mock data, level colors
├── pages/
│   ├── HomePage.jsx          # Landing page
│   ├── HomePage.test.jsx     # HomePage tests
│   ├── ExamPage.jsx          # Exam taking page
│   ├── ExamPage.test.jsx     # ExamPage tests
│   └── NotFound.jsx          # 404 page
├── components/
│   ├── layout/               # Layout shell components
│   ├── home/                 # Home page components
│   ├── exam/                 # Exam page components
│   └── ui/                   # Shared UI primitives
├── hooks/                    # Custom hooks
└── test/
    └── setup.js              # Test setup
```

## Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start Vite dev server |
| `npm run build` | Production build |
| `npm run test` | Run Vitest tests |
| `npm run lint` | Run oxlint on `src/` |

## Key Conventions

- **Ngôn ngữ**: Vietnamese trong giao tiếp với user
- **UI**: Tailwind v4 CSS variables, responsive mobile-first, dark mode support
- **Components**: PascalCase, 1 file per component
- **Hooks**: camelCase with `use` prefix
- **Icons**: Lucide React
- **Testing**: Vitest + RTL, `*.test.jsx` files co-located with pages
- **Dark mode**: Via DarkModeProvider context, persisted in localStorage
