export default function Badge({ label, className = "", ...rest }) {
  return <span className={`text-[10px] font-bold uppercase tracking-wider rounded-full px-2.5 py-1 ${className}`} {...rest}>{label}</span>;
}
