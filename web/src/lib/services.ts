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
  heroImage: string;
  /** A different image used inside the page body, so it doesn't repeat the header. */
  bodyImage?: string;
};

/** Shared one-line description of each subsidiary, keyed by name. */
export const SUBSIDIARY_BLURBS: Record<string, string> = {
  "DIPON Construction Limited":
    "The Group's core build capability: civil engineering, building construction, and general contracting.",
  "DIPON Global Resources Limited":
    "The commercial engine behind every project: trading, supply chain, real estate, agriculture, and logistics.",
  "DIPON Infrastructure Limited":
    "The Group's power and property arm: renewable energy, power infrastructure, housing development, and environmental services.",
};

// Short hover-preview clips per service (self-hosted in /public/cards), keyed by
// slug so cards across the site (homepage, services list) share one source.
export const SERVICE_VIDEOS: Record<string, string> = {
  "construction-civil-engineering": "/cards/construction.mp4",
  "renewable-energy-power": "/cards/power.mp4",
  "real-estate-property": "/cards/realestate.mp4",
  "environmental-services": "/cards/environmental.mp4",
  "trading-supply-chain": "/cards/warehouse.mp4",
  "transportation-logistics": "/cards/trade.mp4",
  agriculture: "/cards/agriculture.mp4",
};

