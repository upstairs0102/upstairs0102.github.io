---
slug: "/react/react-state"
title: "[React] State"
tags: ["react"]
category: "React / Next.js"
collection: "technical"
kind: "article"
order: 999
source: "docs/React/[React] State.md"
draft: false
publishedAt:
updatedAt:
---



## 單向資料流 (Unidirectional Data Flow)

* React Component只有兩種資料型式：**1. Props 2. State**

* **React中資料的流向只能從父層 Component的 State/Props傳入子 Component的 Props**

* 每當 React偵測到 Props或 State有更新時，就會自動重繪整個 Component

React的更新機制：

1. Props/State 改變
2. 重新呼叫 render()
3. 生成新的 virtual DOM
4. 新舊 virtual DOM 進行 diff 演算法比對
5. 把差異更新到真的的 DOM上



## State

* State是 Component內部維護的的資料。

* 不能直接對 State賦值，只能透過 `setState()` 來更新 state。

* 當 state被更新時 render function會被重新呼叫。

:::note

在了解 hooks之前，用 Class Component比較好解釋 State，所以暫時還是先用 Class Component的程式來當範例。

:::

```jsx
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }
  componentDidMount() {
    // 啟動一個 timer 每秒鐘會自動更新時間
    this.timerID = setInterval(() => this.tick(),1000);
  }
  // 當元件要從 DOM 中被移除 (remove) 前，要手動清理監聽事件
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  tick() {
    // 用 setState() 來更新 State ，React 會自動呼叫 render() 重繪畫面
    this.setState({ date: new Date() });
  }
  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}
```



### 延伸閱讀

[React State](https://www.fooish.com/reactjs/state.html)

[Immutable 對於 React 重要性](https://ianccy.com/immutable/)



## Stateful / Stateless Component

### Stateless Component

（又稱 Pure Component） 是一個 pure function，props傳入什麼他就 render什麼。

```js
const ImageList = props => {
  const images = props.images.map({ description, id, url } => {
    return <img alt={description} key={id} src={urls.regular} />
  })
  return <div>{images}</div>
}
```

### Stateful Component

內部有維護自身狀態 (State)的改變，通常會伴隨著事件處理或生命週期下觸發狀態的更新。早期只能用 Class Component來寫，現在可以使用 Function Component + hooks來寫。



## Controlled / Uncontrolled Element

### Controlled Element

value存放在 state

```js
state = { term: '' }
render () {
  return (
    <input
      type="text"
      value={this.state.term}
      onChange={e => this.setState({ term: e.target.value })}
    />
  )
}

```

### Uncontrolled Element

value存放在 DOM裡面，必須要從 DOM取出來後才能知道 value是什麼（古早時期 jQuery的慣用寫法）

**\* 我們應該將所有資訊存放在 Component內而非 DOM裡面**

