---
slug: "/vuejs-ncut-course-2019/day3-1"
title: "3-1. ajax及網頁測試"
tags: ["vue.js"]
category: "Vue.js 前端開發課程"
collection: "series"
kind: "article"
order: 31
source: "docs/[講課]勤益科大教育訓練講課 - Vue.js前端開發課程/3-1. ajax及網頁測試.md"
draft: false
publishedAt:
updatedAt:
---



# 3-1. ajax及網頁測試

## 前端大量處理callback事件時可能遇到的狀況…

callback波動拳！

![image-20230107143539550](/images/notebook/legacy/66a3572ad4ebfcf527ba.png)

> 圖片從網路截取



## 非同步問題

每個物件/函式所需要的資料可能會對應到多支api，也有可能是一支api會提供給多個物件/函式，實際狀況可能遠比想象中複雜的多。

![image-20230107143632143](/images/notebook/legacy/fb2ee443c887e05eeae5.png)

- api2執行完才執行api4
- api1,api2,api3皆執行完才全部執行完成



## Promise

- 建立一個Promise語法

```js
new Promise( /* executor */ function(resolve, reject) { ... } );
```

- callback的兩個參數：

`resolve`：成功（履行承諾）

`reject`：失敗（拒絕承諾）

- 使用Promise的methods：

```js
promise
 .then( /* executor */ function(val) { ... })
 .catch( /* executor */ function(val) { ... })
```

:::info

進一步的學習請參考 [mdn web docs](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Promise)

:::



## ES7 asyc/await

- ES7以上開始支援async/await語法
- 並不是用來取代Promise的，在不同情況下可以選擇使用、或者也可以搭配著使用

![image-20230107151048109](/images/notebook/legacy/4cdb17f74148bacefbd3.png)

> 圖片從網路截取



## Promise及async/await使用時機

- async/await用在同一時間只執行一個非同步任務情況下，減少波動拳的情形。
- [範例](https://jsfiddle.net/upstairs0102/r62otcbm/) @ jsfiddle

1. 1. Promise
   2. Promise.all
   3. async/await + Promise

:::info

進一步的學習請參考 [mdn web docs](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Statements/async_function)

:::



## Axios

Vue官方推薦的ajax套件：[Axios](https://github.com/axios/axios)

Get語法

```js
axios.get('/user?ID=12345')
	.then(function (response) {
  	// handle success
  	console.log(response)
	})
	.catch(function (error) {
  	// handle error
    console.log(error)
	})
	.finally(function () {
  	// always executed
	})
```

Post語法

```js
axios.post('/user', {
    firstName: 'Fred',
    lastName: 'Flintstone'
	})
	.then(function (response) {
  	// handle success
  	console.log(response)
	})
	.catch(function (error) {
  	// handle error
    console.log(error)
	})
	.finally(function () {
  	// always executed
	})
```



## 在ie上相容Promise語法

- 前述的axios雖然相容ie，但是在ie上仍然無法使用Promise語法，如無使用webpack，可使用promise的polyfill：

  [Promise-polyfill](https://github.com/stefanpenner/es6-promise)

只要在axois之前引入polyfill檔案即可

```html
<script src="https://cdn.jsdelivr.net/npm/es6-promise@4/dist/es6-promise.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/es6-promise@4/dist/es6-promise.auto.min.js"></script>
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
```



## Trace code方式

1. `console.log()`

2. 使用`debugger`下斷點

3. Chrome中下斷點

4. [**Vue.js devtools**](https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd) @ chrome線上應用商店



## Vue.js devtools

- 開發Vue常使用的debug工具（非常好用）
- 如無特別設定，預設只能在開發模式中啟用

![image-20230107153841276](/images/notebook/legacy/384ce1e7638c901d2e02.png)



## 測試api工具Postman

常用的api測試工具，單獨測試api不執行前端程式。

![image-20230107153914480](/images/notebook/legacy/3455ce0950c8146d5f53.png)



## 模擬API的前端程式Mock.js

- 常使用的情境：

  1. 後端程式尚未開發完，需要先開發前端程式時先使用Mock.js建假後端。
  2. 需要建假資料做測試，但不想改變原本的程式邏輯。
  3. 建置的假資料能夠依照格式隨機產出，或者模擬後端程式依條件產出。

- 官方文件：[examples](http://mockjs.com/examples.html) @ Mock.js

* 範例：
  1. [產生變數](https://gitlab.com/sdyou/ncut-vue-course/-/blob/master/examples/3-1_mock/mock.js_1.%E7%94%A2%E7%94%9F%E8%AE%8A%E6%95%B8.html) @ gitlab
  2. [攔截get](https://gitlab.com/sdyou/ncut-vue-course/-/blob/master/examples/3-1_mock/mock.js_2.%E6%94%94%E6%88%AAget.html) @ gitlab
  3. [攔截post](https://gitlab.com/sdyou/ncut-vue-course/-/blob/master/examples/3-1_mock/mock.js_3.%E6%94%94%E6%88%AApost.html) @ gitlab
  4. [chrome測試法](https://gitlab.com/sdyou/ncut-vue-course/-/blob/master/examples/3-1_mock/mock.js_4.chrome%E6%B8%AC%E8%A9%A6%E6%B3%95.js) @ gitlab
  5. [定義function](https://gitlab.com/sdyou/ncut-vue-course/-/blob/master/examples/3-1_mock/mock.js_5.%E5%AE%9A%E7%BE%A9function.html) @ gitlab

:::info

* 上述範例的資料夾路徑：https://gitlab.com/sdyou/ncut-vue-course/-/tree/master/examples/3-1_mock

* 想一次取得所有教材，可以至 Gitlab將整個Repo下載下來，網址：https://gitlab.com/sdyou/ncut-vue-course。直接由畫面中的 `Clone`按鈕取得並下載到本機。

:::



