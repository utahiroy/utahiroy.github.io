/**
 * Hobby page content.
 * Edit this file to update personal interests and hobbies.
 */

export interface Hobby {
  title: string;
  description: string;
  details?: string;
  /** Optional card image (lives in /public/photos/). */
  image?: { src: string; alt: string };
  /** Optional link (e.g. to the photography gallery). */
  href?: string;
}

export const hobby = {
  headline: "What I Enjoy",
  summary:
    "The interests that balance the analytical side. None of them stays in its lane — a trip turns into food research, a history walk, and the right playlist for the drive.",
};

export const hobbies: Hobby[] = [
  {
    title: "Photography",
    description:
      "A way to slow down and pay attention. I'm drawn to composition, light, and the small details that most people walk past.",
    details:
      "Mostly street and travel photography, shot on a Sony α7. Less about perfect technique, more about noticing something worth capturing.",
    image: {
      src: "/photos/suzhou-lantern-alley.jpg",
      alt: "Red lanterns above a busy evening alley in Suzhou",
    },
    href: "/photography",
  },
  {
    title: "DJ & Music",
    description:
      "Listening widely, and learning to mix — a Pioneer DJ controller and a pair of Yamaha studio monitors sit on my desk.",
    details:
      "The fun is in the transitions: tempo, energy, and mood lining up so the room shifts without noticing. I chose the monitors for accuracy over hyped bass — I research gear against room, use, and budget, then actually buy it and use it. Someday I want to play small gatherings and bars, not just my desk.",
  },
  {
    title: "Lakes & Nature",
    description:
      "I have a thing for lakes — a stillness different from the sea, and the way mountains, towns, and water sit close together in one view.",
    details:
      "I compare lakeside regions across Japan the way other people compare neighborhoods: transport, climate, winters, everyday life. The long-term picture is a house near the water with my family, ideally with a boat, and the city still within reach.",
    image: {
      src: "/photos/hallstatt-lakefront.jpg",
      alt: "A lakeside village beneath steep mountains",
    },
  },
  {
    title: "Travel",
    description:
      "Cities, port towns, hot springs, old streets — I travel to understand why a place became what it is, at home and abroad.",
    details:
      "Fewer stops, longer looks: I'd rather walk one town properly than collect ten viewpoints in a day. That includes places with hard histories — I want to see how regions hit by disaster remember it and rebuild.",
    image: {
      src: "/photos/machu-picchu.jpg",
      alt: "Machu Picchu seen from above",
    },
  },
  {
    title: "Food & Fish",
    description:
      "Where I travel gets decided partly by what's on the table there. Fish above all — ports, markets, and the local diner over the famous restaurant.",
    details:
      "Season, landing port, preparation: food is the fastest way into a region's nature, industry, and history, not just a reward at the end of the day.",
    image: {
      src: "/photos/shanghai-dumplings.jpg",
      alt: "Xiaolongbao in a bamboo steamer",
    },
  },
  {
    title: "History & Street Walks",
    description:
      "Old streets, shrines, castle grounds — I read them as systems: what was this place for, and what of it still shapes today's town?",
    details:
      "Dates and names interest me less than function — a castle matters as a seat of politics and administration, not as a big building. Finding the old structure inside the current city is the game.",
    image: {
      src: "/photos/temple-hall.jpg",
      alt: "A temple hall with golden roof ornaments",
    },
  },
  {
    title: "Cross-Cultural Exchange",
    description:
      "Living in both Japan and the US taught me to read differences as differences — habits, education, relationships, work — not as rankings.",
    details:
      "I enjoy explaining Japan to visitors. I once guided a tour group from abroad through a historic castle town: no jargon, one or two reasons why each spot matters, and time to just look. Explaining a place to someone with no shared context teaches you what actually matters about it.",
  },
  {
    title: "Sports",
    description:
      "Watching and following sports — the strategy, the momentum shifts, and the stories that unfold within structure and constraint.",
    details:
      "I appreciate the discipline and systems thinking that competitive sports demand, both from athletes and from the organizations around them.",
    image: {
      src: "/photos/baseball-dusk.jpg",
      alt: "A baseball stadium at dusk",
    },
  },
];
