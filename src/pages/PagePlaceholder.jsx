import { useLocation } from "react-router-dom";
import { Construction } from "lucide-react";

{/* Constants: PAGE_INFO */}
const PAGE_INFO = {
  "khoa-hoc": { title: "Khóa học", desc: "Danh sách các khóa học tiếng Anh tại VEU" },
  "luyen-tap": { title: "Luyện tập", desc: "Bài tập luyện thêm theo từng kỹ năng" },
  "thu-thach": { title: "Thử thách", desc: "Thử thách kiến thức với các đề thi nâng cao" },
  "tin-tuc": { title: "Tin tức", desc: "Tin tức và sự kiện mới nhất từ VEU" },
};

export default function PagePlaceholder() {
  const path = useLocation().pathname.replace("/", "");
  const info = PAGE_INFO[path] || { title: "Trang", desc: "Nội dung đang được cập nhật" };

  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center px-4 py-16 animate-fade-up">
      <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-primary/10 mb-6">
        <Construction className="w-10 h-10 text-primary" />
      </div>
      <h1 className="text-3xl md:text-4xl font-black text-text-primary mb-2">{info.title}</h1>
      <p className="text-sm text-text-secondary text-center max-w-md mb-8">{info.desc}</p>
      <div className="w-full max-w-2xl border-2 border-dashed border-border-light rounded-3xl p-8 md:p-12 text-center">
        <p className="text-text-muted font-bold text-sm uppercase tracking-wider mb-2">Nội dung đang được xây dựng</p>
        <p className="text-text-secondary text-xs">Vui lòng quay lại sau. Trang này sẽ sớm được cập nhật thông tin chi tiết.</p>
      </div>
    </div>
  );
}
