"use strict";(self.webpackChunkupstairs_0102_github_io=self.webpackChunkupstairs_0102_github_io||[]).push([[9579],{3905:(t,e,a)=>{a.d(e,{Zo:()=>m,kt:()=>k});var n=a(7294);function o(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function p(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?p(Object(a),!0).forEach((function(e){o(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function s(t,e){if(null==t)return{};var a,n,o=function(t,e){if(null==t)return{};var a,n,o={},p=Object.keys(t);for(n=0;n<p.length;n++)a=p[n],e.indexOf(a)>=0||(o[a]=t[a]);return o}(t,e);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(t);for(n=0;n<p.length;n++)a=p[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(o[a]=t[a])}return o}var r=n.createContext({}),i=function(t){var e=n.useContext(r),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},m=function(t){var e=i(t.components);return n.createElement(r.Provider,{value:e},t.children)},f="mdxType",c={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var a=t.components,o=t.mdxType,p=t.originalType,r=t.parentName,m=s(t,["components","mdxType","originalType","parentName"]),f=i(a),u=o,k=f["".concat(r,".").concat(u)]||f[u]||c[u]||p;return a?n.createElement(k,l(l({ref:e},m),{},{components:a})):n.createElement(k,l({ref:e},m))}));function k(t,e){var a=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var p=a.length,l=new Array(p);l[0]=u;var s={};for(var r in e)hasOwnProperty.call(e,r)&&(s[r]=e[r]);s.originalType=t,s[f]="string"==typeof t?t:o,l[1]=s;for(var i=2;i<p;i++)l[i]=a[i];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},4102:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>r,contentTitle:()=>l,default:()=>f,frontMatter:()=>p,metadata:()=>s,toc:()=>i});var n=a(7462),o=(a(7294),a(3905));const p={slug:"2020/02/23/pdfmake-chinese-font",title:"\u524d\u7aefPDF\u4e0b\u8f09 | pdfmake\u81ea\u8a02\u4e2d\u6587\u5b57\u578b\uff08\u4f7f\u7528NotoSansTC\uff09",authors:"thunderboy",tags:["javascript","pdfmake"]},l=void 0,s={permalink:"/blog/2020/02/23/pdfmake-chinese-font",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2020/2020-02-23-\u524d\u7aefPDF\u4e0b\u8f09 | pdfmake\u81ea\u8a02\u4e2d\u6587\u5b57\u578b\uff08\u4f7f\u7528NotoSansTC\uff09.md",source:"@site/blog/2020/2020-02-23-\u524d\u7aefPDF\u4e0b\u8f09 | pdfmake\u81ea\u8a02\u4e2d\u6587\u5b57\u578b\uff08\u4f7f\u7528NotoSansTC\uff09.md",title:"\u524d\u7aefPDF\u4e0b\u8f09 | pdfmake\u81ea\u8a02\u4e2d\u6587\u5b57\u578b\uff08\u4f7f\u7528NotoSansTC\uff09",description:"\u5de5\u4f5c\u4e0a\u6709\u9700\u8981\u5728\u524d\u7aef\u5c07\u5167\u5bb9\u751f\u6210PDF\u4e0b\u8f09\u7684\u529f\u80fd\uff0c\u5728\u540c\u4e8b\u7684\u63a8\u85a6\u4e0b\u4f7f\u7528pdfmake\u9019\u500b\u5957\u4ef6\u3002",date:"2020-02-23T00:00:00.000Z",formattedDate:"February 23, 2020",tags:[{label:"javascript",permalink:"/blog/tags/javascript"},{label:"pdfmake",permalink:"/blog/tags/pdfmake"}],readingTime:8.205,hasTruncateMarker:!0,authors:[{name:"Adam You",title:"Engineer @ Blueplanet Inc.",url:"https://github.com/upstairs0102",imageURL:"/img/avatar.jpeg",key:"thunderboy"}],frontMatter:{slug:"2020/02/23/pdfmake-chinese-font",title:"\u524d\u7aefPDF\u4e0b\u8f09 | pdfmake\u81ea\u8a02\u4e2d\u6587\u5b57\u578b\uff08\u4f7f\u7528NotoSansTC\uff09",authors:"thunderboy",tags:["javascript","pdfmake"]},prevItem:{title:"\u4e0d\u9700\u82b1\u9322\u5c07Gitbook(v2)\u67b6\u8a2d\u5728Gitlab Pages\u4e0a",permalink:"/blog/2020/02/23/gitlab-pages-gitbook"},nextItem:{title:"(\u8b6f)Vue.js App \u6548\u80fd\u512a\u5316: part1 \u2013 \u6548\u80fd\u512a\u5316\u548clazy loading",permalink:"/blog/2019/12/24/vue-optimization1"}},r={authorsImageUrls:[void 0]},i=[{value:"\u51d6\u5099\u5b57\u578b\u6a94",id:"\u51d6\u5099\u5b57\u578b\u6a94",level:2},{value:"\u6253\u5305\u5b57\u578b\u6a94",id:"\u6253\u5305\u5b57\u578b\u6a94",level:2},{value:"\u65b9\u6cd51 - npm\u5b89\u88ddpdfmake\uff1a",id:"\u65b9\u6cd51---npm\u5b89\u88ddpdfmake",level:3},{value:"\u65b9\u6cd52 - \u4e0b\u8f09\u6574\u5305source code\uff1a",id:"\u65b9\u6cd52---\u4e0b\u8f09\u6574\u5305source-code",level:3},{value:"\u4f7f\u7528\u65b9\u5f0f",id:"\u4f7f\u7528\u65b9\u5f0f",level:2}],m={toc:i};function f(t){let{components:e,...p}=t;return(0,o.kt)("wrapper",(0,n.Z)({},m,p,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u5de5\u4f5c\u4e0a\u6709\u9700\u8981\u5728\u524d\u7aef\u5c07\u5167\u5bb9\u751f\u6210PDF\u4e0b\u8f09\u7684\u529f\u80fd\uff0c\u5728\u540c\u4e8b\u7684\u63a8\u85a6\u4e0b\u4f7f\u7528pdfmake\u9019\u500b\u5957\u4ef6\u3002"),(0,o.kt)("p",null,"\u4e0d\u904e\u9019\u500b\u5957\u4ef6\u6709\u500b\u554f\u984c\uff0c\u4ed6\u7684\u9810\u8a2d\u5b57\u578b\u662f\u82f1\u6587\u5b57\u578b\uff0c\u800c\u4e14\u4f3c\u4e4e\u4e5f\u6c92\u6709\u63d0\u4f9bapi\u80fd\u5920\u76f4\u63a5\u66ff\u63db\u6210\u81ea\u5df1\u7684\u5b57\u578b\u6a94\u3002\u5982\u679c\u9700\u8981\u66f4\u63db\u5b57\u578b\u9700\u8981\u5728source code\u505a\u4e00\u4e9b\u4fee\u6539\uff0c\u7136\u5f8c\u91cd\u65b0\u6253\u5305\u51fa\u7de8\u8b6f\u904e\u7684\u5b57\u578b\u6a94\uff1b\u96d6\u7136\u7db2\u8def\u4e0a\u4e5f\u6709\u5f88\u591a\u6559\u5b78\uff0c\u4f46\u5728\u6211\u7814\u7a76\u904e\u7a0b\u4e2d\u9084\u662f\u8e29\u5230\u4e00\u4e9b\u5751\uff0c\u6240\u4ee5\u5c31\u628a\u6211\u81ea\u5df1\u7684\u5be6\u4f5c\u6b65\u9a5f\u3001\u4ee5\u53ca\u4f7f\u7528\u65b9\u5f0f\u6574\u7406\u4e86\u4e00\u4e0b\u8ddf\u5927\u5bb6\u5206\u4eab\u3002"),(0,o.kt)("h2",{id:"\u51d6\u5099\u5b57\u578b\u6a94"},"\u51d6\u5099\u5b57\u578b\u6a94"),(0,o.kt)("p",null,"\u5728\u89e3\u8aaa\u6b65\u9a5f\u4e4b\u524d\u5462\uff0c\u6211\u5148\u628a\u6211\u6240\u9047\u5230\u7684\u5751\u8aaa\u660e\u4e00\u4e0b\u3002"),(0,o.kt)("p",null,"\u56e0\u70ba\u64d4\u5fc3\u6703\u6709\u7248\u6b0a\u7684\u554f\u984c\uff0c\u6211\u662f\u4f7f\u7528Google\u63d0\u4f9b\u7684\u958b\u6e90\u5b57\u9ad4\u300c",(0,o.kt)("a",{parentName:"p",href:"https://fonts.google.com/specimen/Noto+Sans+TC"},"\u601d\u6e90\u9ed1\u9ad4"),"\u300d(NotoSansTc)\u3002\u800c\u6211\u5957\u7528\u4e0a\u53bb\u4e4b\u5f8c\uff08\u5728\u6211\u6587\u7ae0\u5f8c\u9762\u6240\u6709\u6b65\u9a5f\u505a\u5b8c\u4e4b\u5f8c\uff09PDF\u4e0b\u8f09\u7684\u7d50\u679c\u5982\u4e0b\uff1a"),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(6546).Z,width:"826",height:"922"})),(0,o.kt)("p",null,"\u7d50\u679c\u662f\u6158\u4e0d\u5fcd\u7779\uff08\u56e0\u90e8\u4efd\u5167\u5bb9\u4e0d\u65b9\u4fbf\u5c55\u793a\u6240\u4ee5\u6709\u99ac\u8cfd\u514b\uff0c\u770b\u8d77\u4f86\u4e5f\u4e0d\u592a\u50cf\u662f\u7f3a\u5b57\u3002\u722c\u6587\u4e4b\u5f8c\u61f7\u7591\u662f\u5b57\u9ad4\u683c\u5f0f\u7684\u554f\u984c\u3002"),(0,o.kt)("p",null,"Google\u63d0\u4f9b\u7684\u5b57\u9ad4\u6a94\u526f\u6a94\u540d\u662f.otf\u3002\u65bc\u662f\u6211\u53c8\u4e0a\u7db2\u627e\u4e86\u526f\u6a94\u540d\u662fwoff2\uff08\u81f3\u65bc\u70ba\u4f55\u662f\u7528woff2\u800c\u4e0d\u662fwoff\uff0c\u662f\u56e0\u70ba\u524d\u8005\u7684size\u5c0f\u4e00\u4e9b\uff09\u6a94\u4e4b\u5f8c\u679c\u7136\u5c31\u6b63\u5e38\u4e86\uff01"),(0,o.kt)("p",null,"\u4ee5\u4e0b\u662f\u6211\u6240\u627e\u5230\u7684CDN\u6a94\u6848\u9023\u7d50\uff0c\u8acb\u4f9d\u6240\u9700\u4e0b\u8f09\uff0c\u6216\u8005\u81ea\u884c\u4f7f\u7528\u81ea\u5df1\u6240\u9700\u7684\u5b57\u9ad4\u6a94\u6848\u3002"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"NotoSansTC-Thin")),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"http://fonts.gstatic.com/ea/notosanstc/v1/NotoSansTC-Thin.woff"},"http://fonts.gstatic.com/ea/notosanstc/v1/NotoSansTC-Thin.woff"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"http://fonts.gstatic.com/ea/notosanstc/v1/NotoSansTC-Thin.woff2"},"http://fonts.gstatic.com/ea/notosanstc/v1/NotoSansTC-Thin.woff2"))))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"NotoSansTC-Light")),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"http://fonts.gstatic.com/ea/notosanstc/v1/NotoSansTC-Light.woff"},"http://fonts.gstatic.com/ea/notosanstc/v1/NotoSansTC-Light.woff"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"http://fonts.gstatic.com/ea/notosanstc/v1/NotoSansTC-Light.woff2"},"http://fonts.gstatic.com/ea/notosanstc/v1/NotoSansTC-Light.woff2"))))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"NotoSansTC-Regular")),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"http://fonts.gstatic.com/ea/notosanstc/v1/NotoSansTC-Regular.woff"},"http://fonts.gstatic.com/ea/notosanstc/v1/NotoSansTC-Regular.woff"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"http://fonts.gstatic.com/ea/notosanstc/v1/NotoSansTC-Regular.woff2"},"http://fonts.gstatic.com/ea/notosanstc/v1/NotoSansTC-Regular.woff2"))))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"NotoSansTC-Medium")),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"http://fonts.gstatic.com/ea/notosanstc/v1/NotoSansTC-Medium.woff"},"http://fonts.gstatic.com/ea/notosanstc/v1/NotoSansTC-Medium.woff"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"http://fonts.gstatic.com/ea/notosanstc/v1/NotoSansTC-Medium.woff2"},"http://fonts.gstatic.com/ea/notosanstc/v1/NotoSansTC-Medium.woff2"))))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"NotoSansTC-Bold")),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"http://fonts.gstatic.com/ea/notosanstc/v1/NotoSansTC-Bold.woff"},"http://fonts.gstatic.com/ea/notosanstc/v1/NotoSansTC-Bold.woff"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"http://fonts.gstatic.com/ea/notosanstc/v1/NotoSansTC-Bold.woff2"},"http://fonts.gstatic.com/ea/notosanstc/v1/NotoSansTC-Bold.woff2"))))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"NotoSansTC-Black")),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"http://fonts.gstatic.com/ea/notosanstc/v1/NotoSansTC-Black.woff"},"http://fonts.gstatic.com/ea/notosanstc/v1/NotoSansTC-Black.woff"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"http://fonts.gstatic.com/ea/notosanstc/v1/NotoSansTC-Black.woff2"},"http://fonts.gstatic.com/ea/notosanstc/v1/NotoSansTC-Black.woff2")))))),(0,o.kt)("h2",{id:"\u6253\u5305\u5b57\u578b\u6a94"},"\u6253\u5305\u5b57\u578b\u6a94"),(0,o.kt)("p",null,"\u7531\u65bcpdfmake\u4e0d\u80fd\u76f4\u63a5\u8f09\u5165\u5b57\u578b\u6a94\uff0c\u9084\u9700\u900f\u904esource code\u88e1\u7528gulp\u5beb\u597d\u7684\u8173\u672c\u4f86\u7de8\u8b6f\u6210js\u6a94\u3002\u4f9d\u7167\u4f60\u662f\u7528npm\u5b89\u88dd\u6216\u8005\u662f\u76f4\u63a5\u5230\u5b98\u7db2\u4e0b\u8f09\u6574\u5305source code\uff0c\u505a\u6cd5\u6703\u6709\u4e9b\u5fae\u5dee\u7570\u3002"),(0,o.kt)("p",null,"\u81f3\u65bc\u8981\u7528\u54ea\u7a2e\u65b9\u5f0f\u597d\u5462\uff1f\u6211\u662f\u89ba\u5f97\u5176\u5be6\u90fd\u6c92\u5dee\uff0c\u524d\u8005\uff08\u65b9\u6cd51\uff09\u7684\u8a71\u662f\u53ef\u4ee5\u76f4\u63a5\u5728\u958b\u767c\u5c08\u6848\u88e1\u5c31\u53ef\u4ee5\u76f4\u63a5\u8655\u7406\uff08\u5230node_modules\u88e1\u53ef\u627e\u5230source code\uff09\uff0c\u5f8c\u8005\uff08\u65b9\u6cd52\uff09\u7684\u8a71\u662f\u53ef\u4ee5\u5728\u7368\u7acb\u7684\u74b0\u5883\u4e2d\u8655\u7406\uff0c\u5efa\u597d\u5b57\u578b\u6a94\u5f8c\u5c31\u53ef\u4ee5\u628asource code\u522a\u6389\u4e86\u3002"),(0,o.kt)("p",null,"\u6240\u4ee5\u4e0b\u5206\u958b\u8aaa\u660e\uff1a"),(0,o.kt)("h3",{id:"\u65b9\u6cd51---npm\u5b89\u88ddpdfmake"},"\u65b9\u6cd51 - npm\u5b89\u88ddpdfmake\uff1a"),(0,o.kt)("p",null,"\u958b\u767c\u5c08\u6848\u4f7f\u7528npm\u5b89\u88ddpdfmake\u4e4b\u5f8c\uff0c\u5230node_modules\u88e1\u627e\u5230pdfmake\u8cc7\u6599\u593e\uff0c\u958b\u555fgulpfile.js\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(805).Z,width:"233",height:"214"})),(0,o.kt)("p",null,"\u7136\u5f8c\u627e\u5230\u5982\u4e0b\u5716\u7684\u9019\u4e00\u884c\u3002\u9019\u500b\u8def\u5f91\u662f\u8981\u653e\u7f6e\u5b57\u578b\u6a94\u7684\u8cc7\u6599\u593e\uff0c\u4f46\u662fnpm\u5b89\u88dd\u5230node_modules\u88e1\u9762\u7684\u6a94\u6848\u4e26\u6c92\u6709\u5305\u542b\u539f\u59cb\u7684\u5b57\u578b\u6a94\u3001\u4ee5\u53ca\u9019\u500b\u8cc7\u6599\u593e\u8def\u5f91\uff0c\u6240\u4ee5\u9700\u8981\u624b\u52d5\u5efa\u7acb\u4e00\u500b\u8cc7\u6599\u593e\u4e26\u653e\u5165\u8981\u4f7f\u7528\u7684\u5b57\u578b\uff08\u53ef\u653e\u591a\u500b\u5b57\u578b\u6a94\uff09\u5230\u8a72\u8cc7\u6599\u593e\u88e1\uff0c\u7136\u5f8c\u518d\u628a\u9019\u500b\u8def\u5f91\u6539\u5beb\u6210\u81ea\u5df1\u5efa\u7acb\u7684\u8cc7\u6599\u593e\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(3199).Z,width:"535",height:"250"})),(0,o.kt)("p",null,"\u63a5\u8457\u5728terminal\u4e2d\u5c07\u8def\u5f91\u79fb\u52d5\u5230pdfmake\u7684\u6839\u76ee\u9304\uff08\u4e5f\u5c31\u662f\u548cgulpfile.js\u6240\u5728\u7684\u8cc7\u6599\u593e\u4e2d\uff09"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"cd node_modules/pdfmake")),(0,o.kt)("p",null,"source code\u88e1\u9762\u5305\u542bpackage.json\u6a94\uff0c\u6240\u4ee5\u76f4\u63a5\u4e0b\u6307\u4ee4\u5c07\u6240\u9700\u5957\u4ef6\u5b89\u88dd\u5373\u53ef\u3002"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"npm install")),(0,o.kt)("p",null,"\u6700\u5f8c\u4e00\u6b65\uff0c\u7528gulp\u6253\u5305\u5b57\u578b\u6a94\u3002"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"gulp buildFonts")),(0,o.kt)("p",null,"\u5b8c\u6210\u4e4b\u5f8c\u5c31\u6703\u5728\u300cbuild\u300d\u8cc7\u6599\u593e\u88e1\u9762\u6253\u5305\u51favfs_fonts.js\uff0c\u9019\u500b\u6a94\u6848\u5c31\u662fpdfmake\u6240\u8981\u7528\u7684\u5b57\u578b\u6a94\u4e86\u3002"),(0,o.kt)("p",null,"\u6700\u5f8c\u4e00\u4ef6\u8981\u6ce8\u610f\u7684\u4e8b\u60c5\uff0c\u70ba\u65b9\u4fbf\u7dad\u8b77\u3001\u4ee5\u53ca\u907f\u514d\u5728node_modules\u66f4\u65b0\u7684\u904e\u7a0b\u7576\u4e2d\u88ab\u8986\u84cb\u6389\uff0c\u6211\u4e0d\u5efa\u8b70\u50c5\u5c07\u8a72\u6a94\u6848\u53d6\u4ee3\u6389\u539f\u59cb\u7684\u7a0b\u5f0f\uff0c\u6211\u6703\u5efa\u8b70\u628avfs_fonts.js\u8907\u88fd\u51fa\u4f86\u653e\u5230\u6211\u5011\u958b\u767c\u7684\u5c08\u6848\u8cc7\u6599\u593e\u7576\u4e2d\uff0c\u4ee5\u6211\u81ea\u5df1\u70ba\u4f8b\u6211\u662f\u4f7f\u7528vue-cli\u958b\u767c\u7684\u5c08\u6848\uff0c\u6211\u653e\u5728src/assets/fonts/\u8cc7\u6599\u593e\u7576\u4e2d\u3002"),(0,o.kt)("h3",{id:"\u65b9\u6cd52---\u4e0b\u8f09\u6574\u5305source-code"},"\u65b9\u6cd52 - \u4e0b\u8f09\u6574\u5305source code\uff1a"),(0,o.kt)("p",null,"\u65b9\u6cd52\u548c\u65b9\u6cd51\u5e7e\u4e4e\u662f\u4e00\u6a23\u4e86\u3002\u6211\u81ea\u5df1\u5c31\u662f\u9019\u6a23\u505a\u7684\uff0c\u56e0\u70ba\u6211\u4e0d\u60f3\u5728\u6211\u76ee\u524d\u958b\u767c\u4e2d\u7684\u5c08\u6848\u53bb\u4fee\u6539source code\uff08\u96d6\u7136\u5176\u5be6\u4e5f\u4e0d\u6703\u6709\u4ec0\u9ebc\u5f71\u97ff\uff09\uff0c\u6240\u4ee5\u5c31\u5230 ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/bpampuch/pdfmake"},"Github"),"\u4e0a\u5c07\u6574\u5305source code\u4e0b\u8f09\u4e0b\u4f86\uff0c\u7136\u5f8c\u5728\u7368\u7acb\u7684\u74b0\u5883\u88e1\u64cd\u4f5c\u3002"),(0,o.kt)("p",null,"\u9019\u5305\u6a94\u6848\u6bd4\u8d77\u65b9\u6cd51\u4e2d\u7528npm\u5b89\u88dd\uff0c\u9084\u6703\u591a\u4e86\u4e00\u500b\u53eb\u300cexamples\u300d\u7684\u8cc7\u6599\u593e\u3002\u9019\u500b\u8cc7\u6599\u593e\u88e1\u9084\u6709\u4e00\u500b\u53eb\u300cfonts\u300d\u7684\u8cc7\u6599\u593e\uff0c\u88e1\u9762\u5305\u542b\u4e86pdfmake\u9810\u8a2d\u4f7f\u7528\u7684\u5b57\u578b\u6a94\uff0c\u4f60\u61c9\u8a72\u6703\u770b\u5230\u9019\u4e9b\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Roboto-Italic.ttf")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Roboto-Medium.ttf")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Roboto-MediumItalic.ttf")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Roboto-Regular.ttf"))),(0,o.kt)("p",null,"\u7531\u65bc\u6253\u5305\u6642\u6703\u628a\u9019\u500b\u8cc7\u6599\u593e\u7684\u5b57\u578b\u6a94\u5168\u90e8\u4e00\u8d77\u6253\u5305\u3002\u5b57\u578b\u6a94\u6108\u591a\u3001\u6a94\u6848\u5c31\u6108\u5927\uff0c\u6a94\u6848\u6108\u5927\u3001\u524d\u7aef\u7db2\u9801\u6240\u8981\u4e0b\u8f09js chunk\u5c31\u6108\u5927\uff0c\u5982\u679c\u7528\u4e0d\u5230\uff0c\u5168\u90e8\u522a\u6389\u5373\u53ef\uff01\u522a\u522a\u522a"),(0,o.kt)("p",null,"\u7136\u5f8c\u628a\u81ea\u5df1\u8981\u7528\u7684\u5b57\u578b\u6a94\u653e\u9032\u53bb\uff08\u53ef\u653e\u591a\u500b\u5b57\u578b\u6a94\uff09\u3002"),(0,o.kt)("p",null,"\u63a5\u4e0b\u4f86\u6b65\u9a5f\u5c31\u548c\u65b9\u6cd51\u7576\u4e2d\u6240\u8aaa\u7684\u90fd\u4e00\u6a23\u4e86\uff1a"),(0,o.kt)("p",null,"\u5c07\u6240\u9700\u5957\u4ef6\u5b89\u88dd\u3002"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"npm install")),(0,o.kt)("p",null,"\u6700\u5f8c\u4e00\u6b65\uff0c\u7528gulp\u6253\u5305\u5b57\u578b\u6a94\u3002"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"gulp buildFonts")),(0,o.kt)("p",null,"\u5b8c\u6210\u4e4b\u5f8c\u5c31\u6703\u5728\u300cbuild\u300d\u8cc7\u6599\u593e\u88e1\u9762\u6253\u5305\u51favfs_fonts.js\uff0c\u9019\u500b\u6a94\u6848\u5c31\u662fpdfmake\u6240\u8981\u7528\u7684\u5b57\u578b\u6a94\u4e86\u3002"),(0,o.kt)("p",null,"\u70ba\u65b9\u4fbf\u7dad\u8b77\u3001\u4ee5\u53ca\u907f\u514d\u5728node_modules\u66f4\u65b0\u7684\u904e\u7a0b\u7576\u4e2d\u88ab\u8986\u84cb\u6389\uff0c\u6211\u4e0d\u5efa\u8b70\u50c5\u5c07\u8a72\u6a94\u6848\u53d6\u4ee3\u6389\u539f\u59cb\u7684\u7a0b\u5f0f\uff0c\u6211\u6703\u5efa\u8b70\u628avfs_fonts.js\u8907\u88fd\u51fa\u4f86\u653e\u5230\u6211\u5011\u958b\u767c\u7684\u5c08\u6848\u8cc7\u6599\u593e\u7576\u4e2d\uff0c\u4ee5\u6211\u81ea\u5df1\u70ba\u4f8b\u6211\u662f\u4f7f\u7528vue-cli\u958b\u767c\u7684\u5c08\u6848\uff0c\u6211\u653e\u5728src/assets/fonts/\u8cc7\u6599\u593e\u7576\u4e2d\u3002"),(0,o.kt)("h2",{id:"\u4f7f\u7528\u65b9\u5f0f"},"\u4f7f\u7528\u65b9\u5f0f"),(0,o.kt)("p",null,"\u4ee5\u4e0b\u662f\u6211\u89ba\u5f97\u6bd4\u8f03\u9700\u8981\u6ce8\u610f\u7684\u5730\u65b9\uff1a"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"1. \u8a2d\u5b9a\u9810\u8a2d\u5b57\u9ad4")),(0,o.kt)("p",null,"\u9664\u975e\u4f60\u4fee\u6539source code\uff08\u9019\u5c31\u4e0d\u592a\u5efa\u8b70\u4e86\uff0c\u9019\u6a23\u7528npm\u7dad\u8b77\u5957\u4ef6\u7248\u672c\u6703\u6709\u4e9b\u554f\u984c\uff09\uff0c\u5426\u5247\u7684\u8a71\u9700\u8981\u5728\u53c3\u6578\u4e0a\u8a2d\u5b9a\u4f60\u6240\u5efa\u7acb\u7684\u9810\u8a2d\u5b57\u9ad4\u3002"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"2. \u7368\u7acb\u8f09\u5165\u5b57\u9ad4\u6a94")),(0,o.kt)("p",null,"\u5728\u524d\u8ff0\u7684\u6b65\u9a5f\u4e2d\u5df2\u7d93\u6709\u63d0\u5230\u4e86\uff0c\u6211\u5efa\u8b70\u5c07\u6240\u6253\u5305\u7684\u5b57\u9ad4\u6a94vfs_fonts.js\u653e\u5230\u5728\u958b\u767c\u5c08\u6848\u7684\u8cc7\u6599\u593e\u7576\u4e2d\u3002\u4e00\u4f86\u662f\u70ba\u65b9\u4fbf\u7dad\u8b77\u3001\u4e5f\u907f\u514d\u5728node_modules\u66f4\u65b0\u7684\u904e\u7a0b\u7576\u4e2d\u88ab\u8986\u84cb\u6389\u3002"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"3. \u5b57\u9ad4\u6a94(vfs_fonts.js)\u53ef\u4f7f\u7528\u52d5\u614b\u8f09\u5165")),(0,o.kt)("p",null,"\u5982\u679c\u662f\u5728js module\u7576\u4e2d\u76f4\u63a5import\u7684\u8a71\uff0cwebpack\u6703\u628avfs_fonts.js\u548c\u4f60\u7684\u9801\u9762\u7a0b\u5f0f\u6253\u5305\u6210\u540c\u4e00\u500bjs chunk\uff0c\u6a94\u6848size\u6703\u975e\u5e38\u9a5a\u4eba\uff0c\u6703\u5f71\u97ff\u5230\u8f09\u5165\u9801\u9762\u7684\u6548\u80fd\u3002\u6240\u4ee5\u6211\u6703\u8a2d\u8a08\u6210\u5728\u8981\u958b\u59cb\u4e0b\u8f09pdf\u7684\u6642\u5019\u624d\u53bb\u4e0b\u8f09vfs_fonts.js"),(0,o.kt)("p",null,"\u6839\u64da\u4e0a\u8ff0\u4e09\u9ede\uff0c\u4ee5\u4e0b\u662f\u7a0b\u5f0f\u7bc4\u4f8b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"import pdfMake from 'pdfmake/build/pdfmake'\n\nlet data = {\n  content: [\n    // pdf\u5167\u5bb9\u53ca\u683c\u5f0f\n  ],\n  styles: {\n    // \u6a23\u5f0f\u8a2d\u5b9a\n  },\n  defaultStyle: {\n    font: 'NotoSansTC' // \u9810\u8a2d\u7684\u5b57\u9ad4\u683c\u5f0f\n  }\n}\n\n// \u52d5\u614b\u8f09\u5165\u5b57\u9ad4\u6a94\npdfMake.vfs = await import('@/assets/fonts/vfs_fonts.js')\n\npdfMake.fonts = {\n  NotoSansTC: {\n    normal: 'NotoSansTC-Regular.woff2',\n    bold: 'NotoSansTC-Bold.woff2',\n  }\n}\n\npdfMake.createPdf(data).download('\u6a94\u6848\u540d\u7a31')\n")))}f.isMDXComponent=!0},805:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/pdfmake_1-8521647b29229cac4e9f26780878d95c.png"},3199:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/pdfmake_2-272257468f5b583643176065d016a7a2.png"},6546:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/pdfmake_3-5e909f5a4e403c1102fadace11132744.png"}}]);