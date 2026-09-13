---
slug: "/ithome2018/day05"
title: "Day05 SVG元素繪製與樣式"
authors: "thunderboy"
tags: ["ithome","d3.js"]
category: "D3.js 新手開發基本圖表"
collection: "series"
kind: "article"
order: 5
source: "docs/[鐵人賽]D3.js新手開發基本圖表/ithome2018-day05.md"
draft: false
publishedAt:
updatedAt:
---

## 一、文字

在SVG中可以使用`<text>`標籤繪製文字，例：

```html
<text x=“200” y="10" dx="5" dy="5" rotate="15" textLength="100">
    hello D3.js
</text>
```

其中dx為目前位置上的x軸平移、dy為y軸平移、textLength為文字顯示長度（不足則拉長、足則壓縮）、rotate為旋轉角度。

如果要對文字某一部份文字單獨定義樣式，可使用`<tspan>`標籤，如下：

```html
<text x=“200” y="10" dx="5" dy="5" rotate="15" textLength="100">
  hello <tspan fill="red">D3.js</tspan>
</text>
```

輸出結果

![Day05 SVG元素繪製與樣式_1](/images/notebook/legacy/222a2d121d3f9c55aef6.png)

## 二、樣式

SVG和一般html元素一樣可以用style屬性或者css來定義樣式。

寫成style的話，大約會是這樣子：

```html
<rect x="20" y="20" rx="20" ry="20" width="200" height="100" style="fill:steelblue; stroke:blue; stroke-width:4; opacity:0.5"></rect>
```

而使用css則可以避免重覆撰寫程式：

```html
<rect class="myrect"></rect>
```

```css
.myrect {
  x:20;
  y:20;
  rx:20px;
  ry:20px;
  width:200px;
  height:100px;
  fill:steelblue;
  stroke:blue;
  stroke-width:4;
  opacity:0.5;
}
```

這兩種寫法都可產生同樣的圖型：

![Day05 SVG元素繪製與樣式_2](/images/notebook/legacy/87a4fa58782ff4492763.png)

## 三、defs 定義可重複利用的圖型

`<defs>`標籤用來定義可重複使用的元素，包括顏色的填充、線段的圖案、濾鏡樣式等都在這定義，變成可呼叫使用的物件。

這邊舉一個用`<marker>`繪製箭頭圖案的例子；`<marker>`前面沒有介紹到，這個元素能貼符於`<path>`、`<line>`、`<polyline>`、`<polygon>`上，並能指定要貼符的線段位置（marker-start、marker-mid和marker-end）。程式碼如下：

```html
<defs>
  <marker id="arrow"
    markerUnits="strokeWidth"
    markerWidth="12"
    markerHeight="12"
    viewBox="0 0 12 12"
    refX="6"
    refY="6"
    orient="auto">
    <path d="M2,2 L10,6 L2,10 L6,6 L2,2" style="fill: black"></path>
  </marker>
</defs>
<line x1="0" y1="0" x2="200" y2="50" stroke="red" stroke-width="2" marker-end="url(#arrow)"/>
```

結果如下：

![Day05 SVG元素繪製與樣式_3](/images/notebook/legacy/c2cc2fa5702d0b2a4cb9.png)
