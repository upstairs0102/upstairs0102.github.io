---
slug: "/vue/vue-component-data-flow-2"
title: "[主題] Vue Component資料流設計 (2) 雙向綁定–通用組件"
authors: "thunderboy"
tags: ["vue","javascript"]
category: "Vue.js"
collection: "technical"
kind: "article"
order: 999
source: "docs/Vue/[主題] Vue Component資料流設計 (2)雙向綁定–通用組件.md"
draft: false
publishedAt:
updatedAt:
---

# Vue Component資料流設計 (2) 雙向綁定–通用組件

## 一、單向/雙向資料流之差異及適用場景

前一篇文章「單向傳遞」中我有提到過，我自己「體感」自製的Component大約只有百分之20是使用單向資料流傳遞的。不過在Vue中的「雙向綁定」是一大特色（雖然當初也是 ~~抄襲~~ 參考Angular的），當中的變化以及學問可多了。

就我自己個人的經驗，剛開始學Vue時開發自製Component大多都是使用單向綁定，對於自製的雙向綁定的用法有些困惑，隨著經驗的累積才開始慢慢掌握技巧以及合適的用法。依照我自己個人的經驗，我會把這百分之20中所適用的情境分為兩種：

1. 包裝resuse（可複用）的基本元素
2. 因程式管理需求需抽離出來的大區塊

<!--truncate-->

為方便說明我就簡單將這兩種組件分別估且命名為「通用組件」–對應第一種（將在本文中討論），以及「大組件」–對應第二種（將在下一篇系列文中討論）。

分別說明如下：

### Case1. 通用組件

會看本系列文章的人應該都是有一些Vue開發經驗的人，大家應該都知道html原生元素可以直接使用`v-model`來做雙向綁定，包括：

* Input

* Textarea

* Radiobutton

* Checkbox

* Select/Option

這類元素都有一個共通性，就是都是屬於「通用性質」的元素，原則上他內部怎麼運作的對用的人也不需要了解，沒有依賴其他的程式可以適用在每一個地方的。

和這類元素同樣性質的Component我估且把他稱之為「通用組件」，可以是我們自製的表單元素、或者是一樣小型的組件。

這類型的「通用組件」如果還是使用「單向資料流」，就顯得有點脫褲子放屁、太過麻煩了。



### Case2. 大組件

另一種情況是，我們製作Component最主要的原因不是為了reuse（可複用）的理由，單純是程式太長了。

假設有一個非常巨大的表單，並且有五個分頁，有500個欄位好了，在Vue實例的`data` 可能是長這樣：

```js
data () {
  return {
    tableBody: {
      value1: '',
      value2: '',
      value3: '',
      // ...以此類推共兩百個
    }
  }
}
```

wireframe來看大概是長這樣：

![](/images/notebook/legacy/9bd482c031afdedd4e41.png)

可想而知這支程式鐵定是非常肥大，三五千行都是有可能的，為了可維護性大多工程師都會想把程式能抽出來就抽出來。

在這個我胡亂掰的例子當中，這五個頁籤基本上裡面的內容都是各自獨立不互相影響的，所以以我來說可能就會再把這五個頁籤再拆成五個Component，如下圖：

![](/images/notebook/legacy/e19f0d644b37090934cb.png)

雖然說五個頁籤各自獨立，但是當使用者點下「儲存按鈕」時還是需要將全部200個欄位的資料一起送出給後端，因此這兩百筆變數還是需要紀錄在父層當中才會比較好處理。

換句話說，`methods`、`computed`、`watch`等等的程式碼可以抽出來放到這各自五個Component，但是`data`的變數主控權必須放在父層，並使用雙向綁定來同步底下的五個子組件資料。

我舉的這個例子就是適用雙向綁定的第二種情境。

當然，比這更複雜的情境還是有的，比如說父子階層不止兩層、或者是不但組件大又同時有reuse的需求，這時候就有可能再尋求其他的方式，這些會在下一篇文章再做進一步的討論。



## 二、在子組件中同步prop及父組件的綁定value

如同本文第一個章節所說的，原生的Html表單元素預設就可以使用`v-model`，但除了原生的Html表單元素之外，開發者也是可以在自己開發的Component上自訂義`v-model`。

其原理相當簡單，`v-model`預設會對應「一組」名稱為`value`的「prop」以及`input`「事件」（或者說`emit`）。

