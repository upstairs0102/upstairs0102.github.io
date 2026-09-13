---
slug: "/ithome2018/day15"
title: "Day15 練習 - 散布圖 (1)"
authors: "thunderboy"
tags: ["ithome","d3.js"]
category: "D3.js 新手開發基本圖表"
collection: "series"
kind: "article"
order: 15
source: "docs/[鐵人賽]D3.js新手開發基本圖表/ithome2018-day15.md"
draft: false
publishedAt:
updatedAt:
---

## 一、以比例尺繪制x,y軸座標軸

今天要來練習繪製一個具有兩個參數資料的散布圖圖表，這個散布圖將各別資料的兩個參數值放到x,y座軸上面畫出座標點。

這個範例資料集是一組二維陣列，其中每一組陣列的第1、2個參數將對應到x,y軸座標。

```js
var dataSet = [[0.5, 0.5], [0.7,0.8], [0.4,0.9], [0.11,0.32], [0.88,0.25], [0.75,0.12], [0.5,0.1], [0.2,0.3], [0.4,0.1], [0.6,0.7]] 
```

首先設定所需要的變數。`width`及`height`設定svg的寬高，我們希望在場景內往內、上下左右各30px，`xAxisWidth`及`yAxisWidth`代表所要繪製的圖表範圍寬高（x及y軸的長度）。

```js
var width = 400
var height = 300
var padding = {top:30, right:30, bottom:30, left:30}
var xAxisWidth = width - padding.left - padding.right
var yAxisWidth = height - padding.top - padding.bottom
```

繪製svg

```js
var svg = d3.select("body").append("svg")
  .attr("width",width)
  .attr("height",height)
```

接著使用**線性比例尺(Linear Scale)**將陣列資料區間對映到圖表座標區塊的寬高。

由於這次的資料是兩維陣列所以在使用`d3.max()`方法求得最大值時，除了第一個參數是放入資料陣列、第二個參數要放入求值的callback function，所以對應x軸的資料所要的是各別陣列的第一個參數、y軸是第二個參數。

```js
var xScale = d3.scale.linear()
  .domain([0, d3.max(dataSet,function(d){ return d[0] })])
  .range([0,xAxisWidth])
  
var yScale = d3.scale.linear()
  .domain([0, d3.max(dataSet,function(d){ return d[1] })])
  .range([0,yAxisWidth])
```

接著繪製座標軸的方式和昨天所用的寫法都是一模一樣的，只不過多了y軸座標軸，以及依照上述所列的寬高以及間隔距離做一些計算後擺放進去。

```js
var xAxis = d3.svg.axis()
  .scale(xScale)
  .orient("bottom")
  
var yAxis = d3.svg.axis()
  .scale(yScale)
  .orient("left")
  
var xAxisG = svg.append("g")
  .attr("transform","translate("+padding.left+","+(padding.top + yAxisWidth)+")")
  .call(xAxis)
  
var yAxisG = svg.append("g")
  .attr("transform","translate("+padding.left+","+padding.top+")")
  .call(yAxis)
```

繪製的結果如下圖

![Day15 練習 - 散布圖 (1)_1](/images/notebook/d3-scatter/1.png)

但我們會發現y軸座標方向並不是我們要的，因為d3的座標是由左上方做為起點的，為了要解決這個問題我們可以在比例尺上做一點手腳。

只要把定義域domain()中的兩個參數倒過來即可。原本的`domain(最小值,最大值)`改放入`domain(最大值,最小值)`即可

```js
var yScaleReverse = d3.scale.linear()
  .domain([d3.max(dataSet,function(d){ return d[1] }),0])
  .range([0,yAxisWidth])
```

然後就可以得到我們所要的結果

![Day15 練習 - 散布圖 (1)_2](/images/notebook/d3-scatter/2.png)

## 二、座標軸樣式

其中為了讓座標軸好看一些，所以按照昨天所寫的css樣式來套用。然後在svg上使用classed()方法加上樣式。

```js
var xAxisG = svg.append("g")
  .attr("transform","translate("+padding.left+","+(padding.top + yAxisWidth)+")")
  .classed("xAxis",true)
  .call(xAxis)
  
var yAxisG = svg.append("g")
  .attr("transform","translate("+padding.left+","+padding.top+")")
  .classed("yAxis",true)
  .call(yAxis)
```

發現好像沒有作用，這時候用chrome瀏覽器的開發者工具檢視一下html結構。

下圖是x座標軸的`<g>`標籤區塊。可看到class名稱是`xAxis`。

原來D3是依照我們使用classed()方法裡放入的名稱來作為`<g>`標籤上的class的名稱。

![Day15 練習 - 散布圖 (1)_3](/images/notebook/d3-scatter/3.png)


所以就來重寫css樣式

```js
.xAxis path, .xAxis line, .yAxis path, .yAxis line{
  fill: none;
  stroke: black;
  shape-rendering: crispEdges;
}

.xAxis text, .yAxis text {
  font-family: sans-serif;
  font-size: 11px;
}
```


最後的結果如下圖

![Day15 練習 - 散布圖 (1)_4](/images/notebook/d3-scatter/4.png)