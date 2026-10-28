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

/** Your own photos/videos live in /public/images. Reference them by file name. */
export const local = (file: string) => `/images/${file}`;

export type Photo = { src: string; alt: string };

// Real project media added in /public/images/new (alias → file). Videos live beside the photos.
export const NEW = {
  "r-207f1a": "new/207f1a8f-5e60-4dcd-8b6e-4ef42effda1f.JPG",
  "r-51e41e": "new/51e41ebc-06d3-4349-a693-c8ff32c8b135.JPG",
  "r-5e4a25": "new/5e4a256a-6993-4e83-a7e4-018829bfd053.JPG",
  "r-6de898": "new/6de8982e-955c-4b45-87ec-ce2c474c4ab5.JPG",
  "r-b7dbce": "new/b7dbce29-d6d8-40a7-a188-ed6b19de533f.JPG",
  "r-db3cae": "new/db3cae9a-f42c-47ca-97dd-0936184b61b1.JPG",
  "r-f245cd": "new/f245cddd-e94c-41de-9c48-5effef71546e.JPG",
  "hw-front-scaffold": "new/4379831e-7d80-4c29-af0a-3681954b0ed2.JPG",
  "hw-corner-scaffold": "new/415c638b-6eb4-4d29-afef-3c6d9e27e0ab.JPG",
  "hw-long-view": "new/05ab0bb0-0324-4cdf-a71f-abbf5a711288.JPG",
  "hw-front-balconies": "new/95104866-7c3d-4ae5-a190-ca8d0cdc4fd3.JPG",
  "hw-block-panels": "new/e319c448-0f96-450f-a3df-7585cede6473.JPG",
  "hw-side-panels": "new/b08ef6dd-7ee7-49b4-bac3-b0ed8319182d.JPG",
  "hw-end-scaffold": "new/df8d201e-13e0-4caf-89ce-8de2cb87bbba.JPG",
  "hw-lawn-view": "new/446c52ae-8ec7-4b3c-a2cb-67ff0c1af104.JPG",
  "hw-with-mast": "new/81f833c0-725f-4f79-b01b-a8fe4ff59bd3.JPG",
  "hw-through-trees": "new/63d5af7b-b571-4b48-9bbc-df86b9015135.JPG",
  "hw-wide": "new/d57a16c2-9370-44f7-a013-afce4c596dd4.JPG",
  "hw-wide-2": "new/ed04a6aa-1a76-4787-9df2-d29d976d6b1b.JPG",
  "hw-upper-floor": "new/f7e8e502-8849-4167-857b-c517d8fd0ef6.JPG",
  "hw-wide-3": "new/fb330aa9-f387-4864-97b7-b5edc2d664ba.JPG",
  "hy-front": "new/01cb229b-76e2-4586-9b1f-84dd11817e7f.JPG",
  "hy-corner": "new/1615bea5-0243-4099-9f37-ad9a2c74c867.JPG",
  "hy-end": "new/e9b8344a-5672-4d5c-9794-0f31920531d0.JPG",
  "hy-doors": "new/fc078d39-0e7a-4e75-a1df-324abaf974ad.JPG",
  "hy-corridor": "new/7196bb06-b1a2-401f-a3a8-012c7ee1013b.JPG",
  "hy-team": "new/a6f406dc-f669-404d-aca2-2e03d258ba34.JPG",
  "hy-washroom": "new/fcf630ad-d7f7-472c-971a-37584ec41f47.JPG",
  "hy-inspect-1": "new/2b970f5a-4df5-4350-a657-eb11ff69041e.JPG",
  "hy-inspect-2": "new/30cf3dcc-5186-427a-b9c0-f2c4aa5ab8ea.JPG",
  "hy-inspect-3": "new/8936324f-f97b-4b12-8c3c-43ec98ae5619.JPG",
  "hy-inspect-4": "new/9a9e4429-cb3e-42c2-afb8-2e5c5b2e7e25.JPG",
  "hy-measure": "new/c8564941-2127-4f7b-88b6-e9cca2d667ac.JPG",
  "v-64910aeb": "new/64910aeb-36c3-4099-9685-edbb13c2990a.MP4",
  "v-9b4bf266": "new/9b4bf266-17ab-4d8d-97db-1a945aee2a3c.MP4",
  "v-dbe0a8b7": "new/dbe0a8b7-00a7-4cdd-9411-0f893787adbc.MP4",
  "v-c4e2152a": "new/c4e2152a-c87f-42dd-8389-4e8e52407363.MP4",
  "v-ec6328e4": "new/ec6328e4-847a-416e-bc93-af72739f15fb.MP4",
  "v-89ff8966": "new/89ff8966-a4cf-4418-a3f9-5d79288329fe.MP4",
} as const;

