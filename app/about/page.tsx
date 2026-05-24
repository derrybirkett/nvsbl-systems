import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedSection, StaggerContainer, AnimatedItem } from "@/components/ui/motion";

export const metadata: Metadata = {
  title: "About — NVSBL.SYSTEMS",
  description:
    "A small, senior team building the agentic middleware layer. Founded by Derry Birkett.",
};

const beliefs = [
  "The best AI is invisible.",
  "Agents fail at integration, not intelligence.",
  "Methodology is more durable than tooling.",
  "Senior engineers are worth their cost.",
  "Public products are the only honest case studies.",
];

export default function AboutPage() {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <AnimatedSection>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              We&apos;re a small team that&apos;s been doing this a long time.
            </h1>
          </AnimatedSection>
        </div>
      </section>

      {/* Story */}
      <section className="pb-16 lg:pb-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <AnimatedSection className="prose prose-lg prose-invert max-w-none">
            <p className="text-muted-foreground leading-relaxed">
              NVSBL was founded by Derry Birkett after twenty-five years designing 
              and shipping software for organizations of every size. The agentic era looks new from the 
              outside. From the inside, the engineering hasn&apos;t actually changed much: 
              the systems that survive are the ones designed by people who&apos;ve watched 
              a lot of systems fall over.
            </p>
            
            <p className="mt-8 text-muted-foreground leading-relaxed">
              We started NVSBL because most agentic agencies in 2026 don&apos;t have that 
              pattern recognition. They have prompts, and they have enthusiasm, and 
              they&apos;re learning in public on their clients&apos; time. That isn&apos;t the 
              team you want when you&apos;re trying to put an agent in front of a real 
              customer or behind a real workflow. The team you want is the one that 
              has shipped, recovered, and shipped again.
            </p>
            
            <p className="mt-8 text-muted-foreground leading-relaxed">
              We&apos;re a small operation by design. A founder who still writes code and 
              ships pixels, and a collective of senior collaborators we bring in 
              for the work that fits them. We don&apos;t scale by hiring; we scale by being 
              deliberate about what we take on and by productizing the patterns we see 
              often enough to be worth solving once.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Founder */}
      <section className="py-16 lg:py-24 bg-secondary/30">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-primary mb-8">
              Founder
            </h2>
            <div className="flex flex-col md:flex-row gap-8 items-start">
              {/* Avatar placeholder */}
              <div className="h-32 w-32 shrink-0 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 border border-border" />
              <div>
                <h3 className="text-2xl font-bold text-foreground">
                  Derry Birkett
                </h3>
                <p className="mt-1 text-primary font-medium">
                  Designer, builder, founder.
                </p>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Twenty-five years across enterprise software, design systems, 
                  and production infrastructure. The kind of design engineer who still 
                  ships code and pixels.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Collaborators placeholder */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-primary mb-8">
              Collaborators
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              A collective of senior engineers, designers, and domain experts 
              we bring in for the work that fits them. Details coming soon.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* What we believe */}
      <section className="py-16 lg:py-24 bg-secondary/30">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-primary mb-8">
              What We Believe
            </h2>
          </AnimatedSection>

          <StaggerContainer className="flex flex-col gap-4">
            {beliefs.map((belief) => (
              <AnimatedItem key={belief}>
                <p className="text-xl font-medium text-foreground">
                  {belief}
                </p>
              </AnimatedItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <AnimatedSection className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="glow-cyan">
              <Link href="/contact">
                Want to work with us?
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="mailto:nvsbl@monospace.studio">
                <Mail className="mr-2 h-4 w-4" />
                Want to work for us?
              </Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
