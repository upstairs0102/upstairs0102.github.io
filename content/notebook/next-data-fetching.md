---
slug: "/react/nextjs-data-fetching"
title: "[Next.js] Data Fetching"
tags: ["react","next.js"]
category: "React / Next.js"
collection: "technical"
kind: "article"
order: 999
source: "docs/React/[Next.js] Data Fetching.md"
draft: false
publishedAt:
updatedAt:
---

## Data Fetching - App Router `/app`

### Data Fetching & Rendering

![image-20250510175111801](/images/notebook/next-data-fetching/1.png)

> 這個是我自己畫的簡易流程圖



### 整理

通用規則 - 如果你有分頁面和子元件（Component），行為會由「最動態的 component 決定」，也就是說：

- 若你在某個 child component 寫了 `force-dynamic`，整頁會變 SSR
- 所以建議：**SSR 或 SSG 在所有頁面（route entry）都明確設定 dynamic，保持一致性**

| 模式                                                         | 描述                                        | 建議設定寫法（於頂層 component）                             | fetch 快取     | 畫面快取    | SEO  | 使用時機                               |
| ------------------------------------------------------------ | ------------------------------------------- | ------------------------------------------------------------ | -------------- | ----------- | ---- | -------------------------------------- |
| **CSR** (Client-Side Rendering)                              | 所有內容都在 client 端動態渲染              | `'use client'` (整頁)                                        | ⛔ 無 SSR       | ⛔ 無 SSR    | ❌ 無 | 僅限非 SEO 頁面，如後台管理、儀表板    |
| **SSR** (Server-Side Rendering，資料動態但畫面快取 - 需小心使用) | 伺服器 fetch 資料，每次更新，但 UI 結構快取 | `export const fetchCache = 'force-no-store'`                 | ❗ fetch 不快取 | ✅ UI 可快取 | ⭐⭐   | 查詢、登入頁面、需要最新資料但 UI 穩定 |
| **SSR (強化)** (資料與畫面都不快取)                          | 整頁每次請求都重新執行，包括 UI 結構與資料  | `export const dynamic = 'force-dynamic'`                     | ❗ fetch 不快取 | ❗ UI 不快取 | ⭐⭐   | 頁面含時間戳、UUID、或動態邏輯         |
| **Streaming SSR** (分段渲染)                                 | 分區塊以 `<Suspense>` 流式載入，提升 TTFB   | `dynamic = 'force-dynamic'` 且搭配 `<Suspense>`              | 看 fetch 設定  | ✅ 分段 SSR  | ⭐    | 需要大量首屏資料、提升使用體驗         |
| **SSG** (Static Site Generation)                             | 頁面完全靜態化、build 時預先生成            | `export const dynamic = 'force-static'` 或預設行為           | ✅ 預設快取     | ✅ 預設快取  | ⭐⭐⭐⭐ | 部落格、FAQ、產品列表等固定內容        |
| **ISR** (Incremental Static Regeneration)                    | 靜態頁面，但可定時 revalidate 更新          | 不設定 `dynamic` + `fetch(url, { next: { revalidate: N } })` | ✅ 定時更新     | ✅ 快取存在  | ⭐⭐⭐  | 靜態內容需定期更新，如新聞列表、排行榜 |

SEO 星星數說明：

| 星數 | 說明                                                         |
| ---- | ------------------------------------------------------------ |
| ⭐⭐⭐⭐ | 極穩定 SEO，可預測、靜態可抓（SSG）                          |
| ⭐⭐⭐  | 穩定，但略有延遲風險（ISR）                                  |
| ⭐⭐   | 資料完整，但效能可能稍慢（SSR）                              |
| ⭐    | 須小心使用，易受 fallback 與 crawler 條件影響（Streaming SSR） |
| ❌    | 完全不推薦用於 SEO（CSR only）                               |



### CSR

`/app` 內必須整頁加上 `'use client'` 才會代表整頁都改為 CSR



### SSR

#### `fetch` 設定 `cache: 'no-store'`

* `fetch` 的 cache 設定預設為 `cache: 'auto'` （等同  `cache: 'force-cache'`），**預設頁面會使用 SSG**
* 只要其中一個 `fetch` 明確設定 `cache: 'no-store'` 或 `next: { revalidate: 0 }`（如 `revalidate` 設定時間則為 ISR），那整個 component 就會轉成 SSR (dynamic rendering) - **Next.js 會提升到最動態的模式為準（dynamic wins）**，也就是說無法在同個頁面同時部份使用 SSR、部份使用 SSG

```tsx
// app/page.tsx
async function Page() {
  const data = await fetch('https://api.example.com/data', {
    cache: 'no-store', // 強制 SSR，不要快取
  }).then(res => res.json());

  return <div>{data.message}</div>;
}
export default Page;
```

>  `fetch` 是next.js 覆寫原生的 `fetch`



#### `dynamic = 'force-dynamic'`

* 可設定整頁為 SSR，不會快取
* 可統一邏輯，不需要在每筆 fetch 上分別設快取行為
* 若在某個 child component 寫了 `force-dynamic`，整頁會變 SSR - **行為會由「最動態的 component 決定」**

