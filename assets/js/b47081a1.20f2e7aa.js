"use strict";(self.webpackChunkupstairs_0102_github_io=self.webpackChunkupstairs_0102_github_io||[]).push([[2640],{3905:(t,e,n)=>{n.d(e,{Zo:()=>s,kt:()=>g});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function p(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var u=a.createContext({}),i=function(t){var e=a.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):p(p({},e),t)),n},s=function(t){var e=i(t.components);return a.createElement(u.Provider,{value:e},t.children)},c="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},k=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,u=t.parentName,s=o(t,["components","mdxType","originalType","parentName"]),c=i(n),k=r,g=c["".concat(u,".").concat(k)]||c[k]||m[k]||l;return n?a.createElement(g,p(p({ref:e},s),{},{components:n})):a.createElement(g,p({ref:e},s))}));function g(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,p=new Array(l);p[0]=k;var o={};for(var u in e)hasOwnProperty.call(e,u)&&(o[u]=e[u]);o.originalType=t,o[c]="string"==typeof t?t:r,p[1]=o;for(var i=2;i<l;i++)p[i]=n[i];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},2182:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>u,contentTitle:()=>p,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>i});var a=n(7462),r=(n(7294),n(3905));const l={slug:"2019/12/24/vue-optimization2",title:"(\u8b6f)Vue.js App\u6548\u80fd\u512a\u5316: part2 \u2013 Lazy loading\u8def\u7531\u53ca\u7b2c\u4e09\u65b9\u5eab\u6253\u5305\u53cd\u5411\u6a21\u5f0f(anti-pattern)",authors:"thunderboy",tags:["vue","javascript"]},p=void 0,o={permalink:"/blog/2019/12/24/vue-optimization2",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2019/2019-12-24-(\u8b6f)Vue.js App\u6548\u80fd\u512a\u5316: part2 \u2013 Lazy loading\u8def\u7531\u53ca\u7b2c\u4e09\u65b9\u5eab\u6253\u5305\u53cd\u5411\u6a21\u5f0f(anti-pattern).md",source:"@site/blog/2019/2019-12-24-(\u8b6f)Vue.js App\u6548\u80fd\u512a\u5316: part2 \u2013 Lazy loading\u8def\u7531\u53ca\u7b2c\u4e09\u65b9\u5eab\u6253\u5305\u53cd\u5411\u6a21\u5f0f(anti-pattern).md",title:"(\u8b6f)Vue.js App\u6548\u80fd\u512a\u5316: part2 \u2013 Lazy loading\u8def\u7531\u53ca\u7b2c\u4e09\u65b9\u5eab\u6253\u5305\u53cd\u5411\u6a21\u5f0f(anti-pattern)",description:"\u5728\u524d\u4e00\u7bc7\u6587\u7ae0\u7576\u4e2d\u6211\u5011\u5b78\u5230\u4e86\u4ec0\u9ebc\u662f\u5207\u5272\u7a0b\u5f0f\u78bc\u3001\u5b83\u662f\u5982\u4f55\u904b\u4f5c\u7684\u4ee5\u53ca\u5728Vue.js\u61c9\u7528\u7a0b\u5f0f\u4e2d\u5982\u4f55\u548clazy loading\u4e00\u8d77\u4f7f\u7528\u3002\u73fe\u5728\u6211\u5011\u5c07\u7a0d\u5fae\u6df1\u5165\u4e00\u9ede\u7684\u4f86\u770b\u7a0b\u5f0f\u78bc\uff0c\u4e26\u5b78\u7fd2\u5728Vue.js\u61c9\u7528\u7a0b\u5f0f\u4e2d\u6700\u5be6\u7528\u7684\u7a0b\u5f0f\u78bc\u5207\u5272\u7684\u6a21\u5f0f\u3002",date:"2019-12-24T00:00:00.000Z",formattedDate:"December 24, 2019",tags:[{label:"vue",permalink:"/blog/tags/vue"},{label:"javascript",permalink:"/blog/tags/javascript"}],readingTime:8.03,hasTruncateMarker:!0,authors:[{name:"Adam You",title:"Engineer @ Blueplanet Inc.",url:"https://github.com/upstairs0102",imageURL:"/img/avatar.jpeg",key:"thunderboy"}],frontMatter:{slug:"2019/12/24/vue-optimization2",title:"(\u8b6f)Vue.js App\u6548\u80fd\u512a\u5316: part2 \u2013 Lazy loading\u8def\u7531\u53ca\u7b2c\u4e09\u65b9\u5eab\u6253\u5305\u53cd\u5411\u6a21\u5f0f(anti-pattern)",authors:"thunderboy",tags:["vue","javascript"]},prevItem:{title:"(\u8b6f)Vue.js App \u6548\u80fd\u512a\u5316: part1 \u2013 \u6548\u80fd\u512a\u5316\u548clazy loading",permalink:"/blog/2019/12/24/vue-optimization1"},nextItem:{title:"(\u8b6f)Vue.js App\u6548\u80fd\u512a\u5316: part3 \u2013 Lazy loading Vuex modules",permalink:"/blog/2019/12/24/vue-optimization3"}},u={authorsImageUrls:[void 0]},i=[{value:"\u6210\u9577\u4e2d\u7684\u61c9\u7528\u7a0b\u5f0f\u7684\u554f\u984c",id:"\u6210\u9577\u4e2d\u7684\u61c9\u7528\u7a0b\u5f0f\u7684\u554f\u984c",level:2},{value:"\u7d50\u8a9e",id:"\u7d50\u8a9e",level:2}],s={toc:i};function c(t){let{components:e,...l}=t;return(0,r.kt)("wrapper",(0,a.Z)({},s,l,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u5728\u524d\u4e00\u7bc7\u6587\u7ae0\u7576\u4e2d\u6211\u5011\u5b78\u5230\u4e86\u4ec0\u9ebc\u662f\u5207\u5272\u7a0b\u5f0f\u78bc\u3001\u5b83\u662f\u5982\u4f55\u904b\u4f5c\u7684\u4ee5\u53ca\u5728Vue.js\u61c9\u7528\u7a0b\u5f0f\u4e2d\u5982\u4f55\u548clazy loading\u4e00\u8d77\u4f7f\u7528\u3002\u73fe\u5728\u6211\u5011\u5c07\u7a0d\u5fae\u6df1\u5165\u4e00\u9ede\u7684\u4f86\u770b\u7a0b\u5f0f\u78bc\uff0c\u4e26\u5b78\u7fd2\u5728Vue.js\u61c9\u7528\u7a0b\u5f0f\u4e2d\u6700\u5be6\u7528\u7684\u7a0b\u5f0f\u78bc\u5207\u5272\u7684\u6a21\u5f0f\u3002"),(0,r.kt)("p",null,"\u9019\u500b\u7cfb\u5217\u662f\u57fa\u65bc\u5f9e",(0,r.kt)("a",{parentName:"p",href:"https://github.com/DivanteLtd/vue-storefront"},"Vue Storefront"),"\u7684\u6548\u80fd\u512a\u5316\u8655\u7406\u4e2d\u6240\u5b78\u5230\u7684\u3002\u900f\u904e\u4ee5\u4e0b\u7684\u6280\u8853\u6211\u5011\u53ef\u4ee5\u780d\u6389\u6211\u5011\u6700\u521d\u7684\u6253\u5305\u768470%\uff0c\u4f7f\u4ed6\u8f09\u5165\u5728\u4e00\u7728\u9593\u5c31\u5b8c\u6210\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Part 1 \u2013 \u4ecb\u7d39\u6548\u80fd\u512a\u5316\u53calazy loading"),(0,r.kt)("li",{parentName:"ul"},"Part 2 \u2013 Lazy loading\u8def\u7531\u53ca\u7b2c\u4e09\u65b9\u5eab\u7684\u53cd\u5411\u6a21\u5f0f(anti-pattern)"),(0,r.kt)("li",{parentName:"ul"},"Part 3 \u2013 Lazy loading Vuex\u6a21\u7d44"),(0,r.kt)("li",{parentName:"ul"},"Part 4 \u2013 Lazy loading\u55ae\u4e00Component"),(0,r.kt)("li",{parentName:"ul"},"Part 5 \u2013 Lazy loading\u51fd\u5f0f\u5eab\u548c\u5c0b\u627e\u6700\u5c0f\u96c6\u5408"),(0,r.kt)("li",{parentName:"ul"},"Part 6 \u2013 \u4f7f\u7528Service Worker cache"),(0,r.kt)("li",{parentName:"ul"},"Part 7 \u2013 \u9810\u8b80\u53d6")),(0,r.kt)("h2",{id:"\u6210\u9577\u4e2d\u7684\u61c9\u7528\u7a0b\u5f0f\u7684\u554f\u984c"},"\u6210\u9577\u4e2d\u7684\u61c9\u7528\u7a0b\u5f0f\u7684\u554f\u984c"),(0,r.kt)("p",null,"Vue-router\u662f\u4e00\u500b\u53ef\u4ee5\u5207\u5272\u6211\u5011\u7684\u7db2\u9801\u61c9\u7528\u7a0b\u5f0f\u6210\u70ba\u5404\u5225\u9801\u9762\u3002\u5404\u81ea\u7684\u9801\u9762\u5c0d\u61c9\u5230\u7279\u5b9a\u7684URL\u8def\u5f91\u3002"),(0,r.kt)("p",null,"\u6709\u4e86\u9019\u500b\u60f3\u50cf\u4e4b\u5f8c\u6211\u5011\u6709\u4ee5\u4e0b\u4e00\u500b\u7c21\u55ae\u7684\u4f5c\u54c1\u96c6\u7a0b\u5f0f\u67b6\u69cb\uff1a"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(6418).Z,width:"1200",height:"687"})),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(1190).Z,width:"912",height:"630"})),(0,r.kt)("p",null,"\u4f60\u53ef\u80fd\u6703\u6ce8\u610f\u5230\u6211\u5011\u9084\u4e0d\u9700\u8981app.js\u6253\u5305\u4e2d\u4f9d\u8cf4\u7684Home.vue\u548cAbout.vue(\u4ee5\u53ca\u5176\u4f9d\u8cf4\u7684lodash)\u3001\u4e26\u4e14\u7121\u8ad6\u4f7f\u7528\u8005\u8a2a\u554f\u54ea\u500b\u8def\u7531\u90fd\u6703\u628a\u4ed6\u5011\u4e0b\u8f09\u4e0b\u4f86\u3002\u9019\u5f88\u6d6a\u8cbb\u4e0b\u8f09\u6d41\u91cf\u800c\u4e14\u6d6a\u8cbb\u6642\u9593\uff01"),(0,r.kt)("p",null,"\u5982\u679c\u53ea\u662f\u591a\u4e0b\u8f09\u4e00\u500b\u7a0b\u5f0f\u9019\u6c92\u4ec0\u9ebc\u5927\u4e0d\u4e86\u7684\uff0c\u4f46\u4f60\u53ef\u4ee5\u60f3\u5982\u679c\u9019\u500b\u7a0b\u5f0f\u6210\u9577\u5f97\u6108\u4f86\u6108\u5927\uff0c\u6bcf\u4e00\u500b\u984d\u5916\u589e\u9577\u4ee3\u8868\u5728\u521d\u6b21\u8a2a\u554f\u6642\u9700\u4e0b\u8f09\u66f4\u5927\u7684\u6253\u5305\u3002"),(0,r.kt)("p",null,"\u5c31\u7b97\u53ea\u67091\u79d2\u7684\u6642\u9593\u662f\u8db3\u4ee5\u8b93\u4f7f\u7528\u8005\u5206\u5fc3\u4e26\u6709\u53ef\u80fd\u96e2\u958b\u6211\u5011\u7684\u7db2\u7ad9\uff0c\u9019\u662f\u4e0d\u80fd\u5920\u88ab\u63a5\u53d7\u7684\uff01"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"\u95dc\u65bc\u6027\u80fd\u53ca\u4eba\u985e\u611f\u77e5\u7684\u6f14\u8b1b\u6295\u5f71\u7247 (Ilya Grigorik)",src:n(2337).Z,width:"1446",height:"926"})),(0,r.kt)("p",null,"\u5716\uff1a\u95dc\u65bc\u6027\u80fd\u53ca\u4eba\u985e\u611f\u77e5\u7684\u6f14\u8b1b\u6295\u5f71\u7247 (Ilya Grigorik)\n",(0,r.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=7ubJzEi3HuA"},"https://www.youtube.com/watch?v=7ubJzEi3HuA")),(0,r.kt)("p",null,"##\u4f7f\u7528vue-router\u4ee5\u8def\u7531\u70ba\u57fa\u6e96\u7684\u7a0b\u5f0f\u78bc\u5207\u5272"),(0,r.kt)("p",null,"\u70ba\u89e3\u6c7a\u6c7a\u9019\u500b\u60c5\u6cc1 \uff0c\u6211\u5011\u53ea\u9700\u8981\u4f7f\u7528\u524d\u4e00\u7bc7\u6587\u7ae0\u5b78\u5230\u7684import\u8a9e\u6cd5\u3001\u6839\u64da\u6bcf\u500b\u8def\u7531\u4f86\u5207\u5272\u6253\u5305\u3002"),(0,r.kt)("p",null,"\u5c31\u50cfVue.js\u88e1\u5176\u4ed6\u7684\u4efb\u4f55\u6771\u897f \u2013 \u8d85\u7d1a\u7c21\u55ae\u3002\u8981\u53d6\u4ee3\u6389\u76f4\u63a5\u5730import component\u5230\u8def\u7531\u7269\u4ef6\u88e1\uff0c\u6211\u5011\u53ea\u9700\u8981\u8cbc\u4e0a\u52d5\u614bimport\u7684function\u5c31\u53ef\u4ee5\u4e86\u3002Component\u53ea\u6709\u5728\u8def\u7531\u8981\u5c0d\u61c9\u904e\u53bb\u6642\u624d\u6703\u88ab\u4e0b\u8f09\u4e0b\u4f86\u3002"),(0,r.kt)("p",null,"\u6240\u4ee5\u53d6\u4ee3\u50cf\u9019\u6a23\u5b50\u76f4\u63a5\u8f09\u5165\u8def\u7531component\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"import RouteComponent form './RouteComponent.vue'\nconst routes = [\n  { path: /foo', component: RouteComponent }\n]\n")),(0,r.kt)("p",null,"\u6211\u5011\u9700\u8981\u5728\u9019\u500b\u8def\u7531\u4e0a\u7684\u5165\u53e3\u8655\u52a0\u5165\u80fd\u7522\u751f\u65b0\u7684\u6253\u5305\u7684\u52d5\u614bimport\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"const routes = [\n  { path: /foo', component: () => import('./RouteComponent.vue') }\n]\n")),(0,r.kt)("p",null,"\u4f86\u770b\u9019\u500b\u52d5\u614bimport\u7684\u6253\u5305\u548c\u8def\u7531\u9577\u4ec0\u9ebc\u6a23\u5b50\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"app.js \u2013 \u5728\u6bcf\u500b\u8def\u7531\u4e2d\u90fd\u9700\u8981\u7684\u4e3b\u8981\u7684app\u5165\u53e3\u8655\u6253\u5305(main.js)\u53ca\u51fd\u5f0f\u5eab/component\u3002"),(0,r.kt)("li",{parentName:"ul"},"home.js \u2013 \u9996\u9801\u7684\u6253\u5305\uff0c\u53ea\u6709\u5728\u8def\u7531\u9032\u5165\u6642\u624d\u6703\u4e0b\u8f09\u4e0b\u4f86\u3002"),(0,r.kt)("li",{parentName:"ul"},"about.js \u2013 \u300c\u95dc\u65bc\u300d\u9801\u9762\uff08\u53ca\u4ed6\u7684\u4f9d\u8cf4lodash\uff09\uff0c\u53ea\u6709\u5728\u8def\u7531\u9032\u5165\u6642\u624d\u6703\u4e0b\u8f09\u4e0b\u4f86\u3002")),(0,r.kt)("p",null,"*\u6253\u5305\u540d\u7a31\u4e26\u4e0d\u662f\u6234\u6b63\u7531webpack\u7522\u751f\u51fa\u4f86\u7684\u800c\u662f\u70ba\u4e86\u65b9\u4fbf\u7406\u89e3\u800c\u5df2\u3002Webpack\u5be6\u969b\u7522\u751f\u51fa\u4f86\u7684\u540d\u7a31\u6703\u50cf\u662f0js 1.js\uff0c\u8981\u4f9d\u64da\u4f60\u7684webpack config\u8a2d\u5b9a\u800c\u5b9a\u3002"),(0,r.kt)("p",null,"\u9019\u500b\u6280\u5de7\u5c0d\u5e7e\u4e4e\u6240\u6709\u7684\u61c9\u7528\u7a0b\u5f0f\u90fd\u662f\u8db3\u4ee5\u61c9\u4ed8\u3001\u90fd\u80fd\u6709\u975e\u5e38\u597d\u7684\u6548\u679c\u3002"),(0,r.kt)("p",null,"\u57fa\u65bc\u8def\u7531\u7684\u7a0b\u5f0f\u78bc\u5207\u5272\u5728\u8a31\u591a\u5834\u5408\u90fd\u80fd\u5920\u89e3\u6c7a\u6240\u6709\u4f60\u7684\u6548\u80fd\u554f\u984c\uff0c\u5e7e\u4e4e\u6240\u6709\u7684\u61c9\u7528\u7a0b\u5f0f\u90fd\u80fd\u4f7f\u7528\u800c\u4e14\u53ea\u82b1\u4e0d\u5230\u5e7e\u5206\u9418\u7684\u6642\u9593\u5c31\u80fd\u5be6\u4f5c\uff01"),(0,r.kt)("p",null,"##Vue\u751f\u614b\u9ad4\u7cfb\u4e2d\u7684\u7a0b\u5f0f\u78bc\u5207\u5272"),(0,r.kt)("p",null,"\u4f60\u53ef\u80fd\u6703\u4f7f\u7528Nuxt\u6216vue-cli\u4f86\u5efa\u7f6e\u4f60\u7684\u61c9\u7528\u7a0b\u5f0f\u3002\u9019\u7a2e\u60c5\u6cc1\u5c31\u9700\u8981\u77e5\u9053\u9019\u5169\u8005\u95dc\u65bc\u7a0b\u5f0f\u78bc\u5207\u5272\u7684\u81ea\u8a02\u884c\u70ba\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u5728vue-cli 3")," \u6240\u6709\u7684lazy loading\u6a21\u584a\u90fd\u9810\u8a2d\u662f\u9810\u52a0\u8f09(prefetch)\u7684\u3002\u6211\u5011\u7a0d\u5f8c\u6703\u5b78\u7fd2\u9810\u52a0\u8f09\u7684\u4f7f\u7528\u3002\u5982\u679c\u4f60\u5e0c\u671b\u77e5\u9053\u66f4\u591a\u95dc\u65bcvue-cli\u7684\u9810\u52a0\u8f09\u53ef\u4ee5\u53c3\u8003\u9019\u908a\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u5728Nuxt")," \u5982\u679c\u4f7f\u7528Nuxt\u7684\u8def\u7531\u7cfb\u7d71\uff0c\u5247\u6240\u6709\u7684\u9801\u9762\u8def\u7531\u90fd\u662f\u7a0b\u5f0f\u5207\u5272\u7684\u958b\u7bb1\u5373\u7528\u3002")),(0,r.kt)("p",null,"\u73fe\u5728\u4f86\u770b\u770b\u975e\u5e38\u7d66\u529b\u4e14\u5e38\u898b\u7684\u53cd\u5411\u6a21\u5f0f(anti-pattern)\u53ef\u4ee5\u5e36\u7d66\u4f60\u7684\u8def\u7531\u70ba\u57fa\u6e96\u7684\u7a0b\u5f0f\u78bc\u5207\u5272\u66f4\u53b2\u5bb3\u4e00\u4e9b\u3002"),(0,r.kt)("p",null,"##\u51fd\u5f0f\u5eab\u6253\u5305\u53cd\u5411\u6a21\u5f0f"),(0,r.kt)("p",null,"\u51fd\u5f0f\u5eab\u6253\u5305(vendor bundle)\u975e\u5e38\u5e38\u898b\u4f7f\u7528node_modules\u628a\u5168\u90e8\u5404\u81ea\u7368\u7acb\u7684js\u6a94\u6848\u5168\u90e8\u7d0d\u5165\u3002"),(0,r.kt)("p",null,"\u50c5\u7ba1\u9019\u500b\u65b9\u6cd5\u628a\u5168\u90e8\u7684\u4f9d\u8cf4\u653e\u9032\u540c\u4e00\u500b\u5730\u65b9\u5f88\u5438\u5f15\u4eba\uff0c\u4f46\u9019\u4f9d\u7136\u6709\u7d81\u4f4f\u6240\u6709\u8def\u7531\u5728\u4e00\u8d77\u7684\u554f\u984c\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(7016).Z,width:"1470",height:"842"})),(0,r.kt)("p",null,"\u4f60\u770b\u5230\u554f\u984c\u4e86\u55ce\uff1f\u50c5\u7ba1\u6211\u5011\u53ea\u6709\u5728\u5176\u4e2d\u4e00\u500b\u8def\u7531\u7576\u4e2d\u9700\u8981lodash\uff08\u662f\u7576\u4e2d\u7684\u4f9d\u8cf4\uff09\uff0cvendor.js\u7d81\u5b9a\u4e86\u5168\u90e8\u7684\u4f9d\u8cf4\u6240\u4ee5\u7121\u8ad6\u5982\u679c\u4ed6\u4e00\u5b9a\u6703\u88ab\u4e0b\u8f09\u3002"),(0,r.kt)("p",null,"\u5728\u540c\u4e00\u500b\u6a94\u6848\u7d81\u5b9a\u5168\u90e8\u7684\u4f9d\u8cf4\u807d\u8d77\u4f86\u5f88\u8a98\u4eba\u4f46\u4e5f\u6703\u5c0e\u81f4\u4f60\u7684\u61c9\u7528\u7a0b\u5f0f\u6703\u4e00\u6b21\u8b80\u53d6\u5168\u90e8\u7684\u6a94\u6848\u3002\u6211\u5011\u6709\u66f4\u597d\u7684\u65b9\u6cd5\uff01"),(0,r.kt)("p",null,"\u7dad\u6301\u6211\u5011\u525b\u525b\u4f7f\u7528\u57fa\u65bc\u8def\u7531\u7684\u7a0b\u5f0f\u78bc\u5207\u5272\u8db3\u4ee5\u78ba\u4fdd\u53ea\u6709\u9700\u8981\u6642\u624d\u4e0b\u8f09\uff0c\u4f46\u9019\u6703\u5c0e\u81f4\u4e00\u4e9b\u7a0b\u5f0f\u78bc\u7684\u91cd\u8986\u3002"),(0,r.kt)("p",null,"\u6211\u5011\u5047\u8a2dHome.vue\u4e5f\u9700\u8981lodash\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(5451).Z,width:"1600",height:"921"})),(0,r.kt)("p",null,"\u9019\u500b\u60c5\u6cc1\u4e0b\u5f9e /aboug (About.vue) \u5c0e\u5411\u5230 / (Home.vue) \u6703\u5c0e\u81f4lodash\u4e0b\u8f09\u4e86\u5169\u6b21\u3002"),(0,r.kt)("p",null,"\u9019\u4ecd\u7136\u6bd4\u4e0b\u8f09\u4e86\u4e00\u5806\u591a\u9918\u7684\u7a0b\u5f0f\u78bc\u9084\u8981\u4f86\u7684\u597d\uff0c\u4f46\u5982\u679c\u6211\u5011\u5df2\u7d93\u6709\u4e86\u9019\u4e9b\u4f9d\u8cf4\u800c\u4e0d\u91cd\u8986\u5229\u7528\u662f\u5f88\u6c92\u610f\u7fa9\u7684\u6c92\u932f\u5427\uff1f"),(0,r.kt)("p",null,"\u9019\u4e5f\u5c31\u662fwebpack ",(0,r.kt)("a",{parentName:"p",href:"https://webpack.js.org/plugins/split-chunks-plugin/"},"splitChunksPlugin"),"\u4e5f\u4ee5\u5e6b\u52a9\u6211\u5011\u7684\u5730\u65b9\u3002\u53ea\u8981\u5728webpack config\u7576\u4e2d\u589e\u52a0\u5e7e\u884c\uff0c\u6211\u5011\u5c31\u53ef\u4ee5\u628a\u5206\u6563\u7684\u6253\u5305\u4e2d\u5e38\u7528\u7684\u4f9d\u8cf4\u7d66\u805a\u8d77\u4f86\uff0c\u4f7f\u4ed6\u5011\u53ef\u4ee5\u88ab\u5206\u4eab\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"// webpack.config.js\noptimization: {\n  splitChunks: {\n    chunks: 'all'\n  }\n}\n")),(0,r.kt)("p",null,"\u5728\u6a21\u584a\u7684\u5c6c\u6027\u4e2d\u6211\u5011\u53ea\u8981\u544a\u8a34webpack\u54ea\u500b\u6a21\u584a\u7a0b\u5f0f\u61c9\u8a72\u88ab\u512a\u5316\u3002\u8a2d\u5b9a\u9019\u500b\u5c6c\u6027\u70baall\u8868\u793a\u4ed6\u61c9\u8a72\u512a\u5316\u6240\u6709\u7684\u6a21\u584a\u3002"),(0,r.kt)("p",null,"\u4f60\u53ef\u4ee5\u95b1\u8b80\u66f4\u591a\u76f8\u95dc\u7684\u8655\u7406 ",(0,r.kt)("a",{parentName:"p",href:"https://webpack.js.org/guides/code-splitting/#prevent-duplication"},"webpack docs")),(0,r.kt)("h2",{id:"\u7d50\u8a9e"},"\u7d50\u8a9e"),(0,r.kt)("p",null,"\u900f\u904e\u8def\u7531\u5207\u5272\u4f60\u7684\u7a0b\u5f0f\u662f\u5176\u4e2d\u4e4b\u4e00\u6700\u68d2\uff08\u4e5f\u6700\u7c21\u55ae\uff09\u7684\u65b9\u6cd5\u4f86\u7dad\u6301\u521d\u59cb\u4e0b\u8f09\u6253\u5305\u5c0f\u7684\u5bb9\u91cf\u3002\u4e0b\u4e00\u500b\u90e8\u4efd\u6211\u5011\u6703\u5b78\u7fd2\u95dc\u65bc\u5176\u4ed6\u8f03\u7d30\u7684\u90e8\u4efd\uff08Vuex stores\u4ee5\u53ca\u7368\u7acb\u7684component\uff09\uff0c\u5f9e\u4e3b\u8981\u7684\u6253\u5305\u4e2d\u780d\u6389\u4e26\u5ef6\u9072\u8f09\u5165\u3002"))}c.isMDXComponent=!0},6418:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/20191224_5-fe8d4e007840b8e0469839f4a293665a.png"},1190:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/20191224_6-7bb1db70f51729375629d561fe21eb29.png"},2337:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/20191224_7-ba46381c3be9bf51fc0d67c2bef25de6.png"},7016:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/20191224_8-972475c7dc7f88c38019f75e373e310c.png"},5451:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/20191224_9-b90fac8c99673b336dcc7ae3b5f70c3c.png"}}]);