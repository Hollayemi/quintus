// ─────────────────────────────────────────────────────────────────────────────
// IMAGE CONFIG: every photo on the website is defined here and nowhere else.
//
// The photos below are PLACEHOLDER stock images (Unsplash) so the site looks
// complete during development. To use your own project photos:
//   1. drop the files into /public/images/ (e.g. /public/images/ikoyi-villa.jpg)
//   2. replace the `src` of any entry below with "/images/ikoyi-villa.jpg"
//      (or swap `unsplash("...")` for the local path)
// Nothing else in the codebase needs to change.
// ─────────────────────────────────────────────────────────────────────────────

const UNSPLASH = "https://images.unsplash.com/photo-";

/** Build an Unsplash CDN URL from a photo id. */
export const unsplash = (id: string, width = 1200) =>
  `${UNSPLASH}${id}?auto=format&fit=crop&w=${width}&q=75`;

export type Photo = { src: string; alt: string };

/** Home hero background slideshow. Add, remove or reorder freely (landscape photos work best). */
export const heroSlides: (Photo & { label: string })[] = [
  {
    src: unsplash("1599995903128-531fc7fb694b", 2400),
    alt: "Construction cranes over a building site with concrete foundations at low sun",
    label: "Foundations",
  },
  {
    src: unsplash("1508450859948-4e04fabaa4ea", 2400),
    alt: "Grey concrete building frame under construction",
    label: "Structure",
  },
  {
    src: unsplash("1580587771525-78b9dba3b914", 2400),
    alt: "Contemporary concrete villa under a blue sky",
    label: "Buildings",
  },
  {
    src: unsplash("1774931363306-5a896cd4dd02", 2400),
    alt: "Construction workers pouring concrete on a sunny day",
    label: "On site",
  },
];

// ── Fixed slots used across the pages ────────────────────────────────────────
export const images = {
  /** Used for social sharing previews (first hero slide) */
  hero: heroSlides[0],
  /** Home: "Structure you can see" trio */
  structural: [
    {
      src: unsplash("1517011453931-c30f571a4fab", 1000),
      alt: "Steel frame of a building rising above the city",
      caption: "Steel frame erection",
    },
    {
      src: unsplash("1768677903496-becc4be07258", 1000),
      alt: "Construction worker inspecting rebar on a building site",
      caption: "Rebar inspection before every pour",
    },
    {
      src: unsplash("1444847840129-0ac27946a0a7", 1000),
      alt: "Scaffolding against a building under construction",
      caption: "Scaffold access to upper floors",
    },
  ],
  /** About page, wide banner (below the hero) */
  aboutBanner: {
    src: unsplash("1774931363306-5a896cd4dd02", 2000),
    alt: "Construction workers pouring concrete on a sunny day",
  },
  /** About page, side image */
  aboutSide: {
    src: unsplash("1608303588026-884930af2559", 1200),
    alt: "People reviewing architectural blueprints on a desk",
  },
  /** Services page, banner */
  servicesBanner: {
    src: unsplash("1541888946425-d81bb19240f5", 2000),
    alt: "Construction workers standing together on site",
  },
  /** Sub-page hero backgrounds (full-bleed, darkened automatically) */
  pageHero: {
    about: {
      src: unsplash("1599995903128-531fc7fb694b", 2400),
      alt: "Construction cranes over a building site with concrete foundations at low sun",
    },
    services: {
      src: unsplash("1535732759880-bbd5c7265e3f", 2400),
      alt: "Tower crane seen from below",
    },
    projects: {
      src: unsplash("1580587771525-78b9dba3b914", 2400),
      alt: "Contemporary concrete villa under a blue sky",
    },
    contact: {
      src: unsplash("1608303588026-884930af2559", 2400),
      alt: "People reviewing architectural blueprints on a desk",
    },
  },
  /** Contact page, side image */
  contactSide: {
    src: unsplash("1721244654394-36a7bc2da288", 1200),
    alt: "Architectural blueprint of a multi-storey building",
  },
};

// ── Sector showcase (Home), keyed by `slug` in config/site.ts ────────────────
export const sectorImages: Record<string, Photo> = {
  residential: { src: unsplash("1721815693498-cc28507c0ba2", 1400), alt: "Two-storey house with balconies and large windows" },
  commercial: { src: unsplash("1565008447742-97f6f38c985c", 1400), alt: "Tall commercial buildings under a cloudy blue sky" },
  industrial: { src: unsplash("1627052428109-576e839d100a", 1400), alt: "Tall metal silos with ladders against a clear sky" },
  healthcare: { src: unsplash("1586773860418-d37222d8fce3", 1400), alt: "Concrete healthcare building under a blue sky" },
  education: { src: unsplash("1705810591530-02053b1a9954", 1400), alt: "School building with a sports court in front" },
  faith: { src: unsplash("1555696958-c5049b866f6f", 1400), alt: "Brown concrete church building" },
  infrastructure: { src: unsplash("1562033291-d09c5d4cb8cc", 1400), alt: "Grey concrete flyover" },
};

