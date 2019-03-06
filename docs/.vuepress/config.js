module.exports = {
  base: '/blog/',
  title: 'HOME',
  port: '8081',
  themeConfig:{
	  logo: '/img/logo.jpg',	
	  nav:[
	    {text:'Github', link:'https://github.com/VAS-QZ'},
	  ],
	  sidebar: [
		{
			title:'VuePress',
			children:[
		      '/common/vuepressBuildOne',
		      '/common/vuepressBuildTwo'
			]
		},
		{
			title:'虚拟机',
			children:[
		      '/jvm/java内存区域',
			  '/jvm/垃圾收集器',
			  '/jvm/内存分配策略',
			  '/jvm/IDEA调优实战'
			]
		},
		{
			title:'多线程',
			children:[
		      '/threads/thread.md',
		      '/threads/ThreadPoolExecutor.md',
		      '/threads/volatile.md'
			]
		},
		{
			title:'算法',
			children:[
		      '/algorithm/排序.md'
			]
		},
		{
			title:'问题',
			children:[
		      '/problem/jvmproblem.md',
		      '/problem/threadproblem.md'
			]
		}
	  ],
      
	sidebarDepth: 2,
    lastUpdated: 'Last Updated', 
  },
  markdown: {
	lineNumbers: true,
	toc: { includeLevel: [2, 3, 4, 5, 6] }
  },
}