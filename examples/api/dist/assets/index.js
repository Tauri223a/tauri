var kt=Object.defineProperty;var Et=(e,t,n)=>t in e?kt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var j=(e,t,n)=>(Et(e,typeof t!="symbol"?t+"":t,n),n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const p of o.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&i(p)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}})();function y(){}function at(e){return e()}function Ke(){return Object.create(null)}function z(e){e.forEach(at)}function ut(e){return typeof e=="function"}function me(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}let $e;function $t(e,t){return e===t?!0:($e||($e=document.createElement("a")),$e.href=t,e===$e.href)}function Lt(e){return Object.keys(e).length===0}function Tt(e,...t){if(e==null){for(const i of t)i(void 0);return y}const n=e.subscribe(...t);return n.unsubscribe?()=>n.unsubscribe():n}function St(e,t,n){e.$$.on_destroy.push(Tt(t,n))}function s(e,t){e.appendChild(t)}function w(e,t,n){e.insertBefore(t,n||null)}function b(e){e.parentNode&&e.parentNode.removeChild(e)}function Je(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function d(e){return document.createElement(e)}function xt(e){return document.createElementNS("http://www.w3.org/2000/svg",e)}function pe(e){return document.createTextNode(e)}function g(){return pe(" ")}function dt(){return pe("")}function U(e,t,n,i){return e.addEventListener(t,n,i),()=>e.removeEventListener(t,n,i)}function c(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function Nt(e){return Array.from(e.childNodes)}function Ot(e,t){t=""+t,e.data!==t&&(e.data=t)}class Ct{constructor(t=!1){j(this,"is_svg",!1);j(this,"e");j(this,"n");j(this,"t");j(this,"a");this.is_svg=t,this.e=this.n=null}c(t){this.h(t)}m(t,n,i=null){this.e||(this.is_svg?this.e=xt(n.nodeName):this.e=d(n.nodeType===11?"TEMPLATE":n.nodeName),this.t=n.tagName!=="TEMPLATE"?n:n.content,this.c(t)),this.i(i)}h(t){this.e.innerHTML=t,this.n=Array.from(this.e.nodeName==="TEMPLATE"?this.e.content.childNodes:this.e.childNodes)}i(t){for(let n=0;n<this.n.length;n+=1)w(this.t,this.n[n],t)}p(t){this.d(),this.h(t),this.i(this.a)}d(){this.n.forEach(b)}}function Qe(e,t){return new e(t)}let he;function fe(e){he=e}function ft(){if(!he)throw new Error("Function called outside component initialization");return he}function Se(e){ft().$$.on_mount.push(e)}function ht(e){ft().$$.on_destroy.push(e)}const ee=[],De=[];let te=[];const Ze=[],It=Promise.resolve();let Ae=!1;function Dt(){Ae||(Ae=!0,It.then(mt))}function Me(e){te.push(e)}const Ie=new Set;let Q=0;function mt(){if(Q!==0)return;const e=he;do{try{for(;Q<ee.length;){const t=ee[Q];Q++,fe(t),At(t.$$)}}catch(t){throw ee.length=0,Q=0,t}for(fe(null),ee.length=0,Q=0;De.length;)De.pop()();for(let t=0;t<te.length;t+=1){const n=te[t];Ie.has(n)||(Ie.add(n),n())}te.length=0}while(ee.length);for(;Ze.length;)Ze.pop()();Ae=!1,Ie.clear(),fe(e)}function At(e){if(e.fragment!==null){e.update(),z(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(Me)}}function Mt(e){const t=[],n=[];te.forEach(i=>e.indexOf(i)===-1?t.push(i):n.push(i)),n.forEach(i=>i()),te=t}const Te=new Set;let F;function Wt(){F={r:0,c:[],p:F}}function Rt(){F.r||z(F.c),F=F.p}function We(e,t){e&&e.i&&(Te.delete(e),e.i(t))}function et(e,t,n,i){if(e&&e.o){if(Te.has(e))return;Te.add(e),F.c.push(()=>{Te.delete(e),i&&(n&&e.d(1),i())}),e.o(t)}else i&&i()}function Le(e){return(e==null?void 0:e.length)!==void 0?e:Array.from(e)}function tt(e){e&&e.c()}function Re(e,t,n){const{fragment:i,after_update:r}=e.$$;i&&i.m(t,n),Me(()=>{const o=e.$$.on_mount.map(at).filter(ut);e.$$.on_destroy?e.$$.on_destroy.push(...o):z(o),e.$$.on_mount=[]}),r.forEach(Me)}function Pe(e,t){const n=e.$$;n.fragment!==null&&(Mt(n.after_update),z(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function Pt(e,t){e.$$.dirty[0]===-1&&(ee.push(e),Dt(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function xe(e,t,n,i,r,o,p=null,l=[-1]){const m=he;fe(e);const a=e.$$={fragment:null,ctx:[],props:o,update:y,not_equal:r,bound:Ke(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(m?m.$$.context:[])),callbacks:Ke(),dirty:l,skip_bound:!1,root:t.target||m.$$.root};p&&p(a.root);let L=!1;if(a.ctx=n?n(e,t.props||{},(T,A,...N)=>{const M=N.length?N[0]:A;return a.ctx&&r(a.ctx[T],a.ctx[T]=M)&&(!a.skip_bound&&a.bound[T]&&a.bound[T](M),L&&Pt(e,T)),A}):[],a.update(),L=!0,z(a.before_update),a.fragment=i?i(a.ctx):!1,t.target){if(t.hydrate){const T=Nt(t.target);a.fragment&&a.fragment.l(T),T.forEach(b)}else a.fragment&&a.fragment.c();t.intro&&We(e.$$.fragment),Re(e,t.target,t.anchor),mt()}fe(m)}class Ne{constructor(){j(this,"$$");j(this,"$$set")}$destroy(){Pe(this,1),this.$destroy=y}$on(t,n){if(!ut(n))return y;const i=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(t){this.$$set&&!Lt(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const Ht="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(Ht);const Z=[];function qt(e,t=y){let n;const i=new Set;function r(l){if(me(e,l)&&(e=l,n)){const m=!Z.length;for(const a of i)a[1](),Z.push(a,e);if(m){for(let a=0;a<Z.length;a+=2)Z[a][0](Z[a+1]);Z.length=0}}}function o(l){r(l(e))}function p(l,m=y){const a=[l,m];return i.add(a),i.size===1&&(n=t(r,o)||y),l(e),()=>{i.delete(a),i.size===0&&n&&(n(),n=null)}}return{set:r,update:o,subscribe:p}}var jt=Object.defineProperty,pt=(e,t)=>{for(var n in t)jt(e,n,{get:t[n],enumerable:!0})},gt=(e,t,n)=>{if(!t.has(e))throw TypeError("Cannot "+n)},nt=(e,t,n)=>(gt(e,t,"read from private field"),n?n.call(e):t.get(e)),Ut=(e,t,n)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,n)},Ft=(e,t,n,i)=>(gt(e,t,"write to private field"),i?i.call(e,n):t.set(e,n),n),zt={};pt(zt,{Channel:()=>_t,PluginListener:()=>vt,addPluginListener:()=>Bt,convertFileSrc:()=>Vt,invoke:()=>D,transformCallback:()=>He});function He(e,t=!1){return window.__TAURI_INTERNALS__.transformCallback(e,t)}var de,_t=class{constructor(){this.__TAURI_CHANNEL_MARKER__=!0,Ut(this,de,()=>{}),this.id=He(e=>{nt(this,de).call(this,e)})}set onmessage(e){Ft(this,de,e)}get onmessage(){return nt(this,de)}toJSON(){return`__CHANNEL__:${this.id}`}};de=new WeakMap;var vt=class{constructor(e,t,n){this.plugin=e,this.event=t,this.channelId=n}async unregister(){return D(`plugin:${this.plugin}|remove_listener`,{event:this.event,channelId:this.channelId})}};async function Bt(e,t,n){let i=new _t;return i.onmessage=n,D(`plugin:${e}|register_listener`,{event:t,handler:i}).then(()=>new vt(e,t,i.id))}async function D(e,t={},n){return window.__TAURI_INTERNALS__.invoke(e,t,n)}function Vt(e,t="asset"){return window.__TAURI_INTERNALS__.convertFileSrc(e,t)}function Gt(e){let t,n,i,r,o,p;return{c(){t=d("div"),n=d("p"),n.innerHTML=`This is a demo of Tauri&#39;s API capabilities using the <code>@tauri-apps/api</code> package. It&#39;s used as the main validation app, serving as the test bed of our
    development process. In the future, this app will be used on Tauri&#39;s integration
    tests.`,i=g(),r=d("button"),r.textContent="Context menu",c(r,"class","btn")},m(l,m){w(l,t,m),s(t,n),s(t,i),s(t,r),o||(p=U(r,"click",e[0]),o=!0)},p:y,i:y,o:y,d(l){l&&b(t),o=!1,p()}}}function Xt(e){function t(){D("popup_context_menu")}return[t]}class Yt extends Ne{constructor(t){super(),xe(this,t,Xt,Gt,me,{})}}var Kt={};pt(Kt,{TauriEvent:()=>bt,emit:()=>wt,listen:()=>qe,once:()=>Jt});var bt=(e=>(e.WINDOW_RESIZED="tauri://resize",e.WINDOW_MOVED="tauri://move",e.WINDOW_CLOSE_REQUESTED="tauri://close-requested",e.WINDOW_CREATED="tauri://window-created",e.WINDOW_DESTROYED="tauri://destroyed",e.WINDOW_FOCUS="tauri://focus",e.WINDOW_BLUR="tauri://blur",e.WINDOW_SCALE_FACTOR_CHANGED="tauri://scale-change",e.WINDOW_THEME_CHANGED="tauri://theme-changed",e.WINDOW_FILE_DROP="tauri://file-drop",e.WINDOW_FILE_DROP_HOVER="tauri://file-drop-hover",e.WINDOW_FILE_DROP_CANCELLED="tauri://file-drop-cancelled",e.MENU="tauri://menu",e))(bt||{});async function yt(e,t){await D("plugin:event|unlisten",{event:e,eventId:t})}async function qe(e,t,n){return D("plugin:event|listen",{event:e,windowLabel:n==null?void 0:n.target,handler:He(t)}).then(i=>async()=>yt(e,i))}async function Jt(e,t,n){return qe(e,i=>{t(i),yt(e,i.id).catch(()=>{})},n)}async function wt(e,t,n){await D("plugin:event|emit",{event:e,windowLabel:n==null?void 0:n.target,payload:t})}function Qt(e){let t,n,i,r,o,p,l,m;return{c(){t=d("div"),n=d("button"),n.textContent="Call Log API",i=g(),r=d("button"),r.textContent="Call Request (async) API",o=g(),p=d("button"),p.textContent="Send event to Rust",c(n,"class","btn"),c(n,"id","log"),c(r,"class","btn"),c(r,"id","request"),c(p,"class","btn"),c(p,"id","event")},m(a,L){w(a,t,L),s(t,n),s(t,i),s(t,r),s(t,o),s(t,p),l||(m=[U(n,"click",e[0]),U(r,"click",e[1]),U(p,"click",e[2])],l=!0)},p:y,i:y,o:y,d(a){a&&b(t),l=!1,z(m)}}}function Zt(e,t,n){let{onMessage:i}=t,r;Se(async()=>{r=await qe("rust-event",i)}),ht(()=>{r&&r()});function o(){D("log_operation",{event:"tauri-click",payload:"this payload is optional because we used Option in Rust"})}function p(){D("perform_request",{endpoint:"dummy endpoint arg",body:{id:5,name:"test"}}).then(i).catch(i)}function l(){wt("js-event","this is the payload string")}return e.$$set=m=>{"onMessage"in m&&n(3,i=m.onMessage)},[o,p,l,i]}class en extends Ne{constructor(t){super(),xe(this,t,Zt,Qt,me,{onMessage:3})}}function tn(e){let t;return{c(){t=d("div"),t.innerHTML='<div class="note-red grow">Not available for Linux</div> <video id="localVideo" autoplay="" playsinline=""><track kind="captions"/></video>',c(t,"class","flex flex-col gap-2")},m(n,i){w(n,t,i)},p:y,i:y,o:y,d(n){n&&b(t)}}}function nn(e,t,n){let{onMessage:i}=t;const r=window.constraints={audio:!0,video:!0};function o(l){const m=document.querySelector("video"),a=l.getVideoTracks();i("Got stream with constraints:",r),i(`Using video device: ${a[0].label}`),window.stream=l,m.srcObject=l}function p(l){if(l.name==="ConstraintNotSatisfiedError"){const m=r.video;i(`The resolution ${m.width.exact}x${m.height.exact} px is not supported by your device.`)}else l.name==="PermissionDeniedError"&&i("Permissions have not been granted to use your camera and microphone, you need to allow the page access to your devices in order for the demo to work.");i(`getUserMedia error: ${l.name}`,l)}return Se(async()=>{try{const l=await navigator.mediaDevices.getUserMedia(r);o(l)}catch(l){p(l)}}),ht(()=>{window.stream.getTracks().forEach(function(l){l.stop()})}),e.$$set=l=>{"onMessage"in l&&n(0,i=l.onMessage)},[i]}class rn extends Ne{constructor(t){super(),xe(this,t,nn,tn,me,{onMessage:0})}}function it(e,t,n){const i=e.slice();return i[23]=t[n],i}function rt(e,t,n){const i=e.slice();return i[26]=t[n],i}function sn(e){let t;return{c(){t=d("span"),c(t,"class","i-codicon-menu animate-duration-300ms animate-fade-in")},m(n,i){w(n,t,i)},d(n){n&&b(t)}}}function on(e){let t;return{c(){t=d("span"),c(t,"class","i-codicon-close animate-duration-300ms animate-fade-in")},m(n,i){w(n,t,i)},d(n){n&&b(t)}}}function ln(e){let t,n;return{c(){t=pe(`Switch to Dark mode
        `),n=d("div"),c(n,"class","i-ph-moon")},m(i,r){w(i,t,r),w(i,n,r)},d(i){i&&(b(t),b(n))}}}function cn(e){let t,n;return{c(){t=pe(`Switch to Light mode
        `),n=d("div"),c(n,"class","i-ph-sun")},m(i,r){w(i,t,r),w(i,n,r)},d(i){i&&(b(t),b(n))}}}function an(e){let t,n,i,r,o,p,l;function m(){return e[14](e[26])}return{c(){t=d("a"),n=d("div"),i=g(),r=d("p"),r.textContent=`${e[26].label}`,c(n,"class",e[26].icon+" mr-2"),c(t,"href","##"),c(t,"class",o="nv "+(e[1]===e[26]?"nv_selected":""))},m(a,L){w(a,t,L),s(t,n),s(t,i),s(t,r),p||(l=U(t,"click",m),p=!0)},p(a,L){e=a,L&2&&o!==(o="nv "+(e[1]===e[26]?"nv_selected":""))&&c(t,"class",o)},d(a){a&&b(t),p=!1,l()}}}function st(e){let t,n=e[26]&&an(e);return{c(){n&&n.c(),t=dt()},m(i,r){n&&n.m(i,r),w(i,t,r)},p(i,r){i[26]&&n.p(i,r)},d(i){i&&b(t),n&&n.d(i)}}}function ot(e){let t,n=e[23].html+"",i;return{c(){t=new Ct(!1),i=dt(),t.a=i},m(r,o){t.m(n,r,o),w(r,i,o)},p(r,o){o&16&&n!==(n=r[23].html+"")&&t.p(n)},d(r){r&&(b(i),t.d())}}}function un(e){let t,n,i,r,o,p,l,m,a,L,T,A,N,M,ne,W,k,O,B,C,V,ie,ge,re,_e,f,v,S,se,R,P,G,ve=e[1].label+"",Oe,je,be,oe,_,Ue,I,ye,Fe,X,we,ze,le,Be,ce,ae,Ce,Ve;function Ge(u,x){return u[0]?on:sn}let ke=Ge(e),H=ke(e);function Xe(u,x){return u[2]?cn:ln}let Ee=Xe(e),q=Ee(e),Y=Le(e[5]),E=[];for(let u=0;u<Y.length;u+=1)E[u]=st(rt(e,Y,u));var K=e[1].component;function Ye(u,x){return{props:{onMessage:u[9],insecureRenderHtml:u[10]}}}K&&(_=Qe(K,Ye(e)));let J=Le(e[4]),$=[];for(let u=0;u<J.length;u+=1)$[u]=ot(it(e,J,u));return{c(){t=d("div"),H.c(),n=g(),i=d("div"),r=d("aside"),o=d("img"),l=g(),m=d("a"),q.c(),a=g(),L=d("br"),T=g(),A=d("div"),N=g(),M=d("br"),ne=g(),W=d("a"),W.innerHTML=`Documentation
      <span class="i-codicon-link-external"></span>`,k=g(),O=d("a"),O.innerHTML=`GitHub
      <span class="i-codicon-link-external"></span>`,B=g(),C=d("a"),C.innerHTML=`Source
      <span class="i-codicon-link-external"></span>`,V=g(),ie=d("br"),ge=g(),re=d("div"),_e=g(),f=d("br"),v=g(),S=d("div");for(let u=0;u<E.length;u+=1)E[u].c();se=g(),R=d("main"),P=d("div"),G=d("h1"),Oe=pe(ve),je=g(),be=d("div"),oe=d("div"),_&&tt(_.$$.fragment),Ue=g(),I=d("div"),ye=d("div"),Fe=g(),X=d("div"),we=d("p"),we.textContent="Console",ze=g(),le=d("div"),le.innerHTML='<div class="i-codicon-clear-all"></div>',Be=g(),ce=d("div");for(let u=0;u<$.length;u+=1)$[u].c();c(t,"id","sidebarToggle"),c(t,"class","z-2000 display-none lt-sm:flex justify-center items-center absolute top-2 left-2 w-8 h-8 rd-8 bg-accent dark:bg-darkAccent active:bg-accentDark dark:active:bg-darkAccentDark"),c(o,"class","self-center p-7 cursor-pointer"),$t(o.src,p="tauri_logo.png")||c(o,"src",p),c(o,"alt","Tauri logo"),c(m,"href","##"),c(m,"class","nv justify-between h-8"),c(A,"class","bg-white/5 h-2px"),c(W,"class","nv justify-between h-8"),c(W,"target","_blank"),c(W,"href","https://tauri.app/v1/guides/"),c(O,"class","nv justify-between h-8"),c(O,"target","_blank"),c(O,"href","https://github.com/tauri-apps/tauri"),c(C,"class","nv justify-between h-8"),c(C,"target","_blank"),c(C,"href","https://github.com/tauri-apps/tauri/tree/dev/examples/api"),c(re,"class","bg-white/5 h-2px"),c(S,"class","flex flex-col overflow-y-auto children-h-10 children-flex-none gap-1"),c(r,"id","sidebar"),c(r,"class","lt-sm:h-screen lt-sm:shadow-lg lt-sm:shadow lt-sm:transition-transform lt-sm:absolute lt-sm:z-1999 bg-darkPrimaryLighter transition-colors-250 overflow-hidden grid grid-rows-[min-content_auto] select-none px-2"),c(oe,"class","mr-2"),c(be,"class","overflow-y-auto"),c(P,"class","px-5 overflow-hidden grid grid-rows-[auto_1fr]"),c(ye,"class","bg-black/20 h-2px cursor-ns-resize"),c(we,"class","font-semibold"),c(le,"class","cursor-pointer h-85% rd-1 p-1 flex justify-center items-center hover:bg-hoverOverlay dark:hover:bg-darkHoverOverlay active:bg-hoverOverlay/25 dark:active:bg-darkHoverOverlay/25 "),c(X,"class","flex justify-between items-center px-2"),c(ce,"class","px-2 overflow-y-auto all:font-mono code-block all:text-xs"),c(I,"id","console"),c(I,"class","select-none h-15rem grid grid-rows-[2px_2rem_1fr] gap-1 overflow-hidden"),c(R,"class","flex-1 bg-primary dark:bg-darkPrimary transition-transform transition-colors-250 grid grid-rows-[2fr_auto]"),c(i,"class","flex h-screen w-screen overflow-hidden children-pt8 children-pb-2 text-primaryText dark:text-darkPrimaryText")},m(u,x){w(u,t,x),H.m(t,null),w(u,n,x),w(u,i,x),s(i,r),s(r,o),s(r,l),s(r,m),q.m(m,null),s(r,a),s(r,L),s(r,T),s(r,A),s(r,N),s(r,M),s(r,ne),s(r,W),s(r,k),s(r,O),s(r,B),s(r,C),s(r,V),s(r,ie),s(r,ge),s(r,re),s(r,_e),s(r,f),s(r,v),s(r,S);for(let h=0;h<E.length;h+=1)E[h]&&E[h].m(S,null);s(i,se),s(i,R),s(R,P),s(P,G),s(G,Oe),s(P,je),s(P,be),s(be,oe),_&&Re(_,oe,null),s(R,Ue),s(R,I),s(I,ye),s(I,Fe),s(I,X),s(X,we),s(X,ze),s(X,le),s(I,Be),s(I,ce);for(let h=0;h<$.length;h+=1)$[h]&&$[h].m(ce,null);e[15](I),ae=!0,Ce||(Ve=[U(m,"click",e[7]),U(ye,"mousedown",e[12]),U(le,"click",e[11])],Ce=!0)},p(u,[x]){if(ke!==(ke=Ge(u))&&(H.d(1),H=ke(u),H&&(H.c(),H.m(t,null))),Ee!==(Ee=Xe(u))&&(q.d(1),q=Ee(u),q&&(q.c(),q.m(m,null))),x&99){Y=Le(u[5]);let h;for(h=0;h<Y.length;h+=1){const ue=rt(u,Y,h);E[h]?E[h].p(ue,x):(E[h]=st(ue),E[h].c(),E[h].m(S,null))}for(;h<E.length;h+=1)E[h].d(1);E.length=Y.length}if((!ae||x&2)&&ve!==(ve=u[1].label+"")&&Ot(Oe,ve),x&2&&K!==(K=u[1].component)){if(_){Wt();const h=_;et(h.$$.fragment,1,0,()=>{Pe(h,1)}),Rt()}K?(_=Qe(K,Ye(u)),tt(_.$$.fragment),We(_.$$.fragment,1),Re(_,oe,null)):_=null}if(x&16){J=Le(u[4]);let h;for(h=0;h<J.length;h+=1){const ue=it(u,J,h);$[h]?$[h].p(ue,x):($[h]=ot(ue),$[h].c(),$[h].m(ce,null))}for(;h<$.length;h+=1)$[h].d(1);$.length=J.length}},i(u){ae||(_&&We(_.$$.fragment,u),ae=!0)},o(u){_&&et(_.$$.fragment,u),ae=!1},d(u){u&&(b(t),b(n),b(i)),H.d(),q.d(),Je(E,u),_&&Pe(_),Je($,u),e[15](null),Ce=!1,z(Ve)}}}let lt=50;function ct(e){const t=document.querySelector("html");e?t.classList.add("dark"):t.classList.remove("dark"),localStorage&&localStorage.setItem("theme",e?"dark":"")}function dn(e,t){e.style.setProperty("--translate-x",`${t?"0":"-18.75"}rem`)}function fn(e,t,n){let i;document.addEventListener("keydown",f=>{f.ctrlKey&&f.key==="b"&&D("toggle_menu")});const r=[{label:"Welcome",component:Yt,icon:"i-ph-hand-waving"},{label:"Communication",component:en,icon:"i-codicon-radio-tower"},{label:"WebRTC",component:rn,icon:"i-ph-broadcast"}];let o=r[0];function p(f){n(1,o=f)}let l;Se(()=>{n(2,l=localStorage&&localStorage.getItem("theme")=="dark"),ct(l)});function m(){n(2,l=!l),ct(l)}let a=qt([]);St(e,a,f=>n(4,i=f));function L(f){a.update(v=>[{html:`<pre><strong class="text-accent dark:text-darkAccent">[${new Date().toLocaleTimeString()}]:</strong> `+(typeof f=="string"?f:JSON.stringify(f,null,1))+"</pre>"},...v])}function T(f){a.update(v=>[{html:`<pre><strong class="text-accent dark:text-darkAccent">[${new Date().toLocaleTimeString()}]:</strong> `+f+"</pre>"},...v])}function A(){a.update(()=>[])}let N,M,ne;function W(f){ne=f.clientY;const v=window.getComputedStyle(N);M=parseInt(v.height,10);const S=R=>{const P=R.clientY-ne,G=M-P;n(3,N.style.height=`${G<lt?lt:G}px`,N)},se=()=>{document.removeEventListener("mouseup",se),document.removeEventListener("mousemove",S)};document.addEventListener("mouseup",se),document.addEventListener("mousemove",S)}let k=!1,O,B,C=!1,V=0,ie=0;const ge=(f,v,S)=>Math.min(Math.max(v,f),S);Se(()=>{n(13,O=document.querySelector("#sidebar")),B=document.querySelector("#sidebarToggle"),document.addEventListener("click",f=>{B.contains(f.target)?n(0,k=!k):k&&!O.contains(f.target)&&n(0,k=!1)}),document.addEventListener("touchstart",f=>{if(B.contains(f.target))return;const v=f.touches[0].clientX;(0<v&&v<20&&!k||k)&&(C=!0,V=v)}),document.addEventListener("touchmove",f=>{if(C){const v=f.touches[0].clientX;ie=v;const S=(v-V)/10;O.style.setProperty("--translate-x",`-${ge(0,k?0-S:18.75-S,18.75)}rem`)}}),document.addEventListener("touchend",()=>{if(C){const f=(ie-V)/10;n(0,k=k?f>-(18.75/2):f>18.75/2)}C=!1})});const re=f=>{p(f),n(0,k=!1)};function _e(f){De[f?"unshift":"push"](()=>{N=f,n(3,N)})}return e.$$.update=()=>{if(e.$$.dirty&1){const f=document.querySelector("#sidebar");f&&dn(f,k)}},[k,o,l,N,i,r,p,m,a,L,T,A,W,O,re,_e]}class hn extends Ne{constructor(t){super(),xe(this,t,fn,un,me,{})}}new hn({target:document.querySelector("#app")});
