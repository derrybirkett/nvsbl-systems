# Mission

**NVSBL.SYSTEMS turns official ways of working into agents.**

A lot of business work already has an official, published way of being done: a standard, a template, a
regulation or a framework that someone with authority wrote down. Examples are ILPA's capital call and
reporting templates, CVE triage under CVSS, SSVC and the CISA KEV catalogue, the controls in ISO/IEC 27001,
WCAG accessibility audits and GDPR subject access requests. People still carry these processes out by hand,
from PDFs, in every company that has to follow them.

We find those processes, compile each one into a precise, machine-readable spec in which every step cites
the clause it comes from, and build agents that carry out the spec and show their evidence.

The same method works for a company's own processes. We build **custom agents** from internal SOPs, or from
standards the registry doesn't cover yet, with the same spec, tests and evidence.

**Open standards, private agents.** The registry and the specs of open standards are public, in this repo.
The agents are our product.

## Principles

1. **The standard is the spec.** We don't invent the process; an authority already did. Our job is to follow
   it exactly and show where each step comes from. When the standard is ambiguous, we flag it rather than
   guess.
2. **Conformance is measured, not claimed.** Every agent ships with conformance tests derived from the
   standard. If an agent can't be tested against the standard, we don't ship it.
3. **Prepare, check, evidence; a human signs.** Agents do the work and produce an audit trail. An accountable
   person approves. We never certify; certification belongs to accredited bodies.
4. **Invisible by default.** No dashboards. Agents run where the work already happens: email, GitHub, an API,
   an MCP server, a shared drive.
5. **The company is agentic too.** Agents find the standards, score them, codify them, test them, watch them
   for new versions and publish them. Humans decide which ones to build, approve releases and lend domain
   expertise.
6. **Respect the licence.** Open standards come first. We never redistribute paid standards (ISO, IEC and
   others). Where a standard is paid, the customer supplies their own licensed copy.

## What success looks like

A public registry of standardised processes, each with a status from *spotted* through *assessed*,
*codified*, *tested* and *live*. Alongside it, agents that companies pay to run, both for the
registry's standards and for their own processes. Most of that pipeline runs without a human touching it.

See [docs/2026-11-27-open-registry.md](docs/2026-11-27-open-registry.md) for how the registry works.
