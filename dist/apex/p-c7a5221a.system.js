var __extends=this&&this.__extends||function(){var e=function(t,r){e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)if(t.hasOwnProperty(r))e[r]=t[r]};return e(t,r)};return function(t,r){e(t,r);function n(){this.constructor=t}t.prototype=r===null?Object.create(r):(n.prototype=r.prototype,new n)}}();var __awaiter=this&&this.__awaiter||function(e,t,r,n){return new(r||(r=Promise))(function(a,i){function o(e){try{l(n.next(e))}catch(e){i(e)}}function s(e){try{l(n["throw"](e))}catch(e){i(e)}}function l(e){e.done?a(e.value):new r(function(t){t(e.value)}).then(o,s)}l((n=n.apply(e,t||[])).next())})};var __generator=this&&this.__generator||function(e,t){var r={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},n,a,i,o;return o={next:s(0),throw:s(1),return:s(2)},typeof Symbol==="function"&&(o[Symbol.iterator]=function(){return this}),o;function s(e){return function(t){return l([e,t])}}function l(o){if(n)throw new TypeError("Generator is already executing.");while(r)try{if(n=1,a&&(i=o[0]&2?a["return"]:o[0]?a["throw"]||((i=a["return"])&&i.call(a),0):a.next)&&!(i=i.call(a,o[1])).done)return i;if(a=0,i)o=[o[0]&2,i.value];switch(o[0]){case 0:case 1:i=o;break;case 4:r.label++;return{value:o[1],done:false};case 5:r.label++;a=o[1];o=[0];continue;case 7:o=r.ops.pop();r.trys.pop();continue;default:if(!(i=r.trys,i=i.length>0&&i[i.length-1])&&(o[0]===6||o[0]===2)){r=0;continue}if(o[0]===3&&(!i||o[1]>i[0]&&o[1]<i[3])){r.label=o[1];break}if(o[0]===6&&r.label<i[1]){r.label=i[1];i=o;break}if(i&&r.label<i[2]){r.label=i[2];r.ops.push(o);break}if(i[2])r.ops.pop();r.trys.pop();continue}o=t.call(e,r)}catch(e){o=[6,e];a=0}finally{n=i=0}if(o[0]&5)throw o[1];return{value:o[0]?o[1]:void 0,done:true}}};System.register([],function(e,t){"use strict";return{execute:function(){var r=this;var n={allRenderFn:true,cmpDidLoad:true,cmpDidUnload:true,cmpDidUpdate:false,cmpDidRender:false,cmpWillLoad:false,cmpWillUpdate:false,cmpWillRender:false,connectedCallback:false,disconnectedCallback:false,element:false,event:false,hasRenderFn:true,lifecycle:true,hostListener:false,hostListenerTargetWindow:false,hostListenerTargetDocument:false,hostListenerTargetBody:false,hostListenerTargetParent:false,hostListenerTarget:false,member:true,method:true,mode:false,noVdomRender:false,observeAttribute:true,prop:true,propBoolean:false,propNumber:false,propString:true,propMutable:true,reflect:false,scoped:false,shadowDom:false,slot:false,slotRelocation:false,state:true,style:true,svg:false,updatable:true,vdomAttribute:true,vdomClass:true,vdomFunctional:true,vdomKey:true,vdomListener:true,vdomRef:true,vdomRender:true,vdomStyle:true,vdomText:true,watchCallback:true,taskQueue:true,lazyLoad:true,hydrateServerSide:false,cssVarShim:true,hydrateClientSide:false,isDebug:false,isDev:false,lifecycleDOMEvents:false,profile:false,hotModuleReplacement:false,constructableCSS:true,cssAnnotations:true};var a="apex";var i=window;var o=document;var s={$flags$:0,$resourcesUrl$:"",raf:function(e){return requestAnimationFrame(e)},ael:function(e,t,r,n){return e.addEventListener(t,r,n)},rel:function(e,t,r,n){return e.removeEventListener(t,r,n)}};var l=false;var f=function(){try{new CSSStyleSheet;return true}catch(e){}return false}();var u=new WeakMap;var c=function(e){return u.get(e)};var $=e("r",function(e,t){return u.set(t.$lazyInstance$=e,t)});var v=function(e){{var t={$flags$:0,$hostElement$:e,$instanceValues$:new Map};t.$onReadyPromise$=new Promise(function(e){return t.$onReadyResolve$=e});return u.set(e,t)}};var d=function(e,t){return t in e};var h=function(e){return console.error(e)};var p=function(e,r,n){var a=e.$lazyBundleIds$;return t.import("./"+a+".entry.js"+"").then(function(t){return t[e.$tagName$.replace(/-/g,"_")]},h)};var m=new Map;var g=i.__stencil_cssshim;var y=0;var b=false;var w=[];var S=[];var R=[];var _=function(e){return function(t){e.push(t);if(!b){b=true;s.raf(k)}}};var x=function(e){for(var t=0;t<e.length;t++){try{e[t](performance.now())}catch(e){h(e)}}e.length=0};var T=function(e,t){var r=0;var n=0;while(r<e.length&&(n=performance.now())<t){try{e[r++](n)}catch(e){h(e)}}if(r===e.length){e.length=0}else if(r!==0){e.splice(0,r)}};var k=function(){y++;x(w);var e=(s.$flags$&6)===2?performance.now()+7*Math.ceil(y*(1/22)):Infinity;T(S,e);T(R,e);if(S.length>0){R.push.apply(R,S);S.length=0}if(b=w.length+S.length+R.length>0){s.raf(k)}else{y=0}};var C=_(S);var L={};var N=function(e){return e!=null};var E=function(e){return e.toLowerCase()};var A=function(e){return["object","function"].includes(typeof e)};function j(e){return"__sc_import_"+e.replace(/\s|-/g,"_")}var P=e("a",function(){if(!(i.CSS&&i.CSS.supports&&i.CSS.supports("color","var(--c)"))){return t.import("./p-39f11146.system.js")}return Promise.resolve()});var z=e("p",function(){return __awaiter(r,void 0,void 0,function(){var e,r,n;return __generator(this,function(s){switch(s.label){case 0:e=t.meta.url;if(!(e!==""))return[3,1];return[2,Promise.resolve(new URL(".",e).href)];case 1:r=Array.from(o.querySelectorAll("script")).find(function(e){return e.src.includes("/"+a+".esm.js")||e.getAttribute("data-namespace")===a});n=new URL(".",new URL(r.getAttribute("data-resources-url")||r.src,i.location.href));O(n.href);if(!!window.customElements)return[3,3];return[4,t.import("./p-a8fc097f.system.js")];case 2:s.sent();s.label=3;case 3:return[2,n.href]}})})});var O=function(e){var t=j(a);try{i[t]=new Function("w","return import(w);")}catch(n){var r=new Map;i[t]=function(n){var a=new URL(n,e).href;var s=r.get(a);if(!s){var l=o.createElement("script");l.type="module";l.src=URL.createObjectURL(new Blob(["import * as m from '"+a+"'; window."+t+".m = m;"],{type:"application/javascript"}));s=new Promise(function(e){l.onload=function(){e(i[t].m);l.remove()}});r.set(a,s);o.head.appendChild(l)}return s}}};var U="hydrated";var D=new WeakMap;var M=function(e,t){var r=m.get(e);if(f){r=r||new CSSStyleSheet;r.replace(t)}else{r=t}m.set(e,r)};var B=function(e,t,r,n){var a=W(t);var i=m.get(a);e=e.nodeType===11?e:o;if(i){if(typeof i==="string"){e=e.head||e;var s=D.get(e);var l=void 0;if(!s){D.set(e,s=new Set)}if(!s.has(a)){{if(g){l=g.createHostStyle(n,a,i);var f=l["s-sc"];if(f){a=f;s=null}}else{l=o.createElement("style");l.innerHTML=i}e.appendChild(l)}if(s){s.add(a)}}}else if(!e.adoptedStyleSheets.includes(i)){e.adoptedStyleSheets=e.adoptedStyleSheets.concat([i])}}return a};var I=function(e,t,r){var n=B(e.getRootNode(),t.$tagName$,r,e)};var W=function(e,t){return"sc-"+e};var F=e("h",function(e,t){var r=[];for(var n=2;n<arguments.length;n++){r[n-2]=arguments[n]}var a=null;var i=false;var o=false;var s;var l=[];var f=function(t){for(var r=0;r<t.length;r++){a=t[r];if(Array.isArray(a)){f(a)}else if(a!=null&&typeof a!=="boolean"){if(i=typeof e!=="function"&&!A(a)){a=String(a)}if(i&&o){l[l.length-1].$text$+=a}else{l.push(i?{$flags$:0,$text$:a}:a)}o=i}}};f(r);if(t){{s=t.key||undefined}{var u=t.className||t.class;if(u){t.class=typeof u!=="object"?u:Object.keys(u).filter(function(e){return u[e]}).join(" ")}}}if(typeof e==="function"){return e(t,l,V)}var c={$flags$:0,$tag$:e,$children$:l.length>0?l:null,$elm$:undefined,$attrs$:t};{c.$key$=s}return c});var H={};var V={forEach:function(e,t){return e.map(q).forEach(t)},map:function(e,t){return e.map(q).map(t).map(Q)}};var q=function(e){return{vattrs:e.$attrs$,vchildren:e.$children$,vkey:e.$key$,vname:e.$name$,vtag:e.$tag$,vtext:e.$text$}};var Q=function(e){return{$flags$:0,$attrs$:e.vattrs,$children$:e.vchildren,$key$:e.vkey,$name$:e.vname,$tag$:e.vtag,$text$:e.vtext}};var G=function(e,t,r,n,a,i){if(r===n){return}if(t==="class"&&!a){{var o=K(r);var l=K(e.className).filter(function(e){return!o.includes(e)});e.className=l.concat(K(n).filter(function(e){return!l.includes(e)})).join(" ")}}else if(t==="style"){{for(var f in r){if(!n||n[f]==null){if(f.includes("-")){e.style.removeProperty(f)}else{e.style[f]=""}}}}for(var f in n){if(!r||n[f]!==r[f]){if(f.includes("-")){e.style.setProperty(f,n[f])}else{e.style[f]=n[f]}}}}else if(t==="key");else if(t==="ref"){if(n){n(e)}}else if(t.startsWith("on")&&!d(e,t)){if(d(e,E(t))){t=E(t.substring(2))}else{t=E(t[2])+t.substring(3)}if(r){s.rel(e,t,r,false)}if(n){s.ael(e,t,n,false)}}else{var u=d(e,t);var c=A(n);if((u||c&&n!==null)&&!a){try{e[t]=n==null&&e.tagName.indexOf("-")===-1?"":n}catch(e){}}if(n==null||n===false){{e.removeAttribute(t)}}else if((!u||i&4||a)&&!c){n=n===true?"":n.toString();{e.setAttribute(t,n)}}}};var K=function(e){return!e?[]:e.split(" ")};var J=function(e,t,r,n){var a=t.$elm$.nodeType===11&&t.$elm$.host?t.$elm$.host:t.$elm$;var i=e&&e.$attrs$||L;var o=t.$attrs$||L;{for(n in i){if(o[n]==null&&i[n]!=null){G(a,n,i[n],undefined,r,t.$flags$)}}}for(n in o){G(a,n,i[n],o[n],r,t.$flags$)}};var X;var Y;var Z;var ee=false;var te=false;var re=false;var ne=false;var ae=function(e,t,r,n){var a=t.$children$[r];var i=0;var s;var l;if(N(a.$text$)){a.$elm$=o.createTextNode(a.$text$)}else{s=a.$elm$=o.createElement(a.$tag$);{J(null,a,ne)}if(a.$children$){for(i=0;i<a.$children$.length;++i){l=ae(e,a,i);if(l){s.appendChild(l)}}}}return a.$elm$};var ie=function(e,t,r,n,a,i){var o=e;var s;for(;a<=i;++a){if(n[a]){s=ae(null,r,a);if(s){n[a].$elm$=s;o.insertBefore(s,t)}}}};var oe=function(e,t,r,n){for(;t<=r;++t){if(N(e[t])){n=e[t].$elm$;ve(e[t],true);n.remove()}}};var se=function(e,t,r,n){var a=0;var i=0;var o=0;var s=0;var l=t.length-1;var f=t[0];var u=t[l];var c=n.length-1;var $=n[0];var v=n[c];var d;var h;while(a<=l&&i<=c){if(f==null){f=t[++a]}else if(u==null){u=t[--l]}else if($==null){$=n[++i]}else if(v==null){v=n[--c]}else if(le(f,$)){fe(f,$);f=t[++a];$=n[++i]}else if(le(u,v)){fe(u,v);u=t[--l];v=n[--c]}else if(le(f,v)){fe(f,v);e.insertBefore(f.$elm$,u.$elm$.nextSibling);f=t[++a];v=n[--c]}else if(le(u,$)){fe(u,$);e.insertBefore(u.$elm$,f.$elm$);u=t[--l];$=n[++i]}else{o=-1;{for(s=a;s<=l;++s){if(t[s]&&N(t[s].$key$)&&t[s].$key$===$.$key$){o=s;break}}}if(o>=0){h=t[o];if(h.$tag$!==$.$tag$){d=ae(t&&t[i],r,o)}else{fe(h,$);t[o]=undefined;d=h.$elm$}$=n[++i]}else{d=ae(t&&t[i],r,i);$=n[++i]}if(d){{f.$elm$.parentNode.insertBefore(d,f.$elm$)}}}}if(a>l){ie(e,n[c+1]==null?null:n[c+1].$elm$,r,n,i,c)}else if(i>c){oe(t,a,l)}};var le=function(e,t){if(e.$tag$===t.$tag$){{return e.$key$===t.$key$}return true}return false};var fe=function(e,t){var r=t.$elm$=e.$elm$;var n=e.$children$;var a=t.$children$;if(!N(t.$text$)){{{J(e,t,ne)}}if(N(n)&&N(a)){se(r,n,t,a)}else if(N(a)){if(N(e.$text$)){r.textContent=""}ie(r,null,t,a,0,a.length-1)}else if(N(n)){oe(n,0,n.length-1)}}else if(e.$text$!==t.$text$){r.textContent=t.$text$}};var ue=function(e,t,r,n,a,i,o,s){r=e.childNodes;for(n=0,a=r.length;n<a;n++){t=r[n];if(t.nodeType===1){if(t["s-sr"]){o=t["s-sn"];t.hidden=false;for(i=0;i<a;i++){if(r[i]["s-hn"]!==t["s-hn"]){s=r[i].nodeType;if(o!==""){if(s===1&&o===r[i].getAttribute("slot")){t.hidden=true;break}}else{if(s===1||s===3&&r[i].textContent.trim()!==""){t.hidden=true;break}}}}}ue(t)}}};var ce=[];var $e=function(e){var t=e.childNodes;var r=t.length;var n=0;var a=0;var i=0;var o;var s;var l;var f;for(r=t.length;n<r;n++){o=t[n];if(o["s-sr"]&&(s=o["s-cr"])){l=s.parentNode.childNodes;f=o["s-sn"];for(a=l.length-1;a>=0;a--){s=l[a];if(!s["s-cn"]&&!s["s-nr"]&&s["s-hn"]!==o["s-hn"]){i=s.nodeType;if((i===3||i===8)&&f===""||i===1&&s.getAttribute("slot")===null&&f===""||i===1&&s.getAttribute("slot")===f){if(!ce.some(function(e){return e.nodeToRelocate===s})){te=true;s["s-sn"]=f;ce.push({slotRefNode:o,nodeToRelocate:s})}}}}}if(o.nodeType===1){$e(o)}}};var ve=function(e,t){if(e){e.$attrs$&&e.$attrs$.ref&&e.$attrs$.ref(t?null:e.$elm$);e.$children$&&e.$children$.forEach(function(e){ve(e,t)})}};var de=function(e){return e&&e.$tag$===H};var he=function(e,t,r,a){var i=t.$vnode$||{$flags$:0};Z=E(e.tagName);if(de(a)){a.$tag$=null}else{a=F(null,null,a)}if(n.reflect&&r.$attrsToReflect$){a.$attrs$=a.$attrs$||{};r.$attrsToReflect$.forEach(function(t){var r=t[0],n=t[1];return a.$attrs$[n]=e[r]})}a.$flags$|=4;t.$vnode$=a;a.$elm$=i.$elm$=n.shadowDom?e.shadowRoot||e:e;if(n.scoped||n.shadowDom){X=e["s-sc"]}if(n.slotRelocation){Y=e["s-cr"];ee=l&&(r.$flags$&1)!==0;re=te=false}fe(i,a);if(n.slotRelocation){if(re){$e(a.$elm$);for(var f=0;f<ce.length;f++){var u=ce[f];if(!u.nodeToRelocate["s-ol"]){var c=n.isDebug||n.hydrateServerSide?o.createComment("org-loc"):o.createTextNode("");c["s-nr"]=u.nodeToRelocate;u.nodeToRelocate.parentNode.insertBefore(u.nodeToRelocate["s-ol"]=c,u.nodeToRelocate)}}s.$flags$|=1;for(var f=0;f<ce.length;f++){var u=ce[f];var $=u.slotRefNode.parentNode;var v=u.slotRefNode.nextSibling;var c=u.nodeToRelocate["s-ol"];while(c=c.previousSibling){var d=c["s-nr"];if(d&&d){if(d["s-sn"]===u.nodeToRelocate["s-sn"]){if($===d.parentNode){if((d=d.nextSibling)&&d&&!d["s-nr"]){v=d;break}}}}}if(!v&&$!==u.nodeToRelocate.parentNode||u.nodeToRelocate.nextSibling!==v){if(u.nodeToRelocate!==v){$.insertBefore(u.nodeToRelocate,v)}}}s.$flags$&=~1}if(te){ue(a.$elm$)}ce.length=0}};var pe=function(e,t){return __awaiter(r,void 0,void 0,function(){var r;return __generator(this,function(n){switch(n.label){case 0:if(!(e&&e[t]))return[3,4];n.label=1;case 1:n.trys.push([1,3,,4]);return[4,e[t]()];case 2:n.sent();return[3,4];case 3:r=n.sent();h(r);return[3,4];case 4:return[2]}})})};var me=function(e,t,n,a){return __awaiter(r,void 0,void 0,function(){var r;return __generator(this,function(i){{t.$flags$|=16}r=t.$lazyInstance$;{C(function(){return ge(e,t,n,r,a)})}return[2]})})};var ge=function(e,t,r,a,i){{t.$flags$&=~16}{e["s-lr"]=false}if(i){I(e,r,t.$modeName$)}{{t.$flags$|=4;try{he(e,t,r,n.allRenderFn?a.render():a.render&&a.render())}catch(e){h(e)}t.$flags$&=~4}}if(g){g.updateHost(e)}{e["s-lr"]=true}{t.$flags$|=2}if(e["s-rc"].length>0){e["s-rc"].forEach(function(e){return e()});e["s-rc"].length=0}ye(e,t)};var ye=function(e,t,r){if(!e["s-al"]){var n=t.$lazyInstance$;var a=t.$ancestorComponent$;if(!(t.$flags$&512)){t.$flags$|=512;{e.classList.add(U)}{pe(n,"componentDidLoad")}{t.$onReadyResolve$(e)}if(!a){o.documentElement.classList.add(U);{setTimeout(function(){return s.$flags$|=2},999)}}}if(a){if(r=a["s-al"]){r.delete(e);if(r.size===0){a["s-al"]=undefined;a["s-init"]()}}t.$ancestorComponent$=undefined}}};var be=function(e){if((s.$flags$&1)===0){var t=c(e);if(g){g.removeHost(e)}var r=t.$lazyInstance$;{pe(r,"componentDidUnload")}}};var we=function(e,t){if(e!=null&&!A(e)){if(t&1){return String(e)}return e}return e};var Se=function(e,t){return c(e).$instanceValues$.get(t)};var Re=function(e,t,r,a){var i=c(e);var o=i.$hostElement$;var s=i.$instanceValues$.get(t);var l=i.$flags$;r=we(r,a.$members$[t][0]);if(r!==s&&(!(l&8)||s===undefined)){i.$instanceValues$.set(t,r);if(i.$lazyInstance$){if(a.$watchers$&&(l&(1|8))===1){var f=a.$watchers$[t];if(f){f.forEach(function(e){try{(n.lazyLoad?i.$lazyInstance$:o)[e].call(n.lazyLoad?i.$lazyInstance$:o,r,s,t)}catch(e){h(e)}})}}if((l&(4|2|16))===2){me(o,i,a,false)}}}};var _e=function(e,t,r){if(t.$members$){if(e.watchers){t.$watchers$=e.watchers}var n=Object.entries(t.$members$);var a=e.prototype;n.forEach(function(e){var n=e[0],i=e[1][0];if(i&31||r&2&&i&32){Object.defineProperty(a,n,{get:function(){return Se(this,n)},set:function(e){Re(this,n,e,t)},configurable:true,enumerable:true})}else if(r&1&&i&64){Object.defineProperty(a,n,{value:function(){var e=[];for(var t=0;t<arguments.length;t++){e[t]=arguments[t]}var r=c(this);return r.$onReadyPromise$.then(function(){var t;return(t=r.$lazyInstance$)[n].apply(t,e)})}})}});if(r&1){var i=new Map;a.attributeChangedCallback=function(e,t,r){var n=i.get(e);this[n]=r===null&&typeof this[n]==="boolean"?false:r};e.observedAttributes=n.filter(function(e){var t=e[0],r=e[1];return r[0]&15}).map(function(e){var t=e[0],r=e[1];var n=r[1]||t;i.set(n,t);return n})}}return e};var xe=function(e,t,n,a,i){return __awaiter(r,void 0,void 0,function(){var r,a,o;return __generator(this,function(s){switch(s.label){case 0:if(!((t.$flags$&256)===0))return[3,2];t.$flags$|=256;return[4,p(n)];case 1:i=s.sent();if(!i.isProxied){{n.$watchers$=i.watchers}_e(i,n,2);i.isProxied=true}{t.$flags$|=8}try{new i(t)}catch(e){h(e)}{t.$flags$&=~8}Te();if(!i.isStyleRegistered&&i.style){r=i.style;a=W(n.$tagName$);M(a,r);i.isStyleRegistered=true}s.label=2;case 2:o=t.$ancestorComponent$;if(o&&!o["s-lr"]&&o["s-rc"]){o["s-rc"].push(function(){return xe(e,t,n)})}else{me(e,t,n,true)}return[2]}})})};var Te=function(e){};var ke=function(e,t){if((s.$flags$&1)===0){var r=c(e);if(!(r.$flags$&1)){r.$flags$|=1;{var a=e;while(a=a.parentNode||a.host){if(a["s-init"]&&!a["s-lr"]||n.hydrateClientSide&&a.nodeType===1&&a.hasAttribute("s-id")){r.$ancestorComponent$=a;(a["s-al"]=a["s-al"]||new Set).add(e);break}}}if(t.$members$){Object.entries(t.$members$).forEach(function(t){var r=t[0],n=t[1][0];if(n&31&&e.hasOwnProperty(r)){var a=e[r];delete e[r];e[r]=a}})}{xe(e,r,t)}}Te()}};var Ce=e("b",function(e,t){if(t===void 0){t={}}var r=[];var n=t.exclude||[];var a=o.head;var l=i.customElements;var f=a.querySelector("meta[charset]");var u=o.createElement("style");Object.assign(s,t);s.$resourcesUrl$=new URL(t.resourcesUrl||"/",i.location.href).href;if(t.syncQueue){s.$flags$|=4}e.forEach(function(e){return e[1].forEach(function(t){var a={$flags$:t[0],$tagName$:t[1],$members$:t[2],$listeners$:t[3]};{a.$watchers$={}}var i=a.$tagName$;var o=function(e){__extends(t,e);function t(t){var r=e.call(this,t)||this;t=r;{r["s-lr"]=false;r["s-rc"]=[]}v(t);return r}t.prototype.connectedCallback=function(){ke(this,a)};t.prototype.disconnectedCallback=function(){be(this)};t.prototype["s-init"]=function(){var e=c(this);if(e.$lazyInstance$){ye(this,e)}};t.prototype["s-hmr"]=function(e){};t.prototype.forceUpdate=function(){{var e=c(this);me(this,e,a,false)}};t.prototype.componentOnReady=function(){return c(this).$onReadyPromise$};return t}(HTMLElement);a.$lazyBundleIds$=e[0];if(!n.includes(i)&&!l.get(i)){r.push(i);l.define(i,_e(o,a,1))}})});u.innerHTML=r+"{visibility:hidden}.hydrated{visibility:inherit}";u.setAttribute("data-styles","");a.insertBefore(u,f?f.nextSibling:a.firstChild)})}}});