# ADAM YOU — Next.js Portfolio

正式開發分支：`feat/nextjs-portfolio`。已完成階段 1–3，以及確認後的 Work 斷點、完整 Notebook 目錄與文章搬遷。

## 本機開發

Node.js 22 以上、pnpm 11.19.0。

```sh
pnpm install --frozen-lockfile
pnpm dev
```

開啟 http://localhost:3000。正式建置與檢查：

```sh
pnpm test
pnpm build
pnpm typecheck
pnpm serve
```

`pnpm build` 會清除可重建的 `.next/`、`out/`，執行 Next.js 靜態匯出，並檢查所有輸出頁面的站內連結、圖片和錨點。輸出在 `out/`，不提交 Git。

## 本階段包含

- 首頁：沿用 prototype 原圖、字體、配色、字距、版面尺寸、斷點及前後景視差；支援 reduced motion。
- 共用 Header、Footer，及 Work / Contact 示意頁。
- Notebook 完整分類目錄與 SSG 文章頁：75 份公開文件、1 份草稿保留但不發布。
- 11 個分類、標題／分類／標籤搜尋、目前文章標示；共享 layout 保留展開狀態與選單捲動位置。
- ≥1440px 左側選單／文章／章節目錄；1024–1439px 左側選單與文章、章節目錄移至文章開頭；<1024px 使用 Base UI Dialog 抽屜。
- Work 在小於 900px 時改為單欄。
- 文章目錄、手機目錄收合、GFM 表格、清單、提示區塊、Shiki 語法高亮與行標記。
- 格式預覽文章獨立標示，並非舊站文章。

## 結構

| 路徑 | 用途 |
| --- | --- |
| `src/app/` | App Router 頁面、metadata 與 SSG 路由 |
| `src/components/` | 首頁、共用版型與文章元件 |
| `src/styles/tokens.css` | 色彩、字體與共用設計數值 |
| `src/styles/prototype.css` | 從 prototype 移植且限定作用範圍的樣式 |
| `src/styles/notebook.css` | 文章與 Notebook 排版 |
| `src/lib/notebook.ts` | frontmatter、路徑檢查、草稿過濾 |
| `src/lib/markdown.tsx` | Markdown / MDX 編譯與舊格式相容 |
| `content/notebook/` | 可維護的 Markdown 原始內容 |
| `public/images/` | 原始人物照片與文章圖片 |
| `reference/prototype/` | 原始 prototype，保持不變供比對 |
| `docs/` | 設計基準、76 篇筆記盤點、遷移紀錄及驗證結果 |

UI 使用原生語意元素與自訂樣式。手機抽屜使用無預設樣式的 Base UI Dialog，處理焦點、Esc 關閉、背景遮罩與捲動鎖定。

## 文章格式

```yaml
---
slug: category/article-name
title: 文章標題
category: JavaScript
tags: [javascript]
draft: false
publishedAt:
updatedAt:
---
```

slug 沿用舊站 slug，網址為 `/notebook/<slug>/`。draft 文章不產生頁面。只編譯受信任的本地檔案；`.md` 使用 Markdown 模式，`.mdx` 可使用 MDX，JavaScript 表達式保持封鎖。`gray-matter` 只解析一次；目前不需要重複安裝 `@next/mdx`。

支援 Docusaurus `:::info` 等提示區塊與 `## 標題 {#custom-id}`。重複的文章頂端 H1 僅在渲染時移除，原文不修改。圖片路徑轉換記錄於 `docs/sample-migration.json`，測試可驗證還原後的原文雜湊與圖片位元組。

## 日期與最新文章

`publishedAt`、`updatedAt` 一律使用 `YYYY-MM-DD`，建議加引號。舊文不可考，兩欄留空（YAML null），不從檔名、Git commit、檔案時間或搬遷日期推測。

Latest Notes 於每次建置選出發表日期最新的 6 篇。無日期、草稿、系列介紹、格式示例與未來日期不列入。未來日期以台北曆日判斷，需在日期到達後重新建置／發布。更新日期只顯示於文章資訊，不影響最新排序。新增文章預設 `kind: article`；系列簡介使用 `kind: index`，格式示例為 `kind: example`。日期留空時最新區塊顯示空狀態，完整分類仍可閱讀。

舊文的原始內容與圖片完整性由 `docs/notebook-migration.json` 及測試驗證，僅轉换資源網址和補充 frontmatter。Vue 講義原圖路徑大小寫錯誤已對應回實際檔案。重現搬遷可使用 `node scripts/migrate-notebook.mjs /path/to/extracted-docusaurus`；不要對已有後續內容修改的資料夾重新搬遷。

## 確認後再進行

Work 六個分類的正式內容、舊 `/docs/` URL 相容、Home / Contact 正式文案與正式 SEO。26 篇 Blog 不在目前遷移範圍。預覽版本暫設 noindex。

每個完成的修改批次都 commit 並推上此分支。GitHub Pages 切換、GitHub Actions 與合併 main 留待最後另行確認。
