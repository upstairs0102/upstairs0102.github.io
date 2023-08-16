"use strict";(self.webpackChunkupstairs_0102_github_io=self.webpackChunkupstairs_0102_github_io||[]).push([[5504],{3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>f});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=a.createContext({}),u=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},p=function(t){var e=u(t.components);return a.createElement(s.Provider,{value:e},t.children)},c="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,s=t.parentName,p=o(t,["components","mdxType","originalType","parentName"]),c=u(n),m=r,f=c["".concat(s,".").concat(m)]||c[m]||d[m]||l;return n?a.createElement(f,i(i({ref:e},p),{},{components:n})):a.createElement(f,i({ref:e},p))}));function f(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o[c]="string"==typeof t?t:r,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},73667:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var a=n(87462),r=(n(67294),n(3905));const l={slug:"/ithome2018/day02",title:"Day02 \u5716\u8868\u5b78\u7fd2\u7b46\u8a18\u6574\u7406\uff081\uff09",authors:"thunderboy",tags:["ithome","d3.js"]},i=void 0,o={unversionedId:"[\u9435\u4eba\u8cfd]D3.js\u65b0\u624b\u958b\u767c\u57fa\u672c\u5716\u8868/ithome2018-day02",id:"[\u9435\u4eba\u8cfd]D3.js\u65b0\u624b\u958b\u767c\u57fa\u672c\u5716\u8868/ithome2018-day02",title:"Day02 \u5716\u8868\u5b78\u7fd2\u7b46\u8a18\u6574\u7406\uff081\uff09",description:"\u4e00\u3001\u95dc\u65bc\u5b78\u7fd2\u7b46\u8a18",source:"@site/docs/[\u9435\u4eba\u8cfd]D3.js\u65b0\u624b\u958b\u767c\u57fa\u672c\u5716\u8868/ithome2018-day02.md",sourceDirName:"[\u9435\u4eba\u8cfd]D3.js\u65b0\u624b\u958b\u767c\u57fa\u672c\u5716\u8868",slug:"/ithome2018/day02",permalink:"/docs/ithome2018/day02",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/[\u9435\u4eba\u8cfd]D3.js\u65b0\u624b\u958b\u767c\u57fa\u672c\u5716\u8868/ithome2018-day02.md",tags:[{label:"ithome",permalink:"/docs/tags/ithome"},{label:"d3.js",permalink:"/docs/tags/d-3-js"}],version:"current",frontMatter:{slug:"/ithome2018/day02",title:"Day02 \u5716\u8868\u5b78\u7fd2\u7b46\u8a18\u6574\u7406\uff081\uff09",authors:"thunderboy",tags:["ithome","d3.js"]},sidebar:"tutorialSidebar",previous:{title:"Day01 D3.js\u5b78\u524d\u6e96\u5099",permalink:"/docs/ithome2018/day01"},next:{title:"Day03 \u5716\u8868\u5b78\u7fd2\u7b46\u8a18\u6574\u7406\uff082\uff09",permalink:"/docs/ithome2018/day03"}},s={},u=[{value:"\u4e00\u3001\u95dc\u65bc\u5b78\u7fd2\u7b46\u8a18",id:"\u4e00\u95dc\u65bc\u5b78\u7fd2\u7b46\u8a18",level:2},{value:"\u4e8c\u3001\u8996\u89ba\u5316\u578b\u5f0f",id:"\u4e8c\u8996\u89ba\u5316\u578b\u5f0f",level:2},{value:"\u4e09\u3001\u8996\u89ba\u5448\u73fe\u7684\u4e00\u4e9b\u6e96\u5247",id:"\u4e09\u8996\u89ba\u5448\u73fe\u7684\u4e00\u4e9b\u6e96\u5247",level:2}],p={toc:u};function c(t){let{components:e,...l}=t;return(0,r.kt)("wrapper",(0,a.Z)({},p,l,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u4e00\u95dc\u65bc\u5b78\u7fd2\u7b46\u8a18"},"\u4e00\u3001\u95dc\u65bc\u5b78\u7fd2\u7b46\u8a18"),(0,r.kt)("p",null,"\u63a5\u4e0b\u4f86\u7684\u300c\u5716\u8868\u5b78\u7fd2\u7b46\u8a18\u6574\u7406\u300d\u9810\u8a08\u6703\u6709\u5169\u5230\u4e09\u7bc7\u6587\u7ae0\uff0c\u5167\u5bb9\u4e3b\u8981\u662f\u5f9e\u524d\u4e00\u7bc7\u63d0\u5230\u7684\u300c\u54c8\u4f5b\u6559\u4f60\u505a\u51fa\u597d\u5716\u8868\u300d\u9019\u672c\u66f8\u4e2d\uff0c\u6211\u95b1\u8b80\u4e4b\u5f8c\u4f9d\u6211\u81ea\u5df1\u7684\u7406\u89e3\u6574\u7406\u3001\u4e26\u88dc\u5145\u4e00\u4e9b\u76f8\u95dc\u8cc7\u8a0a\u7684\u5b78\u7fd2\u7b46\u8a18\u3002"),(0,r.kt)("h2",{id:"\u4e8c\u8996\u89ba\u5316\u578b\u5f0f"},"\u4e8c\u3001\u8996\u89ba\u5316\u578b\u5f0f"),(0,r.kt)("p",null,"\u5728\u524d\u4e00\u7ae0\u6709\u63d0\u5230\u8cc7\u8a0a\u8996\u89ba\u5316(Information Visualization)\u548c\u8cc7\u6599\u8996\u89ba\u5316(Data Visualization)\u9019\u5169\u500b\u540d\u8a5e\uff0c\u4f46\u4e26\u6c92\u6709\u6bd4\u8f03\u4ed4\u7d30\u4e00\u9ede\u7684\u53bb\u5b9a\u7fa9\u3002\u4e00\u822c\u4f86\u8aaa\uff0c\u8cc7\u8a0a\u8996\u89ba\u5316\u662f\u6bd4\u8f03\u5ee3\u7fa9\u7684\u5b9a\u7fa9\uff0c\u4e0d\u4e00\u5b9a\u662f\u91dd\u5c0d\u80fd\u5920\u91cf\u5316\u7684\u8cc7\u6599\u53bb\u9032\u884c\u8996\u89ba\u5316\uff0c\u53ef\u4ee5\u7528\u4ee5\u4e0b\u65b9\u5f0f\u4f86\u505a\u5340\u5206\uff1a"),(0,r.kt)("p",null,"\u8cc7\u6599\u8996\u89ba\u5316\u662f\u5c0d\u91cf\u5316\u8cc7\u6599\u9032\u884c\u8996\u89ba\u5316"),(0,r.kt)("p",null,"\u8cc7\u8a0a\u8996\u89ba\u5316\u662f\u5c0d\u91cf\u5316\u8cc7\u6599\u6216\u975e\u91cf\u5316\u8cc7\u6599\u9032\u884c\u8996\u89ba\u5316"),(0,r.kt)("p",null,"\u6bd4\u5982\u8aaa\u4ee5\u4e0b\u8996\u89ba\u5316\u5373\u662f\u7528\u4e00\u76ee\u4e86\u7136\u7684\u65b9\u5f0f\u5448\u73fe\u7f8e\u570b\u5404\u5dde\u6700\u5177\u4ee3\u8868\u6027\u7684\u54c1\u724c\uff08\u751a\u81f3\u4e0d\u9700\u8981\u6587\u5b57\u5f15\u5c0e\u6216\u6578\u5b57\u4f86\u505a\u8aaa\u660e\uff09"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Day02 \u5716\u8868\u5b78\u7fd2\u7b46\u8a18\u6574\u7406\uff081\uff09_\u7f8e\u570b\u5404\u5dde\u6700\u5177\u4ee3\u8868\u6027\u7684\u54c1\u724c",src:n(99749).Z,width:"500",height:"328"})),(0,r.kt)("p",null,"\u5716\u7247\u4f86\u6e90\uff1a",(0,r.kt)("a",{parentName:"p",href:"https://www.siegelgale.com/just-as-i-did-brands-must-adapt-to-america/"},"https://www.siegelgale.com/just-as-i-did-brands-must-adapt-to-america/")),(0,r.kt)("p",null,"\u7576\u6211\u5011\u591a\u65b9\u4e86\u89e3\u8cc7\u8a0a\u5448\u73fe\u65b9\u5f0f\u7684\u5404\u7a2e\u53ef\u80fd\u6027\uff0c\u66f4\u4e0d\u6703\u88ab\u4fb7\u9650\u5728\u50b3\u7d71\u7684\u601d\u7dad\u6a21\u5f0f\u7576\u4e2d\u7684\u3002\u4fd7\u8a71\u8aaa\u4e00\u5f35\u5716\u52dd\u904e\u5343\u8a00\u842c\u8a9e\uff0c\u4f46\u662f\u8981\u5982\u4f55\u9078\u64c7\u5716\u7684\u5448\u73fe\u65b9\u5f0f\uff1f\u6839\u64da\u4f60\u8981\u50b3\u9054\u7684\u8a0a\u606f\u3001\u76ee\u7684\uff0c\u4ee5\u53ca\u4f60\u7684\u5c0d\u8c61\u3001\u5834\u5408\u3001\u5c55\u793a\u6642\u9593\u9577\u77ed\u7b49\u7b49\u7684\u90fd\u662f\u5fc5\u9700\u7d9c\u5408\u8003\u91cf\uff0c\u662f\u503c\u5f97\u82b1\u6642\u9593\u63a2\u7a76\u7684\u3002"),(0,r.kt)("p",null,"\u6240\u8b02\u8996\u89ba\u5316\u9019\u4e0d\u4f46\u662f\u4e00\u9580\u79d1\u5b78\u540c\u6642\u4e5f\u662f\u85dd\u8853\uff0c\u4e16\u754c\u4e0a\u6709\u8a31\u8a31\u591a\u591a\u7cbe\u5f69\u7684\u7bc4\u4f8b\uff0c\u53ef\u53c3\u8003\u9019\u500b\u7db2\u7ad9\uff1a"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.informationisbeautifulawards.com/"},"https://www.informationisbeautifulawards.com/")),(0,r.kt)("p",null,"\u66f8\u88e1\u5c31\u6709\u7c21\u55ae\u7684\u5c07\u8996\u89ba\u5316\u985e\u5225\u5340\u5206\u6210\u56db\u500b\u8c61\u9650\uff1a"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Day02 \u5716\u8868\u5b78\u7fd2\u7b46\u8a18\u6574\u7406\uff081\uff09_\u8996\u89ba\u5316\u985e\u5225\u5340\u5206\u6210\u56db\u500b\u8c61\u9650",src:n(20449).Z,width:"350",height:"300"})),(0,r.kt)("h2",{id:"\u4e09\u8996\u89ba\u5448\u73fe\u7684\u4e00\u4e9b\u6e96\u5247"},"\u4e09\u3001\u8996\u89ba\u5448\u73fe\u7684\u4e00\u4e9b\u6e96\u5247"),(0,r.kt)("p",null,"\u8996\u89ba\u6e9d\u901a\u8207\u6587\u5b57\u4e0d\u540c\uff0c\u6bd4\u8f03\u50cf\u662f\u97f3\u6a02\u5275\u4f5c\u5c0d\u89c0\u773e\u7522\u751f\u67d0\u7a2e\u7684\u53ef\u9810\u671f\u4f5c\u7528\uff0c\u6240\u4ee5\u5716\u8868\u7e6a\u88fd\u8005\u4e5f\u53ef\u4ee5\u5229\u7528\u8996\u89ba\u611f\u77e5\u7684\u539f\u7406\u88fd\u9020\u6210\u66f4\u70ba\u6709\u6548\u7684\u8996\u89ba\u5316\u6548\u679c\uff1a"),(0,r.kt)("p",null,"1.\u6211\u5011\u770b\u5716\u4e0d\u6703\u6309\u4e00\u5b9a\u9806\u5e8f"),(0,r.kt)("p",null,"2.\u6703\u5148\u770b\u5230\u6700\u51f8\u986f\u7684\u90e8\u4efd"),(0,r.kt)("p",null,"3.\u4e00\u6b21\u53ea\u6703\u770b\u5230\u5e7e\u6a23\u6771\u897f"),(0,r.kt)("p",null,"4.\u6703\u627e\u51fa\u5716\u793a\u7684\u610f\u7fa9\u8207\u95dc\u4fc2"),(0,r.kt)("p",null,"5.\u6211\u5011\u6703\u53d7\u5230\u5e38\u898f\u548c\u96b1\u5f62\u7684\u5236\u7d04"),(0,r.kt)("p",null,"\u5f88\u986f\u800c\u6613\u898b\u7684\uff0c\u6240\u8b02\u7684\u300c\u8996\u89ba\u5316\u300d\u7d55\u5c0d\u4e0d\u662f\u5728\u65bc\u5716\u8868\u6709\u591a\u6f02\u4eae\uff0c\u6240\u4ee5\u53cd\u904e\u4f86\u8aaa\u50cf\u662f\u7528excel\u52a0\u5165\u7121\u8b02\u76843D\u7279\u6548\u6216\u7121\u610f\u7fa9\u7684\u4e94\u984f\u516d\u8272\u62c9\u51fa\u5716\u8868\u4e0d\u662f\u6b63\u78ba\u7684\u578b\u5f0f\u3002"),(0,r.kt)("p",null,"\u91dd\u5c0d\u6700\u5f8c\u4e00\u9ede\u300c\u6211\u5011\u6703\u53d7\u5230\u5e38\u898f\u548c\u96b1\u5f62\u7684\u5236\u7d04\u300d\u6211\u53c3\u8003\u66f8\u4e2d\u5176\u4e2d\u4e00\u500b\u4f8b\u5b50\u6709\u8da3\u7684\u4f8b\u5b50\u91cd\u65b0\u7e6a\u88fd\uff1a"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Day02 \u5716\u8868\u5b78\u7fd2\u7b46\u8a18\u6574\u7406\uff081\uff09_\u8208\u8da3\u6709\u591a\u9ad8",src:n(27908).Z,width:"600",height:"524"})),(0,r.kt)("p",null,"\u9019\u5f35\u5716\u8868\u7684\u8a2d\u8a08\u662f\u6709\u4ee5\u4e0b\u542b\u7fa9\u7684\uff1a"),(0,r.kt)("p",null,"1.\u76f8\u8fd1\u7684\u984f\u8272\u4ee3\u8868\u76f8\u4f3c\u7684\u9805\u76ee"),(0,r.kt)("p",null,"2.\u8272\u5f69\u98fd\u548c\u5ea6\u8868\u793a\u6578\u503c\u9ad8\u4f4e\u8b8a\u5316"),(0,r.kt)("p",null,"3.\u985e\u5225\u662f\u5f9e\u6b63\u6975\u7aef\u5230\u8ca0\u6975\u7aef\u9010\u4e00\u6392\u5217"),(0,r.kt)("p",null,"\u8b1b\u8d77\u4f86\u715e\u6709\u5176\u4e8b\uff0c\u4f46\u537b\u662f\u975e\u5e38\u660e\u986f\u7684\u8aa4\u7528\u3002\u56e0\u70ba\u7576\u9810\u671f\u5fc3\u7406\u53d7\u5230\u5343\u64fe\u6642\uff0c\u6703\u8b93\u4f60\u6c92\u8fa6\u6cd5\u5f9e\u5716\u8868\u4e2d\u627e\u51fa\u610f\u7fa9\u4f86\u3002"),(0,r.kt)("p",null,"\u9019\u908a\u7528\u76f8\u540c\u5b9a\u7fa9\u4f86\u91cd\u65b0\u6b0a\u91cb\u4e26\u7e6a\u88fd\u5982\u4e0b\uff1a"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Day02 \u5716\u8868\u5b78\u7fd2\u7b46\u8a18\u6574\u7406\uff081\uff09_\u91cd\u65b0\u6b0a\u91cb\u4e26\u7e6a\u88fd",src:n(94485).Z,width:"600",height:"192"})),(0,r.kt)("p",null,"\u6211\u5011\u8a66\u8457\u56de\u7b54\u4ee5\u4e0b\u5169\u500b\u554f\u984c\uff1a\u54ea\u4e00\u7d44\u5360\u591a\u6578\uff1f\u54ea\u4e00\u500b\u985e\u5225\u7684\u4eba\u6578\u6700\u5c11\uff1f\u9019\u6642\u5019\u6703\u767c\u73fe\u5f8c\u8005\u7248\u672c\u662f\u6bd4\u8f03\u5bb9\u6613\u56de\u7b54\u51fa\u4f86\u7684\u3002"),(0,r.kt)("p",null,"\u6709\u4e00\u500b\u91cd\u9ede\u52d9\u5fc5\u77e5\u9053\uff1a\u5982\u679c\u89c0\u773e\u627e\u4e0d\u51fa\u5716\u8868\u610f\u7fa9\uff0c\u4ed6\u5011\u56b4\u53b2\u6279\u5224\u7684\u4e0d\u662f\u5716\u8868\uff0c\u800c\u662f\u8cc7\u8a0a\u672c\u8eab\uff0c\u4ed6\u5011\u6703\u8a8d\u70ba\u8cc7\u8a0a\u53ef\u4fe1\u5ea6\u4e0d\u9ad8\u3002"))}c.isMDXComponent=!0},99749:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/1-cf3f477abd480f639272f13315b786f6.png"},20449:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/2-496a9dd7dd1383fae4ef485c981ea9f1.png"},27908:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/3-3ca5294023ea771a1a10176560961329.png"},94485:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/4-fa486bd0606aeda9c64eab410af38407.png"}}]);