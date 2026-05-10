# supernand.tech — Portfolio Website Specification

## 1. Concept & Vision

A Spline-quality 3D showcase portfolio that makes visitors immediately think "this person can build really cool websites." Every scroll reveals something surprising. The vibe is **cosmic minimalism** — deep space darkness punctuated by warm coral and electric cyan energy. Not just a portfolio; a spatial experience.

---

## 2. Design Language

### Aesthetic Direction
**Cosmic Minimalism** — Dark cosmic backgrounds with glowing geometric forms. Think: a designer's portfolio if it was designed inside a nebula. High contrast, dramatic lighting on 3D elements, generous negative space.

### Color Palette
```
--bg-deep:       #06060a   /* Near-black cosmic background */
--bg-surface:    #0e0e14   /* Card/section surfaces */
--bg-elevated:   #15151f   /* Elevated elements */
--primary:       #ff6b35   /* Vibrant coral orange — main accent */
--secondary:     #f7c548   /* Golden amber — warm highlight */
--accent:        #00d9ff   /* Electric cyan — tech/energy accent */
--accent-alt:    #a78bfa   /* Soft violet — tertiary */
--text-primary:  #f0f0f5   /* Near-white text */
--text-muted:    #6b6b7a   /* Muted text */
--glow-primary:  rgba(255, 107, 53, 0.4)
--glow-accent:   rgba(0, 217, 255, 0.3)
```

