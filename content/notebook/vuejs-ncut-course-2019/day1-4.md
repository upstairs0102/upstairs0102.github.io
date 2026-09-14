---
slug: "/vuejs-ncut-course-2019/day1-4"
title: "1-4. 組件化設計"
tags: ["vue.js"]
category: "Vue.js 前端開發課程"
collection: "series"
kind: "article"
order: 14
source: "docs/[講課]勤益科大教育訓練講課 - Vue.js前端開發課程/1-4. 組件化設計.md"
draft: false
publishedAt:
updatedAt:
---



# 1-4. 組件化設計

## 組件化設計

- 無論是哪一個前端框架，Component的設計都是最重要的一環。
- 組件化可以提高程式碼的可讀性及更多的reuse機會，但是對「資料流」及「狀態」的控制來說有可能會更加的複雜，建議初學者一開始不需要將組件切割得太細。

![image-20230106142847765](/images/notebook/legacy/597e28293f7e1b6204a9.png)



## 全域註冊Component



```js
Vue.component('button-counter', {
  data: function () {
    return {
      count: 0
    }
  },
  template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>'
})
```

:::caution

注意：Component內的`data`必須為函式！

:::



## 命名

- 組件名稱命名方式有兩種

  - Kebab-case
  - PascalCase

- 當使用PascalCase定義組件時，使用組件的時候兩種名稱都會是有效的。（`<my-component-name>` 和 `<MyComponentName>`）

- 直接在DOM（非字串模板）中使用時只有kebab-case是有效的。

