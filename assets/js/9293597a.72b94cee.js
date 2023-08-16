"use strict";(self.webpackChunkupstairs_0102_github_io=self.webpackChunkupstairs_0102_github_io||[]).push([[7404],{3905:(A,e,t)=>{t.d(e,{Zo:()=>l,kt:()=>B});var a=t(67294);function n(A,e,t){return e in A?Object.defineProperty(A,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):A[e]=t,A}function o(A,e){var t=Object.keys(A);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(A);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(A,e).enumerable}))),t.push.apply(t,a)}return t}function r(A){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?o(Object(t),!0).forEach((function(e){n(A,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(A,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(e){Object.defineProperty(A,e,Object.getOwnPropertyDescriptor(t,e))}))}return A}function i(A,e){if(null==A)return{};var t,a,n=function(A,e){if(null==A)return{};var t,a,n={},o=Object.keys(A);for(a=0;a<o.length;a++)t=o[a],e.indexOf(t)>=0||(n[t]=A[t]);return n}(A,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(A);for(a=0;a<o.length;a++)t=o[a],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(A,t)&&(n[t]=A[t])}return n}var g=a.createContext({}),C=function(A){var e=a.useContext(g),t=e;return A&&(t="function"==typeof A?A(e):r(r({},e),A)),t},l=function(A){var e=C(A.components);return a.createElement(g.Provider,{value:e},A.children)},s="mdxType",d={inlineCode:"code",wrapper:function(A){var e=A.children;return a.createElement(a.Fragment,{},e)}},Q=a.forwardRef((function(A,e){var t=A.components,n=A.mdxType,o=A.originalType,g=A.parentName,l=i(A,["components","mdxType","originalType","parentName"]),s=C(t),Q=n,B=s["".concat(g,".").concat(Q)]||s[Q]||d[Q]||o;return t?a.createElement(B,r(r({ref:e},l),{},{components:t})):a.createElement(B,r({ref:e},l))}));function B(A,e){var t=arguments,n=e&&e.mdxType;if("string"==typeof A||n){var o=t.length,r=new Array(o);r[0]=Q;var i={};for(var g in e)hasOwnProperty.call(e,g)&&(i[g]=e[g]);i.originalType=A,i[s]="string"==typeof A?A:n,r[1]=i;for(var C=2;C<o;C++)r[C]=t[C];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}Q.displayName="MDXCreateElement"},85977:(A,e,t)=>{t.r(e),t.d(e,{assets:()=>g,contentTitle:()=>r,default:()=>s,frontMatter:()=>o,metadata:()=>i,toc:()=>C});var a=t(87462),n=(t(67294),t(3905));const o={slug:"/ithome2018/day28",title:"Day28 \u7df4\u7fd2 - \u76f4\u65b9\u5716 (1)",authors:"thunderboy",tags:["ithome","d3.js"]},r=void 0,i={unversionedId:"[\u9435\u4eba\u8cfd]D3.js\u65b0\u624b\u958b\u767c\u57fa\u672c\u5716\u8868/ithome2018-day28",id:"[\u9435\u4eba\u8cfd]D3.js\u65b0\u624b\u958b\u767c\u57fa\u672c\u5716\u8868/ithome2018-day28",title:"Day28 \u7df4\u7fd2 - \u76f4\u65b9\u5716 (1)",description:"\u4e00\u3001\u689d\u76f4\u65b9\u5716(Column Histogram)\u7e6a\u88fd",source:"@site/docs/[\u9435\u4eba\u8cfd]D3.js\u65b0\u624b\u958b\u767c\u57fa\u672c\u5716\u8868/ithome2018-day28.md",sourceDirName:"[\u9435\u4eba\u8cfd]D3.js\u65b0\u624b\u958b\u767c\u57fa\u672c\u5716\u8868",slug:"/ithome2018/day28",permalink:"/docs/ithome2018/day28",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/[\u9435\u4eba\u8cfd]D3.js\u65b0\u624b\u958b\u767c\u57fa\u672c\u5716\u8868/ithome2018-day28.md",tags:[{label:"ithome",permalink:"/docs/tags/ithome"},{label:"d3.js",permalink:"/docs/tags/d-3-js"}],version:"current",frontMatter:{slug:"/ithome2018/day28",title:"Day28 \u7df4\u7fd2 - \u76f4\u65b9\u5716 (1)",authors:"thunderboy",tags:["ithome","d3.js"]},sidebar:"tutorialSidebar",previous:{title:"Day27 \u4e92\u52d5",permalink:"/docs/ithome2018/day27"},next:{title:"Day29 \u7df4\u7fd2 - \u76f4\u65b9\u5716 (2)",permalink:"/docs/ithome2018/day29"}},g={},C=[{value:"\u4e00\u3001\u689d\u76f4\u65b9\u5716(Column Histogram)\u7e6a\u88fd",id:"\u4e00\u689d\u76f4\u65b9\u5716column-histogram\u7e6a\u88fd",level:2},{value:"\u4e8c\u3001\u5e8f\u6578\u6bd4\u4f8b\u5c3a(Ordinal Scale)\u9593\u8ddd\u8a2d\u5b9a",id:"\u4e8c\u5e8f\u6578\u6bd4\u4f8b\u5c3aordinal-scale\u9593\u8ddd\u8a2d\u5b9a",level:2}],l={toc:C};function s(A){let{components:e,...o}=A;return(0,n.kt)("wrapper",(0,a.Z)({},l,o,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"\u4e00\u689d\u76f4\u65b9\u5716column-histogram\u7e6a\u88fd"},"\u4e00\u3001\u689d\u76f4\u65b9\u5716(Column Histogram)\u7e6a\u88fd"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u76f4\u65b9\u5716 (Histogram Chart)"),"\u548c",(0,n.kt)("strong",{parentName:"p"},"\u9577\u689d\u5716 (Line Chart)"),"\u6709\u4e9b\u5fae\u7684\u4e0d\u540c\uff0c\u5728\u300cDay09 \u7df4\u7fd2\u984c\u6e96\u5099 - \u5716\u8868\u985e\u578b\u7684\u7406\u89e3\u300d\u4e2d\u66fe\u7d93\u8a0e\u8ad6\u904e\u5716\u8868\u7684\u5206\u985e\u3002\u9577\u689d\u5716\u7684\u8cc7\u6599\u9ede\u662f\u96e2\u6563\u7684\uff0c\u800c\u76f4\u65b9\u5716\u662f\u9023\u7e8c\u7684\u8cc7\u6599\u5f62\u5f0f\uff0c\u6bcf\u4e00\u500b\u9ede\u4ee3\u8868\u7684\u662f\u4e00\u500b\u5340\u9593\u7684\u8cc7\u6599\uff0c\u53ef\u4ee5\u7528\u9577\u689d\u3001\u6216\u8005\u7dda\uff08\u8f03\u591a\u8cc7\u6599\u9ede\u6642\u9069\u7528\uff09\u7684\u65b9\u5f0f\u4f86\u5448\u73fe\u3002"),(0,n.kt)("p",null,"\u9996\u5148\u6e96\u5099\u4e00\u7d44\u76f4\u65b9\u5716\u7684\u8cc7\u6599\uff0c\u7528",(0,n.kt)("inlineCode",{parentName:"p"},"d3.random.normal()"),"\u7522\u751f\u96a8\u6a5f\u7684\u5e38\u614b\u5206\u4f48\u8cc7\u6599\u3002"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"var rand = d3.random.normal(170, 10)\n\nvar dataSet = []\n\nfor(var i=0; i<100; i++){\n    dataSet.push(rand())\n}\n")),(0,n.kt)("p",null,"\u52a0\u5165svg"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},'var width = 500\nvar height = 380\nvar padding = {top:30, right:30, bottom:30, left:30}\n\nvar svg = d3.select("body").append("svg")\n  .attr("width",width)\n  .attr("height",height)\n')),(0,n.kt)("p",null,"D3\u4e5f\u63d0\u4f9b\u4e86\u76f4\u65b9\u5716\u7684layout\uff0c\u8a9e\u6cd5\u70ba",(0,n.kt)("inlineCode",{parentName:"p"},"d3.layout.histogram()"),"\u3002"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"histogram.range([min, max])")," \u8a2d\u5b9a\u8cc7\u6599\u5206\u4f48\u7684\u7bc4\u570d\n",(0,n.kt)("inlineCode",{parentName:"p"},"histogram.bins(count)")," \u8a2d\u5b9a\u9577\u689d\u5716\u500b\u6578\n",(0,n.kt)("inlineCode",{parentName:"p"},"histogram.frequency(bool)")," true\u70ba\u6578\u91cf\u3001false\u70ba\u6a5f\u7387"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"var binNum = 10, rangeMin = 130, rangeMax = 210\n\nvar histogram = d3.layout.histogram()\n  .range([rangeMin, rangeMax])\n  .bins(binNum)\n  .frequency(true)\n  \nvar hisData = histogram(dataSet)\n")),(0,n.kt)("p",null,"\u628ahisData\u5370\u51fa\u4f86\u5f8c\u53ef\u770b\u5230\u8cc7\u6599\u7d50\u69cb\u5982\u4e0b\u5716\u3002"),(0,n.kt)("p",null,"\u5176\u4e2d",(0,n.kt)("inlineCode",{parentName:"p"},"x"),"\u70ba\u8cc7\u6599\u5340\u9593\u7684\u4e0b\u9650\u503c\u3001",(0,n.kt)("inlineCode",{parentName:"p"},"dx"),"\u70ba\u5340\u9593\u7684\u9577\u5ea6\u3001",(0,n.kt)("inlineCode",{parentName:"p"},"y"),"\u70ba\u843d\u5230\u6b64\u5340\u9593\u7684\u6578\u91cf\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Day28 \u7df4\u7fd2 - \u76f4\u65b9\u5716 (1)_1",src:t(73093).Z,width:"474",height:"396"})),(0,n.kt)("p",null,"\u63a5\u8457\u8981\u5efa\u7acb\u6bd4\u4f8b\u5c3a\uff0c\u7531\u65bcx\u8ef8\u7684\u8cc7\u6599\u70ba",(0,n.kt)("strong",{parentName:"p"},"\u96e2\u6563"),"\u7684\uff0c\u6240\u4ee5\u8981\u4f7f\u7528\u7684\u662f",(0,n.kt)("strong",{parentName:"p"},"\u5e8f\u6578\u6bd4\u4f8b\u5c3a(Ordinal Scale)"),"\uff0c\u800cy\u8ef8\u8981\u4f7f\u7528\u7684\u662f",(0,n.kt)("strong",{parentName:"p"},"\u7dda\u6027\u6bd4\u4f8b\u5c3a(Linear Scale)"),"\u3002"),(0,n.kt)("p",null,"\u5728\u524d\u9762\u7684\u6587\u7ae0\u5df2\u591a\u6b21\u7df4\u7fd2\u904e\u7dda\u6027\u6bd4\u4f8b\u5c3a\uff08\u53ef\u53c3\u8003Day13\u3001Day14\u3001Day16\u6587\u7ae0\uff09\u3002"),(0,n.kt)("p",null,"\u5e8f\u6578\u6bd4\u4f8b\u5c3a\u4f7f\u7528\u65b9\u5f0f\u6709\u4e9b\u8a31\u4e0d\u540c\uff0c\u5e8f\u6578\u6bd4\u4f8b\u5c3a\u7684\u5b9a\u7fa9\u57df\u4ee5\u53ca\u503c\u57df\u90fd\u662f\u96e2\u6563\u7684\uff0c\u5728\u5b9a\u7fa9\u57df\u653e\u5165\u525b\u624d\u4ee5\u76f4\u65b9\u5716layout\u8f49\u63db\u51fa\u4f86\u7684x\uff1b\u800c\u503c\u57df\u653e\u5165\u5ea7\u6a19\u503c\u3002"),(0,n.kt)("p",null,"\u5176\u4e2d\u503c\u57df\u9019\u908a\u4f7f\u7528\u7684\u65b9\u6cd5\u662f",(0,n.kt)("inlineCode",{parentName:"p"},"ordinal.ordinalRoundBands([min, max])"),"\u3002",(0,n.kt)("inlineCode",{parentName:"p"},"rangeRoundBands"),"\u548c",(0,n.kt)("inlineCode",{parentName:"p"},"rangeBands"),"\u985e\u4f3c\uff0c\u90fd\u662f\u53ef\u4ee5\u653e\u5165\u8cc7\u6599\u5340\u9593\uff08\u5982\u4f7f\u7528range\u5247\u9700\u653e\u5165\u6240\u6709\u7684\u5404\u5225\u8cc7\u6599\uff09\uff0c\u800c",(0,n.kt)("inlineCode",{parentName:"p"},"rangeRoundBands"),"\u7684\u5dee\u5225\u662f\u6703\u5c07\u7d50\u679c\u53d6\u6574\u6578\u3002"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"var xAxisWidth = width - padding.left - padding.right\nvar yAxisWidth = 450\nvar xTicks = hisData.map(function(d){ return d.x }) // \u76f4\u65b9\u5716layout\u8f49\u63db\u51fa\u4f86\u7684\u8cc7\u6599\u4e2d\u7684x\n\nvar xScale = d3.scale.ordinal() // \u5e8f\u6578\u6bd4\u4f8b\u5c3a\n  .domain(xTicks) // \u5b9a\u7fa9\u57df\n  .rangeRoundBands([0, xAxisWidth]) // \u503c\u57df\n\nvar yScale = d3.scale.linear() // \u7dda\u6027\u6bd4\u4f8b\u5c3a\n  .domain([d3.min(hisData, function(d){ return d.y }), d3.max(hisData, function(d){ return d.y })]) // \u5b9a\u7fa9\u57df\n  .range([5, yAxisWidth]) // \u503c\u57df\n")),(0,n.kt)("p",null,"\u63a5\u8457\u958b\u59cb\u7e6a\u88fdx\u8ef8\u523b\u5ea6"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},'var xAxis = d3.svg.axis()\n  .scale(xScale)\n  .orient("bottom")\n\nsvg.append("g")\n  .attr("class", "xAxis")\n  .attr("transform", "translate(" + padding.left + "," + (height - padding.bottom) + ")")\n  .call(xAxis)\n')),(0,n.kt)("p",null,"\u4ee5svg\u5143\u7d20",(0,n.kt)("inlineCode",{parentName:"p"},"<rect>"),"\u7e6a\u88fd\u76f4\u65b9\u5716\u3002"),(0,n.kt)("p",null,"\u5176\u4e2ddata()\u653e\u5165\u7684\u5c31\u662flayout\u6240\u8f49\u63db\u51fa\u4f86\u7684\u8cc7\u6599\uff0c\u8a2d\u5b9a\u5c6c\u6027",(0,n.kt)("inlineCode",{parentName:"p"},"x"),"\u3001",(0,n.kt)("inlineCode",{parentName:"p"},"y"),"\u3001",(0,n.kt)("inlineCode",{parentName:"p"},"height"),"\u7531layout\u8cc7\u6599\u4e2d\u7684x\u3001y\u8cc7\u6599\u4f7f\u7528\u6bd4\u4f8b\u5c3a\u51fd\u5f0f\u505a\u8a08\u7b97\u3002"),(0,n.kt)("p",null,"\u800cwidth\u5c6c\u6027\u4f7f\u7528\u6bd4\u4f8b\u5c3a\u6240\u63d0\u4f9b\u7684",(0,n.kt)("inlineCode",{parentName:"p"},"rangeBand()"),"\u51fd\u5f0f\u53d6\u5f97\u6bcf\u4e00\u6bb5\u7684\u5bec\u5ea6\u3002"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},'var gRect = svg.append("g")\n  .attr("transform", "translate(" + padding.left + "," + (-padding.bottom) + ")")\n  \ngRect.selectAll("rect")\n  .data(hisData)\n  .enter()\n  .append("rect")\n  .attr("class", "rect")\n  .attr("x", function(d,i){\n      return xScale(d.x)\n  })\n  .attr("y", function(d,i){\n      return height - yScale(d.y)\n  })\n  .attr("width", function(d,i){\n      return xScale.rangeBand()\n  })\n  .attr("height", function(d){\n      return yScale(d.y)\n  })\n')),(0,n.kt)("p",null,"\u7d50\u679c\u5982\u4e0b\u5716\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Day28 \u7df4\u7fd2 - \u76f4\u65b9\u5716 (1)_2",src:t(94810).Z,width:"469",height:"384"})),(0,n.kt)("h2",{id:"\u4e8c\u5e8f\u6578\u6bd4\u4f8b\u5c3aordinal-scale\u9593\u8ddd\u8a2d\u5b9a"},"\u4e8c\u3001\u5e8f\u6578\u6bd4\u4f8b\u5c3a(Ordinal Scale)\u9593\u8ddd\u8a2d\u5b9a"),(0,n.kt)("p",null,"\u5e8f\u6578\u6bd4\u4f8b\u5c3a\u4e2d\u7684",(0,n.kt)("inlineCode",{parentName:"p"},"rangeRoundBands"),"\u53ef\u4ee5\u9078\u64c7\u52a0\u5165\u7b2c2\u53ca\u7b2c3\u500b\u53c3\u6578\uff0c\u7b2c2\u500b\u53c3\u6578\u662f\u6240\u6709\u5340\u9593\u4e4b\u9593\u7684\u9593\u8ddd(padding)\u3001\u7b2c3\u500b\u53c3\u6578\u662f\u55ae\u7368\u8a2d\u5b9a\u6700\u5de6\u548c\u6700\u53f3\u5169\u908a\u7684\u9593\u8ddd\u3002"),(0,n.kt)("p",null,"\u9593\u8ddd\u9700\u8f38\u51650~1\u4e4b\u9593\u7684\u6578\u503c\uff0c\u55ae\u4f4d\u70ba\u5340\u9593\u5bec\u5ea6\u7684\u500d\u6578\u3002\u6bd4\u5982\u8aaa\uff0c\u9593\u8ddd\u8a2d\u70ba0.1\u6642\u9593\u8ddd\u5bec\u5ea6\u5373\u70ba\u5340\u9593\u5bec\u5ea6\u76841/10\uff0c\u5982\u8a2d\u70ba1\u3001\u5247\u9593\u8ddd\u548c\u5340\u9593\u5bec\u5ea6\u6703\u76f8\u7b49\uff08\u5340\u9593\u6703\u4e0d\u898b\uff09\u3002"),(0,n.kt)("p",null,"\u4ee5\u4e0b\u4fee\u6539\u539f\u7a0b\u5f0f\u78bc\uff0c\u5c07\u9593\u8ddd\u8a2d\u70ba0.1\u3001\u5de6\u53f3\u5169\u908a\u7684\u9593\u8ddd\u8a2d\u70ba0.3\u3002"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"var xScale = d3.scale.ordinal()\n  .domain(xTicks)\n  .rangeRoundBands([0, xAxisWidth],0.1,0.3)\n")),(0,n.kt)("p",null,"\u7d50\u679c\u5982\u4e0b\u5716\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://ithelp.ithome.com.tw/upload/images/20181111/20096057mrSzSb8wFA.png",alt:"https://ithelp.ithome.com.tw/upload/images/20181111/20096057mrSzSb8wFA.png"})),(0,n.kt)("p",null,"\u7dda\u4e0a\u6aa2\u8996\u9023\u7d50\u53ef\u53c3\u8003\uff1a",(0,n.kt)("a",{parentName:"p",href:"http://jsfiddle.net/upstairs0102/dnfye7mv/"},"http://jsfiddle.net/upstairs0102/dnfye7mv/")))}s.isMDXComponent=!0},73093:(A,e,t)=>{t.d(e,{Z:()=>a});const a="data:image/png;base64,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8MMP5w9+8IO3crmvy9x927t376xvyC+88EI7tE3bt7mzbdiwYVagJiYmsre3N4eHhxs127p16/Jvf/tb+/P77rsvN27cmMPDw7lixYr2D0mZmatXr86tW7c2Yr55d432Pe95T0xPT8eJEyciIuId73hHXHXVVfH3v/89Pve5z8Vll10W3/ve96Krqys2b94cF1xwQftrL7744jjvvPPm7e/4nDtbRMRPf/rTuOaaa+JjH/tYHDt2rH1702cbGhqKJ554Ir71rW/F9PR09Pf3x3e+852IaP5szz33XNx9992xcuXKePbZZ6O3tzcefPDBiGjebO985ztjwYIFZ71eOTIyEj/72c/iU5/6VIyNjcXg4GAsWLCgff973/ve9nXd+Wjuvr3//e+PFStWxPnnnx/9/f1x+eWXx/e///1YuHBh4/Zt7mwf+chH4ic/+Ul7P7Zv397e0ybN9o1vfCM+9KEPRUTEzp0747bbbou+vr44ePBgTE1NzTr/PvjBD8bU1FQj5uvq9AL+XZdddlmsX78+/vSnP8X69etj5cqVceGFF8465uTJkzE5OdmhFb5+AwMDsWnTpnj00Ufbty1cuDAiovGzLVmyJAYGBqKvry8iIq677rr4wAc+EGvXrm38bMePH4/e3t74y1/+El1dXbFmzZro7e2Nm266qfGzne7xxx+PL37xi9Hd3R3Hjx8/4/7jx4/Pzxee/BO7d++OJ598Mp5++ulYsmRJ9Pf3x1e+8pV45plnGr9vV155Zdx0001x/vnnx6pVq2JycjIWLVoUEc38XvLzn/881qxZE9u2bYtLL700jhw5EhdffPGsY2bOySbMN+8e0c61ffv2+OUvfxlve9vbYsmSJbF69erYu3dvHD16ND7xiU/Eq6++2j52dHQ03vWud8V55837sSIi4mtf+1o8+eST8YUvfCGuu+66eOCBB+Lyyy+PHTt2NH62sbGxuPTSS9ufv/3tb493v/vdERGNn23ZsmXx4Q9/OLq6Tv2c2t3dHVdccUVkZuNnm9FqteLb3/52rFmzJiJOPbN05ZVXzno25qWXXoqLLrqoU0t83bZs2RJ33HFHXH311XHJJZfEzTffHO973/tiaGio8ft28uTJuP322+Pll1+OBx54IH73u9/FokWL4oILLmjUbFNTU/GlL30pfvvb38bIyEisWLEiIk490Dp06NCsH+x27twZixYtasZ8nXvW+p8bHx9vX1/Yv39/Ll68OF955ZXMzHzmmWdy6dKlOTY2lrt3786lS5fmsWPH2tc6N27c2OHVv7bTZxseHs6DBw/mwYMH89VXX80bb7wxd+3alSdOnGj8bDt27Mje3t4cHR3NzMw//OEP7WvrTZ/tyJEjuXjx4ty/f39mZj711FONPiczM/v7+2ddo922bVtec801s65zPfTQQ7l27dqcnp7O4eHh7OnpyQMHDnRiuf+20/dt06ZNuXr16vY12n/84x/tFxM1cd/O9n1y5kWj9957b37961/PzGzUbBs2bGh/3zh58mSOjo7m+Ph4tlqt7O/vz4cffjgzT73qf+nSpTkxMdGI+eZtaPv6+tovGLr//vtnvdVgy5Yt7WMfeuih9n133nnnvLoAfjZzZzvd2rVrZ93e5NlarVb+6Ec/aq9/8eLFuWfPnvaxTZ4t89SrOmfW39PTk7t3724f27TZMjNvvfXWWaG99dZbc9OmTbOOabVa+eUvf7k92+lvaZqv5p6TX/3qV2e9demxxx5rH9u0fZt7Ts68DTL+/21np7/FpSmznX5+zXzcf//9mXnqhXszbxns7u7OwcHB9tfN9/ka8ysYJyYmYnx8PC666KJZF8QjTj1NOTk5ecZz+OeCps82s29nW7/Zmuno0aOxcOHCM66NNcXM3lx44YXtp//n3tfUfRsfH4+JiYlz+pw8fPhwdHd3N2rvGhNaAGiieXS1GADOPUILAIWEFgAKCS0AFBJaACgktABQSGgBoJDQAkAhoQWAQkILAIWEFgAKCS0AFBJaACgktABQSGgBoJDQAkAhoQWAQkILAIWEFgAKCS0AFBJaACgktABQ6P8Ax9rzpbjcmf0AAAAASUVORK5CYII="},94810:(A,e,t)=>{t.d(e,{Z:()=>a});const a="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAdUAAAGACAYAAAD7+vizAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAQ8ElEQVR4nO3dfWzVd73A8U9pV1ApT4sFCcYFbmCiojGLEYdTNx8ylu1mCstiZoybi9OYxZGYNBoMCxdccPMhLmrizLoMnZGxB8Xtjy0zBWUJIxjnHRh3t0oI1sGg2JZSaE+/94+GE0qZ9w4+es6pr1fSZJzzI/1+9j2n755ffz00lVJKAAAXbEqtFwAAk4WoAkASUQWAJKIKAElaar0A+Ge6ouPhWi/hvGy/a9WE2ybTLDBZeaUKAElEFQCSiCoAJBFVAEgiqgCQRFQBIImoAkASUQWAJKIKAElEFQCSiCoAJBFVAEgiqgCQRFQBIImoAkASUQWAJKIKAElEFQCSiCoAJBFVAEgiqgCQRFQBIImoAkASUQWAJKIKAElEFQCSiCoAJBFVAEgiqgCQRFQBIImoAkASUQWAJKIKAElEFQCSiCoAJBFVAEgiqgCQRFQBIImoAkASUQWAJKIKAElEFQCSiCoAJBFVAEgiqgCQRFQBIImoAkASUQWAJKIKAElEFQCSiCoAJBFVAEgiqgCQRFQBIImoAkASUQWAJKIKAElEFQCSiCoAJBFVAEgiqgCQRFQBIImoAkASUQWAJKIKAElEFQCSiCoAJBFVAEgiqgCQRFQBIImoAkASUQWAJKIKAElEFQCSiCoAJBFVAEgiqgCQRFQBIImoAkASUQWAJKIKAElEFQCSiCoAJBFVAEgiqgCQRFQBIImoAkASUQWAJKIKAElEFQCSiCoAJBFVAEgiqgCQRFQBIImoAkCSllovgPqzdvOztV7CeVl/0/JaLwH4NyeqTND13wdrvQSAhuT0LwAkEVUASCKqAJBEVAEgiagCQBJRBYAkogoASUQVAJKIKgAkEVUASCKqAJBEVAEgiagCQBJRBYAkogoASUQVAJKIKgAkEVUASCKqAJBEVAEgiagCQBJRBYAkogoASUQVAJKIKgAkEVUASCKqAJBEVAEgiagCQBJRBYAkogoASUQVAJKIKgAkEVUASCKqAJBEVAEgiagCQBJRBYAkogoASUQVAJKIKgAkEVUASCKqAJBEVAEgiagCQBJRBYAkogoASUQVAJKIKgAkEVUASCKqAJBEVAEgiagCQBJRBYAkogoASUQVAJKIKgAkEVUASCKqAJBEVAEgiagCQBJRBYAkogoASUQVAJKIKgAkEVUASCKqAJBEVAEgiagCQBJRBYAkogoASUQVAJKIKgAkEVUASCKqAJBEVAEgiagCQBJRBYAkogoASUQVAJKIKgAkEVUASCKqAJBEVAEgiagCQBJRBYAkogoASUQVAJKIKgAkEVUASCKqAJBEVAEgiagCQBJRBYAkogoASUQVAJKIKgAkEVUASCKqAJBEVAEgiagCQBJRBYAkogoASUQVAJKIKgAkEVUASCKqAJBEVAEgiagCQBJRBYAkogoASUQVAJKIKgAkEVUASCKqAJBEVAEgSUutFwD8+1l91xO1XsJ52dKxstZLoM6JKvAv98qxwVovAf4pnP4FgCSiCgBJRBUAkogqACQRVQBIIqoAkERUASCJqAJAElEFgCSiCgBJRBUAkogqACQRVQBIIqoAkERUASCJqAJAElEFgCSiCgBJRBUAkogqACQRVQBIIqoAkERUASCJqAJAElEFgCSiCgBJRBUAkogqACQRVQBIIqoAkERUASCJqAJAElEFgCSiCgBJRBUAkogqACQRVQBIIqoAkERUASCJqAJAElEFgCSiCgBJRBUAkogqACQRVQBIIqoAkERUASCJqAJAElEFgCSiCgBJRBUAkogqACQRVQBIIqoAkERUASCJqAJAElEFgCSiCgBJRBUAkogqACQRVQBIIqoAkERUASCJqAJAElEFgCSiCgBJRBUAkogqACQRVQBIIqoAkERUASCJqAJAElEFgCSiCgBJRBUAkogqACQRVQBIIqoAkERUASCJqAJAElEFgCSiCgBJRBUAkogqACQRVQBIIqoAkERUASCJqAJAElEFgCQttV7AZLH7fw7Vegnn5bL/aK/1EgAmDVFNsua+7bVewnnZfteqWi8BYNJw+hcAkogqACQRVQBIIqoAkERUASCJqAJAElEFgCSiCgBJRBUAkogqACQRVQBIIqoAkERUASCJqAJAElEFgCSiCgBJRBUAkogqACQRVQBIIqoAkERUASCJqAJAElEFgCSiCgBJWmr5yXsHhmr56c/b7OnTar0EAOpQTaP6n/+1rZaf/rxtv2tVrZcAQB1y+hcAkogqACQRVQBIIqoAkERUASCJqAJAElEFgCSiCgBJRBUAkogqACQRVQBIIqoAkKSmb6gP0Oiu6Hi41ks4L+f6h0Em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rW99a/W2t73tbTEwMNBws5zpt7/9bVx11VUxb968iIh497vfHYcOHareX6lU4tChQ9XTd/VmcHAwfvnLX8Ztt90W8+bNi0WLFsV9990Xv/rVrxpyX2bNmhX9/f3x4x//OHp7e+P666+P2bNn1/0se/bsifnz58d3v/vd+P73v199vKxYsSJeffXV6nEDAwMxZ86cWLBgQV3PcyEmRVSbmppi//79sXXr1ogY+9WaJ554IpYsWRIzZsyId77znbFly5aIiNi1a1fs27cvlixZUsslv6ZFixbFK6+8Ej/84Q/jwQcfjE2bNkVHR0esX78+Zs2a1VCzlFJizZo18etf/zoixr4A3nvvvbF8+fKG25empqZYvXp1PPzww1FKiZGRkfjJT34SixcvbphZKpXKuD+XUuKb3/xm3HrrrdXbFi9eHJ2dnbF3796IiOjs7Ixrrrlm3CnhetLa2hpz5syJffv2VW97/PHHG/K5HxFxxx13xNatW2PhwoVx+PDh+MIXvhArV66s61mOHz8eV199dTz55JPxkY98JI4fP1591fmxj30svvzlL8fAwECUUuIrX/lK3HzzzTFz5sy6neeC1eLqqCyPPfZY9VL0AwcOlGXLllWvpvvqV79ahoaGSimlHD16tHpfW1tb+fOf/1zLZZ/TmbOcad++feU73/lO9c+NNkt3d3dZunRpdV/uueee6tWnjTbL8PBwue2226qzbNiwoaFm6e7uLh/84Aera+7u7q5epXmmPXv2VGc889dT6smZ+/L8889Xr26OiLJ69epy7NixUkpj7MvZX8fOfL7s2LGjely9zrJv374Jv561YMGC0tfXV0oZu2r+9O1r165tqOfM+Zh0b1PY19cXzc3NE87lR4xdANTW1la3p7Jej0abpa+vL1pbWyf8UnhEY84y2R9jp06dqp6qaxR///vfo7m5+ZynEBttX06/Sce53nij0WaJGDtLNTw8POHnqBGNOc8/MumiCgC1Mil+pgoA9UBUASCJqAJAElEFgCSiCgBJRBUAkogqACQRVQBIIqoAkERUASDJ/wICvS9fkfFThQAAAABJRU5ErkJggg=="}}]);