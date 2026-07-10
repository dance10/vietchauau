{/* Row component */}
function Row({ item }) {
  return (
    <div className="flex items-center px-3 md:px-6 py-3 md:py-4 border-b border-border-light even:bg-surface-container-low hover:bg-surface-container-low transition-colors duration-200 group">
      <div className="w-10 md:w-16 text-center font-bold text-sm text-text-muted group-hover:text-primary transition-colors">{item.rank}</div>
      <div className="flex-1 flex items-center gap-3 md:gap-4 pl-0 md:pl-4">
        <div className="w-9 h-9 rounded-full bg-surface-container-high text-primary flex items-center justify-center font-bold text-xs shrink-0">{item.initials}</div>
        <div className="font-bold text-sm text-text-primary">{item.name}</div>
      </div>
      <div className="flex-1 hidden lg:flex items-center gap-2 text-xs text-text-secondary">
        <span className="bg-surface-variant px-2 py-0.5 rounded text-primary text-[10px] font-semibold">{item.examBadge}</span>
        <span>{item.examDetail}</span>
      </div>
      <div className="w-16 md:w-32 text-right font-bold text-sm text-text-primary">{item.score}</div>
    </div>
  );
}

export default function LeaderboardTable({ rows = [] }) {
  return (
    <div className="bg-surface rounded-xl shadow-sm border border-border-light overflow-hidden">
      {/* Table header */}
      <div className="hidden md:flex items-center px-6 py-3 bg-surface-container-low border-b border-border-light text-text-muted font-bold text-[11px] uppercase tracking-wider">
        <div className="w-16 text-center">Hạng</div>
        <div className="flex-1 pl-4">Học viên</div>
        <div className="flex-1 hidden lg:block">Bài thi gần nhất</div>
        <div className="w-20 md:w-32 text-right">Tổng điểm</div>
      </div>
      {/* Table body or empty state */}
      {rows.length > 0 ? (
        <div className="flex flex-col">{rows.map(r => <Row key={r.rank} item={r} />)}</div>
      ) : (
        <div className="py-12 text-center text-text-secondary"><p className="text-sm">Chưa có kết quả</p><p className="text-xs mt-1">Hãy làm bài thi đầu tiên!</p></div>
      )}
      {/* Footer: Xem thêm */}
      <div className="p-4 text-center border-t border-border-light">
        <button className="font-bold text-sm text-primary hover:text-blue-light transition-colors px-6 py-2 rounded-full hover:bg-surface-container">Xem thêm danh sách</button>
      </div>
    </div>
  );
}
