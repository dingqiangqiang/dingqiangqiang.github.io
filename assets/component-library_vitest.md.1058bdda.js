import{_ as s,c as n,o as a,V as l}from"./chunks/framework.ecec7af3.js";const p="/docs/assets/vitest.b56cf00f.png",m=JSON.parse('{"title":"vitest 测试组件","description":"","frontmatter":{},"headers":[],"relativePath":"component-library/vitest.md","filePath":"component-library/vitest.md","lastUpdated":1679054845000}'),o={name:"component-library/vitest.md"},e=l(`<h1 id="vitest-测试组件" tabindex="-1">vitest 测试组件 <a class="header-anchor" href="#vitest-测试组件" aria-label="Permalink to &quot;vitest 测试组件&quot;">​</a></h1><p>在 <code>vitest</code> 之前，前端普遍的测试框架是 <code>Jest</code>。<code>Jest</code> 是由 <code>Facebook</code> 开源的一款测试框架，它本身集成了断言库、<code>mock</code>、快照测试、覆盖率报告等功能。</p><p>那为什么要选择 <code>vitest</code> 作为组件的测试框架呢? <a href="/docs/structure/vite/environment.html">vitest 的优势猛戳这里</a></p><h2 id="编写测试用例" tabindex="-1">编写测试用例 <a class="header-anchor" href="#编写测试用例" aria-label="Permalink to &quot;编写测试用例&quot;">​</a></h2><p>新建 <code>src/button/__tests__/Button.spec.ts</code></p><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> Button </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;../Button&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { shallowMount } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;@vue/test-utils&quot;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { describe, expect, test } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;vitest&quot;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">describe</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;Button&#39;</span><span style="color:#E1E4E8;">, () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> { </span><span style="color:#6A737D;">// 测试分组</span></span>
<span class="line"><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">test</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;测试组件挂载&quot;</span><span style="color:#E1E4E8;">, () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">wrapper</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">shallowMount</span><span style="color:#E1E4E8;">(Button, {</span></span>
<span class="line"><span style="color:#E1E4E8;">      slots: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        default: </span><span style="color:#9ECBFF;">&#39;Button&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    })</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">expect</span><span style="color:#E1E4E8;">(wrapper.</span><span style="color:#B392F0;">text</span><span style="color:#E1E4E8;">()).</span><span style="color:#B392F0;">toBe</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;Button&quot;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">  })</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><h3 id="测试按钮颜色" tabindex="-1">测试按钮颜色 <a class="header-anchor" href="#测试按钮颜色" aria-label="Permalink to &quot;测试按钮颜色&quot;">​</a></h3><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#B392F0;">describe</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;测试组件颜色&#39;</span><span style="color:#E1E4E8;">, () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">test</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;默认颜色&quot;</span><span style="color:#E1E4E8;">, () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">wrapper</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">shallowMount</span><span style="color:#E1E4E8;">(Button, {</span></span>
<span class="line"><span style="color:#E1E4E8;">      slots: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        default: </span><span style="color:#9ECBFF;">&#39;Button&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(wrapper.</span><span style="color:#B392F0;">classes</span><span style="color:#E1E4E8;">(), </span><span style="color:#9ECBFF;">&#39;打印 classes 集合&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">expect</span><span style="color:#E1E4E8;">(wrapper.</span><span style="color:#B392F0;">classes</span><span style="color:#E1E4E8;">().</span><span style="color:#B392F0;">map</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">v</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> v.</span><span style="color:#B392F0;">replace</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;</span><span style="color:#79B8FF;">\\n</span><span style="color:#9ECBFF;">&#39;</span><span style="color:#E1E4E8;">,</span><span style="color:#9ECBFF;">&#39;&#39;</span><span style="color:#E1E4E8;">)).</span><span style="color:#B392F0;">includes</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;bg-green-500&#39;</span><span style="color:#E1E4E8;">)).</span><span style="color:#B392F0;">toBe</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">  });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">test</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;红色&#39;</span><span style="color:#E1E4E8;">, () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">wrapper</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">shallowMount</span><span style="color:#E1E4E8;">(Button, {</span></span>
<span class="line"><span style="color:#E1E4E8;">      slots: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        default: </span><span style="color:#9ECBFF;">&#39;Button&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">      props: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        color: </span><span style="color:#9ECBFF;">&#39;red&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    })</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">expect</span><span style="color:#E1E4E8;">(wrapper.</span><span style="color:#B392F0;">classes</span><span style="color:#E1E4E8;">().</span><span style="color:#B392F0;">map</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">v</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> v.</span><span style="color:#B392F0;">replace</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;</span><span style="color:#79B8FF;">\\n</span><span style="color:#9ECBFF;">&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;&#39;</span><span style="color:#E1E4E8;">)).</span><span style="color:#B392F0;">includes</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;bg-red-500&#39;</span><span style="color:#E1E4E8;">)).</span><span style="color:#B392F0;">toBe</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">  })</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><p>测试结果如下图: <img src="`+p+'" alt="An image"></p>',9),t=[e];function r(c,E,y,i,b,F){return a(),n("div",null,t)}const d=s(o,[["render",r]]);export{m as __pageData,d as default};