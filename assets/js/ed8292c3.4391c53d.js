"use strict";(self.webpackChunkfluid_website_demo=self.webpackChunkfluid_website_demo||[]).push([[8496],{7620:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>r,toc:()=>d});var n=a(7624),i=a(2172);const o={slug:"fluid-0.4",title:"Fluid 0.4 new release: supports data preheating and optimizes small file  scenarios",authors:["gurong"],tags:["release"]},s="Fluid 0.4 new release: supports data preheating and optimizes small file  scenarios",r={permalink:"/fluid-website-demo/blog/fluid-0.4",editUrl:"https://github.com/BillyChen1/fluid-website-demo/tree/master/blog/2020-11-16-fluid-release-0.4.md",source:"@site/blog/2020-11-16-fluid-release-0.4.md",title:"Fluid 0.4 new release: supports data preheating and optimizes small file  scenarios",description:"Guide reading: in order to solve the problems of high delay of data access, difficult joint analysis and multi-dimensional management in the separation scenario of data intensive applications such as big data and AI in cloud primary computing storage separation scenario, pasalab, Alibaba and alluxio of Nanjing University jointly launched open source project fluid in September 2020.",date:"2020-11-16T00:00:00.000Z",formattedDate:"November 16, 2020",tags:[{label:"release",permalink:"/fluid-website-demo/blog/tags/release"}],readingTime:6.805,hasTruncateMarker:!1,authors:[{name:"Rong Gu",title:"Fluid Open Source Project Community Chair",url:"https://github.com/RongGu",imageURL:"https://github.com/RongGu.png",key:"gurong"}],frontMatter:{slug:"fluid-0.4",title:"Fluid 0.4 new release: supports data preheating and optimizes small file  scenarios",authors:["gurong"],tags:["release"]},unlisted:!1,prevItem:{title:"Fluid 0.5 release: open the way of online elastic expansion of dataset cache",permalink:"/fluid-website-demo/blog/fluid-0.5"}},l={authorsImageUrls:[void 0]},d=[{value:"Support active data preheating",id:"support-active-data-preheating",level:2},{value:"Enhance the support ability of large amount of small file data sets",id:"enhance-the-support-ability-of-large-amount-of-small-file-data-sets",level:2},{value:"Convenient big data computing framework such as spark to provide data access support",id:"convenient-big-data-computing-framework-such-as-spark-to-provide-data-access-support",level:2},{value:"Mixed deployment of multiple data sets and single node",id:"mixed-deployment-of-multiple-data-sets-and-single-node",level:2},{value:"Thank",id:"thank",level:2},{value:"Summary",id:"summary",level:2},{value:"Introduction to the author",id:"introduction-to-the-author",level:2}];function c(e){const t={a:"a",code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.M)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Guide reading:"})," in order to solve the problems of high delay of data access, difficult joint analysis and multi-dimensional management in the separation scenario of data intensive applications such as big data and AI in cloud primary computing storage separation scenario, pasalab, Alibaba and alluxio of Nanjing University jointly launched open source project fluid in September 2020."]}),"\n",(0,n.jsx)(t.p,{children:"Recently, fluid 0.4 version was officially released, with four important functions added, namely:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Data load customization provides easy to use and customizable data preheating capability"}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Enhance the support capability of large amount of small file data sets, and expand the support scenarios of fluid for AI applications"}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Open HDFS file system compatible interface, support data access of spark and other frameworks"}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Support mixed deployment of multiple datasets and single nodes, and adapt to the shared cluster environment in the production environment"}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Fluid project address"})," : ",(0,n.jsx)(t.a,{href:"https://github.com/fluid-cloudnative/fluid",children:"https://github.com/fluid-cloudnative/fluid"})]}),"\n",(0,n.jsx)(t.p,{children:"And fluid 0.3 Similar to the above functions, the development requirements of the above functions are also from the production actual feedback of many community users. In addition, fluid v0.4 has also carried out some bug fixes and document updates. Welcome to experience fluid v0.4! Thank you for the community partners who have contributed to this version. In the next version function iteration, we will continue to pay close attention to and adopt community suggestions, promote the development of fluid project, and look forward to hearing more feedback from you!"}),"\n",(0,n.jsx)(t.p,{children:"The following is a further introduction to the release features of this new version."}),"\n",(0,n.jsx)(t.h2,{id:"support-active-data-preheating",children:"Support active data preheating"}),"\n",(0,n.jsxs)(t.p,{children:["Data preheating is a common optimization method in AI application model training. Data preheating refers to pulling the data needed by the application from the remote storage system to the local computing cluster before the application runs for later application operation ",(0,n.jsx)(t.strong,{children:"Data preheating is a sequential and regular parallel data reading mode, which avoids the unnecessary communication overhead caused by random data reading when data intensive applications consume data of remote storage system directly."})]}),"\n",(0,n.jsxs)(t.p,{children:["Therefore, in fluid 0.4, ",(0,n.jsx)(t.strong,{children:"we implemented a new kubernetes custom resource dataload, which provides the user with a declarative API interface in the way of kubernetes resources to control the data preheating related behaviors"})," . A simple example of dataload custom resources is as follows:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-yaml",children:"apiVersion: data.fluid.io/v1alpha1\r\nkind: DataLoad\r\nmetadata:\r\n\tname: imagenet-dataload\r\nspec:\r\n\tdataset:\r\n\t\tname: imagenet\r\n\t\tnamespace: default\r\n\n"})}),"\n",(0,n.jsx)(t.p,{children:"In addition, with a small amount of additional configuration, dataload can also realize many customizable functions such as subdirectory loading, cache replica quantity control, metadata synchronization, etc. for more details related to the use of dataload, please refer to sample document on GitHub."}),"\n",(0,n.jsx)(t.p,{children:"The demo video on the use and optimization of dataload is as follows:"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"https://fluid-imgs.oss-cn-shanghai.aliyuncs.com/public/video/dataWarmup.mp4",children:(0,n.jsx)(t.img,{src:"https://fluid-imgs.oss-cn-shanghai.aliyuncs.com/public/imgs/dataWarmup.jfif",alt:"04-demo"})})}),"\n",(0,n.jsx)(t.h2,{id:"enhance-the-support-ability-of-large-amount-of-small-file-data-sets",children:"Enhance the support ability of large amount of small file data sets"}),"\n",(0,n.jsx)(t.p,{children:"Fluid is an efficient support platform for data intensive applications in cloud native environment. Therefore, we have been closely following the applicability of the data set support capability provided by fluid in different scenarios. Before fluid 0.4, fluid has provided a series of data set support capabilities such as abstraction, management, acceleration, observability, etc., however, the above capabilities are still very basic in the context of large amount of small files based on the feedback of community members."}),"\n",(0,n.jsxs)(t.p,{children:["Considering the universality of large-scale small file data sets in real production environment, especially AI application scenarios, we have made in-depth research on the problems brought by large-scale small files, and put forward solutions such as ",(0,n.jsx)(t.strong,{children:"asynchronous metadata loading query"}),", ",(0,n.jsx)(t.strong,{children:"streaming data processing"}),"  and so on , which are all integrated into fluid 0.4 version at present, To enhance fluid's support for large small file data sets"]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"The following is the performance comparison assessment results of fluid after optimizing in the 4million small file scenario using the alluxito runtime"})," :"]}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{}),(0,n.jsx)(t.th,{children:(0,n.jsx)(t.strong,{children:"Fluid 0.3"})}),(0,n.jsx)(t.th,{children:(0,n.jsx)(t.strong,{children:"Fluid 0.4"})})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:"dataset initialization"})}),(0,n.jsx)(t.td,{children:"60 min"}),(0,n.jsx)(t.td,{children:"22 min"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:"8 thread parallel data reading"})}),(0,n.jsx)(t.td,{children:"407 min"}),(0,n.jsx)(t.td,{children:"29 min"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:"deep learning model training"})}),(0,n.jsx)(t.td,{children:"6.5 hours"}),(0,n.jsx)(t.td,{children:"45 min"})]})]})]}),"\n",(0,n.jsx)(t.p,{children:"Storage management of large amount of small files is a difficult problem that many storage systems will encounter. In the subsequent versions, we will continue to pay attention to this scenario and the problems it brings."}),"\n",(0,n.jsx)(t.h2,{id:"convenient-big-data-computing-framework-such-as-spark-to-provide-data-access-support",children:"Convenient big data computing framework such as spark to provide data access support"}),"\n",(0,n.jsx)(t.p,{children:"Besides AI applications, fluid 0.4 also supports big data applications such as spark to run on it. By exposing the Hadoop file system compatible interface (HCFs) of the allouxio distributed cache engine to users, the data analysis application written by Hadoop MapReduce, Apache spark and other big data computing frameworks can be directly run on fluid without modifying the application code, and enjoy the ability of distributed cache acceleration provided by fluid ."}),"\n",(0,n.jsx)(t.p,{children:"For more details on accessing data through the HCFs interface, refer to sample documentation on GitHub."}),"\n",(0,n.jsx)(t.h2,{id:"mixed-deployment-of-multiple-data-sets-and-single-node",children:"Mixed deployment of multiple data sets and single node"}),"\n",(0,n.jsx)(t.p,{children:"In the real production environment, users will train multiple tasks on GPU nodes in kubernetes cluster to use multiple datasets. Before fluid 0.4, single node cannot deploy multiple data sets at the same time. Therefore, if multiple users expect to access the required data sets at the same node at the same time, A user's dataset cannot be created."}),"\n",(0,n.jsx)(t.p,{children:"In fluid 0.4, we added the ability of multi dataset and single node mixed deployment for fluid, which means that as long as the resources on the node are sufficient, the conflict of deployment of multiple datasets from different users will no longer occur, which will make fluid more suitable for the needs of the actual production environment. On the other hand, hybrid deployment can effectively utilize idle resources, increase the utilization rate of cluster resources of each node in the cluster, and further improve the cost and benefit brought by fluid."}),"\n",(0,n.jsx)(t.p,{children:"For a brief introduction to mixed deployment of multiple datasets and single nodes, refer to sample document on GitHub."}),"\n",(0,n.jsx)(t.h2,{id:"thank",children:"Thank"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Xu Zhihao (pasalab, Nanjing University) contribution to supporting small file scenarios and data preheating functions"}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Xiefeng (cloud Zhisheng) for the development of mixed deployment function and scenario verification of multiple data sets and single node"}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Qiu Lingwei (Chinatelecom) contributed to fluid architecture split, he split the runtime and dataset controller, and supported the parallel evolution of the two components in the future"}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"summary",children:"Summary"}),"\n",(0,n.jsx)(t.p,{children:"Fluid 0.4 will continue to address the problems and requirements feedback from community users in the actual production environment, expand the applicability of fluid in various scenarios and improve the user experience:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Firstly, the optimization of the support capability of large and small file data sets enables fluid to better deal with different use scenarios;"}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Secondly, the new data load customization resources provide a simple data preheating solution for users;"}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Furthermore, the support for data access of big data applications such as spark enables fluid to provide support for different types of data intensive applications;"}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Finally, the mixed deployment of multiple datasets makes fluid more suitable for the actual production environment."}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"If you have any questions or suggestions, please join the nail exchange group to participate in and discuss:"}),"\n",(0,n.jsx)(t.h2,{id:"introduction-to-the-author",children:"Introduction to the author"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Dr. Gu Rong"})," is an associate researcher of Computer Department of Nanjing University, and has published more than 20 papers in the frontier periodical meetings in TPDS, ICDE, jpdc, IPDPS, ICPP and other fields. He presided over several projects on the National Natural Science Foundation (NSFC) and youth projects, and a number of special projects funded by China Postdoctoral Science Fund. The research results have been applied to Alibaba, Baidu, and Baidu Byteco, Sinopec, Huatai Securities and open source projects Apache spark and alluxio won the first prize of Jiangsu Science and technology in 2018, the youth science and technology award of Jiangsu computer society in 2019, and served as member of the system software special committee of China Computer Society / communication member of the special committee of big data, Secretary General of the big data special committee of Jiangsu computer society Fluid Open Source Project Co foundation, PMC member of the alluxio open source project."]})]})}function u(e={}){const{wrapper:t}={...(0,i.M)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},2172:(e,t,a)=>{a.d(t,{I:()=>r,M:()=>s});var n=a(1504);const i={},o=n.createContext(i);function s(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);