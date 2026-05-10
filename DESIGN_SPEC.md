# SUPERNAND Company Profile - Design Spec

## Brand Identity
- **Company**: Super Nand
- **Tagline**: _(to be crafted)_
- **Description**: IT Company focused on building SaaS products and accepting custom development projects
- **Founder**: Ananda Aditya Putra (with CV link on name click)

---

## Color Palette

### Light Mode
| Role | Color | Hex | Usage |
|------|-------|-----|-------|
| Primary | Lime Bright | `#B6F500` | CTA buttons, main highlights |
| Secondary | Lime Light | `#A4DD00` | Hover states, accents |
| Tertiary | Lime | `#98CD00` | Icons, badges, subtle elements |
| Background | Off White | `#FAFAFA` | Page background |
| Surface | Warm Gray | `#F0F0E8` | Card backgrounds |
| Text Primary | Near Black | `#0A0A0A` | Headings, body text |
| Text Secondary | Dark Gray | `#4A4A4A` | Captions, muted text |

### Dark Mode (Challenge Version)
| Role | Color | Hex | Usage |
|------|-------|-----|-------|
| Primary | Lime Bright | `#B6F500` | Main accent, stays bold |
| Secondary Dark | Lime Dull | `#8DB500` | Secondary elements |
| Muted | Lime Deep | `#5A7800` | Subtle accents, borders |
| Background | Deep Black | `#0D0D0D` | Page background |
| Surface Dark | Charcoal | `#141414` | Card/surface background |
| Glass Tint | Lime Glass | `rgba(182, 245, 0, 0.08)` | Glass card bg |
| Glass Border | Lime Glow | `rgba(182, 245, 0, 0.15)` | Glass card border |
| Text Primary | Soft White | `#E8E8E8` | Headings |
| Text Secondary | Light Gray | `#A0A0A0` | Body, captions |

---

## Typography
- **Headings**: Brutalist oversized (uppercase or bold display)
- **Body**: Clean sans-serif (Inter or similar)
- **Font Strategy**: Large bold headlines + glass cards as containers

---

## Visual Style: Glassmorphism + Brutalism Hybrid
- **Brutalism**: Oversized text, bold statements, high contrast
- **Glassmorphism**: Glass-effect cards with backdrop blur
- **Fusion**: Large brutalist headings floating above or inside glass cards

### Key Elements
1. **Glass Cards**: Must have backdrop-blur, semi-transparent background, subtle lime-tinted border
2. **Large Typography**: Headlines 4xl-8xl, uppercase where impactful
3. **Gradient Accents**: `linear-gradient(135deg, #B6F500, #A4DD00)` for borders/glows
4. **Dark Mode Glass**: Tinted with lime-green instead of blue/purple

---

## Sections Structure

### 1. Hero Section
- Large brutalist headline (company name + tagline)
- Sub-headline describing services
- Primary CTA button
- Floating glass decorative elements (animated)

### 2. About Section
- Glass card with company story/mission
- Key stats (years experience, projects completed, etc.)
- Founder credit with name → CV link

### 3. Services Section
- Glass cards for each service offering:
  - **SaaS Development**: Custom SaaS products
  - **Custom Projects**: Full-stack development
  - **Consultation**: Technical advisory
- Each card with icon, title, description

### 4. Portfolio/Showcase Section
- Grid of project cards (glass cards)
- Each card: project image/thumbnail, title, tech stack badges, description
- Hover animations with Framer Motion

### 5. Tech Stack Section
- Visual showcase of technologies used
- Could be logo grid or animated list

### 6. Contact / CTA Section
- Glass card with contact form or direct contact info
- Strong CTA for partnership/inquiry

### 7. Footer
- Company info, social links, copyright

---

## Interactions & Animations (GSAP + Framer Motion)

### Scroll Animations
- Sections fade in + slide up on scroll (IntersectionObserver + GSAP)
- Staggered reveals for card grids

### Hero Animations
- Large text reveal animation (character-by-character or word-by-word)
- Floating glass shapes with subtle parallax

### Card Hover Effects
- Glass cards: lift effect (translateY -4px) + glow intensify
- Scale on hover (1.02)

### Page Transitions
- Smooth scroll behavior
- Navbar: background blur on scroll

### Dark/Light Mode Toggle
- Smooth color transition on theme change

---

## Technical Stack
- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS 3.4
- **Animations**: GSAP 3.x + Framer Motion 11
- **UI Components**: Radix UI (dialog, tabs, etc.)
- **Theme**: next-themes (light/dark toggle)
- **Icons**: Lucide React
- **Deployment**: _(to be determined)_

---

## Features NOT Included (v1)
- Admin panel (deferred)
- 3D elements (Three.js removed)
- Blog/Articles
- Multi-language

---

## File Structure (planned)
```
src/
├── app/
│   ├── layout.tsx         # Root layout with theme provider
│   ├── page.tsx           # Company profile homepage
│   └── globals.css        # Tailwind + custom styles
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   ├── sections/
│   │   ├── HeroSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── ServicesSection.tsx
│   │   ├── PortfolioSection.tsx
│   │   ├── TechStackSection.tsx
│   │   ├── ContactSection.tsx
│   │   └── CTASection.tsx
│   ├── ui/
│   │   ├── Button.tsx
│   │   ├── GlassCard.tsx
│   │   └── ThemeToggle.tsx
│   └── animations/
│       └── ScrollReveal.tsx
├── lib/
│   ├── types.ts
│   └── utils.ts
└── styles/
    └── (globals.css already handles this)
```

---

## Status
- [x] Design spec created
- [x] Theme system setup (CSS variables)
- [x] Component library build
- [x] Hero section
- [x] About section
- [x] Services section
- [x] Portfolio section
- [x] Tech Stack section
- [x] Contact section
- [x] Footer
- [x] Scroll animations (GSAP)
- [x] Framer Motion interactions
- [x] Light/Dark mode toggle
- [x] Founder CV page integration (/cv route)
- [x] Testing & polish
