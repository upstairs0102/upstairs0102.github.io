---
slug: "/vuejs-ncut-course-2019/day1-2"
title: "1-2. Javascript與Vue.js模板語法"
tags: ["vue.js"]
category: "Vue.js 前端開發課程"
collection: "series"
kind: "article"
order: 12
source: "docs/[講課]勤益科大教育訓練講課 - Vue.js前端開發課程/1-2.  Javascript與Vue.js模板語法.md"
draft: false
publishedAt:
updatedAt:
---



# 1-2.  Javascript與Vue.js模板語法

## 使用Codepen(1) 設定CDN

步驟

[https://codepen.io](https://codepen.io/)

→點選Settings

→查詢加入vue.js

![image-20230106094328081](/images/notebook/legacy/51cd2bed88201f327711.png)

> 補充：好用的cdn [https://cdnjs.com](https://cdnjs.com/)



## 使用Codepen(2) 設定自動存檔模式

預設是自動存檔，可手動關閉（會出現存檔按鈕）

![image-20230106094426200](/images/notebook/legacy/72d60dbd6e7aacd70489.png)



## 常用Javascript陣列函式

用以下json練習陣列函式：

```json
var array = [
  {
    name: 'Casper',
    sex: 'male',
    like: '鍋燒意麵',
    age: 18
  },
  {
    name: 'Wang',
    sex: 'male',
    like: '炒麵',
    age: 45
  },
  {
    name: 'Kitty',
    sex: 'female',
    like: '牛肉麵',
    age: 15
  },
  {
    name: 'James',
    sex: 'male',
    like: '拉麵',
    age: 33
  }
]
```

陣列函式：

```
filter() 找出20歲以上的人
find() 找出誰喜歡牛肉麵
forEach() 把全部的like依續列印出來
map() 把like欄位更名為food
every() 是否全部為男性
some() 是否有大於40歲的人
reduce() 找出年紀最大的人
```



## 常用ES6語法 (1)

- 取代var的let與const（作用域不同）
- 以下三例輸出結果為何？

```js
// 1. var
for(var i = 0; i < 3; i++){
  console.log(i)
}
console.log(i)

// 2. let
for(let i = 0; i < 3; i++){
  console.log(i)
}
console.log(i)

// 3.
for(const i = 0; i < 3; i++){
  console.log(i)
}
console.log(i)
```



## 常用ES6語法 (2)

縮寫 (shorthand)

```js
function makePoint(x, y){
  return {
    x,
    y
  }
}

function createObj(key, vaule){
  return {
    [key]: value
  }
}

const viewModel = {
  created () {
  },
  mounted () {
  }
}
```



## 常用ES6語法 (3)

陣列解構

```js
// 陣列解構
const nums = [1, 2, 3]
const [first, second, third] = nums

// 預設值
let[a, b, c = 1] = nums

// 忽略元素
const [, y] = nums

// 變數交換
[a, b] = [b, a]

// 剩餘部份
const [f, …others] = nums
```



## 常用ES6語法 (4)

物件解構

```js
// 物件解構
const point = {
  x: 10,
  y: 20
}
const {x, y} = point

// 預設值
const {x1, y1, z1 = 0} = point

// 指派新名稱
const {x: px, y: py} = point

// 函式參數解構
function distance({x, y}) {
  return Math.sqrt(x*x + y*y)
}
```



## 常用ES6語法 (5)

字串模板

```js
// 插入表達式
function say (text) {
  console.log(`Hello ${text}`)
}

// 多元字串 - es5寫法
const longtext1 = ‘text1 -------------------------’ +
  ‘text2 -------------------------’ + 
  ‘text3 -------------------------’

const longtext2 = ‘text1 -------------------------\
text2 -------------------------\
text3 -------------------------’

// 多元字串 – es6寫法
const longtext3 = `text1 -------------------------
text2 -------------------------
text3 -------------------------`  
```



## 常用ES6語法 (6)

箭頭函式

```js
var double = function (x) {
  return x * 2
}

const add= (x, y) => {
  return x + y
}

const square = x => x * x

const newArr = [0,1,2].map(d => 0 + 1)

btn.addEventListener(‘click’, () => {
  console.log(‘click’)
}
```



## 常用ES6語法 (7)

- “function”函式內的this依調用的人而定（例1）
- 箭頭函式內的this為宣告時的位置而定（例2）
- 小技巧：用const self = this 用一個新的變數指向到原宣告位置的scoped內的this

```js
// ------ 例1 ------
window.word = 'hello world’

function say() {
  console.log(this.word)
}

var people = {
  word: 'how are you',
  say: say
}

say() // 印出 hello world
people.say() // 印出 how are you

// ------ 例2 ------
window.word = 'hello world'

const say = () => {
  console.log(this.word)
}

var people = {
  word: 'how are you',
  say: say
}

say() // 印出 hello world
people.say() // 印出 hello world
```



## Vue實例與MVVM

![image-20230106095849072](/images/notebook/legacy/d5ba018db2f9de438221.png)

> 圖片從網路截取



## Vue實例生命週期

依據經驗一開始常用的只有created與mounted，其他的後面依實務需要慢慢學習即可

![image-20230106095924597](/images/notebook/legacy/c7d3df7791767ca18ea1.png)

> 圖片從網路截取



## Vue.js Hello World

> [Vue.js Hello World](https://codepen.io/cdpqdnvr/pen/dLELgK) @ codepen

```html
<script src="https://unpkg.com/vue"></script>
<div id="app">
  <p>{{ message }}</p>
</div>
```

```js
new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue.js!'
  }
})
```



## 響應式資料與註冊的方式 (1)

Vue並不會監聽所有data中的資料，如下錯誤範例：

```html
<div id="app">
  <button @click="change('Angular')">Angular</button>
  <button @click="change('React')">React</button>
  <button @click="change('Vue')">Vue</button>
  <p>Hello {{ form.message }} !</p>
</div>
```

```js
new Vue({
  el: '#app',
  data: {
    form: {}
  },
  methods: {
    change (text) {
      this.form.message = text // 錯誤範例
    }
  }
})
```

:::note

在此階段中還沒介紹到事件綁定的方式，為理解這裡的範例需要先知道：

* `@click`為監聽點擊事件的模板語法。
* `methods`故名其意就是接收事件的方法。

:::



## 響應式資料與註冊的方式 (2)

正確做法：

方法一：在 `data` 中要把所有需要響應式的資料設定進去。

方法二：賦值時直接從`data`上的變數設值，而非物件內的屬性來設值。

方法三：用`$set`動態新增響應式資料

以上三個方法可以和 codepen範例中註解掉的部份對照著看：[註冊響應資料的範例](https://codepen.io/cdpqdnvr/pen/bGbeyzW?editors=1010) @ codepen

:::note

如果資料本身的型別是**陣列**，有一些對陣列的 javascript的操作方法本身就是可以被 Vue監聽到的，可以不需要透過上述三種做法才能響應資料的變更。這些陣列方法有：`push`、`pop`、`shift`、`unshift`、`splice`、`sort`、`reverse`

:::



## Method與Computed

- `method`常用在事件處理、`computed`常用在模板中的邏輯運算
- 模板變數當中可以寫表達式，但寫入`computed`可以更簡潔
- 模板變數當中可以寫`method`，但是`method`每次都會更新，而`computed`是相依的變數異動時才會更新

[computed邏輯運算範例](https://codepen.io/cdpqdnvr/pen/BeNWjo) @ codepen



## 模板語法與指令

資料綁定最常見的形式就是在模板中使用"Mustache"（雙大括號）：

```html
<span>Message: {{ msg }}</span>
```



HTML上要在屬性(attribute)上綁定資料時要使用「指令」(directive)，指令都會有 `v-`前綴，常見的指令有：

- `v-bind`
- `v-on`
- `v-model`
- `v-html`
- `v-if`
- `v-show`
- `v-for`



## v-bind (1)

用來「**單向綁定**」dom的屬性值，可以在屬性值前加上 `v-bind:`或簡寫 `:`，如下：

```html
<h1 :class="h1Class">Title</h1>
```

或

```html
<h1 v-bind:class="h1Class">Title</h1>
```

此例中的`h1Class`為 `data`中的變數

```js
new Vue({
  el: '#app',
  data: {
    h1Class: 'title'
  },
})
```

css

```css
.title {
  font-size: 36px;
  color: #000000;
}
```



:::info

- class

綁定`class`可為字串、陣列也可為物件（value為true/false）

進階範例：[https://codepen.io/cdpqdnvr/pen/rXKdWX](https://codepen.io/cdpqdnvr/pen/rXKdWX) @ codepen

- style

綁定`style`可為陣列、物件

進階範例：[https://codepen.io/cdpqdnvr/pen/pMKXpY](https://codepen.io/cdpqdnvr/pen/pMKXpY) @ codepen



關於綁定`class`及`style`更多詳細說明請參考官網文件：https://v2.vuejs.org/v2/guide/class-and-style.html

:::



## v-bind (2)

由於 `v-bind`是「單向綁定」的，所以如果我們把他拿來綁定表單組件的狀態，會因為使用者的操作發生狀態不同步的情況發生；用下面例子來做說明：

> [範例](https://codepen.io/cdpqdnvr/pen/byVrRE) @ codepen

```html
<div id="app">
  <input type="checkbox" :checked="value">
  value: {{value}}
</div>
```

```js
new Vue({
  el: '#app',
  data: {
    value: true
  },
})
```

![image-20230109194539087](/images/notebook/legacy/c29dff311523dd5c0849.png)

在此例中因為綁定的 `checked`為 `true`，所以程式執行時 checkbox起始就是打勾起來的狀態。

這時候如果使用者用滑鼠點擊 checkbox，會發現`checked`仍然為 `true`。

![image-20230109203159602](/images/notebook/legacy/d705ee94dfeed6eef5b2.png)



:::note

* 正確的綁定方式有兩種：

  (1) 使用 `v-on`監聽事件來更新資料達到同步資料的目的（不建議）

  (2) 使用「雙向綁定」方法來同步資料。

* 我們才剛起步沒多久，所有東西都還是新的，在這個階段我們先知道表單組件的狀態不能用「單向綁定」就可以了，後面會再做深入一點的說明。

:::



## v-on

監聽Dom元素事件，可以在屬性值前加上 `v-on:`或簡寫 `@`，如下：

```html
<button v-on:click="counter+=1">Add 1</button>
<!--
或者
<button @click="counter+=1">Add 1</button>
-->
共點擊了{{counter}}次
```

```js
new Vue({
  el: '#app',
  data: {
    counter: true
  }
})
```

在此例中我們直接把程式寫在`v-on`指令當中，但如果程式更為複雜，可以換成所要呼叫的 `methods`的名稱。例如

```html
<button @click="onClick">Add 1</button>
共點擊了{{counter}}次
```

```js
new Vue({
  el: '#app',
  data: {
    counter: true
  },
  methods: {
    onClick: function () {
      this.counter += 1
    }
  }
})
```



## 使用v-bind及v-on事件實現雙向綁定

延續在 `v-bind`中所使用到的範例，前面有提到表單組件如果用 `v-bind`綁定狀態的話會有不同步的問題，在這裡我們可以用 `v-on`來提供一個解法：

```html
<div id="app">
  <input type="checkbox" :checked="value" @click="onClick">
  value: {{value}}
</div>
```

```js
new Vue({
  el: '#app',
  data: {
    value: true
  },
  methods: {
    onClick: function(event) {
      this.value = event.target.checked
      // 或者可以寫這樣：
      // this.value = !this.value
    }
  }
})
```

這時候我們再測試一次，初始的時候一樣因為 `checked`為 `true`所以 checkbox是打勾的：

![image-20230109194539087](/images/notebook/legacy/c29dff311523dd5c0849.png)

當使用者點擊 checkbox，`onClick`方法會被呼叫，並且把 `value`變跟為 false，這時候我們可以看到狀態是同步的：

![image-20230109211151990](/images/notebook/legacy/b60455c2934630c63cbc.png)



:::info

在此例中暫不做雙向綁定，所以操作上資料有可能會不同步造成bug。後續教學會講解雙向綁定的做法。

:::



## v-model

延續上面用 `v-bind`及 `v-on`的組合，我們一樣可以用同樣方式做一個 Input輸入框版本的寫法：

> [`v-bind`及`v-on`的組合範例](https://codepen.io/cdpqdnvr/pen/pmjrXp) @ codepen

```html
<input type="text" :value="message" @input="setMessage">
```



Vue提供了一個方便的指令 `v-model`可以直接來實作「**雙向綁定**」，上面的範例我們可以直接改寫成下面：

>  [`v-model`寫法範例](https://codepen.io/cdpqdnvr/pen/XWBpwKM) @ codepen

```html
<input type="text" v-model="message">
```



原生的表單元素可以直接使用v-model，包括：

- Input
- Textarea
- Radiobutton
- Checkbox
- Select/Option



## v-html

在Vue中，不能透過{{}}和v-text將html的元素插入到模板中，如果字串包含html元素會解析為字串

範例：[v-html可以綁定字串並將字轉轉換為html元素](https://codepen.io/cdpqdnvr/pen/BXPyxX) @ codepen



## v-if

* 當`v-if`為`true`時會把 DOM給渲染出來，而值為`false`的時候則 DOM會被移除。

* `v-if`可和 `v-else`、`v-else-if`做搭配。

範例：[v-if](https://codepen.io/cdpqdnvr/pen/MNBwaE) @ codepen



## v-show

和`v-if`不同的是，即使值為`false`也仍然會把 DOM給產生出來，只在CSS加了 `display:none`屬性做隱藏顯示的效果，



## v-for 物件及陣列

- 錯誤範例：[使用物件導致的排序錯誤](https://codepen.io/cdpqdnvr/pen/OYPWZJ?editors=1010)

- 範例：[月份下拉選單](https://codepen.io/cdpqdnvr/pen/mYyOgj) @ codepen

- 練習：將顯示資料和value分開處理，顯示為「一月」、「二月」、「三月」… value為1,2,3…



## v-for 篩選陣列

- 盡量避免在迴圈中使用v-if，最好是迴圈陣列本身預先篩選好

- 篩選陣列

  - slice範例（可寫進computed）
  - fliter範例（可寫進computed）

- 範例：[ v-for篩選陣列](https://codepen.io/cdpqdnvr/pen/vwNZBJ) @ codepen



## 練習一 – 檢測密碼強度

- 密碼強度分數計算：

- - 分數為字串長度 * 1.25
  - 包含A-Z 分數* 1.25
  - 包含a-z 分數* 1.25
  - 包含0-9 分數* 1.25
  - 包含英文及數字以外的字元 分數* 1.25

- 強度等級：

- - 41分以上：Perfect
  - 21~40分：Great
  - 11~20分：Good
  - 0~10分：Week

- 提示：

```js
/[a-z]/.test('abcABC') === true

/[^A-Za-z0-9]/.test('abcABC') === false
```



:::info

完成範例：https://codepen.io/cdpqdnvr/pen/NQBNgd @ codepen

:::



## 練習二 – 連動式下拉選單

使用此資料素材：[郵遞區號json資料](https://gist.github.com/abc873693/2804e64324eaaf26515281710e1792df) @ github/abc873693

製作一個能夠連動的下拉選單，第一個選單選擇城市、第二個選單選擇地區，並且要能顯示目前地址的郵遞區號，成果如下圖。

![image-20230106124246454](/images/notebook/legacy/66000e7296ff3e9b15f9.png)



:::info

完成範例：https://codepen.io/cdpqdnvr/pen/rXqjQR @ codepen

:::

