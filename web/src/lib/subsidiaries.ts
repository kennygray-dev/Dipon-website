export type SubsidiaryFocus = { title: string; desc: string };

export type Subsidiary = {
  slug: string;
  num: string;
  name: string;
  short: string;
  summary: string;
  intro: string;
  overviewHeading: string;
  overview: string[];
  focus: SubsidiaryFocus[];
  /** Slugs into `SERVICES` (see lib/services) that this company delivers. */
  serviceSlugs: string[];
  imageQuery: string;
  imageLock: number;
};

export const SUBSIDIARIES: Subsidiary[] = [
  {
    slug: "dipon-construction",
    num: "01",
    name: "DIPON Construction Limited",
    short: "DIPON Construction",
    summary: "Civil engineering, building construction, and general contracting — the Group's core build capability.",
    intro:
      "The Group's core build capability — taking on civil works, buildings, and contracting as a single accountable team.",
    overviewHeading: "The build capability at the center of the Group.",
    overview: [
      "DIPON Construction Limited delivers civil engineering, building construction, and general contracting. It's the company that turns designs into structures — roads, buildings, and the civil works beneath them.",
      "Because it sits inside a group that also supplies materials and delivers power, projects move forward without the handoffs between unrelated firms that usually cause delay.",
    ],
    focus: [
      { title: "Civil Engineering", desc: "Roads, drainage, earthworks, and the civil backbone of every site." },
      { title: "Building Construction", desc: "Residential, commercial, and institutional buildings, foundation to finish." },
      { title: "Structural Fabrication", desc: "Steel and structural work engineered to specification." },
      { title: "General Contracting", desc: "Single-point contracting that keeps every trade accountable." },
    ],
    serviceSlugs: ["construction-civil-engineering"],
    imageQuery: "construction",
    imageLock: 32,
  },
  {
    slug: "dipon-global-resources",
    num: "02",
    name: "DIPON Global Resources Limited",
    short: "DIPON Global Resources",
    summary: "Trading, supply chain, real estate, agriculture, and logistics — the commercial engine behind every project.",
    intro:
      "The commercial engine of the Group — trading, supply, property, agriculture, and logistics working behind every project.",
    overviewHeading: "The commercial engine behind the build.",
    overview: [
      "DIPON Global Resources Limited runs the Group's commercial operations: import and export, materials supply, real estate, agriculture, and logistics. It keeps sites stocked, moves what needs moving, and develops property through to occupancy.",
      "Sitting close to the Group's own construction demand, it plans supply and logistics against real project needs — not guesswork.",
    ],
    focus: [
      { title: "Trading & Supply Chain", desc: "Import, export, and materials supply across sectors." },
      { title: "Real Estate & Property", desc: "Housing and property developed to occupancy." },
      { title: "Transportation & Logistics", desc: "Movement of goods, materials, and equipment." },
      { title: "Agriculture", desc: "Agricultural production and supply." },
    ],
    serviceSlugs: ["trading-supply-chain", "real-estate-property", "transportation-logistics", "agriculture"],
    imageQuery: "warehouse",
    imageLock: 71,
  },
  {
    slug: "dipon-infrastructure",
    num: "03",
    name: "DIPON Infrastructure Limited",
    short: "DIPON Infrastructure",
    summary: "Renewable energy, power infrastructure, and housing development — the Group's power and property arm.",
    intro:
      "The Group's power and property arm — renewable energy, power infrastructure, and housing built for the long term.",
    overviewHeading: "Power and property, built to last.",
    overview: [
      "DIPON Infrastructure Limited delivers renewable energy, power infrastructure, and housing development. It's the company that energizes projects and builds places for people to live.",
      "By planning power alongside construction, it gets sites energized on schedule and lowers running costs over the life of a project.",
    ],
    focus: [
      { title: "Renewable Energy", desc: "Solar generation for buildings, sites, and communities." },
      { title: "Power Infrastructure", desc: "Distribution, backup, and reliable power systems." },
      { title: "Public Lighting", desc: "Solar and grid street lighting for estates and roads." },
      { title: "Housing Development", desc: "Residential development delivered to occupancy." },
    ],
    serviceSlugs: ["renewable-energy-power", "real-estate-property"],
    imageQuery: "solar",
    imageLock: 51,
  },
];

export function getSubsidiary(slug: string): Subsidiary | undefined {
  return SUBSIDIARIES.find((s) => s.slug === slug);
}

export function getSubsidiaryByName(name: string): Subsidiary | undefined {
  return SUBSIDIARIES.find((s) => s.name === name);
}
