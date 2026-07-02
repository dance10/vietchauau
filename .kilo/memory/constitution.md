# Constitution — Hiến Pháp Dự Án

> Memory type: **constitution** — nguyên tắc bất di bất dịch, không được vi phạm.
> Mọi agent phải tuân thủ tuyệt đối.

---

## 1. Security First

Không log credentials. Mọi thao tác database phải qua service functions.
Không commit file .env, secret keys.

## 2. Data Integrity

Input được validate trước khi gọi API. Error handling cho mọi API calls.
Soft delete (is_deleted) trên tất cả bảng.

## 3. Simplicity Over Abstraction

Không thêm tính năng ngoài yêu cầu. Không abstraction cho code dùng 1 lần.
200 dòng rút được còn 50 → viết lại.

---

## Quy Tắc Chung

- **Không** hardcode màu sắc — dùng CSS variables
- **Luôn** self-verify sau mỗi lần sửa
- **Ưu tiên** surgical changes — chỉ chạm vào những gì cần
