"use strict";(self.webpackChunkupstairs_0102_github_io=self.webpackChunkupstairs_0102_github_io||[]).push([[6015],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(r),d=a,f=u["".concat(l,".").concat(d)]||u[d]||m[d]||o;return r?n.createElement(f,s(s({ref:t},p),{},{components:r})):n.createElement(f,s({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:a,s[1]=i;for(var c=2;c<o;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},29577:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const o={slug:"2019/12/22/d3js-select-this",title:"\u5f9eD3.js\u7684select(this)\u63a2\u8a0e\u7684\u51fd\u5f0f\u4e2d\u7684this\u6307\u5411",authors:"thunderboy",tags:["d3.js","javascript"]},s=void 0,i={permalink:"/blog/2019/12/22/d3js-select-this",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2019/2019-12-22-\u5f9eD3.js\u7684select(this)\u63a2\u8a0e\u7684\u51fd\u5f0f\u4e2d\u7684this\u6307\u5411.md",source:"@site/blog/2019/2019-12-22-\u5f9eD3.js\u7684select(this)\u63a2\u8a0e\u7684\u51fd\u5f0f\u4e2d\u7684this\u6307\u5411.md",title:"\u5f9eD3.js\u7684select(this)\u63a2\u8a0e\u7684\u51fd\u5f0f\u4e2d\u7684this\u6307\u5411",description:"\u5176\u5be6\u9019\u500b\u6a19\u984c\u4e0b\u7684\u6709\u9ede\u4e0d\u592a\u7cbe\u78ba\uff0c\u4f46\u6211\u60f3\u5f9e\u6211\u81ea\u5df1\u672c\u8eab\u9047\u5230\u7684\u554f\u984c\u7684\u89d2\u5ea6\u4f86\u5207\u5165\uff0c\u7136\u5f8c\u518d\u9032\u4e00\u6b65\u6df1\u5165\u8aaa\u660e\u2026",date:"2019-12-22T00:00:00.000Z",formattedDate:"December 22, 2019",tags:[{label:"d3.js",permalink:"/blog/tags/d-3-js"},{label:"javascript",permalink:"/blog/tags/javascript"}],readingTime:13.135,hasTruncateMarker:!0,authors:[{name:"Adam You",title:"Engineer @ Blueplanet Inc.",url:"https://github.com/upstairs0102",imageURL:"/img/avatar.jpeg",key:"thunderboy"}],frontMatter:{slug:"2019/12/22/d3js-select-this",title:"\u5f9eD3.js\u7684select(this)\u63a2\u8a0e\u7684\u51fd\u5f0f\u4e2d\u7684this\u6307\u5411",authors:"thunderboy",tags:["d3.js","javascript"]},prevItem:{title:"(\u8b6f)Vue.js App\u6548\u80fd\u512a\u5316: part3 \u2013 Lazy loading Vuex modules",permalink:"/blog/2019/12/24/vue-optimization3"}},l={authorsImageUrls:[void 0]},c=[],p={toc:c};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u5176\u5be6\u9019\u500b\u6a19\u984c\u4e0b\u7684\u6709\u9ede\u4e0d\u592a\u7cbe\u78ba\uff0c\u4f46\u6211\u60f3\u5f9e\u6211\u81ea\u5df1\u672c\u8eab\u9047\u5230\u7684\u554f\u984c\u7684\u89d2\u5ea6\u4f86\u5207\u5165\uff0c\u7136\u5f8c\u518d\u9032\u4e00\u6b65\u6df1\u5165\u8aaa\u660e\u2026"),(0,a.kt)("p",null,"\u4e8b\u60c5\u662f\u9019\u6a23\u7684\uff0c\u5728\u51fd\u5f0f\u4e2d\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"d3.select(this)"),"\u53ef\u4ee5\u53d6\u5f97\u8abf\u7528\u6b64\u51fd\u5f0f\u7684dom\uff0c\u6bd4\u5982\u8aaa\u6709\u4ee5\u4e0b\u5e7e\u7a2e\u60c5\u5883\u7bc4\u4f8b\uff1a"))}u.isMDXComponent=!0}}]);