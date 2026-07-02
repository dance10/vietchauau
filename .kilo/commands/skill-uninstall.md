---
description: Gỡ cài đặt một skill khỏi .kilo/skills/ hoặc global skills directory
agent: general
---

# Skill Uninstall Workflow

Gỡ bỏ một skill đã cài — có xác nhận an toàn trước khi xoá.

## Cú pháp

```
/skill-uninstall <skill-name>
```

Ví dụ:
- `/skill-uninstall brutalist-ui`
- `/skill-uninstall my-custom-skill`

## Quy trình

1. **Kiểm tra skill tồn tại**: Xác nhận thư mục `.kilo/skills/<skill-name>/` hoặc `~/.config/kilo/skills/<skill-name>/` tồn tại và chứa `SKILL.md`.

2. **Hỏi xác nhận**: Dùng `question` tool để hỏi user có chắc chắn muốn gỡ skill không. Hiển thị:
   - Tên skill
   - Mô tả
   - Vị trí (local hay global)

3. **Xoá thư mục skill**: Nếu user xác nhận, xoá thư mục skill:
   ```bash
   rm -rf .kilo/skills/<skill-name>/
   ```

4. **Xoá trust record**: Nếu skill đã được trust, gỡ record trust (nếu có file trust list).

5. **Báo kết quả**: Xác nhận skill đã được gỡ thành công.

## Lưu ý

- KHÔNG tự ý xoá nếu chưa có xác nhận của user.
- Nếu skill không tồn tại, báo lỗi.
- Chỉ gỡ skill trong `.kilo/skills/` hoặc `~/.config/kilo/skills/`, không đụng skill trong `.cursor/skills/` hoặc `.claude/skills/`.
