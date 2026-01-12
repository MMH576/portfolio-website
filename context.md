# Portfolio Website - Project Context

## Overview
A personal portfolio website for **Mohammed Hoque** to showcase backend engineering projects from GitHub.

## Tech Stack
- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS + shadcn/ui
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Theme:** next-themes (dark/light toggle)
- **Deployment:** Vercel

## Site Structure
| Route | Description |
|-------|-------------|
| `/` | Home - hero section + 3 featured projects |
| `/projects` | Project list with tag-based filtering |
| `/projects/[slug]` | Individual project detail page |
| `/resume` | PDF download/view |
| `/contact` | Email + social links |

## Projects to Showcase
1. **Transactional Order & Payments Platform** - ACID-compliant checkout with Stripe
2. **Event Processing Platform** - Event-driven architecture
3. **Webhook Delivery System** - Reliable webhook delivery

## Project Data Structure
```typescript
{
  slug: string;           // URL-friendly identifier
  title: string;          // Display title
  tagline: string;        // Short description
  tags: string[];         // Filter categories
  tech: string[];         // Technologies used
  problem: string;        // Problem statement
  approach: string;       // Solution approach
  highlights: string[];   // Key achievements
  tradeoffs: string;      // Design tradeoffs
  github: string;         // GitHub repo URL
}
```

## Components
### Layout
- `Navbar` - Navigation with theme toggle + mobile hamburger menu
- `Footer` - GitHub, LinkedIn, copyright

### Shared
- `ProjectCard` - Card for project list display
- `TagFilter` - Filter pills for project filtering
- `CopyButton` - Copy text with toast notification
- `ThemeToggle` - Dark/light mode switch

## Design Guidelines
- Max width: `max-w-5xl mx-auto`
- Spacing: `px-4 py-10`, `gap-6`
- Responsive grid: `grid-cols-1 md:grid-cols-2 lg:grid-cols-3`
- Typography: `text-3xl font-semibold` for headings
- Animations: Subtle fade-in, slide-up, hover lift effects

## File Structure
```
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── providers.tsx
│   ├── projects/
│   │   ├── page.tsx
│   │   └── [slug]/page.tsx
│   ├── resume/page.tsx
│   └── contact/page.tsx
├── components/
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── ProjectCard.tsx
│   ├── TagFilter.tsx
│   ├── CopyButton.tsx
│   └── ThemeToggle.tsx
├── data/
│   └── projects.ts
└── lib/
    └── utils.ts
public/
└── Mohammed_Hoque_Resume.pdf
```
