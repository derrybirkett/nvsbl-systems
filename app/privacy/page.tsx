import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for NVSBL.SYSTEMS.",
};

const sections = [
  {
    heading: "What we collect",
    body: "When you contact us through the site, we collect the name, email address, and message content you submit. We use Vercel Analytics to collect anonymous, aggregate usage data — no cookies, no cross-site tracking, no personally identifiable information.",
  },
  {
    heading: "How we use it",
    body: "Contact form submissions are used solely to respond to your inquiry. We do not sell, rent, or share your information with third parties for marketing purposes.",
  },
  {
    heading: "Data retention",
    body: "We retain contact form submissions for as long as necessary to manage the business relationship. You can request deletion at any time by emailing nvsbl@monospace.studio.",
  },
  {
    heading: "Third-party services",
    body: "This site is hosted on Vercel. Analytics are provided by Vercel Analytics. Neither service sells your data. See vercel.com/legal/privacy-policy for Vercel's full policy.",
  },
  {
    heading: "Your rights",
    body: "You may request access to, correction of, or deletion of any personal data we hold about you. Contact nvsbl@monospace.studio.",
  },
  {
    heading: "Changes",
    body: "We may update this policy from time to time. The date at the bottom of this page reflects the most recent revision.",
  },
];

export default function PrivacyPage() {
  return (
    <div className="pt-[var(--space-8)]">
      <section className="py-[var(--space-9)]">
        <div className="container-site">
          <div>
            <h1 className="text-[length:var(--type-h1)] leading-[1.15]">Privacy Policy</h1>
            <p className="meta mt-4">
              Last updated: May 2026
            </p>
          </div>

          <div className="mt-12 flex max-w-[var(--grid-prose-max)] flex-col gap-10">
            {sections.map((section) => (
              <div key={section.heading}>
                <h2 className="text-[length:var(--type-h3)] text-foreground">
                  {section.heading}
                </h2>
                <p className="mt-3 text-ink-soft leading-relaxed">
                  {section.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
