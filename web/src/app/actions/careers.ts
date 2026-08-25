"use server";

import { Resend } from "resend";
import type { ContactState } from "@/lib/contact";

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

export async function submitCareers(
  _prevState: ContactState,
  formData: FormData
): Promise<ContactState> {
  // Honeypot: hidden field only bots fill.
  if (clean(formData.get("company"))) {
    return { status: "success", message: "Thanks — we'll be in touch." };
  }

  const name = clean(formData.get("name"));
  const email = clean(formData.get("email"));
  const phone = clean(formData.get("phone"));
  const interest = clean(formData.get("interest"));
  const message = clean(formData.get("message"));

  const errors: ContactState["errors"] = {};
  if (!name) errors.name = "Please enter your name.";
  if (!email) errors.email = "Please enter your email.";
  else if (!EMAIL_RE.test(email)) errors.email = "Please enter a valid email address.";
  if (!interest) errors.interest = "Please choose an area of interest.";

  if (Object.keys(errors).length > 0) {
    return { status: "error", message: "Please check the highlighted fields.", errors };
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL || "DIPON Website <onboarding@resend.dev>";

  if (!apiKey || !to) {
    console.error("[careers] Missing config: set RESEND_API_KEY and CONTACT_TO_EMAIL");
    return {
      status: "error",
      message: "This form isn't fully set up yet. Please email us directly for now.",
    };
  }

  const resend = new Resend(apiKey);

  try {
    const { error } = await resend.emails.send({
      from,
      to: [to],
      replyTo: email,
      subject: `Careers interest: ${interest} — ${name}`,
      text: [
        `Name:     ${name}`,
        `Email:    ${email}`,
        `Phone:    ${phone || "—"}`,
        `Interest: ${interest}`,
        "",
        "Message:",
        message || "—",
      ].join("\n"),
      html: `
        <h2 style="margin:0 0 16px;font-family:sans-serif;">New careers enquiry</h2>
        <table style="font-family:sans-serif;font-size:14px;line-height:1.6;border-collapse:collapse;">
          <tr><td style="padding:2px 12px 2px 0;color:#667;"><strong>Name</strong></td><td>${escapeHtml(name)}</td></tr>
          <tr><td style="padding:2px 12px 2px 0;color:#667;"><strong>Email</strong></td><td>${escapeHtml(email)}</td></tr>
          <tr><td style="padding:2px 12px 2px 0;color:#667;"><strong>Phone</strong></td><td>${escapeHtml(phone) || "—"}</td></tr>
          <tr><td style="padding:2px 12px 2px 0;color:#667;"><strong>Interest</strong></td><td>${escapeHtml(interest)}</td></tr>
        </table>
        <p style="font-family:sans-serif;font-size:14px;line-height:1.6;margin:16px 0 4px;color:#667;"><strong>Message</strong></p>
        <p style="font-family:sans-serif;font-size:14px;line-height:1.6;white-space:pre-wrap;margin:0;">${escapeHtml(message) || "—"}</p>
      `,
    });

    if (error) {
      console.error("[careers] Resend error:", error);
      return { status: "error", message: "Something went wrong. Please try again in a moment." };
    }

    return { status: "success", message: "Thanks — we've got your details." };
  } catch (err) {
    console.error("[careers] Unexpected error:", err);
    return { status: "error", message: "Something went wrong. Please try again in a moment." };
  }
}
