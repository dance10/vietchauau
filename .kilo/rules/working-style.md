# Phong Cách Làm Việc — BaiKiemTra (Hệ thống Bài Kiểm Tra Online)

---

## 1. Cách bạn giao tiếp

- **Ngôn ngữ:** Tiếng Việt (có dấu) là chính.
- **Phong cách:** Yêu cầu rõ ràng, ngắn gọn, thẳng vào vấn đề.
- **Phản hồi:** Khi không hài lòng, bạn nói rõ lý do và yêu cầu sửa.

---

## 2. Cách bạn ra quyết định

1. **Thu thập dữ liệu** — Đọc code, phân tích hiện trạng.
2. **Đề xuất nhiều lựa chọn** — kèm ưu/nhược điểm.
3. **Chọn & giải trình** — Chọn hướng phù hợp nhất, ghi rõ lý do.
4. **Chia phase** — Công việc lớn chia phase nhỏ, mỗi phase có tiêu chí hoàn thành.

---

## 3. Cách bạn tổ chức công việc

### Dự án theo Phase
```
## Phase N — [Tên]
**Trạng thái:** ✅/⏳/📅
### Mục tiêu
### Công việc đã làm
### Kết quả
```

---

## 4. Checklist cho mỗi phiên

- [ ] Đã kiểm tra file tạo/sửa tồn tại?
- [ ] Đã mở browser, làm thử bài thi, kiểm tra điểm số?
- [ ] Đã kiểm tra responsive?
- [ ] Đã kiểm tra edge case (không chọn đáp án, chọn rồi bỏ)?
- [ ] Audio load được (nếu có)?
- [ ] Không còn câu hỏi hay offer thêm — kết thúc dứt khoát.

---

## 5. Sở thích kỹ thuật

### UI & Styling
- **HTML thuần** — không React, không framework
- **Font:** 'Inter', sans-serif
- **Responsive:** Mobile-first, kiểm tra 375px, 768px, 1024px
- **Màu:** Dùng CSS variables, không hardcode

### Kiến trúc
```
index.html (trang chủ, sidebar, leaderboard)
Exam/{type}/{name}.html (bài thi self-contained)
```

### Code style
- Self-contained HTML file: `<style>` + `<script>` trong cùng file
- JavaScript: function-based, không class/component
- CSS variables: dùng `var(--accent-blue)` thay vì màu cứng
