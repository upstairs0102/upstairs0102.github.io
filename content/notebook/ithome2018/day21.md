---
slug: "/ithome2018/day21"
title: "Day21 練習 - 線圖"
authors: "thunderboy"
tags: ["ithome","d3.js"]
category: "D3.js 新手開發基本圖表"
collection: "series"
kind: "article"
order: 21
source: "docs/[鐵人賽]D3.js新手開發基本圖表/ithome2018-day21.md"
draft: false
publishedAt:
updatedAt:
---

## 一、使用線產生器繪製線圖

這篇的圖表練習要呈現的是中國及日本在一定區間的GDP，繪製成線圖圖表。

首先設定圖表的寬高、間距，並建立svg

```js
var width = 400
var height = 400
var padding = { top: 50, right: 50, bottom: 50, left: 50}

var svg = d3.select("body").append("svg")
  .attr("width",width)
  .attr("height",height)
```

準備兩組資料的陣列，分別有城市名稱和gdp資料，其中gdp是二維陣列資料，裡面每組陣列將對映到圖表上的各別資料點，其中各別陣列裡的兩個數值為年份及金額。

```js
var dataSet = [
  {
    country: "china",
    gdp: [[2000,11920],[2001,13170],[2002,14550],[2003,16500],[2004,19440],[2005,22870],[2006,27930],[2007,35040],[2008,45470],[2009,51050],[2010,59490],[2011,73140],[2012,83860],[2013,103550]]
  },
  {
    country: "japan",
    gdp: [[2000,47310],[2001,41590],[2002,39800],[2003,43020],[2004,46550],[2005,45710],[2006,43560],[2007,43560],[2008,48490],[2009,50350],[2010,54950],[2011,59050],[2012,59370],[2013,48980]]
  }
]
```

為了比例尺所需，這邊先計算出gdp的最大值。

```js
var gdpMax = 0
for(var i = 0; i < dataSet.length; i++){
    var currentGdp = d3.max(dataSet[i].gdp, function(d){
      return d[1]
  })
  if(currentGdp > gdpMax){
      gdpMax = currentGdp
  }
}
```

使用 `d3.scale.linear()` 建立線性比例尺，x軸對應年份、y軸對應gdp的金額。

```js
var xScale = d3.scale.linear()
  .domain([2000,2013])
  .range([0, width - padding.left - padding.right])
  
var yScale = d3.scale.linear()
  .domain([0,gdpMax])
  .range([height - padding.top - padding.bottom, 0])
```

使用 `d3.svg.line()` 建立線產生器，並使用`x()`及`y()`分別將座標對映到資料的index 0及index 1（將傳入gdp資料，index 0及index 1分別為年份及gdp金額）。

```js
var linePath = d3.svg.line()
  .x(function(d){ return xScale(d[0])})
  .y(function(d){ return yScale(d[1])})
```

開始繪製線條前，先準備將繪製的這兩條線的顏色

```js
var colors = [d3.rgb(0,0,255), d3.rgb(0,255,0)]
```

建立`<path>`。

並使定”`d`”屬性，使用函式設定dataSet內的資料。linePath()即為剛才建立的線產生器的函式，將gdp傳入參數取得”d”欄位所需的路徑資料。

```js
svg.selectAll("path")
  .data(dataSet)
  .enter()
  .append("path")
  .attr("transform", "translate(" + padding.left + "," + padding.top + ")")
  .attr("d", function(d){
      return linePath(d.gdp)
  })
  .attr("fill","none")
  .attr("stroke-width", 3)
  .attr("stroke", function(d,i){
      return colors[i]
  })
  ```

再來就只剩座標點了，不過同樣的練習先前文章當中都已做過多次，所以這邊就不再佔版面，如有需要可參考文章最後面的程式碼連結。

繪製結果如下圖

![Day21 練習 - 線圖_1](/images/notebook/legacy/c93e0ad37e67354ccde5.png)

如希望線條能夠平滑一點，則可使用線產生器中的 interpolate()函式。修改線產生器的程式碼如下

```js
var linePath = d3.svg.line()
  .x(function(d){ return xScale(d[0])})
  .y(function(d){ return yScale(d[1])})
  .interpolate("cardinal")
```

 修改後的結果如下圖

![Day21 練習 - 線圖_2](/images/notebook/legacy/daa248c52823e81890f4.png)

## 二、使用符號產生器繪製標記

前面所繪製出來的線圖，藍線代表中國的GDP、綠色代表日本的GDP。這裡要再加上標記來對應顏色及資料。

我們練習用符號產生器製作藍色和綠色的方塊。

首先使用 `d3.svg.symbol()` 建立符號產生器。由於要產生的形狀是固定的，所以size()放入100、type放入square即可，不需要額外依資料來做計算。

```js
var symbol = d3.svg.symbol()
  .size(100)
  .type("square")
```

再來和前一天的範例類似，但是data()內放的是圖表資料dataSet。dataSet陣列裡有兩個物件分別是中國和日本的資料。設定屬性”transform”及”fill”的設定值放入函式，依照資料的index來計算座標和顏色。

```js
svg.selectAll(“path")
  .data(dataSet)
  .enter()
  .append("path")
  .attr("d", function(d){ return symbol(d) })
  .attr("transform", function(d,i){
      return "translate(" + (padding.left + i*60) + ", " + (height - 10) + ")"
  })
  .attr("fill", function(d,i){ return colors[i]})
```

這樣基本上就完成了，但是執行程式發現繪圖無法成功。原因是因為selectAll(path)和前面發生衝突了。

所以要做一點調整。

selectAll() 中放的改為自訂類別名稱為**mark**（selector取元素類別名稱要加”.”，以這邊為例為”.mark”）。接著在append()加入`<path>`之後，設定元素的屬性同樣加上類別名稱mark，這樣就不會有衝突了。

修改的程式碼如下

```js
svg.selectAll(".mark”) // 類別名稱為mark
  .data(dataSet)
  .enter()
  .append("path")
  .attr("class","mark”) // 加上類別mark
  .attr("d", function(d){ return symbol(d) })
  .attr("transform", function(d,i){
      return "translate(" + (padding.left + i*60) + ", " + (height - 10) + ")"
  })
  .attr("fill", function(d,i){ return colors[i]})
```

最後，再顏色方塊的旁邊再加上文字說明。這邊使用的方法是加入svg的`<text>`元素。

不過座標y軸高度要稍微比方塊的y軸高度調小一點，我實際測試發現`<text>`元素的座標原點並不是以左上角起算。

```js
svg.selectAll(".markText")
  .data(dataSet)
  .enter()
  .append("text")
  .attr("class","markText")
  .attr("transform", function(d,i){
      return "translate(" + (padding.left + 10 + i*60) + ", " + (height - 5) + ")"
  })
  .attr("font-size", 12)
  .text(function(d){
      return d.country
  })
```

完成結果如下圖

![Day21 練習 - 線圖_3](/images/notebook/legacy/78a6fd5bc4c2f763a709.png)

完整的程式碼可參考：http://jsfiddle.net/upstairs0102/gvkeL5a8/