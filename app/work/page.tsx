import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Work — NVSBL Products",
  description:
    "NVSBL-built APIs and tools. Productized solutions to problems we kept seeing in client work.",
};

const products = [
  {
    title: "NVSBL.DEV",
    status: "Live",
    description:
      "An API of pain points for your middleware. The foundation everything else is built on.",
    longDescription:
      "NVSBL.DEV is the public API that powers everything we build. It ingests, normalizes, and clusters customer pain from any source — support tickets, sales calls, NPS, Slack, churn surveys — and exposes it as structured, queryable data. If you're building your own tooling on top of customer signal, start here.",
    slug: "nvsbl-dev",
    externalUrl: "https://nvsbl.dev",
  },
  {
    title: "NVSBL.APP",
    status: "Live",
    description:
      "Hacker News, watched by an agent. Classified and filed in Linear.",
    longDescription:
      "A product team can move from \"I should be reading Hacker News systematically and I never do\" to \"classified HN signal is appearing in our Linear backlog without anyone touching it\" in under five minutes of setup. First issue lands within twenty-four hours, often within the first hour.",
    slug: "nvsbl-app",
    externalUrl: "https://nvsbl.app",
    pricing: "From $29/month",
  },
  {
    title: "Sift™",
    status: "In Development",
    description:
      "What should I build next, and why?",
    longDescription:
      "Sift is an opinionated account management and rhetorical layer built on top of NVSBL's public API. Its buyer is a PM or indie builder, not a developer. Every screen answers one question: what should I build next, and why? Coming soon.",
    slug: null,
  },
];

export default function WorkPage() {
  return (
    <div className="pt-[var(--space-8)]">
      {/* Hero */}
      <section className="py-[var(--space-9)]">
        <div className="container-site">
          <div className="max-w-3xl">
            <h1 className="text-[length:var(--type-h1)] leading-[1.15]">
              Built by us, for the world.
            </h1>
            <p className="mt-6 text-xl text-ink-soft leading-relaxed">
              Each NVSBL product began as a pattern we kept seeing in client work. 
              We solved it once, properly, and then made it available.
            </p>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-[var(--space-9)] border-y border-border bg-paper-pure">
        <div className="container-site">
          <div className="flex flex-col">
            {products.map((product) => (
              <div key={product.title} className="border-t border-border py-10 last:border-b">
                <div className="flex items-center gap-3 mb-4">
                  <div>
                    <h2 className="text-[length:var(--type-h2)] leading-[1.15] text-foreground">
                      {product.title}
                    </h2>
                  </div>
                  <span className="pill" data-active={product.status === "Live"}>
                    {product.status}
                  </span>
                </div>
                <p className="text-ink-soft leading-relaxed max-w-[var(--grid-prose-max)]">
                  {product.longDescription}
                </p>
                {product.slug && (
                  <div className="mt-6 flex gap-4">
                    <Button asChild>
                      <Link href={`/work/${product.slug}`}>
                        Read the case study →
                      </Link>
                    </Button>
                    {"externalUrl" in product && product.externalUrl && (
                      <Button asChild variant="outline">
                        <a href={product.externalUrl} target="_blank" rel="noopener noreferrer">
                          Try it ↗
                        </a>
                      </Button>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-[var(--space-9)]">
        <div className="container-site">
          <div className="max-w-2xl">
            <h2 className="text-[length:var(--type-h2)] leading-[1.15]">
              Have a problem like this we should build for?
            </h2>
            <p className="mt-4 text-ink-soft leading-relaxed">
              If you&apos;ve got a recurring pain in your operation that you wish was 
              solved off-the-shelf, we&apos;d like to hear about it.
            </p>
            <div className="mt-8">
              <Button asChild size="lg">
                <Link href="/contact">
                  Talk to us →
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
