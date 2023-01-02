"use strict";(self.webpackChunkupstairs_0102_github_io=self.webpackChunkupstairs_0102_github_io||[]).push([[8032],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>d});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),c=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=c(r),b=o,d=u["".concat(i,".").concat(b)]||u[b]||m[b]||a;return r?n.createElement(d,l(l({ref:t},s),{},{components:r})):n.createElement(d,l({ref:t},s))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=b;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[u]="string"==typeof e?e:o,l[1]=p;for(var c=2;c<a;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}b.displayName="MDXCreateElement"},3103:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>p,toc:()=>c});var n=r(7462),o=(r(7294),r(3905));const a={authors:"thunderboy",tags:["javascript","npm","node","webpack"]},l="node\u74b0\u5883\u5404\u7a2e\u795e\u79d8\u554f\u984c\u89e3\u6c7a",p={permalink:"/blog/2022/12/21/node-env-problems-of-frontend-project-solved",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2022/12-21-node-env-problems-of-frontend-project-solved.md",source:"@site/blog/2022/12-21-node-env-problems-of-frontend-project-solved.md",title:"node\u74b0\u5883\u5404\u7a2e\u795e\u79d8\u554f\u984c\u89e3\u6c7a",description:"\u524d\u8a00",date:"2022-12-21T00:00:00.000Z",formattedDate:"December 21, 2022",tags:[{label:"javascript",permalink:"/blog/tags/javascript"},{label:"npm",permalink:"/blog/tags/npm"},{label:"node",permalink:"/blog/tags/node"},{label:"webpack",permalink:"/blog/tags/webpack"}],readingTime:2.15,hasTruncateMarker:!0,authors:[{name:"Adam You",title:"Engineer @ Blueplanet Inc.",url:"https://github.com/upstairs0102",imageURL:"/img/avatar.jpg",key:"thunderboy"}],frontMatter:{authors:"thunderboy",tags:["javascript","npm","node","webpack"]},prevItem:{title:"2023\u90e8\u843d\u683c\u642c\u5bb6\u5230 Docusaurus",permalink:"/blog/2023/01/02/new-docusaurus-website"},nextItem:{title:"\u7b2c\u4e00\u6b21\u767c\u5e03 npm\u524d\u7aef\u5957\u4ef6\u5c31\u4e0a\u624b",permalink:"/blog/2022/12/15/publish-js-library-to-npm"}},i={authorsImageUrls:[void 0]},c=[{value:"\u524d\u8a00",id:"\u524d\u8a00",level:2}],s={toc:c};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u524d\u8a00"},"\u524d\u8a00"),(0,o.kt)("p",null,"\u958b\u767c Vue\u5c08\u6848\u904e\u7a0b\u7576\u4e2d\u9047\u904e\u5404\u7a2enode\u74b0\u5883\u7684\u795e\u79d8\u554f\u984c\u3002\u6700\u5947\u602a\u7684\u662f\u672c\u6a5f\u7aef\u7684 node\u7248\u672c\u548c server\u7aef\u5b8c\u5168\u76f8\u540c\uff0c\u4f46\u662f\u672c\u6a5f\u7aef\u7684 npm install\u548c npm build\u662f\u6b63\u5e38\u6642\uff0c\u78ba\u4e0d\u80fd\u4fdd\u8b49 server\u7aef\u4e5f\u540c\u6a23\u6c92\u6709\u554f\u984c\u3002"),(0,o.kt)("p",null,"\u6211\u81ea\u5df1\u5c07\u5e38\u9047\u5230\u7684\u554f\u984c\u6574\u7406\u6210\u7b46\u8a18\u9806\u4fbf\u5206\u4eab\u7d66\u5927\u5bb6\u3002\u4f46\u6bcf\u500b\u4eba\u7684\u958b\u767c\u74b0\u5883\u53ca\u53ef\u80fd\u9047\u5230\u7684\u554f\u984c\u7686\u4e0d\u76f8\u540c\uff0c\u6240\u4ee5\u5c31\u50c5\u4f9b\u53c3\u8003\u4e86\u3002"))}u.isMDXComponent=!0}}]);