import{_ as s,c as n,o as a,V as p}from"./chunks/framework.ecec7af3.js";const m=JSON.parse('{"title":"部署","description":"","frontmatter":{},"headers":[],"relativePath":"dailyNote/deploy.md","filePath":"dailyNote/deploy.md","lastUpdated":null}'),l={name:"dailyNote/deploy.md"},e=p(`<h1 id="部署" tabindex="-1">部署 <a class="header-anchor" href="#部署" aria-label="Permalink to &quot;部署&quot;">​</a></h1><h2 id="ssh-登录服务器" tabindex="-1">SSH 登录服务器 <a class="header-anchor" href="#ssh-登录服务器" aria-label="Permalink to &quot;SSH 登录服务器&quot;">​</a></h2><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#B392F0;">ssh</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">用户名@公网ip:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">ssh</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">root@39.97.104.2</span></span>
<span class="line"><span style="color:#B392F0;">输入密码</span></span>
<span class="line"><span style="color:#6A737D;"># ubuntu 系统，安装 git</span></span>
<span class="line"><span style="color:#B392F0;">apt-get</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">install</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">git</span></span>
<span class="line"><span style="color:#6A737D;"># 下载代码</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">clone</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">xx.git</span></span>
<span class="line"><span style="color:#6A737D;"># ubuntu，安装 node</span></span>
<span class="line"><span style="color:#B392F0;">curl</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-sL</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">https://deb.nodesource.com/setup_14.x</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">sudo</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-E</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">bash</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">-</span></span>
<span class="line"><span style="color:#B392F0;">sudo</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">apt-get</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">install</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-y</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">nodejs</span></span>
<span class="line"><span style="color:#B392F0;">node</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--version</span></span>
<span class="line"><span style="color:#B392F0;">npm</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--version</span></span>
<span class="line"><span style="color:#6A737D;">## 进入代码目录</span></span>
<span class="line"><span style="color:#B392F0;">npm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">install</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#6A737D;"># 启动</span></span>
<span class="line"><span style="color:#B392F0;">npm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">run</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">dev</span></span>
<span class="line"><span style="color:#6A737D;"># 假设端口在3000,通过公网 ip + 端口访问</span></span>
<span class="line"><span style="color:#B392F0;">39.97.104.2:3000</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><h2 id="用-nginx-实现端口转发" tabindex="-1">用 nginx 实现端口转发 <a class="header-anchor" href="#用-nginx-实现端口转发" aria-label="Permalink to &quot;用 nginx 实现端口转发&quot;">​</a></h2><p>背景: 外网3000端口没开放，无法访问，只开放了80端口，使用 nginx 把外网80端口转发到内网3000端口</p><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#6A737D;">## 进入代码目录，安装 nginx</span></span>
<span class="line"><span style="color:#B392F0;">apt-get</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">install</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">nginx</span></span>
<span class="line"><span style="color:#6A737D;"># 检查配置文件格式是否正确</span></span>
<span class="line"><span style="color:#B392F0;">nginx</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-t</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#6A737D;"># 打开 nginx 配置文件 </span></span>
<span class="line"><span style="color:#B392F0;">vim</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">/etc/nginx/nginx.conf</span></span>
<span class="line"><span style="color:#B392F0;">http</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">server</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">listen</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">80</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">server_name</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">localhost</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">location</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">/</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#B392F0;">proxy_pass</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">http://127.0.0.1:3000</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#6A737D;"># 保存退出</span></span>
<span class="line"><span style="color:#B392F0;">:wq</span></span>
<span class="line"><span style="color:#6A737D;"># 重启</span></span>
<span class="line"><span style="color:#B392F0;">service</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">nginx</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">restart</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">或</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">service</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">nginx</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">reload</span></span>
<span class="line"><span style="color:#6A737D;"># 3000 端口启动</span></span>
<span class="line"><span style="color:#B392F0;">npm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">run</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">dev</span></span>
<span class="line"><span style="color:#6A737D;"># 外网通过 80 端口访问</span></span>
<span class="line"><span style="color:#B392F0;">39.97.104.2</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><h2 id="使用-pm2-管理进程" tabindex="-1"><a href="https://pm2.fenxianglu.cn/docs/start" target="_blank" rel="noreferrer">使用 PM2 管理进程</a> <a class="header-anchor" href="#使用-pm2-管理进程" aria-label="Permalink to &quot;[使用 PM2 管理进程](https://pm2.fenxianglu.cn/docs/start)&quot;">​</a></h2><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#6A737D;"># 进入代码目录，安装 pm2</span></span>
<span class="line"><span style="color:#B392F0;">npm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">install</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">pm2</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-g</span></span>
<span class="line"><span style="color:#6A737D;"># 通过 pm2 启动应用程序</span></span>
<span class="line"><span style="color:#B392F0;">pm2</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">start</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">app/index.js</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">简写为</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">pm2</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">start</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">app</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#6A737D;"># pm2 常用命令</span></span>
<span class="line"><span style="color:#6A737D;"># 列出所有正在运行的应用程序</span></span>
<span class="line"><span style="color:#B392F0;">pm2</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">list</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">or</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">pm2</span><span style="color:#E1E4E8;"> [list</span><span style="color:#F97583;">|</span><span style="color:#B392F0;">ls</span><span style="color:#F97583;">|</span><span style="color:#B392F0;">l</span><span style="color:#F97583;">|</span><span style="color:#B392F0;">status]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 停止指定的应用程序</span></span>
<span class="line"><span style="color:#B392F0;">pm2</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">stop</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">app</span></span>
<span class="line"><span style="color:#B392F0;">pm2</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">stop</span><span style="color:#E1E4E8;"> [AppName]</span></span>
<span class="line"><span style="color:#6A737D;"># 停止多个应用程序</span></span>
<span class="line"><span style="color:#B392F0;">pm2</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">stop</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">app1</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">app3</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">app4</span></span>
<span class="line"><span style="color:#6A737D;"># 停止所有</span></span>
<span class="line"><span style="color:#B392F0;">pm2</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">stop</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">all</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 删除应用程序</span></span>
<span class="line"><span style="color:#B392F0;">pm2</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">delete</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">app</span></span>
<span class="line"><span style="color:#6A737D;"># 删除全部</span></span>
<span class="line"><span style="color:#B392F0;">pm2</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">delete</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">all</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 重启应用程序</span></span>
<span class="line"><span style="color:#B392F0;">pm2</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">restart</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">app</span></span>
<span class="line"><span style="color:#6A737D;"># 重启多个应用程序</span></span>
<span class="line"><span style="color:#B392F0;">pm2</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">restart</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">app1</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">app3</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">app4</span></span>
<span class="line"><span style="color:#6A737D;"># 重启所有应用程序</span></span>
<span class="line"><span style="color:#B392F0;">pm2</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">restart</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">all</span></span>
<span class="line"><span style="color:#6A737D;"># 0秒停机重载(重新启动所有进程，始终保持至少一个进程在运行)</span></span>
<span class="line"><span style="color:#B392F0;">pm2</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">reload</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">app</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 监控面板(监控应用程序资源使用情况)</span></span>
<span class="line"><span style="color:#B392F0;">pm2</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">monit</span></span>
<span class="line"><span style="color:#6A737D;"># 设置环境变量</span></span>
<span class="line"><span style="color:#E1E4E8;">NODE_ENV</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">production</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">pm2</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">start</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">app</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--update-env</span></span>
<span class="line"><span style="color:#B392F0;">console.log(p<wbr>rocess.env.NODE_ENV</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#6A737D;"># 日志</span></span>
<span class="line"><span style="color:#B392F0;">pm2</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">log</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">app</span></span>
<span class="line"><span style="color:#6A737D;">## 自定义日期格式的日志</span></span>
<span class="line"><span style="color:#E1E4E8;">NODE_ENV</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">production</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">pm2</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">start</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">app</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--update-env</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--log-date-format</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;YYYY-MM-DD HH:mm&quot;</span></span>
<span class="line"><span style="color:#B392F0;">pm2</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">log</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">app</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br></div></div>`,8),o=[e];function r(c,t,E,y,i,F){return a(),n("div",null,o)}const B=s(l,[["render",r]]);export{m as __pageData,B as default};