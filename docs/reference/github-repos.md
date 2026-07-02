# GitHub Repos — EduPortal + KiloCode

> Danh sách tất cả GitHub repositories được dự án và AI toolchain sử dụng.
> Dùng để tham chiếu khi cài đặt dự án mới hoặc audit dependencies.
> Cập nhật: 2026-06-29

---

## 🏠 Repo chính dự án

| URL | Vai trò |
|-----|---------|
| https://github.com/dance10/trungtamtienganh | Source code EduPortal |

---

## 📦 NPM Dependencies — Runtime

| Package | GitHub Repo | Vai trò |
|---------|-------------|---------|
| @supabase/supabase-js | https://github.com/supabase/supabase-js | Supabase client SDK |
| @tailwindcss/vite + tailwindcss | https://github.com/tailwindlabs/tailwindcss | CSS framework |
| @tanstack/react-query | https://github.com/TanStack/query | Data fetching / cache |
| lucide-react | https://github.com/lucide-icons/lucide | Icon library |
| papaparse | https://github.com/mholt/PapaParse | CSV parser |
| qrcode | https://github.com/soldair/node-qrcode | QR Code generation |
| react + react-dom | https://github.com/facebook/react | UI library |
| react-router-dom | https://github.com/remix-run/react-router | Client-side routing |
| recharts | https://github.com/recharts/recharts | Chart library |

---

## 🛠 NPM Dependencies — Dev

| Package | GitHub Repo | Vai trò |
|---------|-------------|---------|
| vite + @vitejs/plugin-react | https://github.com/vitejs/vite | Build tool |
| vitest | https://github.com/vitest-dev/vitest | Test runner |
| @testing-library/react | https://github.com/testing-library/react-testing-library | Component testing |
| eslint + @eslint/js | https://github.com/eslint/eslint | Code linting |
| jsdom | https://github.com/jsdom/jsdom | DOM simulation for tests |
| react-doctor | https://github.com/alanbsmith/react-doctor | React health check |
| agentation | (thương mại — agentation.com, không có GitHub public) | Visual feedback tool cho AI coding agents |

---

## ⚡ GitHub Actions

| Action | GitHub Repo | Vai trò |
|--------|-------------|---------|
| actions/checkout@v4 | https://github.com/actions/checkout | Clone repo in CI |
| actions/upload-artifact@v4 | https://github.com/actions/upload-artifact | Lưu backup artifacts |

---

## 🤖 AI Toolchain (KiloCode + 9router)

| Tool | GitHub Repo | Vai trò |
|------|-------------|---------|
| Kilo Code (VS Code) | https://github.com/Kilo-Org/kilocode | AI-powered coding agent |
| Kilo Marketplace | https://github.com/Kilo-Org/kilo-marketplace | Skill marketplace |
| 9router | https://github.com/decolua/9router | AI proxy router (40+ providers) |
| RTK Token Saver | https://github.com/rtk-ai/rtk | Token compression (20-40%) |
| Caveman Mode | https://github.com/JuliusBrussee/caveman | Output token optimization (65%) |
| Ponytail | https://github.com/DietrichGebert/ponytail | YAGNI-first code style |
| CodeGraph (codegraph_* tools) | Built-in vào KiloCode (không có repo riêng) | Symbol search, call graph, flow trace

---

## 🔧 MCP Servers (global KiloCode config)

| MCP Server | GitHub Repo | Vai trò |
|------------|-------------|---------|
| stitch | Google Stitch (không phải GitHub) | UI design generation |
| figma-mcp | (npm package — không có GitHub repo public) | Figma API integration |
| headroom | https://github.com/mgks/headroom | Headroom MCP server |
| codebase-memory-mcp | https://github.com/DeusData/codebase-memory-mcp | Code knowledge graph |
| agentmemory | https://github.com/rohitg00/agentmemory (packages/mcp) | Agent persistent memory |
| supermemory | https://github.com/supermemoryai/supermemory | Memory & RAG for AI |
| context7 | https://github.com/upstash/context7 | Library documentation lookup |

---

## ☁️ Infrastructure

| Service | GitHub Repo | Vai trò |
|---------|-------------|---------|
| Supabase | https://github.com/supabase/supabase | Backend platform (Auth + DB) |

---

## 🎨 UI/UX Design & Animation

> Các repo chuyên về UI/UX, có thể dùng độc lập hoặc tích hợp vào dự án frontend.

| Repo | GitHub | ⭐ | License | Vai trò |
|------|--------|---|---------|---------|
| UI-UX Pro Max Skill | https://github.com/nextlevelbuilder/ui-ux-pro-max-skill | 97.5k | MIT | AI skill thiết kế UI/UX — 67 styles, 161 palettes, 161 reasoning rules. **Hỗ trợ KiloCode** (`uipro init --ai kilocode`) |
| Motion (formerly Framer Motion) | https://github.com/motiondivision/motion | 32.6k | MIT | Animation library cho React/JS/Vue — 120fps GPU-accelerated, gestures, layout transitions |
| DESIGN.md (Google Labs) | https://github.com/google-labs-code/design.md | 22.9k | Apache-2.0 | Format spec design system cho AI coding agents. Export được Tailwind config, có linter |
| Excalidraw | https://github.com/excalidraw/excalidraw | 126k | MIT | Virtual whiteboard hand-drawn style. Có npm package `@excalidraw/excalidraw` |
| DaisyUI | https://github.com/saadeghi/daisyui | 41.2k | MIT | Component library cho Tailwind. ⚠️ Chưa support Tailwind v4 |
| Awesome Design Tools | https://github.com/goabstract/Awesome-Design-Tools | 40.4k | MIT | Tuyển tập tools thiết kế (tổng hợp, không phải code) |
| Nord Theme | https://github.com/nordtheme/nord | 6.8k | MIT | Color theme system, port cho nhiều nền tảng |

---

## 💡 Proposals / Reference (chưa dùng)

| Tool | GitHub Repo | Vai trò |
|------|-------------|---------|
| react-trace | https://github.com/buzinas/react-trace | Component trace tool |
| locatorjs | https://github.com/infi-pc/locatorjs | Click-to-locate component |
| click-to-component | https://github.com/ericclemmons/click-to-component | Browser click → open in IDE |
| BuilderIO/agent-native | https://github.com/BuilderIO/agent-native | Agent-native app framework (MIT, 2.9k⭐) |
| alibaba/page-agent | https://github.com/alibaba/page-agent | In-page GUI agent, JavaScript thuần (MIT, 20.5k⭐) |
| Stirling-PDF | https://github.com/Stirling-Tools/Stirling-PDF | PDF 50+ tools, self-hosted, REST API (GPL, 85k⭐) |
