---
slug: "/vuejs-ncut-course-2019/day3-3"
title: "3-3. 查詢頁面實作練習"
tags: ["vue.js"]
category: "Vue.js 前端開發課程"
collection: "series"
kind: "article"
order: 33
source: "docs/[講課]勤益科大教育訓練講課 - Vue.js前端開發課程/3-3. 查詢頁面實作練習.md"
draft: false
publishedAt:
updatedAt:
---



# 3-3. 查詢頁面實作練習

## 建立練習專案  

1. 使用課程part2第一個章節內練習建立的專案
2. 安裝Mock.js

```
npm install mockjs
```

3. 安裝axios

```
npm install axios
```

4. 將以下連結內的所有資料夾複製到專案的`src`資料夾內
5. 安裝套件moment、js-xlsx、script-loader、file-saver

```
npm install moment xlsx script-loader file-saver
```



## 練習製作查詢頁面

1. 查詢選單：

   1. 學校（下拉選單。開啟頁面時使用`api/index.js`裡的函式`schoolGet`取得學校選單資料）
   2. 帳號（文字輸入框）
   3. 姓名（文字輸入框）
   4. 開始日期（datetime-picker）
   5. 結束日期（datetime-picker）

3. 製作查詢按鈕，查詢函式為`api/index.js`裡的函式`userGet`

4. 查詢資料時，使用`router.push`將參數放入`query`，並使用`watch`監聽`route.query`來取得查詢參數

5. 開啟頁面時使用預設查詢本月資料

6. 使用element-ui的table來呈現查詢列表，使用pagger來製作分頁

7. `data/searchRecordFormat.js`的資料為資料列表所需的欄位資訊

8. Table上使用`v-loading`屬性來呈現loading圖示



## 練習製作匯出功能

使用以下函式來製作功能：

```js
exportExcel () {
  import('@/vendor/Export2Excel.js').then(excel => {
    if (!this.tableData.length) {
      return
    }
    const data = this.tableData.map(d => {
      return this.searchRecordFormat.map(f => d[f.index] || '')
    })
    const header = this.searchRecordFormat.map(f => f.title)
    const dateString = moment().format('YYYY-MM-DD')
     excel.export_json_to_excel({
      header, // 表頭
      data, // 資料
      filename: `document_${dateString}`, // 非必填
      autoWidth: true, // 非必填
      bookType: 'xlsx' // 非必填
    })
  })
}

```



## 完成範例

![image-20230109092738477](/images/notebook/legacy/96c5b80feb9e341b17e2.png)

:::info

- 本範例的 vue-cli專案路徑：`examples/3-3_data_table`

* 想進一步完整執行範例，可以至 Gitlab將整個教材的 Repo下載下來，Repo網址：https://gitlab.com/sdyou/ncut-vue-course。直接由畫面中的 `Clone`按鈕取得`git clone`資訊。

:::
