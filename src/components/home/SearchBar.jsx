import { Search, X } from "lucide-react";

export default function SearchBar({ value, onChange }) {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6 py-6">
      {/* Search input with icon */}
      <div className="relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text-secondary" />
        <input
          type="text"
          value={value}
          onChange={onChange}
          placeholder="Tìm kiếm bài thi..."
          className="w-full bg-surface rounded-xl border border-border-light shadow-sm py-3 pl-12 pr-10 text-sm text-text-primary placeholder:text-text-secondary focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
        />
        {/* Clear button */}
        {value && (
          <button
            onClick={() => onChange({ target: { value: "" } })}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-text-secondary hover:text-text-primary transition-colors"
            aria-label="Xoá tìm kiếm"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  );
}
