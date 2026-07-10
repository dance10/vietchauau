import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ExamCard from "./ExamCard";
import SectionTitle from "../ui/SectionTitle";
import { LEVEL_COLORS } from "../../config/constants";

{/* Constants: LEVEL_SECTION_TITLES */}
const LEVEL_SECTION_TITLES = {
  young: "Young Learners", ket: "Cambridge KET/PET", pet: "Cambridge KET/PET",
  ielts: "IELTS", toeic: "TOEIC", tuyensinh: "Tuyển Sinh",
};

export default function ExamSection({ levelKey, exams }) {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const levelColor = LEVEL_COLORS[levelKey]?.color || "var(--color-primary)";

  {/* Scroll handler */}
  const scroll = (dir) => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * 280, behavior: "smooth" });
    setTimeout(() => {
      setCanScrollLeft(el.scrollLeft > 10);
      setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
    }, 300);
  };

  return (
    <section>
      {/* Section title */}
      <SectionTitle title={LEVEL_SECTION_TITLES[levelKey] || levelKey} gradientColor={levelColor} />
      {/* Scroll container + buttons */}
      <div className="relative group">
        {canScrollLeft && (
          <button onClick={() => scroll(-1)} className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-surface shadow-md border border-border-light flex items-center justify-center hover:scale-110 transition-transform duration-200 hidden md:flex" aria-label="Cuộn trái">
            <ChevronLeft className="w-5 h-5 text-text-secondary" />
          </button>
        )}
        {/* Exam cards horizontal scroll */}
        <div ref={scrollRef} className="flex overflow-x-auto hide-scrollbar gap-gap-card pb-2 pt-2 px-1">
          {exams.map((exam) => (<ExamCard key={exam.id} exam={exam} />))}
        </div>
        {canScrollRight && (
          <button onClick={() => scroll(1)} className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-surface shadow-md border border-border-light flex items-center justify-center hover:scale-110 transition-transform duration-200 hidden md:flex" aria-label="Cuộn phải">
            <ChevronRight className="w-5 h-5 text-text-secondary" />
          </button>
        )}
      </div>
    </section>
  );
}
