---
slug: "/javascript/js-call-by-value-call-by-reference"
title: "[JS] 傳值 & 傳參考"
tags: ["javascript"]
category: "JavaScript"
collection: "technical"
kind: "article"
order: 999
source: "docs/JavaScript/[JS] 傳值&傳參考.md"
draft: false
publishedAt: "2020-02-28"
updatedAt:
---

這是Javascript的一個經典的觀念題–「傳值」以及「傳參考」(call by value/call by reference，或者pass by value/pass by reference)，除此之外，也有人說Javascript是call by sharing（或者pass by sharing）。不過我自認我的程度還不到可以針對這些名詞做很深入的探討，但是可以用一個簡單的方式，將Javascript的這個語言特性做個整理。


## 特性1：拷貝純值

Javascript的型別有分為「物件型別」以及「基本型別」(Primitive Type)，其中型本型別是屬於純值，包含是`string`、`number`、`boolean`、`null`、`undefined`，拷貝的時候是傳遞「值」(value)。

如下範例當呼叫了`add`函數時，將`x`傳遞給`newX`，很明顯當`newNumber`的值改變了並不會影響到`number`。

```js
let x = 100
function add(newX){
  newNumber = newNumber + 1
}
add(x)
console.log(x) // 印出100
```

## 特性2：共用物件

將前一個範例稍做修改，變數`obj`是一個「物件型別」的變數，物件在傳值的時候傳遞「參考」(reference)。

如下範例，同樣也是將變數傳入`add`函式內，但是函式內的變數+1之後函式外的變數也跟著+1了。

這一個為人所知的特性，也是造成一個沒有良好javascript撰寫習慣下（或者對javascript還不那麼熟悉的工程師）很容易產生程式bug的原因。

```js
let obj = { number: 100 }
function add(newObj){
  newObj.number = newObj.number + 1
}
add(obj)
console.log(obj.number) // 印出101
```

## 特性3：拷貝物件

在前述的例子當中，將變數傳入函式等同於做了這件事情：`newObj = obj`。由於`obj`是物件型別，所以傳遞參考的情況下當newObj + 1之後obj也跟著加1了，我們也可以說obj被渲染了。這時候做個測試來觀察：`newObj === obj`結果會為**true**。

但是如果我們換個寫法：`newObj === { number: 100 }`結果卻為**false**。這個是為什麼呢？這個問題要解釋可能很難，但是不會很難理解。當我們將物件重新賦值的時候，就產生了一個新的參考，因此`obj`和`newObj`就不再是共用同樣的物件了。

這裡同樣將範例稍做修改：

```js
let obj = { number: 100 }
function add(newObj){
  newObj = { number: 200 }
}
add(obj)
console.log(obj.number) // 印出100
```

這個範例中`newObj`如同上述所說是重新賦值，所以`obj`並不會被影響到。

## 陣列也有同樣的傳參考特性

要注意的是，在Javascript當中陣列也是物件的一種型式，所以也同樣的call by reference/call by sharing特性。

> 補充：typeof [1, 2, 3] 會印出"object"，javascript可沒有"array"這個型別，這也算是一個經典觀念題了。

無論是使用Array物件提供的方法（如push、pop、splice等），或者直接透過索引修改欄位值，都同樣有傳參考的特性：

```js
let arr = [1, 2, 3]
function add(newArr){
  newArr.push(4)
  newArr[newArr.length] = newArr.length + 1
}
add(arr)
console.log(arr) // 印出[1, 2, 3, 4, 5]
```

如果是直接賦值的話，就會產生新的參考，互不影響了：

```js
let arr = [1, 2, 3]
function add(newArr){
  newArr = [1, 2, 3, 4]
}
add(arr)
console.log(arr) // 印出[1, 2, 3]
```



## 需要非常小心call by reference造成的資料渲染bug

在我看別人的code的經驗，我覺得有不少人會喜歡刻意的利用call by reference的特性寫出一些花俏的程式碼，雖然這種寫法某些時候很好用或很有效率，但我個人是很討厭這樣的寫法，只要能想得出更好的方法就絕對避免。

一來是我會質疑這樣的寫法在程式閱讀性上有很大的問題；另外一來是只要一不注意，就會很容易發生會造成資料渲染的bug。只要是寫過javascript一段時間就一定會遇過這樣的bug，也就是在沒有意識的情況下資料不知道被誰給渲染了… 而且這樣的bug又非常難抓。

這裡舉一個簡單的例子：

```js
let obj = { a: 1 }
let bigObj = { smallObj: obj }
// 過了一兩百行…
obj.a = 2
console.log(bigObj) // 印出{ smallObj: { a: 2 }}
```

這裡將一個物件`{ small: obj }`賦值給變數`bigObj`，乍看下和前述的「特性3：拷貝物件」非常像，如果寫code時不是處於一個很專心的狀況下，有可能就認為這是一個傳值(value)的動作，不會有額外的side effect就直接帶過了。

但事實上這個物件`{ small: obj }`裡面的`obj`仍然有call by refence的關係，結果在一兩百行程式碼之外寫了一行`obj.a = 2`，這時候就是又要努力debug的時候了…



## 補充：深拷貝的常用方法

這時候就會延伸出來一個相關的問題，就像文章前面小節所說的，有時我們希望將某個物件傳值給另一個物件，可是又不希望是用「傳參考」的方式來傳值，而是用「傳值」的方式複製出一個一模一樣的物件，這就是所謂的「深拷貝」(Deep Clone)。

要來認真談論的話，這又是一個說來話長的主題了，而且有許多種方法都可以達到目的。以下我用最簡短的方式來介紹幾個實務上我覺得最常使用的幾種方式：

**1.產生新的物件並拷貝所有的「基本型別」欄位**

基本概念就是建立一個新的物件，然後再把裡面所有的「基本型別」欄位一個一個搬進去。同樣的概念有用多種做法，可以自己手動一個一個搬：

```js
let obj = { a: 1, b: 2 }
let newObj = { a: obj.a, b: obj.b }
```

或者是陣列方法：

```js
let arr [1, 2, 3]
let newArr = arr.map(d => d)
```

也可以用ES6提供的新語法Object.assign：

```js
let obj = { a: 1, b: 2 }
let newObj = Object.assing({}, obj)
```

但Object.assign只能複製一層的欄位，如果裡面某個欄位也是一個物件的話，仍然會有call by reference的問題。

**2.JSON stringify&parse**

第二個方法是我認為最常使用且幾乎適用所有情況的方法（但不適用於function或者prototype–例如Date物件）。語法：`JSON.parse(JSON.stringify(物件))`。

例：

```js
let obj1 = { body: { a: 10 } }
let obj2 = JSON.parse(JSON.stringify(obj1))
```

## 結語

其實網路上相關的文章多的去了，相較起來我寫的這篇的深度並不深，背後的一些原理並沒有著墨的太多。不過我是有將一些相關的問題和解決方法，依照我自己的經驗做一些簡單的整理，希望對大家有幫助。

如果有想更深入的延伸閱多，以下有幾篇相關的好文推薦：

* [重新認識 JavaScript: Day 05 JavaScript 是「傳值」或「傳址」？](https://ithelp.ithome.com.tw/articles/10191057)
* [深入探討 JavaScript 中的參數傳遞：call by value 還是 reference？](https://blog.techbridge.cc/2018/06/23/javascript-call-by-value-or-reference/)
* [[Javascript] 關於 JS 中的淺拷貝和深拷貝](https://larry850806.github.io/2016/09/20/shallow-vs-deep-copy/)


