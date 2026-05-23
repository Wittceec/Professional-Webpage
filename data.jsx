// Single source of truth for site content. Edit values here to update everything.
const SITE = {
  name: "Christopher Wittman",
  initials: "CW",
  role: "Systems Administrator × Cloud Enthusiast",
  location: "Hummelstown, PA",
  email: "wittceec@gmail.com",
  phone: "(319) 450-3926",
  github: "https://github.com/Wittceec",
  linkedin: "https://www.linkedin.com/in/christopher-wittman/",
  site: "https://wittceec.github.io/",

  hero: {
    eyebrow: "PORTFOLIO / 2026",
    line1: ["Systems", "administrator"],
    line2: ["who", "automates", "infrastructure."],
    blurb:
      "I engineer and automate enterprise infrastructure — managing servers, networks, and cloud environments. On the side, I build native iOS and full-stack web applications. Currently studying for the CCNA and turning my home lab into a sandbox.",
  },

  now: {
    headline: ["What I'm working on", "right now."],
    items: [
      { idx: "01", label: "Studying for CCNA 200-301", sub: "Subnetting drills, OSPF labs, packet captures", stat: "IN PROGRESS" },
      { idx: "02", label: "Vector Gains", sub: "iOS fitness tracker — progressive overload visualization", stat: "SHIPPED" },
      { idx: "03", label: "Vector Wealth", sub: "iOS stock sandbox app for portfolio testing", stat: "SHIPPED" },
      { idx: "04", label: "Vector Recall", sub: "Markdown-based note-taking web application", stat: "SHIPPED" },
      { idx: "05", label: "Network Simulator", sub: "Browser-native, Packet-Tracer-style topology builder", stat: "ALPHA" },
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
      "I'm a Systems Administrator at Penn State Health, where I automate workflows and manage both on-premise physical servers and virtual environments to ensure high availability for hospitals across central Pennsylvania.",
      "My day-to-day involves scripting with PowerShell, managing identities in Active Directory and Microsoft Entra ID, network equipment provisioning, and system monitoring. Outside work, I build full-stack web and native iOS apps to constantly expand my technical footprint.",
    ],
    meta: [
      { k: "BASED", v: "Hummelstown, PA" },
      { k: "FOCUS", v: "Systems · Networking · Cloud" },
      { k: "AVAILABLE", v: "Open to chat" },
    ],
  },

  experience: [
    {
      year: "2025 — NOW",
      role: "Systems Administrator",
      co: "Penn State Health",
      bullets: [
        "Administer and patch enterprise Windows/Linux server fleets, ensuring 99.9%+ uptime across distributed data centers.",
        "Develop PowerShell scripts to automate routine system administration, network migrations, and Azure/Entra ID access controls.",
        "Engineer low-code solutions via Power Apps and Power Automate to digitize asset management and visitor workflows.",
        "Provision, monitor, and decommission network hardware, including access points, printers, and switches.",
      ],
    },
    {
      year: "2024 — 2025",
      role: "IT Operations Analyst",
      co: "WellSpan Health",
      bullets: [
        "Spearheaded enterprise infrastructure monitoring using SCOM and SolarWinds Orion across multiple hospital campuses.",
        "Executed rapid incident response and root-cause analysis for mission-critical network and server outages, minimizing downtime.",
      ],
    },
    {
      year: "2023 — 2024",
      role: "IT Technician",
      co: "Nordstrom Fulfillment Center",
      bullets: [
        "Engineered reliable on-site network connectivity by deploying and managing hundreds of wireless APs and operational endpoints.",
        "Acted as the primary escalation point for Tier 2 hardware and systems troubleshooting, ensuring zero downtime for logistics.",
      ],
    },
  ],

  projects: [
    {
      num: "01",
      kind: "iOS APP · LIVE",
      title: "Vector Gains",
      desc: "Workout tracking that visualizes progressive overload as a vector across time. Native SwiftUI, on-device only.",
      tags: ["SwiftUI", "iOS", "Charts", "HealthKit"],
      cta: "Open in App Store",
      href: "https://apps.apple.com/us/app/vector-gains/id6761636655",
      span: "span-3",
      demo: "vectorGains",
    },
    {
      num: "02",
      kind: "iOS APP · LIVE",
      title: "Vector Wealth",
      desc: "Stock sandbox application for portfolio testing and simulation. Track assets and visualize wealth distribution. Native SwiftUI.",
      tags: ["SwiftUI", "iOS", "Finance"],
      cta: "Open in App Store",
      href: "https://apps.apple.com/us/app/vector-wealth/id6767098201",
      span: "span-3",
      demo: "wealth",
    },
    {
      num: "03",
      kind: "WEB APP · LIVE",
      title: "Vector Recall",
      desc: "A sleek markdown note-taking web application with persistent storage, categorization, and seamless routing.",
      tags: ["React", "Markdown", "Vercel"],
      cta: "Try the app",
      href: "https://vector-recall.vercel.app/",
      span: "span-3",
      demo: "recall",
    },
    {
      num: "04",
      kind: "WEB APP · ALPHA",
      title: "Network Simulator",
      desc: "Drag-and-drop network topologies in the browser. Practice subnetting and routing without spinning up Packet Tracer.",
      tags: ["Next.js", "Canvas", "Networking"],
      cta: "Try the simulator",
      href: "https://my-network-simulator.vercel.app/",
      span: "span-3",
      demo: "netsim",
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
