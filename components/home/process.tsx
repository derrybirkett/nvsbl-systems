"use client";

import { AnimatedSection, StaggerContainer, AnimatedItem } from "@/components/ui/motion";

const steps = [
  {
    number: "01",
    title: "Discover",
    description:
      "We learn the work before we automate it. Interviews, observations, an honest read of the current state, including what's already broken.",
  },
  {
    number: "02",
    title: "Define",
    description:
      "We frame the problem in one sentence and a success metric. If we can't, we go back to Discover.",
  },
  {
    number: "03",
    title: "Design",
    description:
      "We model the workflow, design the tool catalog, prototype prompts and evals as artifacts. Not vibes.",
  },
  {
    number: "04",
    title: "Deliver",
    description:
      "We ship into your stack, instrument it, and stay long enough to know it's working. Then we hand it off.",
  },
];

export function Process() {
  return (
    <section className="py-24 lg:py-32 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <AnimatedSection className="text-center">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-primary">
            How We Work
          </h2>
          <p className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl text-balance">
            The Double Diamond, applied to agents.
          </p>
        </AnimatedSection>

        <StaggerContainer className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, idx) => (
            <AnimatedItem key={step.number}>
              <div className="relative">
                {/* Connector line (hidden on last item) */}
                {idx < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-px bg-gradient-to-r from-border to-transparent" />
                )}

                <div className="text-4xl font-bold text-primary/20 font-mono">
                  {step.number}
                </div>
                <h3 className="mt-4 text-xl font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="mt-2 text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </AnimatedItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
