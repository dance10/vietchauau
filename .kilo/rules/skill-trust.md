# Skill Trust Rules

---

## 1. Skill Trust Levels

| Mức | Ý nghĩa | Hành vi |
|-----|---------|---------|
| **Trusted** | Đã user phê duyệt | Agent tự động dùng |
| **Untrusted** | Mới cài, chưa duyệt | Hỏi user trước khi dùng |
| **Built-in** | Nội bộ | Mặc định trusted |

## 2. Phân loại

- **Built-in**: Skill trong `.kilo/skills/` do team tạo.
- **Cộng đồng**: Skill cài qua `/skill-install`.

## 3. Quy trình trust

1. Xác định skill cần dùng.
2. Nếu skill cộng đồng và chưa hỏi → dùng `question` tool hỏi user.
3. Nếu user trust → agent dùng được.
4. Nếu user không trust → bỏ qua skill.

## 4. Mặc định

- Skill cộng đồng: **Untrusted**
- Skill nội bộ: **Trusted**
- Không xác định nguồn: **Untrusted**
