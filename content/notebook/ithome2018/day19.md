---
slug: "/ithome2018/day19"
title: "Day19 繪製產生器 (2)"
authors: "thunderboy"
tags: ["ithome","d3.js"]
category: "D3.js 新手開發基本圖表"
collection: "series"
kind: "article"
order: 19
source: "docs/[鐵人賽]D3.js新手開發基本圖表/ithome2018-day19.md"
draft: false
publishedAt:
updatedAt:
---

如果要自己手刻svg標籤來繪圖是非常辛苦的一件事情，D3提供了許多繪製的產生器可以幫助我們省下很多工，再來將挑出幾個做一些基本的說明。

## 一、線產生器

首先用D3來建立svg

```js
var svg = d3.select("body").append("svg")
  .attr("width",400)
  .attr("height",300)
```

線產生器可以讓我們直接設定`<path>`標籤的座標，以下準備了一組二維陣列，其中每組陣列為x,y座標

```js
var lines = [[80,80],[200,100],[200,200],[100,200]]
```

d3.svg.line() 建立線產生器，可以用來當作函式使用。

`<path>`設定座標是使用”d”屬性，我們直接把前面的座標資料丟給線產生器函式裡就可取得”d”所需的資料。

```js
var linePath = d3.svg.line()
  
svg.append("path")
  .attr("d",linePath(lines))
  .attr("stroke","black")
  .attr("fill","none")
```

結果如下圖

![https://ithelp.ithome.com.tw/upload/images/20181102/20096057q26DdfQdVj.png](https://ithelp.ithome.com.tw/upload/images/20181102/20096057q26DdfQdVj.png)

如果我們用chrome瀏覽器檢視html標籤如下。如果我們要繪製一堆的座標點，就可以省下許多設定svg屬性的力氣，只需要準備好座標資料就可以了。

![https://ithelp.ithome.com.tw/upload/images/20181102/20096057wyNPUSjs1i.png](https://ithelp.ithome.com.tw/upload/images/20181102/20096057wyNPUSjs1i.png)

D3的線產生器還提供了一些其他的方法可以幫助我們做更多的變化。

`x()`和`y()`可以自定座標的規則，這裡直接用一組範例程式碼如下：

```js
var lines = [80,120,160,200,240,280,320]
var linePath = d3.svg.line()
    .x(function(d){
      return d
   })
    .y(function(d,i){
      return i % 2 == 0 ? 40 : 120
  })

svg.append("path")
   .attr("d",linePath(lines))
  .attr("stroke","black")
  .attr("fill","none")
```

結果如下圖

![https://ithelp.ithome.com.tw/upload/images/20181102/20096057WTCBdde9qY.png](https://ithelp.ithome.com.tw/upload/images/20181102/20096057WTCBdde9qY.png)

此外還有一個強大的「**內插**」(Interpolation)模式，可以運算出各種不同的線段繪圖方式；總共有13種模式，這裡只舉其中兩種其他的可參考D3的官方文件。

`cardinal` 可以用在線圖表，繪製出有弧度的曲線

`linePath.interpolate("cardinal”) `

![https://ithelp.ithome.com.tw/upload/images/20181102/20096057XbPdEb5iLL.png](https://ithelp.ithome.com.tw/upload/images/20181102/20096057XbPdEb5iLL.png)

`linear-closed` 可以線條連到原點閉合起來

`linePath.interpolate("linear-closed")`

![https://ithelp.ithome.com.tw/upload/images/20181102/20096057eXjy55yLaj.png](https://ithelp.ithome.com.tw/upload/images/20181102/20096057eXjy55yLaj.png)

## 二、區域產生器

區域產生器用於產生區塊圖型，寫法和前述的線產生器非常類似。最大的差別在於有更多自定座標的方法，有`x()`、`x0()`、`x1()`、`y()`、`y1()`、`y2()`共六個，可選擇使用。

其中`x0()`和`x1()`搭配、或者`y0()`和y1`()`搭配可定義座標的範圍。

以下是範例程式碼

```js
var dataSet = [80,120,130,70,60,90]

var areaPath = d3.svg.area()
  .x(function(d,i){ return 50 + i * 80})
  .y0(function(d,i){ return height/2 })
  .y1(function(d,i){ return height/2 - d})
  
svg.append("path")
  .attr("d",areaPath(dataSet))
  .attr("stroke","black")
  .attr("fill","blue”)
```

結果如圖

![https://ithelp.ithome.com.tw/upload/images/20181102/200960570pQvKKail6.png](https://ithelp.ithome.com.tw/upload/images/20181102/200960570pQvKKail6.png)

同樣的，區域產生器也可以使用interpolate()方法。



