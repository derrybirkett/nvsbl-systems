# New Tool Checklist

When a new agent or tool is ready to be published, four things need to happen:
1. AppIcon — SVG in monospace.studio
2. GitHub Pages site — `gh-pages` branch on the tool's repo
3. Repo homepage — Pages URL wired into the GitHub repo page
4. Studio entry — `lib/ideas.ts` (and optionally `lib/demos.ts`) in monospace.studio

Do all four before announcing the tool. They form the public surface of the work.

---

## 1. AppIcon

Create `/public/images/labs/{slug}/{slug}-icon.svg` in **monospace.studio**.

### Design language

```
background:   #0b110b  (near-black green)
border:       rgba(74,222,128,0.25), stroke-width 1.5
corner radius: rx="18"
viewBox:      0 0 100 100
accent:       #4ade80
stroke style: fill="none", stroke-width 2–3 for primary shapes
opacity:      0.3–0.35 for secondary/connecting elements
```

The geometric shape should represent what the tool *does*, not just its name. Use simple primitives — circles, lines, polygons. Look at existing icons for calibration:

- **Delta** — triangle (shipping, incremental change)
- **Council** — 4 nodes in a ring (advisory board, round table)
- **Curator** — see `/public/images/labs/curator/curator-icon.svg`
- **Ledger** — see `/public/images/labs/ledger/ledger-icon.svg`

Keep it readable at 32×32. Test by squinting.

---

## 2. GitHub Pages site

The tool's repo needs a `gh-pages` branch with three files: `index.html`, `style.css`, `.nojekyll`.

### Branch setup

```bash
mkdir /tmp/{slug}-pages && cd /tmp/{slug}-pages
git init && git checkout -b gh-pages
# write index.html and style.css (see below)
touch .nojekyll
git add -A && git commit -m "chore: add GitHub Pages site"
git remote add origin https://github.com/derrybirkett/{slug}.git
git push origin gh-pages
```

GitHub Pages should already be enabled on repos in this org. Verify:

```bash
gh api repos/derrybirkett/{slug}/pages
# if 404: gh api repos/derrybirkett/{slug}/pages --method POST \
#   --field build_type=legacy \
#   --field 'source={"branch":"gh-pages","path":"/"}'
```

### style.css

Copy `style.css` verbatim from an existing tool's `gh-pages` branch — it is shared and should not diverge:

```bash
gh api "repos/derrybirkett/delta/contents/style.css?ref=gh-pages" \
  --jq '.content' | base64 -d > style.css
```

> When the shared CSS eventually moves to a CDN or `pages-theme` repo, update this instruction.

### index.html structure

Five sections, in order:

```
#hero          badge · headline · subtitle · two CTAs (GitHub + get-started)
#how-it-works  3 numbered steps explaining the tool's loop
#install       terminal block showing the install/setup commands
#{tool-specific} one section unique to this tool (advisors grid, pipeline diagram, etc.)
#makersuite    pipeline strip showing where this tool sits: Delta → Council → Merge → Ledger
```

**Hero copy pattern:**
- Badge: the install method (`git submodule`, `GitHub Action`, etc.)
- Headline: one short imperative line — what the tool makes possible
- Subtitle: one sentence — what it is and how it works
- CTA primary: "View on GitHub" (links to repo)
- CTA secondary: "Get started →" (anchors to `#install`)

**MakerSuite pipeline strip:**
Mark the current tool as `active` (accent border + background). Link the others to their Pages URLs. If a tool doesn't have a Pages URL yet, leave the link off.

Current pipeline order:
```
Delta → Council → Merge → Ledger
builds   reviews   ships   audits
```

---

## 3. Repo homepage

After Pages is building, set the repo's homepage URL so it appears as the website link on the GitHub repo page:

```bash
gh repo edit derrybirkett/{slug} --homepage "https://derrybirkett.github.io/{slug}/"
```

Verify by visiting `https://github.com/derrybirkett/{slug}` — the URL should appear under the repo description.

---

## 4. Studio entry in monospace.studio

Add to `lib/ideas.ts` in the **monospace.studio** repo. Insert in reverse-chronological order within the MakerSuite group (Delta, Council, Merge, Ledger sit together).

### Required fields

```ts
{
  slug: string,          // matches /ideas/studio/{slug} route
  title: string,         // display name
  href: string,          // "/ideas/studio/{slug}"
  year: string,          // "2026"
  status: string,        // "Agent" | "Tool" | "Prototype" — used as the studio filter tag
  proof: string,         // one-line value prop — shown as the card subtitle
  description: string,   // 1–2 sentences for the studio detail page
  evidence: string[],    // 2–3 bullet points; each should prove a specific claim
  icon: string,          // "/images/labs/{slug}/{slug}-icon.svg"
  nextHref: string,      // GitHub Pages URL or GitHub repo URL
  nextLabel: string,     // "View {Title}" or "View {Title} on GitHub"
}
```

The `status` field doubles as the studio filter tag — it controls which filter pill the entry appears under on the Studio page. Use `"Agent"` for anything that runs autonomously, `"Tool"` for anything installed and invoked manually.

### `status` values

| Value | When to use |
|---|---|
| `"Agent"` | Runs autonomously on a schedule or trigger (Ledger, Merge, Council) |
| `"Tool"` | Installed and configured, runs when invoked (Delta) |
| `"Prototype"` | Proof of concept, not production-grade |

### `evidence` guidance

Each bullet should make a concrete, falsifiable claim — not a vague capability statement.

Good: `"Closes the DeltaSuite accountability loop: Delta builds, Council reviews, Merge ships, Ledger audits."`
Weak: `"Demonstrates how agentic workflows can operate at scale."`

---

## Checklist

Before calling the tool shipped:

- [ ] Icon SVG created at `public/images/labs/{slug}/{slug}-icon.svg` in monospace.studio
- [ ] Icon reads at 32×32 (squint test)
- [ ] `gh-pages` branch pushed to `github.com/derrybirkett/{slug}`
- [ ] GitHub Pages building at `https://derrybirkett.github.io/{slug}/`
- [ ] MakerSuite pipeline strip in the Pages site marks this tool correctly
- [ ] Repo homepage set: `gh repo edit derrybirkett/{slug} --homepage "https://derrybirkett.github.io/{slug}/"`
- [ ] Studio entry added to `lib/ideas.ts` with correct `status` tag (`Agent` / `Tool` / `Prototype`)
- [ ] If it goes on the home strip: added to `SHIPPED` in `lib/demos.ts` with matching `tag` field (`'agent'` / `'tool'`)
- [ ] Server restarted and `/ideas/studio/{slug}` renders correctly
