"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Mail, Send, CheckCircle, Linkedin, Twitter, Github, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedSection, StaggerContainer, AnimatedItem } from "@/components/ui/motion";

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
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
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
    <main className="min-h-screen pt-24">
      {/* Hero */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <AnimatedSection>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Tell us about your problem.
            </h1>
            <p className="mt-6 text-xl text-muted-foreground leading-relaxed max-w-2xl">
              The fastest way to start is a thirty-minute discovery call. We&apos;ll 
              listen. If we&apos;re a fit, we&apos;ll tell you what an engagement would 
              look like. If we&apos;re not, we&apos;ll point you at someone who is.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Calendar booking */}
      <section className="pb-16 lg:pb-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <AnimatedSection>
            <div className="rounded-xl border border-border bg-card p-8 text-center">
              <div className="flex h-16 w-16 mx-auto items-center justify-center rounded-full bg-primary/10 text-primary mb-6">
                <Calendar className="h-8 w-8" />
              </div>
              <h2 className="text-xl font-semibold mb-2">Book a Discovery Call</h2>
              <p className="text-muted-foreground mb-6">
                Thirty minutes. We&apos;ll listen, ask questions, and tell you honestly whether we can help.
              </p>
              <Button 
                size="lg"
                className="gap-2 glow-cyan"
                data-cal-link="dbrktt/30min"
                data-cal-config='{"layout":"month_view","theme":"dark"}'
                onClick={openCalModal}
              >
                <Calendar className="h-4 w-4" />
                Schedule a Call
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Or send a note */}
      <section className="py-16 lg:py-24 bg-secondary/30">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="text-2xl font-bold sm:text-3xl mb-8">
              Or send us a note.
            </h2>
          </AnimatedSection>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="rounded-xl border border-border bg-card p-8"
          >
            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <CheckCircle className="h-8 w-8" />
                </div>
                <h3 className="mb-2 text-2xl font-semibold">
                  Thanks. We got your note.
                </h3>
                <p className="mb-8 text-muted-foreground">
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
                    <label htmlFor="name" className="mb-2 block text-sm font-medium">
                      Your name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full rounded-lg border bg-background px-4 py-3 transition-colors focus:outline-none focus:ring-1 ${
                        errors.name
                          ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                          : "border-border focus:border-primary focus:ring-primary"
                      }`}
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="mb-2 block text-sm font-medium">
                      Your email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full rounded-lg border bg-background px-4 py-3 transition-colors focus:outline-none focus:ring-1 ${
                        errors.email
                          ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                          : "border-border focus:border-primary focus:ring-primary"
                      }`}
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                    )}
                  </div>
                </div>

                {/* Company */}
                <div>
                  <label htmlFor="company" className="mb-2 block text-sm font-medium">
                    Your company <span className="text-muted-foreground">(optional)</span>
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-border bg-background px-4 py-3 transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="mb-2 block text-sm font-medium">
                    What you&apos;re trying to do *
                  </label>
                  <p className="mb-2 text-sm text-muted-foreground">
                    One paragraph is fine. Be specific about the workflow, not the model.
                  </p>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className={`w-full resize-none rounded-lg border bg-background px-4 py-3 transition-colors focus:outline-none focus:ring-1 ${
                      errors.message
                        ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                        : "border-border focus:border-primary focus:ring-primary"
                    }`}
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-500">{errors.message}</p>
                  )}
                </div>

                {/* Source */}
                <div>
                  <label htmlFor="source" className="mb-2 block text-sm font-medium">
                    How did you hear about us? <span className="text-muted-foreground">(optional)</span>
                  </label>
                  <input
                    type="text"
                    id="source"
                    name="source"
                    value={formData.source}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-border bg-background px-4 py-3 transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                </div>

                {/* Submit */}
                <Button
                  type="submit"
                  size="lg"
                  className="gap-2 glow-cyan"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="h-4 w-4 animate-spin rounded-full border-2 border-background border-t-transparent" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      Send
                    </>
                  )}
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      </section>

      {/* Contact info */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimatedItem>
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <a
                    href="mailto:hello@nvsbl.systems"
                    className="font-medium transition-colors hover:text-primary"
                  >
                    hello@nvsbl.systems
                  </a>
                </div>
              </div>
            </AnimatedItem>

            <AnimatedItem>
              <div>
                <p className="text-sm text-muted-foreground mb-3">Connect</p>
                <div className="flex gap-3">
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-lg border border-border transition-colors hover:border-primary/50 hover:text-primary"
                  >
                    <Linkedin className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-lg border border-border transition-colors hover:border-primary/50 hover:text-primary"
                  >
                    <Twitter className="h-5 w-5" />
                    <span className="sr-only">Twitter</span>
                  </a>
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-lg border border-border transition-colors hover:border-primary/50 hover:text-primary"
                  >
                    <Github className="h-5 w-5" />
                    <span className="sr-only">GitHub</span>
                  </a>
                </div>
              </div>
            </AnimatedItem>

            <AnimatedItem>
              <div>
                <p className="text-sm text-muted-foreground">Response time</p>
                <p className="font-medium">Within one business day</p>
              </div>
            </AnimatedItem>
          </StaggerContainer>
        </div>
      </section>
    </main>
  );
}
