import Link from "next/link";
import { Wordmark } from "@/components/layout/header";
import { ThemeToggle } from "@/components/layout/theme-toggle";

const columns = [
  {
    title: "Services",
    links: [
      { label: "Strategy", href: "/services/strategy" },
      { label: "Design", href: "/services/design" },
      { label: "Build", href: "/services/build" },
      { label: "Products", href: "/services/products" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Approach", href: "/approach" },
      { label: "About", href: "/about" },
      { label: "Work", href: "/work" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Elsewhere",
    links: [
      { label: "GitHub", href: "https://github.com/derrybirkett/nvsbl-systems", external: true },
      { label: "LinkedIn", href: "https://linkedin.com/in/derrybirkett", external: true },
      { label: "monospace.studio", href: "https://monospace.studio", external: true },
    ],
  },
];

const linkClass =
  "text-[13px] text-muted-foreground transition-colors duration-[var(--motion-fast)] hover:text-foreground";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="container-site py-[var(--space-8)]">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Wordmark />
            <p className="mt-4 max-w-[28ch] text-[13px] text-muted-foreground">
              The layer underneath the agents. Twenty-five years of solution design, now applied to the
              agentic stack.
            </p>
            <p className="mt-4 text-[13px] text-brand">Good design is NVSBL.</p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="meta">{col.title}</h3>
              <ul className="mt-4 flex flex-col gap-3">
                {col.links.map((link) => (
                  <li key={link.href}>
                    {"external" in link && link.external ? (
                      <a href={link.href} target="_blank" rel="noopener noreferrer" className={linkClass}>
                        {link.label} ↗
                      </a>
                    ) : (
                      <Link href={link.href} className={linkClass}>
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col justify-between gap-4 border-t border-border pt-8 md:flex-row md:items-center">
          <p className="meta">
            &copy; {new Date().getFullYear()} NVSBL.SYSTEMS · A trademark of monospace.studio
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="meta hover:text-foreground">
              Privacy
            </Link>
            <Link href="/terms" className="meta hover:text-foreground">
              Terms
            </Link>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </footer>
  );
}
