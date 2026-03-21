/**
 * Profile page content.
 * Edit this file to update your personal information.
 */

export const profile = {
  headline: "Who I Am",
  summary:
    "A brief look at the background, values, and approach that shape how I work and what I care about.",
};

export const background = {
  title: "Background",
  paragraphs: [
    "Where you grew up, what you studied, and the early experiences that pointed you in a direction. The combination of environments and choices that made you who you are today.",
    "How your path evolved — the transitions, turning points, and decisions that connected one chapter to the next.",
  ],
};

export const values = {
  title: "Values",
  items: [
    {
      name: "Curiosity over comfort",
      description:
        "Seeking out unfamiliar problems and perspectives, even when staying in a known space would be easier.",
    },
    {
      name: "Substance over surface",
      description:
        "Caring about what something actually does and how it works, not just how it looks at first glance.",
    },
    {
      name: "Thoughtful execution",
      description:
        "Taking the time to do things well rather than rushing to finish. Quality compounds over time.",
    },
  ],
};

export const approach = {
  title: "Approach",
  items: [
    {
      name: "Think across boundaries",
      description:
        "Looking at problems from multiple angles — technical, human, strategic — to find solutions that actually hold up.",
    },
    {
      name: "Start, then refine",
      description:
        "Getting something real in front of people early and improving it through feedback rather than over-planning in isolation.",
    },
    {
      name: "Keep it simple",
      description:
        "Preferring clear, minimal solutions over complex ones. The best work often comes from removing, not adding.",
    },
  ],
};

export interface GlanceItem {
  label: string;
  value: string;
}

export const glance: GlanceItem[] = [
  { label: "Location", value: "Your City, Country" },
  { label: "Focus", value: "Technology & Business" },
  { label: "Languages", value: "Japanese, English" },
  { label: "Interests", value: "Photography, Sports, Travel" },
];