export const SERVICES: Service[] = [
  {
    slug: "construction-civil-engineering",
    num: "01",
    title: "Construction & Civil Engineering",
    titleLong: "Construction & Civil Engineering",
    summary: "Civil works, buildings, roads, and structural fabrication delivered end to end.",
    intro:
      "From groundworks to handover, we build the civil and structural backbone of projects across Nigeria, and stand behind every stage.",
    overviewHeading: "Civil and building works, built to one standard.",
    overview: [
      "DIPON Construction delivers civil engineering, building construction, and general contracting as the Group's core build capability. We take on roads, structures, and buildings as a single accountable contractor rather than a chain of vendors.",
      "Because design, build, and power sit inside one group, work moves forward without the coordination risk that usually stalls a site.",
      "Every project runs to one standard of workmanship and safety, with a single point of accountability from the first survey to final handover, so clients deal with the Group rather than a tangle of subcontractors. We work across public and private projects, scaling the same disciplined approach from individual buildings to multi-site civil works.",
    ],
    capabilities: [
      { title: "Civil Works & Earthworks", desc: "Site preparation, drainage, and groundworks for projects of every scale." },
      { title: "Building Construction", desc: "Residential, commercial, and institutional buildings from foundation to finish." },
      { title: "Roads & Infrastructure", desc: "Access roads, pavements, and the civil infrastructure that supports them." },
      { title: "Structural Fabrication", desc: "Steel and structural fabrication engineered to specification." },
      { title: "Project Management", desc: "On-site coordination, scheduling, and quality control across every trade." },
      { title: "Renovation & Remodeling", desc: "Upgrades, refurbishment, and fit-out of existing structures." },
    ],
    deliveredBy: "DIPON Construction Limited",
    imageQuery: "construction",
    imageLock: 32,
    heroImage: "https://images.pexels.com/photos/17297091/pexels-photo-17297091.jpeg?auto=compress&cs=tinysrgb&w=1200",
    bodyImage: "https://images.pexels.com/photos/30396647/pexels-photo-30396647.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    slug: "renewable-energy-power",
    num: "02",
    title: "Renewable Energy & Power",
    titleLong: "Renewable Energy & Power Infrastructure",
    summary: "Solar systems, street lighting, and power infrastructure engineered for reliability.",
    intro:
      "We design and install renewable power and lighting that keep projects and communities running, woven into how we build, not bolted on afterward.",
    overviewHeading: "Clean power, engineered into the build.",
    overview: [
      "DIPON Infrastructure delivers renewable energy and power infrastructure, from solar systems to public lighting. Power is planned alongside construction so sites are energized on schedule.",
      "This is sustainability treated as a delivery discipline: reliable systems that lower running costs and carbon over the life of a project.",
      "Whether it's a standalone solar installation, street lighting for an estate, or power infrastructure for a larger development, systems are sized to real demand and built to keep running with minimal intervention. Because the same group handles the civil and electrical work, power is integrated cleanly into the build rather than retrofitted afterward.",
    ],
    capabilities: [
      { title: "Solar Power Systems", desc: "Design, supply, and installation of solar generation for buildings and sites." },
      { title: "Street & Public Lighting", desc: "Solar and grid street lighting for estates, roads, and communities." },
      { title: "Power Infrastructure", desc: "Distribution, backup, and power systems built for reliability." },
      { title: "Energy Advisory", desc: "Sizing and planning to match power supply to real demand." },
      { title: "Backup & Storage", desc: "Battery storage and backup systems for uninterrupted supply." },
      { title: "Maintenance & Monitoring", desc: "Servicing and performance monitoring that keep systems at peak output." },
    ],
    deliveredBy: "DIPON Infrastructure Limited",
    imageQuery: "solar",
    imageLock: 51,
    heroImage: "https://images.pexels.com/photos/38804912/pexels-photo-38804912.jpeg?auto=compress&cs=tinysrgb&w=1200",
    bodyImage: "https://images.pexels.com/photos/6729421/pexels-photo-6729421.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    slug: "real-estate-property",
    num: "03",
    title: "Real Estate & Property",
    titleLong: "Real Estate & Property Development",
    summary: "Housing and property development from groundbreaking to occupancy.",
    intro:
      "We develop property end to end: securing land, building, powering, and delivering spaces that are ready to live and work in.",
    overviewHeading: "Property, developed to occupancy.",
    overview: [
      "DIPON develops real estate and housing with the build and power capability of the wider Group behind it. A development can move from land to occupancy without handing off between unrelated firms.",
      "The result is property delivered on a single accountable timeline, with construction and infrastructure coordinated from day one.",
      "From site selection and feasibility through construction, power, and handover, each stage is managed under one roof, which keeps timelines tighter and quality consistent. The aim is property that's genuinely ready for occupancy, not a shell left waiting on other trades to finish.",
    ],
    capabilities: [
      { title: "Housing Development", desc: "Residential estates and homes developed through to completion." },
      { title: "Commercial Property", desc: "Offices and commercial spaces built and fitted for occupancy." },
      { title: "Land & Site Development", desc: "Acquisition, planning, and servicing of development land." },
      { title: "Project Delivery", desc: "End-to-end delivery coordinated with construction and power teams." },
      { title: "Facility Management", desc: "Ongoing management and upkeep of completed developments." },
      { title: "Property Advisory", desc: "Feasibility, planning, and advisory for property investments." },
    ],
    deliveredBy: "DIPON Global Resources Limited",
    imageQuery: "apartment",
    imageLock: 20,
    heroImage: "https://images.pexels.com/photos/37224965/pexels-photo-37224965.jpeg?auto=compress&cs=tinysrgb&w=1200",
    bodyImage: "https://images.pexels.com/photos/40747788/pexels-photo-40747788.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    slug: "environmental-services",
    num: "04",
    title: "Environmental Services",
    titleLong: "Environmental Services",
    summary: "Junk removal, waste management, janitorial, and housekeeping that keep spaces clean and healthy.",
    intro:
      "We keep buildings and sites clean, safe, and clutter-free, from waste removal to day-to-day housekeeping, carrying decades of facility-services experience.",
    overviewHeading: "Clean, healthy spaces, kept that way.",
    overview: [
      "Our environmental services build on Bio Janitorial Service, Inc., the Arizona facility-services company our founder started in 1990 and grew into a recognized name in integrated building maintenance. The same standards, quality, reliability, and doing the work better than before, now shape how we care for spaces here.",
      "From junk removal and waste management to janitorial and housekeeping, we keep homes, offices, and commercial sites in order, with teams that show up, follow the details, and leave things properly clean.",
      "We tailor the work to each space, whether that's a one-off clear-out, routine janitorial rounds, or full facility upkeep, and hold the same standard for a home, an office, or a busy commercial site. Reliability is the point: teams that arrive on time, work to a checklist, and keep spaces consistently clean.",
    ],
    capabilities: [
      { title: "Junk Removal", desc: "Clearing, hauling, and responsible disposal of unwanted items and debris." },
      { title: "Waste Management", desc: "Collection, sorting, and safe disposal that keeps sites clean and compliant." },
      { title: "Janitorial Services", desc: "Routine and deep cleaning for offices, commercial, and institutional spaces." },
      { title: "Housekeeping", desc: "Day-to-day upkeep that keeps homes and facilities spotless and in order." },
      { title: "Facility Maintenance", desc: "Scheduled upkeep that keeps buildings running and presentable." },
      { title: "Grounds & Exterior Care", desc: "Outdoor cleaning, grounds upkeep, and overall site presentation." },
    ],
    deliveredBy: "DIPON Global Resources Limited",
    imageQuery: "cleaning",
    imageLock: 45,
    heroImage: "https://images.pexels.com/photos/33691603/pexels-photo-33691603.jpeg?auto=compress&cs=tinysrgb&w=1200",
    bodyImage: "https://images.pexels.com/photos/9222622/pexels-photo-9222622.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    slug: "trading-supply-chain",
    num: "05",
    title: "Trading & Supply Chain",
    titleLong: "Trading & Supply Chain",
    summary: "Import/export, materials supply, and product marketing across sectors.",
    intro:
      "We source, import, and supply the materials and products that projects and partners depend on, reliably and at scale.",
    overviewHeading: "Materials and products, supplied reliably.",
    overview: [
      "DIPON Global Resources runs the Group's trading and supply chain: import and export, materials supply, and product marketing. It's the commercial engine that keeps sites stocked and partners served.",
      "Sourcing sits close to our own construction demand, so supply is planned against real project needs rather than guesswork.",
      "Beyond our own projects, we supply materials and products to partners across sectors, drawing on established sourcing channels to keep quality consistent and pricing competitive. Procurement, warehousing, and distribution are handled together, so what's ordered arrives where and when it's needed.",
    ],
    capabilities: [
      { title: "Import & Export", desc: "International sourcing and trade across product categories." },
      { title: "Materials Supply", desc: "Construction and industrial materials delivered to site." },
      { title: "Product Marketing", desc: "Distribution and marketing of goods to market." },
      { title: "Procurement", desc: "Sourcing and procurement managed against project schedules." },
      { title: "Warehousing & Storage", desc: "Secure storage and inventory handling for stock and materials." },
      { title: "Vendor Management", desc: "Qualified supplier networks managed for quality and price." },
    ],
    deliveredBy: "DIPON Global Resources Limited",
    imageQuery: "warehouse",
    imageLock: 71,
    heroImage: "https://images.pexels.com/photos/19574416/pexels-photo-19574416.jpeg?auto=compress&cs=tinysrgb&w=1200",
    bodyImage: "https://images.pexels.com/photos/36143083/pexels-photo-36143083.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    slug: "transportation-logistics",
    num: "06",
    title: "Transportation & Logistics",
    titleLong: "Transportation & Logistics",
    summary: "Movement of goods, materials, and equipment where and when they're needed.",
    intro:
      "We move goods, materials, and equipment across the country, keeping supply and project sites running on schedule.",
    overviewHeading: "Goods and equipment, moved on schedule.",
    overview: [
      "DIPON Global Resources handles transportation and logistics for the Group and its partners, moving materials, goods, and equipment to where they're needed.",
      "Logistics planned alongside supply and construction means fewer delays at the point that usually costs projects the most: getting materials to site.",
      "Our fleet and logistics teams move everything from bulk construction materials to heavy equipment and finished goods, across single deliveries or ongoing project supply. Routes and schedules are planned around deadlines, with the flexibility to handle time-critical or outsized loads.",
    ],
    capabilities: [
      { title: "Freight & Haulage", desc: "Road transport of goods and bulk materials." },
      { title: "Equipment Movement", desc: "Transport of plant and heavy equipment to site." },
      { title: "Distribution", desc: "Last-mile delivery and distribution of products." },
      { title: "Logistics Planning", desc: "Coordination of movement against project timelines." },
      { title: "Fleet Services", desc: "Managed vehicles and drivers for scheduled and ad-hoc movement." },
      { title: "Project Logistics", desc: "End-to-end logistics for large or time-critical project loads." },
    ],
    deliveredBy: "DIPON Global Resources Limited",
    imageQuery: "truck",
    imageLock: 63,
    heroImage: "https://images.pexels.com/photos/28264496/pexels-photo-28264496.jpeg?auto=compress&cs=tinysrgb&w=1200",
    bodyImage: "https://images.pexels.com/photos/6563903/pexels-photo-6563903.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    slug: "agriculture",
    num: "07",
    title: "Agriculture",
    titleLong: "Agriculture",
    summary: "Agricultural production and supply that supports food and value chains.",
    intro:
      "We invest in agricultural production and supply, contributing to food security and building out the value chains around it.",
    overviewHeading: "Production and supply, from farm to market.",
    overview: [
      "DIPON Global Resources extends the Group into agriculture: production and supply that broadens our commercial base and supports local food value chains.",
      "Backed by the Group's logistics and trading capability, agricultural output can move from production to market through channels we already run.",
      "We focus on production and supply that strengthen local food value chains, from inputs through aggregation and distribution to market. It's a long-term investment in capability that complements the Group's trading and logistics base rather than standing apart from it.",
    ],
    capabilities: [
      { title: "Agricultural Production", desc: "Cultivation and production of agricultural output." },
      { title: "Supply & Distribution", desc: "Getting produce to market through Group logistics." },
      { title: "Inputs & Materials", desc: "Supply of agricultural inputs and materials." },
      { title: "Value Chain Development", desc: "Building out the links between production and market." },
      { title: "Farm Inputs Supply", desc: "Seeds, fertilizer, and equipment supplied to growers." },
      { title: "Storage & Aggregation", desc: "Aggregation and storage that steady supply to market." },
    ],
    deliveredBy: "DIPON Global Resources Limited",
    imageQuery: "farm",
    imageLock: 84,
    heroImage: "https://images.pexels.com/photos/27879118/pexels-photo-27879118.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
];

export function getService(slug: string): Service | undefined {
  return SERVICES.find((s) => s.slug === slug);
}
