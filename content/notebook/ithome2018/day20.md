---
slug: "/ithome2018/day20"
title: "Day20 繪製產生器 (3)"
authors: "thunderboy"
tags: ["ithome","d3.js"]
category: "D3.js 新手開發基本圖表"
collection: "series"
kind: "article"
order: 20
source: "docs/[鐵人賽]D3.js新手開發基本圖表/ithome2018-day20.md"
draft: false
publishedAt:
updatedAt:
---

## 一、弧產生器

相關的方法

`d3.svg.arc()` 建立弧產生器，回傳可使用的函式
`src.innterRadius()` 內半徑
`src.outerRadius()` 外半徑
`src.startAngle()` 起始角度
`src.endAngle()` 結束角度

角度的單位是π，0°時是0π、180°是1π、360°是2π，可以使用Math.PI來計算。

使用的方式和前一天介紹的線產生器、區域產生器皆類似，以下是範例程式碼

```js
var dataSet = { startAngle: 0, endAngle: Math.PI * 0.75 }

var arcPath = d3.svg.arc()
  .innerRadius(50)
  .outerRadius(100)
  
svg.append("path")
  .attr("d", arcPath(dataSet))
  .attr("transform", "translate(250,250)")
  .attr("stroke", "black")
  .attr("stroke-width", "3px")
  .attr("fill", "yellow")
```

 下圖為結果

![Day20 繪製產生器 (3)_1](/images/notebook/legacy/f344bf4c098a0c83f98b.png)

如果我們檢視D3幫我們產生出來的svg可以看到如下

![Day20 繪製產生器 (3)_2](/images/notebook/legacy/74898f68418ab48ecd30.png)

弧產生器多用在圓餅圖、弦圖等，以下試著用弧產生器加入多個`<path>`標籤，製作簡易的圓餅圖。

首先準備一個具有四組starAngle和endAngle的陣列資料，第一組的起始角度是0°、依序到最後一組的結束角度為360° (Math.PI*2)。

```js
var dataSet = [
  { startAngle: 0, endAngle: Math.PI * 0.6 },
  { startAngle: Math.PI * 0.6, endAngle: Math.PI},
  { startAngle: Math.PI, endAngle: Math.PI * 1.7},
  { startAngle: Math.PI * 1.7, endAngle: Math.PI * 2}
]
```

設定屬性的方式也都相同，設定”`d`”屬性以及”`fill`”時傳入callback函式將陣列中的資料傳入弧產生器函式。
  
```js  
var arcPath = d3.svg.arc()
  .innerRadius(0)
  .outerRadius(100)
  
var colorArr = ["#587791","#81a7a6","#efc57f","#de6868"]
  
svg.selectAll("path")
  .data(dataSet)
  .enter()
  .append("path")
  .attr("d", function(d){ return arcPath(d) })
  .attr("transform", "translate(250,250)")
  .attr("stroke", "black")
  .attr("stroke-width", "1px")
  .attr("fill", function(d,i){
      return colorArr[i]
  })
```  

結果如圖

![Day20 繪製產生器 (3)_3](/images/notebook/legacy/86b38e85b2260982ce88.png)

再為要為圓餅圖加入文字，我們希望加入的位置是在圓餅圖中四個區塊的正中間，可以使用centroid()方法。

`src.centroid()` 取用弧產生器的centroid函式回傳正中間的位置

延續上述的程式，再寫一段加入文字的程式碼

```js
 svg.selectAll("text")
    .data(dataSet)
    .enter()
    .append("text")
    .attr("transform", function(d){
        return "translate(250,250)" + "translate(" + arcPath.centroid(d) + ")"
    })
    .attr("text-anchor", "middle")
    .attr("fill", "whites")
    .attr("font-size", "18px")
    .text(function(d){
        return Math.floor((d.endAngle - d.startAngle) * 180 / Math.PI) + "°"
    })
```

結果如圖

![Day20 繪製產生器 (3)_4](/images/notebook/legacy/114444b4cc3c7eb34e48.png)

二、符號產生器

D3的符號產生器內建了「**圓型**」、「**十字**」、「**鑽石**」、「**方型**」、「**倒三角**」、「**正三角**」六種圖型。

使用的方法

`d3.svg.symbol()` 建立符號產生器
`src.size()` 設定尺寸，單位是象素的平方，比如設定為100則寬高各為10
`src.type()` 設定樣式，分別為"`circle`", "`cross`", "`diamond`", "`square`", "`triangle-down`", "`triangle-up`”六種

和前面介紹的幾種圖型產生器有點不同的地方在於，他並不是由數值資料所去計算，是直接用樣式類別的名稱去指定就可以了。

以下為範例程式碼

```js
var dataSet = ["circle", "cross", "diamond", "square", "triangle-down", "triangle-up"]

var symbol = d3.svg.symbol()
  .size(function(d){ return 200 })
  .type(function(d,i){ return d })
  
svg.selectAll("path")
    .data(dataSet)
  .enter()
  .append("path")
  .attr("d", function(d){ return symbol(d) })
  .attr("transform", function(d,i){
      return "translate(" + (50 + i*50) + ", 20)"
  })
  .attr("fill", "black")
```

以下為結果

![Day20 繪製產生器 (3)_5](/images/notebook/legacy/522048c024a9239ff15f.png)