// Single source of truth for site content. Edit values here to update everything.
const SITE = {
  name: "Christopher Wittman",
  initials: "CW",
  role: "Infrastructure Engineer × Builder",
  location: "Hummelstown, PA",
  email: "wittceec@gmail.com",
  phone: "(319) 450-3926",
  github: "https://github.com/Wittceec",
  linkedin: "https://www.linkedin.com/in/christopher-wittman/",
  site: "https://wittceec.github.io/",

  hero: {
    eyebrow: "PORTFOLIO / 2026",
    line1: ["Infrastructure", "operator"],
    line2: ["who", "ships", "things."],
    blurb:
      "I keep enterprise data centers running and build software on the side — an iOS fitness tracker, a network simulator, a budgeting app, a roguelike. Currently studying for the CCNA and turning my home lab into a sandbox.",
  },

  now: {
    headline: ["What I'm working on", "right now."],
    items: [
      { idx: "01", label: "Studying for CCNA 200-301", sub: "Subnetting drills, OSPF labs, packet captures", stat: "IN PROGRESS" },
      { idx: "02", label: "Vector Gains v1.7", sub: "iOS fitness tracker — refining workout logging", stat: "SHIPPED" },
      { idx: "03", label: "Network Simulator", sub: "Browser-native, Packet-Tracer-style topology builder", stat: "ALPHA" },
      { idx: "04", label: "Budget App", sub: "Personal banking + envelope budgeting on the web", stat: "BUILDING" },
      { idx: "05", label: "Roguelike D&D", sub: "Turn-based, procedural dungeons, dice mechanics", stat: "PROTOTYPING" },
    ],
    ccna: {
      tag: "CURRENT FOCUS",
      title: "CCNA 200-301",
      blurb: "Routing, switching, security fundamentals, automation. Targeting Q3 exam window.",
      progress: 0.62,
      stats: [
        { k: "MODULES", v: "5/8" },
        { k: "LAB HOURS", v: "47" },
        { k: "STREAK", v: "23d" },
      ],
    },
  },

  about: {
    paragraphs: [
      "I'm an IT operations engineer at Penn State Health, where I keep physical and virtual server infrastructure online for hospitals across central Pennsylvania.",
      "Outside work I write code — iOS, web, game prototypes — because the fastest way to learn a stack is to ship something on it.",
    ],
    meta: [
      { k: "BASED", v: "Hummelstown, PA" },
      { k: "FOCUS", v: "Infra · Networking · iOS" },
      { k: "AVAILABLE", v: "Open to chat" },
    ],
  },

  experience: [
    {
      year: "2025 — NOW",
      role: "Information Systems Operations",
      co: "Penn State Health",
      bullets: [
        "Maintain physical and virtual server infrastructure across multiple data centers — 99.9%+ uptime.",
        "Built Power Apps / Power Automate solutions for visitor intake, asset management, and approvals.",
        "Wrote PowerShell automation that cut routine provisioning timelines significantly.",
      ],
    },
    {
      year: "2024 — 2025",
      role: "IT Operations Analyst",
      co: "WellSpan Health",
      bullets: [
        "Monitored network performance across hospital and clinic sites with SCOM and SolarWinds Orion.",
        "Resolved high-priority incidents within SLA; documented root causes for shift hand-offs.",
      ],
    },
    {
      year: "2023 — 2024",
      role: "IT Technician",
      co: "Nordstrom Fulfillment Center",
      bullets: [
        "Deployed and maintained workstations, scanners, and wireless APs for warehouse logistics.",
        "Tier 2 support for hardware and network connectivity — primary on-site resource for ops continuity.",
      ],
    },
  ],

  projects: [
    {
      num: "01",
      kind: "iOS APP · LIVE",
      title: "Vector Gains",
      desc: "Workout tracking that visualizes progressive overload as a vector across time. Native SwiftUI, on-device only.",
      tags: ["SwiftUI", "iOS 17+", "Charts", "HealthKit"],
      cta: "Open in App Store",
      href: "https://apps.apple.com/us/app/vector-gains/id6761636655",
      span: "span-3",
      demo: "vectorGains",
    },
    {
      num: "02",
      kind: "WEB APP · ALPHA",
      title: "Network Simulator",
      desc: "Drag-and-drop network topologies in the browser. Practice subnetting and routing without spinning up Packet Tracer.",
      tags: ["Next.js", "Canvas", "Networking"],
      cta: "Try the simulator",
      href: "https://my-network-simulator.vercel.app/",
      span: "span-3",
      demo: "netsim",
    },
    {
      num: "03",
      kind: "WEB APP · BUILDING",
      title: "Budget Sheet",
      desc: "Envelope budgeting with bank-feed sync. Forecast cash on hand and stress-test purchases before you make them.",
      tags: ["React", "Plaid", "Postgres"],
      cta: "Coming soon",
      href: "#",
      span: "span-2",
      demo: "budget",
    },
    {
      num: "04",
      kind: "GAME · PROTOTYPE",
      title: "Crypt of the Wittwyrm",
      desc: "Turn-based roguelike with D&D-flavored dice mechanics. Procedural dungeons, permadeath, theatre-of-the-mind combat.",
      tags: ["TypeScript", "Roguelike", "Procgen"],
      cta: "Watch this space",
      href: "#",
      span: "span-4",
      demo: "dnd",
    },
  ],

  certs: [
    { name: "Cisco Certified Network Associate", code: "CCNA 200-301", year: "2026", status: "in-progress" },
    { name: "Microsoft Certified: Azure Administrator Associate", code: "AZ-104", year: "2026", status: "earned" },
    { name: "Microsoft Certified: Azure Fundamentals", code: "AZ-900", year: "2025", status: "earned" },
    { name: "Google Cybersecurity Professional Certificate", code: "GOOG-CYB", year: "2025", status: "earned" },
    { name: "LPI Linux Essentials", code: "LPI-LE", year: "2025", status: "earned" },
    { name: "Certified LogicMonitor Associate", code: "LM-A", year: "2025", status: "earned" },
  ],

  skills: [
    {
      title: "INFRASTRUCTURE",
      items: [
        { k: "Windows Server", v: "EXPERT" },
        { k: "VMware / Hyper-V", v: "ADVANCED" },
        { k: "Active Directory", v: "ADVANCED" },
        { k: "Linux (RHEL/Ubuntu)", v: "PROFICIENT" },
      ],
    },
    {
      title: "CLOUD & MONITORING",
      items: [
        { k: "Azure (AZ-104)", v: "ADVANCED" },
        { k: "SCOM / Orion", v: "ADVANCED" },
        { k: "LogicMonitor", v: "PROFICIENT" },
        { k: "M365 / Entra", v: "PROFICIENT" },
      ],
    },
    {
      title: "AUTOMATION",
      items: [
        { k: "PowerShell", v: "ADVANCED" },
        { k: "Power Platform", v: "ADVANCED" },
        { k: "Bash", v: "PROFICIENT" },
        { k: "Python", v: "WORKING" },
      ],
    },
    {
      title: "BUILD",
      items: [
        { k: "Swift / SwiftUI", v: "PROFICIENT" },
        { k: "TypeScript / React", v: "PROFICIENT" },
        { k: "Next.js", v: "WORKING" },
        { k: "Postgres", v: "WORKING" },
      ],
    },
  ],

  nav: [
    { id: "hero", label: "Index", num: "00" },
    { id: "now", label: "Now", num: "01" },
    { id: "about", label: "About", num: "02" },
    { id: "experience", label: "Experience", num: "03" },
    { id: "projects", label: "Projects", num: "04" },
    { id: "certs", label: "Certs", num: "05" },
    { id: "skills", label: "Skills", num: "06" },
    { id: "contact", label: "Contact", num: "07" },
  ],
};

window.SITE = SITE;
