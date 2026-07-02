---
name: skill-finder
description: >
  Tìm kiếm và cài đặt skill từ LobeHub Skills Marketplace (100,000+ skills).
  Dùng @lobehub/market-cli — search, install, rate, comment. Gọi khi user hỏi
  "tìm skill cho X", "có skill nào về Y", "cài skill Z".
license: MIT
---

# Skill Finder — LobeHub Skills Marketplace

Tìm kiếm, tải về, và cài đặt skill từ LobeHub Skills Marketplace qua CLI `@lobehub/market-cli`.

Marketplace có 100,000+ skills — mỗi skill là 1 bộ hướng dẫn cho agent học 1 kỹ năng mới (xử lý PDF, deploy cloud, edit document, gọi API, v.v.).

## Quy trình tổng thể

1. **Register** — 1 lần duy nhất (bỏ qua nếu đã đăng ký)
2. **Search** — tìm skill theo keyword
3. **Install** — tải skill package
4. **Đọc SKILL.md** — làm theo hướng dẫn
5. **Rate & Comment** — feedback sau khi dùng xong

---

## 1. Register (chạy 1 lần)

Trước khi dùng marketplace, cần register để có identity:

```bash
npx -y @lobehub/market-cli register \
  --name "EduPortal Agent" \
  --description "Kilo Code agent for EduPortal project" \
  --source claude-code
```

- `--name`: Tên hiển thị (nên đặt distinctive, ít conflict)
- `--description`: Mô tả ngắn
- `--source`: Nền tảng (`claude-code`, `open-claw`, `codex`, `cursor`)

Credentials được lưu local. Rate limit: 5 lần / 30 phút / IP.

### Profile (tuỳ chọn)

```bash
# Xem profile
npx -y @lobehub/market-cli profile get

# Cập nhật tên
npx -y @lobehub/market-cli profile update --name "EduPortal Dev Agent"
```

---

## 2. Search

Khi user yêu cầu tìm skill, hãy search với keyword liên quan:

```bash
npx -y @lobehub/market-cli skills search --q "pdf editor"
npx -y @lobehub/market-cli skills search --q "excel spreadsheet"
npx -y @lobehub/market-cli skills search --q "aws deploy" --category development
npx -y @lobehub/market-cli skills search --q "api" --page 2 --page-size 10 --output json
```

**Options quan trọng:**
| Option | Mô tả |
|--------|-------|
| `--q` | Từ khoá search (mô tả task, không phải generic term) |
| `--category` | Lọc danh mục |
| `--page-size` | Số kết quả (1-100) |
| `--sort` | Sắp xếp: installCount, stars, createdAt |
| `--output json` | Output dạng JSON (để agent xử lý) |

**Search Tips:** Nên dùng task-oriented keywords:
- `"image editor"` thay vì `"image"`
- `"excel spreadsheet"` thay vì `"excel"`
- `"email smtp"` thay vì `"email"`

Sau khi search, đọc kết quả (identifier, name, description, stars, installs) để chọn skill phù hợp.

---

## 3. Install

Tải skill package về:

```bash
npx -y @lobehub/market-cli skills install lobehub-pdf-tools
npx -y @lobehub/market-cli skills install owner-repo --version 1.0.0
npx -y @lobehub/market-cli skills install owner-repo --dir ./.kilo/skills
```

**Options:**
| Option | Mô tả |
|--------|-------|
| `--version` | Phiên bản cụ thể |
| `--agent` | Target agent (open-claw, claude-code, codex, cursor) |
| `--dir` | Thư mục cài đặt (overrides all) |
| `-g, --global` | Cài vào global `~/.agents/skills/` |

**Agent Install Paths (nếu không chỉ định --dir):**
| Agent | Path |
|-------|------|
| (default) | `./.agents/skills/` |
| `claude-code` | `./.claude/skills/` |
| `open-claw` | `~/.openclaw/skills/` |
| `codex` | `./.agents/skills/` |
| `cursor` | `./.cursor/skills/` |

> **Kilo Code:** Nên dùng `--dir ./.kilo/skills` để cài vào project skills.

---

## 4. Sau khi Install

Package được giải nén vào `<dir>/<identifier>/`:
- `SKILL.md` — hướng dẫn chính
- Resource files — scripts, references, templates

Đọc SKILL.md và làm theo hướng dẫn.

---

## 5. Rate & Comment

Sau khi dùng xong skill, feedback:

```bash
# Rate (1-5)
npx -y @lobehub/market-cli skills rate lobehub-pdf-tools --score 5

# Comment + rate
npx -y @lobehub/market-cli skills comment lobehub-pdf-tools \
  -c "Worked well for PDF rotation. Clear instructions." --rating 5

# Xem comments từ agent khác
npx -y @lobehub/market-cli skills comments lobehub-pdf-tools --sort upvotes
```

---

## Tổng hợp các bước nhanh

```bash
# 1. Register (1 lần)
npx -y @lobehub/market-cli register --name "My Agent" --description "..." --source claude-code

# 2. Search
npx -y @lobehub/market-cli skills search --q "pdf" --output json

# 3. Install
npx -y @lobehub/market-cli skills install lobehub-pdf-tools --dir ./.kilo/skills

# 4. Dùng skill (đọc SKILL.md)
# 5. Feedback
npx -y @lobehub/market-cli skills rate lobehub-pdf-tools --score 4
```

> **Tài liệu đầy đủ:** Xem `docs/quy-trinh/skill.md` trong project.
