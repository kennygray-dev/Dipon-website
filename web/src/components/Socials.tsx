import type { ComponentType } from "react";
import { SOCIAL_LINKS, type SocialPlatform } from "@/lib/site";
import { FacebookIcon, InstagramIcon, LinkedInIcon, XIcon } from "./icons";

const ICONS: Record<SocialPlatform, ComponentType> = {
  x: XIcon,
  linkedin: LinkedInIcon,
  facebook: FacebookIcon,
  instagram: InstagramIcon,
};

/**
 * Renders the social icons from the central SOCIAL_LINKS config, or nothing at
 * all when no real profiles are set — so there are never dead "#" links. Add a
 * profile in lib/site.ts and the icons appear everywhere this is used.
 */
export default function Socials({ label, className = "" }: { label?: string; className?: string }) {
  if (SOCIAL_LINKS.length === 0) return null;

  return (
    <div className={className}>
      {label && (
        <span className="mb-4 block font-label text-[11px] font-semibold tracking-[1.2px] text-dipon-cream/70 uppercase">
          {label}
        </span>
      )}
      <div className="flex items-center gap-3">
        {SOCIAL_LINKS.map(({ platform, url, label: aria }) => {
          const Icon = ICONS[platform];
          return (
            <a
              key={platform}
              href={url}
              aria-label={aria}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-white/25 text-dipon-cream/80 transition-colors duration-200 hover:border-dipon-accent hover:bg-dipon-accent hover:text-white"
            >
              <Icon />
            </a>
          );
        })}
      </div>
    </div>
  );
}
