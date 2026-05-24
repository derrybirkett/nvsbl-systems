import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedSection, StaggerContainer, AnimatedItem } from "@/components/ui/motion";

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
    gradient: "from-primary/20 to-accent/20",
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
    gradient: "from-accent/20 to-primary/20",
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
    gradient: "from-primary/20 to-accent/20",
  },
];

export default function WorkPage() {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimatedSection className="max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Built by us, for the world.
            </h1>
            <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
              Each NVSBL product began as a pattern we kept seeing in client work. 
              We solved it once, properly, and then made it available.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Products */}
      <section className="py-16 lg:py-24 bg-secondary/30">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <StaggerContainer className="flex flex-col gap-8">
            {products.map((product) => (
              <AnimatedItem key={product.title}>
                <div className="rounded-xl border border-border bg-card overflow-hidden">
                  <div className="grid grid-cols-1 lg:grid-cols-3">
                    {/* Image placeholder */}
                    <div className={`aspect-[16/10] lg:aspect-auto bg-gradient-to-br ${product.gradient} relative`}>
                      <div className="absolute inset-0 bg-grid opacity-30" />
                      {!product.slug && (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-muted-foreground/50 text-sm font-medium">
                            Coming Soon
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="lg:col-span-2 p-8 lg:p-10">
                      <div className="flex items-center gap-3 mb-4">
                        <div>
                          <h2 className="text-2xl font-bold text-foreground">
                            {product.title}
                          </h2>
                          {"subtitle" in product && product.subtitle && (
                            <p className="text-sm text-muted-foreground">
                              {product.subtitle}
                            </p>
                          )}
                        </div>
                        <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                          product.status === "Live" 
                            ? "bg-primary/10 text-primary" 
                            : "bg-muted text-muted-foreground"
                        }`}>
                          {product.status}
                        </span>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">
                        {product.longDescription}
                      </p>
                      {product.slug && (
                        <div className="mt-6 flex gap-4">
                          <Button asChild className="glow-cyan">
                            <Link href={`/work/${product.slug}`}>
                              Read the case study
                              <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                          </Button>
                          {"externalUrl" in product && product.externalUrl && (
                            <Button asChild variant="outline">
                              <a href={product.externalUrl} target="_blank" rel="noopener noreferrer">
                                Try it
                              </a>
                            </Button>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </AnimatedItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimatedSection className="max-w-2xl">
            <h2 className="text-2xl font-bold sm:text-3xl">
              Have a problem like this we should build for?
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              If you&apos;ve got a recurring pain in your operation that you wish was 
              solved off-the-shelf, we&apos;d like to hear about it.
            </p>
            <div className="mt-8">
              <Button asChild size="lg" className="glow-cyan">
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
