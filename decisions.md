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

## 2026-04-15 — `~/Documents/projects/portfolio-site/` に正式移設
- 内容: `~/Documents/utahiroy.github.io-main/` (zip 展開) を `projects/portfolio-site/` に移動。CLAUDE.md 冒頭に Secretary 運用節を追記。status / tasks / decisions / log / links を新規作成
- 理由: CEO ワークスペースの `projects/` 配下に全 project を揃える運用方針。project-registry 上は `active (external)` だったが、ローカル作業実体が発生したため `active` に昇格
- 影響範囲: `projects/portfolio-site/` 全体 / `secretary/{project-registry, active-projects, daily-log, task-log}.md`
- 次の行動: 外部 repo (`utahiroy/utahiroy.github.io`) との同期方針を確定
- 関連: `~/Documents/secretary/legacy-imports/project-portfolio-site.md`
