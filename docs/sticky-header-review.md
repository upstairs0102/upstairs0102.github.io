# 霧面紙感 Header

依確認的方案一，Header 使用 sticky 固定在頁面最上方並保留文件流位置。維持桌面 96px、手機（≤700px）78px 高度；超寬螢幕仍維持原本 Logo／選單位置，但背景延伸到視窗兩側。

捲動超過 24px 後使用 94% 灰白背景、8px backdrop blur 與 1px 底線。透過 inset shadow 畫底線，不影響版面高度。頂端恢復原紙色；不支援 backdrop-filter 時使用不透明底色。動畫 180ms，減少動態偏好下取消過渡。

捲動監聽 passive + requestAnimationFrame 合併，只在跨越門檻時更新狀態。路由切換及 pageshow 重新確認位置，卸載時移除監聽與排程。

Notebook 左側目錄、右側文章目錄的 sticky top 與可用高度扣除 Header；手機目錄列固定於 Header 下方。根節點 scroll-padding 加上文章／Work 的局部 scroll-margin 避免錨點被遮住，也避免重複加上兩份 Header 高度。手機文章錨點額外預留目錄列空間。抽屜及遮罩層級仍高於 Header。

已通過 Next.js 靜態建置（含 TypeScript）及站內連結／圖片／錨點檢查。這次未做瀏覽器互動或截圖測試，實際過渡與 RWD 供預覽確認。原 Selected Work 的另一版註解備份保持可用。
