import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/ui/motion";

const caseStudies = {
  "nvsbl-dev": {
    title: "NVSBL.DEV",
    headline: "An API of pain points for your middleware.",
    status: "Live",
    productUrl: "https://nvsbl.dev",
    outcome:
      "NVSBL.DEV is the public API that powers everything we build. It ingests, normalizes, and clusters customer pain from any source — support tickets, sales calls, NPS, Slack, churn surveys — and exposes it as structured, queryable data. If you're building your own tooling on top of customer signal, start here.",
    sections: {
      discover: {
        title: "Discover",
        content: [
          "We kept building the same ingestion and normalization layer for every client engagement. Different sources — Zendesk, Intercom, Gong, Slack, custom CSVs — but the same problem: get the pain out of the silo and into a shape we could reason about.",
          "After the third time we rebuilt it, we decided to build it once, properly, and expose it as a public API.",
        ],
        bullets: [
          "Every company stores customer pain differently, but the underlying structure is the same.",
          "The normalization step is where most teams lose fidelity — we optimized for preserving source metadata.",
          "Clustering by underlying pain (not surface keywords) was the insight that made the API useful.",
        ],
        quote:
          "\"We don't need another feedback platform. We need the data to be queryable.\"",
        quoteAuthor: "CTO, Series B SaaS",
      },
      define: {
        title: "Define",
        problem:
          "Teams cannot reliably query customer pain across heterogeneous sources without building custom ETL for each one.",
        metric:
          "A developer should be able to connect a new source and query normalized pain data within an hour, not a sprint.",
        boundaries: [
          "We are not a feedback platform. We don't have a dashboard for non-developers.",
          "We don't store raw PII. We normalize and hash identifiers.",
          "We don't make product decisions. We surface signal; you decide.",
        ],
        risk: "That normalization across wildly different source schemas would lose too much signal to be useful. We spent most of our design cycles on the normalization layer.",
      },
      design: {
        title: "Design",
        topology:
          "Three-layer architecture. Connectors handle source-specific ingestion and emit a common event schema. The Normalization layer enriches events with embeddings and metadata. The Query layer exposes clustered pain via REST and GraphQL endpoints.",
        decisions: [
          "Every normalized record retains a link to its source, including timestamp and original ID.",
          "Clustering runs continuously; you can query at any time without triggering a batch job.",
          "Rate limits are generous for authenticated users; we'd rather you build on us than around us.",
        ],
        evals: [
          "Connector reliability (uptime, ingestion latency, error rate).",
          "Normalization fidelity (does the normalized record preserve actionable signal?).",
          "Cluster coherence (do groupings make sense to a human reviewer?).",
        ],
        tradeoffs: [
          "Depth vs. breadth: we chose depth. Six high-fidelity connectors beat twenty shallow ones.",
          "Real-time vs. batch: we chose continuous. The API is always up to date, not eventually consistent.",
        ],
      },
      deliver: {
        title: "Deliver",
        stack:
          "Go for the ingestion workers. Postgres for state. Redis for caching. Deployed on Fly.io for low-latency edge presence. OpenAPI spec published and versioned.",
        metrics: [
          "Connector uptime per source.",
          "p95 query latency.",
          "Normalization fidelity score (sampled audit).",
          "Developer time-to-first-query for new integrations.",
        ],
      },
    },
  },
  "nvsbl-app": {
    title: "NVSBL.APP",
    headline: "Hacker News, watched by an agent. Classified and filed in Linear.",
    status: "Live",
    pricing: "From $29/month",
    productUrl: "https://nvsbl.app",
    outcome:
      "A product team can move from \"I should be reading Hacker News systematically and I never do\" to \"classified HN signal is appearing in our Linear backlog without anyone touching it\" in under five minutes of setup. First issue lands within twenty-four hours, often within the first hour.",
    sections: {
      discover: {
        title: "Discover",
        content: [
          "We kept seeing the same gap in product engagements with category-leading B2B teams. Their customers were all over Hacker News — complaining, requesting, comparing, churning publicly — and the product team had no system for capturing any of it. Engineers and PMs would scroll HN on the train, mention an interesting thread in Slack, and lose it within twenty-four hours.",
          "We interviewed product managers, founders, and engineering leads at companies whose products live in HN-active categories — devtools, infra, AI/ML, B2B SaaS. The pattern was identical:",
        ],
        bullets: [
          "Pain about their category appeared on HN at higher density than on any other public source.",
          "\"I should be reading HN systematically\" was a sentence nearly every PM said. Almost none of them did.",
          "Existing social listening tools didn't solve it because they returned brand mentions, not pain — and certainly not pain in the shape an engineering team can act on.",
          "The real bottleneck was triage. Even when a PM saw the signal, converting it into a Linear-shaped artifact required effort that always lost to other priorities.",
        ],
        quote:
          "\"I have eight HN tabs open right now and I'll close them at the end of the day without doing anything about them. There's a feature in there somewhere. I just don't have a way to extract it.\"",
        quoteAuthor: "Head of Product",
      },
      define: {
        title: "Define",
        problem:
          "Product teams in HN-active categories cannot reliably extract actionable signal from Hacker News at the rate at which it appears.",
        metric:
          "A team should go from no-system to \"classified HN signal landing as Linear issues\" in under five minutes of in-product setup. Acted-on rate on classified issues — the proportion that move out of triage within seven days — should be at least 1 in 5.",
        boundaries: [
          "Hacker News only at launch. Other sources are user-voted from day one.",
          "Linear only at launch. Other destinations are user-voted from day one.",
          "We are not building a feedback platform. We integrate with the system product teams already use to triage work.",
          "Classification produces structured signal, not roadmap recommendations. Humans decide what to build.",
        ],
        risk: "That a domain-tuned classifier could distinguish actual category-relevant pain from off-topic chatter on HN with high enough precision that PMs would trust the output without re-reading every source. If the classifier was noisy, the product was pointless. We tested this assumption first — ran the classifier on three months of HN history across target categories before we built any of the rest of the system. The precision rate cleared the trust threshold. Cluster precision is now part of the eval suite that runs on every release; regressions block deploys.",
      },
      design: {
        title: "Design",
        topology:
          "Three agents in a directed graph. An Ingest agent polls the official Hacker News API every five minutes, normalizing posts and comments into a common schema with full text, metadata, and source URL. A Classify agent applies category filtering, classification (feature request, bug, competitor mention, churn risk, raw pain, opportunity, support gap), and confidence scoring against the customer's category description. A File agent writes a Linear issue, formatted to the customer's defaults — labels, assignee, priority — with the original quote, the source URL, the classification, the confidence score, and a short rationale.",
        decisions: [
          "Prompts are versioned in the repository; each Linear issue includes the prompt version that classified it.",
          "Issues never invent quantitative claims. Source citations are mandatory.",
          "Confidence scores are exposed in the issue body. Below-threshold items are dropped, never filed.",
          "A \"rationale\" string (\"classified as feature request because...\") is included on every issue. Trust is built through explainability.",
        ],
        evals: [
          "Classification accuracy (does the label match human judgment).",
          "Category fit (would a PM in this category triage this).",
          "Citation faithfulness (does the rationale trace back to the source).",
        ],
        tradeoffs: [
          "Recall vs. precision — we chose precision. Better to miss a real signal than file noise. Customers can tune toward recall by lowering the score threshold.",
          "Latency vs. confidence — we chose confidence. Most signal lands in Linear within five minutes of appearing on HN, which is fast enough.",
          "Source breadth vs. integration depth — we chose depth. One source and one destination, both done extremely well, beat four of each done shallowly. Future sources and destinations ship by user vote.",
        ],
      },
      deliver: {
        title: "Deliver",
        stack:
          "Next.js 15 on Vercel for the marketing site and dashboard. Node/TypeScript on Vercel functions for workers. Postgres for state. Inngest for the agent orchestration. Stripe for billing. Linear's GraphQL API for the write surface.",
        metrics: [
          "Time-to-issue (HN post → Linear issue).",
          "Classification precision against a sampled audit.",
          "Acted-on rate — the proportion of generated issues that move out of triage within seven days. This is the only metric that ultimately matters.",
          "Source health (HN API availability, our backlog depth).",
        ],
      },
    },
  },
};

