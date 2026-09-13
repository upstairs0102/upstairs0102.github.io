---
slug: "/ithome2018/day07"
title: "Day07 D3 資料綁定的理解(1)"
authors: "thunderboy"
tags: ["ithome","d3.js"]
category: "D3.js 新手開發基本圖表"
collection: "series"
kind: "article"
order: 7
source: "docs/[鐵人賽]D3.js新手開發基本圖表/ithome2018-day07.md"
draft: false
publishedAt:
updatedAt:
---

## 一、基本理解

今天的主題主要是圍繞在我對於D3的基本運作的理解方式。

首先來看，D3的全名是"**Data-Driven Documents**"，由字面上的意義來看，對我來說會有種似層相似的感覺。因為我個人的技術背景是開發網頁前端為主的的工程師，所以在我正式開始學習D3之前第一個聯想到的是Vue.js。Vue.js的核心邏輯是由資料綁定去做畫面的響應。不過稍微了解了一下之後，就會發現雖然好像有那麼一點味道相近，但其實D3跟響應式的編程範式沒有什麼關係。

但同樣的是剛開始在解釋概念的時候，一樣可以拿來跟jquery的"**Event-Driven**"做對比：jquery是直接操作DOM，D3是用資料去趨動繪圖流程。（這樣的解釋可能較為簡化所以可能不是非常的精確，不過這是我的理解方式）。

簡單來說D3「用資料去趨動繪圖流程」最基本的方式有這三個步驟：

1. 設定選擇集

2. 綁定資料

3. 操作元素

## 二、javascript 的 map 範例

在開始理解D3的語法之前，可能要先對javascript的基本知識有一定程度的了解，對前端工程師來說算是本就該具備的基本技能，但對於設計師、以及對javascript/functional programing較不熟悉的工程師來說，剛開始可能會有一點小障礙。

這邊就用javascript的map、filter、sort語法來做範例。未來在學習D3時，會遇到這幾個以及更多類似的方法，語法或使用情境或許略有不同，但只要懂了就會感覺到：啊…就是javascript嘛。

我就開始胡亂舉例吧：

```js
var data = [0.26, 0, 0.5, 0.8, 0.13, 0.9]

var result = data
  .filter(function(d){
      return d > 0;
  })
  .sort(function(a, b){
      return a - b;
  })
  .map(function(d, i){
      return (d * 100) + '%';
  })
  
console.log(result)
```

以上三個方法都是針對data這個陣列資料上做操作的，這邊使用鏈式語法，所以執行順序是先使用filter操作，篩選出大於0的資料，return回來的資料再使用sort做排序，最後再使用map操作，針對陣列資料修改每筆的資料格式，全部完成後return回給result變數中。

最後的印出結果：

`["13%", "26%", "50%", "80%", "90%”]`

## 三、選擇集與資料綁定

再回到D3來。

選擇集的方法主要有兩個：select和selectAll。對應javascript的方法：

select對應getElementById

selectAll對應getElementsByClassName。

比較要注意的是，選擇器只是選取了dom而已，要再透過資料綁定才是真正的「擁有」資料。

資料綁定 (Data-Join) 在D3裡是一個重要的術語，他是所有資料操作最核心的部份。資料綁定有兩個方法：data()和datum()。

這兩個方法中，datum()是將「一筆」資料綁定給選擇集當中的每一個元素當中，而data()是將「多筆」資料各別對應給選擇集當中的每一個元素。

這邊以datum()做個小範例：

首先在html中增加三組`<p>`

```html
<p></p>
<p></p>
<p></p>
```

然後寫一小段js如下

```js
var p = d3.select("body").selectAll("p")
p.datum("資料")
  .text(function(d,i){
    return d + " " + i
  })
```

網頁上呈現的結果如下圖

![Day07 D3 資料綁定的理解(1)_1](/images/notebook/legacy/bdb2bc3936f521718dbf.png)

選擇集選到了三組`<p>`，然後使用datum()將字串”資料”綁定給選擇集的三個物件，最後再用text()將文字放到`<p>`當中。如果我們用chrome的開發者工具(f12)檢視html可看到如下：

![Day07 D3 資料綁定的理解(1)_2](/images/notebook/legacy/50e57497f3cfdf37d3d0.png)

另外，當我們使用text這個方法的時候，如果原本就已經具備javascript基本語法（上一章提到的map）有所了解時就不會感覺到理解上的困難。

接下來要講的data()才是D3最常使用到的資料綁定的方法，將在下一篇繼續來討論。