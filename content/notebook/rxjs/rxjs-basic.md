---
slug: "/rxjs/rxjs-basic"
title: "[RxJS] 基礎知識"
tags: ["rxjs"]
category: "RxJS"
collection: "technical"
kind: "article"
order: 999
source: "docs/RxJS/[RxJS]基礎知識.md"
draft: false
publishedAt:
updatedAt:
---

### ReactiveX

ReactiveX官網的介紹：

> an API for asynchronous programming with observable streams

「ReactiveX使用了可觀察的(Observable)串流(Stream)來處理非同步程式設計(Asynchronous Programming)的API規範」



使用到三個重要觀念：

1. 觀察者模式 (Observable Pattern)
2. 疊代器模式 (Iterator Pattern)
3. 函數語言程式設計 (Functional Programming)



使用ReactiveX基本的三個步驟：

1. 建立(Create)：建立 `Observable`物件
2. 組合(Combine)：以 `Operator`操作 `Observable`物件的資料流程
3. 監聽(Listen)：建立 `Subscribe`



### 觀察者模式

![Observer-pattern-class-diagram.png](/images/notebook/legacy/03366523a38f884b8c2b.png)

rxjs實作觀察者模式：

`Subject`：Observable物件。

`addObserver()`：Observable物件的 `subscribe()`，把觀察者(observer)加入清單內。

`deleteObserver`：訂閱 Observable物件後拿到的 `Subscription`物件的 `unsubscribe()`。

`notify()`：Observer的 `next()`（除了` next(`)之外還有 `error()`和 `complete()`）。

`notifyObservers()`：Observable物件的 `next()`（具體來說只有 `Subject`類別有，`Observable`類別沒有）。





