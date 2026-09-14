---
slug: "/ithome2018/day18"
title: "Day18 繪製產生器 (1)"
authors: "thunderboy"
tags: ["ithome","d3.js"]
category: "D3.js 新手開發基本圖表"
collection: "series"
kind: "article"
order: 18
source: "docs/[鐵人賽]D3.js新手開發基本圖表/ithome2018-day18.md"
draft: false
publishedAt:
updatedAt:
---

## 顏色

D3的顏色有**RGB**和**HSL**兩種方法，可以互相轉換。

`d3.rgb(r,g,b)` 以rgb作參數，範圍都為0~255
`d3.rgb(color)` 輸入顏色字串，可用多種的格式包含"rgb(255,255,255)"、"hsl(120,0.5,0.5)"、"#ff0000"、"red"
`rgb.brighter(k)` 顏色變更亮 
`rgb.darker(k)` 顏色變更暗
`rgb.hsl()` RGB轉換為HSL物件
`rgb.toString()` RGB物件轉字串，輸出格式為"#ff0000"

測試範例

```js
var color1 = d3.rgb(40,80,0)
var color2 = d3.rgb("red")
var color3 = d3.rgb("rgb(0,255,255)")

console.log(color2.hsl()) // 轉換為hsl h:0,s:1,l:0.5
console.log(color3) // 取得物件
console.log(color3.darker(2).toString()) // #007c7c
console.log(color1.toString()) // #285000
console.log(color1.brighter(1).toString()) // #397200
```

HSL的方法和RGB類似

`d3.hsl(h,s,l)` h為色相(Hue)範圍0~360、s為飽和度(Saturation)範圍0~1、l為亮度(Lightness)範圍0~1
`d3.hsl(color)` 輸入顏色字串
也可以使用`brighter()`、`darker()`、`rgb()`（轉換為rgb）、`toString()`方法

要計算介於兩個顏色之間的顏色，可以使用**內插(Interpolation)**，使用方法為

`d3.interpolate(a,b)`

a,b指的是兩個顏色物件，上述的rgb和hsl兩種方法的物件都可使用interpolate()會自己判斷所需使用的計算方式。

當作函式使用時輸入參數的範圍是0~1，為0時輸出a、為1時輸出b，介於之間的數字會計算出相對的顏色。

測試範例

```js
var a = d3.rgb("blue")
var b = d3.rgb("green")
var interpolate = d3.interpolate(a,b)
console.log(interpolate(0)) // #0000ff
console.log(interpolate(1)) // #008000
console.log(interpolate(0.5)) // #004080
```