const steps = [
  {
    number: "01",
    title: "Discover",
    description:
      "We learn the work before we automate it. Interviews, observations, an honest read of the current state, including what's already broken.",
  },
  {
    number: "02",
    title: "Define",
    description:
      "We frame the problem in one sentence and a success metric. If we can't, we go back to Discover.",
  },
  {
    number: "03",
    title: "Design",
    description:
      "We model the workflow, design the tool catalog, prototype prompts and evals as artifacts. Not vibes.",
  },
  {
    number: "04",
    title: "Deliver",
    description:
      "We ship into your stack, instrument it, and stay long enough to know it's working. Then we hand it off.",
  },
];

export function Process() {
  return (
    <section className="py-[var(--space-9)] bg-paper-pure">
      <div className="container-site">
        <h2 className="meta">How We Work</h2>
        <p className="mt-4 text-[length:var(--type-h2)] font-headline leading-[1.15] text-balance">
          The Double Diamond, applied to agents.
        </p>

        <div className="mt-[var(--space-7)] grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div key={step.number} className="border-t border-border pt-4">
              <div className="meta">{step.number}</div>
              <h3 className="mt-4 text-[length:var(--type-h3)] text-foreground">
                {step.title}
              </h3>
              <p className="mt-2 text-muted-foreground">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
