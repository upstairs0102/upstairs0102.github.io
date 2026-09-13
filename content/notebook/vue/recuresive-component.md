---
slug: "/vue/recuresive-component"
title: "[Vue] Recursive Component"
authors: "thunderboy"
tags: ["vue"]
category: "Vue.js"
collection: "technical"
kind: "article"
order: 999
source: "docs/Vue/[Vue] Recuresive Component.md"
draft: false
publishedAt:
updatedAt:
---

當 Component遞迴呼叫自己時 - 也就是使用 `slot`並將同樣的 Component放進去的時候，如果沒有針對這種情形調整寫法就會報錯：

`did you register the component correctly? For recursive components, make sure to provide the “name” option`

這樣寫法稱之為 Recursive Component，在我研究之後分為以下兩種形態：

1. 父子Component是同樣的Component
2. 某Component的父子Component相同

<!--truncate-->

## Case1 父子Component是同樣的Component

```js
App
  MyComponent
    MyComponent
```

父層的`MyComponent`需要有`name`欄位，`name`的 value和 Component名稱一樣即可，不需要再額外 import Component進來。



## Case2 某Component的父子Component相同

```js
App
  MyComponent
    ADifferentComponent
      MyComponent
```

參考這篇文章

https://stackoverflow.com/questions/49154490/did-you-register-the-component-correctly-for-recursive-components-make-sure-to

有三個方法

### 1.Globally register `MyComponent`

```
vue.component("MyComponent", MyComponent)
```

### 2.Using `beforeCreate`

```
beforeCreate: function () {
  this.$options.components.MyComponent = require('./MyComponent.vue').default
}
```

### 3.Move the `import` into a lambda function within the `components` object

```
components: {
  MyComponent: () => import('./MyComponent.vue')
}
```

其中(3)我測試過會有速度變慢的效能問題（當Component數量特別多且複雜的情況），(2)沒有試過所以不確定，不過理論上他也是 run-time動態載入的寫法，猜測應該會有一樣的問題

後來我研究還有第四種方法：

### 4.Dynamic Component

用`:is` (v2.x) / `v-is` (v3.x) 方法來動態載入 Component，並且避開使用 option - `components`來註冊 component。由於 import的寫法是在 build-time中引入程式，所以相較 (2) (3)的 dynamic import的寫法來說不會有效能問題。

```js
<template>
	<div :is="component"></div>
</template>

<script>
import MyComponent from './MyComponent.vue'

export default {
  data () {
    return {
      component: MyComponent
    }
  }
}
</script>
```


