import { LogoMotif } from "./icons";

const GRAIN_TEXTURE =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")";

/**
 * Premium background treatment for dark/teal sections — the same brand language
 * already used on DarkFeatureGrid and the Sustainability panel: a soft radial
 * highlight for depth, an oversized faint DIPON "D" watermark (drifts on scroll),
 * and a fine grain overlay. Purely decorative; drop it as the first child of a
 * `relative overflow-hidden` section and give the content wrapper `relative z-10`.
 */
export default function SectionTexture({ side = "right" }: { side?: "left" | "right" }) {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* soft radial highlight for depth */}
      <div
        className={`absolute inset-0 ${
          side === "right"
            ? "bg-[radial-gradient(120%_120%_at_88%_-10%,rgba(255,249,235,0.07),transparent_55%)]"
            : "bg-[radial-gradient(120%_120%_at_12%_-10%,rgba(255,249,235,0.07),transparent_55%)]"
        }`}
      />
      {/* oversized D watermark — drifts gently on scroll */}
      <div
        data-open
        data-parallax="0.08"
        className={`absolute top-1/2 h-[155%] -translate-y-1/2 opacity-[0.06] ${
          side === "right" ? "-right-[6%]" : "-left-[6%]"
        }`}
      >
        <LogoMotif className="h-full w-auto" />
      </div>
      {/* fine grain */}
      <div
        className="absolute inset-0 opacity-[0.5] mix-blend-overlay"
        style={{ backgroundImage: GRAIN_TEXTURE }}
      />
    </div>
  );
}
