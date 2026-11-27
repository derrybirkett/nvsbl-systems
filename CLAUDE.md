# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev        # start dev server
pnpm build      # production build
pnpm lint       # eslint
```

No test suite is configured.

## Direction

NVSBL.SYSTEMS is becoming the standards-to-agents business: read `MISSION.md` and `docs/2026-11-27-open-registry.md` first. This repo is public (open standards); the business model, pricing and agents live in the private `nvsbl-systems-agents` repo. Keep those out of this one. The architecture below describes the current marketing site, which stays live until the new direction ships something.

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
  - `motion.tsx` — `AnimatedSection`, `StaggerContainer`, `AnimatedItem` are now plain `div` wrappers (the design system has no entrance animations). Don't add new uses; remove them as pages are rewritten.
- `components/layout/theme-toggle.tsx` — light/dark toggle in the footer; pairs with the inline theme script in `app/layout.tsx`

### Styling

**Read `DESIGN.md` first.** NVSBL.SYSTEMS is a sibling of monospace.studio and shares its design system: PT Mono for body and labels, Libre Baskerville for H1/H2, ink on paper, hairlines instead of shadows, no icons except the arrows `↗ → ↑ ↓`, no decorative motion. The NVSBL accent is teal (`text-brand`), used sparingly. shadcn's `primary` maps to ink.

Tailwind v4 (`@import "tailwindcss"` in `app/globals.css` — no `tailwind.config.js`). Light and dark follow `prefers-color-scheme`; the footer toggle overrides it via `data-theme` on `<html>`. The `dark:` variant honours both.

Custom utilities in `app/globals.css`: `.container-site`, `.meta`, `.pull`, `.prose-link`, `.pill` (see `DESIGN.md`). Spacing and type tokens are CSS variables (`--space-*`, `--type-*`), used as `py-[var(--space-9)]`, `text-[length:var(--type-h2)]`.

Use `cn()` from `@/lib/utils` for conditional class merging. Path alias `@/` maps to the project root.

### Notable config

`next.config.mjs` has `typescript.ignoreBuildErrors: true` — TypeScript errors won't fail CI builds. Fix type errors anyway; the flag is a build escape hatch, not a policy.
