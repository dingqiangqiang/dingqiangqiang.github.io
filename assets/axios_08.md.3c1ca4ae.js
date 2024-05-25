import{_ as s,c as n,o as a,V as l}from"./chunks/framework.ecec7af3.js";const u=JSON.parse('{"title":"错误处理","description":"","frontmatter":{},"headers":[],"relativePath":"axios/08.md","filePath":"axios/08.md","lastUpdated":1708780763000}'),e={name:"axios/08.md"},p=l(`<h1 id="错误处理" tabindex="-1">错误处理 <a class="header-anchor" href="#错误处理" aria-label="Permalink to &quot;错误处理&quot;">​</a></h1><h2 id="错误信息增强" tabindex="-1">错误信息增强 <a class="header-anchor" href="#错误信息增强" aria-label="Permalink to &quot;错误信息增强&quot;">​</a></h2><p>上一节我们在处理错误时，使用到了 <code>createError</code> 函数。它除了接收文本信息 <code>message</code> 外，还包括了请求对象配置 <code>config</code>，错误代码 <code>code</code>， <code>xhr</code> 对象实例 <code>request</code> 以及自定义响应对象 <code>response</code>。我们来分析一下它的实现:</p><h2 id="createerror" tabindex="-1">createError <a class="header-anchor" href="#createerror" aria-label="Permalink to &quot;createError&quot;">​</a></h2><p>入口文件: <code>lib/core/createError</code></p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#79B8FF;">module</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">exports</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">createError</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">message</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">config</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">code</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">request</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">response</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> error </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Error</span><span style="color:#E1E4E8;">(message);</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">enhanceError</span><span style="color:#E1E4E8;">(error, config, code, request, response);</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>1、首先实例化 <code>Error</code> 类得到 <code>error</code> 实例。</p><p>2、接着调用 <code>enhanceError</code>，并把 <code>error</code>、<code>config</code>、<code>code</code>、<code>request</code>、<code>response</code> 作为参数传入。</p><h2 id="enhanceerror" tabindex="-1">enhanceError <a class="header-anchor" href="#enhanceerror" aria-label="Permalink to &quot;enhanceError&quot;">​</a></h2><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#79B8FF;">module</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">exports</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">enhanceError</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">error</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">config</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">code</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">request</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">response</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  error.config </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> config;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (code) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    error.code </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> code;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  error.request </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> request;</span></span>
<span class="line"><span style="color:#E1E4E8;">  error.response </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> response;</span></span>
<span class="line"><span style="color:#E1E4E8;">  error.isAxiosError </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  error.</span><span style="color:#B392F0;">toJSON</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// Standard</span></span>
<span class="line"><span style="color:#E1E4E8;">      message: </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.message,</span></span>
<span class="line"><span style="color:#E1E4E8;">      name: </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.name,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// Microsoft</span></span>
<span class="line"><span style="color:#E1E4E8;">      description: </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.description,</span></span>
<span class="line"><span style="color:#E1E4E8;">      number: </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.number,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// Mozilla</span></span>
<span class="line"><span style="color:#E1E4E8;">      fileName: </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.fileName,</span></span>
<span class="line"><span style="color:#E1E4E8;">      lineNumber: </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.lineNumber,</span></span>
<span class="line"><span style="color:#E1E4E8;">      columnNumber: </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.columnNumber,</span></span>
<span class="line"><span style="color:#E1E4E8;">      stack: </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.stack,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// Axios</span></span>
<span class="line"><span style="color:#E1E4E8;">      config: </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.config,</span></span>
<span class="line"><span style="color:#E1E4E8;">      code: </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.code</span></span>
<span class="line"><span style="color:#E1E4E8;">    };</span></span>
<span class="line"><span style="color:#E1E4E8;">  };</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> error;</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br></div></div><p><code>enhanceError</code> 接收到用户传递的参数后，将这些参数依次赋值到 <code>error</code> 实例上，最后将 <code>isAxiosError</code> 置为 <code>true</code> 标识是 <code>axios</code> 错误，最后返回了 <code>error</code>。</p><h2 id="实际场景使用" tabindex="-1">实际场景使用 <a class="header-anchor" href="#实际场景使用" aria-label="Permalink to &quot;实际场景使用&quot;">​</a></h2><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#B392F0;">axios</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  method: </span><span style="color:#9ECBFF;">&#39;get&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  url: </span><span style="color:#9ECBFF;">&#39;/error/timeout&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  timeout: </span><span style="color:#79B8FF;">2000</span></span>
<span class="line"><span style="color:#E1E4E8;">}).</span><span style="color:#B392F0;">then</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">res</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(res)</span></span>
<span class="line"><span style="color:#E1E4E8;">}).</span><span style="color:#B392F0;">catch</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">e</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(e.message)</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(e.request)</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(e.code)</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// xhr 内部抛出超时错误</span></span>
<span class="line"><span style="color:#E1E4E8;">request.</span><span style="color:#B392F0;">onabort</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">handleAbort</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">...</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">reject</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">createError</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;Request aborted&#39;</span><span style="color:#E1E4E8;">, config, </span><span style="color:#9ECBFF;">&#39;ECONNABORTED&#39;</span><span style="color:#E1E4E8;">, request))</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">...</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><p>对于应用方来说，他们可以在 <code>catch</code> 中捕获到这些错误的详细信息，做进一步的处理。</p><h2 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to &quot;总结&quot;">​</a></h2><p>至此我们分析完了 <code>axios</code> 中对于错误的增强处理。到此我们已经分析完了 <code>axios</code> 的核心功能，下一节我们将来分析 <code>util</code> 工具函数。</p>`,16),o=[p];function r(c,E,t,i,y,b){return a(),n("div",null,o)}const F=s(e,[["render",r]]);export{u as __pageData,F as default};
