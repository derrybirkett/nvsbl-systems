"use server";

import { Resend } from "resend";

type SubmitResult =
  | { ok: true }
  | { ok: false; error: string };

const TO_ADDRESS = process.env.CONTACT_TO_ADDRESS ?? "nvsbl@monospace.studio";
const FROM_ADDRESS = process.env.CONTACT_FROM_ADDRESS ?? "NVSBL.SYSTEMS <onboarding@resend.dev>";

function escapeHtml(str: string) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function submitContactForm(formData: {
  name: string;
  email: string;
  company: string;
  message: string;
  source: string;
}): Promise<SubmitResult> {
  if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
    return { ok: false, error: "Missing required fields." };
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
    return { ok: false, error: "Invalid email." };
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY not configured — contact form submission dropped.");
    return {
      ok: false,
      error: "Contact form is not configured. Please email nvsbl@monospace.studio directly.",
    };
  }

  const resend = new Resend(apiKey);

  const subject = `[NVSBL.SYSTEMS] New enquiry from ${formData.name}`;
  const lines = [
    `Name: ${formData.name}`,
    `Email: ${formData.email}`,
    formData.company ? `Company: ${formData.company}` : null,
    formData.source ? `Source: ${formData.source}` : null,
    "",
    "Message:",
    formData.message,
  ].filter(Boolean) as string[];

  const html = `
    <div style="font-family: ui-monospace, monospace; font-size: 14px; line-height: 1.6;">
      <h2 style="margin: 0 0 16px;">New enquiry via nvsbl.systems/contact</h2>
      <p><strong>Name:</strong> ${escapeHtml(formData.name)}</p>
      <p><strong>Email:</strong> <a href="mailto:${escapeHtml(formData.email)}">${escapeHtml(formData.email)}</a></p>
      ${formData.company ? `<p><strong>Company:</strong> ${escapeHtml(formData.company)}</p>` : ""}
      ${formData.source ? `<p><strong>Source:</strong> ${escapeHtml(formData.source)}</p>` : ""}
      <p><strong>Message:</strong></p>
      <pre style="white-space: pre-wrap; background: #f5f5f5; padding: 12px; border-radius: 4px;">${escapeHtml(formData.message)}</pre>
    </div>
  `;

  try {
    const { error } = await resend.emails.send({
      from: FROM_ADDRESS,
      to: TO_ADDRESS,
      replyTo: formData.email,
      subject,
      text: lines.join("\n"),
      html,
    });
    if (error) {
      console.error("Resend send failed:", error);
      return { ok: false, error: "Something went wrong. Please email us directly." };
    }
    return { ok: true };
  } catch (err) {
    console.error("Contact form send threw:", err);
    return { ok: false, error: "Network error. Please email us directly." };
  }
}
