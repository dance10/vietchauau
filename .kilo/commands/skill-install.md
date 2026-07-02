---
description: Cài đặt skill từ GitHub vào .kilo/skills/ hoặc global skills directory
agent: general
---

# Skill Install Workflow

Cài đặt skill từ GitHub repository về thư mục skills của dự án hoặc global.

## Cú pháp

```
/skill-install github:<owner>/<repo>
/skill-install <full-github-url>
```

Ví dụ:
- `/skill-install github:username/my-kilo-skills`
- `/skill-install https://github.com/username/my-kilo-skills.git`

## Quy trình

1. **Nhận input**: Xác định URL GitHub từ lệnh của user. Hỗ trợ cả dạng `github:<owner>/<repo>` và URL đầy đủ.

2. **Parse URL**: Chuyển đổi `github:<owner>/<repo>` thành `https://github.com/<owner>/<repo>.git`.

3. **Clone vào thư mục tạm**: Clone repo vào thư mục tạm (dùng `git clone --depth 1` để nhanh):
   ```bash
   git clone --depth 1 <url> /tmp/kilo-skill-install-<timestamp>
   ```

4. **Duyệt tìm SKILL.md**: Tìm các thư mục con chứa file `SKILL.md`. Mỗi thư mục như vậy là một skill.

5. **Copy skill**: Với mỗi skill tìm thấy:
   - Kiểm tra `SKILL.md` có frontmatter hợp lệ (name, description)
   - Copy thư mục skill vào `.kilo/skills/<skill-name>/`
   - Nếu skill name đã tồn tại, báo conflict và hỏi user có muốn ghi đè không

6. **Xác minh**: Kiểm tra file đã được copy đúng:
   ```bash
   ls .kilo/skills/<skill-name>/SKILL.md
   ```

7. **Dọn dẹp**: Xoá thư mục tạm.

8. **Báo kết quả**: Thông báo skill(s) đã được cài thành công.

## Lưu ý

- Skill cộng đồng cần được user trust trước khi agent có thể dùng (xem rule `skill-trust.md`).
- Nếu repo chứa nhiều skill, cài tất cả.
- Nếu repo không có `SKILL.md`, báo lỗi.
