---
slug: "/frontend-libraries/xlsx-js-style"
title: "[xlsx-js-style] 匯出自訂樣式Excel檔"
authors: "thunderboy"
tags: ["javascript"]
category: "Frontend Libraries"
collection: "technical"
kind: "article"
order: 999
source: "docs/前端Libraries/[xlsx-js-style] 匯出自訂樣式Excel檔.md"
draft: false
publishedAt: "2022-12-07"
updatedAt:
---

## 前言

基於某些原因最近有在前端匯出excel檔、並且有自訂欄位樣式的需求。雖然以前就有開發過前端匯出Excel的功能，而且套件選擇也還算多實作也不難（當時是使用Export2Excel），但要自訂樣式的話我就沒做過了。

花了一段時間google發現事情似乎並沒那麼簡單。雖然說肯定是找一個套件並依api文件來實作就結束了，不會難到哪裡去；但麻煩的是網路上的資訊有些混亂，有一些教學文章又太過複雜，似乎沒看到哪個套件是比較被多數人使用並且有清晰的文件的。

花了一些時間研究，剛好找到了一個合適的套件叫 `xlsx-js-style`，它是使用另一個套件 [SheetJS](https://sheetjs.com/)相同的API並且擴充了額外可自訂樣式的 API（SheetJS似乎沒提供樣式設定的API）。

主要功能的API `xlsx-js-style`文件裡並沒有寫，必須要到`SheetJS`的[官方文件](https://docs.sheetjs.com/docs/)裡面查閱，而樣式相關的文件則在 [xlsx-js-sty le的官方文件](https://github.com/gitbrent/xlsx-js-style)裡面查閱。

這個套件的 API非常多，有需要可自行到上述連結查閱，本篇文章只會介紹到以下幾個剛好我這次有用到的功能：

* 欄位底色
* 欄位寬度
* 字體顏色                                                                                                                                  
* 合併欄位



## 快速上手xlsx-js-style

### 開始使用

撰寫這篇文章的時候 `xlsx-js-style`的版本為 v1.2.0，目前為止文件並不是寫得非常清楚，文件裡只有寫到如何使用 `script`標籤載入：

```js
<script src="dist/xlsx.bundle.js"></script>
```

至於如何在 js module中 import進來就沒提到了。不過我就是依照經驗試試看… 果然可以：

```js
import * as XLSX from 'xlsx-js-style'
```

接著，使用套件的起手試，就是先試著使用最簡範例；以下為文件上的範例，直接貼上就是一個可執行的程式：

```js
// STEP 1: Create a new workbook
const wb = XLSX.utils.book_new();

// STEP 2: Create data rows and styles
let row = [
	{ v: "Courier: 24", t: "s", s: { font: { name: "Courier", sz: 24 } } },
	{ v: "bold & color", t: "s", s: { font: { bold: true, color: { rgb: "FF0000" } } } },
	{ v: "fill: color", t: "s", s: { fill: { fgColor: { rgb: "E9E9E9" } } } },
	{ v: "line\nbreak", t: "s", s: { alignment: { wrapText: true } } },
];

// STEP 3: Create worksheet with rows; Add worksheet to workbook
const ws = XLSX.utils.aoa_to_sheet([row]);
XLSX.utils.book_append_sheet(wb, ws, "readme demo");

// STEP 4: Write Excel file to browser
XLSX.writeFile(wb, "xlsx-js-style-demo.xlsx");
```



### 欄位樣式

`xlsx-js-style` 提供 [Style API](https://github.com/gitbrent/xlsx-js-style#cell-style-properties)，在文件上有 api可查詢。如同前面的範例，使用方式是放在 data row當中的 `s`屬性當中。

比如：

```js
{s: { font: { bold: true, color: { rgb: 'ffffff' } }, fill: { fgColor: { rgb: 'c00000' }}}}
```

 其中 `font`, `fill`可以對應到 api文件上的 `Style Prop`欄位，其屬性值可以進一步的從文件中的表格查閱到。



## 其它的常用功能

### SheetJS文件

 `xlsx-js-style`主要是擴展了 `SheetJS`原有的 API，所以除了 Style API以外的 Core API就沒有放到文件當中了，必須要到 `SheetJS`的[文件](https://docs.sheetjs.com/docs/csf/)來查閱。

後面我會說明我自己常用到的 API。



### 欄位寬度

欄位寬度的設定要放在 WorkSheet底下的 `!cols`物件當中。範例如下：

```js
var wscols = [
  {wch: 6}, // "characters"
  {wpx: 50}, // "pixels"
  ,
  {hidden: true} // hide column
];
ws['!cols'] = wscols

XLSX.utils.book_append_sheet(wb, ws, "readme demo")
```

陣列當中的物件順序即對應欄位順序，其中屬性如下：

* wch: 字元數量
* wpx: pixels
* hidden: 隱藏



### 合併儲存格

合併儲存格的設定要放在 WorkSheet底下的 `!merge`物件中當。範例如下：

```js
const merge = [
  { s: { r: 0, c: 0 }, e: { r: 0, c: 7 } },{ s: { r: 3, c: 0 }, e: { r: 3, c: 7 } },
];
ws["!merges"] = merge
```

屬性說明：

* `s`: 合併起始欄位位置 (start)
* `e`: 合併結束欄位位置 (end)
* `r`: 列 index (row)
* `c`: 欄 index (column)

以上面例子來說明，即為從【列0、欄0】合併至【列0、欄7】，以及從【列3、欄0】合併至【列3、欄7】。



### 換行

換行需使用 Style API中設定換行樣式：

```js
{alignment:{ wrapText: true }}
```

接著欄位值當中就可以加入換行符號 `\n`。

以下為Cell加入換行文字的範例：

```js
{ v: '第一行\n第二行', s: { alignment:{ wrapText: true } } }
```



## 小結

在研究匯出 excel功能當中，找尋合適的套件反而是花最多時間的部份。這個 `xlsx-js-style`是我找到都有符合我的需求的一個套件，再來就是 `SheetJS`的文件也有點多不太好查找，所以就把我自己常用到的功能整理起來給大家參考。









https://github.com/gitbrent/xlsx-js-style

SheetJS文件（可以看完整的api）

https://docs.sheetjs.com/docs/csf/

合併儲存格

https://stackoverflow.com/questions/53516403/sheetjs-xlsx-how-to-write-merged-cells

寬度

https://github.com/SheetJS/sheetjs/issues/1158

換行

`\n` 換行

`cell.s = {alignment:{ wrapText: true }}`




