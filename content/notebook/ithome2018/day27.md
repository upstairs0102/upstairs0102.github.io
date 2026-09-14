---
slug: "/ithome2018/day27"
title: "Day27 互動"
authors: "thunderboy"
tags: ["ithome","d3.js"]
category: "D3.js 新手開發基本圖表"
collection: "series"
kind: "article"
order: 27
source: "docs/[鐵人賽]D3.js新手開發基本圖表/ithome2018-day27.md"
draft: false
publishedAt:
updatedAt:
---

## 一、監聽器

D3可以在元素上增加監聽器，語法為 `selection.on(type, function)`

寫起來會非常的似曾相識，簡直就像在寫jquery一樣。比如以下程式，點擊元素後將文字”Click Me"修改為”Thank You"

```html
<p id="mytest">
  Click Me
</p>
```

```js
var mytest = d3.select("#mytest")
    .on("click", function(){
      d3.select(this).text("Thank You")
  })
```

另外滑鼠事件還有：

`mouseover` 游標移入
`mousemove` 游標移動
`mousedown` 滑鼠點擊按下
`mouseup` 滑鼠點擊放開

以下為游標移入移出時修改文字的範例

```js
mytest.on("mouseover", function(){
    d3.select(this).text("Right Here")
  })
  .on("mouseout", function(){
    d3.select(this).text("Click Me")
  })
```

程式範例連結：http://jsfiddle.net/upstairs0102/nwxk6ouj/

## 二、取得游標座標

在事件函式當中，可以使用 `d3.mouse(this)` 來取得滑鼠游標座標，格式為陣列 `[x,y]`。

另一種方式是`d3.event.x`、`d3.event.y`各別取得`x`及`y`座標。

在以下範例首先繪製一個矩形。

```js
var svg = d3.select("body").append("svg")
  .attr("width", 500)
  .attr("height", 500)
  
var rect = svg.append("rect")
  .attr("fill", "steelblue")
  .attr("width", 50)
  .attr("height", 50)
  .attr("x", 100)
  .attr("y", 100)
```

接著在矩形上增加一個點擊事件，並輸出滑鼠游標座標。

當滑鼠在矩最右上角點擊時，會輸出陣列[150,50]（x座標150、y座標為100）

```js
rect.on("click", function(){
    console.log(d3.mouse(this)) // [50,50]
})
```

在範例中再做一些變化，這裡我們希望游標移過矩形上方時，會隨著游標的移動、在游標的右側以文字顯示目前游標的座標，而移出矩形時文字的消失。

首先繪製一個隱藏的`<text>`在畫面當中，所以要**設定屬性display為”none”**。

```js
var text = svg.append("text")
    .attr("display", "none")
```

在矩形上增加`mouseove`事件，當游標經過時設定`<text>`的座標為游標x軸+50、游標y軸座標，並**將display設為null**將文字顯示出來。當游標移出時再重新把**display設為”none”**隱藏。

```js
rect
  .on("mousemove", function(){
    var x = d3.mouse(this)[0]
    var y = d3.mouse(this)[1]

    text.attr("display", null) // 取消隱藏
      .attr("x", x + 20)
      .attr("y", y)
      .text("[" + x + "," + y + "]")
  })
    .on("mouseout", function(){
      text.attr("display", "none")
  })
```

程式範例連結：http://jsfiddle.net/upstairs0102/o5rz1e8m/

在D3當中除了滑鼠事件之外，還有鍵盤、行動裝置的點擊事件。

## 三、拖曳

拖曳事件在D3當中的寫法不太一樣，除了拖曳動作之外，還有縮放(zoom)動作都是屬於`d3.behavior`當中的方法。

建立一個拖曳行為的語法為 `d3.behavior.drag`。

建立拖曳行為後首先要使用`origin`設定拖曳的起點座標。

在拖曳行為當中可建立監聽事件：

`dragstart` 拖曳開始事件
`dragend` 拖曳結束事件
`drag` 拖曳事件（開始及結束之間）

以下程式範例中建立一個拖曳行為。

這一個拖曳行為是要給圓形元素使用的，所以在取得座標時，origin中設定的起始座標為圓心座標（cx及cy）、而drag拖曳事件中將拖曳對象的cx及cy。

```js
var drag = d3.behavior.drag()
  .origin(function(d,i){
      return {x: d.cx, y: d.cy}
  })
  .on("dragstart", function(d){
      console.log("拖曳開始")
  })
  .on("dragend", function(d){
      console.log("拖曳結束")
  })
  .on("drag", function(d){
      d3.select(this)
        .attr("cx", d.cx = d3.event.x) // d3.event.x取得游標x座標
        .attr("cy", d.cy = d3.event.y) // d3.event.y取得游標y座標
  })  
```

其中比較要注意的是，如果沒有設定origin，拖曳座標會等同滑鼠座標，滑鼠游標點擊時，無論點擊的位置在圓形的哪一個位置，圓形會移動到圓心和游標對齊。

接著，將兩個圓形元素加入到畫布中，並使用call將拖曳行為加入即完成。

```js
var circles = [{cx: 150, cy: 200, r: 30},
    {cx: 250, cy: 200, r: 30}]
  
svg.selectAll("circle")
  .data(circles)
  .enter()
  .append("circle")
  .attr("cx", function(d){ return d.cx })
  .attr("cy", function(d){ return d.cy })
  .attr("r", function(d){ return d.r })
  .attr("fill", "steelblue")
  .call(drag)
```

範例程式連結：http://jsfiddle.net/upstairs0102/m073ncb5/