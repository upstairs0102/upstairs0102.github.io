---
slug: "/css/tailwind-concept"
title: "[Tailwind] 官網文件 - Concept"
tags: ["css","tailwind"]
category: "CSS & Tailwind"
collection: "technical"
kind: "article"
order: 999
source: "docs/CSS & Tailwind/[Tailwind] 官網文件 - Concept.md"
draft: false
publishedAt:
updatedAt:
---



## Tailwind文件 - Concepts / 1. Styling with utility classes

https://tailwindcss.com/docs/styling-with-utility-classes

### utility classes

官方認為的好處：

* You get things done faster
* Making changes feels safer
* Maintaining old projects is easier
* Your code is more portable
* Your CSS stops growing

Why not just use inline styles? -> utility classes 的優勢：

* Designing with constraints（約束力）
* Hover, focus, and other states
* Media queries

### variants（變體）

在 Tailwind 中這些 prefix 稱為 variants（變體），僅當該 variants 的條件相符時，他們才會套用到 utility classes 的樣式

### `hover`, `focus` states

以 prefix 加在 utility class 上

e.g. `hover:bg-sky-700`

### Media queries, breakpoints

以 prefix 加在 utility class 上

e.g.

```html
<div class="grid grid-cols-2 sm:grid-cols-3">
  <!-- ... -->
</div>
```

### Targeting dark mode

以 prefix `dark:`加在 utility class 上

### Using class composition

使用多個 utility classes 來建立一個 css 屬性

```html
<div class="blur-sm grayscale">
  <!-- ... -->
</div>
```

編譯出

```css
.blur-sm {
  --tw-blur: blur(var(--blur-sm));
  filter: var(--tw-blur,) var(--tw-brightness,) var(--tw-grayscale,);
}
.grayscale {
  --tw-grayscale: grayscale(100%);
  filter: var(--tw-blur,) var(--tw-brightness,) var(--tw-grayscale,);
}
```

這兩個 css 都依賴 `filter` 屬性，而這兩個 class 可以將這些效果組合在一起（`filter` 所查看所有這些變數如果尚未設定則回傳無）



### Using arbitrary values（任意值）

許多 utilities 使用 theme variables 驅動，e.g. `bg-blue-500`, `text-xl`, `shadow-md`，當需要使用 theme 之外一次性 (one-off) 值的時候，可以使用方括號語法來指定任意值

```html
<button class="bg-[#316ff6] ...">
  Sign in with Facebook
</button>
```

```html
<div class="max-h-[calc(100dvh-(--spacing(6))]">
  <!-- ... -->
</div>
```

```html
<div class="[--gutter-width:1rem] lg:[--gutter-width:2rem]">
  <!-- ... -->
</div>
```

### Complex selectors

多種條件組成

```html
<button class="dark:lg:data-current:hover:bg-indigo-600 ...">
  <!-- ... -->
</button>
```

使用父層管理，比如 `group-hover`：

```html
<a href="#" class="group rounded-lg p-8">
  <!-- ... -->
  <span class="group-hover:underline">Read more…</span>
</a>
```

其他 `group-*` 語法： `group-focus`, `group-active` 等

### 何時使用 inline-style

1. 動態資料綁定
2. arbitrary values 過於複雜時

例：原本使用 arbitrary

```html
<div class="grid-[2fr_max(0,var(--gutter-width))_calc(var(--gutter-width)+10px)]">
  <!-- ... -->
</div>
```

改使用 inline style

```html
<div style="grid-template-columns: 2fr max(0, var(--gutter-width)) calc(var(--gutter-width) + 10px)">
  <!-- ... -->
</div>
```

3. 使用 css 變數在 inline style 上

```jsx
export function BrandedButton({ buttonColor, buttonColorHover, textColor, children }) {
  return (
    <button
      style={{
        "--bg-color": buttonColor,
        "--bg-color-hover": buttonColorHover,
        "--text-color": textColor,
      }}
      className="bg-(--bg-color) text-(--text-color) hover:bg-(--bg-color-hover) ..."
    >
      {children}
    </button>
  );
}
```

>  我原本困惑 `className` 用組字串的方式就可以了，為何要使用 css 變數？後來在後面章節知道由於 Tailwind 在編譯時會掃描檔案中的 `className` 完整名稱，所以組字串的方式是不可行的

### Managing duplication

使用 utility classes 很容易出現這種重覆的情況

