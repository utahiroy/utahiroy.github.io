/**
 * Work page content.
 * Mirrors the LinkedIn profile (source of truth: linkedin-revamp draft, 2026-07).
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
    "ESG consulting, sustainability data, and AI automation — advising companies on supply-chain sustainability and decarbonization, and automating the expert work behind it.",
};

export const experience: Experience[] = [
  {
    role: "ESG Consultant (Internship)",
    organization: "ASUENE Inc.",
    period: "Nov 2025 – Present",
    description:
      "ESG and sustainability consulting in the Supply Chain business unit of ASUENE, a leading Japanese climate-tech company.",
    highlights: [
      "Advise companies on ESG and sustainability strategy, supply-chain decarbonization, ratings, and disclosure",
      "Translate frameworks and ratings into concrete actions clients can take",
      "Work directly with clients, from their problem to a workable plan",
    ],
    tags: ["ESG Consulting", "Supply Chain", "Decarbonization", "Disclosure"],
  },
  {
    role: "AI Automation Lead (Internship)",
    organization: "ASUENE Inc.",
    period: "Nov 2025 – Present",
    description:
      "AI automation of ESG and sustainability work across the Supply Chain business unit.",
    highlights: [
      "Lead how ESG and sustainability workflows get automated across the business unit",
      "Articulate expert, manual processes, structure them, and put the repeatable parts onto AI (LLM and agent workflows)",
      "Build reusable, comparable models so the automation scales beyond a single case",
    ],
    tags: ["AI Automation", "LLM & Agents", "Ontology", "Workflow Design"],
  },
  {
    role: "ESG Data Analyst (Internship)",
    organization: "ASUENE Inc.",
    period: "Nov 2024 – Nov 2025",
    description:
      "ESG and sustainability data analysis in the Supply Chain business unit.",
    highlights: [
      "Analyzed corporate ESG and sustainability data across supply chains, mapping companies to disclosure and rating frameworks (SSBJ, ISSB, TCFD, and others)",
      "Built the data and calculations behind supply-chain decarbonization assessments",
      "Turned raw ESG and emissions data into decision-ready inputs for clients and internal teams",
    ],
    tags: ["ESG Data", "SSBJ / ISSB / TCFD", "Supply Chain", "Analysis"],
  },
  {
    role: "Researcher (Internship)",
    organization: "Institute for Sustainable Energy Policies (ISEP)",
    period: "May 2024 – Apr 2025",
    description:
      "ISEP is an independent Japanese think tank focused on renewable energy policy — separate from government and industry, advising national and local governments and linking Japan with energy-policy networks abroad.",
    highlights: [
      "Researched renewable energy policy in Japan and internationally",
      "Analyzed policy and energy-market trends to support the institute's research",
    ],
    tags: ["Renewable Energy", "Energy Policy", "Research"],
  },
  {
    role: "Business Researcher (Internship)",
    organization: "E4G",
    period: "Apr 2024 – Nov 2024",
    description:
      "E4G was a University of Tokyo spinout that built AI software to gather and analyze corporate ESG data from public sources, supporting decarbonization roadmaps from CO2 visualization through reduction planning. ASUENE fully acquired E4G in October 2024.",
    highlights: [
      "Worked mainly as a business researcher, producing the market, competitor, and ESG analysis behind product direction and client work",
      "Researched ESG risk-mitigation strategies for listed companies pursuing RE100",
      "Conducted environmental impact assessments and integrated data analytics into ESG reporting",
      "Translated research findings into decision-ready inputs for corporate energy-transition planning",
    ],
    tags: ["ESG & Energy Transition", "RE100", "Business Research"],
  },
];

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
    name: "Supply-Chain Sustainability & Decarbonization",
    description:
      "Advising companies on emissions, ratings, and reduction plans across their supply chains — from assessment to actions they can actually take.",
  },
  {
    name: "ESG Ratings & Disclosure",
    description:
      "GHG accounting and disclosure work across SSBJ, ISSB, TCFD, GRI, and SASB — making reporting decision-useful, not just compliant.",
  },
  {
    name: "AI Automation of ESG Work",
    description:
      "Articulating expert, manual ESG processes, structuring them into ontologies, and handing the repeatable parts to LLM and agent workflows.",
  },
  {
    name: "Environmental Data & GIS",
    description:
      "Environmental data analysis and geospatial intelligence — putting natural systems and human systems into the same model.",
  },
];

/** Mirrors the LinkedIn skills list (11 items, all evidence-backed). */
export const skills: string[] = [
  "ESG",
  "Sustainability Consulting",
  "Sustainability Reporting",
  "ESG Disclosure & Compliance (SSBJ, ISSB, TCFD, GRI, SASB)",
  "Artificial Intelligence (AI)",
  "Anthropic Claude",
  "Sustainability Disclosure (IFRS)",
  "Corporate Decarbonization Strategy & Renewable Energy Policy",
  "Environmental Data Analytics & Geospatial Intelligence (GIS)",
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
    "Where I'm headed is the forward deployed engineer's seat for sustainability: sitting with a customer, understanding their ESG problem in their own language, and building the system that solves it end to end. The method is to give sustainability data a structure — an ontology that links companies, emissions, disclosures, and supply-chain signals — then let LLMs turn unstructured reports into data and hand the repeatable analysis to AI agents. Decisions should run on a live, connected model of ESG reality instead of static, once-a-year spreadsheets.",
};
