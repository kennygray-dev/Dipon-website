import type { PortableTextBlock } from "@portabletext/react";

export function formatBlogDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
}

/** Estimate reading time from Portable Text body (~200 words/min). */
export function readingTime(body: PortableTextBlock[] | undefined): string {
  if (!body?.length) return "1 min read";
  const text = body
    .map((block) => {
      const children = (block as { children?: { text?: string }[] }).children;
      return Array.isArray(children) ? children.map((c) => c.text ?? "").join("") : "";
    })
    .join(" ");
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  return `${Math.max(1, Math.round(words / 200))} min read`;
}
