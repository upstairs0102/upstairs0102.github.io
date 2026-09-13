---
slug: "/vue/vue-component-data-flow-1"
title: "[主題] Vue Component資料流設計 (1) 單向傳遞"
authors: "thunderboy"
tags: ["vue","javascript"]
category: "Vue.js"
collection: "technical"
kind: "article"
order: 999
source: "docs/Vue/[主題] Vue Component資料流設計 (1)單向傳遞.md"
draft: false
publishedAt:
updatedAt:
---

# Vue Component資料流設計 (1) 單向傳遞

## 落落長的前言

雖然說Vue上手容易，就以我來說我剛開始學習的時候幾乎是網路上看了幾篇文章就開始寫了，但是後來就吃了很多悶虧，慢慢在各專案中累積實戰經驗之後才知道有更好的做法，並且每種做法的差異以及適用的情境…

關於組件(Component)的設計當中，資料傳遞的設計幾乎是整個Vue的程式開發中最重要的一件事情…（個人見解 XD），尤其是當團隊（或者專案中）開始考量組件的複用性、開始重視組件的開發，這件事情尤其重要。

<!--truncate-->

以下就不廢話了。

如同標題，這一系列文章會聚焦在Vue Component傳遞資料的設計，而之所以會選用「資料流」這個詞的原因是在於，關於傳遞資料除了「父傳子」和「子傳父」之外，實作層面上牽扯到很多面向及細節，我想要一併來做討論。

舉例來說，當我們要製做一個Vue Component時，除了要思考prop參數該如何設計、該用單向綁定還是雙向綁定？子組件是否應該複製prop資料紀錄在子組件中？…等等。不同的Component和他的使用目的就會有不同的合適的寫法。

而本系列文章的撰寫方式會先將各種的寫法分類之後，各別舉例說明並討論什麼樣的情況適合用這個方式來寫。

 本系列文章如下：

* Vue Component資料流設計 (1)單向傳遞
* Vue Component資料流設計 (2)雙向綁定–通用組件
* Vue Component資料流設計 (3)雙向綁定–大組件



## 一、Props down, Events up

當兩個組件(Component)為父子關係(parent-child relationship)的時候，兩個組件就是透過**Props down, Events up**的方式在進行溝通。下圖就是Vue官方用來解釋這個溝通模式的圖，父層透過`Props`將數值傳遞給子層，而子層透過事件的方式將數值傳遞給父層。

要注意的是，這個資料傳遞是有方向性的，在這個規則底下子層並不能主動跟父層拿取新的資料（props的變更只能由父層決定），而父層也不能主動跟子層拿取資料、或者呼叫子層的函式（父層只能監聽子層事件的觸發）。



![20107673f0zb0ZxRz9](/images/notebook/legacy/b46d48741491335993a9.png)

以下用一個範例來說明這個資料傳遞的流程（避免浪費太多讀者的時間，本文後續所有範例都將用此程式碼稍作修改）。

此範例如下，首先網頁上呈現一筆字串資料`Text`，並有一個「編輯」按鈕：



![image-20200426205112559](/images/notebook/legacy/b8163ad7b97cb4e021dd.png)

點了「編輯」按鈕後會出現一個彈出視窗，此時進入了資料的編輯模式，有一個輸入框可以修改這筆資料的文字。而下方有兩個按鈕，點擊後的行為說明如下：

* 點擊「取消」按鈕會關閉彈出視窗，無論剛才輸入框修改為什麼文字，此時網頁上的字串仍然為原本的`text`；再次開始彈出視窗字串則輸入框也是原本的`text`。
* 點擊「完成」，則會將剛才修改的文字會紀錄起來並呈現在網頁上。

![image-20200426205139781](/images/notebook/legacy/0ad221ef9c74d920de53.png)

html結構如下，彈出視窗包裝成Component名為`lightbox`：

```html
<div id="app">
  <div>
    父組件資料: {{value}}
  </div>
  <div>
    <button @click="openLightbox">編輯</button>
  </div>
  <lightbox
    :active.sync="isLightboxActive"
    :value="value"
    @submit="updateValue">
  </lightbox>
</div>
```

Vue的主程式中宣告父層的行為：

