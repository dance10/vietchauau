import { useEffect, useCallback } from "react";
import { Check } from "lucide-react";

const LABELS = ["A", "B", "C", "D"];

export default function QuestionCard({ question, selectedAnswer, onSelect, currentIndex = 0, totalQuestions = 0 }) {

  const handleKeyDown = useCallback((e) => {
    const keyMap = { 1: 0, 2: 1, 3: 2, 4: 3, a: 0, b: 1, c: 2, d: 3 };
    const idx = keyMap[e.key];
    if (idx !== undefined && idx < question.options.length) {
      onSelect(idx);
    }
  }, [onSelect, question.options.length]);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  return (
    <div className="bg-surface rounded-2xl border border-border-light shadow-sm p-6 md:p-8 max-w-3xl mx-auto">
      {/* Question header */}
      <div className="flex items-center justify-between mb-2">
        <span className="text-[11px] font-bold uppercase tracking-wider text-text-muted">
          Câu {currentIndex + 1}{totalQuestions > 0 && <span>/{totalQuestions}</span>}
        </span>
        <span className="text-[11px] font-bold uppercase tracking-wider text-text-muted">
          Trắc nghiệm
        </span>
      </div>

      {/* Question */}
      <div className="flex items-start gap-3 mb-6">
        <span className="text-2xl md:text-3xl font-black text-primary shrink-0 leading-none mt-1">Q.</span>
        <h2 className="text-lg md:text-xl font-bold text-text-primary leading-relaxed">{question.question}</h2>
      </div>

      {/* Options */}
      <div className="flex flex-col gap-3">
        {question.options.map((opt, idx) => {
          const isSelected = selectedAnswer === idx;
          return (
            <button
              key={idx}
              onClick={() => onSelect(idx)}
              className={`w-full text-left px-5 py-4 rounded-xl font-medium text-sm md:text-base border-2 transition-all duration-200 hover:scale-[1.01] active:scale-[0.99] ${
                isSelected
                  ? "border-primary bg-primary/10 text-primary font-bold shadow-sm"
                  : "border-border-light bg-surface-container-low text-text-primary hover:border-outline hover:bg-surface-container hover:shadow-sm"
              }`}
            >
              <span className={`inline-flex items-center justify-center w-7 h-7 rounded-lg font-bold text-xs mr-3 transition-colors duration-200 ${
                isSelected
                  ? "bg-primary text-white"
                  : "bg-surface-container-high text-text-secondary"
              }`}>
                {isSelected ? <Check className="w-4 h-4" /> : LABELS[idx]}
              </span>
              {opt}
            </button>
          );
        })}
      </div>

      {/* Keyboard hint */}
      <div className="mt-4 text-center">
        <span className="text-[10px] text-text-muted/60">
          Phím tắt: <kbd className="px-1 py-0.5 rounded bg-surface-container-low text-text-muted font-mono text-[10px] border border-border-light">1</kbd>
          <kbd className="px-1 py-0.5 rounded bg-surface-container-low text-text-muted font-mono text-[10px] border border-border-light ml-1">2</kbd>
          <kbd className="px-1 py-0.5 rounded bg-surface-container-low text-text-muted font-mono text-[10px] border border-border-light ml-1">3</kbd>
          <kbd className="px-1 py-0.5 rounded bg-surface-container-low text-text-muted font-mono text-[10px] border border-border-light ml-1">4</kbd>
          <span className="ml-1">hoặc</span>
          <kbd className="px-1.5 py-0.5 rounded bg-surface-container-low text-text-muted font-mono text-[10px] border border-border-light ml-1">A</kbd>
          <kbd className="px-1.5 py-0.5 rounded bg-surface-container-low text-text-muted font-mono text-[10px] border border-border-light ml-1">B</kbd>
          <kbd className="px-1.5 py-0.5 rounded bg-surface-container-low text-text-muted font-mono text-[10px] border border-border-light ml-1">C</kbd>
          <kbd className="px-1.5 py-0.5 rounded bg-surface-container-low text-text-muted font-mono text-[10px] border border-border-light ml-1">D</kbd>
        </span>
      </div>
    </div>
  );
}
