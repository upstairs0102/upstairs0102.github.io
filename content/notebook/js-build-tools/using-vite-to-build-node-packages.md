---
slug: "/js-build-tools/using-vite-to-build-node-packages"
title: "[主題] 用vite打包要發布npm的程式"
tags: ["vite","npm"]
category: "Modules & Build Tools"
collection: "technical"
kind: "article"
order: 999
source: "docs/JS Modules & Build Tools/[主題] 用vite打包要發布npm的程式.md"
draft: false
publishedAt:
updatedAt:
---

前情提要，先前寫過一篇關於發布npm的文章「[第一次發布npm套件就上手](https://upstairs0102.github.io/docs/js-build-tools/publish-js-library-to-npm)」，當時是針對發布套件程式時全部流程中所需要相關設定，使用的範例是一個比較基本的情況 - 也就是直接發布 Source Code（未打包或編譯的程式）。

但還有另外一種情況是需要打包程式的情形。所謂的打包程式，也就是透過 Webpack 或 Vite 等工具做 minify、uglify、或者Typescript/SCSS等的程式編譯，將模組化的 Source Code 輸出成一包一包的 bundle程式。

現代的前端框架如 React、Vue等基本上都已內建 Webpack 或 Vite，以本文來說就是使用 Vue3專案（使用 Vite）來作為範例，但無論是要使用其它前端框架、又或者不使用框架，和本文設定方式不會有所差異，因為主要需要設置的是 vite的 config 和 `packages.json`，跟使用什麼框架並不會有所影響；但如果您使用的是 Webpack的話就會有比較大的差異無法直接套用了。

<!--truncate-->

## 打包不打包的差別

發布 Node Packages 到 npm 要不要做打包，我自己認為主要的差別是：

* 發布 Source Code：安裝 node package的專案如果遇到需要 debug或 trace code的情況是會比較方便的，未經過編譯的程式碼方便開發者可直接進去開啟程式、甚至在瀏覽器中下斷點都是可行的。
* 發布打包過的程式碼：打包可以做 minify、uglify、或者Typescript/SCSS等的程式編譯等；在發布前做這些前處理通常有兩種需求，一是保護程式碼、不被輕易的閱讀，另外是透過程式編譯減低對外部 library的依賴。



## 發布 Node Packages 的設定

雖然本文主題是 Vite打包，但畢竟最終目的還是要發布上 npm，一些基本的 `packages.json` 設定還是需要了解一下，範例：

```json
// package.json
{
  "name": "my-library",
  "version": "1.0.0",
  "description": "My Node Packages Setting Example",
  "author": "Adam You <upstairs0102@gmail.com>",
  "license": "MIT",
  "private": fasle,
  "keywords": [
    "vue",
    "component",
  ],
  "main": "lib/main.js",
  "files": [
    "lib/*",
    "src/components/*"
  ]
}
```

- `name`：node package 的名稱（發布至 npm上所使用的名稱）。
- `version`：版本號。每次發布都要大於過去的版本，否則就會發布失敗。
- `main`：node package 的入口檔。
- `files`：欄位是設定 node package的檔案範圍，同時也是會發布至 npm的檔案；如果此欄位沒有設定預設會發布所有的檔案。
- `private`: 設為 `false` 才可以發布到 npm。



## vite打包設定

### 使用 vite-plugin-dts自動生成 .d.ts型別

透過打包將 .ts檔編譯成 .js檔之後就沒有 typescript的型別推斷，這時候可以使用 `vite-plugin-dts` 工具自動產生 .d.ts。當然 .d.ts也可以自己寫不一定要依賴工具

```
npm i -D sass vite-plugin-dts
```



`vite.config.js` `dts`設定

```
import dts from 'vite-plugin-dts'

export default defineConfig({
  plugins: [
    dts()
  ],
})
```



`tsconfig.json` 針對 `dts` 做修正，這是我自己測出來的結果（不太清楚具體原因），如果沒加的話打包出來會編譯不出 `.d.ts` 檔

```
{
  "compilerOptions": {
    "composite": true
  }
}
```



### packages 打包相關設定

`vite.config.js` 打包設定（範例）

```js
import { resolve } from 'path'

export default defineConfig({
  build: {
    lib: {
      entry: "src/main.ts",
      name: 'myLibrary',
      formats: ["es", "cjs", "umd"],
      fileName: format => `my-library.${format}.js`
    },
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/main.ts")
      },
      external: ['vue'],
      output: {
        assetFileNames: 'my-library.css',
        exports: "named",
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
})
```

在以上範例中，會依照 lib/formats 中的設定產生 `my-library.es.js`, `my-library.cjs.js`, `my-library.umd.js` 三個檔案，分別是 ESM, CommonJS, UMD 三種的 JS模組化規範。



`packages.json` 欄位資訊（範例）

```json
{
  "name": "my-library",
  "version": "1.0.0",
  "description": "My Node Packages Setting Example",
  "author": "Adam You <upstairs0102@gmail.com>",
  "license": "MIT",
  "private": fasle,
  "keywords": [
    "vue",
    "component",
  ],
  "files": [
    "dist",
    "README.md"
  ],
  "main": "./dist/my-library.umd.js",
  "module": "./dist/my-library.es.js",
  "exports": {
    ".": {
      "import": "./dist/my-library.es.js",
      "require": "./dist/my-library.umd.js"
    },
    "./dist/my-library.css": {
      "import": "./dist/my-library.css",
      "require": "./dist/my-library.css"
    }
  },
  "types": "./dist/main.d.ts",
}
```

在前一個章節我們只使用了 `main` 來宣告入口程式，我們還可以選擇使用（有需的話）`module` 及 `browser`：

* `main`：通用的入口檔案設定
* `module`：ESM 的入口檔案
* `browser`：限定 browser環境使用的入口檔案

另外這邊還多設定了一個 `exports` 欄位，可以限制哪些檔案可以被 export出來。



## Demo網站打包及布署設定

開發一個 npm套件除了發布程式碼上去之外，也常會在 Github上放置文件以及展示頁面。

當然 Demo網站也可以選擇在另一個獨立的專案中開發，但如果想讓兩者共用同一份要發布套件的程式碼，並且更大程式共享相同的依賴，使用同一份 `packages.json` 是一個不錯的做法。



### Demo頁打包資料夾路徑

打包出來的程式預設會被放到 `dist` 資料夾中，在前面我們打包套件程式的時候並沒有更改設定所以會被放到 `dist` 資料夾中，而我們要打包 Demo網站，會避免被放到相同的資料夾當中，所以會設定到不同的資料夾中。

以往 Webpack 是設定在 `outputDir` 欄位中， vite 是在`vite.config.ts` 中設定 `outDir` 欄位：

```js
build: {
  outDir: 'demo'
}
```



### Demo頁和Package的打包分開來

以這個需求來說我們需要分別打包出兩份程式，一份是要發布上 npm的 Node Packages，另一份是要布署 Demo網站的程式。

為了在指令上做區隔，`packages.json` 的 `scripts` 內的指令分別加上 `--mode` 參數

```json
{
  "scripts": {
    "build:demo": "vite build --mode production-demo",
    "build:package": "vite build --mode production-package"
  }
}
```



`vite.config.js` 上改用 callback 的寫法，透過注入的 `mode` 參數判斷執行的是哪個指令 (mode) 然後回傳相對應的設定

```js
export default defineConfig(({ command, mode }) => {

  if (mode === 'production-package') {
    return buildPackageConfig
  } else {
    return buildDemoConfig
  }

})
```



完整的範例：

```ts
import { fileURLToPath, URL } from 'node:url'

import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'

const buildDemoConfig = {
  plugins: [
    vue()
  ],
  base: '/my-library/demo',
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    outDir: 'demo'
  },
  server: {
    host: '0.0.0.0'
  }
}

const buildPackageConfig = {
  plugins: [
    vue(),
    dts({
      cleanVueFileName: true,
      insertTypesEntry: true,
      aliasesExclude: ['src/views']
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    lib: {
      entry: "src/main.ts",
      name: 'myLibrary',
      formats: ["es", "cjs", "umd"],
      fileName: (format: string) => `my-library.${format}.js`
    },
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/main.ts")
      },
      external: ['vue'],
      output: {
        assetFileNames: 'my-library.css',
        exports: "named",
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
}

export default defineConfig(({ command, mode }) => {

  if (mode === 'production-package') {
    return buildPackageConfig
  } else {
    return buildDemoConfig
  }

})
```



## Reference

[How to create a component library with Vue 3 + ViteJS + TypeScript?](https://medium.com/@blaster203/how-to-create-a-component-library-with-vue-3-vitejs-typescript-8eb41f799045)

[JS模块规范：AMD、UMD、CMD、commonJS、ES6 module](https://segmentfault.com/a/1190000012419990)

[Vue3 + Vite + Ts自己封装的基础组件库发布npm ，npm安装使用（Volar ）支持TS 类型提示功能（vite-plugin-dts 使用）](https://juejin.cn/post/7246638858912989241)

[package.json 中 你还不清楚的 browser，module，main 字段优先级](https://github.com/SunshowerC/blog/issues/8)

