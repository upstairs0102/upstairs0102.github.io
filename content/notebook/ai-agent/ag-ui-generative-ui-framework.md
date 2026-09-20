---
slug: "/ai-agent/ag-ui-generative-ui-framework"
title: "實作基於 AG-UI 的 Generative UI 框架"
tags: ["ai-agent", "ag-ui", "copilotkit", "generative-ui"]
category: "AI Agent"
collection: "technical"
kind: "article"
order: 999
draft: false
publishedAt: "2026-09-20"
updatedAt:
---

# 實作基於 AG-UI 的 Generative UI 框架



## 前言

大概在去年的時候，我對於前端領域在一個 AI agent 系統裡扮演的角色是什麼有些好奇，又或者說 – 對話機器人 (chat bot) 和其他網頁前端開發是否有什麼不同？

後來我得出了這個問題的答案，我在找的這個東西就叫是「Generative UI」（生成式 UI），雖然我並不確定是否在業界已普遍使用這個名詞，不過我參考了 CopilotKit 框架對於 Generative UI 的定義來做研究，理解了 Generative UI 的三種分類以及實作方式，後來以這三種當中挑出我認為對前端開發最有價值的 "Controlled"，擷取出必要的功能，最後成功解除了對 CopilotKit 的依賴，因此可以用最輕量的方式導入，不但不需導入整套 CopilotKit 就享有他的優點，也同時解除了原本必須建立在基於 node.js 的執行環境上的限制（可建立在純靜態網站上）。

