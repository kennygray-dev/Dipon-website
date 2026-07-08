/**
 * Sample blog content.
 *
 * This is placeholder data so the blog frontend can ship now. Once the
 * WordPress CMS is wired up, replace BLOG_POSTS (and the two lookup
 * helpers below) with a fetch against the WP REST API
 * (`/wp-json/wp/v2/posts?_embed`) or WPGraphQL — the `BlogPost` shape
 * below is written to map cleanly onto that response (title, excerpt,
 * rendered content, featured image, date, author, category).
 */

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  publishedAt: string;
  readTime: string;
  heroImage: string;
  body: string[];
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "inside-our-latest-housing-development",
    title: "Inside our latest housing development, from groundbreaking to handover.",
    excerpt:
      "A look at how DIPON Global Resources takes a residential development from land acquisition through to occupancy — and why that timeline stays on a single accountable team.",
    category: "Real Estate",
    author: "DIPON Group Team",
    publishedAt: "2026-06-18",
    readTime: "4 min read",
    heroImage: "https://images.pexels.com/photos/18153132/pexels-photo-18153132.jpeg?auto=compress&cs=tinysrgb&w=1200",
    body: [
      "Every development starts the same way: a site, a survey, and a plan for how people are actually going to live in the space once it's built. What changes project to project is everything after that — servicing the land, sequencing construction, and getting power and water running before the first family moves in.",
      "Because DIPON Global Resources sits inside a group that also builds and powers, a development doesn't stall at the usual handoff points. Construction, power infrastructure, and property management are coordinated from day one instead of contracted out separately and hoped into alignment.",
      "The result is a shorter, more predictable path from groundbreaking to occupancy — and a single team accountable for the outcome, not a chain of vendors pointing at each other when something slips.",
    ],
  },
  {
    slug: "why-solar-is-becoming-standard",
    title: "Why solar is becoming standard, not optional, on our sites.",
    excerpt:
      "Solar used to be an add-on we'd quote separately. On current projects, it's part of the base design — here's what changed.",
    category: "Sustainability",
    author: "DIPON Group Team",
    publishedAt: "2026-05-27",
    readTime: "3 min read",
    heroImage: "https://images.pexels.com/photos/18332045/pexels-photo-18332045.jpeg?auto=compress&cs=tinysrgb&w=1200",
    body: [
      "For years, renewable power was something clients bolted on after a build was already designed — a line item added late, usually under budget pressure, and often cut first. That's backwards, and it shows in how many sites still run on diesel as a primary source rather than a backup.",
      "DIPON Infrastructure now plans solar and power distribution alongside the civil and structural design, not after it. That means panel placement, load calculations, and backup systems are sized against how a building will actually be used, not retrofitted around finished architecture.",
      "It also means lower running costs for the people who occupy these buildings long after our team has moved to the next site — which is the point of treating sustainability as a delivery discipline instead of a marketing line.",
    ],
  },
  {
    slug: "the-case-for-one-accountable-group",
    title: "The case for one accountable group, not a chain of contractors.",
    excerpt:
      "Most project delays don't happen on site — they happen in the gaps between contractors. Here's why we structured DIPON Group to remove those gaps.",
    category: "Company News",
    author: "DIPON Group Team",
    publishedAt: "2026-05-09",
    readTime: "5 min read",
    heroImage: "https://images.pexels.com/photos/6082416/pexels-photo-6082416.jpeg?auto=compress&cs=tinysrgb&w=1200",
    body: [
      "Ask anyone who has run a large project in Nigeria where the time actually goes, and it's rarely the construction itself. It's the week lost waiting for a supplier, the month lost re-coordinating a power contractor after a design change, the dispute over who was responsible for a delay nobody wants to own.",
      "DIPON Group exists because that risk shouldn't sit with the client. By keeping construction, power infrastructure, real estate, and supply chain under one group, the handoffs that usually cause delay happen inside a single accountable team instead of between separate companies with separate incentives.",
      "That doesn't mean every project needs all three subsidiaries. It means that when it does, the coordination is already built in — and when something goes wrong, there's one group answering for it, not three pointing at each other.",
    ],
  },
  {
    slug: "meet-the-team-behind-global-resources",
    title: "Meet the team, powering DIPON Global Resources.",
    excerpt:
      "Trading, supply chain, logistics, and agriculture — a look at the commercial engine that keeps every DIPON site stocked and moving.",
    category: "People",
    author: "DIPON Group Team",
    publishedAt: "2026-04-22",
    readTime: "4 min read",
    heroImage: "https://images.pexels.com/photos/31445085/pexels-photo-31445085.jpeg?auto=compress&cs=tinysrgb&w=1200",
    body: [
      "DIPON Global Resources doesn't get the visibility that a finished building does, but it's the reason materials show up on schedule and equipment gets where it needs to go. Import and export, materials supply, distribution, and logistics all run through this one team.",
      "What makes it work is proximity to real demand. Because the team sources against DIPON Construction's own project pipeline rather than the open market alone, supply planning starts from what sites actually need next — not a forecast built in isolation.",
      "The same team also runs the Group's agricultural production and supply line, which broadens the commercial base and feeds local value chains beyond construction entirely. It's a wider mandate than the name suggests.",
    ],
  },
  {
    slug: "lessons-from-the-field-three-years-in",
    title: "Lessons from the field, three years in.",
    excerpt:
      "A few honest takeaways from three years of civil works, buildings, and structural fabrication across Nigerian sites.",
    category: "Construction",
    author: "DIPON Group Team",
    publishedAt: "2026-03-30",
    readTime: "4 min read",
    heroImage: "https://images.pexels.com/photos/8487763/pexels-photo-8487763.jpeg?auto=compress&cs=tinysrgb&w=1200",
    body: [
      "Three years in, the biggest lesson isn't technical — it's that most site problems are coordination problems wearing a technical costume. A late structural delivery is rarely about the steel; it's about a decision made three weeks earlier without the right people in the room.",
      "The second lesson is that groundworks deserve more respect than they usually get. Drainage and earthworks that look unremarkable on day one are the reason a building is still standing without settlement issues five years later.",
      "The third is simpler: accountability has to be structural, not just cultural. Telling a team to communicate better doesn't fix a broken handoff — putting design, build, and power under one group does.",
    ],
  },
  {
    slug: "what-we-look-for-when-hiring-site-engineers",
    title: "What we look for, when hiring site engineers.",
    excerpt:
      "We're not always actively hiring, but here's what stands out to us when we are — and why we're glad to meet people ahead of an open role.",
    category: "Careers",
    author: "DIPON Group Team",
    publishedAt: "2026-03-11",
    readTime: "3 min read",
    heroImage: "https://images.pexels.com/photos/5529746/pexels-photo-5529746.jpeg?auto=compress&cs=tinysrgb&w=1200",
    body: [
      "Technical competence gets a candidate an interview. What keeps someone on a DIPON site is judgment under pressure — the ability to flag a problem early rather than hope it resolves itself before the next inspection.",
      "We also look for people who are comfortable working across boundaries. Because our sites often involve construction, power, and sometimes supply chain teams working in parallel, engineers who default to 'that's not my scope' slow everyone down.",
      "We don't always have an open role posted, but we're always glad to hear from people who want to build with us. If that's you, introduce yourself below — we'll reach out when something fits.",
    ],
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((post) => post.slug === slug);
}

export function formatBlogDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
}
