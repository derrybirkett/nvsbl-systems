import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="mx-auto max-w-xl px-6 text-center">
        <h1 className="text-6xl font-bold text-foreground mb-4">Not here.</h1>
        <p className="text-lg text-muted-foreground mb-8">
          The page you&apos;re looking for isn&apos;t where you thought it was. 
          Try the home page, the services overview, or book a call and we&apos;ll 
          find what you need.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button asChild className="glow-cyan">
            <Link href="/">
              Home
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/services">Services</Link>
          </Button>
          <Button asChild variant="ghost">
            <Link href="/contact">Book a call</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
