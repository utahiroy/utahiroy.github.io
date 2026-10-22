# Log — portfolio-site

時系列ログ。新しい日付を上に積む。

## フォーマット
```
## YYYY-MM-DD
- 何をしたか:
- 何が分かったか:
- 次にやること:
```

---

## 2026-10-22（LinkedInの改修に合わせて3ページを書き換え）
- 何をしたか：（1）コミット`7843255`で、`site.ts`、`profile.ts`、`work.ts`、`ja.ts`と、トップ、仕事、プロフィールのテンプレートの文面を、LinkedInの2026-10-22版にそろえた。（2）コミット`0531a21`で、関心を4つ（サステナブルファイナンス（移行金融を含む）、サステナビリティ開示、気候と地図のデータ、オントロジーを使ったAI）にし、オントロジーの考え方を「向かう先」と「いまの方向性」に書いた。日本語版の「専門家の判断を言葉にし」4か所と「言語化して構造を与えます」「地理空間情報」を、普段の言い方に直した。どちらも`npm run build`で12ページの生成を確かめてからpushした。
- 何が分かったか：思想のページ（`thought.ts`と`ja.ts`の思想の節）には「お金を動かすだけの側ではなく」の一文が残る。移行金融への関心と食い違うので、直すかは本人に確かめる。GitHub Actionsの「pages-build-deployment」はpushのたびに失敗するが、公開は「Deploy to GitHub Pages」が担っており、成功している。
- 次にやること：別のMacの作業フォルダ（`~/Documents/projects/portfolio-site/`）で`git pull`する。

## 2026-07-16 (第 2 弾) — REQUEST_3 反映 + ギャラリー 41 枚化 + 統一現像
- 何をしたか: (1) REQUEST_3.md (ChatGPT 由来の人物情報) を Hobby 8 カード / Profile「Beyond Work」/ Thought +2 本に反映。地名 (湖リスト・川越)・機材型番・家族構成は抽象化。(2) ライブラリ全体 29,901 枚を再スキャン (score≥0.70・人物なし・1600px+、311 候補) → 21 枚追加で 41 枚に。(3) 全掲載写真に統一現像 (median 露出正規化 + capped gray-world WB + 共通トーンカーブ + 彩度 1.03)。(4) Hobby 6 カードに写真割り当て
- 何が分かったか: iCloud 未ダウンロード原本は use_photos_export でも AAE (XML) しか出ない場合がある → 1 枚 (気嵐の海) 見送り。live site は repo private 化で 404 (Pages 停止)
- 次にやること: CEO が repo を public に戻す → push → LinkedIn に https://utahiroy.github.io を記載

## 2026-07-16 — コンテンツ全面更新 + /photography 新設
- 何をしたか: (1) Photos「a7」アルバム 4,706 枚から favorite 57 + Apple 美的スコア上位で 167 候補を抽出 → 目視で 20 枚選定 → EXIF/GPS 除去して `public/photos/` へ (osxphotos + Pillow、`~/.venvs/photos-tools`)。(2) `/photography` ページ新設 (masonry、キャプション付き)。(3) Work を LinkedIn 改修ドラフトに完全準拠 (ASUENE 3 ポジション / ISEP / E4G / Education / Skills 11 / Certifications / FDE)。(4) Profile を東京 + ESG×AI 軸に更新、丸の内ポートレート追加。(5) Thought を beliefs.md ベース持論 11 本に刷新。(6) Home / Hobby / site.ts 整合。build + preview 目視確認済
- 何が分かったか: a7 Mark 1 は GPS 非搭載 → キャプション地名は写真内容から推定 (Uyuni / Minnesota オーロラ / Canadian Rockies は CEO 確認推奨)。osxphotos の derivative は小サイズが混ざるため full export は `use_photos_export=True` + `ImageOps.exif_transpose` が必要
- 次にやること: CEO レビュー → main push → Pages 反映確認

## 2026-04-15 — CEO ワークスペース統合
- 何をしたか: `~/Documents/utahiroy.github.io-main/` → `~/Documents/projects/portfolio-site/` に移設。CLAUDE.md 冒頭に Secretary 運用節を挿入。status / tasks / decisions / log / links を新規作成。Secretary (project-registry / active-projects / daily-log / task-log) に反映
- 何が分かったか: zip 展開版のため `.git` は未同梱。外部 repo との同期は別途要対応
- 次にやること: 外部 repo との同期方針確定 (clone し直し or remote 追加)

## 2026-07-16 — auto-logged session
- session: 2026-07-16T21:30:05 → 2026-07-16T21:30:55
- touched (2):
  - projects/portfolio-site/src/data/photography.ts
  - projects/portfolio-site/src/pages/photography.astro
