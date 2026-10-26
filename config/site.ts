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
    title: "Healthcare",
    text: "Hospitals, clinics and diagnostic centres, including renovation of facilities that stay in operation.",
  },
  {
    title: "Education",
    text: "Schools, hostels, laboratories and campus infrastructure.",
  },
  {
    title: "Commercial",
    text: "Offices, retail, banking halls and mixed-use buildings.",
  },
  {
    title: "Residential & real estate",
    text: "Estates, apartment blocks and private homes for developers and individual owners.",
  },
  {
    title: "Faith & community",
    text: "Churches, mosques, halls and community facilities.",
  },
  {
    title: "Public sector & infrastructure",
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
    project: "56-room hostel for Army officers",
    client: "Nigerian Army",
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
    role: "CEO & Founder",
    bio: "Seasoned civil and structural engineer with several years of hands-on experience in design implementation, project and construction management, customer relations and cost/budget planning. An expert in building technology, design and inspection.",
  },
  {
    name: "Adepehin Martins",
    role: "Executive Director",
    bio: "Civil Engineering graduate of the University of Lagos with a Master's in Energy Futures from the University of Aberdeen. Certified PMP and Scrum Master, with experience across civil engineering, oil and gas, IT and the public sector.",
  },
  {
    name: "Tope Aloko",
    role: "Design & Estimation Manager",
    bio: "Mechanical Engineering graduate of the University of Ibadan; member of the Nigerian Society of Engineers and COREN, and a certified project management professional with deep knowledge of costing, design and estimation.",
  },
  {
    name: "Iyabo Atilola",
    role: "Finance Manager",
    bio: "HND, Federal Polytechnic Ilaro; associate member of ICAN. Over ten years in financial and management accounting, including as Finance Manager at Resort Securities and Trust Plc.",
  },
  {
    name: "Blessing Edegware",
    role: "Business Development Manager",
    bio: "Chemistry graduate of Adekunle Ajasin University; member of the Chartered Institute of Stockbrokers. Eight years with financial institutions and over five years in business development at management level.",
  },
  {
    name: "Ayomiposi Fadojutimi",
    role: "Technical Services Manager",
    bio: "Mechanical engineering graduate of the University of Ado-Ekiti; member of NSE and COREN. Nine years in HVAC installation and maintenance, rural electrification, and generator installation and maintenance.",
  },
  {
    name: "Funaya Okoh",
    role: "Service Manager",
    bio: "Electrical Engineering graduate of Rivers State University of Science and Technology, with broad experience in HVAC design, installation and maintenance and electrical works, across several engineering firms and facilities roles.",
  },
];
