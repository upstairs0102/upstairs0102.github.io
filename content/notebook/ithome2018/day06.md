---
slug: "/ithome2018/day06"
title: "Day06 D3 hello word"
authors: "thunderboy"
tags: ["ithome","d3.js"]
category: "D3.js 新手開發基本圖表"
collection: "series"
kind: "article"
order: 6
source: "docs/[鐵人賽]D3.js新手開發基本圖表/ithome2018-day06.md"
draft: false
publishedAt:
updatedAt:
---

## 一、hello world

D3.js和一般的javascript函式庫一樣，直接用CDN方式引入html即可使用。比較要注意的是所使用的版本，因為v3.x和v4.x以上版本是不相容的，要注意自己所使用或者參考的學習資源是什麼版本的。

我自己習慣使用線上javascript編輯網頁jsfiddle ( http://jsfiddle.net )，在library的下拉選單中直接選擇D3後就可以開始coding，相當方便。

![Day06 D3 hello word_1](/images/notebook/legacy/e1aef476ba9d6bfcbaee.png)

D3.js採用鍊式語法，寫起來和jquery非常相像，所以寫過jquery的人來說感覺會非常熟悉。

首先在html中加入一組`<p>`標籤，接著再輸入js：

```js
d3.select("body")
  .selectAll("p")
  .text("Hello World")
```

第一支Hello World程式就完成了

## 二、繪製向量圖

首先在html中增加`<svg>`標籤：

```js
var svg = d3.select("body")
    .append("svg")
    .attr("width", 400)
    .attr("height", 400);
```

然後在`<svg>`中增加`<circle>`標籤畫出一個圓：

```js
svg.append("circle")
    .attr("cx","50px")
    .attr("cy","50px")
    .attr("r","50px")
    .attr("fill","red");
```

## 三、選擇集與操作

從以上的hello world範例當中，可以看他d3的選擇器的操作和jquery非常類似。對我來說因為有寫過jquery的經驗，所以大部份選擇器或控制元素的部份直接看程式碼就能猜出他的意思，所以大約花點時間找一下教學看過去大致上就能掌握。以下是d3主要的選擇器的操作。

選擇元素的方式有兩個：

select: 傳回選擇器的第一個元素

selectAll: 傳回選擇器的所有元素

設定選擇集屬性的法方有以下6種：attr、classed、style、property、text、html

選擇集控制元素的方法：

append: 增加元素

insert: 在指定元素之前插入元素

remove: 刪除選擇集中的元素