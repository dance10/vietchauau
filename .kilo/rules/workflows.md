# Workflows — BaiKiemTra (Hệ thống Bài Kiểm Tra Online)

> Adapted from TiengAnhCoThuy — thay landing page workflows bằng exam-specific.

---

## 1. Tạo Đề Thi Mới (Create Exam)

1. Xác định loại đề (starters/movers/flyers/ket/pet/ielts/toeic/tuyensinh)
2. Xác định định dạng (Reading & Writing / Listening)
3. Tạo file `.html` trong `Exam/{type}/` — dùng template từ `templates/` nếu có
4. Thêm card vào `index.html` (exam-card mới)
5. Thêm sidebar item vào `index.html` (nếu cần)
6. **Verify**: Mở browser → làm thử → kiểm tra điểm → responsive

## 2. Sửa Lỗi Chấm Điểm (Fix Scoring)

1. **Xác định lỗi**: Mở bài thi, chọn đáp án, xem điểm có đúng không
2. **Kiểm tra JS**: `checkAnswers()`, `calculateScore()`, `showResults()`
3. **Sửa**: Sửa trực tiếp logic scoring trong `<script>` của file đề thi
4. **Verify**: Làm lại bài thi, điểm hiển thị đúng

## 3. Thêm Audio Cho Bài Thi (Add Audio)

1. Upload file audio lên Google Drive (nếu chưa có)
2. Lấy File ID từ Google Drive share link
3. Thêm embed code vào trang:
   ```html
   <div class="audio-player">
     <iframe src="https://drive.google.com/file/d/{FILE_ID}/preview" width="100%" height="60" allow="autoplay"></iframe>
     <p class="audio-fallback"><a href="assets/audio/{path}">Tải file audio</a> nếu không nghe được.</p>
   </div>
   ```
4. **Verify**: Audio load được, fallback text hiển thị

## 4. Cập Nhật Leaderboard (Update Leaderboard)

1. Kiểm tra cấu trúc leaderboard trong `index.html` (podium + rows)
2. Thêm dữ liệu mẫu hoặc kết nối data source
3. **Verify**: Podium hiển thị top 3, rows hiển thị ranking

## 5. Kiểm Tra Toàn Bộ Đề Thi (Check All Exams)

1. `python .kilo/scripts/checklist.py .` — audit tự động
2. Mở từng exam trong browser, kiểm tra:
   - Layout không vỡ
   - Chấm điểm hoạt động
   - Audio load (nếu có)
   - Responsive mobile

## 6. Quick Fix

1. Xác định lỗi → Tìm đúng file, dòng
2. Sửa trực tiếp
3. Báo kết quả: `✅ Đã sửa [file] - [mô tả]`

## 7. Debug Protocol

1. Check browser console (F12)
2. Trace: User Action → JS Function → DOM Update
3. Hypothesise (3-5 giả thuyết)
4. Fix + Verify (re-test)

## 8. Pre-Deploy Check

1. **Build**: File structure check (không có build step)
2. **Security**: Không có credentials, debugger
3. **Links**: Tất cả đường dẫn exam đúng
4. **Form**: Google Form link đúng
5. **Responsive**: 375px, 768px, 1024px
