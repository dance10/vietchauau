# Plan 005: Exam Page with Static Question Bank

> **Executor instructions**: Follow this plan step by step. Run every verification command. If any STOP condition occurs, stop and report.

## Status

- **Priority**: P2 | **Effort**: L | **Risk**: MED | **Depends on**: 001 (test infrastructure)
- **Category**: direction | **Planned at**: 2026-06-26 (no git)

## Why this matters

Du an ten la BaiKiemTraVEU (Bai Kiem Tra Online) nhung chua co chuc nang lam bai thi. Nut Vao thi trong ExamCard hien khong lam gi. Plan nay them route /exam/:examId, question bank tinh cho Starters/KET/PET, UI lam bai (question card, timer, progress bar, result screen), va navigation tu ExamCard.

## Current state

**ExamCard** (src/components/home/ExamCard.jsx:27-29): Nut Vao thi la button khong co onClick/router. Chi la UI.

**EXAM_DATA** (src/config/constants.js:12-26): 13 exams voi id, level, title, desc, time, questions, badge.

**Router** (src/App.jsx): Chi co 2 route: / va *. Khong co dynamic route.

**HomePage** (src/pages/HomePage.jsx): groupByLevel gom KET+PET chung 1 section.

## Commands

| Purpose | Command | Expected |
|---------|---------|----------|
| Install | npm install | exit 0 |
| Lint | npm run lint | exit 0 |
| Build | npm run build | exit 0 |
| Test | npm run test | all pass |
| Dev | npm run dev | server starts |

## Scope

**In scope:**
- src/pages/ExamPage.jsx — new exam page
- src/components/exam/QuestionCard.jsx — question display
- src/components/exam/ExamTimer.jsx — countdown timer
- src/components/exam/ExamProgress.jsx — progress bar
- src/components/exam/ExamResult.jsx — result screen
- src/config/questions.js — question bank
- src/config/constants.js — add EXAM_TIME_MAP
- src/App.jsx — add route /exam/:examId
- src/components/home/ExamCard.jsx — add navigation to exam
- src/pages/ExamPage.test.jsx — test exam page
- src/config/questions.test.js — test question bank

**Out of scope:**
- Backend/Supabase integration
- Scoring persistence
- User auth/login
- Real timer sync with server

## Steps

### Step 1: Tao question bank — src/config/questions.js

Tao file src/config/questions.js voi question bank cho 3 exam: starters, ket-1, pet-1. Moi exam co 5 cau hoi multiple-choice.

```js
export const QUESTION_BANK = {
  starters: [
    { id: "s1", question: "What is the color of the sky?", options: ["Red", "Blue", "Green", "Yellow"], answer: 1 },
    { id: "s2", question: "How many legs does a cat have?", options: ["Two", "Three", "Four", "Six"], answer: 2 },
    { id: "s3", question: "Which animal can fly?", options: ["Dog", "Fish", "Bird", "Snake"], answer: 2 },
    { id: "s4", question: "What do you use to write?", options: ["Spoon", "Pen", "Cup", "Plate"], answer: 1 },
    { id: "s5", question: "Which fruit is yellow?", options: ["Apple", "Grape", "Banana", "Orange"], answer: 2 },
  ],
  "ket-1": [
    { id: "k1", question: "Choose the correct sentence:", options: ["She don''t like coffee", "She doesn''t like coffee", "She not like coffee", "She no like coffee"], answer: 1 },
    { id: "k2", question: "What is the past tense of 'go'?", options: ["Goed", "Went", "Gone", "Going"], answer: 1 },
    { id: "k3", question: "Which word is a noun?", options: ["Quickly", "Beautiful", "Happiness", "Run"], answer: 2 },
    { id: "k4", question: "'I ___ to the cinema yesterday.'", options: ["go", "went", "gone", "going"], answer: 1 },
    { id: "k5", question: "What is the opposite of 'hot'?", options: ["Warm", "Cool", "Cold", "Mild"], answer: 2 },
  ],
  "pet-1": [
    { id: "p1", question: "The meeting was postponed ___ the bad weather.", options: ["because", "due to", "although", "despite"], answer: 1 },
    { id: "p2", question: "If I ___ rich, I would travel the world.", options: ["am", "was", "were", "be"], answer: 2 },
    { id: "p3", question: "She has been studying English ___ 2019.", options: ["for", "since", "from", "in"], answer: 1 },
    { id: "p4", question: "The book, ___ was published last year, became a bestseller.", options: ["that", "what", "which", "who"], answer: 2 },
    { id: "p5", question: "He suggested ___ to the park.", options: ["to go", "going", "go", "went"], answer: 1 },
  ],
};

export function getQuestions(examId) {
  return QUESTION_BANK[examId] || [];
}

export function shuffleArray(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
```

