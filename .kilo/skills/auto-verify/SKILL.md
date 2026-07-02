---
name: auto-verify
description: Tự động kiểm tra code sau mỗi thay đổi — check file, validate HTML, responsive. Đảm bảo verification protocol được thực thi mà không cần nhắc thủ công.
license: MIT
---

# Auto-Verify Skill (Static HTML/CSS/JS)

Skill này hướng dẫn agent tự động chạy verification tại các checkpoint trong lifecycle:

## Checkpoint 1 — PostWrite / PostEdit

Sau khi ghi file mới hoặc sửa file:

1. **Verify tồn tại**: Kiểm tra file tồn tại, nội dung hợp lệ (không rỗng, không truncate).
2. **Verify diff**: Chỉ đúng những dòng cần sửa? Không thay đổi code xung quanh?
3. **Check HTML syntax nếu là HTML file**:
   - Kiểm tra thẻ đóng đầy đủ (không thiếu `</div>`, `</section>`, etc.)
   - Kiểm tra `<!doctype html>` và `<meta charset>` tồn tại
   - Kiểm tra không có thẻ tự đóng sai (VD: `<div />`)
4. **Check CSS/JS basic validation** (nếu là file CSS/JS):
   - Kiểm tra cú pháp cơ bản (không thiếu dấu ngoặc, dấu chấm phẩy)
5. Báo lỗi ngắn gọn (1-3 dòng), không dump toàn bộ log.

## Checkpoint 2 — PreBuild (không có build step)

Trước khi claim hoàn thành:

1. Kiểm tra tất cả file HTML/CSS/JS đã được verify (không còn lỗi syntax).
2. Nếu có UI change: kiểm tra responsive (mobile + desktop).
3. Kiểm tra edge case: loading, empty, error state.
4. Kiểm tra internal links không bị hỏng (nếu có).
5. Kiểm tra Google Apps Script fetch URL nếu có thay đổi.

## Checkpoint 3 — Stop / Task Complete

Khi kết thúc task:

1. **Báo cáo cost** (theo format trong [`../../rules/cache-monitoring.md`](../../rules/cache-monitoring.md)).
2. **Cập nhật feedback** nếu có bài học từ lần verify (vào `.kilo/memory/feedback.md`).
3. **Nhắc `/new task`** nếu session đã chạy > 15 turns.

## Nguyên tắc

- Verification output phải gọn gàng (tối đa 3 dòng cho success, 5 dòng cho failure).
- Nếu verify fail: ghi rõ lý do, không tự ý chuyển hướng.
- Nếu không chắc chắn: hỏi user, đừng tự quyết định.
