const VARIANT_STYLES = {
  primary: "bg-primary hover:bg-blue-light text-white shadow-sm",
  gold: "bg-gold hover:bg-gold-light text-white shadow-sm",
  cta: "bg-cta hover:bg-cta-hover text-white shadow-lg shadow-cta/30",
  "cta-secondary": "bg-white/10 backdrop-blur-md border border-white text-white hover:bg-white/20",
};
const SIZE_STYLES = {
  sm: "text-xs px-3 py-1.5 rounded-lg gap-1.5",
  md: "text-sm px-6 py-2 rounded-xl gap-1.5",
  lg: "text-base px-8 py-3 rounded-xl gap-2",
  hero: "text-2xl px-10 py-4 rounded-2xl gap-3",
};

export default function Button({ variant = "primary", size = "md", icon: Icon = null, children, className = "", ...rest }) {
  const isHero = size === "hero";
  const hoverClass = isHero
    ? "hover:scale-105 hover:-translate-y-2 transition-all duration-300"
    : "hover:scale-105 hover:-translate-y-0.5 active:scale-95 active:translate-y-0 transition-all duration-200";
  return (
    <button className={`inline-flex items-center justify-center font-bold ${VARIANT_STYLES[variant]} ${SIZE_STYLES[size]} ${hoverClass} ${className}`} {...rest}>
      {children}
      {Icon && <Icon className={`${size === "hero" ? "w-8 h-8" : size === "sm" ? "w-3 h-3" : "w-4 h-4"}`} />}
    </button>
  );
}