- 何が分かったか: (要記入)
- 次にやること: (要記入)

## 2026-07-16 — auto-logged session
- session: 2026-07-16T21:40:19 → 2026-07-16T21:44:23
- touched (4):
  - projects/portfolio-site/decisions.md
  - projects/portfolio-site/log.md
  - projects/portfolio-site/status.md
  - projects/portfolio-site/tasks.md
- 何が分かったか: (要記入)
- 次にやること: (要記入)

## 2026-07-16 — auto-logged session
- session: 2026-07-16T21:56:18 → 2026-07-16T21:59:23
- touched (6):
  - projects/portfolio-site/src/data/hobby.ts
  - projects/portfolio-site/src/data/profile.ts
  - projects/portfolio-site/src/data/thought.ts
  - projects/portfolio-site/src/pages/hobby.astro
  - projects/portfolio-site/src/pages/index.astro
  - projects/portfolio-site/src/pages/profile.astro
- 何が分かったか: (要記入)
- 次にやること: (要記入)

## 2026-07-16 — auto-logged session
- session: 2026-07-16T22:54:35 → 2026-07-16T22:56:38
- touched (2):
  - projects/portfolio-site/src/data/hobby.ts
  - projects/portfolio-site/src/data/photography.ts
- 何が分かったか: (要記入)
- 次にやること: (要記入)

## 2026-07-16 — auto-logged session
- session: 2026-07-16T23:04:57 → 2026-07-16T23:06:21
- touched (2):
  - projects/portfolio-site/src/data/photography.ts
  - projects/portfolio-site/src/pages/photography.astro
- 何が分かったか: (要記入)
- 次にやること: (要記入)

## 2026-07-16 — auto-logged session
- session: 2026-07-16T23:07:31 → 2026-07-16T23:08:14
- touched (1):
  - projects/portfolio-site/status.md
- 何が分かったか: (要記入)
- 次にやること: (要記入)

## 2026-07-16 — auto-logged session
- session: 2026-07-16T23:31:36 → 2026-07-16T23:35:16
- touched (2):
  - projects/portfolio-site/src/pages/index.astro
  - projects/portfolio-site/src/pages/profile.astro
- 何が分かったか: (要記入)
- 次にやること: (要記入)

## 2026-07-17 — auto-logged session
- session: 2026-07-16T23:57:52 → 2026-07-17T00:00:52
- touched (5):
  - projects/portfolio-site/src/components/Header.astro
  - projects/portfolio-site/src/data/ja.ts
  - projects/portfolio-site/src/data/thought.ts
  - projects/portfolio-site/src/styles/global.css
  - projects/portfolio-site/src/templates/HomePage.astro
- 何が分かったか: (要記入)
- 次にやること: (要記入)

## 2026-07-17 — auto-logged session
- session: 2026-07-17T00:03:11 → 2026-07-17T00:05:46
- touched (2):
  - projects/portfolio-site/src/data/ja.ts
  - projects/portfolio-site/src/data/thought.ts
- 何が分かったか: (要記入)
- 次にやること: (要記入)

## 2026-07-17 — auto-logged session
- session: 2026-07-17T00:13:48 → 2026-07-17T00:18:31
- touched (1):
  - projects/portfolio-site/src/data/ja.ts
- 何が分かったか: (要記入)
- 次にやること: (要記入)

## 2026-07-17 — Liquid Glass 完全版・思想 17 本・スマホ対応・Codex 監査 2 巡
- 何をしたか: (1) Liquid Glass v2 (屈折エッジリング、スクロール縮小ナビ、スプリング反応、同心円角丸)。(2) 思想を 17 本に (beliefs 全 8 本 + 新持論 3 本を beliefs.md へ初記録の上掲載)。(3) タグライン刷新 (仕事寄り解消)。(4) スマホ対応 (横スクロールピルナビ、blur 軽減、blob クリップ)。(5) Codex gpt-5.6-sol 監査 2 巡 = コピー 19 件 + コード 10 件適用 (a11y: aria-current/focus-visible/reduced-motion、JA ラベル漏れ等)
- 何が分かったか: デプロイ直後の「崩れ」は Pages の HTML 10 分キャッシュ × ハッシュ付き CSS の不整合 (ハードリロードで解消、恒久対処不要)。codex CLI は 0.144+ で gpt-5.6-sol 対応
- 次にやること: tasks.md の Codex 残 7 件、味覚 4 象限の軸ヒアリング、実機スマホ確認
