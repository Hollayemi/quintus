// Single source of truth for company content.
// Source: "Draft Quintus Projects Company Profile.docx" + "Company Profile (PDF)".
// Anything marked CONFIRM should be checked by the client before launch.

export const site = {
  name: "Quintus Projects",
  legalName: "Quintus Projects Ltd",
  rc: "1159162",
  established: 2013, // CONFIRM: from the DOCX draft ("Incorporated in 2013")
  tagline: "Creating bespoke spaces that enrich the human experience",
  url: "https://www.quintusprojects.com",
  // Logo files live in /public. Swap here to rebrand.
  logo: { dark: "/logo-mark.png", light: "/logo-mark-white.png" },
  email: "hello@quintusprojects.com",
  // CONFIRM: PDF back page prints ...936, the DOCX draft prints ...937.
  phoneDisplay: "+234 (0)1 453 7936",
  phoneHref: "tel:+23414537936",
  address: ["3 Adele Street, off Warehouse Road", "Apapa, Lagos, Nigeria"],
};

export const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "Company" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export const services = [
  {
    n: "01",
    title: "Building construction",
    scope:
      "Residential, commercial and institutional buildings, from substructure to finishes.",
  },
  {
    n: "02",
    title: "Civil engineering works",
    scope:
      "Roads, drainage, culverts, retaining walls, site preparation and external works.",
  },
  {
    n: "03",
    title: "Renovation and fit-out",
    scope:
      "Structural upgrades, refurbishment, remodelling and interior fit-out of occupied and vacant buildings.",
  },
  {
    n: "04",
    title: "Project management",
    scope:
      "Planning, scheduling, contractor coordination, site supervision and progress reporting on the client's behalf.",
  },
  {
    n: "05",
    title: "Cost consultancy",
    scope:
      "Bills of Quantities, cost estimates, tender documentation, valuations and final accounts.",
  },
  {
    n: "06",
    title: "Maintenance and facility works",
    scope:
      "Planned and reactive maintenance, repairs and minor works for estates and institutions.",
  },
];

// From the PDF profile ("Our Business" / "Our Expertise")
export const disciplines = [
  "Structural",
  "Civil",
  "Mechanical",
  "Electrical",
  "Public health",
  "Fire engineering",
  "Lighting design",
  "Security & safety",
];

export const sectors = [
  {
    slug: "residential",
    title: "Residential",
    text: "Estates, apartment blocks and private homes for developers and individual owners.",
  },
  {
    slug: "commercial",
    title: "Commercial",
    text: "Offices, retail, banking halls and mixed-use buildings.",
  },
  {
    slug: "industrial",
    title: "Industrial",
    text: "Gantries, tank-farm fabrication and industrial facilities, built around plant and process.",
  },
  {
    slug: "healthcare",
    title: "Healthcare",
    text: "Hospitals, clinics and diagnostic centres, including renovation of facilities that stay in operation.",
  },
  {
    slug: "education",
    title: "Education",
    text: "Schools, hostels, laboratories and campus infrastructure.",
  },
  {
    slug: "faith",
    title: "Faith & community",
    text: "Churches, mosques, halls and community facilities.",
  },
  {
    slug: "infrastructure",
    title: "Public & infrastructure",
    text: "Roads, drainage and public buildings for government and development agencies.",
  },
];

export const process = [
  {
    title: "Consultation & site assessment",
    text: "We understand the brief, visit the site and identify constraints and risks.",
  },
  {
    title: "Design coordination & costing",
    text: "We work with the client's consultants or our partners to finalise drawings, then prepare a detailed, priced Bill of Quantities.",
  },
  {
    title: "Planning & mobilisation",
    text: "We agree the programme, procurement schedule, site logistics and HSE plan before work starts.",
  },
  {
    title: "Construction & supervision",
    text: "Qualified engineers supervise daily; materials and workmanship are inspected at each stage.",
  },
  {
    title: "Reporting & cost control",
    text: "Regular progress reports with photos, programme status and spend against budget. Variations are priced and approved before execution.",
  },
  {
    title: "Commissioning & handover",
    text: "Snagging, testing, as-built documentation and handover, followed by a defects liability period.",
  },
];

