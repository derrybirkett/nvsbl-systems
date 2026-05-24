"use client";

import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";
import { AnimatedSection } from "@/components/ui/motion";
import { Button } from "@/components/ui/button";

export function CTA() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <AnimatedSection>
          <div className="relative overflow-hidden rounded-2xl gradient-border">
            <div className="relative bg-card px-8 py-16 sm:px-16 sm:py-24">
              {/* Background elements */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

              <div className="relative z-10 text-center">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-balance">
                  Have a hard agentic problem?
                </h2>
                <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground text-pretty">
                  Book a thirty-minute discovery call — we&apos;ll tell you whether we 
                  can help and, if not, who can.
                </p>
                <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Button asChild size="lg" className="glow-cyan">
                    <Link href="/contact">
                      Book a call
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button asChild variant="ghost" size="lg">
                    <Link href="mailto:hello@nvsbl.systems">
                      <Mail className="mr-2 h-4 w-4" />
                      Email us
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
