<div align="center">

# Locomotive®

**A pixel-perfect recreation of [locomotive.ca](https://locomotive.ca/en) — the award-winning digital agency's website.**

Built with **Next.js 16**, **TypeScript**, **GSAP**, **Locomotive Scroll**, and **Tailwind CSS 4**.

[![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![GSAP](https://img.shields.io/badge/GSAP-3-88CE02?logo=greensock&logoColor=white)](https://gsap.com/)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

</div>

---

## ✨ Features

| Feature | Description |
|---------|-------------|
| **9 Full Sections** | Hero, Showreel, Work, About, Services, Process, Clients, Team, Contact |
| **GSAP Animations** | ScrollTrigger parallax, split-text reveals, scale transitions, horizontal scroll |
| **Custom Cursor** | Dot + ring cursor with hover labels and magnetic effect on interactive elements |
| **Locomotive Scroll** | Smooth scrolling with data-scroll attributes and native fallback |
| **Page Transitions** | Accent-colored overlay slide animation on page load |
| **Responsive Design** | Fluid typography with `clamp()`, mobile-first breakpoints |
| **Accessibility** | Semantic HTML, ARIA labels, `prefers-reduced-motion` support |
| **Performance** | Lazy-loaded media, optimized fonts, static generation |

---

## 🏗️ Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org/) (App Router, Turbopack)
- **Language:** [TypeScript 5](https://www.typescriptlang.org/) (strict mode)
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com/) + CSS custom properties
- **Animation:** [GSAP 3](https://gsap.com/) with ScrollTrigger & ScrollToPlugin
- **Scrolling:** [Locomotive Scroll 5](https://locomotivemtl.github.io/locomotive-scroll/)
- **Utilities:** clsx, tailwind-merge

---

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css          # Design tokens, typography, global styles
│   ├── layout.tsx           # Root layout with cursor, nav, transitions
│   └── page.tsx             # Home page composing all sections
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx       # Fixed navigation with mobile menu
│   │   └── Footer.tsx       # Contact CTA, social links, back-to-top
│   ├── sections/
│   │   ├── Hero.tsx         # Full-viewport video background
│   │   ├── Showreel.tsx     # Video showcase with scale reveal
│   │   ├── Work.tsx         # 12-column asymmetric project grid
│   │   ├── About.tsx        # Stats, parallax image, text reveal
│   │   ├── Services.tsx     # Hover-expand accordion with BG swap
│   │   ├── HorizontalScroll.tsx  # Pinned horizontal process cards
│   │   ├── Clients.tsx      # Dual-direction marquee rows
│   │   ├── Team.tsx         # Team grid with hover overlays
│   │   └── Contact.tsx      # Giant "Let's talk" CTA
│   └── ui/
│       ├── CustomCursor.tsx # Dot + ring with hover detection
│       ├── SplitText.tsx    # Word-by-word scroll reveal
│       ├── VideoCard.tsx    # Project card with video-on-hover
│       ├── MarqueeRow.tsx   # Infinite scroll marquee
│       └── PageTransition.tsx # Load-in overlay animation
├── hooks/
│   ├── useInView.ts         # Intersection Observer with once mode
│   ├── useLocomotiveScroll.ts # Scroll initialization + cleanup
│   └── useMagneticEffect.ts # GSAP-powered magnetic hover
└── lib/
    ├── gsap.ts              # GSAP plugin registration
    ├── types.ts             # Shared TypeScript interfaces
    └── utils.ts             # cn(), lerp(), mapRange()
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** ≥ 18.17
- **npm** ≥ 9

### Installation

```bash
# Clone the repository
git clone https://github.com/abdullahfawadd/Locomotive.git
cd Locomotive

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
# Create optimized production build
npm run build

# Start production server
npm start
```

---

## 🎨 Design Tokens

| Token | Value | Usage |
|-------|-------|-------|
| `--color-bg` | `#0d0d0d` | Primary background |
| `--color-text` | `#f0ede6` | Primary text |
| `--color-accent` | `#DA382E` | Locomotive red — CTAs, highlights |
| `--font-display` | PPLocomotive | Headlines, hero text |
| `--font-body` | HelveticaNow | Body copy, navigation |
| `--ease-out-expo` | `cubic-bezier(0.16, 1, 0.3, 1)` | Primary easing |

---

## ⚡ Performance

- **Static Generation** — Pages pre-rendered at build time
- **Turbopack** — Fast development compilation
- **Font Optimization** — Self-hosted WOFF2 with `font-display: swap`
- **Lazy Loading** — Videos and below-fold images load on demand
- **Reduced Motion** — Animations respect `prefers-reduced-motion`

---

## 📜 Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server with Turbopack |
| `npm run build` | Create production build |
| `npm start` | Serve production build |
| `npm run lint` | Run ESLint checks |

---

## 🙏 Credits

- **Original Design:** [Locomotive®](https://locomotive.ca/en) — Montréal-based digital agency
- **Fonts:** PP Locomotive New, Helvetica Now Display
- **Animation:** GSAP by GreenSock

> **Disclaimer:** This project is a personal study/recreation for educational purposes only. All design credit belongs to Locomotive Inc. Not affiliated with or endorsed by Locomotive®.

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).
