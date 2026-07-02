# Landing Rules — VietChauAu (VEU)

> Quy tắc riêng cho landing page Anh Ngữ Việt Châu Âu.

## Brand Identity
- **Brand color:** #FF385C (Airbnb-style hồng đỏ) — KHÔNG đổi
- **Brand hover:** #D90B38
- **Text chính:** #222222
- **Text phụ:** #717171
- **Nền phụ:** #F7F7F7
- **Border:** #DDDDDD
- **Font:** 'Inter', sans-serif

## Kỹ thuật
- **1 file index.html duy nhất** — tất cả sections trong 1 file
- **Tailwind CDN** — không build step, không PostCSS
- **Material Symbols** (Google Fonts) — icons
- **AOS animations** cho scroll reveal
- **Không React, không Vite, không JS framework**

## Cấu trúc index.html
1. Header/Nav
2. Hero section
3. Features/Courses (card grid)
4. Teachers section
5. Testimonials
6. Contact + Registration form
7. Footer (address: 1031 Nguyễn Ảnh Thủ, Q12)

## Responsive
- Mobile-first: 375px, 768px, 1024px
- Navigation collapse thành hamburger trên mobile
- Cards stack trên mobile, grid trên desktop
