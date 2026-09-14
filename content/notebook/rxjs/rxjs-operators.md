---
slug: "/rxjs/rxjs-operators"
title: "[RxJS] Operators"
tags: ["rxjs"]
category: "RxJS"
collection: "technical"
kind: "article"
order: 999
source: "docs/RxJS/_wip/[RxJS]Operators.md"
draft: true
publishedAt:
updatedAt:
---


### # 類型 Operators

用來產生 Observable 的

引入位置是在`rxjs`而非 `rxjs/operators`：

```js
import { ... } from 'rxjs'
```



#### EMPTY

#### of

#### from

#### fromEvent

#### fromEventPattern

#### range

#### iif

#### interval

#### timer

#### defer

#### throwError

#### ajax

### # 組合/建立類型 Operators

將多個 Observable 組合或建立成另一個 Observable

引入位置是在`rxjs`而非 `rxjs/operators`：

```js
import { ... } from 'rxjs'
```



#### concat

#### merge

#### zip

#### partition

#### combineLatest

用來組合每個資料流最後的事件值

```js
const startSearch$ = combineLatest({
  keyword: searchByKeyword$,
  sort: sortBy$,
  page: page$.pipe(startWith(1)),
  perPage: perPage$.pipe(startWith(10))
});
```



#### forkJoin

#### race

### # 轉換類型 Operators

#### map

#### scan

和 `reduce` 很像，可是他會在每次事件都會將累加的資料給于訂閱者，而 `reduce` 是全部累加結束時才將計算結果給于訂閱者。



```js
const page$ = merge(previousPage$, nextPage$).pipe(
  scan((currentPageIndex, value) => {
    const nextPage = currentPageIndex + +value;
    return nextPage < 1 ? 1 : nextPage;
  }, 1)
);
```





#### pairwise

#### switchMap

蠻好用的，和 Vue 的 `computed` 有（一點點）類似的用途，監聽（訂閱）某一個資料流之後轉換為另一個資料流

有新的事件時，會將之前的 Observable 物件訂閱給結束掉



#### concatMap

和 `switchMap` 的差異是他會等之前的 Observable 物件訂閱結束之後才會「接續」 (concat) 新產生的 Observable 物件訂閱



#### mergeMap

#### exhaustMap

### # 組合類型 Operators

#### switchAll

[書裡的範例](https://stackblitz.com/edit/rxjs-book-operators-switchall?file=index.ts)

和 `switchMap` 很像， `switchMap` = `switchAll` + `map`

以書裡的範例

```js
const stream$ = source$
  .pipe(
    map(round => generateStream(round)),
    switchAll()
  )
```

可以寫成

```js
const stream$ = source$  
  .pipe(
    switchMap(round => generateStream(round))
  )
```





#### concatAll

#### mergeAll

#### combineLatestAll

#### startWith

強制在訂閱時給予第一個事件值



### # 過濾類型 Operators

#### filter

#### first

#### last

#### single

#### take

在訂閱後取得 N 次事件資料並結束資料流。

**可以用在刻意把訂閱給結束掉的地方。**



[書裡的範例](https://stackblitz.com/edit/rxjs-book-practice-search-finished?file=index.ts,package.json)

```js
const keyword$ = fromEvent(document.querySelector('#keyword'), 'input').pipe(
  map((event: Event) => (event.target as HTMLInputElement).value),
  startWith(''),
  shareReplay(1)
);

const search$ = fromEvent(document.querySelector('#search'), 'click');

// 點擊查詢按鈕的資料流
const searchByKeyword$ = search$.pipe(
  switchMap(() => keyword$), 
  take(1), // <-- 點擊查詢按鈕後就會結束訂閱。否則如果持續訂閱就會造成輸入框文字變動(keyword$)則會觸發查詢
  filter(keyword => !!keyword)
);
```





#### takeLast

會在 complete時才一次取得



#### takeUtil

#### takeWhile

#### skip

#### skipLast

#### skipUntil

#### skipWhile

#### distinct

#### distinctUntilChanged

感覺用在避免重覆資料上不錯用



#### distinctUntilKeyChanged

#### sampleTime

固定間隔時間時可用



#### sample

#### auditTime

#### audit

#### debounceTime

太常用了



#### debounce

可自訂 `duration`計算函式



### # 條件/布林類型 Operators

#### isEmpty

#### defaultIfEmpty

#### find





#### findIndex

#### every

### # 數學/聚合類型 Operators

#### min

#### max

#### count

#### reduce

#### tap

用途：

1. 處理 side effect（如console.log、DOM操作）
2. 放入 observer 觀察者物件



#### toArray

#### delay

#### delayWhen

### # 錯誤處理 Operators

#### catchError

#### retry

#### retryWhen

#### finalize

### # Multicast類型 Operators

將 `Cold Observable` 轉換為 `Warm Observable`

#### connectable

使用 `connectable` 可將 unicast 轉換為 multicast，



#### share

共享計算結果

[共享 API 回傳資料的範例](https://stackblitz.com/edit/rxjs-book-warm-observable-api-request)（第二次訂閱之後不需再重打API）

```js
const apiRequest$ = new Observable(subscriber => {
  // 使用 fetch 呼叫 API
  fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.text())
    .then(responseText => {
      // 取得回應的內容，並傳到 subscriber 內
      subscriber.next(responseText);
      // 結束資料流
      subscriber.complete();
    });
});

const sharedApiRequest$ = apiRequest$.pipe(share());
```



#### shareReplay

重播前N次事件的資料

由於 `share` 實際上是建立一個 `Subject`，`Subject` 訂閱後需要有新事件才會得到資料，透過 `shareReplay` 可以不需等新事件就可以立即取得前 N 次的資料（以前面共享 API 的例子來說由於在 `Observable` 內有在 `subscriber` 上呼叫 `next`，訂閱後可立即取得資料）。

下面例子是透過 `fromEven` 建立的 Observable物件，直接取得目前輸入框目前的 value（文字）：

```js
const keyword$ = fromEvent(document.querySelector('#keyword'), 'input').pipe(
  map((event: Event) => (event.target as HTMLInputElement).value),
  shareReplay(1)
);
```

