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

export function PhoneIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M2.5 2h2.8l1.2 3.2-1.6 1.4a9 9 0 0 0 4.5 4.5l1.4-1.6L13.5 11v2.5c0 .8-.7 1.4-1.5 1.3C6.6 14.2 1.8 9.4 1.2 4c-.1-.8.5-1.5 1.3-1.5Z" />
    </svg>
  );
}

export function MailIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="1.5" y="3" width="13" height="10" rx="1.2" />
      <path d="M2 4l6 5 6-5" />
    </svg>
  );
}

export function PinIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M8 14.5S13 9.8 13 6.2A5 5 0 0 0 3 6.2C3 9.8 8 14.5 8 14.5Z" />
      <circle cx="8" cy="6.2" r="1.8" />
    </svg>
  );
}

export function FacebookIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
      <path d="M10.5 4.8H9.2c-.4 0-.7.3-.7.8v1.3h2l-.3 2h-1.7V15H6.4V8.9H5V6.9h1.4V5.4c0-1.4 1-2.6 2.4-2.6h1.7v2Z" />
    </svg>
  );
}

export function XIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
      <path d="M9.6 7.1 14 2h-1.6L8.9 6 5.7 2H2l4.6 6.1L2 14h1.6l3.7-4.3 3.4 4.3H14z" />
    </svg>
  );
}

export function LinkedInIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
      <path d="M3.5 5.3H1V14h2.5V5.3ZM2.25 4.2a1.45 1.45 0 1 0 0-2.9 1.45 1.45 0 0 0 0 2.9ZM15 9.2c0-2.4-1.3-3.5-3-3.5-1.4 0-2 .8-2.3 1.3V5.3H7.2c0 .1 0 8.6 0 8.7h2.5V9.2c0-.3 0-.5.1-.7.2-.5.6-1 1.4-1 1 0 1.3.7 1.3 1.8V14H15V9.2Z" />
    </svg>
  );
}

export function ClockIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="10" cy="10" r="7.5" />
      <path d="M10 5.5V10l3 2" />
    </svg>
  );
}

export function ShieldIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M10 2.5 16 5v5c0 4-2.6 6.7-6 7.5C6.6 16.7 4 14 4 10V5l6-2.5Z" />
      <path d="M7.3 10 9 11.7l3.6-3.6" />
    </svg>
  );
}

export function HouseIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 9.5 10 3l7 6.5" />
      <path d="M5 8.5V17h10V8.5" />
      <path d="M8 17v-4.5h4V17" />
    </svg>
  );
}

export function LinkIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="7.2" cy="10" r="4.2" />
      <circle cx="12.8" cy="10" r="4.2" />
    </svg>
  );
}

export function LeafIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M10 17.5C4.2 17.5 2.5 12 2.5 7.3 8 7.3 13.2 8.3 15.7 3.8c2 6.2.8 13.7-5.7 13.7Z" />
      <path d="M4.3 16 13.2 6" />
    </svg>
  );
}

export function GlobeIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="10" cy="10" r="7.5" />
      <path d="M2.5 10h15" />
      <ellipse cx="10" cy="10" rx="3.3" ry="7.5" />
    </svg>
  );
}

export function PartnershipIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="6.8" cy="6.8" r="2.5" />
      <path d="M2.3 16.5c0-2.9 2-5 4.5-5s4.5 2.1 4.5 5" />
      <circle cx="14" cy="8.2" r="2.1" />
      <path d="M11.2 16.5c.2-2.3 1.7-3.9 3.5-3.9 1.9 0 3.4 1.6 3.7 3.9" />
    </svg>
  );
}

export function GridIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2.5" y="2.5" width="6" height="6" rx="1.2" />
      <rect x="11.5" y="2.5" width="6" height="6" rx="1.2" />
      <rect x="2.5" y="11.5" width="6" height="6" rx="1.2" />
      <rect x="11.5" y="11.5" width="6" height="6" rx="1.2" />
    </svg>
  );
}

