"use strict";(self.webpackChunkupstairs_0102_github_io=self.webpackChunkupstairs_0102_github_io||[]).push([[1708],{3905:(A,e,t)=>{t.d(e,{Zo:()=>g,kt:()=>p});var r=t(67294);function a(A,e,t){return e in A?Object.defineProperty(A,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):A[e]=t,A}function i(A,e){var t=Object.keys(A);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(A);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(A,e).enumerable}))),t.push.apply(t,r)}return t}function n(A){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?i(Object(t),!0).forEach((function(e){a(A,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(A,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(e){Object.defineProperty(A,e,Object.getOwnPropertyDescriptor(t,e))}))}return A}function E(A,e){if(null==A)return{};var t,r,a=function(A,e){if(null==A)return{};var t,r,a={},i=Object.keys(A);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||(a[t]=A[t]);return a}(A,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(A);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(A,t)&&(a[t]=A[t])}return a}var I=r.createContext({}),l=function(A){var e=r.useContext(I),t=e;return A&&(t="function"==typeof A?A(e):n(n({},e),A)),t},g=function(A){var e=l(A.components);return r.createElement(I.Provider,{value:e},A.children)},s="mdxType",o={inlineCode:"code",wrapper:function(A){var e=A.children;return r.createElement(r.Fragment,{},e)}},u=r.forwardRef((function(A,e){var t=A.components,a=A.mdxType,i=A.originalType,I=A.parentName,g=E(A,["components","mdxType","originalType","parentName"]),s=l(t),u=a,p=s["".concat(I,".").concat(u)]||s[u]||o[u]||i;return t?r.createElement(p,n(n({ref:e},g),{},{components:t})):r.createElement(p,n({ref:e},g))}));function p(A,e){var t=arguments,a=e&&e.mdxType;if("string"==typeof A||a){var i=t.length,n=new Array(i);n[0]=u;var E={};for(var I in e)hasOwnProperty.call(e,I)&&(E[I]=e[I]);E.originalType=A,E[s]="string"==typeof A?A:a,n[1]=E;for(var l=2;l<i;l++)n[l]=t[l];return r.createElement.apply(null,n)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},21289:(A,e,t)=>{t.r(e),t.d(e,{assets:()=>I,contentTitle:()=>n,default:()=>s,frontMatter:()=>i,metadata:()=>E,toc:()=>l});var r=t(87462),a=(t(67294),t(3905));const i={slug:"/ithome2018/day29",title:"Day29 \u7df4\u7fd2 - \u76f4\u65b9\u5716 (2)",authors:"thunderboy",tags:["ithome","d3.js"]},n=void 0,E={unversionedId:"[\u9435\u4eba\u8cfd]D3.js\u65b0\u624b\u958b\u767c\u57fa\u672c\u5716\u8868/ithome2018-day29",id:"[\u9435\u4eba\u8cfd]D3.js\u65b0\u624b\u958b\u767c\u57fa\u672c\u5716\u8868/ithome2018-day29",title:"Day29 \u7df4\u7fd2 - \u76f4\u65b9\u5716 (2)",description:"\u4e00\u3001\u4f7f\u7528\u7dda\u6027\u6bd4\u4f8b\u5c3a\u7e6a\u88fd\u523b\u5ea6",source:"@site/docs/[\u9435\u4eba\u8cfd]D3.js\u65b0\u624b\u958b\u767c\u57fa\u672c\u5716\u8868/ithome2018-day29.md",sourceDirName:"[\u9435\u4eba\u8cfd]D3.js\u65b0\u624b\u958b\u767c\u57fa\u672c\u5716\u8868",slug:"/ithome2018/day29",permalink:"/docs/ithome2018/day29",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/[\u9435\u4eba\u8cfd]D3.js\u65b0\u624b\u958b\u767c\u57fa\u672c\u5716\u8868/ithome2018-day29.md",tags:[{label:"ithome",permalink:"/docs/tags/ithome"},{label:"d3.js",permalink:"/docs/tags/d-3-js"}],version:"current",frontMatter:{slug:"/ithome2018/day29",title:"Day29 \u7df4\u7fd2 - \u76f4\u65b9\u5716 (2)",authors:"thunderboy",tags:["ithome","d3.js"]},sidebar:"tutorialSidebar",previous:{title:"Day28 \u7df4\u7fd2 - \u76f4\u65b9\u5716 (1)",permalink:"/docs/ithome2018/day28"},next:{title:"Day30 \u5f8c\u7e8c\u5b78\u7fd2",permalink:"/docs/ithome2018/day30"}},I={},l=[{value:"\u4e00\u3001\u4f7f\u7528\u7dda\u6027\u6bd4\u4f8b\u5c3a\u7e6a\u88fd\u523b\u5ea6",id:"\u4e00\u4f7f\u7528\u7dda\u6027\u6bd4\u4f8b\u5c3a\u7e6a\u88fd\u523b\u5ea6",level:2},{value:"\u4e8c\u3001\u7dda\u76f4\u65b9\u5716",id:"\u4e8c\u7dda\u76f4\u65b9\u5716",level:2}],g={toc:l};function s(A){let{components:e,...i}=A;return(0,a.kt)("wrapper",(0,r.Z)({},g,i,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u4e00\u4f7f\u7528\u7dda\u6027\u6bd4\u4f8b\u5c3a\u7e6a\u88fd\u523b\u5ea6"},"\u4e00\u3001\u4f7f\u7528\u7dda\u6027\u6bd4\u4f8b\u5c3a\u7e6a\u88fd\u523b\u5ea6"),(0,a.kt)("p",null,"\u524d\u8ff0\u7a0b\u5f0f\u7bc4\u4f8b\u7684x\u8ef8\u4f7f\u7528\u7684\u6bd4\u4f8b\u5c3a\u70ba\u5e8f\u6578\u6bd4\u4f8b\u5c3a\uff0c",(0,a.kt)("strong",{parentName:"p"},"\u7531\u65bc\u8cc7\u6599\u662f\u96e2\u6563\u7684\uff0c\u6240\u4ee5\u7e6a\u88fd\u51fa\u4f86\u7684\u523b\u5ea6\u6703\u5728\u9577\u689d\u5716\u7684\u6b63\u4e2d\u9593"),"\u3002\ns\n\u800c\u6709\u53e6\u4e00\u7a2e\u76f4\u65b9\u5716\u7684\u5448\u73fe\u65b9\u5f0f\u662f",(0,a.kt)("strong",{parentName:"p"},"\u8b93\u523b\u5ea6\u986f\u793a\u5728\u76f4\u65b9\u5716\u7684\u908a\u7de3"),"\u7684\uff0c\u6a23\u5f0f\u5927\u7d04\u6703\u662f\u5982\u4e0b\u5716\u7684\u5448\u73fe\u65b9\u5f0f\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Day29 \u7df4\u7fd2 - \u76f4\u65b9\u5716 (2)_1",src:t(74281).Z,width:"482",height:"393"})),(0,a.kt)("p",null,"\u9019\u908a\u6211\u5617\u8a66\u4f7f\u7528",(0,a.kt)("strong",{parentName:"p"},"\u7dda\u6027\u6bd4\u4f8b\u5c3a"),"\u4f86\u7e6a\u88fd\u523b\u5ea6\u3002"),(0,a.kt)("p",null,"\u6240\u4ee5\u6b64\u5f35\u5716\u8868\u7684x\u8ef8\u5c31\u6703\u6709\u5169\u7a2e\u6bd4\u4f8b\u5c3a - ",(0,a.kt)("strong",{parentName:"p"},"\u9577\u689d\u5716\u4f7f\u7528\u539f\u4f86\u7684\u5e8f\u6578\u6bd4\u4f8b\u5c3a\u3001\u523b\u5ea6\u4f7f\u7528\u7dda\u6027\u6bd4\u4f8b\u5c3a"),"\u3002"),(0,a.kt)("p",null,"\u5beb\u4e00\u500b\u65b0\u7684\u7dda\u6027\u6bd4\u4f8b\u5c3a\u5982\u4e0b\u3002\u7531\u65bc\u539f\u5148\u5df2\u9650\u5b9a\u6700\u5c0f\u503c\u53ca\u6700\u5927\u503c\uff0c\u6240\u4ee5\u76f4\u63a5\u653e\u5165\u5b9a\u7fa9\u57df(domain)\u4e2d\u5373\u53ef\u3001\u503c\u57df\u540c\u6a23\u662f\u653e\u5165\u5ea7\u6a19\u7bc4\u570d\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"var xAScale = d3.scale.linear()\n  .domain([rangeMin, rangeMax])\n  .range([0, xAxisWidth])\n")),(0,a.kt)("p",null,"\u518d\u4f86\u628a\u539f\u672c\u7684\u523b\u5ea6\u4e2d\u7684\u6bd4\u4f8b\u5c3a\u63db\u6210\u7dda\u6027\u6bd4\u4f8b\u5c3a\u3002"),(0,a.kt)("p",null,"\u9019\u88e1\u8981\u5728\u523b\u5ea6\u4e0a\u589e\u52a0\u4e00\u500b\u65b9\u6cd5",(0,a.kt)("inlineCode",{parentName:"p"},"ticks(n)"),"\u4f86\u8a2d\u5b9a\u523b\u5ea6\u7684\u6578\u91cf\u3002\u5982\u679c\u6c92\u6709\u8a2d\u5b9a\u7684\u8a71\uff0c\u523b\u5ea6\u548c\u76f4\u65b9\u5716\u7684bins\u6578\u91cf\u53ef\u80fd\u6703\u5c0d\u61c9\u4e0d\u8d77\u4f86\u3002"),(0,a.kt)("p",null,"\u6211\u5011\u9810\u671f\u523b\u5ea6\u4f4d\u7f6e\u6703\u5728\u5404\u5225\u76f4\u65b9\u5716\u7684\u908a\u7de3\uff0c\u6240\u4ee5\u9019\u908a\u4f7f\u7528bins\u6578\u91cf\u52a01\u4f86\u8a08\u7b97\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'var xAxis = d3.svg.axis()\n  .scale(xAScale)\n  .orient("bottom")\n  .ticks(binNum+1)\n')),(0,a.kt)("p",null,"\u4e0d\u904e\u9700\u8981\u6ce8\u610f\u7684\u4e00\u9ede\u662f\uff0c\u6bd4\u4f8b\u5c3a\u7684\u523b\u5ea6\u6578\u91cf\u5be6\u969b\u4e0a\u4e0d\u662f\u8a2d\u5b9a\u4e86\u5e7e\u500b\u5c31\u6703\u662f\u5e7e\u500b\uff0c\u4ed6\u53d6\u6578\u91cf\u7684\u6a5f\u5236\u662f\u6703\u5148\u627e\u51fa\u300c",(0,a.kt)("strong",{parentName:"p"},"\u5177\u4ee3\u8868\u6027\u7684\u503c"),"\u300d\u5f8c\u518d\u8abf\u6574\u51fa\u5be6\u969b\u7684\u6578\u91cf\uff0c\u5728\u9019\u88e1\u56e0\u70ba\u5df2\u7d93\u4e8b\u5148\u6e2c\u8a66\u53ef\u4ee5\u9054\u5230\u9810\u671f\u7684\u6548\u679c\uff08\u525b\u597d\u6bcf\u500b\u523b\u5ea6\u4e0a\u7684\u6578\u5b57\u9593\u9694\u70ba10\uff0c\u4e0d\u662f\u592a\u96f6\u788e\u7684\u503c\uff09\u3002"),(0,a.kt)("p",null,"\u5982\u679c\u8aaa\u9019\u908a\u5728ticks\u4e2d\u53c3\u6578\u8a2d\u70ba12\uff0c\u4ed6\u4ecd\u7136\u662f\u53ea\u67098\u689d\u523b\u5ea6\uff08\u6578\u5b57\u9593\u9694\u70ba10\u6bd4\u8f03\u597d\u770b\uff09\uff0cticks\u53c3\u6578\u8a2d18\u5c31\u771f\u7684\u8a2d\u70ba18\u689d\uff08\u525b\u597d\u6578\u5b57\u9593\u9694\u6703\u70ba5\uff09"),(0,a.kt)("p",null,"\u6240\u4ee5\u5982\u679c\u8981\u907f\u514d\u51fa\u5dee\u932f\u7684\u8a71\uff0c\u90a3\u5c31\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"tickValues(values)"),"\u4f86\u6307\u5b9a\u523b\u5ea6\u4e86\uff0c\u53ef\u4ee5\u6539\u70ba\u9019\u6a23\u5beb\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'var xAxis = d3.svg.axis()\n  .scale(xAScale)\n  .orient("bottom")\n  .tickValues([130, 140, 150, 160, 170, 180, 190, 200, 210])\n')),(0,a.kt)("p",null,"\u7dda\u4e0a\u7bc4\u4f8b\u9023\u7d50\uff1a",(0,a.kt)("a",{parentName:"p",href:"http://jsfiddle.net/upstairs0102/gojwxc9v/"},"http://jsfiddle.net/upstairs0102/gojwxc9v/")),(0,a.kt)("h2",{id:"\u4e8c\u7dda\u76f4\u65b9\u5716"},"\u4e8c\u3001\u7dda\u76f4\u65b9\u5716"),(0,a.kt)("p",null,"\u4f46\u523b\u5ea6\u8f03\u591a\u7684\u6642\u5019\uff0c\u76f4\u65b9\u5716\u4e5f\u53ef\u4ee5\u6539\u7528\u7dda\u76f4\u65b9\u5716\u7684\u65b9\u5f0f\u4f86\u5448\u73fe\u3002"),(0,a.kt)("p",null,"\u9019\u908a\u4f7f\u7528\u5716\u5f62\u7522\u751f\u5668\u4e2d\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"d3.svg.line()"),"\u4f86\u5efa\u7acb\u7e6a\u88fd\u7dda\u689d\u7684\u51fd\u5f0f\uff0c\u5ef6\u7528\u539f\u672c\u7684\u6bd4\u4f8b\u5c3a\u4f86\u53d6\u5f97x\u3001y\u8ef8\u5ea7\u6a19\uff0c\u6700\u5f8c\u518d\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"<path>"),"\u7e6a\u88fd\u5c31\u5b8c\u6210\u4e86\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'var lineGenerator = d3.svg.line()\n  .x(function(d){ return xScale(d.x) })\n  .y(function(d){ return height - yScale(d.y) })\n  .interpolate("basis")\n  \nvar gLine = svg.append("g")\n    .attr("transform", "translate(" + padding.left + "," + ( -padding.bottom ) + ")")\n\ngLine.append("path")\n  .attr("class", "linePath")\n  .attr("d", lineGenerator(hisData))\n')),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Day29 \u7df4\u7fd2 - \u76f4\u65b9\u5716 (2)_2",src:t(296).Z,width:"476",height:"367"})),(0,a.kt)("p",null,"\u7dda\u4e0a\u7bc4\u4f8b\u9023\u7d50\uff1a",(0,a.kt)("a",{parentName:"p",href:"http://jsfiddle.net/upstairs0102/zwevmr6y"},"http://jsfiddle.net/upstairs0102/zwevmr6y")),(0,a.kt)("p",null,"\u4e0d\u77e5\u4e0d\u89ba\u9435\u4eba\u8cfd\u4e5f\u9032\u5165\u5c3e\u8072\u4e86\uff08\u547c~XD\uff09\u3002\u539f\u5148\u6253\u7b97\u505a\u500b\u5716\u8868\u4e92\u52d5\u7684\u7df4\u7fd2\u770b\u4f86\u662f\u4f86\u4e0d\u53ca\u4e86\uff0c\u4e0d\u904e\u5728\u77ed\u77ed\u7684\u6642\u9593\u4e5f\u5b8c\u6210\u4e86\u8a31\u591a\u57fa\u672c\u7684\u5716\u8868\u7df4\u7fd2\uff1b\u5269\u4e0b\u7684\u5fc3\u5f97\uff0c\u660e\u5929\u518d\u4e00\u8d77\u505a\u500b\u7e3d\u7d50\u5427\u3002"))}s.isMDXComponent=!0},74281:(A,e,t)=>{t.d(e,{Z:()=>r});const r="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAeIAAAGJCAYAAABW2jA6AAAACXBIWXMAAA7EAAAOxAGVKw4bAAASBklEQVR4nO3dfWzVd73A8U+hK6grMOYKIagLKJtsYkLU6wRRYeqEuGSTLcuiWe7m4lyWZSN3pjHBbDGg2YMPcYkmaujcMowM9yC6G7fMANvMgOCcGajcUQl3dMJWsC1taXv6vX8QTnjSu83Chx97vZImcM6v5fvJ95y+e05/59BQSikBAKQYlb0AAHgrE2IASCTEAJBIiAEgUWP2AuBEmtf6UPYSeBPWfXtx9hLgpPGIGAASCTEAJBJiAEgkxACQSIgBIJEQA0AiIQaAREIMAImEGAASCTEAJBJiAEgkxACQSIgBIJEQA0AiIQaAREIMAImEGAASCTEAJBJiAEgkxACQSIgBIJEQA0AiIQaAREIMAImEGAASCTEAJBJiAEgkxACQSIgBIJEQA0AiIQaAREIMAImEGAASCTEAJBJiAEgkxACQSIgBIJEQA0AiIQaAREIMAImEGAASCTEAJBJiAEgkxACQSIgBIJEQA0AiIQaAREIMAImEGAASCTEAJBJiAEgkxACQSIgBIJEQA0AiIQaAREIMAImEGAASCTEAJBJiAEgkxACQSIgBIJEQA0AiIQaAREIMAImEGAASCTEAJBJiAEgkxACQSIgBIJEQA0AiIQaAREIMAImEGAASCTEAJBJiAEgkxACQSIgBIJEQA0AiIQaAREIMAImEGAASCTEAJBJiAEgkxACQSIgBIJEQA0AiIQaAREIMAImEGAASCTEAJBJiAEgkxACQSIgBIJEQA0AiIQaAREIMAImEGAASCTEAJBJiAEgkxACQSIgBIJEQA0AiIQaAREIMAImEGAASCTEAJBJiAEgkxACQSIgBIJEQA0AiIQaAREIMAImEGAASCTEAJBJiAEgkxACQSIgBIJEQA0AiIQaAREIMAImEGAASCTEAJBJiAEgkxACQSIgBIJEQA0AiIQaAREIMAImEGAASCTEAJBJiAEgkxACQSIgBIJEQA0AiIQaAREIMAImEGAASCTEAJBJiAEgkxACQSIgBIJEQA0AiIQaAREIMAImEGAASCTEAJBJiAEgkxACQSIgBIJEQA0AiIQaAREIMAImEGAASCTEAJBJiAEgkxACQSIgBIJEQA0AiIQaAREIMAImEGAASCTEAJBJiAEgkxACQSIgBIJEQA0CixuwFkG9e60PZSwB4y/KIGAASCTEAJBJiAEgkxACQSIgBIJEQA0AiIQaAREIMAImEGAASCTEAJBJiAEjkvaaBU85zf3klewknzH+cNzl7CZxiGkopJXsR5PKfPsDJs+7bi7OXwCnGU9MAkEiIASCREANAIiEGgERCDACJhBgAEgkxACQSYgBIJMQAkEiIASCREANAIiEGgERCDACJhBgAEgkxACQSYgBIJMQAkEiIASCREANAIiEGgERCDACJhBgAEgkxACQSYgBIJMQAkEiIASCREANAIiEGgERCDACJhBgAEgkxACQSYgBIJMQAkEiIASCREANAIiEGgERCDACJhBgAEgkxACQSYgBIJMQAkEiIASCREANAIiEGgERCDACJhBgAEgkxACQSYgBIJMQAkEiIASCREANAIiEGgERCDACJhBgAEgkxACQSYgBIJMQAkEiIASCREANAIiEGgERCDACJhBgAEgkxACQSYgBIJMQAkEiIASCREANAIiEGgERCDACJhBgAEgkxACQSYgBIJMQAkEiIASCREANAIiEGgERCDACJhBgAEgkxACQSYgBIJMQAkEiIASCREANAIiEGgERCDACJhBgAEgkxACQSYgBIJMQAkEiIASCREANAIiEGgERCDACJhBgAEgkxACQSYgBIJMQAkEiIASCREANAIiEGgERCDACJhBgAEgkxACQSYgBIJMQAkEiIASCREANAIiEGgERCDACJhBgAEgkxACQSYgBIJMQAkKgxewEAbyVX3/3f2Us4YR78r0uyl1BJQgxwEv3vqz3ZS+AU46lpAEgkxACQSIgBIJEQA0AiIQaAREIMAImEGAASCTEAJBJiAEgkxACQSIgBIJEQA0AiIQaAREIMAImEGAASCTEAJBJiAEgkxACQSIgBIJEQA0AiIQaAREIMAImEGAASNWYvoCpWP/s/2UsA4DQkxK/T9x97PnsJAJyGPDUNAImEGAASCTEAJBJiAEgkxACQSIgBIJEQA0AiIQaAREIMAImEGAASCTEAJPJe0wCMiNtWPJ29hBPmrv+ce8K+thADMCKe+8sr2UuoJE9NA0AiIQaAREIMAImEGAASCTEAJBJiAEgkxACQSIgBIJEQA0AiIQaAREIMAIlG9L2m57U+NJJfDgBOex4RA0AiIQaAREIMAImEGAAS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Iy655JKYN29eLFu2LCIO/rBxuAMHDlR2vgMHDsQtt9wSv/3tb+O5556rP8o/2kjP9aZfvlRKieXLl0d3d3e0tLTE+eefH1/+8pfj2WefjSlTpsRrr70Ww8PD9eP/9Kc/nfJnzB3y5z//OZ566qlYvnx5LFy4ML70pS/FkiVL4uabb47JkydXeraIg3t3+FmpZ599dvT391d+397+9rfHueeeG+9617vql73nPe+Jnp6eys92uKeffjoWLFhQf6rsgx/8YOzevbt+fa1Wi927d//TbyKnmt7e3njsscfihhtuiMmTJ8f06dPjJz/5SfzqV786LfZtwoQJ0d3dHT/+8Y9j7969cdlll8VZZ51Vudk2b94cU6ZMie9973vxgx/8oH77mjt3brz66qv143p6emLixIkxderUSs23Z8+emD17dlx44YWxbdu2eOc733nc407Evr3pEDc0NMSOHTti9erVEXHwZUy/+c1v4rzzzotx48bFhRdeGKtWrYqIiA0bNsTWrVvjvPPOe9MLPZmmT58ef//73+OHP/xh3H///XHnnXdGa2trfPOb34wJEyZUerZSSixZsiR+/etfR8TBb4L33ntvXHTRRZXft4aGhrjiiivioYceilJKDA0NxU9/+tOYMWNGZWer1WpH/L2UEt/61rfi+uuvr182Y8aMaGtriy1btkRERFtbWyxatOiIp6tPZU1NTTFx4sTYunVr/bJHH330tPheEhFx6623xurVq2PatGmxZ8+e+MpXvhILFy6s1Gz79++Pz33uc/H444/Hpz71qdi/f3/9UeCnP/3puOmmm6KnpydKKXHLLbfEtddeG+PHj6/MfKWUuOmmm+Lyyy+PG2+8Mfr7+2P//v3Hfbr5hOzbGz2765FHHqmflr9z584ya9as+lmCt912W+nv7y+llNLZ2Vm/rrm5ufz1r39902eUnSyHz3a4rVu3lu9+97v1v1d9tvb29jJz5sz6vt1zzz31s3KrPtvg4GC54YYb6rMtW7as0rO1t7eXj3/84/UZ2tvb62erHm7z5s31mQ9/6c+p7PB9e+GFF+pniUdEueKKK8q+fftKKdXct6O/Tx5+f1u/fn39uKrMduilPYd/TJ06tXR1dZVSDr5a4dDlS5curdx9rqen54g9OvTx/PPPl1IOvorhwx/+cP3lSyM914i8xWVXV1eMHj36mN8VRBw86am5ubkyT5O9EVWfraurK5qamo55YX7E6THbW+02OTAwUH9asKr+8Y9/xOjRo4/7NF/V9+3QG0Ic781Wqj5bxMFn1wYHB4/5/WnE6THf8YzUXN5rGgASea9pAEgkxACQSIgBIJEQA0AiIQaAREIMAImEGAASCTEAJBJiAEgkxACQSIgBIJEQA0AiIQaAREIMAImEGAASCTEAJBJiAEgkxACQSIgBINH/Ad3O9NKinjhdAAAAAElFTkSuQmCC"},296:(A,e,t)=>{t.d(e,{Z:()=>r});const r=t.p+"assets/images/2-b5e4c5eb236b197a11156d660b5a0715.png"}}]);