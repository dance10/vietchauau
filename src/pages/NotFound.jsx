import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4 px-4">
      <div className="text-6xl md:text-8xl font-black text-primary/20">404</div>
      <h1 className="text-xl md:text-2xl font-bold text-text-primary">Trang không tồn tại</h1>
      <p className="text-sm text-text-secondary text-center max-w-md">Trang bạn đang tìm kiếm có thể đã bị xóa hoặc đường dẫn không chính xác.</p>
      <Link to="/" className="inline-flex items-center gap-2 mt-4 px-6 py-3 bg-primary text-white rounded-xl font-bold text-sm hover:scale-105 transition-transform">
        <ArrowLeft className="w-4 h-4" /> Quay về trang chủ
      </Link>
    </div>
  );
}
