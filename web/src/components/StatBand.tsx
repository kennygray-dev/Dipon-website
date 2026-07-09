"use client";

import { useEffect, useRef } from "react";
import { wrap } from "@/lib/styles";

type Stat = {
  id: string;
  value: string;
  label: string;
  image: string;
};

const STATS: Stat[] = [
  {
    id: "stat-years",
    value: "3+",
    label: "Years in Operation",
    image: "https://images.pexels.com/photos/8961260/pexels-photo-8961260.jpeg?auto=compress&cs=tinysrgb&w=900",
  },
  {
    id: "stat-sectors",
    value: "6",
    label: "Sectors Served",
    image: "https://images.pexels.com/photos/18332045/pexels-photo-18332045.jpeg?auto=compress&cs=tinysrgb&w=900",
  },
  {
    id: "stat-projects",
    value: "120+",
    label: "Projects Delivered",
    image: "https://images.pexels.com/photos/18153132/pexels-photo-18153132.jpeg?auto=compress&cs=tinysrgb&w=900",
  },
  {
    id: "stat-clients",
    value: "45+",
    label: "Satisfied Clients",
    image: "https://images.pexels.com/photos/30688597/pexels-photo-30688597.jpeg?auto=compress&cs=tinysrgb&w=900",
  },
];

const CARD_STYLES = [
  { bg: "bg-dipon-blue", overlay: "bg-dipon-blue/88", text: "text-white" },
  { bg: "bg-[#2b4a5b]", overlay: "bg-[#2b4a5b]/88", text: "text-white" },
  { bg: "bg-dipon-accent", overlay: "bg-dipon-accent/88", text: "text-white" },
  { bg: "bg-[#172a34]", overlay: "bg-[#172a34]/88", text: "text-dipon-cream" },
];

function animateStat(el: HTMLElement) {
  const finalText = el.dataset.final || el.textContent || "";
  const match = finalText.match(/(\d[\d,]*)/);

  const reduce =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (!match || reduce) {
    el.textContent = finalText;
    return;
  }

  const prefix = finalText.slice(0, match.index);
  const suffix = finalText.slice((match.index ?? 0) + match[0].length);
  const target = parseInt(match[1].replace(/,/g, ""), 10);

  const start = performance.now();
  const duration = 1100;

  const tick = (now: number) => {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = prefix + Math.round(target * eased).toLocaleString() + suffix;
    if (progress < 1) requestAnimationFrame(tick);
  };

  requestAnimationFrame(tick);
}

export default function StatBand() {
  const bandRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!bandRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        STATS.forEach((stat) => {
          const el = document.getElementById(stat.id);
          if (el) animateStat(el);
        });
        observer.disconnect();
      },
      { threshold: 0.35 }
    );

    observer.observe(bandRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="px-[clamp(20px,5vw,60px)] py-[clamp(72px,9vw,120px)]">
      <div ref={bandRef} className={wrap}>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-[22px]">
          {STATS.map((stat, index) => (
            <div
              key={stat.id}
              className={`relative flex min-h-[320px] flex-col justify-between overflow-hidden p-[42px_34px] transition-transform duration-300 ease-out hover:-translate-y-2 [clip-path:polygon(0_0,100%_0,100%_100%,14%_100%,0_86%)] ${CARD_STYLES[index].bg} ${CARD_STYLES[index].text}`}
            >
              <img
                src={stat.image}
                alt=""
                aria-hidden="true"
                className="absolute inset-0 h-full w-full object-cover grayscale"
              />
              <div aria-hidden="true" className={`absolute inset-0 ${CARD_STYLES[index].overlay}`} />

              <div
                id={stat.id}
                data-final={stat.value}
                className="relative z-10 font-display text-[clamp(72px,8vw,110px)] font-extrabold leading-[0.85] tracking-[-5px] text-dipon-cream"
              >
                {stat.value}
              </div>
              <div className="relative z-10 flex items-start gap-3.5">
                <span className="font-label text-xs tracking-[1.8px] opacity-80">0{index + 1}</span>
                <p className="m-0 max-w-[170px] font-body text-[17px] leading-[1.35]">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
