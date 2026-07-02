import { useState, useCallback, useMemo, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";
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
  const [direction, setDirection] = useState(0); // -1 prev, 0 initial, +1 next

  const questions = useMemo(() => {
    const raw = getQuestions(examId);
    return shuffleArray(raw);
  }, [examId]);

  const answeredCount = Object.keys(answers).length;

  const handleSelect = useCallback((optionIdx) => {
    setAnswers((prev) => ({ ...prev, [currentIdx]: optionIdx }));
    if (currentIdx < questions.length - 1) {
      setDirection(1);
      setTimeout(() => setCurrentIdx((c) => c + 1), 250);
    }
  }, [currentIdx, questions.length]);

  const handleTimeUp = useCallback(() => setIsFinished(true), []);
  const handleRetry = useCallback(() => {
    setCurrentIdx(0);
    setAnswers({});
    setIsFinished(false);
    setDirection(0);
  }, []);

  const goPrev = useCallback(() => {
    if (currentIdx > 0) {
      setDirection(-1);
      setCurrentIdx((c) => c - 1);
    }
  }, [currentIdx]);

  const goNext = useCallback(() => {
    if (currentIdx < questions.length - 1) {
      setDirection(1);
      setCurrentIdx((c) => c + 1);
    }
  }, [currentIdx, questions.length]);

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "ArrowLeft") { goPrev(); }
      if (e.key === "ArrowRight") { goNext(); }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [goPrev, goNext]);

  if (!exam || questions.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4 px-4">
        <div className="text-6xl font-black text-primary/20">:(</div>
        <h1 className="text-xl font-bold text-text-primary">Bài thi không tìm thấy</h1>
        <p className="text-sm text-text-secondary">Exam ID: {examId}</p>
        <Link to="/" className="inline-flex items-center gap-2 mt-4 px-6 py-3 bg-primary text-white rounded-xl font-bold text-sm hover:scale-105 transition-transform">
          <ArrowLeft className="w-4 h-4" />Quay về trang chủ
        </Link>
      </div>
    );
  }

  if (isFinished) {
    return (
      <div className="min-h-[60vh] flex flex-col p-4 pt-8 animate-fade-up">
        <ExamResult questions={questions} answers={answers} examTitle={exam.title} onRetry={handleRetry} />
      </div>
    );
  }

  const timeInSeconds = EXAM_TIME_MAP[examId] || 60 * 60;

  return (
    <div className="max-w-4xl mx-auto px-4 py-6 md:py-8 flex flex-col gap-4 md:gap-6 bg-surface">
      {/* Top bar: title + timer */}
      <div className="sticky top-14 md:top-16 z-30 bg-bg-soft/80 backdrop-blur-md -mx-4 px-4 md:mx-0 md:px-0 py-3 md:py-0 md:static md:bg-transparent md:backdrop-blur-none border-b border-border-light/50 md:border-0">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h1 className="text-lg md:text-xl font-black text-text-primary">{exam.title}</h1>
            <p className="text-[11px] text-text-secondary mt-0.5">
              {questions.length} câu hỏi &middot; <span className="font-semibold text-text-primary">{answeredCount}</span> đã trả lời
            </p>
          </div>
          <ExamTimer totalSeconds={timeInSeconds} onTimeUp={handleTimeUp} />
        </div>
      </div>

      {/* Progress dots */}
      <div className="overflow-x-auto hide-scrollbar pb-1 -mx-4 px-4 md:mx-0 md:px-0">
        <ExamProgress current={currentIdx} total={questions.length} answers={answers} />
      </div>

      {/* Question card */}
      <div key={currentIdx} className="animate-fade-up" style={{ animationDuration: "0.35s" }}>
        <QuestionCard
          question={questions[currentIdx]}
          selectedAnswer={answers[currentIdx]}
          onSelect={handleSelect}
          currentIndex={currentIdx}
          totalQuestions={questions.length}
        />
      </div>

      {/* Bottom nav */}
      <div className="flex justify-between items-center pt-1 md:pt-2">
        <button onClick={goPrev}
          disabled={currentIdx === 0}
          className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl font-bold text-sm border border-border-light text-text-secondary hover:bg-surface-container-low hover:text-text-primary disabled:opacity-25 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:text-text-secondary transition-all duration-200">
          <ChevronLeft className="w-4 h-4" />Câu trước
        </button>

        <div className="flex items-center gap-1 text-xs text-text-muted font-medium">
          {currentIdx === 0 && answeredCount === 0 && (
            <span className="hidden sm:inline">Chọn đáp án để tiếp tục</span>
          )}
        </div>

        {currentIdx === questions.length - 1 && answers[currentIdx] !== undefined ? (
          <button onClick={() => setIsFinished(true)}
            className="inline-flex items-center gap-1.5 px-6 py-2.5 bg-cta hover:bg-cta-hover text-white rounded-xl font-bold text-sm transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg shadow-cta/25">
            Nộp bài
          </button>
        ) : currentIdx < questions.length - 1 && (
          <button onClick={goNext}
            disabled={answers[currentIdx] === undefined}
            className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl font-bold text-sm bg-primary hover:bg-blue-light text-white disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-primary transition-all duration-200 hover:scale-105 active:scale-95 shadow-sm">
            Câu tiếp <ChevronRight className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  );
}
