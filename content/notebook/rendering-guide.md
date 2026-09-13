---
slug: rendering-guide
title: 文章格式預覽
category: Format study
tags: [Markdown]
sample: true
---

這是一篇用來檢視閱讀樣式的示範文章，並非舊站筆記。

## 文字與段落 {#typography}

中文與 English 可以自然地放在同一段落。**重點文字**、*斜體*、~~刪除線~~，以及 `inline code` 都有各自的位置。

> 好的筆記，能讓未來的自己快速想起當時的問題。

## 清單

- [x] 保留文章文字與程式碼
- [x] 圖片隨容器縮放
- [ ] 完整內容搬遷

1. 先描述問題。
2. 再記下解法。

## 表格

| 項目 | 桌面 | 手機 |
| :--- | :--- | :--- |
| 文章目錄 | 右側固定位置 | 點開收合 |
| 程式碼 | 語法高亮 | 區塊內橫向捲動 |
| 表格 | 完整欄位 | 區塊內橫向捲動 |

## 程式碼

```ts title="example.ts" {2}
const name: string = "Adam You";
console.log(`Hello, ${name}!`);
```

## 提示

:::info
這是資訊區塊。它也支援 **Markdown** 和 `code`。
:::

:::warning
這是提醒區塊，留意條件與限制。
:::

## 重複標題

第一個同名章節。

## 重複標題

第二個同名章節有獨立錨點，可從目錄直接跳轉。

## 回到開頭

[查看文字與段落](#typography)，或[返回 Notebook](/notebook/)。
