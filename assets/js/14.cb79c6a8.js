(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{175:function(t,r,i){t.exports=i.p+"assets/img/7.19a41a14.png"},251:function(t,r,i){"use strict";i.r(r);var s=[function(){var t=this,r=t.$createElement,s=t._self._c||r;return s("div",{staticClass:"content"},[s("h1",{attrs:{id:"内存分配与回收策略"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#内存分配与回收策略","aria-hidden":"true"}},[t._v("#")]),t._v(" 内存分配与回收策略")]),t._v(" "),s("p",[t._v("Java内存中，GC分为两类，Minor GC和Full GC。Minor GC针对年轻代进行GC，Full GC针对整个堆进行GC。JVM的内存晋升流程图如下")]),t._v(" "),s("p",[s("img",{attrs:{src:i(175),alt:""}})]),t._v(" "),s("p",[t._v("在survior区中的对象，在符合两种情况时，也是可以晋升到老年代的")]),t._v(" "),s("ul",[s("li",[t._v("survior区中的对象，每经历过一次Minor GC而没有被回收掉就会使其年龄+1，当年龄大于我们设定的年龄值时，就会晋升到老年代中")]),t._v(" "),s("li",[t._v("如果survior区中同一年龄的对象大于Survior区的一半，那么这些对象也会晋升到到老年代")])])])}],n=i(0),e=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},s,!1,null,null,null);e.options.__file="内存分配与回收策略.md";r.default=e.exports}}]);