import { Crown } from "lucide-react";

const MEDAL_COLORS = {
  1: { border: "border-t-gold", glow: "podium-glow", badge: "bg-gold text-white", scoreBg: "bg-gradient-to-r from-primary to-surface-tint" },
  2: { border: "border-t-outline-variant", glow: "", badge: "bg-outline-variant text-white", scoreBg: "bg-surface-container-low" },
  3: { border: "border-t-tertiary-fixed-dim", glow: "", badge: "bg-tertiary-fixed-dim text-tertiary-container", scoreBg: "bg-surface-container-low" },
};

function PodiumCard({ item, isTop }) {
  const c = MEDAL_COLORS[item.rank];
  return (
    <div className={`bg-surface rounded-xl shadow-sm border border-border-light ${c.border} ${c.glow} p-3 md:p-8 flex flex-col items-center ${isTop ? "w-32 md:w-56 z-10 -translate-y-4 md:-translate-y-6" : "w-24 md:w-40"} hover:-translate-y-2 transition-transform duration-300`} style={{ borderTopWidth: "4px" }}>
      {isTop && <div className="absolute -top-8 text-gold"><Crown className="w-8 h-8 md:w-10 md:h-10 drop-shadow-md" /></div>}
      <div className={`rounded-full flex items-center justify-center font-black border-2 ${isTop ? "w-16 h-16 md:w-20 md:h-20 bg-secondary-container text-on-secondary-container border-gold shadow-md mt-3 text-lg md:text-xl" : "w-12 h-12 md:w-16 md:h-16 bg-surface-container-highest text-text-muted border-outline-variant text-sm md:text-base"}`}>
        {item.initials}
      </div>
      <span className={`absolute -top-3 -right-2 text-xs font-bold px-2 py-0.5 rounded-full shadow-sm ${c.badge}`}>#{item.rank}</span>
      <h3 className={`font-bold text-text-primary text-center line-clamp-1 mt-3 mb-1 ${isTop ? "text-base md:text-lg" : "text-sm"}`}>{item.name}</h3>
      <p className="text-xs text-text-secondary mb-3 text-center">{item.class}</p>
      <div className={`${c.scoreBg} px-3 py-2 rounded-lg w-full text-center`}>
        <span className={`font-bold ${isTop ? "text-base md:text-lg text-gold" : "text-sm text-text-primary"}`}>{item.score}</span>
        <span className="text-xs text-text-secondary block mt-0.5">Điểm</span>
      </div>
    </div>
  );
}

export default function LeaderboardPodium({ podium }) {
  const s = [...podium].sort((a, b) => a.rank - b.rank);
  return (
    <div className="flex items-end justify-center gap-2 md:gap-6 pt-10 md:pt-14 mb-8 md:mb-12">
      {s.find(p => p.rank === 2) && <PodiumCard item={s.find(p => p.rank === 2)} isTop={false} />}
      {s.find(p => p.rank === 1) && <PodiumCard item={s.find(p => p.rank === 1)} isTop={true} />}
      {s.find(p => p.rank === 3) && <PodiumCard item={s.find(p => p.rank === 3)} isTop={false} />}
    </div>
  );
}