```js
new Vue({
  el: '#app',
  components: ['lightbox'],
  data: {
    value: 'Text',
    isLightboxActive: false
  },
  methods: {
    openLightbox () {
      this.isLightboxActive = true
    },
    updateValue (d) {
      this.value = d
    }
  }
})
```

宣告子組件（彈出視窗）的行為：

```js
Vue.component('lightbox', {
  template: `
  <transition name="fade">
    <div class="lightbox" v-if="active">
      <div class="content">
        <div>
          子組件資料 <input type="label" v-model="value"></input>
        </div>
        <div>  
          <button @click="close">取消</button>
          <button @click="submit">完成</button>
        </div>
      </div>
      <div class="bg" @click="close"></div>
    </div>
  </transition>
  `,
  props: ['active', 'value'],
  methods: {
    close () {
      this.$emit('update:active', !this.active)
    },
    submit () {
      this.$emit('submit', this.value)
      this.close()
    }
  }
})
```

以上為全部的程式碼了。

觀察這個範例的資料流，即是依照「Props down, Events up」來進行單向資料流的傳遞的：

* Props down：父層將資料v-bind單向綁定`lightbox`組件的prop `value`。
* Events up：當點擊「確認」按鈕時，會透過emit再將`value`值傳遞給父層。

即使我們不看Component內程式，只要觀察組件`lightbox`的屬性就大概可以知道其資料流了：

```html
  <lightbox
    :active.sync="isLightboxActive"
    :value="value"
    @submit="updateValue">
  </lightbox>
```

這個範例在操作上沒有什麼問題，但是就程式碼方面其實是有一些瑕疵的…（但不影響本章節要說明的內容），所以接下來會繼續說明有哪些地方應該要修正的。

