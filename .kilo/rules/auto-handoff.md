# Auto Handoff Rules — Tự động lưu context

> Kết hợp với [`hooks.md`](hooks.md) (AutoHandoff hook) và `session-handoff` skill.
> Bổ sung cho [`deepseek-optimization.md`](deepseek-optimization.md) (reset context).

---

## 1. Trigger Conditions

Agent PHẢI tự động tạo handoff khi:

| Điều kiện | Hành động |
|-----------|-----------|
| Session >= 18 turns | Tạo handoff, gợi ý `/save-next` |
| User nói "tạm dừng", "nghỉ", "pause" | Tạo handoff trước khi dừng |
| Task hoàn thành 1 phase lớn | Tạo handoff checkpoint |

---

## 2. Handoff File Location

```
.kilo/plans/handoff-YYYY-MM-DD-HHmm.md
```

Không lưu vào `.agent/handoffs/` — dùng `.kilo/plans/` để thống nhất với plan system của project.

---

## 3. Auto-Resume

Khi session mới bắt đầu, agent PHẢI:
1. Kiểm tra `.kilo/plans/handoff-*.md`
2. Nếu có file mới nhất trong vòng 24h → hỏi user có muốn `/continue` không
3. Nếu user từ chối → tiếp tục như bình thường
4. Nếu user đồng ý → chạy `/continue` workflow

---

## 4. Handoff Content Requirements

Mỗi handoff file PHẢI có:

| Field | Bắt buộc | Mô tả |
|-------|----------|-------|
| `# Handoff: [tên]` | ✅ | Tên task ngắn gọn |
| `**Created:**` | ✅ | Timestamp tạo |
| `**Status:**` | ✅ | Tiến độ % |
| `## Goal` | ✅ | Mục tiêu 1-2 câu |
| `## Completed` | ✅ | Danh sách đã xong |
| `## Remaining` | ✅ | Danh sách còn lại |
| `## Files Modified` | ✅ | File đã sửa và thay đổi |
| `## Next Steps` | ✅ | Bước đầu tiên khi resume |

---

## 5. Handoff Chain

Khi task kéo dài nhiều handoff:

- Mỗi handoff mới tham chiếu handoff cũ trong phần `## Handoff Chain`
- `/continue` luôn load file mới nhất
- Handoff cũ hơn 7 ngày coi như stale — không auto-resume

---

## 6. Cleanup

- Handoff cũ hơn 30 ngày: agent gợi ý xoá khi bắt gặp
- Handoff của task đã hoàn thành: đánh dấu `✅ Completed` trong file

---

## Tham chiếu

| File | Nội dung |
|------|----------|
| [`../commands/save-next.md`](../commands/save-next.md) | Lệnh tạo handoff + mở session mới |
| [`../commands/continue.md`](../commands/continue.md) | Lệnh resume từ handoff |
| [`hooks.md`](hooks.md) | AutoHandoff lifecycle hook |
| [`deepseek-optimization.md`](deepseek-optimization.md) | Cache & context cost rules |
