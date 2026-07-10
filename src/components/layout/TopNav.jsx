import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
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
  const { pathname } = useLocation();
  const scrolled = useScrollNav(50);
  const { isDark, toggle } = useDarkMode();
  const [menuOpen, setMenuOpen] = useState(false);

  const isHome = pathname === "/";
  const showScrolled = scrolled || !isHome;

  const navClasses = showScrolled
    ? "bg-white dark:bg-dark-surface shadow-sm border-b border-border-light"
    : "bg-gradient-to-r from-navy-deep via-navy-light to-blue-light";
  const textClasses = showScrolled ? "text-gray-500" : "text-white";
  const logoClasses = showScrolled ? "text-blue-light" : "text-gold";
  const linkActiveClasses = showScrolled
    ? "text-blue-light border-b-2 border-blue-light"
    : "text-gold border-b-2 border-gold";
  const linkClasses = showScrolled
    ? "text-gray-500 hover:text-blue-light"
    : "text-white/80 hover:text-gold";

  return (
    <>
      <header className={`fixed top-0 w-full z-50 transition-all duration-500 h-14 md:h-16 ${navClasses}`}>
        <div className="flex justify-between items-center h-full px-3 md:px-6 max-w-7xl mx-auto">
          <Link to="/" className={`font-black text-lg md:text-xl tracking-widest transition-colors duration-500 hover:opacity-80 ${logoClasses}`}>
            Việt Châu Âu - VEU
          </Link>
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {NAV_LINKS.map((link, i) => (
              <Link key={i} to={link.href}
                className={`text-sm font-bold transition-colors duration-500 hover:scale-105 active:scale-95 ${link.label === "Thử thách" ? linkActiveClasses : linkClasses}`}
                style={{ transitionProperty: 'color, transform', transitionDuration: '500ms, 200ms' }}>
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-2 md:gap-3">
            <button className="hidden md:flex p-2 hover:scale-105 active:scale-95" style={{ transition: 'color 500ms, transform 200ms' }} aria-label="Thông báo">
              <Bell className={`w-5 h-5 transition-colors duration-500 ${textClasses}`} />
            </button>
            <button className="hidden md:flex p-2 hover:scale-105 active:scale-95" style={{ transition: 'color 500ms, transform 200ms' }} aria-label="Tài khoản">
              <User className={`w-5 h-5 transition-colors duration-500 ${textClasses}`} />
            </button>
            <button onClick={toggle} className="p-2 hover:scale-105 active:scale-95" style={{ transition: 'color 500ms, transform 200ms' }} aria-label="Chế độ tối/sáng">
              {isDark ? <Sun className={`w-5 h-5 transition-colors duration-500 ${showScrolled ? "text-amber-500" : "text-gold"}`} />
                : <Moon className={`w-5 h-5 transition-colors duration-500 ${textClasses}`} />}
            </button>
            <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden p-3 hover:scale-105 transition-transform duration-200" aria-label="Menu">
              {menuOpen ? <X className={`w-6 h-6 transition-colors duration-500 ${textClasses}`} /> : <Menu className={`w-6 h-6 transition-colors duration-500 ${textClasses}`} />}
            </button>
          </div>
        </div>
      </header>
      {menuOpen && <div className="fixed inset-0 bg-black/50 z-40 md:hidden" onClick={() => setMenuOpen(false)} />}
      <div className={`fixed top-0 left-0 h-full w-[72vw] max-w-sm bg-gradient-to-b from-navy-deep to-navy-light z-50 transform transition-transform duration-300 ease-out md:hidden ${menuOpen ? "translate-x-0" : "-translate-x-full"}`}>
        <div className="flex justify-end p-3">
          <button onClick={() => setMenuOpen(false)} className="p-2 text-white/80 hover:text-white"><X className="w-6 h-6" /></button>
        </div>
        <nav className="flex flex-col gap-2 px-6">
          {NAV_LINKS.map((link, i) => (
            <Link key={i} to={link.href} className="text-white/90 font-bold text-lg py-2.5 border-b border-white/10 hover:text-gold transition-colors" onClick={() => setMenuOpen(false)}>{link.label}</Link>
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