我將這個成果放在我的 Github - [agui-toolkit](https://github.com/upstairs0102/agui-toolkit)。不過目前只實作最基本的功能，一些更進階的比如人機協同（Human-in-the-loop）就還未實作。



## 三種 Generative UI

根據 [CopilotKit 官網上的定義](https://www.copilotkit.ai/generative-ui-spectrum)：「**Generative UI**（生成式使用者介面）是指一系列使用者介面範式 (UI paradigms)，這些範式由 LLM 和 agent 實現，又可用於與他們所支援的**代理應用程式 (agentic application)**進行互動。」

在深入了解實作方式之前，單看這個定義會覺得有些抽象；但我用較為白話的方式來說明的話，**Generative UI** 就是「agent 和 UI進行互動」的一個範式。他並不是單獨由 LLM 和 agent 完成，也不是只有前端的 UI，而是**agent 和 UI 兩者要互相配合完成的工作**。

但實作方式也不會只有一種，按 CopilotKit 官方定義，包含了以下三種，光譜最左邊是完全由 UI 定義規則的，稱為「**Controlled**」，光譜最右邊是完全開放給 agent 生成的稱為「**Open-Ended**」，而中間稱為「**Declarative**」：

- **Controlled Generative UI** — 開發者提供預先定義的 Components 供 agent 選擇與渲染。CopilotKit 實作上可使用 SDK 內預先做好的 Genrative UI 模組來快速開發、也可以使用 CopilotKit 提供的 api 來開發客製的 compontns。
- **Declarative Generative UI** — agent 在執行時依照聲明式組裝文件按需組裝這些模組。CopilotKit 實作上可搭配 A2UI 通訊協定來開發。
- **Open-Ended Generative UI** — 由 agent 選擇 UI 模組/widgets 以嵌入方式在前端渲染。CopilotKit 實作上可搭配 MCP 官方的 MCP Apps 協定來開發 MCP tools（UI 模組）。

![image-20260920124716157](/images/notebook/ag-ui-generative-ui-framework/1.png)

### 為何我只選擇「Controlled」？

這三種類型的 **Generative UI** 除了實作方式不一樣外，實際具備的功能也略有不同。

以當中光譜最右邊的「**Open-Ended**」來說，由於前端只是提供容器（通常使用 iframe）被動的嵌入由 agent 傳送過來的 widgets，因此前端其實並不知道這個容器裡是什麼東西，並不具備跟前端頁面其他區塊的互動性。

而光譜最左邊的「**Controlled**」，UI 由頁面上的 Components 所定義，所以他不但可以和頁面其他的內容互動，還可以保存狀態，並進一步的跟 agent 內的 **intent router** 狀態作聯動。

基於「**Controlled**」具備更好的互動性、以及具備人機協同（Human-in-the-loop）功能，其次加上考量我們公司前後端分離的架構，我認為將更多的 UI 相關的程式交由前端工程師來維護更為合理。



## AG-UI 和 CopilotKit

AG-UI (Agent-User Interaction Protocol) 是一個「**AI Agent 與前端互動/人機協同（Human-in-the-loop）**」的一個開發標準，以官方提供的這張圖可以容易理解 AG-UI 在整個系統當中所在的位置：

![img](/images/notebook/ag-ui-generative-ui-framework/2.png)

AG-UI 是基於**事件驅動（Event-based）**的協定，相較於傳統的請求-回應（Request-Response），前端和 AI Agent 建立 SSE（Server-Sent Events），當 AI Agent 每做完一個動作，就會主動以「推送」(push) 一個帶有特定結構的「事件」(event) 給前端，前端「監聽」(listen) 這些事件並即時反應在 UI 上。

我覺得「事件驅動」相對容易理解，他其實就是以 streaming 的方式傳輸。streaming 要自行開發其實頗為麻煩… 我指的是沒有 AI 以前，現在有 AI 大概也不那麼麻煩了，雖然說仍然會有一段程式需要維護、各種字元判斷以及例外狀態需要管理。

而 Generative UI 的設計當中，UI 並不只是單方面的接收 agent 傳送來資訊而已，他還可以在接續下來的 request 當中、同步更新的狀態，並持續的進行雙方向的互動。

以下幾種我認為最典型的互動方式：

### 渲染自定義 Components

官方範例「[Beautiful Chat](https://dojo.showcase.copilotkit.ai/?integration=langgraph-python&demo=beautiful-chat)」

在這範例當中，由前端頁面預先準備好不同的圖表，由 agent 決定要使用哪種圖（Pie Chart/Line Chart/Bar Chart）、以及圖表所需的資料，傳送給前端 Component 中做渲染。



![image-20260920151155938](/images/notebook/ag-ui-generative-ui-framework/3.png)




### state 雙向聯動

官方範例「[**Share state - read & write**](https://dojo.showcase.copilotkit.ai/?integration=langgraph-python&demo=shared-state-read-write)」

實際上這個範例和前一個範例「渲染自定義 Components」運作原理是一樣的，都是將訊息傳送給 agent 之後，由 agent 判斷要回傳什麼內容給前端。

不過在這個官方範例當中，傳送給 agent 的訊息包含了「**對話框以外的頁面資訊**」，而這個些資訊**並不是單次被使用的，而是會儲存在頁面當中持續使用的狀態**，也就是說，頁面上的狀態和 agent 內的 intent router 狀態是「持續雙向聯動」的。

![image-20260920143454166](/images/notebook/ag-ui-generative-ui-framework/4.png)

### 人機協同 (Human in the loop)

官方範例「[**Human in the loop - Interrupts**](https://dojo.showcase.copilotkit.ai/?integration=langgraph-python&demo=gen-ui-interrupt)」

這也是很常見的對話機器人的人機介面 (Human Computer Interface) 設計，當 agent 判斷需要由人類進一步提供資訊才能完成當輪的對話內容，可以動態生成選單在前端介面上提供選項以補充進一步資訊。



![image-20260920143635714](/images/notebook/ag-ui-generative-ui-framework/5.png)



## 使用最輕量的 APIs，接著移除掉 CopilotKit

我覺得 CopilotKit 確實是一個蠻強大的工具，但是他也同時有一些限制 – 他的許多功能是**必須搭配他的「Copilot Runtime」一起使用**的，並且 Copilot Runtime 必須建立在基於 node.js 的執行環境上（也就是說必須使用 SSR 前端框架）。在一開始導入時就必須依賴一整套框架，這點實在是讓人有些卻步。

我的策略是：**自行開發出一組與 CopilotKit 功能的 API，並且解除對 Copilot Runtime 的依賴**。

結果如下圖，原本 CopilotKit 包含了三個部份：

- **Components**
- **APIs**
- **runtime**

並且他們之間是互相依賴、無法被單獨使用。但我把 APIs 維持他的相同介面和功能的情況下開發成自己的版本之後，我就不再需要 runtime了（也完全不需要引入 CopilotKit 了）。

![image-20260920201242674](/images/notebook/ag-ui-generative-ui-framework/6.png)

### 仿製 CopilotKit 的「APIs」

前面我們所仿製和 CopilotKit 相同功能（並解除對 runtime 依賴）的 APIs，原始碼放在我的 Github -  [agui-toolkit ](https://github.com/upstairs0102/agui-toolkit) ，有需要的話可以自行將程式複製下來貼到自己的專案裡即可。

包含：

- **`useAguiChat(agent)`**：管理一個對話回合的狀態機(`messages`/`isRunning`/`error`/`send`/`stop`)，並負責攔截 frontend tool 的呼叫、執行對應 handler、把結果送回 agent 繼續對話。
- **`useFrontendTool(agent, options)`**：在 agent 註冊一個只在前端執行的工具，`useAguiChat` 會在對話過程中自動偵測並呼叫。
- **`useCoAgent(agent, options)`**：讓元件的 local state 與 agent 的共享 state (`agent.state`) 保持雙向同步。

> 目前我只實作這三個 function (react hooks) ，已經涵蓋 Generative UI 最基本的需求，但 Human in the loop 所需 function 我還尚未實作

**—— 「這幾個 function 就是所有我們需要的東西了」**

結果比想像中的更簡單。

以下用一個簡單範例來說明使用方式：

```tsx
import { HttpAgent } from "@ag-ui/client";
import { useAguiChat, useFrontendTool, useCoAgent } from "agui-toolkit-react";

// 自行建立一個 ag-ui 相容的 agent 實例(這裡以 HTTP 後端為例)
const agent = new HttpAgent({ url: "/api/agui/your-endpoint" });

function Chat() {
  const { messages, isRunning, error, send, stop } = useAguiChat(agent);

  // 註冊一個只在瀏覽器端執行的工具,LLM 呼叫時不需要後端實作
  useFrontendTool(agent, {
    name: "setChartType",
    description: "切換比較看板目前的圖表呈現型態（長條/折線/圓餅），供 agent 主動幫使用者調整視覺呈現",
    parameters: {
      type: "object",
      properties: {
        chartType: { type: "string", enum: ["bar", "line", "pie"] },
      },
      required: ["chartType"],
    },
    handler: ({ chartType }: { chartType: string }) => {
      // 更新畫面狀態...
    },
  });

  // 與 agent 的共享狀態雙向同步
  const { state, setState } = useCoAgent(agent, {
    initialState: { chartType: "bar" },
  });

  return null; // 實際渲染省略
}
```

### 那「Components」呢？

原本 CopilotKit 提供了各種對話機器人所需的 Components 供開發者快速兜組自己的前端網頁，但原有的這些 Components 和 APIs、runtime 是互相依賴的，但我們重製 APIs 之後，原本的 Components 我們也跟著一起捨棄掉了。

但 APIs 變成獨立的存在之後，也代表 Components 其實就變成**和一樣的 UI 沒什麼兩樣，就是只負責呈現而已，不依賴業務邏輯**。

簡單講就是，需要什麼，自己做就好了。在這個 AI 時代，也不會是很大的工了。

### 在後端 agent 當中註冊 frontend tool

在前面說明了使 `useFrontendTool` 建立了一個 tool，這邊我們稱為「frontend tool」。而後端 agent 所建立的 tool 我們稱為「backend tool」。而這兩者呼叫方式大同小異。

最主要的差異只在於，agent 中產生 tool call 會丟給「backend tool」，接著產生自然語言回答後才會回傳給前端。而當 agent 判斷 tool 為「frontend tool」時，會把 tool call 回傳給前端，交由「frontend tool」自行決定如何處理 tool call 以及如何渲染 UI。

以下詳細說明這

**後端 agent 處理「backend tool」的 graph 生成流程：**

```
使用者問題
  ↓
產生 backend tool call
  ↓
判斷是 backend tool
  ↓
實際執行 backend tool
  ↓
讀取 ToolMessage，產生最終自然語言回答
  ↓
END
```

**後端 agent 處理「frontend tool」的 graph 生成流程：**

```
使用者問題
  ↓
產生 frontend tool call
  ↓
發現不是 backend tool
  ↓
END
```

**「frontend tool」handler**

```
  ↓
前端收到 frontend tool call
  ↓
前端執行 handler
  ↓
前端把結果送回後端
  ↓
再次執行後端 agent
```



## 結語

用了一整篇文章的篇幅說明整個來龍去脈，我在公司內做了一個簡報說明也差不多需要花半個小時的時間也才講得清楚。

雖然我認為他沒那麼複雜。

但是要解釋這個架構之前就需要從頭說起，我需要先解釋何為 Generative UI 的定義、以及 agent 和 UI 之間可以有哪些雙向互動（並不只是單向的），接著才能夠開始說明這個 agent 跟 UI 雙向溝通的架構。

或許直接從結果來說明會更簡單一些，畢竟就是 3 個 function 而已…

原始碼放在我的 Github -  [agui-toolkit ](https://github.com/upstairs0102/agui-toolkit) 。

不過最後還是再次小小附註一下這邊只涵蓋 Generative UI 最基本的需求， Human in the loop 所需 function 我還尚未實作。

