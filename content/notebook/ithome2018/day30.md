---
slug: "/ithome2018/day30"
title: "Day30 後續學習"
authors: "thunderboy"
tags: ["ithome","d3.js"]
category: "D3.js 新手開發基本圖表"
collection: "series"
kind: "article"
order: 30
source: "docs/[鐵人賽]D3.js新手開發基本圖表/ithome2018-day30.md"
draft: false
publishedAt:
updatedAt:
---

最後一篇就沒有額外準備新的學習進度了，整理一下我個人的學習心得。

在開始鐵人賽之前，我看了「**哈佛教你做出好圖表**」這本書大約90%，惡補了一下關於資訊視覺化及圖表製作相關基礎知識，以及「**用D3.js完成網頁視覺化**」大約10%的進度，並在網路上隨性的爬文初步了解D3.js的基本語法和架構。 對於主題本身D3.js並沒有真正寫過任何程式碼，坦白說這樣的準備是稍嫌不足的；不過也算是可以提供給和我一樣的初學者參考，對於這樣子的新手在短時間的學習能夠學到什麼樣的程度、以及會遇到什麼問題。

30天過後，「**用D3.js完成網頁視覺化**」大約是翻到了50%的進度，大部份的基本功（非常基本的）算是run過一遍。整體來說是覺得D3.js並不算太難，但學起來和以往學習其他js函式庫相比（如jquery、vue等）會感覺比較不容易獲得成就感，不是能夠那麼快獲得回報以及成果，還需要大量的api學習和練習。以我來說如果現在要再做一個全新的圖表，會大約知道該如何下手，不過要獨自開發和還是需要不斷的查資料及反覆測試；而如果是要再挑戰更複雜的圖表，又要開始研究許多新的api和概念，只能說還有很長的一段路要走。

我自己後續學習的規劃大概會有幾個重點：

1. 以最新版本(v5.x)D3.js學習及開發
2. 找有興趣的圖類似實作開發練習、以及累積自己的作品
3. 更深入了解資訊/資料視覺化相關領域知識

### 新版本D3.js比較

關於第一點，如同我在最前面的文章所說明的，考量學習資源取的方便性所以這30天是用v3.x來做練習的，而v4.x之後因版本不向下相容所以還需額外了解新的api語法。

我作了點功課大約了解到v3.x→v4.x→v5.x大致上的差異如下：

1. v4.x版的api語法修正後其實和v3.x很相近，有許多是精減化一些，如

`d3.scale.linear` → `d3.scaleLinear`
`d3.scale.category10` → `d3.schemeCategory10`
`d3.svg.line()` → `d3.line()`
`d3.layout.stack()` → `d3.stack()`
等等

2. v4.x版的參數更有可讀性

```js
selection.transition()
    .duration(750)
    .ease(“elastic-out”, 1, 0.3)
```

在v4.x變成

```js
selection.transition()
    .duration(750)
    .ease(d3.easeElasticOut
        .amplitude(1)
        .period(0.3))
```

3. 版面配置(layout)的更新

4. v4.x增加es6 module

5. v4.x的刻度繪製更加容易，不一定要再需要自己定義css樣式

6. v4.x函式庫模組化，可以依自己需別個別引用所需的功能類別的檔案，不一定要使用完整版的d3.js library

7. v5.x版增加Promise非同步語法

8. v5.x版加強配色函式

### 學習資源

學習資源目前累積的還不算太多，但大致上有幾個可以推薦的：

1. D3.js官網API文件。學程式當然還是得看文件，D3.js官網並沒有提供step by step的教學，所以還是得自己想辦法從彷彿百科全書的文件查閱（苦啊）。官網提供的非官方中文api文件是舊版，所以還是建議以英文版的為主。
https://github.com/d3/d3/blob/master/API.md

2. OXXOStudio寫的svg系列教學相當不錯，也有為數不少的d3.js教學
https://www.oxxostudio.tw/articles/201406/svg-01-intro.html

3. 有許多用d3.js開發的圖表範例，線上就有原始碼可參考
https://plotdb.com/

4. 很優質的資訊視覺化相關資訊的部落格，也累積了很多d3.js的文章；但近年已經很少更新、且d3.js的文章都是v3.x版的
http://blog.infographics.tw/

### 結語

最後沒講個幾句好像很奇怪。

我畢業了~ 耶。

