---
slug: "/vuejs-ncut-course-2019/day1-1"
title: "1-1. Vue.js課程說明與準備"
tags: ["vue.js"]
category: "Vue.js 前端開發課程"
collection: "series"
kind: "article"
order: 11
source: "docs/[講課]勤益科大教育訓練講課 - Vue.js前端開發課程/1-1. Vue.js課程說明與準備.md"
draft: false
publishedAt:
updatedAt:
---



# 1-1. Vue.js課程說明與準備

## 課程大綱

### Day1

| 項目                           | 說明                                                         | 時數  |
| ------------------------------ | ------------------------------------------------------------ | ----- |
| 1. Vue.js課程說明與準備        | 課前準備與大綱介紹 前端技術及Vue.js簡要介紹 課前準備         | 0.5hr |
| 2. Javascript與Vue.js模板語法  | 常用ES6語法、陣列函式 Vue常用模板語法 簡易練習               | 2hr   |
| 3. 事件處理                    | 元素常用事件處理 修飾符 Computed與Watch Autocomplete查詢框練習 | 1.5hr |
| 4. 組件化(Component)設計與傳值 | Vue Component 單向資料流傳值（prop、emit） 雙向資料流傳值（v-model、.sync） 簡單練習 | 2hr   |

### Day2

| 項目                        | 說明                                                         | 時數  |
| --------------------------- | ------------------------------------------------------------ | ----- |
| 1. Webpack、Vue-Cli         | 使用Webpack架設Javascript專案 Javascript module Vue-Cli 常用環境設定及部署 Vue命名慣例 | 1.5hr |
| 2. 網站樣式管理             | Scoped style CSS 基本網站樣式管理 基本SCSS                   | 0.5hr |
| 3. Component Slot           | Slot 練習用slot自製lightbox                                  | 1hr   |
| 4. Element-UI與表單綜合練習 | 安裝Element UI 基本layout及表單UI與練習 進階表單UI製作與練習 表單驗證與練習 表單「新增」與「編輯」的Component傳值 | 3hr   |

### Day3

| 項目                    | 說明                                                         | 時數 |
| ----------------------- | ------------------------------------------------------------ | ---- |
| 1. ajax及網頁測試       | ES6 Promise, async/await API library介紹 測試（Chrome、Postman、Mock.js） | 1hr  |
| 2.前端路由設計          | 路由傳值 html history觀念及history mode vue-router           | 1hr  |
| 3.查詢頁面實作練習      | 查詢列表layout與練習 路由參數與查詢練習 Excel匯出            | 1hr  |
| 4.跨組件傳值技巧與Vuex  | 跨組件傳值設計 Vuex模組化                                    | 1hr  |
| 5. 建立後台網頁實作範例 | 建立登入頁 建立router、利用beforeRouteEnter設計權限驗證 主頁面及選單、麵包屑 | 1hr  |



## jQuery用的好好的，為什麼需要前端框架？

A. 因應系統化開發的需求

B. 單頁應用程式(Single-Page Application)開始流行

C. 提升效能以及更好使用體驗

D. 比較潮

E. 以上皆是



## Front-end Roadmap

前端開發技術看看你認得幾個？

