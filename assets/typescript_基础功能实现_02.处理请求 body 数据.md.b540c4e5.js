import{_ as s,c as n,o as a,V as p}from"./chunks/framework.ecec7af3.js";const u=JSON.parse('{"title":"处理请求 body 数据","description":"","frontmatter":{"title":"处理请求 body 数据","date":"2020-01-05T10:56:02.000Z","permalink":"/pages/887cd0918e2543d8","author":"HuangYi","categories":["《TypeScript 从零实现 axios》","ts-axios 基础功能实现"],"tags":["TypeScript"]},"headers":[],"relativePath":"typescript/基础功能实现/02.处理请求 body 数据.md","filePath":"typescript/基础功能实现/02.处理请求 body 数据.md","lastUpdated":1708867608000}'),e={name:"typescript/基础功能实现/02.处理请求 body 数据.md"},l=p(`<h1 id="处理请求-body-数据" tabindex="-1">处理请求 body 数据 <a class="header-anchor" href="#处理请求-body-数据" aria-label="Permalink to &quot;处理请求 body 数据&quot;">​</a></h1><h2 id="需求分析" tabindex="-1">需求分析 <a class="header-anchor" href="#需求分析" aria-label="Permalink to &quot;需求分析&quot;">​</a></h2><p>我们通过执行 <code>XMLHttpRequest</code> 对象实例的 <code>send</code> 方法来发送请求，并通过该方法的参数设置请求 <code>body</code> 数据，我们可以去 <a href="https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/send" target="_blank" rel="noreferrer">mdn</a> 查阅该方法支持的参数类型。</p><p>我们发现 <code>send</code> 方法的参数支持 <code>Document</code> 和 <code>BodyInit</code> 类型，<code>BodyInit</code> 包括了 <code>Blob</code>, <code>BufferSource</code>, <code>FormData</code>, <code>URLSearchParams</code>, <code>ReadableStream</code>、<code>USVString</code>，当没有数据的时候，我们还可以传入 <code>null</code>。</p><p>但是我们最常用的场景还是传一个普通对象给服务端，例如：</p><div class="language-typescript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#B392F0;">axios</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  method: </span><span style="color:#9ECBFF;">&#39;post&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  url: </span><span style="color:#9ECBFF;">&#39;/base/post&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  data: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    a: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    b: </span><span style="color:#79B8FF;">2</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>这个时候 <code>data</code>是不能直接传给 <code>send</code> 函数的，我们需要把它转换成 JSON 字符串。</p><h2 id="transformrequest-函数实现" tabindex="-1">transformRequest 函数实现 <a class="header-anchor" href="#transformrequest-函数实现" aria-label="Permalink to &quot;transformRequest 函数实现&quot;">​</a></h2><p>根据需求分析，我们要实现一个工具函数，对 request 中的 <code>data</code> 做一层转换。我们在 <code>helpers</code> 目录新建 <code>data.ts</code> 文件。</p><p><code>helpers/data.ts</code>：</p><div class="language-typescript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { isPlainObject } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;./util&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">transformRequest</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">data</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">any</span><span style="color:#E1E4E8;">)</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">any</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (</span><span style="color:#B392F0;">isPlainObject</span><span style="color:#E1E4E8;">(data)) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">JSON</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">stringify</span><span style="color:#E1E4E8;">(data)</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> data</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p><code>helpers/util.js</code>：</p><div class="language-typescript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">isPlainObject</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">val</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">any</span><span style="color:#E1E4E8;">)</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">val</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">is</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Object</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> toString.</span><span style="color:#B392F0;">call</span><span style="color:#E1E4E8;">(val) </span><span style="color:#F97583;">===</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;[object Object]&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>这里为什么要使用 <code>isPlainObject</code> 函数判断，而不用之前的 <code>isObject</code> 函数呢，因为 <code>isObject</code> 的判断方式，对于 <code>FormData</code>、<code>ArrayBuffer</code> 这些类型，<code>isObject</code> 判断也为 <code>true</code>，但是这些类型的数据我们是不需要做处理的，而 <code>isPlainObject</code> 的判断方式，只有我们定义的普通 <code>JSON</code> 对象才能满足。</p><p><code>helpers/url.ts</code>：</p><div class="language-typescript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (</span><span style="color:#B392F0;">isDate</span><span style="color:#E1E4E8;">(val)) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  val </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> val.</span><span style="color:#B392F0;">toISOString</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">} </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (</span><span style="color:#B392F0;">isPlainObject</span><span style="color:#E1E4E8;">(val)) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  val </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">JSON</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">stringify</span><span style="color:#E1E4E8;">(val)</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>对于上节课我们对请求参数值的判断，我们也应该用 <code>isPlainObject</code> 才更加合理。</p><p><code>helpers/util.js</code></p><div class="language-typescript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#6A737D;">// export function isObject (val: any): val is Object {</span></span>
<span class="line"><span style="color:#6A737D;">//   return val !== null &amp;&amp; typeof val === &#39;object&#39;</span></span>
<span class="line"><span style="color:#6A737D;">// }</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>既然现在 <code>isObject</code> 方法不再使用，我们先将其注释。</p><h2 id="实现请求-body-处理逻辑" tabindex="-1">实现请求 body 处理逻辑 <a class="header-anchor" href="#实现请求-body-处理逻辑" aria-label="Permalink to &quot;实现请求 body 处理逻辑&quot;">​</a></h2><p><code>index.ts</code>：</p><div class="language-typescript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { transformRequest } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;./helpers/data&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#9ECBFF;">\`\`\`typescript</span></span>
<span class="line"><span style="color:#9ECBFF;">function processConfig (config: AxiosRequestConfig): void {</span></span>
<span class="line"><span style="color:#9ECBFF;">  config.url = transformURL(config)</span></span>
<span class="line"><span style="color:#9ECBFF;">  config.data = transformRequestData(config)</span></span>
<span class="line"><span style="color:#9ECBFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#9ECBFF;">function transformRequestData (config: AxiosRequestConfig): any {</span></span>
<span class="line"><span style="color:#9ECBFF;">  return transformRequest(config.data)</span></span>
<span class="line"><span style="color:#9ECBFF;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>我们定义了 <code>transformRequestData</code> 函数，去转换请求 <code>body</code> 的数据，内部调用了我们刚刚实现的的 <code>transformRequest</code> 方法。</p><p>然后我们在 <code>processConfig</code> 内部添加了这段逻辑，在处理完 url 后接着对 <code>config</code> 中的 <code>data</code> 做处理。</p><h2 id="编写-demo" tabindex="-1">编写 demo <a class="header-anchor" href="#编写-demo" aria-label="Permalink to &quot;编写 demo&quot;">​</a></h2><div class="language-typescript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#B392F0;">axios</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  method: </span><span style="color:#9ECBFF;">&#39;post&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  url: </span><span style="color:#9ECBFF;">&#39;/base/post&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  data: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    a: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    b: </span><span style="color:#79B8FF;">2</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">arr</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Int32Array</span><span style="color:#E1E4E8;">([</span><span style="color:#79B8FF;">21</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">31</span><span style="color:#E1E4E8;">])</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">axios</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  method: </span><span style="color:#9ECBFF;">&#39;post&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  url: </span><span style="color:#9ECBFF;">&#39;/base/buffer&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  data: arr</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><p>我们在 <code>examples/base/app.ts</code> 添加 2 段代码，第一个 post 请求的 <code>data</code> 是一个普通对象，第二个请求的 <code>data</code> 是一个 <code>Int32Array</code> 类型的数据，它是可以直接传给 <code>XMLHttpRequest</code> 对象的 <code>send</code> 方法的。</p><div class="language-javascript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#E1E4E8;">router.</span><span style="color:#B392F0;">post</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;/base/post&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">req</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">res</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  res.</span><span style="color:#B392F0;">json</span><span style="color:#E1E4E8;">(req.body)</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">router.</span><span style="color:#B392F0;">post</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;/base/buffer&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">req</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">res</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> msg </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> []</span></span>
<span class="line"><span style="color:#E1E4E8;">  req.</span><span style="color:#B392F0;">on</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;data&#39;</span><span style="color:#E1E4E8;">, (</span><span style="color:#FFAB70;">chunk</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (chunk) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      msg.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(chunk)</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  })</span></span>
<span class="line"><span style="color:#E1E4E8;">  req.</span><span style="color:#B392F0;">on</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;end&#39;</span><span style="color:#E1E4E8;">, () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> buf </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> Buffer.</span><span style="color:#B392F0;">concat</span><span style="color:#E1E4E8;">(msg)</span></span>
<span class="line"><span style="color:#E1E4E8;">    res.</span><span style="color:#B392F0;">json</span><span style="color:#E1E4E8;">(buf.</span><span style="color:#B392F0;">toJSON</span><span style="color:#E1E4E8;">())</span></span>
<span class="line"><span style="color:#E1E4E8;">  })</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><p>我们接着在 <code>examples/server.js</code> 中添加 2 个路由，分别针对这俩种请求，返回请求传入的数据。</p><p>然后我们打开浏览器运行 demo，看一下结果，我们发现 <code>/base/buffer</code> 的请求是可以拿到数据，但是 <code>base/post</code> 请求的 response 里却返回的是一个空对象，这是什么原因呢？</p><p>实际上是因为我们虽然执行 <code>send</code> 方法的时候把普通对象 <code>data</code> 转换成一个 <code>JSON</code> 字符串，但是我们请求<code>header</code> 的 <code>Content-Type</code> 是 <code>text/plain;charset=UTF-8</code>，导致了服务端接受到请求并不能正确解析请求 <code>body</code> 的数据。</p><p>知道这个问题后，下面一节课我们来实现对请求 <code>header</code> 的处理。</p>`,33),o=[l];function c(r,t,E,i,d,y){return a(),n("div",null,o)}const m=s(e,[["render",c]]);export{u as __pageData,m as default};