// Finished officers' hostel photos added in /public/images/important
export const IMP = {
  "officers-finished": "important/177afe95-186e-4489-bd91-a4f56cd2d5d5.JPG",
  "officers-handover": "important/3f82a515-0fc8-4e07-81a4-b14fe8e5ee3e.JPG",
  "officers-row": "important/80a501da-eb6f-4613-b5be-9e6e2a57935d.JPG",
  "officers-forecourt": "important/cc0b2808-9315-47d0-8ee6-696f1d558e94.JPG",
  "officers-entrance": "important/f52f6f59-f4eb-4051-b98d-35ef741a8298.JPG",
  "officers-road": "important/hostel-road-crop.jpg",
} as const;
const im = (k: keyof typeof IMP) => local(IMP[k]);

/** Poster frames for the videos (made with ffmpeg). */
const poster = (k: string) => local(`new/posters/${k}.jpg`);
const nw = (k: keyof typeof NEW) => local(NEW[k]);

/** Real project media: Pinnacle Oil tank-farm works (Projects page case study). */
export const caseMedia = {
  hostel: {
    video: { src: nw("v-c4e2152a"), poster: poster("c4e2152a"), label: "Finished hostel blocks, Benin", aspect: "landscape" as const },
    photos: ["h-officers-finished", "h-officers-handover", "h-officers-entrance", "h-white-panels"],
  },
  roads: {
    video: { src: nw("v-64910aeb"), poster: poster("64910aeb"), label: "Grading the road formation, Lekki", aspect: "portrait" as const },
    photos: ["r-5e4a25", "r-b7dbce", "r-207f1a", "r-db3cae"],
  },
  tankFarm: {
    video: { src: local("vid1.mp4"), poster: local("vid1-poster.jpg"), label: "Cutting joint filler on a tank-farm slab", aspect: "portrait" as const },
    photos: ["t-rebar", "t-pour", "t-slab", "t-pipework"],
  },
};

/** @deprecated kept for older imports */
export const tankFarm = {
  video: {
    src: local("vid1.mp4"),
    poster: local("vid1-poster.jpg"),
    label: "Cutting joint filler on a tank-farm slab",
  },
};

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
      src: local("image7.jpeg"),
      alt: "Reinforcement mesh laid over compacted stone while the crew prepares a concrete pour",
      caption: "Reinforcement checked before every pour",
    },
    {
      src: local("image6.jpeg"),
      alt: "Fresh concrete placed against timber formwork, with pipework above",
      caption: "Concrete placed in formwork",
    },
  ],
  /** About page, wide banner (below the hero) */
  aboutBanner: {
    src: im("officers-row"),
    alt: "Stepped two-storey hostel blocks with Army personnel on the forecourt",
  },
  /** About page, side image */
  aboutSide: {
    src: unsplash("1608303588026-884930af2559", 1200),
    alt: "People reviewing architectural blueprints on a desk",
  },
  /** Services page, banner */
  servicesBanner: {
    src: local("image2.jpeg"),
    alt: "Parallel process pipelines running across a reinforced concrete base",
  },
  /** Sub-page hero backgrounds (full-bleed, darkened automatically) */
  pageHero: {
    about: {
      src: nw("hy-team"),
      alt: "Quintus staff and Army personnel standing together outside a finished hostel block",
    },
    services: {
      src: unsplash("1535732759880-bbd5c7265e3f", 2400),
      alt: "Tower crane seen from below",
    },
    projects: {
      src: im("officers-finished"),
      alt: "Completed two-storey officers' hostel with balconies",
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
  industrial: { src: local("image3.jpeg"), alt: "Large-diameter pipes crossing a concrete bund wall beside storage tanks" },
  healthcare: { src: unsplash("1586773860418-d37222d8fce3", 1400), alt: "Concrete healthcare building under a blue sky" },
  education: { src: im("officers-finished"), alt: "Completed two-storey hostel block with balconies" },
  faith: { src: unsplash("1555696958-c5049b866f6f", 1400), alt: "Brown concrete church building" },
  infrastructure: { src: unsplash("1562033291-d09c5d4cb8cc", 1400), alt: "Grey concrete flyover" },
};

// ── Project gallery (Projects page + Home "Selected work") ───────────────────
export type Category = "exterior" | "interior" | "site" | "industrial" | "roads" | "hostel";

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
  { key: "hostel", label: "Army hostel, Benin" },
  { key: "roads", label: "Roads & drainage" },
  { key: "industrial", label: "Industrial & tank farm" },
];

const w = (
  id: string,
  photo: string,
  category: Category,
  title: string,
  note: string,
): Work => ({ id, src: unsplash(photo, 900), alt: `${title}. ${note}`, category, title, note });

// Real project photo: file in /public/images
const real = (category: Category) => (id: string, file: string, title: string, note: string): Work => ({
  id,
  src: local(file),
  alt: `${title}. ${note}`,
  category,
  title,
  note,
});
const r = real("industrial");

