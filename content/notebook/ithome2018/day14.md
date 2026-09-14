---
slug: "/ithome2018/day14"
title: "Day14 座標軸"
authors: "thunderboy"
tags: ["ithome","d3.js"]
category: "D3.js 新手開發基本圖表"
collection: "series"
kind: "article"
order: 14
source: "docs/[鐵人賽]D3.js新手開發基本圖表/ithome2018-day14.md"
draft: false
publishedAt:
updatedAt:
---

座標軸是圖表常見的組成之一，D3提供了座標軸的製作方式，可以省掉自己手刻svg的工。以下是一段基本的程式範例。

```js
var svg = d3.select("body").append("svg")

var xScale = d3.scale.linear()
  .domain([0,10])
  .range([0,300])
  
var axis = d3.svg.axis()
  .scale(xScale)
  .orient("bottom")
  
var gAxis = svg.append("g")
  .attr("transform","translate(80,80)")
  .call(axis) // D3的選擇集可以使用call()方法，將本身作為參數傳遞給某一函式
```

使用d3.svg.axis()建立座標軸，scale()設定比例尺、orient設定座標軸的方向（top、bottom、left、right）。

接著建立一個`<g>`標籤後（`<g>`是svg中用來當作群組的標籤），把座標軸繪制在`<g>`中就完成。

程式碼中最後一行call(axis)也可以不寫，改用d3.svg.axis()的回傳值當作函式來繪制`<g>`，寫法為axis(gAxis)

結果如下圖

![Day14 座標軸_1](/images/notebook/legacy/e547a1851ec70f57a003.png)

由於是預設的樣式所以看起來比較醜，所以可以試著加上css樣式

座標軸的繪制元素有三個：

`<path>`為軸線

`<line>`和`<text>`為刻度

```js
.axis path, .axis line{
  fill: none;
  stroke: black;
  shape-rendering: crispEdges; /*讓線條沒有毛邊*/
}

.axis text {
  font-family: sans-serif;
  font-size: 11px;
}
```

然後加入到svg中就可以了

```js
var gAxis = svg.append("g")
  .attr("transform","translate(80,80)")
  .classed("axis",true)
  .call(axis)
```

結果如下圖

![Day14 座標軸_2](/images/notebook/legacy/bb4e3026961ef2e646b4.png)

axis()還有幾個常用的api可以用來給座標軸做更多的變化：

tick() 設定座標軸的分隔數

tickValues() 設定座標軸的指定刻度

tickFormat() 設定刻度的格式（加上單位）


