---
slug: "/vuejs-ncut-course-2019/day1-3"
title: "1-3. 事件處理"
tags: ["vue.js"]
category: "Vue.js 前端開發課程"
collection: "series"
kind: "article"
order: 13
source: "docs/[講課]勤益科大教育訓練講課 - Vue.js前端開發課程/1-3. 事件處理.md"
draft: false
publishedAt:
updatedAt:
---



# 1-3. 事件處理

## 常用滑鼠事件

`v-on:click` 等同mouseup，但順序mouseup優先於click

`v-on:mousedown` 滑鼠按下

`v-on:mouseup` 滑鼠放開

`v-on:mousemove` 滑鼠移動

[範例](https://codepen.io/cdpqdnvr/pen/JgmLJV) @ codepen



## 常用鍵盤事件

`v-on:keydown` 按下鍵盤，任何鍵都可取得keyCode，如果壓住鍵盤會連續觸發

`v-on:keypress` 順序在keydown之後，只有可輸入文字的按鈕才會觸發，取得的是chartCode(unicode)

`v-on:keyup` 放開按鍵時觸發最終的值，任何鍵都可取得keyCode



## 修飾符

- 鍵盤事件用keyCode當修飾符

例 `<input v-on:keyup.13="submit">`

- 使用鍵盤名稱

`enter`

`tab`

`delete`

`esc`

`space`

`up`

`down`

`left`

`right`

例 

```html
<input @keyup.enter="submit">
```



## 其他常用事件

`v-on:change` 綁定資料改變（如果是輸入框失去焦點時才會觸發）

`v-on:blur` 失去焦點（游標離開）

`v-on:focus` 獲得焦點（游標移入）

以及其他html原生的事件等



## Watch

`watch`和`computed`同樣都有監聽資料變化的功能，不過`watch`是以監聽對象作為function的名稱，和`computed`以回傳值作為function名稱的方式在程式意義上略有不同。

```js
watch: {
 targetName: function (newValue, oldValue) {

 }
}
```



## Watch - handler

- 有進階需求可使用`handler`，語法如下：

```js
watch: {
 targetName : {
  handler: function (newValue, oldValue) {

  },
  // 可加入immediate或deep屬性（後面說明）
 }
}
```

- 如果監聽對象為某個物件的屬性，監聽對象可使用字串來寫，例如想監聽對象為`student.name`，則可寫如下語法：

```js
watch: {
 'student.name' : {
  handler: function (newValue, oldValue) {

  }
 }
}
```



## Watch – immediate/deep

- `immediate`為true時（預設為false），在`watch`聲明了監聽對象的時候就會馬上執行`handler`方法。
- `deep`設為true時（預設為false），會監聽對象裡所有的屬性（比如說監聽對象為object，當object.a變化時也會進入handler）。

```js
watch: {
 targetName : {
  handler: function (newValue, oldValue) {

  },
  immediate: true,
  deep: true
 }
}
```



## Watch監聽的執行順序

- `watch`監聽對象有設定`immediate`為true的話，會比Component的`created`還要更新執行
- `watch`有設定多個監聽、並且有多個對象同時觸發時，會按照聲明的順序由上到下按順序執行。

```js
watch: {
 'obj.a' : {
  handler () {
   // 第一個執行
  }
 },
 'obj.b' : {
  handler () {
   // 第二個執行
  }
 }
}
```



## 監聽事件處理方式

事件處理方式建議按以下順序優先考慮：

1. 用`computed`響應資料
2. `v-on`事件監聽
3. 用`watch`監聽資料



## 範例

用以下程式完成陽春版autocomplete：[autocomplete半成品](https://codepen.io/cdpqdnvr/pen/PMLGMp) @ codepen

:::info

三種實作方式的完成範例：

1. 用`watch`來實作：[https://codepen.io/cdpqdnvr/pen/zYOrXmj](https://codepen.io/cdpqdnvr/pen/zYOrXmj) @ codepen

2. 用`v-on`來實作：[https://codepen.io/cdpqdnvr/pen/dybGqVw](https://codepen.io/cdpqdnvr/pen/dybGqVw) @ codepen

3. 用`computed`來實作[https://codepen.io/cdpqdnvr/pen/vYBLMQo](https://codepen.io/cdpqdnvr/pen/vYBLMQo) @ codepen

:::



## 練習

將前述的autocomplete輸入框加上以下功能：

- 點擊提示文字將文字帶到文字輸入框內
- 輸入enter送出文字（跳出alert訊息即可）
- 按esc取消游標、並關閉提示訊息框
- 游標離開關閉提示文字

:::info

完成範例：https://codepen.io/cdpqdnvr/pen/NQOEOa @ codepen

:::

