---
slug: "/js-build-tools/publish-js-library-to-npm"
title: "[主題] 第一次發布npm前端套件就上手"
tags: ["npm"]
category: "Modules & Build Tools"
collection: "technical"
kind: "article"
order: 999
source: "docs/JS Modules & Build Tools/[主題] 第一次發布npm前端套件就上手.md"
draft: false
publishedAt: "2022-12-15"
updatedAt:
---

## 一、前情提要

本篇文章以我自己開發的一個 library - [vue-component-sandbox](https://github.com/upstairs0102/vue-component-sandbox)作為範例，說明發佈 javascript程式到 npm上面所需的相關步驟及設定。

以這個範例來說，vue-component-sandbox的主程式是一個 Vue.js 的 Component，我希望除了將主程式發布到 npm上以外，還希望能建立一個簡單的展示頁面，所以我選擇用vue-cli建立專案，把主程式和展示網頁放在相同專案裡。整個專案我推上Github並使用Github Pages布署靜態的展示頁面，並將Component檔案所在的資料夾發布至npm。

依照上述需求，本文重點有二：

1. 發布至npm的相關設定及方式
2. 推上Github及布署範例網頁（Github Pages）

<!--truncate-->

註：本文的範例雖然是出自 vue-cli建置的專案，但要發布上 npm主要要做的是 package.json的設定，只有在布署範例網頁時需要做的路由及相關設定跟 Vue.js的框架有關外，其餘內容跟 Vue.js都沒什麼直接關係。所以基本上無論你使用何種前端框架、或沒有使用框架（而且概念是相同的），都不會影響到本文的閱讀。



## 二、檔案及資料夾結構

資料夾結構及檔案命名沒有標準的寫法，建議可參考 github上跟自己所要開發最相近的專案是怎麼設計。

以本文中雖然並不是重點但會跟後續內容息息相關，將會以 vue-component-sandbox作為範例，將本文相關的檔案及資料夾結構列出來，方便往後的章節可以對照著看：

```
/
├──demo
|   ├──css
|   ├──js
|   └──index.html
├──lib
|   ├──main.js
|   └──styles.css
├──src
|   ├──components
|   ├──router
|   ...
|   └──main.html
├──package.json
├──README.md
...
```

其中幾個較重要的部份列出來說明：

* `/demo` 展示頁面的資料夾。換句話說就是用 webpack打包出來的資料夾，vue-cli預設為 `dist`這裡只是修改了名稱而已。
* `/lib` 要發布至 npm的主檔的資料夾位置。
* `/src` 展示頁面原始檔案的資料夾（vue-cli 預設的檔案位置）。
* `package.json` node package 設定檔。



## 三、發布至npm的相關設定及方式

### 必填的 package.json欄位設定

首先 webpack主要需要設定的是 package.json檔必填欄位：

- `name`：node package 的名稱（發布至 npm上所使用的名稱）。
- `version`：版本號。每次發布都要大於過去的版本，否則就會發布失敗。
- `main`：node package 的主檔。

其它輔助資訊欄位（非必填）有 `license`、`author`、`homepage`、`repository`等，相關的詳細說明可參考官方文件 [npm docs](https://docs.npmjs.com/creating-a-package-json-file)。

以我 vue-component-sandbox作為範例如下。

```json
// package.json
{
  "name": "vue-component-sandbox",
  "version": "0.3.0",
  "description": "A vue component sandbox that is quick and easy to use.",
  "author": "Adam You <upstairs0102@gmail.com>",
  "license": "MIT",
  "keywords": [
    "vue",
    "component",
    "sandbox",
    "vue-component"
  ],
  "main": "lib/main.js",
  "files": [
    "lib/*",
    "src/components/ComponentSandbox/*"
  ]
}
```



### 設定發布至npm的檔案

package.json中跟打包檔案相關的欄位有`main`和`files`。說明如下：

* `main`：node package 的主檔。

* `files`：欄位是設定 node package的檔案範圍，同時也是會發布至 npm的檔案；如果此欄位沒有設定預設會發布所有的檔案。

以上述的範例來作說明：

```js
"main": "lib/main.js",
"files": [
  "lib/*",
  "src/components/ComponentSandbox/*"
]
```

以此例來說，假設某人已將此套件透過 npm安裝 （指令`npm install vue-component-sandbox --save`） 至他的專案當中。在他的`node_modules`資料夾中可以找到 `vue-component-sandbox`資料夾，該資料夾內除了會有 package.json等基本的檔案外還會有 `lib`, `src`資料夾及檔案。



### 在main主檔export js module

由於我不需要將專案中所有的檔案發布到 npm上（比如展示頁面），所以我只將需要的資料夾寫入前一章節所說的 `files`欄位中，然後在主檔（`main`欄位中設定的）中把需要的檔案給 `export`出來。

此例的主檔（`main`欄位的設定）是`lib/main.js`，此檔案內容是這樣寫的：

```js
// lib/main.js
export { default } from '../src/components/ComponentSandbox/ComponentSandbox.vue'
```

由於此例中 export的寫法是 `export default`，假設某人使用 npm安裝了此套件（安裝至 node_modules），在他的程式當中要 import此套件的語法為：

```js
import ComponentSandbox from 'vue-component-sandbox'
```

其中 `vue-component-sandbox`對應的是 `name`欄位所設定的名稱，import進來的程式也就是主檔所 export 的 `default`。

安裝此套件的人如果需要 import除了主檔所提供的以外的程式，也可以使用相對路徑的方式，比如：

```js
import 'vue-component-sandbox/lib/styles.css'
```

以此例的寫法，`vue-component-sandbox`就不是代表主檔，而是套件專案根目錄的路徑（也等同於被安裝的專案中`node_modules`為起始的相對路徑）。



### dependency 和 devDependency的差異

每個前端的開發者應該都會知道 `dependency`是生產環境的依賴、`devDependency`是開發環境的依賴，但真正知道差異的人可能就沒那麼多了。因為我們通常都會按照文件上所提供的指令來安裝，而且無論放哪邊通常也不會出錯，所以大多數人也不太清楚差異。

但是要發布到 npm上就會有一些要注意的事。

最直觀的差異就在於其他專案依賴了你的 node package之後（透過 npm安裝），你的 package.json 中 `dependency`的依賴會被「鏈式」的安裝到 node_modules資料夾中。

了解了這個差異，我們就可以進一步理解所謂**「 `dependency`是生產環境的依賴」更具體的意思是說，當這個 node package被布署到 npm之後（生產環境）的依賴，而「`devDependency`是開發環境的依賴」指的是未發布到 npm時的依賴（即使這個 node專案被打包並布署成為一個 web service）**。

…講起來有些饒口，這裡用 vue-component-sandbox 作為例子。其 package.json 中的依賴的設定：

```js
"dependencies": {},
"devDependencies": {
  "@vue/cli-plugin-babel": "~4.5.0",
  "@vue/cli-plugin-router": "~4.5.0",
  "@vue/cli-service": "~4.5.0",
  "@vue/compiler-sfc": "^3.0.0",
  "core-js": "^3.6.5",
  "github-fork-ribbon-css": "^0.2.3",
  "vue": "^3.0.0",
  "vue-json-pretty": "^2.0.0-rc.3",
  "vue-router": "^4.0.0-0"
}
```

vue-component-sandbox是一個通時支援 Vue v2.x 及 v3.x版本的套件，開發者可以依照他本身的開發環境來安裝對應的依賴。README文件中的安裝指引有這樣的說明：

```
支援Vue v2.x及v3.x。依賴vue-json-pretty套件，並且必須安裝對應版本：

Vue v2.x => vue-json-pretty v1.7.1 以上，指令 npm install vue-json-pretty@1.7.1 --save
Vue v3.x，=> vue-json-pretty v2.0.0-rc3 以上，指令 npm install vue-json-pretty@2.0.0-rc.3 --save
```

再回頭來看上面的 package.json中我們可以看到所有的依賴都被安裝到 `devDependencies`了，所以開發者透過 npm安裝了這個 node package (vue-component-sandbox)之後，必須自己手動安裝他的 Vue版本所對應的 `vue-json-pretty`版本。

反之，如果 package.json將所有的依賴都放到了 `dependencies`而不是本例中的 `devDependencies`，開發者安裝這個 node package (vue-component-sandbox)後就不需要再自己手動安裝 `vue-json-pretty`，但就沒有辦法讓開發者選擇自己所需要的版本來安裝了。



### Publish!

完成上述所有事情之後，剩下的工作就非常簡單了：

1.至 npm官網上註冊 npm帳號

2.在專案中下指令 `npm publish`即成功發布！（鍵入指令後 console會指引你相關事項，比如此台電腦未登入npm帳號的話需要先輸入指令登入帳號）



## 四、推上Github及布署範例網頁

### README.md

github頁面上預設會把 repo中根目錄中的 README.md檔案內容呈現出來，因此學習 [markdown](https://markdown.tw/)文件撰寫是非常必要的（也很簡單），務必將 README.md文件盡可能的撰寫完整。

以 vue-component-sandbox為例，由以下章節內容組成：

* Features: 用簡單的幾句話清楚的介紹此 repo的特色及用途。
* Links: 相關連結，包含 npm頁面及展示頁連結。
* Environment: 安裝此套件的環境需求。
* Install: 安裝方式。
* Usage: 使用方式說明；建議可以的話要提供一個 Quick Start（最簡易讓程式可以執行的方式），另外API文件也是必要的。

同樣的，文件沒有標準的寫法，建議可參考 github上跟自己所要開發最相近的專案是怎麼撰寫的。



### 製作範例網頁

製作範例頁的好處，除了開發者在瀏覽網頁時就可以快速看到成果，並且在 pull程式碼到本機後就有了可以執行的範例程式。

我們要把範例頁透過 Github Pages來布署，因此範例頁必須是 static的網頁，每一個頁面必須要有一個實體的 html檔案。如果我們想透過前端路由開發 SPA網頁，一個可行的方式是透過 URL上 `#`符號來跟前端路由溝通。這種模式在 Vue框架中稱為 **Hash Mode**，在其它的前端框架比如 React, Angular也都有相同的路由設定。



### Github Pages啟用設定

透過 Github Pages架設的網址依據 repo的名稱會有所不同，規則有兩種：

* repo名稱為 `{account-name}.github.io`：網址為 `https://{account-name}.github.io`
* 其它任何的 repo名稱：網址為 `https://{account-name}.github.io/{repo-name}`

由於本文主題是要發布到 npm上的套件，我們不太可能把一個 open source libaray的名稱命名為 `upstairs0102.github.io`，這樣的話也太奇怪了！因此在這裡我們只會使用後者的規則。

Github Pages的設定預設是關閉的，我們必須在設定頁將之開啟，如下：

![image-20221214211444854](/images/notebook/legacy/ad8119452d4d9d67d990.png)

你可以選擇設定特定 Branch，不過以本文範例來說並不是以 Branch區分檔案用途，而是直接將範例頁的檔案以及 source code放在一起並用資料夾區分，因為直接用預設的 `main` branch即可。



### Vue相關設定

本文範例使用 Vue框架（使用 vue-cli建置的），不過如果你使用其它框架、或無使用框架其實原理和設定都是差不多的，不會影響到本章節的閱讀。

有以下幾個相關設定：

1. 前端路由設定
2. 打包資料夾路徑

前端路由的部份，在前面我們有提過本範例為了要做 SPA型式的展示頁，前端路由要設置為 Hash Mode。以 Vue框架來說我們只要到 Vue-Router 中將 `history mode`屬性設為 `false`即可。

再來要注意的是 Vue-Cli（其它框架亦同）預設會把 domain name當作根路徑，所以我們也要做一些相應的調整；具體的來說我們要把前端路由的基本 URL設定為 `/{repo-name}/{file-path}`。這裡我們直接用範例來說明會更清楚，`vue.config.js`會有以下的設定：

```js
module.exports = {
  publicPath: '/vue-component-sandbox/demo/',
  outputDir: 'demo' // 本例中我們把打包過的檔案放到 demo資料夾中，如無設定 vue-cli預設會放到 dist資料夾
}
```

關於 publicPath詳細說明可參考[官方文件](https://cli.vuejs.org/zh/config/#publicpath)。



## 五、結語

本文以 vue-component-sandbox做為範例來做說明，除了發布 npm、還包含了 Github Pages布署範例網頁的說明，應該是包含了大多數發布 open source的 javascript library所需要的事項，大家可以依照自己的需求選讀自己有幫助的章節。




