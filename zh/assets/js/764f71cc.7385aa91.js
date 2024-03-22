"use strict";(self.webpackChunkmy_doc_website=self.webpackChunkmy_doc_website||[]).push([[4616],{3160:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>c,contentTitle:()=>s,default:()=>a,frontMatter:()=>d,metadata:()=>r,toc:()=>u});var l=n(7624),t=n(2172);const d={sidebar_label:"Fluid\u6982\u89c8",sidebar_position:1,slug:"/"},s="Fluid\u6982\u89c8",r={id:"getting-started/overview",title:"Fluid\u6982\u89c8",description:"Fluid\u7684\u529f\u80fd\u76ee\u6807\u4e0e\u5e94\u7528\u573a\u666f",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/getting-started/overview.md",sourceDirName:"getting-started",slug:"/",permalink:"/my-doc-website/zh/docs/",draft:!1,unlisted:!1,editUrl:"https://github.com/TrafalgarZZZ/my-doc-website/tree/master/docs/getting-started/overview.md",tags:[],version:"current",lastUpdatedBy:"chenqiming",lastUpdatedAt:1711114406,formattedLastUpdatedAt:"2024\u5e743\u670822\u65e5",sidebarPosition:1,frontMatter:{sidebar_label:"Fluid\u6982\u89c8",sidebar_position:1,slug:"/"},sidebar:"tutorialSidebar",next:{title:"\u5b89\u88c5Fluid",permalink:"/my-doc-website/zh/docs/getting-started/install"}},c={},u=[{value:"Fluid\u7684\u529f\u80fd\u76ee\u6807\u4e0e\u5e94\u7528\u573a\u666f",id:"fluid\u7684\u529f\u80fd\u76ee\u6807\u4e0e\u5e94\u7528\u573a\u666f",level:2},{value:"\u4e3a\u4ec0\u4e48\u4e91\u539f\u751f\u9700\u8981Fluid",id:"\u4e3a\u4ec0\u4e48\u4e91\u539f\u751f\u9700\u8981fluid",level:2},{value:"\u6982\u5ff5",id:"\u6982\u5ff5",level:2},{value:"\u6838\u5fc3\u7ec4\u4ef6",id:"\u6838\u5fc3\u7ec4\u4ef6",level:2},{value:"\u63a7\u5236\u5668(Fluid-controller-manager)",id:"\u63a7\u5236\u5668fluid-controller-manager",level:3},{value:"\u8c03\u5ea6\u5668(Fluid-scheduler)",id:"\u8c03\u5ea6\u5668fluid-scheduler",level:3},{value:"\u6f14\u793a",id:"\u6f14\u793a",level:2},{value:"\u6f14\u793a 1: \u52a0\u901f\u6587\u4ef6\u8bbf\u95ee",id:"\u6f14\u793a-1-\u52a0\u901f\u6587\u4ef6\u8bbf\u95ee",level:3},{value:"\u6f14\u793a 2: \u52a0\u901f\u673a\u5668\u5b66\u4e60",id:"\u6f14\u793a-2-\u52a0\u901f\u673a\u5668\u5b66\u4e60",level:3},{value:"\u5feb\u901f\u4f53\u9a8cFluid",id:"\u5feb\u901f\u4f53\u9a8cfluid",level:2}];function o(e){const i={a:"a",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,t.M)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(i.h1,{id:"fluid\u6982\u89c8",children:"Fluid\u6982\u89c8"}),"\n",(0,l.jsx)(i.h2,{id:"fluid\u7684\u529f\u80fd\u76ee\u6807\u4e0e\u5e94\u7528\u573a\u666f",children:"Fluid\u7684\u529f\u80fd\u76ee\u6807\u4e0e\u5e94\u7528\u573a\u666f"}),"\n",(0,l.jsx)(i.p,{children:"Fluid\u662f\u4e00\u6b3e\u5f00\u6e90\u7684\u4e91\u539f\u751f\u57fa\u7840\u67b6\u6784\u3002\u5728\u8ba1\u7b97\u548c\u5b58\u50a8\u5206\u79bb\u7684\u5927\u80cc\u666f\u9a71\u52a8\u4e0b\uff0cFluid\u7684\u76ee\u6807\u662f\u4e3aAI\u4e0e\u5927\u6570\u636e\u4e91\u539f\u751f\u5e94\u7528\u63d0\u4f9b\u4e00\u5c42\u9ad8\u6548\u4fbf\u6377\u7684\u6570\u636e\u62bd\u8c61\uff0c\u5c06\u6570\u636e\u4ece\u5b58\u50a8\u62bd\u8c61\u51fa\u6765\uff0c\u4ee5\u4fbf\u5b9e\u73b0\uff1a"}),"\n",(0,l.jsxs)(i.ol,{children:["\n",(0,l.jsx)(i.li,{children:"\u901a\u8fc7\u6570\u636e\u4eb2\u548c\u6027\u8c03\u5ea6\u548c\u5206\u5e03\u5f0f\u7f13\u5b58\u5f15\u64ce\u52a0\u901f\uff0c\u5b9e\u73b0\u6570\u636e\u548c\u8ba1\u7b97\u4e4b\u95f4\u7684\u878d\u5408\uff0c\u4ece\u800c\u52a0\u901f\u8ba1\u7b97\u5bf9\u6570\u636e\u7684\u8bbf\u95ee\u3002"}),"\n",(0,l.jsx)(i.li,{children:"\u5c06\u6570\u636e\u72ec\u7acb\u4e8e\u5b58\u50a8\u8fdb\u884c\u7ba1\u7406\uff0c\u5e76\u4e14\u901a\u8fc7Kubernetes\u7684\u547d\u540d\u7a7a\u95f4\u8fdb\u884c\u8d44\u6e90\u9694\u79bb\uff0c\u5b9e\u73b0\u6570\u636e\u7684\u5b89\u5168\u9694\u79bb\u3002"}),"\n",(0,l.jsx)(i.li,{children:"\u5c06\u6765\u81ea\u4e0d\u540c\u5b58\u50a8\u7684\u6570\u636e\u8054\u5408\u8d77\u6765\u8fdb\u884c\u8fd0\u7b97\uff0c\u4ece\u800c\u6709\u673a\u4f1a\u6253\u7834\u4e0d\u540c\u5b58\u50a8\u7684\u5dee\u5f02\u6027\u5e26\u6765\u7684\u6570\u636e\u5b64\u5c9b\u6548\u5e94\u3002"}),"\n"]}),"\n",(0,l.jsx)(i.p,{children:"\u901a\u8fc7Kubernetes\u670d\u52a1\u63d0\u4f9b\u7684\u8be5\u6570\u636e\u5c42\u62bd\u8c61\uff0c\u5c31\u53ef\u4ee5\u8ba9\u6570\u636e\u50cf\u6d41\u4f53\u4e00\u6837\u5728\u8bf8\u5982HDFS\u3001OSS\u3001Ceph\u8fd9\u6837\u7684\u5b58\u50a8\u6e90\u548cKubernetes\u4e0a\u5c42\u7684\u4e91\u539f\u751f\u5e94\u7528\u8ba1\u7b97\u4e4b\u95f4\u7075\u6d3b\u9ad8\u6548\u5730\u79fb\u52a8\u3001\u590d\u5236\u3001\u9a71\u9010\u3001\u8f6c\u6362\u548c\u7ba1\u7406\u3002\u800c\u5177\u4f53\u7684\u6570\u636e\u64cd\u4f5c\u5bf9\u7528\u6237\u900f\u660e\uff0c\u7528\u6237\u4e0d\u5fc5\u518d\u62c5\u5fc3\u8bbf\u95ee\u8fdc\u7aef\u6570\u636e\u7684\u6548\u7387\uff0c\u6216\u662f\u7ba1\u7406\u6570\u636e\u6e90\u7684\u4fbf\u6377\u6027\uff0c\u4ee5\u53ca\u5982\u4f55\u5e2e\u52a9Kuberntes\u505a\u51fa\u6070\u5f53\u7684\u8c03\u5ea6\u51b3\u7b56\u7b49\u8fd0\u7ef4\u95ee\u9898\u3002\u7528\u6237\u53ea\u9700\u4ee5Kubernetes\u539f\u751f\u6570\u636e\u5377\u7684\u65b9\u5f0f\u76f4\u63a5\u8bbf\u95ee\u62bd\u8c61\u51fa\u6765\u7684\u6570\u636e\uff0c\u5269\u4f59\u4efb\u52a1\u4ea4\u7ed9Fluid\u5b8c\u6210\u3002"}),"\n",(0,l.jsx)(i.p,{children:"Fluid\u9879\u76ee\u5f53\u524d\u4e3b\u8981\u5173\u6ce8\u6570\u636e\u96c6\u7f16\u6392\u548c\u5e94\u7528\u7f16\u6392\u8fd9\u4e24\u4e2a\u91cd\u8981\u573a\u666f\u3002\u6570\u636e\u96c6\u7f16\u6392\u53ef\u4ee5\u5c06\u6307\u5b9a\u6570\u636e\u96c6\u7684\u6570\u636e\u7f13\u5b58\u5230\u6307\u5b9a\u7279\u6027\u7684Kubernetes\u8282\u70b9\uff1b\u800c\u5e94\u7528\u7f16\u6392\u5c06\u6307\u5b9a\u8be5\u5e94\u7528\u8c03\u5ea6\u5230\u53ef\u4ee5\u6216\u5df2\u7ecf\u5b58\u50a8\u4e86\u6307\u5b9a\u6570\u636e\u96c6\u7684\u8282\u70b9\u4e0a\u3002\u8fd9\u4e24\u8005\u8fd8\u53ef\u4ee5\u7ec4\u5408\u5f62\u6210\u534f\u540c\u7f16\u6392\u573a\u666f\uff0c\u5373\u534f\u540c\u8003\u8651\u6570\u636e\u96c6\u548c\u5e94\u7528\u9700\u6c42\u8fdb\u884c\u8282\u70b9\u8d44\u6e90\u8c03\u5ea6\u3002"}),"\n",(0,l.jsx)(i.h2,{id:"\u4e3a\u4ec0\u4e48\u4e91\u539f\u751f\u9700\u8981fluid",children:"\u4e3a\u4ec0\u4e48\u4e91\u539f\u751f\u9700\u8981Fluid"}),"\n",(0,l.jsx)(i.p,{children:"\u4e91\u539f\u751f\u73af\u5883\u4e0e\u66f4\u65e9\u7684\u5927\u6570\u636e\u5904\u7406\u6846\u67b6\u5728\u8bbe\u8ba1\u7406\u5ff5\u548c\u673a\u5236\u4e0a\u5b58\u5728\u5929\u7136\u5206\u6b67\u3002\u6df1\u53d7Google\u4e09\u7bc7\u8bba\u6587GFS\u3001MapReduce\u3001BigTable\u5f71\u54cd\u7684Hadoop\u5927\u6570\u636e\u751f\u6001\uff0c\u4ece\u8bde\u751f\u4e4b\u521d\u5373\u4fe1\u5949\u548c\u5b9e\u8df5\u201c\u79fb\u52a8\u8ba1\u7b97\u800c\u4e0d\u662f\u6570\u636e\u201d\u7684\u7406\u5ff5\u3002\u56e0\u6b64\u4ee5Spark\uff0cHive\uff0cMapReduce\u4e3a\u4ee3\u8868\u7684\u6570\u636e\u5bc6\u96c6\u578b\u8ba1\u7b97\u6846\u67b6\u53ca\u5176\u5e94\u7528\u4e3a\u51cf\u5c11\u6570\u636e\u4f20\u8f93\uff0c\u5176\u8bbe\u8ba1\u66f4\u591a\u5730\u8003\u8651\u6570\u636e\u672c\u5730\u5316\u67b6\u6784\u3002\u4f46\u968f\u7740\u65f6\u4ee3\u7684\u53d8\u8fc1\uff0c\u4e3a\u517c\u987e\u8d44\u6e90\u6269\u5c55\u7684\u7075\u6d3b\u6027\u4e0e\u4f7f\u7528\u6210\u672c\uff0c\u8ba1\u7b97\u548c\u5b58\u50a8\u5206\u79bb\u7684\u67b6\u6784\u5728\u66f4\u65b0\u5174\u7684\u4e91\u539f\u751f\u73af\u5883\u4e2d\u5927\u884c\u5176\u9053\u3002\u56e0\u6b64\u4e91\u539f\u751f\u73af\u5883\u91cc\u9700\u8981\u7c7b\u4f3cFluid\u8fd9\u6837\u7684\u4e00\u6b3e\u7ec4\u4ef6\u6765\u8865\u5145\u5927\u6570\u636e\u6846\u67b6\u62e5\u62b1\u4e91\u539f\u751f\u4ee5\u540e\u7684\u6570\u636e\u672c\u5730\u6027\u7684\u7f3a\u5931\u3002"}),"\n",(0,l.jsx)(i.p,{children:"\u6b64\u5916\uff0c\u5728\u4e91\u539f\u751f\u73af\u5883\u4e2d\uff0c\u5e94\u7528\u901a\u5e38\u4ee5\u65e0\u72b6\u6001\uff08Stateless\uff09\u5fae\u670d\u52a1\u5316\u65b9\u5f0f\u90e8\u7f72\u5e76\u4e0d\u4ee5\u6570\u636e\u5904\u7406\u4e3a\u4e2d\u5fc3\uff1b\u800c\u6570\u636e\u5bc6\u96c6\u578b\u6846\u67b6\u548c\u5e94\u7528\u901a\u5e38\u4ee5\u6570\u636e\u62bd\u8c61\u4e3a\u4e2d\u5fc3\uff0c\u5f00\u5c55\u76f8\u5173\u8ba1\u7b97\u4f5c\u4e1a\u548c\u4efb\u52a1\u7684\u5206\u914d\u6267\u884c\u3002\u5f53\u6570\u636e\u5bc6\u96c6\u578b\u6846\u67b6\u878d\u5165\u4e91\u539f\u751f\u73af\u5883\u540e\uff0c\u4e5f\u9700\u8981\u50cfFluid\u8fd9\u6837\u4ee5\u6570\u636e\u62bd\u8c61\u4e3a\u4e2d\u5fc3\u7684\u8c03\u5ea6\u548c\u5206\u914d\u6846\u67b6\u6765\u534f\u540c\u3002"}),"\n",(0,l.jsx)(i.p,{children:"\u9488\u5bf9\u5f53\u524dKubernetes\u7f3a\u4e4f\u5bf9\u5e94\u7528\u6570\u636e\u7684\u611f\u77e5\u548c\u4f18\u5316\uff0c\u4ee5\u53ca\u50cfAlluxio\u8fd9\u6837\u7684\u6570\u636e\u7f16\u6392\u5f15\u64ce\u96be\u4ee5\u76f4\u63a5\u9a71\u52a8\u4e91\u539f\u751f\u5e94\u7528\u7b49\u67b6\u6784\u5c42\u7684\u5c40\u9650\uff0cFluid\u63d0\u51fa\u5c06\u6570\u636e\u5e94\u7528\u534f\u540c\u7f16\u6392\u3001\u667a\u80fd\u611f\u77e5\u3001\u8054\u5408\u4f18\u5316\u7b49\u4e00\u7cfb\u5217\u521b\u65b0\u65b9\u6cd5\uff0c\u5e76\u4e14\u57fa\u4e8eAlluxio\u5f62\u6210\u4e00\u5957\u4e91\u539f\u751f\u573a\u666f\u4e0b\u6570\u636e\u5bc6\u96c6\u578b\u5e94\u7528\u7684\u9ad8\u6548\u652f\u6491\u5e73\u53f0\u3002"}),"\n",(0,l.jsx)(i.p,{children:"\u5177\u4f53\u7684\u67b6\u6784\u53c2\u89c1\u4e0b\u56fe\uff1a"}),"\n",(0,l.jsx)("div",{align:"center",children:(0,l.jsx)("img",{src:"/my-doc-website/architecture.png",title:"architecture",height:"60%",width:"60%",alt:""})}),"\n",(0,l.jsx)(i.h2,{id:"\u6982\u5ff5",children:"\u6982\u5ff5"}),"\n",(0,l.jsxs)(i.p,{children:[(0,l.jsx)(i.strong,{children:"Dataset"}),": \u6570\u636e\u96c6\u662f\u903b\u8f91\u4e0a\u76f8\u5173\u7684\u4e00\u7ec4\u6570\u636e\u7684\u96c6\u5408\uff0c\u4f1a\u88ab\u8fd0\u7b97\u5f15\u64ce\u4f7f\u7528\uff0c\u6bd4\u5982\u5927\u6570\u636e\u7684Spark\uff0cAI\u573a\u666f\u7684TensorFlow\u3002\u800c\u8fd9\u4e9b\u6570\u636e\u667a\u80fd\u7684\u5e94\u7528\u4f1a\u521b\u9020\u5de5\u4e1a\u754c\u7684\u6838\u5fc3\u4ef7\u503c\u3002Dataset\u7684\u7ba1\u7406\u5b9e\u9645\u4e0a\u4e5f\u6709\u591a\u4e2a\u7ef4\u5ea6\uff0c\u6bd4\u5982\u5b89\u5168\u6027\uff0c\u7248\u672c\u7ba1\u7406\u548c\u6570\u636e\u52a0\u901f\u3002\u6211\u4eec\u5e0c\u671b\u4ece\u6570\u636e\u52a0\u901f\u51fa\u53d1\uff0c\u5bf9\u4e8e\u6570\u636e\u96c6\u7684\u7ba1\u7406\u63d0\u4f9b\u652f\u6301\u3002"]}),"\n",(0,l.jsxs)(i.p,{children:[(0,l.jsx)(i.strong,{children:"Runtime"}),": \u5b9e\u73b0\u6570\u636e\u96c6\u5b89\u5168\u6027\uff0c\u7248\u672c\u7ba1\u7406\u548c\u6570\u636e\u52a0\u901f\u7b49\u80fd\u529b\u7684\u6267\u884c\u5f15\u64ce\uff0c\u5b9a\u4e49\u4e86\u4e00\u7cfb\u5217\u751f\u547d\u5468\u671f\u7684\u63a5\u53e3\u3002\u53ef\u4ee5\u901a\u8fc7\u5b9e\u73b0\u8fd9\u4e9b\u63a5\u53e3\uff0c\u652f\u6301\u6570\u636e\u96c6\u7684\u7ba1\u7406\u548c\u52a0\u901f\u3002"]}),"\n",(0,l.jsxs)(i.p,{children:[(0,l.jsx)(i.strong,{children:"AlluxioRuntime"}),": \u6765\u6e90\u4e8e",(0,l.jsx)(i.a,{href:"https://www.alluxio.org/",children:"Alluixo"}),"\u793e\u533a\uff0c\u662f\u652f\u6491Dataset\u6570\u636e\u7ba1\u7406\u548c\u7f13\u5b58\u7684\u6267\u884c\u5f15\u64ce\u5b9e\u73b0\u3002Fluid\u901a\u8fc7\u7ba1\u7406\u548c\u8c03\u5ea6Alluxio Runtime\u5b9e\u73b0\u6570\u636e\u96c6\u7684\u53ef\u89c1\u6027\uff0c\u5f39\u6027\u4f38\u7f29\uff0c \u6570\u636e\u8fc1\u79fb\u3002"]}),"\n",(0,l.jsx)(i.h2,{id:"\u6838\u5fc3\u7ec4\u4ef6",children:"\u6838\u5fc3\u7ec4\u4ef6"}),"\n",(0,l.jsx)(i.h3,{id:"\u63a7\u5236\u5668fluid-controller-manager",children:"\u63a7\u5236\u5668(Fluid-controller-manager)"}),"\n",(0,l.jsx)(i.p,{children:"\u4ece\u903b\u8f91\u4e0a\uff0c\u6bcf\u4e2a\u63a7\u5236\u5668\u90fd\u662f\u5355\u72ec\u7684\u8fdb\u7a0b\uff0c\u4e3a\u4e86\u964d\u4f4e\u590d\u6742\u6027\uff0c\u5b83\u4eec\u90fd\u88ab\u7f16\u8bd1\u5230\u540c\u4e00\u4e2a\u53ef\u6267\u884c\u6587\u4ef6\uff0c\u5e76\u5728\u4e00\u4e2a\u8fdb\u7a0b\u4e2d\u8fd0\u884c\u3002"}),"\n",(0,l.jsx)(i.p,{children:"\u8fd9\u4e9b\u63a7\u5236\u5668\u5305\u62ec\uff1a"}),"\n",(0,l.jsxs)(i.p,{children:[(0,l.jsx)(i.strong,{children:"Dataset Controller"}),": \u8d1f\u8d23Dataset\u7684\u751f\u547d\u5468\u671f\u7ba1\u7406\uff0c\u5305\u62ec\u521b\u5efa\uff0c\u4e0eRuntime\u7684\u7ed1\u5b9a\u548c\u89e3\u7ed1\uff0c\u5220\u9664\u3002"]}),"\n",(0,l.jsxs)(i.p,{children:[(0,l.jsx)(i.strong,{children:"Runtime Controller"}),": \u8d1f\u8d23Runtime\u7684\u751f\u547d\u5468\u671f\u7ba1\u7406\uff0c\u5305\u62ec\u521b\u5efa\uff0c\u6269\u7f29\u5bb9\uff0c\u7f13\u5b58\u9884\u70ed\u548c\u6e05\u7406\u7684\u89e6\u53d1\uff0c\u5220\u9664\u7b49\u64cd\u4f5c\u3002"]}),"\n",(0,l.jsxs)(i.p,{children:[(0,l.jsx)(i.strong,{children:"Volume Controller"}),":  \u8d1f\u8d23Dataset\u5bf9\u5e94\u7684\u6570\u636e\u5377\u7684\u521b\u5efa\uff0c\u5220\u9664\u3002"]}),"\n",(0,l.jsx)(i.h3,{id:"\u8c03\u5ea6\u5668fluid-scheduler",children:"\u8c03\u5ea6\u5668(Fluid-scheduler)"}),"\n",(0,l.jsx)(i.p,{children:"\u8d1f\u8d23\u5728\u8c03\u5ea6\u8fc7\u7a0b\uff0c\u7ed3\u5408\u6570\u636e\u7f13\u5b58\u7684\u4fe1\u606f\uff0c\u9009\u62e9\u7b26\u5408\u6761\u4ef6\u7684\u8282\u70b9\u3002"}),"\n",(0,l.jsxs)(i.p,{children:[(0,l.jsx)(i.strong,{children:"Cache co-locality Plugin"}),": \u7ed3\u5408Runtime\u4e2d\u7684\u6570\u636e\u7f13\u5b58\u4fe1\u606f\uff0c\u5bf9\u4e8e\u4f7f\u7528\u6570\u636e\u96c6\u7684\u5e94\u7528\u8fdb\u884c\u8c03\u5ea6\u3002\u65e0\u9700\u7528\u6237\u6307\u5b9a\u7f13\u5b58\u8282\u70b9\u3002"]}),"\n",(0,l.jsxs)(i.p,{children:[(0,l.jsx)(i.strong,{children:"Prefetch Plugin"}),": \u5728\u8c03\u5ea6\u8fc7\u7a0b\u4e2d\uff0c\u6839\u636e\u5e94\u7528\u4f7f\u7528\u6570\u636e\u7684\u7279\u6027\u89e6\u53d1Runtime\u8fdb\u884c\u6570\u636e\u9884\u70ed\u3002"]}),"\n",(0,l.jsx)(i.h2,{id:"\u6f14\u793a",children:"\u6f14\u793a"}),"\n",(0,l.jsx)(i.p,{children:"\u6211\u4eec\u63d0\u4f9b\u4e86\u89c6\u9891\u7684Demo\uff0c\u4e3a\u60a8\u5c55\u793a\u5982\u4f55\u901a\u8fc7Fluid\u63d0\u5347\u6570\u636e\u8bbf\u95ee\u901f\u5ea6\u3002"}),"\n",(0,l.jsx)(i.h3,{id:"\u6f14\u793a-1-\u52a0\u901f\u6587\u4ef6\u8bbf\u95ee",children:"\u6f14\u793a 1: \u52a0\u901f\u6587\u4ef6\u8bbf\u95ee"}),"\n",(0,l.jsx)(i.p,{children:(0,l.jsx)(i.a,{href:"http://cloud.video.taobao.com/play/u/2987821887/p/1/e/6/t/1/277753111709.mp4",children:(0,l.jsx)(i.img,{src:n(4984).c+"",width:"1920",height:"1080"})})}),"\n",(0,l.jsx)(i.h3,{id:"\u6f14\u793a-2-\u52a0\u901f\u673a\u5668\u5b66\u4e60",children:"\u6f14\u793a 2: \u52a0\u901f\u673a\u5668\u5b66\u4e60"}),"\n",(0,l.jsx)(i.p,{children:(0,l.jsx)(i.a,{href:"http://cloud.video.taobao.com/play/u/2987821887/p/1/e/6/t/1/277528130570.mp4",children:(0,l.jsx)(i.img,{src:n(100).c+"",width:"1920",height:"1080"})})}),"\n",(0,l.jsx)(i.h2,{id:"\u5feb\u901f\u4f53\u9a8cfluid",children:"\u5feb\u901f\u4f53\u9a8cFluid"}),"\n",(0,l.jsx)(i.p,{children:"Fluid\u9700\u8981\u8fd0\u884c\u5728 Kubernetes v1.14 \u53ca\u4ee5\u4e0a\u7248\u672c\uff0c\u5e76\u4e14\u9700\u8981\u652f\u6301CSI\u5b58\u50a8\u3002Fluid Operator\u7684\u90e8\u7f72\u548c\u7ba1\u7406\u662f\u901a\u8fc7 Kubernetes \u5e73\u53f0\u4e0a\u7684\u5305\u7ba1\u7406\u5de5\u5177 Helm v3\u5b9e\u73b0\u7684\u3002\u8fd0\u884c Fluid\u524d\u8bf7\u786e\u4fdd Helm \u5df2\u7ecf\u6b63\u786e\u5b89\u88c5\u5728 Kubernetes \u96c6\u7fa4\u91cc\u3002"}),"\n",(0,l.jsxs)(i.p,{children:["\u4f60\u53ef\u4ee5\u53c2\u7167\u53c2\u8003\u6587\u6863 ",(0,l.jsx)(i.a,{href:"https://github.com/fluid-cloudnative/docs-fluid",children:"docs"}),"\uff0c\u5b89\u88c5\u548c\u4f7f\u7528Fluid\u3002"]}),"\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsx)(i.li,{children:(0,l.jsx)(i.a,{href:"docs/en/TOC.md",children:"English"})}),"\n",(0,l.jsx)(i.li,{children:(0,l.jsx)(i.a,{href:"docs/zh/TOC.md",children:"\u7b80\u4f53\u4e2d\u6587"})}),"\n"]})]})}function a(e={}){const{wrapper:i}={...(0,t.M)(),...e.components};return i?(0,l.jsx)(i,{...e,children:(0,l.jsx)(o,{...e})}):o(e)}},100:(e,i,n)=>{n.d(i,{c:()=>l});const l=n.p+"assets/images/machine_learning-bd44a09809a86411d9ff05ecd3d300b8.png"},4984:(e,i,n)=>{n.d(i,{c:()=>l});const l=n.p+"assets/images/remote_file_accessing-f3331b87208291b66a8417382f2fa0c0.png"},2172:(e,i,n)=>{n.d(i,{I:()=>r,M:()=>s});var l=n(1504);const t={},d=l.createContext(t);function s(e){const i=l.useContext(d);return l.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function r(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),l.createElement(d.Provider,{value:i},e.children)}}}]);