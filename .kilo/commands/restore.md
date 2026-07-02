---
description: Khôi phục workspace về snapshot gần nhất (side-git rollback)
agent: general
---

# Restore Workflow

Khôi phục workspace về trạng thái trước khi AI thực hiện thay đổi code, dùng các snapshot đã lưu bằng git stash với prefix `kilo-snapshot-`.

## Quy trình

### Khi user gọi `/restore` (không tham số)

1. **Liệt kê snapshots**: Chạy `git stash list` và lọc các stash có prefix `kilo-snapshot-`.
2. **Hiển thị danh sách**: In ra danh sách snapshot với index và thời gian.
3. **Hỏi user**: Dùng `question` tool để hỏi user muốn restore snapshot nào (index số).
4. **Kiểm tra workspace sạch**: Nếu có thay đổi chưa commit, hỏi user có muốn stash hoặc discard không.
5. **Restore**: Chạy `git stash pop stash@{<index>}` để khôi phục và xóa snapshot khỏi stash list.
6. **Báo kết quả**: Xác nhận workspace đã được khôi phục, liệt kê các file đã thay đổi.

### Khi user gọi `/restore last`

1. Lấy stash có prefix `kilo-snapshot-` gần nhất từ `git stash list`.
2. Chạy `git stash pop stash@{<index>}`.
3. Báo kết quả.

### Khi user gọi `/restore <index>`

1. Restore snapshot cụ thể theo index từ `git stash list`.
2. Chạy `git stash pop stash@{<index>}`.
3. Báo kết quả.

## Lưu ý

- Chỉ restore stash có prefix `kilo-snapshot-`, không chạm vào stash của user.
- Sau khi restore, snapshot sẽ bị xóa khỏi stash list (dùng `pop` thay vì `apply`).
- Nếu không có snapshot nào, báo user.
