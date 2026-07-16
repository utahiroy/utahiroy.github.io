# Decisions — portfolio-site

project 内判断の記録先。全社影響のあるものは `~/Documents/secretary/decisions.md` にも記録。

## フォーマット
```
## YYYY-MM-DD — タイトル
- 内容:
- 理由:
- 影響範囲:
- 次の行動:
- 関連:
```

---

## 2026-07-16 — 写真公開方針 + Work の正本を LinkedIn に固定
- 内容: (1) 公開写真は「風景・街のみ」— 顔が識別できる人物は載せない (シルエット・匿名の通行人は可)。本人ポートレートのみ例外で Profile に使用可。(2) ギャラリーは専用 `/photography` ページ。(3) Work ページの内容は LinkedIn プロフィール (secretary/personal/linkedin-revamp.md) を正本として完全踏襲。(4) 公開 repo のため書き出し時に EXIF/GPS を全除去
- 理由: パートナー・友人の掲載は本人同意が必要で、同意なし公開はリスク。Work の二重管理を避け、LinkedIn 改修 (2026-07-13 確定) と常に一致させる
- 影響範囲: `src/data/{work,profile,site,thought,photography}.ts` / `public/photos/` / 今後の写真追加運用
- 次の行動: 写真追加時も同じ選定基準 + EXIF 除去 pipeline を使う
- 関連: memory `linkedin_profile_revamp`、AskUserQuestion での CEO 回答 (2026-07-16)

## 2026-04-15 — `~/Documents/projects/portfolio-site/` に正式移設
- 内容: `~/Documents/utahiroy.github.io-main/` (zip 展開) を `projects/portfolio-site/` に移動。CLAUDE.md 冒頭に Secretary 運用節を追記。status / tasks / decisions / log / links を新規作成
- 理由: CEO ワークスペースの `projects/` 配下に全 project を揃える運用方針。project-registry 上は `active (external)` だったが、ローカル作業実体が発生したため `active` に昇格
- 影響範囲: `projects/portfolio-site/` 全体 / `secretary/{project-registry, active-projects, daily-log, task-log}.md`
- 次の行動: 外部 repo (`utahiroy/utahiroy.github.io`) との同期方針を確定
- 関連: `~/Documents/secretary/legacy-imports/project-portfolio-site.md`
