---
name: workflow-patterns
description: Workflow patterns inspired by pi-subagents cho Kilo — parallel review, review-loop, scout–plan–implement–review chain, oracle advisory
license: MIT
---

# Workflow Patterns for Kilo

Các workflow patterns học từ pi-subagents (https://github.com/nicobailon/pi-subagents), adapted cho Kilo's Plan→Act agent architecture.

## Available Agents in Kilo (VoDu)

| Agent | File | Mode | Purpose |
|-------|------|------|---------|
| `scout` | `.kilo/agents/scout.md` | subagent (read-only) | Codebase recon: map files, entry points, data flow |
| `oracle` | `.kilo/agents/oracle.md` | subagent (read-only) | Advisory review: second opinion, catch drift |
| `code-reviewer` | `.kilo/agents/code-reviewer.md` | subagent (read-only) | Code quality review: security, perf, data integrity |
| `static-web-developer` | `.kilo/agents/static-web-developer.md` | primary | HTML/CSS/JS development |
| `apps-script-developer` | `.kilo/agents/apps-script-developer.md` | primary | Google Apps Script development |
| `plan` | built-in | plan | Lập kế hoạch |
| `code` | built-in | code | Thực thi code |

## Pattern 1: Parallel Review

**Khi nào dùng:** Khi một feature đã được implement và cần review từ nhiều góc độ.

**Luồng:**

```
code (implement) → đồng loạt chạy:
  1. code-reviewer (focus: security + data integrity)
  2. oracle (focus: architectural fit + tradeoffs)
```

## Pattern 1: Parallel Review

**Khi nào dùng:** Khi một feature đã được implement và cần review từ nhiều góc độ.

**Luồng:**

```
code (implement) → đồng loạt chạy:
  1. code-reviewer (focus: security + data integrity)
  2. oracle (focus: architectural fit + tradeoffs)
  3. scout (focus: verify không miss files)
```

**Cách thực thi trong Kilo:**
1. Code agent thực thi xong feature
2. Gọi lần lượt từng subagent review (Kilo chưa hỗ trợ parallel tool gọi)
3. Tổng hợp feedback, quyết định fix

**Verification criteria:**
- [ ] code-reviewer pass security + data integrity checks
- [ ] oracle không có architectural concerns
- [ ] scout xác nhận đủ files

## Pattern 2: Review Loop (Implement → Review → Fix)

**Khi nào dùng:** Feature phức tạp, cần nhiều vòng review.

**Luồng:**

```
Loop tối đa 3 vòng:
  code (implement) → code-reviewer → nếu có lỗi → code (fix) → repeat
  stop khi: không còn blocker, đã đạt cap, cần quyết định phê duyệt
```

**Stop conditions:**
- ✅ Tất cả review pass
- ⏹ Đạt max 3 vòng review (có thể config)
- ❌ Gặp decision cần user phê duyệt (không tự guess)

## Pattern 3: Scout–Plan–Implement–Review Chain

**Khi nào dùng:** Feature mới hoặc refactor lớn, cần hiểu codebase trước.

**Luồng:**

```
Scout (explore) → Plan (lên kế hoạch) → Code (thực thi) → Code-Reviewer (review)
```

**Chi tiết từng bước:**

### Bước 1: Scout
- Đọc codebase, identify entry points, data flow
- Output: structured findings (files, risks, start point)
- Agent: `scout` subagent

### Bước 2: Plan
- Dùng findings từ scout để lập kế hoạch
- Output: plan file `.kilo/plans/`
- Agent: `plan` mode

### Bước 3: Implement
- Thực hiện theo plan
- Agent: `code` mode

### Bước 4: Review
- Kiểm tra implementation
- Agent: `code-reviewer` subagent

## Pattern 4: Oracle Advisory (Trước khi code)

**Khi nào dùng:** Trước khi bắt đầu implement, để validate approach.

**Luồng:**

```
Scout (explore) → Oracle (review plan) → nếu Oracle OK → Code (implement)
                                        → nếu Oracle có concern → sửa plan → Oracle lại
```

**Khi nào cần Oracle:**
- Research/Scout cho thấy nhiều cách implement
- Thay đổi Google Sheets schema hoặc thêm action mới
- Feature ảnh hưởng nhiều pages (>3 files)
- Cần tradeoff analysis

## Pattern 5: Parallel Context Build (Trước khi Plan)

**Khi nào dùng:** Feature phức tạp cần gather context từ nhiều góc nhìn.

**Luồng:**

```
Đồng loạt gather context:
  1. scout (codebase + patterns)
  2. researcher/user questions (yêu cầu + scope)
→ Tổng hợp → Plan → Implement → Review
```

**Verification:**
- [ ] scope + constraint rõ ràng
- [ ] files cần modify đã identify
- [ ] data flow đã map
- [ ] risks đã assess

## Best Practices

1. **Scout trước khi code** — luôn chạy `scout` cho feature mới
2. **Oracle cho decision khó** — tradeoff analysis trước khi commit
3. **Review loop cho complex feature** — 1 vòng có thể chưa đủ
4. **Bắt đầu với plan ngắn** — không overplan, nhưng cũng đừng code bừa
5. **Stop khi cần user** — không tự guess decisions cần phê duyệt
