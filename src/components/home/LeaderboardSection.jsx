import { useState } from "react";
import { Trophy, RefreshCw, AlertTriangle } from "lucide-react";
import useScrollReveal from "../../hooks/useScrollReveal";
import { LEADERBOARD_DATA } from "../../config/constants";
import LeaderboardPodium from "./LeaderboardPodium";
import LeaderboardTable from "./LeaderboardTable";

const TABS = ["Bảng Vàng", "Cá nhân"];
const TIME_FILTERS = ["Tất cả", "Tháng này", "Tuần này", "Hôm nay"];

export default function LeaderboardSection() {
  const [activeTab, setActiveTab] = useState(0);
  const [activeTime, setActiveTime] = useState(2);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const { ref, isRevealed } = useScrollReveal();
  const { podium, rows } = LEADERBOARD_DATA;

  return (
    <section ref={ref} className={`max-w-5xl mx-auto px-4 py-8 md:py-12 ${isRevealed ? "revealed" : "reveal"}`}>
      {/* Header: trophy icon + title */}
      <div className="flex flex-col items-center gap-2 mb-8">
        <Trophy className="text-gold w-12 h-12 md:w-14 md:h-14 drop-shadow-md" style={{ animation: "trophy-bounce 2.5s ease-in-out infinite" }} />
        <h2 className="text-sm md:text-base font-black uppercase tracking-[0.2em] text-primary">BẢNG XẾP HẠNG</h2>
        <div className="h-1 w-24 bg-gradient-to-r from-primary to-surface-tint rounded-full" />
        <p className="text-sm text-text-muted">Ai là người dẫn đầu?</p>
      </div>
      {/* Content card */}
      <div className="bg-surface rounded-xl shadow-sm border border-border-light p-4 md:p-6">
        {/* Tabs */}
        <div className="flex border-b border-border-light mb-4">
          {TABS.map((t, i) => (
            <button key={i} onClick={() => setActiveTab(i)}
              className={`px-4 md:px-6 py-3 text-sm font-bold transition-colors duration-200 ${i === activeTab ? "text-primary border-b-2 border-primary" : "text-text-muted hover:text-primary"}`}>{t}</button>
          ))}
        </div>
        {/* Time filters */}
        <div className="flex flex-wrap gap-2 mb-6">
          {TIME_FILTERS.map((f, i) => (
            <button key={i} onClick={() => setActiveTime(i)}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all duration-200 hover:scale-105 ${i === activeTime ? "bg-primary text-white shadow-sm" : "bg-surface-container-low text-text-muted hover:text-primary hover:bg-surface-container"}`}>{f}</button>
          ))}
        </div>
        {/* Loading state */}
        {loading && <div className="flex flex-col items-center py-12 gap-3"><RefreshCw className="w-8 h-8 text-primary animate-spin" /><p className="text-sm text-text-muted">Đang tải...</p></div>}
        {/* Error state */}
        {error && <div className="flex flex-col items-center py-12 gap-3"><AlertTriangle className="w-10 h-10 text-error" /><p className="text-sm text-text-muted">Có lỗi xảy ra</p><button onClick={() => setError(false)} className="px-6 py-2 bg-primary text-white rounded-xl text-sm font-bold hover:scale-105 transition-transform">Thử lại</button></div>}
        {/* Empty state */}
        {!loading && !error && rows.length === 0 && <div className="flex flex-col items-center py-12 gap-3"><Trophy className="w-12 h-12 text-gold/50" /><p className="text-sm text-text-muted">Chưa có kết quả</p><p className="text-xs text-text-muted">Hãy làm bài thi đầu tiên!</p></div>}
        {/* Podium + table */}
        {!loading && !error && rows.length > 0 && <><LeaderboardPodium podium={podium} /><LeaderboardTable rows={rows} /></>}
      </div>
    </section>
  );
}
