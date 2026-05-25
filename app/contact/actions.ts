"use server";

type SubmitResult =
  | { ok: true }
  | { ok: false; error: string };

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

  const webhookUrl = process.env.CONTACT_WEBHOOK_URL;
  if (!webhookUrl) {
    console.error("CONTACT_WEBHOOK_URL not configured — contact form submission dropped.");
    return { ok: false, error: "Contact form is not configured. Please email nvsbl@monospace.studio." };
  }

  try {
    const res = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...formData,
        submittedAt: new Date().toISOString(),
        source_page: "nvsbl.systems/contact",
      }),
    });
    if (!res.ok) {
      console.error("Contact webhook returned non-OK:", res.status, await res.text());
      return { ok: false, error: "Something went wrong. Please email us directly." };
    }
    return { ok: true };
  } catch (err) {
    console.error("Contact webhook failed:", err);
    return { ok: false, error: "Network error. Please email us directly." };
  }
}
