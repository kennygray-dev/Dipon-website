"use client";

// Catches errors thrown in the root layout itself. It replaces the whole
// document, so it must ship its own <html>/<body> and can't rely on global
// CSS — styles are inlined with the brand hex values.
export default function GlobalError({
  error,
  unstable_retry,
}: {
  error: Error & { digest?: string };
  unstable_retry: () => void;
}) {
  return (
    <html lang="en">
      <title>Something went wrong — DIPON Group Limited</title>
      <body
        style={{
          margin: 0,
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "16px",
          padding: "80px 24px",
          textAlign: "center",
          background: "#1c313d",
          color: "#fff9eb",
          fontFamily:
            "system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif",
        }}
      >
        <span
          style={{
            fontSize: "12px",
            fontWeight: 600,
            letterSpacing: "1.6px",
            textTransform: "uppercase",
            color: "#fd802e",
          }}
        >
          Something went wrong
        </span>
        <h1 style={{ margin: 0, fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 800, maxWidth: "560px" }}>
          We hit a snag loading the site.
        </h1>
        <p style={{ margin: 0, maxWidth: "440px", fontSize: "15px", lineHeight: 1.65, color: "rgba(255,249,235,0.78)" }}>
          Sorry about that — it&rsquo;s on our end. Please try again in a moment.
        </p>
        <button
          type="button"
          onClick={() => unstable_retry()}
          style={{
            marginTop: "16px",
            cursor: "pointer",
            border: "none",
            borderRadius: "999px",
            padding: "12px 28px",
            fontSize: "14px",
            fontWeight: 600,
            color: "#fff",
            background: "#fd802e",
          }}
        >
          Try again
        </button>
        {error.digest && (
          <p style={{ marginTop: "16px", fontSize: "11px", letterSpacing: "0.6px", color: "rgba(255,249,235,0.4)" }}>
            Reference: {error.digest}
          </p>
        )}
      </body>
    </html>
  );
}
