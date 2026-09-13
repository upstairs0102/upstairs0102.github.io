---
slug: "/react/nextjs-css"
title: "[Next.js] CSS"
tags: ["react","next.js"]
category: "React / Next.js"
collection: "technical"
kind: "article"
order: 999
source: "docs/React/[Next.js] CSS.md"
draft: false
publishedAt:
updatedAt:
---

## CSS-IN-JS

看起來 css-in-js似乎是 React的主流寫法，最多人使用 styled-component

也有人反對使用 css-in-js的寫法：

[Stop using CSS in JavaScript for web development](https://gajus.medium.com/stop-using-css-in-javascript-for-web-development-fa32fb873dcc)

作者的理由是，styled-component 的優點被過度神話，他被強調的優點其實 css就已經做的很好（甚至更好），文章裡有很大的篇幅列點一一舉反例證明 css本身就可以達到同樣的目的。作者認為 css-in-js唯一的優勢是「**跨平台**」的支援更好。



## import CSS

載入CSS檔的規則：

- 全域 css檔必須在 pages/_app.js 檔案中引入（其它地方引入會報錯）
- Component level檔案要以 .module.(css|scss|sass) 命名，可以在任意模組中引入
- Component level檔案已經內建了 scope 功能，每個class將分配一個唯一id，不用擔心命名衝突

> 參考官方文件：[Built-In CSS Support](https://nextjs.org/docs/basic-features/built-in-css-support)

因為使用上還是會有些限制，尤其是在使用 SCSS及 Mixins會有些困難，網路上介紹的套件：

[@zeit/next-sass](https://www.mdeditor.tw/jump/aHR0cHM6Ly93d3cubnBtanMuY29tL3BhY2thZ2UvQHplaXQvbmV4dC1zYXNz)：解決全域性和模組化問題

[sass-resources-loader](https://www.mdeditor.tw/jump/aHR0cHM6Ly93d3cubnBtanMuY29tL3BhY2thZ2Uvc2Fzcy1yZXNvdXJjZXMtbG9hZGVy)：解決全域性變數和 mixin 問題

介紹網頁（再找時間研究）

### 延伸閱讀

[[Next.js] 簡化 CSS 開發](https://www.mdeditor.tw/pl/p1n1/zh-tw)



### Component-level scss

```js
import styles from './<MyComponent>.module.scss>';
```

使用方式

```jsx
<TheComponent className={styles.someclassselector} />
```

經過我的測試這樣是吃不到樣式的…

```jsx
import './<MyComponent>.module.scss>';

<TheComponent className="someclassselector" />
```

巢狀(nested) scss的使用方式

```js
// scss
.classname{
  .childname{
  }
}

// jsx
<Grid className={css.classname}>
  <Typography className={css.childname}>
  </Typography>
</Grid>
```


