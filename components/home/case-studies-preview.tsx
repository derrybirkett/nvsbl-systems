"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { AnimatedSection, StaggerContainer, AnimatedItem } from "@/components/ui/motion";
import { Button } from "@/components/ui/button";

const products = [
  {
    title: "NVSBL.DEV",
    description:
      "An API of pain points for your middleware. The foundation everything else is built on.",
    slug: "nvsbl-dev",
    gradient: "from-primary/20 to-accent/20",
  },
  {
    title: "NVSBL.APP",
    description:
      "Hacker News, watched by an agent. Classified and filed in Linear.",
    slug: "nvsbl-app",
    gradient: "from-accent/20 to-primary/20",
  },
  {
    title: "Sift™",
    description:
      "What should I build next, and why? An opinionated layer for PMs and indie builders.",
    slug: null,
    gradient: "from-primary/20 to-accent/20",
    placeholder: true,
  },
];

export function CaseStudiesPreview() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <AnimatedSection className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-primary">
              Selected Work
            </h2>
            <p className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl text-balance">
              Built by us, for the world.
            </p>
            <p className="mt-4 text-muted-foreground max-w-2xl">
              Each NVSBL product began as a pattern we kept seeing in client work. 
              We solved it once, properly, and then made it available.
            </p>
          </div>
          <Button asChild variant="outline">
            <Link href="/work">
              View All
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </AnimatedSection>

        <StaggerContainer className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {products.map((product) => (
            <AnimatedItem key={product.title}>
              <Link
                href={product.placeholder ? "#" : `/work/${product.slug}`}
                className={`group flex flex-col h-full ${product.placeholder ? "pointer-events-none" : ""}`}
              >
                {/* Image placeholder with gradient */}
                <div
                  className={`aspect-[16/10] rounded-xl bg-gradient-to-br ${product.gradient} border border-border relative overflow-hidden`}
                >
                  <div className="absolute inset-0 bg-grid opacity-30" />
                  {product.placeholder && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-muted-foreground/50 text-sm font-medium">
                        Coming Soon
                      </span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="mt-6 flex-1 flex flex-col">
                  <div>
                    <h3 className={`text-xl font-semibold text-foreground ${!product.placeholder ? "group-hover:text-primary" : ""} transition-colors`}>
                      {product.title}
                    </h3>
                    {"subtitle" in product && product.subtitle && (
                      <p className="text-sm text-muted-foreground">
                        {product.subtitle}
                      </p>
                    )}
                  </div>
                  <p className="mt-2 text-muted-foreground leading-relaxed flex-1">
                    {product.description}
                  </p>

                  {!product.placeholder && (
                    <div className="mt-4 inline-flex items-center text-sm font-medium text-primary">
                      Read the case study
                      <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  )}
                </div>
              </Link>
            </AnimatedItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
