import{_ as s,c as a,o as n,V as l}from"./chunks/framework.ecec7af3.js";const u=JSON.parse('{"title":"语法优化","description":"","frontmatter":{},"headers":[],"relativePath":"dailyNote/syntax-optimize.md","filePath":"dailyNote/syntax-optimize.md","lastUpdated":1713352951000}'),p={name:"dailyNote/syntax-optimize.md"},o=l(`<h1 id="语法优化" tabindex="-1">语法优化 <a class="header-anchor" href="#语法优化" aria-label="Permalink to &quot;语法优化&quot;">​</a></h1><h2 id="三元表达式" tabindex="-1">三元表达式 <a class="header-anchor" href="#三元表达式" aria-label="Permalink to &quot;三元表达式&quot;">​</a></h2><ul><li>优化前</li></ul><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">a</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (flag) { </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> xx }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">null</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><ul><li>优化后</li></ul><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">a</span><span style="color:#E1E4E8;">() { </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> flag </span><span style="color:#F97583;">?</span><span style="color:#E1E4E8;"> xx </span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;"> }</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="可选链操作符" tabindex="-1">可选链操作符 <a class="header-anchor" href="#可选链操作符" aria-label="Permalink to &quot;可选链操作符&quot;">​</a></h2><blockquote><p>前提: 下述代码中的 data 可能为 null</p></blockquote><ul><li>优化前</li></ul><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">c</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> data </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> data.a </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> data.a.b </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> data.a.b.c</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul><li>使用可选链操作符优化</li></ul><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">c</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> data?.a?.b?.c</span></span>
<span class="line"><span style="color:#6A737D;">// 缺点: 会使编译后的代码体积变大(辨析结果如下)</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">c</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (_data </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> data) </span><span style="color:#F97583;">===</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> _data </span><span style="color:#F97583;">===</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">void</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> (_data </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> _data.a) </span><span style="color:#F97583;">===</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> _data </span><span style="color:#F97583;">===</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">void</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> (_data </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> _data.b) </span><span style="color:#F97583;">===</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> _data </span><span style="color:#F97583;">===</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">void</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">?</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">void</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> _data.c;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ul><li>使用变量保存每层数据</li></ul><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> i;</span></span>
<span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> d </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> data.a;</span></span>
<span class="line"><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (d </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> (i </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> d.b) </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> (i </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> i.c)) { console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(i) }</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="扩展运算符" tabindex="-1">扩展运算符 <a class="header-anchor" href="#扩展运算符" aria-label="Permalink to &quot;扩展运算符&quot;">​</a></h2><ul><li>根据判断条件动态声明函数</li></ul><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#B392F0;">methods</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;">(flag </span><span style="color:#F97583;">?</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">async</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">a</span><span style="color:#E1E4E8;">() {}</span></span>
<span class="line"><span style="color:#E1E4E8;">  } </span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> {})</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#B392F0;">created</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (flag) { </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">a</span><span style="color:#E1E4E8;">() }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="object-assign" tabindex="-1">Object.assign <a class="header-anchor" href="#object-assign" aria-label="Permalink to &quot;Object.assign&quot;">​</a></h2><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">p</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> Object.</span><span style="color:#B392F0;">assign</span><span style="color:#E1E4E8;">({ a: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;"> }, {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;">flag </span><span style="color:#F97583;">?</span><span style="color:#E1E4E8;"> { b: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;"> } </span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> {}</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="优化代码量" tabindex="-1">优化代码量 <a class="header-anchor" href="#优化代码量" aria-label="Permalink to &quot;优化代码量&quot;">​</a></h2><ul><li>优化前</li></ul><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.selectedPoint </span><span style="color:#F97583;">&amp;&amp;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.selectedPoint.__response </span><span style="color:#F97583;">&amp;&amp;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.selectedPoint.__response.card_info </span><span style="color:#F97583;">&amp;&amp;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.selectedPoint.__response.card_info.bottom_card_info </span><span style="color:#F97583;">&amp;&amp;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.selectedPoint.__response.card_info.bottom_card_info.card_top) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    name </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.selectedPoint.__response.card_info.bottom_card_info.card_top.content_1 </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">    desc </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.selectedPoint.__response.card_info.bottom_card_info.card_top.content_2 </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><ul><li>优化后</li></ul><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> cardTop</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">sp</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.selectedPoint</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (sp </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> sp.__response </span><span style="color:#F97583;">&amp;&amp;</span></span>
<span class="line"><span style="color:#E1E4E8;">  sp.__response.minibus_card_info </span><span style="color:#F97583;">&amp;&amp;</span></span>
<span class="line"><span style="color:#E1E4E8;">  sp.__response.minibus_card_info.bottom_card_info </span><span style="color:#F97583;">&amp;&amp;</span></span>
<span class="line"><span style="color:#E1E4E8;">  (cardTop </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> sp.__response.minibus_card_info.bottom_card_info.card_top)) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  name </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> cardTop.content_1 </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">  desc </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> cardTop.content_2 </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div>`,24),e=[o];function r(c,t,E,i,y,d){return n(),a("div",null,e)}const F=s(p,[["render",r]]);export{u as __pageData,F as default};
