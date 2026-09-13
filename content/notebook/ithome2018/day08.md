---
slug: "/ithome2018/day08"
title: "Day08 D3 資料綁定的理解(2)"
authors: "thunderboy"
tags: ["ithome","d3.js"]
category: "D3.js 新手開發基本圖表"
collection: "series"
kind: "article"
order: 8
source: "docs/[鐵人賽]D3.js新手開發基本圖表/ithome2018-day08.md"
draft: false
publishedAt:
updatedAt:
---

## 一、資料綁定(Data-Join)的data()

前一篇提到D3的資料綁定(Data-Join)，今天要針對其中的**data()**方法來討論。

這裡我們將前一篇討論datum()方法時使用的例子，將datum()換置為data()。但是因為data()方法綁定的資料是「多筆」的，所以還必須將資料格式修改為陣列資料，所以將前例的 “資料” 修改為 ["資料"]。如下

html: 

```html
<p></p>
<p></p>
<p></p>
```

js:

```js
var p = d3.select("body").selectAll("p")
p.data(["資料"])
  .text(function(d,i){
    return d + " " + i
  })
```

畫面輸出的結果為

![Day08 D3 資料綁定的理解(2)_1](/images/notebook/legacy/84d56ee31a4c4e514ee7.png)

當選擇集有3個元素，而綁定資料為1筆時，則會有兩個元素沒有綁定資料。

接著做一點修改，將綁定資料改為4筆資料：

```js
var p = d3.select("body").selectAll("p")
p.data(["蘋果","香蕉","芭樂","西瓜"])
  .text(function(d,i){
    return d + " " + i
  })
```

畫面輸出的結果為

![Day08 D3 資料綁定的理解(2)_2](/images/notebook/legacy/6784813071f96b626f35.png)

這時候可以看到因為選擇集只有3個元素，所以”西瓜”就沒辦法呈現在畫面上了。

## 二、Enter、Update、Exit

由前一章的程式範例中可以知道，當html中的元素和資料的數量不一致時，可能無法正確呈現我們所需要的繪圖結果。然而在一般實務中元素數量和資料數量都是不一致的，原因是資料通常不是固定的數量。

再一次回到D3的全名來看：Data-Driven Document，在D3的世界當中繪圖的流程是由資料來趨動的，所以我們不需觀注在元素的數量上 - 要呈現多少元素數量應該是由資料數量來決定的。

D3中針對元素的操作定義了Enter、Update、Exit三個方法，簡單說明如下：

* Enter: 資料陣列長度大於元素數量，還不存在的元素稱為Enter（即將進入）

* Update: 資料陣列長度等於元素數量的部份稱為稱為Update（即將更新）

* Exit: 資料陣列長度小於元素數量，多餘元素的的部份稱為Exit（即將退出）

可以用下圖方式來理解

![Day08 D3 資料綁定的理解(2)_3](/images/notebook/legacy/8012f7c5489b2198d867.png)

我們將前一個章節的程式碼重新改寫。此時不再關注元素數量，直接將原本html中的三組`<p>`給刪除，所以現在html中是沒有任何`<p>`元素的，就前面的定義，當資料陣列大於元素數量時使用Enter方法：

```js
var dataSet = ["蘋果","香蕉","芭樂","西瓜"]

var p = d3.select("body").selectAll("p")

p.data(dataSet)
  .enter()
  .append("p")
  .text(function(d,i){
    return d + " " + i
  })
```

輸出畫面為

![Day08 D3 資料綁定的理解(2)_4](/images/notebook/legacy/957582690e3995451b56.png)

## 三、資料更新時的處理方式

以上的討論都是針對一筆固定的資料陣列在做處理，但是實務中圖表的資料來源通常會是由後端提供，並且資料是可以更新的。

當資料更新時html上已經存在第一次繪製圖表時所產生的元素，此時，除了**Enter**之外也需使用**Update**和**Delete**：

* Enter處理資料陣列數量大於元素數量的「新增」繪製

* Update處理資料陣列數量等於元素數量的「更新」繪製

* Exit處理資料陣列數量小於元素數量的「刪除」繪製

修改程式範例如下：

```js
var dataSet = ["蘋果","香蕉","芭樂","西瓜"]

var p = d3.select("body").selectAll("p")

var update = p.data(dataSet)
var enter = update.enter()
var exit = update.exit()

update
  .text(function(d,i){
    return d + " " + i
  })

enter
  .append("p")
  .text(function(d,i){
    return d + " " + i
  })

exit.remove()
```