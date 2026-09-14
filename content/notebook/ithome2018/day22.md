---
slug: "/ithome2018/day22"
title: "Day22 動畫 (1)"
authors: "thunderboy"
tags: ["ithome","d3.js"]
category: "D3.js 新手開發基本圖表"
collection: "series"
kind: "article"
order: 22
source: "docs/[鐵人賽]D3.js新手開發基本圖表/ithome2018-day22.md"
draft: false
publishedAt:
updatedAt:
---

## 一、過渡(transition)

在「Day17 練習 - 散布圖 (3)」中已經有先做了一個最基本的動畫練習。今天要來針對動畫部份多最一些說明和練習。

這裡所說的動畫，指的是D3在svg上增加**過渡**(transition)。過渡的起始及終止狀態透過時間的移動就會產生動畫效果。

建立過渡有兩種方式：`d3.transition`和`selection.transition`。一般transition()會再搭配（非必要）以下三種方法：

`transition.delay(ms)` 延遲開始的時間，單位是毫秒

`transition.duration(ms)` 過渡的持續時間

`transition.ease(type)` 過渡樣式，包含`linear`、`cubic`、`elastic`、`back`、`bounce`

以下程式範例在`<svg>`中加入一個矩形，從座標(10,10)位移到(50,50)

```js
svg.append("rect")
  .attr("stroke", "black")
  .attr("stroke-width", 3)
  .attr("fill", "none")
  .attr("width", 100)
  .attr("height", 100)
  .attr("transform", "translate(10,10)")
  .transition()
  .attr("transform", "translate(50,50)")
```

線上檢視結果連結：http://jsfiddle.net/upstairs0102/gmLcbr2j/

這裡只單獨使用transition()，沒有搭配delay()及duration()等，所以是採用預設值（duration為250ms）

再來是第二個例子，同樣也是加入一個矩形，從寬度100過渡為寬度300，此外還增加ease()、過渡樣式設定為”`bounce`”。

```js
svg.append("rect")
  .attr("fill", "steelblue")
  .attr("x", 10)
  .attr("y", 10)
  .attr("width", 100)
  .attr("height", 30)
  .transition()
  .duration(500)
  .ease("bounce")
  .attr("width", 300)
```

線上檢視結果連結：http://jsfiddle.net/upstairs0102/L4gj56oa/

看起來已經有一點橫長條圖動畫的感覺了。

## 二、內插函式

內插函式可以在過渡之中加入函式，做更進一步的變化。使用方法為`transition.tween(name, factory)`。

tween()裡有兩個參數，其中第一個參數可是自訂任何名稱，只是用來識別而已。第二個參數需放入一個函式、並且要再函式中return一個要內插的函式，後面會做範例說明。

延續前一個矩形變化長度的程式。這裡除了原本的矩形外，要再增加一個數字到矩形上，來做一個更好看一點的橫長條圖動畫。

首先宣告等一下需要變化寬度的起始值及結束值

```js
var startWidth = 100
var endWidth = 300
```

加入矩形以及文字，這裡還未加上transition。

```js
var svg = d3.select("body").append("svg")
  .attr("width", 400)
  .attr("height", 200)

svg.append("rect")
  .attr("fill", "steelblue")
  .attr("x", 10)
  .attr("y", 10)
  .attr("width", startWidth)
  .attr("height", 30)
  
svg.append("text")
  .attr("fill", "white")
  .attr("x", startWidth)
  .attr("y", 10)
  .attr("dy", "1.2em")
  .attr("text-anchor", "end")
  .text(startWidth)
```

接著用d3.transition()建立過度，並使用tween()加入函式並return一個我們要設定的過渡函式。

過渡函式中會傳入一個參數t，這個參數t會在過渡的期間由0變化到1，我們可以透過這個參數來設計這個動畫所需的函式。

以下函式會將矩形的寬度由起始寬度變化到結束寬度。數字會緊跟著矩形由起始寬度數值變化到結束寬度數值。

```js
d3.transition()
  .duration(500)
  .tween("move", function(){
      return function(t){
        var num = startWidth + t * (endWidth - startWidth) // t為0時等於startWidth，t為1時等於endWidth
    
        d3.select("rect")
          .attr("width", num)
        
        d3.select("text")
          .attr("x", num)
          .text(Math.floor(num))
    }
  })
```

線上檢視結果連結：http://jsfiddle.net/upstairs0102/Le30y9v7/
