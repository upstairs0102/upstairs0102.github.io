---
slug: "/ithome2018/day23"
title: "Day23 動畫 (2)"
authors: "thunderboy"
tags: ["ithome","d3.js"]
category: "D3.js 新手開發基本圖表"
collection: "series"
kind: "article"
order: 23
source: "docs/[鐵人賽]D3.js新手開發基本圖表/ithome2018-day23.md"
draft: false
publishedAt:
updatedAt:
---

## 一、內插 (interpolate)

在前面文章「**Day18 繪製產生器 (1)**」中針對顏色（RGB及HSL）的計算已有簡單介紹。在使用transition()做動畫時也經常和和內插函式(interpolate)搭配使用，接下來就針對interpolate()方法來做更多一點的討論。

內插的使用方法為 `d3.interpolate(a,b)`，回傳的函式可輸入參數範圍**0~1**，由0~1之間的數值來計算出a,b之間的值。

首先是計算**顏色**的部份，計算顏色可以使用 `d3.interpolate(a,b)` 或者 `d3.interpolateRgb(a,b)`，不過實際測試之後發現似乎都沒有差別，應該是interpolate本身就能夠判斷(a,b)的資料型別。

```js
var interpolate = d3.interpolate('#f00', '#39e')
console.log(interpolate(0.5)) // #994d77
var interpolateRgb = d3.interpolateRgb('#f00', '#39e')
console.log(interpolateRgb(0.5)) // #994d77
var interpolate2 = d3.interpolate('blue', 'green')
console.log(interpolate2(0.5)) // #004080
var interpolateRgb2 = d3.interpolate('blue', 'green')
console.log(interpolateRgb2(0.5)) // #004080
var interpolate3 = d3.interpolate('hsl(120,0.5,0.5)', 'hsl(240,0.5,0.5)')
console.log(interpolate3(0.5)) // #010101
var interpolateRgb3 = d3.interpolateRgb('hsl(120,0.5,0.5)', 'hsl(240,0.5,0.5)')
console.log(interpolateRgb3(0.5)) // #010101
var interpolate4 = d3.interpolate(d3.rgb("blue"), d3.rgb("green"))
console.log(interpolate4(0.5)) // #004080
var interpolateRgb4 = d3.interpolateRgb(d3.rgb("blue"), d3.rgb("green"))
console.log(interpolateRgb4(0.5)) // #004080
```

再來是求取**數值**，`d3.interpolate(a,b)` 和 `d3.interpolateNumber(a,b)` 的結果相同，`d3.interpolateRound(a,b)`可以求得整數。

```js
var interpolate = d3.interpolate(1, 49)
console.log(interpolate(0.3)) // 15.399999999999999
var interpolateN = d3.interpolateNumber(1, 49)
console.log(interpolateN(0.3)) // 15.399999999999999
var interpolateR = d3.interpolateRound(1, 49)
console.log(interpolateR(0.3)) // 15
```

不過當`d3.interpolate(a,b)`放的是字串時，雖然一樣能計算出數值的結果，但是回傳的型別是字串，`d3.interpolateNumber(a,b)`求得是數字。

由此可知當不能非常肯定資料的型別時要計算數值用`d3.interpolateNumber(a,b)`或`d3.interpolateRound(a,b)`是較為安全的。

```js
var interpolate = d3.interpolate("1", "49")
console.log(interpolate(0.3)) // (字串) 15.399999999999999
var interpolateN = d3.interpolateNumber("1", "49")
console.log(interpolateN(0.3)) // (數字) 15.399999999999999
```

使用`d3.interpolateString(a,b)`的情況剛好相反，(a,b)放入數值回傳的是**字串**。而如果(a,b)放的字串中有文字和數值混雜的話，會回傳奇怪的結果。

```js
var interpolateS = d3.interpolateString(1, 49)
console.log(interpolateS(0.5)) // (字串) 25
var interpolateS2 = d3.interpolateString('Hello 10', 'world 20')
console.log(interpolateS2(0.5)) // (字串) world 15
```

