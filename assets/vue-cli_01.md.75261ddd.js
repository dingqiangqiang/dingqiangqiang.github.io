import{_ as s,c as n,o as a,V as l}from"./chunks/framework.ecec7af3.js";const p="/docs/assets/command.0eba0805.png",m=JSON.parse('{"title":"vue-cli 技术揭秘","description":"","frontmatter":{},"headers":[],"relativePath":"vue-cli/01.md","filePath":"vue-cli/01.md","lastUpdated":1708780763000}'),e={name:"vue-cli/01.md"},o=l(`<h1 id="vue-cli-技术揭秘" tabindex="-1">vue-cli 技术揭秘 <a class="header-anchor" href="#vue-cli-技术揭秘" aria-label="Permalink to &quot;vue-cli 技术揭秘&quot;">​</a></h1><h2 id="介绍" tabindex="-1">介绍 <a class="header-anchor" href="#介绍" aria-label="Permalink to &quot;介绍&quot;">​</a></h2><p><a href="https://cli.vuejs.org/zh/" target="_blank" rel="noreferrer">Vue CLI</a> 是一个基于 Vue.js 进行快速开发的完整系统，致力于将 Vue 生态中的工具基础标准化。它确保了各种构建工具能够基于智能的默认配置即可平稳衔接，这样你可以专注在撰写应用上，而不必花好几天去纠结配置的问题。</p><h2 id="源码目录" tabindex="-1">源码目录 <a class="header-anchor" href="#源码目录" aria-label="Permalink to &quot;源码目录&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">注意</p><ul><li>本次分析的版本号为: 2.9.6。</li><li><a href="https://github.com/vuejs/vue-cli/tree/v2" target="_blank" rel="noreferrer">2.9.6 源码</a></li><li><a href="https://github.com/vue-templates" target="_blank" rel="noreferrer">GitHub模板链接</a></li><li><a href="https://vuejs-templates.github.io/webpack/" target="_blank" rel="noreferrer">vuejs-templates (webpack) </a></li></ul></div><p>vue-cli 的源码目录结构如下：</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark"><code><span class="line"><span style="color:#e1e4e8;">vue-cli</span></span>
<span class="line"><span style="color:#e1e4e8;">├── bin            # 运行命令</span></span>
<span class="line"><span style="color:#e1e4e8;">├── lib            # 核心代码</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="入口" tabindex="-1">入口 <a class="header-anchor" href="#入口" aria-label="Permalink to &quot;入口&quot;">​</a></h2><p>在 <code>package.json</code> 中有 <code>bin</code> 配置，代码如下：</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#9ECBFF;">&quot;bin&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">&quot;vue&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;bin/vue&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">&quot;vue-init&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;bin/vue-init&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">&quot;vue-list&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;bin/vue-list&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p><code>bin/vue.js</code> 文件指定了版本号 <code>version</code>，又注册了如下几条命令，比如 <code>init</code>、<code>list</code>、<code>build</code>、<code>create</code> 等。这样当我们执行 <code>vue init</code> 时，此时会执行 <code>bin/vue-init</code>。执行 <code>vue list</code> 时，此时会执行 <code>bin/vue-list</code>.</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#6A737D;">#!/usr/bin/env node</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">program</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;commander&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">program</span></span>
<span class="line"><span style="color:#E1E4E8;">  .</span><span style="color:#B392F0;">version</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;../package&#39;</span><span style="color:#E1E4E8;">).version)</span></span>
<span class="line"><span style="color:#E1E4E8;">  .</span><span style="color:#B392F0;">usage</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;&lt;command&gt; [options]&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">  .</span><span style="color:#B392F0;">command</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;init&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;generate a new project from a template&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">  .</span><span style="color:#B392F0;">command</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;list&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;list available official templates&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">  .</span><span style="color:#B392F0;">command</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;build&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;prototype a new project&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">  .</span><span style="color:#B392F0;">command</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;create&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;(for v3 warning only)&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">program.</span><span style="color:#B392F0;">parse</span><span style="color:#E1E4E8;">(process.argv)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p><img src="`+p+`" alt="An image"></p><h2 id="init" tabindex="-1">init <a class="header-anchor" href="#init" aria-label="Permalink to &quot;init&quot;">​</a></h2><p><code>bin/vue-init</code> 注册了如下几条命令。然后执行 <code>help</code> 函数，当我们执行 <code>vue init</code> 不传参数时，会执行 <code>program.help</code> 打印提示信息。</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#E1E4E8;">program</span></span>
<span class="line"><span style="color:#E1E4E8;">  .</span><span style="color:#B392F0;">usage</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;&lt;template-name&gt; [project-name]&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">  .</span><span style="color:#B392F0;">option</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;-c, --clone&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;use git clone&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">  .</span><span style="color:#B392F0;">option</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;--offline&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;use cached template&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">program.</span><span style="color:#B392F0;">on</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;--help&#39;</span><span style="color:#E1E4E8;">, () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;  Examples:&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(chalk.</span><span style="color:#B392F0;">gray</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;    # create a new project with an official template&#39;</span><span style="color:#E1E4E8;">))</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;    $ vue init webpack my-project&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(chalk.</span><span style="color:#B392F0;">gray</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;    # create a new project straight from a github template&#39;</span><span style="color:#E1E4E8;">))</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;    $ vue init username/repo my-project&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">help</span><span style="color:#E1E4E8;"> () {</span></span>
<span class="line"><span style="color:#E1E4E8;">  program.</span><span style="color:#B392F0;">parse</span><span style="color:#E1E4E8;">(process.argv)</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (program.args.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> program.</span><span style="color:#B392F0;">help</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#B392F0;">help</span><span style="color:#E1E4E8;">()</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><ul><li>1、<strong>解析命令行参数获取配置</strong></li></ul><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">home</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;user-home&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> template </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> program.args[</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">] </span><span style="color:#6A737D;">// 模板类型: 如 webpack</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">rawName</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> program.args[</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">] </span><span style="color:#6A737D;">// 自定义项目名称</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">inPlace</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">rawName </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> rawName </span><span style="color:#F97583;">===</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;.&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;">// rawName存在或者为“.”的时候，视为在当前目录下构建</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// path.relative（）:根据当前工作目录返回相对路径 </span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">name</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> inPlace </span><span style="color:#F97583;">?</span><span style="color:#E1E4E8;"> path.</span><span style="color:#B392F0;">relative</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;../&#39;</span><span style="color:#E1E4E8;">, process.</span><span style="color:#B392F0;">cwd</span><span style="color:#E1E4E8;">()) </span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> rawName</span></span>
<span class="line"><span style="color:#6A737D;">// 合并路径</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">to</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> path.</span><span style="color:#B392F0;">resolve</span><span style="color:#E1E4E8;">(rawName </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;.&#39;</span><span style="color:#E1E4E8;">) </span><span style="color:#6A737D;">// /Users/didi/Desktop/vue-cli/demo</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">clone</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> program.clone </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;">// 检查参数是否clone</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">tmp</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> path.</span><span style="color:#B392F0;">join</span><span style="color:#E1E4E8;">(home, </span><span style="color:#9ECBFF;">&#39;.vue-templates&#39;</span><span style="color:#E1E4E8;">, template.</span><span style="color:#B392F0;">replace</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">/</span><span style="color:#79B8FF;">[</span><span style="color:#85E89D;font-weight:bold;">\\/</span><span style="color:#79B8FF;">:]</span><span style="color:#9ECBFF;">/</span><span style="color:#F97583;">g</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;-&#39;</span><span style="color:#E1E4E8;">)) </span><span style="color:#6A737D;">// tmp: /Users/didi/.vue-templates/webpack</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">process.</span><span style="color:#B392F0;">on</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;exit&#39;</span><span style="color:#E1E4E8;">, () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><p>当我们执行 <code>vue init webpack projectname</code> 时，program.args[0] 是 <code>webpack</code>，program.args[1] 是 <code>projectname</code>。 同时我们也可以不传项目名称，比如: <code>vue init webpack</code> 或者 <code>vue init webpack .</code></p><p>以上几个变量的含义: <code>name</code> 是创建的项目名， <code>to</code> 是该项目在系统中的绝对路径，<code>tmp</code> 是 <code>.vue-templates/webpack</code> 在系统中的路径。</p><ul><li>2、<strong>判断项目是否存在</strong></li></ul><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">inquirer</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;inquirer&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">exists</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;fs&#39;</span><span style="color:#E1E4E8;">).existsSync</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (inPlace </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">exists</span><span style="color:#E1E4E8;">(to)) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  inquirer.</span><span style="color:#B392F0;">prompt</span><span style="color:#E1E4E8;">([{</span></span>
<span class="line"><span style="color:#E1E4E8;">    type: </span><span style="color:#9ECBFF;">&#39;confirm&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    message: inPlace</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">?</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;Generate project in current directory?&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;">// 是否在当前目录下构建项目</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;Target directory exists. Continue?&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 构建目录已存在,是否继续</span></span>
<span class="line"><span style="color:#E1E4E8;">    name: </span><span style="color:#9ECBFF;">&#39;ok&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }]).</span><span style="color:#B392F0;">then</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">answers</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (answers.ok) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">run</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }).</span><span style="color:#B392F0;">catch</span><span style="color:#E1E4E8;">(logger.fatal)</span></span>
<span class="line"><span style="color:#E1E4E8;">} </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">run</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><p>如果项目名在当前目录下已经存在了，此时会弹出对应的提示框，如果用户选择了 <code>y</code>，接着会执行 <code>run</code> 函数。</p><ul><li>3、 <strong>检查、下载、生成项目</strong></li></ul><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">run</span><span style="color:#E1E4E8;"> () {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (</span><span style="color:#B392F0;">isLocalPath</span><span style="color:#E1E4E8;">(template)) { </span><span style="color:#6A737D;">// 本地模板</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">templatePath</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">getTemplatePath</span><span style="color:#E1E4E8;">(template) </span><span style="color:#6A737D;">// 获取绝对路径</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (</span><span style="color:#B392F0;">exists</span><span style="color:#E1E4E8;">(templatePath)) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">generate</span><span style="color:#E1E4E8;">(name, templatePath, to, </span><span style="color:#FFAB70;">err</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (err) logger.</span><span style="color:#B392F0;">fatal</span><span style="color:#E1E4E8;">(err)</span></span>
<span class="line"><span style="color:#E1E4E8;">        console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">        logger.</span><span style="color:#B392F0;">success</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;Generated &quot;%s&quot;.&#39;</span><span style="color:#E1E4E8;">, name)</span></span>
<span class="line"><span style="color:#E1E4E8;">      })</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      logger.</span><span style="color:#B392F0;">fatal</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;Local template &quot;%s&quot; not found.&#39;</span><span style="color:#E1E4E8;">, template)</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">...</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">officialTemplate</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;vuejs-templates/&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> template </span><span style="color:#6A737D;">// 下载官方模板</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">downloadAndGenerate</span><span style="color:#E1E4E8;">(officialTemplate)</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 对应辅助函数</span></span>
<span class="line"><span style="color:#79B8FF;">module</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">exports</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">isLocalPath</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">templatePath</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#DBEDFF;"> </span><span style="color:#9ECBFF;">/</span><span style="color:#F97583;">^</span><span style="color:#79B8FF;">[./]</span><span style="color:#F97583;">|</span><span style="color:#DBEDFF;">(</span><span style="color:#F97583;">^</span><span style="color:#79B8FF;">[a-zA-Z]</span><span style="color:#DBEDFF;">:)</span><span style="color:#9ECBFF;">/</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">test</span><span style="color:#E1E4E8;">(templatePath)</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">getTemplatePath</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">templatePath</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> path.</span><span style="color:#B392F0;">isAbsolute</span><span style="color:#E1E4E8;">(templatePath)</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">?</span><span style="color:#E1E4E8;"> templatePath</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> path.</span><span style="color:#B392F0;">normalize</span><span style="color:#E1E4E8;">(path.</span><span style="color:#B392F0;">join</span><span style="color:#E1E4E8;">(process.</span><span style="color:#B392F0;">cwd</span><span style="color:#E1E4E8;">(), templatePath))</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br></div></div><p>根据 <code>template</code> 来源来判断是使用本地缓存的模板还是使用线上的模板。如果是本地的模板，首先获取到模板的路径，如果模板存在，则调用 <code>generate</code> 函数去生成项目。否则会执行 <code>downloadAndGenerate</code> 函数去下载对应的模板、生成项目。</p>`,26),r=[o];function c(t,E,y,i,b,F){return a(),n("div",null,r)}const d=s(e,[["render",c]]);export{m as __pageData,d as default};
