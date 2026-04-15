# Portfolio Site — Project Instructions

## Secretary 運用 (CEO ワークスペース連携)

本 repo は `~/Documents/projects/portfolio-site/` 配下で管理される personal portfolio project。root の `~/Documents/CLAUDE.md` を読んだ上で本ファイルを参照すること。衝突時は本ファイルが優先。

### 作業開始時に見るファイル
1. `status.md` — 現在地 / Phase / 次アクション
2. `tasks.md` — 進行中タスク
3. `decisions.md` — 過去判断
4. `links.md` — 主要 docs / components / deploy

### 作業完了時に更新するファイル
- `status.md` (Last updated を必ず)
- `tasks.md` (todo / doing / done)
- `log.md` (1 セッション 1 行以上)
- `decisions.md` (技術選定 / デザイン方針の判断があれば)
- 全社影響のある決定は `~/Documents/secretary/decisions.md` にも

### project 固有ルール (要点)
- 命名は lower-case + hyphen (root ルール)
- コンテンツは `src/data/*.ts` を主に編集 (構造化データ)
- デプロイ: `main` push → GitHub Actions (`.github/workflows/deploy.yml`) → GitHub Pages
- 外部公開 repo (`utahiroy/utahiroy.github.io`) にそのまま commit/push される前提。機密情報を書かない
- `.git` は現 zip 展開版には未同梱。必要なら外部 repo clone / remote 設定を別途行う
- node_modules は gitignore 済。`npm install` で再現

---

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