### Typography
- **Headings**: [Syne](https://fonts.google.com/specimen/Syne) — Bold, geometric, distinctive. Used for H1-H3.
- **Body**: [DM Sans](https://fonts.google.com/specimen/DM+Sans) — Clean, modern, highly readable. Used for body text.
- **Mono/Code**: [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono) — For code snippets, tech stack labels.
- **Scale**: 14/16/18/24/32/48/64/80px with 1.5 line-height for body, 1.2 for headings.

### Spatial System
- **Base unit**: 4px
- **Section padding**: 120px vertical (desktop), 80px (mobile)
- **Container max-width**: 1280px
- **Grid**: 12-column, 24px gap
- **Card padding**: 24px-32px

### Motion Philosophy
Every interaction has weight. Animations convey physicality — things have mass and momentum.
- **Entrance**: Fade-up with stagger (100ms delay between items), 600ms ease-out
- **Scroll reveal**: IntersectionObserver-driven, elements rise from below with opacity
- **3D**: Continuous ambient rotation (0.5 RPM), respond to mouse with 15° tilt max
- **Hover**: Scale 1.02-1.05, glow intensifies, 200ms spring easing
- **Page transitions**: Crossfade 300ms
- **Background particles**: Constant drift, parallax on scroll

### Visual Assets
- **Icons**: Lucide React (consistent stroke weight)
- **3D**: Three.js via @react-three/fiber + @react-three/drei
- **Images**: Project screenshots via URL inputs (no file upload)
- **Decorative**: CSS/SVG geometric shapes, gradient orbs, grain texture overlay

---

## 3. Layout & Structure

### Page Flow (Scroll Sequence)
```
┌─────────────────────────────────────┐
│  NAVBAR (fixed, glass blur)         │
├─────────────────────────────────────┤
│  HERO (100vh)                       │
│  └─ 3D rotating geometry + name     │
│  └─ Tagline floats in              │
│  └─ Scroll indicator pulses        │
├─────────────────────────────────────┤
│  PROJECTS (scroll-surprise: cards  │
│           tilt on scroll velocity) │
├─────────────────────────────────────┤
│  SERVICES (scroll-surprise: split   │
│            lines animate in)        │
├─────────────────────────────────────┤
│  ABOUT/TIMELINE (scroll-surprise:  │
│                 line draws itself)  │
├─────────────────────────────────────┤
│  TECH STACK (scroll-surprise: icons │
│             orbit in from edges)    │
├─────────────────────────────────────┤
│  CONTACT (scroll-surprise: form     │
│           glows on focus)           │
├─────────────────────────────────────┤
│  FOOTER (minimal)                  │
└─────────────────────────────────────┘
```

### Responsive Strategy
- **Desktop** (>1024px): Full 3D effects, multi-column layouts
- **Tablet** (768-1024px): Simplified 3D, 2-column grids
- **Mobile** (<768px): Minimal 3D (performance), single column, reduced animations

---

## 4. Features & Interactions

### Theme Toggle
- Light/dark with smooth 400ms transition
- Preference persisted to localStorage
- Dark: cosmic palette as above
- Light: warm cream (#faf8f5) backgrounds, deep text (#1a1a2e)

### Hero Section
- **3D element**: Floating icosahedron with wireframe overlay, ambient rotation
- **Mouse parallax**: Scene shifts ±5° based on cursor position
- **Text**: Name in Syne 80px bold, tagline fades in 800ms after
- **CTA buttons**: "View Projects" (primary) + "Contact Me" (ghost)
- **Scroll indicator**: Animated chevron bouncing

### Projects Section
- **Filter tabs**: All / Web / Mobile / Design — pill style
- **Grid**: 3 columns desktop, 2 tablet, 1 mobile
- **Cards**: 3D tilt on hover (max 8°), image scales 1.05, glow border
- **Card content**: Thumbnail, title, tags, brief description, links
- **Scroll surprise**: Cards stagger in from bottom with 100ms delay each
- **Featured badge**: Coral badge on featured projects

### Services Section
- **Layout**: 3 columns, each with icon + title + description
- **Icons**: Animated on scroll (draw-in SVG paths)
- **Scroll surprise**: Content lines animate left-to-right

### About/Timeline
- **Left**: Bio text, photo placeholder
- **Right**: Vertical timeline with animated connector line
- **Timeline nodes**: Pulse animation on scroll into view

### Tech Stack
- **Icons**: Grid of technology logos (SVG)
- **Scroll surprise**: Icons orbit in from their respective corners
- **Hover**: Tooltip with tech name + years of experience

### Contact
- **Form**: Name, email, message fields
- **Validation**: Client-side with inline error messages
- **Submit**: Animated button state (loading spinner)
- **Success**: Confetti-like particle burst

### Admin Dashboard (/admin)
- **Auth**: Password-only login (nanda2025supernand)
- **Layout**: Sidebar navigation + main content area
- **Project CRUD**: Table view with edit/delete, modal for add/edit
- **Fields**: title, slug, description, content, thumbnail URL, gallery URLs, tags, live_url, github_url, featured toggle
- **Preview**: See project card as it would appear on main site

---

## 5. Component Inventory

### Navbar
- Logo (text "NANDA" in Syne Bold)
- Nav links: Projects, Services, About, Contact
- Theme toggle button (sun/moon icon)
- Mobile: hamburger → slide-in drawer

### HeroScene (Three.js)
- Icosahedron geometry with MeshStandardMaterial
- Wireframe overlay in coral
- Ambient point lights (coral + cyan)
- Post-processing: subtle bloom

### ProjectCard
- States: default, hover (3D tilt + glow), loading (skeleton)
- Image with aspect ratio 16:9
- Tags as small pills
- Action icons: external link, GitHub

### FilterTabs
- Pill buttons, active state with coral background
- Animated underline indicator

### TimelineItem
- Dot + connector line
- Year badge, title, description
- Staggered entrance animation

### TechIcon
- 48x48 SVG icon
- Hover: scale + glow
- Tooltip on long hover

### ContactForm
- Input fields with floating labels
- States: default, focused (cyan glow), error (red), success (green)
- Submit button: gradient coral→amber, loading state

### AdminProjectModal
- Full form with all CRUD fields
- Image URL preview
- Save/Cancel actions

---

## 6. Technical Approach

### Stack
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **3D**: Three.js + @react-three/fiber + @react-three/drei
- **UI Components**: shadcn/ui (customized to match palette)
- **Database**: PostgreSQL 16 (Docker)
- **ORM**: Prisma
- **Auth**: Simple password-based (JWT cookie)

### Database Schema
```sql
CREATE TABLE projects (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  slug VARCHAR(255) UNIQUE NOT NULL,
  description TEXT,
  content TEXT,
  thumbnail TEXT,
  gallery TEXT[],
  tags TEXT[],
  live_url TEXT,
  github_url TEXT,
  featured BOOLEAN DEFAULT false,
  published_at TIMESTAMP DEFAULT NOW(),
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE settings (
  key VARCHAR(100) PRIMARY KEY,
  value JSONB
);
```

### API Routes
- `POST /api/auth/login` — Body: `{ password }` → Set JWT cookie
- `GET /api/projects` — Query: `?featured=true` → Project[]
- `POST /api/projects` — Auth required → Project
- `PATCH /api/projects/[id]` — Auth required → Project
- `DELETE /api/projects/[id]` — Auth required → `{ success: true }`

### Environment Variables
```
DATABASE_URL=postgresql://postgres:supernand2025@localhost:5432/portfolio_db
ADMIN_PASSWORD=nanda2025supernand
JWT_SECRET=supernand-jwt-secret-2025
NEXT_PUBLIC_SITE_URL=https://supernand.tech
```

### CI/CD (GitHub Actions)
- Trigger: push to `main`
- Steps: checkout → setup Node 20 → npm ci → npm run build
- Deploy: rsync to VPS at /var/www/supernand
- Post-deploy: PM2 restart (if running) or start

### File Structure
```
/root/.openclaw/workspace/supernand-portfolio/
├── SPEC.md
├── docker-compose.yml
├── .env.example
├── .env
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
├── package.json
├── .github/workflows/deploy.yml
├── prisma/schema.prisma
├── scripts/init-db.sql
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── admin/
│   │   │   ├── page.tsx
│   │   │   └── layout.tsx
│   │   └── api/
│   │       ├── auth/login/route.ts
│   │       └── projects/route.ts
│   ├── components/
│   │   ├── ui/
│   │   ├── three/
│   │   ├── sections/
│   │   └── animations/
│   ├── lib/
│   │   ├── db.ts
│   │   ├── auth.ts
│   │   └── utils.ts
│   └── styles/
│       └── globals.css
└── public/
```

---

## 7. Animation Specifications

### Hero Scene
- Icosahedron: continuous Y-axis rotation at 0.003 rad/frame
- Mouse parallax: scene group rotates ±0.1 rad based on normalized cursor position
- Bloom: threshold 0.8, strength 0.5, radius 0.3

### Scroll Surprises
- **Projects**: Each card translates Y from 60px→0, opacity 0→1, 500ms ease-out, 100ms stagger
- **Services**: Lines draw left-to-right via stroke-dashoffset animation
- **Timeline**: Connector line height animates 0→100%, dots pop in with scale spring
- **Tech Stack**: Icons translate from cardinal directions + corners, scale 0→1, 400ms spring

### Micro-interactions
- Button hover: translateY -2px, shadow increases
- Card hover: scale 1.03, border-color brightens, shadow glow
- Input focus: border transitions to cyan, subtle box-shadow glow
- Nav link hover: underline grows from center

---

## 8. Sample Content (Initial Data)

### Projects
1. **E-Commerce Platform** — Full-stack Next.js + Stripe + PostgreSQL
2. **Real-time Chat App** — WebSocket + React + Socket.io
3. **AI Content Generator** — OpenAI API + Next.js + Vercel
4. **Mobile Fitness Tracker** — React Native + Firebase

### Services
1. **Web Development** — React, Next.js, TypeScript, Node.js
2. **UI/UX Design** — Figma, Prototyping, Design Systems
3. **3D Experiences** — Three.js, WebGL, React Three Fiber

### Tech Stack Icons
React, Next.js, TypeScript, Node.js, PostgreSQL, Three.js, Figma, Git, Docker, AWS
