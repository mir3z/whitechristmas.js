!function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";function r(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),r.forEach(function(e){i(t,e,n[e])})}return t}function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}n.r(e);var o=function(t,e){return Math.random()*(e-t)+t};function u(t,e){var n=e.querySelector("iframe"),i=function(t){var e=document.createElement("div");return e.style.pointerEvents="none",e.style.position="absolute",e.style.left="0",e.style.top="0",e.style.right="0",e.style.bottom="0",t.appendChild(e),e}(e),u=function(t){var e=document.createElement("canvas"),n=e.getContext("2d");return e.style.position="absolute",e.style.top="0",e.style.left="0",e.style.pointerEvents="none",e.width=document.body.clientWidth,e.height=document.body.clientHeight,t.appendChild(e),{ctx:n,canvas:e}}(e),c=u.canvas,a=u.ctx,l=function(t){for(var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.width,i=e.height,u=t.count(e),c=[],a=0;a<u;a++)c.push(t.init(r({i:a},e)));return{update:function(t){c.forEach(function(e){e.y+=e.vy,e.x+=e.vx+Math.sin(e.t)*e.bx,e.t+=e.dt,t(e),e.y>i?(e.y=-e.vy,e.t=o(-1,1)):e.x<0?e.x=n+e.x:e.x>n&&(e.x=e.x-n)})}}}(t,{width:c.width,height:c.height});t.blur&&(n.style.filter="blur(".concat(t.blur(),"px)")),t.haze&&(i.style.background="rgba(255, 255, 255, ".concat(t.haze(),")")),function(t){var e=0,n=0,r=function(){return window.requestAnimationFrame(i)},i=function(i){n=i-e,e=i,t(n,i),r()};return{start:r}}(function(){a.clearRect(0,0,c.width,c.height),l.update(function(t){a.fillStyle="rgba(187, 227, 255, ".concat(t.opacity,")"),a.fillRect(t.x,t.y,t.size,t.size)})}).start()}var c=function(t,e){return Math.random()*(e-t)+t},a=function(t,e,n,r,i){return(t-e)*(i-r)/(n-e)+r},l={count:function(t){var e=t.width,n=t.height;return Math.trunc(e*n/1210)},init:function(t){var e=t.i,n=t.width,r=t.height,i=c(1,4);return{x:c(0,n),y:-c(0,r)-e,vx:0,bx:.3,vy:.5*i,t:c(-1,1),dt:.02,size:i,opacity:a(i,1,5,.3,.8)}}};var f,s,y,h,d,p,b,m,v,g={blizzard:{count:function(t){var e=t.width,n=t.height;return Math.trunc(e*n/125)},blur:function(){return 2},haze:function(){return.5},init:function(t){t.i;var e=t.width,n=t.height,r=c(1,4);return{x:c(0,e),y:-c(0,n),vx:c(8,10),bx:.3,vy:c(8,10),t:0,dt:0,size:r,opacity:a(r,1,5,.3,.8)}}},fluff:l},x={0:"LastChristmas.mp3",1:"WhiteChristmas.mp3"},w=document.querySelector("#app"),O=new URLSearchParams(window.location.search),S={type:O.get("type"),site:O.get("site"),img:O.get("img"),music:O.get("music")};f=w,y=(s=S).type,h=s.site,d=s.img,p=s.music,b=f.querySelector("iframe"),m=f.querySelector("#playback"),v=g[y]||l,d?b.src="image.html?src="+d:h&&(b.src=h||""),p&&(m.src="playback.html?src="+x[p]),u(v,f)}]);