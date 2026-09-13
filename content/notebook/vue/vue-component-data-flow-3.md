---
slug: "/vue/vue-component-data-flow-3"
title: "[主題] Vue Component資料流設計 (3) 雙向綁定–大組件"
authors: "thunderboy"
tags: ["vue","javascript"]
category: "Vue.js"
collection: "technical"
kind: "article"
order: 999
source: "docs/Vue/[主題] Vue Component資料流設計 (3)雙向綁定–大組件.md"
draft: false
publishedAt: "2020-05-09"
updatedAt:
---

# Vue Component資料流設計 (3) 雙向綁定–大組件

## 一、範例說明

本文是系列文當中討論「雙向綁定」的第二篇文章，在前一篇文章「Vue父子組件資料流設計 (2) 雙向綁定–通用組件」當中有介紹了兩種（我自己的經驗法則分類）會使用雙向綁定的組件類型：

1. 通用組件
2. 大組件

<!--truncate-->

本篇文章將針對「大組件」的部份做討論。

前一篇文章有用一個「假想的大型表單」來做說明，本篇將延續此假想案例，實作一個簡單的範例來討論。

開始之前想簡單復習一下，當時的案例說明是這樣的：

> 一種情況是，我們製作Component最主要的原因不是為了reuse（可複用）的理由，單純是程式太長了。
>
> 假設有一個非常巨大的表單，並且有五個分頁，有500個欄位好了…（略）…
>
> 可想而知這支程式鐵定是非常肥大，三五千行都是有可能的，為了可維護性大多工程師都會想把程式能抽出來就抽出來。
>
> 在這個我胡亂掰的例子當中，這五個頁籤基本上裡面的內容都是各自獨立不互相影響的，所以以我來說可能就會再把這五個頁籤再拆成五個Component

假想圖如下圖：

![](/images/notebook/legacy/e19f0d644b37090934cb.png)

不過以範例來說，要做500個欄位太佔篇幅了，為方便解說，我實作的範例只有「兩個頁籤」「各5個欄位」。

畫面如下：



![image-20200509192624575](/images/notebook/legacy/5ceeda7ea54f5121222b.png)

父層主程式html結構如下：

```html
<div id="app">
  <!-- 頁籤按鈕 -->
  <div>
    <button
      @click="changeTab('tab1')">
      頁籤1
    </button>
    <button
      @click="changeTab('tab2')">
      頁籤2
    </button>
  </div>
  <!-- 表單內容 -->
  <div
    :is="currentTab"
    :tab-data="currentTabData">
  </div>
  <!-- 檢視JSON資料 -->
  <hr></hr>
  <div>表單JSON：</div>
  <pre>{{form}}</pre>
</div>
```

本範例將製作兩個組件分別為兩個頁籤的內容，名稱為`tab1`及`tab2`。當點擊畫面中「頁籤1」按鈕，則切換為`tab1`，點擊「頁籤2」按鈕切換為`tab2`。

如同前面的案例說明，這整張表單的資料主要還是放在父層，並透過雙向綁定將`tab-data`傳入組件（`tab1`及`tab2`）內。

父層的主程式如下：

```js
const vm = new Vue({
  el: '#app',
  data: {
    // 目前頁籤使用的component名稱
    currentTab: 'tab1',
    // 表單資料
    form: {
      // 頁籤1
      tab1: {
        column1: '',
        column2: '',
        column3: '',
        column4: '',
        column5: '',
      },
      // 頁籤2
      tab2: {
        column1: '',
        column2: '',
        column3: '',
        column4: '',
        column5: '',
      }
    }
  },
  computed: {
    // 目前的頁籤資資料
    currentTabData () {
      return this.form[this.currentTab] // tab1 or tab2
    }
  },
  methods: {
    // 切換頁籤
    changeTab (name) {
      this.currentTab = name
    }
  }
})
```

以上程式碼在後續說明都不會變了。

會有差異的就在於組件中要實作的方式，就如同本系列文章的精神都是依照我自己的經驗法則所整理的，以下將分為兩種實作方式來討論：

1. 傳參考給子組件
2. 子組件使用computed的get/set同步prop



## 二、傳參考給子組件

這個章節的標題我本來想下的是「有用但是不建議的做法」，不過後來文章結構的安排因素後來就放棄了。至於為什麼不建議，我後面會再做說明。

