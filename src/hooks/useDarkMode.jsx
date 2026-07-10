import { createContext, useContext, useState, useEffect, useCallback } from "react";

{/* Context creation */}
const DarkModeContext = createContext(null);

{/* Provider */}
export function DarkModeProvider({ children }) {
  {/* Init state from localStorage */}
  const [isDark, setIsDark] = useState(() => {
    if (typeof window === "undefined") return false;
    const stored = localStorage.getItem("theme");
    if (stored) return stored === "dark";
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  {/* Effect: sync class + localStorage */}
  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  {/* Toggle callback */}
  const toggle = useCallback(() => setIsDark((prev) => !prev), []);

  return (
    <DarkModeContext.Provider value={{ isDark, toggle }}>
      {children}
    </DarkModeContext.Provider>
  );
}

{/* Consumer hook */}
export function useDarkMode() {
  const ctx = useContext(DarkModeContext);
  if (!ctx) throw new Error("useDarkMode must be used within DarkModeProvider");
  return ctx;
}
