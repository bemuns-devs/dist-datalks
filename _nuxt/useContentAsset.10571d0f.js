import{u as h,P as Q,Q as C,r as u,w as S,R as T,S as A,k as N,_ as x}from"./entry.8616bcda.js";var y;const l=typeof window<"u",L=e=>typeof e=="string",c=()=>{};l&&((y=window==null?void 0:window.navigator)==null?void 0:y.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function W(e){return typeof e=="function"?e():h(e)}function B(e){return e}function F(e){return Q()?(C(e),!0):!1}function R(e,t,n){let s;T(n)?s={evaluating:n}:s=n||{};const{lazy:a=!1,evaluating:r=void 0,onError:d=c}=s,i=u(!a),o=u(t);let f=0;return A(async P=>{if(!i.value)return;f++;const _=f;let g=!1;r&&Promise.resolve().then(()=>{r.value=!0});try{const p=await e(b=>{P(()=>{r&&(r.value=!1),g||b()})});_===f&&(o.value=p)}catch(p){d(p)}finally{r&&_===f&&(r.value=!1),g=!0}}),a?N(()=>(i.value=!0,o.value)):o}function U(e){var t;const n=W(e);return(t=n==null?void 0:n.$el)!=null?t:n}const E=l?window:void 0;l&&window.document;l&&window.navigator;l&&window.location;function $(...e){let t,n,s,a;if(L(e[0])?([n,s,a]=e,t=E):[t,n,s,a]=e,!t)return c;let r=c;const d=S(()=>U(t),o=>{r(),o&&(o.addEventListener(n,s,a),r=()=>{o.removeEventListener(n,s,a),r=c})},{immediate:!0,flush:"post"}),i=()=>{d(),r()};return F(i),i}const v=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},O="__vueuse_ssr_handlers__";v[O]=v[O]||{};v[O];var w;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(w||(w={}));var j=Object.defineProperty,m=Object.getOwnPropertySymbols,k=Object.prototype.hasOwnProperty,D=Object.prototype.propertyIsEnumerable,I=(e,t,n)=>t in e?j(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,G=(e,t)=>{for(var n in t||(t={}))k.call(t,n)&&I(e,n,t[n]);if(m)for(var n of m(t))D.call(t,n)&&I(e,n,t[n]);return e};const H={easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]};G({linear:B},H);function Y({window:e=E}={}){if(!e)return{x:u(0),y:u(0)};const t=u(e.pageXOffset),n=u(e.pageYOffset);return $("scroll",()=>{t.value=e.pageXOffset,n.value=e.pageYOffset},{capture:!1,passive:!0}),{x:t,y:n}}const V=async(e,t="?webp")=>{if(e.startsWith("import:")){const n=e.replace("import:","");return(await x(()=>import(`../assets${n}${t}`),[],import.meta.url)).default}return e},z=(e,t="?webp")=>R(()=>V(typeof e=="string"?e:e(),t));export{Y as a,z as u};
