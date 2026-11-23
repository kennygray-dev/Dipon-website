"use client";

import { useRef } from "react";

// Card media: the image shows by default; on hover (desktop) a short muted clip
// fades in and plays, pausing when the pointer leaves. `preload="none"` + play-
// on-hover keeps the page light — nothing downloads or decodes until you hover,
// and only one clip plays at a time. Mobile (no hover) just shows the image.
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
  const ref = useRef<HTMLVideoElement>(null);

  const play = () => {
    const v = ref.current;
    if (v) v.play().catch(() => {});
  };
  const stop = () => {
    const v = ref.current;
    if (v) v.pause();
  };

  return (
    <span
      className="absolute inset-0 block"
      onMouseEnter={video ? play : undefined}
      onMouseLeave={video ? stop : undefined}
    >
      <img
        src={image}
        alt={alt}
        className={`absolute inset-0 h-full w-full object-cover transition-transform duration-[650ms] ease-[var(--ease-premium)] group-hover:scale-105 ${imgClassName}`}
      />
      {video && (
        <video
          ref={ref}
          muted
          loop
          playsInline
          preload="none"
          poster={image}
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-[600ms] ease-[var(--ease-premium)] group-hover:opacity-100 motion-reduce:hidden"
        >
          <source src={video} type="video/mp4" />
        </video>
      )}
    </span>
  );
}
