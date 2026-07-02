# User Memory — Developer Preferences

> Memory type: **user** — sở thích và phong cách code của admin.
> Cập nhật file này khi admin đưa ra feedback về preferences.

---

## Code Style

- **File naming**: Kebab-case, viết thường, không dấu — `[exam-type]-[level]-[number].html`
- **Self-contained**: Mỗi file bài thi = 1 file HTML duy nhất (CSS trong `<style>`, JS trong `<script>`)
- **Import order**: Font → CSS variables → Layout → Components → JS logic
- **No framework**: Vanilla HTML/CSS/JS thuần

## UI Preferences

- **Design system**: Blue theme (--accent-blue: #2563eb, --sidebar-from: #1d4ed8)
- **Font**: 'Inter', sans-serif
- **Responsive**: Mobile-first, breakpoints: 639px, 640-1024px, >1024px
- **Components**: Self-contained, không dùng external CSS/JS libraries

## Exam Preferences

- **Audio**: Ưu tiên Google Drive iframe embed > local files
- **Scoring**: JavaScript auto-grading, hiển thị kết quả ngay trong trang
- **Layout**: Sidebar (288px) + Main content. Mobile: sidebar ẩn, hamburger toggle
- **Leaderboard**: Podium top 3 + ranking list, tabs theo category/time
- **Cards**: Grid layout, có badge, icon, title, desc, meta, button

## Work Preferences

- **Model routing**: Flash cho đọc/sửa nhỏ, Pro cho tạo đề thi mới / debug
- **Verification**: Mở file trong browser, làm thử, kiểm tra điểm
- **Session**: Reset context khi task hoàn thành

## Feedback Log

<!-- Admin ghi feedback vào đây, agent đọc và tự điều chỉnh -->

- (chưa có feedback)
