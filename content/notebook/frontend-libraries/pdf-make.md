---
slug: "/frontend-libraries/pdf-make"
title: "[pdf-make] 匯出PDF"
authors: "thunderboy"
tags: ["javascript","pdfmake"]
category: "Frontend Libraries"
collection: "technical"
kind: "article"
order: 999
source: "docs/前端Libraries/[pdf-make] 匯出pdf.md"
draft: false
publishedAt: "2020-02-23"
updatedAt:
---

# [pdf-make] 前端PDF下載 | pdfmake自訂中文字型（使用NotoSansTC）

工作上有需要在前端將內容生成PDF下載的功能，在同事的推薦下使用pdfmake這個套件。

不過這個套件有個問題，他的預設字型是英文字型，而且似乎也沒有提供api能夠直接替換成自己的字型檔。如果需要更換字型需要在source code做一些修改，然後重新打包出編譯過的字型檔；雖然網路上也有很多教學，但在我研究過程中還是踩到一些坑，所以就把我自己的實作步驟、以及使用方式整理了一下跟大家分享。

## 凖備字型檔

在解說步驟之前呢，我先把我所遇到的坑說明一下。

因為擔心會有版權的問題，我是使用Google提供的開源字體「[思源黑體](https://fonts.google.com/specimen/Noto+Sans+TC)」(NotoSansTc)。而我套用上去之後（在我文章後面所有步驟做完之後）PDF下載的結果如下：

![](/images/notebook/legacy/c0d6d7d02b336096f6d9.png)

結果是慘不忍睹（因部份內容不方便展示所以有馬賽克，看起來也不太像是缺字。爬文之後懷疑是字體格式的問題。

Google提供的字體檔副檔名是.otf。於是我又上網找了副檔名是woff2（至於為何是用woff2而不是woff，是因為前者的size小一些）檔之後果然就正常了！

以下是我所找到的CDN檔案連結，請依所需下載，或者自行使用自己所需的字體檔案。

- **NotoSansTC-Thin**

  - http://fonts.gstatic.com/ea/notosanstc/v1/NotoSansTC-Thin.woff

  - http://fonts.gstatic.com/ea/notosanstc/v1/NotoSansTC-Thin.woff2

- **NotoSansTC-Light**

  - http://fonts.gstatic.com/ea/notosanstc/v1/NotoSansTC-Light.woff

  - http://fonts.gstatic.com/ea/notosanstc/v1/NotoSansTC-Light.woff2

- **NotoSansTC-Regular**

  - http://fonts.gstatic.com/ea/notosanstc/v1/NotoSansTC-Regular.woff

  - http://fonts.gstatic.com/ea/notosanstc/v1/NotoSansTC-Regular.woff2

- **NotoSansTC-Medium**

  - http://fonts.gstatic.com/ea/notosanstc/v1/NotoSansTC-Medium.woff

  - http://fonts.gstatic.com/ea/notosanstc/v1/NotoSansTC-Medium.woff2

- **NotoSansTC-Bold**

  - http://fonts.gstatic.com/ea/notosanstc/v1/NotoSansTC-Bold.woff

  - http://fonts.gstatic.com/ea/notosanstc/v1/NotoSansTC-Bold.woff2

- **NotoSansTC-Black**

  - http://fonts.gstatic.com/ea/notosanstc/v1/NotoSansTC-Black.woff

  - http://fonts.gstatic.com/ea/notosanstc/v1/NotoSansTC-Black.woff2



## 打包字型檔

由於pdfmake不能直接載入字型檔，還需透過source code裡用gulp寫好的腳本來編譯成js檔。依照你是用npm安裝或者是直接到官網下載整包source code，做法會有些微差異。

至於要用哪種方式好呢？我是覺得其實都沒差，前者（方法1）的話是可以直接在開發專案裡就可以直接處理（到node_modules裡可找到source code），後者（方法2）的話是可以在獨立的環境中處理，建好字型檔後就可以把source code刪掉了。

所以下分開說明：

### 方法1 - npm安裝pdfmake：

開發專案使用npm安裝pdfmake之後，到node_modules裡找到pdfmake資料夾，開啟gulpfile.js。

![](/images/notebook/legacy/fb4973bb92dfc2254cee.png)

然後找到如下圖的這一行。這個路徑是要放置字型檔的資料夾，但是npm安裝到node_modules裡面的檔案並沒有包含原始的字型檔、以及這個資料夾路徑，所以需要手動建立一個資料夾並放入要使用的字型（可放多個字型檔）到該資料夾裡，然後再把這個路徑改寫成自己建立的資料夾。

![](/images/notebook/legacy/75de18b44bd585c31e52.png)

接著在terminal中將路徑移動到pdfmake的根目錄（也就是和gulpfile.js所在的資料夾中）

`cd node_modules/pdfmake`

source code裡面包含package.json檔，所以直接下指令將所需套件安裝即可。

`npm install`

最後一步，用gulp打包字型檔。

`gulp buildFonts`

完成之後就會在「build」資料夾裡面打包出vfs_fonts.js，這個檔案就是pdfmake所要用的字型檔了。

最後一件要注意的事情，為方便維護、以及避免在node_modules更新的過程當中被覆蓋掉，我不建議僅將該檔案取代掉原始的程式，我會建議把vfs_fonts.js複製出來放到我們開發的專案資料夾當中，以我自己為例我是使用vue-cli開發的專案，我放在src/assets/fonts/資料夾當中。

### 方法2 - 下載整包source code：

方法2和方法1幾乎是一樣了。我自己就是這樣做的，因為我不想在我目前開發中的專案去修改source code（雖然其實也不會有什麼影響），所以就到 [Github](https://github.com/bpampuch/pdfmake)上將整包source code下載下來，然後在獨立的環境裡操作。

這包檔案比起方法1中用npm安裝，還會多了一個叫「examples」的資料夾。這個資料夾裡還有一個叫「fonts」的資料夾，裡面包含了pdfmake預設使用的字型檔，你應該會看到這些：

- Roboto-Italic.ttf

- Roboto-Medium.ttf

- Roboto-MediumItalic.ttf

- Roboto-Regular.ttf

由於打包時會把這個資料夾的字型檔全部一起打包。字型檔愈多、檔案就愈大，檔案愈大、前端網頁所要下載js chunk就愈大，如果用不到，全部刪掉即可！刪刪刪

然後把自己要用的字型檔放進去（可放多個字型檔）。

接下來步驟就和方法1當中所說的都一樣了：

將所需套件安裝。

`npm install`

最後一步，用gulp打包字型檔。

`gulp buildFonts`

完成之後就會在「build」資料夾裡面打包出vfs_fonts.js，這個檔案就是pdfmake所要用的字型檔了。

為方便維護、以及避免在node_modules更新的過程當中被覆蓋掉，我不建議僅將該檔案取代掉原始的程式，我會建議把vfs_fonts.js複製出來放到我們開發的專案資料夾當中，以我自己為例我是使用vue-cli開發的專案，我放在src/assets/fonts/資料夾當中。



## 使用方式

以下是我覺得比較需要注意的地方：

**1. 設定預設字體**

除非你修改source code（這就不太建議了，這樣用npm維護套件版本會有些問題），否則的話需要在參數上設定你所建立的預設字體。

**2. 獨立載入字體檔**

在前述的步驟中已經有提到了，我建議將所打包的字體檔vfs_fonts.js放到在開發專案的資料夾當中。一來是為方便維護、也避免在node_modules更新的過程當中被覆蓋掉。

**3. 字體檔(vfs_fonts.js)可使用動態載入**

如果是在js module當中直接import的話，webpack會把vfs_fonts.js和你的頁面程式打包成同一個js chunk，檔案size會非常驚人，會影響到載入頁面的效能。所以我會設計成在要開始下載pdf的時候才去下載vfs_fonts.js



根據上述三點，以下是程式範例：

```
import pdfMake from 'pdfmake/build/pdfmake'

let data = {
  content: [
    // pdf內容及格式
  ],
  styles: {
    // 樣式設定
  },
  defaultStyle: {
    font: 'NotoSansTC' // 預設的字體格式
  }
}

// 動態載入字體檔
pdfMake.vfs = await import('@/assets/fonts/vfs_fonts.js')

pdfMake.fonts = {
  NotoSansTC: {
    normal: 'NotoSansTC-Regular.woff2',
    bold: 'NotoSansTC-Bold.woff2',
  }
}

pdfMake.createPdf(data).download('檔案名稱')
```






