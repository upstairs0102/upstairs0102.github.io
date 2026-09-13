---
slug: "/ithome2018/day17"
title: "Day17 練習 - 散布圖 (3)"
authors: "thunderboy"
tags: ["ithome","d3.js"]
category: "D3.js 新手開發基本圖表"
collection: "series"
kind: "article"
order: 17
source: "docs/[鐵人賽]D3.js新手開發基本圖表/ithome2018-day17.md"
draft: false
publishedAt:
updatedAt:
---

前一天已經完成了一個散布圖的練習繪製，今天延續原本的程式碼做一點變化。今天要完成的目標有兩個：

1. 圖表繪製更新資料

2. 資料更新時圖點要有動畫效果

## 一、圖表繪製更新資料

原先的圖表是固定繪製一筆預先準備好的資料，這裡要改寫成能夠將每次不同的資料重新繪製上去，所要來要做一些改寫。

相關的討論可參考前面的「Day08 D3 資料綁定的理解(1)」、「Day09 D3 資料綁定的理解(2)」以及「Day11 練習 - 直式長條圖(2)」也有做過同樣的練習。

首先來修改資料，原先資料是寫死的，為測試更新資料這裡改成寫隨機產生亂數資料。

先新增一個按鈕並加上點擊事件。

```html
<button type="button" onclick="getData()">
  繪製圖表
</button>
```

隨機產生一組二維陣列並更新到原來的dataSet變數當中。

```js
function getData(){
    dataSet = []  
  var rand = d3.random.normal(50,15)    
  for(var i = 0; i<10; i++){
    var valueX = (rand()/100).toFixed(1)
    var valueY = (rand()/100).toFixed(1)
    dataSet.push([valueX, valueY])
  }

  draw() // 開始繪製
}
```

在後面我們將把繪製圖表的主要程式碼寫在命名為**drawAction**的function當中，不過在寫drawAction之前先來準備一下後面所可以共用的程式碼。

先把元素屬性的設定抽出來寫成共用的function如下。

```js
function fillCircle(el){
    el.attr("fill","black")
    .attr("cx",function(d){
      return padding.left + xScale(d[0])
    })
    .attr("cy",function(d){
      return padding.top + yScale(d[1])
    })
    .attr("r",5) 
}
```

原先的程式碼只有實作`enter()`方法將元素加入到畫面上，但為了要能做到更新資料所以要將`update()`和`exit()`方法補上。

由於前面已經先將繪製圓型元素的屬性設定寫好，所以這個function就可以變得很簡潔，而且後續要做一些變化時也會比較容易。

```js
function draw(){
  var update = svg.selectAll("circle")
    .data(dataSet)
  var enter = update.enter()
  var exit = update.exit()
  
  update.call(fillCircle)
  enter.append("circle").call(fillCircle)
  exit.remove()
}
```

這邊的寫法和前面文章做過的練習稍有不同的地方是，`update()`和`enter()`都是使用`call()`這個方法，**將自身當作參數傳給fillCircle**。

如果寫成

```js
fillCircle(update)
fillCircle(enter.append(“circle”))
```

作用是一樣的。

不過使用call()的話除了語義上比較清楚外，後面還可以使用鏈式語法接上其他的方法。

## 二、資料更新動畫效果

這裡要做的是，第一次繪製圓點到圖表上時、以及更新資料重新繪製圖表繪製圖表時，要加上圓點移動的動畫效果上去。

D3的動畫後面的文章會再詳細一點的做討論，今天就先用我們已經寫好的散布圖的程式碼快速的來玩玩看。

`selection.transition()` 方法會回傳「**過渡物件**」，取得過渡物件後，之後一般都會跟著`delay()`、`duration()`、`ease()`三個方法來定義延遲、過渡時間和過渡樣式。

**在過渡物件之後設定新的樣式就會產生動畫效果。**

延續前面的**draw()**這個function來做一些修改；D3做動畫比想像中要簡單的多，只加了幾行程式碼就完成了。

```js
function draw(){
  var update = svg.selectAll("circle")
    .data(dataSet)
  var enter = update.enter()
  var exit = update.exit()
  
  update
    .transition()
    .duration(500) // 過渡時間為500
    .call(fillCircle)

  enter
    .append("circle")
    .attr("fill","black")
    .attr("cx",padding.left)
    .attr("cy",height - padding.bottom)
    .attr("r",5)
    .transition()
    .duration(500) //過渡時間為500
    .call(fillCircle)

  exit.remove()
}
```

檢視完成的效果可看jsfiddle：http://jsfiddle.net/upstairs0102/15bmcf2v/

