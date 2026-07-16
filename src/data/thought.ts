/**
 * Thought page content.
 * Positions I actually hold — kept short, written to be argued with.
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
    "Positions I actually hold — on sustainability, AI, and how to run a life. Not neutral observations: each of these is a claim, and each one has counterarguments I take seriously.",
};

export const thoughts: ThoughtEntry[] = [
  {
    title: "The Physical and the Institutional Are One System",
    date: "2026",
    excerpt:
      "Sustainability work matters because natural systems and human systems are one system, not two. Emissions and energy belong in the same model as economics, policy, and behavior — and you cannot fix the physical without changing the institutional. That is why I studied environmental science and work in consulting rather than choosing between them.",
    tags: ["Sustainability", "Systems"],
  },
  {
    title: "Give Sustainability Data a Structure",
    date: "2026",
    excerpt:
      "ESG runs on static, once-a-year documents. The fix is structural: an ontology that links companies, emissions, disclosures, and supply-chain signals, with LLMs turning unstructured reports into data and agents taking the repeatable analysis. Decisions should run on a live, connected model of ESG reality — not on last year's spreadsheet.",
    tags: ["AI", "Ontology", "ESG"],
  },
  {
    title: "The Same AI Can Help or Harm — Governance Decides",
    date: "2026",
    excerpt:
      "AI's impact is not a property of the technology; it depends on who owns it, what it gets pointed at, and how it is governed. I would rather point it at emissions and climate policy, and stand on the side of the economy that creates value rather than only moves money.",
    tags: ["AI", "Governance"],
  },
  {
    title: "Implementation Is the Hard Part",
    date: "2026",
    excerpt:
      "Sustainability frameworks are abundant. What's scarce is the work of turning them into structured, repeatable systems that function in real organizations with real constraints. The bottleneck is rarely the policy — it's the implementation layer, where data, process, and human behavior all have to align.",
    tags: ["Implementation", "Systems"],
  },
  {
    title: "Declare It First",
    date: "2026",
    excerpt:
      "Big goals should be said out loud before they look realistic. Declaration is not bragging; it is a commitment device. I know from experience that once I have declared something, my behavior reorganizes itself to catch up — so the declaration comes first, with milestones attached to keep the ambition accountable.",
    tags: ["Career", "Mindset"],
  },
  {
    title: "'You're Living Too Fast' Is a Compliment",
    date: "2026",
    excerpt:
      "Start things early — today is the youngest you will ever be. Run many experiments instead of a few careful ones, and stack touched-and-experienced over saw-and-heard. The risk of hurry is real: burnout, shallow learning, missed exits. I take the trade anyway, because first-hand volume is what everything else compounds on.",
    tags: ["Mindset", "Learning"],
  },
  {
    title: "Early Means Nobody Around You Has Touched It",
    date: "2026",
    excerpt:
      "My test for whether a theme is genuinely early: nobody in your home prefecture is on it yet. By the time something is a topic, the most interesting people have already moved on. Crypto and AI both fail this test now. The bar is not 'new to the news' — it's 'the only people there are builders with first-hand information.'",
    tags: ["Timing", "Strategy"],
  },
  {
    title: "You Are You, I Am I",
    date: "2026",
    excerpt:
      "Don't hand your life over to other people's judgments, and don't run other people's lives either. Mutual non-interference, with each person owning the results of their own choices. It has limits — family and teams run on cooperation, not independence — but as a default posture, self-determination beats consensus-seeking.",
    tags: ["Life", "Autonomy"],
  },
  {
    title: "Growth Means More Value Creators",
    date: "2026",
    excerpt:
      "An economy grows by adding people who create new value — technology, products, companies, jobs — not only people who circulate existing money. Consumption industries are legitimate and someone has to run them well. But if the question is what a country should want more of, the answer is builders.",
    tags: ["Economy", "Society"],
  },
  {
    title: "Stop Saying 'the West'",
    date: "2026",
    excerpt:
      "Japan lumps the US and Europe into one word, and the resolution collapses the moment you do. The US works long hours, competes hard, and life there is expensive and unforgiving; Europe runs on a different labor contract entirely. Having lived in the US, I flinch every time 'the West' is used to mean 'relaxed.' Split them first, then argue.",
    tags: ["Culture", "US"],
  },
  {
    title: "Born 2000–2003: The Lucky Window",
    date: "2026",
    excerpt:
      "My cohort got an analog childhood — trading cards, handheld consoles, secret bases — and then hit social media and smartphones in adolescence. We are the last generation whose childhood attention wasn't captured by feeds, and still native to the tools that followed. Every generation has its own edge; this one happens to be mine, so I try to use both halves deliberately.",
    tags: ["Generation", "Attention"],
  },
];

export const thoughtFooter =
  "These are working positions, not settled conclusions. Some will survive contact with better arguments; others won't — that's what they're for.";
