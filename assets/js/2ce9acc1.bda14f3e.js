"use strict";(self.webpackChunkupstairs_0102_github_io=self.webpackChunkupstairs_0102_github_io||[]).push([[510],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),l=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(i.Provider,{value:t},e.children)},u="mdxType",b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),m=a,d=u["".concat(i,".").concat(m)]||u[m]||b[m]||o;return n?r.createElement(d,c(c({ref:t},p),{},{components:n})):r.createElement(d,c({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[u]="string"==typeof e?e:a,c[1]=s;for(var l=2;l<o;l++)c[l]=n[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9234:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=n(87462),a=(n(67294),n(3905));const o={slug:"/rxjs/combinelatest-duplicate-events",title:"[\u4e3b\u984c]\u53bb\u9664\u6389 combineLatest \u4e2d\u540c\u6642\u9593\u7684\u91cd\u8986\u4e8b\u4ef6",tags:["rxjs"]},c=void 0,s={unversionedId:"RxJS/[\u4e3b\u984c]\u53bb\u9664\u6389combineLatest\u4e2d\u540c\u6642\u9593\u7684\u91cd\u8986\u4e8b\u4ef6",id:"RxJS/[\u4e3b\u984c]\u53bb\u9664\u6389combineLatest\u4e2d\u540c\u6642\u9593\u7684\u91cd\u8986\u4e8b\u4ef6",title:"[\u4e3b\u984c]\u53bb\u9664\u6389 combineLatest \u4e2d\u540c\u6642\u9593\u7684\u91cd\u8986\u4e8b\u4ef6",description:"\u53bb\u9664\u6389 combineLatest \u4e2d\u540c\u6642\u9593\u7684\u91cd\u8986\u4e8b\u4ef6",source:"@site/docs/RxJS/[\u4e3b\u984c]\u53bb\u9664\u6389combineLatest\u4e2d\u540c\u6642\u9593\u7684\u91cd\u8986\u4e8b\u4ef6.md",sourceDirName:"RxJS",slug:"/rxjs/combinelatest-duplicate-events",permalink:"/docs/rxjs/combinelatest-duplicate-events",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/RxJS/[\u4e3b\u984c]\u53bb\u9664\u6389combineLatest\u4e2d\u540c\u6642\u9593\u7684\u91cd\u8986\u4e8b\u4ef6.md",tags:[{label:"rxjs",permalink:"/docs/tags/rxjs"}],version:"current",frontMatter:{slug:"/rxjs/combinelatest-duplicate-events",title:"[\u4e3b\u984c]\u53bb\u9664\u6389 combineLatest \u4e2d\u540c\u6642\u9593\u7684\u91cd\u8986\u4e8b\u4ef6",tags:["rxjs"]},sidebar:"tutorialSidebar",previous:{title:"[\u4e3b\u984c] \u4e00\u4e9b\u5bb9\u6613\u6df7\u6dc6\u7684\u540d\u8a5e",permalink:"/docs/rxjs/confusing-terms-in-rxjs"},next:{title:"[Vue] Recursive Component",permalink:"/docs/vue/recuresive-component"}},i={},l=[{value:"\u53bb\u9664\u6389 combineLatest \u4e2d\u540c\u6642\u9593\u7684\u91cd\u8986\u4e8b\u4ef6",id:"\u53bb\u9664\u6389-combinelatest-\u4e2d\u540c\u6642\u9593\u7684\u91cd\u8986\u4e8b\u4ef6",level:3}],p={toc:l};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"\u53bb\u9664\u6389-combinelatest-\u4e2d\u540c\u6642\u9593\u7684\u91cd\u8986\u4e8b\u4ef6"},"\u53bb\u9664\u6389 combineLatest \u4e2d\u540c\u6642\u9593\u7684\u91cd\u8986\u4e8b\u4ef6"),(0,a.kt)("p",null,"\u7531\u65bc",(0,a.kt)("inlineCode",{parentName:"p"},"combineLatest")," \u662f\u7528\u4f86\u7d44\u5408\u591a\u500b Observable \u7684\u4e8b\u4ef6\u503c\u7684\uff0c\u6240\u4ee5",(0,a.kt)("strong",{parentName:"p"},"\u6bcf\u4e00\u500b Observable \u7684\u4e8b\u4ef6\u90fd\u6703\u88ab\u8a02\u95b1\u5230"),"\u3002"),(0,a.kt)("p",null,"\u5982\u679c\u6bcf\u4e00\u500b Observable \u90fd\u662f\u300c\u4e0d\u540c\u6642\u300d\u767c\u751f\u7684\uff0c\u5247\u6703\u53d6\u5f97\u300c\u7576\u4e0b\u300d\u6bcf\u4e00\u500b Observable \u6700\u5f8c\u4e00\u6b21\u7684\u4e8b\u4ef6\u503c\u3002"),(0,a.kt)("p",null,"\u4f46\u73fe\u5728\u8981\u8655\u7406\u7684\u72c0\u6cc1\u662f - \u5982\u679c\u6709\u591a\u500b Observable \u662f\u300c\u540c\u6642\u300d\u767c\u751f\u4e8b\u4ef6\u7684\uff0c\u4e5f\u4ecd\u7136\u6703\u7522\u751f\u591a\u500b\u8a02\u95b1\u4e8b\u4ef6\uff0c\u9019\u500b\u5c31\u4e0d\u4e00\u5b9a\u7b26\u5408",(0,a.kt)("strong",{parentName:"p"},"\u300c\u53ea\u53d6\u6700\u5f8c\u4e00\u6b21\u4e8b\u4ef6\u8cc7\u6599\u300d"),"\u7684\u76ee\u7684\u3002"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u6211\u5728\u9019\u908a\u6240\u8aaa\u7684\u300c\u540c\u6642\u300d\u5f9e\u7a0b\u5f0f\u7684\u89d2\u5ea6\u4f86\u770b\u5176\u5be6\u4e0d\u662f\u5f88\u7cbe\u78ba\uff0c\u7562\u7adf\u7a0b\u5f0f\u662f\u4e00\u884c\u4e00\u884c\u57f7\u884c\u7684\uff0c\u591a\u500b Observable \u7684\u8a02\u95b1\u4e8b\u4ef6\u4e5f\u4e00\u5b9a\u5c31\u6703\u6709\u5148\u5f8c\u9806\u5e8f\uff0c\u90a3\u5c31\u4e0d\u6703\u662f\u540c\u6642\u7684\u3002\u4f46\u6211\u60f3\u8868\u9054\u7684\u6bd4\u8f03\u50cf\u662f RxJS\u5e38\u7528\u7684\u5f48\u73e0\u5716\u4e0a\uff08\u6216\u8005\u4e5f\u53ef\u4ee5\u8aaa\u662f\u6642\u9593\u8ef8\uff09\u540c\u4e00\u6642\u9593\u6240\u767c\u751f\u7684\u4e8b\u4ef6\u3002")),(0,a.kt)("p",null,"\u4ee5\u4e0b\u7684\u7bc4\u4f8b\u5982\u679c\u756b\u6210\u5f48\u73e0\u5716\u7684\u8a71\uff0c\u5728\u7b2c0\u79d2\u548c\u7b2c1\u79d2\u5404\u5225\u6709\u4e09\u500b Observable\uff08\u5728\u9019\u908a\u7528\u7684\u662f ",(0,a.kt)("inlineCode",{parentName:"p"},"Subject"),"\u985e\u5225\uff09\u7684\u8a02\u95b1\u4e8b\u4ef6\uff0c\u7b2c0\u79d2\u7684\u6642\u5019\u7531\u65bc\u4e09\u500b Observable\u5728\u4e8b\u524d\u90fd\u6c92\u6709\u4efb\u4f55\u8cc7\u6599\uff0c\u6240\u4ee5\u53ea\u6703\u5728\u4e09\u500b\u90fd\u53d6\u5f97\u7b2c\u4e00\u500b\u8cc7\u6599\u5f8c\u7522\u751f\u4e00\u500b\u8a02\u95b1\u4e8b\u4ef6\uff0c\u800c\u7b2c1\u79d2\u9418\u7684\u6642\u5019\u7531\u65bc\u4e09\u500b Observable\u6703\u5206\u5225\u8ddf\u5176\u5b83 Observable\u7684\u6700\u5f8c\u4e00\u6b21\u4e8b\u4ef6\u8cc7\u6599\u7d44\u5408\uff0c\u6240\u4ee5\u5171\u6703\u7522\u751f\u4e09\u500b\u8a02\u95b1\u4e8b\u4ef6\u3002\u7a0b\u5f0f\u78bc\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const a$ = new Subject()\nconst b$ = new Subject()\nconst c$ = new Subject()\n\nconst stream$ = combineLatest([a$, b$, c$]).subscribe(\n  (d) => console.log(d)\n)\n\na$.next('A1')\nb$.next('B1')\nc$.next('C1')\n\nsetTimeout(() => {\n  a$.next('A2')\n  b$.next('B2')\n  c$.next('C2')\n}, 1000)\n\n// ['A1', 'B1', 'C1']\n// ['A2', 'B1', 'C1']\n// ['A2', 'B2', 'C1']\n// ['A2', 'B2', 'C2']\n")),(0,a.kt)("p",null,"\u756b\u6210\u5f48\u73e0\u5716\u7684\u8a71\u5c31\u6703\u662f"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"['A1', 'B1', 'C1']----(['A2', 'B1', 'C1']['A2', 'B2', 'C1']['A2', 'B2', 'C2']|)\n")),(0,a.kt)("p",null,"\u5982\u679c\u6211\u5011\u53ea\u60f3\u8981\u5728\u7b2c0\u79d2\u4ee5\u53ca\u7b2c1\u79d2\u5404\u767c\u751f\u4e00\u6b21\u8a02\u95b1\u4e8b\u4ef6\u7684\u8a71\uff0c\u8981\u89e3\u6c7a\u9019\u500b\u554f\u984c\u53ea\u8981\u52a0\u4e0a ",(0,a.kt)("inlineCode",{parentName:"p"},"switchMap"),"\uff0c\u8f49\u63db\u51fa\u4f86\u7684 Observable\uff0c\u540c\u6642\u9593\u7684\u8a02\u95b1\u4e8b\u4ef6\u53ea\u6703\u6709\u4e00\u6b21\uff0c\u800c\u4e14\u53ef\u4ee5\u53d6\u5230\u540c\u6642\u9593\u6bcf\u500b Observable \u6700\u5f8c\u4e00\u6b21\u7684\u4e8b\u4ef6\u503c\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const a$ = new Subject()\nconst b$ = new Subject()\nconst c$ = new Subject()\n\nconst stream$ = combineLatest([a$, b$, c$]).pipe(\n  switchMap(async (d) => d),\n).subscribe(\n  (d) => console.log(d)\n)\n\na$.next('A1')\nb$.next('B1')\nc$.next('C1')\n\nsetTimeout(() => {\n  a$.next('A2')\n  b$.next('B2')\n  c$.next('C2')\n}, 1000)\n\n// ['A1', 'B1', 'C1']\n// ['A2', 'B2', 'C2']\n")),(0,a.kt)("p",null,"\u756b\u6210\u5f48\u73e0\u5716\u7684\u8a71\u5c31\u6703\u662f"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"['A1', 'B1', 'C1']----(['A2', 'B2', 'C2']|)\n")),(0,a.kt)("p",null,"\u9019\u500b\u539f\u7406\u662f",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"switchMap")," \u6bcf\u6b21\u8f49\u63db\u6642\u6703\u628a\u524d\u4e00\u6b21\u9084\u6c92\u7d50\u675f\u6389\u7684 Observable\u7d66\u7d50\u675f\u8a02\u95b1"),"\u3002"),(0,a.kt)("p",null,"\u800c\u9019\u500b\u4f8b\u5b50\u4f86\u770b\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"a$"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"b$"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"c$")," \u4e09\u8005\u96d6\u7136\u662f\u540c\u6642\u9593\u547c\u53eb ",(0,a.kt)("inlineCode",{parentName:"p"},"next()"),"\uff0c\u4f46\u662f\u9019\u4e09\u8005\u5728\u88ab\u57f7\u884c\u5b8c\u8a02\u95b1\u4e8b\u4ef6 ",(0,a.kt)("inlineCode",{parentName:"p"},"subscribe()"),"\u7d50\u675f\u4e4b\u524d\u8a02\u95b1\u90fd\u4e0d\u7b97\u5b8c\u6210\uff0c\u6240\u4ee5\u5728\u524d\u9762\u8aaa\u7684\u898f\u5247\uff08\u6bcf\u6b21\u8f49\u63db\u6642\u6703\u628a\u524d\u4e00\u6b21\u9084\u6c92\u7d50\u675f\u6389\u7684 Observable\u7d66\u7d50\u675f\u8a02\u95b1\uff09\u4e4b\u4e0b\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"a$")," \u6703\u88ab ",(0,a.kt)("inlineCode",{parentName:"p"},"b$")," \u7684\u8a02\u95b1\u4e8b\u4ef6\u7d50\u675f\u6389\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"b$")," \u6703\u88ab ",(0,a.kt)("inlineCode",{parentName:"p"},"c$")," \u7684\u8a02\u95b1\u4e8b\u4ef6\u7d50\u675f\u6389\uff0c\u6700\u5f8c\u53ea\u5269\u4e0b ",(0,a.kt)("inlineCode",{parentName:"p"},"c$")," \u7684\u8a02\u95b1\u4e8b\u4ef6\u3002"),(0,a.kt)("p",null,"*"," \u6ce8\u610f\uff1a",(0,a.kt)("inlineCode",{parentName:"p"},"switchMap"),"\u7684\u53c3\u6578\u8981\u5728 function \u524d\u9762\u52a0\u4e0a ",(0,a.kt)("inlineCode",{parentName:"p"},"async"),"\u6a19\u7c64\u624d\u80fd\u5920\u6b63\u78ba\u57f7\u884c\u3002"))}u.isMDXComponent=!0}}]);