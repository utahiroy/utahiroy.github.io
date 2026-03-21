/**
 * Work page content.
 * Edit this file to add/remove projects, skills, areas, and direction info.
 */

export interface Project {
  title: string;
  organization?: string;
  description: string;
  contributions: string[];
  tags: string[];
  href?: string;
}

export const work = {
  headline: "What I Work On",
  summary:
    "Sustainability research, ESG data analysis, and implementation-oriented work — connecting frameworks to structured evidence and practical systems.",
};

export const projects: Project[] = [
  {
    title: "NEXT GX STREAM — GX Rankings & Research",
    organization: "Forbes JAPAN × ASUENE",
    description:
      "Contributed to data research and analysis for GX (Green Transformation) rankings under the direction of Taichi Obara. This work involved building evidence-based corporate rankings across dimensions such as emissions reduction trajectories, renewable energy adoption, ESG-aligned finance, and sustainable procurement practices.",
    contributions: [
      "Supported data collection, structuring, and analysis for ranking methodology",
      "Researched corporate GX performance across emissions, energy, finance, and procurement",
      "Helped translate complex sustainability data into structured, publication-ready formats",
    ],
    tags: ["GX Research", "Data Analysis", "Rankings", "Decarbonization"],
  },
  {
    title: "ESG & Sustainability Data Analysis",
    organization: "ASUENE",
    description:
      "Worked on sustainability analysis and disclosure-aligned data work, supporting organizations in structuring their environmental and ESG data. Focused on making sustainability information more structured, comparable, and decision-useful rather than purely compliance-oriented.",
    contributions: [
      "Analyzed corporate sustainability data aligned with disclosure frameworks",
      "Structured ESG datasets for consistency and analytical utility",
      "Supported AI-assisted approaches to sustainability data processing",
    ],
    tags: ["ESG Analysis", "Sustainability Disclosure", "Data Structuring", "AI"],
  },
  {
    title: "ESG Strategy & Energy Transition Support",
    organization: "E4G",
    description:
      "Supported ESG strategy and energy transition planning for business clients, with a focus on RE100-oriented renewable energy adoption and practical decarbonization roadmaps. The work emphasized actionable implementation over theoretical frameworks.",
    contributions: [
      "Supported RE100-oriented renewable energy strategy for corporate clients",
      "Contributed to ESG strategy development grounded in energy transition realities",
      "Helped bridge business objectives with sustainability implementation requirements",
    ],
    tags: ["ESG Strategy", "Energy Transition", "RE100", "Advisory"],
  },
];

export interface WorkArea {
  name: string;
  description: string;
}

export const areas: WorkArea[] = [
  {
    name: "ESG & Sustainability Disclosure",
    description:
      "Structuring corporate sustainability data to align with evolving frameworks — making disclosure useful, not just compliant.",
  },
  {
    name: "GX & Decarbonization Research",
    description:
      "Evidence-based analysis of corporate green transformation performance, from emissions trajectories to renewable energy adoption.",
  },
  {
    name: "Supply Chain & Nature-Related Risk",
    description:
      "Emerging focus on ESG risk within supply chains and nature-related dependencies — areas where data gaps are large and growing.",
  },
  {
    name: "Data Structuring & Automation",
    description:
      "Building repeatable, structured approaches to sustainability data — reducing manual processes and improving analytical reproducibility.",
  },
];

export const skills: string[] = [
  "Sustainability Analysis",
  "ESG Data & Disclosure",
  "Research & Evidence Synthesis",
  "Data Structuring & Automation",
  "Policy Analysis",
  "Python",
  "TypeScript",
  "Data Visualization",
  "Cross-Cultural Communication",
];

export const direction = {
  title: "Current Direction",
  description:
    "I'm building toward Sustainability AI Auditing — a future where environmental and supply-chain performance is monitored continuously through AI and sensor systems, rather than assessed through periodic self-reported disclosures. The goal is to make sustainability data real-time, verifiable, and decision-useful. That means combining technical skills in data and automation with deep domain knowledge of what sustainability frameworks actually need to measure and why.",
};
