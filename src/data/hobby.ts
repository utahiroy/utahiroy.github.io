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
    "The interests and experiences that balance the analytical side — a personal archive that grows over time.",
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
    title: "Sports",
    description:
      "Watching and following sports — the strategy, the momentum shifts, and the stories that unfold within structure and constraint.",
    details:
      "I appreciate the discipline and systems thinking that competitive sports demand, both from athletes and from the organizations around them.",
  },
  {
    title: "Travel",
    description:
      "Experiencing different cities, cultures, and systems firsthand. Every trip recalibrates how I think about my own assumptions.",
    details:
      "I pay attention to how cities are designed, how people move through spaces, and how local context shapes everything from food to infrastructure.",
    image: {
      src: "/photos/machu-picchu.jpg",
      alt: "Machu Picchu seen from above",
    },
  },
  {
    title: "Music & Expression",
    description:
      "Listening, discovering, and using music as a way to shift perspective. Playlists as a form of personal curation.",
    details:
      "Music is one of the few things I consume without trying to optimize it. It's a space for intuition over analysis.",
  },
  {
    title: "Technology & IoT",
    description:
      "Curiosity about how sensors, connected devices, and data systems are reshaping everyday environments.",
    details:
      "This interest connects directly to my professional direction — understanding how physical-world data can be captured, structured, and made useful.",
  },
];