```html
<div>
  <div class="flex items-center space-x-2 text-base">
    <h4 class="font-semibold text-slate-900">Contributors</h4>
    <span class="bg-slate-100 px-2 py-1 text-xs font-semibold text-slate-700 ...">204</span>
  </div>
  <div class="mt-3 flex -space-x-2 overflow-hidden">
    <img class="inline-block h-12 w-12 rounded-full ring-2 ring-white" src="...略..." alt="" />
    <img class="inline-block h-12 w-12 rounded-full ring-2 ring-white" src="...略..." alt="" />
    <img class="inline-block h-12 w-12 rounded-full ring-2 ring-white" src="...略..." alt="" />
    <img class="inline-block h-12 w-12 rounded-full ring-2 ring-white" src="...略..." alt="" />
    <img class="inline-block h-12 w-12 rounded-full ring-2 ring-white" src="...略..." alt="" />
  </div>
  <div class="mt-3 text-sm font-medium">
    <a href="#" class="text-blue-500">+ 198 others</a>
  </div>
</div>
```

官網建議的幾種解法：

1. 使用迴圈（減少html標籤上的重覆）
2. 使用編輯器的 multi-cursor 編輯功能（不從程式上解決）
3. 使用 Components

### Using custom CSS

建議使用在 

1. Component 過於複雜、template過於笨重 (heavy-handed) 時
2. 無法控制的 HTML，比如 Markdown content

```css
@import "tailwindcss";
@layer components {
  .typography {
    p {
      font-size: var(--text-base);
      color: var(--color-gray-700);
    }
    h1 {
      font-size: var(--text-2xl--line-height);
      font-weight: var(--font-weight-semibold);
      color: var(--color-gray-950);
    }
    h2 {
      font-size: var(--text-xl);
      font-weight: var(--font-weight-semibold);
      color: var(--color-gray-950);
    }
  }
}
```



## Tailwind文件 - Concepts / 2. Hover, focus, and other states

https://tailwindcss.com/docs/hover-focus-and-other-states

### Pseudo-classes

like `:hover`, `:focus`, `:first-child`, and `:required`

### Pseudo-elements

like `::before`, `::after`, `::placeholder`, and `::selection`

### Media and feature queries

like responsive breakpoints, dark mode, and `prefers-reduced-motion`

### Attribute selectors

like `[dir="rtl"]` and `[open]`

```html
<div data-size="large" class="data-[size=large]:p-8">
  <!-- ... -->
</div>
```

### Child selectors

like `& > *` and `& *`

通常最好將 utility classes 直接放在子元素上，但在無法控制的子元素可以使用 `*`

```html
<div>
  <h2>Categories<h2>
  <ul class="*:rounded-full *:border *:border-sky-100 *:bg-sky-50 *:px-2 *:py-0.5 dark:text-sky-300 dark:*:border-sky-500/15 dark:*:bg-sky-500/10 ...">
    <li>Sales</li>
    <li>Marketing</li>
    <li>SEO</li>
    <!-- ... -->
  </ul>
</div>
```

子元素會因為外層的 Child Selectors 而無法運作

```html
<ul class="*:bg-sky-50 ...">
  <li class="bg-red-50 ...">Sales</li>
  <li>Marketing</li>
  <li>SEO</li>
  <!-- ... -->
</ul>
```

* `*` 直系子選擇器
* `**` 所有後代的子選擇器

### arbitrary variants

以 arbitrary 的格式自訂選擇器

```html
<ul role="list">
  {#each items as item}
    <li class="[&.is-dragging]:cursor-grabbing">{item}</li>
  {/each}
</ul>
```



## Tailwind文件 - Concepts / 3. Responsive design

https://tailwindcss.com/docs/responsive-design

### 斷點

| 斷點前綴 | 最小寬度           | CSS                               |
| -------- | ------------------ | --------------------------------- |
| `sm`     | 40rem *（640px）*  | `@media (width >= 40rem) { ... }` |
| `md`     | 48rem *（768px）*  | `@media (width >= 48rem) { ... }` |
| `lg`     | 64rem *（1024px）* | `@media (width >= 64rem) { ... }` |
| `xl`     | 80rem *（1280px）* | `@media (width >= 80rem) { ... }` |
| `2xl`    | 96rem *（1536px）* | `@media (width >= 96rem) { ... }` |

| Variant   | Media query                      |
| --------- | -------------------------------- |
| `max-sm`  | `@media (width < 40rem) { ... }` |
| `max-md`  | `@media (width < 48rem) { ... }` |
| `max-lg`  | `@media (width < 64rem) { ... }` |
| `max-xl`  | `@media (width < 80rem) { ... }` |
| `max-2xl` | `@media (width < 96rem) { ... }` |

```html
<div class="md:max-lg:flex">
  <!-- ... -->
</div>
```

### 行動優先

為行動裝置設計的樣式應使用「無」前綴版本的 utility class，而不是帶前綴版本的 `sm:`。不要將 `sm:` 理解為「在小螢幕上」，而是要將其理解為「在小斷點處」

