---
slug: "/d3/d3js-select-this"
title: "[主題] 從D3.js的select(this)探討的函式中的this指向"
authors: "thunderboy"
tags: ["d3.js","javascript"]
category: "D3.js"
collection: "technical"
kind: "article"
order: 999
source: "docs/D3.js/[主題] 從D3.js的select(this)探討的函式中的this指向.md"
draft: false
publishedAt:
updatedAt:
---

其實這個標題下的有點不太精確，但我想從我自己本身遇到的問題的角度來切入，然後再進一步深入說明…

事情是這樣的，在函式中使用`d3.select(this)`可以取得調用此函式的dom，比如說有以下幾種情境範例：

<!--truncate-->

1.事件

```js
d3.selectAll('g')
	.on('click', function(d){
		var target = d3.select(this) // d3.select(this)取得點擊元素<g>
		target.classed('active', true)
	})
```

2.陣列迴圈

```js
d3.selectAll('g')
	.each(function(d, i){
		var dom = d3.select(this) // d3.select(this)取得元素<g>
		var x = i * 20
		dom.attr('transform', 'translate(' + x + ', 20)')
	})
```

3.動畫

```js
dom.transition()
var dom = d3.select("body").append("div")  

dom.duration(2000)
  .tween("number", function(d) {
    var inter = d3.interpolateRound(0, 100);
    return function(t) {
    	var n = inter(t)
      d3.select(this).html(n) // d3.select(this) == dom
    }
  })
```

到目前為止都沒有問題，後來因專案需求改為es6語法，所有的函式也都改為了**箭頭函式**，此時開始發生問題了，以上述的第一個範例來說會是長這個樣子：

```js
d3.selectAll('g')
d3.selectAll('g')	
	.on('click', d => {
		let target = d3.select(this) // d3.select(this)取得對象發生錯誤
		target.classed('active', true)
	})
```

在這三個例子當中，原本this都會指向到`<g>`元素當中，可是當函式改寫成箭頭函式的時候this變成指向到`window`。

雖然我原本就約略知道javascript的某些規則，"function"和箭頭函式兩種寫法中使用this會指向到不同的地方，但是對此並沒有深入的去了解、以及對於d3.select(this)這個寫法的意義也不是很清楚。這個寫法原本是照著書上教學照著寫的，只知道要這樣寫但不知原因為何，知其然不知所以然，所以遇到問題也不知如何解決。

當我第一次遇到這個問題我還以為是踩到D3的坑，花了點時間研究後終於知道這完完全全是javascript本身的問題，並不是D3的特性造成，下面會進一步說明原因以及解決這個問題的解法。



# 探究d3.select(this)原理

要理解`d3.select(this)`的原理，**其實就等同於理解javascript的this**。我一開始會誤以為這是D3提供的特殊用法，就是因為對於javascript的this了解的不夠深入所致；所以這一章節要講的其實就是javascript而已，跟D3沒有半點關係了。

這裡主要是針對function () { ... }寫法、以及使用箭頭函式中使用`this` 兩種來做比較合說明。理解之後就會知道D3內使用this會有這樣的差異了。



## function () { ... }內的this

這裡的this很容易誤解，**this指向誰其實跟function是在哪裡宣告並沒有關係，this會指向的對象是依據調用此函式的物件是誰**。

比如說，某function在window（全域）上宣告，而呼叫此function的人也是在window，function內的this也是在window（好像繞口令）。

我上面所講的也就是一個最簡單的情況，以一段簡單的程式來看會是長這樣子：

```js
window.word = 'hello world'

function say() {
  console.log(this.word)
  // 印出 hello world
}
say()
```

但如果函式不變，但調用此函式的人是某物件，則this就會指向該物件，範例如下：

```js
window.word = 'hello world'

function say() {
  console.log(this.word)
}

var people = {
	word: 'how are you',
	say: say
}

say() // 印出 hello world
people.say() // 印出 how are you
```

同理，調用此函式的人為DOM，則this就會指向該DOM，範例如下：

```js
function addBorder() {
  this.style.border = '1px solid red'
  // 點擊el調用addBorder，this會指向el，因此el會加上紅線
}

var el = document.querySelector('#element-id')

el.addEventListener('click', addBorder)
```

講到這裡`d3.select(this)`能取得DOM的原理就呼之欲出了，並不是D3做了什麼黑魔法，而是javascript的this原本就是會指向到**調整此函式的物件**。



## 箭頭函式中的this

Javascript推出新的節頭函式，幾乎大部份和原來的function沒有什麼不同，偏偏就是this指向的規則和原來不同。

**在箭頭函式中this指向宣告函式的物件，而非調用函式的物件**。也就是說他在函式被宣告時this的指向就固定下來了，不會隨著使用的方式不同而改變指向的對象。

稍微修改前面的範例，原來的say()函式因為是在全域window上宣告的，所以無論由哪個物件調用this都是指向到window。

```js
window.word = 'hello world'

let say = () => {
  console.log(this.word)
}

let people = {
	word: 'how are you',
	say: say
}

say() // 印出 hello world
people.say() // 印出 hello world
```

 再來，延續前面的DOM事件範例，程式完全不變，只把function改成箭頭函式，此時就會報錯了，因為this指向的對象不再是調用此函式的DOM本身，而是指到window去了。

```js
let addBorder = () => {
  this.style.border = '1px solid red'
  // 報錯，因為this指向window，window底下沒有style物件
}

let el = document.querySelector('#element-id')

el.addEventListener('click', addBorder)
```



