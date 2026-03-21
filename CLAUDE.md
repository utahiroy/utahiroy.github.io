# Project Overview

This repository contains the source code for my personal portfolio website.

Primary goal:
- communicate who I am through a single URL

The site should help visitors quickly understand:
- who I am
- what I do
- what I care about
- what I have worked on
- what I enjoy
- how I think

This project is intended to be published on GitHub Pages at:

- https://utahiroy.github.io

---

# Fixed Priorities

The following are fixed:

1. This is a personal portfolio website.
2. The site should communicate my profile, work, thoughts, and hobbies through a single URL.
3. The visual experience matters a lot.
4. The ideal direction is: lightweight, but visually striking.
5. The project should remain understandable and maintainable for a beginner.
6. The site should be deployable to GitHub Pages.

---

# Recommended Direction

The following are current recommendations, not absolute rules.

If there is a better approach, explain why before changing direction.

## Recommended stack
- Astro
- TypeScript
- Tailwind CSS
- React only where interactivity is useful
- Framer Motion for motion
- GitHub Actions for deployment

## Recommended content structure
Start with these core sections, but assume the site may expand over time:
- Home
- Profile
- Work
- Hobby
- Thought

More pages/sections can be added later if they improve the site.

## Recommended content storage
- structured content can live in local content files or JSON
- images should live in `public/`
- content should be easy to edit later

## Recommended design principles
- premium and minimal
- bold typography
- generous whitespace
- clean visual hierarchy
- strong but restrained motion
- subtle sage-green accent
- avoid clutter
- avoid noisy UI

## Recommended implementation approach
- start with a strong core experience first
- improve incrementally
- prefer reusable components
- avoid unnecessary complexity
- keep the project readable for a beginner

## Recommended deployment approach
- use GitHub Pages
- prefer GitHub Actions deployment
- assume this repo is a user site: `utahiroy.github.io`

## Recommended workflow
When making significant changes:
1. explain the direction briefly
2. list files being created or edited
3. make the change cleanly
4. explain how to run and verify it
5. suggest the next step

---

# Things to Avoid (Recommended)

These are not absolute bans, but should generally be avoided unless there is a clear reason:

- unnecessary heavy dependencies
- overly complex architecture too early
- fragile external integrations
- full-page heavy 3D effects
- server-dependent features that complicate GitHub Pages deployment
- adding tools just because they are trendy

If any of these are introduced, explain why they are worth the tradeoff.

---

# Beginner-Friendly Expectations

Assume the repository owner is new to web development.

So:
- explain commands clearly
- avoid skipping setup steps
- keep folder structure understandable
- prefer practical solutions over clever ones
- when multiple options exist, recommend one clearly

---

# Output Format Preference

When helping with implementation, prefer this structure:

1. summary
2. files to create or edit
3. exact code changes
4. exact commands to run
5. how to verify success
6. next recommended step