```html
<!-- 使用不帶前綴的 utility class 來定位移動裝置，並用更大的斷點處覆蓋他們 -->
<div class="text-center sm:text-left"></div>
```

### 自訂斷點

透過 theme 的 css 變數自定斷點

```css
@import "tailwindcss";
@theme {
  --breakpoint-xs: 30rem;
  --breakpoint-2xl: 100rem;
  --breakpoint-3xl: 120rem;
}
```

### 使用 arbitrary 

如需要使用一次性斷點，可使用 `min` 或 `max` Variant 

```html
<div class="max-[600px]:bg-sky-300 min-[320px]:text-center">
  <!-- ... -->
</div>
```

### Container Queries

根據父元素的大小而不是整個視窗的大小來設定樣式。

使用 `@container` 類別將元素標記為容器，然後使用 `@sm`, `@md` 等 Variant 根據容器的大小設定子元素的樣式

```html
<div class="@container">
  <div class="flex flex-col @md:flex-row">
    <!-- ... -->
  </div>
</div>
```

### 最大寬度容器查詢

使用 `@max-sm`, `@max-md` 等在特定容器尺寸下套用樣式

```html
<div class="@container">
  <div class="flex flex-row @max-md:flex-col">
    <!-- ... -->
  </div>
</div>
```

### Container query 範圍

```html
<div class="@container">
  <div class="flex flex-row @sm:@max-md:flex-col">
    <!-- ... -->
  </div>
</div>
```

### Named Containers

使用下列 Variant 命名容器 `@container/{name}`  及對應特定 container 的 Variant  `@sm/{name}`, `@md/{name}`

```html
<div class="@container/main">
  <!-- ... -->
  <div class="flex flex-row @sm/main:flex-col">
    <!-- ... -->
  </div>
</div>
```

### 自訂 Container 尺寸

使用 `--container-x` theme 變數

```css
@import "tailwindcss";
@theme {
  --container-8xl: 96rem;
}
```

```html
<div class="@container">
  <div class="flex flex-col @8xl:flex-row">
    <!-- ... -->
  </div>
</div>
```

### Using arbitrary values

```html
<div class="@container">
  <div class="flex flex-col @min-[475px]:flex-row">
    <!-- ... -->
  </div>
</div>
```

### Container Size

| Variant | Minimum width    | CSS                                 |
| ------- | ---------------- | ----------------------------------- |
| `@3xs`  | 16rem *(256px)*  | `@container (width >= 16rem) { … }` |
| `@2xs`  | 18rem *(288px)*  | `@container (width >= 18rem) { … }` |
| `@xs`   | 20rem *(320px)*  | `@container (width >= 20rem) { … }` |
| `@sm`   | 24rem *(384px)*  | `@container (width >= 24rem) { … }` |
| `@md`   | 28rem *(448px)*  | `@container (width >= 28rem) { … }` |
| `@lg`   | 32rem *(512px)*  | `@container (width >= 32rem) { … }` |
| `@xl`   | 36rem *(576px)*  | `@container (width >= 36rem) { … }` |
| `@2xl`  | 42rem *(672px)*  | `@container (width >= 42rem) { … }` |
| `@3xl`  | 48rem *(768px)*  | `@container (width >= 48rem) { … }` |
| `@4xl`  | 56rem *(896px)*  | `@container (width >= 56rem) { … }` |
| `@5xl`  | 64rem *(1024px)* | `@container (width >= 64rem) { … }` |
| `@6xl`  | 72rem *(1152px)* | `@container (width >= 72rem) { … }` |
| `@7xl`  | 80rem *(1280px)* | `@container (width >= 80rem) { … }` |



## Tailwind文件 - Concepts / 4. Dark mode

https://tailwindcss.com/docs/dark-mode

使用 `dark` Variant

```html
<div class="bg-white dark:bg-gray-800 rounded-lg px-6 py-8 ring shadow-xl ring-gray-900/5">
  <div>
    <span class="inline-flex items-center justify-center rounded-md bg-indigo-500 p-2 shadow-lg">
      <svg class="h-6 w-6 stroke-white" ...>
        <!-- ... -->
      </svg>
    </span>
  </div>
  <h3 class="text-gray-900 dark:text-white mt-5 text-base font-medium tracking-tight ">Writes upside-down</h3>
  <p class="text-gray-500 dark:text-gray-400 mt-2 text-sm ">
    The Zero Gravity Pen can be used to write in any orientation, including upside-down. It even works in outer space.
  </p>
</div>
```

預設使用 `prefers-color-scheme`  CSS media queries

### 手動切換 dark mode

使用 CSS selector 取代預設的 `prefers-color-scheme` media query。

覆寫 `dark` Variant 改成自訂的 selector (class)

