# Project Identity — BaiKiemTraVEU

> Dấu ấn nhận diện dự án — giúp phân biệt với các dự án khác (EduPortal, v.v.)

---

## So sánh với EduPortal

| Khía cạnh | EduPortal | BaiKiemTraVEU |
|-----------|-----------|---------------|
| Mục đích | Quản lý trung tâm tiếng Anh | Luyện thi trực tuyến |
| Backend | Supabase (Auth + DB) | Không có backend (static mock data) |
| API Pattern | `executeApi()` dispatcher | Trực tiếp gọi constants/mock data |
| Database | PostgreSQL | Không có database |
| Auth | Supabase Auth (RBAC) | Không cần auth |
| CSS Theme | Brutalist (`bg-brutal-yellow`, `shadow-brutal`) | Sạch sẽ, màu navy `#003399` + gold `#c8a84e` |
| State | AuthContext + BranchContext | DarkModeProvider |
| Testing | Chưa có | Vitest + RTL (đã có setup) |
| Linter | ESLint | oxlint |

## Project Naming

- **Code**: `BaiKiemTraVEU` (PascalCase, không dấu)
- **Package**: `baikiemtraveu` (lowercase)
- **URL path**: `/` — single page app
- **Deployment**: Vite static build → `dist/`
