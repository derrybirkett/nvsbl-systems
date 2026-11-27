# Pivot plan: from agency site to open registry

**Date:** 2026-11-27
**Status:** Plan. Nothing is built yet.
**Reads with:** [MISSION.md](../MISSION.md), [the open registry](2026-11-27-open-registry.md)

The site still sells strategy, design and build services. The mission says something else: we turn
official ways of working into agents, and we publish the standards side in the open. This plan closes
that gap in five phases. Each phase ends with something that can ship on its own.

---

## Decisions taken

| Decision | Choice |
|---|---|
| Relationship to monospace.studio | **Sibling company.** Shares its design system (type, grid, spacing, motion, imagery rules). Has its own accent and its own voice. |
| Voice | **"We"**, as a company. Everything else in monospace.studio's `docs/VOICE.md` applies: direct, specific, no jargon, short paragraphs, ends on a conclusion. |
| First standard | **SSVC**, then CVE triage as a composition of SSVC, CVSS 4.0, CISA KEV and EPSS. All four are open. SSVC is a decision tree, which makes it the most formal and testable candidate on the list. |
| Beachhead buyer | Security and platform teams that triage vulnerabilities. The other candidates stay in the registry as *spotted* or *assessed* until this one is *live*. |
| What stays private | Agents, pricing, customers and the business model stay in `nvsbl-systems-agents`. This repo holds specs, evals, schemas and the site. |

---

## Phase 0: tighten the docs

Fix the gaps the review found before anything is built on them.

1. **MISSION.md.** Name the beachhead (vulnerability triage). Add one public line on why anyone would
   pay when the specs are free: the specs say what the standard requires, and our agents do the work,
   track new versions of the standard and leave an evidence trail. Keep pricing out.
2. **The open registry.** Define the states precisely:
   - *spotted*: listed, not scored.
   - *assessed*: scored on the six factors, with the scores published.
   - *codified*: `spec.yml` exists and validates against the schema.
   - *tested*: `evals/` exist, and a reference run passes the pass bar.
   - *live*: an NVSBL agent runs this spec in production. This is about our product, not a judgement
     on the spec.
3. **Licences.** The repo has none. Add:
   - `LICENSE` (MIT) for site code and schemas.
   - `standards/LICENSE` (CC BY 4.0) for specs, evals and changelogs.
   - A `licence` field in `standard.yml` recording the source standard's own terms. Check each source
     before codifying it. "Free to read" does not always mean "free to redistribute".
4. **Disclaimer.** One standing line on every spec page: specs describe how to prepare, check and
   evidence. They do not certify conformance. Certification belongs to accredited bodies.

**Ships:** updated docs, licence files.

---

## Phase 1: port the design system

Take monospace.studio's system and give NVSBL its own inflection. The source of truth is
monospace.studio's `styles/tokens.css` and `AGENTS.md`. Its `DESIGN.md` still mentions Inter for body
text, which the other two files overrule.

### Shared with monospace.studio

- **Type:** PT Mono for body, UI and labels. Libre Baskerville for H1, H2 and pull quotes. No Inter, no
  Geist.
- **Scale, spacing, grid:** the same tokens (`--type-*`, `--space-1` to `--space-9`, 12 columns, 1200px
  content width, 720px prose width).
- **Colour:** ink on paper, light and dark modes switched by `prefers-color-scheme`, plus a small text
  toggle in the footer.
- **Depth:** hairlines (`rule`) and the `paper` / `paperPure` contrast. No shadows, glows or gradients.
- **Radii:** 2px and 4px, pills for tags.
- **Motion:** the 200ms `--motion-fast` token for interactive states, and nothing decorative. All of it
  respects `prefers-reduced-motion`.
- **Icons:** none, apart from the arrows `↗ → ↑ ↓`.

### NVSBL's own

- **Accent.** A deep teal that keeps a thread back to the old cyan without the neon:
  `#0E6E75` on light, `#5CC4CC` on dark. It is used only for state pills and link hovers.
  Contrast needs checking before it's final.
- **Wordmark.** `NVSBL.SYSTEMS` in PT Mono, uppercase, letter-spaced 0.06em. monospace.studio is
  lowercase, so the two sit side by side without being confused.
- **Density.** The registry is reference material, so it leans more on PT Mono tables and clause
  citations than monospace.studio's editorial layouts do.

### Work in this repo

1. Add `DESIGN.md` at the root: the shared tokens, the NVSBL overrides, and a note on which file
   upstream is authoritative.
2. Rewrite `app/globals.css`:
   - Replace the oklch palette with ink and paper tokens in both modes, mapped onto the shadcn variable
     names so the existing components keep working.
   - Delete `.gradient-text`, `.glow-cyan`, `.glow-secondary`, `.bg-grid` and `.gradient-border`.
