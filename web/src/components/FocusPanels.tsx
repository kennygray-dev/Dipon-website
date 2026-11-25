import CardMedia from "./CardMedia";
import Eyebrow from "./Eyebrow";
import Heading from "./Heading";
import Reveal from "./Reveal";
import { LogoMark } from "./icons";
import { section, wrap, lead } from "@/lib/styles";

// Full-bleed Pexels URL for a photo id (plain <img>, so no next/image domain config).
const px = (id: string) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=1200`;

// A domain-matched photo per card, keyed by service or subsidiary slug. Order
// lines up with each entry's capabilities / focus list so the image fits the item.
const FOCUS_IMAGES: Record<string, string[]> = {
  // Services (capabilities)
  "construction-civil-engineering": ["25461690", "4170184", "18078304", "11565004", "18111488", "33914927"],
  "renewable-energy-power": ["9875418", "12606669", "27873610", "9799706", "2802106", "27433337"],
  "real-estate-property": ["33258708", "18821291", "17082223", "16573669", "19344325", "7314547"],
  "environmental-services": ["6196694", "7513068", "4008518", "7451918", "10567236", "33388390"],
  "trading-supply-chain": ["4487383", "13025947", "262353", "4115457", "39621567", "5025517"],
  "transportation-logistics": ["40292015", "40123480", "6940962", "10649706", "15610996", "18435589"],
  agriculture: ["36773876", "34732063", "18778296", "9798992", "38278411", "29405308"],
  // Subsidiaries (focus areas)
  "dipon-construction": ["25461690", "4170184", "11565004", "18078304", "18111488", "33914927"],
  "dipon-global-resources": ["4487383", "33258708", "40292015", "36773876", "4115457", "6196694"],
  "dipon-infrastructure": ["9875418", "2802106", "27433337", "33258708", "6196694", "12606669"],
};

type Item = { title: string; desc: string };

/**
 * Image-based focus/capability panels, built on the same expanding-row mechanic
 * as the homepage "About DIPON Group" section (sector-row / sector-panel): each
 * card shows a domain photo with the title always visible and the description
 * fading from faint to readable; hovering a card grows it and eases the others
 * back. Laid out in rows of three, with rounded outer edges.
 */
export default function FocusPanels({
  imageKey,
  eyebrow,
  heading,
  intro,
  items,
}: {
  imageKey: string;
  eyebrow: string;
  heading: string;
  intro?: string;
  items: Item[];
}) {
  const ids = FOCUS_IMAGES[imageKey] ?? [];
  const rows: Item[][] = [];
  for (let i = 0; i < items.length; i += 3) rows.push(items.slice(i, i + 3));

  let idx = -1;
  return (
    <section className={`${section} bg-dipon-surface`}>
      <div className={wrap}>
        <Reveal className="mb-10 max-w-[640px] md:mb-12">
          <Eyebrow>{eyebrow}</Eyebrow>
          <Heading>{heading}</Heading>
          {intro && <p className={`${lead} mt-5`}>{intro}</p>}
        </Reveal>

        <div className="flex flex-col gap-3 md:gap-4">
          {rows.map((row, r) => (
            <div
              key={r}
              className="sector-row flex flex-col gap-3 md:h-[clamp(300px,34vw,400px)] md:flex-row md:gap-4"
            >
              {row.map((item) => {
                idx += 1;
                const image = px(ids[idx % (ids.length || 1)] ?? ids[0] ?? "");
                return (
                  <article
                    key={item.title}
                    data-reveal
                    className="sector-panel group relative block h-[58vw] max-h-[360px] overflow-hidden rounded-[20px] md:h-full md:max-h-none"
                  >
                    <CardMedia image={image} alt={`DIPON Group: ${item.title}`} />
                    {/* legibility wash */}
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-black/10"
                    />
                    {/* mark */}
                    <div className="absolute inset-x-0 top-0 z-10 flex items-start justify-end p-5 sm:p-6">
                      <LogoMark light className="h-6 w-auto opacity-90" />
                    </div>
                    {/* title always visible, description faint → readable on focus */}
                    <div className="absolute inset-x-0 bottom-0 z-10 flex flex-col gap-2 p-5 sm:p-6">
                      <h3 className="text-balance font-display text-[clamp(17px,1.5vw,21px)] font-bold leading-[1.15] text-white">
                        {item.title}
                      </h3>
                      <p className="sector-desc max-w-[36ch] font-body text-[13px] leading-[1.5] text-white/90">
                        {item.desc}
                      </p>
                    </div>
                  </article>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
