---
slug: "/ithome2018/day28"
title: "Day28 練習 - 直方圖 (1)"
authors: "thunderboy"
tags: ["ithome","d3.js"]
category: "D3.js 新手開發基本圖表"
collection: "series"
kind: "article"
order: 28
source: "docs/[鐵人賽]D3.js新手開發基本圖表/ithome2018-day28.md"
draft: false
publishedAt:
updatedAt:
---

## 一、條直方圖(Column Histogram)繪製

**直方圖 (Histogram Chart)**和**長條圖 (Line Chart)**有些微的不同，在「Day09 練習題準備 - 圖表類型的理解」中曾經討論過圖表的分類。長條圖的資料點是離散的，而直方圖是連續的資料形式，每一個點代表的是一個區間的資料，可以用長條、或者線（較多資料點時適用）的方式來呈現。

首先準備一組直方圖的資料，用`d3.random.normal()`產生隨機的常態分佈資料。

```js
var rand = d3.random.normal(170, 10)

var dataSet = []

for(var i=0; i<100; i++){
    dataSet.push(rand())
}
```

加入svg

```js
var width = 500
var height = 380
var padding = {top:30, right:30, bottom:30, left:30}

var svg = d3.select("body").append("svg")
  .attr("width",width)
  .attr("height",height)
```

D3也提供了直方圖的layout，語法為`d3.layout.histogram()`。

`histogram.range([min, max])` 設定資料分佈的範圍
`histogram.bins(count)` 設定長條圖個數
`histogram.frequency(bool)` true為數量、false為機率

```js
var binNum = 10, rangeMin = 130, rangeMax = 210

var histogram = d3.layout.histogram()
  .range([rangeMin, rangeMax])
  .bins(binNum)
  .frequency(true)
  
var hisData = histogram(dataSet)
```

把hisData印出來後可看到資料結構如下圖。

其中`x`為資料區間的下限值、`dx`為區間的長度、`y`為落到此區間的數量。

![Day28 練習 - 直方圖 (1)_1](/images/notebook/legacy/3fce6d4b73846660f8ac.png)


接著要建立比例尺，由於x軸的資料為**離散**的，所以要使用的是**序數比例尺(Ordinal Scale)**，而y軸要使用的是**線性比例尺(Linear Scale)**。

在前面的文章已多次練習過線性比例尺（可參考Day13、Day14、Day16文章）。

序數比例尺使用方式有些許不同，序數比例尺的定義域以及值域都是離散的，在定義域放入剛才以直方圖layout轉換出來的x；而值域放入座標值。

其中值域這邊使用的方法是`ordinal.ordinalRoundBands([min, max])`。`rangeRoundBands`和`rangeBands`類似，都是可以放入資料區間（如使用range則需放入所有的各別資料），而`rangeRoundBands`的差別是會將結果取整數。

```js
var xAxisWidth = width - padding.left - padding.right
var yAxisWidth = 450
var xTicks = hisData.map(function(d){ return d.x }) // 直方圖layout轉換出來的資料中的x

var xScale = d3.scale.ordinal() // 序數比例尺
  .domain(xTicks) // 定義域
  .rangeRoundBands([0, xAxisWidth]) // 值域

var yScale = d3.scale.linear() // 線性比例尺
  .domain([d3.min(hisData, function(d){ return d.y }), d3.max(hisData, function(d){ return d.y })]) // 定義域
  .range([5, yAxisWidth]) // 值域
```

接著開始繪製x軸刻度

```js
var xAxis = d3.svg.axis()
  .scale(xScale)
  .orient("bottom")

svg.append("g")
  .attr("class", "xAxis")
  .attr("transform", "translate(" + padding.left + "," + (height - padding.bottom) + ")")
  .call(xAxis)
```

以svg元素`<rect>`繪製直方圖。

其中data()放入的就是layout所轉換出來的資料，設定屬性`x`、`y`、`height`由layout資料中的x、y資料使用比例尺函式做計算。

而width屬性使用比例尺所提供的`rangeBand()`函式取得每一段的寬度。

```js
var gRect = svg.append("g")
  .attr("transform", "translate(" + padding.left + "," + (-padding.bottom) + ")")
  
gRect.selectAll("rect")
  .data(hisData)
  .enter()
  .append("rect")
  .attr("class", "rect")
  .attr("x", function(d,i){
      return xScale(d.x)
  })
  .attr("y", function(d,i){
      return height - yScale(d.y)
  })
  .attr("width", function(d,i){
      return xScale.rangeBand()
  })
  .attr("height", function(d){
      return yScale(d.y)
  })
```

結果如下圖。

![Day28 練習 - 直方圖 (1)_2](/images/notebook/legacy/5d5d31901adfa7cd7f93.png)

## 二、序數比例尺(Ordinal Scale)間距設定

序數比例尺中的`rangeRoundBands`可以選擇加入第2及第3個參數，第2個參數是所有區間之間的間距(padding)、第3個參數是單獨設定最左和最右兩邊的間距。

間距需輸入0~1之間的數值，單位為區間寬度的倍數。比如說，間距設為0.1時間距寬度即為區間寬度的1/10，如設為1、則間距和區間寬度會相等（區間會不見）。

以下修改原程式碼，將間距設為0.1、左右兩邊的間距設為0.3。

```js
var xScale = d3.scale.ordinal()
  .domain(xTicks)
  .rangeRoundBands([0, xAxisWidth],0.1,0.3)
```

結果如下圖。

![https://ithelp.ithome.com.tw/upload/images/20181111/20096057mrSzSb8wFA.png](https://ithelp.ithome.com.tw/upload/images/20181111/20096057mrSzSb8wFA.png)

線上檢視連結可參考：http://jsfiddle.net/upstairs0102/dnfye7mv/