3. Swap fonts in `app/layout.tsx` (`next/font/google`: PT Mono, Libre Baskerville).
4. Remove the dark-only assumption. Wherever a component hard-codes dark colours, switch it to tokens.
5. Reduce `components/ui/motion.tsx` to a no-op wrapper, or delete it once nothing imports it. Then
   remove `framer-motion`.
6. Replace `lucide-react` icons with text labels and arrows, then remove the dependency.
7. Restyle `Header` and `Footer`. The header becomes a wordmark plus three links. The footer carries the
   theme toggle, the licence line and a link to the GitHub repo.

**Ships:** the current pages in the new style. Nothing about the offer changes yet, so this can go live
on its own.

---

## Phase 2: cut the information architecture

| Route | Becomes |
|---|---|
| `/` | The mission in about 150 words, the five states, and the registry index (or its top rows). |
| `/registry` | The full index: one row per standard with issuing body, version, licence and state. Filter pills by state and domain. |
| `/registry/[id]` | One standard: metadata, scores, the spec rendered step by step with clause citations, evals summary, changelog. |
| `/approach` | Rewritten as the method: how we choose, codify, test and version a standard. Absorbs the useful parts of `/about`. |
| `/contact` | Kept. Two routes in: "build an agent for a standard" and "build one from your own SOP". |
| `/privacy`, `/terms` | Kept, reviewed for the new offer. |
| `/services`, `/services/*` | 301 to `/approach`. |
| `/work`, `/work/*` | 301 to `/registry`. The old case studies belong on monospace.studio if anywhere. |
| `/about` | 301 to `/approach`. |

Also update the metadata in `app/layout.tsx`. "Agentic middleware for organizations that ship" goes;
the title and description come from the mission's first line.

**Ships:** the new IA with the registry pages rendering a placeholder index until Phase 3 lands.

---

## Phase 3: the first standard, end to end

The design is untested until one standard goes all the way through it.

1. **Schemas.** `standards/_schema/standard.schema.json` and `spec.schema.json` (JSON Schema, validated
   in CI). Each spec element (step, role, input, output, decision, rule) has a required `cites` field.
   Ambiguities go in a top-level `ambiguities` list, each with the clause and the question it raises.
2. **`standards/ssvc/`.** Use the current SSVC version. Codify the deployer decision tree with every
   decision point citing its source. Evals come from SSVC's own worked examples, plus edge cases where
   inputs are missing or contradictory. Set the pass bar at 100% on the worked examples.
3. **A reference runner** in `scripts/` that executes `spec.yml` against `evals/` deterministically, with
   no model involved. It proves the spec and evals agree. It is not the product agent.
4. **CI.** Schema validation, the reference run, and a check that no file in `standards/` contains more
   than short quoted fragments of a source text.
5. **Then CVE triage.** `standards/cve-triage/` composes SSVC with CVSS 4.0 scoring, KEV lookup and EPSS
   as inputs. Each component standard gets its own folder and its own version.

**Ships:** SSVC at *tested*, then CVE triage at *codified* or *tested*.

---

## Phase 4: the registry front end reads the repo

1. Load `standards/*/standard.yml` and `spec.yml` at build time (add a YAML parser), validate them
   against the schemas, and generate static pages with `generateStaticParams()`.
2. Render clause citations as PT Mono meta lines and ambiguities as accent-marked notes. State is a pill
   whose style comes from the shared tag component.
3. Add an "edit on GitHub" link on every standard page. Contributions come in as pull requests.
4. Update `CLAUDE.md`: content now comes from `standards/`, not from data objects in page files.

**Ships:** a registry that grows by adding folders, with no site changes needed.

---

## Phase 5: fill the registry honestly

Score the remaining candidates and publish them at *assessed*, scores included: ILPA templates,
WCAG 2.2, GDPR subject access requests, and ISO/IEC 27001 Annex A (skeleton only, since the standard is
paid). A registry with one live standard and five honest assessments is more credible than six
half-finished specs.

---

## Not in this repo

Agents, prompts, pricing, customer names, dashboards and anything from `nvsbl-systems-agents`. If a
change needs one of those to make sense, it belongs in the private repo.

## Open questions

1. **Accent.** Is the deep teal right, or should NVSBL be fully monochrome with state shown by fill
   alone?
2. **Licences.** Is MIT plus CC BY 4.0 right, or do you want CC BY-SA so improvements to specs come
   back?
3. **Sequencing.** Phase 1 can ship before Phases 2 and 3. Should the restyle go live with the old copy,
   or wait so the new look and the new offer launch together?
4. **Domain.** Does the registry live at `nvsbl.systems/registry`, or does it get its own subdomain?
