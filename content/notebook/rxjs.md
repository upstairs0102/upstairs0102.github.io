---
slug: "/rxjs/combinelatest-duplicate-events"
title: "[主題]去除掉 combineLatest 中同時間的重覆事件"
tags: ["rxjs"]
category: "RxJS"
collection: "technical"
kind: "article"
order: 999
source: "docs/RxJS/[主題]去除掉combineLatest中同時間的重覆事件.md"
draft: false
publishedAt: "2023-09-12"
updatedAt:
---





### 問題

由於`combineLatest` 是用來組合多個 Observable 的事件值的，所以**每一個 Observable 的事件都會被訂閱到**。

如果每一個 Observable 都是「不同時」發生的，則會取得「當下」每一個 Observable 最後一次的事件值。

但現在要處理的狀況是 - 如果有多個 Observable 是「同時」發生事件的，也仍然會產生多個訂閱事件，這個就不一定符合**「只取最後一次事件資料」**的目的。

> 我在這邊所說的「同時」從程式的角度來看其實不是很精確，畢竟程式是一行一行執行的，多個 Observable 的訂閱事件也一定就會有先後順序，那就不會是同時的。但我想表達的比較像是 RxJS常用的彈珠圖上（或者也可以說是時間軸）同一時間所發生的事件。



以下的範例如果畫成彈珠圖的話，在第0秒和第1秒各別有三個 Observable（在這邊用的是 `Subject`類別）的訂閱事件，第0秒的時候由於三個 Observable在事前都沒有任何資料，所以只會在三個都取得第一個資料後產生一個訂閱事件，而第1秒鐘的時候由於三個 Observable會分別跟其它 Observable的最後一次事件資料組合，所以共會產生三個訂閱事件。程式碼如下：

```js
const a$ = new Subject()
const b$ = new Subject()
const c$ = new Subject()

const stream$ = combineLatest([a$, b$, c$]).subscribe(
  (d) => console.log(d)
)

a$.next('A1')
b$.next('B1')
c$.next('C1')

setTimeout(() => {
  a$.next('A2')
  b$.next('B2')
  c$.next('C2')
}, 1000)

// ['A1', 'B1', 'C1']
// ['A2', 'B1', 'C1']
// ['A2', 'B2', 'C1']
// ['A2', 'B2', 'C2']
```



畫成彈珠圖的話就會是

```
['A1', 'B1', 'C1']----(['A2', 'B1', 'C1']['A2', 'B2', 'C1']['A2', 'B2', 'C2']|)
```



### 使用 `switchMap` 取消舊的訂閱事件

如果我們只想要在第0秒以及第1秒各發生一次訂閱事件的話，要解決這個問題只要加上 `switchMap`，轉換出來的 Observable，同時間的訂閱事件只會有一次，而且可以取到同時間每個 Observable 最後一次的事件值：

```js
const a$ = new Subject()
const b$ = new Subject()
const c$ = new Subject()

const stream$ = combineLatest([a$, b$, c$]).pipe(
  switchMap(async (d) => d),
).subscribe(
  (d) => console.log(d)
)

a$.next('A1')
b$.next('B1')
c$.next('C1')

setTimeout(() => {
  a$.next('A2')
  b$.next('B2')
  c$.next('C2')
}, 1000)

// ['A1', 'B1', 'C1']
// ['A2', 'B2', 'C2']
```



畫成彈珠圖的話就會是

```
['A1', 'B1', 'C1']----(['A2', 'B2', 'C2']|)
```



這個原理是**`switchMap` 每次轉換時會把前一次還沒結束掉的 Observable給結束訂閱**。

而這個例子來看，`a$`、`b$`、`c$` 三者雖然是同時間呼叫 `next()`，但是這三者在被執行完訂閱事件 `subscribe()`結束之前訂閱都不算完成，所以在前面說的規則（每次轉換時會把前一次還沒結束掉的 Observable給結束訂閱）之下，`a$` 會被 `b$` 的訂閱事件結束掉、`b$` 會被 `c$` 的訂閱事件結束掉，最後只剩下 `c$` 的訂閱事件。



### 注意事項

1. `switchMap`的參數要在 function 前面加上 `async`標籤才能夠正確執行（請見範例）。

2. `switchMap`雖然會退訂未完成的訂閱事件，但那只代表那些被退訂的訂閱不會進到 `subscribe` 裡面，而 `switchMap` 內的 callback function 仍然每次都會被執行。所以複雜的計算盡量放到 `subscribe` 裡而不是 `switchMap`。以前面的範例來做說明，我們在 `subscribe` 裡面放 console.log 來做測試：

   ```js
   // 略..
   const stream$ = combineLatest([a$, b$, c$]).pipe(
     switchMap(async (d) => {
       console.log('switchMap') // 新增這行來測試
       return d
     }),
   ).subscribe(
     (d) => console.log(d)
   )
   // 略…
   
   // switchMap
   // ['A1', 'B1', 'C1']
   // switchMap
   // switchMap
   // switchMap
   // ['A2', 'B2', 'C2']
   ```

   

