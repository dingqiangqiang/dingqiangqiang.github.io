import{_ as s,c as n,o as a,V as l}from"./chunks/framework.ecec7af3.js";const p="/docs/assets/q1.745b5000.png",e="/docs/assets/q2.c136db7e.png",o="/docs/assets/calcTapXy.66998840.png",r="/docs/assets/image.0471af15.png",c="/docs/assets/rotate.be77dc25.png",v=JSON.parse('{"title":"技术攻坚","description":"","frontmatter":{},"headers":[],"relativePath":"mini-program/difficulty.md","filePath":"mini-program/difficulty.md","lastUpdated":1713352951000}'),t={name:"mini-program/difficulty.md"},E=l('<h1 id="技术攻坚" tabindex="-1">技术攻坚 <a class="header-anchor" href="#技术攻坚" aria-label="Permalink to &quot;技术攻坚&quot;">​</a></h1><h2 id="图区元素清除失败" tabindex="-1">图区元素清除失败 <a class="header-anchor" href="#图区元素清除失败" aria-label="Permalink to &quot;图区元素清除失败&quot;">​</a></h2><h2 id="自定义气泡相关" tabindex="-1">自定义气泡相关 <a class="header-anchor" href="#自定义气泡相关" aria-label="Permalink to &quot;自定义气泡相关&quot;">​</a></h2><details class="details custom-block"><summary>自定义气泡与 marker 距离过远 (<code>anchorY</code> 失效?)</summary><p><img src="'+p+`" alt="An image"></p><p>方案: 气泡外层在包一层标签，标签高度写死，背景设置为透明，子元素底部对齐。</p><div class="vp-code-group"><div class="tabs"><input type="radio" name="group-Z6wRK" id="tab-mPY_eXk" checked="checked"><label for="tab-mPY_eXk">html</label><input type="radio" name="group-Z6wRK" id="tab-ZdxN_Fn"><label for="tab-ZdxN_Fn">vue</label><input type="radio" name="group-Z6wRK" id="tab-n4HMQax"><label for="tab-n4HMQax">css</label></div><div class="blocks"><div class="language-html active line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">cover-view</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;wrapper&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">style</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;{{ wrapperStyle }}&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;"> // 气泡内容</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">cover-view</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><div class="language-vue line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#E1E4E8;">computed: {</span></span>
<span class="line"><span style="color:#E1E4E8;">  wrapperStyle() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    if (params.isBottomDir) { // 气泡偏移至在大头针下方</span></span>
<span class="line"><span style="color:#E1E4E8;">      return &#39;align-items: flex-start&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    return &#39;align-items: flex-end&#39; // 气泡在大头针上方</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><div class="language-css line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#B392F0;">.wrapper</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">height</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">40</span><span style="color:#F97583;">px</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FDAEB7;font-style:italic;">background</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">transparent</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">display</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">flex</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">align-items</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">flex-end</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div></div></div></details><p><img src="`+e+`" alt="An image"> :::</p><div class="danger custom-block"><p class="custom-block-title">自定义气泡文案遮挡问题</p><p><strong>右侧文案被遮挡: 给气泡设置度宽</strong></p></div><details class="details custom-block"><summary>获取自定义气泡宽高</summary><div class="vp-code-group"><div class="tabs"><input type="radio" name="group-P-VhZ" id="tab-CKsNJmb" checked="checked"><label for="tab-CKsNJmb">html</label><input type="radio" name="group-P-VhZ" id="tab-k8zrI1E"><label for="tab-k8zrI1E">vue</label></div><div class="blocks"><div class="language-html active line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">map</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">cover-view</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">slot</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;callout&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#FDAEB7;font-style:italic;">block</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">wx:for</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;{{ callouts }}&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">wx:key</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;markerId&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#FDAEB7;font-style:italic;">block</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">wx:if</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;{{item &amp;&amp; item.markerId != null}}&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;</span><span style="color:#85E89D;">cover-view</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">marker-id</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;{{ item.markerId }}&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">id</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;marker-callout-{{item.markerId}}&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">          &lt;</span><span style="color:#85E89D;">xxx-callout</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#85E89D;">xxx-callout</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;/</span><span style="color:#85E89D;">cover-view</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;/</span><span style="color:#FDAEB7;font-style:italic;">block</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#FDAEB7;font-style:italic;">block</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;/</span><span style="color:#85E89D;">cover-view</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">map</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><div class="language-vue line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#E1E4E8;">watch: {</span></span>
<span class="line"><span style="color:#E1E4E8;">  callouts: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    deep: true,</span></span>
<span class="line"><span style="color:#E1E4E8;">    async handler() {</span></span>
<span class="line"><span style="color:#E1E4E8;">      wx.nextTick(async () =&gt; {</span></span>
<span class="line"><span style="color:#E1E4E8;">        const rects = await Promise.all(this.callouts.map(callout =&gt; {</span></span>
<span class="line"><span style="color:#E1E4E8;">          return new Promise((resolve) =&gt; {</span></span>
<span class="line"><span style="color:#E1E4E8;">            if (callout) {</span></span>
<span class="line"><span style="color:#E1E4E8;">              wx.createSelectorQuery().in(this).select(\`#marker-callout-\${callout.markerId}\`)</span></span>
<span class="line"><span style="color:#E1E4E8;">                .boundingClientRect((rect) =&gt; {</span></span>
<span class="line"><span style="color:#E1E4E8;">                  if (rect) {</span></span>
<span class="line"><span style="color:#E1E4E8;">                    resolve(rect)</span></span>
<span class="line"><span style="color:#E1E4E8;">                  } else {</span></span>
<span class="line"><span style="color:#E1E4E8;">                    resolve({ width: 0, height: 0 })</span></span>
<span class="line"><span style="color:#E1E4E8;">                  }</span></span>
<span class="line"><span style="color:#E1E4E8;">                }).exec()</span></span>
<span class="line"><span style="color:#E1E4E8;">            } else {</span></span>
<span class="line"><span style="color:#E1E4E8;">              resolve({ width: 0, height: 0 })</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">          })</span></span>
<span class="line"><span style="color:#E1E4E8;">        }))</span></span>
<span class="line"><span style="color:#E1E4E8;">        // 获取到 rects 集合</span></span>
<span class="line"><span style="color:#E1E4E8;">      })</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div></div></div></details><details class="details custom-block"><summary>计算图区点击位置</summary><blockquote><p>小程序地图点击事件回调函数中的事件对象不会透出 x、y 信息</p></blockquote><p>方案一: <strong>外层 view 标签捕获点击事件(事件冒泡)</strong></p><div class="language-txt line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#e1e4e8;">&lt;view bindtap=&quot;handleTap&quot;&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">  &lt;map&gt;&lt;/map&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">  &lt;x-marker</span></span>
<span class="line"><span style="color:#e1e4e8;">    bindcallouttap=&quot;xxx&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">    bindmarkertap=&quot;xxx&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">  &gt;&lt;/x-marker&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/view&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">handleTap(e) { // e.detil: {x: number, y: number} }</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>兼容性:</p><p>handleTap 在模拟器会触发(格式为: {x: 105.4036865234375, y: 192.92376708984375})，真机不会触发</p><p>原因: 由于自定义气泡模板外层使用 cover-view 标签，真机上 cover-view 比 view 层级高，事件冒泡不会触发。</p><p>支付宝: handleTap 在模拟器、真机均会触发(格式为: { clientX: 59, clientY: 125, pageX: 59, pageY: 125 })</p><p>方案二: 自己计算 <img src="`+o+'" alt="An image"></p></details><details class="details custom-block"><summary>气泡融合(实景图气泡、起点气泡融合为 1 个气泡)</summary><p><img src="'+r+`" alt="Alt text"></p><blockquote><p>背景: 微信小程序中，无法识别一个气泡的不同位置的点击事件</p></blockquote><p>方案: 气泡上 <strong>绘制透明 marker</strong>，监听 marker 点击事件(前提: marker 层级必须高于气泡，调整 zIndex)。</p><div class="language-javascript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#6A737D;">// 透明 marker 位置计算(支持偏移)</span></span>
<span class="line"><span style="color:#6A737D;">// 1、已知大头针经纬度，宽高，把经纬度转为平面坐标 x、y</span></span>
<span class="line"><span style="color:#6A737D;">// latlng2xy</span></span>
<span class="line"><span style="color:#6A737D;">// 2、知道气泡宽高，可以获取气泡任意方向左边中心的x、y</span></span>
<span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> position </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">null</span></span>
<span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> bubbleWidth </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">120</span></span>
<span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> bubbleHeight </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">50</span></span>
<span class="line"><span style="color:#6A737D;">// 左上</span></span>
<span class="line"><span style="color:#E1E4E8;">position </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> { </span></span>
<span class="line"><span style="color:#E1E4E8;">  x: point.x </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> bubbleWidth,</span></span>
<span class="line"><span style="color:#E1E4E8;">  y: point.y </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> (bubbleHeight </span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#6A737D;">// 正上</span></span>
<span class="line"><span style="color:#E1E4E8;">position </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  x: point.x </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> (bubbleWidth </span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">  y: point.y </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> (bubbleHeight </span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#6A737D;">// 右上</span></span>
<span class="line"><span style="color:#E1E4E8;">position </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> { </span></span>
<span class="line"><span style="color:#E1E4E8;">  x: point.x,</span></span>
<span class="line"><span style="color:#E1E4E8;">  y: point.y </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> (bubbleHeight </span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#6A737D;">// 左下</span></span>
<span class="line"><span style="color:#E1E4E8;">position </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> { </span></span>
<span class="line"><span style="color:#E1E4E8;">  x: point.x </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> bubbleWidth,</span></span>
<span class="line"><span style="color:#E1E4E8;">  y: point.y </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> (bubbleHeight </span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#6A737D;">// 正下</span></span>
<span class="line"><span style="color:#E1E4E8;">position </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> { </span></span>
<span class="line"><span style="color:#E1E4E8;">  x: point.x </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> (bubbleWidth </span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">  y: point.y </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> (bubbleHeight </span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#6A737D;">// 右下</span></span>
<span class="line"><span style="color:#E1E4E8;">position </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> { </span></span>
<span class="line"><span style="color:#E1E4E8;">  x: point.x,</span></span>
<span class="line"><span style="color:#E1E4E8;">  y: point.y </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> (bubbleHeight </span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#6A737D;">// 3、已知透明 marker 宽高，计算扎点的平面坐标并转为经纬度</span></span>
<span class="line"><span style="color:#6A737D;">// xy2latlng</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br></div></div><p>备注: 支付宝安卓 marker 层级比气泡低(方案: 元素添加唯一标识，回调事件中根据标识来区分)。</p></details><details class="details custom-block"><summary>气泡偏移</summary><blockquote><p>气泡位置可以随意摆放(左上、正上、右上、左下、正下、右下)</p></blockquote><p><img src="`+c+`" alt="Alt text"></p><p>实现方案:</p><p>微信: 调整 customCallout 中的 anchorX 可实现横向偏移(向右为正)；调整 anchorY 实现纵向偏移(向下为正)</p><div class="language-javascript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">anchorXThreshold</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;">// anchorX 偏移阈值</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">anchorYThreshold</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;">// anchorY 偏移阈值，默认为 marker 高度</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">bubbleWidth</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">200</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;">// 气泡宽度</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">bubbleHeight</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">60</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;">// 气泡高度</span></span>
<span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> anchorX </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span></span>
<span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> anchorY </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 左上</span></span>
<span class="line"><span style="color:#E1E4E8;">anchorX </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">(bubbleWidth </span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> anchorXThreshold</span></span>
<span class="line"><span style="color:#6A737D;">// 正上</span></span>
<span class="line"><span style="color:#E1E4E8;">anchorX </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span></span>
<span class="line"><span style="color:#6A737D;">// 右上</span></span>
<span class="line"><span style="color:#E1E4E8;">anchorX </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (bubbleWidth </span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> anchorXThreshold</span></span>
<span class="line"><span style="color:#6A737D;">// 左下</span></span>
<span class="line"><span style="color:#E1E4E8;">anchorX </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">(bubbleWidth </span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> anchorXThreshold</span></span>
<span class="line"><span style="color:#E1E4E8;">anchorY </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> bubbleHeight </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> anchorYThreshold</span></span>
<span class="line"><span style="color:#6A737D;">// 正下</span></span>
<span class="line"><span style="color:#E1E4E8;">anchorX </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span></span>
<span class="line"><span style="color:#E1E4E8;">anchorY </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> bubbleHeight </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> anchorYThreshold</span></span>
<span class="line"><span style="color:#6A737D;">// 右下</span></span>
<span class="line"><span style="color:#E1E4E8;">anchorX </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (bubbleWidth </span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> anchorXThreshold</span></span>
<span class="line"><span style="color:#E1E4E8;">anchorY </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> bubbleHeight </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> anchorYThreshold</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><p>支付宝:</p><div class="language-javascript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> anchor </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> { x: </span><span style="color:#79B8FF;">0.5</span><span style="color:#E1E4E8;">, y: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;"> }</span></span>
<span class="line"><span style="color:#6A737D;">// 左上</span></span>
<span class="line"><span style="color:#E1E4E8;">anchor </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> { x: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, y: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;"> }</span></span>
<span class="line"><span style="color:#6A737D;">// 正上</span></span>
<span class="line"><span style="color:#E1E4E8;">anchor </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> { x: </span><span style="color:#79B8FF;">0.5</span><span style="color:#E1E4E8;">, y: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;"> }</span></span>
<span class="line"><span style="color:#6A737D;">// 右上</span></span>
<span class="line"><span style="color:#E1E4E8;">anchor </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> { x: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, y: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;"> }</span></span>
<span class="line"><span style="color:#6A737D;">// 左下</span></span>
<span class="line"><span style="color:#E1E4E8;">anchor </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> { x: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, y: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;"> }</span></span>
<span class="line"><span style="color:#6A737D;">// 正下</span></span>
<span class="line"><span style="color:#E1E4E8;">anchor </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> { x: </span><span style="color:#79B8FF;">0.5</span><span style="color:#E1E4E8;">, y: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;"> }</span></span>
<span class="line"><span style="color:#6A737D;">// 右下</span></span>
<span class="line"><span style="color:#E1E4E8;">anchor </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> { x: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, y: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;"> }</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div></details><h2 id="其它" tabindex="-1">其它 <a class="header-anchor" href="#其它" aria-label="Permalink to &quot;其它&quot;">​</a></h2><ul><li>面板穿透方案</li></ul><blockquote><p>map 上覆盖 view 标签，view 上滑动会穿透至地图</p></blockquote>`,13),i=[E];function y(b,u,m,d,F,h){return a(),n("div",null,i)}const k=s(t,[["render",y]]);export{v as __pageData,k as default};