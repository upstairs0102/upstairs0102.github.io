---
slug: "/ithome2018/day25"
title: "Day25 練習 - 圓餅圖 (2)"
authors: "thunderboy"
tags: ["ithome","d3.js"]
category: "D3.js 新手開發基本圖表"
collection: "series"
kind: "article"
order: 25
source: "docs/[鐵人賽]D3.js新手開發基本圖表/ithome2018-day25.md"
draft: false
publishedAt:
updatedAt:
---

## 一、繪製座標改以圖表本身作為起始點

延續前一篇的程式碼，我已已透過弧內中心座標點的計算來繪製出圓餅圖內的數字，為方便閱讀把繪製數字的程式碼再貼過來。

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

在這邊計算transform屬性的function中，除了計算弧內中心點外，x軸座標還外加**width/2**、以及y軸座標外加**height/2**。這是因為在此段程式碼中arcs本身的座標原點是由畫布起算、而非由圓餅圖本身起算的關係。

先回顧一下arcs的宣告程式。

```js
var arcs = svg.selectAll("g")
  .data(pieData)
  .enter()
  .call(draw)
```

以我個人的測試推斷，應該是因為加上了`enter()`方法，回傳的物件型態arcs已經不是標籤的選擇集。

這裡寫一個console.log(arcs)來檢視一下內容

![Day25 練習 - 圓餅圖 (2)_1](/images/notebook/legacy/e888aa915d6643bf9f9e.png)

再寫一個console.log(svg.selectAll(“g”)檢視內容

![Day25 練習 - 圓餅圖 (2)_2](/images/notebook/legacy/0b3b9e87283e7c76a26a.png)

恩，的確不太一樣。

測試了一下，`svg.selectAll("g")`確實是由`<g>`本身座標為起始點而已畫布本身為起始點了。

所以整理一下。如果使用`<g>`標籤本身的選擇集來計算，在處理圖型座標時就不需要再考慮圖表在畫布本身的座標位置，計算上就變得比較單純。

上面那段加入圓餅圖數字的程式碼修改如下。

```js
var g = svg.selectAll("g")
      
g.append("text")
  .attr("transform", function(d){
    var x = arc.centroid(d)[0] * 1.4
    var y = arc.centroid(d)[1] * 1.4
    return "translate(" + x + "," + y+ ")"
  })
  .attr("text-anchor", "middle")
  .text(function(d){
    var percent = Number(d.value) / d3.sum(dataSet, function(d){ return d[1] }) * 100
    return percent.toFixed(1) + "%"
  })
```

## 二、繪製圓餅圖文字提示

目前我們繪製出來的圓餅圖已加上數字（可參考上一篇的成果圖片），但還是看不出來每個區塊各自的資料是什麼，所以還要再加上資料標籤。

延續上面的`<g>`標籤選擇集繼續繪圖。

寫法和繪製數字時方法大致類似，同樣使用`arc.centroid(d)`回傳的`[x,y]`取得弧中心點，由於我們希望文字位置在弧形外面一些，在上一篇有說明到**起點位置在圓心、所以中心點乘以2可求得弧形的邊緣**，而這裡乘以2.5得到弧形更外面一點的座標。

```js
g.append("text")
  .attr("transform", function(d){
    var x = arc.centroid(d)[0] * 2.5
    var y = arc.centroid(d)[1] * 2.5
    return "translate(" + x + "," + y + ")"
  })
  .attr("text-anchor", "middle")
  .text(function(d){
    return d.data[0]
  })
```

再來使用svg標籤`<line>`繪製連接線，設定屬性`x1`、`x2`、`y1`、`y2`的座標，同樣也是用`arc.centroid(d)`取中心點依樣畫葫蘆來計算。

```js
g.append("line")
  .attr("stroke", "black")
  .attr("x1", function(d){ return arc.centroid(d)[0] * 2 })
  .attr("x2", function(d){ return arc.centroid(d)[0] * 2.2 })
  .attr("y1", function(d){ return arc.centroid(d)[1] * 2 })
  .attr("y2", function(d){ return arc.centroid(d)[1] * 2.2 }) 
```

成果如下圖

![Day25 練習 - 圓餅圖 (2)_3](/images/notebook/legacy/50e91bc85bc90b288c8c.png)