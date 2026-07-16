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
