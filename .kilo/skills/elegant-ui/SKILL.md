---
name: elegant-ui
description: TiengAnhCoThuy Elegant design system — color palette, typography, shadows, component patterns for Tailwind CDN + Material Symbols
license: MIT
---

# Elegant Design System — Ms. Thuy English Center

## Color Palette (Tailwind CDN classes)

| Variable | Hex | Class | Usage |
|----------|-----|-------|-------|
| Navy | `#0f2c59` | `text-navy` `bg-navy` `border-navy` | Primary color |
| Navy Light | `#1d3e75` | `bg-navy-light` | Hover state |
| Gold | `#c5a059` | `text-gold` `bg-gold` `border-gold` | Accent |
| Gold Dark | `#b08d4b` | `bg-gold-dark` | Gold hover |
| Blue Brand | `#137fec` | `text-blue-brand` `bg-blue-brand` | Secondary |
| Blue Classic | `#0F4C81` | `text-blue-classic` `bg-blue-classic` | Alt primary |
| BG Light | `#fcfcfc` | `bg-background-light` | Page background |
| BG Off | `#f4f4f5` | `bg-background-off` | Section background |

## Typography

| Font | Class | Usage | Weights |
|------|-------|-------|---------|
| Playfair Display | `font-display` | Headings, titles | 400,500,600,700,800,900 |
| Manrope | `font-body` | Body text | 300,400,500,600,700,800 |
| Lexend | `font-sans` | Navigation, meta | 300,400,500,600,700,800 |
| Noto Sans | `font-noto` | Alternative | 100-900 |

## Shadows

| Class | Value | Usage |
|-------|-------|-------|
| `shadow-elegant` | `0 10px 40px -10px rgba(0,0,0,0.08)` | Cards |
| `shadow-glow` | `0 0 20px rgba(197, 160, 89, 0.3)` | Gold accent |

## Section Patterns

### Page Layout
```tsx
<div className="layout-container flex justify-center w-full">
  <div className="px-4 md:px-10 lg:px-20 xl:px-40 flex flex-1 justify-center">
    <div className="layout-content-container flex flex-col max-w-[1200px] flex-1">
      {/* section content */}
    </div>
  </div>
</div>
```

### Badge / Tag
```tsx
<span className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/5 px-4 py-1.5 text-xs font-bold text-gold uppercase tracking-widest">
  <span className="material-symbols-outlined text-[16px]">verified</span>
  11 Năm Kinh Nghiệm
</span>
```

### Feature Card (3-column)
```tsx
<div className="group flex flex-col gap-6 bg-transparent p-6 border-b-2 border-transparent hover:border-gold transition-all">
  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-lg text-gold group-hover:bg-navy group-hover:text-white transition-colors">
    <span className="material-symbols-outlined text-3xl">{icon}</span>
  </div>
  <h3 className="text-xl font-display font-bold text-navy group-hover:text-gold">{title}</h3>
  <p className="text-slate-500 text-sm">{desc}</p>
</div>
```

### Course Card
```tsx
<div className="group bg-white overflow-hidden shadow-sm hover:shadow-elegant transition-all duration-500 hover:-translate-y-2 rounded-t-xl border-b-4 border-gold">
  <div className="w-full aspect-video bg-cover bg-center overflow-hidden relative">
    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all"></div>
    <div className="w-full h-full bg-cover bg-center group-hover:scale-110 transition-transform duration-700" style={{backgroundImage: `url("${img}")`}}></div>
    <div className="absolute top-4 left-4 bg-white/95 backdrop-blur px-3 py-1 rounded text-xs font-bold text-navy uppercase">{tag}</div>
  </div>
  <div className="p-8">
    <h3 className="text-xl font-display font-bold text-navy">{title}</h3>
    <p className="text-slate-500 text-sm">{desc}</p>
  </div>
</div>
```

### Button Primary
```tsx
<button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-14 px-8 bg-navy hover:bg-navy-light text-white text-sm font-bold uppercase tracking-wider shadow-elegant transition-all transform hover:-translate-y-1">
  <span className="truncate">Khám phá</span>
</button>
```

### Button Secondary
```tsx
<button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-14 px-8 bg-transparent border border-gray-300 hover:border-navy hover:text-navy text-slate-600 text-sm font-bold uppercase tracking-wider transition-all">
  <span className="truncate">Tư vấn miễn phí</span>
</button>
```

### Input Field (Elegant)
```tsx
<input className="h-12 w-full rounded-lg border border-slate-200 bg-slate-50 px-4 text-slate-900 focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy placeholder:text-slate-400 transition-all" />
```

### Section Divider
```html
<span className="text-gold font-bold tracking-[0.2em] uppercase text-xs">Section title</span>
<h2 className="text-3xl md:text-4xl font-display font-bold text-navy">Section heading</h2>
<div className="w-16 h-1 bg-gold mt-2"></div>
```

## Material Symbols — Frequently Used Icons

| Icon | Usage |
|------|-------|
| `school` | Education, courses |
| `verified` | Verified, trusted |
| `star` | Rating, star |
| `menu_book` | Curriculum |
| `record_voice_over` | Speaking method |
| `verified_user` | Guarantee |
| `arrow_forward` | Call to action |
| `location_on` / `place` | Address |
| `call` | Phone |
| `mail` | Email |
| `menu` | Mobile menu |
| `search` | Search |
| `chat` | Zalo chat |
| `public` | Website |
| `alternate_email` | Social |
| `schedule` | Time |
| `group` / `groups` | People |
| `child_care` | Kids |
| `face` | Age group |
| `sentiment_very_satisfied` | Happy |

## Rules

- **Always use theme variables** — never hardcode colors outside palette
- **Mobile-first responsive** — base → md: → lg: → xl:
- **Minimal animations** — subtle hover effects, no over-animation
- **Typography hierarchy** — Playfair Display for titles, Manrope for body
- **KHÔNG dùng** Lucide React, Brutalist classes
