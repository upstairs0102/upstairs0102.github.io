"use strict";(self.webpackChunkupstairs_0102_github_io=self.webpackChunkupstairs_0102_github_io||[]).push([[977],{3905:(A,e,t)=>{t.d(e,{Zo:()=>p,kt:()=>c});var n=t(7294);function a(A,e,t){return e in A?Object.defineProperty(A,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):A[e]=t,A}function r(A,e){var t=Object.keys(A);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(A);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(A,e).enumerable}))),t.push.apply(t,n)}return t}function l(A){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?r(Object(t),!0).forEach((function(e){a(A,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(A,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(e){Object.defineProperty(A,e,Object.getOwnPropertyDescriptor(t,e))}))}return A}function s(A,e){if(null==A)return{};var t,n,a=function(A,e){if(null==A)return{};var t,n,a={},r=Object.keys(A);for(n=0;n<r.length;n++)t=r[n],e.indexOf(t)>=0||(a[t]=A[t]);return a}(A,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(A);for(n=0;n<r.length;n++)t=r[n],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(A,t)&&(a[t]=A[t])}return a}var i=n.createContext({}),o=function(A){var e=n.useContext(i),t=e;return A&&(t="function"==typeof A?A(e):l(l({},e),A)),t},p=function(A){var e=o(A.components);return n.createElement(i.Provider,{value:e},A.children)},d="mdxType",u={inlineCode:"code",wrapper:function(A){var e=A.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(A,e){var t=A.components,a=A.mdxType,r=A.originalType,i=A.parentName,p=s(A,["components","mdxType","originalType","parentName"]),d=o(t),m=a,c=d["".concat(i,".").concat(m)]||d[m]||u[m]||r;return t?n.createElement(c,l(l({ref:e},p),{},{components:t})):n.createElement(c,l({ref:e},p))}));function c(A,e){var t=arguments,a=e&&e.mdxType;if("string"==typeof A||a){var r=t.length,l=new Array(r);l[0]=m;var s={};for(var i in e)hasOwnProperty.call(e,i)&&(s[i]=e[i]);s.originalType=A,s[d]="string"==typeof A?A:a,l[1]=s;for(var o=2;o<r;o++)l[o]=t[o];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},4394:(A,e,t)=>{t.r(e),t.d(e,{assets:()=>i,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>o});var n=t(7462),a=(t(7294),t(3905));const r={slug:"/ithome2018/day15",title:"Day15 \u7df4\u7fd2 - \u6563\u5e03\u5716 (1)",authors:"thunderboy",tags:["ithome","d3.js"]},l=void 0,s={unversionedId:"[\u9435\u4eba\u8cfd]D3.js\u65b0\u624b\u958b\u767c\u57fa\u672c\u5716\u8868/ithome2018-day15",id:"[\u9435\u4eba\u8cfd]D3.js\u65b0\u624b\u958b\u767c\u57fa\u672c\u5716\u8868/ithome2018-day15",title:"Day15 \u7df4\u7fd2 - \u6563\u5e03\u5716 (1)",description:"\u4e00\u3001\u4ee5\u6bd4\u4f8b\u5c3a\u7e6a\u5236x,y\u8ef8\u5ea7\u6a19\u8ef8",source:"@site/docs/[\u9435\u4eba\u8cfd]D3.js\u65b0\u624b\u958b\u767c\u57fa\u672c\u5716\u8868/ithome2018-day15.md",sourceDirName:"[\u9435\u4eba\u8cfd]D3.js\u65b0\u624b\u958b\u767c\u57fa\u672c\u5716\u8868",slug:"/ithome2018/day15",permalink:"/docs/ithome2018/day15",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/[\u9435\u4eba\u8cfd]D3.js\u65b0\u624b\u958b\u767c\u57fa\u672c\u5716\u8868/ithome2018-day15.md",tags:[{label:"ithome",permalink:"/docs/tags/ithome"},{label:"d3.js",permalink:"/docs/tags/d-3-js"}],version:"current",frontMatter:{slug:"/ithome2018/day15",title:"Day15 \u7df4\u7fd2 - \u6563\u5e03\u5716 (1)",authors:"thunderboy",tags:["ithome","d3.js"]},sidebar:"tutorialSidebar",previous:{title:"Day14 \u5ea7\u6a19\u8ef8",permalink:"/docs/ithome2018/day14"},next:{title:"Day16 \u7df4\u7fd2 - \u6563\u5e03\u5716 (2)",permalink:"/docs/ithome2018/day16"}},i={},o=[{value:"\u4e00\u3001\u4ee5\u6bd4\u4f8b\u5c3a\u7e6a\u5236x,y\u8ef8\u5ea7\u6a19\u8ef8",id:"\u4e00\u4ee5\u6bd4\u4f8b\u5c3a\u7e6a\u5236xy\u8ef8\u5ea7\u6a19\u8ef8",level:2},{value:"\u4e8c\u3001\u5ea7\u6a19\u8ef8\u6a23\u5f0f",id:"\u4e8c\u5ea7\u6a19\u8ef8\u6a23\u5f0f",level:2}],p={toc:o};function d(A){let{components:e,...r}=A;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u4e00\u4ee5\u6bd4\u4f8b\u5c3a\u7e6a\u5236xy\u8ef8\u5ea7\u6a19\u8ef8"},"\u4e00\u3001\u4ee5\u6bd4\u4f8b\u5c3a\u7e6a\u5236x,y\u8ef8\u5ea7\u6a19\u8ef8"),(0,a.kt)("p",null,"\u4eca\u5929\u8981\u4f86\u7df4\u7fd2\u7e6a\u88fd\u4e00\u500b\u5177\u6709\u5169\u500b\u53c3\u6578\u8cc7\u6599\u7684\u6563\u5e03\u5716\u5716\u8868\uff0c\u9019\u500b\u6563\u5e03\u5716\u5c07\u5404\u5225\u8cc7\u6599\u7684\u5169\u500b\u53c3\u6578\u503c\u653e\u5230x,y\u5ea7\u8ef8\u4e0a\u9762\u756b\u51fa\u5ea7\u6a19\u9ede\u3002"),(0,a.kt)("p",null,"\u9019\u500b\u7bc4\u4f8b\u8cc7\u6599\u96c6\u662f\u4e00\u7d44\u4e8c\u7dad\u9663\u5217\uff0c\u5176\u4e2d\u6bcf\u4e00\u7d44\u9663\u5217\u7684\u7b2c1\u30012\u500b\u53c3\u6578\u5c07\u5c0d\u61c9\u5230x,y\u8ef8\u5ea7\u6a19\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"var dataSet = [[0.5, 0.5], [0.7,0.8], [0.4,0.9], [0.11,0.32], [0.88,0.25], [0.75,0.12], [0.5,0.1], [0.2,0.3], [0.4,0.1], [0.6,0.7]] \n")),(0,a.kt)("p",null,"\u9996\u5148\u8a2d\u5b9a\u6240\u9700\u8981\u7684\u8b8a\u6578\u3002",(0,a.kt)("inlineCode",{parentName:"p"},"width"),"\u53ca",(0,a.kt)("inlineCode",{parentName:"p"},"height"),"\u8a2d\u5b9asvg\u7684\u5bec\u9ad8\uff0c\u6211\u5011\u5e0c\u671b\u5728\u5834\u666f\u5167\u5f80\u5167\u3001\u4e0a\u4e0b\u5de6\u53f3\u540430px\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"xAxisWidth"),"\u53ca",(0,a.kt)("inlineCode",{parentName:"p"},"yAxisWidth"),"\u4ee3\u8868\u6240\u8981\u7e6a\u88fd\u7684\u5716\u8868\u7bc4\u570d\u5bec\u9ad8\uff08x\u53cay\u8ef8\u7684\u9577\u5ea6\uff09\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"var width = 400\nvar height = 300\nvar padding = {top:30, right:30, bottom:30, left:30}\nvar xAxisWidth = width - padding.left - padding.right\nvar yAxisWidth = height - padding.top - padding.bottom\n")),(0,a.kt)("p",null,"\u7e6a\u88fdsvg"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'var svg = d3.select("body").append("svg")\n  .attr("width",width)\n  .attr("height",height)\n')),(0,a.kt)("p",null,"\u63a5\u8457\u4f7f\u7528",(0,a.kt)("strong",{parentName:"p"},"\u7dda\u6027\u6bd4\u4f8b\u5c3a(Linear Scale)"),"\u5c07\u9663\u5217\u8cc7\u6599\u5340\u9593\u5c0d\u6620\u5230\u5716\u8868\u5ea7\u6a19\u5340\u584a\u7684\u5bec\u9ad8\u3002"),(0,a.kt)("p",null,"\u7531\u65bc\u9019\u6b21\u7684\u8cc7\u6599\u662f\u5169\u7dad\u9663\u5217\u6240\u4ee5\u5728\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"d3.max()"),"\u65b9\u6cd5\u6c42\u5f97\u6700\u5927\u503c\u6642\uff0c\u9664\u4e86\u7b2c\u4e00\u500b\u53c3\u6578\u662f\u653e\u5165\u8cc7\u6599\u9663\u5217\u3001\u7b2c\u4e8c\u500b\u53c3\u6578\u8981\u653e\u5165\u6c42\u503c\u7684callback function\uff0c\u6240\u4ee5\u5c0d\u61c9x\u8ef8\u7684\u8cc7\u6599\u6240\u8981\u7684\u662f\u5404\u5225\u9663\u5217\u7684\u7b2c\u4e00\u500b\u53c3\u6578\u3001y\u8ef8\u662f\u7b2c\u4e8c\u500b\u53c3\u6578\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"var xScale = d3.scale.linear()\n  .domain([0, d3.max(dataSet,function(d){ return d[0] })])\n  .range([0,xAxisWidth])\n  \nvar yScale = d3.scale.linear()\n  .domain([0, d3.max(dataSet,function(d){ return d[1] })])\n  .range([0,yAxisWidth])\n")),(0,a.kt)("p",null,"\u63a5\u8457\u7e6a\u88fd\u5ea7\u6a19\u8ef8\u7684\u65b9\u5f0f\u548c\u6628\u5929\u6240\u7528\u7684\u5beb\u6cd5\u90fd\u662f\u4e00\u6a21\u4e00\u6a23\u7684\uff0c\u53ea\u4e0d\u904e\u591a\u4e86y\u8ef8\u5ea7\u6a19\u8ef8\uff0c\u4ee5\u53ca\u4f9d\u7167\u4e0a\u8ff0\u6240\u5217\u7684\u5bec\u9ad8\u4ee5\u53ca\u9593\u9694\u8ddd\u96e2\u505a\u4e00\u4e9b\u8a08\u7b97\u5f8c\u64fa\u653e\u9032\u53bb\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'var xAxis = d3.svg.axis()\n  .scale(xScale)\n  .orient("bottom")\n  \nvar yAxis = d3.svg.axis()\n  .scale(yScale)\n  .orient("left")\n  \nvar xAxisG = svg.append("g")\n  .attr("transform","translate("+padding.left+","+(padding.top + yAxisWidth)+")")\n  .call(xAxis)\n  \nvar yAxisG = svg.append("g")\n  .attr("transform","translate("+padding.left+","+padding.top+")")\n  .call(yAxis)\n')),(0,a.kt)("p",null,"\u7e6a\u88fd\u7684\u7d50\u679c\u5982\u4e0b\u5716"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Day15 \u7df4\u7fd2 - \u6563\u5e03\u5716 (1)_1",src:t(2584).Z,width:"397",height:"305"})),(0,a.kt)("p",null,"\u4f46\u6211\u5011\u6703\u767c\u73fey\u8ef8\u5ea7\u6a19\u65b9\u5411\u4e26\u4e0d\u662f\u6211\u5011\u8981\u7684\uff0c\u56e0\u70bad3\u7684\u5ea7\u6a19\u662f\u7531\u5de6\u4e0a\u65b9\u505a\u70ba\u8d77\u9ede\u7684\uff0c\u70ba\u4e86\u8981\u89e3\u6c7a\u9019\u500b\u554f\u984c\u6211\u5011\u53ef\u4ee5\u5728\u6bd4\u4f8b\u5c3a\u4e0a\u505a\u4e00\u9ede\u624b\u8173\u3002"),(0,a.kt)("p",null,"\u53ea\u8981\u628a\u5b9a\u7fa9\u57dfdomain()\u4e2d\u7684\u5169\u500b\u53c3\u6578\u5012\u904e\u4f86\u5373\u53ef\u3002\u539f\u672c\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"domain(\u6700\u5c0f\u503c,\u6700\u5927\u503c)"),"\u6539\u653e\u5165",(0,a.kt)("inlineCode",{parentName:"p"},"domain(\u6700\u5927\u503c,\u6700\u5c0f\u503c)"),"\u5373\u53ef"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"var yScaleReverse = d3.scale.linear()\n  .domain([d3.max(dataSet,function(d){ return d[1] }),0])\n  .range([0,yAxisWidth])\n")),(0,a.kt)("p",null,"\u7136\u5f8c\u5c31\u53ef\u4ee5\u5f97\u5230\u6211\u5011\u6240\u8981\u7684\u7d50\u679c"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Day15 \u7df4\u7fd2 - \u6563\u5e03\u5716 (1)_2",src:t(3810).Z,width:"391",height:"294"})),(0,a.kt)("h2",{id:"\u4e8c\u5ea7\u6a19\u8ef8\u6a23\u5f0f"},"\u4e8c\u3001\u5ea7\u6a19\u8ef8\u6a23\u5f0f"),(0,a.kt)("p",null,"\u5176\u4e2d\u70ba\u4e86\u8b93\u5ea7\u6a19\u8ef8\u597d\u770b\u4e00\u4e9b\uff0c\u6240\u4ee5\u6309\u7167\u6628\u5929\u6240\u5beb\u7684css\u6a23\u5f0f\u4f86\u5957\u7528\u3002\u7136\u5f8c\u5728svg\u4e0a\u4f7f\u7528classed()\u65b9\u6cd5\u52a0\u4e0a\u6a23\u5f0f\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'var xAxisG = svg.append("g")\n  .attr("transform","translate("+padding.left+","+(padding.top + yAxisWidth)+")")\n  .classed("xAxis",true)\n  .call(xAxis)\n  \nvar yAxisG = svg.append("g")\n  .attr("transform","translate("+padding.left+","+padding.top+")")\n  .classed("yAxis",true)\n  .call(yAxis)\n')),(0,a.kt)("p",null,"\u767c\u73fe\u597d\u50cf\u6c92\u6709\u4f5c\u7528\uff0c\u9019\u6642\u5019\u7528chrome\u700f\u89bd\u5668\u7684\u958b\u767c\u8005\u5de5\u5177\u6aa2\u8996\u4e00\u4e0bhtml\u7d50\u69cb\u3002"),(0,a.kt)("p",null,"\u4e0b\u5716\u662fx\u5ea7\u6a19\u8ef8\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"<g>"),"\u6a19\u7c64\u5340\u584a\u3002\u53ef\u770b\u5230class\u540d\u7a31\u662f",(0,a.kt)("inlineCode",{parentName:"p"},"xAxis"),"\u3002"),(0,a.kt)("p",null,"\u539f\u4f86D3\u662f\u4f9d\u7167\u6211\u5011\u4f7f\u7528classed()\u65b9\u6cd5\u88e1\u653e\u5165\u7684\u540d\u7a31\u4f86\u4f5c\u70ba",(0,a.kt)("inlineCode",{parentName:"p"},"<g>"),"\u6a19\u7c64\u4e0a\u7684class\u7684\u540d\u7a31\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Day15 \u7df4\u7fd2 - \u6563\u5e03\u5716 (1)_3",src:t(3105).Z,width:"403",height:"390"})),(0,a.kt)("p",null,"\u6240\u4ee5\u5c31\u4f86\u91cd\u5bebcss\u6a23\u5f0f"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},".xAxis path, .xAxis line, .yAxis path, .yAxis line{\n  fill: none;\n  stroke: black;\n  shape-rendering: crispEdges;\n}\n\n.xAxis text, .yAxis text {\n  font-family: sans-serif;\n  font-size: 11px;\n}\n")),(0,a.kt)("p",null,"\u6700\u5f8c\u7684\u7d50\u679c\u5982\u4e0b\u5716"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Day15 \u7df4\u7fd2 - \u6563\u5e03\u5716 (1)_4",src:t(6928).Z,width:"389",height:"293"})))}d.isMDXComponent=!0},2584:(A,e,t)=>{t.d(e,{Z:()=>n});const n=t.p+"assets/images/1-30830b5a771673d4121080321e29f165.png"},3810:(A,e,t)=>{t.d(e,{Z:()=>n});const n=t.p+"assets/images/2-06ffffdbd3962cfa5a12a4cafb9d1016.png"},3105:(A,e,t)=>{t.d(e,{Z:()=>n});const n=t.p+"assets/images/3-ec14c169d1729c6f69ac91cf4caccb1d.png"},6928:(A,e,t)=>{t.d(e,{Z:()=>n});const n="data:image/png;base64,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"}}]);