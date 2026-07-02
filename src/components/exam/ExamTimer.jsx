import { useState, useEffect } from "react";
import { Clock, AlertTriangle } from "lucide-react";

export default function ExamTimer({ totalSeconds, onTimeUp }) {
  const [remaining, setRemaining] = useState(totalSeconds);
  const [isWarning, setIsWarning] = useState(false);
  const [isCritical, setIsCritical] = useState(false);

  useEffect(() => {
    if (remaining <= 0) { onTimeUp?.(); return; }
    if (remaining <= 60) setIsCritical(true);
    if (remaining <= 300) setIsWarning(true);
    const timer = setInterval(() => setRemaining((r) => r - 1), 1000);
    return () => clearInterval(timer);
  }, [remaining, onTimeUp]);

  const mins = Math.floor(remaining / 60);
  const secs = remaining % 60;
  const pct = (remaining / totalSeconds) * 100;

  const barColor = isCritical
    ? "bg-error"
    : isWarning
    ? "bg-cta"
    : "bg-gradient-to-r from-surface-tint to-primary";

  const containerBorder = isWarning
    ? "border-error/30"
    : "border-border-light";

  return (
    <div className="flex items-center gap-3">
      <div className={`flex items-center gap-3 bg-surface rounded-xl border ${containerBorder} px-4 py-2 shadow-sm transition-colors duration-500 ${isWarning ? "shadow-error/5" : ""}`}>
        {isCritical ? (
          <AlertTriangle className="w-5 h-5 text-error animate-pulse" />
        ) : (
          <Clock className={`w-5 h-5 transition-colors duration-500 ${isWarning ? "text-cta" : "text-primary"}`} />
        )}
        <div className="flex flex-col">
          <span className="text-[10px] font-bold uppercase tracking-wider text-text-secondary leading-none mb-0.5">
            {isCritical ? "Sắp hết giờ" : isWarning ? "Sắp hết giờ" : "Còn lại"}
          </span>
          <span className={`font-black text-lg tabular-nums leading-none transition-colors duration-500 ${
            isCritical ? "text-error" : isWarning ? "text-cta" : "text-text-primary"
          }`}>
            {String(mins).padStart(2, "0")}:{String(secs).padStart(2, "0")}
          </span>
        </div>
        <div className="w-20 md:w-28 h-2 bg-surface-container-low rounded-full overflow-hidden ml-1">
          <div
            className={`h-full rounded-full transition-all duration-1000 ease-linear ${barColor}`}
            style={{ width: `${Math.max(pct, 0)}%` }}
          />
        </div>
      </div>
    </div>
  );
}