另外interpolate也可以放入**陣列**資料，d3很聰明的可以計算並回傳陣列結果。

```js
var interpolate = d3.interpolate([0,1], [1,50])
console.log(interpolate(0.3)) // [0.3, 15.7]
var interpolateS = d3.interpolateString([0,1], [1,50])
console.log(interpolateS(0.3)) // 0.3,15.7
var interpolateA = d3.interpolateArray([0,1], [1,50])
console.log(interpolateA(0.3)) // [0.3, 15.7]
var interpolateA2 = d3.interpolateArray([0,1], [1,50,100])
console.log(interpolateA2(0.3)) // [0.3, 15.7, 100]
```

## 二、在tween函式中使用內插(interpolate)

**transition的函式傳入參數、和interpolate一樣都是範圍為0~1的數值**，因為搭配在一起使用很容易的可以計算動畫所需的公式。

這邊以前一篇的橫長條圖範例程式作為例子。

原本程式如下，我們希望這個橫條圖的寬度，在過渡(transition)的期間由起始值startWidth變化到endWidth，所以寫了一段公式來計算：var num = startWidth + t * (endWidth - startWidth)

（原程式可參考連結：http://jsfiddle.net/upstairs0102/Le30y9v7/）

```js
d3.transition()
  .duration(500)
  .tween("move", function(){
      return function(t){ // t為0~1
        var num = startWidth + t * (endWidth - startWidth)
    
        d3.select("rect")
          .attr("width", num)
        
        d3.select("text")
          .attr("x", num)
          .text(Math.floor(num))
    }
  })
```  

使用interpolate的話剛好就能夠簡化這段難以維護的計算公式。

```js
d3.transition()
    .duration(500)
    .tween("move", function(){
      return function(t){ // t為0~1
        var interpolate = d3.interpolate(startWidth, endWidth)
        var num = interpolate(t)
    
        d3.select("rect")
          .attr("width", num)
        
        d3.select("text")
          .attr("x", num)
          .text(Math.floor(num))
    }
  })
```

改成這樣似乎是聰明多了。


另外，再用一個前一篇的程式作為修改範例，這個程式要做的是移動矩形的座標位置，程式碼如下。

 （原程式可參考連結：http://jsfiddle.net/upstairs0102/gmLcbr2j/）

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

這邊要改用tween()方法來改寫（雖然原程式已經夠簡單了不一定需要用tween()，但這裡僅示範用，在更複雜的情況下就派得上用場了）。

如果要在函式中要自己手動計算座標位移實在不是一件清鬆的事 ，所以同樣的也是搭配interpolate來計算。

這裡要使用的是計算transform用的`d3.interpolateTransform(a,b)`，前面雖然沒有介紹到但用法是一模一樣的。

改寫的程式如下

```js
svg.append("rect")
  .attr("stroke", "black")
  .attr("stroke-width", 3)
  .attr("fill", "none")
  .attr("width", 100)
  .attr("height", 100)
  .transition()
  .tween('move',function(){
    var start = d3.transform("translate(10,10)");
    var end = d3.transform("translate(50,50)");
    var interpolate = d3.interpolateTransform(start,end);
    return function(t){
       d3.select(this).attr("transform", interpolate(t));
    }
  });
```

## 三、事件監聽

transition回傳的過渡物件有一個`each()`方法可以使用，但這邊的each()的用途和使用在選擇集上時不同，是用來監聽事件用的。

使用方法為 `transition.each(type, function)`

第一個參數是事件，有”`start`”（開始）、”`end`"（結束）、”`interrupt`"（打斷）三種。

而function是監聽事件的function。function的傳入參數分別是`data`和`index`。

程式語法的範例如下

```js
g.transition()
    .selectAll(“rect”)
    .each(“start”, function(d,i){
        // do something
    })
    .each(“end”, function(d,i){
        // do something
    })
    .attr(“width”, 300)
```