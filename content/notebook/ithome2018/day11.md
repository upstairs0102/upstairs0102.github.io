---
slug: "/ithome2018/day11"
title: "Day11 練習 - 直式長條圖(2)"
authors: "thunderboy"
tags: ["ithome","d3.js"]
category: "D3.js 新手開發基本圖表"
collection: "series"
kind: "article"
order: 11
source: "docs/[鐵人賽]D3.js新手開發基本圖表/ithome2018-day11.md"
draft: false
publishedAt:
updatedAt:
---

昨天練習了繪製直式長條圖，使用enter()方法將元素加入svg當中；接著今天的練習是要假設圖表是可以重覆繪製的，所以來延續昨天的程式碼來實作更新圖表。

首先把昨天使用的資料、宣告參數以及svg原封不動的拿過來用。

```js
var dataSet = [50, 43, 120, 87, 99, 167, 142]

var width = 400 // svg寬度
var height = 400 // svg寬度
var padding = { 
  top: 20,
  right: 20,
  bottom: 20,
  left: 20
} // 內距
var graphicHeight = height - padding.top - padding.bottom // 圖表高度為svg高度扣掉內距
var rectStep = 35 // 各別長條圖的距離
var rectWidth = 30 // 長條圖的寬度
var maxValue = 200 // 數值最大值

var svg = d3.select("body")
    .append("svg")
    .attr("width", width)
    .attr("height", height)
```

在「Day08 D3 資料綁定的理解(2)」中有提到更新資料需使用到Update、Enter、Exit三個方法：

Enter: 資料陣列長度大於元素數量，還不存在的元素稱為Enter（即將進入）

Update: 資料陣列長度等於元素數量的部份稱為稱為Update（即將更新）

Exit: 資料陣列長度小於元素數量，多餘元素的的部份稱為Exit（即將退出）

其中Enter和Update在實作上只在於Enter多使用了append()方法來將元素加入，而這兩者的繪製元素的程式是一模一樣的。

所以這邊要來把繪製的部份抽出來寫成function。

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

當要繪製圖表時，無論是第一次繪製或是更新資料，都只要呼叫以下的function就可以了。

```js
function draw(){
  var updateRect = svg.selectAll("rect").data(dataSet)
  var enterRect = updateRect.enter()
  var exitRect = updateRect.exit()

  fillRect(updateRect)
  fillRect(enterRect.append("rect"))
  exitRect.remove()
}
```

接下來我們在網頁上增加一個按鈕並寫一個點擊事件來呼叫draw()，這樣整個流程就可以算是寫完了

```js
<button type="button" onclick=“draw()">
  繪製圖表
</button>
```

但是由於我們的資料集是固定的，因此在測試時看不出變化，所以動一下手腳來方便測試檢驗結果。

這邊額外再寫一個function來產生隨機資料，所以原本按鈕也要改為呼叫這支getData()而不是原先的draw()，再由getData()完成更新資料後再呼叫draw()。

然而在實務中，假設這是一個查詢資料圖表的服務，getData()裡面要做的事情可能就會是透過api跟後端取得資料後，再來執行繪執圖表。

```js
function getData(){
    let arr = [0,0,0,0,0,0,0]
    dataSet = arr.map(function(){
      return Math.floor(Math.random()*150) + 50
  })
  
  draw()
}
```

至於昨天有練習到的數字的繪製做法也是一模一樣的，所以就不再佔版面，繪製的結果如下圖

![Day11 練習 - 直式長條圖(2)_1](/images/notebook/legacy/beae2e95b0993d716808.png)

完整的程式碼我已放到jsfiddle上了：http://jsfiddle.net/upstairs0102/a1fku6ec/33/

最後的最後，算是個小補充。在jsfiddle上如果沒有做任何設定的話click點擊是不會有反應的，需要在framework & extensions選單中，把load type選項改為No wrap才行。

![Day11 練習 - 直式長條圖(2)_2](/images/notebook/legacy/b23fcfed04e88b170f93.png)