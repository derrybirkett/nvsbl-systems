# The open registry

**Date:** 2026-11-27
**Status:** Design note. Nothing is built yet.

NVSBL.SYSTEMS works in the open on the standards and builds its agents privately. This repo holds the
open part: a registry of official, standardised processes, compiled into specs anyone can read, check and
reuse.

## What the registry holds

Each standard gets one folder with:

| File | What it is |
|---|---|
| `standard.yml` | Metadata: issuing body, version, licence, source URL, agentability scores, state |
| `spec.yml` | The process compiled into steps, roles, inputs, outputs, decision points and rules. Every element cites the clause it comes from. Ambiguities are listed openly. |
| `evals/` | Conformance cases drawn from the standard's own examples plus edge cases, with a pass bar. This is the public proof that an agent follows the standard. |
| `CHANGELOG.md` | What changed between versions of the standard and what that means for the spec |

A standard moves through these states: **spotted → assessed → codified → tested → live**.

## Rules for specs

1. **Cite, don't copy.** Steps reference clause numbers and paraphrase the minimum. Never commit the text
   of a paid standard (ISO, IEC and others). Those get `standard.yml` and a clause-number skeleton only.
2. **Flag ambiguity.** Where the standard is unclear, the spec says so. It doesn't guess.
3. **A human signs.** Every spec ends in a sign-off step for an accountable person. Specs describe how
   to prepare, check and evidence; they never certify.
4. **Versions are first-class.** A new version of a standard means a new spec version and a changelog
   entry, never a silent edit.

## How we choose what to codify

Each candidate is scored 1 to 5 on:

| Factor | Question |
|---|---|
| Formality | Is there a precise spec, template or decision tree, or only principles? |
| Testability | Can a run be judged right or wrong against the standard's own examples? |
| Licence | Is the text free to use, or paid? |
| Frequency × pain | How often is it run and how many hours does each run take? |
| Liability | What happens when an agent following it is wrong? |
| Volatility | How often does the standard change? |

Formality, testability and licence decide whether it can be codified at all.

## Candidates

CVE triage (CVSS 4.0, SSVC, CISA KEV, EPSS), ILPA capital call and distribution notices and reporting
template, WCAG 2.2 audits, GDPR subject access requests, ISO/IEC 27001 Annex A evidence mapping
(skeleton only).

## Layout (proposed)

```
MISSION.md
standards/
  _schema/          standard.schema.json, spec.schema.json
  <standard-id>/    standard.yml, spec.yml, evals/, CHANGELOG.md
app/ components/ …  the site, which becomes the registry front end
```

Agents that carry out these specs, including custom agents built for a company's own processes, are
built and run by NVSBL.SYSTEMS separately. Contributions to specs and conformance cases are welcome by
pull request.
