"use strict";(self.webpackChunkfluid_website_demo=self.webpackChunkfluid_website_demo||[]).push([[5696],{5988:e=>{e.exports=JSON.parse('{"pluginId":"default","version":"current","label":"0.9 \ud83d\udea7","banner":null,"badge":false,"noIndex":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"tutorialSidebar":[{"type":"category","label":"Getting Started","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Fluid Overview","href":"/fluid-website-demo/docs/","docId":"getting-started/overview","unlisted":false},{"type":"link","label":"Installation","href":"/fluid-website-demo/docs/getting-started/install","docId":"getting-started/install","unlisted":false},{"type":"link","label":"Quick Start","href":"/fluid-website-demo/docs/getting-started/get_started","docId":"getting-started/get_started","unlisted":false}]},{"type":"category","label":"Core Concepts","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Introduction to Fluid","href":"/fluid-website-demo/docs/core-concepts/introduction","docId":"core-concepts/introduction","unlisted":false},{"type":"link","label":"Architecture","href":"/fluid-website-demo/docs/core-concepts/architecture","docId":"core-concepts/architecture","unlisted":false},{"type":"link","label":"Concepts","href":"/fluid-website-demo/docs/core-concepts/concepts","docId":"core-concepts/concepts","unlisted":false},{"type":"link","label":"Alibaba\'s Case Study","href":"/fluid-website-demo/docs/core-concepts/alibaba-case-study","docId":"core-concepts/alibaba-case-study","unlisted":false}]},{"type":"category","label":"User Manual","collapsible":true,"collapsed":true,"items":[{"type":"category","label":"Accelerate Data Access","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Speed Up Accessing Remote Files","href":"/fluid-website-demo/docs/user-manual/data-accelerate/accelerate_data_accessing","docId":"user-manual/data-accelerate/accelerate_data_accessing","unlisted":false},{"type":"link","label":"Speed Up Accessing Remote Files via HDFS Client","href":"/fluid-website-demo/docs/user-manual/data-accelerate/accelerate_data_accessing_by_hdfs","docId":"user-manual/data-accelerate/accelerate_data_accessing_by_hdfs","unlisted":false}]},{"type":"category","label":"Data Operation","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Data Preloading","href":"/fluid-website-demo/docs/user-manual/data-operation/data_warmup","docId":"user-manual/data-operation/data_warmup","unlisted":false},{"type":"link","label":"Demo - Cache Runtime Manually Scaling","href":"/fluid-website-demo/docs/user-manual/data-operation/dataset_scaling","docId":"user-manual/data-operation/dataset_scaling","unlisted":false}]},{"type":"category","label":"User Manual","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Demo - Access Dataset cache across Namespace (CSI mechanism)","href":"/fluid-website-demo/docs/user-manual/data-sharing/dataset_across_namespace_with_csi","docId":"user-manual/data-sharing/dataset_across_namespace_with_csi","unlisted":false},{"type":"link","label":"Demo - Access Dataset cache across Namespace (Sidecar mechanism)","href":"/fluid-website-demo/docs/user-manual/data-sharing/dataset_across_namespace_with_sidecar","docId":"user-manual/data-sharing/dataset_across_namespace_with_sidecar","unlisted":false}]},{"type":"category","label":"Scheduling","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Cache Co-locality for Workload Scheduling","href":"/fluid-website-demo/docs/user-manual/scheduling/data_co_locality","docId":"user-manual/scheduling/data_co_locality","unlisted":false},{"type":"link","label":"Pod Scheduling Optimization","href":"/fluid-website-demo/docs/user-manual/scheduling/pod_schedule_optimization","docId":"user-manual/scheduling/pod_schedule_optimization","unlisted":false},{"type":"link","label":"Pod Scheduling Base on Runtime Tiered Locality","href":"/fluid-website-demo/docs/user-manual/scheduling/tiered_locality_schedule","docId":"user-manual/scheduling/tiered_locality_schedule","unlisted":false}]}]},{"type":"category","label":"Developer Manual","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Developer Guide","href":"/fluid-website-demo/docs/developer-manual/how_to_develop","docId":"developer-manual/how_to_develop","unlisted":false},{"type":"link","label":"Setting up Fluid Development Environment with Kind on MacOS","href":"/fluid-website-demo/docs/developer-manual/dev_with_kind","docId":"developer-manual/dev_with_kind","unlisted":false},{"type":"link","label":"Pprof Profiling for Fluid Components","href":"/fluid-website-demo/docs/developer-manual/pprof","docId":"developer-manual/pprof","unlisted":false}]}]},"docs":{"core-concepts/alibaba-case-study":{"id":"core-concepts/alibaba-case-study","title":"Alibaba\'s Case Study","description":"This article discusses the significant role of Fluid with JindoCache in the large-scale model training within Alibaba Group.","sidebar":"tutorialSidebar"},"core-concepts/architecture":{"id":"core-concepts/architecture","title":"Architecture","description":"The overall architecture of Fluid is as follows:","sidebar":"tutorialSidebar"},"core-concepts/concepts":{"id":"core-concepts/concepts","title":"Concept","description":"Dataset","sidebar":"tutorialSidebar"},"core-concepts/introduction":{"id":"core-concepts/introduction","title":"Introduction","description":"Why Fluid\uff1f","sidebar":"tutorialSidebar"},"developer-manual/dev_with_kind":{"id":"developer-manual/dev_with_kind","title":"Setting up Fluid Development Environment with Kind on MacOS","description":"+ kind (version > v0.10.0)","sidebar":"tutorialSidebar"},"developer-manual/how_to_develop":{"id":"developer-manual/how_to_develop","title":"Developer Guide","description":"Requirements","sidebar":"tutorialSidebar"},"developer-manual/pprof":{"id":"developer-manual/pprof","title":"Pprof Profiling for Fluid Components","description":"Background introduction","sidebar":"tutorialSidebar"},"getting-started/get_started":{"id":"getting-started/get_started","title":"Get Started With Fluid","description":"This document mainly describes how to deploy Fluid with Helm, and use Fluid to create a dataset and speed up your application.","sidebar":"tutorialSidebar"},"getting-started/install":{"id":"getting-started/install","title":"Installation","description":"Prerequisites","sidebar":"tutorialSidebar"},"getting-started/overview":{"id":"getting-started/overview","title":"Fluid Overview","description":"Target Functions and Scenarios","sidebar":"tutorialSidebar"},"user-manual/data-accelerate/accelerate_data_accessing":{"id":"user-manual/data-accelerate/accelerate_data_accessing","title":"Speed Up Accessing Remote Files","description":"Powered by Alluxio and Fuse, Fluid provides a simple way for users to access files stored in remote filesystems, just like accessing some ordinary file in local filesystems.","sidebar":"tutorialSidebar"},"user-manual/data-accelerate/accelerate_data_accessing_by_hdfs":{"id":"user-manual/data-accelerate/accelerate_data_accessing_by_hdfs","title":"Speed Up Accessing Remote Files via HDFS Client","description":"This demo introduces how to use HDFS Client to access remote files by Alluxio in Fluid, and it can accelerate the access of remote files powered by the file cache ability of Alluxio.","sidebar":"tutorialSidebar"},"user-manual/data-operation/data_warmup":{"id":"user-manual/data-operation/data_warmup","title":"Data Preloading","description":"In order to ensure the performance of the application when accessing the data,","sidebar":"tutorialSidebar"},"user-manual/data-operation/dataset_scaling":{"id":"user-manual/data-operation/dataset_scaling","title":"Demo - Cache Runtime Manually Scaling","description":"Prerequisites","sidebar":"tutorialSidebar"},"user-manual/data-sharing/dataset_across_namespace_with_csi":{"id":"user-manual/data-sharing/dataset_across_namespace_with_csi","title":"Demo - Access Dataset cache across Namespace (CSI mechanism)","description":"This demo is used to show how to use a Dataset cache across Namespace.","sidebar":"tutorialSidebar"},"user-manual/data-sharing/dataset_across_namespace_with_sidecar":{"id":"user-manual/data-sharing/dataset_across_namespace_with_sidecar","title":"Demo - Access Dataset cache across Namespace (Sidecar mechanism)","description":"This demo is used to show how to use a Dataset cache across Namespace.","sidebar":"tutorialSidebar"},"user-manual/scheduling/data_co_locality":{"id":"user-manual/scheduling/data_co_locality","title":"Cache Co-locality for Workload Scheduling","description":"In Fluid, remote files specified in Dataset object are schedulable, which means you are able to control where to put your data in a k8s cluster,","sidebar":"tutorialSidebar"},"user-manual/scheduling/pod_schedule_optimization":{"id":"user-manual/scheduling/pod_schedule_optimization","title":"Pod Scheduling Optimization","description":"To help users better use Fluid, we provide a series of scheduling plugins. By automatically injecting affinity-related information for Pods, we optimize the scheduling results of Pods and improve the overall efficiency of cluster usage.","sidebar":"tutorialSidebar"},"user-manual/scheduling/tiered_locality_schedule":{"id":"user-manual/scheduling/tiered_locality_schedule","title":"Pod Scheduling Base on Runtime Tiered Locality","description":"In Pod Scheduling Optimization, we introduce how to schedule application Pods to nodes","sidebar":"tutorialSidebar"}}}')}}]);