舉例來說，原生的Html表單元素`input`可以這樣寫：

```html
<input :value="inputValue" @input="onInput"/>
```

也可以改成`v-model`的寫法：

```html
<input v-model="inputValue"/>
```

差別在於前者是「單向綁定」，而後者是「雙向綁定」。通常會採用前者是因為希望自訂定監聽事件，並且需要掌控在監聽事件當中再要做一些加工處理（可參考本系列文前一篇的單向傳遞資料流）。

以下將會用一個範例實作來討論相關應用的細節。

這裡實作了一個帶有文字提示的文字輸入框組件，Component命名為`autocomplete-input`，為方便解說所以其實並沒有將功能實作的非常完整。

成果如下圖：

![image-20200509145612340](/images/notebook/legacy/acc1e7724837b9efa82c.png)

html如下：

```html
<div id="app">
  請輸入英文字母：
  <autocomplete-input
    v-model="inputText"
    :data="recoData">
  </autocomplete-input>
</div>
```

Vue的主程式中宣告父層的行為：

```js
const vm = new Vue({
  el: '#app',
  component: 'autocomplete-input',
  data: {
    recoData: ['candy','car','card','can','bakery','boring','band','country','drink','eye','fork','game','hospital','orange','restroom','sleep','talk','tree','yesterday','weather','zoo'],
    inputText: ''
  }
})
```

以上的程式我們可以看到組件有一個`v-model`及一個`v-bind`的綁定資料。`v-model`雙向綁定的`inputText`是輸入框的輸入文字，而`v-bind`單向綁定的`recoData`是提示文字的所有英文單字組合，當輸入框輸入文字的時候組件就會使用`inputText`在`recoData`陣列中進行篩選符合的英文單子。

對於要使用這個Component的人來說，只需要把這幾行程式看懂即可使用，不過由於本文說明需要我們還是要把Component內部的程式碼攤出來看看（沒有耐心的人以下可以先跳過，有需要的話再回頭過來對照著看即可）。

`autocomplete-input`組件程式：

```js
Vue.component('autocomplete-input',  {
  template: `
  <div class="autocomplete-input">
    <input
      type="text"
      v-model="syncValue">
    <div
      class="list"
      v-show="isShowRecoList">
      <div
        class="item"
        v-for="item in recoList"
        @click="selectRecoText(item)">
        {{item}}
      </div>
    </div>
  </div>
  `,
  props: ['data', 'value'],
  computed: {
    // 子組件中同步value的值
    syncValue: {
      get () {
        return this.value
      },
      set (v) {
        this.$emit('input', v)
      }
    },
    // 是否顯示提示選項
    isShowRecoList () {
      if (this.syncValue && this.recoList.length > 0) {
        return true
      } else {
        return false
      }
    },
    // 提示選項
    recoList () {
      return this.data.filter(d => {
        return d.indexOf(this.syncValue) >= 0
      })
    }
  },
  methods: {
    // 選擇提示選項更新輸入文字
    selectRecoText (text) {
      this.syncValue = text
    }
  }
})
```

以上為全部的程式碼了。

觀察這個範例的資料流，子組件`computed`中的`syncValue`是用來「同步」`props`中的`value`。

這裡我所說的「同步」詳細一點的解釋：子組件`syncValue`的值和父組件的`value`是雙向綁定的關係的，當父組件的`value`變動時，會透過`prop`傳入子組件，而子組件的`syncValue`變動時就會將值使用`emit`傳遞事件給父組件。

實作的方式就是用`computed`的`getter`、`setter`：

```js
computed: {
  // 子組件中同步value的值
  syncValue: {
    get () {
      return this.value
    },
    set (v) {
      this.$emit('input', v)
    }
  },
  // ..略..
}
```

操作說明、父組件值、子組件值整理成下表：

| 操作說明              | [父層] value | [子組件] syncValue |
| --------------------- | ------------ | ------------------ |
| Step1.初始化          | ''           | ''                 |
| Step2.輸入文字'a'     | 'a'          | 'a'                |
| Step3.點選提示框'car' | 'car'        | 'car'              |

顯而易見的，父子組件的值是完全同步的，也就是我們期待雙向綁定的結果。

