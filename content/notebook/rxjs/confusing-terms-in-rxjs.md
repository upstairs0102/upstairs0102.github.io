---
slug: "/rxjs/confusing-terms-in-rxjs"
title: "[主題] 一些容易混淆的名詞"
tags: ["rxjs"]
category: "RxJS"
collection: "technical"
kind: "article"
order: 999
source: "docs/RxJS/[主題]RxJS中一些容易混淆的名詞.md"
draft: false
publishedAt:
updatedAt:
---



## 前言

在我學習 RxJS的時候我發現我遇到的第一個學習障礙就是一些很相似的名詞，雖然說書裡寫的感覺好像都說了，可是還是有點模糊。

比如說：在討論 Design Pattern的時候，Observer Pattern 的「被觀察者」是 **Subject**，而 RxJS的世界裡是講 **Observable**，但 Observable裡又有多種不同特性的類別包含 Observable類別以及 Subject類別等，所以你只說「Observable」有可能指的是「被觀察者」，如果是的話它也會包含 Subject類別，而如果說的是「Observable類別」那就是針對那個類別的物件在做討論…

我花了一點時間做筆記以及整理才把這些名詞弄清楚，但真的要到熟悉也還是到實際有寫了一些摳之後了…



## 一、通稱

### Stream（串流/資料流）

ReactiveX中所有可操作的東西都稱之為串流(Stream)，使用中文時有時候會直接用「資料流」



### Subject

「觀察者模式 (Observer Pattern)」中的被觀察的目標（但在rxjs語境當中會使用 Observable）

> Observer Pattern:
>
>   ![image-20230912102647192](/images/notebook/legacy/bcdacb3641ea8477cfc6.png)



### Observer

「觀察者模式 (Observer Pattern)」中的觀察者，當資料流發生時 Subject會推播給 Observer。



### Observable

ReactiveX中所有的資料流都是「可被觀察的」(Observable)，這些物件可被通稱為「Observable物件」。



### Subscriber

訂閱者，感覺上和 Observer很像，但是使用場景不太一樣。我的理解是他是被用在 `Observable`物件的資料流中的訂閱者物件（如下範例），而`Observable`物件具有 「Cold Observable」特性，資料流是發生在訂閱之後才會發生，所以資料流就是發生在「訂閱者」而不是「被觀察者」身上了。

> ```js
> const source$ = new Observable(subscriber => {
> subscriber.next(1)
> subscriber.next(2)
> subscriber.complete()
> })
> const observer = {
> next: data => console.log(`Observable 第一次訂閱: ${data}`),
> complete: () => console.log('第一次訂閱完成')
> }
> source$.subscribe(observer)
> ```
>
> 進一步了解可參考網路上的討論 [RxJS Is Observer and Subscriber the same thing?](https://stackoverflow.com/questions/66939462/rxjs-is-observer-and-subscriber-the-same-thing)



## 二、類別（物件）

### Observable類別

指實作「Hot Observable」的類別，為了和通稱的「被觀察者」做區別，我會講「Observable類別」而不會只講「Observable」，這樣會比較明確一點。



### Subject

指實作「Cold Observable」的類別，雖然他也是一種 Observable（通稱），但是在明確的講是使用哪種類別的時候他和 「Observable類別」就是不同的類別，其它的類別還有 `BehaviorSubject`、`ReplaySubject`、`AsyncSubject`。



### Subscription

Observable使用 `subscribe()`方法回傳的物件稱為 Subscription，可以使用 `unsubscribe`方法來取消訂閱。

> ```js
> const subscription = source$.subscribe((data) => console.log(data))
> 
> // 取消訂閱
> subscription.unsubscribe()
> ```

