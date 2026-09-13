# Selected Work：OrbCharts / Nocturne-district

首頁兩張卡片已換為正式專案內容，保留 prototype 的色調與版面語彙。依後續確認，兩張卡片改為各佔一列，圖片／iframe 與標題、介紹、連結包含於同一底色卡片內；≥760px 左預覽右文字，<760px 改為上預覽下文字。iframe 設定與可操作區域保留，文字區不覆蓋預覽。

- OrbCharts 使用使用者提供的 GitHub Camo 圖片原址，已下載核對為 128 × 128 PNG。以原生尺寸置中顯示，不放大低解析度標誌。介紹依 [官網首頁](https://bpbase.github.io/orbcharts/en) 的統一資料格式、資料與呈現解耦、可組合圖層及儀表板用途撰寫。「探索 OrbCharts ↗」另開官方網站。
- Nocturne-district 介紹依 [README](https://github.com/upstairs0102/nocturne-district) 撰寫。「進入夜泊街區 ↗」另開完整城市。展示區使用指定的 `https://upstairs0102.github.io/nocturne-district/hologram-light/`，未改動外部專案。
- 已讀取外部 [嵌入文件](https://github.com/upstairs0102/nocturne-district/blob/main/docs/HOLOGRAM_EMBED.md)、RobotDrag 及 HologramCanvas 原始碼，並檢查部署中 HTML 與 CSS。HTML/body/root 透明，WebGL alpha 開啟、scene background 為 null、clear alpha 為 0；來源已實作 Pointer Events 拖曳與透明後製。
- iframe 明確使用透明背景、`color-scheme: light`、無邊框及固定可響應高度；沒有包在超連結中、沒有阻擋腳本的 sandbox，也不攔截 pointer。操作提示與裝飾不接收 pointer，連結放在預覽外。子頁已有 `pan-y pinch-zoom` 與 pointer capture，父頁不重複實作或跨來源注入手勢。
- 外部入口回傳 HTTP 200，回應未包含阻止嵌入的 X-Frame-Options 或 CSP frame-ancestors。圖示亦成功回傳。

Next.js 靜態建置及 TypeScript 檢查通過。另檢查匯出 HTML 的 iframe URL、透明色系設定、指定圖示、兩個連結的 target/rel。沒有執行瀏覽器 GPU 或實機滑鼠測試；實際 WebGL 顯示及拖曳手感需於預覽確認。外部 iframe 與圖示仍依賴其來源網站可用性。

## 版型切換備份

目前恢復為兩張卡片並排、介紹與連結在圖片下方的版本（943de25）。文字放進卡片、卡片內左右排列的完整 CSS 保存在 `src/styles/globals.css` 最後，以 `BEGIN ALTERNATIVE PROJECT CARD LAYOUT` / `END ALTERNATIVE PROJECT CARD LAYOUT` 包成註解。刪除含 BEGIN 與 END 的兩個完整標記行即可啟用；重新註解即可切回。兩版共用現有 HomeContent.tsx，已保留兩張卡片的專用類別，不需複製或替換 JSX，圖片／iframe／文字／連結內容完全相同。
