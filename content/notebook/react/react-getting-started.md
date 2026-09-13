---
slug: "/react/react-getting-started"
title: "[React] Getting Started"
tags: ["react"]
category: "React / Next.js"
collection: "technical"
kind: "article"
order: 999
source: "docs/React/[React] Getting Started.md"
draft: false
publishedAt:
updatedAt:
---



## 相關連結

閱讀官網文件也蠻重要的：[React頂層API](https://zh-hant.reactjs.org/docs/react-api.html)



## Hello World

```html
<div id="root">
</div>
```

```js
ReactDOM.render(
  <h1>Hello, world!</h1>,
  document.getElementById('root')
)
```



## JSX

JSX 是一個**直接寫在** **javascript**中的擴充語法，會透過 Babel編譯成 React 用來建立 Element的函式。

React 的 Element並不是真的 DOM，他是一種「virtual DOM」。所有的真實DOM的改變都是經由改變**virtual DOM**之後，經由**diff**演算法批次改變 DOM的內容。

```jsx
const content = (
  <TalkList>
    { talks.map(talk => <Talk talk={talk} />)}
  </TalkList>
)
```

大部份的 attribute和原來的 html都長得一樣，只是轉為小駝峰的格式而已。只有極少部份會因為 javascript保留字的考量會稍微不太一樣，比如：

class => className

for => htmlFor

```jsx
const h1 = <h1 className="title">Hello Adam</h1>
const input = <label htmlFor="test">Test</label>
```



## Class Component vs Function Component

傳統上 Function Component 因為必須是 pure function – 透過 function傳入進去的 props，回傳 virtual DOM回去；既無法暫停 render也不能自動 render。

所以早期大多採用 Class Component以保存 Component的內部狀態。

在React v16.8 (2019) 推出 hooks功能之後官方已不再推薦採用 Class Component了。

|            | **Class**  **Component** | **Function**  **Componnet** | **Function  Component + Hooks** |
| ---------- | ------------------------ | --------------------------- | ------------------------------- |
| Lifecycle  | O                        | X                           | X                               |
| State      | O                        | X                           | O                               |
| 非同步操作 | O                        | X                           | O                               |



## Lifecycle

Function Component + Hooks就沒有 Lifecycle的問題了，而且這也是目前官方推薦的寫法。除非有要維護 legacy code（Class Component）的需求，不然就不需要學習 Lifecycle了。



### 延伸閱讀

[React 16.3 Lifecycle Methods](https://medium.com/@mksglu/react-16-3-lifecycle-methods-7ac4e2f2024a)



