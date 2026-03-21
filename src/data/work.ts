/**
 * Work page content.
 * Edit this file to add/remove projects, skills, and direction info.
 */

export interface Project {
  title: string;
  description: string;
  tags: string[];
  href?: string;
}

export const work = {
  headline: "What I Build",
  summary:
    "A curated look at the projects, skills, and professional direction that define my work.",
};

export const projects: Project[] = [
  {
    title: "Project One",
    description:
      "Describe the project — what it is, what problem it solves, and what your role was. Keep it concise and specific.",
    tags: ["Strategy", "Technology"],
  },
  {
    title: "Project Two",
    description:
      "Another project that shows a different dimension of your work. Focus on the impact and what you learned.",
    tags: ["Design", "Development"],
  },
  {
    title: "Project Three",
    description:
      "A third project that rounds out the picture. Choose work that represents where you want to go, not just where you've been.",
    tags: ["Analysis", "Communication"],
  },
];

export const skills: string[] = [
  "Strategic Thinking",
  "Problem Solving",
  "Technology",
  "Data Analysis",
  "Communication",
  "Design Thinking",
  "TypeScript",
  "React",
];

export const direction = {
  title: "Current Direction",
  description:
    "Where your professional interests are heading — the questions you're exploring, the skills you're building, and the kind of work you want to do next. This helps visitors understand not just what you've done, but where you're going.",
};
