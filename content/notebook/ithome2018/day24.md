---
slug: "/ithome2018/day24"
title: "Day24 練習 - 圓餅圖 (1)"
authors: "thunderboy"
tags: ["ithome","d3.js"]
category: "D3.js 新手開發基本圖表"
collection: "series"
kind: "article"
order: 24
source: "docs/[鐵人賽]D3.js新手開發基本圖表/ithome2018-day24.md"
draft: false
publishedAt:
updatedAt:
---

## 一、使用版面配置(Layout)畫出圓餅圖

在前面的文章「**Day20 繪製產生器 (3)**」中有介紹過使用弧產生器來繪製圓餅圖的方法，使用弧產生器需使用弧形的角度來產生圖形，可是要計算角度是比較麻煩一點的事情；在此篇練習中將使用D3提供的**版面配置(Layout)**來幫助我們用比較簡單一點的方法來繪製。

v3.x的D3提供了12種Layout：`圓餅圖(Pie)`、`力導向圖(Force)`、`弦圖(Chord)`、`樹狀圖(Tree)`、`叢集圖(Cluster)`、`捆圖(Bundle)`、`包裝圖(Pack)`、`長條圖(Histogram)`、`區域圖(Partition)`、`堆疊圖(Stack)`、`矩陣樹狀圖(Treemap)`、`層級圖(Hierarchy)`。這裡要使用的是圓餅圖(Pie)。

首先一樣先加入`<svg>`

```js
var width = 400
var height = 400

var svg = d3.select("body").append("svg")
  .attr("width",width)
  .attr("height",height)
```

準備好要圓餅圖要使用的二維陣列資料。

```js
var dataSet = [["小米", 60.8], ["三星", 58.4], ["聯想", 47.3], ["蘋果", 46.6], ["華為", 41.3], ["酷派", 40.1], ["其他", 111.5]]
```

圓餅圖layout的方法為`d3.layout.pie()`，使用`pie.value()`用來取得資料，下列程式中放入了一個function來取陣列中index為1的資料。

和圖形產生器的使用方式類似，回傳的變數可作為函式、用來轉換繪製所需的資料，在圓餅圖layout中所需傳入的參數為我們的數據資料（所以就不需要像弧產生器需傳入角度了）。

```js
var pie = d3.layout.pie()
  .value(function(d){
    return d[1]
  })
  
var pieData = pie(dataSet)
```

在這裡如果我們下了console.log(pieData)檢視剛才透過layout函式所取到的資料如下，會發現裡面的內容其實就是已經轉換為提供給弧產生器所需繪製的參數了。

![Day24 練習 - 圓餅圖 (1)_1](/images/notebook/legacy/25b57e342ce0b6b3e7b9.png)

再來需建立一個弧產生器

```js
var outerRadius = width / 3
var innerRadius = 0

var arc = d3.svg.arc()
  .innerRadius(innerRadius)
  .outerRadius(outerRadius)
```

再來和先前文章中用弧產生器繪製圓餅圖的方式一模一樣了。

差別就在於不需要自己辛苦的手動計算出弧產生器所需的參數資料。

```js
var color = [d3.rgb(214, 39, 40), d3.rgb(31, 119, 180), d3.rgb(174, 199, 232), d3.rgb(255, 127, 14), d3.rgb(255, 187, 120), d3.rgb(44, 160, 44), d3.rgb(152, 223, 138)]

var arcs = svg.selectAll("g")
  .data(pieData)
  .enter()
  .append("g")
  .attr("transform", "translate(" + (width/2) + "," + (height/2) + ")")
  .append("path")
  .attr("fill", function(d,i){
    return color[i]
  })
  .attr("d", function(d){
    return arc(d)
  })
```

結果如下圖

![Day24 練習 - 圓餅圖 (1)_2](/images/notebook/legacy/b9b30287f0d737b5e93b.png)

## 二、弧內的中心座標

再來要做的是在圓餅圖當中加入數據，每一組數字要放入各別資料的弧形當中。

要取得弧內的中心點座標，可使用弧產生器所提供的函式centroid()來計算。使用的方法為`arc.centroid(d)`。

centroid()傳回一個陣列``[x,y]``，即為弧形當中的座標。以此方法我們在原本的圓餅圖中以svg標籤`<text>`加入數據、並設定座標等屬性，程式碼如下

```js
arcs.append("text")
    .attr("transform", function(d){
      var x = arc.centroid(d)[0]
    var y = arc.centroid(d)[1]
    return "translate(" + (x + width/2) + "," + (y + height/2) + ")"
  })
  .attr("text-anchor", "middle")
  .text(function(d){
      var percent = Number(d.value) / d3.sum(dataSet, function(d){ return d[1] }) * 100
    return percent.toFixed(1) + "%"
  })
```

基本上到這邊已算完成，只是看起來好像哪裡怪怪的。

![Day24 練習 - 圓餅圖 (1)_3](/images/notebook/legacy/bb2374445dd0ac2405ad.png)

我們希望把數字往外移一點，所需要知道座標位移的方式來做調整。

很重要的一點需要知道的是，**弧中心點位於圓心、並不是畫布的中心點**。

所以如果我們將上面程式中的座標試著改為 arc.centroid(d)[0] * 2 ，結果會變成下圖

![Day24 練習 - 圓餅圖 (1)_4](/images/notebook/legacy/f0ee91ad077076e06735.png)

由圓心作為座標起點的中心點座標，乘以2後座標會落在弧形圖的邊緣。

了解位移的邏輯後，再將上面的程式重新調整一下，將原本的座標改為乘以1.4，程式碼如下

```js
arcs.append("text")
    .attr("transform", function(d){
      var x = arc.centroid(d)[0] * 1.4
    var y = arc.centroid(d)[1] * 1.4
    return "translate(" + (x + width/2) + "," + (y + height/2) + ")"
  })
  .attr("text-anchor", "middle")
  .text(function(d){
      var percent = Number(d.value) / d3.sum(dataSet, function(d){ return d[1] }) * 100
    return percent.toFixed(1) + "%"
  })
```

繪出的圖形看起來比較順眼了。

![Day24 練習 - 圓餅圖 (1)_5](/images/notebook/legacy/b5bce9c2f49c7cdfbd46.png)
