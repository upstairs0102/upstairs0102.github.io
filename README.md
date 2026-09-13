# ADAM YOU — Next.js Portfolio

正式開發分支：`feat/nextjs-portfolio`。已完成階段 1–4：完整 Notebook、Work 內容搬遷及舊網址相容。驗證紀錄見 `docs/stage-4-review.md`。

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
- 共用 Header、Footer；Work 已放入正式內容。Home 與 Contact 透過 `src/components/ContactLinks.tsx` 共用 Email、GitHub、LinkedIn、Facebook、Flickr 聯絡資訊；Email 使用 mailto，社群連結另開分頁。
- Notebook 完整分類目錄與 SSG 文章頁：75 份公開文件、1 份草稿保留但不發布。
- 11 個分類、標題／分類／標籤搜尋、目前文章標示；共享 layout 保留展開狀態與選單捲動位置。
- ≥1440px 左側選單／文章／章節目錄；1024–1439px 左側選單與文章、章節目錄移至文章開頭；<1024px 使用 Base UI Dialog 抽屜。
- Work 在小於 900px 時改為單欄。
- Work 六個分類、43 筆正式內容，以 Markdown 維護。長清單在寬螢幕依原順序由左到右排成兩欄；分類捷徑可直接跳到各區段。
- 75 個舊文章網址及 `/docs/` 入口可轉接至 Notebook；文章與 Work 中的舊站內連結在編譯時轉為新路徑。
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
| `content/work/` | 六個 Work 分類，各自一份 Markdown |
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

`publishedAt`、`updatedAt` 一律使用 `YYYY-MM-DD`，建議加引號。已依使用者確認，從舊 Blog 比對出 17 篇來源，補回 15 篇筆記的發表日期。日期由 Blog 的日期式檔名與 slug 交叉確認；來源沒有獨立更新日期或時分秒，所以 `updatedAt` 維持空白。其餘無對應來源的舊筆記仍留空，不從 Git commit、檔案修改時間或搬遷日期推測。完整比對與來源雜湊見 `docs/notebook-date-sources.json`。

Notebook 首頁的 Latest Notes 於每次建置選出發表日期最新的 6 篇；網站首頁 NOTEBOOK 區塊共用 `getLatestNotes`，選出前 3 篇並連到文章。無日期、草稿、系列介紹、格式示例與未來日期不列入。未來日期以台北曆日判斷，需在日期到達後重新建置／發布。更新日期只顯示於文章資訊，不影響最新排序。新增文章預設 `kind: article`；系列簡介使用 `kind: index`，格式示例為 `kind: example`。沒有符合條件的文章時顯示空狀態。Notebook 首頁已移除「依分類閱讀」，完整分類與搜尋仍透過側欄／手機抽屜使用。

舊文的原始內容與圖片完整性由 `docs/notebook-migration.json` 及測試驗證，僅轉换資源網址和補充 frontmatter。Vue 講義原圖路徑大小寫錯誤已對應回實際檔案。重現搬遷可使用 `node scripts/migrate-notebook.mjs /path/to/extracted-docusaurus`；不要對已有後續內容修改的資料夾重新搬遷。

## 確認後再進行

首頁其餘正式文案與正式 SEO。26 篇 Blog 不另建文章頁；其中 17 篇僅作為既有筆記的日期來源，沒有對應筆記的 9 篇不新增內容。預覽版本暫設 noindex。

每個完成的修改批次都 commit 並推上此分支。GitHub Pages 切換、GitHub Actions 與合併 main 留待最後另行確認。

## Work 與舊網址

`content/work/*.md` 使用 `id`、`title`、`order` frontmatter；內文使用標準 Markdown 清單與連結。直接編輯這些檔案即可更新 Work，不需改 TSX。舊站有效內容的文字、可見日期、連結及順序已保留，註解內容不發布；遷移紀錄在 `docs/work-migration.json`。

重現初次搬遷：`node scripts/migrate-work.mjs /path/to/extracted-docusaurus`。這會覆寫 Work 檔案，請勿用於已編輯過的內容。工具僅在搬遷時使用 `typescript-legacy` 的 TSX parser，應用程式型別檢查仍使用 TypeScript 7。

舊網址對照使用 `docs/migration-inventory.json`。SSG 為每個公開舊路徑輸出轉接頁，由瀏覽器 `location.replace` 跳至新路徑並保留 query/hash；停用 JavaScript 時提供一般連結。這不是 HTTP 301/308。草稿不產生轉接頁，未知路徑維持 404。舊錨點會原樣帶入，並未另建歷史標題 ID 的別名表。
