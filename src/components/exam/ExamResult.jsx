import { Trophy, RotateCcw, ArrowLeft, Sparkles, Star, ThumbsUp, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

function ScoreRing({ pct, size = 140 }) {
  const stroke = 8;
  const radius = (size - stroke) / 2;
  const circ = 2 * Math.PI * radius;
  const offset = circ - (pct / 100) * circ;

  const ringColor = pct >= 80 ? "#c8a84e" : pct >= 50 ? "#f59e0b" : "#475569";

  return (
    <svg width={size} height={size} className="drop-shadow-sm">
      <circle cx={size / 2} cy={size / 2} r={radius} fill="none" stroke="var(--color-surface-container-low)" strokeWidth={stroke} />
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        stroke={ringColor}
        strokeWidth={stroke}
        strokeLinecap="round"
        strokeDasharray={circ}
        strokeDashoffset={offset}
        transform={`rotate(-90 ${size / 2} ${size / 2})`}
        className="transition-all duration-1000 ease-out"
      />
    </svg>
  );
}

const TIER_CONFIG = {
  excellent: {
    icon: Sparkles,
    iconColor: "text-gold",
    label: "Xuất sắc!",
    desc: "Bạn đã nắm vững kiến thức.",
    trophy: "text-gold",
    bgGlow: "shadow-gold/20",
  },
  good: {
    icon: ThumbsUp,
    iconColor: "text-cta",
    label: "Khá tốt!",
    desc: "Cần ôn thêm một chút nữa nhé.",
    trophy: "text-cta",
    bgGlow: "shadow-cta/20",
  },
  tryAgain: {
    icon: BookOpen,
    iconColor: "text-text-secondary",
    label: "Cần cố gắng thêm!",
    desc: "Hãy ôn tập lại và thử lại nhé.",
    trophy: "text-text-secondary",
    bgGlow: "",
  },
};

export default function ExamResult({ questions, answers, examTitle, onRetry }) {
  const correct = questions.filter((q, i) => answers[i] === q.answer).length;
  const total = questions.length;
  const wrong = total - correct - (questions.length - Object.keys(answers).length);
  const skipped = total - correct - Math.max(0, wrong);
  const pct = Math.round((correct / total) * 100);

  const tier = pct >= 80 ? "excellent" : pct >= 50 ? "good" : "tryAgain";
  const config = TIER_CONFIG[tier];
  const Icon = config.icon;

  return (
    <div className="max-w-2xl mx-auto">
      <div className={`bg-surface rounded-2xl border border-border-light shadow-sm p-6 md:p-8 text-center ${config.bgGlow}`}>
        {/* Icon */}
        <div className="relative inline-flex mb-4">
          <Trophy className={`w-16 h-16 ${config.trophy}`} />
          <Icon className={`w-6 h-6 absolute -top-1 -right-1 ${config.iconColor}`} />
        </div>

        {/* Title + exam name */}
        <h2 className="text-2xl md:text-3xl font-black text-text-primary mb-1">Kết quả bài thi</h2>
        <p className="text-sm text-text-secondary mb-6">{examTitle}</p>

        {/* Score ring */}
        <div className="flex justify-center mb-2">
          <div className="relative inline-flex items-center justify-center">
            <ScoreRing pct={pct} />
            <div className="absolute flex flex-col items-center">
              <span className="text-3xl font-black text-text-primary">{correct}</span>
              <span className="text-xs font-bold text-text-muted">/ {total}</span>
            </div>
          </div>
        </div>

        {/* Percentage + message */}
        <p className={`text-lg font-bold mb-1 ${config.iconColor}`}>{pct}%</p>
        <p className="text-base font-bold text-text-primary mb-1">{config.label}</p>
        <p className="text-sm text-text-secondary mb-6">{config.desc}</p>

        {/* Answer breakdown */}
        <div className="flex justify-center gap-6 mb-6">
          <div className="flex flex-col items-center">
            <div className="w-10 h-10 rounded-full bg-success/10 flex items-center justify-center mb-1">
              <span className="text-sm font-black text-success">{correct}</span>
            </div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-text-muted">Đúng</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-10 h-10 rounded-full bg-error/10 flex items-center justify-center mb-1">
              <span className="text-sm font-black text-error">{wrong}</span>
            </div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-text-muted">Sai</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-10 h-10 rounded-full bg-surface-container-low flex items-center justify-center mb-1">
              <span className="text-sm font-black text-text-muted">{skipped}</span>
            </div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-text-muted">Bỏ qua</span>
          </div>
        </div>

        {/* Score bar */}
        <div className="w-full h-2 bg-surface-container-low rounded-full overflow-hidden mb-6">
          <div className="flex h-full">
            <div className="bg-success h-full transition-all duration-700" style={{ width: `${(correct / total) * 100}%` }} />
            <div className="bg-error h-full transition-all duration-700" style={{ width: `${(wrong / total) * 100}%` }} />
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button onClick={onRetry} className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary hover:bg-blue-light text-white rounded-xl font-bold text-sm transition-all duration-200 hover:scale-105 active:scale-95 shadow-sm">
            <RotateCcw className="w-4 h-4" />Làm lại
          </button>
          <Link to="/" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-surface-container-high hover:bg-surface-container-highest text-text-primary rounded-xl font-bold text-sm transition-all duration-200 hover:scale-105 active:scale-95 border border-border-light">
            <ArrowLeft className="w-4 h-4" />Về trang chủ
          </Link>
        </div>
      </div>
    </div>
  );
}
