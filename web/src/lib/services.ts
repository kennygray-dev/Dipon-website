export type ServiceCapability = { title: string; desc: string };

export type Service = {
  slug: string;
  num: string;
  title: string;
  titleLong: string;
  summary: string;
  intro: string;
  overviewHeading: string;
  overview: string[];
  capabilities: ServiceCapability[];
  deliveredBy: string;
  imageQuery: string;
  imageLock: number;
};

/** Shared one-line description of each subsidiary, keyed by name. */
export const SUBSIDIARY_BLURBS: Record<string, string> = {
  "DIPON Construction Limited":
    "The Group's core build capability — civil engineering, building construction, and general contracting.",
  "DIPON Global Resources Limited":
    "The commercial engine behind every project — trading, supply chain, real estate, agriculture, and logistics.",
  "DIPON Infrastructure Limited":
    "The Group's power and property arm — renewable energy, power infrastructure, and housing development.",
};

export const SERVICES: Service[] = [
  {
    slug: "construction-civil-engineering",
    num: "01",
    title: "Construction & Civil Engineering",
    titleLong: "Construction & Civil Engineering",
    summary: "Civil works, buildings, roads, and structural fabrication delivered end to end.",
    intro:
      "From groundworks to handover, we build the civil and structural backbone of projects across Nigeria — and stand behind every stage.",
    overviewHeading: "Civil and building works, built to one standard.",
    overview: [
      "DIPON Construction delivers civil engineering, building construction, and general contracting as the Group's core build capability. We take on roads, structures, and buildings as a single accountable contractor rather than a chain of vendors.",
      "Because design, build, and power sit inside one group, work moves forward without the coordination risk that usually stalls a site.",
    ],
    capabilities: [
      { title: "Civil Works & Earthworks", desc: "Site preparation, drainage, and groundworks for projects of every scale." },
      { title: "Building Construction", desc: "Residential, commercial, and institutional buildings from foundation to finish." },
      { title: "Roads & Infrastructure", desc: "Access roads, pavements, and the civil infrastructure that supports them." },
      { title: "Structural Fabrication", desc: "Steel and structural fabrication engineered to specification." },
    ],
    deliveredBy: "DIPON Construction Limited",
    imageQuery: "construction",
    imageLock: 32,
  },
  {
    slug: "renewable-energy-power",
    num: "02",
    title: "Renewable Energy & Power",
    titleLong: "Renewable Energy & Power Infrastructure",
    summary: "Solar systems, street lighting, and power infrastructure engineered for reliability.",
    intro:
      "We design and install renewable power and lighting that keep projects and communities running — woven into how we build, not bolted on afterward.",
    overviewHeading: "Clean power, engineered into the build.",
    overview: [
      "DIPON Infrastructure delivers renewable energy and power infrastructure, from solar systems to public lighting. Power is planned alongside construction so sites are energized on schedule.",
      "This is sustainability treated as a delivery discipline — reliable systems that lower running costs and carbon over the life of a project.",
    ],
    capabilities: [
      { title: "Solar Power Systems", desc: "Design, supply, and installation of solar generation for buildings and sites." },
      { title: "Street & Public Lighting", desc: "Solar and grid street lighting for estates, roads, and communities." },
      { title: "Power Infrastructure", desc: "Distribution, backup, and power systems built for reliability." },
      { title: "Energy Advisory", desc: "Sizing and planning to match power supply to real demand." },
    ],
    deliveredBy: "DIPON Infrastructure Limited",
    imageQuery: "solar",
    imageLock: 51,
  },
  {
    slug: "real-estate-property",
    num: "03",
    title: "Real Estate & Property",
    titleLong: "Real Estate & Property Development",
    summary: "Housing and property development from groundbreaking to occupancy.",
    intro:
      "We develop property end to end — securing land, building, powering, and delivering spaces that are ready to live and work in.",
    overviewHeading: "Property, developed to occupancy.",
    overview: [
      "DIPON develops real estate and housing with the build and power capability of the wider Group behind it. A development can move from land to occupancy without handing off between unrelated firms.",
      "The result is property delivered on a single accountable timeline, with construction and infrastructure coordinated from day one.",
    ],
    capabilities: [
      { title: "Housing Development", desc: "Residential estates and homes developed through to completion." },
      { title: "Commercial Property", desc: "Offices and commercial spaces built and fitted for occupancy." },
      { title: "Land & Site Development", desc: "Acquisition, planning, and servicing of development land." },
      { title: "Project Delivery", desc: "End-to-end delivery coordinated with construction and power teams." },
    ],
    deliveredBy: "DIPON Global Resources Limited",
    imageQuery: "apartment",
    imageLock: 20,
  },
  {
    slug: "trading-supply-chain",
    num: "04",
    title: "Trading & Supply Chain",
    titleLong: "Trading & Supply Chain",
    summary: "Import/export, materials supply, and product marketing across sectors.",
    intro:
      "We source, import, and supply the materials and products that projects and partners depend on — reliably and at scale.",
    overviewHeading: "Materials and products, supplied reliably.",
    overview: [
      "DIPON Global Resources runs the Group's trading and supply chain — import and export, materials supply, and product marketing. It's the commercial engine that keeps sites stocked and partners served.",
      "Sourcing sits close to our own construction demand, so supply is planned against real project needs rather than guesswork.",
    ],
    capabilities: [
      { title: "Import & Export", desc: "International sourcing and trade across product categories." },
      { title: "Materials Supply", desc: "Construction and industrial materials delivered to site." },
      { title: "Product Marketing", desc: "Distribution and marketing of goods to market." },
      { title: "Procurement", desc: "Sourcing and procurement managed against project schedules." },
    ],
    deliveredBy: "DIPON Global Resources Limited",
    imageQuery: "warehouse",
    imageLock: 71,
  },
  {
    slug: "transportation-logistics",
    num: "05",
    title: "Transportation & Logistics",
    titleLong: "Transportation & Logistics",
    summary: "Movement of goods, materials, and equipment where and when they're needed.",
    intro:
      "We move goods, materials, and equipment across the country — keeping supply and project sites running on schedule.",
    overviewHeading: "Goods and equipment, moved on schedule.",
    overview: [
      "DIPON Global Resources handles transportation and logistics for the Group and its partners — moving materials, goods, and equipment to where they're needed.",
      "Logistics planned alongside supply and construction means fewer delays at the point that usually costs projects the most: getting materials to site.",
    ],
    capabilities: [
      { title: "Freight & Haulage", desc: "Road transport of goods and bulk materials." },
      { title: "Equipment Movement", desc: "Transport of plant and heavy equipment to site." },
      { title: "Distribution", desc: "Last-mile delivery and distribution of products." },
      { title: "Logistics Planning", desc: "Coordination of movement against project timelines." },
    ],
    deliveredBy: "DIPON Global Resources Limited",
    imageQuery: "truck",
    imageLock: 63,
  },
  {
    slug: "agriculture",
    num: "06",
    title: "Agriculture",
    titleLong: "Agriculture",
    summary: "Agricultural production and supply that supports food and value chains.",
    intro:
      "We invest in agricultural production and supply — contributing to food security and building out the value chains around it.",
    overviewHeading: "Production and supply, from farm to market.",
    overview: [
      "DIPON Global Resources extends the Group into agriculture — production and supply that broadens our commercial base and supports local food value chains.",
      "Backed by the Group's logistics and trading capability, agricultural output can move from production to market through channels we already run.",
    ],
    capabilities: [
      { title: "Agricultural Production", desc: "Cultivation and production of agricultural output." },
      { title: "Supply & Distribution", desc: "Getting produce to market through Group logistics." },
      { title: "Inputs & Materials", desc: "Supply of agricultural inputs and materials." },
      { title: "Value Chain Development", desc: "Building out the links between production and market." },
    ],
    deliveredBy: "DIPON Global Resources Limited",
    imageQuery: "farm",
    imageLock: 84,
  },
];

export function getService(slug: string): Service | undefined {
  return SERVICES.find((s) => s.slug === slug);
}
