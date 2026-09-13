---
slug: "/vuejs-ncut-course-2019/day3-2"
title: "3-2. 前端路由設計"
tags: ["vue.js"]
category: "Vue.js 前端開發課程"
collection: "series"
kind: "article"
order: 32
source: "docs/[講課]勤益科大教育訓練講課 - Vue.js前端開發課程/3-2. 前端路由設計.md"
draft: false
publishedAt:
updatedAt:
---



# 3-2. 前端路由設計

## Vue-Router基本設置

基本的Component載入方式，會在初次載入網站的時候將所有的檔案一次載到客戶端

```js
import VueRouter from 'vue-router'
import Products from './Products.vue'
import About from './About.vue’

export default {
  router: new VueRouter({
    routes: [
      { path: '/about', component: About },
      { path: '/products', component: Products }
    ]
  })
}
```



## 動態載入Component (1)

使用動態載入([dynamic imports](https://webpack.js.org/guides/code-splitting/#dynamic-imports))Component的語法，在router匹配到網址時才會將Component下載到前端。

註：Vue-cli預設範例即是使用動態載入的寫法。

```js
export default {
  router: new VueRouter({
    routes: [
      {
        path: '/about',
        component: () => import(/* webpackChunkName: " About" */ './About.vue'),
      },
      {
        path: '/products',
        component: () => import(/* webpackChunkName: " Products" */ './Products.vue'),
      }
    ]
  })
}
```



##  動態載入Component (2)

- 單頁式網站(SPA)天生的缺點是初次載入網站時速度會慢一些，因為需要載入很多非目前頁面所需的資料。透過動態載入的方式，可以解除用不到的資源的依賴關係，優化前端效能。

:::info

效能優化是較為進階的技術，相關推薦文章：

[Vue.js App Performance Optimization: part 2— Lazy loading routes and vendor bundle anti-pattern.](https://itnext.io/vue-js-app-performance-optimization-part-2-lazy-loading-routes-and-vendor-bundle-anti-pattern-4a62236e09f9)

:::



## 命名路由

可以用屬性name來命名路由，這樣就可以直接使用名稱來進行路由的匹配，而不需要使用完整的路徑。

```js
const router = new VueRouter({
  routes: [
    {
      path: '/user/:userId',
      name: 'user',
      component: User
    }
  ]
})
```



## Router的 History mode

- 無使用history mode之網址

```
http://domain-name/index.html#/login
```

- history mode之網址

```
http://domain-name/login
```

- History模式預設是關閉的，如要使用必須增加 mode: 'history'

:::note

註：如果router使用history mode，前端檔案沒有放在根目錄的話URL是無法正確匹配的，需要在web server裡做反向代理或者rewrite，設定方式可參考官網文件

[https://router.vuejs.org/zh/guide/essentials/history-mode.html#%E5%90%8E%E7%AB%AF%E9%85%8D%E7%BD%AE%E4%BE%8B%E5%AD%90](https://router.vuejs.org/zh/guide/essentials/history-mode.html#后端配置例子)

:::



## 嵌套式路由(Nested Routes)

實際在開發時Component的結構會是槽狀式的，路由也可以按照槽狀的結構去對映各層的Component。

```
/user/foo/profile                   /user/foo/posts
+------------------+                +------------------+
| User             |                | User             |
| +--------------+ |                | +--------------+ |
| | Profile      | |  +-----------> | | Posts        | |
| |              | |                | |              | |
| +--------------+ |                | +--------------+ |
+------------------+                +------------------+
```

```html
<div id="app">
  <router-view></router-view>
</div>
```



## router-link

- 使用Vue內建的`<router-link>`元素去匹配路由；屬性`to`放超連結的路徑。

```html
<router-link to="/home">
```

- `to`也可以放其他的路由參數

```html
<router-link
  :to="{ name: 'user', params: { userId = '123' } }">
  User
 </router-link>
```



## `$router`編程式路由(**Programmatic Navigation**)

- 在Vue實例裡，可以使用`$router`來操作路由實例
- `router.push`：在瀏覽器History（註*）陣列中添加一筆資料。

```js
this.$router.push({ name: 'user', params: { userId: '123' }})
```

- `router.replace`：取代目前History中的紀錄。
- `router.go(n)`：等同於window.history.go(n)，在history紀錄中前進或後退多少步。

:::info

註：前端路由的機制是將網頁狀態透過 HTML5提供的 [History API](https://developer.mozilla.org/en-US/docs/Web/API/History_API)將狀態存在瀏覽器當中，Vue-Router將其封裝後提供相似的API結構：

* `router.push`對應`history.pushState`
* `router.replace`對應`history.replaceState`
* `router.go`對應`history.go`

:::



## `<router-link>`和「編程式」的差異

- 編程式可以在程式當中操作路由，可以有更多的變化（比如說增加判斷式依狀態修改路由參數），但是只有在`<router-link>`實作的連結上，能使用滑鼠右鍵叫出功能選單。

![image-20230107180450790](/images/notebook/legacy/7ee65119fd5f249e0f9a.png)



## `params`及`query`參數傳遞

router參數傳遞的方式主要有兩種：

- `params`：`/user/123` 這裡的`123`為參數的話叫做`params`。在設定`routes`的時候要在`path`裡面設定參數名稱，要在名稱之前加上冒號，如下範例的`:id`。

  ```js
  routes: [
    { path: '/user/:id', component: User }
  ]
  ```

- `query`：`/user?id=123` 這裡的`id`叫做`query`。



## 透過`$route`取得`params`及`query`參數

- 在Vue實例當中要取得目前的`params`或`query`可透過「全域物件`$route`」來取得。

- 例 `/user/123`

  ```js
  this.$route.params.id == 123
  ```

- 例 `/user/id?=123`

  ```js
  this.$route.query.id == 123
  ```


:::caution

全域物件 `$router`和 `$route`是兩個獨立且不同的物件、功能也不同，剛開始學 Vue的時候非常容易混淆，需注意！

:::



## 導航守衛(Navigation Guards)

- Router裡可以註冊當router被觸發的時候，在訪問開啟對象的之前或之後要執行的函式。常用在進入/離開頁面的跳轉規則（比如說權限控制）。
- 更多資訊可參考[官方文件](https://router.vuejs.org/zh/guide/advanced/navigation-guards.html)

```js
const router = new VueRouter({ ... })

router.beforeEach((to, from, next) => {
  // ...
})                        
```

