if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let l={};const o=e=>i(e,t),u={module:{uri:t},exports:l,require:o};s[t]=Promise.all(n.map((e=>u[e]||o(e)))).then((e=>(r(...e),l)))}}define(["./workbox-7cfec069"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/About-D7L8VbAo.js",revision:null},{url:"assets/Dashboard-COWKO-jr.js",revision:null},{url:"assets/index-Cph9hU-4.js",revision:null},{url:"assets/index-DuVqxek_.css",revision:null},{url:"assets/web-vitals-BA3w2fPb.js",revision:null},{url:"index.html",revision:"a3dea595b692300a6ff5f073d3bac2d0"},{url:"registerSW.js",revision:"b743363b3d9bcfb434affefb2762f16d"},{url:"manifest.webmanifest",revision:"2a299bd9078d5050318dfb492faaa1de"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
