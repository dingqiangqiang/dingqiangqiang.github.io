/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "6e7093fb356d6be2db3547e036ca51a2"
  },
  {
    "url": "algorithm/guide/index.html",
    "revision": "c96b08ebe5e6730678e745bd240ce20f"
  },
  {
    "url": "assets/advance-1.png",
    "revision": "d16179c2cfdcae2a1e14084d13d44c5f"
  },
  {
    "url": "assets/advance-2.png",
    "revision": "b40caf13cf561c0a79837ad9bb814308"
  },
  {
    "url": "assets/css/0.styles.f1059aec.css",
    "revision": "6e7326b7f788e687cfea02de368f8d42"
  },
  {
    "url": "assets/dom.png",
    "revision": "956fae75c917b522809be4746e631a1e"
  },
  {
    "url": "assets/event-loop.png",
    "revision": "d7a6a5fc68dd86ae39eb2fa7af7429c1"
  },
  {
    "url": "assets/fonts/iconfont.938fa69e.woff",
    "revision": "938fa69ea89bccb0f20d643cc5f07cbe"
  },
  {
    "url": "assets/fonts/iconfont.ecabaf00.ttf",
    "revision": "ecabaf00c2c5be9907d524bb21a0f0dc"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/interceptors.png",
    "revision": "bde16f4f17cc2684c8a688ef543e36cb"
  },
  {
    "url": "assets/js/1.032f69d4.js",
    "revision": "ea262de5731bba9e7bfdedfa4eab0985"
  },
  {
    "url": "assets/js/10.00d772a1.js",
    "revision": "0634df92eef4c796429efd3ef5fc5f37"
  },
  {
    "url": "assets/js/11.2ee3289e.js",
    "revision": "615079c93cc569c45bb76ee5e313b7e1"
  },
  {
    "url": "assets/js/12.dbc31fa3.js",
    "revision": "15a8dc367cf05451bad341f09d731ac3"
  },
  {
    "url": "assets/js/13.01100599.js",
    "revision": "17e3db033877ed09f622c6018ed6068b"
  },
  {
    "url": "assets/js/14.1fa0537d.js",
    "revision": "c5670f7178045711440720d5ba21c616"
  },
  {
    "url": "assets/js/15.c681beb5.js",
    "revision": "4b1f66cab9c7929fd906929855845ff6"
  },
  {
    "url": "assets/js/16.0c336c8c.js",
    "revision": "2833d6e8439a9771c2bb2d30ff3e4e08"
  },
  {
    "url": "assets/js/17.64dddb63.js",
    "revision": "27146cf1bd4ee4510d45ae037fabbf04"
  },
  {
    "url": "assets/js/18.a2fe2dc9.js",
    "revision": "c32236af5f19b40db77d5784f42b69fa"
  },
  {
    "url": "assets/js/19.3bec3a9a.js",
    "revision": "b08e227e0699566bb30e0146430a6956"
  },
  {
    "url": "assets/js/20.ae7e6768.js",
    "revision": "b597f7c109ca87488d758ca10dffd116"
  },
  {
    "url": "assets/js/21.da3b7cb7.js",
    "revision": "3312dbe6d8e0d94d64d49a004fffd79c"
  },
  {
    "url": "assets/js/22.16837b3c.js",
    "revision": "1f3fd3e1fc63e1f31c64c925aa868575"
  },
  {
    "url": "assets/js/23.15b3db1a.js",
    "revision": "8be887d5207a9c5944f996805a7569a3"
  },
  {
    "url": "assets/js/24.4fdc1b7d.js",
    "revision": "adf806b1da05715dd80f6a68129707f5"
  },
  {
    "url": "assets/js/25.28eb8c37.js",
    "revision": "5689309d6a39eef308824696ce02bb96"
  },
  {
    "url": "assets/js/26.dd10a51f.js",
    "revision": "9401d1b18b178a5fdf96fc657b5b968b"
  },
  {
    "url": "assets/js/27.706ecc2e.js",
    "revision": "37c34c707c866fe8f9b98b750038fc2b"
  },
  {
    "url": "assets/js/28.f61b1ea2.js",
    "revision": "151c6191d363755d02ac089f451854ca"
  },
  {
    "url": "assets/js/29.bf0472eb.js",
    "revision": "49f3b6c9c6ada02e05aa38cbf51854d0"
  },
  {
    "url": "assets/js/3.2adda6fa.js",
    "revision": "8e96148789cf475a88dfa2922043e543"
  },
  {
    "url": "assets/js/30.1273f407.js",
    "revision": "5e14aa3553449b9db5da9eac77129152"
  },
  {
    "url": "assets/js/31.28dfba30.js",
    "revision": "7e9c3e2ee00d9b2e82d4503ef1792f9c"
  },
  {
    "url": "assets/js/32.ae713b98.js",
    "revision": "474415b48642e5c1504f5ce237aaec93"
  },
  {
    "url": "assets/js/33.4d8806de.js",
    "revision": "ff4924ae782013a42a6fc27203908f78"
  },
  {
    "url": "assets/js/34.e8c6dbef.js",
    "revision": "6389b890fc047890f5aa7974deafaafe"
  },
  {
    "url": "assets/js/35.b1f758e2.js",
    "revision": "6c3048fd2d09193ddba94a1dbe63e95f"
  },
  {
    "url": "assets/js/36.3ebbabe5.js",
    "revision": "b255ac94e3b34fee12763c3184019d0d"
  },
  {
    "url": "assets/js/37.f9a19381.js",
    "revision": "69699827c678cc99525aba6528a07ba7"
  },
  {
    "url": "assets/js/38.c75aedfc.js",
    "revision": "238a832aaba3117277142bd5ac85225f"
  },
  {
    "url": "assets/js/39.330b53d5.js",
    "revision": "0c2bb7123013dcde6e0b1b633bef05a0"
  },
  {
    "url": "assets/js/4.d7e5b482.js",
    "revision": "acce1e9cabe8190ad5de925a5261a86b"
  },
  {
    "url": "assets/js/40.fb5464fe.js",
    "revision": "2292b2d2b35b00debd158c5ccc71b0a2"
  },
  {
    "url": "assets/js/41.9f192409.js",
    "revision": "2e9a235d5047cf212d9005eab7a9b4d4"
  },
  {
    "url": "assets/js/42.c5740890.js",
    "revision": "4395532f7406aa746ec9661415561dc1"
  },
  {
    "url": "assets/js/43.b4b664e8.js",
    "revision": "ef85fec161acdb74b231c11584ce767f"
  },
  {
    "url": "assets/js/44.796ecb13.js",
    "revision": "840a7b7c20dfbc681925f999e2b904ec"
  },
  {
    "url": "assets/js/45.79158f8f.js",
    "revision": "603d850787694a2962b2b8af37a5e3dd"
  },
  {
    "url": "assets/js/46.f0008508.js",
    "revision": "518b9c1fb5bde967e2136d6002cad3ab"
  },
  {
    "url": "assets/js/47.6a98d9e3.js",
    "revision": "78171ff1c1a8bf1e4184b6ce6579f04a"
  },
  {
    "url": "assets/js/48.16468157.js",
    "revision": "455b09831120c8558e81b9ef23773b92"
  },
  {
    "url": "assets/js/49.cb481e67.js",
    "revision": "d20d6b303b4d3488a068874e9eb8bbca"
  },
  {
    "url": "assets/js/5.4847ce6b.js",
    "revision": "d491fbe0dfa2d2f5aa39d95605eaa325"
  },
  {
    "url": "assets/js/50.ddef75f8.js",
    "revision": "5aba359549dad8f809cdd5d182ea200b"
  },
  {
    "url": "assets/js/51.f2118e87.js",
    "revision": "879d867f6b0f8e463148c3cf90a93007"
  },
  {
    "url": "assets/js/52.a51b7f90.js",
    "revision": "efc9670197766fa75fbc105d99f4a4f9"
  },
  {
    "url": "assets/js/53.a13b15c3.js",
    "revision": "14508743c6df2b9eb52624d1e74e7b47"
  },
  {
    "url": "assets/js/54.d0d42ba9.js",
    "revision": "d9dfbc3a1f9e67a726d9d4bb96558ee4"
  },
  {
    "url": "assets/js/55.f63ac755.js",
    "revision": "c07e745d78d225f06e216982ece07bf0"
  },
  {
    "url": "assets/js/56.ac1d8baf.js",
    "revision": "0df4e6e68377594f90a06f484e39e70c"
  },
  {
    "url": "assets/js/57.051fe4e4.js",
    "revision": "3792be40e77907e6815649d627409ea6"
  },
  {
    "url": "assets/js/58.007bb215.js",
    "revision": "68ce218e9dbf10fcfa0939f9927e0d4b"
  },
  {
    "url": "assets/js/59.20c0c3ee.js",
    "revision": "8aba9be71ccd3029b6a4481250aec63d"
  },
  {
    "url": "assets/js/6.d85e83f5.js",
    "revision": "3374c415fcd86b3c3b8f8991738887da"
  },
  {
    "url": "assets/js/60.191f0b81.js",
    "revision": "538e812584ccea900b73860ed193fbb0"
  },
  {
    "url": "assets/js/61.1c583f54.js",
    "revision": "9ad1513534c95e41b5194463c56853fa"
  },
  {
    "url": "assets/js/62.559afdf9.js",
    "revision": "519870a2951a5dff319e75b3e8c9a309"
  },
  {
    "url": "assets/js/63.c2405371.js",
    "revision": "c588ffa9f30d22a99a8a6e1b3ede584b"
  },
  {
    "url": "assets/js/64.09df6cc4.js",
    "revision": "8de6bd4364f75bcd74eadb927fad03c4"
  },
  {
    "url": "assets/js/65.2562c0d4.js",
    "revision": "c3c66720367b0738ff8a2a7d8b72d717"
  },
  {
    "url": "assets/js/66.940c98b7.js",
    "revision": "6a8079929719b28b503babe7d3ac6366"
  },
  {
    "url": "assets/js/67.f93b1a77.js",
    "revision": "6f0344cef2d2cc43c647112acfd70844"
  },
  {
    "url": "assets/js/68.b2a67102.js",
    "revision": "4b74713b2f8cfdd80690e5f52551af40"
  },
  {
    "url": "assets/js/69.3ae2bcdb.js",
    "revision": "747b06cd017e5e83944cb7ce5e086b5e"
  },
  {
    "url": "assets/js/7.fff27518.js",
    "revision": "a8909fbced1a1627ed40ae670ed1a25f"
  },
  {
    "url": "assets/js/70.b62427dc.js",
    "revision": "d513c9def6462401423159054322ba4e"
  },
  {
    "url": "assets/js/71.9ac15e77.js",
    "revision": "18966fdbb216ea6b8d2a4fa567407298"
  },
  {
    "url": "assets/js/72.47040ac9.js",
    "revision": "111a7a13b3d71337e1dac71087333326"
  },
  {
    "url": "assets/js/73.da4a0d85.js",
    "revision": "870dbe7fa19ca5ebd3eb8b7653aa56fc"
  },
  {
    "url": "assets/js/74.7924a589.js",
    "revision": "8aa94660718b961e75cd645ec5b36d0f"
  },
  {
    "url": "assets/js/75.35a8bced.js",
    "revision": "68053cd4066e76e7c1afd799a00e6002"
  },
  {
    "url": "assets/js/76.1efd133d.js",
    "revision": "65aabff3ff066b3fd31cf99ac50045a2"
  },
  {
    "url": "assets/js/77.99cccb7e.js",
    "revision": "9837720aaef0f70aa9832c33a5cbbd96"
  },
  {
    "url": "assets/js/78.4989774c.js",
    "revision": "00bbe5f2f9350eec5ef84acfa3c5c7d7"
  },
  {
    "url": "assets/js/79.6d20cdaf.js",
    "revision": "2c88fa754c04bf30a9b63946ebdc0cad"
  },
  {
    "url": "assets/js/8.4941fa87.js",
    "revision": "77bd51beed3813ae8a52b8c963ad7919"
  },
  {
    "url": "assets/js/80.1f3841f8.js",
    "revision": "54e14d254286a6912cd4369224a98e57"
  },
  {
    "url": "assets/js/81.e1cba1db.js",
    "revision": "ea288bd5b6cc07c5dd8dd6ac48642dd8"
  },
  {
    "url": "assets/js/82.e38e23c3.js",
    "revision": "b4fbe0982d99d36cb91a03a3b20e985b"
  },
  {
    "url": "assets/js/83.39a12c97.js",
    "revision": "7b33eaf34aa7f0726b557d4b14a06a5d"
  },
  {
    "url": "assets/js/84.b3828128.js",
    "revision": "800a7a251c5caa563f9d3c6c6111e454"
  },
  {
    "url": "assets/js/85.5599a216.js",
    "revision": "f8e206698438e0128749f190174191c7"
  },
  {
    "url": "assets/js/86.90883e91.js",
    "revision": "9a8a78271350b72b2ad07d0a7c7e8b47"
  },
  {
    "url": "assets/js/87.22f1a37c.js",
    "revision": "391b70e553fc00789764cb6d3a40668c"
  },
  {
    "url": "assets/js/88.28e25364.js",
    "revision": "644c21a82e52b4e7105097900c0691f3"
  },
  {
    "url": "assets/js/89.2649c5a1.js",
    "revision": "693dcb2915dd8948c44b8f5a855b931d"
  },
  {
    "url": "assets/js/9.5dc80f52.js",
    "revision": "1668703eb123ad0eba5fa359dbc9aff0"
  },
  {
    "url": "assets/js/90.13e6a124.js",
    "revision": "40c32806b8191da351f2a0db379c20b1"
  },
  {
    "url": "assets/js/91.bb3c9f01.js",
    "revision": "1ca73d79cc87879cbf35089bad8d0937"
  },
  {
    "url": "assets/js/app.f69f4d57.js",
    "revision": "99f49b6a26db82d7002d708ca5ec23aa"
  },
  {
    "url": "assets/lifecycle.png",
    "revision": "6f2c97f045ba988851b02056c01c8d62"
  },
  {
    "url": "assets/mind.png",
    "revision": "dfdd90eeeef858c36d593284c068c7bb"
  },
  {
    "url": "assets/new-vue.png",
    "revision": "9f257f782dba179b8312f77b7cd29f45"
  },
  {
    "url": "assets/node/path.png",
    "revision": "10dc57cee28fae7b0459589f90ce24dd"
  },
  {
    "url": "assets/parse.png",
    "revision": "38cfc72c9514bf7aacee338a62d22a6f"
  },
  {
    "url": "assets/qq.jpg",
    "revision": "41876e89e8ad5bea7f6d0a4ae1685ede"
  },
  {
    "url": "assets/qrcode_mp.jpg",
    "revision": "c78cc4fb65a98c29909f203d36e24dda"
  },
  {
    "url": "assets/qrcode.png",
    "revision": "03d314ddf28927bb03e95c4a2cd37821"
  },
  {
    "url": "assets/reactive.png",
    "revision": "c9e2ac37da79756f05c65ed8c88880c4"
  },
  {
    "url": "assets/stack.png",
    "revision": "ef5b872751fe424f07323df69c388c24"
  },
  {
    "url": "assets/update-children-1.png",
    "revision": "877b7fd9cccc033d228eb1c5b744bd85"
  },
  {
    "url": "assets/update-children-2.png",
    "revision": "a4ad01cc1ec2deb369c8c3d8377122e9"
  },
  {
    "url": "assets/update-children-3.png",
    "revision": "3395a69a272ab7bd13895619619799ff"
  },
  {
    "url": "assets/update-children-4.png",
    "revision": "aa762b394d2070bc1174084cab527a1c"
  },
  {
    "url": "assets/update-children-5.png",
    "revision": "3c19509aa1431b80750f740f0c2d056a"
  },
  {
    "url": "assets/update-children-6.png",
    "revision": "7e3b2e4f210259ff5a7a86ecebea9a7a"
  },
  {
    "url": "assets/vue-cli/command.png",
    "revision": "64bf347f6059d9cbb4c45af173f5fcf0"
  },
  {
    "url": "assets/vue-cli/webpack.png",
    "revision": "8f12a9311137eb617b472615d6618c65"
  },
  {
    "url": "assets/vuex.png",
    "revision": "983ea11f68f23d6a3229e13eafea6dc7"
  },
  {
    "url": "assets/vuex1.png",
    "revision": "288a0dc913bab3fe765baf18fb4bac27"
  },
  {
    "url": "axios/01.html",
    "revision": "d13275aede91d4ad64a4b0e2dfa14662"
  },
  {
    "url": "axios/02.html",
    "revision": "ea17ae0b1523804c618e5c5131d8c044"
  },
  {
    "url": "axios/03.html",
    "revision": "f9037409126a646efb24c2455fab007f"
  },
  {
    "url": "axios/04.html",
    "revision": "b68a99e9ccfc554ae9029973ec15536c"
  },
  {
    "url": "axios/05.html",
    "revision": "5814a59a9ac777e5561a6c2623e264c1"
  },
  {
    "url": "axios/06.html",
    "revision": "23c218b9130bec6e72592a747d7947ed"
  },
  {
    "url": "axios/07.html",
    "revision": "5cffcc8b00564bb6a4f774765704627d"
  },
  {
    "url": "axios/08.html",
    "revision": "b61e043490506aa35c2e966052f83c0e"
  },
  {
    "url": "axios/09.html",
    "revision": "6b6415e94aa29f246ce724c5c80994ec"
  },
  {
    "url": "categories/backend/index.html",
    "revision": "18e795356603550916b71667daea1e13"
  },
  {
    "url": "categories/frontend/index.html",
    "revision": "34cc5732d9f846bcb451df8f17be2444"
  },
  {
    "url": "categories/frontend/page/2/index.html",
    "revision": "2bf256fb0ae6eb2bbc501d6690465e8f"
  },
  {
    "url": "categories/frontend/page/3/index.html",
    "revision": "6fd6397b350e4682cda04c311960ce42"
  },
  {
    "url": "categories/frontend/page/4/index.html",
    "revision": "9c01873ef9d95082ac75fb3773ef79ee"
  },
  {
    "url": "categories/frontend/page/5/index.html",
    "revision": "1edd19a9f054dd18bea16d23fa84635b"
  },
  {
    "url": "categories/frontend/page/6/index.html",
    "revision": "30a59802622b29bae7e753699981be65"
  },
  {
    "url": "categories/frontend/page/7/index.html",
    "revision": "27ef3c91ead7b958ccb1c6728ab6c652"
  },
  {
    "url": "categories/index.html",
    "revision": "52000bcd93c7af016b0c664e02c91d94"
  },
  {
    "url": "develop/summary/index.html",
    "revision": "a45411c47a02e4e1cfa66bf6bb7f0c3e"
  },
  {
    "url": "express/guide/index.html",
    "revision": "e4ec178cff40b64c9e7d0eb40632629b"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "f130a0b70e386170cf6f011c0ca8c4f4"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "0ff1bc4d14e5c9abcacba7c600d97814"
  },
  {
    "url": "icons/apple-touch-icon-120x120.png",
    "revision": "936d6e411cabd71f0e627011c3f18fe2"
  },
  {
    "url": "icons/apple-touch-icon-152x152.png",
    "revision": "1a034e64d80905128113e5272a5ab95e"
  },
  {
    "url": "icons/apple-touch-icon-180x180.png",
    "revision": "c43cd371a49ee4ca17ab3a60e72bdd51"
  },
  {
    "url": "icons/apple-touch-icon-60x60.png",
    "revision": "9a2b5c0f19de617685b7b5b42464e7db"
  },
  {
    "url": "icons/apple-touch-icon-76x76.png",
    "revision": "af28d69d59284dd202aa55e57227b11b"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "66830ea6be8e7e94fb55df9f7b778f2e"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "4bb1a55479d61843b89a2fdafa7849b3"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "98b614336d9a12cb3f7bedb001da6fca"
  },
  {
    "url": "icons/msapplication-icon-144x144.png",
    "revision": "b89032a4a5a1879f30ba05a13947f26f"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "058a3335d15a3eb84e7ae3707ba09620"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "f22d501a35a87d9f21701cb031f6ea17"
  },
  {
    "url": "index.html",
    "revision": "d37f6af39035397cc5f34b6e5ba0b077"
  },
  {
    "url": "interview/guide/index.html",
    "revision": "024ef19d944a35467df98e1cadc0a8f0"
  },
  {
    "url": "jest/guide/index.html",
    "revision": "6bc4b52957b475a96df56eb58f33ce0e"
  },
  {
    "url": "js/custom.js",
    "revision": "5c938a290b5632227c8ee6793201062b"
  },
  {
    "url": "koa/guide/index.html",
    "revision": "4631ede981ed5b99a09e4e6fba226bb4"
  },
  {
    "url": "network/guide/index.html",
    "revision": "b0b1807ebe0eebabc2067211979d19ec"
  },
  {
    "url": "niumowang.jpeg",
    "revision": "19eb3487e2b23e6eb081d1b6dc0ca34a"
  },
  {
    "url": "node/api.html",
    "revision": "da4329210734b8c9344e4d9b7aa477fb"
  },
  {
    "url": "releases/index.html",
    "revision": "8d652681d23cf684a2af4b47c26af578"
  },
  {
    "url": "rollup/guide/index.html",
    "revision": "afab69109eca4fe89dac6e1bd38ab49f"
  },
  {
    "url": "tag/axios/index.html",
    "revision": "8c57e881d76924b72386113106cc0fd4"
  },
  {
    "url": "tag/axios/page/2/index.html",
    "revision": "78beb846a653bc3c702bf60fbc125299"
  },
  {
    "url": "tag/index.html",
    "revision": "d64ebb870ae5294ecc5c3bd3d45e3a65"
  },
  {
    "url": "tag/node/index.html",
    "revision": "d8f34c6021240bde2dac0b6c9ad5ddd3"
  },
  {
    "url": "tag/pinia/index.html",
    "revision": "b39ba525941c9ec80679931a423f3674"
  },
  {
    "url": "tag/vue-router/index.html",
    "revision": "af9ec65b7cc098c995883ca311d3b961"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "2d49c7de4fd8277f71b66a3c164362c5"
  },
  {
    "url": "tag/vue/page/2/index.html",
    "revision": "257bf3a683c1e26569a05b45d420a756"
  },
  {
    "url": "tag/vue/page/3/index.html",
    "revision": "720d87617b6400b1ba0315a8af69da3e"
  },
  {
    "url": "tag/vue/page/4/index.html",
    "revision": "4dbb494490bec562a8290c975812e47d"
  },
  {
    "url": "tag/vue/page/5/index.html",
    "revision": "8d806e147876a0fc03059c0d96a53d88"
  },
  {
    "url": "tag/vue/page/6/index.html",
    "revision": "8135c521d2eef635dde654a1cd9b6d89"
  },
  {
    "url": "tag/vuex/index.html",
    "revision": "c6397e12147ea1dceb9f4578b8895aef"
  },
  {
    "url": "timeline/index.html",
    "revision": "79ec584da223fdc6bd00c692ff581447"
  },
  {
    "url": "vite/guide/index.html",
    "revision": "05dc3554378ac505a60317e45c929e64"
  },
  {
    "url": "vitest/guide/index.html",
    "revision": "c26637d5a9411774f18d39595745cf02"
  },
  {
    "url": "vue-cli/01.html",
    "revision": "088d8c3054aa33776c118e7a4706ecef"
  },
  {
    "url": "vue-cli/02.html",
    "revision": "48ed33a73c255010269b36e112d20226"
  },
  {
    "url": "vue-cli/03.html",
    "revision": "9db86dff4f810d3ba19c79acfd87d68a"
  },
  {
    "url": "vue/compile/codegen.html",
    "revision": "8d59b2e795daabc935693160af0ae377"
  },
  {
    "url": "vue/compile/entrance.html",
    "revision": "7414fa0f1483f492c9624ead7d272467"
  },
  {
    "url": "vue/compile/index.html",
    "revision": "fb199aae93a7f9f03fedbd3b54a8d339"
  },
  {
    "url": "vue/compile/optimize.html",
    "revision": "8b9555644f83b8bfb94dc6b40c319711"
  },
  {
    "url": "vue/compile/parse.html",
    "revision": "106fc0e36d8835e41503144e84cff408"
  },
  {
    "url": "vue/components/async-component.html",
    "revision": "0f7460011cc28082add4491da82224b3"
  },
  {
    "url": "vue/components/component-register.html",
    "revision": "764c112ec56f559673352af2e34995f4"
  },
  {
    "url": "vue/components/create-component.html",
    "revision": "50edc765f0d02bdce40c9bc7c1d62a71"
  },
  {
    "url": "vue/components/index.html",
    "revision": "aaed2eec9ebe1a6a7ce3c154b020d967"
  },
  {
    "url": "vue/components/lifecycle.html",
    "revision": "77d9799014732012ad17eb4f7834d499"
  },
  {
    "url": "vue/components/merge-option.html",
    "revision": "ba3d602150c4d9353844af591f7246c9"
  },
  {
    "url": "vue/components/patch.html",
    "revision": "c509033a2716dbb9b624ae5ce13003dd"
  },
  {
    "url": "vue/data-driven/create-element.html",
    "revision": "c3781a6a49fa9bbb177b105a580af3a9"
  },
  {
    "url": "vue/data-driven/index.html",
    "revision": "7db102393a82049b8810c54cd3eb9ed3"
  },
  {
    "url": "vue/data-driven/mounted.html",
    "revision": "a99d5b8d7c03639e5c98b4979fc61965"
  },
  {
    "url": "vue/data-driven/new-vue.html",
    "revision": "cef7729701ff3d4c16373f8748b432ca"
  },
  {
    "url": "vue/data-driven/render.html",
    "revision": "2708791fc39e81d70c6ec792522dd700"
  },
  {
    "url": "vue/data-driven/update.html",
    "revision": "2d386f9058b53e91166f643402edc7f4"
  },
  {
    "url": "vue/data-driven/virtual-dom.html",
    "revision": "160851236bfe03b961f82696557cb4ae"
  },
  {
    "url": "vue/extend/event.html",
    "revision": "c6c31b72fc95bcde36821e3ec7f32862"
  },
  {
    "url": "vue/extend/index.html",
    "revision": "f6077b478a383891c4c79405757f18c9"
  },
  {
    "url": "vue/extend/keep-alive.html",
    "revision": "fcd6025b3c2fac0696ef9cdaaccccb70"
  },
  {
    "url": "vue/extend/slot.html",
    "revision": "347582a5edefaebea19d8399f2703575"
  },
  {
    "url": "vue/extend/tansition-group.html",
    "revision": "cb2b96fc962aee8e1bd4baf8e996817f"
  },
  {
    "url": "vue/extend/tansition.html",
    "revision": "5946110969971cdf5f4ec5a670bb8f34"
  },
  {
    "url": "vue/extend/v-model.html",
    "revision": "8860b1074497f1c1d4bea73aa1b4f7e5"
  },
  {
    "url": "vue/guide/index.html",
    "revision": "f16154b9b6a712740df261acf87ba4ad"
  },
  {
    "url": "vue/pinia/index.html",
    "revision": "d5cd5cb88f8fe1b8e524034c0cb5d2d0"
  },
  {
    "url": "vue/prepare/build.html",
    "revision": "3ac5cf9cdac79d49b7547ad67d1a2cb7"
  },
  {
    "url": "vue/prepare/directory.html",
    "revision": "f5534aae7cfca806dfc9e0636a8412d1"
  },
  {
    "url": "vue/prepare/entrance.html",
    "revision": "45e602aa7cd66f1912ee87112a9daff3"
  },
  {
    "url": "vue/prepare/flow.html",
    "revision": "857149011582e7b6825bb90fedc15cda"
  },
  {
    "url": "vue/prepare/index.html",
    "revision": "f2a1c627ac380dfbab36b15dbb2e4e0c"
  },
  {
    "url": "vue/reactive/component-update.html",
    "revision": "edc56b58ebf8e3d2b1dbcb21e9919780"
  },
  {
    "url": "vue/reactive/computed-watcher.html",
    "revision": "333535174d7c25eb32b5b69a18b8215d"
  },
  {
    "url": "vue/reactive/getters.html",
    "revision": "5eb3816d91c9d49d671ec7eb59b13cd4"
  },
  {
    "url": "vue/reactive/index.html",
    "revision": "06fea63c85f86d3d7ac69126f72b2ce7"
  },
  {
    "url": "vue/reactive/next-tick.html",
    "revision": "eec6fa11d917f31bee305434085a634c"
  },
  {
    "url": "vue/reactive/props.html",
    "revision": "9cc3d72fa9231b70097e598c4e67765f"
  },
  {
    "url": "vue/reactive/questions.html",
    "revision": "4d59b480eca6b09c13722517f30ace3c"
  },
  {
    "url": "vue/reactive/reactive-object.html",
    "revision": "f065414036afcf574bef6e9b8849e2db"
  },
  {
    "url": "vue/reactive/setters.html",
    "revision": "6179d32900137ae8a8ab1fdd4b976944"
  },
  {
    "url": "vue/reactive/summary.html",
    "revision": "aa70719202aab79180bda9873bf74a1c"
  },
  {
    "url": "vue/vue-router/index.html",
    "revision": "bf924fc5bce89f12a753c782c50fadf1"
  },
  {
    "url": "vue/vue-router/install.html",
    "revision": "69a9c5090729b22e813664c00dde02e2"
  },
  {
    "url": "vue/vue-router/matcher.html",
    "revision": "44027f7367664ba0a50a5a906565b0ee"
  },
  {
    "url": "vue/vue-router/router.html",
    "revision": "ca6d1ac908da26b9e1d94f5c71ce3704"
  },
  {
    "url": "vue/vue-router/transition-to.html",
    "revision": "d565a80b75230087beb0fd8ab718306b"
  },
  {
    "url": "vue/vuex/api.html",
    "revision": "fa3875450f44debd0f8a890d7d970a33"
  },
  {
    "url": "vue/vuex/index.html",
    "revision": "9b0f9e4aac9b9f595def338aba823ea9"
  },
  {
    "url": "vue/vuex/init.html",
    "revision": "d9de5e54e7c713337862ce8e528b8c2b"
  },
  {
    "url": "vue/vuex/plugin.html",
    "revision": "0f1a51b4c29be9e6fff7d076bac25f08"
  },
  {
    "url": "vuepress/01.html",
    "revision": "8e39738f0b9a5ecc0b1c0a739e586e2c"
  },
  {
    "url": "vuepress/02.html",
    "revision": "c8ec03da6f70a95eea79c60ca2535cc9"
  },
  {
    "url": "webpack/guide/index.html",
    "revision": "172fb98b9c9cc96821076d5d125b8833"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
