import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const footerLinks = {
  services: [
    { label: "Strategy", href: "/services/strategy" },
    { label: "Design", href: "/services/design" },
    { label: "Build", href: "/services/build" },
    { label: "Products", href: "/services/products" },
  ],
  company: [
    { label: "Approach", href: "/approach" },
    { label: "About", href: "/about" },
    { label: "Work", href: "/work" },
  ],
  connect: [
    { label: "Contact", href: "/contact" },
    { label: "LinkedIn", href: "https://linkedin.com/in/derrybirkett", external: true },
    { label: "Twitter / X", href: "https://twitter.com/derrybirkett", external: true },
    { label: "GitHub", href: "https://github.com/derrybirkett", external: true },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3">
              <div className="h-4 w-4 bg-foreground" aria-hidden="true" />
              <span className="font-mono text-sm font-medium tracking-tight">
                NVSBL.SYSTEMS
              </span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              The layer underneath the agents. Twenty-five years of solution 
              design, now applied to the agentic stack.
            </p>
            <p className="mt-4 text-sm font-medium text-primary">
              Good Design is NVSBL.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              Services
            </h3>
            <ul className="mt-4 flex flex-col gap-3">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              Company
            </h3>
            <ul className="mt-4 flex flex-col gap-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              Connect
            </h3>
            <ul className="mt-4 flex flex-col gap-3">
              {footerLinks.connect.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
                    {...("external" in link && link.external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                  >
                    {link.label}
                    {"external" in link && link.external && (
                      <ArrowUpRight className="h-3 w-3" />
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 md:flex-row">
          <div className="flex items-center gap-4">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} NVSBL.SYSTEMS
            </p>
            {/* Black square mark */}
            <div className="h-3 w-3 bg-foreground" aria-hidden="true" />
            <p className="text-sm text-muted-foreground">
              A project of{" "}
              <a
                href="https://monospace.studio"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-foreground"
              >
                Monospace.Studio
              </a>
            </p>
          </div>
          <div className="flex gap-6">
            <Link
              href="/privacy"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
