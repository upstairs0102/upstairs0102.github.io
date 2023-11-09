"use strict";(self.webpackChunkupstairs_0102_github_io=self.webpackChunkupstairs_0102_github_io||[]).push([[7550],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(r),m=a,f=p["".concat(s,".").concat(m)]||p[m]||b[m]||o;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},27713:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var n=r(87462),a=(r(67294),r(3905));const o={slug:"2023/09/12/confusing-terms-in-rxjs",title:"RxJS\u4e2d\u4e00\u4e9b\u5bb9\u6613\u6df7\u6dc6\u7684\u540d\u8a5e",authors:"thunderboy",tags:["rxjs"]},i=void 0,l={permalink:"/blog/2023/09/12/confusing-terms-in-rxjs",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2023/2023-09-12-RxJS\u4e2d\u4e00\u4e9b\u5bb9\u6613\u6df7\u6dc6\u7684\u540d\u8a5e.md",source:"@site/blog/2023/2023-09-12-RxJS\u4e2d\u4e00\u4e9b\u5bb9\u6613\u6df7\u6dc6\u7684\u540d\u8a5e.md",title:"RxJS\u4e2d\u4e00\u4e9b\u5bb9\u6613\u6df7\u6dc6\u7684\u540d\u8a5e",description:"\u524d\u8a00",date:"2023-09-12T00:00:00.000Z",formattedDate:"September 12, 2023",tags:[{label:"rxjs",permalink:"/blog/tags/rxjs"}],readingTime:3.345,hasTruncateMarker:!0,authors:[{name:"Adam You",title:"Engineer @ Blueplanet Inc.",url:"https://github.com/upstairs0102",imageURL:"/img/avatar.jpeg",key:"thunderboy"}],frontMatter:{slug:"2023/09/12/confusing-terms-in-rxjs",title:"RxJS\u4e2d\u4e00\u4e9b\u5bb9\u6613\u6df7\u6dc6\u7684\u540d\u8a5e",authors:"thunderboy",tags:["rxjs"]},prevItem:{title:"\u7528vite\u6253\u5305\u8981\u767c\u5e03npm\u7684\u7a0b\u5f0f",permalink:"/blog/2023/11/10/using-vite-to-build-node-packages"},nextItem:{title:"[RxJS] \u53bb\u9664\u6389 combineLatest \u4e2d\u540c\u6642\u9593\u7684\u91cd\u8986\u4e8b\u4ef6",permalink:"/blog/2023/09/12/combinelatest-duplicate-events"}},s={authorsImageUrls:[void 0]},u=[{value:"\u524d\u8a00",id:"\u524d\u8a00",level:2}],c={toc:u};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u524d\u8a00"},"\u524d\u8a00"),(0,a.kt)("p",null,"\u5728\u6211\u5b78\u7fd2 RxJS\u7684\u6642\u5019\u6211\u767c\u73fe\u6211\u9047\u5230\u7684\u7b2c\u4e00\u500b\u5b78\u7fd2\u969c\u7919\u5c31\u662f\u4e00\u4e9b\u5f88\u76f8\u4f3c\u7684\u540d\u8a5e\uff0c\u96d6\u7136\u8aaa\u66f8\u88e1\u5beb\u7684\u611f\u89ba\u597d\u50cf\u90fd\u8aaa\u4e86\uff0c\u53ef\u662f\u9084\u662f\u6709\u9ede\u6a21\u7cca\u3002"),(0,a.kt)("p",null,"\u6bd4\u5982\u8aaa\uff1a\u5728\u8a0e\u8ad6 Design Pattern\u7684\u6642\u5019\uff0cObserver Pattern \u7684\u300c\u88ab\u89c0\u5bdf\u8005\u300d\u662f ",(0,a.kt)("strong",{parentName:"p"},"Subject"),"\uff0c\u800c RxJS\u7684\u4e16\u754c\u88e1\u662f\u8b1b ",(0,a.kt)("strong",{parentName:"p"},"Observable"),"\uff0c\u4f46 Observable\u88e1\u53c8\u6709\u591a\u7a2e\u4e0d\u540c\u7279\u6027\u7684\u985e\u5225\u5305\u542b Observable\u985e\u5225\u4ee5\u53ca Subject\u985e\u5225\u7b49\uff0c\u6240\u4ee5\u4f60\u53ea\u8aaa\u300cObservable\u300d\u6709\u53ef\u80fd\u6307\u7684\u662f\u300c\u88ab\u89c0\u5bdf\u8005\u300d\uff0c\u5982\u679c\u662f\u7684\u8a71\u5b83\u4e5f\u6703\u5305\u542b Subject\u985e\u5225\uff0c\u800c\u5982\u679c\u8aaa\u7684\u662f\u300cObservable\u985e\u5225\u300d\u90a3\u5c31\u662f\u91dd\u5c0d\u90a3\u500b\u985e\u5225\u7684\u7269\u4ef6\u5728\u505a\u8a0e\u8ad6\u2026"),(0,a.kt)("p",null,"\u6211\u82b1\u4e86\u4e00\u9ede\u6642\u9593\u505a\u7b46\u8a18\u4ee5\u53ca\u6574\u7406\u624d\u628a\u9019\u4e9b\u540d\u8a5e\u5f04\u6e05\u695a\uff0c\u4f46\u771f\u7684\u8981\u5230\u719f\u6089\u4e5f\u9084\u662f\u5230\u5be6\u969b\u6709\u5beb\u4e86\u4e00\u4e9b\u6473\u4e4b\u5f8c\u4e86\u2026"))}p.isMDXComponent=!0}}]);