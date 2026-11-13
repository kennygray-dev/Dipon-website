import { wrap } from "@/lib/styles";

type Pillar = {
  title: string;
  desc: string;
  image: string;
  /** Overrides the card's brand-color tint. */
  overlay?: string;
};

const PILLARS: Pillar[] = [
  {
    title: "One Accountable Group",
    desc: "Construction, power, property, and supply under a single structure.",
    image: "https://images.pexels.com/photos/8961260/pexels-photo-8961260.jpeg?auto=compress&cs=tinysrgb&w=900",
  },
  {
    title: "Every Stage of the Build",
    desc: "From groundworks to handover, delivered end to end.",
    image: "https://images.pexels.com/photos/18332045/pexels-photo-18332045.jpeg?auto=compress&cs=tinysrgb&w=900",
    overlay: "bg-gradient-to-t from-black/55 via-black/25 to-transparent",
  },
  {
    title: "Capability Built In",
    desc: "Design, build, and power planned together, never handed off.",
    image: "https://images.pexels.com/photos/18153132/pexels-photo-18153132.jpeg?auto=compress&cs=tinysrgb&w=900",
  },
  {
    title: "Standards That Carry",
    desc: "Quality, reliability, and doing the work better than before.",
    image: "https://images.pexels.com/photos/30688597/pexels-photo-30688597.jpeg?auto=compress&cs=tinysrgb&w=900",
  },
];

const CARD_STYLES = [
  { bg: "bg-dipon-blue", overlay: "bg-dipon-blue/72", text: "text-white" },
  { bg: "bg-[#2b4a5b]", overlay: "bg-[#2b4a5b]/72", text: "text-white" },
  { bg: "bg-dipon-accent", overlay: "bg-dipon-accent/72", text: "text-white" },
  { bg: "bg-[#172a34]", overlay: "bg-[#172a34]/72", text: "text-dipon-cream" },
];

export default function StatBand() {
  return (
    <section className="bg-dipon-surface px-[clamp(20px,5vw,60px)] py-[clamp(72px,9vw,120px)]">
      <div className={wrap}>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-[22px]">
          {PILLARS.map((pillar, index) => (
            <div
              key={pillar.title}
              className={`relative flex min-h-[320px] flex-col justify-end overflow-hidden p-[42px_34px] transition-transform duration-300 ease-out hover:-translate-y-2 [clip-path:polygon(0_0,100%_0,100%_100%,14%_100%,0_86%)] ${CARD_STYLES[index].bg} ${CARD_STYLES[index].text}`}
            >
              <img
                src={pillar.image}
                alt=""
                aria-hidden="true"
                className="absolute inset-0 h-full w-full object-cover grayscale"
              />
              <div aria-hidden="true" className={`absolute inset-0 ${pillar.overlay ?? CARD_STYLES[index].overlay}`} />

              <div className="relative z-10 flex flex-col gap-2.5">
                <h3 className="font-display text-[clamp(23px,2.4vw,30px)] font-extrabold leading-[1.08] tracking-[-0.5px] text-dipon-cream">
                  {pillar.title}
                </h3>
                <p className="m-0 max-w-[240px] font-body text-[15px] leading-[1.45] text-dipon-cream/90">
                  {pillar.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