寫法，component 最上面加上

```ts
export const dynamic = 'force-dynamic';
```



#### `fetchCache = force-no-store`

* 可設定整頁取消 fetch 快取
* 和 SSR 略有不同 - 只針對資料動態，畫面可快取
* 不能完全取代 dynamic，如果頁面中有 fetch 的動態邏輯（例如時間、UUID、隨機），那就是應該使用 `dynamic = 'force-dynamic'`

寫法，component 最上面加上

```ts
export const fetchCache = 'force-no-store'
```



#### 動態優先

Next.js 會提升到最動態的模式為準（dynamic wins）

| 情況                                            | 結果                                              |
| ----------------------------------------------- | ------------------------------------------------- |
| 全部 fetch 都沒有設定 → 預設快取（force-cache） | ✅ 頁面變成 SSG                                    |
| 其中一個 fetch 設定 `cache: 'no-store'`         | ❗ 整頁變成 SSR（dynamic rendering）               |
| Component 有 `dynamic = 'force-dynamic'`        | ❗ 整頁變成 SSR                                    |
| Component 有 `fetchCache = 'force-no-store'`    | ❗ 所有 fetch 預設都是 `no-store`，整頁變 SSR      |
| 所有 fetch 設定 `revalidate: 60`                | ✅ 頁面變成 ISR（Incremental Static Regeneration） |



### Streaming SSR

![image-20250510175602102](/images/notebook/next-data-fetching/2.png)

> [從 Next.js 13 認識 React Server Components](https://oldmo860617.medium.com/從-next-js-13-認識-react-server-components-37c2bad96d90)

![image-20250510175642587](/images/notebook/next-data-fetching/3.png)

> https://x.com/theo/status/1551354090675773440

![image-20250510175747470](/images/notebook/next-data-fetching/4.png)

> [Staying Hydrated with JavaScript](https://letusdev.com/development/staying-hydrated-with-javascript)

* 實作上可視為 SSR 的擴展
* 需搭配 `Suspense`



#### Shell Component

**「Server Component 渲染資料 + Client Component 控制顯示」**

```
page.tsx (Server Component)
 └── <Suspense>
       └── TimerData.tsx (Server Component)
             └── TimerDisplay.tsx (Client Component)
```

* `TimerData.tsx`：是 Server Component，負責打 API 並回傳資料（可 SSR，具備 SEO）

* `TimerDisplay.tsx`：是 Client Component，負責「控制何時顯示、顯示動畫、loading 狀態」

* `page.tsx`：用 `Suspense` 包住 `TimerData`，達成 lazy load 效果

`TimerData.tsx`（Server Component）

```tsx
// app/components/TimerData.tsx
export const dynamic = 'force-dynamic'; // 防止快取

import TimerDisplay from './TimerDisplay';

export default async function TimerData({ delay, label }: { delay: number; label: string }) {
  // 模擬打 API
  await new Promise((r) => setTimeout(r, delay));

  const data = { time: new Date().toISOString(), label };

  return <TimerDisplay data={data} />;
}
```

`TimerDisplay.tsx`（Client Component）

```tsx
// app/components/TimerDisplay.tsx
'use client';

import { useState, useEffect } from 'react';

export default function TimerDisplay({ data }: { data: { time: string; label: string } }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100); // 控制顯示動畫
    return () => clearTimeout(t);
  }, []);

  if (!visible) return <div>{data.label} loading...</div>;

  return (
    <div>
      ✅ {data.label} 完成：{data.time}
    </div>
  );
}
```

`page.tsx`（混合組合）

```tsx
// app/page.tsx
export const dynamic = 'force-dynamic';

import { Suspense } from 'react';
import TimerData from './components/TimerData';

export default function Page() {
  return (
    <div className="space-y-4 mt-12">
      <Suspense fallback={<div>A loading...</div>}>
        <TimerData label="A" delay={3000} />
      </Suspense>
      <Suspense fallback={<div>B loading...</div>}>
        <TimerData label="B" delay={1000} />
      </Suspense>
      <Suspense fallback={<div>C loading...</div>}>
        <TimerData label="C" delay={2000} />
      </Suspense>
    </div>
  );
}
```

問題：`TimerDisplay `是 client component，那 SEO 還抓得到嗎？

但實際上：

* Client Component ≠ 完全 CSR

* 它的行為是「伺服器先 render 出靜態 HTML → 再送到瀏覽器做 hydration」，所以是不會影響 SEO 的

> hydration 實作上主要是在綁定 DOM 上的事件



### SSG

#### `const dynamic = 'force-static'`

在頂層 Component 上設定，所有 fetch 都會快取，頁面會 SSG



#### `generateStaticParams`（對應 /pages 的 `getStaticPaths`）

```tsx
// app/blog/[slug]/page.tsx
export async function generateStaticParams() {
  const posts = await fetch('https://api.example.com/posts').then(res => res.json());

  return posts.map((post: any) => ({
    slug: post.slug,
  }));
}
```

在這個範例中透過api取得所有的 slug 並回傳

```nginx
GET https://api.example.com/posts
```

```json
[
  { "id": 1, "slug": "hello-world" },
  { "id": 2, "slug": "my-first-post" },
  { "id": 3, "slug": "nextjs-guide" }
]
```



#### `fetch`（對應 /pages 的 `getStaticProps`）

```tsx
// app/blog/[slug]/page.tsx
async function BlogPost({ params }: { params: { slug: string } }) {
  const post = await fetch(`https://api.example.com/posts/${params.slug}`, {
    // 預設就是靜態快取（SSG）
  }).then(res => res.json());

  return <div>{post.title}</div>;
}

