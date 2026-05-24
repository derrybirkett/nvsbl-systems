import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Compass, PenTool, Hammer, Package } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedSection, StaggerContainer, AnimatedItem } from "@/components/ui/motion";

export const metadata: Metadata = {
  title: "Services — Strategy, Design, Build, Products",
  description:
    "Four ways we work with you, each grounded in twenty-five years of shipping enterprise systems.",
};

const services = [
  {
    icon: Compass,
    title: "Strategy",
    slug: "strategy",
    duration: "Four to eight weeks, fixed price.",
    description:
      "For organizations deciding what to build with agents, what to buy, and what to orchestrate. Audits, reference architectures, vendor selection.",
  },
  {
    icon: PenTool,
    title: "Design",
    slug: "design",
    duration: "Four to ten weeks, often concurrent with Build.",
    description:
      "For teams who know they're building, but haven't modeled the work yet. Workflow design, tool and MCP catalogs, prompts and evals as artifacts.",
  },
  {
    icon: Hammer,
    title: "Build",
    slug: "build",
    duration: "Three to six months, milestone-based.",
    description:
      "For teams ready to ship into production. Custom middleware, integrations, deployment, observability, evals in CI.",
  },
  {
    icon: Package,
    title: "Products",
    slug: "products",
    duration: "Available now on nvsbl.dev.",
    description:
      "For teams who want a problem solved off the shelf. NVSBL-built APIs and MCPs. The Pain Point → PRD product is live now; more are in the pipeline.",
  },
];

export default function ServicesPage() {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimatedSection className="max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Four motions. One methodology.
            </h1>
            <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
              We work in four ways, and most engagements use more than one. The motion 
              you start with depends on where you are in the Double Diamond when we meet.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16 lg:py-24 bg-secondary/30">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <StaggerContainer className="flex flex-col gap-8">
            {services.map((service) => (
              <AnimatedItem key={service.slug}>
                <Link
                  href={`/services/${service.slug}`}
                  className="group block rounded-xl border border-border bg-card p-8 transition-all hover:border-primary/50"
                >
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                    <div className="flex items-start gap-4 lg:gap-6">
                      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                        <service.icon className="h-7 w-7" />
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                          {service.title}
                        </h2>
                        <p className="mt-1 text-sm text-primary font-medium">
                          {service.duration}
                        </p>
                        <p className="mt-3 text-muted-foreground leading-relaxed max-w-2xl">
                          {service.description}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center text-sm font-medium text-primary lg:shrink-0">
                      Read more
                      <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
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
              Not sure where to start?
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Most engagements begin with a thirty-minute discovery call. We&apos;ll tell 
              you which motion fits, what the shape of the engagement looks like, and 
              an honest estimate of cost. If we&apos;re not the right team, we&apos;ll point 
              you at someone who is.
            </p>
            <div className="mt-8">
              <Button asChild size="lg" className="glow-cyan">
                <Link href="/contact">
                  Book a call
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
