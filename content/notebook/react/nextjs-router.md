---
slug: "/react/nextjs-router"
title: "[Next.js] Router"
tags: ["react","next.js"]
category: "React / Next.js"
collection: "technical"
kind: "article"
order: 999
source: "docs/React/[Next.js] Router.md"
draft: false
publishedAt:
updatedAt:
---



## Routing

### next/link

等同於 nuxt的 `<nuxt-link>`

```js
import Link from "next/link";
function Home() {
  return (
    <Link href="/">
      <a>Home</a>
    </Link>
  );
}
```

不過經過我的測試 `</Link>`只有 dynamic router的功能，並不會像 nuxt的 `<nuxt-link>`會建立超連結（產生網址在Browser URL bar、並且可按右鍵開新視窗）。如果希望能同時具備 dynamic router以及超連結，可以這樣寫：

```js
<Link href="/">
  <a href="/">Home</a>
</Link>
```



### next/router

等同於 vue/nuxt 的 `$router`

詳細的 api參考官方文件 https://nextjs.org/docs/api-reference/next/router#router-object

```js
import { useRouter } from 'next/router'

function ReadMore() {
  const router = useRouter()

  return (
    <span onClick={() => router.push('/about')}>Click here to read more</span>
  )
}

export default ReadMore
```

參數傳遞和 vue-router有一些不一樣，vue-router的 `query`和 `params`在 react/next中都是 `query`沒有區分開來

比如說 page的路徑及檔名設定為 `pages/post/[pid].js`，路由為 `/post/abc?foo=bar`，則：

```js
import { useRouter } from 'next/router'
const router = useRouter()
console.log(router.query) // { "foo": "bar", "pid": "abc" }
```



### Shallow Routing（淺路由）

官網上對 `Shallow Routing`的解釋為

> Shallow routing allows you to change the URL without running data fetching methods again, that includes [`getServerSideProps`](https://nextjs.org/docs/basic-features/data-fetching#getserversideprops-server-side-rendering)tps://nextjs.org/docs/basic-features/data-fetching#getstaticprops-static-generation), and [`getInitialProps`](https://nextjs.org/docs/api-reference/data-fetching/getInitialProps)

路由變化的時候不會調用到 data fetching的方法包含 `getServerSideProps`和 `getInitialProps`

**使用方式是要加上 `{ shallow: true }`**

```js
import { useEffect } from 'react'
import { useRouter } from 'next/router'

// Current URL is '/'
function Page() {
  const router = useRouter()

  useEffect(() => {
    // Always do navigations after the first render
    router.push('/?counter=10', undefined, { shallow: true })
  }, [])

  useEffect(() => {
    // The counter changed!
  }, [router.query.counter])
}

export default Page
```



### router.events

當有類似製作middleware程式的需求，也就是在路由改變的事件中所調用的程式，在 vue中稱為 `Navigation Guards`，提供 `beforeRouteEnter` 等監聽事件。而 react也是有提供類似的監聽事件，詳細API參考官方文件 https://nextjs.org/docs/api-reference/next/router#routerevents

```js
import { useEffect } from 'react'
import { useRouter } from 'next/router'

export default function MyApp({ Component, pageProps }) {
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (url, { shallow }) => {
      console.log(
        `App is changing to ${url} ${
          shallow ? 'with' : 'without'
        } shallow routing`
      )
    }

    router.events.on('routeChangeStart', handleRouteChange)

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method:
    return () => {
      router.events.off('routeChangeStart', handleRouteChange)
    }
  }, [])

  return <Component {...pageProps} />
}
```



### redirect

`redirect`指的是網頁在初始化之前就導向到其他的路由，有分為後端及前端兩種

相關教學 https://maxschmitt.me/posts/next-js-redirects/

```js
import Router from 'next/router'
async function getInitialProps({ res, user }) {
    if (!user) {
        if (res) {
            // On the server, we'll use an HTTP response to
            // redirect with the status code of our choice.
            // 307 is for temporary redirects.
            res.writeHead(307, { Location: '/' })
            res.end()
        } else {
            // On the client, we'll use the Router-object
            // from the 'next/router' module.
            Router.replace('/')
        }
        // Return an empty object,
        // otherwise Next.js will throw an error
        return {}
    }
    return { secretData: '...' }
}

```





## Dynamic Import

https://nextjs.org/docs/advanced-features/dynamic-import

```js
import dynamic from 'next/dynamic'
const DynamicComponent = dynamic(() => import('../components/hello'))
function Home() {
  return (
    <div>
      <Header />
      <DynamicComponent />
      <p>HOME PAGE is here!</p>
    </div>
  )
}
export default Home
```



## Layout/嵌套路由 (nest routes)

依我目前的研究，Next.js 預設似乎是沒有 Layout和嵌套路由的概念（不像 Nuxt.js原生就提供製作Layout和嵌套路由的API），必須自己實作出來（竟然！）

### 嵌套路由 (nest routes)

以下網址有教學，雖然裡面使用的名稱是 layout，但是概念上我覺得更像是嵌套路由（至少是接近 Nuxt.js的），然後也有提到 HOC（是比較舊的 design pattern了，畢竟是較早的文章但可以參考看看）

https://ithelp.ithome.com.tw/articles/10190620

方法意外的巧妙，簡單來說，就是使用 Component的 `children`就可以實作出來：

```js
// layout
export default (props) => (
  <div id="main">
    <li><Link href="/about/company">About company</Link></li>
    <li><Link href="/about/me">About me</Link></li>
    {props.children}
  </div>
)
export default About

// child page
import Layout from '../components/layout'
export default () => (
  <Layout>
    <div> 製作一個具有Layout的網站吧 </div>
  </Layout>
)
```



### Layout

參考以下網址的教學，另外也有看到網路上的範例使用同樣的做法。這種寫法和前述嵌套路由的做法很像，但是這個做法的 layout會被固定在最外層，並且內層並不需要將 layout component寫進 function當中

https://dev.to/ozanbolel/layout-persistence-in-next-js-107g

```js
// app.js
import React from "react";
export default function MyApp({ Component, pageProps }) {
  const Layout = Component.Layout ? Component.Layout : React.Fragment;
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

// layout
import React, { useState } from "react";
export default function MyLayout({ children }) {
  const [counter, setCounter] = useState(0);
  return (
    <>
      <p>      
        <button onClick={() => setCounter(counter + 1)}>
          Clicked {counter} Times
        </button>
      </p>
      {children}
    </>
  )
}

// child page
import Link from "next/link";
import MyLayout from "../layouts/MyLayout";
export default function Profile() {
  return (
    <div>
      <p>This is the Profile page.</p>
      <p>
        <Link href="/account">
          <a>Go: Account</a>
        </Link>
      </p>
    </div>
  );
}
Profile.Layout = MyLayout; // <-- 只要加上這行
```
