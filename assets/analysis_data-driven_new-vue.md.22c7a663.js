import{_ as s,c as n,o as a,V as p}from"./chunks/framework.ecec7af3.js";const u=JSON.parse('{"title":"new Vue 发生了什么","description":"","frontmatter":{},"headers":[],"relativePath":"analysis/data-driven/new-vue.md","filePath":"analysis/data-driven/new-vue.md","lastUpdated":1708780763000}'),l={name:"analysis/data-driven/new-vue.md"},e=p(`<h1 id="new-vue-发生了什么" tabindex="-1">new Vue 发生了什么 <a class="header-anchor" href="#new-vue-发生了什么" aria-label="Permalink to &quot;new Vue 发生了什么&quot;">​</a></h1><p>从入口代码开始分析，我们先来分析 <code>new Vue</code> 背后发生了哪些事情。我们都知道，<code>new</code> 关键字在 Javascript 语言中代表实例化是一个对象，而 <code>Vue</code> 实际上是一个类，类在 Javascript 中是用 Function 来实现的，来看一下源码，在<code>src/core/instance/index.js</code> 中。</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Vue</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">options</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (p<wbr>rocess.env.</span><span style="color:#79B8FF;">NODE_ENV</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">!==</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;production&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&amp;&amp;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">instanceof</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Vue</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">  ) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">warn</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;Vue is a constructor and should be called with the \`new\` keyword&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">_init</span><span style="color:#E1E4E8;">(options)</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>可以看到 <code>Vue</code> 只能通过 new 关键字初始化，然后会调用 <code>this._init</code> 方法， 该方法在 <code>src/core/instance/init.js</code> 中定义。</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#79B8FF;">Vue</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">prototype</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">_init</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">options</span><span style="color:#F97583;">?:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Object</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">vm</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Component</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">this</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// a uid</span></span>
<span class="line"><span style="color:#E1E4E8;">  vm._uid </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> uid</span><span style="color:#F97583;">++</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> startTag, endTag</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">/* istanbul ignore if */</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (p<wbr>rocess.env.</span><span style="color:#79B8FF;">NODE_ENV</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">!==</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;production&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> config.performance </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> mark) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    startTag </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">\`vue-perf-start:\${</span><span style="color:#E1E4E8;">vm</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">_uid</span><span style="color:#9ECBFF;">}\`</span></span>
<span class="line"><span style="color:#E1E4E8;">    endTag </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">\`vue-perf-end:\${</span><span style="color:#E1E4E8;">vm</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">_uid</span><span style="color:#9ECBFF;">}\`</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">mark</span><span style="color:#E1E4E8;">(startTag)</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// a flag to avoid this being observed</span></span>
<span class="line"><span style="color:#E1E4E8;">  vm._isVue </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">true</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// merge options</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (options </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> options._isComponent) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// optimize internal component instantiation</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// since dynamic options merging is pretty slow, and none of the</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// internal component options needs special treatment.</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">initInternalComponent</span><span style="color:#E1E4E8;">(vm, options)</span></span>
<span class="line"><span style="color:#E1E4E8;">  } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    vm.$options </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">mergeOptions</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">resolveConstructorOptions</span><span style="color:#E1E4E8;">(vm.</span><span style="color:#79B8FF;">constructor</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">      options </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> {},</span></span>
<span class="line"><span style="color:#E1E4E8;">      vm</span></span>
<span class="line"><span style="color:#E1E4E8;">    )</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">/* istanbul ignore else */</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (p<wbr>rocess.env.</span><span style="color:#79B8FF;">NODE_ENV</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">!==</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;production&#39;</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">initProxy</span><span style="color:#E1E4E8;">(vm)</span></span>
<span class="line"><span style="color:#E1E4E8;">  } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    vm._renderProxy </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> vm</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// expose real self</span></span>
<span class="line"><span style="color:#E1E4E8;">  vm._self </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> vm</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">initLifecycle</span><span style="color:#E1E4E8;">(vm)</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">initEvents</span><span style="color:#E1E4E8;">(vm)</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">initRender</span><span style="color:#E1E4E8;">(vm)</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">callHook</span><span style="color:#E1E4E8;">(vm, </span><span style="color:#9ECBFF;">&#39;beforeCreate&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">initInjections</span><span style="color:#E1E4E8;">(vm) </span><span style="color:#6A737D;">// resolve injections before data/props</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">initState</span><span style="color:#E1E4E8;">(vm)</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">initProvide</span><span style="color:#E1E4E8;">(vm) </span><span style="color:#6A737D;">// resolve provide after data/props</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">callHook</span><span style="color:#E1E4E8;">(vm, </span><span style="color:#9ECBFF;">&#39;created&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">/* istanbul ignore if */</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (p<wbr>rocess.env.</span><span style="color:#79B8FF;">NODE_ENV</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">!==</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;production&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> config.performance </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> mark) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    vm._name </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">formatComponentName</span><span style="color:#E1E4E8;">(vm, </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">mark</span><span style="color:#E1E4E8;">(endTag)</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">measure</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`vue \${</span><span style="color:#E1E4E8;">vm</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">_name</span><span style="color:#9ECBFF;">} init\`</span><span style="color:#E1E4E8;">, startTag, endTag)</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (vm.$options.el) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    vm.</span><span style="color:#B392F0;">$mount</span><span style="color:#E1E4E8;">(vm.$options.el)</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br></div></div><p>Vue 初始化主要就干了几件事情，合并配置，初始化生命周期，初始化事件中心，初始化渲染，初始化 data、props、computed、watcher 等等。</p><h2 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to &quot;总结&quot;">​</a></h2><p>Vue 的初始化逻辑写的非常清楚，把不同的功能逻辑拆成一些单独的函数执行，让主线逻辑一目了然，这样的编程思想是非常值得借鉴和学习的。</p><p>由于我们这一章的目标是弄清楚模板和数据如何渲染成最终的 DOM，所以各种初始化逻辑我们先不看。在初始化的最后，检测到如果有 <code>el</code> 属性，则调用 <code>vm.$mount</code> 方法挂载 <code>vm</code>，挂载的目标就是把模板渲染成最终的 DOM，那么接下来我们来分析 Vue 的挂载过程。</p>`,9),o=[e];function r(c,E,t,i,y,b){return a(),n("div",null,o)}const F=s(l,[["render",r]]);export{u as __pageData,F as default};