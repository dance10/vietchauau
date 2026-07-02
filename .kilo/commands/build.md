---
description: Verify project files — check HTML/CSS/JS validity. No build step.
agent: code
---

# Build Workflow (Static Project)

Dự án VoDu là website tĩnh HTML/CSS/JS — không có build step.

Follow these steps to verify the project:

1. Check all modified HTML files:
   - Mở trong browser, kiểm tra không có lỗi console
   - Kiểm tra thẻ đóng đầy đủ
   - Kiểm tra internal links không bị 404

2. Check JavaScript:
   - Console không có lỗi JS (F12 → Console)
   - Google Apps Script fetch URL còn hoạt động

3. Check CSS:
   - Responsive trên mobile (375px) + desktop (1024px)
   - CSS variables dùng đúng tên

4. If any issues found: report "❌ Verification thất bại" and show details
5. If all pass: report "✅ Verification thành công"
