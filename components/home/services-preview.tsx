import Link from "next/link";
import { Button } from "@/components/ui/button";

const services = [
  {
    title: "Strategy",
    description:
      "Decide what to build, what to buy, and what to orchestrate. Agentic readiness audits, vendor selection, reference architectures grounded in your existing stack.",
    href: "/services/strategy",
  },
  {
    title: "Design",
    description:
      "Model the work before the agents do it. Workflow design, tool and MCP catalogs, prompt-and-policy as versioned artifacts, eval design that survives production.",
    href: "/services/design",
  },
  {
    title: "Build",
    description:
      "Ship middleware that doesn't break under real load. Orchestration, memory, retrieval, auth, observability, guardrails — integrated into the systems you already run.",
    href: "/services/build",
  },
  {
    title: "Products",
    description:
      "NVSBL-built APIs and MCPs on nvsbl.dev. Productized solutions to problems we kept seeing in client work. Use them off the shelf, or have us build something just for you.",
    href: "/services/products",
  },
];

export function ServicesPreview() {
  return (
    <section className="py-[var(--space-9)]">
      <div className="container-site">
        <h2 className="meta">What We Do</h2>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
          {services.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className="group block h-full rounded-sm border border-border bg-card p-8 transition-colors duration-[var(--motion-fast)] hover:border-foreground"
            >
              <h3 className="text-[length:var(--type-h3)] text-foreground">
                {service.title}
              </h3>
              <p className="mt-2 text-muted-foreground">
                {service.description}
              </p>
              <div className="meta mt-4">Read more →</div>
            </Link>
          ))}
        </div>

        <div className="mt-12">
          <Button asChild variant="outline" size="lg">
            <Link href="/services">View All Services →</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
