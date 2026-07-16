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
