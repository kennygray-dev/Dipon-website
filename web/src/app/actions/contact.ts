"use server";

import { Resend } from "resend";
import type { ContactState } from "@/lib/contact";
import { looksLikeSpam, submittedTooFast } from "@/lib/spam";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function clean(value: FormDataEntryValue | null): string {
  return typeof value === "string" ? value.trim() : "";
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function submitContact(
  _prevState: ContactState,
  formData: FormData
): Promise<ContactState> {
  // Honeypot: a hidden field real users never see. If it's filled, it's a bot —
  // pretend everything worked so the bot moves on without learning anything.
  if (clean(formData.get("company"))) {
    return { status: "success", message: "Thanks — we'll be in touch shortly." };
  }

  const name = clean(formData.get("name"));
  const email = clean(formData.get("email"));
  const phone = clean(formData.get("phone"));
  const service = clean(formData.get("service"));
  const message = clean(formData.get("message"));

  // Silently discard bot / lead-gen spam: submitted implausibly fast, or full of
  // marketing buzzwords. Return "success" so the bot moves on and learns nothing.
  if (submittedTooFast(clean(formData.get("t"))) || looksLikeSpam({ name, service, message })) {
    console.warn("[contact] dropped suspected spam:", { name, email });
    return { status: "success", message: "Thanks — we'll be in touch shortly." };
  }

  const errors: ContactState["errors"] = {};
  if (!name) errors.name = "Please enter your name.";
  if (!email) errors.email = "Please enter your email.";
  else if (!EMAIL_RE.test(email)) errors.email = "Please enter a valid email address.";
  if (!service) errors.service = "Please select a service.";
  if (!message) errors.message = "Please tell us a little about your project.";

  if (Object.keys(errors).length > 0) {
    return { status: "error", message: "Please check the highlighted fields.", errors };
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  // Resend's shared sender works with no domain verification — fine until the
  // DIPON domain is verified, at which point set CONTACT_FROM_EMAIL to it.
  const from = process.env.CONTACT_FROM_EMAIL || "DIPON Website <onboarding@resend.dev>";

  if (!apiKey || !to) {
    console.error(
      "[contact] Missing config: set RESEND_API_KEY and CONTACT_TO_EMAIL in .env.local"
    );
    return {
      status: "error",
      message: "The contact form isn't fully set up yet. Please email us directly for now.",
    };
  }

  const resend = new Resend(apiKey);

  try {
    const { error } = await resend.emails.send({
      from,
      to: [to],
      replyTo: email,
      subject: `New enquiry: ${service} — ${name}`,
      text: [
        `Name:    ${name}`,
        `Email:   ${email}`,
        `Phone:   ${phone || "—"}`,
        `Service: ${service}`,
        "",
        "Message:",
        message,
      ].join("\n"),
      html: `
        <h2 style="margin:0 0 16px;font-family:sans-serif;">New website enquiry</h2>
        <table style="font-family:sans-serif;font-size:14px;line-height:1.6;border-collapse:collapse;">
          <tr><td style="padding:2px 12px 2px 0;color:#667;"><strong>Name</strong></td><td>${escapeHtml(name)}</td></tr>
          <tr><td style="padding:2px 12px 2px 0;color:#667;"><strong>Email</strong></td><td>${escapeHtml(email)}</td></tr>
          <tr><td style="padding:2px 12px 2px 0;color:#667;"><strong>Phone</strong></td><td>${escapeHtml(phone) || "—"}</td></tr>
          <tr><td style="padding:2px 12px 2px 0;color:#667;"><strong>Service</strong></td><td>${escapeHtml(service)}</td></tr>
        </table>
        <p style="font-family:sans-serif;font-size:14px;line-height:1.6;margin:16px 0 4px;color:#667;"><strong>Message</strong></p>
        <p style="font-family:sans-serif;font-size:14px;line-height:1.6;white-space:pre-wrap;margin:0;">${escapeHtml(message)}</p>
      `,
    });

    if (error) {
      console.error("[contact] Resend error:", error);
      return {
        status: "error",
        message: "Something went wrong sending your message. Please try again in a moment.",
      };
    }

    return {
      status: "success",
      message: "Thanks — we've got your details and will be in touch shortly.",
    };
  } catch (err) {
    console.error("[contact] Unexpected error:", err);
    return {
      status: "error",
      message: "Something went wrong sending your message. Please try again in a moment.",
    };
  }
}
