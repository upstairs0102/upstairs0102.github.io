---
slug: "/frontend-libraries/vue-gtag"
title: "[vue-gtag]Vue專案用的gtag"
tags: ["vue-gtag"]
category: "Frontend Libraries"
collection: "technical"
kind: "article"
order: 999
source: "docs/前端Libraries/[vue-gtag].md"
draft: false
publishedAt:
updatedAt:
---



## 一、gtag

官方文件主要參考以下兩個：

* [Google代碼 (gtag.js)](https://developers.google.com/tag-platform/gtagjs/reference?hl=zh-tw) 主要的開發文件
* [Google Analytics](https://developers.google.com/analytics/devguides/collection/ga4/events?hl=zh-tw&client_type=gtag) 這個當輔助參考就可以了

要留意不要看錯文件看到 [舊版ga (Universal Anaytics)](https://developers.google.com/analytics/devguides/collection/gtagjs?hl=zh-tw)



## 二、vue-gtag

[github](https://github.com/MatteoGabriele/vue-gtag)

[document](https://matteo-gabriele.gitbook.io/vue-gtag/)

截至今天（2023/8/16），vue-gtag最後更新日是 2021-05-21，不曉得是沒在維護還是因為也沒有更新的需要

可以找到兩個版本分別是 vue-gtag以及 vue-gtag-next，兩個是獨立的 repo很容易混餚，Nuxt上文件範例是使用 vue-gtag-next，但我查了一下目前 vue-gtag才是最新版本



### 幾個要注意的事情

1. 官方文件提供關於 gtag.js的連結是 Universal Anaytics的，要自行開啟新版 GA4的連結小心不要被誤導了
2. vue-gtag-next已經不是最新版的，要注意版本號使用 v2.x的
3. Nuxt官網的範例使用 vue-gtag-next，小心不要跟著用到舊版的



### 安裝vue-gtab

```
npm add vue-gtag
```



```js
import { createApp } from "vue";
import App from "./App.vue";
import VueGtag from "vue-gtag";

createApp(App).use(VueGtag, {
  config: { id: "GA_MEASUREMENT_ID" }
}).mount("#app");
```



### Options API & Composition API寫法差異

Options API

```js
export default {
  name: 'MyComponent',

  methods: {
    login () {
      this.$gtag.event('login', { method: 'Google' })
    }
  }
}
```

Composition API

```js
import { event } from 'vue-gtag'

export default {
  name: 'MyComponent',

  setup() {
    const login = () => {
      event('login', { method: 'Google' })
    }
    
    return {
      login
    }
  }
}
```



### Bootstrap options

GDPR保護的網頁需在使用者同意之下才能進行追蹤。設定 `bootstrap`為 true以控制執行的時間點

```js
import { createApp } from "vue";
import VueGtag from "vue-gtag";

createApp(App).use(VueGtag, {
  bootstrap: false,
  config: { 
    id: "GA_MEASUREMENT_ID",
  },
}).mount("#app");
```



```js
import { bootstrap } from 'vue-gtag'

export default {
  name: 'MyComponent',

  methods: {
    enablePlugin () {
      bootstrap().then((gtag) => {
        // all done!
      })
    }
  }
}
```



### Auto tracking

將 VueRouter的 Instance放到第三個參數就可以啟動 auto tracking功能。

我自己實測是如果沒加的話，切換分頁時仍有累加到造訪使用者的紀錄，但不會有各分頁的資訊。

```js
app.use(VueGtag, {
  config: { 
    id: "GA_MEASUREMENT_ID",
  },
}, router); // <----- add your router here
```

![image-20230419181944308](/images/notebook/legacy/1fdace50936428f0e2e8.png)



### Screenview

看文件說明看不懂什麼意思，但我自己實測之後發現設為 true之後，後台就不會有各分頁的數據，而是全部累加在一起。

感覺好像沒什麼意義，就不要使用就好了。

```js
app.use(VueGtag, {
  appName: 'My application',
  pageTrackerScreenviewEnabled: true,
  config: { 
    id: "GA_MEASUREMENT_ID",
  },
}, router);
```



![image-20230419181631385](/images/notebook/legacy/c78e49d2dfe37b1fd436.png)







### Page tracker template

自訂義頁面名稱，這個無論是使用 pageviews或 screenviews都有相同的作用

```js
app.use(VueGtag, {
  pageTrackerTemplate(to) {
    return {
      page_title: 'amazing page',
      page_path: to.path
    }
  },
  config: { 
    id: "GA_MEASUREMENT_ID",
  },
}, router);
```



![image-20230418163755940](/images/notebook/legacy/73a850617d1897f8417c.png)

### Multiple domain tracking

```js
import { createApp } from "vue";
import App from "./App.vue";
import VueGtag from "vue-gtag";

createApp(App).use(VueGtag, {
  includes: [
    { id: 'GA_MEASUREMENT_ID_2' },
    { 
      id: 'GA_MEASUREMENT_ID_3',
      params: {
        anonymize_ip: true
      }
    }
  ],
  config: { id: "GA_MEASUREMENT_ID_1" }
}).mount("#app");
```



```js
export default {
  name: 'MyComponent',

  methods: {
    login () {
      this.$gtag.event('login', { method: 'Google' })
    }
  }
}
```

如果要指定事件要發送到哪個ga，可以加上`sent_to`參數，參考：[gtag文件](https://developers.google.com/tag-platform/gtagjs/reference?hl=zh-tw#parameter_precedence)



### Plugin hooks

```js
import { createApp } from "vue";
import App from "./App.vue";
import VueGtag from "vue-gtag";

createApp(App).use(VueGtag, {
  config: { id: "GA_MEASUREMENT_ID" },
  onReady () {
    // ready
  },
  onBeforeTrack () {
    // before!
  },
  onAfterTrack () {
    // after!
  }
}).mount("#app");
```



### screenview

[gtag文件建議參數](https://developers.google.com/tag-platform/gtagjs/reference/events?hl=zh-tw)中沒有這個，但是 [API範例](https://developers.google.com/tag-platform/gtagjs/reference?hl=zh-tw#event)卻有？



```js
export default {
  name: 'MyComponent',

  methods: {
    track () {
      this.$gtag.screenview({
        app_name: 'MyApp',
        screen_name: 'Home page',
      })
    }
  }
}
```



### pageview

gtag文件的[事件建議參數](https://developers.google.com/tag-platform/gtagjs/reference/events?hl=zh-tw#parameters_15)中有



```js
export default {
  name: 'MyComponent',

  methods: {
    track () {
      this.$gtag.pageview({ page_path: '/about' })
      
      this.$gtag.pageview('/about')
      
      this.$gtag.pageview(this.$route)
    }
  }
}
```



### pageView 和 screenView的測試結果

* 兩者的參數都會被紀錄到事件當中，事件名稱分別為 `screen_view` 及 `page_view`，點擊進去之後可以再進一步看傳遞出來的參數

* 原本頁面切換的時候就會有`page_view` 和`screen_view` 的事件紀錄，手動傳遞事件會造成重覆的事件被紀錄。所以我覺得適用的情境可能是：特定的事件下沒有沒變更網址，被希望被紀錄下來為 `page_view`或`screen_view`的時候



![image-20230419180823084](/images/notebook/legacy/aef7cef2148973352b57.png)





### event

 gtag文件上的連結：https://developers.google.com/tag-platform/gtagjs/reference/events?hl=zh-tw

```js
export default {
  name: 'MyComponent',

  methods: {
    track () {
      this.$gtag.event(<action>, {
        'event_category': <category>,
        'event_label': <label>,
        'value': <value>
      })
    }
  }
}
```



### 事件的測試結果

分別使用[文件當中所列出來的事件名稱](https://developers.google.com/tag-platform/gtagjs/reference/events?hl=zh-tw)和自訂的變數名稱，兩者的測試結果並沒有差異。不曉得文件當中列的變數名稱是否還有其它的功能這個就不曉得了（比如能產出其它報告之類的）

![image-20230419182818491](/images/notebook/legacy/3809073ecca1d25faf03.png)

![image-20230419182908133](/images/notebook/legacy/04cf6d050466f73fcaeb.png)



### exception



```js
export default {
  name: 'MyComponent',

  methods: {
    track () {
      this.$gtag.exception({
        'description': 'error_description',
        'fatal': false
      })
    }
  }
}
```





### query

如果要直接操作 gtag可以使用 `query`，可直接使用 gtag的API

```js
export default {
  name: 'MyComponent',

  methods: {
    track () {
      this.$gtag.query('event', 'screen_view', {
        app_name: 'MyApp',
        screen_name: 'Home page',
      })
    }
  }
}
```



### 安裝在nuxt上

不要使用[Nuxt官網的範例](https://nuxt.com/docs/guide/directory-structure/plugins/#vue-plugins)，官網範例是使用舊版 vue-gtag-next



> https://stackoverflow.com/a/72702062/6252471

```js
yarn add --dev vue-gtag
```

`plugins/vue-gtag.client.js`

```js
import VueGtag, { trackRouter } from 'vue-gtag'
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueGtag, {
    property: {
      id: 'GA_MEASUREMENT_ID'
    }
  })
  trackRouter(useRouter())
})
```