[Codepen範例完整程式在此](https://codepen.io/cdpqdnvr/pen/yLYbJqw)





## 二、基本原則–勿直接修改prop

前一個範例可以當作是一個錯誤的示範，在本章節要很慎重的來探討這件事情：**「勿直接修改prop！」**

在說明這個規則之前先回頭來看一下前面的範例，這把前例的操作說明、父組件值、子組件值整理成下表：

| 操作說明                                     | [父層] value | [子組件] value |
| -------------------------------------------- | ------------ | -------------- |
| Step1.初始化                                 | 'Text'       | 'Text'         |
| Step2.點擊「編輯」按鈕，彈出視窗             | 'Text'       | 'Text'         |
| Step3.修改文字為「New Text」                 | 'Text'       | 'New Text'     |
| Step4.點擊「取消」按鈕，關閉視窗             | 'Text'       | 'Text'         |
| Step5.點擊「編輯」按鈕，彈出視窗             | 'Text'       | 'Text'         |
| Step6.修改文字為「New Text」                 | 'Text'       | 'New Text'     |
| Step7.點擊「確定」按鈕（emit傳值），關閉視窗 | 'NewText'    | 'NewText'      |

透過上表，我們可以觀察到幾個重要的地方：

1. Step3：修改子組件的`value`時並不會影響到父層的`value`。
2. Step4：這個地方乍看下有些詭異且不受控制，關閉彈出視窗後，子組件的`value`由原本的'New Text'回復到原來的'Text'。原因是因為子組件的`value`實際上還是會受到父子組使用`v-bind`單向綁定的影響，而子組件的`value`又使用了`v-model`雙向綁定在input輸入框上面；關鍵就在於子組件關閉視窗是使用`v-if`將包含了input輸入框在內的整個區塊給移除掉，所以控制權又移交給了父組件的手上。
3. Step6：修改子組件的`value`時並不會影響到父層的`value`。
4. Step7：component中使用`emit`將資料傳遞給父層，父層的資料才同步過來。

當中`step3`和`step6`修改prop不會影響到父層的關鍵在於，此資料是使用`v-bind` 綁定資料的，而**v-bind是單向綁定所以只有當父層變更資料時才會傳遞給子層，子層變更資料時是不會回傳回去的**。

這個範例我放在Codepen上，透過console看不到Vue傳遞出來的error log（我是使用Chrome瀏覽器）。如果是在自己的開發環境下測試，可以看到類似下圖的error log：

![](/images/notebook/legacy/ece1357a87dc8d42f203.png)

那… 講那麼多，既然不會影響到外層，那「直接修改prop」的原因是什麼呢…

我認為原因有：

1. 不影響外層的規則有個「例外」，就是**當資料型別是「傳參考(call by reference/pass by reference)」時還是會影響到的**（這邊在本文第五章、以及系列文章第三篇「雙向綁定-由父組件來紀錄資料」中都會再詳細說明。
2. 雖然說修改prop還是有效的，但實際上prop還是有可能在某些時候受到父組件使用v-bind單向綁定的影響（如本例的`step4`），很明顯的有可能會在某些很難預期的情況下出現bug（而且很難除錯）。
3. 程式可讀性上的考量，某些情形下使用相同的名稱會造成混淆，使用不同的命名以區別不同的操作流程中紀錄在不同的變數裡。



## 三、子組件在created/mounted複製prop

在前面章節提到一個重要的規則「勿直接修改prop」，要滿足這個規則，子組件中需要再宣告一個新的變數來複製prop的值。

這裡我們在Component `lightbox`的`data`中加入新的變數`childValue`。然後，在`created`中將`value`複製給`childValue`。程式碼如下：

```js
data () {
  return {
    childValue: ''
  }
},
created () {
  this.childValue = this.value
}
```

接著，把原本Component `lightbox`中的輸入框用v-model綁定的變數也改成`childValue`：

```html
<input type="label" v-model="childValue"></input>
```

這樣就大致完成了。

接下來我們再仔細來看一下這個範例的一些細節… 我們用和前例同樣的「操作說明、父組件值、子組件值」對應表看一下這有沒有什麼差異：

| 操作說明                                     | [父層] value   | [子組件] value | [子組件] childValue |
| -------------------------------------------- | -------------- | -------------- | ------------------- |
| Step1.初始化                                 | 'Text'         | 'Text'         | 'Text'              |
| Step2.點擊「編輯」按鈕，彈出視窗             | 'Text'         | 'Text'         | 'Text'              |
| Step3.修改文字為「New Text」                 | 'Text'         | 'Text'         | 'New Text'          |
| Step4.點擊「取消」按鈕，關閉視窗             | 'Text'         | 'Text'         | 'New Text'          |
| Step5.點擊「編輯」按鈕，彈出視窗             | 'Text'         | 'Text'         | 'New Text'          |
| Step6.修改文字為「New New Text」             | 'Text'         | 'Text'         | 'New New Text'      |
| Step7.點擊「確定」按鈕（emit傳值），關閉視窗 | 'New New Text' | 'New New Text' | 'New New Text'      |

這時候會發現一個很明顯的差異：

從`step1`到`step6`無論是父組件的`value`和子組件的`value`都不在受到子組件修改資料的影響，只有到最後`step7`最終點下「確定」按紐時才會將父層的`value`更新為使用者確認修改完成的資料。

But！

又出現了一個But！

`step4`按點「取消」按鈕時，子組件的`childValue`卻還是停留在第一次改過的值'New Text'。也是說當`step5`再次點開彈出視窗時，輸入框中的值會是'New Text'而不是原來的'Text'，為什麼會和前一個章節的結果不同呢？

原因很簡單，雖然彈出視窗關閉了，但這個子組件從最後開始到結束都在那裡，只是畫面上看不到而已，所以裡面的值還保留再正常不過了。

那如果想要修改為我們原來設計的流程，每次點開彈出視窗輸入框的值都是父層傳入的`value`要怎麼做呢？在不修改資料流的傳遞方式下，我們可以簡單修改一個東西…

```html
<lightbox
  v-if="isLightboxActive"
  :active.sync="isLightboxActive"
  :value="value"
  @submit="updateValue">
```

答案就是在Component標籤上加上一個`v-if`就可以了！

雖然我們沒有更改任何Component內的程式碼，但是Component在整個頁面上的生命週期就被改變了–當彈出視窗關閉時，父組件的值`isLightboxActive`變成`false`，這時`v-if`為`false`，就將這個Component整個移除掉。下一次再點開彈出視窗（如本例的`step5` ）他就會整個重頭來過了！

同樣的表這時候就會長這樣了：

| 操作說明                                     | [父層] value | [子組件] value | [子組件] childValue |
| -------------------------------------------- | ------------ | -------------- | ------------------- |
| Step1.初始化                                 | 'Text'       | 無             | 無                  |
| Step2.點擊「編輯」按鈕，彈出視窗             | 'Text'       | 'Text'         | 'Text'              |
| Step3.修改文字為「New Text」                 | 'Text'       | 'Text'         | 'New Text'          |
| Step4.點擊「取消」按鈕，關閉視窗             | 'Text'       | 無             | 無                  |
| Step5.點擊「編輯」按鈕，彈出視窗             | 'Text'       | 'Text'         | 'Text'              |
| Step6.修改文字為「New Text」                 | 'Text'       | 'Text'         | 'New Text'          |
| Step7.點擊「確定」按鈕（emit傳值），關閉視窗 | 'New Text'   | 無             | 無                  |

當中`step1`、`step4`、`step7`子組件由於`v-if`為false的關閉所以根本就不存在，所以就被標示為「無」，我也們不需要擔心資料殘留的問題了。

[Codepen範例完整程式在此](https://codepen.io/cdpqdnvr/pen/NWGjpeW)





## 四、子組件在watch中複製prop

本章節中同樣的會在子組件中將prop的值複製一份存在子組件當中，不過和前例不同的地方，要改成在Vue的Option `watch`中來複製。

程式碼和前例只有一個地方不同，將原來子組件中的`created`移除掉換成如下程式碼：

```js
watch: {
  active: {
    handler (d) {
      if (d === true) {
        this.childValue = this.value
      }
    },
    immediate: true // 創建組件時也會進來
  }
}
```

在`watch`當中我們監聽的對象是`active`，當`active`為`true`時彈出視窗就會開啟，為`false`時彈出視窗就會關閉。也就是說，每一次當我們把視窗開啟後就會重新將父組件傳入進來的`value`複製給子組件的`childValue`。

| 操作說明                                     | [父層] value | [子組件] value | [子組件] childValue |
| -------------------------------------------- | ------------ | -------------- | ------------------- |
| Step1.初始化                                 | 'Text'       | 'Text'         | 'Text'              |
| Step2.點擊「編輯」按鈕，彈出視窗             | 'Text'       | 'Text'         | 'Text'              |
| Step3.修改文字為「New Text」                 | 'Text'       | 'Text'         | 'New Text'          |
| Step4.點擊「取消」按鈕，關閉視窗             | 'Text'       | 'Text'         | 'New Text'          |
| Step5.點擊「編輯」按鈕，彈出視窗             | 'Text'       | 'Text'         | 'Text'              |
| Step6.修改文字為「New Text」                 | 'Text'       | 'Text'         | 'New Text'          |
| Step7.點擊「確定」按鈕（emit傳值），關閉視窗 | 'New Text'   | 'New Text'     | 'New Text'          |

由`created`和`watch`這兩個地方複製prop的這兩個範例來看，雖然都可以達同樣的目的，但有個小小的差別。

使用`watch`來監聽`active`變成將複製prop的主控權交給了子組件，也就是說即使父組件不加上`v-if`（如前一個章節範例），也可以確保每次打開彈出視窗都會執行複製prop這個動作。

此外小小補充個小細節。

範例中我們有在`watch`的option當中加上`immediate: true`，這代表了第一次將Component創建起來的時候也會進入函式，如果沒有加入的話要將程式碼修改如下：

```js
watch: {
  active: {
    handler (d) {
      if (d === true) {
        this.childValue = this.value
      }
    }
  }
},
created () {
  if (this.active === true) {
    this.childValue = this.value
  }
}
```

這時就要改成`watch`和`created`都必須複製prop。

有時候我們希望在`watch`和`created`當中要做不同的事情，就會將他們分開來寫，這也是一個很常用的技巧。

[Codepen範例完整程式在此](https://codepen.io/cdpqdnvr/pen/JjYNWpr)





## 五、注意傳值及傳參考

Javascript的「傳值」和「傳參考」(call by value/call by reference，或者pass by value/pass by reference) ，我先前有寫了一篇文章有稍稍微的詳細討論過可參考：

[簡單看Javascript的傳值以及傳參考](https://upstairs0102.github.io/2020/02/28/js-call-by-reference/)

關於傳參考長話短說可以參考如下程式碼範例：

```js
let obj = { number: 100 }
function add(newObj){
  newObj.number = newObj.number + 1
}
add(obj)
console.log(obj.number) // 印出101
```

在這個例子中修改資料的是`newObj.number`，可是在最後印出`obj.number`的時候發現他也跟著變了，這個就是傳說中的傳參考…

在Javascript中，`string`、`number`、`boolean`、`null`、`undefined`都是「傳值」，而「物件」型別的都是「傳參考」（包含陣列也是物件的一種所以也是傳參考…）。若在物件複製的時候沒有留意使用的複製方式（是單純的傳參考還是深拷貝），有時候一不小心會因為資料渲染的問題而造成bug，這種bug非常難抓還需要一些經驗…；尤其是我在寫Vue的時候非常常會遇到。

以剛才的程式碼中，function替換成Vue的Component（請用想象的），就是在Vue的開發中最常遇到的問題了。

也就是說如果prop的值是物件（包含陣列），即使我們在子組件中把他複製一份並存在子組件的變數當中，如果我們複製的方式是使用「傳參考」，父層的值是會有可能被渲染的。

這裡以本文中一直使用的彈出視窗包裝成的Component `lightbox`做為範例。

當prop的格式為如下：

```js
value: {
  name: '阿貓',
  id: 'T001' 
}
```

Component `lightbox`中儲存的變數如下：

```js
childValue: {
  name: '',
  id: '' 
}
```

並且在Component`lightbox`中的`watch`複製prop如下：

```js
watch: {
  active: {
    handler (d) {
      if (d === true) {
        this.childValue = this.value
      }
    },
    immediate: true
  }
}
```

直接來看如果是這樣將`value`複製給`childValue`，操作上會發生什麼事呢？

![image-20200501113622148](/images/notebook/legacy/061f0b0f354565da6473.png)

我們可以看到在彈出視窗中修改文字的「同時」，背景中的文字也就馬上跟著改變了。

要解決這個問題，就是要改成用「深拷貝」的方式，我們可以用以下幾種方式來修改程式碼。

方法一：

```js
watch: {
  active: {
    handler (d) {
      if (d === true) {
        this.childValue = {
          name: d.name,
          id: d.id
        }
      }
    },
    immediate: true
  }
}
```

方法二：

```js
watch: {
  active: {
    handler (d) {
      if (d === true) {
        this.childValue = JSON.parse(JSON.stringify(d))
      }
    },
    immediate: true
  }
}
```

不同的資料格式有不同的深拷貝寫法，就我自己的習慣常用方法二 `JSON.parse(JSON.stringify(value))`，幾乎是適用所有格式的資料（除了一些特殊的物件不適用–比如說function或Date等）。

[Codepen範例完整程式在此](https://codepen.io/cdpqdnvr/pen/jObmmPr)



## 六、小結

本文中所使用的關於Vue的知識其實都是相當基礎的，大部份的程式都是初學Vue不用太久都知道的基本的用法；或許就是太簡單，我自己本身也沒看過網路上有相關討論的文章（也可能是我沒看到而已），但是其實作上其實有非常多的細節，不同的情境上其實都各有巧妙之處。就我自己自學的歷程來說，也是寫了一堆爛code後，才整理慢慢出一些我自己的經驗法則；這也是我會想寫這個系列文很大的一個動機。

以本文的「單向傳遞」這個主題來說，將父層傳入子組件內的資料，在內部進行管理和父層區隔開來就是單相向資料流的一個關鍵，這個也延伸出子組件不能直接修改prop這個規則，並且這個規則是有理由的，本文中也對於此主題用範例做了一些討論和說明。

第二個重點是子組件內複製父層傳入值的時機點，不同的設計也是會有不同的理由以及影響，本文中用created/mounted以及watch兩種範例來做說明。

本文較著重於範例的解說，不曉得我的文字夠不夠清晰，希望對大家有幫助。

