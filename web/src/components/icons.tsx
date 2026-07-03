export function CaretIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="9"
      height="6"
      viewBox="0 0 10 6"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      aria-hidden="true"
    >
      <polyline points="1,1 5,5 9,1" />
    </svg>
  );
}

export function ArrowIcon({ width = 22, height = 9 }: { width?: number; height?: number }) {
  return (
    <svg
      className="arrow"
      viewBox="0 0 40 16"
      width={width}
      height={height}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="square"
      aria-hidden="true"
    >
      <line x1="0" y1="8" x2="36" y2="8" />
      <polyline points="29,1 36,8 29,15" />
    </svg>
  );
}

export function ProfileIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
      <path d="M8 1v9M4 7l4 4 4-4M2 14h12" />
    </svg>
  );
}

export function BurgerIcon() {
  return (
    <svg width="22" height="12" viewBox="0 0 22 12" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <line x1="0" y1="1" x2="22" y2="1" />
      <line x1="0" y1="11" x2="22" y2="11" />
    </svg>
  );
}

export function CloseIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
      <line x1="2" y1="2" x2="16" y2="16" />
      <line x1="16" y1="2" x2="2" y2="16" />
    </svg>
  );
}
