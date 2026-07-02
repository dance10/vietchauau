# Reference Memory — BaiKiemTraVEU Domain Glossary

> Memory type: **reference** — loaded at session start for prefix stability.

---

## Entities

| VI | EN (Code) | Notes |
|---|---|---|
| Bài thi | **Exam** | Một đề thi cụ thể (starters, ket-1, ...) |
| Cấp độ | **Level** | young, ket, pet, ielts, toeic, tuyensinh |
| Câu hỏi | **Question** | Multiple-choice question |
| Bảng xếp hạng | **Leaderboard** | Top users ranked by score |
| Thời gian làm bài | **Timer** | Countdown timer with progress bar |
| Kết quả | **Result** | Score summary after exam submission |

## Exam Levels

| Code | Tên | Exams |
|------|-----|-------|
| `young` | Cambridge Young Learners | Starters, Movers, Flyers |
| `ket` | A2 Key (KET) | KET Mock Tests |
| `pet` | B1 Preliminary (PET) | PET Mock Tests |
| `ielts` | IELTS | Reading, Listening, Writing |
| `toeic` | TOEIC | Reading, Listening |
| `tuyensinh` | Tuyển Sinh Lớp 10 | Đề Tuyển Sinh Mẫu |

## Routes

| URL | Component | Description |
|-----|-----------|-------------|
| `/` | `HomePage.jsx` | Landing page with hero + exam cards + leaderboard |
| `/exam/:examId` | `ExamPage.jsx` | Exam taking with timer, questions, scoring |
| `*` | `NotFound.jsx` | 404 page |

## Component Tree

```
Layout
├── TopNav (dark mode toggle, mobile menu)
├── HomePage
│   ├── HeroSection (CTA + stats)
│   ├── ExamSection (horizontal scroll per level)
│   │   └── ExamCard (individual exam card)
│   └── LeaderboardSection
│       ├── LeaderboardPodium (top 3)
│       └── LeaderboardTable (ranked rows)
├── ExamPage
│   ├── ExamTimer (countdown)
│   ├── ExamProgress (question dots)
│   ├── QuestionCard (MCQ display)
│   └── ExamResult (score summary)
└── Footer
```

## UI Primitives (shared)

- **Button** — variants: primary, gold, cta
- **Badge** — inline tag/badge
- **SectionTitle** — heading with gradient line
- **Toast** — notification (success/error)

## Design Tokens

| Token | Value | Usage |
|-------|-------|-------|
| `primary` | `#003399` | Navy blue, main brand |
| `gold` | `#c8a84e` | Accent gold |
| `cta` | `#f59e0b` | Call-to-action amber |
| Font | `Inter` | Google Fonts, 400/700/900 |

## Conventions

- CSS: Tailwind v4 utility classes
- Components: PascalCase, 1 file each
- Hooks: camelCase with `use` prefix
- Test files: `*.test.jsx` co-located with component
- Dark mode: HTML class `dark` on `<html>`, persisted in localStorage
