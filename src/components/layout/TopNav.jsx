import { useState } from "react";
import { Link } from "react-router-dom";
import { Moon, Sun, Menu, X, Bell, User } from "lucide-react";
import { useDarkMode } from "../../hooks/useDarkMode.jsx";
import useScrollNav from "../../hooks/useScrollNav";

const NAV_LINKS = [
  { label: "Khóa học", href: "/khoa-hoc" },
  { label: "Luyện tập", href: "/luyen-tap" },
  { label: "Thử thách", href: "/thu-thach" },
  { label: "Tin tức", href: "/tin-tuc" },
];

export default function TopNav() {
  const scrolled = useScrollNav(50);
  const { isDark, toggle } = useDarkMode();
  const [menuOpen, setMenuOpen] = useState(false);

  const navClasses = scrolled
    ? "bg-white/95 dark:bg-dark-surface/95 backdrop-blur-md shadow-sm border-b border-border-light"
    : "bg-gradient-to-r from-navy-deep via-navy-light to-blue-light";
  const textClasses = scrolled ? "text-text-primary" : "text-white";
  const logoClasses = scrolled ? "text-primary" : "text-gold";
  const linkActiveClasses = scrolled
    ? "text-primary border-b-2 border-primary"
    : "text-gold border-b-2 border-gold";
  const linkClasses = scrolled
    ? "text-text-secondary hover:text-primary"
    : "text-white/80 hover:text-gold";

  return (
    <>
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 h-14 md:h-16 ${navClasses}`}>
        <div className="flex justify-between items-center h-full px-3 md:px-6 max-w-7xl mx-auto">
          <Link to="/" className={`font-black text-lg md:text-xl tracking-widest transition-colors duration-300 hover:opacity-80 ${logoClasses}`}>
            Việt Châu Âu - VEU
          </Link>
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {NAV_LINKS.map((link, i) => (
              <Link key={i} to={link.href}
                className={`text-sm font-bold transition-all duration-200 hover:scale-105 active:scale-95 ${link.label === "Thử thách" ? linkActiveClasses : linkClasses}`}>
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-2 md:gap-3">
            <button className="hidden md:flex p-2 hover:scale-105 transition-transform duration-200 active:scale-95" aria-label="Thông báo">
              <Bell className={`w-5 h-5 ${textClasses}`} />
            </button>
            <button className="hidden md:flex p-2 hover:scale-105 transition-transform duration-200 active:scale-95" aria-label="Tài khoản">
              <User className={`w-5 h-5 ${textClasses}`} />
            </button>
            <button onClick={toggle} className="p-2 hover:scale-105 transition-transform duration-200 active:scale-95" aria-label="Chế độ tối/sáng">
              {isDark ? <Sun className={`w-5 h-5 ${scrolled ? "text-amber-500" : "text-gold"}`} />
                : <Moon className={`w-5 h-5 ${textClasses}`} />}
            </button>
            <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden p-2 hover:scale-105 transition-transform duration-200" aria-label="Menu">
              {menuOpen ? <X className={`w-6 h-6 ${textClasses}`} /> : <Menu className={`w-6 h-6 ${textClasses}`} />}
            </button>
          </div>
        </div>
      </header>
      {menuOpen && <div className="fixed inset-0 bg-black/50 z-40 md:hidden" onClick={() => setMenuOpen(false)} />}
      <div className={`fixed top-0 left-0 h-full w-[72vw] max-w-sm bg-gradient-to-b from-navy-deep to-navy-light z-50 transform transition-transform duration-300 ease-out md:hidden ${menuOpen ? "translate-x-0" : "-translate-x-full"}`}>
        <div className="flex justify-end p-4">
          <button onClick={() => setMenuOpen(false)} className="p-2 text-white/80 hover:text-white"><X className="w-6 h-6" /></button>
        </div>
        <nav className="flex flex-col gap-2 px-6">
          {NAV_LINKS.map((link, i) => (
            <Link key={i} to={link.href} className="text-white/90 font-bold text-lg py-3 border-b border-white/10 hover:text-gold transition-colors" onClick={() => setMenuOpen(false)}>{link.label}</Link>
          ))}
          <div className="flex gap-4 mt-4 pt-4 border-t border-white/10">
            <button className="flex items-center gap-2 text-white/80 hover:text-white" aria-label="Thông báo"><Bell className="w-5 h-5" /><span className="text-sm">Thông báo</span></button>
            <button className="flex items-center gap-2 text-white/80 hover:text-white" aria-label="Tài khoản"><User className="w-5 h-5" /><span className="text-sm">Tài khoản</span></button>
          </div>
        </nav>
      </div>
    </>
  );
}
