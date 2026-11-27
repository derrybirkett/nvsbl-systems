export function Thesis() {
  return (
    <section className="py-[var(--space-9)] bg-paper-pure">
      <div className="container-site">
        <div className="max-w-[var(--grid-prose-max)]">
          <h2 className="meta mb-8">The Thesis</h2>

          <p className="text-[length:var(--type-h2)] font-headline leading-[1.15] text-balance">
            Agents fail at integration. Not intelligence.
          </p>

          <div className="mt-8 space-y-6 text-[length:var(--type-lead)] text-ink-soft">
            <p>
              The hard part of an agent in production is never the model. The hard part 
              is auth that survives the third hop, retrieval that doesn&apos;t hallucinate, 
              memory that respects access controls, evals that catch the silent regressions, 
              and controls your operations team can actually understand.
            </p>

            <p>
              That layer — the middleware between model providers and the systems your 
              company already runs on — is where most agentic projects die. It&apos;s also 
              where we live.
            </p>

            <p className="text-foreground">
              NVSBL builds the layer underneath the agents. We make AI disappear into 
              your operations, the way a good database disappears into a working product.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
