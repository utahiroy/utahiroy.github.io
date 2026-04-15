# Links — portfolio-site

## repo / deploy
- external repo: `git@github.com:utahiroy/utahiroy.github.io`
- live site: https://utahiroy.github.io
- deploy workflow: `.github/workflows/deploy.yml` (GitHub Actions → GitHub Pages)

## エントリポイント
- `src/pages/index.astro` — Home
- `src/pages/profile.astro` — Profile
- `src/pages/work.astro` — Work
- `src/pages/hobby.astro` — Hobby
- `src/pages/thought.astro` — Thought

## コンテンツ (構造化データ)
- `src/data/*.ts` — 各ページの構造化コンテンツ (更新はここが主)

## コンポーネント / レイアウト
- `src/layouts/` — BaseLayout
- `src/components/` — Header / Footer / NavCard ほか

## スタイル
- `src/styles/global.css` — global + Tailwind + design tokens (sage-green アクセント)

## 静的アセット
- `public/` — 画像 / favicon / OG image など (参照は `/filename.ext`)

## 設定
- `astro.config.mjs` — Astro + integrations
- `tsconfig.json` — TS 設定
- `package.json` — scripts: dev / build / preview

## Secretary 連携
- `~/Documents/secretary/project-registry.md`
- `~/Documents/secretary/active-projects.md`
- `~/Documents/secretary/legacy-imports/project-portfolio-site.md` (前世代サマリ)
