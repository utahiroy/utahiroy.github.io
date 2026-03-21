/**
 * Thought page content.
 * Edit this file to add/remove thought entries.
 */

export interface ThoughtEntry {
  title: string;
  date: string;
  excerpt: string;
  tags?: string[];
}

export const thought = {
  headline: "How I Think",
  summary:
    "Ideas, questions, and observations that shape my perspective on sustainability, technology, and how systems actually change. A space for thinking in progress.",
};

export const thoughts: ThoughtEntry[] = [
  {
    title: "Disclosure Is Not the Same as Accountability",
    date: "2026",
    excerpt:
      "Most sustainability disclosure today is retrospective and self-reported. It tells you what an organization says it did, not what actually happened. Real accountability requires independent verification, structured data, and systems that make evasion harder than compliance. The next generation of ESG infrastructure needs to close this gap.",
    tags: ["ESG", "Disclosure", "Accountability"],
  },
  {
    title: "The Case for Real-Time Environmental Monitoring",
    date: "2026",
    excerpt:
      "Static annual reports are a poor proxy for ongoing environmental performance. Sensors, satellite data, and AI-driven analysis are making continuous monitoring technically feasible — the question is whether institutions and frameworks will adapt fast enough to use it. Moving from periodic to real-time assessment changes not just what we measure, but how decisions get made.",
    tags: ["AI", "Monitoring", "Environment"],
  },
  {
    title: "Implementation as the Hard Part",
    date: "2026",
    excerpt:
      "Sustainability frameworks are abundant. What's scarce is the work of turning them into structured, repeatable, verifiable systems that function in real organizations with real constraints. The bottleneck is rarely the policy — it's the implementation layer where data, process, and human behavior all have to align.",
    tags: ["Implementation", "Systems", "Policy"],
  },
  {
    title: "Reproducibility Should Be a Default, Not a Feature",
    date: "2026",
    excerpt:
      "In research, analysis, and decision-making, reproducibility means someone else can follow your reasoning, check your work, and arrive at the same conclusion. Too much sustainability analysis is opaque by design. Building reproducible processes isn't just good practice — it's a prerequisite for trust.",
    tags: ["Data", "Reproducibility", "Trust"],
  },
  {
    title: "Where Policy Meets Technology Meets Context",
    date: "2026",
    excerpt:
      "The most useful work tends to happen at intersections — where policy goals, technical capability, and local context all inform each other. Working across these boundaries is slower and messier than staying in one lane, but it produces solutions that actually survive contact with reality.",
    tags: ["Interdisciplinary", "Policy", "Technology"],
  },
];

export const thoughtFooter =
  "This space will grow as I continue to develop and articulate these ideas. Some of these are early-stage observations; others reflect questions I've been thinking about for a while.";
