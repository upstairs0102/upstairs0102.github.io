---
slug: "/react/react-optimization"
title: "[React] 效能優化"
tags: ["react"]
category: "React / Next.js"
collection: "technical"
kind: "article"
order: 999
source: "docs/React/[React] 效能優化.md"
draft: false
publishedAt:
updatedAt:
---


## render優化

以我的理解，React 和 Vue有一個很大的差異在於，Vue是採取一種類似 Observer Pattern的設計模式，Vue的底層有一套監聽 `state`並響應到模板的機制，框架本身已經做好渲染的優化，比較節點差異的演算法計算後只會重新渲染有變更的節點。但是 React就不太一樣了，JSX模板是寫在 `render function`當中，每當 Component內任一的 `prop`或 `state`有改變的時候就會重新調用 `render function`，有較高的機會重新渲染不需重新渲染的節點；也就是說React需求花較大的功夫手動去做渲染的優化。

React需要特別注意減少 render次數和計算量

範例（每當state變更，render就一直被執行）

https://codepen.io/cdpqdnvr/pen/ZEeawKx?editors=1010

Class Component 和 Function Component實作上大致差異

* Class Component 使用生命週期 `shouldComponentUpdate`判斷是否re-render、以及會做 `state`, `props ` 的`shallow compare`（淺層比較）避免rerender的`PureComponent`

* Function Component 使用 `React.memo`（`React.memo`是一個HOC）避免rerender，可以注入函式做 `state`, `props`的 `shallow compare`（淺層比較）


### 延伸閱讀

[React.memo](https://zh-hant.reactjs.org/docs/react-api.html#reactmemo) @ React

*[Vue轉React兩個月來總結的效能優化方法](https://www.mdeditor.tw/pl/pTzW/zh-tw)：作者從 Vue轉到 React開發的觀點來介紹

[Vue和React的檢視更新機制對比](https://iter01.com/74213.html)：介紹兩個框架底層的 DOM更新機制

[React , Vue render 效能優化篇](https://milkmidi.medium.com/react-vue-render-%E6%95%88%E8%83%BD%E5%84%AA%E5%8C%96%E7%AF%87-31d9f78cf692)：簡單介紹 React.memo的效能優化方式

[vue 和 react发展史、设计思想及维度](https://bbs.huaweicloud.com/blogs/257646)