- [範例](https://codepen.io/cdpqdnvr/pen/NWKNdbO) @ codepen



## 練習

- 以下網址是一個靜態切版的html，練習用Vue將書本項目區塊做成一個可共用的Component，由主程式傳入資料動態生成畫面。

[練習程式半成品](https://codepen.io/cdpqdnvr/pen/GRKZRwX) @ codepen

- 這是一個很常見的工作情境：由設計師切好版後，接著工程師串接資料做成一個動態的網頁。

:::info

完成範例：[https://codepen.io/cdpqdnvr/pen/WNNzMKZ](https://codepen.io/cdpqdnvr/pen/WNNzMKZ) @ codepen

:::



## 兩種資料傳遞的策略

- 單向資料流：一般情況，較常使用的方式

（`v-bind`傳入資料、事件傳出資料）

- 雙向資料流：常用在表單組件（或較小的組件）

（`v-model`或`.sync`雙向綁定）



## 單向資料流 - props/emit

- `v-bind`為單向綁定的，父組件透過`props`傳入子組件
- 子組件要傳給父組件，要使用Emit事件

![image-20230106143910729](/images/notebook/legacy/99e0062773f81c53b340.png)



## 建議避免子組件內直接修改prop

- 如果修改`props`的方式是傳值(call by value)，不會影響父組件，但某些情況下會跳出警告訊息

![image-20230106144023071](/images/notebook/legacy/0a2a3150284a067af3b0.png)



- 如果修改`prop`的方式是傳址(call by reference)，因指向到同一個物件，所以會影響到父組件，這個原因造成的bug很常見且不容易抓需注意！



## 錯誤示範

- 直接修改`props`不會造成bug，但不建議

[錯誤示範](https://codepen.io/cdpqdnvr/pen/jONqypj) @ codepen

- Call by reference造成的資料渲染，雖能達成目的但不是建議的做法

[錯誤示範](https://codepen.io/cdpqdnvr/pen/xxKVgYR) @ codepen



## 小技巧

單向資料流傳遞物件時，為避免call by reference造成的bug可使用「deep clone」方式將資料複製一份出來。

```js
let newData = JSON.parse(JSON.stringify(data))
```



## .sync

`v-bind`搭配`.sync`修飾符，可以「雙向綁定」資料：

```html
<component :value.sync="value">
```

組件內需搭配使用資料更新語法如下：

```js
this.$emit('update:value', value)
```



前面有說明「**不能直接修改props**」時所使用的 [錯誤範例](https://codepen.io/cdpqdnvr/pen/jONqypj)，我們用它來做一點調整，修改用`.sync`就可以達到雙向綁定的效果：

[`.sync`實作範例](https://codepen.io/cdpqdnvr/pen/BaBKvbN) @ codepen



:::caution

`.sync`語法在 Vue 3.0版本之後已被移除，統一採用 `v-model`來實作「雙向綁定」；不過在 Vue 2.x版環境當中還是一個合適使用的寫法。

:::



## 練習

- 將以下程式碼完成功能：

  - 使用`.sync`修飾符同步lightbox組件的傳入props`active`（如下）， 當使用者點擊「編輯」按鈕打開lightbox、點擊「取消」按鈕或者半透明黑色背景關閉lightbox。
  
    ```html
    <lightbox
      :active.sync="isLightboxActive"
      :data="teacher">
    </lightbox>
    ```
  
  - 使用單向資料流傳入props`data`，點擊「完成」按鈕將lightbox的`asyncData`更新至外層Data的`teacher`，如果未點擊完成按鈕就直接關閉lightbox則捨棄編輯得資料

[lightbox練習（半成品）](https://codepen.io/cdpqdnvr/pen/YzKwNOv) @ codepen

:::info

lightbox完成範例：[https://codepen.io/cdpqdnvr/pen/BaBjLQy](https://codepen.io/cdpqdnvr/pen/BaBjLQy) @ codepen

:::



## 練習

延續先前章節中練習的郵遞區號關聯選單：[連動下拉選單 - 郵遞區號（未封裝）](https://codepen.io/cdpqdnvr/pen/rXqjQR) @ codepen

將其封裝成Component、並使用`.sync`修飾符實作雙向綁定（如下）

```html
<zipcode-selector
  :value.sync="zipCode">
</zipcode-selector>                
```

:::info

`<zipcode-selector>`完成範例：[https://codepen.io/cdpqdnvr/pen/mNgzBr](https://codepen.io/cdpqdnvr/pen/mNgzBr) @ codepen

:::



## 自製表單元素

- 如果想自製表單元素的Component以取代原生的表單元素，可以考慮用和原生同樣使用`v-model`綁定資料而非自訂的props名稱。
- Component要使用`v-model`雙向綁定，template內必須實作兩項條件：

  1. 使用 `props` "value"
  2. 使用 `event` "input"



## 範例

將 [前面的範例`<button-counter>`](https://codepen.io/cdpqdnvr/pen/jONqypj) 修改用`v-model`雙向綁定

- 方法1：組件內用變數承接`props`傳進來的資料，可使用`watch`監聽`props`，可以每次`props`變動的時候都更新。

[封裝Component（watch監聽props）](https://codepen.io/cdpqdnvr/pen/dybMvWq) @ codepen

- 方法2（進階）：使用`computed`的`getter`取得父組件的值，用setter同步資料回父組件

[封裝Component（computed響應props）](https://codepen.io/cdpqdnvr/pen/poowQKa) @ codepen



## 練習

- 延續前面練習的autocomplete：[未包成Component的autocomplete](https://codepen.io/cdpqdnvr/pen/NQOEOa) @ codepen

將輸入框封裝成Component（使用`v-model`實作雙向綁定）如下：

```html
<div id="app">
  <autocomplete-input
    v-model="inputText"
    :data="recoData"
    @input="onInput"
    @enter="onEnter">
  </autocomplete-input>                 
</div>
```



:::info

autocomplete封裝Component完成範例：[https://codepen.io/cdpqdnvr/pen/mNojrK](https://codepen.io/cdpqdnvr/pen/mNojrK) @ codepen

:::



## Props驗證

`props`可以加入option參數，常用的如下。

- `type`：型別驗證

  - String
  - Number
  - Boolean
  - Function
  - Object
  - Array

- `default`：預設值

```js
props: {
  counter: {
    type: Number,
    default () {
      return 10
    }
  } 
}
```

```js
Vue.component('my-component', {
  props: {
    propA: Number,
    propB: [String, Number],
    propC: {
      type: String,
      required: true
    },
    propD: {
      type: Number,
      default: 100
    },
    propE: {
      type: Object,
      default: function () {
        return {
          message: 'hello'
        }
      }
    },
    propF: {
      validator: function (value) {
        return ['success', 'warning', 'danger'].indexOf(value) !== -1
      }
    }
  }
})
```

