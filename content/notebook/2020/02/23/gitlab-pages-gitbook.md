---
slug: "/2020/02/23/gitlab-pages-gitbook"
title: "[Gitbook] Gitbook(v2)架設在Gitlab Pages上"
authors: "thunderboy"
tags: ["gitbook","gitlab pages"]
category: "Static Site"
collection: "technical"
kind: "article"
order: 999
source: "docs/static site/[Gitbook] Gitbook(v2)架設在Gitlab Pages上.md"
draft: false
publishedAt:
updatedAt:
---

# 不需花錢將Gitbook(v2)架設在Gitlab Pages上

gitbook是一個使用markdown文件就可以編譯成網頁的工具，非常適合拿來編寫電子書，也有需多工程師喜歡用來編輯技術文件，在一兩年前有一段時間好像非常流行，但是在gitbook的version 2.x版本之後有了重大的改版，gitbook帳號改為收費制（免費帳號功能有限）。

雖然對一般人來說門檻變高了，但其實對工程師來說仍然是非常好用。因為gitbook雖然帳號收費，但仍然有開源的程式碼可用，對於有一些技術背景的工程師很容易就可以想辦法自己架設起來；基本上不需要寫任何的程式碼（除非要改source code），無一需要煩惱的事情就是**該如何架設以**及**架設在什麼地方**。



研究了一段時間發現Gitlab Pages是非常完美的架設靜態網站的服務，而且Gitlab官方就有提供[範例](https://gitlab.com/pages/gitbook)，頁面上面也有簡易的教學，基本上就照著做也可以簡單的架設起來囉。

## 使用Gitlab Pages服務

首先，當然就是要先有Gitlab帳號，Gitlab服務都是免費的，所以就是直接註冊使用就對了，這邊就不詳述。

建立一個Project之後至Setting把Pages服務開啟。在頁面中間可以取得網站的網址。

![](/images/notebook/legacy/51d05449c3a5c8e36226.png)

## 在本機建立Gitbook撰寫環境

首先電腦中要有[node.js](https://nodejs.org/en/)的環境，然後使用npm安裝Gitbook套件到電腦本機當中。

`npm install gitbook-cli –g`

在專案的資料夾中，下gitbook的指令初始化。

`gitbook init`

到這一步就幾乎完成了。

最後要做的一件事，就是建立Gitlab CI/CD的yml檔，這個yml檔可以讓我們把專案git push上去到gitlab server的時候透過yml檔的腳本、將gitbook打包成靜態網頁並部署到gitlab pages的空間。

簡而言之呢，就是要建立一個能夠幫我們部署網頁的檔案，而這個yml檔我們也不需煩惱該如何篩寫，gitlab官網上的[範例](https://gitlab.com/pages/gitbook/-/blob/master/.gitlab-ci.yml)就有了，所以只要把範例中的程式碼整個複製起來，然後在根目錄建一個`.gitlab-ci.yml`則上去，完成（如果有不清楚的話請參考官網範例）。

## 開始撰寫

gitbook使用一個SUMMARY.md檔來定義整個網站的目錄結構。

每一行就是一個頁面的設定，格式如`* [標題](markdown檔案路徑)`。而檔案路徑也就是對應你所撰寫的md檔。縮排4個空白即為子目錄。

以下範例：

![](/images/notebook/legacy/7f449bc3d2cc02a0a07b.png)

架設好的網站會長成這樣：

![](/images/notebook/legacy/84dc72a522be1f0e7365.png)

要在本機端測試網站打包出來的結果的話可以下指令：

`gitbook serve`

因為我們要使用Gitlab CI/CD，在前一個步驟裡已經建立了.gitlab-ci.yml檔，所以我們只需要使用git指令將專案push上去之後，等個幾分鐘，就可以看到架設好的gitbook網站了（在gitlab project選單setting/pages裡可取得網址）。

註：至於把檔案push上gitlab的git指令就不詳述了，不熟悉的朋友可參考在前述gitlab建立的project頁面，切至project首頁有相關的指令說明可參考喔！