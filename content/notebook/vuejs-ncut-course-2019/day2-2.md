---
slug: "/vuejs-ncut-course-2019/day2-2"
title: "2-2. 網站樣式管理"
tags: ["vue.js"]
category: "Vue.js 前端開發課程"
collection: "series"
kind: "article"
order: 22
source: "docs/[講課]勤益科大教育訓練講課 - Vue.js前端開發課程/2-2. 網站樣式管理.md"
draft: false
publishedAt:
updatedAt:
---



# 2-2. 網站樣式管理

## 常見的CSS方法論

- 隨著技術的演進及迭代，CSS每隔一段時間就有新的方法論出來，並且每間公司及開發團隊都有各自定義的規則。一般來說並沒有絕對的最佳解決方案，每個方法論各有其優點，依照專案特性及設計師喜好會截取出各種方法中的優點來使用。

- 一些常見的方法論如：

  - OOCSS
  - SMACSS
  - BEM
  - Atomic CSS
  - CSS Modules
  - CSS in JS



## OOCSS

- 兩大原則：

  - 「結構與外觀分離」：結構像是元素的大小，樣式像是顏色等。
  - 「容器與內容分離」：意即盡量將可共用的樣式提取出class，規範出各種能讓開發者使用的樣式結構組合。

- 例：

```html
<button class="btn btn-small btn-primary"></button>
```

- 範例：[Bootstrap](https://getbootstrap.com/docs/4.3/components/alerts/)



## SMACSS

- 全名為Scalable and Modular Architecture for CSS，是一種風格的指引
- 基本結構：

1. Base
2. Layout
3. Module
4. State
5. Theme



## BEM

BEM是一種css class命名的設計模式。以區塊（Block）、元素（Element）和修飾子（Modifier）來命名。

![image-20230106221003795](/images/notebook/legacy/2eec338044bde76da07e.png)

> 圖片來源：[bem vs tranditional css](http://www.simplewebconsulting.com/bem-vs-traditional-css/)



## CSS預處理

- CSS先天的缺點，結構很難有組織、不易維護，所以各種CSS preprocessor技術就出現來解決這些問題，目前常見的如：

  - SCSS
  - SASS
  - LESS

…等

- 雖然CSS preprocessor有許多強大的可程式及模組化的功能，但通常還是會搭配上述的CSS方法論來運用。



## Vue中使用SCSS

- 雖然SCSS功能很多，但剛入門時只需先學會槽狀式的寫法即可。


```css
body {
  padding: 0;
  margin: 0;
}

.wrapper {
  background: white;
  .nav {
    font-size: 12px;
  }
  .content {
    font-size: 14px;
    &:hover {
      background: red;
    }
  }
}
```



- Vue-Cli3建立專案時如已經選擇scss作為CSS預處理，就不需再額外安裝，要使用時在style標籤內加上lang屬性即可

```html
<style lang="scss">
/* */
</style>
```



## CSS資料夾與網站樣式管理

一般業界使用的基本css檔案架構可能會有以下這些：

1. `reset.css`：清除瀏覽器的預設樣式
2. `utilities.css`：簡單且常用的樣式
3. `keyframes.css`：動畫
4. `component.css`：獨立且重覆率高的元件
5. `layout.css`：定義大框架
6. `page.css`：頁面樣式
7. `others.css`：其它套件的css或覆寫樣式



## CSS Reset

- 因各個瀏覽器之間的預設樣式會有所差異，有時會需針對不同瀏覽器去做調整。CSS Reset可以將預設樣式清空，消除不同環境之間的差異。

- 常見的CSS Reset有

  - [Reset CSS](https://meyerweb.com/eric/tools/css/reset/)，此為 Eric Meyer 的版本
  - [HTML5 Reset Stylesheet](http://html5doctor.com/html-5-reset-stylesheet/)，HTML5 Doctor 網站修改自 Eric A. Meyer 的版本。
  - [CSS Reset - YUI Library ](https://yuilibrary.com/yui/docs/cssreset/)，由 Yahoo UI Library v3 所提供的 CSS Reset 版本。



## Vue Scoped CSS

- 使用Scpoed CSS可以讓設定樣式只作用於當前的Component。
- 同一個Component可同時使用全域以及Scoped的CSS

![image-20230106221718832](/images/notebook/legacy/ee7cb5b691a36366b35a.png)



## 深度選擇器

- 使用Scoped CSS時，CSS樣式是無法作用到子組件，如果要在作用到子組件可使用深度選擇器。
- 語法為 `/deep/` 或 `>>>` 或 `::v-deep`

```css
.text-box >>> input {
  width: 150px;
  text-align: center;
}
```

```css
.text-box {
  /deep/ input {
    width: 150px;
  	text-align: center;
  }
}
```



