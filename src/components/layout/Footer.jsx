export default function Footer() {
  return (
    <footer className="bg-navy-deep dark:bg-dark-bg border-t border-dark-border w-full">
      <div className="py-8 px-4 flex flex-col md:flex-row justify-between items-center gap-4 max-w-7xl mx-auto">
        <div className="font-bold text-lg text-gold">BaiKiemTraVEU</div>
        <nav className="flex flex-wrap justify-center gap-6 text-sm">
          {["Về chúng tôi", "Điều khoản", "Bảo mật", "Liên hệ"].map((item) => (
            <a key={item} href="#" className="text-white/60 hover:text-gold transition-colors duration-200 hover:scale-105">{item}</a>
          ))}
        </nav>
        <div className="text-white/50 text-xs text-center md:text-right">
          &copy; 2024 BaiKiemTraVEU. Nền tảng học tiếng Anh chuẩn quốc tế.
        </div>
      </div>
    </footer>
  );
}
