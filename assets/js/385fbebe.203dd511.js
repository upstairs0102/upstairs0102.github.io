"use strict";(self.webpackChunkupstairs_0102_github_io=self.webpackChunkupstairs_0102_github_io||[]).push([[4542],{3905:(e,t,l)=>{l.d(t,{Zo:()=>u,kt:()=>k});var n=l(67294);function r(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function s(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,n)}return l}function a(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?s(Object(l),!0).forEach((function(t){r(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):s(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function o(e,t){if(null==e)return{};var l,n,r=function(e,t){if(null==e)return{};var l,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)l=s[n],t.indexOf(l)>=0||(r[l]=e[l]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)l=s[n],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(r[l]=e[l])}return r}var i=n.createContext({}),p=function(e){var t=n.useContext(i),l=t;return e&&(l="function"==typeof e?e(t):a(a({},t),e)),l},u=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var l=e.components,r=e.mdxType,s=e.originalType,i=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=p(l),m=r,k=c["".concat(i,".").concat(m)]||c[m]||d[m]||s;return l?n.createElement(k,a(a({ref:t},u),{},{components:l})):n.createElement(k,a({ref:t},u))}));function k(e,t){var l=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=l.length,a=new Array(s);a[0]=m;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[c]="string"==typeof e?e:r,a[1]=o;for(var p=2;p<s;p++)a[p]=l[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,l)}m.displayName="MDXCreateElement"},1416:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>i,contentTitle:()=>a,default:()=>c,frontMatter:()=>s,metadata:()=>o,toc:()=>p});var n=l(87462),r=(l(67294),l(3905));const s={slug:"/frontend-libraries/xlsx-js-style",title:"[xlsx-js-style] \u532f\u51fa\u81ea\u8a02\u6a23\u5f0fExcel\u6a94",authors:"thunderboy",tags:["javascript"]},a=void 0,o={unversionedId:"\u524d\u7aefLibraries/[xlsx-js-style] \u532f\u51fa\u81ea\u8a02\u6a23\u5f0fExcel\u6a94",id:"\u524d\u7aefLibraries/[xlsx-js-style] \u532f\u51fa\u81ea\u8a02\u6a23\u5f0fExcel\u6a94",title:"[xlsx-js-style] \u532f\u51fa\u81ea\u8a02\u6a23\u5f0fExcel\u6a94",description:"\u524d\u8a00",source:"@site/docs/\u524d\u7aefLibraries/[xlsx-js-style] \u532f\u51fa\u81ea\u8a02\u6a23\u5f0fExcel\u6a94.md",sourceDirName:"\u524d\u7aefLibraries",slug:"/frontend-libraries/xlsx-js-style",permalink:"/docs/frontend-libraries/xlsx-js-style",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/\u524d\u7aefLibraries/[xlsx-js-style] \u532f\u51fa\u81ea\u8a02\u6a23\u5f0fExcel\u6a94.md",tags:[{label:"javascript",permalink:"/docs/tags/javascript"}],version:"current",frontMatter:{slug:"/frontend-libraries/xlsx-js-style",title:"[xlsx-js-style] \u532f\u51fa\u81ea\u8a02\u6a23\u5f0fExcel\u6a94",authors:"thunderboy",tags:["javascript"]},sidebar:"tutorialSidebar",previous:{title:"[vue-gtag]Vue\u5c08\u6848\u7528\u7684gtag",permalink:"/docs/frontend-libraries/vue-gtag"}},i={},p=[{value:"\u524d\u8a00",id:"\u524d\u8a00",level:2},{value:"\u5feb\u901f\u4e0a\u624bxlsx-js-style",id:"\u5feb\u901f\u4e0a\u624bxlsx-js-style",level:2},{value:"\u958b\u59cb\u4f7f\u7528",id:"\u958b\u59cb\u4f7f\u7528",level:3},{value:"\u6b04\u4f4d\u6a23\u5f0f",id:"\u6b04\u4f4d\u6a23\u5f0f",level:3},{value:"\u5176\u5b83\u7684\u5e38\u7528\u529f\u80fd",id:"\u5176\u5b83\u7684\u5e38\u7528\u529f\u80fd",level:2},{value:"SheetJS\u6587\u4ef6",id:"sheetjs\u6587\u4ef6",level:3},{value:"\u6b04\u4f4d\u5bec\u5ea6",id:"\u6b04\u4f4d\u5bec\u5ea6",level:3},{value:"\u5408\u4f75\u5132\u5b58\u683c",id:"\u5408\u4f75\u5132\u5b58\u683c",level:3},{value:"\u63db\u884c",id:"\u63db\u884c",level:3},{value:"\u5c0f\u7d50",id:"\u5c0f\u7d50",level:2}],u={toc:p};function c(e){let{components:t,...l}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u524d\u8a00"},"\u524d\u8a00"),(0,r.kt)("p",null,"\u57fa\u65bc\u67d0\u4e9b\u539f\u56e0\u6700\u8fd1\u6709\u5728\u524d\u7aef\u532f\u51faexcel\u6a94\u3001\u4e26\u4e14\u6709\u81ea\u8a02\u6b04\u4f4d\u6a23\u5f0f\u7684\u9700\u6c42\u3002\u96d6\u7136\u4ee5\u524d\u5c31\u6709\u958b\u767c\u904e\u524d\u7aef\u532f\u51faExcel\u7684\u529f\u80fd\uff0c\u800c\u4e14\u5957\u4ef6\u9078\u64c7\u4e5f\u9084\u7b97\u591a\u5be6\u4f5c\u4e5f\u4e0d\u96e3\uff08\u7576\u6642\u662f\u4f7f\u7528Export2Excel\uff09\uff0c\u4f46\u8981\u81ea\u8a02\u6a23\u5f0f\u7684\u8a71\u6211\u5c31\u6c92\u505a\u904e\u4e86\u3002"),(0,r.kt)("p",null,"\u82b1\u4e86\u4e00\u6bb5\u6642\u9593google\u767c\u73fe\u4e8b\u60c5\u4f3c\u4e4e\u4e26\u6c92\u90a3\u9ebc\u7c21\u55ae\u3002\u96d6\u7136\u8aaa\u80af\u5b9a\u662f\u627e\u4e00\u500b\u5957\u4ef6\u4e26\u4f9dapi\u6587\u4ef6\u4f86\u5be6\u4f5c\u5c31\u7d50\u675f\u4e86\uff0c\u4e0d\u6703\u96e3\u5230\u54ea\u88e1\u53bb\uff1b\u4f46\u9ebb\u7169\u7684\u662f\u7db2\u8def\u4e0a\u7684\u8cc7\u8a0a\u6709\u4e9b\u6df7\u4e82\uff0c\u6709\u4e00\u4e9b\u6559\u5b78\u6587\u7ae0\u53c8\u592a\u904e\u8907\u96dc\uff0c\u4f3c\u4e4e\u6c92\u770b\u5230\u54ea\u500b\u5957\u4ef6\u662f\u6bd4\u8f03\u88ab\u591a\u6578\u4eba\u4f7f\u7528\u4e26\u4e14\u6709\u6e05\u6670\u7684\u6587\u4ef6\u7684\u3002"),(0,r.kt)("p",null,"\u82b1\u4e86\u4e00\u4e9b\u6642\u9593\u7814\u7a76\uff0c\u525b\u597d\u627e\u5230\u4e86\u4e00\u500b\u5408\u9069\u7684\u5957\u4ef6\u53eb ",(0,r.kt)("inlineCode",{parentName:"p"},"xlsx-js-style"),"\uff0c\u5b83\u662f\u4f7f\u7528\u53e6\u4e00\u500b\u5957\u4ef6 ",(0,r.kt)("a",{parentName:"p",href:"https://sheetjs.com/"},"SheetJS"),"\u76f8\u540c\u7684API\u4e26\u4e14\u64f4\u5145\u4e86\u984d\u5916\u53ef\u81ea\u8a02\u6a23\u5f0f\u7684 API\uff08SheetJS\u4f3c\u4e4e\u6c92\u63d0\u4f9b\u6a23\u5f0f\u8a2d\u5b9a\u7684API\uff09\u3002"),(0,r.kt)("p",null,"\u4e3b\u8981\u529f\u80fd\u7684API ",(0,r.kt)("inlineCode",{parentName:"p"},"xlsx-js-style"),"\u6587\u4ef6\u88e1\u4e26\u6c92\u6709\u5beb\uff0c\u5fc5\u9808\u8981\u5230",(0,r.kt)("inlineCode",{parentName:"p"},"SheetJS"),"\u7684",(0,r.kt)("a",{parentName:"p",href:"https://docs.sheetjs.com/docs/"},"\u5b98\u65b9\u6587\u4ef6"),"\u88e1\u9762\u67e5\u95b1\uff0c\u800c\u6a23\u5f0f\u76f8\u95dc\u7684\u6587\u4ef6\u5247\u5728 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/gitbrent/xlsx-js-style"},"xlsx-js-sty le\u7684\u5b98\u65b9\u6587\u4ef6"),"\u88e1\u9762\u67e5\u95b1\u3002"),(0,r.kt)("p",null,"\u9019\u500b\u5957\u4ef6\u7684 API\u975e\u5e38\u591a\uff0c\u6709\u9700\u8981\u53ef\u81ea\u884c\u5230\u4e0a\u8ff0\u9023\u7d50\u67e5\u95b1\uff0c\u672c\u7bc7\u6587\u7ae0\u53ea\u6703\u4ecb\u7d39\u5230\u4ee5\u4e0b\u5e7e\u500b\u525b\u597d\u6211\u9019\u6b21\u6709\u7528\u5230\u7684\u529f\u80fd\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u6b04\u4f4d\u5e95\u8272"),(0,r.kt)("li",{parentName:"ul"},"\u6b04\u4f4d\u5bec\u5ea6"),(0,r.kt)("li",{parentName:"ul"},"\u5b57\u9ad4\u984f\u8272                                                                                                                                  "),(0,r.kt)("li",{parentName:"ul"},"\u5408\u4f75\u6b04\u4f4d")),(0,r.kt)("h2",{id:"\u5feb\u901f\u4e0a\u624bxlsx-js-style"},"\u5feb\u901f\u4e0a\u624bxlsx-js-style"),(0,r.kt)("h3",{id:"\u958b\u59cb\u4f7f\u7528"},"\u958b\u59cb\u4f7f\u7528"),(0,r.kt)("p",null,"\u64b0\u5beb\u9019\u7bc7\u6587\u7ae0\u7684\u6642\u5019 ",(0,r.kt)("inlineCode",{parentName:"p"},"xlsx-js-style"),"\u7684\u7248\u672c\u70ba v1.2.0\uff0c\u76ee\u524d\u70ba\u6b62\u6587\u4ef6\u4e26\u4e0d\u662f\u5beb\u5f97\u975e\u5e38\u6e05\u695a\uff0c\u6587\u4ef6\u88e1\u53ea\u6709\u5beb\u5230\u5982\u4f55\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"script"),"\u6a19\u7c64\u8f09\u5165\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'<script src="dist/xlsx.bundle.js"><\/script>\n')),(0,r.kt)("p",null,"\u81f3\u65bc\u5982\u4f55\u5728 js module\u4e2d import\u9032\u4f86\u5c31\u6c92\u63d0\u5230\u4e86\u3002\u4e0d\u904e\u6211\u5c31\u662f\u4f9d\u7167\u7d93\u9a57\u8a66\u8a66\u770b\u2026 \u679c\u7136\u53ef\u4ee5\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import * as XLSX from 'xlsx-js-style'\n")),(0,r.kt)("p",null,"\u63a5\u8457\uff0c\u4f7f\u7528\u5957\u4ef6\u7684\u8d77\u624b\u8a66\uff0c\u5c31\u662f\u5148\u8a66\u8457\u4f7f\u7528\u6700\u7c21\u7bc4\u4f8b\uff1b\u4ee5\u4e0b\u70ba\u6587\u4ef6\u4e0a\u7684\u7bc4\u4f8b\uff0c\u76f4\u63a5\u8cbc\u4e0a\u5c31\u662f\u4e00\u500b\u53ef\u57f7\u884c\u7684\u7a0b\u5f0f\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'// STEP 1: Create a new workbook\nconst wb = XLSX.utils.book_new();\n\n// STEP 2: Create data rows and styles\nlet row = [\n    { v: "Courier: 24", t: "s", s: { font: { name: "Courier", sz: 24 } } },\n    { v: "bold & color", t: "s", s: { font: { bold: true, color: { rgb: "FF0000" } } } },\n    { v: "fill: color", t: "s", s: { fill: { fgColor: { rgb: "E9E9E9" } } } },\n    { v: "line\\nbreak", t: "s", s: { alignment: { wrapText: true } } },\n];\n\n// STEP 3: Create worksheet with rows; Add worksheet to workbook\nconst ws = XLSX.utils.aoa_to_sheet([row]);\nXLSX.utils.book_append_sheet(wb, ws, "readme demo");\n\n// STEP 4: Write Excel file to browser\nXLSX.writeFile(wb, "xlsx-js-style-demo.xlsx");\n')),(0,r.kt)("h3",{id:"\u6b04\u4f4d\u6a23\u5f0f"},"\u6b04\u4f4d\u6a23\u5f0f"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"xlsx-js-style")," \u63d0\u4f9b ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/gitbrent/xlsx-js-style#cell-style-properties"},"Style API"),"\uff0c\u5728\u6587\u4ef6\u4e0a\u6709 api\u53ef\u67e5\u8a62\u3002\u5982\u540c\u524d\u9762\u7684\u7bc4\u4f8b\uff0c\u4f7f\u7528\u65b9\u5f0f\u662f\u653e\u5728 data row\u7576\u4e2d\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"s"),"\u5c6c\u6027\u7576\u4e2d\u3002"),(0,r.kt)("p",null,"\u6bd4\u5982\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"{s: { font: { bold: true, color: { rgb: 'ffffff' } }, fill: { fgColor: { rgb: 'c00000' }}}}\n")),(0,r.kt)("p",null," \u5176\u4e2d ",(0,r.kt)("inlineCode",{parentName:"p"},"font"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"fill"),"\u53ef\u4ee5\u5c0d\u61c9\u5230 api\u6587\u4ef6\u4e0a\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"Style Prop"),"\u6b04\u4f4d\uff0c\u5176\u5c6c\u6027\u503c\u53ef\u4ee5\u9032\u4e00\u6b65\u7684\u5f9e\u6587\u4ef6\u4e2d\u7684\u8868\u683c\u67e5\u95b1\u5230\u3002"),(0,r.kt)("h2",{id:"\u5176\u5b83\u7684\u5e38\u7528\u529f\u80fd"},"\u5176\u5b83\u7684\u5e38\u7528\u529f\u80fd"),(0,r.kt)("h3",{id:"sheetjs\u6587\u4ef6"},"SheetJS\u6587\u4ef6"),(0,r.kt)("p",null," ",(0,r.kt)("inlineCode",{parentName:"p"},"xlsx-js-style"),"\u4e3b\u8981\u662f\u64f4\u5c55\u4e86 ",(0,r.kt)("inlineCode",{parentName:"p"},"SheetJS"),"\u539f\u6709\u7684 API\uff0c\u6240\u4ee5\u9664\u4e86 Style API\u4ee5\u5916\u7684 Core API\u5c31\u6c92\u6709\u653e\u5230\u6587\u4ef6\u7576\u4e2d\u4e86\uff0c\u5fc5\u9808\u8981\u5230 ",(0,r.kt)("inlineCode",{parentName:"p"},"SheetJS"),"\u7684",(0,r.kt)("a",{parentName:"p",href:"https://docs.sheetjs.com/docs/csf/"},"\u6587\u4ef6"),"\u4f86\u67e5\u95b1\u3002"),(0,r.kt)("p",null,"\u5f8c\u9762\u6211\u6703\u8aaa\u660e\u6211\u81ea\u5df1\u5e38\u7528\u5230\u7684 API\u3002"),(0,r.kt)("h3",{id:"\u6b04\u4f4d\u5bec\u5ea6"},"\u6b04\u4f4d\u5bec\u5ea6"),(0,r.kt)("p",null,"\u6b04\u4f4d\u5bec\u5ea6\u7684\u8a2d\u5b9a\u8981\u653e\u5728 WorkSheet\u5e95\u4e0b\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"!cols"),"\u7269\u4ef6\u7576\u4e2d\u3002\u7bc4\u4f8b\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'var wscols = [\n  {wch: 6}, // "characters"\n  {wpx: 50}, // "pixels"\n  ,\n  {hidden: true} // hide column\n];\nws[\'!cols\'] = wscols\n\nXLSX.utils.book_append_sheet(wb, ws, "readme demo")\n')),(0,r.kt)("p",null,"\u9663\u5217\u7576\u4e2d\u7684\u7269\u4ef6\u9806\u5e8f\u5373\u5c0d\u61c9\u6b04\u4f4d\u9806\u5e8f\uff0c\u5176\u4e2d\u5c6c\u6027\u5982\u4e0b\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"wch: \u5b57\u5143\u6578\u91cf"),(0,r.kt)("li",{parentName:"ul"},"wpx: pixels"),(0,r.kt)("li",{parentName:"ul"},"hidden: \u96b1\u85cf")),(0,r.kt)("h3",{id:"\u5408\u4f75\u5132\u5b58\u683c"},"\u5408\u4f75\u5132\u5b58\u683c"),(0,r.kt)("p",null,"\u5408\u4f75\u5132\u5b58\u683c\u7684\u8a2d\u5b9a\u8981\u653e\u5728 WorkSheet\u5e95\u4e0b\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"!merge"),"\u7269\u4ef6\u4e2d\u7576\u3002\u7bc4\u4f8b\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'const merge = [\n  { s: { r: 0, c: 0 }, e: { r: 0, c: 7 } },{ s: { r: 3, c: 0 }, e: { r: 3, c: 7 } },\n];\nws["!merges"] = merge\n')),(0,r.kt)("p",null,"\u5c6c\u6027\u8aaa\u660e\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"s"),": \u5408\u4f75\u8d77\u59cb\u6b04\u4f4d\u4f4d\u7f6e (start)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"e"),": \u5408\u4f75\u7d50\u675f\u6b04\u4f4d\u4f4d\u7f6e (end)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"r"),": \u5217 index (row)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"c"),": \u6b04 index (column)")),(0,r.kt)("p",null,"\u4ee5\u4e0a\u9762\u4f8b\u5b50\u4f86\u8aaa\u660e\uff0c\u5373\u70ba\u5f9e\u3010\u52170\u3001\u6b040\u3011\u5408\u4f75\u81f3\u3010\u52170\u3001\u6b047\u3011\uff0c\u4ee5\u53ca\u5f9e\u3010\u52173\u3001\u6b040\u3011\u5408\u4f75\u81f3\u3010\u52173\u3001\u6b047\u3011\u3002"),(0,r.kt)("h3",{id:"\u63db\u884c"},"\u63db\u884c"),(0,r.kt)("p",null,"\u63db\u884c\u9700\u4f7f\u7528 Style API\u4e2d\u8a2d\u5b9a\u63db\u884c\u6a23\u5f0f\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"{alignment:{ wrapText: true }}\n")),(0,r.kt)("p",null,"\u63a5\u8457\u6b04\u4f4d\u503c\u7576\u4e2d\u5c31\u53ef\u4ee5\u52a0\u5165\u63db\u884c\u7b26\u865f ",(0,r.kt)("inlineCode",{parentName:"p"},"\\n"),"\u3002"),(0,r.kt)("p",null,"\u4ee5\u4e0b\u70baCell\u52a0\u5165\u63db\u884c\u6587\u5b57\u7684\u7bc4\u4f8b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"{ v: '\u7b2c\u4e00\u884c\\n\u7b2c\u4e8c\u884c', s: { alignment:{ wrapText: true } } }\n")),(0,r.kt)("h2",{id:"\u5c0f\u7d50"},"\u5c0f\u7d50"),(0,r.kt)("p",null,"\u5728\u7814\u7a76\u532f\u51fa excel\u529f\u80fd\u7576\u4e2d\uff0c\u627e\u5c0b\u5408\u9069\u7684\u5957\u4ef6\u53cd\u800c\u662f\u82b1\u6700\u591a\u6642\u9593\u7684\u90e8\u4efd\u3002\u9019\u500b ",(0,r.kt)("inlineCode",{parentName:"p"},"xlsx-js-style"),"\u662f\u6211\u627e\u5230\u90fd\u6709\u7b26\u5408\u6211\u7684\u9700\u6c42\u7684\u4e00\u500b\u5957\u4ef6\uff0c\u518d\u4f86\u5c31\u662f ",(0,r.kt)("inlineCode",{parentName:"p"},"SheetJS"),"\u7684\u6587\u4ef6\u4e5f\u6709\u9ede\u591a\u4e0d\u592a\u597d\u67e5\u627e\uff0c\u6240\u4ee5\u5c31\u628a\u6211\u81ea\u5df1\u5e38\u7528\u5230\u7684\u529f\u80fd\u6574\u7406\u8d77\u4f86\u7d66\u5927\u5bb6\u53c3\u8003\u3002"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/gitbrent/xlsx-js-style"},"https://github.com/gitbrent/xlsx-js-style")),(0,r.kt)("p",null,"SheetJS\u6587\u4ef6\uff08\u53ef\u4ee5\u770b\u5b8c\u6574\u7684api\uff09"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://docs.sheetjs.com/docs/csf/"},"https://docs.sheetjs.com/docs/csf/")),(0,r.kt)("p",null,"\u5408\u4f75\u5132\u5b58\u683c"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://stackoverflow.com/questions/53516403/sheetjs-xlsx-how-to-write-merged-cells"},"https://stackoverflow.com/questions/53516403/sheetjs-xlsx-how-to-write-merged-cells")),(0,r.kt)("p",null,"\u5bec\u5ea6"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/SheetJS/sheetjs/issues/1158"},"https://github.com/SheetJS/sheetjs/issues/1158")),(0,r.kt)("p",null,"\u63db\u884c"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"\\n")," \u63db\u884c"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"cell.s = {alignment:{ wrapText: true }}")))}c.isMDXComponent=!0}}]);