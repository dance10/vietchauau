import { useState } from "react";
import HeroSection from "../components/home/HeroSection";
import ExamSection from "../components/home/ExamSection";
import LeaderboardSection from "../components/home/LeaderboardSection";
import SearchBar from "../components/home/SearchBar";
import { EXAM_DATA, SECTION_ORDER } from "../config/constants";

function normalize(str) {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
}

function filterExams(exams, query) {
  if (!query.trim()) return exams;
  const q = normalize(query);
  return exams.filter(
    (exam) =>
      normalize(exam.title).includes(q) ||
      normalize(exam.desc).includes(q)
  );
}

function groupByLevel(exams) {
  const groups = {};
  exams.forEach((exam) => {
    const key = exam.level;
    if (!groups[key]) groups[key] = [];
    if (!groups[key].some((e) => e.id === exam.id)) groups[key].push(exam);
  });
  if (groups.ket && groups.pet) { groups.ket = [...groups.ket, ...groups.pet]; delete groups.pet; }
  else if (groups.pet && !groups.ket) { groups.ket = groups.pet; delete groups.pet; }
  return groups;
}

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState("");
  const grouped = groupByLevel(EXAM_DATA);

  const visibleSections = SECTION_ORDER.filter((k) => {
    if (!grouped[k]) return false;
    const filtered = filterExams(grouped[k], searchQuery);
    return filtered.length > 0;
  });

  const getFilteredExams = (k) => filterExams(grouped[k], searchQuery);

  return (
    <>
      <HeroSection />
      <SearchBar
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      {visibleSections.map((k, i) => (
        <div key={k} className={i % 2 === 0 ? "bg-surface" : "bg-bg-soft"}>
          <div className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-16">
            <ExamSection levelKey={k} exams={getFilteredExams(k)} />
          </div>
        </div>
      ))}
      <div className="bg-surface">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-16">
          <LeaderboardSection />
        </div>
      </div>
    </>
  );
}