// ── Project gallery (Projects page + Home "Selected work") ───────────────────
export type Category = "exterior" | "interior" | "site";

export type Work = Photo & {
  id: string;
  category: Category;
  title: string;
  note: string;
};

export const categories: { key: "all" | Category; label: string }[] = [
  { key: "all", label: "All work" },
  { key: "exterior", label: "Buildings" },
  { key: "interior", label: "Interiors & finishes" },
  { key: "site", label: "Structure & site" },
];

const w = (
  id: string,
  photo: string,
  category: Category,
  title: string,
  note: string,
): Work => ({ id, src: unsplash(photo, 900), alt: `${title}. ${note}`, category, title, note });

export const works: Work[] = [
  // Buildings
  w("b-concrete-timber", "1613490493576-7fde63acd811", "exterior", "Concrete and timber residence", "Board-marked concrete massing with timber detailing."),
  w("b-villa", "1580587771525-78b9dba3b914", "exterior", "Contemporary villa", "Stepped concrete volumes under open sky."),
  w("b-balconies", "1721815693498-cc28507c0ba2", "exterior", "Two-storey house with balconies", "Large glazed openings and projecting balconies."),
  w("b-white", "1628012209120-d9db7abf7eab", "exterior", "White modern frontage", "Clean render finish with flat roof lines."),
  w("b-family", "1513584684374-8bab748fbf90", "exterior", "Two-storey family house", "Pitched-roof home with generous glazing."),
  w("b-pool", "1512917774080-9991f1c4c750", "exterior", "Residence with pool", "Concrete-framed house with an in-ground pool."),
  w("b-pool-lounge", "1706808849780-7a04fbac83ef", "exterior", "Pool terrace", "Modern house with pool and lounge area."),

  // Interiors
  w("i-living", "1724582586529-62622e50c0b3", "interior", "Living room with large window", "Open living space with floor-to-ceiling glazing."),
  w("i-sofas", "1628744876497-eb30460be9f6", "interior", "Bright lounge", "Modern living room with generous daylight."),
  w("i-living-kitchen", "1649083048337-4aeb6dda80bb", "interior", "Open-plan living and kitchen", "Connected living, dining and kitchen areas."),
  w("i-kitchen", "1628745277862-bc0b2d68c50c", "interior", "White and timber kitchen", "Clean-lined units with a timber counter."),
  w("i-hallway", "1724765440530-e3954ac2e61d", "interior", "Hallway to living and dining", "Circulation spine linking the main rooms."),
  w("i-bathroom", "1650894622076-e09ab837c502", "interior", "Bathroom", "Full-height mirror and a fitted vanity."),
  w("i-living-2", "1600210492493-0946911123ea", "interior", "Living room with brown sofa", "Warm palette against a large glass wall."),

  // Structure & site
  w("s-steel-frame", "1517011453931-c30f571a4fab", "site", "Steel frame", "Structural steel rising above the urban skyline."),
  w("s-worker-frame", "1587582423116-ec07293f0395", "site", "Work at height", "Site operative on the building frame."),
  w("s-rebar", "1768677903496-becc4be07258", "site", "Rebar inspection", "Reinforcement checked before concrete is poured."),
  w("s-pour", "1774931363306-5a896cd4dd02", "site", "Concrete pour", "Crew placing concrete on a sunny day."),
  w("s-concrete-frame", "1508450859948-4e04fabaa4ea", "site", "Concrete frame", "In-situ concrete structure under construction."),
  w("s-scaffold", "1444847840129-0ac27946a0a7", "site", "Scaffolding", "Scaffold access along the building face."),
  w("s-cranes", "1599995903128-531fc7fb694b", "site", "Foundations and cranes", "Foundation works at low sun with cranes overhead."),
  w("s-team", "1541888946425-d81bb19240f5", "site", "Site team", "Workers in hard hats and safety vests."),
  w("s-excavator", "1503708928676-1cb796a0891e", "site", "Earthworks", "Excavator working on site preparation."),
  w("s-plans", "1608303588026-884930af2559", "site", "Reviewing the drawings", "Team checking blueprints before work starts."),
];

export const byId = (id: string) => {
  const found = works.find((x) => x.id === id);
  if (!found) throw new Error(`Unknown work id: ${id}`);
  return found;
};
