"use client";

import { AnimatedSection } from "@/components/ui/motion";

const clients = [
  "Enterprise",
  "Government",
  "Series B",
  "Seed Stage",
  "Fortune 500",
  "Startups",
];

export function Clients() {
  return (
    <section className="border-y border-border bg-secondary/30 py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <AnimatedSection className="text-center">
          <p className="text-sm text-muted-foreground leading-relaxed max-w-xl mx-auto">
            Twenty-five years across the largest enterprises and the smallest startups.
          </p>
        </AnimatedSection>

        <AnimatedSection className="mt-10 overflow-hidden">
          <div className="flex animate-marquee items-center gap-16">
            {[...clients, ...clients].map((client, idx) => (
              <div
                key={`${client}-${idx}`}
                className="shrink-0 text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors"
              >
                {client}
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>

      <style jsx>{`
        @keyframes marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
