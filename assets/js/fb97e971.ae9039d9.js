"use strict";(self.webpackChunkfluid_website_demo=self.webpackChunkfluid_website_demo||[]).push([[1048],{8588:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>l,metadata:()=>s,toc:()=>r});var o=i(7624),t=i(2172);const l={},a="Pod Scheduling Base on Runtime Tiered Locality",s={id:"user-manual/scheduling/tiered_locality_schedule",title:"Pod Scheduling Base on Runtime Tiered Locality",description:"In Pod Scheduling Optimization, we introduce how to schedule application Pods to nodes",source:"@site/docs/user-manual/scheduling/tiered_locality_schedule.md",sourceDirName:"user-manual/scheduling",slug:"/user-manual/scheduling/tiered_locality_schedule",permalink:"/fluid-website-demo/docs/user-manual/scheduling/tiered_locality_schedule",draft:!1,unlisted:!1,editUrl:"https://github.com/BillyChen1/fluid-website-demo/tree/master/docs/user-manual/scheduling/tiered_locality_schedule.md",tags:[],version:"current",lastUpdatedBy:"chenqiming",lastUpdatedAt:1711114406,formattedLastUpdatedAt:"Mar 22, 2024",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Pod Scheduling Optimization",permalink:"/fluid-website-demo/docs/user-manual/scheduling/pod_schedule_optimization"},next:{title:"Developer Guide",permalink:"/fluid-website-demo/docs/developer-manual/how_to_develop"}},d={},r=[{value:"0. Prerequisites",id:"0-prerequisites",level:2},{value:"1. Configure Tiered Locality in Fluid",id:"1-configure-tiered-locality-in-fluid",level:2},{value:"2. Configure the tiered locality information for the Runtime",id:"2-configure-the-tiered-locality-information-for-the-runtime",level:2},{value:"3. Application Pod Scheduling",id:"3-application-pod-scheduling",level:2},{value:"3.1 Preferred Affinity Scheduling",id:"31-preferred-affinity-scheduling",level:3},{value:"3.2 Required Affinity Scheduling",id:"32-required-affinity-scheduling",level:3},{value:"3.3 Note",id:"33-note",level:3}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.M)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"pod-scheduling-base-on-runtime-tiered-locality",children:"Pod Scheduling Base on Runtime Tiered Locality"}),"\n",(0,o.jsxs)(n.p,{children:["In ",(0,o.jsx)(n.a,{href:"/fluid-website-demo/docs/user-manual/scheduling/pod_schedule_optimization",children:"Pod Scheduling Optimization"}),", we introduce how to schedule application Pods to nodes\nwith cached data."]}),"\n",(0,o.jsx)(n.p,{children:"However, in some cases, if the data cached nodes cannot be scheduled with the application Pod, the Pod will be scheduled\nto a node closer to the data cached nodes, such as on the same zone, its read and write performance will be better than in different zones."}),"\n",(0,o.jsx)(n.p,{children:"Fluid supports configuring tiered locality information in K8s clusters, which is stored in the configmap named 'webhook-plugins' in fluid system namespace.\nfile of Fluid's Helm Chart."}),"\n",(0,o.jsx)(n.p,{children:"The following is a specific example, assuming that the K8s cluster has locality information for zones and regions, achieving the following goals:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"When the application Pod is not configured with required dataset scheduling, prefer to schedule pod to data cached nodes.\nIf pods can not be scheduled in data cached nodes, prefer to be scheduled in the same zone.\nIf pods can not be scheduled in the same zone nodes too, then prefer to be scheduled in the same region;"}),"\n",(0,o.jsx)(n.li,{children:"When using Pod to configure required dataset scheduling, require pod to be scheduled in the same zone of data cached nodes instead of the data cached nodes."}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"0-prerequisites",children:"0. Prerequisites"}),"\n",(0,o.jsx)(n.p,{children:"The version of k8s you are using needs to support admissionregistration.k8s.io/v1 (Kubernetes version > 1.16 )\nEnabling allowed controllers needs to be configured by passing a flag to the Kubernetes API server. Make sure that your cluster is properly configured."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:"--enable-admission-plugins=MutatingAdmissionWebhook\n"})}),"\n",(0,o.jsx)(n.p,{children:"Note that if your cluster has been previously configured with other allowed controllers, you only need to add the MutatingAdmissionWebhook parameter."}),"\n",(0,o.jsx)(n.h2,{id:"1-configure-tiered-locality-in-fluid",children:"1. Configure Tiered Locality in Fluid"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:"Configure before installing Fluid"}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"Define the tiered locality configuration in the Helm Charts values.yaml like below."}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"fluid.io/node is the built-in name of Fluid, used to schedule pods to the data cached node"}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:"pluginConfig:\n  - name: NodeAffinityWithCache\n    args: |\n      preferred:\n        # fluid built-in name, used to schedule pods to the data cached node\n        - name: fluid.io/node\n          weight: 100\n        # runtime worker's zone label name, can be changed according to k8s environment.\n        - name: topology.kubernetes.io/zone\n          weight: 50\n        # runtime worker's region label name, can be changed according to k8s environment.\n        - name: topology.kubernetes.io/region\n          weight: 10\n      required:\n        # If Pod is configured with required affinity, then schedule the pod to nodes match the label.\n        # Multiple names is the And relation.\n        - topology.kubernetes.io/zone\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Install Fluid following the document ",(0,o.jsx)(n.a,{href:"../userguide/install.md",children:"Installation"}),". After installation, a configmap\nnamed ",(0,o.jsx)(n.code,{children:"webhook-plugins"})," storing above configuration will exist in Fluid namespace(default ",(0,o.jsx)(n.code,{children:"fluid-system"}),")."]}),"\n",(0,o.jsxs)(n.ol,{start:"2",children:["\n",(0,o.jsx)(n.li,{children:"Modify tiered locality configuration in the existing Fluid cluster"}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["Modify tiered location configuration (content see point 1) in the configMap named 'webhook-plugins'\nin the Fluid namespace (default ",(0,o.jsx)(n.code,{children:"fluid-system"}),"), the new configuration only takes affect when the fluid-webhook pod restarts."]}),"\n",(0,o.jsx)(n.h2,{id:"2-configure-the-tiered-locality-information-for-the-runtime",children:"2. Configure the tiered locality information for the Runtime"}),"\n",(0,o.jsx)(n.p,{children:"Tiered location information can be configured through the NodeAffinity field of the Dataset or the NodeSelector field of the Runtime."}),"\n",(0,o.jsx)(n.p,{children:"The following is the configuration of tiered location information defined in the yaml of the Dataset.\nAnd the workers of the Runtime will be deployed on nodes matching these labels."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:"apiVersion: data.fluid.io/v1alpha1\nkind: Dataset\nmetadata:\n  name: hbase\nspec:\n  mounts:\n    - mountPoint: https://mirrors.tuna.tsinghua.edu.cn/apache/hbase/stable/\n      name: hbase\n  nodeAffinity:\n    required:\n      nodeSelectorTerms:\n      \t- matchExpressions:\n          - key: topology.kubernetes.io/zone\n            operator: In\n            values: \n              - zone-a\n          - key: topology.kubernetes.io/region\n            operator: In\n            values:\n              - region-a\n"})}),"\n",(0,o.jsx)(n.h2,{id:"3-application-pod-scheduling",children:"3. Application Pod Scheduling"}),"\n",(0,o.jsx)(n.h3,{id:"31-preferred-affinity-scheduling",children:"3.1 Preferred Affinity Scheduling"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Creating the Pod"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:'$ cat<<EOF >nginx-1.yaml\napiVersion: v1\nkind: Pod\nmetadata:\n  name: nginx-1\n  labels:\n    # enable Fluid\'s scheduling optimization for the pod\n    fuse.serverful.fluid.io/inject: "true"\nspec:\n  containers:\n    - name: nginx-1\n      image: nginx\n      volumeMounts:\n        - mountPath: /data\n          name: hbase-vol\n  volumes:\n    - name: hbase-vol\n      persistentVolumeClaim:\n        claimName: hbase\nEOF\n$ kubectl create -f nginx-1.yaml\n'})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Check the Pod"})}),"\n",(0,o.jsx)(n.p,{children:"Checking the yaml file of Pod, shows that the following affinity constraint information has been injected:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:'spec:\n  affinity:\n    nodeAffinity:\n      preferredDuringSchedulingIgnoredDuringExecution:\n        - preference:\n          matchExpressions:\n            - key: fluid.io/s-default-hbase\n              operator: In\n              values:\n                - "true"\n          weight: 100\n        - preference:\n            matchExpressions:\n              - key: topology.kubernetes.io/zone\n                operator: In\n                values:\n                  - "zone-a"\n          weight: 50\n        - preference:\n            matchExpressions:\n              - key: topology.kubernetes.io/region\n                operator: In\n                values:\n                  - "region-a"\n          weight: 10         \n'})}),"\n",(0,o.jsx)(n.p,{children:"These affinity will achieve the following effects:\uff1a"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"If the data cached node (a node with the label 'fluid.io/s-default-hbase') is schedulable, schedule Pod to that node;"}),"\n",(0,o.jsx)(n.li,{children:'If the data cached node is un-schedulable, prefer to schedule pod to nodes in the same zone ("zone-a");'}),"\n",(0,o.jsx)(n.li,{children:'If the same zone nodes are un-schedulable, prefer to schedule pod to nodes in the same region ("region-a");'}),"\n",(0,o.jsx)(n.li,{children:"All of the above are not met, schedule to other schedulable nodes in the cluster."}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"32-required-affinity-scheduling",children:"3.2 Required Affinity Scheduling"}),"\n",(0,o.jsx)(n.p,{children:"If sets pod with required dataset scheduling as below :"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:'apiVersion: v1\nkind: Pod\nmetadata:\n  name: nginx-1\n  labels:\n    # required dataset scheduling\n    fluid.io/dataset.hbase.sched: required\n    fuse.serverful.fluid.io/inject: "true"\nspec:\n  containers:\n    - name: nginx-1\n      image: nginx\n      volumeMounts:\n        - mountPath: /data\n          name: hbase-vol\n  volumes:\n    - name: hbase-vol\n      persistentVolumeClaim:\n        claimName: hbase\n'})}),"\n",(0,o.jsx)(n.p,{children:'Pod will be injected with required node affinity, as shown below, forcing scheduling to nodes with value "zone-a" for label "topology.kubernetes.io/zone"  .'}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:'spec:\n  affinity:\n    nodeAffinity:\n      requiredDuringSchedulingIgnoredDuringExecution:\n        nodeSelectorTerms:\n          - matchExpressions:\n            - key: topology.kubernetes.io/zone\n              operator: In\n              values:\n                - "zone-a"\n'})}),"\n",(0,o.jsx)(n.h3,{id:"33-note",children:"3.3 Note"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:"If the application Pod specifies the affinity about tiered locality information (defined in 'spec.affinity' or 'spec.nodeselector'), webhook will\nnot inject the relevant location affinity, and the user's configuration will be kept:"}),"\n",(0,o.jsx)(n.li,{children:"The affinity scheduling of tiered location is a global configuration that takes effect for all datasets and does not support different affinity configurations for different datasets;"}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,t.M)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},2172:(e,n,i)=>{i.d(n,{I:()=>s,M:()=>a});var o=i(1504);const t={},l=o.createContext(t);function a(e){const n=o.useContext(l);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),o.createElement(l.Provider,{value:n},e.children)}}}]);