# 箭頭函式的問題解法

爬文後我整理出三種解法，其中第一種用法是我個人的推薦用法，不過他只適用v4以上版本，如果使用v3以下版本就只能使解法二或解法三了。



## 解法一（建議用法）

這個解法可以完完全全的取代`d3.select(this)`而且程式意義上也十分合理，不過只有一件小小的但書就是只適用D3 v4以上的版本，v3是不支援的。

上述三個範例的函式當中，注入參數中的「第三個參數」就是「調用此函式的DOM的集合（陣列）」，透過函式中「第二個參數」也就是該調用任務中的陣列索引，就可以找到調用此函的DOM…

講起來有點饒舌，簡單講，假設這個陣列命名為`all`、索引為`i`，`all[i]`就會等同於我們尋尋覓覓的function中的`this`啦，而`d3.select(all[i])`也就等同於`d3.select(this)`。

直接用本文最一開始的三個範例重新用此解法來改寫：

1.事件

```js
d3.selectAll('g')
	.on('click', (d, i, all) => {
		let target = d3.select(all[i]) // d3.select(all[i])取得點擊元素<g>
		target.classed('active', true)
	})
```

2.陣列迴圈

```js
d3.selectAll('g')
	.each((d, i, all) => {
		let dom = d3.select(all[i]) // d3.select(all[i])取得元素<g>
		let x = i * 20
		dom.attr('transform', 'translate(' + x + ', 20)')
	})
```

3.動畫

```js
dom.transition()
const dom = d3.select("body").append("div")  

dom.duration(2000)
  .tween("number", (d, i, all) => {
    let inter = d3.interpolateRound(0, 100);
    return t => {
    	let n = inter(t)
      d3.select(all[i]).html(n) // d3.select(all[i]) == dom
    }
  })

```



## 解法二

認真講起來其實這個方法真的還不錯，雖然聽起來好像有講和沒講好像一樣，那就是用原本的函式寫法function () { ... }，不要使用箭頭函式，謝謝觀賞（啊不是啦）

這還真可能真的是種簡單的解法，只是在某些情況下又沒辦法真的符合需求。

就我自己本身的例子，我的使用情境是在js的class（或者說是物件）當中使用d3，我希望this本身有其意義（我希望指向到class本身），如果函式使用function () { ... }那我就無法透過this指向到class本身。

就這種情況來說還是有一方式可解決，也就是在函式外面宣告一個變數指向到函式外的thi，通常這個變數會取名叫`self`或`that`或是其他自訂有意義的名稱，這個算是javascript中常用的小技巧。

舉例如下：

```js
export default class {
	constructor () {
		this.className = 'active'
		
		const self = this // 自訂名為self的變數指向到class的this
		
		// ...略...
		
    d3.selectAll('g')
      .on('click', function(){
        let target = d3.select(this) // this指向<g>元素
        target.classed(self.className, true) // self指向到class的this
      })
	}
}


```



## 解法三

最後這個解法很容易就出現漏洞，而且只適用上述三種情境當中的「事件函式」當中… 所以就當作參考就好了 XD（應該說，此用法的程式意義和d3.select(this)不太相同，適不適用需依你的使用情境來看）。

解法就是改用`d3.event.target`來代替原來的`this`。

但是我說的漏洞，是他取到的對象和原先的`this`有可能會不一樣（！！），聽起來好像很可怕，但如果了解javascript的事件傳遞機制就知道這個再正常不過。

我所指的就是javascript的event bubbling，事件傳遞時會由最內層的DOM一層一層往外傳遞。假設有一組DOM如下：

```html
<svg>
  <g>
    <path ...略...>
    <text ...略...>
  </g>
  <g>
    <path ...略...>
    <text ...略...>
  </g>
  <g>
    <path ...略...>
    <text ...略...>
  </g>
</svg>

```

假設前面範例的第一段程式碼的html是長這樣個子，在該例中click監聽事件綁在`<g>`上面（也就是說用d3.select(this)可以取到被點擊到的`<g>`元素），但是滑鼠點擊時有可能是點到畫面上的`<path>`或`<text>`元素，那`d3.event.target`就會是`<path>`或`<text>`，而不會是`<g>。`

這裡有一個方法可以解決這個問題，就是在剛才取到的對象上加上`.parentNode`就可以找到他的父節點。

…依據的我經驗，這個方法又可能會越補越大洞…

這個情況是，如果你的DOM是多層的，就沒有辦法保證事件傳遞是從第二層開始，他有可能會從第三層或第四層，因此就沒辦法正常找到你最初想找的`<g>`。



# 總結

假設上述解決方式中，你和我一樣選擇使用「解法一」，用`d3.select(all[i])`來取代`d3.select(this)`，那對於這個「this」到底是什麼似乎就沒那麼重要了（？）。

對我個人而言，因為我的D3專案已經採用javascript模組化開發（使用es6 module以及webpack編譯），this在專案當中是有其意義，所以即使不是用在上述情境，在其他的程式裡也是會遇到類似問題。另外，多方面的吸收知識能夠更提供程式的掌控能力，而且在遇到問題時在尋找解決方案也會更有彈性。

以上是我的學習的一個整理，單純是從我遇到問題的角度試著以我的能力進一步探討。說實在javascript的this還真是博大精深，就語言本身可能只摸到基本概念而已，如果在文字或觀念上如果有不夠正確的地方再麻煩先進多多指教感謝~。
