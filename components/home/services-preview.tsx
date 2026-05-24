"use client";

import Link from "next/link";
import { ArrowRight, Compass, PenTool, Hammer, Package } from "lucide-react";
import { AnimatedSection, StaggerContainer, AnimatedItem } from "@/components/ui/motion";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Compass,
    title: "Strategy",
    description:
      "Decide what to build, what to buy, and what to orchestrate. Agentic readiness audits, vendor selection, reference architectures grounded in your existing stack.",
    href: "/services/strategy",
  },
  {
    icon: PenTool,
    title: "Design",
    description:
      "Model the work before the agents do it. Workflow design, tool and MCP catalogs, prompt-and-policy as versioned artifacts, eval design that survives production.",
    href: "/services/design",
  },
  {
    icon: Hammer,
    title: "Build",
    description:
      "Ship middleware that doesn't break under real load. Orchestration, memory, retrieval, auth, observability, guardrails — integrated into the systems you already run.",
    href: "/services/build",
  },
  {
    icon: Package,
    title: "Products",
    description:
      "NVSBL-built APIs and MCPs on nvsbl.dev. Productized solutions to problems we kept seeing in client work. Use them off the shelf, or have us build something just for you.",
    href: "/services/products",
  },
];

export function ServicesPreview() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <AnimatedSection className="text-center">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-primary">
            What We Do
          </h2>
        </AnimatedSection>

        <StaggerContainer className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
          {services.map((service) => (
            <AnimatedItem key={service.title}>
              <Link
                href={service.href}
                className="group block h-full rounded-xl border border-border bg-card p-8 transition-all hover:border-primary/50 hover:bg-secondary/30"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                    <div className="mt-4 inline-flex items-center text-sm font-medium text-primary">
                      Read more
                      <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              </Link>
            </AnimatedItem>
          ))}
        </StaggerContainer>

        <AnimatedSection className="mt-12 text-center">
          <Button asChild variant="outline" size="lg">
            <Link href="/services">
              View All Services
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </AnimatedSection>
      </div>
    </section>
  );
}
