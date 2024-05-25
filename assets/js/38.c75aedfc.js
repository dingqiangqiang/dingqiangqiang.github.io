(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{471:function(e,t,o){"use strict";o.r(t);var v=o(2),n=Object(v.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("p",[e._v("之前我们分析过模板到真实 DOM 渲染的过程，中间有一个环节是把模板编译成 "),t("code",[e._v("render")]),e._v(" 函数，这个过程我们把它称作编译。")]),e._v(" "),t("p",[e._v("虽然我们可以直接为组件编写 "),t("code",[e._v("render")]),e._v(" 函数，但是编写 "),t("code",[e._v("template")]),e._v(" 模板更加直观，也更符合我们的开发习惯。")]),e._v(" "),t("p",[e._v("Vue.js 提供了 2 个版本，一个是 Runtime + Compiler 的，一个是 Runtime only 的，前者是包含编译代码的，可以把编译过程放在运行时做，后者是不包含编译代码的，需要借助 webpack 的 "),t("code",[e._v("vue-loader")]),e._v(" 事先把模板编译成 "),t("code",[e._v("render")]),e._v("函数。")]),e._v(" "),t("p",[e._v("这一章我们就来分析编译的过程，对编译过程的了解会让我们对 Vue 的指令、内置组件等有更好的理解。不过由于编译的过程是一个相对复杂的过程，我们只要求理解整体的流程、输入和输出即可，对于细节我们不必抠太细。有些细节比如对于 "),t("code",[e._v("slot")]),e._v(" 的处理我们可以在之后去分析插槽实现的时候再详细分析。")])])}),[],!1,null,null,null);t.default=n.exports}}]);