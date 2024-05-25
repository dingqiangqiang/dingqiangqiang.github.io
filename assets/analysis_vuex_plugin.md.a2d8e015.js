import{_ as s,c as n,o as a,V as l}from"./chunks/framework.ecec7af3.js";const u=JSON.parse('{"title":"插件","description":"","frontmatter":{},"headers":[],"relativePath":"analysis/vuex/plugin.md","filePath":"analysis/vuex/plugin.md","lastUpdated":1708780763000}'),p={name:"analysis/vuex/plugin.md"},o=l(`<h1 id="插件" tabindex="-1">插件 <a class="header-anchor" href="#插件" aria-label="Permalink to &quot;插件&quot;">​</a></h1><p>Vuex 除了提供的存取能力，还提供了一种插件能力，让我们可以监控 <code>store</code> 的变化过程来做一些事情。</p><p>Vuex 的 <code>store</code> 接受 <code>plugins</code> 选项，我们在实例化 <code>Store</code> 的时候可以传入插件，它是一个数组，然后在执行 <code>Store</code> 构造函数的时候，会执行这些插件：</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">plugins</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [],</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">strict</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">false</span></span>
<span class="line"><span style="color:#E1E4E8;">} </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> options</span></span>
<span class="line"><span style="color:#6A737D;">// apply plugins</span></span>
<span class="line"><span style="color:#E1E4E8;">plugins.</span><span style="color:#B392F0;">forEach</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">plugin</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">plugin</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">))</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>在我们实际项目中，我们用到的最多的就是 Vuex 内置的 <code>Logger</code> 插件，它能够帮我们追踪 <code>state</code> 变化，然后输出一些格式化日志。下面我们就来分析这个插件的实现。</p><h2 id="logger-插件" tabindex="-1"><code>Logger</code> 插件 <a class="header-anchor" href="#logger-插件" aria-label="Permalink to &quot;\`Logger\` 插件&quot;">​</a></h2><p><code>Logger</code> 插件的定义在 <code>src/plugins/logger.js</code> 中：</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">createLogger</span><span style="color:#E1E4E8;"> ({</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">collapsed</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">filter</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">mutation</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">stateBefore</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">stateAfter</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">transformer</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">state</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> state,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">mutationTransformer</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">mut</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> mut,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">logger</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> console</span></span>
<span class="line"><span style="color:#E1E4E8;">} </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {}) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">store</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> prevState </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">deepCopy</span><span style="color:#E1E4E8;">(store.state)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    store.</span><span style="color:#B392F0;">subscribe</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">mutation</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">state</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">typeof</span><span style="color:#E1E4E8;"> logger </span><span style="color:#F97583;">===</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;undefined&#39;</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">nextState</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">deepCopy</span><span style="color:#E1E4E8;">(state)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (</span><span style="color:#B392F0;">filter</span><span style="color:#E1E4E8;">(mutation, prevState, nextState)) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">time</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Date</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">formattedTime</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">\` @ \${</span><span style="color:#B392F0;">pad</span><span style="color:#9ECBFF;">(</span><span style="color:#E1E4E8;">time</span><span style="color:#9ECBFF;">.</span><span style="color:#B392F0;">getHours</span><span style="color:#9ECBFF;">(), </span><span style="color:#79B8FF;">2</span><span style="color:#9ECBFF;">)</span><span style="color:#9ECBFF;">}:\${</span><span style="color:#B392F0;">pad</span><span style="color:#9ECBFF;">(</span><span style="color:#E1E4E8;">time</span><span style="color:#9ECBFF;">.</span><span style="color:#B392F0;">getMinutes</span><span style="color:#9ECBFF;">(), </span><span style="color:#79B8FF;">2</span><span style="color:#9ECBFF;">)</span><span style="color:#9ECBFF;">}:\${</span><span style="color:#B392F0;">pad</span><span style="color:#9ECBFF;">(</span><span style="color:#E1E4E8;">time</span><span style="color:#9ECBFF;">.</span><span style="color:#B392F0;">getSeconds</span><span style="color:#9ECBFF;">(), </span><span style="color:#79B8FF;">2</span><span style="color:#9ECBFF;">)</span><span style="color:#9ECBFF;">}.\${</span><span style="color:#B392F0;">pad</span><span style="color:#9ECBFF;">(</span><span style="color:#E1E4E8;">time</span><span style="color:#9ECBFF;">.</span><span style="color:#B392F0;">getMilliseconds</span><span style="color:#9ECBFF;">(), </span><span style="color:#79B8FF;">3</span><span style="color:#9ECBFF;">)</span><span style="color:#9ECBFF;">}\`</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">formattedMutation</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">mutationTransformer</span><span style="color:#E1E4E8;">(mutation)</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">message</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">\`mutation \${</span><span style="color:#E1E4E8;">mutation</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">type</span><span style="color:#9ECBFF;">}\${</span><span style="color:#E1E4E8;">formattedTime</span><span style="color:#9ECBFF;">}\`</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">startMessage</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> collapsed</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#F97583;">?</span><span style="color:#E1E4E8;"> logger.groupCollapsed</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> logger.group</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// render</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">try</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">          startMessage.</span><span style="color:#B392F0;">call</span><span style="color:#E1E4E8;">(logger, message)</span></span>
<span class="line"><span style="color:#E1E4E8;">        } </span><span style="color:#F97583;">catch</span><span style="color:#E1E4E8;"> (e) {</span></span>
<span class="line"><span style="color:#E1E4E8;">          console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(message)</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        logger.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;%c prev state&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;color: #9E9E9E; font-weight: bold&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#B392F0;">transformer</span><span style="color:#E1E4E8;">(prevState))</span></span>
<span class="line"><span style="color:#E1E4E8;">        logger.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;%c mutation&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;color: #03A9F4; font-weight: bold&#39;</span><span style="color:#E1E4E8;">, formattedMutation)</span></span>
<span class="line"><span style="color:#E1E4E8;">        logger.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;%c next state&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;color: #4CAF50; font-weight: bold&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#B392F0;">transformer</span><span style="color:#E1E4E8;">(nextState))</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">try</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">          logger.</span><span style="color:#B392F0;">groupEnd</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">        } </span><span style="color:#F97583;">catch</span><span style="color:#E1E4E8;"> (e) {</span></span>
<span class="line"><span style="color:#E1E4E8;">          logger.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;—— log end ——&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">      prevState </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> nextState</span></span>
<span class="line"><span style="color:#E1E4E8;">    })</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">repeat</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">str</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">times</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Array</span><span style="color:#E1E4E8;">(times </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">)).</span><span style="color:#B392F0;">join</span><span style="color:#E1E4E8;">(str)</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">pad</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">num</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">maxLength</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">repeat</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;0&#39;</span><span style="color:#E1E4E8;">, maxLength </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> num.</span><span style="color:#B392F0;">toString</span><span style="color:#E1E4E8;">().</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> num</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br></div></div><p>插件函数接收的参数是 <code>store</code> 实例，它执行了 <code>store.subscribe</code> 方法，先来看一下 <code>subscribe</code> 的定义：</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#B392F0;">subscribe</span><span style="color:#E1E4E8;"> (fn) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">genericSubscribe</span><span style="color:#E1E4E8;">(fn, </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">._subscribers)</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">genericSubscribe</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">fn</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">subs</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (subs.</span><span style="color:#B392F0;">indexOf</span><span style="color:#E1E4E8;">(fn) </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    subs.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(fn)</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">i</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> subs.</span><span style="color:#B392F0;">indexOf</span><span style="color:#E1E4E8;">(fn)</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (i </span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      subs.</span><span style="color:#B392F0;">splice</span><span style="color:#E1E4E8;">(i, </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p><code>subscribe</code> 的逻辑很简单，就是往 <code>this._subscribers</code> 去添加一个函数，并返回一个 <code>unsubscribe</code> 的方法。</p><p>而我们在执行 <code>store.commit</code> 的方法的时候，会遍历 <code>this._subscribers</code> 执行它们对应的回调函数：</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#B392F0;">commit</span><span style="color:#E1E4E8;"> (_type, _payload, _options) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">type</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">payload</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">options</span></span>
<span class="line"><span style="color:#E1E4E8;">  } </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">unifyObjectStyle</span><span style="color:#E1E4E8;">(_type, _payload, _options)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">mutation</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> { type, payload }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// ...</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">._subscribers.</span><span style="color:#B392F0;">forEach</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">sub</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">sub</span><span style="color:#E1E4E8;">(mutation, </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.state))  </span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>回到我们的 <code>Logger</code> 函数，它相当于订阅了 <code>mutation</code> 的提交，它的 <code>prevState</code> 表示之前的 <code>state</code>，<code>nextState</code> 表示提交 <code>mutation</code> 后的 <code>state</code>，这两个 <code>state</code> 都需要执行 <code>deepCopy</code> 方法拷贝一份对象的副本，这样对他们的修改就不会影响原始 <code>store.state</code>。</p><p>接下来就构造一些格式化的消息，打印出一些时间消息 <code>message</code>， 之前的状态 <code>prevState</code>，对应的 <code>mutation</code> 操作 <code>formattedMutation</code> 以及下一个状态 <code>nextState</code>。</p><p>最后更新 <code>prevState = nextState</code>，为下一次提交 <code>mutation</code> 输出日志做准备。</p><h2 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to &quot;总结&quot;">​</a></h2><p>那么至此 Vuex 的插件分析就结束了，Vuex 从设计上支持了插件，让我们很好地从外部追踪 <code>store</code> 内部的变化，<code>Logger</code> 插件在我们的开发阶段也提供了很好地指引作用。当然我们也可以自己去实现 <code>Vuex</code> 的插件，来帮助我们实现一些特定的需求。</p>`,18),e=[o];function r(c,E,t,y,i,F){return a(),n("div",null,e)}const d=s(p,[["render",r]]);export{u as __pageData,d as default};
