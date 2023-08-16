"use strict";(self.webpackChunkupstairs_0102_github_io=self.webpackChunkupstairs_0102_github_io||[]).push([[4862],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=l(n),u=a,m=d["".concat(s,".").concat(u)]||d[u]||g[u]||i;return n?r.createElement(m,p(p({ref:t},c),{},{components:n})):r.createElement(m,p({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,p=new Array(i);p[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[d]="string"==typeof e?e:a,p[1]=o;for(var l=2;l<i;l++)p[l]=n[l];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},57583:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var r=n(87462),a=(n(67294),n(3905));const i={slug:"/react/nextjs-ssr",title:"[Next.js] Data Fetching",tags:["react","next.js"]},p=void 0,o={unversionedId:"React/[Next.js] Data Fetching",id:"React/[Next.js] Data Fetching",title:"[Next.js] Data Fetching",description:"Data Fetching",source:"@site/docs/React/[Next.js] Data Fetching.md",sourceDirName:"React",slug:"/react/nextjs-ssr",permalink:"/docs/react/nextjs-ssr",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/React/[Next.js] Data Fetching.md",tags:[{label:"react",permalink:"/docs/tags/react"},{label:"next.js",permalink:"/docs/tags/next-js"}],version:"current",frontMatter:{slug:"/react/nextjs-ssr",title:"[Next.js] Data Fetching",tags:["react","next.js"]},sidebar:"tutorialSidebar",previous:{title:"[Next.js] CSS",permalink:"/docs/react/nextjs-css"},next:{title:"[Next.js] Getting Started",permalink:"/docs/react/nextjs-getting-starged"}},s={},l=[{value:"Data Fetching",id:"data-fetching",level:2},{value:"\u5ef6\u4f38\u95b1\u8b80",id:"\u5ef6\u4f38\u95b1\u8b80",level:3},{value:"getInitialProps",id:"getinitialprops",level:3},{value:"getServerSideProps",id:"getserversideprops",level:3},{value:"getStaticProps, getStaticPaths",id:"getstaticprops-getstaticpaths",level:3},{value:"Context",id:"context",level:2},{value:"\u5ef6\u4f38\u95b1\u8b80",id:"\u5ef6\u4f38\u95b1\u8b80-1",level:2}],c={toc:l};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"data-fetching"},"Data Fetching"),(0,a.kt)("p",null,"Next.js \u53ef\u4ee5 ",(0,a.kt)("inlineCode",{parentName:"p"},"SSR"),"\u53ca ",(0,a.kt)("inlineCode",{parentName:"p"},"SSG")," \u6df7\u5408\u4f7f\u7528\uff0cNuxt.js \u597d\u50cf\u53ea\u80fd\u5247\u4e00\u7684\u6a23\u5b50\uff08\u4e0d\u662f\u5f88\u78ba\u5b9a\uff09"),(0,a.kt)("p",null,"SSR -> Server Side Rendering"),(0,a.kt)("p",null,"SSG -> Static Site Generation"),(0,a.kt)("p",null,"CSR -> Client Side Rendering"),(0,a.kt)("h3",{id:"\u5ef6\u4f38\u95b1\u8b80"},"\u5ef6\u4f38\u95b1\u8b80"),(0,a.kt)("p",null,"\u95dc\u65bc\uff08v9.3 \u7248\u5f8c\uff09 SSR \u548c SSG \u6df7\u5408\u5f0f\u958b\u767c\u7684\u4ecb\u7d39\uff1a",(0,a.kt)("a",{parentName:"p",href:"https://www.ithome.com.tw/news/136271"},"\u5f8c\u7aef\u6846\u67b6Next.js 9.3\u652f\u63f4\u66f4\u9748\u6d3b\u7684\u975c\u614b\u7db2\u7ad9\u751f\u6210\u529f\u80fd")," @ iThome"),(0,a.kt)("p",null,"\u5b98\u7db2\u5c0d\u9019\u5169\u7a2e pre-rendering\u578b\u5f0f\u7684\u89e3\u91cb\uff1a",(0,a.kt)("a",{parentName:"p",href:"https://nextjs.org/docs/basic-features/pages#two-forms-of-pre-rendering"},"Two forms of Pre-rendering")," @ Next.js"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://pjchender.dev/react/nextjs-doc-getting-started/#pre-rendering-and-data-fetching"},"Pre-rendering and Data Fetching")," @ PJCHENder"),(0,a.kt)("h3",{id:"getinitialprops"},"getInitialProps"),(0,a.kt)("p",null,"\u6211\u7684\u7406\u89e3\u9019\u500b\u5c31\u985e\u4f3c Nuxt.js\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"asyncData"),"\uff0c\u4e5f\u5c31\u662f SSR\u7684\u7684\u958b\u767c\u7b56\u7565\uff1a\u540c\u4e00\u4efdcode\u540c\u6642\u5728 server-side\u548c client-side\u57f7\u884c\uff08\u4e5f\u5c31\u662f\u6240\u8b02\u540c\u69cb(",(0,a.kt)("strong",{parentName:"p"},"Universal Rendering")," / ",(0,a.kt)("strong",{parentName:"p"},"Isomorphic render"),")\uff09"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u521d\u6b21\u8f09\u5165\u7684\u6642\u5019\u662f\u5728 server-side\u57f7\u884c\uff0c\u900f\u904e\u524d\u7aefrouter\u9032\u5165\u6642\u662f\u5728 client-side\u57f7\u884c\u3002")),(0,a.kt)("p",null,"\u5728\u8f09\u5165\u9801\u9762\u4e4b\u524d\u975e\u540c\u6b65\u53d6\u5f97\u8cc7\u6599\uff0c\u4e26\u5c07\u8cc7\u6599\u8b8a\u70ba\u8a72 Page Component\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"props"),"\uff08\u7528 return\u7684\u65b9\u5f0f\uff09"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"BUT")," \u5b98\u65b9\u5efa\u8b70\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"getStaticProps"),"\u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"getServerSideProps"),"\u53d6\u4ee3 ",(0,a.kt)("inlineCode",{parentName:"p"},"getInitialProps")," (",(0,a.kt)("a",{parentName:"p",href:"https://nextjs.org/docs/api-reference/data-fetching/getInitialProps"},"https://nextjs.org/docs/api-reference/data-fetching/getInitialProps"),")"),(0,a.kt)("p",null,"\u5b98\u7db2\u4e0a\u9019\u6a23\u5beb\u8b93\u4eba\u6709\u4e9b\u56f0\u60d1\uff0c\u5728 Nuxt.js\u4e2d\u5927\u91cf\u4f7f\u7528\u7684\u65b9\u6cd5\uff0c Next.js\u7adf\u7136\u5efa\u8b70\u4e0d\u8981\u4f7f\u7528\uff01\uff1f"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u6211\u7684\u7406\u89e3\uff08\u6709\u53ef\u80fd\u6709\u932f\uff09"))),(0,a.kt)("p",null,"\u5b98\u65b9\u7684\u610f\u601d\u53ef\u80fd\u662f\u8aaa\u61c9\u8a72\u300c\u512a\u5148\u300d\u8003\u616e\u63a1\u7528 SSG \u7684\u65b9\u5f0f\u5efa\u7acb\u975c\u614b\u9801\u9762\uff08\u6548\u80fd\u8f03\u597d\uff1f",(0,a.kt)("a",{parentName:"p",href:"https://nextjs.org/docs/basic-features/pages#when-should-i-use-static-generation%EF%BC%89%EF%BC%8C%E5%A6%82%E6%9E%9C%E6%9C%89%E6%98%8E%E7%A2%BA%E7%9A%84%E9%9C%80%E6%B1%82%EF%BC%88%E6%AF%94%E5%A6%82%E5%8B%95%E6%85%8B%E5%8F%96%E5%BE%97%E6%B8%B2%E6%9F%93%E6%89%80%E9%9C%80%E7%9A%84%E8%B3%87%E6%96%99%E3%80%81%E5%8F%88%E6%9C%89%E5%89%8D%E5%BE%8C%E7%AB%AF%E5%90%8C%E6%A7%8B%E7%9A%84%E9%9C%80%E6%B1%82%EF%BC%89%EF%BC%8C%E6%89%8D%E4%BD%BF%E7%94%A8"},"https://nextjs.org/docs/basic-features/pages#when-should-i-use-static-generation\uff09\uff0c\u5982\u679c\u6709\u660e\u78ba\u7684\u9700\u6c42\uff08\u6bd4\u5982\u52d5\u614b\u53d6\u5f97\u6e32\u67d3\u6240\u9700\u7684\u8cc7\u6599\u3001\u53c8\u6709\u524d\u5f8c\u7aef\u540c\u69cb\u7684\u9700\u6c42\uff09\uff0c\u624d\u4f7f\u7528")," SSR\uff08\u800c\u4e0d\u662f\u8aaa\u4e0d\u8981\u63a1\u7528 SSR\uff09\u3002\u4e5f\u5c31\u662f\u8aaa\u9019\u5169\u500b\u662f\u53ef\u4ee5\u6df7\u7528\u7684\uff0c\u53ea\u662f\u4ee5 SSG\u70ba\u512a\u5148\u800c\u5df2\u3002"),(0,a.kt)("p",null,"\u4f46\u6211\u89ba\u5f97\u9019\u6a23\u5b50\u7684\u8aaa\u6cd5\u5c0d\u521d\u5b78\u8005\u4f86\u8aaa\u5f88\u53ef\u80fd\u88ab\u8aa4\u5c0e\uff0c\u5c31\u6211\u81ea\u5df1\u7684\u5be6\u52d9\u7d93\u9a57\u4e0d\u540c\u7684\u7cfb\u7d71\u6709\u4e0d\u540c\u7684\u9700\u6c42\uff0c\u4ee5\u6211\u5de5\u4f5c\u7684\u9700\u6c42\u4f86\u8aaa data fetching\u5e7e\u4e4e\u90fd\u662f\u5fc5\u9808 run-time\u53d6\u5f97\u7684\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"getInitialProps"),"\u5c0d\u6211\u4f86\u8aaa\u9084\u662f\u6709\u4f7f\u7528\u7684\u5fc5\u8981"),(0,a.kt)("p",null,"\uff08\u5167\u5fc3\u7591\u60d1\uff1a\u6216\u8005Next.js\u6839\u672c\u5c31\u8a8d\u70ba run-time\u53d6\u5f97\u7684\u8cc7\u6599\u6c92\u6709 SEO\u7684\u5fc5\u8981\u3001\u800c\u6709 SEO\u5fc5\u8981\u7684\u8cc7\u6599\u4e0d\u61c9\u8a72 run-time\u53d6\u5f97\uff1f\uff1f\uff1f\uff09\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u8981\u6ce8\u610f\u7684\u8a31\u591a\u5751\uff01\uff01"))),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"getInitialProps"),"\u5982\u679c\u4f7f\u7528\u5728\u6700\u5916\u5c64(",(0,a.kt)("inlineCode",{parentName:"p"},"app.js"),")\u5247\u53ea\u6703\u5728 server-side\u8abf\u7528\uff08\u5594\u2026\uff09")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u5982\u679c\u4f7f\u7528\u5728\u6700\u5916\u5c64(",(0,a.kt)("inlineCode",{parentName:"p"},"app.js"),")\uff0c\u5247\u6ce8\u5165\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"context")," \u53c3\u6578\u6703\u653e\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"{ ctx }"),"  \u4e2d\uff0c\u548c\u4f7f\u7528\u5728 page\u6642\u4e0d\u540c\uff08\uff01\uff01\uff09"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// PAGE\nfunction getInitialProps (context) {\n  const { req, res }  = context\n  return {}\n}\n// app.js\nfunction getInitialProps ({ Component, ctx }) {\n  const { req, res }  = ctx\n  return {}\n}\n")))),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u5982\u679c\u5728\u6700\u5916\u5c64(",(0,a.kt)("inlineCode",{parentName:"p"},"app.js"),")\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"getInitialProps"),"\uff0c\u5247 Page\u4e5f\u540c\u6642\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"getInitialProps"),"\u7684\u8a71\uff0c\u6700\u5916\u5c64(",(0,a.kt)("inlineCode",{parentName:"p"},"app.js"),")\u7684\u512a\u5148\u5ea6\u662f\u6700\u9ad8\u7684\uff0c\u53ea\u6709\u6700\u5916\u5c64\u6703\u88ab\u8abf\u7528\uff0cPage\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"getInitialProps"),"\u662f\u4e0d\u6703\u88ab\u8abf\u7528\u7684\u3002\u5982\u679c\u8981\u8abf\u7528 Page\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"getInitialProps"),"\u8981\u9019\u6a23\u5beb\uff1a"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// app.js\nfunction getInitialProps ({ Component, ctx }) {\n  const { req, res }  = ctx\n  Component.getInitialProps({ req, res }) // \u53ef\u547c\u53eb Page\u7684 getInitialProps\n  return {}\n}\n")))),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u5982\u679c Page\u662f\u5de2\u72c0\u7d50\u69cb\uff08nested routes\uff09\u7684\u8a71\uff0c\u5167\u5916\u5c64Page\u90fd\u540c\u6642\u6709 ",(0,a.kt)("inlineCode",{parentName:"p"},"getInitialProps"),"\uff0c\u5247\u53ea\u6709\u6700\u5167\u5c64\u7684\u6703\u88ab\u8abf\u7528\uff0c\u5982\u679c\u5e0c\u671b\u540c\u6642\u90fd\u80fd\u88ab\u8abf\u7528\u7684\u8a71\uff0c\u8981\u9019\u6a23\u5beb\uff1a"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// child page\nimport ParentPage from '@/pages/parentpage/index'\n\nfunction getInitialProps (context) {\n  const { data } = ParentPage.getInitialProps(context)\n  return { data }\n}\n\nexport default function ChildPage ({ data }) {\n  return (\n    \x3c!-- \u9019\u88e1\u8981\u6ce8\u610f\u2026 \u5c07\u7236\u5c64\u7684 getInitialProps\u7684\u56de\u50b3\u503c\u50b3\u5165\u7236\u5c64\u7684 Component --\x3e\n    <ParentPage data={data}>\n        <div>\n      </div>\n    </ParentPage>\n  )\n}\n")),(0,a.kt)("p",{parentName:"li"},"\u4f46\u5982\u540c\u524d\u9762\u6240\u8ff0\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"app.js"),"\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"getInitialProps"),"\u7684\u512a\u5148\u5ea6\u4ecd\u7136\u662f\u6700\u9ad8\u7684"))),(0,a.kt)("h3",{id:"getserversideprops"},"getServerSideProps"),(0,a.kt)("p",null,"\u8ddf ",(0,a.kt)("inlineCode",{parentName:"p"},"getInitialProps"),"\u5dee\u7570\u662f\u4ed6\u53ea\u80fd\u5728 server side\u57f7\u884c\uff0c\u4e26\u4e14\u5728 page \u4e2d\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"getServerSideProps")," \u5c31\u80fd\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"getInitialProps")," \uff08\u53ea\u80fd\u4e8c\u9078\u4e00\uff09"),(0,a.kt)("p",null,"\u5982\u679c\u975e\u5fc5\u8981\u5728 server\u57f7\u884c\u5c31\u76e1\u91cf\u4e0d\u8981\u4f7f\u7528\uff0c\u5b98\u65b9\u9019\u6a23\u8aaa\u660e\uff1a"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"You should use getServerSideProps only if you need to pre-render a page whose data must be fetched at request time. Time to first byte (TTFB) will be slower than getStaticProps because the server must compute the result on every request, and the result cannot be cached by a CDN without extra configuration.\nIf you don\u2019t need to pre-render the data, then you should consider fetching data on the client side.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'import fetch from "isomorphic-unfetch";\nfunction Page({ data }) {\n  // Render data...\n}\nexport async function getServerSideProps() {\n  const res = await fetch(`https://.../data`);\n  const data = await res.json();\n  return { props: { data } };\n}\nexport default Page;\n')),(0,a.kt)("h3",{id:"getstaticprops-getstaticpaths"},"getStaticProps, getStaticPaths"),(0,a.kt)("p",null,"\u7528\u4f86\u8655\u7406 ",(0,a.kt)("inlineCode",{parentName:"p"},"SSG")," (Static Site Generation) \u7684\u9700\u6c42\uff0c\u7528\u4f86\u5efa\u7acb\u975c\u614b\u9801\u9762\uff0c\u5728 ",(0,a.kt)("strong",{parentName:"p"},"build-time"),"\u7684\u6642\u5019\u57f7\u884c",(0,a.kt)("strong",{parentName:"p"},"\uff08\u4f46\u662f\u5728\u958b\u767c\u6a21\u5f0f(development mode)\u4e0b\u90fd\u6703\u63a1\u7528SSR\u7684\u65b9\u5f0f\uff0c\u4e5f\u5c31\u662frun-time\u7684\u6642\u5019\u57f7\u884c")),(0,a.kt)("h2",{id:"context"},"Context"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"getInitialProps")," \u7684 Context"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://nextjs.org/docs/api-reference/data-fetching/getInitialProps#context-object"},"https://nextjs.org/docs/api-reference/data-fetching/getInitialProps#context-object")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"getServerSideProps")," \u7684 Context"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://nextjs.org/docs/basic-features/data-fetching#getserversideprops-server-side-rendering"},"https://nextjs.org/docs/basic-features/data-fetching#getserversideprops-server-side-rendering")),(0,a.kt)("h2",{id:"\u5ef6\u4f38\u95b1\u8b80-1"},"\u5ef6\u4f38\u95b1\u8b80"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://ithelp.ithome.com.tw/articles/10271821"},"\u70ba\u4ec0\u9ebc\u5b98\u65b9\u4e0d\u63a8\u85a6\u4f7f\u7528 getInitialProps")," @ iThome/Leochiu"))}d.isMDXComponent=!0}}]);