export const works: Work[] = [
  // Finished 56-room officers' hostel (real photos, /public/images/important)
  real("hostel")("h-officers-finished", IMP["officers-finished"], "Officers' hostel, completed", "Two-storey block with balconies, covered verandas and a navy plinth band."),
  real("hostel")("h-officers-handover", IMP["officers-handover"], "Walk-through with the client", "Army officers and the project team in front of the completed block."),
  real("hostel")("h-officers-row", IMP["officers-row"], "Row of completed blocks", "Stepped two-storey blocks with balconies and a paved forecourt."),
  real("hostel")("h-officers-forecourt", IMP["officers-forecourt"], "Forecourt inspection", "Army personnel and the team inspecting the forecourt works."),
  real("hostel")("h-officers-entrance", IMP["officers-entrance"], "Entrance elevation", "Two-storey entrance front with balcony rails and a name board."),
  real("hostel")("h-officers-road", IMP["officers-road"], "Hostel seen from the road", "The completed block and its neighbours from the approach road."),

  // Other Army hostel blocks, Benin (real photos)
  real("hostel")("h-front", NEW["hy-front"], "Finished accommodation block", "Completed single-storey block with yellow render, navy plinth band and dark pitched roof."),
  real("hostel")("h-corner", NEW["hy-corner"], "Block corner and roof line", "Deep eaves, rainwater goods and a clean plinth detail along the block."),
  real("hostel")("h-end", NEW["hy-end"], "Block end elevation", "Corridor veranda and windows along the long side of the block."),
  real("hostel")("h-doors", NEW["hy-doors"], "Room doors and windows", "Rows of rooms with steel doors and casement windows."),
  real("hostel")("h-corridor", NEW["hy-corridor"], "Covered corridor", "Veranda circulation with timber-effect floor, serving the rooms."),
  real("hostel")("h-white-front", NEW["hw-front-balconies"], "Two-storey officers' block", "Two-storey block with balconies, scaffolding still up for finishes."),
  real("hostel")("h-white-long", NEW["hw-long-view"], "Long elevation under finishing", "The full length of the two-storey block seen from the lawn."),
  real("hostel")("h-white-panels", NEW["hw-block-panels"], "Block-panel feature wall", "Decorative perforated block panels in the stairwell wall."),
  real("hostel")("h-white-corner", NEW["hw-corner-scaffold"], "Corner under scaffold", "Bamboo scaffold access for plastering and painting."),
  real("hostel")("h-white-wide", NEW["hw-wide"], "Block seen across the grounds", "Landscaped grounds ahead of handover."),
  real("hostel")("h-inspect", NEW["hy-inspect-1"], "Client site inspection", "Army personnel and the project team walking the completed blocks."),
  real("hostel")("h-measure", NEW["hy-measure"], "Measuring up on site", "Team measuring external works with a measuring wheel."),
  real("hostel")("h-team", NEW["hy-team"], "Project and client team", "Quintus staff and Army personnel outside the block."),
  real("hostel")("h-washroom", NEW["hy-washroom"], "Washroom fit-out", "Row of wash basins in a tiled washroom."),

  // Alphamead Development Company, Lekki: road and drainage (real photos)
  real("roads")("r-207f1a", NEW["r-207f1a"], "Kerb laying beside the wall", "Branded crew setting a precast kerb along the carriageway edge."),
  real("roads")("r-51e41e", NEW["r-51e41e"], "Kerb alignment", "Checking line and level as kerbs go down."),
  real("roads")("r-5e4a25", NEW["r-5e4a25"], "Drainage channel laying", "Precast channel units being lowered into place."),
  real("roads")("r-6de898", NEW["r-6de898"], "Loading kerbs", "Precast units unloaded from the truck on site."),
  real("roads")("r-b7dbce", NEW["r-b7dbce"], "Channel run", "Drainage channel laid straight along the road edge."),
  real("roads")("r-db3cae", NEW["r-db3cae"], "Site supervision", "Crew member supervising kerb and channel works."),
  real("roads")("r-f245cd", NEW["r-f245cd"], "Setting out", "Setting out kerb positions before laying."),

  // Industrial & tank farm (real project photos from /public/images)
  r("t-pipework", "image1.jpeg", "Pipework on a concrete pad", "Process pipework laid across a reinforced concrete pad beside a storage tank."),
  r("t-corridor", "image2.jpeg", "Pipe corridor", "Parallel pipelines on supports over a concrete base, with flow arrows marked."),
  r("t-bund", "image3.jpeg", "Lines crossing the bund", "Large-diameter pipes passing through a concrete bund with tanks beyond."),
  r("t-slab", "image4.jpeg", "Slab between tank and bund wall", "Freshly finished slab with reinforcement mesh exposed at the edge."),
  r("t-corridor-wide", "image5.jpeg", "Pipe corridor, wide view", "The same corridor from a lower angle, running toward the tank shells."),
  r("t-pour", "image6.jpeg", "Concrete placement", "Fresh concrete placed against timber formwork, pipework above."),
  r("t-rebar", "image7.jpeg", "Reinforcement before the pour", "Rebar mesh over compacted stone as the crew prepares the next pour."),

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
