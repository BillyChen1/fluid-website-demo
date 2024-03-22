"use strict";(self.webpackChunkmy_doc_website=self.webpackChunkmy_doc_website||[]).push([[4540],{3336:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>h,frontMatter:()=>l,metadata:()=>r,toc:()=>o});var s=i(7624),t=i(2172);const l={sidebar_label:"Fluid\u7b80\u4ecb",sidebar_position:1},d="Fluid\u7b80\u4ecb",r={id:"core-concepts/introduction",title:"Fluid\u7b80\u4ecb",description:"\u4e3a\u4ec0\u4e48\u9700\u8981Fluid",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/core-concepts/introduction.md",sourceDirName:"core-concepts",slug:"/core-concepts/introduction",permalink:"/my-doc-website/zh/docs/core-concepts/introduction",draft:!1,unlisted:!1,editUrl:"https://github.com/TrafalgarZZZ/my-doc-website/tree/master/docs/core-concepts/introduction.md",tags:[],version:"current",lastUpdatedBy:"chenqiming",lastUpdatedAt:1711114406,formattedLastUpdatedAt:"2024\u5e743\u670822\u65e5",sidebarPosition:1,frontMatter:{sidebar_label:"Fluid\u7b80\u4ecb",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Fluid\u5feb\u901f\u4e0a\u624b",permalink:"/my-doc-website/zh/docs/getting-started/get_started"},next:{title:"\u7cfb\u7edf\u67b6\u6784",permalink:"/my-doc-website/zh/docs/core-concepts/architecture"}},c={},o=[{value:"\u4e3a\u4ec0\u4e48\u9700\u8981Fluid",id:"\u4e3a\u4ec0\u4e48\u9700\u8981fluid",level:2},{value:"\u4ec0\u4e48\u662fFluid",id:"\u4ec0\u4e48\u662ffluid",level:2},{value:"\u6838\u5fc3\u529f\u80fd\uff1a",id:"\u6838\u5fc3\u529f\u80fd",level:2},{value:"\u6f14\u793a",id:"\u6f14\u793a",level:2},{value:"\u6f14\u793a 1: \u52a0\u901f\u6587\u4ef6\u8bbf\u95ee",id:"\u6f14\u793a-1-\u52a0\u901f\u6587\u4ef6\u8bbf\u95ee",level:3},{value:"\u6f14\u793a 2: \u52a0\u901f\u673a\u5668\u5b66\u4e60",id:"\u6f14\u793a-2-\u52a0\u901f\u673a\u5668\u5b66\u4e60",level:3},{value:"\u5feb\u901f\u4f53\u9a8cFluid",id:"\u5feb\u901f\u4f53\u9a8cfluid",level:2},{value:"\u89c4\u5212\uff1a",id:"\u89c4\u5212",level:2}];function u(e){const n={a:"a",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,t.M)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"fluid\u7b80\u4ecb",children:"Fluid\u7b80\u4ecb"}),"\n",(0,s.jsx)(n.h2,{id:"\u4e3a\u4ec0\u4e48\u9700\u8981fluid",children:"\u4e3a\u4ec0\u4e48\u9700\u8981Fluid"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u5728\u4e91\u4e0a\u901a\u8fc7\u4e91\u539f\u751f\u67b6\u6784\u8fd0\u884cAI\u3001\u5927\u6570\u636e\u7b49\u4efb\u52a1\uff0c\u53ef\u4ee5\u4eab\u53d7\u8ba1\u7b97\u8d44\u6e90\u5f39\u6027\u7684\u4f18\u52bf\uff0c\u4f46\u540c\u65f6\u4e5f\u4f1a\u9047\u5230\uff0c\u8ba1\u7b97\u548c\u5b58\u50a8\u5206\u79bb\u67b6\u6784\u5e26\u6765\u7684\u6570\u636e\u8bbf\u95ee\u5ef6\u8fdf\u548c\u8fdc\u7a0b\u62c9\u53d6\u6570\u636e\u5e26\u5bbd\u5f00\u9500\u5927\u7684\u6311\u6218\u3002\u5c24\u5176\u5728GPU\u6df1\u5ea6\u5b66\u4e60\u8bad\u7ec3\u573a\u666f\u4e2d\uff0c\u8fed\u4ee3\u5f0f\u7684\u8fdc\u7a0b\u8bfb\u53d6\u5927\u91cf\u8bad\u7ec3\u6570\u636e\u65b9\u6cd5\u4f1a\u4e25\u91cd\u62d6\u6162GPU\u8ba1\u7b97\u6548\u7387\u3002"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Kubernetes\u53ea\u63d0\u4f9b\u4e86\u5f02\u6784\u5b58\u50a8\u670d\u52a1\u63a5\u5165\u548c\u7ba1\u7406\u6807\u51c6\u63a5\u53e3(CSI\uff0cContainer Storage Interface),\u5bf9\u5e94\u7528\u5982\u4f55\u5728\u5bb9\u5668\u96c6\u7fa4\u4e2d\u4f7f\u7528\u548c\u7ba1\u7406\u6570\u636e\u5e76\u6ca1\u6709\u5b9a\u4e49\u3002\u5728\u8fd0\u884c\u8bad\u7ec3\u4efb\u52a1\u65f6\uff0c\u6570\u636e\u79d1\u5b66\u5bb6\u9700\u8981\u80fd\u591f\u5b9a\u4e49\u6570\u636e\u96c6\u7684\u6587\u4ef6\u7279\u5f81,\u7ba1\u7406\u6570\u636e\u96c6\u7248\u672c\uff0c\u63a7\u5236\u8bbf\u95ee\u6743\u9650\uff0c\u6570\u636e\u96c6\u9884\u5904\u7406\uff0c\u52a0\u901f\u5f02\u6784\u6570\u636e\u8bfb\u53d6\u7b49\u3002\u4f46\u662f\u5728Kubernetes\u4e2d\u8fd8\u6ca1\u6709\u8fd9\u6837\u7684\u6807\u51c6\u65b9\u6848\uff0c\u8fd9\u662f\u4e91\u539f\u751f\u5bb9\u5668\u793e\u533a\u7f3a\u5931\u7684\u91cd\u8981\u80fd\u529b\u4e4b\u4e00\u3002"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Kubernetes \u652f\u6301\u591a\u79cd\u5f62\u6001\uff0c\u6bd4\u5982\u539f\u751fKubernetes\uff0c\u8fb9\u7f18Kubernetes\uff0cServerless Kubernetes\uff0c\u4f46\u662f\u5bf9\u4e8e\u4e0d\u540c\u5f62\u6001\u7684Kubernetes\uff0cKubernetes\u4e0d\u540c\u5f62\u6001\u7684\u652f\u6301\u5bf9\u4e8eCSI\u63d2\u4ef6\u652f\u6301\u7a0b\u5ea6\u4e5f\u4e0d\u540c\uff0c\u8bb8\u591aServerless Kubernetes\u4e0d\u652f\u6301\u7b2c\u4e09\u65b9\u7684CSI\u63d2\u4ef6\u7684\u90e8\u7f72\u3002"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u4ec0\u4e48\u662ffluid",children:"\u4ec0\u4e48\u662fFluid"}),"\n",(0,s.jsx)(n.p,{children:"\u4e0d\u540c\u4e8e\u4f20\u7edfPVC\u9762\u5411\u5b58\u50a8\u7684\u62bd\u8c61\uff0cFluid\u4ee5\u5e94\u7528\u4e3a\u4e2d\u5fc3\u7684\u89d2\u5ea6\uff0c\u5bf9Kubernetes\u4e0a\u201d\u8ba1\u7b97\u4efb\u52a1\u4f7f\u7528\u6570\u636e\u7684\u8fc7\u7a0b\u201d\u8fdb\u884c\u62bd\u8c61\u3002\u5b83\u63d0\u51fa\u5f39\u6027\u6570\u636e\u96c6Dataset\u6982\u5ff5\uff0c\u5e76\u4f5c\u4e3a\u4e00\u7b49\u516c\u6c11\u5728Kubernetes\u4e2d\u5b9e\u73b0\uff0c\u4ee5\u5b9e\u73b0\u6570\u636e\u96c6\u7684CRUD\u64cd\u4f5c\u3001\u6743\u9650\u63a7\u5236\u548c\u8bbf\u95ee\u52a0\u901f\u7b49\u529f\u80fd\u3002"}),"\n",(0,s.jsx)(n.p,{children:"Fluid\u8d1f\u8d23\u5c06\u5206\u5e03\u5f0f\u7f13\u5b58\u7cfb\u7edf\uff08\u5982Alluxio\u548cJuiceFS\uff09\u8f6c\u6362\u4e3a\u5177\u6709\u81ea\u6211\u7ba1\u7406\u3001\u5f39\u6027\u6269\u5bb9\u548c\u81ea\u6211\u4fee\u590d\u80fd\u529b\u7684\u53ef\u89c2\u6d4b\u7f13\u5b58\u670d\u52a1\uff0c\u5e76\u901a\u8fc7\u652f\u6301\u6570\u636e\u96c6\u7684\u64cd\u4f5c\u6765\u5b9e\u73b0\u6b64\u76ee\u7684\u3002\u540c\u65f6\uff0c\u901a\u8fc7\u6570\u636e\u7f13\u5b58\u7684\u4f4d\u7f6e\u4fe1\u606f\uff0cFluid\u80fd\u591f\u4e3a\u4f7f\u7528\u6570\u636e\u96c6\u7684\u5e94\u7528\u63d0\u4f9b\u6570\u636e\u4eb2\u548c\u6027\u8c03\u5ea6\u3002"}),"\n",(0,s.jsx)("div",{align:"center",children:(0,s.jsx)("img",{src:"/my-doc-website/concepts/perspective_cn.png",title:"perspective",height:"60%",width:"60%",alt:""})}),"\n",(0,s.jsx)(n.h2,{id:"\u6838\u5fc3\u529f\u80fd",children:"\u6838\u5fc3\u529f\u80fd\uff1a"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"\u9762\u5411\u5e94\u7528\u7684\u6570\u636e\u96c6\u7edf\u4e00\u62bd\u8c61"}),"\uff1a\u6570\u636e\u96c6\u62bd\u8c61\u4e0d\u4ec5\u6c47\u603b\u6765\u81ea\u591a\u4e2a\u5b58\u50a8\u6e90\u7684\u6570\u636e\uff0c\u8fd8\u63cf\u8ff0\u4e86\u6570\u636e\u7684\u8fc1\u79fb\u6027\u548c\u7279\u5f81\uff0c\u5e76\u63d0\u4f9b\u53ef\u89c2\u6d4b\u6027\uff0c\u4f8b\u5982\u6570\u636e\u96c6\u7684\u603b\u6570\u636e\u91cf\u3001\u5f53\u524d\u7f13\u5b58\u7a7a\u95f4\u5927\u5c0f\u4ee5\u53ca\u7f13\u5b58\u547d\u4e2d\u7387\u3002\u7528\u6237\u53ef\u4ee5\u6839\u636e\u8fd9\u4e9b\u4fe1\u606f\u8bc4\u4f30\u662f\u5426\u9700\u8981\u5bf9\u7f13\u5b58\u7cfb\u7edf\u8fdb\u884c\u6269\u5bb9\u6216\u7f29\u5bb9\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"\u53ef\u6269\u5c55\u7684\u6570\u636e\u5f15\u64ce\u63d2\u4ef6"}),"\uff1aDataset\u662f\u7edf\u4e00\u7684\u62bd\u8c61\u6982\u5ff5\uff0c\u800c\u5b9e\u9645\u7684\u6570\u636e\u64cd\u4f5c\u9700\u8981\u7531\u5177\u4f53\u7684Runtime\u5b9e\u73b0\uff0c\u56e0\u4e3a\u4e0d\u540c\u5b58\u50a8\u7684\u5dee\u5f02\uff0c\u4f1a\u6709\u4e0d\u540c\u7684Runtime\u63a5\u53e3\u3002Fluid\u7684Runtime\u5206\u4e3a\u4e24\u5927\u7c7b\uff1aCacheRuntime\u5b9e\u73b0\u6570\u636e\u7f13\u5b58\u52a0\u901f\uff0c\u5982AlluxioRuntime\u4e3b\u8981\u52a0\u901fS3\u3001HDFS\uff0cJuiceFSRuntime\u52a0\u901fJuiceFS\uff1b\u53e6\u4e00\u7c7b\u662fThinRuntime\uff0c\u5b83\u63d0\u4f9b\u7edf\u4e00\u7684\u8bbf\u95ee\u63a5\u53e3\uff0c\u65b9\u4fbf\u63a5\u5165\u7b2c\u4e09\u65b9\u5b58\u50a8\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"\u81ea\u52a8\u5316\u7684\u6570\u636e\u64cd\u4f5c"}),"\uff1a\u4ee5CRD\u7684\u65b9\u5f0f\u63d0\u4f9b\u6570\u636e\u9884\u70ed\uff0c\u6570\u636e\u8fc1\u79fb\uff0c\u6570\u636e\u5907\u4efd\u7b49\u591a\u79cd\u64cd\u4f5c\uff0c\u5e76\u4e14\u652f\u6301\u4e00\u6b21\u6027\uff0c\u5b9a\u65f6\u548c\u4e8b\u4ef6\u9a71\u52a8\u7b49\u591a\u79cd\u6a21\u5f0f\uff0c\u65b9\u4fbf\u7528\u6237\u7ed3\u5408\u5230\u81ea\u52a8\u5316\u8fd0\u7ef4\u4f53\u7cfb\u4e2d\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"\u6570\u636e\u5f39\u6027\u4e0e\u8c03\u5ea6"}),"\uff1a\u5c06\u6570\u636e\u5206\u5e03\u5f0f\u7f13\u5b58\u6280\u672f\u4e0e\u81ea\u52a8\u5f39\u6027(Autoscaling)\uff0c\u53ef\u8fc1\u79fb(Portability)\uff0c\u53ef\u89c2\u6d4b(Observability)\uff0c\u4eb2\u548c\u6027\u8c03\u5ea6\uff08Scheduling\uff09\u80fd\u529b\u76f8\u7ed3\u5408\uff0c\u901a\u8fc7\u63d0\u4f9b\u53ef\u4ee5\u89c2\u6d4b\uff0c\u5f39\u6027\u6269\u7f29\u5bb9\u7684\u7f13\u5b58\u80fd\u529b\u4ee5\u53ca\u6570\u636e\u4eb2\u548c\u6027\u8c03\u5ea6\u80fd\u529b\u63d0\u5347\u6570\u636e\u7684\u8bbf\u95ee\u6027\u80fd\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"\u8fd0\u884c\u65f6\u5e73\u53f0\u65e0\u5173"}),"\uff1a\u53ef\u4ee5\u652f\u6301\u539f\u751f\u3001\u8fb9\u7f18\u3001Serverless Kubernetes\u96c6\u7fa4\u3001Kubernetes\u591a\u96c6\u7fa4\u7b49\u591a\u6837\u5316\u73af\u5883\u53ef\u4ee5\u8fd0\u884c\u5728\u4e91\u5e73\u53f0\u3001\u8fb9\u7f18\u3001 Kubernetes\u591a\u96c6\u7fa4\u7b49\u591a\u6837\u5316\u73af\u5883\u3002\u53ef\u4ee5\u6839\u636e\u73af\u5883\u7684\u5dee\u5f02\u9009\u62e9CSI Plugin\u548csidecar\u4e0d\u540c\u6a21\u5f0f\u8fd0\u884c\u5b58\u50a8\u7684\u5ba2\u6237\u7aef\u3002"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u6f14\u793a",children:"\u6f14\u793a"}),"\n",(0,s.jsx)(n.p,{children:"\u6211\u4eec\u63d0\u4f9b\u4e86\u89c6\u9891\u7684Demo\uff0c\u4e3a\u60a8\u5c55\u793a\u5982\u4f55\u901a\u8fc7Fluid\u63d0\u5347\u6570\u636e\u8bbf\u95ee\u901f\u5ea6\u3002"}),"\n",(0,s.jsx)(n.h3,{id:"\u6f14\u793a-1-\u52a0\u901f\u6587\u4ef6\u8bbf\u95ee",children:"\u6f14\u793a 1: \u52a0\u901f\u6587\u4ef6\u8bbf\u95ee"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"http://cloud.video.taobao.com/play/u/2987821887/p/1/e/6/t/1/277753111709.mp4",children:(0,s.jsx)(n.img,{src:i(4984).c+"",width:"1920",height:"1080"})})}),"\n",(0,s.jsx)(n.h3,{id:"\u6f14\u793a-2-\u52a0\u901f\u673a\u5668\u5b66\u4e60",children:"\u6f14\u793a 2: \u52a0\u901f\u673a\u5668\u5b66\u4e60"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"http://cloud.video.taobao.com/play/u/2987821887/p/1/e/6/t/1/277528130570.mp4",children:(0,s.jsx)(n.img,{src:i(100).c+"",width:"1920",height:"1080"})})}),"\n",(0,s.jsx)(n.h2,{id:"\u5feb\u901f\u4f53\u9a8cfluid",children:"\u5feb\u901f\u4f53\u9a8cFluid"}),"\n",(0,s.jsx)(n.p,{children:"Fluid\u9700\u8981\u8fd0\u884c\u5728 Kubernetes v1.14 \u53ca\u4ee5\u4e0a\u7248\u672c\uff0c\u5e76\u4e14\u9700\u8981\u652f\u6301CSI\u5b58\u50a8\u3002Fluid Operator\u7684\u90e8\u7f72\u548c\u7ba1\u7406\u662f\u901a\u8fc7 Kubernetes \u5e73\u53f0\u4e0a\u7684\u5305\u7ba1\u7406\u5de5\u5177 Helm v3\u5b9e\u73b0\u7684\u3002\u8fd0\u884c Fluid\u524d\u8bf7\u786e\u4fdd Helm \u5df2\u7ecf\u6b63\u786e\u5b89\u88c5\u5728 Kubernetes \u96c6\u7fa4\u91cc\u3002"}),"\n",(0,s.jsxs)(n.p,{children:["\u4f60\u53ef\u4ee5\u53c2\u7167\u53c2\u8003\u6587\u6863 ",(0,s.jsx)(n.a,{href:"https://github.com/fluid-cloudnative/docs-fluid",children:"docs"}),"\uff0c\u5b89\u88c5\u548c\u4f7f\u7528Fluid\u3002"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"docs/en/TOC.md",children:"English"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"docs/zh/TOC.md",children:"\u7b80\u4f53\u4e2d\u6587"})}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u89c4\u5212",children:"\u89c4\u5212\uff1a"}),"\n",(0,s.jsx)(n.p,{children:"\u800cFluid\u5bf9\u4e8e\u6570\u636e\u573a\u666f\u7684\u652f\u6301\uff0c\u5206\u4e3a3\u4e2a\u9636\u6bb5:"}),"\n",(0,s.jsx)(n.p,{children:"Fluid\u63d0\u4f9b\u4e86\u4e09\u4e2a\u9636\u6bb5\u7684\u5bf9\u6570\u636e\u573a\u666f\u7684\u652f\u6301\uff1a"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"\u5b9e\u73b0\u4e91\u4e0a\u8ba1\u7b97\u548c\u4e91\u4e0b\u6570\u636e\u7684\u65e0\u7f1d\u5bf9\u63a5\uff0c\u4ee5\u63d0\u4f9b\u8ba1\u7b97\u4e0e\u6570\u636e\u7684\u53ef\u4e92\u901a\u6027\u3002"}),"\n",(0,s.jsx)(n.li,{children:"\u901a\u8fc7\u901a\u7528\u7684\u65b9\u6cd5\u6765\u63d0\u9ad8\u6570\u636e\u8bbf\u95ee\u901f\u5ea6\u3002"}),"\n",(0,s.jsx)(n.li,{children:"\u534f\u8c03\u5bb9\u5668\u96c6\u7fa4\u4e2d\u7684\u5de5\u4f5c\u8d1f\u8f7d\u4e0e\u6570\u636e\uff0c\u5e76\u7ba1\u7406\u591a\u4e2a\u6570\u636e\u96c6\uff0c\u4ee5\u63d0\u9ad8\u6570\u636e\u7ba1\u7406\u7684\u6548\u7387\u3002"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:i(108).c+"",width:"1675",height:"785"})})]})}function h(e={}){const{wrapper:n}={...(0,t.M)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},108:(e,n,i)=>{i.d(n,{c:()=>s});const s=i.p+"assets/images/roadmap-504178db95060ce9fac94af1dd78796f.png"},100:(e,n,i)=>{i.d(n,{c:()=>s});const s=i.p+"assets/images/machine_learning-bd44a09809a86411d9ff05ecd3d300b8.png"},4984:(e,n,i)=>{i.d(n,{c:()=>s});const s=i.p+"assets/images/remote_file_accessing-f3331b87208291b66a8417382f2fa0c0.png"},2172:(e,n,i)=>{i.d(n,{I:()=>r,M:()=>d});var s=i(1504);const t={},l=s.createContext(t);function d(e){const n=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);