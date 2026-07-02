# Project Memory — BaiKiemTraVEU

> Memory type: **project** — quy tắc và conventions cho dự án BaiKiemTraVEU.

---

## Communication

- Ngôn ngữ: Tiếng Việt (có dấu)
- Phong cách: Trực tiếp, kỹ thuật, không xã giao

## Process

- **Task ≤ 2 file**: sửa trực tiếp, không qua Plan
- **Task ≥ 3 file**: Plan → Act qua handoff protocol
- **Luôn self-verify** sau mỗi lần sửa

## Verification Checklist

- [ ] Build pass (`npm run build`)
- [ ] Test pass (`npm run test`)
- [ ] Lint pass (`npm run lint`)
- [ ] Responsive mobile + desktop (nếu UI change)
- [ ] Edge case: loading, empty, error state

## Tech Stack

- React 19 + Vite 6
- Tailwind CSS v4
- Vitest + React Testing Library
- oxlint
