# Status — portfolio-site

> 1 行サマリ: `utahiroy.github.io` 個人ポートフォリオサイト。Astro + TS + Tailwind v4 + React + Framer Motion。GitHub Pages deploy。

- **Phase**: active (content & polish)
- **Last updated**: 2026-04-15
- **Owner**: CEO
- **Live**: https://utahiroy.github.io
- **External repo**: `git@github.com:utahiroy/utahiroy.github.io`

## 現在地
- `~/Documents/projects/portfolio-site/` に統合 (zip 展開、`.git` なし)
- 基本 5 ページ構成: Home / Profile / Work / Hobby / Thought
- コンテンツは `src/data/*.ts` に構造化
- deploy: `main` push → GitHub Actions → GitHub Pages (`.github/workflows/deploy.yml`)

## 進捗 (直近)
- 2026-04-15: `~/Documents/projects/portfolio-site/` に統合、Secretary 管理ファイルを作成

## ブロッカー
- `.git` が zip 版に無いため、外部 repo との同期は別途要対応 (clone / remote 再接続)

## 次アクション (top 3)
1. 外部 repo との同期方針を確定 (clone し直し or 本ディレクトリに remote 追加)
2. `src/data/*.ts` のコンテンツを最新化 (Profile / Work / Thought)
3. visual polish (sage-green アクセント、typography)

## 固定方針 (CLAUDE.md 参照)
- lightweight だが visually striking
- premium, minimal, bold typography, generous whitespace
- GitHub Pages でデプロイ可能な構成を維持
