---
slug: "/ithome2018/day12"
title: "Day12 練習 - 直式長條圖(3)"
authors: "thunderboy"
tags: ["ithome","d3.js"]
category: "D3.js 新手開發基本圖表"
collection: "series"
kind: "article"
order: 12
source: "docs/[鐵人賽]D3.js新手開發基本圖表/ithome2018-day12.md"
draft: false
publishedAt:
updatedAt:
---

昨天將直式長條圖的更新繪制的部份完成了，今天主要是要再繼續延續做一點練習，將原本的程式碼做一點改寫練習。

## 一、取得常態分佈亂數

原本在取亂數的時候是使用javascript原生的Math.random()方法。

D3提供了一些數學方法可以供我們取得到更符合真實資料的函式，這邊要使用的是**d3.random.normal()**，用於產生常態分佈。

該函式的第一個參數是「平均值」，第二個是「標準差」。

這邊試著將原來的getData()來改寫

```js
function getData(){    
  dataSet = []  
  var rand = d3.random.normal(100,30)    
  for(var i = 0; i<7; i++){
      var value = Math.round(rand())
    dataSet.push(value)
  }

  draw()
}
```

同樣是取亂數，所以產生出來的圖和昨天的沒什麼差異，但如果試著修改標準差就會有不同的數值分佈的呈現。

## 二、線性比例尺(Linear Scale)

d3的比例尺是很重要的一個部份，有很多不同的數學方法和應用並不是那麼容易討論完，不過這邊做為練習，先試著做個簡單的練習後續再慢慢深入討論和學習。

比例尺簡單說就是能將數值從一個區間對應到另一個區間，主要有定量比例尺和序數比例尺兩種。

定量比例尺包括了線性比例尺、指數和對數比例尺、量子和分位比例尺、設定值比例尺。序數比例尺包含了

這邊要使用的是線性比例尺，與線性函數類似，計算線性的對應關係。

各別的使用方法暫不深入探討，就直接拿昨天的程式碼試著改寫，其中將直式長條圖繪制出來的函式如下

```js
function fillRect(target){
  target.attr("fill", "steelblue")
    .attr("x", function(d,i){
      return padding.left + i * rectStep
    })
    .attr("y", function(d){
      return height - padding.bottom - graphicHeight * (d / maxValue) // 畫面高度扣掉長條圖高度作為繪製長條圖的起點
    })
    .attr("width", rectWidth)
    .attr("height", function(d){
      return graphicHeight * (d / maxValue) // 使用maxValue最大值作為畫面高度100%計算該筆資料佔畫面的百分比
    })
}
```

其中長條圖的高度是用該筆資料的數值，去計算最大值的百分比、所佔畫面的比例。

所以我們會有兩個變數，「畫面高度」是graphicHeight、「最大數值」是maxValue。公式為graphicHeight * (data / maxValue)

這裡來試著用D3的線性比例尺來改寫。以下簡單說明：

1. 首先建立一個線性比例尺 d3.scale.linear()

2. 設定定義域 linear.domain()，此例中定義域就是「最大數值」maxValue

3. 設定值域 linear.range()，此例中值域就是「畫面高度」graphicHeight

以下即為完成改寫的程式碼

```js
function fillRect(target){
  var linear = d3.scale.linear()
    .domain([0,maxValue])
    .range([0,graphicHeight])

  target.attr("fill", "steelblue")
    .attr("x", function(d,i){
      return padding.left + i * rectStep
    })
    .attr("y", function(d){
      return height - padding.bottom - linear(d)
    })
    .attr("width", rectWidth)
    .attr("height", function(d){
      return linear(d)
    })
}
```

同樣的完整程式碼放上jsfiddle了：http://jsfiddle.net/upstairs0102/3fcbu7ge/