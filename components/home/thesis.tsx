"use client";

import { AnimatedSection } from "@/components/ui/motion";

export function Thesis() {
  return (
    <section className="py-24 lg:py-32 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <AnimatedSection className="max-w-4xl mx-auto">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-primary mb-8">
            The Thesis
          </h2>
          
          <p className="text-3xl font-bold tracking-tight sm:text-4xl text-balance">
            Agents fail at integration. Not intelligence.
          </p>
          
          <div className="mt-8 space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              The hard part of an agent in production is never the model. The hard part 
              is auth that survives the third hop, retrieval that doesn&apos;t hallucinate, 
              memory that respects access controls, evals that catch the silent regressions, 
              and controls your operations team can actually understand.
            </p>
            
            <p>
              That layer — the middleware between model providers and the systems your 
              company already runs on — is where most agentic projects die. It&apos;s also 
              where we live.
            </p>
            
            <p className="text-foreground font-medium">
              NVSBL builds the layer underneath the agents. We make AI disappear into 
              your operations, the way a good database disappears into a working product.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
