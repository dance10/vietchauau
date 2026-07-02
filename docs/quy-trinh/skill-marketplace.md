# Hướng Dẫn Tìm Kiếm & Cài Đặt Skill Từ Marketplace

> **Version:** 2.0.0 | **Ngày:** 2026-06-28
>
> ⚠️ **Tài liệu chính thức:** `docs/quy-trinh/skill.md` — mô tả CLI `@lobehub/market-cli`
> với 100,000+ skills. **Nên dùng cách đó trước.**
>
> Tài liệu này là bản backup thủ công cho các trường hợp không dùng được CLI.

---

## Mục Lục

1. [Tổng Quan Marketplace](#1-tổng-quan-marketplace)
2. [Cách Dùng CLI Chính Thức](#2-cách-dùng-cli-chính-thức)
3. [Cách Tìm Skill Thủ Công (Backup)](#3-cách-tìm-skill-thủ-công-backup)
4. [Convert LobeChat Agent → Kilo Skill](#4-convert-lobechat-agent--kilo-skill)
5. [Cách Tạo SKILL.md Từ Đầu](#5-cách-tạo-skillmd-từ-đầu)
6. [Kiểm Tra Skill Đã Cài](#6-kiểm-tra-skill-đã-cài)
7. [Cập Nhật Skill](#7-cập-nhật-skill)

---

## 1. Tổng Quan Marketplace

| Marketplace | URL / Cách dùng | Format | Số lượng |
|-------------|----------------|--------|---------|
| **LobeHub Skills** (chính thức) | `npx @lobehub/market-cli skills search` | SKILL.md | 100,000+ |
| **Kilo Marketplace** | [github.com/Kilo-Org/kilo-marketplace](https://github.com/Kilo-Org/kilo-marketplace) | SKILL.md | Đang phát triển |
| **LobeChat Agents** | [lobechat.com/discover/assistants](https://lobechat.com/discover/assistants) | JSON | 140+ |
| **AgentSkills.io** | [agentskills.io](https://agentskills.io) | SKILL.md | Đang phát triển |

> ⭐ **Khuyến nghị:** Dùng `@lobehub/market-cli` CLI tool — xem chi tiết ở `docs/quy-trinh/skill.md`.

## 2. Cách Dùng CLI Chính Thức

Xem file `docs/quy-trinh/skill.md` trong project. Tóm tắt nhanh:

```bash
# 1. Register (1 lần)
npx -y @lobehub/market-cli register --name "Agent Name" --description "..." --source claude-code

# 2. Search
npx -y @lobehub/market-cli skills search --q "pdf editor"

# 3. Install vào .kilo/skills/
npx -y @lobehub/market-cli skills install lobehub-pdf-tools --dir ./.kilo/skills

# 4. Feedback
npx -y @lobehub/market-cli skills rate lobehub-pdf-tools --score 5
npx -y @lobehub/market-cli skills comment lobehub-pdf-tools -c "Great skill" --rating 5
```

### AgentSkills Specification (chuẩn chung)

Tất cả marketplace trên đều tuân theo [AgentSkills specification](https://agentskills.io/specification). Cấu trúc skill:

```
skill-name/
├── SKILL.md          # YAML frontmatter + markdown body
├── scripts/          # Optional: code
├── references/       # Optional: tài liệu
└── assets/           # Optional: templates
```

Frontmatter bắt buộc:
- `name` — lowercase + hyphen, max 64 ký tự
- `description` — mô tả khi nào dùng skill, max 1024 ký tự
- `license` — (optional)

---

## 3. Cách Tìm Skill Thủ Công (Backup)

### Trình duyệt web

| Nguồn | Cách tìm |
|-------|---------|
| **LobeChat Agents** | Mở `https://lobechat.com/discover/assistants` → gõ keyword (VD: "python", "react", "translation") |
| **AgentSkills.io** | Mở `https://agentskills.io` → browse danh sách |
| **Kilo Marketplace** | Mở `https://github.com/Kilo-Org/kilo-marketplace/tree/main/skills` |

### GitHub Search (nâng cao)

```bash
# Tìm repo có chủ đề agent-skills
# https://github.com/topics/agent-skills

# Tìm skill theo keyword trong LobeHub
# https://api.github.com/repos/lobehub/lobe-chat-agents/contents/src

# Kilo Marketplace
# https://api.github.com/repos/Kilo-Org/kilo-marketplace/contents/skills
```

---

## Cách Cài Skill Qua Agent (Dùng skill-finder)

Nói với Kilo agent:

- "Tìm skill cho việc phân tích PDF"
- "Có skill nào về Python không?"
- "Cài skill lobehub-pdf-tools"

Agent sẽ dùng skill `skill-finder` để chạy CLI.

Xem skill-finder instructions: `.kilo/skills/skill-finder/SKILL.md`

---

## 4. Convert LobeChat Agent → Kilo Skill (Backup — khi không dùng được CLI)

### Field Mapping

| LobeChat JSON | SKILL.md | Ghi chú |
|--------------|----------|---------|
| `identifier` | `name` | Chuyển lowercase, `_` → `-` |
| `meta.title` + `meta.tags` | `description` | Ghép: "title — tag1, tag2. From LobeHub." |
| `author` | `metadata.author` | Ghi nhận tác giả |
| `config.systemRole` | Body (markdown) | Nội dung chính của skill |
| identifier | `metadata.source` | `https://lobechat.com/discover/assistant/{identifier}` |

### Ví dụ

Input (LobeChat):
```json
{
  "author": "swarfte",
  "config": {
    "systemRole": "As an English-Chinese vocabulary translation expert, your task is to provide accurate bilingual dictionary translations..."
  },
  "identifier": "english-chinese-dictionary-expert",
  "meta": {
    "title": "Bilingual Dictionary Expert",
    "tags": ["translation", "language-learning", "vocabulary", "dictionary"]
  }
}
```

Output (SKILL.md):
```markdown
---
name: english-chinese-dictionary-expert
description: Bilingual Dictionary Expert — translation, language-learning, vocabulary, dictionary. From LobeHub.
license: MIT
metadata:
  author: swarfte
  source: https://lobechat.com/discover/assistant/english-chinese-dictionary-expert
---

As an English-Chinese vocabulary translation expert, your task is to provide accurate bilingual dictionary translations...
```

---

## 5. Cách Tạo SKILL.md Từ Đầu (Khi không có sẵn)

```markdown
---
name: my-skill-name
description: >
  Mô tả ngắn gọn skill này làm gì và khi nào nên dùng.
  Khoảng 1-2 câu, tối đa 1024 ký tự.
license: MIT
metadata:
  author: your-name
  version: 1.0.0
---

# Hướng Dẫn Sử Dụng Skill

## Mục tiêu
[Skill này giải quyết vấn đề gì]

## Các bước thực hiện
1. Bước 1: ...
2. Bước 2: ...
3. Bước 3: ...

## Quy tắc
- ...
- ...

## Ví dụ
```code
...
```
```

### Quy tắc đặt tên

| Rule | Ví dụ đúng | Ví dụ sai |
|------|-----------|-----------|
| lowercase + hyphens | `academic-paper-review` | `Academic Paper Review` |
| max 64 ký tự | `pdf-processing` | `a-very-long-skill-name-that-exceeds-sixty-four-characters` (❌) |
| không bắt đầu/kết thúc bằng hyphen | `pdf-processing` | `-pdf-processing` (❌) |
| không hyphen kép | `pdf-processing` | `pdf--processing` (❌) |

---

## 6. Kiểm Tra Skill Đã Cài

Hỏi agent trực tiếp trong chat:

- "Anh có những skills nào?"
- "Anh có skill tên X không?"

Agent sẽ trả lời dựa trên danh sách skills trong `.kilo/skills/`.

Hoặc kiểm tra thủ công:
```bash
ls .kilo/skills/
# Mỗi thư mục là 1 skill
```

---

## 7. Cập Nhật Skill

### Tự động (qua agent)
Nói với agent: "Cập nhật skill X lên phiên bản mới nhất từ marketplace"

### Thủ công
1. Xoá thư mục skill cũ: `rm -rf .kilo/skills/{name}`
2. Làm lại bước cài đặt từ marketplace
3. Mở session Kilo Code mới để load skill mới
4. Kiểm tra: hỏi agent "Anh có skill X không?"

### Lưu ý
- Skills chỉ được load lại khi bắt đầu **session mới** trong Kilo Code
- Nếu bạn vừa cài skill xong, gõ `/new task` để bắt đầu session mới
