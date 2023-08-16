"use strict";(self.webpackChunkupstairs_0102_github_io=self.webpackChunkupstairs_0102_github_io||[]).push([[9502],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>v});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},c=Object.keys(e);for(a=0;a<c.length;a++)r=c[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)r=c[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),u=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=u(r),f=n,v=p["".concat(l,".").concat(f)]||p[f]||m[f]||c;return r?a.createElement(v,o(o({ref:t},s),{},{components:r})):a.createElement(v,o({ref:t},s))}));function v(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,o=new Array(c);o[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:n,o[1]=i;for(var u=2;u<c;u++)o[u]=r[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},8486:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>c,metadata:()=>i,toc:()=>u});var a=r(7462),n=(r(7294),r(3905));const c={slug:"2021/12/14/difference-between-vue-and-react",title:"Vue & React\u5dee\u7570\u89c0\u5bdf",authors:"thunderboy",tags:["vue","react"]},o=void 0,i={permalink:"/blog/2021/12/14/difference-between-vue-and-react",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2021/2021-12-14-difference-between-vue-and-react.md",source:"@site/blog/2021/2021-12-14-difference-between-vue-and-react.md",title:"Vue & React\u5dee\u7570\u89c0\u5bdf",description:"\u4ee5\u524d\u5e6b\u516c\u53f8\u5354\u52a9\u9762\u8a66\u904e\u65b0\u4eba\uff0c\u65e9\u671f\u6211\u5011\u5728\u8077\u7f3a\u689d\u4ef6\u4e0a\u6c92\u6709\u7279\u5225\u5217\u51fa\u9700\u8981\u6709\u4ec0\u9ebc\u524d\u7aef\u6846\u67b6\u7684\u7d93\u9a57\uff0c\u6240\u4ee5\u66fe\u7d93\u6709\u9047\u904e\u80cc\u666f\u662f react\u7684\u53d7\u8a66\u8005\u554f\u8aaa\uff0c\u70ba\u4ec0\u9ebc\u6211\u5011\u662f\u9078\u64c7\u6846\u67b6\u7684\u6642\u5019\u662f vue\u800c\u4e0d\u662f react\uff0c\u7576\u6642\u6211\u5c31\u5df2\u7d93\u80fd\u5920\u5f88\u6e05\u695a\u5f97\u56de\u7b54\u9019\u500b\u554f\u984c\u4e86\uff0c\u4e0d\u904e\u6700\u8fd1\u6211\u5c0d react\u7684\u4e86\u89e3\u6709\u66f4\u52a0\u6df1\u5165\u4e86\u4e4b\u5f8c\uff0c\u6211\u5c0d\u9019\u6709\u4e86\u4e00\u4e9b\u65b0\u7684\u60f3\u6cd5\u2026",date:"2021-12-14T00:00:00.000Z",formattedDate:"December 14, 2021",tags:[{label:"vue",permalink:"/blog/tags/vue"},{label:"react",permalink:"/blog/tags/react"}],readingTime:7.255,hasTruncateMarker:!0,authors:[{name:"Adam You",title:"Engineer @ Blueplanet Inc.",url:"https://github.com/upstairs0102",imageURL:"/img/avatar.jpeg",key:"thunderboy"}],frontMatter:{slug:"2021/12/14/difference-between-vue-and-react",title:"Vue & React\u5dee\u7570\u89c0\u5bdf",authors:"thunderboy",tags:["vue","react"]},prevItem:{title:"xlsx-js-style \u524d\u7aef\u532f\u51fa\u81ea\u8a02\u6a23\u5f0fExcel\u6a94",permalink:"/blog/2022/12/07/xlsx-js-style"},nextItem:{title:"\u7011\u5e03\u6216\u654f\u6377\u958b\u767c\u7684\u9078\u64c7\uff1f\u4e09\u773c\u602aPodcast\u7b46\u8a18",permalink:"/blog/2021/12/14/scrum-and-waterfall"}},l={authorsImageUrls:[void 0]},u=[],s={toc:u};function p(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"\u4ee5\u524d\u5e6b\u516c\u53f8\u5354\u52a9\u9762\u8a66\u904e\u65b0\u4eba\uff0c\u65e9\u671f\u6211\u5011\u5728\u8077\u7f3a\u689d\u4ef6\u4e0a\u6c92\u6709\u7279\u5225\u5217\u51fa\u9700\u8981\u6709\u4ec0\u9ebc\u524d\u7aef\u6846\u67b6\u7684\u7d93\u9a57\uff0c\u6240\u4ee5\u66fe\u7d93\u6709\u9047\u904e\u80cc\u666f\u662f react\u7684\u53d7\u8a66\u8005\u554f\u8aaa\uff0c\u70ba\u4ec0\u9ebc\u6211\u5011\u662f\u9078\u64c7\u6846\u67b6\u7684\u6642\u5019\u662f vue\u800c\u4e0d\u662f react\uff0c\u7576\u6642\u6211\u5c31\u5df2\u7d93\u80fd\u5920\u5f88\u6e05\u695a\u5f97\u56de\u7b54\u9019\u500b\u554f\u984c\u4e86\uff0c\u4e0d\u904e\u6700\u8fd1\u6211\u5c0d react\u7684\u4e86\u89e3\u6709\u66f4\u52a0\u6df1\u5165\u4e86\u4e4b\u5f8c\uff0c\u6211\u5c0d\u9019\u6709\u4e86\u4e00\u4e9b\u65b0\u7684\u60f3\u6cd5\u2026 "),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u6700\u5927\u7684\u5dee\u7570\u5c31\u662f\u601d\u8003\u908f\u8f2f\u548c design pattern\u7684\u4e0d\u540c\uff0c\u7c21\u55ae\u5340\u5206 react\u6bd4\u8f03\u591a functional programing\uff0cvue \u6bd4\u8f03\u591a observer pattern\u3002\u5f88\u591a\u4eba\u8aaa react\u66f4\u81ea\u7531\u3001vue\u66f4\u7c21\u55ae\uff0c\u4f46\u5c31\u6211\u7684\u611f\u89ba\u81ea\u5f9e vue3\u63a8\u51fa\u4ee5\u5f8c\u4ee5\u53ca react\u589e\u52a0 hooks\u529f\u80fd\u4ee5\u5f8c\uff0c\u5169\u8005\u5176\u5be6\u6108\u4f86\u6108\u50cf\u4e86\uff0c\u5be6\u52d9\u4e0a\u6211\u5e7e\u4e4e\u9084\u6c92\u9047\u904e\u4ec0\u9ebc react\u505a\u7684\u5230\u4f46 vue\u505a\u4e0d\u5230\u7684\u4e8b\uff08\u53ea\u662f\u505a\u6cd5\u6703\u4e0d\u4e00\u6a23\uff09\uff08\u6700\u8fd1 react18\u7684 streaming HTML\uff0cvue\u78ba\u5be6\u6c92\u6709\uff09\u3001react\u4e5f\u4e0d\u50cf\u4ee5\u524d\u90a3\u9ebc\u9ebb\u7169\u4ee5\u53ca\u90a3\u9ebc\u591a\u4e0d\u540c\u9580\u6d3e\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u6211\u9084\u662f\u89ba\u5f97react\u7684\u958b\u767c\u6210\u672c\u66f4\u9ad8\uff08\u7f3a\u9ede\u5148\u8b1b\u4f46\u5f8c\u9762\u6211\u6703\u88dc\u4e0a\u512a\u9ede\u5566 XD\uff09\uff0c\u8981\u8aaa\u660e\u9019\u4ef6\u4e8b\u53ef\u80fd\u9700\u8981\u5beb\u6210\u4e00\u6574\u7bc7\u6587\u7ae0\u624d\u8b1b\u7684\u5b8c\uff0c\u4e0d\u904e\u6211\u53ef\u4ee5\u5217\u5e7e\u500b\u6211\u611f\u53d7\u6700\u5f37\u70c8\u7684\u5dee\u7570\uff1a(1) React\u7684 controlled component\u662f\u5c07\u72c0\u614b\u4ea4\u7d66\u7236\u5c64\u4f86\u7ba1\u7406\uff0c\u4e0d\u50cf vue\u53ef\u4ee5\u7c21\u55ae\u7684\u8b93 component\u81ea\u5df1\u5728\u5167\u90e8\u7ba1\u7406\uff0c\u800c\u7236\u5c64\u76f4\u63a5\u900f\u904e\u96d9\u5411\u7d81\u5b9a\u4f86\u540c\u6b65\uff08\u97ff\u61c9\uff09\u8cc7\u6599\u5373\u53ef\uff0cReact\u7684\u55ae\u5411\u8cc7\u6599\u6d41\u7279\u6027\u5c0d\u65bc\u5927\u91cf\u8868\u55ae\u5143\u4ef6\u7684\u7cfb\u7d71\u88e1\u9020\u6210\u5f88\u5927\u7684\u9ebb\u7169\uff0c\u5149\u9019\u4ef6\u4e8b\u5c31\u8db3\u4ee5\u8b93\u6211\u6176\u5e78\u7576\u521d\u5728\u516c\u53f8\u5167\u9078\u64c7\u6846\u67b6\u7684\u6642\u5019\u9084\u597d\u6c92\u6709\u9078\u64c7 react\uff08\u6211\u5011\u516c\u53f8\u5f88\u591a\u7cfb\u7d71\u985e\u7684\u5916\u5305\u5c08\u6848\uff09 (2) vue\u56e0\u70ba\u539f\u672c\u5c31\u662f observer pattern\u70ba\u4e3b\u8981\u7684\u8a2d\u8a08\u6a21\u5f0f\uff0c\u6240\u4ee5\u76e3\u807d\u72c0\u614b\u8b8a\u66f4\u66f4\u52a0\u7684\u5bb9\u6613\u4e14\u7c21\u6f54\uff0c\u800c react\u9700\u8981\u91dd\u5c0d\u6bcf\u4e00\u500b\u72c0\u614b\u53bb\u8655\u7406 side effect\u6703\u66f4\u52a0\u9ebb\u7169\u8a31\u591a (3) react \u7684\u8a2d\u8a08\u98a8\u683c\u6703\u5c55\u73fe\u5728\u6bcf\u4e00\u500b\u5730\u65b9\uff0c\u6240\u4ee5\u76f8\u95dc\u7684\u5957\u4ef6\u3001\u6846\u67b6\uff0c\u6bcf\u4e00\u4ef6\u4e8b\u60c5\u5c31\u662f\u6703\u6bd4 vue\u9ebb\u7169\u4e00\u9ede\u9ede\uff0c\u4f46\u5f88\u591a\u7684\u4e00\u9ede\u9ede\u7d2f\u52a0\u8d77\u4f86\u5c31\u662f\u9ebb\u7169\u8a31\u591a\uff0c\u800c\u4e14\u7a0b\u5f0f\u78bc\u88e1\u6703\u5728\u6bcf\u4e00\u500b\u89d2\u843d\u88e1\u5145\u65a5\u8457\u8ddf\u696d\u52d9\u908f\u8f2f\u7121\u95dc\u7684\u7a0b\u5f0f\u78bc\u2026")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"react\u7684 functional programing\u98a8\u683c\u4e5f\u8868\u73fe\u5728\u6a23\u5f0f\u7684\u7de8\u5beb\u4e0a\uff0c\u6240\u4ee5\u4e3b\u6d41\u662f\u4ee5 css in js \u7684\u65b9\u5f0f\u5728\u7de8\u5beb\u6a23\u5f0f\uff0c\u4e5f\u5c31\u662f\u8aaa\u5c07 css\u5beb\u6210 js\uff0c\u5305\u9032\u5404\u5225\u7684 component\u5167\u3002\u7c21\u55ae\u4f86\u8aaa\uff0cvue\u662f MVVM\u7684\u8a2d\u8a08\u6a21\u5f0f\uff0c\u6240\u4ee5\u6703\u5f88\u660e\u78ba\u7684\u5c07\u6a23\u677f\u548c\u7a0b\u5f0f\u908f\u8f2f\u5206\u958b\uff0c\u800c react\u662f\u5c07\u6a23\u677f\u548c\u7a0b\u5f0f\u908f\u8f2f\u5beb\u5728\u4e00\u8d77\u3002\u9019\u4ef6\u4e8b\u6703\u8ddf\u96a8\u8457\u5718\u968a\u7684\u5206\u5de5\u4ee5\u53ca\u6d41\u7a0b\u4e0a\u6709\u6240\u5f71\u97ff - \u5728\u5206\u5de5\u4e0a\u300c\u5207\u7248\u300d\u662f\u4ea4\u7531\u8a2d\u8a08\u5e2b\u4f86\u505a\u7684\u5718\u968a\u88e1\uff0cvue\u4f86\u958b\u767c\u6703\u66f4\u9069\u5408\uff0c\u800c react\u66f4\u9069\u5408\u4ea4\u7531\u5de5\u7a0b\u5e2b\u4f86\u9032\u884c\u300c\u5207\u7248\u300d\u3002\u5982\u679c\u8981\u6df1\u5165\u63a2\u7a76\u7684\u8a71\u5176\u5be6\u9084\u6709\u5f88\u591a\u53ef\u4ee5\u8a0e\u8ad6\u7684\u5730\u65b9\uff0c\u4e4b\u524d\u4e5f\u6709\u770b\u904e\u570b\u5916\u6709\u6587\u7ae0\u5728\u8a0e\u8ad6\u6709\u4eba\u8a8d\u70ba css preprocessor\u6703\u6bd4 css in js\u4f86\u5f97\u66f4\u512a\uff0c\u56e0\u70bacss in js\u80fd\u505a\u5230\u7684 css preprocessor\u5168\u90e8\u90fd\u505a\u5f97\u5230\uff0c\u6c92\u6709\u7406\u7531\u5beb\u6210 javascript\uff1b\u4f46\u6211\u500b\u4eba\u7684\u89c0\u9ede\u662f\uff0c\u5de5\u7a0b\u5e2b\u666e\u904d\u5c0d\u65bc scss/less\u9019\u6a23\u7684\u5de5\u5177\u5f88\u5c11\u80fd\u73a9\u5f97\u795e\u4e4e\u5176\u6280\u7684\uff0c\u76f4\u63a5\u5beb\u6210 js\u53cd\u800c\u66f4\u53cb\u5584\u4e00\u4e9b\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u57fa\u65bc\u4ee5\u4e0a\u7b2c2\u9ede\u53ca3\u9ede\u7684\u7406\u7531\uff0c\u5982\u679c\u662f\u4ee5\u5c08\u6848\u578b\u5f0f\u6216\u8005\u5f8c\u53f0\u7cfb\u7d71\u4f86\u8aaa\u6211\u89ba\u5f97\u9078\u64c7 react\u6703\u662f\u500b\u932f\u8aa4\u7684\u9078\u64c7\u2026 vue\u6216 angular\u6703\u66f4\u52a0\u5408\u9069\uff08\u53e6\u5916\uff0cvue\u5c0d\u65bc\u7121\u8166\u66b4\u529b\u958b\u767c\u6a21\u5f0f\u6709\u7a2e\u8aaa\u4e0d\u51fa\u7684\u597d\u7528\uff0c\u4e5f\u9069\u5408junior\u6216\u5168\u7aef\u5de5\u7a0b\u5e2b\u5feb\u901f\u4e0a\u624b\u958b\u767c\uff09\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u524d\u9762\u6211\u5410\u69fd react\u7684\u9ede\uff0c\u5982\u679c\u662f\u653e\u5728\u7522\u54c1\u985e\u578b\u7684\u7cfb\u7d71\u4e0a\uff0c\u5176\u5be6\u591a\u589e\u52a0\u7684\u6210\u672c\u5176\u5be6\u4e5f\u4e0d\u592a\u7b97\u771f\u6b63\u7684\u6210\u672c\uff0c\u4ee5\u4e00\u500b\u8981\u9577\u671f\u7dad\u8b77/\u7522\u54c1\u8fed\u4ee3\u7684\u7cfb\u7d71\u4f86\u8aaa\u771f\u6b63\u986f\u6ce8\u7684\u6210\u672c\u53ef\u80fd\u662f\u5728\u7dad\u8b77/\u6e2c\u8a66/\u91cd\u69cb\u7b49\u7b49\u7684\u2026 \u53e6\u5916\uff0c\u7531\u65bc react\u7684 functional programing\u7279\u6027\u4e0b\uff0creact\u66f4\u50be\u5411\u628a\u6240\u6709\u7684\u6771\u897f\u8996\u70ba function\uff0c\u6240\u4ee5react\u5e7e\u4e4e\u90fd\u662f\u5728\u5beb js\u800c\u7528\u5230\u8f03\u5c11\u91cf\u7684 api\uff0c\u4e5f\u5c31\u6bd4 vue\u66f4\u6709\u6a5f\u6703\u5beb\u51fa\u7b26\u5408\u81ea\u5df1\u9700\u6c42\u7684\u7279\u6b8a\u529f\u80fd\u6216\u67b6\u69cb\uff1b\u800c\u53cd\u904e\u4f86\u8aaa vue\u66f4\u50be\u5411\u628a\u4e0d\u540c\u7684\u529f\u80fd\u63d0\u4f9b\u4e0d\u540c\u7684 Vue instance\u7684 api\uff0c\u96d6\u7136\u958b\u767c\u524d\u671f\u7c21\u55ae\u597d\u7528\uff0c\u4f46\u5728\u88fd\u4f5c\u4e00\u4e9b\u9032\u968e\u529f\u80fd\u7684\u6642\u5019\u4e5f\u5fc5\u9808\u82b1\u8cbb\u66f4\u591a\u6642\u9593\u5728\u4e86\u89e3 vue\u7684 api\u7684\u4e00\u4e9b\u539f\u7406\u548c\u7279\u6027\uff08\u4e0d\u898b\u5f97\u662f\u80fd\u76f4\u63a5\u900f\u904e\u6587\u4ef6\u4e86\u89e3\uff0c\u6709\u9ede\u5403\u958b\u767c\u7d93\u9a57\uff09")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u95dc\u65bc\u524d\u4e00\u9ede\u6240\u63d0\u5230\u7684 react\u7684\u512a\u9ede\uff0c\u5176\u5be6\u4e00\u500b\u597d\u7684 vue\u5c08\u6848\u5be6\u8e10\u6211\u89ba\u5f97\u4e5f\u53ef\u4ee5\u505a\u5230\u540c\u6a23\u7684\u6c34\u6e96\u3002\u4f46\u6211\u89ba\u5f97\u66f4\u591a\u7684\u662f\u56e0\u70ba react\u5929\u751f\u7684\u300c\u5f48\u6027\u300d\u3001\u4ee5\u53ca\u65e9\u671f\u958b\u767c\u8005\u5927\u795e\u591a\uff0c\u6240\u4ee5\u6703\u6709\u5f88\u591a\u975e\u5e38\u6709\u958b\u5275\u6027\u53c8\u5f88\u6f6e\u7684\u65b0 idea\uff0c\u800c vue\u5c31\u5f97\u7b49\u5230\u4e00\u5169\u5e74\u4e4b\u5f8c\u624d\u6703\u300c\u81f4\u656c\u300d\uff08\u4e5f\u4e0d\u80fd\u8aaa\u6284\u5566 XD\uff09\u904e\u53bb\u505a\u51fa\u985e\u4f3c\u7684\u529f\u80fd\uff0c\u50cf\u662f\u6700\u8fd1 react18\u7684 streaming HTML\u4e0d\u77e5\u9053\u4ec0\u9ebc\u6642\u5019 vue\u624d\u6703\u6709\u2026 \u4f46\u53cd\u904e\u4f86\u8aaa\uff0creact\u5e38\u5e38\u6703\u6709\u4e3b\u6d41\u7684\u5beb\u6cd5\u8b8a\u4f86\u8b8a\u53bb\uff08\u4ee5\u524d\u6d41\u884c higher order component\uff0c\u73fe\u5728\u5beb hooks\uff09\u3001\u4e3b\u6d41\u7684\u5957\u4ef6\u4e5f\u5e38\u7570\u4e3b\uff08\u4ee5\u524d\u7528 redux\uff0c\u6700\u8fd1 facebook\u51fa\u7684 recoil\u4f3c\u4e4e\u4e5f\u883b\u5f37\u7684\uff09\uff0c\u800c vue\u5b98\u65b9\u63d0\u4f9b\u7684\u89e3\u6c7a\u65b9\u6848\u5c31\u975e\u5e38\u597d\u7528\u4e86\uff0c\u6240\u4ee5\u4e5f\u4e0d\u592a\u6703\u6709\u5176\u4ed6\u6f6e\u6d41\u4e0a\u7684\u8b8a\u52d5\uff0c\u6bd4\u8f03\u4e0d\u6703\u6709\u9078\u64c7\u969c\u7919\u3001\u6216\u8005\u64d4\u5fc3\u6703\u4e0d\u6703\u73fe\u5728\u9078\u7528\u7684\u4f5c\u6cd5\u7b49\u5230\u660e\u5e74\u5c31\u9000\u6d41\u884c\u4e86\u2026"))))}p.isMDXComponent=!0}}]);