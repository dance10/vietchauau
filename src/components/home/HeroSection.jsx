import { Rocket, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import Button from "../ui/Button";

function StatCard({ number, label }) {
  return (
    <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-4 md:p-6 rounded-2xl flex flex-col items-center gap-1 hover:scale-105 hover:bg-white/15 transition-all duration-300">
      <span className="text-gold text-2xl md:text-3xl font-black">{number}</span>
      <span className="text-xs md:text-sm text-white/70">{label}</span>
    </div>
  );
}

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-navy-deep via-navy-light to-blue-light text-white overflow-hidden pt-20 pb-16 md:pt-24 md:pb-24">
      {/* Background effects */}
      <div className="absolute inset-0 dot-grid opacity-30" />
      <div className="absolute top-1/4 -left-20 w-64 h-64 md:w-80 md:h-80 bg-primary-container rounded-full blur-[100px] glow-orb" />
      <div className="absolute bottom-1/4 -right-20 w-64 h-64 md:w-80 md:h-80 bg-blue-light rounded-full blur-[100px] glow-orb" style={{ animationDelay: "-1.5s" }} />
      {/* Content container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 flex flex-col items-center text-center gap-6 md:gap-8">
        {/* Brand badge */}
        <div className="inline-flex items-center gap-3 bg-gradient-to-r from-gold/20 to-gold/5 backdrop-blur-md px-6 py-2.5 rounded-full border border-gold/30 shadow-lg shadow-gold/10 animate-fade-up" style={{ animationDelay: "0ms" }}>
          <span className="relative flex w-5 h-5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-40"></span>
            <Rocket className="relative w-5 h-5 text-gold" />
          </span>
          <span className="text-sm md:text-base font-black uppercase tracking-widest bg-gradient-to-r from-gold to-gold-light bg-clip-text text-transparent">Anh Ngữ Việt Châu Âu</span>
        </div>
        {/* Headline */}
        <h1 className="text-[28px] md:text-5xl lg:text-7xl font-black max-w-4xl leading-tight animate-fade-up" style={{ animationDelay: "100ms" }}>
          Vừa Học <span className="text-gold">Vừa Chill</span>
        </h1>
        {/* Subtitle */}
        <p className="text-sm md:text-base text-white/80 max-w-2xl leading-relaxed animate-fade-up" style={{ animationDelay: "200ms" }}>
          Khám phá hệ thống đào tạo chuẩn quốc tế với phương pháp học tập hiện đại, giúp bạn và con trẻ chinh phục tiếng Anh một cách tự nhiên và đầy hứng khởi.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-2 animate-fade-up" style={{ animationDelay: "300ms" }}>
          <Link to="/luyen-tap" className="inline-flex items-center justify-center font-bold bg-cta hover:bg-cta-hover text-white shadow-lg shadow-cta/30 text-base px-8 py-3 rounded-xl gap-2 hover:scale-105 hover:-translate-y-0.5 active:scale-95 active:translate-y-0 transition-all duration-200">
            Bắt đầu ngay <ChevronRight className="w-4 h-4" />
          </Link>
          <Button variant="cta-secondary" size="lg">Đăng ký học thử</Button>
        </div>
        {/* Stats cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-6 mt-6 md:mt-8 w-full max-w-4xl animate-fade-up" style={{ animationDelay: "400ms" }}>
          <StatCard number="13+" label="Bài thi mô phỏng" />
          <StatCard number="100+" label="Câu hỏi luyện tập" />
          <StatCard number="Tự động" label="Chấm điểm & xếp loại" />
        </div>
      </div>
    </section>
  );
}
