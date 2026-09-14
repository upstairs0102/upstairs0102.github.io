---
slug: "/vuejs-ncut-course-2019/day2-1"
title: "2-1. Webpack、Vue-Cli"
tags: ["vue.js"]
category: "Vue.js 前端開發課程"
collection: "series"
kind: "article"
order: 21
source: "docs/[講課]勤益科大教育訓練講課 - Vue.js前端開發課程/2-1. Webpack、Vue-Cli.md"
draft: false
publishedAt:
updatedAt:
---



# 2-1. Webpack、Vue-Cli

## Javascript module - export

- 輸出變數

```js
var firstName = 'Michael';

var lastName = 'Jackson'; 

export { firstName, lastName };

export var year = 1958;
```

- 輸出function/class

```js
export function multiply(x, y) {
 return x * y;
};
```



## Javascript module - export default

- 輸出default變數

```js
var firstName = 'Michael';

var lastName = 'Jackson';

var year = 1958;

export default { firstName, lastName, year };
```

- 輸出default function/class

```js
export default function multiply(x, y) {
 return x * y;
};

// 或

export default function (x, y) {
 return x * y;
};
```



## Javascript module - import

- import全部

```js
import * as utils from './utils.js'
```

- 解構的寫法

```js
import {A, B} from './utils.js '
```

- 對應export default的import寫法

```js
import utils from './utils.js'
```

- 副檔名可省略（但我個人還是建議寫完整）

```js
import * as utils from './utils'
```



## Webpack

- 支援js原生的import/export語法
- entry為進入點，要有一個指定的檔案，output為打包輸出的檔案
- （慣例上）src資料夾放原始程式，dist資料夾放打包輸出的檔案

![image-20230106165148348](/images/notebook/legacy/e8bafd239bb01086e332.png)

> 圖片從網路截取



## Webpack建立專案

- 初始化package.json

```
npm init
```

- 安裝webpack

```
npm install --save-dev webpack webpack-cli
```

- 安裝「熱更新」套件

```
npm install --save-dev webpack-dev-server
```



## Webpack config

Webpack 4.x版開始支援免設定檔（開箱即用），但如果需要進階設定的話還是需要手動建立webpack.config.js

基本設定：

```js
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: './dist/index.bundle.js',
    path: path.resolve(__dirname, './'),
  }
}
```



## 輸出html檔

- 安裝套件HtmlWebpackPlugin 

```
npm install --save-dev html-webpack-plugin
```



- Config內加入配置：

```js
const HtmlWebpackPlugin = require('html-webpack-plugin'); 

plugins: [
 new HtmlWebpackPlugin({
  filename: 'index.html',
  template: 'src/index.html',
  chunks: ['main']
 })
]
```



## 打包指令

- 在package.json的"script"內加入

```
"serve": "webpack --mode development && webpack-dev-server --mode development",
"build": "webpack --mode production"
```

- 本機執行指令

```
npm run serve
```

- 打包指令

```
npm run build
```



## Vue-cli環境

- 主要環境： 

vue-cli 3.x (webpack4) 

- webapck安裝 

```
npm install webpack -g 
npm install webpack-cli -g 
```

- vue-cli 

yarn安裝 `yarn global add @vue/cli `

或npm安裝 `npm install -g @vue/cli`

確認版本 `vue -V `



## Vue-cli架設網站

vue-cli建立專案 有兩種方式：

1.執行GUI介面 

`vue ui `

2.指令 

`vue create <project-name> `



## Vue-cli初始化選項設定

1. 第一次操作時會是空的，如果曾經儲存過設定檔，可直接選擇設定檔建立專案

2. 選擇安裝套件

3. vue-router是否是使history模式

4. 選擇CSS pre-processor

5. 選擇Lint

6. Lint檢查時機，建議選擇Lint on save即可

7. 設定檔分開或者合併



![image-20230106165940107](/images/notebook/legacy/a6cf40b55edb4aad0b23.png)



## eslint在vscode中如無作用之解決方式

![image-20230106170815121](/images/notebook/legacy/2d0b992b8db35f2a2b3b.png)



## 資料夾架構 - Component