基本上這個章節要討論的就是利用Javascript傳參考(call by reference/pass by reference)的特性來傳值。

同樣的範例我在本系列文第一篇「Vue父子組件資料流設計 (1) 單向傳遞」當中也有使用過：

```js
let obj = { number: 100 }
function add(newObj){
  newObj.number = newObj.number + 1
}
add(obj)
console.log(obj.number) // 印出101
```

在這個範例中，概念上你可以把`add` function假想成Vue Component，當你透過綁定將值傳入組件之後，由於你傳入的值的型別是「傳參考」的話（也就是型別為物件或陣列），當組件中的prop的值被改變了，父層的值是有可能會跟著改變的。

在本系列文第一篇「Vue父子組件資料流設計 (1) 單向傳遞」，當中是建議子組件內可用深拷貝的方式複製一份存在組件內來管理。不過由於本文範例就是要實作雙向綁定，所以這邊反而是不會有問題的。

應用在這個範例當中，父層將`currentTabData`透過資料綁定傳送給組件，`currentTabData`也就是存在父層表單資料的`this.form.tab1`或`this.form.tab2`（依照頁籤的切換決定傳入哪一個）

```js
computed: {
  // 目前的頁籤資資料
  currentTabData () {
    return this.form[this.currentTab] // tab1 or tab2
  }
},
```

組件的`prop` `tabData`取到值就直接綁定到表單欄位上了，程式碼如下：

```js
Vue.component('tab1', {
  template: `
  <div>
    <div>
      頁籤1欄位1
      <input
        type="text"
        v-model="tabData.column1">
    </div>
    <div>
      頁籤1欄位2
      <input
        type="text"
        v-model="tabData.column2">
    </div>
    <div>
      頁籤1欄位3
      <input
        type="text"
        v-model="tabData.column3">
    </div>
    <div>
      頁籤1欄位4
      <input
        type="text"
        v-model="tabData.column4">
    </div>
    <div>
      頁籤1欄位5
      <input
        type="text"
        v-model="tabData.column5">
    </div>
  </div>
  `,
  props: ['tabData'],
})
// tab2 的程式碼完全相同所以就略過了
```

非常簡潔明了。

實際上這個做法我認為應該稱不上錯誤，必竟這只是Javascript本身的特性而已。但至於我仍然不推薦的原因有以下三點：

1. 在某些情況下還是有可能無法「回傳」給父組件（較正確說法是如果組件中使用「傳值」的方式來修改prop）。用一個先前也用過的一個範例來說明這種Javascript特性。

```js
let obj = { number: 100 }
function add(newObj){
  newObj = { number: 200 }
}
add(obj)
console.log(obj.number) // 印出100
```

2. 程式維護性和可讀性上有些問題，畢竟綁定資料使用`v-bind` ，對維護程式的人可能不會意識到父子組件資料是連動的。
3. 有更好的做法的情況下我不覺得有什麼原因非得要使用他。

關於第三點「更好的做法」再下一個章節會進行討論。



