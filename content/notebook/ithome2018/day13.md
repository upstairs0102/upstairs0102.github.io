---
slug: "/ithome2018/day13"
title: "Day13 比例尺"
authors: "thunderboy"
tags: ["ithome","d3.js"]
category: "D3.js 新手開發基本圖表"
collection: "series"
kind: "article"
order: 13
source: "docs/[鐵人賽]D3.js新手開發基本圖表/ithome2018-day13.md"
draft: false
publishedAt:
updatedAt:
---

在前一天最後一個練習當中有使用到線性比例尺來做直長條圖的高度換算，今天就針對比例尺的部份來做稍微詳細一點的說明。

在D3中比例尺(Scale)的應用是將一個區間的數值對應到另一個區間。比例尺很像數學當中的函數。比如一個一元二次函數，有x和y兩個未知數，當x的值確定時，y的值也確定了。x的範圍為稱為「**定義域**」(domain)，y被稱為「**值域**」(range) 。

而比例尺分為兩大類，一種是**連續**的、另一種是**離散**的，也就是所謂的定量比例尺和序數比例尺，定量比例尺又包含了多種的比例尺（線性、指數、對數…等等），其中線性比例尺是最為常用的。

## 一、線性比例尺

首先就直接建立一個線性比例尺 (Linear Scale)

```js
var dataSet = [10, 20, 8, 15, 35];

var min = d3.min(dataSet);
var max = d3.max(dataSet);

var linear = d3.scale.linear()
        .domain([min, max])
        .range([0, 100])
```

這邊使用d3.scale.linear()建立了一個線性比例尺，然後用domain宣告「定義域」的範圍、range宣告「值域」的範圍。

由於線性比例尺的定義域和值域都是連續的，所以各別的兩個參數就是最大值和最小值。d3提供了d3.min()和d3.max()兩個方法來取陣列資料的最大值和最小值，所以此例中就是用這兩個方法來取dataSet中的最大和最小值。

d3.scale.linear()的返回值是可以函式來使用的，輸入一個在定義域內的值，傳回值域內對應的值。比如說：

linear(8) 會得到 0

linear(35) 會得到 100

linear(25) 會得到 62.96296296296296

那如果輸入參數不在定義域範圍的話：

linear(50) 會得到 155.55555555555557

linear(-10) 會得到 -66.66666666666666

仍然可以取到結果，不過是超出值域範圍的值。

如果線性比例尺是用在繪制圖表座標，超出範圍的數值就會超出圖表區塊。如果我們希望可以把超出的部份給截掉的話可以使用clamp()。

此例稍做修改

```js
var linear = d3.scale.linear()
        .domain([min, max])
        .range([0, 100])
        .clamp(true)

linear(50) 會得到 100
```

## 二、序數比例尺

序數比例尺(Ordinal Scale)的定義域和值域都是離散的，這邊用顏色來做例子。

```js
var index = [0, 1, 2, 3, 4];
var color = ["red", "blue", "green", "yellow", "black"];

var ordinal = d3.scale.ordinal()
        .domain(index)
        .range(color);
```

建立序數比例尺的方法是d3.scale.ordinal()，「定義域」和「值域」的方法同樣是domain()和range()。不過由於定義域和值域都是離散的，所以要各別放入所有資料的陣列。

d3.scale.ordinal()的返回值是可以函式來使用的，輸入一個在定義域內的值，傳回值域內對應的值。比如說：

ordinal(2) 會得到 “green"

另外一個例子是，是計算數筆資料在座標軸的位置。但這個如果是用同樣的寫法就會變得有點奇怪。

```js
var index = [‘a', ‘b', ‘c', ‘d', ‘e'];
var xAxis = [0, 20, 40, 60, 80];

var ordinal = d3.scale.ordinal()
        .domain(index)
        .range(xAxis);
```

由於值域是離散的，就變成自己要手動去算的；如果這張圖表是響應式大小的話那就更是麻煩。通常這種情形值域的定義會用另一種方法rangePoint()。

rangePoint()方法可以使用離散值參數，因此可以改為這樣寫

```js
var index = ['a', 'b', 'c', 'd', 'e'];
var width = 80;

var ordinal = d3.scale.ordinal()
        .domain(index)
        .rangePoint(0, width);
```

