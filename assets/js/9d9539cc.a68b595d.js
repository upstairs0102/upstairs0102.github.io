"use strict";(self.webpackChunkupstairs_0102_github_io=self.webpackChunkupstairs_0102_github_io||[]).push([[8791],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>k});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},p=Object.keys(e);for(a=0;a<p.length;a++)n=p[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(a=0;a<p.length;a++)n=p[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,p=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=s(n),m=r,k=u["".concat(l,".").concat(m)]||u[m]||c[m]||p;return n?a.createElement(k,o(o({ref:t},d),{},{components:n})):a.createElement(k,o({ref:t},d))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var p=n.length,o=new Array(p);o[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:r,o[1]=i;for(var s=2;s<p;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7015:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>p,metadata:()=>i,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const p={slug:"2021/05/23/lib-of-redux-on-next",title:"Next.js\u4e0a\u4f7f\u7528 Redux\u56db\u5144\u5f1f",authors:"thunderboy",tags:["javascript","react","next.js","redux"]},o=void 0,i={permalink:"/blog/2021/05/23/lib-of-redux-on-next",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2021/2021-05-23-Next.js\u4e0a\u4f7f\u7528 Redux\u56db\u5144\u5f1f.md",source:"@site/blog/2021/2021-05-23-Next.js\u4e0a\u4f7f\u7528 Redux\u56db\u5144\u5f1f.md",title:"Next.js\u4e0a\u4f7f\u7528 Redux\u56db\u5144\u5f1f",description:"\u524d\u8a00",date:"2021-05-23T00:00:00.000Z",formattedDate:"May 23, 2021",tags:[{label:"javascript",permalink:"/blog/tags/javascript"},{label:"react",permalink:"/blog/tags/react"},{label:"next.js",permalink:"/blog/tags/next-js"},{label:"redux",permalink:"/blog/tags/redux"}],readingTime:11.44,hasTruncateMarker:!0,authors:[{name:"Adam You",title:"Engineer @ Blueplanet Inc.",url:"https://github.com/upstairs0102",imageURL:"/img/avatar.jpeg",key:"thunderboy"}],frontMatter:{slug:"2021/05/23/lib-of-redux-on-next",title:"Next.js\u4e0a\u4f7f\u7528 Redux\u56db\u5144\u5f1f",authors:"thunderboy",tags:["javascript","react","next.js","redux"]},prevItem:{title:"Vue2 \u7684 Vuex\u4f7f\u7528 Typescript\u5beb\u6cd5",permalink:"/blog/2021/06/24/vuex-with-typescript-in-vue2"},nextItem:{title:"Vue2\u7684 Option-Based Component\u4e2d\u4f7f\u7528Typescript\u7684\u7c21\u6613\u65b9\u5f0f",permalink:"/blog/2021/02/09/vue-option-based-component-with-typescript"}},l={authorsImageUrls:[void 0]},s=[{value:"\u524d\u8a00",id:"\u524d\u8a00",level:2},{value:"\u6982\u5ff5",id:"\u6982\u5ff5",level:2},{value:"State &amp; Reducer",id:"state--reducer",level:2},{value:"Action",id:"action",level:2},{value:"Action Creator",id:"action-creator",level:2},{value:"Async Action Creator\uff08\u4f7f\u7528Redux-Thunk\uff09",id:"async-action-creator\u4f7f\u7528redux-thunk",level:2},{value:"store",id:"store",level:2},{value:"React-Redux",id:"react-redux",level:2},{value:"next-redux-wrapper",id:"next-redux-wrapper",level:2}],d={toc:s};function u(e){let{components:t,...p}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,p,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u524d\u8a00"},"\u524d\u8a00"),(0,r.kt)("p",null,"\u8eab\u70ba\u4f7f\u7528 Vue.js\u7684\u958b\u767c\u8005\uff0c\u6700\u8fd1\u5728\u7814\u7a76 React.js\u4ee5\u53ca Next.js\uff0c\u539f\u672c\u4ee5\u70ba\u6709\u4e86\u4f7f\u7528 Vuex\uff08\u548c Redux \u4e00\u6a23\u53d6\u81ea Flux\u7684\u6982\u5ff5\u767c\u5c55\u51fa\u4f86\u72c0\u614b\u7ba1\u7406\u5957\u4ef6\uff09\u7684\u7d93\u9a57\uff0c\u61c9\u8a72\u53ef\u4ee5\u7121\u75db\u8f49\u79fb\u4f7f\u7528 Redux\uff0c\u4f46\u6c92\u60f3\u5230\u4f7f\u7528\u9580\u6abb\u7adf\u7136\u6bd4\u9810\u671f\u7684\u9ad8\u4e0a\u8a31\u591a\u3002"),(0,r.kt)("p",null,"\u5148\u662f\u7814\u7a76\u4e86 Redux\uff0c\u6c92\u60f3\u5230\u5982\u679c\u8981\u6253 Api\u9084\u9700\u8981\u50cf\u662f ",(0,r.kt)("inlineCode",{parentName:"p"},"React-Thunk"),"\u4e4b\u985e\u7684\u5957\u4ef6\u624d\u80fd\u505a\u975e\u540c\u6b65\u7684\u64cd\u4f5c\u3002\u63a5\u8457\uff0c Redux\u672c\u8eab\u662f\u4e00\u500b\u7368\u7acb\u7684\u72c0\u614b\u7ba1\u7406\u7684\u5957\u4ef6\uff0c\u8981\u600e\u9ebc\u8ddf React\u6e9d\u901a\u4ed6\u4e5f\u4e0d\u7ba1\uff0c\u6240\u4ee5\u9084\u9700\u8981\u518d\u5b89\u88dd ",(0,r.kt)("inlineCode",{parentName:"p"},"React-Redux"),"\u624d\u80fd\u5c07 ",(0,r.kt)("inlineCode",{parentName:"p"},"store"),"\u548c Component\u505a\u7d81\u5b9a\u3002\u597d\u4e0d\u5bb9\u6613\u6574\u7406\u5230\u4e00\u500b\u6bb5\u843d\u4e86\uff0c\u5be6\u969b\u958b\u767c Next.js\u7684\u6642\u5019\u9084\u6703\u6709\u4e00\u500b\u9700\u6c42\u662f\u8981\u5728 server-side\u5f9e ",(0,r.kt)("inlineCode",{parentName:"p"},"context"),"\u4e2d\u53d6\u5f97 ",(0,r.kt)("inlineCode",{parentName:"p"},"store"),"\u53c8\u8981\u518d\u5b89\u88dd ",(0,r.kt)("inlineCode",{parentName:"p"},"Next-Redux-Wrapper"),"\u3002\u524d\u524d\u5f8c\u5f8c\u542b Redux\u672c\u8eab\u7e3d\u5171\u88dd\u4e86\u56db\u500b\u5957\u4ef6\uff0c\u624d\u7d42\u65bc\u9054\u5230\u6211\u80fd\u958b\u59cb\u958b\u767c Next.js\u7a0b\u5f0f\u7684\u6700\u4f4e\u9700\u6c42\u3002"),(0,r.kt)("p",null,"\u5c31\u4e4b\u524d\u5b78\u7fd2 Vuex\u7684\u7d93\u9a57\uff0c\u82b1\u6bd4\u8f03\u591a\u6642\u9593\u7684\u5730\u65b9\u4e5f\u5c31\u53ea\u662f\u89c0\u5ff5\u4e0a\u7684\u5efa\u7acb\u3001\u4ee5\u53ca\u5be6\u4f5c\u4e0a\u61c9\u7528\u7684\u6280\u5de7\u9762\uff1b\u55ae\u5c31\u4f7f\u7528\u4e0a\uff0c\u4e5f\u5c31\u6700\u4e00\u958b\u59cb\u5b89\u88dd\u9032\u5c08\u6848\uff08\u5176\u5be6\u4e5f\u5c31\u662f cli\u5de5\u5177\u67b6\u7ad9\u6642\u6709\u9078\u64c7 Vuex\u800c\u5df2\uff09\u4e4b\u5f8c\uff0c\u5f04\u61c2 api\u6587\u4ef6\u5e7e\u4e4e\u5c31\u53ef\u4ee5\u958b\u59cb\u5beb\u7a0b\u5f0f\u4e86\u3002"),(0,r.kt)("p",null,"\u4f46\u662f\u5b78\u7fd2 Redux\u5c31\u4e0d\u592a\u4e00\u6a23\u4e86\uff08\u4e5f\u662f\u5b78 React.js\u5f88\u591a\u90e8\u4efd\u548c\u5b78 Vue.js\u7684\u5b78\u7fd2\u7d93\u9a57\u7684\u5dee\u7570\uff09\uff0c\u9996\u5148 Redux\u7684\u5beb\u6cd5\u5f88\u6709\u5f48\u6027\uff0c\u6240\u4ee5\u5fc5\u9808\u5148\u6e05\u695a\u7684\u7406\u89e3\u5176\u80cc\u5f8c\u7684\u89c0\u5ff5\u4e4b\u5f8c\uff0c\u878d\u5408\u6587\u4ef6\u4e0a\u7684\u8aaa\u660e\u642d\u914d\u7db2\u8def\u4e0a\u4e0d\u540c\u4eba\u5beb\u7684\u6587\u7ae0\uff0c\u518d\u6574\u7406\u51fa\u4e00\u500b\u9069\u5408\u81ea\u5df1\u7684\u5beb\u6cd5\uff1b\u63a5\u8457\u662f\u5982\u540c\u524d\u9762\u6240\u8aaa\u7684\uff0c\u5b78\u7fd2\u4e0b\u4e00\u500b\u5957\u4ef6\u518d\u4e0b\u4e00\u500b\u5957\u4ef6\uff0c\u6700\u5f8c\u8981\u628a\u5168\u90e8\u6574\u5408\u518d\u4e00\u8d77\u53c8\u662f\u53e6\u4e00\u56de\u4e8b\uff0c\u518d\u5168\u90e8\u6574\u7406\u51fa\u4e00\u500b\u9069\u5408\u81ea\u5df1\u7684\u5beb\u6cd5\u3002"),(0,r.kt)("p",null,"\uff08\u5169\u5929\u7684\u751f\u547d\u53c8\u9019\u6a23\u6c92\u4e86\u53ef\u4ee5\u958b\u59cb\u5beb code\u4e86~ QQ\uff09"),(0,r.kt)("p",null,"\u7e3d\u4e4b\uff0c\u53cd\u6b63\u6211\u662f\u9806\u4fbf\u505a\u4e86\u7b46\u8a18\uff0c\u96d6\u7136\u4e26\u4e0d\u662f\u5f88\u8a73\u7d30\u5b8c\u6574\uff0c\u4f46\u662f\u6211\u628a\u6bcf\u4e00\u500b\u6211\u8a8d\u70ba\u6700\u57fa\u672c\u4e14\u6700\u5c0f\u53ef\u884c\u7684\u7a0b\u5f0f\u78bc\u7d00\u9304\u4e0b\u4f86\uff0c\u5c31\u6309\u7167\u6211\u7684\u6b65\u9a5f\u505a\uff0c\u61c9\u8a72\u662f\u53ef\u4ee5\u5f88\u5feb\u5efa\u7acb\u57fa\u672c\u7684 Redux\u7a0b\u5f0f\u3002"),(0,r.kt)("h2",{id:"\u6982\u5ff5"},"\u6982\u5ff5"),(0,r.kt)("p",null,"Redux\u7684\u8cc7\u6599\u6d41\u5411\u7121\u8ad6\u540c\u6b65\u9084\u662f\u975e\u540c\u6b65\u90fd\u53ea\u6709\u4e00\u7a2e\uff08\u4e0d\u50cf Vuex\u7684 View\u53ef\u4ee5\u547c\u53eb ",(0,r.kt)("inlineCode",{parentName:"p"},"actions"),"(\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"dispatch"),")\u53ca ",(0,r.kt)("inlineCode",{parentName:"p"},"mutations"),"(\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"commit"),")\u5169\u7a2e\uff09"),(0,r.kt)("p",null,"\u8cc7\u6599\u6d41\u5411\uff1a"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"View")," -> ",(0,r.kt)("inlineCode",{parentName:"p"},"Actions")," -> ",(0,r.kt)("inlineCode",{parentName:"p"},"Reducer")," -> ",(0,r.kt)("inlineCode",{parentName:"p"},"State")," -> ",(0,r.kt)("inlineCode",{parentName:"p"},"View")),(0,r.kt)("p",null,"\u96d6\u7136\u8aaa\u6982\u5ff5\u4e0a\u53ea\u4e00\u7a2e\u8cc7\u6599\u6d41\uff0c\u4f46\u5be6\u4f5c\u4e0a ",(0,r.kt)("inlineCode",{parentName:"p"},"Action"),"\u9084\u662f\u5206\u70ba\u300c",(0,r.kt)("strong",{parentName:"p"},"\u540c\u6b65"),"\u300d\u548c\u300c",(0,r.kt)("strong",{parentName:"p"},"\u975e\u540c\u6b65"),"\u300d\u5169\u7a2e\u7684\u505a\u6cd5\u3002Redux\u539f\u751f ",(0,r.kt)("inlineCode",{parentName:"p"},"dispatch"),"\u662f\u76f4\u63a5\u547c\u53eb ",(0,r.kt)("inlineCode",{parentName:"p"},"reducer"),"\uff0c\u6240\u4ee5\u7121\u6cd5\u57f7\u884c\u975e\u540c\u6b65\u7684\u64cd\u4f5c\uff08 ",(0,r.kt)("inlineCode",{parentName:"p"},"reducer"),"\u4e2d\u975e\u540c\u6b65\u64cd\u4f5c\u662f\u88ab\u7981\u6b62\u7684\uff09\uff0c\u8981\u984d\u5916\u642d\u914d Redux-Thunk\u624d\u80fd\u4f7f\u7528\u975e\u540c\u6b65\u7684\u64cd\u4f5c"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image-20210520225845800",src:n(929).Z,width:"844",height:"624"})),(0,r.kt)("p",null,"\uff08\u5716\u7247\u53d6\u81ea\u5b98\u7db2\uff09"),(0,r.kt)("p",null,"\u5be6\u4f5c\u4e0a\u6240\u5fc5\u8981\u7684\u5957\u4ef6\u6709\u4ee5\u4e0b\u56db\u500b\uff1a"),(0,r.kt)("p",null,"Redux\uff1a\u72c0\u614b\u7ba1\u7406\u672c\u8eab"),(0,r.kt)("p",null,"Redux-Thunk\uff1a\u5be6\u4f5c middleware\u8655\u7406\u975e\u540c\u6b65\u884c\u70ba\uff08Redux\u672c\u8eab\u662f\u4e0d\u5141\u8a31\u8655\u7406\u975e\u540c\u6b65\u7684\uff09"),(0,r.kt)("p",null,"React-Redux\uff1a\u5c07 Redux\u8ddf Component\u7d81\u5b9a\uff08\u63d0\u4f9b",(0,r.kt)("inlineCode",{parentName:"p"},"Provider"),"\u5c07  ",(0,r.kt)("inlineCode",{parentName:"p"},"state"),"\u53ca ",(0,r.kt)("inlineCode",{parentName:"p"},"dispatch"),"\u50b3\u5165 Component\uff09"),(0,r.kt)("p",null,"Next-Redux-Wrapper\uff1aNext.js\u5728 server-side\u6216\u8005 static-site\u7684 build-time\u4e2d\u53d6\u5f97 ",(0,r.kt)("inlineCode",{parentName:"p"},"store")),(0,r.kt)("p",null,"\u4e0d\u932f\u7684\u6587\u7ae0\uff0c\u4f46\u6587\u7ae0\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"React-Redux"),"\u90e8\u4efd\u662f\u820a\u7248\u7684\u5beb\u6cd5"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://chentsulin.github.io/redux/index.html"},"https://chentsulin.github.io/redux/index.html")),(0,r.kt)("h2",{id:"state--reducer"},"State & Reducer"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"State\uff1a",(0,r.kt)("inlineCode",{parentName:"li"},"state")," \u662f\u552f\u8b80\u7684\uff0c\u6539\u8b8a ",(0,r.kt)("inlineCode",{parentName:"li"},"state"),"\u552f\u4e00\u7684\u65b9\u5f0f\u662f\u767c\u51fa\u4e00\u500b ",(0,r.kt)("inlineCode",{parentName:"li"},"action")),(0,r.kt)("li",{parentName:"ul"},"Reducer\uff1a\u53d6\u5f97\u5148\u524d\u7684",(0,r.kt)("inlineCode",{parentName:"li"},"state"),"\u548c\u4e00\u500b ",(0,r.kt)("inlineCode",{parentName:"li"},"action"),"\uff0c\u4e26\u56de\u50b3\u4e0b\u4e00\u500b ",(0,r.kt)("inlineCode",{parentName:"li"},"state"))),(0,r.kt)("p",null,"\u6700\u7c21\u6613\u7bc4\u4f8b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// state\nconst initState = {\n  otherState: 'otherState',\n  todoList: ['first'],\n};\n\n// reducer\nconst reducer = (state = initState, action) => {\n  switch (action.type) {\n    case 'ADD_TODOLIST': {\n      const todoList = state.todoList.map(d => d);\n      todoList.push(action.payload.listName)\n      return {\n        ...state, // \u56e0\u70ba\u8981\u66f4\u65b0\u6240\u6709\u7684 state\uff0c\u6240\u4ee5\u5fc5\u9808\u5148\u5c07\u539f\u672c\u7684 state\u89e3\u69cb\n        todoList,\n      };\n      /* \u6216\u8005 return\u7684\u5beb\u6cd5\u4e5f\u53ef\u9019\u6a23\n      return Object.assign({}, state, {\n        todoList\n      })\n      */\n    }\n    default:\n      return state;\n  }\n};\n")),(0,r.kt)("p",null,"\u5176\u4e2d\u8981\u6ce8\u610f\u7684\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"reducer")," \u5728\u66f4\u65b0 ",(0,r.kt)("inlineCode",{parentName:"p"},"state"),"\u7684\u6642\u5019\u4e26\u4e0d\u80fd\u53ea\u66f4\u65b0\u7279\u5b9a\u6b04\u4f4d\uff0c\u5fc5\u9808\u66f4\u65b0\u6574\u500b ",(0,r.kt)("inlineCode",{parentName:"p"},"state tree"),"\uff0c\u6240\u4ee5\u8981\u6ce8\u610f return\u7684\u5beb\u6cd5")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"reducer")," \u672c\u8eab\u4e0d\u80fd\u505a\u975e\u540c\u6b65\u7684\u64cd\u4f5c\uff0c\u5426\u5247\u6703\u5674\u932f\u8aa4\u8a0a\u606f"))),(0,r.kt)("p",null,"\u8655\u7406\u591a\u500b ",(0,r.kt)("inlineCode",{parentName:"p"},"action"),"\u7684\u7bc4\u4f8b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"function todoApp(state = initialState, action) {\n  switch (action.type) {\n    case SET_VISIBILITY_FILTER:\n      return {\n        ...state, \n        // \u7565\n      }\n    case ADD_TODO:\n      return {\n        ...state, \n        // \u7565\n      }\n    default:\n      return state\n  }\n}\n")),(0,r.kt)("p",null,"\u62c6\u5206 ",(0,r.kt)("inlineCode",{parentName:"p"},"Reducers"),"\uff1a"),(0,r.kt)("p",null,"Redux\u63d0\u4f9b\u4e00\u500b utility\u53eb\u505a ",(0,r.kt)("inlineCode",{parentName:"p"},"combineReducers()"),"\uff0c\u53ef\u4ee5\u7c21\u55ae\u7684\u5c07\u591a\u500b ",(0,r.kt)("inlineCode",{parentName:"p"},"reducer"),"\u5408\u4f75"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import { combineReducers } from 'redux'\n\nconst todoApp = combineReducers({\n  visibilityFilter,\n  todos\n})\n\nexport default todoApp\n")),(0,r.kt)("h2",{id:"action"},"Action"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"action")," \u662f\u4e00\u500b\u8981\u50b3\u905e\u8cc7\u6599\u7d66 ",(0,r.kt)("inlineCode",{parentName:"p"},"store"),"\u7684 payload\u8cc7\u8a0a\uff08\u900f\u904e",(0,r.kt)("inlineCode",{parentName:"p"},"store.dispatch()"),"\uff09\uff0c\u5176\u5b9a\u7fa9\u4e8b\u4ef6\u8981\u505a\u7684\u4e8b\u60c5\uff0c\u683c\u5f0f\u53ef\u81ea\u884c\u5b9a\u7fa9\uff0c\u4e00\u822c\u4f86\u8aaa\u6703\u9577\u9019\u6a23\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"export const ADD_TODO = 'ADD_TODO'\n\nconst action = {\n  type: ADD_TODO // Reducer\u7684type\u540d\u7a31\n  payload // '\u8981\u50b3\u905e\u7684\u8cc7\u6599'\n}\n")),(0,r.kt)("p",null,"\u7576 Views\u8981\u8ddf ",(0,r.kt)("inlineCode",{parentName:"p"},"store"),"\u6e9d\u901a\uff0c\u6700\u7c21\u6613\u7684\u5beb\u6cd5\u5c31\u662f ",(0,r.kt)("inlineCode",{parentName:"p"},"store.dispatch(action)"),"\uff0c\u4f8b\u5982\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"store.dispatch({\n  type: 'ADD_TODO' // Reducer\u7684type\u540d\u7a31\n  payload // '\u8981\u50b3\u905e\u7684\u8cc7\u6599'\n})\n")),(0,r.kt)("h2",{id:"action-creator"},"Action Creator"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"action creator"),"\u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"action"),"\u5f88\u5bb9\u6613\u88ab\u6df7\u70ba\u4e00\u8ac7\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"action creator")," \u662f\u7522\u751f ",(0,r.kt)("inlineCode",{parentName:"p"},"action"),"\u7684 function"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"export const ADD_TODO = 'ADD_TODO'\n\nexport const addTodo = (payload) => {\n  return {\n    type: ADD_TODO,\n    payload\n  }\n}\n")),(0,r.kt)("p",null,"\u7531 View\u767c\u51fa ",(0,r.kt)("inlineCode",{parentName:"p"},"dispatch"),"\u6642\u7684\u5beb\u6cd5\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"dispatch(addTodo(payload))\n")),(0,r.kt)("h2",{id:"async-action-creator\u4f7f\u7528redux-thunk"},"Async Action Creator\uff08\u4f7f\u7528Redux-Thunk\uff09"),(0,r.kt)("p",null,"Redux\u539f\u751f\u662f\u7981\u6b62\u975e\u540c\u6b65\u64cd\u4f5c\u7684\uff0c\u642d\u914d ",(0,r.kt)("inlineCode",{parentName:"p"},"Redux-Thunk")," \u5957\u4ef6\u6211\u5011\u53ef\u4ee5\u7528\u4f86\u88fd\u4f5c \u300c",(0,r.kt)("strong",{parentName:"p"},"\u975e\u540c\u6b65\u7684 Action Creator"),"\u300d\u3002\u7576\u4e00\u500b ",(0,r.kt)("inlineCode",{parentName:"p"},"action creator"),"\u56de\u50b3\u7684\u4e0d\u662f\u7269\u4ef6\uff08\u4e5f\u5c31\u662f ",(0,r.kt)("inlineCode",{parentName:"p"},"action"),"\uff09\u800c\u662f\u4e00\u500b function\u6642\uff0c\u8a72 function\u5c31\u6703\u88ab  ",(0,r.kt)("inlineCode",{parentName:"p"},"Redux Thunk middleware"),"\u6240\u57f7\u884c\u3002"),(0,r.kt)("p",null,"\u95dc\u65bc\u9019\u500b ",(0,r.kt)("inlineCode",{parentName:"p"},"async action creator"),"\u6240\u4ee5\u56de\u50b3\u7684 function\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u57f7\u884c\u5b8c\u975e\u540c\u6b65\u7684\u64cd\u4f5c\u5f8c\u8abf\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"distach")," ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u4e0d\u9700\u8981\u662f pure function\uff0c\u4e5f\u53ef\u4ee5\u505a\u5176\u4ed6\u7684\u64cd\u4f5c\uff0c\u9019\u8b93\u6211\u5011\u4e5f\u53ef\u4ee5\u7528\u4f86\u958b\u767c\u66f4\u8907\u96dc\u7684\u975e\u540c\u6b65\u63a7\u5236\u6d41\u7a0b"))),(0,r.kt)("p",null,"\u7bc4\u4f8b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const fetchData = (data) => {\n  return (dispatch) => {\n    // \u4e0d\u9700\u8981\u662f pure function\uff0c\u4e5f\u53ef\u4ee5\u505a\u5176\u4ed6\u540c\u6b65\u7684\u64cd\u4f5c\n    dispatch({\n      type: 'ANOTHER_ACTION'\n    })\n    \n    return fetch('http://www.website.com/api/todolist.post', {\n      method: 'POST',\n      body: JSON.stringify(data)\n    }).then(response => response.json())\n      .then(response => {\n        dispatch({\n          type: 'ADD_TODOLIST',\n          payload: response\n        })\n      }))\n  }\n}\n")),(0,r.kt)("p",null,"Views\u4e2d\u767c\u51fa ",(0,r.kt)("inlineCode",{parentName:"p"},"dispatch"),"\u7684\u5beb\u6cd5\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"store.dispatch(fetchPosts('reactjs')).then(() =>\n  console.log(store.getState())\n)\n")),(0,r.kt)("h2",{id:"store"},"store"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"createStore")," \u5beb\u6cd5\u7bc4\u4f8b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import thunkMiddleware from 'redux-thunk'\nimport createLogger from 'redux-logger'\nimport { createStore, applyMiddleware } from 'redux'\nimport rootReducer from './reducers'\n\nconst loggerMiddleware = createLogger()\n\nconst store = createStore(\n  rootReducer,\n  applyMiddleware(\n    thunkMiddleware, // dispatch() function\n    loggerMiddleware // log action\n  )\n)\n")),(0,r.kt)("p",null,"\u5e38\u7528 Methods\uff1a"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"getState()")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"dispatch(action)")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"subscribe(listener)")),(0,r.kt)("h2",{id:"react-redux"},"React-Redux"),(0,r.kt)("p",null,"React-Redux \u662f react\u8ddf redux\u6e9d\u901a\u7528\u7684\u5957\u4ef6\uff0c\u820a\u7248\u4e3b\u8981\u662f\u4ee5",(0,r.kt)("inlineCode",{parentName:"p"},"connect")," \u51fd\u5f0f\u5c07 ",(0,r.kt)("inlineCode",{parentName:"p"},"state"),"\u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"reducer"),"\u6ce8\u5165Component\uff0cv7.1.0\u4e4b\u5f8c\u7684\u7248\u672c\u63d0\u4f9b ",(0,r.kt)("inlineCode",{parentName:"p"},"Hooks"),"\u8a9e\u6cd5\uff0c\u4f7f\u7528\u65b9\u5f0f\u6bd4\u4ee5\u524d\u7c21\u55ae\u5f88\u591a"),(0,r.kt)("p",null,"\u5b98\u7db2\u6587\u4ef6"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://react-redux.js.org/api/hooks"},"https://react-redux.js.org/api/hooks")),(0,r.kt)("p",null,"\u4e0d\u932f\u7684\u4ecb\u7d39"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://medium.com/enjoy-life-enjoy-coding/react-redux-%E5%B0%8F%E5%AD%A9%E5%AD%90%E6%89%8D%E5%81%9A%E9%81%B8%E6%93%87-hooks-%E5%92%8C-redux-%E6%88%91%E5%85%A8%E9%83%BD%E8%A6%81-1fdd226f5d99"},"https://medium.com/enjoy-life-enjoy-coding/react-redux-%E5%B0%8F%E5%AD%A9%E5%AD%90%E6%89%8D%E5%81%9A%E9%81%B8%E6%93%87-hooks-%E5%92%8C-redux-%E6%88%91%E5%85%A8%E9%83%BD%E8%A6%81-1fdd226f5d99")),(0,r.kt)("p",null,"Provider\u8a2d\u5b9a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// app.js\nimport { createStore } from 'redux'\nimport { Provider } from 'react-redux'\nimport reducer from '@/store/reducer.js'\n\nconst store = createStore(reducer)\n\nconst App = () => {\n  return (\n    <Provider store={store}>\n      <Main />\n    </Provider>\n  )\n}\n")),(0,r.kt)("p",null,"React \u548c Store \u6e9d\u901a\u4e3b\u8981\u662f ",(0,r.kt)("inlineCode",{parentName:"p"},"state"),"\u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"action"),"\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"React-Redux"),"\u63d0\u4f9b\u4e86 ",(0,r.kt)("inlineCode",{parentName:"p"},"useSelector"),"\u4ee5\u53ca ",(0,r.kt)("inlineCode",{parentName:"p"},"useDispatch"),"\uff0c\u7bc4\u4f8b\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import { useSelector, useDispatch } from 'react-redux'\n\nconst Page = () => {\n  const todoList = useSelector(state => state.todoList)\n  const dispatch = useDispatch()\n  // \u7565\n}\n")),(0,r.kt)("h2",{id:"next-redux-wrapper"},"next-redux-wrapper"),(0,r.kt)("p",null,"Redux \u4f7f\u7528\u5728 Next.js\u4e0a\u6642\uff0cserver-side \u53d6\u7528\u7db2\u7ad9\u7684 config\u6216\u8005 state\u8cc7\u6599\u90fd\u9700\u8981\u900f\u904e ",(0,r.kt)("inlineCode",{parentName:"p"},"context"),"\u4f86\u53d6\u5f97\uff0c\u4f46\u662f Redux\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"store"),"\u662f\u6c92\u6709\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"context"),"\u5167\u7684\uff0c\u9019\u6642\u5019\u6211\u5011\u5c31\u9700\u8981\u984d\u5916\u5b89\u88dd ",(0,r.kt)("inlineCode",{parentName:"p"},"next-redux-wrapper")),(0,r.kt)("p",null,"\u4f9d\u8cf4 ",(0,r.kt)("inlineCode",{parentName:"p"},"react-redux"),"\u5957\u4ef6\uff0c\u4e26\u4e14\u8981\u6ce8\u610f\u7248\u672c\u5728 v7.x\u4ee5\u4e0a"),(0,r.kt)("p",null,"\u9996\u5148\u6709\u500b\u5c0f\u5751\u8981\u6ce8\u610f\uff0c\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"next-redux-wrapper"),"\u4e4b\u5f8c\uff0c\u96d6\u7136\u4ecd\u7136\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"react-redux"),"\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"useSelector"),"\u53ca ",(0,r.kt)("inlineCode",{parentName:"p"},"useDispatch"),"\u4f86\u8ddf ",(0,r.kt)("inlineCode",{parentName:"p"},"Store"),"\u6e9d\u901a\uff0c\u4f46",(0,r.kt)("inlineCode",{parentName:"p"},"react-redux"),"\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"Provider"),"\u5c31\u4e0d\u9700\u8981\u52a0\u4e0a\u53bb\uff0c\u5426\u5247 ",(0,r.kt)("inlineCode",{parentName:"p"},"state"),"\u7684\u66f4\u65b0\u4e0a\u6703\u51fa\u73fe bug\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"store.js")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// store.js\nimport { createStore, AnyAction, Store } from 'redux';\nimport { createWrapper, Context, HYDRATE } from 'next-redux-wrapper';\n\n// create your reducer\nconst reducer = (state = {tick: 'init'}, action) => {\n    switch (action.type) {\n        case HYDRATE:\n            // Attention! This will overwrite client state! Real apps should use proper reconciliation.\n            return {...state, ...action.payload};\n        case 'TICK':\n            return {...state, tick: action.payload};\n        default:\n            return state;\n    }\n};\n\n// create a makeStore function\nconst makeStore = (context) => createStore(reducer);\n\n// export an assembled wrapper\nexport const wrapper = createWrapper(makeStore, {debug: true});\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"getStaticProps"),"\u6216 ",(0,r.kt)("inlineCode",{parentName:"p"},"getServerSideProps")," \u767c\u51fa dispatch\u6642 type\u70ba ",(0,r.kt)("inlineCode",{parentName:"p"},"HYDRATE")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"app.js")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import React from 'react';\nimport { wrapper } from '../components/store'\n\nconst WrappedApp = ({ Component, pageProps }) => (\n    <Component {...pageProps} />\n);\n\nWrappedApp.getInitialProps = wrapper.getInitialPageProps(store => ({ Component, ctx }) => {\n  // \u7565\n})\n\nexport default wrapper.withRedux(WrappedApp)\n")),(0,r.kt)("p",null,"\u95dc\u65bc ",(0,r.kt)("inlineCode",{parentName:"p"},"getInitialProps"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"getStaticProps"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"getServerSideProps")," \u7b49\u7684\u5beb\u6cd5\u53c3\u8003\u5b98\u65b9\u6587\u4ef6\uff1a"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/kirill-konshin/next-redux-wrapper#server-and-client-state-separation"},"https://github.com/kirill-konshin/next-redux-wrapper#server-and-client-state-separation")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"reducer")),(0,r.kt)("p",null,"reducer\u7684\u8a2d\u5b9a\u662f\u5176\u4e2d\u6bd4\u8f03\u795e\u79d8\u7684\u90e8\u4efd\uff0c\u5fc5\u9808\u5728 reducer \u7684 function\u88e1 switch-case\u7684\u300c",(0,r.kt)("strong",{parentName:"p"},"\u6700\u4e0a\u65b9"),"\u300d\uff08\u4e5f\u5c31\u662f\u8981\u5728\u7b2c\u4e00\u500b\u505a\u5224\u65b7\uff09\u589e\u52a0\u5224\u65b7 ",(0,r.kt)("inlineCode",{parentName:"p"},"action.type"),"\u70ba ",(0,r.kt)("inlineCode",{parentName:"p"},"HYDRATE"),"\uff0c\u5c31\u6211\u7684\u7406\u89e3\u9019\u500b\u662f\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"getStaticProps"),"\u6216 ",(0,r.kt)("inlineCode",{parentName:"p"},"getServerSideProps"),"  \u57f7\u884c\u6642\u6703\u81ea\u52d5\u88ab ",(0,r.kt)("inlineCode",{parentName:"p"},"dispatch"),"\uff0c\u8981\u5728\u9019\u908a\u66f4\u65b0 server-side\uff08\u6216\u8005 static site\u7684 build-time\uff09\u4e2d\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"state"),"\u3002"),(0,r.kt)("p",null,"\u6b64\u6642 ",(0,r.kt)("inlineCode",{parentName:"p"},"action"),"\u88e1\u6703\u6709\u4e00\u5305 ",(0,r.kt)("inlineCode",{parentName:"p"},"payload"),"\u7269\u4ef6\uff0c\u88e1\u9762\u662f\u66f4\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"state"),"\uff0c\u8981\u7528\u4ed6\u4f86\u53d6\u4ee3\u8868\u820a\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"state"),"\u3002"),(0,r.kt)("p",null,"\u5982\u679c ",(0,r.kt)("inlineCode",{parentName:"p"},"reducer"),"\u662f\u6700\u5916\u5c64\u7684\u8a71\uff08rootReducer\uff09\uff0c\u5beb\u6cd5\u7bc4\u4f8b\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import initState from './state.js'\nimport { HYDRATE } from 'next-redux-wrapper'\n\nexport const reducer = (state = initState, action) => {\n  switch (action.type) {\n    case HYDRATE: {\n      return {\n        ...state, // \u539f\u672c\u7684 state\n        ...action.payload // \u66f4\u65b0\u7684 state\n      }\n    }\n    // \u7565\u2026 \u5176\u4ed6 case\n")),(0,r.kt)("p",null,"\u8981\u6ce8\u610f\u7684\u662f\uff0c\u5373\u4f7f\u8a72 ",(0,r.kt)("inlineCode",{parentName:"p"},"reducer"),"\u4e26\u4e0d\u662f\u5c0d\u61c9\u5230 state-tree\u6700\u5e95\u5c64\uff08\u6bd4\u5982\u4f7f\u7528\u4e86 ",(0,r.kt)("inlineCode",{parentName:"p"},"combineReducers"),"\uff09\uff0c",(0,r.kt)("strong",{parentName:"p"},"reducer\u4e2d\u6ce8\u5165\u7684 ",(0,r.kt)("inlineCode",{parentName:"strong"},"state"),"\u53ca ",(0,r.kt)("inlineCode",{parentName:"strong"},"action.payload"),"\u537b\u4ecd\u7136\u662f\u6700\u5e95\u5c64\u7684 ",(0,r.kt)("inlineCode",{parentName:"strong"},"state")),"\uff0c\u6240\u4ee5\u9019\u6642\u5019\u5c31\u8981\u6ce8\u610f\u56de\u50b3 state-tree\u7684\u7bc0\u9ede\u4f4d\u7f6e"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// store.js\nimport { createStore } from 'redux'\nimport { combineReducers } from 'redux'\nimport { createWrapper } from 'next-redux-wrapper'\nimport auth from './auth/reducers.js'\n\nconst makeStore = (context) => createStore(\n  combineReducers({\n    auth\n  })\n)\nexport const wrapper = createWrapper(makeStore, { debug: true })\n\n// reducer.js\nimport initState from './state.js'\nimport { HYDRATE } from 'next-redux-wrapper'\n\nconst auth = (state = initState, action) => {\n  switch (action.type) {\n    case HYDRATE: {\n      return {\n        ...state.auth, // \u6ce8\u610f\uff01\u8981\u56de\u50b3\u6b63\u78ba\u7684 state-tree\u7684\u7bc0\u9ede\u4f4d\u7f6e\n        ...action.payload.auth // \u6ce8\u610f\uff01\u8981\u56de\u50b3\u6b63\u78ba\u7684 state-tree\u7684\u7bc0\u9ede\u4f4d\u7f6e\n      }\n    }\n    // \u7565\u2026 \u5176\u4ed6 case\n  }\n}\n\nexport default auth\n")))}u.isMDXComponent=!0},929:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/image-20210520225845800-0d83410abb132a07bc7d01ef4b4e1c36.png"}}]);