**Verify**: File ton tai. Import getQuestions trong Node: `node -e "import('./src/config/questions.js').then(m => console.log(m.getQuestions('starters').length))"` → 5

### Step 2: Add EXAM_TIME_MAP to constants.js

Mo src/config/constants.js. Add vao cuoi file (truoc export statements):

```js
export const EXAM_TIME_MAP = {
  starters: 45 * 60,
  movers: 60 * 60,
  flyers: 75 * 60,
  "ket-1": 100 * 60,
  "ket-2": 100 * 60,
  "pet-1": 120 * 60,
  "ielts-r-1": 60 * 60,
  "ielts-l-1": 30 * 60,
  "ielts-w-1": 60 * 60,
  "toeic-r-1": 75 * 60,
  "toeic-l-1": 45 * 60,
  "ts-1": 90 * 60,
  "ts-2": 90 * 60,
};
```

**Verify**: Import duoc: `node -e "import('./src/config/constants.js').then(m => console.log(m.EXAM_TIME_MAP['starters']))"` → 2700

### Step 3: Tao ExamTimer component

Tao src/components/exam/ExamTimer.jsx:

```jsx
import { useState, useEffect } from "react";
import { Clock } from "lucide-react";

export default function ExamTimer({ totalSeconds, onTimeUp }) {
  const [remaining, setRemaining] = useState(totalSeconds);
  const [isWarning, setIsWarning] = useState(false);

  useEffect(() => {
    if (remaining <= 0) { onTimeUp?.(); return; }
    if (remaining <= 300) setIsWarning(true);
    const timer = setInterval(() => setRemaining((r) => r - 1), 1000);
    return () => clearInterval(timer);
  }, [remaining, onTimeUp]);

  const mins = Math.floor(remaining / 60);
  const secs = remaining % 60;
  const pct = (remaining / totalSeconds) * 100;

  return (
    <div className="flex items-center gap-3 bg-surface rounded-xl border border-border-light px-4 py-2 shadow-sm">
      <Clock className={`w-5 h-5 ${isWarning ? "text-error animate-pulse" : "text-primary"}`} />
      <span className={`font-black text-lg tabular-nums ${isWarning ? "text-error" : "text-text-primary"}`}>
        {String(mins).padStart(2, "0")}:{String(secs).padStart(2, "0")}
      </span>
      <div className="w-24 h-2 bg-surface-container-low rounded-full overflow-hidden">
        <div className={`h-full rounded-full transition-all duration-1000 ${isWarning ? "bg-error" : "bg-primary"}`} style={{ width: `${Math.max(pct, 0)}%` }} />
      </div>
    </div>
  );
}
```

**Verify**: Build pass.

### Step 4: Tao ExamProgress component

Tao src/components/exam/ExamProgress.jsx:

