---
slug: "/javascript/book-frontend-30"
title: "[讀書] 前端三十 - 讀書筆記"
tags: ["javascript"]
category: "JavaScript"
collection: "technical"
kind: "article"
order: 999
source: "docs/JavaScript/[讀書] 前端三十 - 讀書筆記.md"
draft: false
publishedAt:
updatedAt:
---

## 先講一下我的心得

這本書我覺得他選的主題算是蠻有參考性的，但有些章節的內容感覺太過省略，會造成閱讀上有種「不太精確」的感覺。


## Chapter01 你最近學會了什麼新東西？

開發者技能樹 - [Roadmap - Frontend Developer](https://roadmap.sh/frontend)

[State of Javascript](https://github.com/StateOfJS)


電子報：

[TechBridge Weekly](http://weekly.techbridge.cc)

[StarBugs Weekly](https://weekly.starbugs.dev)


## Chapter02 script tag 加上 async & defer的功能及差異？

`<script> `預設資源下載時瀏覽器會暫停解析 HTML

加上屬性後：

`defer`：等DOM Tree載入完畢後、DOMContentLoaded事件執行之前觸發

`async`：當`<script>`請求的資源下載完成時，瀏覽器會暫停解析HTML並開始執行該 script



## Chapter03 Reflow及 Repant是什麼？

`Reflow`指的是重新執行渲染的 `Layout`階段。由Render Tree根節點出發，逐步計算出每一個元素的位置、大小、以及是否被其他元素擋等屬性，只要牽扯到以下屬性的操作，都會觸發 `Reflow`：

* 設定 CSS屬性
* 使用者進行互動（調整瀏覽器視窗大小、輸入框的內容變更）
* Javascript（DOM操作、動態載入CSS、取得元素的 Layout相關屬性數值）

由於 Layout的計算相對於其他步驟需要較多運算效能，當有 Reflow的需求時瀏覽器不會馬上執行，而是將他放到內部的等待隊列中，當需要時（每一 frame或程式需要讀取時），才將累積未處理的變更批次執行。

`Repaint`指的是重新執行渲染過程的 `Paint`階段，經過了 Layout的計算，`Paint`階段的任務是要把計算結果轉換成螢幕上的實際像素顯示。

CSS屬性與 Reflow、Repaint的觸發對照表：

https://csstriggers.com

提升效能的一些方法：

* CSS屬性替換
  * 用 translate取代 top、right等定位屬性
  * 盡量不要用 table排版

* 當需要 Javascript修改樣式時，盡量批次生效
  * 替換 class name而不是對 DOM的 style逐條設定

* 減少影響範圍
  * 盡量避免 DOM、CSSOM Tree的層級過深，以加快 Layout的計算
  * 改動頻繁的地方建立單獨的圖層 (Stacking Context)，降低 Layout計算的複雜度



## Chapter04 z-index與 Stacking Context的關係是什麼？

positioned box指的是 `position`屬性不為預設值 (`static`)的元素，`z-index`即為指定元素在「堆疊環境」(Stacking Context)中的堆疊層級

**`z-index`只在他所在的「堆疊環境」中生效**



## Chapter05 元素選取器是如何運作的？

CSS在被瀏覽器載入後，瀏覽器會將他們解析成 CSSOM Tree，並嘗試與 HTML經過解析而成的 DOM Tree相互疊加，成為Render Tree

瀏覽器套用樣式的順序：

* 瀏覽器的預設值
* 瀏覽器的使用者偏好設定
* 開發者定義的 CSS
* inline style
* 有加上 !important的樣式屬性

撰寫 CSS時也有幾個地方可以稍微留意可提升效能：

* 由於樣式規則的目標屬性會分組存放，id選取器效能非常高，前提是不能與其他條件混用
* 不要寫過深的 CSS樣式規則
* 能不用 inline style就不要用，除了難維護之外，由於是存在 DOM Tree上，無法事先與其他樣式合併計算，效能也會大打折扣



## Chapter06 請你在旁邊的白板寫個快速排序演算法

快速排序法

熱門且廣泛應用的排序法，相對簡單的實作就可以達到平均時間複雜度 O(n log n)

```js
function quickSort (arr) {
  if (arr.length < 2) return arr
  const [p, ...ary] = arr
  const left = [], right = []
  ary.forEach(c => {
    if (c < p) left.push(c)
    else right.push(c)
  })
  return [...quickSort(left), p, ...quickSort(right)]
}
```

氣泡排序法

最簡單的排序法，時間複雜度 O(n2)

```js
function bubbleSort (arr) {
  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[i]) {
        [arr[j], arr[i]] = [arr[i], arr[j]]
      }
    }
  }
  return arr
}
```


## Chapter07 瀏覽器 DOM元素的事件代理是指什麼？

如果事件監聽器註冊在每一個元素上，當數量越來越多時，瀏覽器也就建立了越來越多的監聽器，無形中便耗費了大量記憶體，造成額外的效能負擔；反之使用事件代理的做法，利用event-bubbling的機制，將監聽員註冊在外層的元素中（或根節點中），瀏覽器只需要負擔一組事件監聽器的消耗。



## Chapter08 請寫出間隔一秒印出 1, 2, 3, 4, 5的程式碼

Javascript是一個單執行緒的程式語言，為了避免執行緒被占用，造成使用者畫面卡死，Javascript發展出了**事件迴圈 (Event-Loop)**的機制，包含：

* Stack：就是 function的 call stack，當執行函式又呼叫了其他函式便會往上堆積；反之，在 function執行完成後，便從堆疊移除
* Queue：尚未處理的任務，當 Stack清空時，事件迴圈會將 Queue的第一項搬去Stack，並開始執行
* Heap：代表其他留給 Javascript使用的記憶體位置，儲存各個 function中建立的變數、物件之類的

由於 setTimeout接受的回呼函式參數會被放置到 Queue中，等待下一個事件循環開始才執行，屆時 for迴圈已經執行完畢

錯誤寫法：

```js
for (var i = 0; i < 5; i++) {
  window.setTimeout(function () {
    console.log(i)
  }, 1000)
}
```

可改為：

```js
// 改使用let
for (let i = 0; i < 5; i++) {
  window.setTimeout(function () {
    console.log(i)
  }, 1000 * i)
}
```


## Chapter09 什麼是閉包

以實際開發情境來做解釋：**「閉包是一種把外層變數包在內層保留，以供後續使用的機制」**

以定義來解釋的話，在 MDN及 Wiki中都有提到類似的定義：「閉包是由函式和與其相關的參照環境組合而成的實體」，而實際上在 Javascript底層的行為中，每一個函式建立時都會紀錄他所在的作用域環境，因此也可以說，所有函式都是閉包。

```js
function add (num) {
  function func (x = 0) {
    return num + x
  }
  return func
}
let addFive = add(5)
console.log(addFive(8)) // 13
```


## Chapter10 一般函式與箭頭函式的差異

箭頭函式的完整名稱是「箭頭函式運算式」(Arrow Function Expression)

this：

* 箭頭函式中的 this依據函式在哪裡被建立來決定
* 一般函式是依照執行時被呼叫的地方決定



## Chapter11 如何處理網頁中的非同步

回呼函式 (Callback Function)常用情況：

* 網頁中為了與使用者互動而註冊的事件監聽器
* Web Api提供的各種功能如 setTimeout、XMLHttpRequest

Callback Function會被擺到 Queue的末端，在等待了指定的時間間隔後，才會把他放到 Stack執行

ES6 Promise問世後，（在熟悉度不足的開發者手上）**Callback Hell**變成 「**Promise Hell**」

**async/await是 Promise 和 Generator Function尬在一起的語法糖**，可以將非同步事件用類似一般程式的同步語法來依序處理



## Chapter12 為什麼 typeof new Array() === 'object' ?

Javascript的七種型別：number、string、boolean、null、undefined、object、symbol

:::note
這個章節的內容覺得寫得不是很精確
:::


## Chapter13 為什麼判斷相等時不能用雙等號？

`==` 一般相等：會先將比較的雙方的數值轉型成同型別，之後才開始做比較

`===` 嚴格相等：值要相等、型別也要相等



## Chapter14 深拷貝是什麼？如何實現？

物件拷貝（淺拷貝，只能拷貝到第一層）：

* Object.assign
* spread operator

深拷貝

* JSON.parse(JSON.stringify())

JSON.stringify 的問題：

* 會自動忽略屬性 key為 symbol的值
* 值為 undefined時也會被跳過不管
* 循環參考時會出現 stack overflow

作者自己寫的深拷貝

```js
function deepCopy (obj, cache = new WeakMap()) {
  // 基本型別 & function
  if (obj === null || typeof obj !== 'object') {
    return obj
  }
  
  // Date 及 RegExp
  if (obj instanceof Date || obj instanceof RegExp) {
    return obj.constructor(obj)
  }
  
  // 檢查快取
  if (cache.has(obj)) return cache.get(obj)
  
  // 使用原物件的 constructor
  const copy = new obj.constructor()
  
  // 先放入 cache 中
  cache.set(obj, copy)
  
  // 取出所有一般屬性 & 所有 key 為 symbol 的屬性
  [
    ...Object.getOwnPropertyNames(obj),
    ...Object.getOwnPropertySymbols(obj)
  ].forEach(key => {
    copy[key] = deepCopy(obj[key], cache)
  })
  
  return copy
}
```


## Chapter17 為什麼現在的前端都在用「框架」？

早期 jQuery能幫助開發者解決瀏覽器差異的問題

jQuery的缺點：

* 難以維護，樣式和邏輯耦合度高
* 頻繁操作 DOM效能低落

現代前端框架的優點：

* 資料與 UI分離
* 模組化的 UI
* 提升效能。現代的主流框架幾乎都包含了 Virtual DOM的概念，也就是用 JavaScript物件來表達當前的頁面結構，讓資料變動造成的效能耗損盡可能降低
* 豐富的開發者生態


## Chapter18 為什麼網站要做成 SPA？SSR的優點是什麼？

MVC：Model、View、Controller

SPA的缺點：第一次載入的畫面載入較久

Isomorphic Javascript：第一畫面是 SSR，其他畫面是 CSR (Client-Side Rendering)。這種同一份程式碼可以分別跑在前端與後端的程式設計叫做「同構」(Isomorphic Javascript、或 Universal Javascript)


## Chapter19 如何實現網站 SEO？

* SPA會造成 SEO慘不忍睹

* HTML5的語意化標籤能讓爬蟲更理解網頁結構
  * main、header、footer、aside、nav、article、time等語意化標籤取代 div
  * 段落標籤 (h1~h6) 用來表達頁面資訊層級。每個頁面都應該要有唯一的 h1標籤代表主標題，以及數個 h2代表副標題
  * 每個 img應該都要有 alt屬性

* 良好的手機版頁面對網站的 SEO分數會有巨大的幫助
* 使用 HTTPS作為網站的通訊協定
* 在地化、語意化的網址也是對 SEO有幫助
* 網站回應速度

如果網頁能額外提供更多的資訊，讓搜尋引擎能更理解網站的能內，在搜尋引擎渲染**搜尋結果頁 (Search Engine Results Pages, SERP)** 也可以產生相對應的內容。Google 推薦使用` JSON-LD`語法來標紀內容，可以在不必更動 HTML的情況下獨立成一段程式碼。



## Chapter20 如何提升網站效能

* 減少資源量：js、css、圖檔壓縮
* 只拿必要的檔案
  * 只載入即將要顯示的內容的資源，不用在頁面初始化時一口氣全部下載
  * 可使用圖片延遲加載 (lazy loading)

* 優化渲染
  * css盡量使用樣式七性的變動來取代排版屬性的變動，避免告成 Reflow，還有要注意圖層數量
  * 讓出 JavatScript的主執行緒，可使用 Web Worker
  * 程式來執行動畫效果時，用 requestAnimationFrame來取代 setTimeout、setInterval



## Chapter21 用過 Webpack之類的打包工具嗎？為什麼需要？

前端工程化的起點是從 node.js問世、套件管理工具 npm誕生開始

:::note
這個章節的內容覺得寫得不是很精確
:::

### Grunt

能自由的控制自動化流程，讓開發者可以輕易的完成一些常見的任務

### Gulp

也是一個自動化流程控制的工具。Grunt是每個插件各別去設定，而 Gulp透過管道 (Pips)及串流 (Streams)能夠更容易的管理流程

### Webpack

上述工具只能針對檔案類型（或者指定檔案）各別做處理，Webpack則是定義出專案的 entry及output，依照相依的檔案打包成指定的 output格式。除此之外，也可以加上 loader、plugins對各種檔案格式做進一步的處理。



## Chapter22 為什麼跨域請求會產生錯誤？如何處理？

「不同來源」指的是目標資源與當前網頁的網域 (domain)、通訊協定 (protocol)、或通訊埠 (port)只要有任一項不同，就算是不同來源

解法：

* `JSONP`算是一種 Hack方法

* 最標準的解法是透過 W3C規範的「跨來源資源共用 (Cross-Origin Resource Sharing, CORS)，透過server端在 HTTP Header的設定，讓瀏覽器能取得不同來源的資源。server端需要在回應的 Header加上如 Access-Control-Allow-Origin、Access-Control-Request-Method、Access-Control-Request-Headers等設定

* 另外一種解法是開發者自己在同源的位置建立代理伺服器


## Chapter23 網頁的快取機制是怎麼運作的？

* 瀏覽器快取

* 透過 JavaScript操作 Web Storage API

* CDN (server-side)

* server-side設定 Header 的 Cache-Control

## Chapter24 請說明一下 npm的套件管理機制

* npm依照 package.json所羅列出來的套件清單，逐一下載指定的套件

* npm 要求套件開發者透過語意化版本 (Semantic Versioning)的規範來定義套件版本

* package.json只會指定一個可接受的套件版本範本範圍，package-lock.json中指定要的套件版本

* 由於套件本身也是專案，npm會整理各套件個別需要下載的所有版本，反覆執行，最後產出整個專案所使用的套件結構樹 (package-lock.json)


## Chapter25 Node.js與 JavaScript的關係是什麼？

Node.js的官網介紹

> Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine.

Node.js就是一個以 V8為核心（也是Chrome使用的 Javascript引擎）、能夠執行 JavaScript的環境

優點：**JavaScript是一個事件驅動的語言，透過事件迴圈的機制，能讓執行緒幾乎不會卡住**，使得JavaScript撰寫的 Server 端程式非常適合用來接收高併發 (High Concurrency)的請求。傳統的server中，每個request都會產生一個新的執行緒，很容易就會應接不暇而無法服務不斷湧入的新流量

但如果是商業邏輯複雜的後端程式，效能瓶頸不在流量的服務就不適合 Node.js。反之，高流量影處理邏輯不太複雜就很適合 Node.js


## Chapter26 API設計拿資料要透過 POST，會有什麼問題嗎？ 

### HTTP Method

Request Methods：GET, HEAD, POST, PUT, PATCH, DELETE, OPTION

### RESTFul API

RESTFul API只是一種設計風格

REST是「表現層狀態轉換」(Resource Representational State Transfer)的縮寫，透過動詞（HTTP Methods）、名詞（URI/URL，代表目標資源）、內容型態（回應的內容，HTML、XML、JSON等），讓無狀態的網路通訊能藉由REST語意化的設計攜帶所有的狀態資訊

使用 POST會有的問題：

* **瀏覽器預設會對 GET、HEAD兩種方法做快取**，如果是POST的話就不會做快取

* Google的爬蟲在爬搜網站時，如果遇到需要透過 POST取得的資源，為了避免造成發出 POST請求會造成意外的行為或副作用（修改到資料），通常就會自動略過


## Chapter27 Cookie & Session是什麼？

HTTP是一種無狀態的通訊協定，HTTP規範了一套讓 server-side能得知使用者狀態的方法

Cookie是一個瀏覽器中額外的特別儲存空間，在裡面的資料會自動帶入到前端的 JavaScript、及發送給後端的 request header


## Chapter28 HTTP和 HTTPS的差別是什麼？

HTTPS一樣是透過 HTTP的方式進行通訊，但通訊過程會使用 SSL/TLS進行加密。

會兼顧安全性及傳遞速度，所以並非完整的通訊過程都使用非對稱加密，所以實際的通訊過程中，一開始會先透過公開金鑰加密


## Chapter29 網站常見的資安問題有哪些？

### SQL InJection

解法：透過參數化查詢來避免前端輸入的資料直接與 SQL查詢句組合，並給予適當的輸入檢查、插入跳脫字元、嚴格設定應用程式權限

### XSS (Cross-site scripting)

也叫做 JavaScript Injection，指的是網站被惡意使用者植入了其他程式碼，通常發生在網站將使用者輸入的內容直接放到網站內容時

解法：在所有使用者可以輸入資料的地方都做適當的處理，讓惡意程式碼不被執行，而是被解析成一般的字串即可

### CSRF (Cross Site Request Forgery)

一種利用 Cookie及 Session認證機制的攻擊手法

解法：Check Referer、CSRF Token、SameSite Cookie

### JSON Hijacking

獲得使用者權限（CSRF）、並呼叫取得資料的 API，再加上改寫原生的Javascript物件，就可以竊取使用者的機敏資訊

解法：透過 CSRF Token保護權限

