# Core Rules — BaiKiemTra (Hệ thống Bài Kiểm Tra Online)

> Adapted from TiengAnhCoThuy core rules — bỏ React, dùng vanilla HTML/CSS/JS.

---

## 1. Think Before Coding

- **Đừng giả định. Đừng giấu sự mơ hồ.**
- Nêu rõ giả định. Không chắc → hỏi.
- Nhiều cách hiểu → liệt kê, đừng âm thầm chọn một cách.
- Có hướng đơn giản hơn → nói ra.

---

## 2. Simplicity First

**Code tối thiểu để giải quyết vấn đề. Không code suy đoán.**

- Không thêm tính năng ngoài yêu cầu.
- Không abstraction cho code chỉ dùng 1 lần.
- 200 dòng rút được còn 50 → viết lại.

---

## 3. Domain Glossary

**Tất cả agent PHẢI đọc `.kilo/memory/reference.md` trước khi làm việc.**

- Dùng đúng tên exam type, color variable, file naming
- Nếu phát hiện thuật ngữ mới → cập nhật vào `reference.md`

---

## 4. Surgical Changes

**Chỉ chạm vào những gì cần.**

- Không "cải tiến" code, comment, format xung quanh.
- Không refactor thứ không bị hỏng.
- Giữ nguyên style hiện tại của file.

---

## 5. Goal-Driven Execution

| Thay vì...            | Chuyển thành...                                        |
| --------------------- | ------------------------------------------------------ |
| "Thêm đề thi X"       | "Tạo file Exam/{type}/{name}.html, test: làm thử được" |
| "Sửa lỗi điểm"        | "Test: chọn đáp án → điểm hiển thị đúng"               |
| "Cải thiện giao diện" | "So sánh trước/sau, kiểm tra responsive"               |

---

## 6. Request Classification

| Loại yêu cầu                                        | Hành động                     |
| --------------------------------------------------- | ----------------------------- |
| **Hỏi đáp** (what, how, explain)                    | Trả lời text, không code      |
| **Sửa nhỏ** (fix, change, ≤ 2 file)                 | Sửa trực tiếp, không qua Plan |
| **Tạo mới / Refactor** (build, create, ≥ 3 file)    | Lập kế hoạch → code           |

---

## 7. Socratic Gate

Với yêu cầu phức tạp, phải hỏi trước khi code:
- Mục tiêu cụ thể là gì?
- Phạm vi đến đâu?
- Tiêu chí hoàn thành là gì?

---

## 8. Tech Stack — BaiKiemTra Specifics

### Công nghệ
- Vanilla HTML + CSS + JavaScript (không React, không framework)
- Font: 'Inter', sans-serif (Google Fonts)
- Audio: Google Drive iframe embed (ưu tiên) + local files
- Scoring: JavaScript tự chấm, hiển thị trong trang

### Cấu trúc
```
index.html                   — Trang chủ
Exam/{type}/{name}.html      — Bài thi self-contained
assets/images/               — Ảnh
assets/audio/                — File audio
templates/                   — Mẫu đề thi
Congratulations/             — Trang kết quả
```

### Quy ước
- File naming: kebab-case, viết thường, không dấu
- Exam file: self-contained (HTML + `<style>` + `<script>`)
- Màu: Dùng CSS variables từ `:root`, không hardcode
- Audio: Luôn có fallback text

---

## 9. Security Guardrails

- Không log credentials, API keys
- Link ra ngoài dùng `target="_blank" rel="noopener noreferrer"`
- Form đăng ký test đầu vào: Google Forms (external, không xử lý local)

---

## 10. Verification Protocol

| Hành động                  | Kiểm tra bắt buộc                                   |
| -------------------------- | --------------------------------------------------- |
| Tạo file mới               | File tồn tại? Mở được trong browser?                |
| Sửa file                   | Diff chỉ đúng dòng cần sửa?                         |
| Tạo/thêm bài thi           | Làm thử bài thi, kiểm tra điểm số hiển thị đúng     |
| Sửa CSS / UI               | So sánh trước/sau? Responsive?                      |
| Thêm audio                 | Audio load được? Fallback text hiển thị?            |
| Chạy lệnh preview          | Server chạy được? Trang load không lỗi?             |

---

## 11. Snapshot Safety

**Luôn snapshot** trước khi sửa code để có thể rollback.
Gọi `/snapshot` → sửa → báo user "Đã snapshot, dùng /restore để rollback."

---

## 12. Checklist & Cost Awareness

### Checklist cho task nhiều bước
Tạo checklist và cập nhật `[x]` khi hoàn thành từng bước.

### Cost Awareness
- Flash cho subtask đơn giản, Pro cho bước cần chính xác cao.
- Báo cáo token usage cuối mỗi task.
