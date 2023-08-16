"use strict";(self.webpackChunkupstairs_0102_github_io=self.webpackChunkupstairs_0102_github_io||[]).push([[4905],{3905:(t,e,n)=>{n.d(e,{Zo:()=>l,kt:()=>k});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function p(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=a.createContext({}),u=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):p(p({},e),t)),n},l=function(t){var e=u(t.components);return a.createElement(s.Provider,{value:e},t.children)},m="mdxType",c={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,o=t.originalType,s=t.parentName,l=i(t,["components","mdxType","originalType","parentName"]),m=u(n),d=r,k=m["".concat(s,".").concat(d)]||m[d]||c[d]||o;return n?a.createElement(k,p(p({ref:e},l),{},{components:n})):a.createElement(k,p({ref:e},l))}));function k(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=n.length,p=new Array(o);p[0]=d;var i={};for(var s in e)hasOwnProperty.call(e,s)&&(i[s]=e[s]);i.originalType=t,i[m]="string"==typeof t?t:r,p[1]=i;for(var u=2;u<o;u++)p[u]=n[u];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8345:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>p,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var a=n(87462),r=(n(67294),n(3905));const o={slug:"2021/06/24/vuex-with-typescript-in-vue2",title:"Vue2 \u7684 Vuex\u4f7f\u7528 Typescript\u5beb\u6cd5",authors:"thunderboy",tags:["typescript","vue","vuex"]},p=void 0,i={permalink:"/blog/2021/06/24/vuex-with-typescript-in-vue2",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2021/2021-06-24-Vue2 \u7684 Vuex\u4f7f\u7528 Typescript\u5beb\u6cd5.md",source:"@site/blog/2021/2021-06-24-Vue2 \u7684 Vuex\u4f7f\u7528 Typescript\u5beb\u6cd5.md",title:"Vue2 \u7684 Vuex\u4f7f\u7528 Typescript\u5beb\u6cd5",description:"\u524d\u8a00",date:"2021-06-24T00:00:00.000Z",formattedDate:"June 24, 2021",tags:[{label:"typescript",permalink:"/blog/tags/typescript"},{label:"vue",permalink:"/blog/tags/vue"},{label:"vuex",permalink:"/blog/tags/vuex"}],readingTime:6.185,hasTruncateMarker:!0,authors:[{name:"Adam You",title:"Engineer @ Blueplanet Inc.",url:"https://github.com/upstairs0102",imageURL:"/img/avatar.jpeg",key:"thunderboy"}],frontMatter:{slug:"2021/06/24/vuex-with-typescript-in-vue2",title:"Vue2 \u7684 Vuex\u4f7f\u7528 Typescript\u5beb\u6cd5",authors:"thunderboy",tags:["typescript","vue","vuex"]},prevItem:{title:"Vue Recursive Component",permalink:"/blog/2021/06/24/vue-recursive-component"},nextItem:{title:"Next.js\u4e0a\u4f7f\u7528 Redux\u56db\u5144\u5f1f",permalink:"/blog/2021/05/23/lib-of-redux-on-next"}},s={authorsImageUrls:[void 0]},u=[{value:"\u524d\u8a00",id:"\u524d\u8a00",level:2},{value:"Vuex \u4f7f\u7528 Typescript\u5beb\u6cd5",id:"vuex-\u4f7f\u7528-typescript\u5beb\u6cd5",level:2},{value:"State",id:"state",level:3},{value:"Action",id:"action",level:3},{value:"Mutation",id:"mutation",level:3},{value:"Getters",id:"getters",level:3},{value:"Component\u4e2d\u4f7f\u7528 Vuex",id:"component\u4e2d\u4f7f\u7528-vuex",level:2},{value:"1.mapState/mapGetters/mapActions/mapMutations",id:"1mapstatemapgettersmapactionsmapmutations",level:3},{value:"2.this.$store",id:"2thisstore",level:3},{value:"3.import store",id:"3import-store",level:3},{value:"\u53c3\u8003\u4f86\u6e90",id:"\u53c3\u8003\u4f86\u6e90",level:2}],l={toc:u};function m(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},l,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u524d\u8a00"},"\u524d\u8a00"),(0,r.kt)("p",null,"Vuex v4.0\u7248\u672c\u4ee5\u4e0a\u5927\u5e45\u6539\u5584\u4e86\u5c0d Typescript\u7684\u652f\u63f4\u3001\u4ee5\u53ca\u5c0d composition-api\u7684\u6574\u5408\uff0c\u4f46\u662f ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/vuejs/vuex/blob/4.0/package.json#L55"},"Vuex v4.x\u7248\u53ea\u652f\u63f4 Vue3\u4ee5\u4e0a\u7248\u672c"),"\u3002"),(0,r.kt)("p",null,"\u4e5f\u5c31\u662f\u8aaa\u5982\u679c\u958b\u767c\u74b0\u5883\u662f Vue v2.x\u7248\u672c\u7684\u8a71\uff0cVuex\u4e5f\u5c31\u53ea\u80fd\u4f7f\u7528 v3.x\u7248\u672c\u3002\u96d6\u7136\u8aaa Vuex v3.x\u7248\u5c0d\u65bc Typescript\u7684\u652f\u63f4\u4e0a\u4e5f\u4e9b\u9650\u5236\u548c\u4e0d\u9806\u624b\uff0c\u4f46\u53ea\u8981\u505a\u597d\u8a3b\u8a18 (annotation)\u7684\u5de5\u4f5c\uff0c\u57fa\u672c\u4e0a\u6211\u89ba\u5f97\u578b\u5225\u63a8\u5c0e\u4e0a\u9084\u7b97\u883b\u5b8c\u6574\u7684\uff0c\u552f\u7368 Component\u4e2d\u8981\u5f15\u5165 Vuex\u7684\u6642\u5019\u5c31\u6703\u6709\u4e9b\u9650\u5236\uff0c\u53ea\u6709 ",(0,r.kt)("inlineCode",{parentName:"p"},"state"),"\u53ef\u4ee5\u578b\u5225\u63a8\u5c0e\uff0c\u5176\u9918 ",(0,r.kt)("inlineCode",{parentName:"p"},"mutation"),"/",(0,r.kt)("inlineCode",{parentName:"p"},"action"),"\u7b49\u90fd\u6703\u662f ",(0,r.kt)("inlineCode",{parentName:"p"},"any"),"\u578b\u5225\u3002\u4e0d\u904e\u5c0d\u6211\u500b\u4eba\u4f86\u8aaa\u6709 ",(0,r.kt)("inlineCode",{parentName:"p"},"state"),"\u578b\u5225\u63a8\u5c0e\u5c31\u5df2\u7d93\u662f\u76f8\u7576\u5be6\u7528\uff0c\u5176\u4ed6\u7684\u5c31\u9084\u662f\u6211\u53ef\u4ee5\u5fcd\u53d7\u7684\u7bc4\u570d\u4e86\u3002"),(0,r.kt)("h2",{id:"vuex-\u4f7f\u7528-typescript\u5beb\u6cd5"},"Vuex \u4f7f\u7528 Typescript\u5beb\u6cd5"),(0,r.kt)("h3",{id:"state"},"State"),(0,r.kt)("p",null,"\u8981\u5c07\u6574\u500b ",(0,r.kt)("inlineCode",{parentName:"p"},"state"),"\u8a3b\u8a18\u6210\u4e00\u500b Type\u6216 Interface\u3002\u5982\u679c Vuex\u6709\u4f7f\u7528 module\u529f\u80fd\uff0c\u5247\u6bcf\u500b\u5b50\u6a21\u7d44\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"state"),"\u5404\u81ea\u7dad\u8b77\u81ea\u5df1\u7684 Interface/Type\u3002"),(0,r.kt)("p",null,"\u5982\u4e0b\u4f8b\u5b50\u662f\u540d\u7a31\u70ba ",(0,r.kt)("inlineCode",{parentName:"p"},"cart"),"\u7684\u6a21\u7d44\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"state"),"\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// @/store/modules/cart/state.ts\nexport type CartState = {\n  added: {\n    id: number\n    quantity: number\n  };\n  checkoutStatus: 'successful' | 'failed' | null\n}\n\nconst state: CartState = {\n  added: [],\n  checkoutStatus: null\n}\n\nexport default state\n")),(0,r.kt)("p",null,"\u5728 Vuex\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"state"),"\u662f\u4e00\u500b tree\u7d50\u69cb\uff0c\u6839\u7bc0\u9ede\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"state"),"\u7a31\u4e4b\u70ba ",(0,r.kt)("inlineCode",{parentName:"p"},"rootState"),"\uff0c\u800cmodules\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"state"),"\u6703\u662f",(0,r.kt)("inlineCode",{parentName:"p"},"rootState"),"\u5e95\u4e0b\u7684\u4e00\u500b\u5b50\u7bc0\u9ede\uff0c\u6240\u4ee5\u5728\u6a21\u7d44\u5316Vuex\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"rootState"),"\u5728\u8a3b\u8a18\u578b\u5225\u7684\u6642\u5019\u9700\u8981\u628a modules\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"state"),"\u578b\u5225\u653e\u5165\u3002"),(0,r.kt)("p",null,"\u5982\u4e0b\u7bc4\u4f8b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// @/store/index.ts\nimport Vue from 'vue'\nimport Vuex from 'vuex'\n// \u5b50\u6a21\u7d44\u7684 state\nimport cart, { CartState } from './modules/cart/state'\n// \u6700\u5916\u5c64\u7684 state\nimport appState, { AppState } from './state'\n\nVue.use(Vuex)\n\n// \u6839\u7bc0\u9ede\u7684 state-tree\nexport type RootState = AppState & {\n  cart: CartState;\n}\n\nexport default new Vuex.Store({\n  modules: {\n    cart\n  },\n  state: appState as RootState,\n  // \u7565\n})\n")),(0,r.kt)("h3",{id:"action"},"Action"),(0,r.kt)("p",null,"vuex\u63d0\u4f9b ",(0,r.kt)("inlineCode",{parentName:"p"},"ActionContext<State, RootState>"),"\u63d0\u4f9b\u7d66",(0,r.kt)("inlineCode",{parentName:"p"},"context"),"\u505a\u8a3b\u8a18\uff0c\u6cdb\u578b\u4e2d\u6709\u5169\u500b\u53c3\u6578\u5206\u5225\u662f\u8a72\u6a21\u7d44\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"state"),"\u7684\u578b\u5225\u4ee5\u53ca ",(0,r.kt)("inlineCode",{parentName:"p"},"rootState"),"\u7684\u578b\u5225\uff0c\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import { ActionContext } from 'vuex'\nimport { State } from './state.ts'\nimport { RootState } from '../state.ts'\n\nconst actions = {\n  checkout (context: ActionContext<State, RootState>, products: CartProduct[]) {\n    context.commit(types.CHECKOUT_REQUEST)\n    // ...\n  }\n}\n")),(0,r.kt)("p",null,"\u89e3\u69cb\u7684\u5beb\u6cd5"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import { Commit } from 'vuex'\nimport { State } from './state.ts'\n\nconst actions = {\n  checkout ({ commit: Commit, state: State }, products: CartProduct[]) {\n    context.commit(types.CHECKOUT_REQUEST)\n    // ...\n  }\n}\n")),(0,r.kt)("h3",{id:"mutation"},"Mutation"),(0,r.kt)("p",null,"\u8a3b\u8a18 payload\u7684\u578b\u5225\u4ee5\u53ca\u5728  state.ts\u4e2d\u8a3b\u8a18\u7684 state\u578b\u5225"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import { AddToCartPayload } from '../index.ts'\nimport { State } from './state.ts'\n\nconst mutations = {\n  addToCart (state: State, payload: AddToCartPayload) {\n    const product = state.all.find(p => p.id === payload.id)\n    // ...\n  }\n}\n")),(0,r.kt)("h3",{id:"getters"},"Getters"),(0,r.kt)("p",null,"\u5404\u5225\u7684 getters\u51fd\u5f0f\u53ef\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"Getter<State, RootState>"),"\uff0c getters\u6a21\u7d44\u7269\u4ef6\u9700\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"GetterTree<State, RootState>")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// ./src/\nimport { GetterTree, Getter } from 'vuex'\nimport { State } from './index'\nimport { RootState } from '@/store/index'\n\nconst cartProducts: Getter<State, RootState> = (state: State) => {\n  return state.cart.added.map(shape => {\n    // ...\n  })\n}\n\nconst getterTree: GetterTree<State, RootState> = {\n  cartProducts\n}\n\nexport default getterTree\n")),(0,r.kt)("p",null,"\u7c21\u6f54\u5beb\u6cd5\uff1a\u76f4\u63a5\u4f7f\u7528 getterTree\u628a\u6240\u6709 getter\u51fd\u5f0f\u5beb\u5728\u4e00\u8d77\uff0c\u5c31\u4e0d\u7528\u5404\u5225\u8a3b\u8a18 getter\u51fd\u5f0f\u7684\u578b\u5225\uff0c\u9019\u6a23\u6703\u66f4\u65b9\u4fbf\u4e00\u4e9b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// ./src/\nimport { GetterTree } from 'vuex'\nimport { State } from './index'\n\nconst getterTree: GetterTree<State, any> = {\n  cartProducts (state) => {\n    // state\u7684\u578b\u5225 typescript\u6703\u81ea\u884c\u63a8\u65b7\u51fa\u4f86\n    return state.cart.added.map(shape => {\n      // ...\n    })\n  }\n}\n\nexport default getterTree\n")),(0,r.kt)("h2",{id:"component\u4e2d\u4f7f\u7528-vuex"},"Component\u4e2d\u4f7f\u7528 Vuex"),(0,r.kt)("p",null,"\u9996\u5148\uff0c\u95dc\u65bc\u5728 Vue2\u4e2d Component\u5beb Typescript\u96d6\u7136\u4e0d\u662f\u672c\u6587\u91cd\u9ede\uff0c\u4e0d\u904e\u65e2\u7136\u63d0\u5230\u4e86\u9084\u662f\u7a0d\u5fae\u8aaa\u4e00\u4e0b\uff0c\u9019\u88e1\u662f\u6975\u5ea6\u5f37\u70c8\u5efa\u8b70\u5b89\u88dd ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/vuejs/composition-api"},"composition-api"),"\uff0c\u95dc\u65bc\u4f7f\u7528\u65b9\u5f0f\u53ef\u53c3\u8003\u6211\u4e4b\u524d\u5beb\u7684\u300c",(0,r.kt)("a",{parentName:"p",href:"https://upstairs0102.github.io/2021/02/09/vue-option-based-component-with-typescript/"},"Vue2\u7684 Option-Based Component\u4e2d\u4f7f\u7528Typescript\u7684\u7c21\u6613\u65b9\u5f0f"),"\u300d\u3002\u4f60\u53ef\u4ee5\u4e0d\u9700\u6539\u8b8a\u539f\u672c\u7684 Option-Api\u5beb\u6cd5\uff0c\u5c31\u53ef\u4ee5\u5b8c\u5b8c\u5168\u5168\u7684\u89e3\u6c7a\u539f\u672c\u5728 Vue2\u4e2d Typescript\u4e2d\u652f\u63f4\u4e0d\u826f\u7684\u554f\u984c\uff1b\u7576\u7136\u5f8c\u65e2\u7136\u90fd\u5b89\u88dd composition-api\u4e86\uff0c\u4e5f\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528\u65b0\u7684 composition-api\u4f86\u958b\u767c\u3002"),(0,r.kt)("p",null,"\u4ee5\u4e0b\u91dd\u5c0d\u5e7e\u7a2e\u5e38\u7528\u7684\u5f15\u5165 Vuex\u65b9\u5f0f\u4f86\u505a\u8aaa\u660e\uff1a"),(0,r.kt)("h3",{id:"1mapstatemapgettersmapactionsmapmutations"},"1.mapState/mapGetters/mapActions/mapMutations"),(0,r.kt)("p",null,"\u9019\u500b\u5beb\u6cd5\u662f Option-Api\u7684\u5beb\u6cd5\u3002\u5f88\u986f\u7136\u4ed6\u63a8\u5c0e\u51fa\u4f86\u90fd\u6703\u662f ",(0,r.kt)("inlineCode",{parentName:"p"},"any"),"\u578b\u5225\uff0c\u6240\u4ee5\u9019\u7a2e\u5beb\u6cd5\u53ef\u4ee5\u76f4\u63a5\u653e\u68c4\u4e86\u3002"),(0,r.kt)("h3",{id:"2thisstore"},"2.this.$store"),(0,r.kt)("p",null,"\u9019\u500b\u5beb\u6cd5\u662f Option-Api\u7684\u5beb\u6cd5\u3002\u5b8c\u6210\u6587\u7ae0\u4e0a\u8ff0\u6240\u6709\u7684\u578b\u5225\u8a3b\u8a18\u4e4b\u5f8c\uff0c\u4ed6\u96d6\u7136\u63a8\u5c0e\u7684\u51fa\u4e00\u4e9b\u57fa\u672c\u7684 Vuex\u578b\u5225\uff0c\u4f46\u63a8\u5c0e\u4e0d\u51fa ",(0,r.kt)("inlineCode",{parentName:"p"},"state"),"\u7684\u578b\u5225\uff0c\u5728\u7de8\u8f2f\u5668\u4e2d\u6ed1\u9f20\u79fb\u904e ",(0,r.kt)("inlineCode",{parentName:"p"},"this.$store"),"\u4e0a\u6703\u767c\u73fe\uff0c\u4ed6\u63a8\u5c0e\u51fa\u7684\u578b\u5225\u662f ",(0,r.kt)("inlineCode",{parentName:"p"},"Store<any>"),"\u3002\u770b\u4f86\u9019\u500b\u53ef\u80fd\u9084\u9700\u8981\u984d\u5916\u7684\u4e00\u4e9b\u5de5\u4f5c\u624d\u80fd\u628a\u578b\u5225\u5ba3\u544a\u5230\u5168\u57df\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"$store"),"\u7269\u4ef6\u4e0a\u3002\u4e0d\u904e\u6211\u89ba\u5f97\u6709\u9ede\u9ebb\u7169\uff0c\u5c31\u653e\u68c4\u5617\u8a66\u4e86\u3002"),(0,r.kt)("h3",{id:"3import-store"},"3.import store"),(0,r.kt)("p",null,"\u9019\u500b\u662f\u6211\u89ba\u5f97\u6700\u5408\u7406\u7684\u4f7f\u7528\u65b9\u5f0f\uff0c\u96d6\u7136\u4ed6\u4e5f\u53ea\u63a8\u5c0e\u7684\u51fa ",(0,r.kt)("inlineCode",{parentName:"p"},"state"),"\uff0c\u4f46\u6211\u89ba\u5f97\u9019\u5df2\u7d93\u662f\u4e00\u500b\u5f88\u5927\u7684\u5e6b\u52a9\u4e86\uff0c\u5beb\u6cd5\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import store from '@/store/index'\n\nstore.state // \u53ef\u63a8\u65b7\u51fa\u578b\u5225\nstore.dispatch('checkout', true) // function\u53c3\u6578\u7121\u6cd5\u63a8\u65b7\u578b\u5225\n")),(0,r.kt)("p",null,"\u7e3d\u7d50\u4f86\u8aaa\uff0c\u4f7f\u7528 import store\u4f86\u5f15\u5165 Vuex\u662f\u6700\u5408\u7406\u4e5f\u7c21\u55ae\u7684\u65b9\u5f0f\uff0c\u81f3\u65bc ",(0,r.kt)("inlineCode",{parentName:"p"},"actions"),"\u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"mutations"),"\u7121\u6cd5\u63a8\u5c0e\u51fa\u578b\u5225\u9019\u500b\u554f\u984c\uff0c\u5982\u679c\u8981\u89e3\u6c7a\u7684\u8a71\u61c9\u8a72\u53ef\u4ee5\u5617\u8a66\u5beb helper function\u4f86\u89e3\u6c7a\uff0c\u4e0d\u904e\u9019\u6a23\u5c0d\u6211\u4f86\u8aaa\u5be6\u5728\u6709\u9ede\u592a\u904e\u56c9\u5506\uff0c\u6240\u4ee5\u6211\u662f\u9078\u64c7\u5ffd\u7565\u9019\u500b\u5c0f\u554f\u984c\u4e86\u3002"),(0,r.kt)("h2",{id:"\u53c3\u8003\u4f86\u6e90"},"\u53c3\u8003\u4f86\u6e90"),(0,r.kt)("p",null,"Vue2.5+ Typescript \u5f15\u5165\u5168\u9762\u6307\u5357 - Vuex\u7bc7"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://segmentfault.com/a/1190000011864013"},"https://segmentfault.com/a/1190000011864013")))}m.isMDXComponent=!0}}]);