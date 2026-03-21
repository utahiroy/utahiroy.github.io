/**
 * Profile page content.
 * Edit this file to update your personal information.
 */

export const profile = {
  headline: "Who I Am",
  summary:
    "Born in Japan, studying in the United States. Building an interdisciplinary foundation across environmental science, policy, and data — grounded in practical implementation.",
};

export const background = {
  title: "Background",
  paragraphs: [
    "I grew up in Japan and moved to the United States to study, drawn by the opportunity to work across disciplines and cultures. My academic path spans environmental science, public policy, and data analysis — fields that rarely talk to each other but always should.",
    "That cross-border experience shapes how I approach problems. I've learned to navigate different systems of thinking, communicate across contexts, and find common ground where it doesn't immediately exist. I carry a Japanese attention to detail and long-term thinking alongside a more direct, experiment-driven approach picked up in the U.S.",
    "What ties it together is a consistent interest in sustainability — not as an abstract ideal, but as something that needs to be measured, structured, and implemented in ways that hold up under scrutiny.",
  ],
};

export const values = {
  title: "Values",
  items: [
    {
      name: "Implementation over abstraction",
      description:
        "Frameworks matter, but only when they lead to something real. I care about whether a system works in practice, not just in a presentation.",
    },
    {
      name: "Substance over surface",
      description:
        "Good sustainability work isn't about branding or checkbox compliance. It's about structured evidence, reproducible analysis, and honest assessment.",
    },
    {
      name: "Trust through understanding",
      description:
        "Real collaboration requires understanding the other side's context — their constraints, incentives, and way of thinking. I build trust by doing that work first.",
    },
  ],
};

export const approach = {
  title: "How I Work",
  items: [
    {
      name: "Bridge disciplines",
      description:
        "I look at problems through multiple lenses — scientific, policy, technical, and strategic — to find solutions that are both rigorous and practical.",
    },
    {
      name: "Structure before scale",
      description:
        "Before building systems, I make sure the underlying data, definitions, and logic are sound. Clean foundations compound over time.",
    },
    {
      name: "Start concrete, refine iteratively",
      description:
        "I prefer getting a working version in front of people early and improving it through feedback, rather than planning in isolation until something is theoretically perfect.",
    },
    {
      name: "Think reproducibly",
      description:
        "Work should be verifiable and repeatable. I design analyses and processes so others can follow the reasoning, check the logic, and extend the work.",
    },
  ],
};

export const outlook = {
  title: "Where I'm Headed",
  description:
    "My long-term direction is Sustainability AI Auditing — building systems where AI, sensor data, and real-time monitoring replace static disclosure and self-reported ESG metrics. I want to help shift sustainability assessment from periodic, document-based processes to continuous, evidence-driven systems that organizations and stakeholders can actually trust.",
};

export interface GlanceItem {
  label: string;
  value: string;
}

export const glance: GlanceItem[] = [
  { label: "From", value: "Japan" },
  { label: "Currently", value: "United States" },
  { label: "Focus", value: "Sustainability, Data, Policy" },
  { label: "Languages", value: "Japanese (native), English" },
  { label: "Direction", value: "Sustainability AI Auditing" },
];
