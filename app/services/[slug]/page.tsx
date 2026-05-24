import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, ArrowLeft, Compass, PenTool, Hammer, Package, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedSection, StaggerContainer, AnimatedItem } from "@/components/ui/motion";

const servicesData = {
  strategy: {
    icon: Compass,
    title: "Strategy",
    headline: "Decide what to build, what to buy, and what to orchestrate.",
    description:
      "Most agentic strategy work in 2026 is one of two things: a slide deck about LLMs and the future of work, or a vendor pitch dressed up as research. Neither produces decisions you can act on Monday.",
    intro:
      "We do something different. We start with your stack, your constraints, and your roadmap. We map every place an agent could plausibly do work, and we evaluate each one against three axes: business value if it works, integration cost to make it work, and operational risk if it goes sideways. The output is a ranked list, not a vision document.",
    duration: "Four to eight weeks, fixed price.",
    team: "One senior consultant lead, one design partner, optional embedded engineer for technical depth.",
    deliverables: [
      {
        title: "Agentic readiness audit",
        description:
          "A blunt assessment of which workflows are ready for agentic intervention and which need to be fixed first. Most clients learn that their highest-value targets aren't ready, and that's a useful finding.",
      },
      {
        title: "Build / buy / orchestrate framework",
        description:
          "For every candidate workflow, a recommendation: build it ourselves, buy it from a vendor, or orchestrate existing tools. We name the vendors. We tell you why.",
      },
      {
        title: "Reference architecture",
        description:
          "A diagram and document showing where agents would sit in your existing stack, what they'd talk to, where the failure modes are, and what observability you'd need.",
      },
      {
        title: "Vendor selection",
        description:
          "A short list of model providers, vector stores, eval platforms, MCP servers, and orchestration tools that fit your constraints. We don't take referral fees.",
      },
      {
        title: "Roadmap",
        description:
          "Twelve months of agentic work, prioritized, with rough estimates.",
      },
    ],
    notThis:
      "This is not a slide deck about the future of AI. This is not a vendor's analyst report wearing a logo from your company. This is a working document your engineering leaders will reference for the next year.",
  },
  design: {
    icon: PenTool,
    title: "Design",
    headline: "Model the work before the agents do it.",
    description:
      "The most expensive bug in an agentic system is a bug in the workflow design. Models can be swapped. Prompts can be rewritten. But if the agent is solving the wrong problem — or solving the right problem in a shape that doesn't fit the people using it — no amount of prompt engineering will recover the engagement.",
    intro:
      "Design is where we earn the trust to build. We don't open an editor until the system is mostly designed on paper.",
    duration: "Four to ten weeks, often concurrent with Build.",
    team: "Senior designer lead, embedded prompt and evals engineer, design partner from your team.",
    deliverables: [
      {
        title: "Workflow models",
        description:
          "Diagrams of the work as it is today, the work as it would be with agents, and the human-in-the-loop touchpoints between them. Includes escalation paths and recovery flows.",
      },
      {
        title: "Tool / MCP catalog",
        description:
          "A versioned catalog of every capability the agent can invoke, with input/output contracts, side-effect documentation, and access controls. The catalog is the agent's surface area. We treat it like an API.",
      },
      {
        title: "Prompts as artifacts",
        description:
          "Prompts in a repository, versioned, reviewed, and tested. Each prompt has a purpose statement, expected inputs, expected outputs, and a small suite of behavioral evals.",
      },
      {
        title: "Eval design",
        description:
          "What \"good\" means for this agent, expressed as a set of tests that run before deployment and continuously after. Without this, you have no way to know your system is working. With it, you have a release process.",
      },
      {
        title: "Operator UX",
        description:
          "The interfaces your team will use to monitor, override, and improve the agent. Often more important than the end-user UX.",
      },
    ],
    notThis:
      "This is not a UI agency that puts a chat box on top of an LLM. This is the design of the underlying system, the contract between the agent and the world.",
  },
  build: {
    icon: Hammer,
    title: "Build",
    headline: "Ship middleware that doesn't break under real load.",
    description:
      "The middleware layer is where most agentic projects fail to make it to production. Not because the model can't do the task — by 2026, the model can almost always do the task — but because the surrounding system can't authenticate correctly, can't retrieve the right context, can't recover from a partial failure, and can't be operated by anyone who didn't write it.",
    intro:
      "We build that layer. We've been building distributed systems that survive contact with users for twenty-five years. The agentic part is new; the engineering discipline isn't.",
    duration: "Three to six months, milestone-based.",
    team: "Engineering team lead, two to four engineers, design partner from your team. Two-week iterations. Production deploys from week four.",
    deliverables: [
      {
        title: "Orchestration",
        description:
          "Multi-step, multi-agent flows, with explicit state, retries, and recovery. We default to durable orchestrators (Temporal, Inngest, Restate, depending on the stack) over ad-hoc loops.",
      },
      {
        title: "Memory",
        description:
          "Conversation memory, working memory, long-term memory, with appropriate access controls and expiration policies. Memory isn't a vector database; memory is a set of policies.",
      },
      {
        title: "Retrieval",
        description:
          "Hybrid retrieval (lexical + semantic + structured) tuned to the actual evaluation set, not to a benchmark. We measure recall and precision against your data.",
      },
      {
        title: "Auth and policy",
        description:
          "OAuth flows that survive multi-hop tool calls, RBAC enforced at the tool boundary, audit logs that an operator can read.",
      },
      {
        title: "Observability",
        description:
          "Distributed tracing of agent decisions, replayable from production. We instrument with OpenTelemetry and integrate with whatever you already run (Datadog, Honeycomb, Grafana).",
      },
      {
        title: "Guardrails",
        description:
          "Input validation, output validation, escalation paths for low-confidence outputs, kill switches that the on-call engineer can hit at 3am.",
      },
      {
        title: "CI/CD for prompts and evals",
        description:
          "Prompts ship through the same pipeline as code. Evals run on every PR. Regressions block merges.",
      },
    ],
    notThis:
      "This is not a notebook with prompts in it. This is not a chat UI. This is production-grade software that happens to use models.",
  },
  products: {
    icon: Package,
    title: "Products",
    headline: "Solutions we built once, properly. Now available off the shelf.",
    description:
      "Some problems show up in every engagement. Pain points that aren't unique to one organization. Workflows that everyone is rebuilding from scratch.",
    intro:
      "When we see a pattern often enough, we productize it. We solve it once, evaluate it carefully, deploy it on its own infrastructure, and make it available. Each NVSBL product is a public-facing case study for the agency: the methodology is the same one we apply to client work, just with NVSBL as our own client.",
    duration: "Available now on nvsbl.dev.",
    team: "Self-serve or custom implementation available.",
    deliverables: [
      {
        title: "NVSBL.DEV",
        description:
          "The foundational API layer. A structured pain point database and retrieval system for your middleware. Ingest feedback from any source, cluster it automatically, and query it programmatically. The data layer that powers everything else we build.",
      },
      {
        title: "NVSBL.APP",
        description:
          "Pain Point to PRD. Turn raw user complaints into structured Linear PRDs in under a minute. An MCP server built on NVSBL.DEV that ingests support tickets, sales notes, NPS comments, and Slack channels, clusters the signal, and writes a finished PRD into Linear with full source citations.",
      },
      {
        title: "Sift™",
        description:
          "An opinionated account management and rhetorical layer built on top of NVSBL's public API. Built for PMs and indie builders, not developers. Every screen answers one question: what should I build next, and why? Coming soon.",
      },
    ],
    notThis:
      "If you have a problem that fits this shape — a recurring pain that an off-the-shelf API could solve — we can build it for you, sometimes as a private fork of an existing NVSBL product, sometimes as a new line.",
  },
};

