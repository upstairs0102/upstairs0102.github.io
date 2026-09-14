---
slug: "/react/react-hooks"
title: "[React] Hooks"
tags: ["react"]
category: "React / Next.js"
collection: "technical"
kind: "article"
order: 999
source: "docs/React/[React] Hooks.md"
draft: false
publishedAt:
updatedAt:
---



## Hooks

**「具有狀態(State)」的「可邏輯重用」的函式寫法。**

React v16.8 推出了 hooks功能之後（2019/2/6發布），Class Component已不再被官方推薦使用。Function Component 搭配 hooks使用也可以有 State。



### 延伸閱讀

[The Ugly Side of Hooks（譯）](https://zhuanlan.zhihu.com/p/260371711) 反對 hooks的文章

[一篇看懂 React Hook](https://zhuanlan.zhihu.com/p/50597236)

[React(v16.8)Hooks簡析](https://codertw.com/%E7%A8%8B%E5%BC%8F%E8%AA%9E%E8%A8%80/747534/)



### useState

```js
const { useState } = React

// 寫在 render function內
const [input, setValue] = useState("")
```

範例

https://codepen.io/cdpqdnvr/pen/ZEeawKx?editors=1010



### useEffect

和 Vue的 watch有點像，但在 React裡面被認為是一種 state變更的附作用，可見背後思考邏輯的不同

官方範例

https://zh-hant.reactjs.org/docs/hooks-effect.html#example-using-hooks-1

```js
import React, { useState, useEffect } from 'react';
function FriendStatus(props) {
  const [isOnline, setIsOnline] = useState(null);
  useEffect(() => {
    function handleStatusChange(status) {
      setIsOnline(status.isOnline);
    }
    ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);
    // 指定如何在這個 effect 之後執行清除：
    return function cleanup() {
      ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
    };
  });
  if (isOnline === null) {
    return 'Loading...';
  }
  return isOnline ? 'Online' : 'Offline';
}
```



![image-20210501154533400](/images/notebook/legacy/65d8e61737b7e3e148a8.png)

> 圖片截取至 [Modern React with Redux](https://www.udemy.com/course/react-redux/) @ Udemy/Stephen Grider



### useRef

### 延伸閱讀

[[React Hook 筆記] useRef](https://medium.com/hannah-lin/react-hook-%E7%AD%86%E8%A8%98-useref-c628cbf0d7fb)



### useContext

`useContext` 使用的情境是在需要跨層傳值的情況，就不需要透過 props一層一層傳下去 

![img](/images/notebook/legacy/b483e5e700cdaa04b1fd.jpeg)

> 圖片截取至 [[React Hook 筆記] useContext](https://medium.com/hannah-lin/react-hook-%E7%AD%86%E8%A8%98-usecontext-4bc289976847) @ Medium/Hannah Lin

```js
// App.js
export const ThemeContext = React.createContext() 
const App = () => {
    const [dark, setDark] = useState(true);
    return (
        <>
            <ThemeContext.Provider value={dark}>
              <FunctionComponent />
              <ClassComponent />
            </ThemeContext.Provider>
        </>
    );
}

// FunctionComponent.js
const FunctionComponent = () => {
    return (
        <ButtonGroupComponent />
    );
}

// ButtonGroupComponent.js
import { ThemeContext } from './App.js';
const ButtonGroupComponent = () => {
  // get dark value from ThemeContext
  const darkTheme = useContext(ThemeContext)
  const themeStyle = {
    backgroundColor: darkTheme ? '#2c3e50': '#f1c40f',
    color: darkTheme ? '#ecf0f1' : '#2c3e50'
  }
  return (
    <button style={themeStyle}>useContext</button>
  );
} 
```

> 範例截取至 [[React Hook 筆記] useContext](https://medium.com/hannah-lin/react-hook-%E7%AD%86%E8%A8%98-usecontext-4bc289976847) @ Medium/Hannah Lin



### 延伸閱讀

[[React Hook 筆記] useContext](https://medium.com/hannah-lin/react-hook-%E7%AD%86%E8%A8%98-usecontext-4bc289976847) @ Medium/Hannah Lin



### useContext & useReducer 實作 Redux 的功能（取代Redux？）

（我研究到後來覺得有點複雜，乾脆就直接使用 Redux了）

Redux 作者 Dan Abramov 的推薦文章：[How to fetch data with React Hooks?](https://www.robinwieruch.de/react-hooks-fetch-data)

其他：

[【译】不要再问我React Hooks能否取代Redux了](https://juejin.cn/post/6844903934801215501)

[如何使用 React Hooks 搭配 Context API 取代 Redux 快速範例入門](https://andyyou.github.io/2019/08/11/use-react-hooks-and-context-replace-redux/)

[React | 在 Hooks 中以 useContext 與 useReducer 實現 Redux](https://medium.com/enjoy-life-enjoy-coding/react-%E5%9C%A8-hooks-%E4%B8%AD%E4%BB%A5-usecontext-%E8%88%87-usereducer-%E5%AF%A6%E7%8F%BE-redux-3a8aa403d9e4)

[npm uninstall redux](https://medium.com/@nightspirit622/npm-uninstall-redux-c00d86683b0d)