[Codepen範例完整程式在此](https://codepen.io/cdpqdnvr/pen/wvKPgEG)



**---- 相關補充分隔線 ----**

1. 自訂義v-model

有個跟本文主題關係不大但是也是蠻重要的一件事，就是如果不想使用名稱為`value`的prop搭配`input`事件的話，Vue有提供一個叫做`model`的option可以使用，更多訊息請參考官網文件：

[Vue官網文件-自定義組件的v-model](https://cn.vuejs.org/v2/guide/components-custom-events.html#%E8%87%AA%E5%AE%9A%E4%B9%89%E7%BB%84%E4%BB%B6%E7%9A%84-v-model)

1. `.sync`

截至我寫這篇文章（2020/5/9），Vue3.0還是處於beta版本，預計年中之後才會推出正式版。就目前所知Vue3.0將會把`.sync`給移除掉，會用`v-model`來做取代。由於我也還沒研究到這部份（不過我猜實作的邏輯應該還是一樣的只是語法有調整而已），所以可能到時候再回頭過來修改本文。



## 三、雙向綁定加單向資料流

這個標題下的看似有些矛盾，不過這個情境在實作上是非常常見的。雖然說父層使用`v-model`雙向綁定，但是組件中實際上是單向資料流；也就是說和本系列文前一篇文章中介紹的單向資料流類似，組件內自己本身也管理了內部的狀態，只有在特定的事件將中才會將值傳遞給父層。

直接使用範例來做說明。

前一個章節的範例來做一點小小的修改；有一種和這種文字輸入提示框非常相近的一種UI，他同樣有文字篩選的功能，但他篩選的目的不是做為文字輸入的提示，而是這種UI本身就是下拉選單，文字篩選的目的只是用來「查詢選單中既有的選項」。換句話說，這個組件所綁定的值只有在「點選選項」之後才會把選項中的值帶入，如果沒有「點選選項」這個動作的話，輸入文字的值是會被捨棄掉的。

操作畫面如下，初始化面可看到這個UI類似於一般的文字輸入框，但也有下拉選單的箭頭icon：

![image-20200509161722966](/images/notebook/legacy/b155cd76bbca5b4c5e58.png)

使用者可以點選箭頭將選單展開、也可以點擊輸入框輸入文字以篩選選單。

![image-20200509161759261](/images/notebook/legacy/ebffc2a2800eae4d7b85.png)

點選選項之後，選項的值就會被帶入，如果沒有點選選項則操作是無法完成、並且文字也不會帶入上方的文字提示（您選擇的是「xx」）。

![image-20200509162014784](/images/notebook/legacy/2150825f99bf0eb1cec0.png)

我們將這個組件命名為`selector`，程式和前一個例子大同小異，不過這邊為方便說明還是將全部程式碼都貼上，如沒耐心可以先跳過這部份後面再對照著看即可。

html：

```html
<div id="app">
  <div v-if="inputText">
    您選擇的是「{{inputText}}」
  </div>
  <div v-else>
    請選擇：
  </div>
  <selector
    v-model="inputText"
    :data="recoData">
  </selector>
</div>
```

父層的程式是一模一樣的：

```js
const vm = new Vue({
  el: '#app',
  component: 'selector',
  data: {
    recoData: ['candy','car','card','can','bakery','boring','band','country','drink','eye','fork','game','hospital','orange','restroom','sleep','talk','tree','yesterday','weather','zoo'],
    inputText: ''
  }
})
```

組件`selector`的程式就比較長一點了，同樣的沒耐心的話可以先跳過後面再回頭來對照著看：

```js
Vue.component('selector',  {
  template: `
  <div class="autocomplete-input">
    <input
      type="text"
      placeholder="可輸入英文字母查詢"
      v-model="childValue"
      @click="active">
    <div
      class="list"
      v-show="isShowRecoList">
      <div
        class="item"
        v-for="item in recoList"
        @click="selectRecoText(item)">
        {{item}}
      </div>
    </div>
    <div
      class="triangle"
      @click="active">
    </div>
  </div>
  `,
  props: ['data', 'value'],
  data () {
    return {
      childValue: '', // 子組件中的輸入文字
      isActive: false // 是否啟用提示文字
    }
  },
  computed: {
    // 子組件中同步value的值
    syncValue: {
      get () {
        return this.value
      },
      set (v) {
        this.$emit('input', v)
      }
    },
    // 是否顯示提示選項
    isShowRecoList () {
      if (this.isActive && this.recoList.length > 0) {
        return true
      } else {
        return false
      }
    },
    // 提示選項
    recoList () {
      return this.data.filter(d => {
        return d.indexOf(this.childValue) >= 0
      })
    }
  },
  methods: {
    // 選擇選項
    selectRecoText (text) {
      this.childValue = text
      // 選定後才將值更新回父層
      this.syncValue = this.childValue
      // 關閉提示選項
      this.isActive = false
    },
    // 啟用提示選單
    active () {
      if (this.isActive === false) {
        this.isActive = true
        this.childValue = ''
      }
    }
  }
})
```

以上為全部的程式碼了。

這邊是重點了，觀察這個範例的資料流，我們要關注的是組件內中的兩個值：

1. `computed`中的`syncValue`
2. `data`中的`childValue`。

首先是`syncValue`，這個值和前一個章節中的寫法是一模一樣的，他的功用就是用來同步父組件所綁定的`value`：

```js
computed: {
  // 子組件中同步value的值
  syncValue: {
    get () {
      return this.value
    },
    set (v) {
      this.$emit('input', v)
    }
  },
  // ..略..
}
```

但是這裡有個關鍵的差異，在前一個範例當中`syncValue`是直接綁定在`input`輸入框上，所以當輸入框輸入文字的同時就會把輸入框的值回傳給父層。

但這個範例綁定`input`的值是接下來要介紹的`childValue`：

```html
<input
  type="text"
  placeholder="可輸入英文字母查詢"
  v-model="childValue"
  @click="active">
```

會做這樣設計的原因，就是因為這個UI的設計是在使用者「點選選單」的時候才會把值回傳給父層，在「點選選單」之前輸入框裡面的值都不算數，他只會存在組件當中（也就是這個範例中的`childValue`），而父組件是不會知道使用者倒底在輸入框中輸入了什麼文字。

以程式上面來說明，首先，`childValue`預設必定為空值，所以直接將他放在`data`之中即可：

```js
data () {
  return {
    childValue: '', // 子組件中的輸入文字
    // ... 略 ...
  }
},
```

接著，根據這個UI的設計，當點選選單中的選項時，要把輸入框的文字回傳給父層。在這個組件中我們已經實作了同步父層的`syncValue`，所以就直接將`childValue`的值複製給`syncValue`就完成了：

```js
methods: {
  // 選擇選項
  selectRecoText (text) {
    this.childValue = text
    // 選定後才將值更新回父層
    this.syncValue = this.childValue
    // 關閉提示選項
    this.isActive = false
  },
  // ... 略 ...
}
```

如果上述的說明還看的不太清楚的話，這裡同樣用本系列文當中不斷出現的表格說明，相信這邊看了就一目了然了：

| 操作說明            | [父層] value | [子組件] syncValue | [子組件] childValue |
| ------------------- | ------------ | ------------------ | ------------------- |
| Step1.初始化        | ''           | ''                 | ''                  |
| Step2.輸入文字'a'   | ''           | ''                 | 'a'                 |
| Step3.點選選項'car' | 'car'        | 'car'              | 'car'               |

本範例的資料流設計和前一篇文章「Vue父子組件資料流設計 (1) 單向傳遞」的範例非常相像，本質上都是「單向資料流」。差異只在於為了實作雙向綁定，在子組件中多了一個使用computed getter/setter實作的`syncValue`，用來同步父組件的值。

[Codepen範例完整程式在此](https://codepen.io/cdpqdnvr/pen/OJyOmGq)



## 四、小結

依照我自己的學習歷程，開發Component時是先學習單向綁定，接著又寫code了一段時間，因工作需求上除了使用現成套件之外，有更近一步的需求需要自己開發一些基礎的通用組件，開始試著學習使用`.sync`（v2.x語法）以及`v-model`，但是一開始是土法鍊鋼，所以寫出來一些很奇怪又很多bug的程式，然後才慢慢掌握了一些比較良好的程式寫法（比如說本文用使用的computed getter/setter就是一個很好的方式）。

即使是熟悉了程式和相關技巧，但是也是累積了一些經驗才又把「單向資料流」以及「雙向資料流」這兩者的概念在腦中有清楚的分別。

我自認為前一篇文章和本文準備的範例程式應該都還不錯（自我感覺良好），只是因為程式也沒辦法濃縮的很短，寫得有點落落長，希望不會讓大家太難閱讀。


