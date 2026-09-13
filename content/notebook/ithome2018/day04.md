---
slug: "/ithome2018/day04"
title: "Day04 初探SVG"
authors: "thunderboy"
tags: ["ithome","d3.js"]
category: "D3.js 新手開發基本圖表"
collection: "series"
kind: "article"
order: 4
source: "docs/[鐵人賽]D3.js新手開發基本圖表/ithome2018-day04.md"
draft: false
publishedAt:
updatedAt:
---

## 一、Canvas和SVG

Canvas和SVG都是html5用於繪圖的元素，都已經廣範被瀏覽器所支援。Canvas是屬於點陣圖、而SVG是屬於向量圖；我們都知道點陣圖是由像素組成的，而向量圖是數學圖型所定義的，所以向量圖並不會因為放大而產生失真的情形。

就已繪製圖表來說，兩者都有其適用的領域，除了所要呈現的風格不同之外，當元素數量極高的情形下SVG的效能就可能變得很差，這時候就是使用點陣圖會較有優勢。

![Day04 初探SVG_1](/images/notebook/legacy/00874ea7fbdc43d94331.png)

圖片來源：https://msdn.microsoft.com/library/gg193983%28v=vs.85%29.aspx#Non_Starters

本系列預期要繪製的圖型無這種形式的圖表，所以將針對SVG的部份做討論。

## 二、SVG元素初探

這裡我們來做過試驗，到網路上隨意找了一個免費的SVG圖檔（副檔名為.svg）下載回來，我所找到的圖檔長這個樣子。

![Day04 初探SVG_2](/images/notebook/legacy/76bf560c254fc8f80465.png)

然後我將圖檔拖曳瀏覽器上開啟（這裡是使用Chrome），然後按下F12開啟開發人員工具。我們會發現，html裡所呈現的是一串```<svg...>...</svg>```的標籤。

![Day04 初探SVG_3](/images/notebook/legacy/4b0d4dc37a7eb1978195.png)

把這一串標籤複製起來，貼到我們自己的html網頁裡就可以呈現一模一樣的圖案，而無需再使用剛才我所下載的.svg圖檔了。

## 三、svg區域和圖形元素

要繪製一個svg的基本標籤如下：

```html
<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width=“300” height=“300">
</svg>
```

所要繪製的圖型都是在這個`<svg>` 標籤之內，SVG定義了七種型狀元素：

1. 矩形 `<rect>`
2. 圓形 `<circle>`
3. 橢圓 `<ellipse>`
4. 線段 `<line>`
5. 聚合線 `<polyline>`
6. 多邊形 `<polygon>`
7. 路徑 `<path>`

關於每一個元素的屬性及使用方式在這邊我就不一一贅述，建議可參考w3school的教學：

http://www.w3school.com.cn/svg/svg_rect.asp