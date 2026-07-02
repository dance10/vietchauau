---
description: Lưu snapshot workspace trước khi thay đổi code (side-git rollback)
agent: general
---

# Snapshot Workflow

Trước khi thực hiện thay đổi code, lưu trạng thái hiện tại của workspace vào git stash với prefix `kilo-snapshot-` để có thể rollback sau này.

## Quy trình

1. **Kiểm tra snapshot hiện tại**: Chạy `git stash list` để xem đã có snapshot nào chưa. Nếu có stash `kilo-snapshot-*` từ turn trước, báo user.

2. **Tạo snapshot mới**: Chạy lệnh sau để lưu tất cả thay đổi (cả staged và unstaged):
   ```bash
   git stash push -m "kilo-snapshot-$(date +%Y%m%d-%H%M%S)" --include-untracked
   ```

3. **Ghi log**: Ghi lại stash ID vào một biến hoặc thông báo cho user.

4. **Báo kết quả**: Xác nhận với user rằng snapshot đã được tạo thành công và cung cấp stash ID.

5. **Tiếp tục code**: Sau khi snapshot, apply lại unstaged changes (nếu có) để tiếp tục làm việc.
   ```bash
   git stash apply stash@{0}
   ```

## Lưu ý

- Snapshot dùng prefix `kilo-snapshot-` để không nhầm với stash của user.
- Nếu user có stash thường, không chạm vào chúng.
- Chỉ snapshot khi sắp thay đổi code (write file, apply_diff).
- Không snapshot cho các thao tác read-only.