export const values = [
  { title: "Integrity", text: "Honest estimates, transparent variations and no hidden costs." },
  { title: "Quality", text: "Work built to drawings, specifications and applicable codes, checked at every stage." },
  { title: "Safety", text: "Every worker goes home safe; HSE rules apply on every site, every day." },
  { title: "Accountability", text: "One point of responsibility, clear reporting and ownership of outcomes." },
  { title: "Value creation", text: "Building assets and skills that serve clients and communities for decades." },
];

export const qhse = [
  {
    title: "Quality assurance",
    points: [
      "Approved materials from reputable suppliers, with test certificates where required",
      "Stage inspections and sign-offs for setting out, reinforcement, concrete pours, blockwork, services and finishes",
      "Concrete cube and other material tests by accredited laboratories",
      "Snag lists closed out before handover",
    ],
  },
  {
    title: "Health & safety",
    points: [
      "Site-specific HSE plan and risk assessment before mobilisation",
      "Mandatory PPE, toolbox talks and induction for all workers and subcontractors",
      "Safe procedures for excavation, scaffolding and work at height",
      "First-aid provision and incident reporting on every site",
    ],
  },
  {
    title: "Environment & community",
    points: [
      "Waste, dust and noise controls to protect neighbours and occupied facilities",
      "Local hiring and local suppliers wherever practical",
    ],
  },
];

export const whyUs = [
  "One accountable partner from costing to handover, with no gap between consultant and contractor",
  "Cost certainty: priced Bills of Quantities and controlled variations, so the agreed budget is the delivered budget",
  "Programme discipline: realistic schedules, tracked weekly and reported openly",
  "Quality you can verify: documented inspections, material tests and stage sign-offs",
  "Safe, considerate sites, suited to occupied hospitals, schools and offices",
  "Financial strength: backed by a group with finance and asset-management expertise, enabling structured payment solutions for qualifying projects",
];

export const register = [
  {
    project: "Remodelling & renovation of a 4-floor hospital",
    client: "St. Paul's Hospital",
    sector: "Healthcare",
    location: "Yaba East",
    scope: "Remodelling and renovation works",
  },
  {
    project: "56-room officers' hostel",
    client: "Nigerian Army Training School",
    sector: "Institutional",
    location: "Benin",
    scope: "Built a 56-room, ultra-modern hostel",
  },
  {
    project: "20-room hostel for soldiers",
    client: "Nigerian Army",
    sector: "Institutional",
    location: "Benin",
    scope: "20 hostel rooms",
  },
  {
    project: "Construction of a gantry",
    client: "Pinnacle Oil",
    sector: "Industrial",
    location: "Lekki Free Trade Zone",
    scope: "Gantry construction",
  },
  {
    project: "Road and drainage construction works",
    client: "Alphamead Development Company",
    sector: "Civil",
    location: "Lekki, Lagos",
    scope: "Road formation, precast kerbs and drainage channels",
  },
  {
    project: "16 three-bedroom terraces",
    client: "Alphamead Development Company",
    sector: "Residential",
    location: "Ibeju-Lekki",
    scope: "16 units of 3-bedroom terraces",
  },
];

