"use strict";(self.webpackChunkmy_doc_website=self.webpackChunkmy_doc_website||[]).push([[4686],{9891:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>a,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var i=t(7624),s=t(2172);const r={sidebar_label:"\u7cfb\u7edf\u67b6\u6784",sidebar_position:2},c="\u7cfb\u7edf\u67b6\u6784",o={id:"core-concepts/architecture",title:"\u7cfb\u7edf\u67b6\u6784",description:"Fluid\u7684\u6574\u4f53\u67b6\u6784\u5982\u4e0b\u6240\u793a:",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/core-concepts/architecture.md",sourceDirName:"core-concepts",slug:"/core-concepts/architecture",permalink:"/my-doc-website/zh/docs/core-concepts/architecture",draft:!1,unlisted:!1,editUrl:"https://github.com/TrafalgarZZZ/my-doc-website/tree/master/docs/core-concepts/architecture.md",tags:[],version:"current",lastUpdatedBy:"chenqiming",lastUpdatedAt:1711114406,formattedLastUpdatedAt:"2024\u5e743\u670822\u65e5",sidebarPosition:2,frontMatter:{sidebar_label:"\u7cfb\u7edf\u67b6\u6784",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Fluid\u7b80\u4ecb",permalink:"/my-doc-website/zh/docs/core-concepts/introduction"},next:{title:"Fluid\u6982\u5ff5\u4ecb\u7ecd",permalink:"/my-doc-website/zh/docs/core-concepts/concepts"}},l={},d=[];function u(e){const n={h1:"h1",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.M)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"\u7cfb\u7edf\u67b6\u6784",children:"\u7cfb\u7edf\u67b6\u6784"}),"\n",(0,i.jsx)(n.p,{children:"Fluid\u7684\u6574\u4f53\u67b6\u6784\u5982\u4e0b\u6240\u793a:"}),"\n",(0,i.jsx)("div",{align:"center",children:(0,i.jsx)("img",{src:"/my-doc-website/concepts/architecture.png",title:"perspective",height:"60%",width:"60%",alt:""})}),"\n",(0,i.jsx)(n.p,{children:"Fluid\u6709\u4e24\u4e2a\u6838\u5fc3\u6982\u5ff5\uff1aDataset\u548cRuntime\u3002\u4e3a\u4e86\u652f\u6301\u8fd9\u4e24\u4e2a\u6982\u5ff5\uff0cFluid\u7684\u67b6\u6784\u88ab\u903b\u8f91\u5730\u5212\u5206\u4e3a\u63a7\u5236\u5e73\u9762\u548c\u6570\u636e\u5e73\u9762\u3002"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u63a7\u5236\u5e73\u9762"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Dataset/Runtime Manager"}),": \u4e3b\u8981\u8d1f\u8d23\u6570\u636e\u96c6\u548c\u652f\u6301\u6570\u636e\u96c6\u7684\u8fd0\u884c\u65f6\u5728Kubernetes\u4e2d\u7684\u8c03\u5ea6\u548c\u7f16\u6392\u3002\u8d1f\u8d23\u6570\u636e\u96c6\u7684\u8c03\u5ea6\uff0c\u8fc1\u79fb\u548c\u7f13\u5b58\u8fd0\u884c\u65f6\u7684\u5f39\u6027\u6269\u7f29\u5bb9\uff1b\u540c\u65f6\u652f\u6301\u6570\u636e\u96c6\u7684\u81ea\u52a8\u5316\u8fd0\u7ef4\u64cd\u4f5c\uff0c\u6bd4\u5982\u63a7\u5236\u7ec6\u7c92\u5ea6\u7684\u6570\u636e\u9884\u70ed\uff0c\u6bd4\u5982\u53ef\u4ee5\u6307\u5b9a\u9884\u70ed\u67d0\u4e2a\u6307\u5b9a\u6587\u4ef6\u5939\uff1b\u63a7\u5236\u5143\u6570\u636e\u5907\u4efd\u548c\u6062\u590d\uff0c\u63d0\u5347\u5bf9\u4e8e\u6d77\u91cf\u5c0f\u6587\u4ef6\u573a\u666f\u7684\u6570\u636e\u8bbf\u95ee\u6027\u80fd\uff1b\u8bbe\u7f6e\u7f13\u5b58\u6570\u636e\u7684pin\u7b56\u7565\uff0c\u907f\u514d\u6570\u636e\u9a71\u9010\u5bfc\u81f4\u7684\u6027\u80fd\u9707\u8361\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Application Manager"}),": \u4e3b\u8981\u5173\u5fc3\u4f7f\u7528\u6570\u636e\u96c6\u7684\u5e94\u7528Pod\u7684\u8c03\u5ea6\u548c\u8fd0\u884c\uff0c\u5206\u4e3a\u4e24\u4e2a\u6838\u5fc3\u7ec4\u4ef6\uff1aScheduler\u548cWebhook."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Scheduler: \u7ed3\u5408\u4eceRuntime\u83b7\u53d6\u7684\u7f13\u5b58\u4fe1\u606f\uff0c\u5bf9\u4e8eKubernetes\u96c6\u7fa4\u4e2d\u7684Pod\u8fdb\u884c\u8c03\u5ea6\u3002\u5c06\u4f7f\u7528\u6570\u636e\u96c6\u7684\u5e94\u7528\u4f18\u5148\u8c03\u5ea6\u5230\u542b\u6709\u6570\u636e\u7f13\u5b58\u7684\u8282\u70b9; \u65e0\u9700\u7528\u6237\u6307\u5b9a\u7f13\u5b58\u8282\u70b9\u3002"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Sidecar Webhook: \u5bf9\u4e8e\u65e0\u6cd5\u8fd0\u884ccsi-pluign\u7684Kubernetes\u73af\u5883\uff0c Sidecar webhook\u4f1a\u5c06\u81ea\u52a8\u7684\u5c06PVC\u66ff\u6362\u6210 FUSE sidecar\uff0c\u5e76\u4e14\u63a7\u5236Pod\u4e2d\u5bb9\u5668\u542f\u52a8\u987a\u5e8f\uff0c\u4fdd\u8bc1FUSE\u5bb9\u5668\u5148\u542f\u52a8\u3002"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u6570\u636e\u5e73\u9762"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Runtime Plugin"}),": \u4f5c\u4e3a\u4e00\u79cd\u6269\u5c55\u6027\u5f3a\u7684\u63d2\u4ef6\uff0c\u80fd\u591f\u652f\u6301\u591a\u79cd\u6570\u636e\u8bbf\u95ee\u5f15\u64ce\u3002Fluid\u901a\u8fc7\u62bd\u8c61\u51fa\u4e00\u4e9b\u901a\u7528\u7684\u7279\u5f81\uff0c\u5982\u7f13\u5b58\u7684\u4f7f\u7528\u4ecb\u8d28\u3001\u914d\u989d\u3001\u76ee\u5f55\u7b49\uff0c\u4e0e\u4e0d\u540c\u7684\u5206\u5e03\u5f0f\u7f13\u5b58\u5f15\u64ce\u5b9e\u73b0\u6280\u672f\u5177\u6709\u53ef\u6269\u5c55\u6027\u3002\u6bd4\u5982AlluxioRuntime\u4f7f\u7528Master-Slave\u67b6\u6784\uff0c\u800cJuiceFSRuntime\u4f7f\u7528Worker P2P\u67b6\u6784\uff0c\u90fd\u53ef\u4ee5\u5728Runtime\u7684CRD\u4e2d\u8fdb\u884c\u914d\u7f6e\u3002\u8be5\u63d2\u4ef6\u4e0d\u4ec5\u652f\u6301Alluxio\u3001JuiceFS\u7b49\u7279\u5b9a\u7684Runtime\uff0c\u4e5f\u652f\u6301\u901a\u7528\u7684ThinRuntime\uff0c\u4f7f\u7528\u8005\u65e0\u9700\u5f00\u53d1\u5373\u53ef\u5b9e\u73b0\u5bf9\u901a\u7528\u5b58\u50a8\u7684\u8bbf\u95ee\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"CSI Plugin"}),": \u4ee5\u5bb9\u5668\u7684\u65b9\u5f0f\u7684\u65b9\u5f0f\u542f\u52a8\u5b58\u50a8\u5ba2\u6237\u7aef\uff0c\u4e0e\u5b58\u50a8\u5ba2\u6237\u7aef\u5b8c\u5168\u89e3\u8026\uff0c\u505aCSI Plugin\u5347\u7ea7\u4e0d\u4f1a\u5f71\u54cd\u5230\u4e1a\u52a1\u5bb9\u5668\uff0c\u540c\u65f6\u652f\u6301\u591a\u7248\u672c\u5b58\u50a8\u5ba2\u6237\u7aef\u90e8\u7f72\u5728\u540c\u4e00\u4e2aKubernetes\u96c6\u7fa4\u4e2d\uff1b\u5c06\u5ba2\u6237\u7aef\u72ec\u7acb\u5728 pod \u4e2d\u8fd0\u884c\u4e5f\u5c31\u4f7f\u5176\u5728 Kubernetes \u4f53\u7cfb\u4e2d\uff0c\u63d0\u4f9b\u53ef\u89c2\u6d4b\u6027\uff1b\u8bbe\u7f6e\u5ba2\u6237\u7aef\u7684\u8ba1\u7b97\u8d44\u6e90\u914d\u989d\u3002"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]})]})}function a(e={}){const{wrapper:n}={...(0,s.M)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},2172:(e,n,t)=>{t.d(n,{I:()=>o,M:()=>c});var i=t(1504);const s={},r=i.createContext(s);function c(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);