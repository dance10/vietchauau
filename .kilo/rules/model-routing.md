# Model Routing Rules

---

## 1. Bảng phân loại task

| Độ phức tạp | Loại task | Model |
|-------------|-----------|-------|
| 🟢 Đơn giản | Sửa typo, text, 1-2 dòng | `flash` |
| 🟡 Trung bình | Thêm component mới, 1-3 file | `flash` |
| 🟡 Trung bình | Debug đơn giản, cập nhật UI | `flash` |
| 🔴 Phức tạp | Tạo đề thi mới, refactor > 3 file | `pro` |
| 🔴 Phức tạp | Debug tính điểm, responsive overhaul | `pro` |
| 🔴 Phức tạp | Task mơ hồ, nhiều bước | `pro` |

## 2. Bảng giá

| Model | Input (cache miss) | Input (cache hit) | Output |
|-------|-------------------|-------------------|--------|
| V4 Flash | $0.14/1M | $0.0028/1M | $0.28/1M |
| V4 Pro | $0.435/1M | $0.003625/1M | $0.87/1M |

## 3. Cách áp dụng

1. Phân tích task đầu vào.
2. Tra bảng chọn model phù hợp.
3. Nếu dùng model không phù hợp → gợi ý user chuyển.