- `/src/components/`  共用的Vue Component檔案
- `/src/views/`  Vue Component主檔案（建議依vue-router切分）



## 資料夾架構 – 靜態檔案

- 不使用webpack打包之靜態資源皆放在`public/`資料夾下，例：

    - `.js` (通常為直接執行的script)

    - `.css` (通常為全域樣式)
    
    - 圖片檔



- 使用webpack打包之資源皆放在`assets/`資料夾下，例：

     - `.js` (通常為js module)
     - `.css`/`.scss`
     - `.vue`



## 開發模式及生產模式

- 開發模式在本機端建立本機server，可熱更新並能使用debug tool

`yarn serve`

或`npm serve`

- 生產模式透過webpack打包成可執行之靜態檔案，但需放上web server並設置正確路徑（如需在本機測試可用vscode的live server）

`yarn build`

或`npm build`



## 不同模式的環境變數

1. `.env`：所有情況下都會用到的配置。
2. `.env.local`：所有情況下都會用到的配置，與`.env`的區別是會被 .gitignore給忽略。
3. `.env.[mode]`：對應特定環境的配置；比如 `.env.development`是用來配置開發環境的。
4. `.env.[mode].local`：對應特定環境的配置，並且會被 .gitignore給忽略。



## 增加staging模式

Step1 增加stage模式(自訂)

```
"stage": "vue-cli-service build --mode stage" 
```

Step2 建立.env.stage檔

```
NODE_ENV = 'production'
VUE_APP_MODE = 'stage'
outputDir = 'stage'
```

Step3 在vue.config.js設定輸出路徑

```js
module.exports = {
 outputDir: process.env.outputDir
}
```



## 環境變數

-  在src/底下的js中要使用環境變數，環境變數必須以`VUE_APP_`開頭。
- 使用環境變數範例：

```js
let baseUrl: string = ''

switch (**process.env.VUE_APP_MODE**) {
 case 'serve':
  baseUrl = 'http://localhost:57156/api/'
  break
 case 'build':
  baseUrl = 'http://choose.blueplanet.com.tw/api/'
  break
} 

export default baseUrl
```



## 改變網頁logo

```html
<link rel="icon" href="<%= BASE_URL %>favicon2.ico">
```



:::note

註：favicon.ico為預設路徑，會在專案編譯時被vue預設logo給覆蓋過去，所以需更改他的名稱才能替換掉。

:::



## 改變根目錄路徑方式

Step1：在vue.config.js中增加路徑變數publicPath（如不設置的話預設就是根目錄）。

```js
module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/production-sub-path/'
    : '/'
}
```

:::note

設定方式可參考官網文件：[https://cli.vuejs.org/zh/config/#publicpath](https://cli.vuejs.org/zh/config/#publicpath)

:::



Step2：public/index.html中引入public資料夾內的檔案時，檔案路徑前都要加上`<%= BASE_URL %>`

才能取到正確的路徑。例：

```html
<script src="<%= BASE_URL %>lib/general.js"></script>
```

:::note

註：如果router使用history mode，前端檔案沒有放在根目錄的話URL是無法正確匹配的，需要在web server裡做反向代理或者rewrite，設定方式可參考[官網文件](https://router.vuejs.org/zh/guide/essentials/history-mode.html#后端配置例子)

:::



## Vue風格指南

Coding Style建議參考[官方提供的指南](https://cn.vuejs.org/v2/style-guide/index.html)為主。



## 練習

- 將[課程Day1所練習的lightbox](https://codepen.io/cdpqdnvr/pen/BaBjLQy)，改寫成.vue檔的Component

完成範例：[TestLightbox.vue](https://gitlab.com/sdyou/ncut-vue-course/-/blob/master/examples/2-3_slot/src/views/TestLightbox.vue)

:::info

想進一步完整執行範例，可以至 Gitlab將整個教材的 Repo下載下來，Repo網址：https://gitlab.com/sdyou/ncut-vue-course。直接由畫面中的 `Clone`按鈕取得`git clone`資訊。

* 範例的 vue-cli專案路徑：`examples/2-3_slot`

- `TestLightbox.vue`的檔案路徑：`examples/2-3_slot/src/views/TestLightbox.vue`

:::





