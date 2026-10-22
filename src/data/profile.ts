/**
 * Profile page content.
 * Aligned with the LinkedIn profile (2026-10-22 revamp).
 * Edit this file to update your personal information.
 */

export const profile = {
  headline: "Who I Am",
  summary:
    "Sustainability consultant at ASUENE. My axis is simple: cut CO2, early and at scale.",
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
    "I grew up in Japan, studied environmental science with a GIS minor in the United States, and moved back to Tokyo in 2026.",
    "Since 2024, at E4G and then ASUENE, I have worked on ESG research, data, ratings, and the AI automation behind them.",
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
      name: "Write down the steps before automating",
      description:
        "Before automating anything, I write down the steps and rules people follow by hand. Once the steps are fixed, AI can take over the repetitive parts.",
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
    "Connect companies, emissions, disclosures, and suppliers in one model (an ontology), turn the rules experienced people work by into code, and let AI do only the tasks we have defined. That is how I want sustainability work to run. I am also interested in sustainable finance (including transition finance), sustainability disclosure, and climate and geospatial data.",
};

export interface GlanceItem {
  label: string;
  value: string;
}

export const glance: GlanceItem[] = [
  { label: "Based in", value: "Tokyo, Japan" },
  { label: "Role", value: "Sustainability Consultant, Business Planning @ ASUENE" },
  { label: "Education", value: "B.S. Environmental Science, GIS minor" },
  { label: "Languages", value: "Japanese (native), English" },
  { label: "Direction", value: "AI agents for sustainability work" },
];
