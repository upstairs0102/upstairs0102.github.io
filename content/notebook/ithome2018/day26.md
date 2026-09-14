---
slug: "/ithome2018/day26"
title: "Day26 練習 - 圓餅圖 (3)"
authors: "thunderboy"
tags: ["ithome","d3.js"]
category: "D3.js 新手開發基本圖表"
collection: "series"
kind: "article"
order: 26
source: "docs/[鐵人賽]D3.js新手開發基本圖表/ithome2018-day26.md"
draft: false
publishedAt:
updatedAt:
---

## 一、圓餅圖layout繪製角度

圓餅圖的layout提供了`pie.startAngle(pi)`及`pie.endAngle(pi)`兩個方法來設定圖形的**起始**及**結束**角度。

將前面的程式碼貼過來看，原先我們建立layout函式是這樣寫的

```js
var pie = d3.layout.pie()
    .value(function(d){
      return d[1]
  })
```

原先在建立圓餅圖layout時並沒有使用startAngle及endAngle兩個方法設定起始及結束角度，所以按照預設畫出了完整的圓餅圖。

如果加上這兩個方法，如下

```js
var pie = d3.layout.pie()
  .startAngle(0)
  .endAngle(Math.PI * 0.5)
  .value(function(d){
    return d[1]
  })
```

設定角度的單位是π，0°時是0π、180°是1π、360°是2π，可以使用Math.PI來計算。

以上述程式由於endAngle設定為0.5π，所以畫出來的圖形即為1/4個圓

![Day26 練習 - 圓餅圖 (3)_1](/images/notebook/legacy/dd3a1bbe35962a74340d.png)


## 二、展開圓餅圖的動畫

這裡要在圓餅圖上用transition做動畫，要包含以下兩個動畫效果：

1.更新資料時，起始角度和結束角度皆為0°，500ms的過渡後起始角度為0°、結束角度為360°成為完整的一個圓。

2.動畫結束時，將數值、資料標題、連接線加入到畫面。

使用`tween`及`each`兩個方法，程式碼如下。

```js
d3.transition()
    .duration(500)
    .tween("move", function(){
      return function(t){
            // 1.更新資料時，起始角度和結束角度皆為0°，500ms的過渡後起始角度為0°、結束角度為360°成為完整的一個圓。
            // ** 以下討論的程式碼將放到這個位置 **
        }
    })
    .each("end", function(d){
        // 2.動畫結束時，將數值、資料標題、連接線加入到畫面。
    })
```

第二個部份在前一篇就已經完成了，直接把程式碼搬到上述位置即可。所以接下來要討論的是第一個動畫效果的寫法。

在tween中的回傳函式，會傳入數值範圍0~1的參數t，我們將用t來計算出起碼角度0°和結束角度360°。

```js
var pie = d3.layout.pie()
  .startAngle(0)
  .endAngle(Math.PI * t * 2)
  .value(function(d){
    return d[1]
  })

var pieData = pie(dataSet)
```

接著，使用`update`、`enter`、`exit`三個方法來更新資料，就完成了

```js
var update = svg.selectAll("g").data(pieData)
update
  .attr("transform", "translate(" + (width/2) + "," + (height/2) + ")")
  .select("path") // 選擇已存在的<path>並重新設定弧形圖的d屬性（新的角度）
  .attr("fill", function(d,i){
    return color[i]
  })
  .attr("d", function(d){
    return arc(d)
  })
var enter = update.enter()
  .append("g")
  .append("path") // 加入<path>以繪製弧形圖
  .attr("fill", function(d,i){
    return color[i]
  })
  .attr("d", function(d){
    return arc(d)
  })
var exit = update.exit()
```

完成程式碼及繪圖成果可參考此連結：http://jsfiddle.net/upstairs0102/ugyLvexq/