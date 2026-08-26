// Orange building-outline motif — the brand line-art device used on the social
// templates and the LinkedIn banner. Stroke follows `currentColor`, so control
// the colour and fade with text/opacity utilities on the className.
export default function BuildingMotif({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 140 100"
      fill="none"
      preserveAspectRatio="xMidYMax meet"
      className={className}
    >
      <rect x="6" y="52" width="24" height="48" stroke="currentColor" strokeWidth="2.5" />
      <path d="M42 100 V30 L60 20 V100 Z" stroke="currentColor" strokeWidth="2.5" />
      <rect x="72" y="40" width="22" height="60" stroke="currentColor" strokeWidth="2.5" />
      <rect x="104" y="60" width="20" height="40" stroke="currentColor" strokeWidth="2.5" />
      <line x1="47" y1="42" x2="55" y2="42" stroke="currentColor" strokeWidth="2" />
      <line x1="47" y1="54" x2="55" y2="54" stroke="currentColor" strokeWidth="2" />
      <line x1="47" y1="66" x2="55" y2="66" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}
