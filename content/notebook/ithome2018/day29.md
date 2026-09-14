---
slug: "/ithome2018/day29"
title: "Day29 練習 - 直方圖 (2)"
authors: "thunderboy"
tags: ["ithome","d3.js"]
category: "D3.js 新手開發基本圖表"
collection: "series"
kind: "article"
order: 29
source: "docs/[鐵人賽]D3.js新手開發基本圖表/ithome2018-day29.md"
draft: false
publishedAt:
updatedAt:
---

## 一、使用線性比例尺繪製刻度

前述程式範例的x軸使用的比例尺為序數比例尺，**由於資料是離散的，所以繪製出來的刻度會在長條圖的正中間**。
s
而有另一種直方圖的呈現方式是**讓刻度顯示在直方圖的邊緣**的，樣式大約會是如下圖的呈現方式。

![Day29 練習 - 直方圖 (2)_1](/images/notebook/legacy/5095a4521bde40e7b214.png)

這邊我嘗試使用**線性比例尺**來繪製刻度。

所以此張圖表的x軸就會有兩種比例尺 - **長條圖使用原來的序數比例尺、刻度使用線性比例尺**。

寫一個新的線性比例尺如下。由於原先已限定最小值及最大值，所以直接放入定義域(domain)中即可、值域同樣是放入座標範圍。

```js
var xAScale = d3.scale.linear()
  .domain([rangeMin, rangeMax])
  .range([0, xAxisWidth])
```

再來把原本的刻度中的比例尺換成線性比例尺。

這裡要在刻度上增加一個方法`ticks(n)`來設定刻度的數量。如果沒有設定的話，刻度和直方圖的bins數量可能會對應不起來。

我們預期刻度位置會在各別直方圖的邊緣，所以這邊使用bins數量加1來計算。

```js
var xAxis = d3.svg.axis()
  .scale(xAScale)
  .orient("bottom")
  .ticks(binNum+1)
```

不過需要注意的一點是，比例尺的刻度數量實際上不是設定了幾個就會是幾個，他取數量的機制是會先找出「**具代表性的值**」後再調整出實際的數量，在這裡因為已經事先測試可以達到預期的效果（剛好每個刻度上的數字間隔為10，不是太零碎的值）。

如果說這邊在ticks中參數設為12，他仍然是只有8條刻度（數字間隔為10比較好看），ticks參數設18就真的設為18條（剛好數字間隔會為5）

所以如果要避免出差錯的話，那就使用`tickValues(values)`來指定刻度了，可以改為這樣寫。

```js
var xAxis = d3.svg.axis()
  .scale(xAScale)
  .orient("bottom")
  .tickValues([130, 140, 150, 160, 170, 180, 190, 200, 210])
```

線上範例連結：http://jsfiddle.net/upstairs0102/gojwxc9v/

## 二、線直方圖

但刻度較多的時候，直方圖也可以改用線直方圖的方式來呈現。

這邊使用圖形產生器中的`d3.svg.line()`來建立繪製線條的函式，延用原本的比例尺來取得x、y軸座標，最後再使用`<path>`繪製就完成了。

```js
var lineGenerator = d3.svg.line()
  .x(function(d){ return xScale(d.x) })
  .y(function(d){ return height - yScale(d.y) })
  .interpolate("basis")
  
var gLine = svg.append("g")
    .attr("transform", "translate(" + padding.left + "," + ( -padding.bottom ) + ")")

gLine.append("path")
  .attr("class", "linePath")
  .attr("d", lineGenerator(hisData))
```

![Day29 練習 - 直方圖 (2)_2](/images/notebook/legacy/4d099ad8772472bd9c5e.png)

線上範例連結：http://jsfiddle.net/upstairs0102/zwevmr6y

不知不覺鐵人賽也進入尾聲了（呼~XD）。原先打算做個圖表互動的練習看來是來不及了，不過在短短的時間也完成了許多基本的圖表練習；剩下的心得，明天再一起做個總結吧。

