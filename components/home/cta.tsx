import Link from "next/link";
import { Button } from "@/components/ui/button";

export function CTA() {
  return (
    <section className="py-[var(--space-9)]">
      <div className="container-site">
        <div className="border-t border-border pt-[var(--space-7)]">
          <h2 className="text-[length:var(--type-h2)] leading-[1.15] text-balance">
            Have a hard <em className="italic text-brand">agentic</em> problem?
          </h2>
          <p className="mt-6 max-w-[var(--grid-prose-max)] text-[length:var(--type-lead)] text-ink-soft text-pretty">
            Book a thirty-minute discovery call — we&apos;ll tell you whether we 
            can help and, if not, who can.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row sm:items-center gap-4">
            <Button asChild size="lg">
              <Link href="/contact">Book a call →</Link>
            </Button>
            <Button asChild variant="ghost" size="lg">
              <Link href="mailto:nvsbl@monospace.studio">Email us ↗</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
