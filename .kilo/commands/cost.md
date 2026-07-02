---
description: Show token usage, cache hit rate, and estimated cost for current session
agent: code
---

# Cost Dashboard

Hiển thị thống kê chi phí và cache hit cho session hiện tại.

## Instructions

1. If DeepSeek API `usage` data is available from recent API responses:
   - Extract `prompt_cache_hit_tokens` and `prompt_cache_miss_tokens` to calculate cache hit %
   - Sum `completion_tokens` for total output
   - Estimate cost using cache-monitoring.md pricing table
   - Display in format:
     ```
     📊 Session Cost Report
        Cache hit:     XX% (hit: XK / miss: XK tokens)
        Total input:   ~X tokens
        Total output:  ~Y tokens
        Est. cost:     ~$Z
        Tasks done:    N
     ```

2. If `usage` data is NOT available:
   - Count the number of turns in this session
   - Estimate: 5K input + 500 output per turn average
   - Display estimated range

3. If cache hit < 80%:
   - Suggest resetting context (`/new task`)
   - Check if too many large files are being loaded each turn

4. If cost > $1:
   - Warn user about high spending
   - Suggest switching to flash-only mode
