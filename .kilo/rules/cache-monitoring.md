# Cache Monitoring Rules

---

## 1. Báo cáo cuối mỗi task

```
📊 Cache & Token Summary
   • Input tokens:    ~X (cache hit: Y%)
   • Output tokens:   ~Z
   • Estimated cost:  ~$W
   • Cache efficiency: 🟢/🟡/🔴
```

### Cách ước lượng

| Model | Input (miss) / 1M | Output / 1M | Cache hit |
|-------|-------------------|--------------|-----------|
| v4-flash | $0.14 | $0.28 | $0.0028 (98% off) |
| v4-pro | $0.435 | $0.87 | $0.003625 (99% off) |

---

## 2. Ngưỡng cảnh báo

| Chỉ số | 🟢 Tốt | 🟡 TB | 🔴 Kém | Hành động |
|--------|--------|-------|--------|-----------|
| Cache hit | > 90% | 80-90% | < 80% | Reset context |
| Cost/task | < $0.05 | $0.05-0.20 | > $0.20 | Chuyển flash |
| Turns/task | < 10 | 10-20 | > 20 | Chia nhỏ task |

---

## 3. Cache Hit Checklist

- [ ] Đã đọc memory files đầu session?
- [ ] Model đúng loại?
- [ ] Gửi vừa đủ context?
