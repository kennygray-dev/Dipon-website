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
  heroImage: string;
  /** A different image used inside the page body, so it doesn't repeat the header. */
  bodyImage?: string;
};

export const SUBSIDIARIES: Subsidiary[] = [
  {
    slug: "dipon-construction",
    num: "01",
    name: "DIPON Construction Limited",
    short: "DIPON Construction",
    summary: "Civil engineering, building construction, and general contracting, the Group's core build capability.",
    intro:
      "The Group's core build capability: taking on civil works, buildings, and contracting as a single accountable team.",
    overviewHeading: "The build capability, at the center of the Group.",
    overview: [
      "DIPON Construction Limited delivers civil engineering, building construction, and general contracting. It's the company that turns designs into structures: roads, buildings, and the civil works beneath them.",
      "Because it sits inside a group that also supplies materials and delivers power, projects move forward without the handoffs between unrelated firms that usually cause delay.",
      "Work runs to one standard of workmanship and safety, with a single point of accountability from the first survey through to final handover. Clients deal with the Group rather than coordinating a chain of subcontractors themselves, and the same team that sets the programme is the one answerable for meeting it.",
    ],
    focus: [
      { title: "Civil Engineering", desc: "Roads, drainage, earthworks, and the civil backbone of every site." },
      { title: "Building Construction", desc: "Residential, commercial, and institutional buildings, foundation to finish." },
      { title: "Structural Fabrication", desc: "Steel and structural work engineered to specification." },
      { title: "General Contracting", desc: "Single-point contracting that keeps every trade accountable." },
      { title: "Project Management", desc: "Scheduling, coordination, and quality control across trades." },
      { title: "Renovation & Fit-out", desc: "Refurbishment and fit-out of existing buildings." },
    ],
    serviceSlugs: ["construction-civil-engineering"],
    imageQuery: "construction",
    imageLock: 32,
    heroImage: "https://images.pexels.com/photos/30396647/pexels-photo-30396647.jpeg?auto=compress&cs=tinysrgb&w=1200",
    bodyImage: "https://images.pexels.com/photos/17297091/pexels-photo-17297091.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    slug: "dipon-global-resources",
    num: "02",
    name: "DIPON Global Resources Limited",
    short: "DIPON Global Resources",
    summary: "Trading, supply chain, real estate, agriculture, and logistics, the commercial engine behind every project.",
    intro:
      "The commercial engine of the Group: trading, supply, property, agriculture, and logistics working behind every project.",
    overviewHeading: "The commercial engine, behind every build.",
    overview: [
      "DIPON Global Resources Limited runs the Group's commercial operations: import and export, materials supply, real estate, agriculture, and logistics. It keeps sites stocked, moves what needs moving, and develops property through to occupancy.",
      "Sitting close to the Group's own construction demand, it plans supply and logistics against real project needs, not guesswork.",
      "The same reach that keeps sites supplied also serves clients outside the Group: sourcing materials, developing property, and moving goods for customers who want one dependable partner rather than a different vendor for every stage. Buying, storing, and delivering under one roof keeps margins tight and lead times short.",
    ],
    focus: [
      { title: "Trading & Supply Chain", desc: "Import, export, and materials supply across sectors." },
      { title: "Real Estate & Property", desc: "Housing and property developed to occupancy." },
      { title: "Transportation & Logistics", desc: "Movement of goods, materials, and equipment." },
      { title: "Agriculture", desc: "Agricultural production and supply." },
      { title: "Procurement & Warehousing", desc: "Sourcing, storage, and inventory handling at scale." },
      { title: "Environmental Services", desc: "Junk removal, waste management, janitorial, and housekeeping." },
    ],
    serviceSlugs: ["trading-supply-chain", "real-estate-property", "environmental-services", "transportation-logistics", "agriculture"],
    imageQuery: "warehouse",
    imageLock: 71,
    heroImage: "https://images.pexels.com/photos/36143083/pexels-photo-36143083.jpeg?auto=compress&cs=tinysrgb&w=1200",
    bodyImage: "https://images.pexels.com/photos/6563903/pexels-photo-6563903.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    slug: "dipon-infrastructure",
    num: "03",
    name: "DIPON Infrastructure Limited",
    short: "DIPON Infrastructure",
    summary: "Renewable energy, power infrastructure, housing development, and environmental services, the Group's power and property arm.",
    intro:
      "The Group's power and property arm: renewable energy, power infrastructure, housing built for the long term, and environmental services that keep sites clean and running.",
    overviewHeading: "Power and property, built to last.",
    overview: [
      "DIPON Infrastructure Limited delivers renewable energy, power infrastructure, housing development, and environmental services. It's the company that energizes projects, builds places for people to live, and keeps spaces clean, safe, and well-kept.",
      "By planning power alongside construction, it gets sites energized on schedule and lowers running costs over the life of a project.",
      "Because power is designed in from the start rather than bolted on at the end, buildings are handed over ready to run, with supply sized to real demand and renewable generation reducing what projects spend on energy for years afterward. The same company then keeps those places clean, lit, and maintained once people move in.",
    ],
    focus: [
      { title: "Renewable Energy", desc: "Solar generation for buildings, sites, and communities." },
      { title: "Power Infrastructure", desc: "Distribution, backup, and reliable power systems." },
      { title: "Public Lighting", desc: "Solar and grid street lighting for estates and roads." },
      { title: "Housing Development", desc: "Residential development delivered to occupancy." },
      { title: "Environmental Services", desc: "Junk removal, waste management, janitorial, and housekeeping." },
      { title: "Energy Advisory", desc: "Sizing and planning to match power supply to real demand." },
    ],
    serviceSlugs: ["renewable-energy-power", "real-estate-property", "environmental-services"],
    imageQuery: "solar",
    imageLock: 51,
    heroImage: "https://images.pexels.com/photos/40747788/pexels-photo-40747788.jpeg?auto=compress&cs=tinysrgb&w=1200",
    bodyImage: "https://images.pexels.com/photos/38804912/pexels-photo-38804912.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
];

export function getSubsidiary(slug: string): Subsidiary | undefined {
  return SUBSIDIARIES.find((s) => s.slug === slug);
}

export function getSubsidiaryByName(name: string): Subsidiary | undefined {
  return SUBSIDIARIES.find((s) => s.name === name);
}
