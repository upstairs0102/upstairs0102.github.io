# ADAM YOU — Portfolio

游上德的個人網站，以 Next.js、TypeScript 與 Tailwind CSS 建置，包含作品集與技術筆記。

網站：https://upstairs0102.github.io/

## 本機開發

使用 Node.js 24 與 pnpm 11.19.0。

```sh
pnpm install --frozen-lockfile
pnpm dev
```

開啟 http://localhost:3000。

## 建置與檢查

```sh
pnpm test
pnpm build
pnpm typecheck
pnpm serve
```

`pnpm build` 會清除舊建置、執行 Next.js 靜態匯出，並檢查站內連結、圖片與錨點。輸出位於 `out/`，不提交 Git；`pnpm serve` 可在本機預覽匯出結果。

## 內容維護

- `src/app/`：頁面與 metadata。
- `src/components/`：共用元件；聯絡資訊集中在 `ContactLinks.tsx`。
- `src/styles/`：網站樣式。
- `content/notebook/`：Markdown / MDX 技術筆記。
- `content/work/`：作品分類與內容。
- `public/`：圖片、字體等靜態資源。

筆記 frontmatter 範例：

```yaml
---
slug: category/article-name
title: 文章標題
category: JavaScript
tags: [javascript]
draft: false
publishedAt: "2026-09-13"
updatedAt:
---
```

文章網址為 `/notebook/<slug>/`；草稿不發布。日期使用 `YYYY-MM-DD`，不確定時留空。最新文章依發表日期排序，排除草稿、未來日期、系列介紹與格式示例；未來日期文章需重新建置才會進入最新清單。僅編譯受信任的本地 Markdown / MDX。

Work 檔案使用 `id`、`title`、`order` frontmatter，內文以 Markdown 維護。舊文章網址透過靜態轉接頁導向 Notebook，保留 query 與 hash。

## 部署

`.github/workflows/deploy-pages.yml` 在每次推送至 `main` 時執行測試、建置、型別檢查，通過後將 `out/` 部署至 GitHub Pages。合併至 `main` 的 Pull Request 也會觸發部署；PR 合併前僅執行檢查。亦可在 Actions 頁面手動執行。

Repository 的 **Settings → Pages → Build and deployment → Source** 需設為 **GitHub Actions**。
