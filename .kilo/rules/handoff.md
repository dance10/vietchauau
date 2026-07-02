# Handoff Protocol — Plan & Act

Quy trình bàn giao giữa Plan Mode và Act Mode trong dự án BaiKiemTra.

---

## 1. Nguyên tắc chung

Dự án sử dụng hai chế độ **Plan** và **Act** giao tiếp qua file `handoff.md`. Tuyệt đối không tự hiểu ngầm, không suy diễn ý đồ.

---

## 2. Nhiệm vụ của Plan Mode

1. Phân tích yêu cầu — xác định rõ mục tiêu, phạm vi, ràng buộc.
2. Lập danh sách công việc — liệt kê chính xác từng file cần tạo/sửa.
3. Ghi tiêu chí kiểm chứng cho từng việc.
4. Ghi vào file `handoff.md`.

**Cấm:** gọi tool sửa code trực tiếp trong Plan Mode.

---

## 3. Nhiệm vụ của Act Mode

1. Đọc `handoff.md`.
2. Không đặt câu hỏi — chỉ thực thi đúng từng bước.
3. Sau mỗi việc: tự kiểm tra dựa trên tiêu chí kiểm chứng.

---

## 4. Template handoff chuẩn

```markdown
# Handoff: [tên task] — [ngày]

## Mục tiêu
[Tóm tắt 1-2 câu]

## Danh sách công việc

### 1. CREATE — File: `Exam/{type}/{name}.html`
- Mô tả: ...
- Tiêu chí kiểm chứng: ...
- Kết quả (Act điền): ...

### 2. REPLACE — File: `index.html`
- Mô tả: ...
- SEARCH: ...
- REPLACE: ...
- Tiêu chí kiểm chứng: ...
- Kết quả (Act điền): ...

## Tiêu chí hoàn thành tổng thể
- [ ] Mở file trong browser, không lỗi
- [ ] Làm thử bài thi, điểm hiển thị đúng
- [ ] Responsive mobile + desktop
- [ ] Audio load được (nếu có)
```
