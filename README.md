# ADAM YOU — Static Photo Homepage Prototype

此分支保存靜態照片版本的個人網站首頁 prototype。

原始預覽：https://adam-you-portfolio-prototype.upstairs0102.chatgpt.site/

## 本機預覽

不需要安裝 npm 套件或執行 build。這個版本使用原生 HTML、CSS、JavaScript。

```sh
git clone --branch prototype/static-photo-homepage --single-branch https://github.com/upstairs0102/upstairs0102.github.io.git
cd upstairs0102.github.io
python3 -m http.server 8080 --directory dist
```

瀏覽 http://localhost:8080 。也可以使用編輯器的靜態伺服器，以 `dist/` 為網站根目錄。

## 檔案

- `dist/index.html`：首頁 hero、Work、Notebook、Contact 與 footer。
- `dist/style.css`：桌機與手機 RWD 版面。
- `dist/app.js`：標題／人物滾動視差、減少動態效果偏好與年份更新。
- `dist/assets/adam-camera.png`：hero 使用的靜態人物照片。

`dist/` 中的檔案就是可編輯的原始碼，沒有另外的編譯步驟。

## 保存範圍

保留已發布靜態版的四個網站檔案，內容未修改。下方作品與文章是示意內容；人物使用一張照片。本分支未包含照片序列動畫實驗。

來源版本：1；來源 commit：`bce85d06ec625df49c8b99928071fdafbe3d9992`。

此分支供保存與後續開發使用；未設定 GitHub Pages 部署流程，未合併至 `main`。原環境專用的部署設定未帶入。
