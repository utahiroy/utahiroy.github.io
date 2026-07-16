/**
 * Profile page content.
 * Aligned with the LinkedIn About section (2026-07 revamp).
 * Edit this file to update your personal information.
 */

export const profile = {
  headline: "Who I Am",
  summary:
    "An ESG consultant who automates the work behind sustainability. My axis is simple: cut CO2, early and at scale. Everything I have chosen points at that one goal.",
  /** Portrait shown on the profile page (lives in /public/photos/). */
  portrait: {
    src: "/photos/portrait.jpg",
    alt: "Utahiro Yoshimoto in Marunouchi, Tokyo",
    width: 1400,
    height: 933,
  },
};

export const background = {
  title: "Background",
  paragraphs: [
    "I grew up in Japan, studied environmental science in the United States with a minor in GIS, and moved back to Tokyo in 2026. A degree in environmental science, two years in climate-tech, and now building AI into that work — each step points at the same goal.",
    "I read climate from both sides. My work has always put natural systems and human systems into the same model: emissions and energy alongside economics, policy, and behavior. Sustainability matters because those are one system, not two. You cannot fix the physical without changing the institutional.",
    "At ASUENE, a leading Japanese climate-tech company, and earlier at E4G, I advise companies across ESG and sustainability — from supply-chain decarbonization to ratings and disclosure. Increasingly, I lead how that work gets automated: taking the expert, manual parts of ESG, structuring them, and putting the repeatable pieces onto AI.",
  ],
};

export const values = {
  title: "Values",
  items: [
    {
      name: "Purpose over pay",
      description:
        "I have turned down passive roles to stay on the problems I chose. The goal — cutting CO2 — decides what I work on, not the other way around.",
    },
    {
      name: "Create value, don't just move money",
      description:
        "I want to stand on the side of the economy that creates new value. The same applies to AI: it can help or harm depending on who owns and governs it, so I point it at emissions and climate policy.",
    },
    {
      name: "Not No.1, but Only 1",
      description:
        "I would rather build a combination nobody else has — environmental science, consulting, and AI implementation — than compete on a single axis.",
    },
  ],
};

export const approach = {
  title: "How I Work",
  items: [
    {
      name: "Declare first, then act",
      description:
        "Big goals get said out loud before they look realistic. I know from experience that once I have declared something, my behavior catches up to it.",
    },
    {
      name: "Start early, try in volume",
      description:
        "Today is the youngest I will ever be. I prefer touched-and-experienced over saw-and-heard, and I treat a high experiment count as a feature, not recklessness.",
    },
    {
      name: "Structure before scale",
      description:
        "Before automating anything, I articulate the expert's manual process and give it structure. Clean foundations are what let AI take over the repeatable parts.",
    },
    {
      name: "Sit with the customer",
      description:
        "I want to understand a client's problem in their own language, then build the system that solves it end to end — not hand the problem across a wall.",
    },
  ],
};

export const life = {
  title: "Beyond Work",
  paragraphs: [
    "Japan is home base. The years in the US matter to me, and I want to keep the ties — English, travel, friends across cultures — but everyday life belongs here, with regular trips out rather than a life abroad.",
    "Long term, I want daily life closer to nature without cutting the line to the city: a reasonably spacious house near a lake, water and mountains visible from the window, my family around, a boat if I can manage it — and the city still within easy reach.",
    "Across places, gear, and food, the rule is the same: research in detail, then go, use, or taste it myself before judging. And I'd rather connect interests than max one out — a trip to a lakeside town becomes local history, the day's catch, and the right playlist for the drive.",
  ],
};

export const outlook = {
  title: "Where I'm Headed",
  description:
    "The forward deployed engineer's seat for sustainability: sitting with a customer, understanding their ESG problem in their own language, and building the system that solves it end to end. Ontologies give sustainability data a structure, LLMs turn unstructured reports into data, and AI agents take the repeatable analysis — so decisions run on a live, connected model of ESG reality instead of static, once-a-year spreadsheets.",
};

export interface GlanceItem {
  label: string;
  value: string;
}

export const glance: GlanceItem[] = [
  { label: "Based in", value: "Tokyo, Japan" },
  { label: "Role", value: "ESG Consultant · AI Automation @ ASUENE" },
  { label: "Education", value: "B.S. Environmental Science, GIS minor" },
  { label: "Languages", value: "Japanese (native), English" },
  { label: "Direction", value: "Forward Deployed Engineer for sustainability" },
];
