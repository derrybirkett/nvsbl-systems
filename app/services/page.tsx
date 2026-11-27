import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Services — Strategy, Design, Build, Products",
  description:
    "Four ways we work with you, each grounded in twenty-five years of shipping enterprise systems.",
};

const services = [
  {
    title: "Strategy",
    slug: "strategy",
    duration: "Four to eight weeks, fixed price.",
    description:
      "For organizations deciding what to build with agents, what to buy, and what to orchestrate. Audits, reference architectures, vendor selection.",
  },
  {
    title: "Design",
    slug: "design",
    duration: "Four to ten weeks, often concurrent with Build.",
    description:
      "For teams who know they're building, but haven't modeled the work yet. Workflow design, tool and MCP catalogs, prompts and evals as artifacts.",
  },
  {
    title: "Build",
    slug: "build",
    duration: "Three to six months, milestone-based.",
    description:
      "For teams ready to ship into production. Custom middleware, integrations, deployment, observability, evals in CI.",
  },
  {
    title: "Products",
    slug: "products",
    duration: "Available now on nvsbl.dev.",
    description:
      "For teams who want a problem solved off the shelf. NVSBL-built APIs and MCPs. The Pain Point → PRD product is live now; more are in the pipeline.",
  },
];

export default function ServicesPage() {
  return (
    <div className="pt-[var(--space-8)]">
      {/* Hero */}
      <section className="py-[var(--space-9)]">
        <div className="container-site">
          <div className="max-w-3xl">
            <h1 className="text-[length:var(--type-h1)] leading-[1.15]">
              Four motions. One methodology.
            </h1>
            <p className="mt-6 text-xl text-ink-soft leading-relaxed">
              We work in four ways, and most engagements use more than one. The motion 
              you start with depends on where you are in the Double Diamond when we meet.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-[var(--space-9)] border-y border-border bg-paper-pure">
        <div className="container-site">
          <div className="flex flex-col">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group block border-t border-border py-8 transition-colors duration-[var(--motion-fast)] last:border-b hover:border-foreground"
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                  <div>
                    <h2 className="text-[length:var(--type-h2)] leading-[1.15] text-foreground">
                      {service.title}
                    </h2>
                    <p className="meta mt-2">
                      {service.duration}
                    </p>
                    <p className="mt-3 text-ink-soft leading-relaxed max-w-2xl">
                      {service.description}
                    </p>
                  </div>
                  <div className="text-sm text-foreground lg:shrink-0">
                    Read more →
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-[var(--space-9)]">
        <div className="container-site">
          <div className="max-w-2xl">
            <h2 className="text-[length:var(--type-h2)] leading-[1.15]">
              Not sure where to start?
            </h2>
            <p className="mt-4 text-ink-soft leading-relaxed">
              Most engagements begin with a thirty-minute discovery call. We&apos;ll tell 
              you which motion fits, what the shape of the engagement looks like, and 
              an honest estimate of cost. If we&apos;re not the right team, we&apos;ll point 
              you at someone who is.
            </p>
            <div className="mt-8">
              <Button asChild size="lg">
                <Link href="/contact">
                  Book a call →
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
