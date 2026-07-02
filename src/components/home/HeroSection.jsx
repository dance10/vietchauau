import { Rocket, ChevronRight } from "lucide-react";
import Button from "../ui/Button";

function StatCard({ number, label }) {
  return (
    <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-5 md:p-6 rounded-2xl flex flex-col items-center gap-1 hover:scale-105 hover:bg-white/15 transition-all duration-300">
      <span className="text-gold text-2xl md:text-3xl font-black">{number}</span>
      <span className="text-xs md:text-sm text-white/70">{label}</span>
    </div>
  );
}

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-navy-deep via-navy-light to-blue-light text-white overflow-hidden pt-20 pb-16 md:pt-24 md:pb-24">
      <div className="absolute inset-0 dot-grid opacity-30" />
      <div className="absolute top-1/4 -left-20 w-64 h-64 md:w-80 md:h-80 bg-primary-container rounded-full blur-[100px] glow-orb" />
      <div className="absolute bottom-1/4 -right-20 w-64 h-64 md:w-80 md:h-80 bg-blue-light rounded-full blur-[100px] glow-orb" style={{ animationDelay: "-1.5s" }} />
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 flex flex-col items-center text-center gap-6 md:gap-8">
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 shadow-lg animate-fade-up" style={{ animationDelay: "0ms" }}>
          <Rocket className="w-4 h-4 text-gold" />
          <span className="text-[11px] font-bold uppercase tracking-wider text-white">Anh Ngữ Việt Châu Âu</span>
        </div>
        <h1 className="text-3xl md:text-5xl lg:text-7xl font-black max-w-4xl leading-tight animate-fade-up" style={{ animationDelay: "100ms" }}>
          Vừa Học <span className="text-gold">Vừa Chill</span>
        </h1>
        <p className="text-sm md:text-base text-white/80 max-w-2xl leading-relaxed animate-fade-up" style={{ animationDelay: "200ms" }}>
          Khám phá hệ thống đào tạo chuẩn quốc tế với phương pháp học tập hiện đại, giúp bạn và con trẻ chinh phục tiếng Anh một cách tự nhiên và đầy hứng khởi.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-2 animate-fade-up" style={{ animationDelay: "300ms" }}>
          <Button variant="cta" size="lg" icon={ChevronRight}>Bắt đầu ngay</Button>
          <Button variant="cta-secondary" size="lg">Đăng ký học thử</Button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 mt-6 md:mt-8 w-full max-w-4xl animate-fade-up" style={{ animationDelay: "400ms" }}>
          <StatCard number="18+" label="Năm kinh nghiệm" />
          <StatCard number="85+" label="Cơ sở toàn quốc" />
          <StatCard number="100%" label="Giáo viên bản ngữ" />
        </div>
      </div>
    </section>
  );
}
