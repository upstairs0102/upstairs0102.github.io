---
slug: "/javascript/book-008-javascript"
title: "[讀書] 008天重新認識Javascript - 讀書筆記"
tags: ["javascript"]
category: "JavaScript"
collection: "technical"
kind: "article"
order: 999
source: "docs/JavaScript/[讀書] 008天重新認識Javascript - 讀書筆記.md"
draft: false
publishedAt:
updatedAt:
---

## Day1 - JavaScript 的起源與基礎（上）

### 變數與資料型別

強型別指的是程式所定義的變數型別等於變數在執行時期的型別

「變數沒有型別，值才有」

Javascript分為「基本型別」(Primitives)與「物件型別」兩大類

基本型別有：`string`, `number`, `boolean`, `null`, `undefined`, `Symbol`

typeof上的混淆：

```js
typeof null // 'object' but真正的型別是null
typeof window.alert // 'function' but真正的型別是object
```

如何判斷是否為陣列

```js
Array.isArray([])
```

### 運算式與運算子

Javascript的語法可分為Statement和Expression兩大類

* 敘述句 (Statement)：執行某個動作，像是變數的宣告、迴圈和if判斷式等
* 運算式 (Expression)：會產生一個「值」

「敘述句」和「運算式」這兩個名詞我看不其他的中譯，也有看過「陳述式」、「表達式」，所以我覺得就用英文就好了…

在Expression中會提供數值使用「運算子」(Operator)進行運算

有算術運算子(Arithmetic Operator)、指派運算子(Assignment Operator)、位元運算子(Bitwise Operator)…等一堆類型的運算子

書裡有一堆不同型別搭配運算子的說明，也包含型別自動轉型的規則，但我覺得Javascript的自動轉型太雷了，就避開即可

`==`和 `===`的差別在於前者可自動轉型後者不可



## Day2 - JavaScript 的起源與基礎（下）

逗號運算子：

```js
var a = 10
var b = 10
// 等同 ↓↓↓
var a = 10, b = 10
```

但寫成這樣會有點不太一樣

```js
var a = b = 10
// 等同 ↓↓↓
b = 10
var a = b
```

`b`會變成沒有 `var`的全域變數

邏輯運算子：

`AND(&&)`、`OR(||)`、`NOT(!)`

**注意！這三個當中只有 `!`是一定會回傳 true或 false，透過 `&&`或 `||`所產生的值不一定會是Boolean，而是兩者其中之一**

`&&`和 `||`需要在 `if()`條件式裡二次判斷後，才能保證回傳Boolean

```js
if (a && b) { ... }

if (a || b) { ... }
```



Falsy與Truthy：Javascript的值透過ToBoolean後的兩種結果，一種為回傳True的值，一種為回傳False的值

會回傳 False的值：

