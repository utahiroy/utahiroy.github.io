/**
 * Work page content.
 * Mirrors the LinkedIn profile (2026-10-22 revamp).
 * Edit this file to update experience, education, skills, and direction.
 */

export interface Experience {
  role: string;
  organization: string;
  period: string;
  description: string;
  highlights: string[];
  tags: string[];
}

export const work = {
  headline: "What I Work On",
  summary:
    "Sustainability consulting, ESG data, supply-chain security, and AI at ASUENE.",
};

export const experience: Experience[] = [
  {
    role: "Sustainability Consultant",
    organization: "ASUENE Inc.",
    period: "Oct 2026 – Present",
    description: "Sustainability Consulting Division, Strategy Group.",
    highlights: [
      "Support companies on ESG ratings, from gap analysis to improvement plans",
      "Build tools for repeatable rating work, with scoring kept in code",
    ],
    tags: ["ESG Ratings", "Sustainability Consulting"],
  },
  {
    role: "Business Planning",
    organization: "ASUENE Inc.",
    period: "Oct 2026 – Present",
    description: "Supply Chain business unit.",
    highlights: [
      "ESG data: deliver ESG and emissions data collected from public disclosures",
      "Supply-chain security: support companies on supply-chain cybersecurity assessments",
      "AI: choose which workflows to automate and take them to production with engineering",
    ],
    tags: ["ESG Data", "Supply-Chain Security", "AI"],
  },
  {
    role: "Sustainability & AI Automation (Internship)",
    organization: "ASUENE Inc.",
    period: "Nov 2024 – Sep 2026",
    description: "Supply Chain business unit.",
    highlights: [
      "Analyzed corporate ESG and emissions data and mapped it to disclosure and rating frameworks",
      "Supported companies on ESG ratings and disclosure, from gap analysis to improvement plans",
      "Automated consulting workflows with LLMs and AI agents, from prototype to production",
    ],
    tags: ["ESG Data", "ESG Ratings", "LLM & Agents"],
  },
  {
    role: "Researcher (Internship)",
    organization: "Institute for Sustainable Energy Policies (ISEP)",
    period: "May 2024 – Apr 2025",
    description: "Renewable energy policy research.",
    highlights: [],
    tags: ["Renewable Energy", "Energy Policy"],
  },
  {
    role: "Researcher (Internship)",
    organization: "E4G",
    period: "Apr 2024 – Nov 2024",
    description:
      "ESG and market research at a University of Tokyo spinout, acquired by ASUENE in 2024.",
    highlights: [],
    tags: ["ESG", "Market Research"],
  },
];

/** ASUENE's public MVV (source: corp.asuene.com). Quoted because I genuinely run on it. */
export const asueneMvv = {
  label: "ASUENE MVV",
  title: "The Mission I Work Under",
  mission: {
    ja: "次世代によりよい世界を。",
    en: "Changing the world for the next generation.",
  },
  vision: {
    ja: "次世代を変える会社",
    en: "Leading transformative change for the next generation.",
  },
  values: [
    "Radical Ownership, Total Accountability",
    "Act with Integrity. Think from the Other Side.",
    "Speed Is Our Ultimate Advantage",
    "Productivity-Driven. Never Satisfied. Always Hungry.",
    "One for All, All for One",
    "Ownership of Results",
    "All In on AI",
    "Beyond No.1. Become the Category Leader.",
    "Measure to Improve (KAIZEN)",
    "Challenge with a Positive Mindset",
  ],
  note: "I didn't join in spite of the culture — the culture is a big part of why I'm there. Of the ten values, the three I lean on hardest are Radical Ownership, Speed Is Our Ultimate Advantage, and All In on AI: they describe how I already wanted to work. And the mission is my own axis, stated as a company.",
  source: "https://corp.asuene.com/en/company",
};

export interface Education {
  school: string;
  program: string;
  note?: string;
}

export const education: Education[] = [
  {
    school: "University of Wisconsin–Superior",
    program: "B.S. Environmental Science, minor in GIS",
    note: "Class of 2026 · GPA 3.80",
  },
  {
    school: "University of Minnesota",
    program: "National Student Exchange (NSE), Environmental Science",
    note: "Selective exchange program (GPA + essay)",
  },
];

export interface WorkArea {
  name: string;
  description: string;
}

export const areas: WorkArea[] = [
  {
    name: "ESG Ratings",
    description: "From gap analysis and evidence review to improvement plans.",
  },
  {
    name: "ESG Data & Disclosure",
    description:
      "Corporate ESG and emissions data from public disclosures, mapped to disclosure frameworks.",
  },
  {
    name: "Supply-Chain Security",
    description:
      "Supporting companies on the cybersecurity assessments their customers ask for.",
  },
  {
    name: "AI for Sustainability Work",
    description:
      "Turn the rules experienced people work by into code, and let AI agents do only the tasks we have defined.",
  },
  {
    name: "Environmental Data & GIS",
    description:
      "Layering environmental data and data on how people live on the same map (GIS) to analyze them together.",
  },
];

/** Mirrors the LinkedIn skills list (14 items, 2026-10-22). */
export const skills: string[] = [
  "ESG",
  "Sustainability Consulting",
  "ESG Ratings",
  "Artificial Intelligence (AI)",
  "AI Agents",
  "Supply Chain Security",
  "Sustainability Reporting",
  "ESG Disclosure & Compliance (SSBJ, ISSB, TCFD, GRI, SASB)",
  "Sustainability Disclosure (IFRS)",
  "Anthropic Claude",
  "Environmental Data Analytics & Geospatial Intelligence (GIS)",
  "Corporate Decarbonization Strategy & Renewable Energy Policy",
  "Environmental Policy",
  "Data Analysis",
];

export interface Certification {
  name: string;
  issuer: string;
}

export const certifications: Certification[] = [
  {
    name: "AI Fluency: Framework & Foundations",
    issuer: "Anthropic",
  },
  {
    name: "Introduction to IFRS Sustainability Disclosure Standards",
    issuer: "IFRS Foundation",
  },
];

export const direction = {
  title: "Current Direction",
  description:
    "Connect companies, emissions, disclosures, and suppliers in one model (an ontology), turn the rules experienced people work by into code, and let AI do only the tasks we have defined. That is how I want sustainability work to run. I am also interested in sustainable finance (including transition finance), sustainability disclosure, and climate and geospatial data.",
};
