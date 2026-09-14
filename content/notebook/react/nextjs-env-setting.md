---
slug: "/react/nextjs-env-setting"
title: "[Next.js] 環境設定"
tags: ["react","next.js"]
category: "React / Next.js"
collection: "technical"
kind: "article"
order: 999
source: "docs/React/[Next.js] 環境設定.md"
draft: false
publishedAt:
updatedAt:
---


## next.config.js

### 根目錄路徑alias

Nuxt預設好像沒有根目錄的路徑寫法（？），所以要自己在 nuxt.config.js加入以下設定，設定好之後就可以用`@`符號來代表根目錄：

`import Button from '@/components/Button.js'`

```js
const path = require("path");
module.exports = {
  webpack: (config) => {
    config.resolve.alias["@"] = path.resolve(__dirname);
    return config;
  },
}
```

https://blog.csdn.net/weixin_40532650/article/details/113119266



### 環境變數

* **基本設定方式：**

第一種做法是建立 `.env`檔，第二種是在 `next.config.js`裡加入

```js
module.exports = {
  env: {
    customKey: 'my-value',
  },
}
```

* **依環境設定方式：**

做法和 nuxt.js差不多，node.js 預設三種開發環境 `development`, `test`, `production`，分別對應以下三種檔名，建在根目錄下：

`.env.production` 

`.env.development`

`.env.test`

取用環境變數寫法 `process.env.[變數名稱]`

環境變數預設只能在 node.js環境中執行，如果要在瀏覽器端上能夠取得的話，變數名稱必須要有前綴 `NEXT_PUBLIC_`

* 自訂環境名稱

next.js 似乎是無法自訂 node.js預設的開發環境以外的名稱，否則會出現以下錯誤：

https://nextjs.org/docs/messages/non-standard-node-env

目前看起來比較好的解法是在 `package.json`的 `script`指令中代入變數，然後在 `next.config.js`裡依變數的名稱切換所需要的變數

比如 script指令如下：

`APP_ENV=staging npm run build`

然後在 config就可以使用 `process.env.APP_ENV`取到 `staging`，再依此取得 .env檔中的變數