```css
@import "tailwindcss";
@custom-variant dark (&:where(.dark, .dark *));
```

```html
<html class="dark">
  <body>
    <div class="bg-white dark:bg-black">
      <!-- ... -->
    </div>
  </body>
</html>
```

或使用自訂的 data attribute

```css
@import "tailwindcss";
@custom-variant dark (&:where([data-theme=dark], [data-theme=dark] *));
```

```html
<html data-theme="dark">
  <body>
    <div class="bg-white dark:bg-black">
      <!-- ... -->
    </div>
  </body>
</html>
```

### 切換 dark mode 腳本

```js
// On page load or when changing themes, best to add inline in `head` to avoid FOUC
document.documentElement.classList.toggle(
  "dark",
  localStorage.theme === "dark" ||
    (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches),
);
// Whenever the user explicitly chooses light mode
localStorage.theme = "light";
// Whenever the user explicitly chooses dark mode
localStorage.theme = "dark";
// Whenever the user explicitly chooses to respect the OS preference
localStorage.removeItem("theme");
```

## Tailwind文件 - Concepts / 5. Theme

https://tailwindcss.com/docs/theme

文件上的說明：

> 使用 utility classes 作為 design tokens 的 API。
>
> Tailwind 是一個用於建立自訂設計的框架，不同的設計需要不同的字體、顏色、陰影、斷點等。
>
> 這些低階設計決策通常被稱為 design tokens（設計令牌），在 Tailwind 專案中，你將這些值儲存在 Theme 變數當中。

簡單講 design tokens 是一種「低階的設計決策」，在 Tailwind 中以 Theme 的變數進行管理。

### Theme 變數

使用 `@theme` directive 、在裡面定義  CSS 變數

`app.css`

```css
@import "tailwindcss";
@theme {
  --color-mint-500: oklch(0.72 0.11 178);
}
```

接著可使用 utility classes 比如 `bg-mint-500`, `text-mint-500`, `fill-mint-500` 

```html
<div class="bg-mint-500">
  <!-- ... -->
</div>
```

### 為什麼是 `@theme` 而不是 `:root`？

Theme 變數的作用比一般的 CSS 變數還多，有定義一些特殊語法

### 和 utility classes 的關係

有一些 utility classes 像 `flex`, `object-cover` 是固定的，他在不同專案間都是一樣的。而另外有許多是由 Theme 變數驅動的，只因為你有定義而存在。

```css
@import "tailwindcss";
@theme {
  --font-poppins: Poppins, sans-serif;
}
```

```html
<h1 class="font-poppins">This headline will use Poppins.</h1>
```

Tailwind 中預設有 `--font-sans`, `--font-serif`, `--font-mono` 所以不需定義即可使用相對應的 utility classes，而這個範例中的 `--font-poppins`是自定義。

也就是說可以在 `@theme` 當中隨意命名的主題變數，可以在 HTML 中使用相同名字的相應 utility class

### 與 Variant 的關係

一些主題變數用於定義 Variant 而不是 utility class，例 `--breakpoint-*` 命名空間中的主題變數決定了專案中存在哪些斷點 variants

```css
@import "tailwindcss";
@theme {
  --breakpoint-3xl: 120rem;
}
```

```html
<div class="3xl:grid-cols-6 grid grid-cols-2 md:grid-cols-4">
  <!-- ... -->
</div>
```

### 主題變數命名空間(Namespaces)

主題變數是在 namespaces 當中定義並對應到一個或多個 utility classes 或 variant APIs。

在 namespaces 中定義新的變數會建造出相應的 utility classes。

| Namespace          | Utility classes                                  |
| ------------------ | ------------------------------------------------ |
| `--color-*`        | 顏色實用程序`bg-red-500`，如`text-sky-300`等等   |
| `--font-*`         | 字體系列實用程式如`font-sans`                    |
| `--text-*`         | 字體大小實用程式如`text-xl`                      |
| `--font-weight-*`  | 字體粗細實用程式如`font-bold`                    |
| `--tracking-*`     | 字母間距實用程序，例如`tracking-wide`            |
| `--leading-*`      | 行高實用程序，例如`leading-tight`                |
| `--breakpoint-*`   | 響應式斷點變體，例如`sm:*`                       |
| `--container-*`    | 容器查詢變體`@sm:*`和大小實用程序`max-w-md`      |
| `--spacing-*`      | 間距和大小調整實用程序，例如`px-4`等等`max-h-16` |
| `--radius-*`       | 邊框半徑實用程式如`rounded-sm`                   |
| `--shadow-*`       | 盒子陰影實用程序，例如`shadow-md`                |
| `--inset-shadow-*` | 插入框陰影實用程序，例如`inset-shadow-xs`        |
| `--drop-shadow-*`  | 陰影濾鏡實用程序，例如`drop-shadow-md`           |
| `--blur-*`         | 模糊濾鏡實用程序，例如`blur-md`                  |
| `--perspective-*`  | 透視實用程式如`perspective-near`                 |
| `--aspect-*`       | 縱橫比實用程序，例如`aspect-video`               |
| `--ease-*`         | 過渡時間函數實用程序，例如`ease-out`             |
| `--animate-*`      | 動畫實用程式`animate-spin`                       |

