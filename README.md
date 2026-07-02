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
│   ├── NotFound.jsx            # 404 page
│   └── ExamPage.jsx            # Exam taking page with timer, questions, scoring
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
│   ├── exam/
│   │   ├── ExamTimer.jsx       # Countdown timer with progress bar
│   │   ├── ExamProgress.jsx    # Question progress dots
│   │   ├── QuestionCard.jsx    # Multiple-choice question display
│   │   └── ExamResult.jsx      # Score summary after submission
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