[Codepen範例完整程式在此](https://codepen.io/cdpqdnvr/pen/wvKjvEQ)



## 三、子組件使用computed的get/set同步prop

關於computed的getter/setter寫法和概念上和前一篇文章「Vue父子組件資料流設計 (2) 雙向綁定–通用組件」是完全相同的，所以就不會花太多篇幅來說明，就直接續前面的範例來做修改。

首先將綁定資料的方式改為雙向綁定的`v-model`：

```html
<div
  :is="currentTab"
  v-model="currentTabData">
</div>
```

配合使用`v-model`，子組件也要改為搭配使用名稱為`value`的「prop」以及`input`「事件」（或者說`emit`）：

```js
Vue.component('tab1', {
  template: `
  <div>
    <div>
      頁籤1欄位1
      <input
        type="text"
        v-model="syncTabData.column1">
    </div>
    <div>
      頁籤1欄位2
      <input
        type="text"
        v-model="syncTabData.column2">
    </div>
    <div>
      頁籤1欄位3
      <input
        type="text"
        v-model="syncTabData.column3">
    </div>
    <div>
      頁籤1欄位4
      <input
        type="text"
        v-model="syncTabData.column4">
    </div>
    <div>
      頁籤1欄位5
      <input
        type="text"
        v-model="syncTabData.column5">
    </div>
  </div>
  `,
  props: ['value'],
  computed: {
    syncTabData: {
      get () {
        return this.value
      },
      set (v) {
        this.$emit('input', v)
      }
    }
  }
})
// tab2 的程式碼完全相同所以就略過了
```

全部程式碼如上。

當中最大的差異就是前一個章節當中表單內直接使用`prop`來綁定資料，而這個範例在`computed`建了一個`syncTabData`來「同步」父組件的值：

```js
computed: {
  syncTabData: {
    get () {
      return this.value
    },
    set (v) {
      this.$emit('input', v)
    }
  }
}
```

換句話說，表單所有的欄位資料（包含頁籤1及頁籤2）全部都是放在父組件的，子組件中的「取用」和「寫入」都是直接對父組件，這樣一來在程式的維護性和可讀性都大大改善了。



[Codepen範例完整程式在此](https://codepen.io/cdpqdnvr/pen/PoPeqdp)



## 四、更複雜的情境

本文的範例其實是簡化了真實世界的情境，真實世界可能是這樣的：

![image-20200509224422176](/images/notebook/legacy/b0346168c6c947d55c0d.png)

以這個範例來說，無論曾曾曾…孫組件傳到了第幾代，最下面那一層最終還是得雙向綁定到最上層的表單資料。

這種較大型的組件常常也伴隨一些特性是以上範例中沒有出現的：

1. 不一定只會有父與子兩層而已，有可能會是一個多層的、像樹一樣的巢狀結構，資料傳遞上隨著結構的複雜度提高，開發上也會變得異常複雜。

   ![VueJS 元件(Component) 之間資料溝通傳遞的方式| Kuro's Blog](/images/notebook/legacy/b3814c2cd5b489e80f2e.png)

2. 大型組件也可能有reuse（可複用）的需求，為了reuse的需求而導致子組件中必須將某些原本在內部管理即可的狀態，變成需由最外層的父組件來傳遞進去（比如說，假設某個組件是要打api的，原本的設計只要在組件內打api即可，但為了要讓另一個頁面也能使用該組件但是需打另外一支api，而改成將呼叫api的事件往父組件傳，由父組件打api），這樣的設計也會導致程式提升不必要的複雜度。

為了避免題目變得太發散，後面的討論就當作補充，就不會寫得太深入了（我也寫不完了…）。

同樣又是經驗法則，就我自己有限的開發經驗來說我使用過這兩種解決方案：

1. Vuex
2. Container Component (Smart/Dumb Component)

這兩者其實是不同的東西，適用情況不同，當然也有可能是一起使用的。



### Vuex

大家可以試著回想一開始學習Vue的時候，還沒有試著包裝太多Component之前，把整頁的程式碼寫在同一支Component的世界多麼美好（？）。

隨著Component切分的愈來愈細，程式碼雖然變短了，可是開發時間反而變長了，各種意想不到的問題也隨之出現（本系列文的各種經驗談也是我在這個過程當中摸索出來的）。

原本寫在同一支程式的變數，變成散落在各個組件之中，要不斷的props down/events up傳遞下去傳遞上來。

使用Vuex之後，你就可以將這種需要跨多層傳遞的變數統一交由Vuex來做管理。

不過關於Vuex本身議題過於龐大，以下示意圖就畫成一個方塊當成黑盒子即可。

![image-20200509223445726](/images/notebook/legacy/bcf31987e9faf5cc54c3.png)



### Container Component (Smart/Dumb Component)

以本系列文的主題來說突然冒出來一個Container Component就稍微有點跳tone了，但是從某個角度來說他可以解決某些資料流設計上的問題。

Smart/Dumb Component是一個由Reat社群中在討論的一個設計模式，其簡單定義如下：

* Smart Component：依賴api或者其他狀態管理者（如Vuex），並會將資料傳遞給Dumb Component。
* Dumb Component：單純的根據props來進行渲染。

經過如此劃分之後，頁面中Component樹狀結構通常較上層的會是Smart Component，較下層的是Dumb Component。

在前述的討論中我們有提到一個問題點，也就是這裡所要解決的問題–**「大型組件也可能有reuse（可複用）的需求」**。

本系列經過這麼多範例的討論也要來到了尾聲了，我將組件類型區分為**「通用組件」**以及**「大組件」**，應該也不難觀察到如果用這個設計模式來區分，Smart Component只會是「大組件」不會是「通用組件」（「大組件」有可能會是Smart也有可能會是Dumb，但是「通用組件」只會是Dumb）。

重點來了。

一個同時是「Smart Component」他的**「複用性」**肯定就會較低。而如果同時是「Smart Component」又希望能「複用」的話，這個設計模式就提出來一個解決方式：

![image-20200509233716473](/images/notebook/legacy/575ed1a7f2d39c1cab2f.png)

將原本的Component拆分成「Smart Component」及「Dumb Component」的組合，Api或Vuex等的資料/狀態的依賴拆分到「Smart」的那一層，而「Smart」那層會是薄薄的一層就只處理資料的溝通，而內層的「Dumb」就只依照props的指令來進行渲染。

這樣的設計下外層薄薄的一層「Smart Component」就稱之為**「Container Component」**。這樣一來就能確保「Dumb」層的複用性，如果需要依賴不同的api或者不同的資料來源，就只需要將薄薄的一層「Container Component」給抽換掉即可。

這樣的設計下，也連帶的影響了資料流的設計，組件不需要為了屈就於「複用性」的需求，而將原本在內部就可以處理好的事情（相關的資料依賴）往外丟到父組件處理而增加父組件的複雜度，只要把（相關的資料依賴）放到薄薄的Container那層來管理即可。



### 兩者的結合

最後的最後，沒有程式的範例，但是我試著用圖解來讓大家想像一下如果「Vuex」和「Container Component」應用在本文的範例中會是長什麼樣子。

如果本文的大型表單使用上了Vuex，會變成每一個組件都是直接跟Vuex溝通，不再需要傳遞到最外層來管理。

![image-20200510001327595](/images/notebook/legacy/c9ea557e28caa1aee267.png)

那如果把Container Component也加進來大亂鬥呢？這時候奇妙的事情發生了，圖表原本的箭頭大幅度的減少剩下兩條了。

由於Container Component的概念加入區隔了「Smart Component」以及「Dumb Component」，依賴關係減少了，也增加了更多組件可複用性的可能！

![image-20200510001615508](/images/notebook/legacy/24c08cc5c82a6322a043.png)

不知道到到了這邊會不會有人提問…

Container Component可以替換，可是Vuex是全域的啊？

這個嘛… 你知道Vuex也有模組化的功能嗎？（又一個坑）



## 五、總結

這個系列文章籌劃許久遲遲沒有動筆，動筆之後又前前後後用了很多天的青春，終於是寫完了。

看著鏡子中的自己，覺得面容又憔悴了不少（也太感性了吧）。

年中之後Vue3.0正式版就要發表了，雖然知道基本概念應該是不會變的，但也忍不住想說之後應該不會再像這次花這麼多時間來寫技術相關的文章了。好像也到了會思考要不要把更多的時間用在可以累積得更長遠的知識上面的年紀。

感性時間結束，寫了這系列前大半部只覺得累而已，可是到了最後覺得愈來愈有趣，差點就要發散到模組化設計的議題上面了，還好本系列主題就是定在「父子」組件的設計而已，其實最後一個小章節已經稍稍有點離題，還好我盡量濃縮在一個小章節裡把他給講完（我也不可能有力氣再寫下去了）。

寫的這麼落落長，技術的深度卻又這麼的「不深」，還真懷疑放到網路上是否真的有人會把他看完。大概只有公司裡的junior前端會被我強迫推銷而看完而已吧。

不過話說回來，講到Vue的學習（或者是前端開發）裡資料傳遞幾乎是我認為是所有的Vue知識裡Top 1最重要的一件事情（雖然說技術層面上不高），網路上卻好像也沒看過相關針對這個主題的深入討論（就算有我應該也沒耐心看吧哈哈）。導致於總覺得許多經驗不多的開發者（包括之前的我）都會用不太良好的方式來寫，所以這個就是我花這麼多時間的主要動機之一…

如果還真有我不認識的人把文章看完了，請讓我知道是否對你有任何幫助、或者有任何指教都非常歡迎！感謝！
