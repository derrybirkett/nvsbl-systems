"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { submitContactForm } from "./actions";

interface FormData {
  name: string;
  email: string;
  company: string;
  message: string;
  source: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    company: "",
    message: "",
    source: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  // Load Cal.com embed script
  useEffect(() => {
    // Check if script already exists
    if (document.querySelector('script[src="https://app.cal.com/embed/embed.js"]')) {
      return;
    }

    // Load the script
    const script = document.createElement("script");
    script.src = "https://app.cal.com/embed/embed.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const openCalModal = () => {
    // Open Cal.com in a new tab as a reliable fallback
    window.open("https://cal.com/dbrktt/30min", "_blank");
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Please tell us about your project";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitError(null);
    const result = await submitContactForm(formData);
    setIsSubmitting(false);
    if (result.ok) {
      setIsSubmitted(true);
    } else {
      setSubmitError(result.error);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <main className="min-h-screen pt-[var(--space-8)]">
      {/* Hero */}
      <section className="py-[var(--space-9)]">
        <div className="container-site">
          <div>
            <h1 className="text-[length:var(--type-h1)] leading-[1.15]">
              Tell us about your problem.
            </h1>
            <p className="mt-6 text-xl text-ink-soft leading-relaxed max-w-2xl">
              The fastest way to start is a thirty-minute discovery call. We&apos;ll 
              listen. If we&apos;re a fit, we&apos;ll tell you what an engagement would 
              look like. If we&apos;re not, we&apos;ll point you at someone who is.
            </p>
          </div>
        </div>
      </section>

      {/* Calendar booking */}
      <section className="pb-[var(--space-9)]">
        <div className="container-site">
          <div>
            <div className="rounded-sm border border-border bg-card p-8 text-center">
              <h2 className="text-[length:var(--type-h3)] mb-2">Book a Discovery Call</h2>
              <p className="text-ink-soft mb-6">
                Thirty minutes. We&apos;ll listen, ask questions, and tell you honestly whether we can help.
              </p>
              <Button 
                size="lg"
                className="gap-2"
                data-cal-link="dbrktt/30min"
                data-cal-config='{"layout":"month_view","theme":"auto"}'
                onClick={openCalModal}
              >
                Schedule a Call →
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Or send a note */}
      <section className="py-[var(--space-9)] border-y border-border bg-paper-pure">
        <div className="container-site">
          <div>
            <h2 className="text-[length:var(--type-h2)] leading-[1.15] mb-8">
              Or send us a note.
            </h2>
          </div>

          <div className="rounded-sm border border-border bg-card p-8">
            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <h3 className="mb-2 text-[length:var(--type-h3)]">
                  Thanks. We got your note.
                </h3>
                <p className="mb-8 text-ink-soft">
                  We&apos;ll be in touch within one business day. If your problem 
                  is urgent, book directly above.
                </p>
                <Button
                  variant="outline"
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({
                      name: "",
                      email: "",
                      company: "",
                      message: "",
                      source: "",
                    });
                  }}
                >
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="meta mb-2 block">
                      Your name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full rounded-sm border bg-background px-4 py-3 transition-colors duration-[var(--motion-fast)] focus:outline-none focus:ring-1 ${
                        errors.name
                          ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                          : "border-border focus:border-foreground focus:ring-foreground"
                      }`}
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="meta mb-2 block">
                      Your email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full rounded-sm border bg-background px-4 py-3 transition-colors duration-[var(--motion-fast)] focus:outline-none focus:ring-1 ${
                        errors.email
                          ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                          : "border-border focus:border-foreground focus:ring-foreground"
                      }`}
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                    )}
                  </div>
                </div>

                {/* Company */}
                <div>
                  <label htmlFor="company" className="meta mb-2 block">
                    Your company <span>(optional)</span>
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full rounded-sm border border-border bg-background px-4 py-3 transition-colors duration-[var(--motion-fast)] focus:border-foreground focus:outline-none focus:ring-1 focus:ring-foreground"
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="meta mb-2 block">
                    What you&apos;re trying to do *
                  </label>
                  <p className="mb-2 text-sm text-ink-soft">
                    One paragraph is fine. Be specific about the workflow, not the model.
                  </p>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className={`resize-none w-full rounded-sm border bg-background px-4 py-3 transition-colors duration-[var(--motion-fast)] focus:outline-none focus:ring-1 ${
                      errors.message
                        ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                        : "border-border focus:border-foreground focus:ring-foreground"
                    }`}
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-500">{errors.message}</p>
                  )}
                </div>

                {/* Source */}
                <div>
                  <label htmlFor="source" className="meta mb-2 block">
                    How did you hear about us? <span>(optional)</span>
                  </label>
                  <input
                    type="text"
                    id="source"
                    name="source"
                    value={formData.source}
                    onChange={handleChange}
                    className="w-full rounded-sm border border-border bg-background px-4 py-3 transition-colors duration-[var(--motion-fast)] focus:border-foreground focus:outline-none focus:ring-1 focus:ring-foreground"
                  />
                </div>

                {submitError && (
                  <div className="rounded-sm border border-red-500/50 bg-red-500/10 px-4 py-3 text-sm text-red-400">
                    {submitError}
                  </div>
                )}

                {/* Submit */}
                <Button
                  type="submit"
                  size="lg"
                  className="gap-2"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="h-4 w-4 animate-spin rounded-full border-2 border-background border-t-transparent" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send →
                    </>
                  )}
                </Button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Contact info */}
      <section className="py-[var(--space-9)]">
        <div className="container-site">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div>
                <div>
                  <p className="meta">Email</p>
                  <a
                    href="mailto:nvsbl@monospace.studio"
                    className="prose-link"
                  >
                    nvsbl@monospace.studio
                  </a>
                </div>
              </div>
            </div>

            <div>
              <div>
                <p className="meta mb-3">Connect</p>
                <div className="flex gap-4">
                  <a
                    href="https://linkedin.com/in/derrybirkett"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="prose-link"
                  >
                    LinkedIn ↗
                  </a>
                  <a
                    href="https://twitter.com/derrybirkett"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="prose-link"
                  >
                    Twitter ↗
                  </a>
                  <a
                    href="https://github.com/derrybirkett"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="prose-link"
                  >
                    GitHub ↗
                  </a>
                </div>
              </div>
            </div>

            <div>
              <div>
                <p className="meta">Response time</p>
                <p>Within one business day</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
