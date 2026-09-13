---
slug: "/vue/translation-vue-optimization"
title: "[譯] Vue.js App 效能優化"
authors: "thunderboy"
tags: ["vue","javascript"]
category: "Vue.js"
collection: "technical"
kind: "article"
order: 999
source: "docs/Vue/[譯] Vue.js App 效能優化.md"
draft: false
publishedAt:
updatedAt:
---

## 翻譯說明

最近使用Vue.js投入公司產品開發花了不少心血，關於前端的效能是一件很重要的事情，這個系列文有做了一些有趣的探討，原文作者似乎也還沒寫完，我先從第一篇開始翻起，原文在此：

[https://itnext.io/vue-js-app-performance-optimization-part-1-introduction-to-performance-optimization-and-lazy-29e4ff101019](Vue.js App Performance Optimization: part 1 — Introduction to performance optimization and lazy loading.)

---

當行動優先導向成為標準、並且不確定性的網路環境也成為我們必須考慮的因素時，讓應用程式保持高速成為越來越困難的事情。在這個系列當中我會挖掘更深的Vue優化技術 – 我們在Vue Storefront當中所使用的技術，而你也可以用在你的Vue.js應用程式當中來讓他們瞬間讀取並且表現得平滑。我的目的是在這系列中對於Vue.js應用程式效能給出一個完整的指南。

- Part 1 – 介紹效能優化及lazy loading
- Part 2 – Lazy loading路由及第三方庫的反向模式(anti-pattern)
- Part 3 – Lazy loading Vuex模組
- Part 4 – Lazy loading單一Component
- Part 5 – Lazy loading函式庫和尋找最小集合
- Part 6 – 使用Service Worker cache
- Part 7 – 預讀取

## Part 1 – 介紹效能優化及lazy loading

### Webpack打包如何運作？

本系列中大部份的提示都是聚焦在使我們的js bundle更小。為了了解這是至關重要的，我們需要了解Webpack是如何把全部檔案打包來起的。

當Webpack打包所有資源時會產生依賴樹，這是一個連結所有我們使用import引入檔案的圖型。假設我們在Webpack config中使用main.js作為特定入口，他就會是整個依賴樹的根節點。那每一個import到該檔案底下的js module都會成為圖型當中的葉節點，並且每一個import進該葉節點的module也成為他的葉節點。

Wabpack使用這個依賴樹圖型偵測該納入打包輸出當中。打包出來會是一個包含所有依賴樹中的module的單一javascript檔案（或者多個，後面章節會寫）

我們可以把這個進程繪製成以下如圖：

![](/images/notebook/legacy/e297da97a66f22a0bee9.png)

現在我們知道打包是如何運作的，很明顯的他會成長到專案內最大化的初始javascript打包檔案。檔案愈大代表使用者需花更多時間下載，也代表使用使用者更可能離開我們的網站。

簡而言之，大部份的情況下愈大的打包=愈少的用戶。

##Lazy loading

所以為了改進我們的應用程式，當我們需要增加功能時該如何減少打包檔案的大小？當案很簡單-lazy loading和程式碼切割。

從字面上來看lazy loading就是懶惰得只載入應用程式的一部份。另外一種說法就是-只載入我們真的需要的部份。程式碼切割只切割出這個載入的部份。

![](/images/notebook/legacy/1a08608b40a20082b066.png)

大部份的情況下當使用者進入網站時不需要javascript打包中的所有程式，就算我們有3個不同的路由位置而使用者無論如何都需要下載、解析、並執行打包程式-不論他們是否會需要用到。這是多麼浪費時間和力氣！

Lazy loading允許我們切割打包並提供所需要的部份，使用者不需要浪費時間下載及解析他們不需要的程式。要看網站實際上使用到的javascript程式我們可以到開發者工具->cmd+shift+p ->輸入”coverage”->點擊”錄製”，接著我們應該可以看到下載了多少實際上使用到的程式。

![](/images/notebook/legacy/9679fa5c5533068fbe58.png)

每一個被標成紅色的就是目前路由裡不需要並可以被延遲載入的程式，如果你有用到source map那你可以點選清單裡任何沒有被引用到的檔案。從以上觀察可知甚至vuejs.org也有很大的進步空間^_^。

透過lazy loading特性的component和程式庫，我們砍掉了60%d Vue Storefront的打包檔案容量。

OK，我們現在知道lazy loading是什麼而且有多實用了^_^，現在我們來看他可以如何用在我們的Vue.js應用程式。

##Dynamic imports

透過webpack的dynamic imports可以很輕易的延遲載入部份程式，我們來看他是如何運作並且和一般的import有什麼不同。

如果我們使用一般的方式import JS module會像如下：

```js
// main.js
 
import ModuleA from './module_a.js'
 
ModuleA.doStuff()
```

他會被加入到main.js的依賴樹中的葉節點並被打包進去。

但如果我們只有在特定情況下才會用到ModuleA呢（比如說使用者互動的事件）？在最一開始的時候就打包進去不是一個好主題。我們需要一個方式告訴我們的應用程式何時該下載這個部份的程式。

這也就是動態載入所能解決的問題！現在來看看以下例子：

```js
//main.js
 
const getModuleA = () => import('./module_a.js')
 
// invoked as a response to some user interaction
 
getModuleA()
 
.then({ doStuff } => doStuff())
```

來快速看一下會發生什麼事：

我們寫一個function回傳import()函式以取代直接引入module_a.js。現在webpack動態import進來的部份程式，除非函式被呼叫否則程式不會被import並下載。之後這段程式將只會在特定的操作中被下載下來。

透過動態載入我們基本上隔離了特定的葉節點（在此例中為module_a），他會在我們決定載入的時候才加入依賴樹並下載（這暗示了我們同時也切割了module_a.js當中依賴的module）

我們來看另一個更好的例子來說明這個機制。假設我們有4個檔案：main.js、module_a.js、module_b.js、module_c.js，來了解動態載入是如何運作的，我們只需要main和module_a的原始碼：

```js
//main.js
 
import ModuleB from './mobile_b.js'
 
const getModuleA = () => import('./module_a.js')
 
getModuleA()
 
.then({ doStuff } => doStuff()
 
)
 
//module_a.js
 
import ModuleC from './module_c.js'
```

把module_a作為一個動態載入用的module可以切割掉依賴樹中的module_a和他的子節點。當module_a動態載入時會連同裡面import的檔案一起載入。換句話說，我們可以建置了一個新的依賴圖的進入點。

![](/images/notebook/legacy/c2d27e34175fe93737cd.png)

這就是這個依賴圖和打包會長的樣子。

### Lazy loading Vue components

我們現在知道lazy loading是什麼並且為何需要了，現在是時候來看我們可以如何在Vue應用程式當中使用。

好消息是，透過以上語法可以超級簡單的載入整個SFC（單文件Component-也就是.vue檔）、包含css和html。

```js
const lazyComponent = () => import('Component.vue')
```

…只要這樣就搞定了！現在component只有在你呼叫他時才會載入。以下是最常使用動態載入Vue component的方法：

* 把import寫成可呼叫的函式

```js
const lazyComponent = () => import('Component.vue')
 
lazyComponent()
```

* component被呼叫後渲染

請注意lazyComponent函式只有在呼叫他時才會渲染進template。

```html
<template>
<div>
<lazy-component />
</div>
</template>
<script>
const lazyComponent = () => import('Component.vue')
export default {
components: { lazyComponent }
}
</script>
```

例如：

```html
<lazy-component v-if="false">
```

這樣寫的話他是不會加入到dom當中的（但當v-if參數變為true時就會載入，這也是個不錯的方法）

### 小結

Lazy loading是一個使你的網站更有效減少容量的好方法，我們學到如何在Vue component當中使用lazy loading。下一個篇文章我會告訴你如何使用vue-router和動態路由減少你的Vue應用程式容量。

## Part 2 – Lazy loading路由及第三方庫的反向模式(anti-pattern)

在前一篇文章當中我們學到了什麼是切割程式碼、它是如何運作的以及在Vue.js應用程式中如何和lazy loading一起使用。現在我們將稍微深入一點的來看程式碼，並學習在Vue.js應用程式中最實用的程式碼切割的模式。

這個系列是基於從[Vue Storefront](https://github.com/DivanteLtd/vue-storefront)的效能優化處理中所學到的。透過以下的技術我們可以砍掉我們最初的打包的70%，使他載入在一眨間就完成。

### 成長中的應用程式的問題

Vue-router是一個可以切割我們的網頁應用程式成為各別頁面。各自的頁面對應到特定的URL路徑。

有了這個想像之後我們有以下一個簡單的作品集程式架構：

![](/images/notebook/legacy/a576233dba77fbfca44e.png)

![](/images/notebook/legacy/2fd99e03099eac7cad04.png)

你可能會注意到我們還不需要app.js打包中依賴的Home.vue和About.vue(以及其依賴的lodash)、並且無論使用者訪問哪個路由都會把他們下載下來。這很浪費下載流量而且浪費時間！

如果只是多下載一個程式這沒什麼大不了的，但你可以想如果這個程式成長得愈來愈大，每一個額外增長代表在初次訪問時需下載更大的打包。

就算只有1秒的時間是足以讓使用者分心並有可能離開我們的網站，這是不能夠被接受的！

![關於性能及人類感知的演講投影片 (Ilya Grigorik)](/images/notebook/legacy/2ea5681df73c81d9a7c6.png)

圖：關於性能及人類感知的演講投影片 (Ilya Grigorik)
https://www.youtube.com/watch?v=7ubJzEi3HuA

##使用vue-router以路由為基準的程式碼切割

為解決決這個情況 ，我們只需要使用前一篇文章學到的import語法、根據每個路由來切割打包。

就像Vue.js裡其他的任何東西 – 超級簡單。要取代掉直接地import component到路由物件裡，我們只需要貼上動態import的function就可以了。Component只有在路由要對應過去時才會被下載下來。

所以取代像這樣子直接載入路由component：

```js
import RouteComponent form './RouteComponent.vue'
const routes = [
  { path: /foo', component: RouteComponent }
]
```

我們需要在這個路由上的入口處加入能產生新的打包的動態import。

```js
const routes = [
  { path: /foo', component: () => import('./RouteComponent.vue') }
]
```

來看這個動態import的打包和路由長什麼樣子：

- app.js – 在每個路由中都需要的主要的app入口處打包(main.js)及函式庫/component。
- home.js – 首頁的打包，只有在路由進入時才會下載下來。
- about.js – 「關於」頁面（及他的依賴lodash），只有在路由進入時才會下載下來。

*打包名稱並不是戴正由webpack產生出來的而是為了方便理解而已。Webpack實際產生出來的名稱會像是0js 1.js，要依據你的webpack config設定而定。

這個技巧對幾乎所有的應用程式都是足以應付、都能有非常好的效果。

基於路由的程式碼切割在許多場合都能夠解決所有你的效能問題，幾乎所有的應用程式都能使用而且只花不到幾分鐘的時間就能實作！

##Vue生態體系中的程式碼切割

你可能會使用Nuxt或vue-cli來建置你的應用程式。這種情況就需要知道這兩者關於程式碼切割的自訂行為。

- **在vue-cli 3** 所有的lazy loading模塊都預設是預加載(prefetch)的。我們稍後會學習預加載的使用。如果你希望知道更多關於vue-cli的預加載可以參考這邊。
- **在Nuxt** 如果使用Nuxt的路由系統，則所有的頁面路由都是程式切割的開箱即用。

現在來看看非常給力且常見的反向模式(anti-pattern)可以帶給你的路由為基準的程式碼切割更厲害一些。

##函式庫打包反向模式

函式庫打包(vendor bundle)非常常見使用node_modules把全部各自獨立的js檔案全部納入。

僅管這個方法把全部的依賴放進同一個地方很吸引人，但這依然有綁住所有路由在一起的問題。

![](/images/notebook/legacy/9c23af73696fa941a86f.png)

你看到問題了嗎？僅管我們只有在其中一個路由當中需要lodash（是當中的依賴），vendor.js綁定了全部的依賴所以無論如果他一定會被下載。

在同一個檔案綁定全部的依賴聽起來很誘人但也會導致你的應用程式會一次讀取全部的檔案。我們有更好的方法！

維持我們剛剛使用基於路由的程式碼切割足以確保只有需要時才下載，但這會導致一些程式碼的重覆。

我們假設Home.vue也需要lodash。

![](/images/notebook/legacy/bd4aaf97e30832535f85.png)

這個情況下從 /aboug (About.vue) 導向到 / (Home.vue) 會導致lodash下載了兩次。

這仍然比下載了一堆多餘的程式碼還要來的好，但如果我們已經有了這些依賴而不重覆利用是很沒意義的沒錯吧？

這也就是webpack [splitChunksPlugin](https://webpack.js.org/plugins/split-chunks-plugin/)也以幫助我們的地方。只要在webpack config當中增加幾行，我們就可以把分散的打包中常用的依賴給聚起來，使他們可以被分享。

```js
// webpack.config.js
optimization: {
  splitChunks: {
    chunks: 'all'
  }
}
```

在模塊的屬性中我們只要告訴webpack哪個模塊程式應該被優化。設定這個屬性為all表示他應該優化所有的模塊。

你可以閱讀更多相關的處理 [webpack docs](https://webpack.js.org/guides/code-splitting/#prevent-duplication)

### 結語

透過路由切割你的程式是其中之一最棒（也最簡單）的方法來維持初始下載打包小的容量。下一個部份我們會學習關於其他較細的部份（Vuex stores以及獨立的component），從主要的打包中砍掉並延遲載入。

## Part 3 – Lazy loading Vuex模組

在前一個部份我們學到可以大幅度改善你的應用程式效能的模式 – 透過路由來切割程式碼。僅管透過路由切割程式碼是非常有幫助的但仍然有很多程式是使用者剛進去網站時使用不到的。在本篇我們將專注在我們的狀態管理的程式碼切割 – Vuex modules。

這個系列是基於從Vue Storefront的效能優化處理中所學到的。透過以下的技術我們可以砍掉我們最初的打包的70%，使他載入在一眨間就完成。

### 兩種Vuex modules的類型

在我們繼續往下看Vuex modules的lazy loading之前，這裡有一件很重要的事你需要注意的。你需要了解有哪些可以注冊Vuex modules的方法以及他們的優缺點。

**靜態Vuex modules**在store初始化時就宣告了。以下是個明確的建置靜態模組的範例：

```js
// store.js
import { userAccountModule } from './modules/userAccount'
const store = new Vuex.Store({
  modules: {
    user: userAccountModule
  }
})
```

上面的程式碼會new一個新的Vuex Store以及靜態模組userAccountModule。靜態模組不能被取消註冊（並且不能被延遲註冊）以及他們的架構（這是不是指state）在初始化後不能被改變。

僅管這個限制對於大部份的module來說不會是個問題，並且把全部的modules宣告在同一個地方對於讓資料的關聯在同一個地方維持一致是很好用的，但這個方法還是有些缺點。

假設我們的應用程式裡有一個管理者儀表板以及它專用的Vuex module。

```js
// store.js
import { userAccountModule } from './modules/userAccount'
import { adminModule } from './modules/admin'
const store = new Vuex.Store({
  modules: {
    user: userAccountModule, 
    admin: adminModule
  }
})
```

你可以想像這樣子的module可以是非常大的。即使儀表板只有限於一部份的使用者使用（也可想成只在特定的/admin路由），由於統一註冊了靜態Vuex module它所有的程式碼還是會在主要的打包程式當中。

![](/images/notebook/legacy/47c94e68f1c2afc0dff6.png)

這個情況當然不是我們所要的結果，我們需要一個方法只在/admin路由當中讀取它。你可能已經猜到靜態module不能滿足我們的需求，全部的靜態module必須在Vuex Store被建置時被註冊、因此無法延後註冊的時機。

這也就是動態module幫的上忙的地方！

動態module和靜態的相反，它可以在Vuex store創建之後才註冊。這個聰明的特性暗示我們不需要在應用程式初始化時做動態載入，可以打包成不同的模塊或在需要的時候才延遲載入。

首先，我們來看前面所說的動態註冊admin module會長什麼樣子。

```js
// store.js
import { userAccountModule } from './modules/userAccount'
import { adminModule } from './modules/admin'
const store = new Vuex.Store({
  modules: {
    user: userAccountModule, 
  }
})
store.registerModule('admin', adminModule)
```

取代直接把adminModule物件直接放入store裡的property，我們在store建置出來後使用registerModule方法註冊它。

動態註冊並不需要更改module本身，所以所有的Vuex module都可以直接註冊或動態的註冊。

當然，以目前這個寫法來說動態註冊module沒有給我們任何優勢。

### 正確地切割Vuex module程式碼

延續前面的討論，現在我們知道如何動態地註冊admin module、所以我們當然可以試著把它放入/admin路由的綁定。

我們暫且停一下，來簡單理解一下我們的應用程式的運作方式。

![](/images/notebook/legacy/6a1778fd39c2d6cd8381.png)

```js
// router.js
import VueRouter from 'vue-router'
const Home = () => import('./Home.vue')
const Admin = () => import('./Admin.vue')
const routes = [
  { path: '/', component: Home },
  { path: '/admin', component: Admin }
]
export const router = new VueRouter({ routes }) 
```

我們來瞧瞧這裡做了什麼！

我們在Admin.vue(路由/admin)的mounted裡import並註冊admin store。稍後程式裡我們會在使用者離開的時候把module給取消註冊，以避免同樣的module被重覆註冊。

現在因為admin module被import到Admin.vue裡取代原本的store.js，它現在和程式切割了的Admin.vue綁定在一起。

![](/images/notebook/legacy/6c37fd9e801496c8e9c0.png)

> **重要注意：**如果你使用SSR模式請確保你把註冊module放在mounted裡，否則的話當beforeDestory鈎子沒設好可能會導致memory leak。

現在我們知道如何使用動態Vuex module註冊，來分開我們特定路由的module到適當的打包中。我們來看看稍微複雜一點的使用方式。

### Lazy loading Vuex modules

假設我們有的Home.vue有一個推薦區塊，我們希望能展示關於我們服務的正面意見。因為數量會很多所以我們不需要在使用者進入後就馬上呈現，比較好的展示方式是當使用者看的時候。我們可以增加一個”檢視推薦”按鈕當點擊時我們才把推薦內容給呈現出來。

![](/images/notebook/legacy/f08067bdab1e1db4195c.png)

為儲存推薦資料我們需要再一個Vuex module命名為testimonials。這個module負責呈現前一個加入的推薦並新增一個新的，我們不需要知道關於它實作的細節。

我們希望testimonials module只有在使用者點擊按鈕的時候下載，因為在這之前並不需要它。我們來看這個動態import及註冊module的功能該如何實現。Testimonials.vue是Home.vue裡的一個子component。

![](/images/notebook/legacy/afface75901ffc7e01fa.png)

![](我們來快速檢視一下程式碼。

當使用者點擊「檢視推薦」按鈕時呼叫getTestimonials()方法，getTestimonialsModule()負責取得testimonials.js。當promise被resolved（代表module被讀取）我們動態地註冊它並dispatch action來取得推薦內容。

感謝動態import，testimonial.js的內容被綁定到分開的檔案中，只有當getTestimonialsModule方法被呼叫時才會被下載。)

![](/images/notebook/legacy/6bb5e2f67b271d0757fc.png)

當我們需要離開管理者平台，我們在剛才的beforeDestory生命週期鉤子裡有取消註冊，所以如果我們要再次進入路由它不會被重覆。

### 總結

僅管理靜態Vuex module註冊足以應付大部份的使用情況，還是有些特定情況我們還是需要動態註冊。

- **如果只有在特定路由需要module**，那我們可以在特定的路由component裡動態的註冊，所以不會出現在主要的打包當中。
- **如果只有在特定的互動需要module**，那我們需要在特定的方法中合併動態註冊module和動態import、延遲載入。

切割Vuex module程式碼是一個強而有力的工具。在應用程式裡處理得愈多資料相關的操作，表示能節省愈多的打包容量。

在下一篇我們將學習如何延遲載入獨立的component，以及更重要的是哪個component應該被延遲載入。