### 預設主題變數

在最上層的 css 檔案中 import `tailwindcss`，他包含了一組預設的主題變數來幫助你開始使用。

這是 `tailwindcss` 中導入的內容，包含了預設調色板 (palette)、字體等：

```css
@layer theme, base, components, utilities;
@import "./theme.css" layer(theme);
@import "./preflight.css" layer(base);
@import "./utilities.css" layer(utilities);
```

像 `by-red-200`, `font-serif`, `shadow-sm` 等 utilities 是開箱即用的，因為他們是由預設主題驅動的。

[預設的所有變數](https://tailwindcss.com/docs/theme#default-theme-variable-reference)

### 擴充預設主題

在 `@theme` 中定義新的主題變數並擴展預設主題

```css
@import "tailwindcss";
@theme {
  --breakpoint-sm: 30rem;
}
```

以這個例子 `sm:*` variant 將變成 30rem 而不是預設的 40rem

```html
<div class="grid grid-cols-1 sm:grid-cols-3">
  <!-- ... -->
</div>
```

若要完全覆蓋預設主題中的整個命名空間，使用 `initial` 可以將該命名空間對應的所有預設 utilities （比如`bg-red-500`）給刪除，只有自己定義的自訂值（比如`bg-midnight`）才可用

```css
@import "tailwindcss";
@theme {
  --color-*: initial;
  --color-white: #fff;
  --color-purple: #3f3cbb;
  --color-midnight: #121063;
  --color-tahiti: #3ab7bf;
  --color-bermuda: #78dcca;
}
```

### 自訂主題

要完全停用 (disable) 預設主題並完全使用自訂 values，將全域主題變數 namespace 設定為 `initial`

```css
@import "tailwindcss";
@theme {
  --*: initial;
  --spacing: 4px;
  --font-body: Inter, sans-serif;
  --color-lagoon: oklch(0.72 0.11 221.19);
  --color-coral: oklch(0.74 0.17 40.24);
  --color-driftwood: oklch(0.79 0.06 74.59);
  --color-tide: oklch(0.49 0.08 205.88);
  --color-dusk: oklch(0.82 0.15 72.09);
}
```

### Animation keyframes

定義主題變數 `--animate-*` 使用的 `@keyframes` 規則

```css
@import "tailwindcss";
@theme {
  --animate-fade-in-scale: fade-in-scale 0.3s ease-out;
  @keyframes fade-in-scale {
    0% {
      opacity: 0;
      transform: scale(0.95);
    }
    100% {
      opacity: 1;
      transform: scale(1);
    }
  }
}
```

如果希望在 `--animate-*` 以外的變數上使用，可以將 `@keyframes` 定義在 `@theme` 外部

### 引用其他變數

在要在 theme 中引用其他變數，加上 `inline` option

```css
@import "tailwindcss";
@theme inline {
  --font-sans: var(--font-inter);
}
```

### 產生所有 CSS 變數

預設只有使用到的 CSS 變數會產生到 CSS output中， 加上 `static` 可以產生所有的 CSS 變數

```css
@import "tailwindcss";
@theme static {
  --color-primary: var(--color-red-500);
  --color-secondary: var(--color-blue-500);
}
```

### 跨專案

將主題建成獨立的 CSS 檔之後，可以使用 `@import` 將其引入到其他專案當中。

### 使用主題變數

所有主題變數（經過編譯後）可以作為一般的 CSS 變數使用

### 自訂 CSS

經常使用在無法控制 HTML 時，例如來自資料庫或者 Markdown格式的內容。

```css
@import "tailwindcss";
@layer components {
  .typography {
    p {
      font-size: var(--text-base);
      color: var(--color-gray-700);
    }
    h1 {
      font-size: var(--text-2xl--line-height);
      font-weight: var(--font-weight-semibold);
      color: var(--color-gray-950);
    }
    h2 {
      font-size: var(--text-xl);
      font-weight: var(--font-weight-semibold);
      color: var(--color-gray-950);
    }
  }
}
```

### 使用 arbitrary 

```html
<div class="relative rounded-xl">
  <div class="absolute inset-px rounded-[calc(var(--radius-xl)-1px)]">
    <!-- ... -->
  </div>
  <!-- ... -->
</div>
```

### Javascript 中的引用

可以直接使用 CSS 變數

```jsx
<motion.div animate={{ backgroundColor: "var(--color-blue-500)" }} />
```

可使用 `getComputedStyle` 來取得文件根目錄主題變數的值

```js
let styles = getComputedStyle(document.documentElement);
let shadow = styles.getPropertyValue("--shadow-xl");
```



## Tailwind文件 - Concepts / 6. Colors

https://tailwindcss.com/docs/colors

使用 OKLCH、也可使用 utilities，可參考官網 ↑

### 使用 color utilities

設定在不同的元素上

| Utility          | Description                                                  |
| ---------------- | ------------------------------------------------------------ |
| `bg-*`           | Sets the [background color](https://tailwindcss.com/docs/background-color) of an element |
| `text-*`         | Sets the [text color](https://tailwindcss.com/docs/text-color) of an element |
| `decoration-*`   | Sets the [text decoration color](https://tailwindcss.com/docs/text-decoration-color) of an element |
| `border-*`       | Sets the [border color](https://tailwindcss.com/docs/border-color) of an element |
| `outline-*`      | Sets the [outline color](https://tailwindcss.com/docs/outline-color) of an element |
| `shadow-*`       | Sets the color of [box shadows](https://tailwindcss.com/docs/box-shadow#setting-the-shadow-color) |
| `inset-shadow-*` | Sets the color of [inset box shadows](https://tailwindcss.com/docs/box-shadow#setting-the-inset-shadow-color) |
| `ring-*`         | Sets the color of [ring shadows](https://tailwindcss.com/docs/box-shadow#setting-the-ring-color) |
| `inset-ring-*`   | Sets the color of [inset ring shadows](https://tailwindcss.com/docs/box-shadow#setting-the-inset-ring-color) |
| `accent-*`       | Sets the [accent color](https://tailwindcss.com/docs/accent-color) of form controls |
| `caret-*`        | Sets the [caret color](https://tailwindcss.com/docs/caret-color) in form controls |
| `fill-*`         | Sets the [fill color](https://tailwindcss.com/docs/fill) of SVG elements |
| `stroke-*`       | Sets the [stroke color](https://tailwindcss.com/docs/stroke) of SVG elements |

### 透明度

使用語法如 `bg-black/75`，其中 75 是 alpha 值，代表 75%。

```html
<div>
  <div class="bg-sky-500/70"></div>
</div>
```

這個語法也支正 arbitrary 和 CSS 變數

```html
<div class="bg-pink-500/[71.37%]"><!-- ... --></div>
<div class="bg-cyan-400/(--my-alpha-value)"><!-- ... --></div>
```

### 深色模式

使用 `dark` variant，比如  `dark:bg-gray-800` 

### 在 CSS 引用

使用 namespace `--color-*` 作為 CSS 變數公開

```css
@import "tailwindcss";
@layer components {
  .typography {
    color: var(--color-gray-950);
    a {
      color: var(--color-blue-500);
      &:hover {
        color: var(--color-blue-800);
      }
    }
  }
}
```

也可以在 arbitrary 中使用

```html
<div class="bg-[light-dark(var(--color-white),var(--color-gray-950))]">
  <!-- ... -->
</div>
```

作為 CSS 變數引用時，可以使用一個特殊 function `--alpha()` 來設定透明度

```css
@import "tailwindcss";
@layer components {
  .DocSearch-Hit--Result {
    background-color: --alpha(var(--color-gray-950) / 10%);
  }
}
```

### 自訂顏色

```css
@import "tailwindcss";
@theme {
  --color-midnight: #121063;
  --color-tahiti: #3ab7bf;
  --color-bermuda: #78dcca;
}
```

### 覆寫預設顏色

```css
@import "tailwindcss";
@theme {
  --color-gray-50: oklch(0.984 0.003 247.858);
  --color-gray-100: oklch(0.968 0.007 247.896);
  --color-gray-200: oklch(0.929 0.013 255.508);
}
```

### 引用其他變數

```css
@import "tailwindcss";
:root {
  --acme-canvas-color: oklch(0.967 0.003 264.542);
}
[data-theme="dark"] {
  --acme-canvas-color: oklch(0.21 0.034 264.665);
}
@theme inline {
  --color-canvas: var(--acme-canvas-color);
}
```



## Tailwind文件 - Concepts / 7. Adding custom styles

https://tailwindcss.com/docs/adding-custom-styles

Tailwind 從一開始就被設計為可擴展和可自訂的。

本章說明自訂 design token 以及如何在必要時擺脫這些限制、添加你的自訂 CSS 以及使用外程式擴充框架等。

### arbitrary values

使用方括號表示動態產生 arbitrary 的類別

```html
<div class="bg-[#bada55] text-[22px] before:content-['Festivus']">
  <!-- ... -->
</div>
```

CSS 變數引用為 arbitrary

```html
<div class="fill-(--my-brand-color) ...">
  <!-- ... -->
</div>
```

這是 `fill-[var(--my-brand-color)]` 的一種簡寫

### arbitrary 屬性

當使用 Tailwind 沒有包含開箱即用的 utility CSS ，可以使用

```html
<div class="[mask-type:luminance] hover:[mask-type:alpha]">
  <!-- ... -->
</div>
```

也可使用 CSS 變數

```html
<div class="[--scroll-offset:56px] lg:[--scroll-offset:44px]">
  <!-- ... -->
</div>
```

### arbitrary variants

```html
<ul role="list">
  {#each items as item}
  <li class="lg:[&:nth-child(-n+3)]:hover:underline">{item}</li>
  {/each}
</ul>
```

### 空白鍵

當 arbitrary value 需要包含空白，使用底線 `_` 代替，會在編譯時轉換為空白

```html
<div class="grid grid-cols-[1fr_500px_2fr]">
  <!-- ... -->
</div>
```

在特定情況需使用跳脫字元以避免被轉換為空白

```html
<div class="before:content-['hello\_world']">
  <!-- ... -->
</div>
```

### 解決岐義

Tailwind 有許多 utility 共用一個 namspace，但會對應到不同的 CSS 屬性，例如 `text-lg` 和 `text-black` 都共享 `text-` namespace，但一個是用於 `font-size` 另一個是用於 `color`

當使用 arbitrary 時，Tailwind 通常可以根據傳入值自動處理這種歧義

```html
<!-- Will generate a font-size utility -->
<div class="text-[22px]">...</div>
<!-- Will generate a color utility -->
<div class="text-[#bada55]">...</div>
```

在這些情況下，你可以在值前加入[CSS 資料型別](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Types)來向 Tailwind “提示”底層型別：

```html
<!-- Will generate a font-size utility -->
<div class="text-(length:--my-var)">...</div>
<!-- Will generate a color utility -->
<div class="text-(color:--my-var)">...</div>
```

### 使用自訂 CSS

只寫純 CSS

```css
@import "tailwindcss";
.my-custom-style {
  /* ... */
}
```

### Base styles

在頁面中設定一些預設值，最簡單的方式就是在 html 或 body 元素中添加 classes

```html
<!doctype html>
<html lang="en" class="bg-gray-100 font-serif text-gray-900">
  <!-- ... -->
</html>
```

如要建立特定的 HTML 元素的 base 樣式，使用 `@layer` directive 將樣式新增至 `base` layer

```css
@layer base {
  h1 {
    font-size: var(--text-2xl);
  }
  h2 {
    font-size: var(--text-xl);
  }
}
```

### Component classes -  `@layer components` 

對於想新增更複雜的 class，可使用 `components` layer 

```css
@layer components {
  .card {
    background-color: var(--color-white);
    border-radius: var(--rounded-lg);
    padding: var(--spacing-6);
    box-shadow: var(--shadow-xl);
  }
}
```

仍然可使用 utility class 來覆寫

```html
<!-- Will look like a card, but with square corners -->
<div class="card rounded-none">
  <!-- ... -->
</div>
```

 `components` layer 也適合用來放第三方元件的自訂樣式

```css
@layer components {
  .select2-dropdown {
    /* ... */
  }
}
```

### `@variant`

自訂 CSS 的 Tailwind variant

```css
.my-element {
  background: white;
  @variant dark {
    background: black;
  }
}
```

編譯後的結果

```css
.my-element {
  background: white;
  @media (prefers-color-scheme: dark) {
    background: black;
  }
}
```

如要使用多個 variant，可使用嵌套

```css
.my-element {
  background: white;
  @variant dark {
    @variant hover {
      background: black;
    }
  }
}
```

編譯後的結果

```css
.my-element {
  background: white;
  @media (prefers-color-scheme: dark) {
    &:hover {
      @media (hover: hover) {
        background: black;
      }
    }
  }
}
```

### 自訂 utility - `@utility`

```css
@utility content-auto {
  content-visibility: auto;
}
```

可以結合其他 variant 一起使用

```html
<div class="hover:content-auto">
  <!-- ... -->
</div>
```

...

後面幾個感覺好複雜暫先跳過 - [Complex utilities](https://tailwindcss.com/docs/adding-custom-styles#complex-utilities), [Functional utilities](https://tailwindcss.com/docs/adding-custom-styles#functional-utilities), [Matching theme values](https://tailwindcss.com/docs/adding-custom-styles#matching-theme-values) 等

...

### 自訂 variant

...

感覺好複雜暫先跳過 [Adding custom variants](https://tailwindcss.com/docs/adding-custom-styles#adding-custom-variants)

...



## Tailwind文件 - Concepts / 8. Detecting classes in source files

https://tailwindcss.com/docs/detecting-classes-in-source-files

### 如何檢測檔案中的 classes

Tailwind 的工作原理是是掃描專案查找所有的 utility classes，然後根據實際使用的 classes 生成所有必要的 CSS，這可以確保 CSS 盡可能小，並且還可以實現 arbitrary。

### 動態 class 名稱

(X) 基於這個原理，他無法識別動態建構的 class 名稱

```html
<div class="text-{{ error ? 'red' : 'green' }}-600"></div>
```

(O) 需保持名稱的完整

```html
<div class="{{ error ? 'text-red-600' : 'text-green-600' }}"></div>
```

(X)

```jsx
function Button({ color, children }) {
  return <button className={`bg-${color}-600 hover:bg-${color}-500 ...`}>{children}</button>;
}
```

(O)

```jsx
function Button({ color, children }) {
  const colorVariants = {
    blue: "bg-blue-600 hover:bg-blue-500",
    red: "bg-red-600 hover:bg-red-500",
  };
  return <button className={`${colorVariants[color]} ...`}>{children}</button>;
}
```

### 掃描哪些檔案

Tailwind 將掃描專案中所有檔案，以下除外：

* `.gitignore` 排除的檔案
* 二進位文件，例如圖檔、影片、zip檔
* CSS 檔
* 常見的的 package manager lock files

### 明確註冊來源

使用 `@source`

```css
@import "tailwindcss";
@source "../node_modules/@acmecorp/ui-lib";
```

會用於需要掃描使用 Tailwind 建立的外序函式庫，因為他通常會被列在 `.gitignore` 並被忽略

### 設定基本路徑

預設會以目前工作目錄為掃描的起點，若要明確設定路徑使用 `source()`

```css
@import "tailwindcss" source("../src");
```

當使用 monorepo 時這很有用，因為建置命令從 monorepo 的根目錄而不是每個專案的根目錄

### 停用自動偵測

`source(none)`

```css
@import "tailwindcss" source(none);
@source "../admin";
@source "../shared";
```



## Tailwind文件 - Concepts / 9. Functions and directives

https://tailwindcss.com/docs/functions-and-directives

Tailwind 在 CSS 公開的自訂 function 和 directives

### `@import`

嵌入 CSS 檔

```css
@import "tailwindcss";
```

### `@theme`

定義 design token

```css
@theme {
  --font-display: "Satoshi", "sans-serif";
  --breakpoint-3xl: 120rem;
  --color-avocado-100: oklch(0.99 0 0);
  --color-avocado-200: oklch(0.98 0.04 113.22);
  --color-avocado-300: oklch(0.94 0.11 115.03);
  --ease-fluid: cubic-bezier(0.3, 0, 0, 1);
  --ease-snappy: cubic-bezier(0.2, 0, 0, 1);
  /* ... */
}
```

### `@source`

指定來源檔案

```css
@source "../node_modules/@my-company/ui-lib";
```

### `@utility`

自訂 utility class

```css
@utility tab-4 {
  tab-size: 4;
}
```

### `@variant`

將 variant 套用至 CSS 的 class 中

```css
.my-element {
  background: white;
  @variant dark {
    background: black;
  }
}
```

### `@custom-variant`

自訂 variant

```css
@custom-variant theme-midnight (&:where([data-theme="midnight"] *));
```

### `@apply`

將現有的 utility classes 內聯(inline)到自訂的 CSS 中

```css
.select2-search {
  @apply rounded border border-gray-300;
}
```

### `@reference`

如果想在 Vue 或 Svelte Component的 `<style>` 區塊中使用 `@apply` 、或需要 import 主題變數、自訂 utilities 等，使用 `@reference` 指令來 import 主樣式，以使這些值在該上下文中可用

```vue
<template>
  <h1>Hello world!</h1>
</template>
<style>
  @reference "../../app.css";
  h1 {
    @apply text-2xl font-bold text-red-500;
  }
</style>
```

如果沒有自訂樣式僅使用預設值

```vue
<template>
  <h1>Hello world!</h1>
</template>
<style>
  @reference "tailwindcss";
  h1 {
    @apply text-2xl font-bold text-red-500;
  }
</style>
```

### `--alpha()`

設定透明度

```css
.my-element {
  color: --alpha(var(--color-lime-300) / 50%);
}
```

### `--spacing()`

產生間距

```css
.my-element {
  margin: --spacing(4);
}
```



