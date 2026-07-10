export default function AboutSection() {
  return (
    <section className="bg-gradient-to-br from-navy-deep via-navy-light to-blue-light text-white py-10 md:py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">
        <div className="inline-block bg-white/10 backdrop-blur-md text-gold text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider mb-4 border border-white/20">
          Về chúng tôi
        </div>
        <h2 className="text-xl md:text-3xl font-black text-white mb-2 leading-tight">
          VỀ TRUNG TÂM ANH NGỮ <span className="text-gold">VIỆT CHÂU ÂU (VEU)</span>
        </h2>

        <div className="flex justify-center gap-3 my-6">
          <div className="w-44 md:w-56 aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
            <img src="/images/001.jpg" alt="VEU lớp học" className="w-full h-full object-cover" loading="lazy" />
          </div>
          <div className="w-44 md:w-56 aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
            <img src="/images/002.jpg" alt="VEU hoạt động" className="w-full h-full object-cover" loading="lazy" />
          </div>
        </div>

        <div className="max-w-3xl mx-auto space-y-3 text-sm md:text-[15px] text-white/80 leading-relaxed mb-8 md:mb-12">
          <p>
            Chào mừng bạn đến với Trung tâm Anh ngữ Việt Châu Âu (VEU) – nơi chắp cánh cho những ước mơ và mở ra cánh cửa thành công thông qua ngôn ngữ toàn cầu!
          </p>
          <p className="text-white/90">
            Với phương châm cốt lõi <strong className="text-white">"If you can dream it, you can do it"</strong> và sứ mệnh <strong className="text-white">"Bringing excellence to students"</strong> (Mang sự xuất sắc đến cho học viên), VEU cam kết đồng hành cùng các thế hệ học viên trên chặng đường chinh phục tiếng Anh.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-5 rounded-2xl hover:bg-white/15 hover:scale-[1.02] transition-all duration-300">
            <div className="w-9 h-9 rounded-lg bg-gold/20 flex items-center justify-center text-base mb-3">🌟</div>
            <h3 className="font-bold text-white text-sm mb-1">Tầm Nhìn & Triết Lý</h3>
            <p className="text-xs text-white/70 leading-relaxed">
              <strong className="text-gold">"Live, learn and love English. English is your success."</strong> Tiếng Anh là trải nghiệm sống động, giúp bạn tự tin làm chủ tương lai.
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-5 rounded-2xl hover:bg-white/15 hover:scale-[1.02] transition-all duration-300">
            <div className="w-9 h-9 rounded-lg bg-gold/20 flex items-center justify-center text-base mb-3">🎯</div>
            <h3 className="font-bold text-white text-sm mb-1">Tại Sao Chọn VEU?</h3>
            <ul className="text-xs text-white/70 space-y-1">
              <li>✅ Chương trình chuẩn quốc tế, cá nhân hóa</li>
              <li>✅ Giáo viên Việt Nam & bản xứ tận tâm</li>
              <li>✅ Cơ sở vật chất hiện đại</li>
              <li>✅ Hoạt động ngoại khóa thực tế</li>
            </ul>
          </div>
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-5 rounded-2xl hover:bg-white/15 hover:scale-[1.02] transition-all duration-300">
            <div className="w-9 h-9 rounded-lg bg-gold/20 flex items-center justify-center text-base mb-3">📍</div>
            <h3 className="font-bold text-white text-sm mb-1">Liên Hệ</h3>
            <div className="text-xs text-white/70 space-y-1">
              <p><strong className="text-gold">Đ/c:</strong> 1031 Nguyễn Ảnh Thủ, P. Tân Chánh Hiệp, Q12</p>
              <p><strong className="text-gold">Email:</strong> Vietchauau86@gmail.com</p>
              <p className="italic mt-1 text-white/50">Liên hệ VEU ngay hôm nay!</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
