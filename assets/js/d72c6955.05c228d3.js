"use strict";(self.webpackChunkupstairs_0102_github_io=self.webpackChunkupstairs_0102_github_io||[]).push([[8050],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>c});var u=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);t&&(u=u.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,u)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,u,o=function(e,t){if(null==e)return{};var n,u,o={},r=Object.keys(e);for(u=0;u<r.length;u++)n=r[u],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(u=0;u<r.length;u++)n=r[u],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var a=u.createContext({}),A=function(e){var t=u.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=A(e.components);return u.createElement(a.Provider,{value:t},e.children)},m="mdxType",i={inlineCode:"code",wrapper:function(e){var t=e.children;return u.createElement(u.Fragment,{},t)}},p=u.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,a=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),m=A(n),p=o,c=m["".concat(a,".").concat(p)]||m[p]||i[p]||r;return n?u.createElement(c,l(l({ref:t},s),{},{components:n})):u.createElement(c,l({ref:t},s))}));function c(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=p;var d={};for(var a in t)hasOwnProperty.call(t,a)&&(d[a]=t[a]);d.originalType=e,d[m]="string"==typeof e?e:o,l[1]=d;for(var A=2;A<r;A++)l[A]=n[A];return u.createElement.apply(null,l)}return u.createElement.apply(null,n)}p.displayName="MDXCreateElement"},7244:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>l,default:()=>m,frontMatter:()=>r,metadata:()=>d,toc:()=>A});var u=n(87462),o=(n(67294),n(3905));const r={slug:"2019/12/24/vue-optimization3",title:"(\u8b6f)Vue.js App\u6548\u80fd\u512a\u5316: part3 \u2013 Lazy loading Vuex modules",authors:"thunderboy",tags:["vue","javascript"]},l=void 0,d={permalink:"/blog/2019/12/24/vue-optimization3",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2019/2019-12-24-(\u8b6f)Vue.js App\u6548\u80fd\u512a\u5316: part3 \u2013 Lazy loading Vuex modules.md",source:"@site/blog/2019/2019-12-24-(\u8b6f)Vue.js App\u6548\u80fd\u512a\u5316: part3 \u2013 Lazy loading Vuex modules.md",title:"(\u8b6f)Vue.js App\u6548\u80fd\u512a\u5316: part3 \u2013 Lazy loading Vuex modules",description:"\u5728\u524d\u4e00\u500b\u90e8\u4efd\u6211\u5011\u5b78\u5230\u53ef\u4ee5\u5927\u5e45\u5ea6\u6539\u5584\u4f60\u7684\u61c9\u7528\u7a0b\u5f0f\u6548\u80fd\u7684\u6a21\u5f0f \u2013 \u900f\u904e\u8def\u7531\u4f86\u5207\u5272\u7a0b\u5f0f\u78bc\u3002\u50c5\u7ba1\u900f\u904e\u8def\u7531\u5207\u5272\u7a0b\u5f0f\u78bc\u662f\u975e\u5e38\u6709\u5e6b\u52a9\u7684\u4f46\u4ecd\u7136\u6709\u5f88\u591a\u7a0b\u5f0f\u662f\u4f7f\u7528\u8005\u525b\u9032\u53bb\u7db2\u7ad9\u6642\u4f7f\u7528\u4e0d\u5230\u7684\u3002\u5728\u672c\u7bc7\u6211\u5011\u5c07\u5c08\u6ce8\u5728\u6211\u5011\u7684\u72c0\u614b\u7ba1\u7406\u7684\u7a0b\u5f0f\u78bc\u5207\u5272 \u2013 Vuex modules\u3002",date:"2019-12-24T00:00:00.000Z",formattedDate:"December 24, 2019",tags:[{label:"vue",permalink:"/blog/tags/vue"},{label:"javascript",permalink:"/blog/tags/javascript"}],readingTime:8.775,hasTruncateMarker:!0,authors:[{name:"Adam You",title:"Engineer @ Blueplanet Inc.",url:"https://github.com/upstairs0102",imageURL:"/img/avatar.jpeg",key:"thunderboy"}],frontMatter:{slug:"2019/12/24/vue-optimization3",title:"(\u8b6f)Vue.js App\u6548\u80fd\u512a\u5316: part3 \u2013 Lazy loading Vuex modules",authors:"thunderboy",tags:["vue","javascript"]},prevItem:{title:"(\u8b6f)Vue.js App\u6548\u80fd\u512a\u5316: part2 \u2013 Lazy loading\u8def\u7531\u53ca\u7b2c\u4e09\u65b9\u5eab\u6253\u5305\u53cd\u5411\u6a21\u5f0f(anti-pattern)",permalink:"/blog/2019/12/24/vue-optimization2"},nextItem:{title:"\u5f9eD3.js\u7684select(this)\u63a2\u8a0e\u7684\u51fd\u5f0f\u4e2d\u7684this\u6307\u5411",permalink:"/blog/2019/12/22/d3js-select-this"}},a={authorsImageUrls:[void 0]},A=[{value:"\u5169\u7a2eVuex modules\u7684\u985e\u578b",id:"\u5169\u7a2evuex-modules\u7684\u985e\u578b",level:2},{value:"\u6b63\u78ba\u5730\u5207\u5272Vuex module\u7a0b\u5f0f\u78bc",id:"\u6b63\u78ba\u5730\u5207\u5272vuex-module\u7a0b\u5f0f\u78bc",level:2},{value:"Lazy loading Vuex modules",id:"lazy-loading-vuex-modules",level:2},{value:"\u7e3d\u7d50",id:"\u7e3d\u7d50",level:2}],s={toc:A};function m(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,u.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u5728\u524d\u4e00\u500b\u90e8\u4efd\u6211\u5011\u5b78\u5230\u53ef\u4ee5\u5927\u5e45\u5ea6\u6539\u5584\u4f60\u7684\u61c9\u7528\u7a0b\u5f0f\u6548\u80fd\u7684\u6a21\u5f0f \u2013 \u900f\u904e\u8def\u7531\u4f86\u5207\u5272\u7a0b\u5f0f\u78bc\u3002\u50c5\u7ba1\u900f\u904e\u8def\u7531\u5207\u5272\u7a0b\u5f0f\u78bc\u662f\u975e\u5e38\u6709\u5e6b\u52a9\u7684\u4f46\u4ecd\u7136\u6709\u5f88\u591a\u7a0b\u5f0f\u662f\u4f7f\u7528\u8005\u525b\u9032\u53bb\u7db2\u7ad9\u6642\u4f7f\u7528\u4e0d\u5230\u7684\u3002\u5728\u672c\u7bc7\u6211\u5011\u5c07\u5c08\u6ce8\u5728\u6211\u5011\u7684\u72c0\u614b\u7ba1\u7406\u7684\u7a0b\u5f0f\u78bc\u5207\u5272 \u2013 Vuex modules\u3002"),(0,o.kt)("p",null,"\u9019\u500b\u7cfb\u5217\u662f\u57fa\u65bc\u5f9eVue Storefront\u7684\u6548\u80fd\u512a\u5316\u8655\u7406\u4e2d\u6240\u5b78\u5230\u7684\u3002\u900f\u904e\u4ee5\u4e0b\u7684\u6280\u8853\u6211\u5011\u53ef\u4ee5\u780d\u6389\u6211\u5011\u6700\u521d\u7684\u6253\u5305\u768470%\uff0c\u4f7f\u4ed6\u8f09\u5165\u5728\u4e00\u7728\u9593\u5c31\u5b8c\u6210\u3002"),(0,o.kt)("h2",{id:"\u5169\u7a2evuex-modules\u7684\u985e\u578b"},"\u5169\u7a2eVuex modules\u7684\u985e\u578b"),(0,o.kt)("p",null,"\u5728\u6211\u5011\u7e7c\u7e8c\u5f80\u4e0b\u770bVuex modules\u7684lazy loading\u4e4b\u524d\uff0c\u9019\u88e1\u6709\u4e00\u4ef6\u5f88\u91cd\u8981\u7684\u4e8b\u4f60\u9700\u8981\u6ce8\u610f\u7684\u3002\u4f60\u9700\u8981\u4e86\u89e3\u6709\u54ea\u4e9b\u53ef\u4ee5\u6ce8\u518aVuex modules\u7684\u65b9\u6cd5\u4ee5\u53ca\u4ed6\u5011\u7684\u512a\u7f3a\u9ede\u3002"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u975c\u614bVuex modules"),"\u5728store\u521d\u59cb\u5316\u6642\u5c31\u5ba3\u544a\u4e86\u3002\u4ee5\u4e0b\u662f\u500b\u660e\u78ba\u7684\u5efa\u7f6e\u975c\u614b\u6a21\u7d44\u7684\u7bc4\u4f8b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"// store.js\nimport { userAccountModule } from './modules/userAccount'\nconst store = new Vuex.Store({\n  modules: {\n    user: userAccountModule\n  }\n})\n")),(0,o.kt)("p",null,"\u4e0a\u9762\u7684\u7a0b\u5f0f\u78bc\u6703new\u4e00\u500b\u65b0\u7684Vuex Store\u4ee5\u53ca\u975c\u614b\u6a21\u7d44userAccountModule\u3002\u975c\u614b\u6a21\u7d44\u4e0d\u80fd\u88ab\u53d6\u6d88\u8a3b\u518a\uff08\u4e26\u4e14\u4e0d\u80fd\u88ab\u5ef6\u9072\u8a3b\u518a\uff09\u4ee5\u53ca\u4ed6\u5011\u7684\u67b6\u69cb\uff08\u9019\u662f\u4e0d\u662f\u6307state\uff09\u5728\u521d\u59cb\u5316\u5f8c\u4e0d\u80fd\u88ab\u6539\u8b8a\u3002"),(0,o.kt)("p",null,"\u50c5\u7ba1\u9019\u500b\u9650\u5236\u5c0d\u65bc\u5927\u90e8\u4efd\u7684module\u4f86\u8aaa\u4e0d\u6703\u662f\u500b\u554f\u984c\uff0c\u4e26\u4e14\u628a\u5168\u90e8\u7684modules\u5ba3\u544a\u5728\u540c\u4e00\u500b\u5730\u65b9\u5c0d\u65bc\u8b93\u8cc7\u6599\u7684\u95dc\u806f\u5728\u540c\u4e00\u500b\u5730\u65b9\u7dad\u6301\u4e00\u81f4\u662f\u5f88\u597d\u7528\u7684\uff0c\u4f46\u9019\u500b\u65b9\u6cd5\u9084\u662f\u6709\u4e9b\u7f3a\u9ede\u3002"),(0,o.kt)("p",null,"\u5047\u8a2d\u6211\u5011\u7684\u61c9\u7528\u7a0b\u5f0f\u88e1\u6709\u4e00\u500b\u7ba1\u7406\u8005\u5100\u8868\u677f\u4ee5\u53ca\u5b83\u5c08\u7528\u7684Vuex module\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"// store.js\nimport { userAccountModule } from './modules/userAccount'\nimport { adminModule } from './modules/admin'\nconst store = new Vuex.Store({\n  modules: {\n    user: userAccountModule, \n    admin: adminModule\n  }\n})\n")),(0,o.kt)("p",null,"\u4f60\u53ef\u4ee5\u60f3\u50cf\u9019\u6a23\u5b50\u7684module\u53ef\u4ee5\u662f\u975e\u5e38\u5927\u7684\u3002\u5373\u4f7f\u5100\u8868\u677f\u53ea\u6709\u9650\u65bc\u4e00\u90e8\u4efd\u7684\u4f7f\u7528\u8005\u4f7f\u7528\uff08\u4e5f\u53ef\u60f3\u6210\u53ea\u5728\u7279\u5b9a\u7684/admin\u8def\u7531\uff09\uff0c\u7531\u65bc\u7d71\u4e00\u8a3b\u518a\u4e86\u975c\u614bVuex module\u5b83\u6240\u6709\u7684\u7a0b\u5f0f\u78bc\u9084\u662f\u6703\u5728\u4e3b\u8981\u7684\u6253\u5305\u7a0b\u5f0f\u7576\u4e2d\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(33746).Z,width:"1418",height:"882"})),(0,o.kt)("p",null,"\u9019\u500b\u60c5\u6cc1\u7576\u7136\u4e0d\u662f\u6211\u5011\u6240\u8981\u7684\u7d50\u679c\uff0c\u6211\u5011\u9700\u8981\u4e00\u500b\u65b9\u6cd5\u53ea\u5728/admin\u8def\u7531\u7576\u4e2d\u8b80\u53d6\u5b83\u3002\u4f60\u53ef\u80fd\u5df2\u7d93\u731c\u5230\u975c\u614bmodule\u4e0d\u80fd\u6eff\u8db3\u6211\u5011\u7684\u9700\u6c42\uff0c\u5168\u90e8\u7684\u975c\u614bmodule\u5fc5\u9808\u5728Vuex Store\u88ab\u5efa\u7f6e\u6642\u88ab\u8a3b\u518a\u3001\u56e0\u6b64\u7121\u6cd5\u5ef6\u5f8c\u8a3b\u518a\u7684\u6642\u6a5f\u3002"),(0,o.kt)("p",null,"\u9019\u4e5f\u5c31\u662f\u52d5\u614bmodule\u5e6b\u7684\u4e0a\u5fd9\u7684\u5730\u65b9\uff01"),(0,o.kt)("p",null,"\u52d5\u614bmodule\u548c\u975c\u614b\u7684\u76f8\u53cd\uff0c\u5b83\u53ef\u4ee5\u5728Vuex store\u5275\u5efa\u4e4b\u5f8c\u624d\u8a3b\u518a\u3002\u9019\u500b\u8070\u660e\u7684\u7279\u6027\u6697\u793a\u6211\u5011\u4e0d\u9700\u8981\u5728\u61c9\u7528\u7a0b\u5f0f\u521d\u59cb\u5316\u6642\u505a\u52d5\u614b\u8f09\u5165\uff0c\u53ef\u4ee5\u6253\u5305\u6210\u4e0d\u540c\u7684\u6a21\u584a\u6216\u5728\u9700\u8981\u7684\u6642\u5019\u624d\u5ef6\u9072\u8f09\u5165\u3002"),(0,o.kt)("p",null,"\u9996\u5148\uff0c\u6211\u5011\u4f86\u770b\u524d\u9762\u6240\u8aaa\u7684\u52d5\u614b\u8a3b\u518aadmin module\u6703\u9577\u4ec0\u9ebc\u6a23\u5b50\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"// store.js\nimport { userAccountModule } from './modules/userAccount'\nimport { adminModule } from './modules/admin'\nconst store = new Vuex.Store({\n  modules: {\n    user: userAccountModule, \n  }\n})\nstore.registerModule('admin', adminModule)\n")),(0,o.kt)("p",null,"\u53d6\u4ee3\u76f4\u63a5\u628aadminModule\u7269\u4ef6\u76f4\u63a5\u653e\u5165store\u88e1\u7684property\uff0c\u6211\u5011\u5728store\u5efa\u7f6e\u51fa\u4f86\u5f8c\u4f7f\u7528registerModule\u65b9\u6cd5\u8a3b\u518a\u5b83\u3002"),(0,o.kt)("p",null,"\u52d5\u614b\u8a3b\u518a\u4e26\u4e0d\u9700\u8981\u66f4\u6539module\u672c\u8eab\uff0c\u6240\u4ee5\u6240\u6709\u7684Vuex module\u90fd\u53ef\u4ee5\u76f4\u63a5\u8a3b\u518a\u6216\u52d5\u614b\u7684\u8a3b\u518a\u3002"),(0,o.kt)("p",null,"\u7576\u7136\uff0c\u4ee5\u76ee\u524d\u9019\u500b\u5beb\u6cd5\u4f86\u8aaa\u52d5\u614b\u8a3b\u518amodule\u6c92\u6709\u7d66\u6211\u5011\u4efb\u4f55\u512a\u52e2\u3002"),(0,o.kt)("h2",{id:"\u6b63\u78ba\u5730\u5207\u5272vuex-module\u7a0b\u5f0f\u78bc"},"\u6b63\u78ba\u5730\u5207\u5272Vuex module\u7a0b\u5f0f\u78bc"),(0,o.kt)("p",null,"\u5ef6\u7e8c\u524d\u9762\u7684\u8a0e\u8ad6\uff0c\u73fe\u5728\u6211\u5011\u77e5\u9053\u5982\u4f55\u52d5\u614b\u5730\u8a3b\u518aadmin module\u3001\u6240\u4ee5\u6211\u5011\u7576\u7136\u53ef\u4ee5\u8a66\u8457\u628a\u5b83\u653e\u5165/admin\u8def\u7531\u7684\u7d81\u5b9a\u3002"),(0,o.kt)("p",null,"\u6211\u5011\u66ab\u4e14\u505c\u4e00\u4e0b\uff0c\u4f86\u7c21\u55ae\u7406\u89e3\u4e00\u4e0b\u6211\u5011\u7684\u61c9\u7528\u7a0b\u5f0f\u7684\u904b\u4f5c\u65b9\u5f0f\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(83631).Z,width:"928",height:"575"})),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"// router.js\nimport VueRouter from 'vue-router'\nconst Home = () => import('./Home.vue')\nconst Admin = () => import('./Admin.vue')\nconst routes = [\n  { path: '/', component: Home },\n  { path: '/admin', component: Admin }\n]\nexport const router = new VueRouter({ routes }) \n")),(0,o.kt)("p",null,"\u6211\u5011\u4f86\u77a7\u77a7\u9019\u88e1\u505a\u4e86\u4ec0\u9ebc\uff01"),(0,o.kt)("p",null,"\u6211\u5011\u5728Admin.vue(\u8def\u7531/admin)\u7684mounted\u88e1import\u4e26\u8a3b\u518aadmin store\u3002\u7a0d\u5f8c\u7a0b\u5f0f\u88e1\u6211\u5011\u6703\u5728\u4f7f\u7528\u8005\u96e2\u958b\u7684\u6642\u5019\u628amodule\u7d66\u53d6\u6d88\u8a3b\u518a\uff0c\u4ee5\u907f\u514d\u540c\u6a23\u7684module\u88ab\u91cd\u8986\u8a3b\u518a\u3002"),(0,o.kt)("p",null,"\u73fe\u5728\u56e0\u70baadmin module\u88abimport\u5230Admin.vue\u88e1\u53d6\u4ee3\u539f\u672c\u7684store.js\uff0c\u5b83\u73fe\u5728\u548c\u7a0b\u5f0f\u5207\u5272\u4e86\u7684Admin.vue\u7d81\u5b9a\u5728\u4e00\u8d77\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(33268).Z,width:"911",height:"577"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"\u91cd\u8981\u6ce8\u610f\uff1a"),"\u5982\u679c\u4f60\u4f7f\u7528SSR\u6a21\u5f0f\u8acb\u78ba\u4fdd\u4f60\u628a\u8a3b\u518amodule\u653e\u5728mounted\u88e1\uff0c\u5426\u5247\u7684\u8a71\u7576beforeDestory\u920e\u5b50\u6c92\u8a2d\u597d\u53ef\u80fd\u6703\u5c0e\u81f4memory leak\u3002")),(0,o.kt)("p",null,"\u73fe\u5728\u6211\u5011\u77e5\u9053\u5982\u4f55\u4f7f\u7528\u52d5\u614bVuex module\u8a3b\u518a\uff0c\u4f86\u5206\u958b\u6211\u5011\u7279\u5b9a\u8def\u7531\u7684module\u5230\u9069\u7576\u7684\u6253\u5305\u4e2d\u3002\u6211\u5011\u4f86\u770b\u770b\u7a0d\u5fae\u8907\u96dc\u4e00\u9ede\u7684\u4f7f\u7528\u65b9\u5f0f\u3002"),(0,o.kt)("h2",{id:"lazy-loading-vuex-modules"},"Lazy loading Vuex modules"),(0,o.kt)("p",null,"\u5047\u8a2d\u6211\u5011\u6709\u7684Home.vue\u6709\u4e00\u500b\u63a8\u85a6\u5340\u584a\uff0c\u6211\u5011\u5e0c\u671b\u80fd\u5c55\u793a\u95dc\u65bc\u6211\u5011\u670d\u52d9\u7684\u6b63\u9762\u610f\u898b\u3002\u56e0\u70ba\u6578\u91cf\u6703\u5f88\u591a\u6240\u4ee5\u6211\u5011\u4e0d\u9700\u8981\u5728\u4f7f\u7528\u8005\u9032\u5165\u5f8c\u5c31\u99ac\u4e0a\u5448\u73fe\uff0c\u6bd4\u8f03\u597d\u7684\u5c55\u793a\u65b9\u5f0f\u662f\u7576\u4f7f\u7528\u8005\u770b\u7684\u6642\u5019\u3002\u6211\u5011\u53ef\u4ee5\u589e\u52a0\u4e00\u500b\u201d\u6aa2\u8996\u63a8\u85a6\u201d\u6309\u9215\u7576\u9ede\u64ca\u6642\u6211\u5011\u624d\u628a\u63a8\u85a6\u5167\u5bb9\u7d66\u5448\u73fe\u51fa\u4f86\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(29702).Z,width:"1183",height:"88"})),(0,o.kt)("p",null,"\u70ba\u5132\u5b58\u63a8\u85a6\u8cc7\u6599\u6211\u5011\u9700\u8981\u518d\u4e00\u500bVuex module\u547d\u540d\u70batestimonials\u3002\u9019\u500bmodule\u8ca0\u8cac\u5448\u73fe\u524d\u4e00\u500b\u52a0\u5165\u7684\u63a8\u85a6\u4e26\u65b0\u589e\u4e00\u500b\u65b0\u7684\uff0c\u6211\u5011\u4e0d\u9700\u8981\u77e5\u9053\u95dc\u65bc\u5b83\u5be6\u4f5c\u7684\u7d30\u7bc0\u3002"),(0,o.kt)("p",null,"\u6211\u5011\u5e0c\u671btestimonials module\u53ea\u6709\u5728\u4f7f\u7528\u8005\u9ede\u64ca\u6309\u9215\u7684\u6642\u5019\u4e0b\u8f09\uff0c\u56e0\u70ba\u5728\u9019\u4e4b\u524d\u4e26\u4e0d\u9700\u8981\u5b83\u3002\u6211\u5011\u4f86\u770b\u9019\u500b\u52d5\u614bimport\u53ca\u8a3b\u518amodule\u7684\u529f\u80fd\u8a72\u5982\u4f55\u5be6\u73fe\u3002Testimonials.vue\u662fHome.vue\u88e1\u7684\u4e00\u500b\u5b50component\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(30336).Z,width:"1502",height:"1314"})),(0,o.kt)("p",null,"![](\u6211\u5011\u4f86\u5feb\u901f\u6aa2\u8996\u4e00\u4e0b\u7a0b\u5f0f\u78bc\u3002"),(0,o.kt)("p",null,"\u7576\u4f7f\u7528\u8005\u9ede\u64ca\u300c\u6aa2\u8996\u63a8\u85a6\u300d\u6309\u9215\u6642\u547c\u53ebgetTestimonials()\u65b9\u6cd5\uff0cgetTestimonialsModule()\u8ca0\u8cac\u53d6\u5f97testimonials.js\u3002\u7576promise\u88abresolved\uff08\u4ee3\u8868module\u88ab\u8b80\u53d6\uff09\u6211\u5011\u52d5\u614b\u5730\u8a3b\u518a\u5b83\u4e26dispatch action\u4f86\u53d6\u5f97\u63a8\u85a6\u5167\u5bb9\u3002"),(0,o.kt)("p",null,"\u611f\u8b1d\u52d5\u614bimport\uff0ctestimonial.js\u7684\u5167\u5bb9\u88ab\u7d81\u5b9a\u5230\u5206\u958b\u7684\u6a94\u6848\u4e2d\uff0c\u53ea\u6709\u7576getTestimonialsModule\u65b9\u6cd5\u88ab\u547c\u53eb\u6642\u624d\u6703\u88ab\u4e0b\u8f09\u3002)"),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(12776).Z,width:"1600",height:"817"})),(0,o.kt)("p",null,"\u7576\u6211\u5011\u9700\u8981\u96e2\u958b\u7ba1\u7406\u8005\u5e73\u53f0\uff0c\u6211\u5011\u5728\u525b\u624d\u7684beforeDestory\u751f\u547d\u9031\u671f\u9264\u5b50\u88e1\u6709\u53d6\u6d88\u8a3b\u518a\uff0c\u6240\u4ee5\u5982\u679c\u6211\u5011\u8981\u518d\u6b21\u9032\u5165\u8def\u7531\u5b83\u4e0d\u6703\u88ab\u91cd\u8986\u3002"),(0,o.kt)("h2",{id:"\u7e3d\u7d50"},"\u7e3d\u7d50"),(0,o.kt)("p",null,"\u50c5\u7ba1\u7406\u975c\u614bVuex module\u8a3b\u518a\u8db3\u4ee5\u61c9\u4ed8\u5927\u90e8\u4efd\u7684\u4f7f\u7528\u60c5\u6cc1\uff0c\u9084\u662f\u6709\u4e9b\u7279\u5b9a\u60c5\u6cc1\u6211\u5011\u9084\u662f\u9700\u8981\u52d5\u614b\u8a3b\u518a\u3002"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"\u5982\u679c\u53ea\u6709\u5728\u7279\u5b9a\u8def\u7531\u9700\u8981module"),"\uff0c\u90a3\u6211\u5011\u53ef\u4ee5\u5728\u7279\u5b9a\u7684\u8def\u7531component\u88e1\u52d5\u614b\u7684\u8a3b\u518a\uff0c\u6240\u4ee5\u4e0d\u6703\u51fa\u73fe\u5728\u4e3b\u8981\u7684\u6253\u5305\u7576\u4e2d\u3002"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"\u5982\u679c\u53ea\u6709\u5728\u7279\u5b9a\u7684\u4e92\u52d5\u9700\u8981module"),"\uff0c\u90a3\u6211\u5011\u9700\u8981\u5728\u7279\u5b9a\u7684\u65b9\u6cd5\u4e2d\u5408\u4f75\u52d5\u614b\u8a3b\u518amodule\u548c\u52d5\u614bimport\u3001\u5ef6\u9072\u8f09\u5165\u3002")),(0,o.kt)("p",null,"\u5207\u5272Vuex module\u7a0b\u5f0f\u78bc\u662f\u4e00\u500b\u5f37\u800c\u6709\u529b\u7684\u5de5\u5177\u3002\u5728\u61c9\u7528\u7a0b\u5f0f\u88e1\u8655\u7406\u5f97\u6108\u591a\u8cc7\u6599\u76f8\u95dc\u7684\u64cd\u4f5c\uff0c\u8868\u793a\u80fd\u7bc0\u7701\u6108\u591a\u7684\u6253\u5305\u5bb9\u91cf\u3002"),(0,o.kt)("p",null,"\u5728\u4e0b\u4e00\u7bc7\u6211\u5011\u5c07\u5b78\u7fd2\u5982\u4f55\u5ef6\u9072\u8f09\u5165\u7368\u7acb\u7684component\uff0c\u4ee5\u53ca\u66f4\u91cd\u8981\u7684\u662f\u54ea\u500bcomponent\u61c9\u8a72\u88ab\u5ef6\u9072\u8f09\u5165\u3002"))}m.isMDXComponent=!0},33746:(e,t,n)=>{n.d(t,{Z:()=>u});const u=n.p+"assets/images/20191224_10-0ef46651f88b430775940e517dac5706.png"},83631:(e,t,n)=>{n.d(t,{Z:()=>u});const u=n.p+"assets/images/20191224_11-3d3c1112f3240dc7c4bd8a559034f990.png"},33268:(e,t,n)=>{n.d(t,{Z:()=>u});const u=n.p+"assets/images/20191224_12-a54ade4f419347f78b032be8e5132b93.png"},30336:(e,t,n)=>{n.d(t,{Z:()=>u});const u=n.p+"assets/images/20191224_13-1e344ac6eee17858ebfe44c291e27a2c.png"},12776:(e,t,n)=>{n.d(t,{Z:()=>u});const u=n.p+"assets/images/20191224_14-d732690f37c31f176750bca8ddb70cc7.png"},29702:(e,t,n)=>{n.d(t,{Z:()=>u});const u="data:image/png;base64,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"}}]);