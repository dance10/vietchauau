export default function SectionTitle({ title, gradientColor = "var(--color-primary)" }) {
  return (
    <div className="flex flex-col items-center gap-3 mb-6">
      <h2 className="text-[0.65rem] md:text-xs font-black uppercase tracking-[0.2em] text-text-secondary text-center">{title}</h2>
      <div className="h-[3px] max-w-[128px] w-full rounded-full" style={{ background: `linear-gradient(90deg, ${gradientColor}, transparent)`, opacity: 0.25 }} />
    </div>
  );
}
