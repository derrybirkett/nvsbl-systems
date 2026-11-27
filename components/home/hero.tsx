import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section>
      <div className="container-site pt-[var(--space-9)] pb-[var(--space-8)]">
        <p className="meta">Agentic middleware for organizations that ship.</p>

        <h1 className="mt-6 text-[length:var(--type-h1)] leading-[1.15] text-balance">
          The best AI is <em className="italic text-brand">invisible.</em>
        </h1>

        <p className="mt-6 max-w-[var(--grid-prose-max)] text-[length:var(--type-lead)] text-ink-soft text-pretty">
          We design, build, and productize the connective tissue that lets agentic 
          systems do real work in real companies. Twenty-five years of solution 
          design, now turned on the agentic stack.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row sm:items-center gap-4">
          <Button asChild size="lg">
            <Link href="/contact">Book a discovery call →</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/work">See the work</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
