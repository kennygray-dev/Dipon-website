"use client";

import { useEffect, useRef } from "react";

// Card media: the image shows by default; on hover (desktop) a short muted clip
// fades in and plays, pausing when the pointer leaves. `preload="none"` + play-
// on-hover keeps the page light — nothing downloads or decodes until you hover,
// and only one clip plays at a time. Mobile (no hover) just shows the image.
//
// The play/pause listeners are bound to the card's `.group` ancestor (the Link),
// not this span — the card's gradient overlays sit on top of the span as
// siblings, so a hover never "enters" the span itself.
export default function CardMedia({
  image,
  alt,
  video,
  imgClassName = "",
}: {
  image: string;
  alt: string;
  video?: string;
  imgClassName?: string;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const rootRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!video) return;
    const host = rootRef.current?.closest(".group") as HTMLElement | null;
    const v = videoRef.current;
    if (!host || !v) return;
    const play = () => {
      v.play().catch(() => {});
    };
    const stop = () => {
      v.pause();
    };
    host.addEventListener("mouseenter", play);
    host.addEventListener("mouseleave", stop);
    return () => {
      host.removeEventListener("mouseenter", play);
      host.removeEventListener("mouseleave", stop);
    };
  }, [video]);

  return (
    <span ref={rootRef} className="absolute inset-0 block">
      <img src={image} alt={alt} className={`absolute inset-0 h-full w-full object-cover ${imgClassName}`} />
      {video && (
        <video
          ref={videoRef}
          muted
          loop
          playsInline
          preload="metadata"
          poster={image}
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-[450ms] ease-[var(--ease-premium)] group-hover:opacity-100 motion-reduce:hidden"
        >
          <source src={video} type="video/mp4" />
        </video>
      )}
      {/* Subtle grid texture on every card's media */}
      <span aria-hidden="true" className="sector-grid pointer-events-none absolute inset-0" />
    </span>
  );
}