export function SignatureMark({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 170 56"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M6 40C10 18 16 10 21 12c5 2 3 16-1 24-4 8-8 12-6 4 3-11 12-26 19-26 5 0 2 12-1 19-3 7-4 12 1 9 6-3 12-17 18-17 4 0 2 8 6 8 5 0 11-9 16-9 4 0 1 9 6 9 6 0 15-11 22-11 5 0 3 7 8 7 6 0 14-9 20-9" />
      <path d="M120 8c3 4 3 9 0 13" strokeWidth="2" opacity="0.55" />
    </svg>
  );
}

export function LogoMark({ className, light = false }: { className?: string; light?: boolean }) {
  const secondary = light ? "#FFF9EB" : "#233D4C";
  return (
    <svg className={className} viewBox="0 0 135 142" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path
        d="M0.613735 0L44.1453 0.00831538L60.9264 0.0189028C60.9264 0.0189028 69.8657 -0.0807936 73.9637 0.395309C108.719 4.43305 136.352 36.4804 134.375 71.5693C134.143 75.6939 134.538 80.0686 133.678 84.2023C131.481 97.3659 123.471 111.734 114.053 121.096C104.668 130.32 92.9019 136.752 80.0716 139.674C79.4272 139.82 77.851 140.207 77.2554 140.302C70.6086 141.331 64.7554 141.284 58.0519 141.3C53.1503 141.341 48.2487 141.319 43.3479 141.234C44.6699 138.893 46.4763 136.257 47.9109 133.912C51.3839 128.234 54.9832 122.755 58.8221 117.318C73.5284 117.566 85.3874 115.375 96.5693 104.665C105.571 96.0712 110.703 84.197 110.797 71.7529C111.009 58.6951 106.858 47.2397 97.6894 37.7751C90.289 30.0218 80.3725 25.1527 69.7122 24.0393C64.4584 23.5314 56.835 23.6637 51.3968 23.6803C42.5656 23.7355 33.3346 23.8269 24.5042 23.6803V38.7436V48.0509L0 68.2141V54.7935C0.0929677 50.5162 0.0308459 45.756 0.025555 41.4054L0.00324544 19.5684V15.7583V11.9632V4.36949V0H0.613735Z"
        fill="#FD802E"
      />
      <path
        d="M24.6897 64.5117C24.5544 70.634 24.6693 77.1614 24.6663 83.3139L24.6587 117.338L58.8225 117.318C54.9836 122.756 51.3843 128.235 47.9113 133.912C46.4767 136.257 44.6702 138.893 43.3483 141.234L32.6154 141.19L22.9377 141.192L13.26 141.195H0V120.676V84.8512L24.6897 64.5117Z"
        fill={secondary}
      />
      <path
        d="M58.2691 37.0361L58.1996 85.0317C65.3876 84.9984 71.5234 84.8435 77.49 80.3493C82.8738 76.3653 86.3998 70.3579 87.2524 63.7149C88.4632 54.7854 86.1035 48.218 80.8187 41.2348C91.8766 49.5263 97.4199 57.7453 97.2203 71.9754C96.6255 80.6834 93.8894 87.8472 87.5736 93.9709C77.5975 103.644 68.9242 103.626 56.4023 103.6L56.0621 103.6L39.7088 103.573H39.6816V52.2589L58.2691 37.0361Z"
        fill={secondary}
      />
    </svg>
  );
}

export function UploadIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5.5 15.5h9a2.5 2.5 0 0 0 .6-4.93A4 4 0 0 0 7.3 7.1a3 3 0 0 0-1.8 8.4Z" />
      <path d="M10 12.5V6M7.5 8.5 10 6l2.5 2.5" />
    </svg>
  );
}

export function InstagramIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.3" aria-hidden="true">
      <rect x="1.5" y="1.5" width="13" height="13" rx="3.5" />
      <circle cx="8" cy="8" r="3.2" />
      <circle cx="11.7" cy="4.3" r="0.7" fill="currentColor" stroke="none" />
    </svg>
  );
}
