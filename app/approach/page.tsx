import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Approach — How NVSBL builds agentic systems",
  description:
    "The Double Diamond, applied to agents. The methodology behind every NVSBL engagement and every NVSBL product.",
};

const doubleDiamond = [
  {
    phase: "Discover",
    description:
      "We start by learning the work, not by writing prompts. We sit with the people who do the job. We read the existing tickets. We measure where the time actually goes. We ask what would have to be true for an agent to be more useful than the current process. Most of what we discover is that the workflow has problems no agent can fix; we surface those before we propose anything that depends on them.",
  },
  {
    phase: "Define",
    description:
      "We frame the problem in one sentence and a success metric. If we can't, we haven't discovered enough. The success metric is non-negotiable: agents are easy to ship and hard to evaluate, and a project without a success metric is a project that will get killed by the first stakeholder who suspects it isn't working.",
  },
  {
    phase: "Design",
    description:
      "We model the agent topology before we write code. We design the tool catalog — the set of capabilities the agent can invoke — as a deliberate artifact, not as whatever the model felt like calling that day. We design the prompts as versioned, reviewable documents. We design the evals first, so the build phase has a target. By the time we open an editor, the system is mostly designed on paper.",
  },
  {
    phase: "Deliver",
    description:
      "We build into your existing stack. We use the queue you already operate, the database you already back up, the observability you already pay for. We instrument the agent's decisions so an operator can replay them. We deploy behind your existing CI/CD, with feature flags and rollbacks. We stay long enough to be sure the system survives a week without us.",
  },
];

const whatWeDont = [
  "We don't ship pilots that don't have a production path.",
  "We don't build chatbots whose only job is to look impressive in a board deck.",
  "We don't take engagements where the client doesn't end up owning the IP.",
  "We don't resell tooling — partners are partners, not a SKU.",
  "We don't write prompts in isolation; if a prompt isn't part of an evaluable system, it's not finished work.",
];

export default function ApproachPage() {
  return (
    <div className="pt-[var(--space-8)]">
      {/* Hero */}
      <section className="py-[var(--space-9)]">
        <div className="container-site">
          <div>
            <h1 className="text-[length:var(--type-h1)] leading-[1.15]">
              We build the layer underneath the agents.
            </h1>
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="pb-[var(--space-9)]">
        <div className="container-site">
          <div className="max-w-[var(--grid-prose-max)] flex flex-col gap-6">
            <p className="text-ink-soft leading-relaxed">
              The agentic era has a discipline problem. Most of what&apos;s being shipped 
              today is a notebook with prompts in it, draped in marketing copy. It demos 
              beautifully. It collapses under contact with a real organization.
            </p>
            
            <p className="text-ink-soft leading-relaxed">
              We&apos;ve been doing solution design for twenty-five years. The work 
              hasn&apos;t actually changed. The hard parts of agentic systems are the same 
              hard parts that always existed in distributed systems: authentication that 
              flows correctly across services, retrieval that returns the right thing, 
              state that respects access boundaries, telemetry that surfaces failure modes 
              before users do, and controls your operations team can hold in their head.
            </p>
            
            <p className="mt-8 text-foreground text-xl">
              The model is the easy part. The model is somebody else&apos;s product.
            </p>
          </div>
        </div>
      </section>

      {/* What we mean by middleware */}
      <section className="py-[var(--space-9)] border-y border-border bg-paper-pure">
        <div className="container-site">
          <div>
            <h2 className="text-[length:var(--type-h2)] leading-[1.15]">
              What we mean by middleware
            </h2>
            <p className="mt-6 text-ink-soft leading-relaxed">
              Most agentic agencies don&apos;t build this layer. They build a chat UI on 
              top of an LLM and call it transformation. We build the layer that makes 
              the chat UI worth using — or that makes the chat UI unnecessary, because 
              the agent has been integrated into the actual workflow.
            </p>
            <p className="mt-4 text-foreground">
              The best AI is invisible because the best AI doesn&apos;t have to announce 
              itself. It just makes the work shorter.
            </p>
          </div>
        </div>
      </section>

      {/* Double Diamond */}
      <section className="py-[var(--space-9)]">
        <div className="container-site">
          <div>
            <h2 className="text-[length:var(--type-h2)] leading-[1.15]">
              The Double Diamond, applied to agents
            </h2>
            <p className="mt-6 text-ink-soft leading-relaxed">
              Every engagement walks four phases. We didn&apos;t invent the Double Diamond — 
              the British Design Council did, in 2005 — but it maps cleanly onto the 
              agentic stack and we apply it without ceremony.
            </p>
          </div>

          <div className="mt-12 flex flex-col gap-8">
            {doubleDiamond.map((item, idx) => (
              <div key={item.phase}>
                <div className="flex gap-6">
                  <div className="meta w-8 shrink-0 pt-1">
                    {idx + 1}
                  </div>
                  <div>
                    <h3 className="text-[length:var(--type-h3)] text-foreground">
                      {item.phase}
                    </h3>
                    <p className="mt-2 text-ink-soft leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <p className="text-ink-soft leading-relaxed">
              The diamond is two diamonds because it diverges and converges twice — 
              once on the problem, once on the solution. Skipping the divergent halves 
              is how teams end up with agents that solve the wrong thing very efficiently.
            </p>
          </div>
        </div>
      </section>

      {/* What we don't do */}
      <section className="py-[var(--space-9)] border-y border-border bg-paper-pure">
        <div className="container-site">
          <div>
            <h2 className="text-[length:var(--type-h2)] leading-[1.15]">What we don&apos;t do</h2>
          </div>

          <div className="mt-8 flex flex-col gap-4">
            {whatWeDont.map((item) => (
              <div key={item}>
                <p className="text-ink-soft leading-relaxed">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What you can expect */}
      <section className="py-[var(--space-9)]">
        <div className="container-site">
          <div>
            <h2 className="text-[length:var(--type-h2)] leading-[1.15]">What you can expect</h2>
            <p className="mt-6 text-ink-soft leading-relaxed">
              A team that has been doing this longer than the term &quot;agentic&quot; has existed. 
              A methodology that produces predictable, defensible work product. A bias 
              toward shipping into the systems you already trust, rather than introducing 
              new ones. And a willingness to tell you when an agent isn&apos;t the right answer.
            </p>
          </div>

          <div className="mt-12">
            <Button asChild size="lg">
              <Link href="/contact">
                Book a discovery call →
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
