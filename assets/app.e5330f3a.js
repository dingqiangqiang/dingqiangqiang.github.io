import{G as ce,j as $,x as pe,E as fe,d as ge,W as Z,a5 as ve,u as he,A as ze,a6 as ye,a7 as be,a8 as Ee,a9 as we,aa as Le,ab as Ce,ac as Ae,ad as He,ae as Oe,af as Se,ag as Te,ah as xe,ai as Pe,Z as Ie}from"./chunks/framework.ecec7af3.js";import{t as U}from"./chunks/theme.51aab936.js";/*! medium-zoom 1.0.8 | MIT License | https://github.com/francoischalifour/medium-zoom */var b=Object.assign||function(o){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var d in i)Object.prototype.hasOwnProperty.call(i,d)&&(o[d]=i[d])}return o},x=function(t){return t.tagName==="IMG"},Ne=function(t){return NodeList.prototype.isPrototypeOf(t)},P=function(t){return t&&t.nodeType===1},W=function(t){var i=t.currentSrc||t.src;return i.substr(-4).toLowerCase()===".svg"},Y=function(t){try{return Array.isArray(t)?t.filter(x):Ne(t)?[].slice.call(t).filter(x):P(t)?[t].filter(x):typeof t=="string"?[].slice.call(document.querySelectorAll(t)).filter(x):[]}catch{throw new TypeError(`The provided selector is invalid.
Expects a CSS selector, a Node element, a NodeList or an array.
See: https://github.com/francoischalifour/medium-zoom`)}},je=function(t){var i=document.createElement("div");return i.classList.add("medium-zoom-overlay"),i.style.background=t,i},Re=function(t){var i=t.getBoundingClientRect(),d=i.top,f=i.left,I=i.width,N=i.height,h=t.cloneNode(),j=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0,H=window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0;return h.removeAttribute("id"),h.style.position="absolute",h.style.top=d+j+"px",h.style.left=f+H+"px",h.style.width=I+"px",h.style.height=N+"px",h.style.transform="",h},L=function(t,i){var d=b({bubbles:!1,cancelable:!1,detail:void 0},i);if(typeof window.CustomEvent=="function")return new CustomEvent(t,d);var f=document.createEvent("CustomEvent");return f.initCustomEvent(t,d.bubbles,d.cancelable,d.detail),f},_e=function o(t){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},d=window.Promise||function(n){function a(){}n(a,a)},f=function(n){var a=n.target;if(a===S){z();return}g.indexOf(a)!==-1&&F({target:a})},I=function(){if(!(E||!e.original)){var n=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0;Math.abs(q-n)>m.scrollOffset&&setTimeout(z,150)}},N=function(n){var a=n.key||n.keyCode;(a==="Escape"||a==="Esc"||a===27)&&z()},h=function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=n;if(n.background&&(S.style.background=n.background),n.container&&n.container instanceof Object&&(a.container=b({},m.container,n.container)),n.template){var s=P(n.template)?n.template:document.querySelector(n.template);a.template=s}return m=b({},m,a),g.forEach(function(l){l.dispatchEvent(L("medium-zoom:update",{detail:{zoom:u}}))}),u},j=function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return o(b({},m,n))},H=function(){for(var n=arguments.length,a=Array(n),s=0;s<n;s++)a[s]=arguments[s];var l=a.reduce(function(r,p){return[].concat(r,Y(p))},[]);return l.filter(function(r){return g.indexOf(r)===-1}).forEach(function(r){g.push(r),r.classList.add("medium-zoom-image")}),O.forEach(function(r){var p=r.type,v=r.listener,w=r.options;l.forEach(function(y){y.addEventListener(p,v,w)})}),u},V=function(){for(var n=arguments.length,a=Array(n),s=0;s<n;s++)a[s]=arguments[s];e.zoomed&&z();var l=a.length>0?a.reduce(function(r,p){return[].concat(r,Y(p))},[]):g;return l.forEach(function(r){r.classList.remove("medium-zoom-image"),r.dispatchEvent(L("medium-zoom:detach",{detail:{zoom:u}}))}),g=g.filter(function(r){return l.indexOf(r)===-1}),u},X=function(n,a){var s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return g.forEach(function(l){l.addEventListener("medium-zoom:"+n,a,s)}),O.push({type:"medium-zoom:"+n,listener:a,options:s}),u},K=function(n,a){var s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return g.forEach(function(l){l.removeEventListener("medium-zoom:"+n,a,s)}),O=O.filter(function(l){return!(l.type==="medium-zoom:"+n&&l.listener.toString()===a.toString())}),u},D=function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=n.target,s=function(){var r={width:document.documentElement.clientWidth,height:document.documentElement.clientHeight,left:0,top:0,right:0,bottom:0},p=void 0,v=void 0;if(m.container)if(m.container instanceof Object)r=b({},r,m.container),p=r.width-r.left-r.right-m.margin*2,v=r.height-r.top-r.bottom-m.margin*2;else{var w=P(m.container)?m.container:document.querySelector(m.container),y=w.getBoundingClientRect(),R=y.width,te=y.height,oe=y.left,ne=y.top;r=b({},r,{width:R,height:te,left:oe,top:ne})}p=p||r.width-m.margin*2,v=v||r.height-m.margin*2;var A=e.zoomedHd||e.original,ae=W(A)?p:A.naturalWidth||p,re=W(A)?v:A.naturalHeight||v,T=A.getBoundingClientRect(),ie=T.top,de=T.left,_=T.width,k=T.height,me=Math.min(Math.max(_,ae),p)/_,se=Math.min(Math.max(k,re),v)/k,M=Math.min(me,se),le=(-de+(p-_)/2+m.margin+r.left)/M,ue=(-ie+(v-k)/2+m.margin+r.top)/M,B="scale("+M+") translate3d("+le+"px, "+ue+"px, 0)";e.zoomed.style.transform=B,e.zoomedHd&&(e.zoomedHd.style.transform=B)};return new d(function(l){if(a&&g.indexOf(a)===-1){l(u);return}var r=function R(){E=!1,e.zoomed.removeEventListener("transitionend",R),e.original.dispatchEvent(L("medium-zoom:opened",{detail:{zoom:u}})),l(u)};if(e.zoomed){l(u);return}if(a)e.original=a;else if(g.length>0){var p=g;e.original=p[0]}else{l(u);return}if(e.original.dispatchEvent(L("medium-zoom:open",{detail:{zoom:u}})),q=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0,E=!0,e.zoomed=Re(e.original),document.body.appendChild(S),m.template){var v=P(m.template)?m.template:document.querySelector(m.template);e.template=document.createElement("div"),e.template.appendChild(v.content.cloneNode(!0)),document.body.appendChild(e.template)}if(e.original.parentElement&&e.original.parentElement.tagName==="PICTURE"&&e.original.currentSrc&&(e.zoomed.src=e.original.currentSrc),document.body.appendChild(e.zoomed),window.requestAnimationFrame(function(){document.body.classList.add("medium-zoom--opened")}),e.original.classList.add("medium-zoom-image--hidden"),e.zoomed.classList.add("medium-zoom-image--opened"),e.zoomed.addEventListener("click",z),e.zoomed.addEventListener("transitionend",r),e.original.getAttribute("data-zoom-src")){e.zoomedHd=e.zoomed.cloneNode(),e.zoomedHd.removeAttribute("srcset"),e.zoomedHd.removeAttribute("sizes"),e.zoomedHd.removeAttribute("loading"),e.zoomedHd.src=e.zoomed.getAttribute("data-zoom-src"),e.zoomedHd.onerror=function(){clearInterval(w),console.warn("Unable to reach the zoom image target "+e.zoomedHd.src),e.zoomedHd=null,s()};var w=setInterval(function(){e.zoomedHd.complete&&(clearInterval(w),e.zoomedHd.classList.add("medium-zoom-image--opened"),e.zoomedHd.addEventListener("click",z),document.body.appendChild(e.zoomedHd),s())},10)}else if(e.original.hasAttribute("srcset")){e.zoomedHd=e.zoomed.cloneNode(),e.zoomedHd.removeAttribute("sizes"),e.zoomedHd.removeAttribute("loading");var y=e.zoomedHd.addEventListener("load",function(){e.zoomedHd.removeEventListener("load",y),e.zoomedHd.classList.add("medium-zoom-image--opened"),e.zoomedHd.addEventListener("click",z),document.body.appendChild(e.zoomedHd),s()})}else s()})},z=function(){return new d(function(n){if(E||!e.original){n(u);return}var a=function s(){e.original.classList.remove("medium-zoom-image--hidden"),document.body.removeChild(e.zoomed),e.zoomedHd&&document.body.removeChild(e.zoomedHd),document.body.removeChild(S),e.zoomed.classList.remove("medium-zoom-image--opened"),e.template&&document.body.removeChild(e.template),E=!1,e.zoomed.removeEventListener("transitionend",s),e.original.dispatchEvent(L("medium-zoom:closed",{detail:{zoom:u}})),e.original=null,e.zoomed=null,e.zoomedHd=null,e.template=null,n(u)};E=!0,document.body.classList.remove("medium-zoom--opened"),e.zoomed.style.transform="",e.zoomedHd&&(e.zoomedHd.style.transform=""),e.template&&(e.template.style.transition="opacity 150ms",e.template.style.opacity=0),e.original.dispatchEvent(L("medium-zoom:close",{detail:{zoom:u}})),e.zoomed.addEventListener("transitionend",a)})},F=function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=n.target;return e.original?z():D({target:a})},J=function(){return m},Q=function(){return g},ee=function(){return e.original},g=[],O=[],E=!1,q=0,m=i,e={original:null,zoomed:null,zoomedHd:null,template:null};Object.prototype.toString.call(t)==="[object Object]"?m=t:(t||typeof t=="string")&&H(t),m=b({margin:0,background:"#fff",scrollOffset:40,container:null,template:null},m);var S=je(m.background);document.addEventListener("click",f),document.addEventListener("keyup",N),document.addEventListener("scroll",I),window.addEventListener("resize",z);var u={open:D,close:z,toggle:F,update:h,clone:j,attach:H,detach:V,on:X,off:K,getOptions:J,getImages:Q,getZoomedImage:ee};return u};function ke(o,t){t===void 0&&(t={});var i=t.insertAt;if(!(!o||typeof document>"u")){var d=document.head||document.getElementsByTagName("head")[0],f=document.createElement("style");f.type="text/css",i==="top"&&d.firstChild?d.insertBefore(f,d.firstChild):d.appendChild(f),f.styleSheet?f.styleSheet.cssText=o:f.appendChild(document.createTextNode(o))}}var Me=".medium-zoom-overlay{position:fixed;top:0;right:0;bottom:0;left:0;opacity:0;transition:opacity .3s;will-change:opacity}.medium-zoom--opened .medium-zoom-overlay{cursor:pointer;cursor:zoom-out;opacity:1}.medium-zoom-image{cursor:pointer;cursor:zoom-in;transition:transform .3s cubic-bezier(.2,0,.2,1)!important}.medium-zoom-image--hidden{visibility:hidden}.medium-zoom-image--opened{position:relative;cursor:pointer;cursor:zoom-out;will-change:transform}";ke(Me);const Ze=_e;const De={...U,enhanceApp(o){U.enhanceApp(o)},setup(){const o=ce(),t=()=>{Ze(".main img",{background:"var(--vp-c-bg)"})};$(()=>{t()}),pe(()=>o.path,()=>fe(()=>t()))}};function G(o){if(o.extends){const t=G(o.extends);return{...t,...o,async enhanceApp(i){t.enhanceApp&&await t.enhanceApp(i),o.enhanceApp&&await o.enhanceApp(i)}}}return o}const C=G(De),Fe=ge({name:"VitePressApp",setup(){const{site:o}=he();return $(()=>{ze(()=>{document.documentElement.lang=o.value.lang,document.documentElement.dir=o.value.dir})}),ye(),be(),Ee(),C.setup&&C.setup(),()=>we(C.Layout)}});async function qe(){const o=Ue(),t=Be();t.provide(Le,o);const i=Ce(o.route);return t.provide(Ae,i),t.component("Content",He),t.component("ClientOnly",Oe),Object.defineProperties(t.config.globalProperties,{$frontmatter:{get(){return i.frontmatter.value}},$params:{get(){return i.page.value.params}}}),C.enhanceApp&&await C.enhanceApp({app:t,router:o,siteData:Se}),{app:t,router:o,data:i}}function Be(){return Te(Fe)}function Ue(){let o=Z,t;return xe(i=>{let d=Pe(i);return d?(o&&(t=d),(o||t===d)&&(d=d.replace(/\.js$/,".lean.js")),Z&&(o=!1),Ie(()=>import(d),[])):null},C.NotFound)}Z&&qe().then(({app:o,router:t,data:i})=>{t.go().then(()=>{ve(t.route,i.site),o.mount("#app")})});export{qe as createApp};