type ServiceSlug = keyof typeof servicesData;

export async function generateStaticParams() {
  return Object.keys(servicesData).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = servicesData[slug as ServiceSlug];
  if (!service) return {};
  return {
    title: `${service.title} — ${service.headline}`,
    description: service.description,
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = servicesData[slug as ServiceSlug];

  if (!service) {
    notFound();
  }

  const Icon = service.icon;

  return (
    <div className="pt-24">
      {/* Back link */}
      <div className="mx-auto max-w-4xl px-6 lg:px-8 py-8">
        <Link
          href="/services"
          className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          All Services
        </Link>
      </div>

      {/* Hero */}
      <section className="pb-16 lg:pb-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <AnimatedSection>
            <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <Icon className="h-8 w-8" />
            </div>
            <h1 className="mt-8 text-4xl font-bold tracking-tight sm:text-5xl">
              {service.title}
            </h1>
            <p className="mt-4 text-xl text-primary font-medium">
              {service.headline}
            </p>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              {service.description}
            </p>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              {service.intro}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* What you get */}
      <section className="py-16 lg:py-24 bg-secondary/30">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="text-2xl font-bold sm:text-3xl">What you get</h2>
          </AnimatedSection>

          <StaggerContainer className="mt-8 flex flex-col gap-6">
            {service.deliverables.map((item) => (
              <AnimatedItem key={item.title}>
                <div className="flex gap-4">
                  <CheckCircle2 className="h-6 w-6 shrink-0 text-primary mt-0.5" />
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </AnimatedItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Engagement shape */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="text-2xl font-bold sm:text-3xl">Engagement shape</h2>
            <div className="mt-6 rounded-xl border border-border bg-card p-6">
              <p className="text-primary font-medium">{service.duration}</p>
              <p className="mt-2 text-muted-foreground leading-relaxed">
                {service.team}
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* What this is not */}
      <section className="py-16 lg:py-24 bg-secondary/30">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="text-2xl font-bold sm:text-3xl">What this is not</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              {service.notThis}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <AnimatedSection>
            <Button asChild size="lg" className="glow-cyan">
              <Link href="/contact">
                Book a discovery call
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
