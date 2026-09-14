---
slug: "/ithome2018/day16"
title: "Day16 練習 - 散布圖 (2)"
authors: "thunderboy"
tags: ["ithome","d3.js"]
category: "D3.js 新手開發基本圖表"
collection: "series"
kind: "article"
order: 16
source: "docs/[鐵人賽]D3.js新手開發基本圖表/ithome2018-day16.md"
draft: false
publishedAt:
updatedAt:
---

## 一、繪製具分隔線的刻度

為了來了解`d3.svg.axis()`其他的api用途，這邊要做一點變化，把原來的資料改成用百分比的方式來呈現。

比例尺做一點修改，把定義域範圍直接改為0~1（代表0%~100%）。

```js
var xScale = d3.scale.linear()
  .domain([0,1])
  .range([0,xAxisWidth])
  
var yScale = d3.scale.linear()
  .domain([1,0]) // 為了讓y軸數字由下往上所以參數倒過來放 [最大值, 最小值]
  .range([0,yAxisWidth])
```

再來開始繪製刻度。這裡的寫法和前一篇大致相同，但多了`ticks()`、`tickFormat()`、`tickSize()` 三個方法。

`tick()` 設定刻度的數量
`tickFormat()` 設定資料格式，在這邊修改為百分比的資料格式
`tickSize()` 使用此方法後可以加上分隔線，裡面的兩個參數分別是隔線和外框，正數是往外負數是往內（往圖表中間的方向）。所以這兩個參數都加上圖表的寬/高並加上負數及可。

```js
var xAxis = d3.svg.axis()
  .scale(xScale)
  .orient("bottom")
  .ticks(5)
  .tickFormat(function(d){
      return d * 100 + '%'
  })
  .tickSize(-yAxisWidth,-yAxisWidth)
  
var yAxis = d3.svg.axis()
  .scale(yScale)
  .orient("left")
  .ticks(5)
  .tickFormat(function(d){
      return d * 100 + '%'
  })
  .tickSize(-xAxisWidth,-xAxisWidth)  
```

最後在svg上加入`<g>`標籤，並使用`call()`傳入剛才所寫的`axis()`的回傳變數即可。

```js
var xAxisG = svg.append('g')
  .attr("transform","translate("+padding.left+","+(padding.top + yAxisWidth)+")")
  .classed("xAxis",true)
  .call(xAxis)

var yAxisG = svg.append('g')
  .attr("transform","translate("+padding.left+","+padding.top+")")
  .classed("yAxis",true)
  .call(yAxis)
```

同樣的為了讓隔線好看一點，這邊有自訂了css樣式

```js
.xAxis line, .yAxis line {
  fill:none;
  stroke:rgba(0,0,0,.1);
}

.xAxis path, .yAxis path{
  fill: none;
  stroke: black;
  shape-rendering: crispEdges;
}

.xAxis text, .yAxis text {
  font-family: sans-serif;
  font-size: 11px;
}
```

![Day16 練習 - 散布圖 (2)_1](/images/notebook/legacy/f323890d0b5e64adf604.png)

## 二、繪製資料點

再來，要把資料點繪製上去。暫不考慮更新資料的方法，所以直接使用`enter()`把元素加入即可。

這邊要加入的元素是`<circle>`，使用`fill()`來填色，`cx`、`cy`設定圓心點的坐標、`r`設定圓的半徑。

其中坐標也是使用剛才所寫好的坐標尺函式，將資料傳入參數就可以計算出在畫面上的位置。

```js
var circle = svg.selectAll("circle")
  .data(dataSet)
  .enter()
  .append("circle")
  .attr("fill","black")
  .attr("cx",function(d){
    return padding.left + xScale(d[0])
  })
  .attr("cy",function(d){
    return padding.top + yScale(d[1])
  })
  .attr("r",5) 
```

完成的結果

![Day16 練習 - 散布圖 (2)_2](/images/notebook/legacy/2b67a68ae18e78638291.png)

程式碼有上傳到jsfiddle：http://jsfiddle.net/upstairs0102/pu9z3ygc/