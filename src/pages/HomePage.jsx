import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import HeroSection from "../components/home/HeroSection";
import AboutSection from "../components/home/AboutSection";
import LeaderboardSection from "../components/home/LeaderboardSection";

export default function HomePage() {
  return (
    <>
      {/* Section: Hero */}
      <HeroSection />
      {/* Section: About */}
      <AboutSection />
      {/* Section: CTA - bắt đầu luyện tập */}
      <div className="bg-surface">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-16 text-center">
          <div className="max-w-2xl mx-auto mb-8">
            <h2 className="text-2xl md:text-3xl font-black text-text-primary mb-3">Bắt đầu luyện tập ngay</h2>
            <p className="text-sm text-text-secondary leading-relaxed">
              Hệ thống bài thi mô phỏng đa dạng từ cơ bản đến nâng cao, giúp bạn tự tin chinh phục các kỳ thi tiếng Anh chuẩn quốc tế.
            </p>
          </div>
          <Link to="/luyen-tap"
            className="inline-flex items-center gap-2 bg-primary hover:bg-blue-light text-white font-black text-base px-8 py-3.5 rounded-xl shadow-lg transition-all duration-200 hover:scale-105 active:scale-95">
            Vào luyện tập ngay <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
      {/* Section: Leaderboard */}
      <div className="bg-bg-soft">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-16">
          <LeaderboardSection />
        </div>
      </div>
    </>
  );
}
