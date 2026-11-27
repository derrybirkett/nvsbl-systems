import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="container-site pt-[var(--space-9)] pb-[var(--space-8)]">
      <h1 className="text-[length:var(--type-h1)] leading-[1.15] text-foreground mb-4">Not here.</h1>
      <p className="max-w-[var(--grid-prose-max)] text-[length:var(--type-lead)] text-ink-soft mb-8">
        The page you&apos;re looking for isn&apos;t where you thought it was. 
        Try the home page, the services overview, or book a call and we&apos;ll 
        find what you need.
      </p>
      <div className="flex flex-col sm:flex-row sm:items-center gap-4">
        <Button asChild>
          <Link href="/">Home →</Link>
        </Button>
        <Button asChild variant="outline">
          <Link href="/services">Services</Link>
        </Button>
        <Button asChild variant="ghost">
          <Link href="/contact">Book a call</Link>
        </Button>
      </div>
    </div>
  );
}