export default BlogPost;
```



### ISR

![image-20250510175458934](/images/notebook/next-data-fetching/5.png)

* 雖然他算是一種特殊情況下的 SSG，但他實作上和 SSG 不同，他不需要在頁面頂層上加上 `export const dynamic = 'force-static'`
* 若加上 `dynamic = 'force-static'`，反而會**禁用 ISR**！
* 在 `fetch` 上設定 `next: { revalidate: N }` 

```tsx
// app/blog/[slug]/page.tsx
async function BlogPost({ params }: { params: { slug: string } }) {
  const post = await fetch(`https://api.example.com/posts/${params.slug}`, {
    next: {
      revalidate: 60, // 表示這個頁面會在 60 秒後重新生成（ISR）
    }
  }).then(res => res.json());

  return <div>{post.title}</div>;
}

export default BlogPost;
```


## Data Fetching - `pages/` (舊的寫法)

以下這幾個 data fetching 方法都只適用在 `pages/` 底下的頁面，這個現在已不建議使用，不適用現在新的 `app/` App Router 的寫法

### `getInitialProps` (legacy API)

官方建議使用 `getStaticProps`和 `getServerSideProps`取代 `getInitialProps` (https://nextjs.org/docs/api-reference/data-fetching/getInitialProps)

我的理解這個就類似 Nuxt.js的 `asyncData`，**初次載入的時候是在 server-side執行，透過前端router進入時是在 client-side執行。**

**要注意的許多坑！！**

1. `getInitialProps`如果使用在最外層(`app.js`)則只會在 server-side調用（喔…）

2. 如果使用在最外層(`app.js`)，則注入的 `context` 參數會放在 `{ ctx }`  中，和使用在 page時不同（！！）

   ```js
   // PAGE
   function getInitialProps (context) {
     const { req, res }  = context
     return {}
   }
   // app.js
   function getInitialProps ({ Component, ctx }) {
     const { req, res }  = ctx
     return {}
   }
   ```



3. 如果在最外層(`app.js`)使用`getInitialProps`，則 Page也同時使用`getInitialProps`的話，最外層(`app.js`)的優先度是最高的，只有最外層會被調用，Page的 `getInitialProps`是不會被調用的。如果要調用 Page的 `getInitialProps`要這樣寫：

   ```js
   // app.js
   function getInitialProps ({ Component, ctx }) {
     const { req, res }  = ctx
     Component.getInitialProps({ req, res }) // 可呼叫 Page的 getInitialProps
     return {}
   }
   ```

   

4. 如果 Page是巢狀結構（nested routes）的話，內外層Page都同時有 `getInitialProps`，則只有最內層的會被調用，如果希望同時都能被調用的話，要這樣寫：

   ```js
   // child page
   import ParentPage from '@/pages/parentpage/index'
   
   function getInitialProps (context) {
     const { data } = ParentPage.getInitialProps(context)
     return { data }
   }
   
   export default function ChildPage ({ data }) {
     return (
       <!-- 這裡要注意… 將父層的 getInitialProps的回傳值傳入父層的 Component -->
     	<ParentPage data={data}>
       	<div>
         </div>
       </ParentPage>
     )
   }
   ```

   但如同前面所述，`app.js`的`getInitialProps`的優先度仍然是最高的



### `getServerSideProps`

只能在 server side執行，如果非必要在 server執行就盡量不要使用，官方這樣說明：

> You should use getServerSideProps only if you need to pre-render a page whose data must be fetched at request time. Time to first byte (TTFB) will be slower than getStaticProps because the server must compute the result on every request, and the result cannot be cached by a CDN without extra configuration.
> If you don’t need to pre-render the data, then you should consider fetching data on the client side.

```js
import fetch from "isomorphic-unfetch";
function Page({ data }) {
  // Render data...
}
export async function getServerSideProps() {
  const res = await fetch(`https://.../data`);
  const data = await res.json();
  return { props: { data } };
}
export default Page;
```



### `getStaticProps`

用來處理 `SSG` (Static Site Generation) 的需求，用來建立靜態頁面，在 **build-time**的時候執行**（但是在開發模式(development mode)下都會採用SSR的方式，也就是run-time的時候執行**

搭配 `revalidate` 可實作 ISR



### `getStaticPaths`

搭配 `getStaticProps` 使用，需列舉出需要做靜態生成的路徑



