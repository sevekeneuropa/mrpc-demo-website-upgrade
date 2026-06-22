// EDIT HERE FIRST:
// Most visible website copy lives in this file so non-developers can update
// the demo without touching the page layout. Keep claims factual and have
// safety, legal, and compliance-sensitive text reviewed before public launch.

export type IconKey =
  | "shield"
  | "truck"
  | "clipboard"
  | "training"
  | "gauge"
  | "map"
  | "file"
  | "hardhat"
  | "spark"
  | "phone";

export const siteContent = {
  brand: {
    name: "Mount Rock Powder Corporation",
    shortName: "MRPC",
    tagline: "Work Safe. Blast Safe.",
    descriptor: "High explosives, technical services, and blasting solutions",
    // Use a generic public description here. Exact permits, depot details,
    // and regulatory statements should be confirmed before going live.
    seoDescription:
      "A modern demo website for Mount Rock Powder Corporation, a Philippine explosives and blasting solutions partner for mining, quarrying, construction, and infrastructure projects.",
  },
  navigation: [
    { label: "Capabilities", href: "#capabilities" },
    { label: "Products", href: "#products" },
    { label: "Safety", href: "#safety" },
    { label: "Projects", href: "#projects" },
    { label: "Resources", href: "#resources" },
    { label: "Contact", href: "#contact" },
  ],
  hero: {
    eyebrow: "Philippine mining, quarrying, and infrastructure support",
    headline:
      "Safety-led blasting solutions for operations that cannot afford uncertainty.",
    summary:
      "MRPC supplies explosives, initiation systems, technical services, permit support, and training for mines, quarries, tunnels, road works, and site development projects across the Philippines.",
    primaryCta: "Request technical consultation",
    secondaryCta: "View capabilities",
    image: "/images/bulk-services-truck.jpg",
    imageAlt:
      "Bulk explosives service truck operating on a mine or quarry site in the Philippines",
  },
  proofPoints: [
    { value: "2008", label: "Founded by Philippine mining and quarry operators" },
    { value: "3", label: "Regional coverage areas: Luzon, Visayas, Mindanao" },
    { value: "4", label: "Core offers: supply, blasting, permits, training" },
    { value: "24/7", label: "Mindset for safety, response, and field reliability" },
  ],
  safetyCommitment: {
    title: "Safety is the operating promise",
    body:
      "The original MRPC site already leads with safety. The upgraded demo gives that message stronger proof through documented workflows, field support, controlled resources, and compliance review gates.",
    callout:
      "Public launch note: permit claims, SDS/TDS documents, emergency procedures, and depot disclosures should be reviewed by company leadership, QHSE, and legal/compliance advisers.",
  },
  history: {
    title: "Built around Philippine field conditions",
    body:
      "Mount Rock Powder Corporation was formed in 2008 by shareholders involved in the Philippine mining and quarry industries. This demo presents that history as an advantage: practical local knowledge, supplier relationships, and support for demanding operating environments.",
    image: "/images/executive-meeting.jpg",
    imageAlt:
      "Mount Rock Powder Corporation executives and partners in a technical business meeting",
  },
  capabilities: [
    {
      icon: "truck",
      title: "Explosives supply and logistics",
      body:
        "Supply of high explosives, bulk products, initiation systems, accessories, and controlled delivery support for qualified customers.",
    },
    {
      icon: "hardhat",
      title: "Drilling and blasting services",
      body:
        "Field support for open-cut mines, aggregates and cement quarries, site development, road works, trenching, underground mining, and civil tunnel work.",
    },
    {
      icon: "clipboard",
      title: "Permit and license support",
      body:
        "A clearer executive-facing path for customers who need help preparing documentation and coordinating explosives-related requirements.",
    },
    {
      icon: "training",
      title: "Training and after-sales support",
      body:
        "Structured safety orientation, product handling guidance, technical support, and post-blast review as part of the customer relationship.",
    },
    {
      icon: "gauge",
      title: "Blast planning and optimization",
      body:
        "Position MRPC as a technical partner that can help customers improve fragmentation, vibration control, timing, safety, and operating predictability.",
    },
    {
      icon: "map",
      title: "Regional coverage",
      body:
        "Communicate coverage across Luzon, Visayas, and Mindanao without exposing sensitive magazine-level location details on public pages.",
    },
  ],
  products: [
    {
      category: "High explosives",
      items: ["ANPP", "Bulk emulsion", "Packaged explosives", "Boosters"],
      note:
        "Use short product summaries first, then link to controlled SDS/TDS files after document review.",
    },
    {
      category: "Blast initiation systems",
      items: ["Detonators", "NONEL systems", "E-STAR systems", "Accessories"],
      note:
        "Group products by application so procurement, engineers, and safety teams find the right path quickly.",
    },
    {
      category: "Technical support",
      items: ["Product support", "Training", "Blast consultancy", "Permit processing"],
      note:
        "Make service value as visible as product supply. This helps MRPC compete beyond price.",
    },
  ],
  operatingModel: [
    "Inquiry triage by project type and urgency",
    "Site and risk context review",
    "Technical proposal and product/service matching",
    "Permit, document, and customer readiness checks",
    "Controlled delivery, field execution, and after-sales support",
    "Post-blast review and continuous improvement notes",
  ],
  coverage: {
    title: "Nationwide support, controlled disclosure",
    body:
      "The old website listed exact main magazine depot addresses. For a modern public site, the safer pitch is regional coverage plus a qualified inquiry flow. Exact logistics details can be shared privately with vetted customers.",
    regions: ["Luzon", "Visayas", "Mindanao"],
    image: "/images/coverage-map.png",
    imageAlt: "Stylized coverage map representing Luzon, Visayas, and Mindanao",
  },
  projectTypes: [
    {
      title: "Open-cut mines and quarry benches",
      sector: "Mining and aggregates",
      image: "/images/quarry-face.jpg",
      imageAlt: "Prepared quarry face with blast markings",
      outcome:
        "Convert existing project lists into case studies showing challenge, method, controls, and measurable result.",
    },
    {
      title: "Underground mining and civil tunnels",
      sector: "Underground works",
      image: "/images/underground-blasting.jpg",
      imageAlt: "Underground mine or tunnel drilling equipment",
      outcome:
        "Show technical competence in restricted environments where safety, sequencing, and ventilation matter.",
    },
    {
      title: "Site development and road works",
      sector: "Infrastructure",
      image: "/images/drill-rig.png",
      imageAlt: "Drill rig used for rock drilling and blasting preparation",
      outcome:
        "Package road works, trench blasting, and site preparation into a credible infrastructure offer.",
    },
  ],
  resources: [
    {
      icon: "file",
      title: "SDS/TDS library",
      body:
        "Replace scattered downloads with versioned documents, revision dates, and approval status.",
    },
    {
      icon: "shield",
      title: "Safety bulletins",
      body:
        "Publish reviewed safety guidance for handling, transport coordination, emergency awareness, and site readiness.",
    },
    {
      icon: "clipboard",
      title: "Permit guidance",
      body:
        "Create plain-language pages explaining what customers should prepare before requesting explosives support.",
    },
    {
      icon: "spark",
      title: "Case studies",
      body:
        "Turn old project names into executive proof: problem, approach, controls, result, and testimonial where approved.",
    },
  ],
  contact: {
    title: "Route every inquiry to the right technical conversation",
    body:
      "A segmented contact flow helps MRPC avoid generic emails and lets customers identify whether they need supply, drilling and blasting, permit support, training, or urgent field assistance.",
    email: "enquiry@mountrockpowder.com",
    office: "Head Office: Quezon City, Philippines",
    // The old public site shows legacy landline numbers. Verify the current
    // 8-digit Metro Manila numbers before replacing this placeholder.
    phone: "Phone numbers for verification",
    inquiryTypes: [
      "Explosives supply",
      "Drilling and blasting",
      "Permit and license support",
      "Training and after-sales",
      "Project case study request",
    ],
  },
} as const;
