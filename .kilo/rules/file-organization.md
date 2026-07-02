# File Organization — BaiKiemTra

> Quy tắc tổ chức file cho dự án BaiKiemTra (Hệ thống thi online static HTML).

---

## 1. Cấu Trúc Thư Mục Chuẩn

```
BaiKiemTra/
├── index.html              # Trang chủ — danh sách bài thi
├── Exam/                   # Bài thi theo cấp độ
│   ├── ket/                # KET (A2)
│   │   ├── ket-reading-1.html
│   │   ├── ket-reading-2.html
│   │   ├── ket-listening-1.html
│   │   └── ...
│   ├── pet/                # PET (B1)
│   ├── ielts/              # IELTS
│   │   ├── listening/
│   │   ├── reading/
│   │   └── writing/
│   ├── starters/           # Pre-A1
│   ├── movers/             # A1
│   ├── flyers/             # A2
│   ├── toeic/              # TOEIC
│   └── tuyensinh/          # Tuyển sinh
├── Congratulations/        # Trang kết quả
├── assets/                 # Images, audio, css
├── templates/              # HTML templates cho bài thi mới
├── scripts/                # Python automation, server.bat
├── data/                   # CSV kết quả
├── reference/              # PDF Cambridge, answer key
└── archive/                # File cũ (readonly)
```

## 2. Naming Conventions

| Entity | Convention | Ví dụ |
|--------|-----------|-------|
| Bài thi HTML | `{exam}-{level}-{number}.html` | `ket-reading-1.html` |
| Thư mục cấp độ | lowercase | `ket/`, `ielts/`, `starters/` |
| Script | camelCase | `reorganize.py`, `server.bat` |
| Template | `{exam}-template.html` | `ket-template.html` |

## 3. Quy Tắc Tạo Bài Thi Mới

1. **Copy template** từ `templates/{exam}-template.html`
2. **Rename** theo convention `{exam}-{level}-{number}.html`
3. **Đặt** vào đúng thư mục `Exam/{level}/`
4. **Cập nhật** `index.html` nếu cần thêm link
5. **Test** trên ít nhất 2 trình duyệt

## 4. Anti-Patterns

❌ Tạo file HTML ở sai thư mục (VD: `index.html` trong `Exam/`)
❌ Đổi tên template không theo convention
❌ Tạo CSS/JS riêng cho từng bài thi (dùng chung từ `assets/`)
❌ Tạo thư mục cấp độ mới mà không update `index.html`
