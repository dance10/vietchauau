# Ví dụ Minh Hoạ 4 Nguyên Tắc — BaiKiemTra

> Ví dụ với vanilla HTML/CSS/JS, không React.

---

## 1. Think Before Coding

### Ví dụ: Thêm bài thi KET mới

**Yêu cầu user:** *"Thêm bài thi KET Practice Test 4"*

**❌ LLM tự tạo format mới**
```html
<!-- ❌ Tự ý đổi cấu trúc, thêm framework -->
<script src="https://cdn.jsdelivr.net/npm/vue@2"></script>
<div id="app">{{ question.text }}</div>
```

**✅ Cách đúng — hỏi trước**
```
Tôi sẽ tạo file Exam/ket/ket-a2-exam-4.html.
Cần làm rõ:
1. Dùng template từ templates/ket/ hay copy từ exam-3?
2. Mấy part? Mấy câu?
3. Có audio không?
```

---

## 2. Simplicity First

### Ví dụ: Thêm tính năng chấm điểm

**❌ LLM dựng cả hệ thống**
```javascript
// ❌ Class-based OOP cho 1 hàm đơn giản
class ExamGradingSystem {
  constructor(config) { /* 50 dòng */ }
  calculateWeightedScore() { /* 20 dòng */ }
}
```

**✅ Đơn giản**
```javascript
// ✅ 1 hàm 10 dòng
function checkAnswers() {
  let score = 0;
  document.querySelectorAll('.question').forEach((q, i) => {
    const selected = q.querySelector('input:checked');
    if (selected && selected.value === answers[i]) score++;
  });
  document.getElementById('result').textContent = `Điểm: ${score}/${answers.length}`;
}
```

---

## 3. Surgical Changes

### Ví dụ: Sửa đáp án câu 5

**Yêu cầu user:** *"Câu 5 trong đề KET Practice 2 sai đáp án, sửa từ A thành C"*

**❌ LLM format lại cả file**
```diff
- const answers = ['A', 'B', 'C', 'A', 'A', 'B', 'D'];
+ const answers = ['A', 'B', 'C', 'A', 'C', 'B', 'D'];  // ✅ OK
+ // Tự ý thêm comment, đổi spacing, thêm validation...
```

**✅ Chỉ sửa đúng 1 ký tự**
```diff
- const answers = ['A', 'B', 'C', 'A', 'A', 'B', 'D'];
+ const answers = ['A', 'B', 'C', 'A', 'C', 'B', 'D'];
```

---

## 4. Goal-Driven Execution

### Ví dụ: Thêm section Reading cho IELTS

```
Kế hoạch:

1. Tạo file Exam/ielts/reading/ielts-reading-2.html
   Verify: File tồn tại, mở được trong browser

2. Thêm card vào index.html
   Verify: Card hiển thị đúng category, link đúng

3. Thêm sidebar item nếu cần
   Verify: Click sidebar → filter đúng

4. Kiểm tra responsive
   Verify: Mobile 375px không vỡ layout
```

---

## Dấu hiệu guideline hoạt động tốt

- Diff gọn gàng, chỉ đúng dòng cần sửa
- Code đơn giản, không overengineering
- Mở browser verify được ngay
