# utahiroy.github.io

Personal portfolio website — built with Astro, TypeScript, and Tailwind CSS.

Live at: https://utahiroy.github.io

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── components/     Reusable UI components (Header, Footer, NavCard, etc.)
├── layouts/        Page layout templates (BaseLayout)
├── pages/          Each file = one route
│   ├── index.astro     Home (/)
│   ├── profile.astro   Profile (/profile)
│   ├── work.astro      Work (/work)
│   ├── hobby.astro     Hobby (/hobby)
│   └── thought.astro   Thought (/thought)
└── styles/         Global CSS and Tailwind config
public/             Static assets (images, favicon)
```

## Stack

- **[Astro](https://astro.build)** — Static site framework
- **TypeScript** — Type safety
- **[Tailwind CSS v4](https://tailwindcss.com)** — Utility-first CSS
- **React** — Available for interactive components
- **Framer Motion** — Available for animation

## Deployment

This site deploys automatically to GitHub Pages when you push to `main`.

The deployment is handled by GitHub Actions (`.github/workflows/deploy.yml`).

### First-time setup

1. Go to your repo **Settings > Pages**
2. Under **Source**, select **GitHub Actions**
3. Push to `main` — the site will build and deploy automatically

## Adding Content

- **Pages**: Edit files in `src/pages/`
- **Components**: Reusable pieces live in `src/components/`
- **Images**: Place in `public/` and reference as `/image-name.jpg`
- **Styles**: Global styles and design tokens are in `src/styles/global.css`

## Design Tokens

The site uses a sage-green accent color palette and neutral grays, defined in `src/styles/global.css`. To change the accent color, update the `--color-sage-*` values.