* Undefined
* Null
* +0, -0, NaN
* 空字串 "" 或 '''

其他都是回傳 True



### 函式的基本概念

可以把函式作為一種可以被呼叫(be invoked)的特殊物件

常見的定義函式的方式有這幾種：

* 函式宣告 (Function Declaration)
* 函式運算式 (Function Expressions)
* 透過 new Function關鍵字建立函式

函式宣告 (Function Declaration)

```js
function 名稱 ([參數1, 參數2,  ...]) {
  // 做某事
}
```

函式運算式 (Function Expressions)

```js
var square = function (number) {
  return number * number
}
```

透過 new Function關鍵字建立函式

```js
var square = new Function('number', 'return number * number')
```

↑ 較少用的做法，且效能較差



### 變數的Scope與Hoisting（提升）

在 ES6之前變數有效範圍的最小單位是以 function做為分界的



```js
var x = 1

var doSomeThing = function (y) {
  console.log(x) // undefined
  
  var x = 100
  return x + y
}

console.log(doSomeThing(50)) // 150
console.log(x) // 1
```

瀏覽器中等同於

```js
var x = 1

var doSomeThing = function (y) {
  var x
  console.log(x) // undefined
  
  x = 100
  return x + y
}

console.log(doSomeThing(50)) // 150
console.log(x) // 1
```

Hoisting：如果在 Scope內有透過 `var`宣告變數，在 `var`宣告之前就使用了該變數，這時候 Javascript就會把宣告的語法拉到這個 Scope的最上面

建議：變數宣告都盡可能放在 Scope最上方、或者使用 `let`取代 `var`

`let` / `const` 的 scope 是「區塊」，使用 `{ }`來區隔

function 的 Hoisting（提升）：

```js
square(2) // 4
function square (number) {
  return number * number
}
```

```js
square(2) // TypeError: square is not function
var square = function (number) {
  return number * number
}
```



### 傳值與傳址

複製「基本型別」是傳值 (Pass by Value)

複製「物件型別」是傳址 (Pass by Reference)

```js
// coin1和 coin2不是同一個實體 (Instance)
var coin1 = { value: 10 }
var coin2 = { value: 10 }
coin1 === coin2 // false
```

```js
var coin1 = { value: 10 }
var coin2 = coin1
coin1 === coin2 // true
```

Pass by Sharing

```js
var coin1 = { value: 10 }
function changeValue (obj) {
  obj = { value: 123 }
}
changeValue(coin1)
console.log(coin1) // coin1仍然是 { value: 10 }
```

當 function的參數被重新賦值的時候，外部變數是不會被影響的

**物件是可變的 (mutable)，當物件更新時，會影響到所有參考這個物件的變數。但當賦予新值時，卻會產生新的實體**

**基本型別是不可變的 (immutable)，當更新了某個基本型別的值，不會影響到那個值的副本**



## Day3 - 前端工程師的主戰場：瀏覽器裡的 Javascript(上)

Javascript（或者說 ECMAScript標準）並沒有提供網頁的操作方法。

瀏覽器上的 Javascript實際上包含了：

* Javascript核心（以ECMAScript標準為基礎）
* BOM（Browser Object Model，瀏覽器物件模型）
* DOM（Document Object Model，文件物件模型）

**BOM是瀏覽器所有功能的核心，與網頁的內容無關，BOM的核心是 `window`物件。**

`windw`物件扮演著兩種角色：

* ECMAScript標準裡的「全域物件」(Global Object)
* Javascript用來與瀏覽器溝通的窗口

**DOM是一個將HTML文件以樹狀的結構來表示的模型，而組合起來的樹狀圖稱之為`DOM Tree`，其根節點就是 `document`**

BOM完全依賴瀏覽器本身實作無標準規範，而 DOM有 W3C所制定的標準來規範



## Day4 - 前端工程師的主戰場：瀏覽器裡的 Javascript(下)

事件流程 (Event Flow)指的就是網頁元素接收事件的順序

事件流程可以分成兩種機制：

* 事件冒泡 (Event Bubbling)
* 事件捕獲 (Event Capturing)

event.stopPropagation()範例：

```html
<label class="lbl">
  Label <input type="checkbox" name="chkbox" id="chkbox">
</label>
```

```js
// label
var lbl = document.querySelector('.lbl')
// chkbox
var chkbox = document.querySelector('#chkbox')

lbl.addEventListener('click', function (e) {
  console.log('lbl click')
})

chkbox.addEventListener('click', function (e) {
  console.log('chkbox click')
})
```

點擊 label時，由於瀏覽器會自動把 click事件帶給 checkbox，然後由於事件冒泡又再度把 click事件傳遞至 label上：

```js
"lbl click"
"chkbox click"
"lbl click"
```

所以可以在 checkbox的 click事件加上 e.stopPropagation()

```js
// 略
chkbox.addEventListener('click', function (e) {
  e.stopPropagation()
})
```



## Day5 - 深入理解 JavaScript核心：函式、物件、原型鍊（上）

### 再談函式與參數

Javascript裡函式是物件的一種、「函式是第一級公民」。你可以將函式存放在變數、物件甚至是陳列之中；你可以把他想像成是一種可以「被呼叫」(be invoked)的特殊物件。

箭頭函式 (Arrow function)：

* 更簡潔的函式寫法
* this 變數強制綁定



`call()` & `apply()`：

```js
const pus = function (numA, numb) {
  return numA + numB
}
func.call(null, 1, 2) // 傳入參數使用遏點分隔
func.apply(null, [1, 2]) // 傳入參數用一個陣列包覆他們
```



即使我們在宣告函式時有指定參數的數量，但在呼叫的時候無論代入多少個參數都是合法的；在沒有指定的參數預設就會是 `undefined`，而多傳入的參數大多情況下是沒有意義的（除著透過 `arguments`物件取得）：

```js
const plus = function (numA, numbB) {
  let num = 0
  for (var i = 0; i < arguments.length; i++) {
    num += arguments[i]
  }
  return num
}
plus(1, 2) // 3
plus(1, 2, 3, 4) // 10
```

不過… **箭頭函式是無法使用 `arguments`物件的**

箭頭函式搭配 Spread Operator取得不確定數量參數的範例：

```js
const plus = (...args) => {
  let num = 0
  for (var i = 0; i < args.length; i++) {
    num += args[i]
  }
  return num
}
plus(1, 2) // 3
plus(1, 2, 3, 4) // 10
```

### 從 Callback到 Promise

Callback Function：把函式當作另一個函式的參數，這個函式只會在滿足了某個條件才會被動地去執行。

常用場景：

1. 將函式註冊事件 (addEventListener)，當事件被觸時才會執行 Callback Function
2. 隔一段時間後才執行 (Window.setTimeout)
3. 控制多個函式間執行的順序（多使用在非同步函式中，但當 callback多層之後就會產生俗稱「波動拳」的 Callback Hell

特別的範例 - 使用立即函式 (IFEE)解決非同步函式執行順序的問題：

```js
// 使用 IFEE將 i的值保存在 scope內
for (var i = 0; i < 5; i++) {
  (function (x) {
    window.setTimeout(function () {
      console.log(x)
    }, 1000 * x)
  })(i)
}
```

**不過書裡的這個範例應該是在介紹早期 ES5使用 `var`宣告變數的背景下使用的解法，因為使用 `var`時變數「最小的 scope是 function」，所以透過立即函式的解法可以將 i的值保存在 scope內。**

將` var`改成 `let`的話用以下寫法就可簡單解決了：

```js
// 改使用let
for (let i = 0; i < 5; i++) {
  window.setTimeout(function () {
    console.log(i)
  }, 1000 * i)
}
```

（另外其他解法也可以用 while loop或者遞迴的方式都可…）



Promise的狀態：

* pending：初始狀態
* fulfilled：已解決
* rejected：被拒絕

### 從 setTimeout看同步、非同步與 Event Loop

**Javascript是「單一執行緒」的程式語言**

字面上「Synchronous」和「Asynchronous」被翻譯為「同步」和「非同步」，但「同步」的意思並不是所有動作同時進行的意思，實際上卻正好相反。

**Javascript的任務分成了兩種：Synchronous和 Asynchronous。Javascript的執行緒會逐一執行 Stack內的任務，而當非同步事件的 callback function被呼叫時，就會將 callback function的任務丟到Event Queue當中，並等待目前 Stack的任務都已經完成後，再繼續逐一執行 Event Queue的任務。**

`setTimeout`和 `setInterval`的時間會有誤差的，如果要執行動畫，建議用 `requestAnimationFrame`



## Day6 - 深入理解 JavaScript核心：函式、物件、原型鍊（中）

### 閉包 Closure

**當（函式內的）內部函式被回傳後，除了自己本身的程式碼外，也可以取得內部函式「當時環境的變數值，記住了執行當時的環境，這就是閉包：**

```js
function counter () {
  var count = 0
  function innerCounter () {
    return ++count
  }
  return innerCounter
}
const countFunc = counter()
const countFunc2 = counter()

console.log(countFunc()) // 1
console.log(countFunc()) // 2
console.log(countFunc()) // 3

console.log(countFunc2()) // 1
console.log(countFunc2()) // 2
```

### What's "THIS" in JavaScript

ECMAScript標準規範對 `this`的定義：

> The this keyword evaluates th the value of the ThisBinding of the current execution context
>
> this這個關鍵字代表的值為目前執行環境的 ThisBinding

MDN對 this的定義：

> In most cases, the value of this is determined by how a function is called
>
> 在大多數的情況下，this會因為 function被呼叫的方式而有所不同

結論：

* `this`是 Javascript的一個關鍵字
* `this`是 function執行時，自動生成的一個內部物件
* 隨著 function執行場合的不同，`this`所指向的值，也會有所不同
* 在大多數的情況下，`this`代表的就是呼叫 function的物件 (Owner Object of the function)

**重要：`this`代表的是 function執行時所屬的物件**

```js
const getGender = function () {
  return this.gender
}
const people1 = {
  gender: 'female',
  getGender: getGender
}
const people2 = {
  gender: 'male',
  getGender: getGender
}
console.log(people1.getGender()) // female
console.log(people2.getGender()) // male
```

範例

```js
var obj = {
  func1: function () {
    console.log(this === obj) // true
    var func2 = function () {
      console.log(this === obj) // false（如無特別指明 this，預設 this為 window、strict模式下為 undefined）
    }
    func2()
  }
}
obj.func1()
```

其他情況：

* 事件中的 `this`指的是「觸發事件的元素」，也就是 `event.currentTarget`
* callback function中加入 ajax請求，預設綁定會把 `this`指定給 global object、也就是 `window`

### 強制指定 this的方法

1. `.bind()`可以將 `this`強制綁定到 function中
2. 箭頭函式會強制將所在環境中的 `this`綁定到箭頭函式當中
3. `.call`和 `.apply()`會強制指定某個物件作為該 function執行時的 `this`
4. `new`關鍵字綁定。新建構出來的物件會被設為那個 function的 `this`綁定目標



## Day7 - 深入理解 JavaScript核心：函式、物件、原型鍊（下）

Javascript確實是一個物件導向的程式語言，但他和其他語言很大的不同是，他的繼承方法是導過「prototype」來進行實作。更確切的說法應該是 **Javascript是一個以「原型為基礎的」物件導向程式語言**。

所有的物件都是繼承 `Object`而來，所以 Object有的東西其他的物件也都會有。

以下例當中，`someone`是基於原型物件`Person`所建立的，`Person`的屬性會通通透過 prototype (`__proto__`屬性)的繼承下來：

```js
const Person = {
  name: 'Default Name',
  age: 0,
  gender: 'unknown',
  gretting: function () {
  	return 'Hello! My name is ' + this.name + '.'
  }
}
const someone = Object.create(Person)
console.log(JSON.stringify(someone)) // 印出 {}
console.log(someone.name) // 印出 'Default Name'（因為__propto__有name屬性，所以印出初始值）
```

`Object.create(null, {...})`可產生乾淨的物件。

物件可透過 `Object.defineProperty`來定義物件的屬性描述 (Property descriptor)；可透過 `Object.getOwnPropertyDescriptor()`來檢查物件屬性描述器的狀態。

屬性描述器有六種：

* value
* writable
* enumerable
* configurable
* get
* set

### 原型與繼承

透過 `prototype`來新增方法(method)，無需重新建立物件，馬上就可以使用。這種手法也是很多 Polyfill用來增強接充舊瀏覽器不支援的語法

```js
const Person = function (name) {
  this.name = name
}
var p = new Person('Kuro')
p.sayHelloWorld() // TypeError: p.sayHelloWorld is not a function

Person.prototype.sayHelloWorld = function () {
  return "Hello, World!"
}
p.sayHelloWorld // "Hello, World!"
```

`_proto__`是順著原型鍵 (Prototype Chain)向上取得原型物件的特蛛屬性。大多數的 Javascript引擎都有提供 `__proto__`屬性；雖然 ES6已經將 `__proto__`屬性在語言規範中視為一個標準屬性，不過考慮舊瀏覽器的實作不一，仍建議透過 `Object.getPrototypeOf()`來取得原型物件

```js
console.log(Object.getPrototypeOf(Function.prototype) === Object.prototype) // true

console.log(Function.prototype.__proto__ === Object.prototype)
```

