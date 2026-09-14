---
slug: "/vuejs-ncut-course-2019/day2-3"
title: "2-3. Component Slot"
tags: ["vue.js"]
category: "Vue.js 前端開發課程"
collection: "series"
kind: "article"
order: 23
source: "docs/[講課]勤益科大教育訓練講課 - Vue.js前端開發課程/2-3. Component Slot.md"
draft: false
publishedAt:
updatedAt:
---



# 2-3. Component Slot

## Slot

子組件內的`<slot>`標籤，可給父組件來定義內容

```html
<!-- SubmitButton.vue -->
<button type="submit">
  <slot></slot>
</button>

<!-- 父層Component -->
<submit-button>
  Save
</submit-button>
```



## Slot預設內容

`<slot>`內可以預設內容，如果父組件沒有定義內容則子組件使用預設內容。如果父組件有定義內容，則預設內容會被取代掉。

```html
<!-- SubmitButton.vue -->
<button type="submit">
  <slot>Submit</slot>
</button>
```



## 練習

- 建立一個名稱為`AppLightbox1.vue`的檔案
- 將前面的Lightbox改成用slot，由父組件來定義內容

```html
<template>
  <div>
    <transition name="fade">
      <div class="lightbox" v-if="active">
        <div class="content">
          <slot></slot>
			  </div>
        <div class="bg" @click="close"></div>
      </div>
    </transition>
  </div>
</template>
```

完成範例：[AppLightbox1.vue](https://gitlab.com/sdyou/ncut-vue-course/-/blob/master/examples/2-3_slot/src/components/AppLightbox1.vue)

:::info

想進一步完整執行範例，可以至 Gitlab將整個教材的 Repo下載下來，Repo網址：https://gitlab.com/sdyou/ncut-vue-course。直接由畫面中的 `Clone`按鈕取得`git clone`資訊。

- 範例的 vue-cli專案路徑：`examples/2-3_slot`

- `AppLightbox1`的檔案路徑：`examples/2-3_slot/src/components/AppLightbox1.vue`

:::



## Slot的內容的作用域

- 當父組件定義子組件的`<slot>`內容時，父組件會先完成渲染才將內容帶入子組件。
- 以程式為例，父組件的`user`為父組件的Data，子組件的`user`為子組件的Data，分別對應不同的實例的變數。

```html
<!-- CurrentUser.vue（子component） -->
<span>
  <slot>{{ user.lastName }}</slot>
</span>

<!-- 父層Component -->
<current-user>
  {{ user.firstName }}
</current-user>
```



## Slot的插槽prop (Vue v2.6以上語法)

- 父組件的`v-slot`加上屬性值（自訂名稱），即可用此變數訪問子組件資料

```html
<tempalte v-slot:default="slotProps">{{slotProps.text}}</tempalte>
```

- 子組件要使用v-bind來承接參數

```html
<slot :text="text">預設內容</slot>
```