[roadmaps - Frontend Developer](https://roadmap.sh/frontend/) @ roadmap.sh



## 三個框架

- Angular：最完整的框架，所需功能一應具全並有一致性，適合企業用戶及大型系統。
- Vue：最簡易且最通用，適合各種規模及架構的網站，兼具自由度且也有成熟的框架可使用。
- React：最熱門且有最多元的生態圈，自由度高，但系統架構需自行建立，導入不易。



## 關於框架的選擇（從難易度來看）

![image-20230105224918719](/images/notebook/legacy/970117183eb3703e5cfc.png)

>  截取自「企業前端框架趨勢論壇：分析 Angular, Vue, React 的現在與未來」保哥的簡報



## 關於框架的選擇（從潮度來看）

根據risingstars.js.org，Vue.js近連續三年都是前端框架的明星項目

![image-20230105230554923](/images/notebook/legacy/2e2b075af8cb73e7cc40.png)

> 截取自[2018 JavaScript Rising Stars](https://risingstars.js.org/2018/en) @ bestofjs



## 我為什麼選擇Vue.js

- 導入初期還不確定是否要使用完整框架。Vue.js適合只做view的呈現以取代原有的jQuery。
- 難易度考量（Angular需使用TypeScript、React需使用JSX）
- 當時公司尚未有其他有經驗的前端工程師以及相關經驗
- 個人偏好



## 漸進式框架

![image-20230105230712528](/images/notebook/legacy/9e5f774042b71e038234.png)

> 圖片從網路截取



## 導入Vue.js的架構選擇

![image-20230105232551634](/images/notebook/legacy/93d312e4ad74e2cb3f36.png)

> 自製圖片



## 指令式渲染

- 如jQuery，以操作DOM Node為基礎的開發方式。
- 直接透過Selector來操作，開發方式直覺。
- 但程式瑣碎不易看出業務邏輯，規模較大時難以維護，很容易寫出義大利麵式的程式。

```js
function search () {
  var params = {
    id: $('#form-id').val(),
    name: $('#form-name').val()
  }; // 或 new FormData($('form')[0]);
  $.post(url, params, function (response) {
    var html = '';
    response.forEach(function (item) {
      html += '<tr>';
      html += '<td>' + item.id + '</td>';
      html += '<td>' + item.name + '</td>';
      html += '<td>' + item.quantity + '</td>';
      html += '</tr>';
    });
    $('tbody').html(html);
  })
}
```



## 宣告式渲染

- 以操作view-model為基礎的開發方式。
- 關注點放在資料和狀態，而不是直接操作DOM。

![image-20230105232807220](/images/notebook/legacy/a10b37b8f3e396ba616e.png)

> 圖片從網路截取



## 組件系統(Component)

- 組件化開發為目前前端主流的開發方式，並且也是學習前端技術當中的學習重點之一。
- 當程式切割成較小的單位時，會更加容易維護、容易測試，而且更容易重用。
- 開發Component對新手較不容易掌握，不洽當的組件規劃反而會造成混亂。

![image-20230105232847858](/images/notebook/legacy/597e28293f7e1b6204a9.png)

> 圖片從網路截取



## 課前準備

- 安裝Chrome devtools

- 安裝VSCode

  - 安裝Vetur
  - 安裝ESLint（非必要）
  - 安裝Live Server（非必要）

- 安裝 [Node.js](https://nodejs.org/en/)（v8.9以上）

- 安裝yarn

`npm install -g yarn`

（yarn 安裝某些套件時可能會有bug，建議在serve和build時使用，其他安裝皆使用npm install）

- 安裝Vue

`yarn global add vue`

`npm install vue`

- 安裝webpack

`npm install webpack –g`

`npm install webpack-cli –g`

舊版只需安裝webpack即可，但最新的webpack 4需連同webpack-cli都要安裝

- 安裝Vue-cli

`yarn global add @vue/cli`

`npm install -g @vue/cli`

確認版本：`vue -V`



## VSCode - js檔預設縮排2個字元（建議）

- 編輯器下方會顯示目前縮排空格數，點下去可進行設定，但這個方法是每次開啟新檔都要各別設定的。

  ![image-20230105233031231](/images/notebook/legacy/f11fd2600ce3c9f048b9.png)

- 從設定選項設定後即為永久套用的預設值

![image-20230109103305616](/images/notebook/legacy/b73130ee90792d396226.png)

![image-20230109103032032](/images/notebook/legacy/761edf83d2703988efc0.png)



## Emmet語法(1)

輸入 "!" 然後按下Tab鍵，就會幫你輸入好基本的html網頁標籤

![image-20230106093943494](/images/notebook/legacy/58a92c8bf608f38db65f.png)



## Emmet語法(2)

- 輸入 HTML 元素名稱，配合 CSS 選擇器規則
- 全部輸入完之後，按 Tab 鍵，就會自動產生 HTML 碼

```
div#container>p.title+div.body>span.snippet+img[src="blog.jpg"]
```

```html
<!-- 上述文字輸入完並按Tab鍵後就會自動產生如下HTML -->
<div id="container">
  <p class="title"></p>
  <div class="body">
    <span class="snippet"></span>
    <img src="blog.jpg" alt="" />
  </div>
</div>
```

