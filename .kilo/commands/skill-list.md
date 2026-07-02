---
description: Liệt kê tất cả skill đã cài trong .kilo/skills/ và thư mục skills global
agent: general
---

# Skill List Workflow

Liệt kê tất cả skill hiện có — cả local (`.kilo/skills/`) và global (`~/.config/kilo/skills/`).

## Quy trình

1. **Kiểm tra local skills**: Đọc nội dung thư mục `.kilo/skills/`. Với mỗi thư mục con, kiểm tra sự tồn tại của `SKILL.md` và đọc `name` + `description` từ frontmatter.

2. **Kiểm tra global skills**: Đọc nội dung thư mục `~/.config/kilo/skills/` (nếu tồn tại). Tương tự phân tích `SKILL.md`.

3. **Hiển thị kết quả**: In danh sách skills theo format:
   ```
   📦 Local skills (.kilo/skills/):
   ──────────────────────────────
   • <name> — <description> (từ: <nguồn>)
   ...

   📦 Global skills (~/.config/kilo/skills/):
   ──────────────────────────────
   • <name> — <description> (từ: <nguồn>)
   ```

4. **Đánh dấu trusted/untrusted**: Nếu skill là từ cộng đồng và chưa được trust, hiển thị ⚠️ bên cạnh.

## Lưu ý

- Nếu không có skill nào, thông báo "Chưa có skill nào được cài đặt."
- Gợi ý user dùng `/skill-install` để cài skill mới.
