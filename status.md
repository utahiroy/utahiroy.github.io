# Status — portfolio-site

> 1 行サマリ: `utahiroy.github.io` 個人ポートフォリオサイト。Astro + TS + Tailwind v4 + React + Framer Motion。GitHub Pages deploy。

- **Phase**: active (content & polish)
- **Last updated**: 2026-07-16 (コンテンツ全面更新 + /photography 新設、push は CEO 確認待ち)
- **Owner**: CEO
- **Live**: https://utahiroy.github.io
- **External repo**: `https://github.com/utahiroy/utahiroy.github.io.git` (origin remote 接続済)

## 現在地
- `~/Documents/projects/portfolio-site/` に統合。`.git` 実在 (branch `main`、origin remote 接続済)
- 6 ページ構成: Home / Profile / Work / **Photography (2026-07-16 新設)** / Hobby / Thought
- コンテンツは `src/data/*.ts` に構造化
- deploy: `main` push → GitHub Actions → GitHub Pages (`.github/workflows/deploy.yml`)

## 進捗 (直近)
- 2026-07-16: コンテンツ全面更新 (ローカル commit 済、**push は CEO 確認待ち**)
  - `/photography` 新設: Photos アプリ「a7」アルバム 4,706 枚から 20 枚選定 (favorite + Apple 美的スコア + 目視)。人物は風景・街のみ方針 (顔が識別できる人物なし、シルエット可)。EXIF/GPS 全除去済
  - Work ページ: LinkedIn 改修 (secretary/personal/linkedin-revamp.md) に完全準拠。ASUENE 3 ポジション + ISEP + E4G、Education、Skills 11 個、Certifications、FDE 方向性
  - Profile: 東京在住 + ESG コンサル×AI 自動化に更新、丸の内ポートレート追加 (旧 Auditing 軸は廃止)
  - Thought: beliefs.md ベースの持論 11 本 (宣言駆動、生き急げ、早期性判定軸、価値創造 ほか)
  - Hobby: Photography カードに α7 + ギャラリーリンク + 写真
- 2026-06-09: status/CLAUDE の「.git なし」誤記述を訂正

## ブロッカー
- なし (push すれば GitHub Actions が走る)

## 次アクション (top 3)
1. **CEO レビュー → `main` push** (写真 21 枚 + 全文更新の公開確認。特にキャプション地名: Salar de Uyuni / オーロラ=Minnesota / Canadian Rockies)
2. Pages 反映確認 (デプロイ後の live parity)
3. OG image / favicon / sitemap 最終確認 (既存 P3)

## 固定方針 (CLAUDE.md 参照)
- lightweight だが visually striking
- premium, minimal, bold typography, generous whitespace
- GitHub Pages でデプロイ可能な構成を維持
- 写真公開は「風景・街のみ」(顔が識別できる人物は載せない、2026-07-16 CEO 決定)。ポートレートは本人のみ可
