# DeepSeek Cache-Optimized & Budget-Saving Rules

---

## 1. Phân Luồng Nhiệm Vụ Chỉ Định

| Mode | Cấu hình | Nhiệm vụ | Được phép | Cấm tuyệt đối |
|------|----------|----------|-----------|---------------|
| **Plan** | V4 Pro | Phân tích, lên kế hoạch | `read`, `grep`, `glob`, `question`, `write` plan file | Ghi/sửa file code |
| **Code** | V4 Flash | Thực thi code, fix lỗi | Tất cả tool code | Bỏ qua plan |

---

## 2. Quy Tắc Tiết Kiệm Token

### Đầu ra gọn gàng
- Không giải thích dông dài — chỉ xuất code cần thay đổi
- Không viết lại cả file — dùng `edit` hoặc `apply_diff`
- Lệnh thành công: chỉ báo "Build thành công"
- Lệnh thất bại: chỉ trích 1-3 dòng lỗi

### Reset ngữ cảnh
Khi task hoàn thành → nhắc user `/compact` hoặc `/new task`

---

## 3. Báo cáo chi phí

Cuối mỗi task, báo cáo Cache & Token Summary:
```
📊 Cache & Token Summary
   • Input tokens:    ~X (cache hit: Y%)
   • Output tokens:   ~Z
   • Estimated cost:  ~$W
```

## 4. Cache Hit Optimization Checklist

- [ ] Đã đọc `.kilo/memory/` (đầu session)?
- [ ] Dùng đúng model (flash/pro)?
- [ ] Có thể chia task nhỏ hơn?