export const team = [
  {
    name: "Ololade Yahaya",
    role: "Managing Director",
    bio: "Seasoned civil and structural engineer with several years of hands-on experience in design implementation, project and construction management, customer relations and cost/budget planning. An expert in building technology, design and inspection.",
  },
  {
    name: "Adepehin Martins",
    role: "Executive Director",
    bio: "Civil Engineering graduate of the University of Lagos with a Master's in Energy Futures from the University of Aberdeen. Certified PMP and Scrum Master, with experience across civil engineering, oil and gas, IT and the public sector.",
  },
  {
    name: "Bisi Akinjide",
    role: "ESTIMATION MANAGER/QUANTITY SURVEYOR",
    bio: "Estimation Manager/Quantity Surveyor with expertise in construction cost estimation, preparation of Bills of Quantities (BOQ), project budgeting, cost control, tender preparation, and contract administration. Skilled in material take-offs, cost analysis, valuation of construction works, and variation assessment. Committed to ensuring accurate project costing, effective cost management, and budget compliance while maximizing profitability and delivering value across Quintus Projects Ltd.’s construction projects.",
  },
  {
    name: "Iyabo Atilola",
    role: "Finance Manager",
    bio: "HND, Federal Polytechnic Ilaro; associate member of ICAN. Over ten years in financial and management accounting, including as Finance Manager at Resort Securities and Trust Plc.",
  },
  {
    name: "Samuel Akin-Jesu Adewole ",
    role: "CIVIL ENGINEERING MANAGER",
    bio: "Civil engineering professional with years of experience in construction supervision, site management, and project execution. He has worked on multi-storey commercial building projects across Nigeria. His expertise includes interpreting architectural and structural drawings, supervising site personnel, preparing work schedules, interpreting Bills of Quantities, coordinating with quantity surveyors, structural analysis and design, and enforcing health and safety standards. He holds a degree from the Federal University of Technology, Minna, with proficiency in AutoCAD, ProtaStructure, Orion, and Microsoft Project.",
  },
  {
    name: "Ayomiposi Fadojutimi",
    role: "Technical Services Manager",
    bio: "Mechanical engineering graduate of the University of Ado-Ekiti; member of NSE and COREN. Nine years in HVAC installation and maintenance, rural electrification, and generator installation and maintenance.",
  },
  {
    name: "Ajibola Fakunle",
    role: "PROCUREMENT MANAGER ",
    bio: "Results-driven Procurement Manager with expertise in sourcing construction materials, negotiating with suppliers, managing vendor relationships, and ensuring timely, cost-effective procurement for construction projects. Skilled in cost control, inventory management, supplier evaluation, purchase order administration, and quality assurance. He is a graduate of University of Ilorin who is committed to maintaining procurement transparency, optimizing project budgets, and ensuring materials and equipment meet required specifications and delivery schedules to support efficient project execution.",
  },
];

// Projects page case studies. Media for each lives in config/images.ts (caseMedia).
// CONFIRM: wording against the project files.
export const caseStudies = [
  {
    key: "hostel" as const,
    title: "56-room officers' hostel, Nigerian Army Training School",
    text: "Accommodation blocks for 56 officers' rooms, taken from structure through plastering, painting and external works, with the client's team walking the site and inspecting progress.",
    facts: [
      ["Client", "Nigerian Army Training School"],
      ["Sector", "Institutional"],
      ["Location", "Benin"],
      ["Works", "56-room hostel"],
    ] as [string, string][],
  },
  {
    key: "roads" as const,
    title: "Road and drainage works for Alphamead Development Company",
    text: "Road and drainage construction for a development in Lekki: the road formation graded with a motor grader, then precast kerbs and drainage channels laid along the carriageway edge by our branded crew.",
    facts: [
      ["Client", "Alphamead Development Company"],
      ["Sector", "Civil"],
      ["Location", "Lekki, Lagos"],
      ["Works", "Road and drainage"],
    ] as [string, string][],
  },
  {
    key: "tankFarm" as const,
    title: "Tank-farm civil works for Pinnacle Oil",
    text: "Reinforced concrete bases, bund slabs and pipe corridors built inside a tank farm: mesh laid and checked, concrete placed against formwork, joints cut and finished, and pipework supported on the finished slab.",
    facts: [
      ["Client", "Pinnacle Oil"],
      ["Sector", "Industrial"],
      ["Location", "Lekki Free Trade Zone"],
      ["Works", "Slabs, bunds, pipe corridors"],
    ] as [string, string][],
  },
];
