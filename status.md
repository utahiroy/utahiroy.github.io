# Status — portfolio-site

> 1 行サマリ: `utahiroy.github.io` 個人ポートフォリオサイト。Astro + TS + Tailwind v4 + React + Framer Motion。GitHub Pages deploy。

- **Phase**: active (content & polish)
- **Last updated**: 2026-10-22
- **Owner**: CEO
- **Live**: https://utahiroy.github.io
- **External repo**: `https://github.com/utahiroy/utahiroy.github.io.git` (origin remote 接続済)

## 現在地
- `~/Documents/projects/portfolio-site/` に統合。`.git` 実在 (branch `main`、origin remote 接続済)
- 6 ページ構成: Home / Profile / Work / **Photography (2026-07-16 新設)** / Hobby / Thought
- コンテンツは `src/data/*.ts` に構造化
- deploy: `main` push → GitHub Actions → GitHub Pages (`.github/workflows/deploy.yml`)

## 進捗 (直近)
- 2026-10-22：LinkedInの全面改修（名刺どおりの兼務の形）に合わせ、トップ、プロフィール、仕事の3ページを英日で書き換えた。役職はSustainability ConsultantとBusiness Planning、経歴は5件（インターンを1件にまとめた）、格付け機関の名前は記載しない、移行金融は関心の程度、FDEの語はAIエージェントの語に替えた。価値観の「Create value, don't just move money」を削除した。思想のページは変えていない。作業は仕事用Macの秘書外のClaude Codeから行った。
- 2026-07-16 (第 3 弾): ギャラリーを **4 カテゴリ × 計 53 枚** に再構成 (Japan 13 / Mountains & Wild Places 20 / Cities & Streets 14 / Details & Small Hours 6)。+12 枚追加 (桜、九州草原、Zion、Yosemite Valley、Bonneville、Vienna、Budapest×2、Singapore、KL、Boston、釣り糸)
- 2026-07-16 (第 2 弾): REQUEST_3 反映 (Hobby 8 カード化 + Profile「Beyond Work」+ Thought 13 本、地名等は抽象化) + ギャラリー拡充 20→41 枚 (ライブラリ全体から。a7 以外の iPhone/Canon も) + 全掲載写真に統一現像 (露出/WB/トーン/彩度、EXIF 除去)。Hobby 6/8 カードに写真
- 2026-07-16 (第 1 弾): コンテンツ全面更新 (ローカル commit 済、**push は CEO 確認待ち**)
  - `/photography` 新設: Photos アプリ「a7」アルバム 4,706 枚から 20 枚選定 (favorite + Apple 美的スコア + 目視)。人物は風景・街のみ方針 (顔が識別できる人物なし、シルエット可)。EXIF/GPS 全除去済
  - Work ページ: LinkedIn 改修 (secretary/personal/linkedin-revamp.md) に完全準拠。ASUENE 3 ポジション + ISEP + E4G、Education、Skills 11 個、Certifications、FDE 方向性
  - Profile: 東京在住 + ESG コンサル×AI 自動化に更新、丸の内ポートレート追加 (旧 Auditing 軸は廃止)
  - Thought: beliefs.md ベースの持論 11 本 (宣言駆動、生き急げ、早期性判定軸、価値創造 ほか)
  - Hobby: Photography カードに α7 + ギャラリーリンク + 写真
- 2026-06-09: status/CLAUDE の「.git なし」誤記述を訂正

## ブロッカー (解消済)
- なし。repo public 復旧 (CEO) → 2 push (a6fc92e, 5a84478) → deploy success、全ページ 200 確認済 (2026-07-16)

## 次アクション (top 3)
1. **CEO レビュー → `main` push** (写真 21 枚 + 全文更新の公開確認。特にキャプション地名: Salar de Uyuni / オーロラ=Minnesota / Canadian Rockies)
2. Pages 反映確認 (デプロイ後の live parity)
3. OG image / favicon / sitemap 最終確認 (既存 P3)

## 固定方針 (CLAUDE.md 参照)
- lightweight だが visually striking
- premium, minimal, bold typography, generous whitespace
- GitHub Pages でデプロイ可能な構成を維持
- 写真公開は「風景・街のみ」(顔が識別できる人物は載せない、2026-07-16 CEO 決定)。ポートレートは本人のみ可
