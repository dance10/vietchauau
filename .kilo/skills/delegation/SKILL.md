---
name: delegation
description: Structured delegation and verifiable execution for agent task handoff
license: MIT
---

# Delegation Skill — Structured Task Handoff
## Mục tiêu
Giúp agent tiếp nhận, phân rã, thực thi và bàn giao nhiệm vụ theo hướng:
- rõ phạm vi,
- rõ quyền hạn,
- rõ đầu ra,
- rõ tiêu chí kiểm chứng,
- dễ audit,
- dễ escalation.
## Khi nào dùng
Dùng skill này khi:
- nhận task mới,
- giao task con cho agent khác,
- cần kiểm tra một task đã đủ điều kiện để thực thi chưa,
- cần xác minh task đã hoàn thành chưa,
- cần quyết định có nên escalation không.
## Input tối thiểu
Task phải có tối thiểu:
- Goal
- Scope
- Constraints
- Authority
- Deliverable
- Verification
Nếu thiếu bất kỳ mục nào, không thực thi ngay.
## Quy trình
### Bước 1. Validate task
Kiểm tra:
- mục tiêu có rõ không,
- phạm vi có rõ không,
- dữ liệu có đủ không,
- quyền có đủ không,
- đầu ra có đo được không,
- có cách kiểm chứng không.
### Bước 2. Classify risk
Phân loại nhanh:
- **Low risk**: có thể xử lý trực tiếp.
- **Medium risk**: cần kiểm tra kỹ và log rõ.
- **High risk**: cần escalation hoặc approval.
### Bước 3. Decompose
Nếu task lớn, chia thành các nhiệm vụ con:
- mỗi nhiệm vụ con có mục tiêu rõ,
- có đầu ra rõ,
- có tiêu chí hoàn thành rõ,
- có thể gán cho đúng tác nhân.
### Bước 4. Execute
- Làm từng bước theo phạm vi.
- Không vượt quyền.
- Ghi nhận bằng chứng hoặc trạng thái trung gian quan trọng.
### Bước 5. Verify
Trước khi trả kết quả, kiểm tra:
- đầu ra có đúng yêu cầu không,
- có đủ bằng chứng/căn cứ không,
- có vi phạm ràng buộc nào không,
- có điểm nào cần cảnh báo không.
### Bước 6. Handover
Khi bàn giao, luôn trả:
- kết quả chính,
- bằng chứng/căn cứ,
- phần chưa chắc chắn,
- rủi ro còn lại,
- đề xuất bước tiếp theo.
## Quy tắc delegation
Chỉ giao task con khi:
- task con độc lập tương đối,
- đầu ra của task con kiểm chứng được,
- agent nhận việc có đủ năng lực/quyền,
- vẫn giữ được trách nhiệm và khả năng audit.
## Quy tắc verification
Ưu tiên các kiểu kiểm chứng sau:
1. Kiểm trực tiếp bằng dữ liệu/hệ thống.
2. Đối chiếu với rule/checklist/schema.
3. Xác minh bởi tác nhân/nguồn độc lập.
4. Chỉ báo “chưa kiểm chứng được” nếu không có cơ chế xác minh.
## Quy tắc escalation
Escalate khi:
- thiếu dữ liệu,
- thiếu quyền,
- yêu cầu mơ hồ,
- xung đột mục tiêu,
- rủi ro cao,
- không thể verify,
- có dấu hiệu bất thường.
## Output chuẩn
```yaml
task_summary: ""
scope: ""
risk_level: low|medium|high
action_taken:
  - ""
result: ""
evidence:
  - ""
limitations:
  - ""
next_step: ""
escalation_needed: true|false