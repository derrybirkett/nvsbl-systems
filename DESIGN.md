---
colors:
  light:
    ink: "#111111"
    inkSoft: "#333333"
    inkQuiet: "#666666"
    rule: "#E6E6E6"
    paper: "#FAFAFA"
    paperPure: "#FFFFFF"
    brand: "#0E6E75"   # NVSBL teal. 5.7:1 on paper.
  dark:
    ink: "#F2F2F2"
    inkSoft: "#C8C8C8"
    inkQuiet: "#8A8A8A"
    rule: "#2A2A2A"
    paper: "#000000"
    paperPure: "#0F0F0F"
    brand: "#5CC4CC"   # 10.2:1 on paper.
typography:
  font-families:
    mono: "PT Mono, ui-monospace, SFMono-Regular, Menlo, Consolas, monospace"
    headline: "Libre Baskerville, Georgia, Times New Roman, serif"
    body: "PT Mono, ui-monospace, SFMono-Regular, Menlo, Consolas, monospace"
  font-sizes: { h1: "44px", h2: "28px", h3: "18px", lead: "17px", body: "15px", small: "13px", meta: "11px", pull: "24px" }
  line-heights: { tight: "1.15", body: "1.55", loose: "1.7" }
  letter-spacing: { meta: "0.06em", tight: "-0.02em" }
spacing: { 1: "4px", 2: "8px", 3: "16px", 4: "24px", 5: "32px", 6: "48px", 7: "64px", 8: "80px", 9: "120px" }
layout: { gridColumns: 12, gridGutter: "24px", gridMargin: "80px", gridContentMax: "1200px", gridProseMax: "720px", navHeight: "72px" }
rounded: { xs: "2px", sm: "4px", pill: "999px" }
motion: { fast: "200ms", base: "300ms", ease: "cubic-bezier(0.16, 1, 0.3, 1)" }
---

# NVSBL.SYSTEMS design system

NVSBL.SYSTEMS is a sibling company of monospace.studio. It shares that studio's design system and has its
own accent, wordmark and voice.

**Upstream:** `monospace.studio/styles/tokens.css` and the token rules in `monospace.studio/AGENTS.md`.
Where upstream `DESIGN.md` disagrees with those (it still lists Inter for body text), they win. The live
monospace.studio site has since added extra themes and accent pickers. NVSBL follows the documented base
system, not those.

Tokens are implemented in `app/globals.css`. If you change a token, change this file first.

## Shared with monospace.studio

- **Type.** PT Mono for body, UI and labels. Libre Baskerville Regular for H1, H2 and pull quotes, with
  italic kept for emphasis. No Inter, no Geist. PT Mono has one weight, so don't set mono text bold.
- **Colour.** Ink on paper. Light and dark follow `prefers-color-scheme`. The footer toggle sets
  `data-theme` on `<html>` and stores it in `localStorage`.
- **Depth.** Hairlines (`border-border`) and the paper / paperPure contrast. No shadows, glows, gradients
  or background patterns.
- **Shape.** 2px and 4px radii. Pills only for tags and filters.
- **Motion.** `--motion-fast` for interactive state changes. No entrance animations, no scroll effects.
  Everything respects `prefers-reduced-motion`.
- **Icons.** None, apart from the arrows `↗ → ↑ ↓` set in text. shadcn primitives may keep their
  internal control icons (chevrons, checks).

## NVSBL's own

- **Accent: teal.** `brand` token, used as `text-brand`, `border-brand`, `bg-brand`. Only for state pills,
  link hovers and the single emphasised word in a headline. Never as a fill for large areas.
- **Primary is ink.** shadcn's `primary` maps to ink, so the default button is an ink fill with paper text.
- **Wordmark.** `NVSBL.SYSTEMS` in PT Mono, uppercase, letter-spaced 0.06em. monospace.studio's wordmark
  is lowercase, so the two never get confused.
- **Density.** The registry is reference material. It leans on PT Mono tables, `.meta` labels and clause
  citations more than monospace.studio's editorial pages do.

## Utilities (`app/globals.css`)

| Class | Use |
|---|---|
| `.meta` | Small uppercase PT Mono label: section eyebrows, captions, citations |
| `.pull` | Libre Baskerville italic pull quote |
| `.prose-link` | Underlined link in body copy, underline darkens on hover |
| `.pill` | Tag or filter pill: ink-quiet border at rest, ink on hover, add `data-active` for the filled state |
| `.container-site` | Centred 1200px content column with the grid margin |

## Voice

"We", as a company. Otherwise follow `monospace.studio/docs/VOICE.md`: direct, specific, no jargon, short
paragraphs, end on a conclusion.
