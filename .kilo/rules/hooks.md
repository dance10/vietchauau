# Hooks System — Lifecycle Automation

---

## 1. Hook Points

| Hook | Trigger | Action | Failure behavior |
|------|---------|--------|-----------------|
| **PreWrite** | Trước khi ghi file mới | Snapshot, kiểm tra thư mục đích | Dừng, báo user |
| **PostWrite** | Sau khi ghi file | File tồn tại? Mở browser được? | Báo lỗi, không tự sửa |
| **PostEdit** | Sau khi sửa file | Verify diff đúng phạm vi | Ghi rõ lý do fail |
| **PreBuild** | Trước khi build/preview | Kiểm tra không lỗi syntax | Dừng, fix lỗi trước |
| **Stop** | Kết thúc task | Báo cáo cost, update feedback | — |

---

## 2. Quy tắc chung

1. Không bỏ qua hooks — mọi hành động ghi file/phát hành đều phải qua hook tương ứng.
2. Fail fast — nếu hook fail, dừng ngay, không tiếp tục.
3. Output gọn — mỗi hook tối đa 3 dòng output.
