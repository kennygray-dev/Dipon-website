// Light decorative line-and-node pattern for static (non-clickable) images —
// echoes the brand geometric mesh used in Hero/PageHero, but much fainter.
export default function GeometricOverlay({
  className = "",
  opacity = 0.22,
}: {
  className?: string;
  opacity?: number;
}) {
  return (
    <div aria-hidden="true" className={`pointer-events-none absolute inset-0 ${className}`} style={{ opacity }}>
      <svg width="100%" height="100%" viewBox="0 0 400 400" preserveAspectRatio="xMidYMid slice" fill="none">
        <path d="M18 36 L130 36 L168 104 L70 150" stroke="#FFF9EB" strokeWidth="1.4" />
        <path d="M130 36 L206 82" stroke="#FFF9EB" strokeWidth="1.4" />
        <path d="M290 320 L330 208 L370 262" stroke="#FFF9EB" strokeWidth="1.4" />
        <path d="M252 372 L290 320" stroke="#FFF9EB" strokeWidth="1.4" />
        <circle cx="130" cy="36" r="3" fill="#FFF9EB" />
        <circle cx="168" cy="104" r="3" fill="#FFF9EB" />
        <circle cx="206" cy="82" r="3" fill="#FFF9EB" />
        <circle cx="290" cy="320" r="3" fill="#FFF9EB" />
        <circle cx="330" cy="208" r="3" fill="#FFF9EB" />
        <circle cx="70" cy="150" r="3" fill="#FFF9EB" />
      </svg>
    </div>
  );
}
