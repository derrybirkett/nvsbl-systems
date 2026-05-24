import type { Metadata } from "next";
import { AnimatedSection } from "@/components/ui/motion";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of service for NVSBL.SYSTEMS.",
};

const sections = [
  {
    heading: "Services",
    body: "NVSBL.SYSTEMS provides strategy, design, and engineering services under separate written agreements. Use of this website does not constitute an engagement. No work begins until a statement of work is signed by both parties.",
  },
  {
    heading: "Intellectual property",
    body: "All content on this site — text, design, code — is owned by NVSBL.SYSTEMS unless otherwise noted. You may not reproduce or redistribute it without written permission.",
  },
  {
    heading: "No warranty",
    body: "This website is provided as-is. We make no representations about its accuracy, completeness, or fitness for any particular purpose.",
  },
  {
    heading: "Limitation of liability",
    body: "To the maximum extent permitted by law, NVSBL.SYSTEMS is not liable for any indirect, incidental, or consequential damages arising from your use of this site.",
  },
  {
    heading: "Governing law",
    body: "These terms are governed by the laws of Ireland. Any disputes shall be subject to the exclusive jurisdiction of the Irish courts.",
  },
  {
    heading: "Contact",
    body: "Questions about these terms should be directed to nvsbl@monospace.studio.",
  },
];

export default function TermsPage() {
  return (
    <div className="pt-24">
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <AnimatedSection>
            <h1 className="text-4xl font-bold tracking-tight">Terms of Service</h1>
            <p className="mt-4 text-sm text-muted-foreground">
              Last updated: May 2026
            </p>
          </AnimatedSection>

          <div className="mt-12 flex flex-col gap-10">
            {sections.map((section) => (
              <AnimatedSection key={section.heading}>
                <h2 className="text-lg font-semibold text-foreground">
                  {section.heading}
                </h2>
                <p className="mt-3 text-muted-foreground leading-relaxed">
                  {section.body}
                </p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
