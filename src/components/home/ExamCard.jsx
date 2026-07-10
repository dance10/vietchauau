import { useNavigate } from "react-router-dom";
import { Clock, FileText, ArrowRight, Star, GraduationCap, School, BookOpen, Briefcase } from "lucide-react";
import { LEVEL_COLORS } from "../../config/constants";
import Badge from "../ui/Badge";

{/* Constants: ICON_MAP */}
const ICON_MAP = { Star, GraduationCap, School, BookOpen, Briefcase, FileText };

export default function ExamCard({ exam }) {
  const navigate = useNavigate();
  const level = LEVEL_COLORS[exam.level] || LEVEL_COLORS.young;
  const IconComponent = ICON_MAP[level.icon] || FileText;
  return (
    <div className={`w-[240px] sm:w-[260px] shrink-0 bg-surface rounded-2xl border border-border-light overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ease-out flex flex-col ${level.border}`} style={{ borderTopWidth: "3px" }}>
      {/* Card content: icon, badge, title, desc, meta */}
      <div className="p-padding-card flex flex-col gap-3 flex-1">
        <div className="flex justify-between items-start">
          <div className={`w-10 h-10 rounded-lg ${level.bgLight} flex items-center justify-center`}>
            <IconComponent className="w-5 h-5" style={{ color: level.color }} />
          </div>
          <Badge label={exam.badge} className={`${level.bgLight}`} style={{ color: level.color }} />
        </div>
        <h3 className="font-bold text-sm text-text-primary line-clamp-2">{exam.title}</h3>
        <p className="text-xs text-text-secondary line-clamp-2 leading-relaxed">{exam.desc}</p>
        <div className="flex items-center gap-4 text-xs text-text-secondary mt-auto pt-2">
          <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{exam.time}</span>
          <span className="flex items-center gap-1"><FileText className="w-3.5 h-3.5" />{exam.questions}</span>
        </div>
      </div>
      {/* Card action button */}
      <div className="px-padding-card pb-padding-card">
        <button onClick={() => navigate(`/exam/${exam.id}`)}
          className="w-full bg-primary hover:bg-blue-light text-white py-2.5 px-4 rounded-xl font-bold text-xs flex items-center justify-center gap-2 hover:scale-[1.03] hover:-translate-y-0.5 active:scale-[0.97] transition-all duration-200">
          Vào thi <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
