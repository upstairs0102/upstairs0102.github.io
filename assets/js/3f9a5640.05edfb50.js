"use strict";(self.webpackChunkupstairs_0102_github_io=self.webpackChunkupstairs_0102_github_io||[]).push([[4255],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>k});var l=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},r=Object.keys(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=l.createContext({}),p=function(e){var t=l.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return l.createElement(o.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},m=l.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(n),m=a,k=c["".concat(o,".").concat(m)]||c[m]||u[m]||r;return n?l.createElement(k,i(i({ref:t},d),{},{components:n})):l.createElement(k,i({ref:t},d))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=m;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[c]="string"==typeof e?e:a,i[1]=s;for(var p=2;p<r;p++)i[p]=n[p];return l.createElement.apply(null,i)}return l.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3076:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var l=n(7462),a=(n(7294),n(3905));const r={slug:"2019/12/22/d3js-select-this",title:"\u5f9eD3.js\u7684select(this)\u63a2\u8a0e\u7684\u51fd\u5f0f\u4e2d\u7684this\u6307\u5411",authors:"thunderboy",tags:["d3.js","javascript"]},i=void 0,s={permalink:"/blog/2019/12/22/d3js-select-this",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2019/2019-12-22-\u5f9eD3.js\u7684select(this)\u63a2\u8a0e\u7684\u51fd\u5f0f\u4e2d\u7684this\u6307\u5411.md",source:"@site/blog/2019/2019-12-22-\u5f9eD3.js\u7684select(this)\u63a2\u8a0e\u7684\u51fd\u5f0f\u4e2d\u7684this\u6307\u5411.md",title:"\u5f9eD3.js\u7684select(this)\u63a2\u8a0e\u7684\u51fd\u5f0f\u4e2d\u7684this\u6307\u5411",description:"\u5176\u5be6\u9019\u500b\u6a19\u984c\u4e0b\u7684\u6709\u9ede\u4e0d\u592a\u7cbe\u78ba\uff0c\u4f46\u6211\u60f3\u5f9e\u6211\u81ea\u5df1\u672c\u8eab\u9047\u5230\u7684\u554f\u984c\u7684\u89d2\u5ea6\u4f86\u5207\u5165\uff0c\u7136\u5f8c\u518d\u9032\u4e00\u6b65\u6df1\u5165\u8aaa\u660e\u2026",date:"2019-12-22T00:00:00.000Z",formattedDate:"December 22, 2019",tags:[{label:"d3.js",permalink:"/blog/tags/d-3-js"},{label:"javascript",permalink:"/blog/tags/javascript"}],readingTime:13.135,hasTruncateMarker:!0,authors:[{name:"Adam You",title:"Engineer @ Blueplanet Inc.",url:"https://github.com/upstairs0102",imageURL:"/img/avatar.jpeg",key:"thunderboy"}],frontMatter:{slug:"2019/12/22/d3js-select-this",title:"\u5f9eD3.js\u7684select(this)\u63a2\u8a0e\u7684\u51fd\u5f0f\u4e2d\u7684this\u6307\u5411",authors:"thunderboy",tags:["d3.js","javascript"]},prevItem:{title:"(\u8b6f)Vue.js App\u6548\u80fd\u512a\u5316: part3 \u2013 Lazy loading Vuex modules",permalink:"/blog/2019/12/24/vue-optimization3"}},o={authorsImageUrls:[void 0]},p=[{value:"function () { ... }\u5167\u7684this",id:"function----\u5167\u7684this",level:2},{value:"\u7bad\u982d\u51fd\u5f0f\u4e2d\u7684this",id:"\u7bad\u982d\u51fd\u5f0f\u4e2d\u7684this",level:2},{value:"\u89e3\u6cd5\u4e00\uff08\u5efa\u8b70\u7528\u6cd5\uff09",id:"\u89e3\u6cd5\u4e00\u5efa\u8b70\u7528\u6cd5",level:2},{value:"\u89e3\u6cd5\u4e8c",id:"\u89e3\u6cd5\u4e8c",level:2},{value:"\u89e3\u6cd5\u4e09",id:"\u89e3\u6cd5\u4e09",level:2}],d={toc:p};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,l.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u5176\u5be6\u9019\u500b\u6a19\u984c\u4e0b\u7684\u6709\u9ede\u4e0d\u592a\u7cbe\u78ba\uff0c\u4f46\u6211\u60f3\u5f9e\u6211\u81ea\u5df1\u672c\u8eab\u9047\u5230\u7684\u554f\u984c\u7684\u89d2\u5ea6\u4f86\u5207\u5165\uff0c\u7136\u5f8c\u518d\u9032\u4e00\u6b65\u6df1\u5165\u8aaa\u660e\u2026"),(0,a.kt)("p",null,"\u4e8b\u60c5\u662f\u9019\u6a23\u7684\uff0c\u5728\u51fd\u5f0f\u4e2d\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"d3.select(this)"),"\u53ef\u4ee5\u53d6\u5f97\u8abf\u7528\u6b64\u51fd\u5f0f\u7684dom\uff0c\u6bd4\u5982\u8aaa\u6709\u4ee5\u4e0b\u5e7e\u7a2e\u60c5\u5883\u7bc4\u4f8b\uff1a"),(0,a.kt)("p",null,"1.\u4e8b\u4ef6"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"d3.selectAll('g')\n    .on('click', function(d){\n        var target = d3.select(this) // d3.select(this)\u53d6\u5f97\u9ede\u64ca\u5143\u7d20<g>\n        target.classed('active', true)\n    })\n")),(0,a.kt)("p",null,"2.\u9663\u5217\u8ff4\u5708"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"d3.selectAll('g')\n    .each(function(d, i){\n        var dom = d3.select(this) // d3.select(this)\u53d6\u5f97\u5143\u7d20<g>\n        var x = i * 20\n        dom.attr('transform', 'translate(' + x + ', 20)')\n    })\n")),(0,a.kt)("p",null,"3.\u52d5\u756b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'dom.transition()\nvar dom = d3.select("body").append("div")  \n\ndom.duration(2000)\n  .tween("number", function(d) {\n    var inter = d3.interpolateRound(0, 100);\n    return function(t) {\n        var n = inter(t)\n      d3.select(this).html(n) // d3.select(this) == dom\n    }\n  })\n')),(0,a.kt)("p",null,"\u5230\u76ee\u524d\u70ba\u6b62\u90fd\u6c92\u6709\u554f\u984c\uff0c\u5f8c\u4f86\u56e0\u5c08\u6848\u9700\u6c42\u6539\u70baes6\u8a9e\u6cd5\uff0c\u6240\u6709\u7684\u51fd\u5f0f\u4e5f\u90fd\u6539\u70ba\u4e86",(0,a.kt)("strong",{parentName:"p"},"\u7bad\u982d\u51fd\u5f0f"),"\uff0c\u6b64\u6642\u958b\u59cb\u767c\u751f\u554f\u984c\u4e86\uff0c\u4ee5\u4e0a\u8ff0\u7684\u7b2c\u4e00\u500b\u7bc4\u4f8b\u4f86\u8aaa\u6703\u662f\u9577\u9019\u500b\u6a23\u5b50\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"d3.selectAll('g')\nd3.selectAll('g')   \n    .on('click', d => {\n        let target = d3.select(this) // d3.select(this)\u53d6\u5f97\u5c0d\u8c61\u767c\u751f\u932f\u8aa4\n        target.classed('active', true)\n    })\n")),(0,a.kt)("p",null,"\u5728\u9019\u4e09\u500b\u4f8b\u5b50\u7576\u4e2d\uff0c\u539f\u672cthis\u90fd\u6703\u6307\u5411\u5230",(0,a.kt)("inlineCode",{parentName:"p"},"<g>"),"\u5143\u7d20\u7576\u4e2d\uff0c\u53ef\u662f\u7576\u51fd\u5f0f\u6539\u5beb\u6210\u7bad\u982d\u51fd\u5f0f\u7684\u6642\u5019this\u8b8a\u6210\u6307\u5411\u5230",(0,a.kt)("inlineCode",{parentName:"p"},"window"),"\u3002"),(0,a.kt)("p",null,'\u96d6\u7136\u6211\u539f\u672c\u5c31\u7d04\u7565\u77e5\u9053javascript\u7684\u67d0\u4e9b\u898f\u5247\uff0c"function"\u548c\u7bad\u982d\u51fd\u5f0f\u5169\u7a2e\u5beb\u6cd5\u4e2d\u4f7f\u7528this\u6703\u6307\u5411\u5230\u4e0d\u540c\u7684\u5730\u65b9\uff0c\u4f46\u662f\u5c0d\u6b64\u4e26\u6c92\u6709\u6df1\u5165\u7684\u53bb\u4e86\u89e3\u3001\u4ee5\u53ca\u5c0d\u65bcd3.select(this)\u9019\u500b\u5beb\u6cd5\u7684\u610f\u7fa9\u4e5f\u4e0d\u662f\u5f88\u6e05\u695a\u3002\u9019\u500b\u5beb\u6cd5\u539f\u672c\u662f\u7167\u8457\u66f8\u4e0a\u6559\u5b78\u7167\u8457\u5beb\u7684\uff0c\u53ea\u77e5\u9053\u8981\u9019\u6a23\u5beb\u4f46\u4e0d\u77e5\u539f\u56e0\u70ba\u4f55\uff0c\u77e5\u5176\u7136\u4e0d\u77e5\u6240\u4ee5\u7136\uff0c\u6240\u4ee5\u9047\u5230\u554f\u984c\u4e5f\u4e0d\u77e5\u5982\u4f55\u89e3\u6c7a\u3002'),(0,a.kt)("p",null,"\u7576\u6211\u7b2c\u4e00\u6b21\u9047\u5230\u9019\u500b\u554f\u984c\u6211\u9084\u4ee5\u70ba\u662f\u8e29\u5230D3\u7684\u5751\uff0c\u82b1\u4e86\u9ede\u6642\u9593\u7814\u7a76\u5f8c\u7d42\u65bc\u77e5\u9053\u9019\u5b8c\u5b8c\u5168\u5168\u662fjavascript\u672c\u8eab\u7684\u554f\u984c\uff0c\u4e26\u4e0d\u662fD3\u7684\u7279\u6027\u9020\u6210\uff0c\u4e0b\u9762\u6703\u9032\u4e00\u6b65\u8aaa\u660e\u539f\u56e0\u4ee5\u53ca\u89e3\u6c7a\u9019\u500b\u554f\u984c\u7684\u89e3\u6cd5\u3002"),(0,a.kt)("h1",{id:"\u63a2\u7a76d3selectthis\u539f\u7406"},"\u63a2\u7a76d3.select(this)\u539f\u7406"),(0,a.kt)("p",null,"\u8981\u7406\u89e3",(0,a.kt)("inlineCode",{parentName:"p"},"d3.select(this)"),"\u7684\u539f\u7406\uff0c",(0,a.kt)("strong",{parentName:"p"},"\u5176\u5be6\u5c31\u7b49\u540c\u65bc\u7406\u89e3javascript\u7684this"),"\u3002\u6211\u4e00\u958b\u59cb\u6703\u8aa4\u4ee5\u70ba\u9019\u662fD3\u63d0\u4f9b\u7684\u7279\u6b8a\u7528\u6cd5\uff0c\u5c31\u662f\u56e0\u70ba\u5c0d\u65bcjavascript\u7684this\u4e86\u89e3\u7684\u4e0d\u5920\u6df1\u5165\u6240\u81f4\uff1b\u6240\u4ee5\u9019\u4e00\u7ae0\u7bc0\u8981\u8b1b\u7684\u5176\u5be6\u5c31\u662fjavascript\u800c\u5df2\uff0c\u8ddfD3\u6c92\u6709\u534a\u9ede\u95dc\u4fc2\u4e86\u3002"),(0,a.kt)("p",null,"\u9019\u88e1\u4e3b\u8981\u662f\u91dd\u5c0dfunction () { ... }\u5beb\u6cd5\u3001\u4ee5\u53ca\u4f7f\u7528\u7bad\u982d\u51fd\u5f0f\u4e2d\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"this")," \u5169\u7a2e\u4f86\u505a\u6bd4\u8f03\u5408\u8aaa\u660e\u3002\u7406\u89e3\u4e4b\u5f8c\u5c31\u6703\u77e5\u9053D3\u5167\u4f7f\u7528this\u6703\u6709\u9019\u6a23\u7684\u5dee\u7570\u4e86\u3002"),(0,a.kt)("h2",{id:"function----\u5167\u7684this"},"function () { ... }\u5167\u7684this"),(0,a.kt)("p",null,"\u9019\u88e1\u7684this\u5f88\u5bb9\u6613\u8aa4\u89e3\uff0c",(0,a.kt)("strong",{parentName:"p"},"this\u6307\u5411\u8ab0\u5176\u5be6\u8ddffunction\u662f\u5728\u54ea\u88e1\u5ba3\u544a\u4e26\u6c92\u6709\u95dc\u4fc2\uff0cthis\u6703\u6307\u5411\u7684\u5c0d\u8c61\u662f\u4f9d\u64da\u8abf\u7528\u6b64\u51fd\u5f0f\u7684\u7269\u4ef6\u662f\u8ab0"),"\u3002"),(0,a.kt)("p",null,"\u6bd4\u5982\u8aaa\uff0c\u67d0function\u5728window\uff08\u5168\u57df\uff09\u4e0a\u5ba3\u544a\uff0c\u800c\u547c\u53eb\u6b64function\u7684\u4eba\u4e5f\u662f\u5728window\uff0cfunction\u5167\u7684this\u4e5f\u662f\u5728window\uff08\u597d\u50cf\u7e5e\u53e3\u4ee4\uff09\u3002"),(0,a.kt)("p",null,"\u6211\u4e0a\u9762\u6240\u8b1b\u7684\u4e5f\u5c31\u662f\u4e00\u500b\u6700\u7c21\u55ae\u7684\u60c5\u6cc1\uff0c\u4ee5\u4e00\u6bb5\u7c21\u55ae\u7684\u7a0b\u5f0f\u4f86\u770b\u6703\u662f\u9577\u9019\u6a23\u5b50\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"window.word = 'hello world'\n\nfunction say() {\n  console.log(this.word)\n  // \u5370\u51fa hello world\n}\nsay()\n")),(0,a.kt)("p",null,"\u4f46\u5982\u679c\u51fd\u5f0f\u4e0d\u8b8a\uff0c\u4f46\u8abf\u7528\u6b64\u51fd\u5f0f\u7684\u4eba\u662f\u67d0\u7269\u4ef6\uff0c\u5247this\u5c31\u6703\u6307\u5411\u8a72\u7269\u4ef6\uff0c\u7bc4\u4f8b\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"window.word = 'hello world'\n\nfunction say() {\n  console.log(this.word)\n}\n\nvar people = {\n    word: 'how are you',\n    say: say\n}\n\nsay() // \u5370\u51fa hello world\npeople.say() // \u5370\u51fa how are you\n")),(0,a.kt)("p",null,"\u540c\u7406\uff0c\u8abf\u7528\u6b64\u51fd\u5f0f\u7684\u4eba\u70baDOM\uff0c\u5247this\u5c31\u6703\u6307\u5411\u8a72DOM\uff0c\u7bc4\u4f8b\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"function addBorder() {\n  this.style.border = '1px solid red'\n  // \u9ede\u64cael\u8abf\u7528addBorder\uff0cthis\u6703\u6307\u5411el\uff0c\u56e0\u6b64el\u6703\u52a0\u4e0a\u7d05\u7dda\n}\n\nvar el = document.querySelector('#element-id')\n\nel.addEventListener('click', addBorder)\n")),(0,a.kt)("p",null,"\u8b1b\u5230\u9019\u88e1",(0,a.kt)("inlineCode",{parentName:"p"},"d3.select(this)"),"\u80fd\u53d6\u5f97DOM\u7684\u539f\u7406\u5c31\u547c\u4e4b\u6b32\u51fa\u4e86\uff0c\u4e26\u4e0d\u662fD3\u505a\u4e86\u4ec0\u9ebc\u9ed1\u9b54\u6cd5\uff0c\u800c\u662fjavascript\u7684this\u539f\u672c\u5c31\u662f\u6703\u6307\u5411\u5230",(0,a.kt)("strong",{parentName:"p"},"\u8abf\u6574\u6b64\u51fd\u5f0f\u7684\u7269\u4ef6"),"\u3002"),(0,a.kt)("h2",{id:"\u7bad\u982d\u51fd\u5f0f\u4e2d\u7684this"},"\u7bad\u982d\u51fd\u5f0f\u4e2d\u7684this"),(0,a.kt)("p",null,"Javascript\u63a8\u51fa\u65b0\u7684\u7bc0\u982d\u51fd\u5f0f\uff0c\u5e7e\u4e4e\u5927\u90e8\u4efd\u548c\u539f\u4f86\u7684function\u6c92\u6709\u4ec0\u9ebc\u4e0d\u540c\uff0c\u504f\u504f\u5c31\u662fthis\u6307\u5411\u7684\u898f\u5247\u548c\u539f\u4f86\u4e0d\u540c\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u5728\u7bad\u982d\u51fd\u5f0f\u4e2dthis\u6307\u5411\u5ba3\u544a\u51fd\u5f0f\u7684\u7269\u4ef6\uff0c\u800c\u975e\u8abf\u7528\u51fd\u5f0f\u7684\u7269\u4ef6"),"\u3002\u4e5f\u5c31\u662f\u8aaa\u4ed6\u5728\u51fd\u5f0f\u88ab\u5ba3\u544a\u6642this\u7684\u6307\u5411\u5c31\u56fa\u5b9a\u4e0b\u4f86\u4e86\uff0c\u4e0d\u6703\u96a8\u8457\u4f7f\u7528\u7684\u65b9\u5f0f\u4e0d\u540c\u800c\u6539\u8b8a\u6307\u5411\u7684\u5c0d\u8c61\u3002"),(0,a.kt)("p",null,"\u7a0d\u5fae\u4fee\u6539\u524d\u9762\u7684\u7bc4\u4f8b\uff0c\u539f\u4f86\u7684say()\u51fd\u5f0f\u56e0\u70ba\u662f\u5728\u5168\u57dfwindow\u4e0a\u5ba3\u544a\u7684\uff0c\u6240\u4ee5\u7121\u8ad6\u7531\u54ea\u500b\u7269\u4ef6\u8abf\u7528this\u90fd\u662f\u6307\u5411\u5230window\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"window.word = 'hello world'\n\nlet say = () => {\n  console.log(this.word)\n}\n\nlet people = {\n    word: 'how are you',\n    say: say\n}\n\nsay() // \u5370\u51fa hello world\npeople.say() // \u5370\u51fa hello world\n")),(0,a.kt)("p",null," \u518d\u4f86\uff0c\u5ef6\u7e8c\u524d\u9762\u7684DOM\u4e8b\u4ef6\u7bc4\u4f8b\uff0c\u7a0b\u5f0f\u5b8c\u5168\u4e0d\u8b8a\uff0c\u53ea\u628afunction\u6539\u6210\u7bad\u982d\u51fd\u5f0f\uff0c\u6b64\u6642\u5c31\u6703\u5831\u932f\u4e86\uff0c\u56e0\u70bathis\u6307\u5411\u7684\u5c0d\u8c61\u4e0d\u518d\u662f\u8abf\u7528\u6b64\u51fd\u5f0f\u7684DOM\u672c\u8eab\uff0c\u800c\u662f\u6307\u5230window\u53bb\u4e86\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"let addBorder = () => {\n  this.style.border = '1px solid red'\n  // \u5831\u932f\uff0c\u56e0\u70bathis\u6307\u5411window\uff0cwindow\u5e95\u4e0b\u6c92\u6709style\u7269\u4ef6\n}\n\nlet el = document.querySelector('#element-id')\n\nel.addEventListener('click', addBorder)\n")),(0,a.kt)("h1",{id:"\u7bad\u982d\u51fd\u5f0f\u7684\u554f\u984c\u89e3\u6cd5"},"\u7bad\u982d\u51fd\u5f0f\u7684\u554f\u984c\u89e3\u6cd5"),(0,a.kt)("p",null,"\u722c\u6587\u5f8c\u6211\u6574\u7406\u51fa\u4e09\u7a2e\u89e3\u6cd5\uff0c\u5176\u4e2d\u7b2c\u4e00\u7a2e\u7528\u6cd5\u662f\u6211\u500b\u4eba\u7684\u63a8\u85a6\u7528\u6cd5\uff0c\u4e0d\u904e\u4ed6\u53ea\u9069\u7528v4\u4ee5\u4e0a\u7248\u672c\uff0c\u5982\u679c\u4f7f\u7528v3\u4ee5\u4e0b\u7248\u672c\u5c31\u53ea\u80fd\u4f7f\u89e3\u6cd5\u4e8c\u6216\u89e3\u6cd5\u4e09\u4e86\u3002"),(0,a.kt)("h2",{id:"\u89e3\u6cd5\u4e00\u5efa\u8b70\u7528\u6cd5"},"\u89e3\u6cd5\u4e00\uff08\u5efa\u8b70\u7528\u6cd5\uff09"),(0,a.kt)("p",null,"\u9019\u500b\u89e3\u6cd5\u53ef\u4ee5\u5b8c\u5b8c\u5168\u5168\u7684\u53d6\u4ee3",(0,a.kt)("inlineCode",{parentName:"p"},"d3.select(this)"),"\u800c\u4e14\u7a0b\u5f0f\u610f\u7fa9\u4e0a\u4e5f\u5341\u5206\u5408\u7406\uff0c\u4e0d\u904e\u53ea\u6709\u4e00\u4ef6\u5c0f\u5c0f\u7684\u4f46\u66f8\u5c31\u662f\u53ea\u9069\u7528D3 v4\u4ee5\u4e0a\u7684\u7248\u672c\uff0cv3\u662f\u4e0d\u652f\u63f4\u7684\u3002"),(0,a.kt)("p",null,"\u4e0a\u8ff0\u4e09\u500b\u7bc4\u4f8b\u7684\u51fd\u5f0f\u7576\u4e2d\uff0c\u6ce8\u5165\u53c3\u6578\u4e2d\u7684\u300c\u7b2c\u4e09\u500b\u53c3\u6578\u300d\u5c31\u662f\u300c\u8abf\u7528\u6b64\u51fd\u5f0f\u7684DOM\u7684\u96c6\u5408\uff08\u9663\u5217\uff09\u300d\uff0c\u900f\u904e\u51fd\u5f0f\u4e2d\u300c\u7b2c\u4e8c\u500b\u53c3\u6578\u300d\u4e5f\u5c31\u662f\u8a72\u8abf\u7528\u4efb\u52d9\u4e2d\u7684\u9663\u5217\u7d22\u5f15\uff0c\u5c31\u53ef\u4ee5\u627e\u5230\u8abf\u7528\u6b64\u51fd\u7684DOM\u2026"),(0,a.kt)("p",null,"\u8b1b\u8d77\u4f86\u6709\u9ede\u9952\u820c\uff0c\u7c21\u55ae\u8b1b\uff0c\u5047\u8a2d\u9019\u500b\u9663\u5217\u547d\u540d\u70ba",(0,a.kt)("inlineCode",{parentName:"p"},"all"),"\u3001\u7d22\u5f15\u70ba",(0,a.kt)("inlineCode",{parentName:"p"},"i"),"\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"all[i]"),"\u5c31\u6703\u7b49\u540c\u65bc\u6211\u5011\u5c0b\u5c0b\u8993\u8993\u7684function\u4e2d\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"this"),"\u5566\uff0c\u800c",(0,a.kt)("inlineCode",{parentName:"p"},"d3.select(all[i])"),"\u4e5f\u5c31\u7b49\u540c\u65bc",(0,a.kt)("inlineCode",{parentName:"p"},"d3.select(this)"),"\u3002"),(0,a.kt)("p",null,"\u76f4\u63a5\u7528\u672c\u6587\u6700\u4e00\u958b\u59cb\u7684\u4e09\u500b\u7bc4\u4f8b\u91cd\u65b0\u7528\u6b64\u89e3\u6cd5\u4f86\u6539\u5beb\uff1a"),(0,a.kt)("p",null,"1.\u4e8b\u4ef6"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"d3.selectAll('g')\n    .on('click', (d, i, all) => {\n        let target = d3.select(all[i]) // d3.select(all[i])\u53d6\u5f97\u9ede\u64ca\u5143\u7d20<g>\n        target.classed('active', true)\n    })\n")),(0,a.kt)("p",null,"2.\u9663\u5217\u8ff4\u5708"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"d3.selectAll('g')\n    .each((d, i, all) => {\n        let dom = d3.select(all[i]) // d3.select(all[i])\u53d6\u5f97\u5143\u7d20<g>\n        let x = i * 20\n        dom.attr('transform', 'translate(' + x + ', 20)')\n    })\n")),(0,a.kt)("p",null,"3.\u52d5\u756b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'dom.transition()\nconst dom = d3.select("body").append("div")  \n\ndom.duration(2000)\n  .tween("number", (d, i, all) => {\n    let inter = d3.interpolateRound(0, 100);\n    return t => {\n        let n = inter(t)\n      d3.select(all[i]).html(n) // d3.select(all[i]) == dom\n    }\n  })\n\n')),(0,a.kt)("h2",{id:"\u89e3\u6cd5\u4e8c"},"\u89e3\u6cd5\u4e8c"),(0,a.kt)("p",null,"\u8a8d\u771f\u8b1b\u8d77\u4f86\u5176\u5be6\u9019\u500b\u65b9\u6cd5\u771f\u7684\u9084\u4e0d\u932f\uff0c\u96d6\u7136\u807d\u8d77\u4f86\u597d\u50cf\u6709\u8b1b\u548c\u6c92\u8b1b\u597d\u50cf\u4e00\u6a23\uff0c\u90a3\u5c31\u662f\u7528\u539f\u672c\u7684\u51fd\u5f0f\u5beb\u6cd5function () { ... }\uff0c\u4e0d\u8981\u4f7f\u7528\u7bad\u982d\u51fd\u5f0f\uff0c\u8b1d\u8b1d\u89c0\u8cde\uff08\u554a\u4e0d\u662f\u5566\uff09"),(0,a.kt)("p",null,"\u9019\u9084\u771f\u53ef\u80fd\u771f\u7684\u662f\u7a2e\u7c21\u55ae\u7684\u89e3\u6cd5\uff0c\u53ea\u662f\u5728\u67d0\u4e9b\u60c5\u6cc1\u4e0b\u53c8\u6c92\u8fa6\u6cd5\u771f\u7684\u7b26\u5408\u9700\u6c42\u3002"),(0,a.kt)("p",null,"\u5c31\u6211\u81ea\u5df1\u672c\u8eab\u7684\u4f8b\u5b50\uff0c\u6211\u7684\u4f7f\u7528\u60c5\u5883\u662f\u5728js\u7684class\uff08\u6216\u8005\u8aaa\u662f\u7269\u4ef6\uff09\u7576\u4e2d\u4f7f\u7528d3\uff0c\u6211\u5e0c\u671bthis\u672c\u8eab\u6709\u5176\u610f\u7fa9\uff08\u6211\u5e0c\u671b\u6307\u5411\u5230class\u672c\u8eab\uff09\uff0c\u5982\u679c\u51fd\u5f0f\u4f7f\u7528function () { ... }\u90a3\u6211\u5c31\u7121\u6cd5\u900f\u904ethis\u6307\u5411\u5230class\u672c\u8eab\u3002"),(0,a.kt)("p",null,"\u5c31\u9019\u7a2e\u60c5\u6cc1\u4f86\u8aaa\u9084\u662f\u6709\u4e00\u65b9\u5f0f\u53ef\u89e3\u6c7a\uff0c\u4e5f\u5c31\u662f\u5728\u51fd\u5f0f\u5916\u9762\u5ba3\u544a\u4e00\u500b\u8b8a\u6578\u6307\u5411\u5230\u51fd\u5f0f\u5916\u7684thi\uff0c\u901a\u5e38\u9019\u500b\u8b8a\u6578\u6703\u53d6\u540d\u53eb",(0,a.kt)("inlineCode",{parentName:"p"},"self"),"\u6216",(0,a.kt)("inlineCode",{parentName:"p"},"that"),"\u6216\u662f\u5176\u4ed6\u81ea\u8a02\u6709\u610f\u7fa9\u7684\u540d\u7a31\uff0c\u9019\u500b\u7b97\u662fjavascript\u4e2d\u5e38\u7528\u7684\u5c0f\u6280\u5de7\u3002"),(0,a.kt)("p",null,"\u8209\u4f8b\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"export default class {\n    constructor () {\n        this.className = 'active'\n        \n        const self = this // \u81ea\u8a02\u540d\u70baself\u7684\u8b8a\u6578\u6307\u5411\u5230class\u7684this\n        \n        // ...\u7565...\n        \n    d3.selectAll('g')\n      .on('click', function(){\n        let target = d3.select(this) // this\u6307\u5411<g>\u5143\u7d20\n        target.classed(self.className, true) // self\u6307\u5411\u5230class\u7684this\n      })\n    }\n}\n\n\n")),(0,a.kt)("h2",{id:"\u89e3\u6cd5\u4e09"},"\u89e3\u6cd5\u4e09"),(0,a.kt)("p",null,"\u6700\u5f8c\u9019\u500b\u89e3\u6cd5\u5f88\u5bb9\u6613\u5c31\u51fa\u73fe\u6f0f\u6d1e\uff0c\u800c\u4e14\u53ea\u9069\u7528\u4e0a\u8ff0\u4e09\u7a2e\u60c5\u5883\u7576\u4e2d\u7684\u300c\u4e8b\u4ef6\u51fd\u5f0f\u300d\u7576\u4e2d\u2026 \u6240\u4ee5\u5c31\u7576\u4f5c\u53c3\u8003\u5c31\u597d\u4e86 XD\uff08\u61c9\u8a72\u8aaa\uff0c\u6b64\u7528\u6cd5\u7684\u7a0b\u5f0f\u610f\u7fa9\u548cd3.select(this)\u4e0d\u592a\u76f8\u540c\uff0c\u9069\u4e0d\u9069\u7528\u9700\u4f9d\u4f60\u7684\u4f7f\u7528\u60c5\u5883\u4f86\u770b\uff09\u3002"),(0,a.kt)("p",null,"\u89e3\u6cd5\u5c31\u662f\u6539\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"d3.event.target"),"\u4f86\u4ee3\u66ff\u539f\u4f86\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"this"),"\u3002"),(0,a.kt)("p",null,"\u4f46\u662f\u6211\u8aaa\u7684\u6f0f\u6d1e\uff0c\u662f\u4ed6\u53d6\u5230\u7684\u5c0d\u8c61\u548c\u539f\u5148\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"this"),"\u6709\u53ef\u80fd\u6703\u4e0d\u4e00\u6a23\uff08\uff01\uff01\uff09\uff0c\u807d\u8d77\u4f86\u597d\u50cf\u5f88\u53ef\u6015\uff0c\u4f46\u5982\u679c\u4e86\u89e3javascript\u7684\u4e8b\u4ef6\u50b3\u905e\u6a5f\u5236\u5c31\u77e5\u9053\u9019\u500b\u518d\u6b63\u5e38\u4e0d\u904e\u3002"),(0,a.kt)("p",null,"\u6211\u6240\u6307\u7684\u5c31\u662fjavascript\u7684event bubbling\uff0c\u4e8b\u4ef6\u50b3\u905e\u6642\u6703\u7531\u6700\u5167\u5c64\u7684DOM\u4e00\u5c64\u4e00\u5c64\u5f80\u5916\u50b3\u905e\u3002\u5047\u8a2d\u6709\u4e00\u7d44DOM\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},"<svg>\n  <g>\n    <path ...\u7565...>\n    <text ...\u7565...>\n  </g>\n  <g>\n    <path ...\u7565...>\n    <text ...\u7565...>\n  </g>\n  <g>\n    <path ...\u7565...>\n    <text ...\u7565...>\n  </g>\n</svg>\n\n")),(0,a.kt)("p",null,"\u5047\u8a2d\u524d\u9762\u7bc4\u4f8b\u7684\u7b2c\u4e00\u6bb5\u7a0b\u5f0f\u78bc\u7684html\u662f\u9577\u9019\u6a23\u500b\u5b50\uff0c\u5728\u8a72\u4f8b\u4e2dclick\u76e3\u807d\u4e8b\u4ef6\u7d81\u5728",(0,a.kt)("inlineCode",{parentName:"p"},"<g>"),"\u4e0a\u9762\uff08\u4e5f\u5c31\u662f\u8aaa\u7528d3.select(this)\u53ef\u4ee5\u53d6\u5230\u88ab\u9ede\u64ca\u5230\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"<g>"),"\u5143\u7d20\uff09\uff0c\u4f46\u662f\u6ed1\u9f20\u9ede\u64ca\u6642\u6709\u53ef\u80fd\u662f\u9ede\u5230\u756b\u9762\u4e0a\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"<path>"),"\u6216",(0,a.kt)("inlineCode",{parentName:"p"},"<text>"),"\u5143\u7d20\uff0c\u90a3",(0,a.kt)("inlineCode",{parentName:"p"},"d3.event.target"),"\u5c31\u6703\u662f",(0,a.kt)("inlineCode",{parentName:"p"},"<path>"),"\u6216",(0,a.kt)("inlineCode",{parentName:"p"},"<text>"),"\uff0c\u800c\u4e0d\u6703\u662f",(0,a.kt)("inlineCode",{parentName:"p"},"<g>\u3002")),(0,a.kt)("p",null,"\u9019\u88e1\u6709\u4e00\u500b\u65b9\u6cd5\u53ef\u4ee5\u89e3\u6c7a\u9019\u500b\u554f\u984c\uff0c\u5c31\u662f\u5728\u525b\u624d\u53d6\u5230\u7684\u5c0d\u8c61\u4e0a\u52a0\u4e0a",(0,a.kt)("inlineCode",{parentName:"p"},".parentNode"),"\u5c31\u53ef\u4ee5\u627e\u5230\u4ed6\u7684\u7236\u7bc0\u9ede\u3002"),(0,a.kt)("p",null,"\u2026\u4f9d\u64da\u7684\u6211\u7d93\u9a57\uff0c\u9019\u500b\u65b9\u6cd5\u53c8\u53ef\u80fd\u6703\u8d8a\u88dc\u8d8a\u5927\u6d1e\u2026"),(0,a.kt)("p",null,"\u9019\u500b\u60c5\u6cc1\u662f\uff0c\u5982\u679c\u4f60\u7684DOM\u662f\u591a\u5c64\u7684\uff0c\u5c31\u6c92\u6709\u8fa6\u6cd5\u4fdd\u8b49\u4e8b\u4ef6\u50b3\u905e\u662f\u5f9e\u7b2c\u4e8c\u5c64\u958b\u59cb\uff0c\u4ed6\u6709\u53ef\u80fd\u6703\u5f9e\u7b2c\u4e09\u5c64\u6216\u7b2c\u56db\u5c64\uff0c\u56e0\u6b64\u5c31\u6c92\u8fa6\u6cd5\u6b63\u5e38\u627e\u5230\u4f60\u6700\u521d\u60f3\u627e\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"<g>"),"\u3002"),(0,a.kt)("h1",{id:"\u7e3d\u7d50"},"\u7e3d\u7d50"),(0,a.kt)("p",null,"\u5047\u8a2d\u4e0a\u8ff0\u89e3\u6c7a\u65b9\u5f0f\u4e2d\uff0c\u4f60\u548c\u6211\u4e00\u6a23\u9078\u64c7\u4f7f\u7528\u300c\u89e3\u6cd5\u4e00\u300d\uff0c\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"d3.select(all[i])"),"\u4f86\u53d6\u4ee3",(0,a.kt)("inlineCode",{parentName:"p"},"d3.select(this)"),"\uff0c\u90a3\u5c0d\u65bc\u9019\u500b\u300cthis\u300d\u5230\u5e95\u662f\u4ec0\u9ebc\u4f3c\u4e4e\u5c31\u6c92\u90a3\u9ebc\u91cd\u8981\u4e86\uff08\uff1f\uff09\u3002"),(0,a.kt)("p",null,"\u5c0d\u6211\u500b\u4eba\u800c\u8a00\uff0c\u56e0\u70ba\u6211\u7684D3\u5c08\u6848\u5df2\u7d93\u63a1\u7528javascript\u6a21\u7d44\u5316\u958b\u767c\uff08\u4f7f\u7528es6 module\u4ee5\u53cawebpack\u7de8\u8b6f\uff09\uff0cthis\u5728\u5c08\u6848\u7576\u4e2d\u662f\u6709\u5176\u610f\u7fa9\uff0c\u6240\u4ee5\u5373\u4f7f\u4e0d\u662f\u7528\u5728\u4e0a\u8ff0\u60c5\u5883\uff0c\u5728\u5176\u4ed6\u7684\u7a0b\u5f0f\u88e1\u4e5f\u662f\u6703\u9047\u5230\u985e\u4f3c\u554f\u984c\u3002\u53e6\u5916\uff0c\u591a\u65b9\u9762\u7684\u5438\u6536\u77e5\u8b58\u80fd\u5920\u66f4\u63d0\u4f9b\u7a0b\u5f0f\u7684\u638c\u63a7\u80fd\u529b\uff0c\u800c\u4e14\u5728\u9047\u5230\u554f\u984c\u6642\u5728\u5c0b\u627e\u89e3\u6c7a\u65b9\u6848\u4e5f\u6703\u66f4\u6709\u5f48\u6027\u3002"),(0,a.kt)("p",null,"\u4ee5\u4e0a\u662f\u6211\u7684\u5b78\u7fd2\u7684\u4e00\u500b\u6574\u7406\uff0c\u55ae\u7d14\u662f\u5f9e\u6211\u9047\u5230\u554f\u984c\u7684\u89d2\u5ea6\u8a66\u8457\u4ee5\u6211\u7684\u80fd\u529b\u9032\u4e00\u6b65\u63a2\u8a0e\u3002\u8aaa\u5be6\u5728javascript\u7684this\u9084\u771f\u662f\u535a\u5927\u7cbe\u6df1\uff0c\u5c31\u8a9e\u8a00\u672c\u8eab\u53ef\u80fd\u53ea\u6478\u5230\u57fa\u672c\u6982\u5ff5\u800c\u5df2\uff0c\u5982\u679c\u5728\u6587\u5b57\u6216\u89c0\u5ff5\u4e0a\u5982\u679c\u6709\u4e0d\u5920\u6b63\u78ba\u7684\u5730\u65b9\u518d\u9ebb\u7169\u5148\u9032\u591a\u591a\u6307\u6559\u611f\u8b1d~\u3002"))}c.isMDXComponent=!0}}]);