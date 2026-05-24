# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev        # start dev server
pnpm build      # production build
pnpm lint       # eslint
```

No test suite is configured.

## Architecture

This is the **NVSBL.SYSTEMS marketing site** — a Next.js 16 App Router project deploying to Vercel. It's a static/SSG site with no backend, no database, and no CMS. All content lives as hardcoded TypeScript data objects inside the page files.

### Routing

| Route | File | Notes |
|---|---|---|
| `/` | `app/page.tsx` | Assembles homepage section components |
| `/services` | `app/services/page.tsx` | Services overview |
| `/services/[slug]` | `app/services/[slug]/page.tsx` | Individual service detail; slugs: `strategy`, `design`, `build`, `products` |
| `/work` | `app/work/page.tsx` | Case studies overview |
| `/work/[slug]` | `app/work/[slug]/page.tsx` | Case study detail; slugs: `nvsbl-dev`, `nvsbl-app` |
| `/about`, `/approach`, `/contact` | respective `app/*/page.tsx` | Static pages |

Dynamic routes use `generateStaticParams()` derived from the data object in the same file. The `params` prop is `Promise<{ slug: string }>` and must be awaited.

### Content model

All service and case study content is defined as typed objects at the top of the respective `[slug]/page.tsx` file. To add a new service or case study, add an entry to the object and the slug appears automatically via `generateStaticParams()`.

Case study pages follow the **Double Diamond** structure (Discover → Define → Design → Deliver), matching the methodology described in `docs/`.

### Component layers

- `components/layout/` — `Header` and `Footer`, both Server Components except Header is `'use client'` (scroll state + mobile menu)
- `components/home/` — Section components assembled on `app/page.tsx`
- `components/ui/` — shadcn/ui components (new-york style) plus:
  - `motion.tsx` — `AnimatedSection`, `StaggerContainer`, `AnimatedItem` wrappers around Framer Motion; these are `'use client'` and safe to import from Server Components
- `lib/animations.ts` — Framer Motion `Variants` presets (`fadeInUp`, `staggerContainer`, etc.) consumed by `motion.tsx`

### Styling

Tailwind v4 (`@import "tailwindcss"` in `app/globals.css` — no `tailwind.config.js`). Dark-only theme; `--background` is near-black, `--primary` is cyan (`oklch(0.75 0.18 195)`).

Custom CSS utilities defined in `app/globals.css`:
- `.gradient-text` — cyan gradient applied via `-webkit-background-clip`
- `.glow-cyan` / `.glow-secondary` — box-shadow glow effects for buttons/CTAs
- `.bg-grid` — subtle grid background pattern
- `.gradient-border` — pseudo-element gradient border

Use `cn()` from `@/lib/utils` for conditional class merging. Path alias `@/` maps to the project root.

### Notable config

`next.config.mjs` has `typescript.ignoreBuildErrors: true` — TypeScript errors won't fail CI builds. Fix type errors anyway; the flag is a build escape hatch, not a policy.
