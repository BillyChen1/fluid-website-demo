"use strict";(self.webpackChunkfluid_website_demo=self.webpackChunkfluid_website_demo||[]).push([[6894],{3800:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var t=o(7624),r=o(2172);const i={sidebar_label:"Pprof Profiling for Fluid Components",sidebar_position:2},l="Pprof Profiling for Fluid Components",s={id:"developer-manual/pprof",title:"Pprof Profiling for Fluid Components",description:"Background introduction",source:"@site/docs/developer-manual/pprof.md",sourceDirName:"developer-manual",slug:"/developer-manual/pprof",permalink:"/fluid-website-demo/docs/developer-manual/pprof",draft:!1,unlisted:!1,editUrl:"https://github.com/BillyChen1/fluid-website-demo/tree/master/docs/developer-manual/pprof.md",tags:[],version:"current",lastUpdatedBy:"chenqiming",lastUpdatedAt:1711114406,formattedLastUpdatedAt:"Mar 22, 2024",sidebarPosition:2,frontMatter:{sidebar_label:"Pprof Profiling for Fluid Components",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Setting up Fluid Development Environment with Kind on MacOS",permalink:"/fluid-website-demo/docs/developer-manual/dev_with_kind"}},a={},c=[{value:"Background introduction",id:"background-introduction",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Enter the component Pod for performance analysis",id:"enter-the-component-pod-for-performance-analysis",level:2},{value:"Perform performance analysis",id:"perform-performance-analysis",level:2}];function d(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.M)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"pprof-profiling-for-fluid-components",children:"Pprof Profiling for Fluid Components"}),"\n",(0,t.jsx)(n.h2,{id:"background-introduction",children:"Background introduction"}),"\n",(0,t.jsx)(n.p,{children:"pprof is a tool for visualizing and analyzing performance data. It can collect CPU, memory, stack and other information of programs, and generate text and graphical reports."}),"\n",(0,t.jsxs)(n.p,{children:["The Fluid community has enabled the pprof service in each component. Users can access it * ",(0,t.jsx)(n.a,{href:"http://127.0.0.1:6060/debug/pprof/",children:"http://127.0.0.1:6060/debug/pprof/"})," * in the component Pod."]}),"\n",(0,t.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,t.jsxs)(n.p,{children:["You can download the latest Fluid installation package from ",(0,t.jsx)(n.a,{href:"https://github.com/fluid-cloudnative/fluid/releases",children:"Fluid Releases"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Refer to the ",(0,t.jsx)(n.a,{href:"../userguide/install.md",children:"Installation document"})," to complete the installation."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"$ kubectl get po -n fluid-system\nNAME                                         READY   STATUS              RESTARTS   AGE\ncsi-nodeplugin-fluid-ctc4l                   2/2     Running             0          113s\ncsi-nodeplugin-fluid-k7cqt                   2/2     Running             0          113s\ncsi-nodeplugin-fluid-x9dfd                   2/2     Running             0          113s\ndataset-controller-57ddd56b54-9vd86          1/1     Running             0          113s\nfluid-webhook-84467465f8-t65mr               1/1     Running             0          113s\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Make sure ",(0,t.jsx)(n.code,{children:"dataset-controller"}),", ",(0,t.jsx)(n.code,{children:"fluid-webhook"})," pod and ",(0,t.jsx)(n.code,{children:"csi-nodeplugin"})," pods work well. ",(0,t.jsx)(n.code,{children:"juicefs-runtime-controller"})," will be installed automatically when JuiceFSRuntime created."]}),"\n",(0,t.jsx)(n.h2,{id:"enter-the-component-pod-for-performance-analysis",children:"Enter the component Pod for performance analysis"}),"\n",(0,t.jsxs)(n.p,{children:["View the name of each Fluid component Pod (this article uses ",(0,t.jsx)(n.code,{children:"Fluid dataset controller"})," as an example for performance analysis)."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"$ kubectl get pods -n fluid-system\nNAME                                  READY   STATUS    RESTARTS         AGE\ncsi-nodeplugin-fluid-kg9bc            2/2     Running   0                22h\ncsi-nodeplugin-fluid-nbbjk            2/2     Running   0                22h\ncsi-nodeplugin-fluid-vjdfz            2/2     Running   0                22h\ndataset-controller-77cfc8f9bf-m488j   1/1     Running   0                22h\nfluid-webhook-5f76bb6567-jwpbk        1/1     Running   0                22h\nfluidapp-controller-b7c4d5579-ztvlw   1/1     Running   0                22h\n"})}),"\n",(0,t.jsx)(n.p,{children:"Enter the dataset-controller pod."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"$ kubectl exec -it dataset-controller-77cfc8f9bf-m488j -n fluid-system bash\n"})}),"\n",(0,t.jsx)(n.h2,{id:"perform-performance-analysis",children:"Perform performance analysis"}),"\n",(0,t.jsxs)(n.p,{children:["After installing the Go environment, the ",(0,t.jsx)(n.strong,{children:"go tool pprof"})," command can be used for perform performance analysis. In addition, users can also access ",(0,t.jsx)(n.em,{children:(0,t.jsx)(n.a,{href:"http://127.0.0.1:6060/debug/pprof/",children:"http://127.0.0.1:6060/debug/pprof/"})})," to view some data information."]}),"\n",(0,t.jsx)(n.p,{children:"The following data of the program can be analyzed\uff1a"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"allocs\uff1aA sampling of all past memory allocations"}),"\n",(0,t.jsx)(n.li,{children:"block\uff1aStack traces that led to blocking on synchronization primitives"}),"\n",(0,t.jsx)(n.li,{children:"cmdline\uff1a The command line invocation of the current program\u3002"}),"\n",(0,t.jsx)(n.li,{children:"goroutine\uff1aStack traces of all current goroutines"}),"\n",(0,t.jsx)(n.li,{children:"heap\uff1aA sampling of memory allocations of live objects. You can specify the gc GET parameter to run GC before taking the heap sample."}),"\n",(0,t.jsx)(n.li,{children:"mutex\uff1aStack traces of holders of contended mutexes"}),"\n",(0,t.jsx)(n.li,{children:"profile\uff1a CPU profile. You can specify the duration in the seconds GET parameter. After you get the profile file, use the go tool pprof command to investigate the profile."}),"\n",(0,t.jsx)(n.li,{children:"threadcreate\uff1aStack traces that led to the creation of new OS threads"}),"\n",(0,t.jsx)(n.li,{children:"trace\uff1aA trace of execution of the current program. You can specify the duration in the seconds GET parameter. After you get the trace file, use the go tool trace command to investigate the trace."}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Collect the data you are interested in. This article takes the 30 second CPU data as an example and saves the data as a ",(0,t.jsx)(n.code,{children:"profile.out"}),". You can use the ",(0,t.jsx)(n.code,{children:"go tool pporf"})," command for analysis with the ",(0,t.jsx)(n.code,{children:"profile.out"})," locally or on the host (the Go environment is required)."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:'$ curl -o profile.out http://localhost:6060/debug/pprof/profile?seconds=30\n$ go tool pprof test.out \nFile: dataset-controller\nType: cpu\nTime: Nov 2, 2022 at 6:48pm (CST)\nDuration: 29.91s, Total samples = 50ms ( 0.17%)\nEntering interactive mode (type "help" for commands, "o" for options)\n(pprof) \n'})}),"\n",(0,t.jsxs)(n.p,{children:["Enter the ",(0,t.jsx)(n.code,{children:"top5"})," command in the interactive terminal to print the top 5 functions that consume CPU resources."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"(pprof) top5   \nShowing nodes accounting for 50ms, 100% of 50ms total\nShowing top 5 nodes out of 64\n      flat  flat%   sum%        cum   cum%\n      10ms 20.00% 20.00%       10ms 20.00%  github.com/fluid-cloudnative/fluid/vendor/golang.org/x/net/http2.(*Transport).expectContinueTimeout\n      10ms 20.00% 40.00%       10ms 20.00%  net/http.cloneURL\n      10ms 20.00% 60.00%       10ms 20.00%  path.(*lazybuf).append\n      10ms 20.00% 80.00%       10ms 20.00%  runtime.memclrNoHeapPointers\n      10ms 20.00%   100%       10ms 20.00%  runtime.newarray\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsxs)(n.strong,{children:["For more usage information, please refer to ",(0,t.jsx)(n.a,{href:"https://github.com/google/pprof",children:"Document"})]})})]})}function p(e={}){const{wrapper:n}={...(0,r.M)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},2172:(e,n,o)=>{o.d(n,{I:()=>s,M:()=>l});var t=o(1504);const r={},i=t.createContext(r);function l(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);