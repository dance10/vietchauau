export default function ExamProgress({ current, total, answers }) {
  const isCompact = total > 20;
  const dotSize = isCompact ? "w-6 h-6" : "w-8 h-8";
  const textSize = isCompact ? "text-[10px]" : "text-xs";

  const answeredCount = Object.keys(answers).length;
  const answeredPct = total > 0 ? Math.round((answeredCount / total) * 100) : 0;

  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center justify-between text-[10px] font-semibold text-text-secondary uppercase tracking-wider">
        <span>Tiến độ</span>
        <span>
          <span className="text-text-primary font-bold">{current + 1}</span>
          <span className="text-text-secondary">/{total}</span>
          <span className="ml-2 text-text-muted">({answeredPct}%)</span>
        </span>
      </div>
      <div className="flex items-center gap-1">
        {Array.from({ length: total }, (_, i) => (
          <div
            key={i}
            className={`${dotSize} ${textSize} rounded-lg flex items-center justify-center font-bold border-2 transition-all duration-200 flex-shrink-0 ${
              i === current
                ? "border-primary bg-primary text-white scale-110 shadow-sm z-10"
                : answers[i] !== undefined
                ? "border-surface-tint bg-surface-container text-on-surface-variant"
                : "border-border-light bg-surface text-text-secondary"
            }`}
          >
            {i + 1}
          </div>
        ))}
      </div>
    </div>
  );
}
