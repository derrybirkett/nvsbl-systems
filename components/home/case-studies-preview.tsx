import Link from "next/link";
import { Button } from "@/components/ui/button";

const products = [
  {
    title: "NVSBL.DEV",
    description:
      "An API of pain points for your middleware. The foundation everything else is built on.",
    slug: "nvsbl-dev",
  },
  {
    title: "NVSBL.APP",
    description:
      "Hacker News, watched by an agent. Classified and filed in Linear.",
    slug: "nvsbl-app",
  },
  {
    title: "Sift™",
    description:
      "What should I build next, and why? An opinionated layer for PMs and indie builders.",
    slug: null,
    placeholder: true,
  },
];

export function CaseStudiesPreview() {
  return (
    <section className="py-[var(--space-9)]">
      <div className="container-site">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <h2 className="meta">Selected Work</h2>
            <p className="mt-4 text-[length:var(--type-h2)] font-headline leading-[1.15] text-balance">
              Built by us, for the world.
            </p>
            <p className="mt-4 text-muted-foreground max-w-[var(--grid-prose-max)]">
              Each NVSBL product began as a pattern we kept seeing in client work. 
              We solved it once, properly, and then made it available.
            </p>
          </div>
          <Button asChild variant="outline">
            <Link href="/work">View All →</Link>
          </Button>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {products.map((product) => (
            <Link
              key={product.title}
              href={product.placeholder ? "#" : `/work/${product.slug}`}
              className={`group flex flex-col h-full rounded-sm border border-border bg-card p-6 transition-colors duration-[var(--motion-fast)] ${product.placeholder ? "pointer-events-none" : "hover:border-foreground"}`}
            >
              {product.placeholder && <span className="meta">Coming Soon</span>}

              <h3 className="mt-2 text-[length:var(--type-h3)] text-foreground">
                {product.title}
              </h3>
              <p className="mt-2 text-muted-foreground flex-1">
                {product.description}
              </p>

              {!product.placeholder && (
                <div className="meta mt-4">Read the case study →</div>
              )}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
