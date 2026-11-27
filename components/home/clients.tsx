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
    <section className="border-y border-border py-[var(--space-7)]">
      <div className="container-site">
        <p className="text-muted-foreground max-w-xl">
          Twenty-five years across the largest enterprises and the smallest startups.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-x-10 gap-y-3">
          {clients.map((client) => (
            <span key={client} className="meta">
              {client}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