type CaseStudySlug = keyof typeof caseStudies;

export async function generateStaticParams() {
  return Object.keys(caseStudies).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const study = caseStudies[slug as CaseStudySlug];
  if (!study) return {};
  return {
    title: `${study.title} — Case study via the Double Diamond`,
    description: study.headline,
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = caseStudies[slug as CaseStudySlug];

  if (!study) {
    notFound();
  }

  return (
    <div className="pt-24">
      {/* Back link */}
      <div className="mx-auto max-w-4xl px-6 lg:px-8 py-8">
        <Link
          href="/work"
          className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          All Work
        </Link>
      </div>

      {/* Hero */}
      <section className="pb-16 lg:pb-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <AnimatedSection>
            <div className="flex items-center gap-3 mb-4">
              <div>
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                  {study.title}
                </h1>
                {"subtitle" in study && study.subtitle && (
                  <p className="text-lg text-muted-foreground">
                    {study.subtitle}
                  </p>
                )}
              </div>
              <span className="text-xs font-medium px-2 py-1 rounded-full bg-primary/10 text-primary">
                {study.status}
              </span>
            </div>
            <p className="text-xl text-primary font-medium">
              {study.headline}
            </p>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              {study.outcome}
            </p>
            <div className="mt-8 flex gap-4">
              <Button asChild className="glow-cyan">
                <a href={study.productUrl} target="_blank" rel="noopener noreferrer">
                  Visit product
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Discover */}
      <section className="py-16 lg:py-24 bg-secondary/30">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="text-2xl font-bold sm:text-3xl text-primary mb-8">
              {study.sections.discover.title}
            </h2>
            {study.sections.discover.content.map((p, i) => (
              <p key={i} className="text-muted-foreground leading-relaxed mb-4">
                {p}
              </p>
            ))}
            <ul className="mt-6 space-y-3">
              {study.sections.discover.bullets.map((bullet, i) => (
                <li key={i} className="flex gap-3 text-muted-foreground">
                  <span className="text-primary shrink-0">•</span>
                  {bullet}
                </li>
              ))}
            </ul>
            <blockquote className="mt-8 border-l-2 border-primary pl-6 py-2">
              <p className="text-lg text-foreground italic">
                {study.sections.discover.quote}
              </p>
              <cite className="mt-2 block text-sm text-muted-foreground">
                — {study.sections.discover.quoteAuthor}
              </cite>
            </blockquote>
          </AnimatedSection>
        </div>
      </section>

      {/* Define */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="text-2xl font-bold sm:text-3xl text-primary mb-8">
              {study.sections.define.title}
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                  The problem, sharpened
                </h3>
                <p className="text-foreground font-medium">
                  {study.sections.define.problem}
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                  Success metric
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {study.sections.define.metric}
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                  Scope boundaries
                </h3>
                <ul className="space-y-2">
                  {study.sections.define.boundaries.map((b, i) => (
                    <li key={i} className="flex gap-3 text-muted-foreground">
                      <span className="text-primary shrink-0">•</span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                  Riskiest assumption
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {study.sections.define.risk}
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Design */}
      <section className="py-16 lg:py-24 bg-secondary/30">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="text-2xl font-bold sm:text-3xl text-primary mb-8">
              {study.sections.design.title}
            </h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                  Topology
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {study.sections.design.topology}
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                  Prompt and policy decisions
                </h3>
                <ul className="space-y-2">
                  {study.sections.design.decisions.map((d, i) => (
                    <li key={i} className="flex gap-3 text-muted-foreground">
                      <span className="text-primary shrink-0">•</span>
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                  Eval design
                </h3>
                <ul className="space-y-2">
                  {study.sections.design.evals.map((e, i) => (
                    <li key={i} className="flex gap-3 text-muted-foreground">
                      <span className="text-primary shrink-0">•</span>
                      {e}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                  Trade-offs documented
                </h3>
                <ul className="space-y-2">
                  {study.sections.design.tradeoffs.map((t, i) => (
                    <li key={i} className="flex gap-3 text-muted-foreground">
                      <span className="text-primary shrink-0">•</span>
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Deliver */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="text-2xl font-bold sm:text-3xl text-primary mb-8">
              {study.sections.deliver.title}
            </h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                  Stack
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {study.sections.deliver.stack}
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                  What we measure in production
                </h3>
                <ul className="space-y-2">
                  {study.sections.deliver.metrics.map((m, i) => (
                    <li key={i} className="flex gap-3 text-muted-foreground">
                      <span className="text-primary shrink-0">•</span>
                      {m}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-secondary/30">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <AnimatedSection className="flex flex-col gap-6">
            <div className="rounded-xl border border-border bg-card p-8">
              <h3 className="text-xl font-semibold mb-2">
                Use {study.title} on your team
              </h3>
              <p className="text-muted-foreground mb-4">
                Free to try. Pricing scales with usage.
              </p>
              <Button asChild className="glow-cyan">
                <a href={study.productUrl} target="_blank" rel="noopener noreferrer">
                  Visit {study.productUrl.replace("https://", "")}
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>

            <div className="rounded-xl border border-border bg-card p-8">
              <h3 className="text-xl font-semibold mb-2">
                Have a problem like this we should build for?
              </h3>
              <p className="text-muted-foreground mb-4">
                If you&apos;ve got a recurring pain in your operation that you wish 
                was solved off-the-shelf, we&apos;d like to hear about it.
              </p>
              <Button asChild variant="outline">
                <Link href="/contact">
                  Talk to us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