```jsx
export default function ExamProgress({ current, total, answers }) {
  return (
    <div className="flex items-center gap-1.5">
      {Array.from({ length: total }, (_, i) => (
        <div key={i} className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold border-2 transition-all duration-200 ${
          i === current ? "border-primary bg-primary text-white scale-110 shadow-sm" :
          answers[i] !== undefined ? "border-surface-tint bg-surface-container text-on-surface-variant" :
          "border-border-light bg-surface text-text-secondary"
        }`}>
          {i + 1}
        </div>
      ))}
    </div>
  );
}
```

**Verify**: Build pass.

### Step 5: Tao QuestionCard component

Tao src/components/exam/QuestionCard.jsx:

```jsx
export default function QuestionCard({ question, selectedAnswer, onSelect }) {
  const labels = ["A", "B", "C", "D"];

  return (
    <div className="bg-surface rounded-2xl border border-border-light shadow-sm p-6 md:p-8 max-w-3xl mx-auto">
      <div className="flex items-start gap-3 mb-6">
        <span className="text-2xl md:text-3xl font-black text-primary-shrink-0">Q.</span>
        <h2 className="text-lg md:text-xl font-bold text-text-primary leading-relaxed">{question.question}</h2>
      </div>
      <div className="flex flex-col gap-3">
        {question.options.map((opt, idx) => {
          const isSelected = selectedAnswer === idx;
          return (
            <button key={idx} onClick={() => onSelect(idx)}
              className={`w-full text-left px-5 py-4 rounded-xl font-medium text-sm md:text-base border-2 transition-all duration-200 hover:scale-[1.01] active:scale-[0.99] ${
                isSelected
                  ? "border-primary bg-primary/10 text-primary font-bold shadow-sm"
                  : "border-border-light bg-surface-container-low text-text-primary hover:border-outline hover:bg-surface-container"
              }`}>
              <span className="inline-flex items-center justify-center w-7 h-7 rounded-lg bg-surface-container-high text-text-secondary font-bold text-xs mr-3">{labels[idx]}</span>
              {opt}
            </button>
          );
        })}
      </div>
    </div>
  );
}
```

**Verify**: Build pass.

### Step 6: Tao ExamResult component

Tao src/components/exam/ExamResult.jsx:

```jsx
import { Trophy, RotateCcw, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function ExamResult({ questions, answers, examTitle, onRetry }) {
  const correct = questions.filter((q, i) => answers[i] === q.answer).length;
  const total = questions.length;
  const pct = Math.round((correct / total) * 100);

  return (
    <div className="max-w-2xl mx-auto bg-surface rounded-2xl border border-border-light shadow-sm p-6 md:p-8 text-center">
      <Trophy className={`w-16 h-16 mx-auto mb-4 ${pct >= 80 ? "text-gold" : pct >= 50 ? "text-cta" : "text-text-secondary"}`} />
      <h2 className="text-2xl md:text-3xl font-black text-text-primary mb-2">Ket qua bai thi</h2>
      <p className="text-sm text-text-secondary mb-1">{examTitle}</p>
      <div className="text-5xl font-black text-primary my-4">{correct}/{total}</div>
      <p className="text-lg font-bold text-text-primary mb-6">{pct}% — {pct >= 80 ? "Xuat sac!" : pct >= 50 ? "Kha tot!" : "Can co gang them!"}</p>
      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <button onClick={onRetry} className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary hover:bg-blue-light text-white rounded-xl font-bold text-sm transition-all duration-200 hover:scale-105 active:scale-95">
          <RotateCcw className="w-4 h-4" />Lam lai
        </button>
        <Link to="/" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-surface-container-high hover:bg-surface-container-highest text-text-primary rounded-xl font-bold text-sm transition-all duration-200 hover:scale-105 active:scale-95 border border-border-light">
          <ArrowLeft className="w-4 h-4" />Ve trang chu
        </Link>
      </div>
    </div>
  );
}
```

**Verify**: Build pass.

### Step 7: Tao ExamPage

Tao src/pages/ExamPage.jsx:

```jsx
import { useState, useCallback, useMemo } from "react";
import { useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { EXAM_DATA, EXAM_TIME_MAP } from "../config/constants";
import { getQuestions, shuffleArray } from "../config/questions";
import ExamTimer from "../components/exam/ExamTimer";
import ExamProgress from "../components/exam/ExamProgress";
import QuestionCard from "../components/exam/QuestionCard";
import ExamResult from "../components/exam/ExamResult";

export default function ExamPage() {
  const { examId } = useParams();
  const exam = EXAM_DATA.find((e) => e.id === examId);

  const [currentIdx, setCurrentIdx] = useState(0);
  const [answers, setAnswers] = useState({});
  const [isFinished, setIsFinished] = useState(false);

  const questions = useMemo(() => {
    const raw = getQuestions(examId);
    return shuffleArray(raw);
  }, [examId]);

  const handleSelect = useCallback((optionIdx) => {
    setAnswers((prev) => ({ ...prev, [currentIdx]: optionIdx }));
    if (currentIdx < questions.length - 1) {
      setTimeout(() => setCurrentIdx((c) => c + 1), 300);
    }
  }, [currentIdx, questions.length]);

  const handleTimeUp = useCallback(() => setIsFinished(true), []);
  const handleRetry = useCallback(() => {
    setCurrentIdx(0);
    setAnswers({});
    setIsFinished(false);
  }, []);

  if (!exam || questions.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4 px-4">
        <div className="text-6xl font-black text-primary/20">:(</div>
        <h1 className="text-xl font-bold text-text-primary">Bai thi khong tim thay</h1>
        <p className="text-sm text-text-secondary">Exam ID: {examId}</p>
        <Link to="/" className="inline-flex items-center gap-2 mt-4 px-6 py-3 bg-primary text-white rounded-xl font-bold text-sm hover:scale-105 transition-transform">
          <ArrowLeft className="w-4 h-4" />Quay ve trang chu
        </Link>
      </div>
    );
  }

  if (isFinished) {
    return (
      <div className="min-h-[60vh] flex flex-col p-4 pt-8">
        <ExamResult questions={questions} answers={answers} examTitle={exam.title} onRetry={handleRetry} />
      </div>
    );
  }

  const timeInSeconds = EXAM_TIME_MAP[examId] || 60 * 60;

  return (
    <div className="max-w-4xl mx-auto px-4 py-6 md:py-8 flex flex-col gap-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-lg md:text-xl font-black text-text-primary">{exam.title}</h1>
          <p className="text-xs text-text-secondary mt-0.5">{questions.length} cau hoi</p>
        </div>
        <ExamTimer totalSeconds={timeInSeconds} onTimeUp={handleTimeUp} />
      </div>

      <div className="overflow-x-auto hide-scrollbar pb-2">
        <ExamProgress current={currentIdx} total={questions.length} answers={answers} />
      </div>

      <QuestionCard question={questions[currentIdx]} selectedAnswer={answers[currentIdx]} onSelect={handleSelect} />

      <div className="flex justify-between items-center pt-2">
        <button onClick={() => setCurrentIdx((c) => Math.max(0, c - 1))}
          disabled={currentIdx === 0}
          className="px-4 py-2 rounded-xl font-bold text-sm border border-border-light text-text-secondary hover:bg-surface-container-low disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200">
          Cau truoc
        </button>
        <span className="text-xs text-text-secondary font-medium">{currentIdx + 1} / {questions.length}</span>
        {currentIdx === questions.length - 1 && answers[currentIdx] !== undefined && (
          <button onClick={() => setIsFinished(true)}
            className="px-6 py-2 bg-cta hover:bg-cta-hover text-white rounded-xl font-bold text-sm hover:scale-105 active:scale-95 transition-all duration-200">
            Nop bai
          </button>
        )}
      </div>
    </div>
  );
}
```

**Verify**: Build pass. npm run test pass (plan 001 tests still green).

### Step 8: Add route /exam/:examId

Mo src/App.jsx. SEARCH for:

```jsx
import NotFound from "./pages/NotFound";
```

REPLACE with:

```jsx
import NotFound from "./pages/NotFound";
import ExamPage from "./pages/ExamPage";
```

SEARCH for:

```jsx
<Route path="*" element={<Layout><NotFound /></Layout>} />
```

REPLACE with:

```jsx
<Route path="/exam/:examId" element={<Layout><ExamPage /></Layout>} />
<Route path="*" element={<Layout><NotFound /></Layout>} />
```

**Verify**: Build pass. Navigate to /exam/starters renders ExamPage.

### Step 9: Update ExamCard navigation

Mo src/components/home/ExamCard.jsx. SEARCH for:

```jsx
import { Clock, FileText, ArrowRight, Star, GraduationCap, School, BookOpen, Briefcase } from "lucide-react";
```

REPLACE with:

```jsx
import { useNavigate } from "react-router-dom";
import { Clock, FileText, ArrowRight, Star, GraduationCap, School, BookOpen, Briefcase } from "lucide-react";
```

SEARCH for:

```jsx
export default function ExamCard({ exam }) {
```

REPLACE with:

```jsx
export default function ExamCard({ exam }) {
  const navigate = useNavigate();
```

SEARCH for:

```jsx
<button className="w-full bg-primary hover:bg-blue-light text-white py-2.5 px-4 rounded-xl font-bold text-xs flex items-center justify-center gap-2 hover:scale-[1.03] hover:-translate-y-0.5 active:scale-[0.97] transition-all duration-200">
  Vao thi <ArrowRight className="w-4 h-4" />
</button>
```

REPLACE with:

```jsx
<button onClick={() => navigate(`/exam/${exam.id}`)}
  className="w-full bg-primary hover:bg-blue-light text-white py-2.5 px-4 rounded-xl font-bold text-xs flex items-center justify-center gap-2 hover:scale-[1.03] hover:-translate-y-0.5 active:scale-[0.97] transition-all duration-200">
  Vao thi <ArrowRight className="w-4 h-4" />
</button>
```

**Verify**: Build pass. Click Vao thi tren ExamCard → navigate den /exam/starters.

### Step 10: Viet test cho question bank

Tao src/config/questions.test.js:

```jsx
import { describe, it, expect } from "vitest";
import { getQuestions, shuffleArray } from "./questions";

describe("getQuestions", () => {
  it("returns starters questions", () => {
    const qs = getQuestions("starters");
    expect(qs).toHaveLength(5);
    expect(qs[0]).toHaveProperty("id");
    expect(qs[0]).toHaveProperty("question");
    expect(qs[0]).toHaveProperty("options");
    expect(qs[0]).toHaveProperty("answer");
  });
  it("returns KET questions", () => {
    expect(getQuestions("ket-1")).toHaveLength(5);
  });
  it("returns PET questions", () => {
    expect(getQuestions("pet-1")).toHaveLength(5);
  });
  it("returns empty array for unknown exam", () => {
    expect(getQuestions("unknown")).toEqual([]);
  });
});

describe("shuffleArray", () => {
  it("returns same length", () => {
    const arr = [1, 2, 3, 4, 5];
    expect(shuffleArray(arr)).toHaveLength(5);
  });
  it("contains all original elements", () => {
    const arr = [1, 2, 3, 4, 5];
    const shuffled = shuffleArray(arr);
    expect(shuffled.sort()).toEqual([1, 2, 3, 4, 5]);
  });
  it("does not mutate original", () => {
    const arr = [1, 2, 3];
    const copy = [...arr];
    shuffleArray(arr);
    expect(arr).toEqual(copy);
  });
});
```

**Verify**: `npx vitest run src/config/questions.test.js` → 7 tests pass.

### Step 11: Viet test cho ExamPage

Tao src/pages/ExamPage.test.jsx:

```jsx
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
    expect(screen.getByText("Thi thu Starters")).toBeInTheDocument();
  });
  it("renders question count", () => {
    renderWithRouter("starters");
    expect(screen.getByText("5 cau hoi")).toBeInTheDocument();
  });
  it("renders QuestionCard with Q. prefix", () => {
    renderWithRouter("starters");
    expect(screen.getByText("Q.")).toBeInTheDocument();
  });
  it("renders timer", () => {
    renderWithRouter("starters");
    expect(screen.getByText(/\d{2}:\d{2}/)).toBeInTheDocument();
  });
  it("renders progress dots", () => {
    renderWithRouter("starters");
    const dots = screen.getAllByText(/^\d+$/).filter(el => parseInt(el.textContent) >= 1 && parseInt(el.textContent) <= 5);
    expect(dots.length).toBeGreaterThanOrEqual(5);
  });
  it("renders navigation buttons", () => {
    renderWithRouter("starters");
    expect(screen.getByText("Cau truoc")).toBeInTheDocument();
  });
  it("shows not-found message for invalid exam", () => {
    renderWithRouter("nonexistent");
    expect(screen.getByText("Bai thi khong tim thay")).toBeInTheDocument();
  });
  it("renders back-to-home link on not found", () => {
    renderWithRouter("nonexistent");
    expect(screen.getByRole("link", { name: /Quay ve trang chu/i })).toBeInTheDocument();
  });
});
```

**Verify**: `npx vitest run src/pages/ExamPage.test.jsx` → 8 tests pass.

## Done criteria

- [ ] `npm run build` exits 0
- [ ] `npm run lint` exits 0
- [ ] `npm run test` exits 0 (tat ca tests pass, bao gom tests moi)
- [ ] Route /exam/starters render ExamPage
- [ ] Route /exam/ket-1 render ExamPage voi KET questions
- [ ] Route /exam/nonexistent hien thi not-found message
- [ ] ExamCard Vao thi button navigate dung route
- [ ] Timer dem nguoc, warning tai < 5 phut
- [ ] Chon dap an → auto next question (tru cau cuoi)
- [ ] Cau cuoi: chon dap an → hien nut Nop bai
- [ ] Nop bai → hien ExamResult voi score
- [ ] Lam lai → reset toan bo state
- [ ] `plans/README.md` status row updated to DONE

## STOP conditions

- Nếu bất kỳ test step nào fail sau 2 lan thu
- Nếu useScrollReveal / useDarkMode gay crash ExamPage (can boc DarkModeProvider trong test)
- Nếu ExamCard navigate khong hoat dong (React Router version mismatch)
- Nếu build fail sau khi them route moi

## Maintenance notes

- Khi them exam moi vao EXAM_DATA, can them question tuong ung vao QUESTION_BANK va time vao EXAM_TIME_MAP
- ExamCard test can update neu them prop moi
- Xem xet migrate sang Supabase backend de luu ket qua thi (plan tuong lai)
- Timer hien tai dung client-side setInterval — co the bi drift. Khong anh huong voi thoi gian thi ngan.
