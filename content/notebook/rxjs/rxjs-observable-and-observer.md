---
slug: "/rxjs/rxjs-observable-and-observer"
title: "[RxJS] Observable & Observer"
tags: ["rxjs"]
category: "RxJS"
collection: "technical"
kind: "article"
order: 999
source: "docs/RxJS/[RxJS]Observable & Observer.md"
draft: false
publishedAt:
updatedAt:
---

### Observable

建立新的 Observable物件有兩個方式：

一、從頭開始建立新的 `Observable`物件

```js
import { Subject } from 'rxjs'
   
const source = new Subject()
   
document.addEventListener('click', event => {
  souce.next(event)
})
```

`Subject`預設會有三個方法：

* `next`
* `error`
* `complete`



二、將現有的資料或事件轉換成 `Observable`物件

```js
import { fromEvent } from 'rxjs'
   
const source = fromEvent(document, 'click')
```



### Subscription

`Observable`物件提供`subscribe`方法「訂閱」資訊，這些程式稱之為「觀察者」(`Observer`)：

```js
// 寫法一
const observer = {
  next: (data) => console.log(data),
  error: (err) => console.log(err),
  complete: () => console.log('complete')
}
source.subscribe(observer)

//寫法二
source.subscribe((data) => console.log(data))
```

當 `subscribe`方法呼叫後，我們會拿到一個「訂閱物件」(`Subscription`)

```ts
const subscription:subscription = source.subscribe((data) => console.log(data))

// 取消訂閱
subscription.unsubscribe()
```



> 範例 https://stackblitz.com/edit/rxjs-book-counter-practice?file=index.ts



### Observable類別 & Subject類別

`Observable`類別：

```js
const source$ = new Observable(subscriber => {
  console.log('stream 開始')
  subscriber.next(1)
  subscriber.next(2)
  subscriber.next(3)
  subscriber.next(4)
  console.log('stream 結束')
  subscriber.complete()
})

source$.subscribe({
  next: data => console.log(`Observable 第一次訂閱: ${data}`),
  complete: () => console.log('第一次訂閱完成')
})
```

`Subject`類別：

```js
const source$ = new Subject()

source$.subscribe(data => console.log(`Subject 第一次訂閱: ${data}`))

source$.next(1)
source$.next(2)

source$.subscribe(data => console.log(`Subject 第二次訂閱: ${data}`))

source$.next(3)
source$.next(4)

source$.complete()

// Subject 第一次訂閱: 1
// Subject 第一次訂閱: 2
// Subject 第一次訂閱: 3
// Subject 第二次訂閱: 3
// Subject 第一次訂閱: 4
// Subject 第二次訂閱: 4
```



差別：

1. `Observable` 在建立物件同時就決定好資料流向了，而 `Subject` 是在產生物件後才決定資料的流向。
2. `Observable` 每個訂閱者都會得到獨立的資料流，又稱為 unicast；而 `Subject` 則是每次事件發生時就會同步傳遞給所有訂閱者 (Observer)，又稱為 multicast。

我的理解：`Observable`物件是用來被觀察的，所以只有最一開始時建立資料流，建立完之後就不允許發送新的事件。而`Subect`物件不但允許發送新的事件，還會一對多的發送給所有`observer`



### BehaviorSubject類別

一開始訂閱時會立刻收到一個預設值，第二次之後的訂閱時會收到最近一次發生過事件的資料

```js
const sortBy$ = new BehaviorSubject({ sort: 'stars', order: 'desc' })
```

**建立出來的 Obsesrvable 物件可以透過 `value` 屬性取得最新的事件值**

```js
sortBy$.value.sort // 'stars'
```





### ReplaySubject類別

會保留最近N次的事件資料，並在訂閱時重播這些發生過的事件資料給訂閱者



### AsyncSubject類別

當AsyncSubject物件被建立後，過程中發生的任何事件都不會收到資料，直到`complete()`被呼叫後，才會收到「最後一次事件資料」



### asObservable

所有的 `Subject`系列都有一個共同的API - `asObservable`，可以將`Subject`當作`Observable`物件回傳，變成只能用來「被觀察的」，因此沒有`next()`、`complete()`、`error()`方法。

目的：把資料流傳出去，又能不讓外部直接呼叫 `next()`來產生新事件，更加具有封裝性。

我的理解是有點像 readable 的概念



### Cold Observable & Hot Observable

使用`Observable`類別所建立的物件都是 Cold Observable，而使用 `Subject`系列類別所建立出來的物件則都是 Hot Observable。

|            | Cold Observable                                              | Hot Observable                                               |
| ---------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| 實作類別   | `Observable`類別                                             | `Subject`系列類別                                            |
| 資料流     | Cold是「冷啟動」狀態，平常資料是沒有流動的，訂閱發生時才有資料流動 | Hot是「熱啟動」狀態，也就是一直維持啟動的狀態，不論是否有被訂閱 |
| 推送方式   | 一對一，unicast（單播）                                      | 一對多，multicast（多播）                                    |
| 觀察者     | 只有一位，每次的訂閱都會產生一次新的資料流                   | 多位，每次事件發生都會推送給所有觀察者                       |
| 訂閱資料流 | 完整的資料流                                                 | 最新的資料流                                                 |
|            |                                                              |                                                              |
|            |                                                              |                                                              |



### Warm Observable

透過 `share` operator，可以將 Cold Observable 轉換為 Warm Observable。和 Cold Observable 相同的是第一次訂閱才會去執行資料流，而第二次之後就不再執行、直接將事件發送給觀察者。

[書裡的範例](https://stackblitz.com/edit/rxjs-book-warm-observable-api-request?file=index.ts)




