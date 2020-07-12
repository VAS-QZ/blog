(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{193:function(t,a,s){t.exports=s.p+"assets/img/status.adf3fda3.png"},236:function(t,a,s){"use strict";s.r(a);var e=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"content"},[e("h1",{attrs:{id:"线程池的使用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#线程池的使用","aria-hidden":"true"}},[t._v("#")]),t._v(" 线程池的使用")]),t._v(" "),e("p"),e("div",{staticClass:"table-of-contents"},[e("ul",[e("li",[e("a",{attrs:{href:"#创建线程池"}},[t._v("创建线程池")]),e("ul",[e("li",[e("a",{attrs:{href:"#参数设置"}},[t._v("参数设置")]),e("ul",[e("li",[e("a",{attrs:{href:"#线程数"}},[t._v("线程数")])]),e("li",[e("a",{attrs:{href:"#阻塞队列"}},[t._v("阻塞队列")])]),e("li",[e("a",{attrs:{href:"#拒绝策略"}},[t._v("拒绝策略")])])])]),e("li",[e("a",{attrs:{href:"#其他配置"}},[t._v("其他配置")])])])]),e("li",[e("a",{attrs:{href:"#停止线程池"}},[t._v("停止线程池")]),e("ul",[e("li",[e("a",{attrs:{href:"#停止方法"}},[t._v("停止方法")])]),e("li",[e("a",{attrs:{href:"#查看线程池状态方法"}},[t._v("查看线程池状态方法")])])])])])]),e("p"),t._v(" "),e("p",[t._v("在Java中，提到多线程，就一定绕不开线程池。")]),t._v(" "),e("h2",{attrs:{id:"创建线程池"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#创建线程池","aria-hidden":"true"}},[t._v("#")]),t._v(" 创建线程池")]),t._v(" "),e("p",[t._v("在Java中新建一个类一般而言是使用new关键字来调用其构造方法，线程池也不例外，之所以将其单独拿出来说一说，是因为线程池的构造器中的参数都是比较不容易理解的")]),t._v(" "),e("div",{staticClass:"language-java line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-java"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("ThreadPoolExecutor")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//核心线程数")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" corePoolSize"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//最大线程数")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" maximumPoolSize"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//任务完成后的超时时间")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("long")]),t._v(" keepAliveTime"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//超时时间单位")]),t._v("\n    TimeUnit unit"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//阻塞队列")]),t._v("\n    BlockingQueue"),e("span",{pre:!0,attrs:{class:"token generics function"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("Runnable"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" workQueue"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//线程工厂")]),t._v("\n    ThreadFactory threadFactory"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//拒绝策略")]),t._v("\n    RejectedExecutionHandler handler\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br"),e("span",{staticClass:"line-number"},[t._v("9")]),e("br"),e("span",{staticClass:"line-number"},[t._v("10")]),e("br"),e("span",{staticClass:"line-number"},[t._v("11")]),e("br"),e("span",{staticClass:"line-number"},[t._v("12")]),e("br"),e("span",{staticClass:"line-number"},[t._v("13")]),e("br"),e("span",{staticClass:"line-number"},[t._v("14")]),e("br"),e("span",{staticClass:"line-number"},[t._v("15")]),e("br"),e("span",{staticClass:"line-number"},[t._v("16")]),e("br")])]),e("p",[t._v("在上述代码中，前5个参数是必须指定的，后两个则不需要，如果不指定线程工厂和拒绝策略，则会使用**默认的线程工厂和抛弃策略")]),t._v(" "),e("h3",{attrs:{id:"参数设置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参数设置","aria-hidden":"true"}},[t._v("#")]),t._v(" 参数设置")]),t._v(" "),e("p",[t._v("那么我们在创建线程池时，应该如何来指定线程池的参数呢？")]),t._v(" "),e("h4",{attrs:{id:"线程数"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#线程数","aria-hidden":"true"}},[t._v("#")]),t._v(" 线程数")]),t._v(" "),e("p",[t._v("首先我们要判断我们线程池将要执行的任务是CPU密集型的还是IO密集型的，如果是CPU密集型的，那么我们的线程数最好是CPU数量+1；如果是IO密集型的，则线程池完全可以开的大一点，比如2*CPU数量。")]),t._v(" "),e("h4",{attrs:{id:"阻塞队列"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#阻塞队列","aria-hidden":"true"}},[t._v("#")]),t._v(" 阻塞队列")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("有界队列ArrayBlockingQueue")])]),t._v(" "),e("li",[e("p",[t._v("无界队列LinkedBlockingQueue")])]),t._v(" "),e("li",[e("p",[t._v("优先级队列PriorityBlockingQueue")])]),t._v(" "),e("li",[e("p",[t._v("延时队列DelayQueue")])]),t._v(" "),e("li",[e("p",[t._v("同步交付队列SynchronousQueue")])])]),t._v(" "),e("h4",{attrs:{id:"拒绝策略"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#拒绝策略","aria-hidden":"true"}},[t._v("#")]),t._v(" 拒绝策略")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("舍弃策略AbortPolicy")]),t._v(" "),e("p",[t._v("抛出RejectedExecutionException异常")])]),t._v(" "),e("li",[e("p",[t._v("抛弃策略DiscardPolicy")]),t._v(" "),e("p",[t._v("直接将该任务抛弃，什么也不做")])]),t._v(" "),e("li",[e("p",[t._v("抛弃最早策略DiscardOldestPolicy")]),t._v(" "),e("p",[t._v("从阻塞队列中取出一个并尝试重新执行")])]),t._v(" "),e("li",[e("p",[t._v("调用者运行策略CallerRunsPolicy")]),t._v(" "),e("p",[t._v("调用该线程池的线程执行")])])]),t._v(" "),e("h3",{attrs:{id:"其他配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#其他配置","aria-hidden":"true"}},[t._v("#")]),t._v(" 其他配置")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("在默认的情况下，线程池中的核心工作者是不会结束的，如果我们想要让核心工作者和非核心工作者一样没有任务就结束的话，可以使用ThreadPoolExecutor#allowCoreThreadTimeOut方法来将其设置为true。")])]),t._v(" "),e("li",[e("p",[t._v("线程的创建是需要一定时间开销的，如果我们希望在任务来临之前就省去这些开销，则可以使用以下两个方法")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("ThreadPoolExecutor#prestartCoreThread")]),t._v(" "),e("p",[t._v("提前启动一个核心工作者")])]),t._v(" "),e("li",[e("p",[t._v("ThreadPoolExecutor#prestartAllCoreThreads")]),t._v(" "),e("p",[t._v("提前启动所以核心工作者")])])])])]),t._v(" "),e("div",{staticClass:"tip custom-block"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("p",[t._v("线程池的创建还可以通过Executors类来创建，但是由于其配置参数一般不满足配置需求，而且使用工具类不易于我们了解线程池的工作原理，所以不推荐这种方法来创建线程池")])]),t._v(" "),e("h2",{attrs:{id:"停止线程池"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#停止线程池","aria-hidden":"true"}},[t._v("#")]),t._v(" 停止线程池")]),t._v(" "),e("p",[t._v("线程池提供了两个关于停止的方法以及一系列的查看线程池状态的方法")]),t._v(" "),e("h3",{attrs:{id:"停止方法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#停止方法","aria-hidden":"true"}},[t._v("#")]),t._v(" 停止方法")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("ThreadPoolExecutor#shutdown")]),t._v(" "),e("p",[t._v("设置线程池状态为shutdown，调用所有工作者线程的Interrupt方法")])]),t._v(" "),e("li",[e("p",[t._v("ThreadPoolExecutor#shutdownNow")]),t._v(" "),e("p",[t._v("设置线程池状态为stop，调用所有工作者线程的Interrupt方法，清空阻塞队列并返回")])])]),t._v(" "),e("h3",{attrs:{id:"查看线程池状态方法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#查看线程池状态方法","aria-hidden":"true"}},[t._v("#")]),t._v(" 查看线程池状态方法")]),t._v(" "),e("p",[t._v("在学习查看线程池状态方法之前，我们先来了解一下线程池的状态流转")]),t._v(" "),e("p",[e("img",{attrs:{src:s(193),alt:""}})]),t._v(" "),e("ul",[e("li",[e("p",[t._v("isShutdown")]),t._v(" "),e("p",[t._v("判断线程池是否是RUNNING状态")])]),t._v(" "),e("li",[e("p",[t._v("isTerminating")]),t._v(" "),e("p",[t._v("判断线程池是否是SHUTDOWN\\STOP\\TIDYING状态")])]),t._v(" "),e("li",[e("p",[t._v("isTerminated")]),t._v(" "),e("p",[t._v("判断线程池是否是TERMINATED状态")])]),t._v(" "),e("li",[e("p",[t._v("awaitTermination")]),t._v(" "),e("p",[t._v("循环等待一段时间直到线程池状态为TERMINATED")])])])])}],r=s(0),n=Object(r.a)({},function(){this.$createElement;this._self._c;return this._m(0)},e,!1,null,null,null);n.options.__file="线程池的使用.md";a.default=n.exports}}]);