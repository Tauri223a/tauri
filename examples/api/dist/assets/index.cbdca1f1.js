var Yl=Object.defineProperty,Ql=Object.defineProperties;var Zl=Object.getOwnPropertyDescriptors;var gl=Object.getOwnPropertySymbols;var $l=Object.prototype.hasOwnProperty,xl=Object.prototype.propertyIsEnumerable;var ml=(n,t,i)=>t in n?Yl(n,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):n[t]=i,vl=(n,t)=>{for(var i in t||(t={}))$l.call(t,i)&&ml(n,i,t[i]);if(gl)for(var i of gl(t))xl.call(t,i)&&ml(n,i,t[i]);return n},_l=(n,t)=>Ql(n,Zl(t));import{S as G,i as V,s as J,e as a,a as g,t as M,b as u,c as S,d as e,l as y,f as R,n as N,g as L,r as Y,h as ei,j as ti,o as ni,k as li,m as bl,p as ii,q as it,u as wl,v as gn,w as mn,x as si,y as O,z as kl,A as yl,B as oi,C as Nt,D as It,E as Cl,F as ai,G as ui,H as ri,I as Ml,J as ae,K as qt,L as ci,M as Tl,N as Sl,O as F,P as Ll,_ as El,Q as vn,R as _n,T as zl,U as Ol,V as pi,W as di,X as Pl,Y as fi,Z as hi,$ as gi,a0 as mi,a1 as vi,a2 as _i,a3 as bi,a4 as wi,a5 as Al,a6 as Ul,a7 as Wl,a8 as ki,a9 as Nl,aa as Il,ab as yi,ac as Ci,ad as Mi}from"./vendor.32016365.js";const Ti=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))l(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&l(c)}).observe(document,{childList:!0,subtree:!0});function i(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerpolicy&&(o.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?o.credentials="include":s.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(s){if(s.ep)return;s.ep=!0;const o=i(s);fetch(s.href,o)}};Ti();function Si(n){let t,i,l,s,o,c,r,m,h,w,v,d,p,f,k,_,T,C,P,W,A;return{c(){t=a("h1"),t.textContent="Welcome",i=g(),l=a("p"),l.textContent="Tauri's API capabilities using the ` @tauri-apps/api ` package. It's used as\n  the main validation app, serving as the testbed of our development process. In\n  the future, this app will be used on Tauri's integration tests.",s=g(),o=a("p"),c=M("Current App version: "),r=M(n[0]),m=g(),h=a("p"),w=M("Current Tauri version: "),v=M(n[1]),d=g(),p=a("p"),f=M("Current App name: "),k=M(n[2]),_=g(),T=a("button"),T.textContent="Close application",C=g(),P=a("button"),P.textContent="Relaunch application",u(T,"class","button"),u(P,"class","button")},m(E,I){S(E,t,I),S(E,i,I),S(E,l,I),S(E,s,I),S(E,o,I),e(o,c),e(o,r),S(E,m,I),S(E,h,I),e(h,w),e(h,v),S(E,d,I),S(E,p,I),e(p,f),e(p,k),S(E,_,I),S(E,T,I),S(E,C,I),S(E,P,I),W||(A=[y(T,"click",n[3]),y(P,"click",n[4])],W=!0)},p(E,[I]){I&1&&R(r,E[0]),I&2&&R(v,E[1]),I&4&&R(k,E[2])},i:N,o:N,d(E){E&&L(t),E&&L(i),E&&L(l),E&&L(s),E&&L(o),E&&L(m),E&&L(h),E&&L(d),E&&L(p),E&&L(_),E&&L(T),E&&L(C),E&&L(P),W=!1,Y(A)}}}function Li(n,t,i){let l=0,s=0,o="Unknown";ei().then(m=>{i(2,o=m)}),ti().then(m=>{i(0,l=m)}),ni().then(m=>{i(1,s=m)});async function c(){await li()}async function r(){await bl()}return[l,s,o,c,r]}class Ei extends G{constructor(t){super();V(this,t,Li,Si,J,{})}}function zi(n){let t,i,l,s,o,c,r,m,h,w,v;return{c(){t=a("div"),i=M(`This binary can be run on the terminal and takes the following arguments:
  `),l=a("ul"),l.innerHTML=`<li>--config PATH</li> 
    <li>--theme light|dark|system</li> 
    <li>--verbose</li>`,s=M(`
  Additionally, it has a `),o=a("i"),o.textContent="update --background",c=M(` subcommand.
  Note that the arguments are only parsed, not implemented.
  `),r=a("br"),m=g(),h=a("button"),h.textContent="Get matches",u(h,"class","button"),u(h,"id","cli-matches")},m(d,p){S(d,t,p),e(t,i),e(t,l),e(t,s),e(t,o),e(t,c),e(t,r),e(t,m),e(t,h),w||(v=y(h,"click",n[0]),w=!0)},p:N,i:N,o:N,d(d){d&&L(t),w=!1,v()}}}function Oi(n,t,i){let{onMessage:l}=t;function s(){ii().then(l).catch(l)}return n.$$set=o=>{"onMessage"in o&&i(1,l=o.onMessage)},[s,l]}class Pi extends G{constructor(t){super();V(this,t,Oi,zi,J,{onMessage:1})}}function Ai(n){let t,i,l,s,o,c,r,m;return{c(){t=a("div"),i=a("button"),i.textContent="Call Log API",l=g(),s=a("button"),s.textContent="Call Request (async) API",o=g(),c=a("button"),c.textContent="Send event to Rust",u(i,"class","button"),u(i,"id","log"),u(s,"class","button"),u(s,"id","request"),u(c,"class","button"),u(c,"id","event")},m(h,w){S(h,t,w),e(t,i),e(t,l),e(t,s),e(t,o),e(t,c),r||(m=[y(i,"click",n[0]),y(s,"click",n[1]),y(c,"click",n[2])],r=!0)},p:N,i:N,o:N,d(h){h&&L(t),r=!1,Y(m)}}}function Ui(n,t,i){let{onMessage:l}=t,s;it(async()=>{s=await wl("rust-event",l)}),gn(()=>{s&&s()});function o(){mn("log_operation",{event:"tauri-click",payload:"this payload is optional because we used Option in Rust"})}function c(){mn("perform_request",{endpoint:"dummy endpoint arg",body:{id:5,name:"test"}}).then(l).catch(l)}function r(){si("js-event","this is the payload string")}return n.$$set=m=>{"onMessage"in m&&i(3,l=m.onMessage)},[o,c,r,l]}class Wi extends G{constructor(t){super();V(this,t,Ui,Ai,J,{onMessage:3})}}function Ni(n){let t,i,l,s,o,c,r,m,h,w,v,d,p,f,k,_,T,C,P,W;return{c(){t=a("div"),i=a("input"),l=g(),s=a("input"),o=g(),c=a("div"),r=a("input"),m=g(),h=a("label"),h.textContent="Multiple",w=g(),v=a("div"),d=a("input"),p=g(),f=a("label"),f.textContent="Directory",k=g(),_=a("button"),_.textContent="Open dialog",T=g(),C=a("button"),C.textContent="Open save dialog",u(i,"id","dialog-default-path"),u(i,"placeholder","Default path"),u(s,"id","dialog-filter"),u(s,"placeholder","Extensions filter, comma-separated"),u(s,"class","svelte-1eg58yg"),u(r,"type","checkbox"),u(r,"id","dialog-multiple"),u(h,"for","dialog-multiple"),u(d,"type","checkbox"),u(d,"id","dialog-directory"),u(f,"for","dialog-directory"),u(_,"class","button"),u(_,"id","open-dialog"),u(C,"class","button"),u(C,"id","save-dialog")},m(A,E){S(A,t,E),e(t,i),O(i,n[0]),e(t,l),e(t,s),O(s,n[1]),e(t,o),e(t,c),e(c,r),r.checked=n[2],e(c,m),e(c,h),e(t,w),e(t,v),e(v,d),d.checked=n[3],e(v,p),e(v,f),e(t,k),e(t,_),e(t,T),e(t,C),P||(W=[y(i,"input",n[7]),y(s,"input",n[8]),y(r,"change",n[9]),y(d,"change",n[10]),y(_,"click",n[4]),y(C,"click",n[5])],P=!0)},p(A,[E]){E&1&&i.value!==A[0]&&O(i,A[0]),E&2&&s.value!==A[1]&&O(s,A[1]),E&4&&(r.checked=A[2]),E&8&&(d.checked=A[3])},i:N,o:N,d(A){A&&L(t),P=!1,Y(W)}}}function Ii(n,t){var i=new Blob([n],{type:"application/octet-binary"}),l=new FileReader;l.onload=function(s){var o=s.target.result;t(o.substr(o.indexOf(",")+1))},l.readAsDataURL(i)}function qi(n,t,i){let{onMessage:l}=t,s=null,o=null,c=!1,r=!1;function m(){kl({defaultPath:s,filters:o?[{name:"Tauri Example",extensions:o.split(",").map(f=>f.trim())}]:[],multiple:c,directory:r}).then(function(f){if(Array.isArray(f))l(f);else{var k=f,_=k.match(/\S+\.\S+$/g);yl(k).then(function(T){_&&(k.includes(".png")||k.includes(".jpg"))?Ii(new Uint8Array(T),function(C){var P="data:image/png;base64,"+C;l('<img src="'+P+'"></img>')}):l(f)}).catch(l(f))}}).catch(l)}function h(){oi({defaultPath:s,filters:o?[{name:"Tauri Example",extensions:o.split(",").map(f=>f.trim())}]:[]}).then(l).catch(l)}function w(){s=this.value,i(0,s)}function v(){o=this.value,i(1,o)}function d(){c=this.checked,i(2,c)}function p(){r=this.checked,i(3,r)}return n.$$set=f=>{"onMessage"in f&&i(6,l=f.onMessage)},[s,o,c,r,m,h,l,w,v,d,p]}class Hi extends G{constructor(t){super();V(this,t,qi,Ni,J,{onMessage:6})}}function ql(n,t,i){const l=n.slice();return l[8]=t[i],l}function Hl(n){let t,i=n[8][0]+"",l,s;return{c(){t=a("option"),l=M(i),t.__value=s=n[8][1],t.value=t.__value},m(o,c){S(o,t,c),e(t,l)},p:N,d(o){o&&L(t)}}}function Ri(n){let t,i,l,s,o,c,r,m,h,w,v,d,p,f=n[2],k=[];for(let _=0;_<f.length;_+=1)k[_]=Hl(ql(n,f,_));return{c(){t=a("form"),i=a("select"),l=a("option"),l.textContent="None";for(let _=0;_<k.length;_+=1)k[_].c();s=g(),o=a("input"),c=g(),r=a("button"),r.textContent="Read",m=g(),h=a("button"),h.textContent="Use as img src",w=g(),v=a("img"),l.__value="",l.value=l.__value,u(i,"class","button"),u(i,"id","dir"),u(o,"id","path-to-read"),u(o,"placeholder","Type the path to read..."),u(r,"class","button"),u(r,"id","read"),u(h,"class","button"),u(h,"type","button"),u(v,"alt","file")},m(_,T){S(_,t,T),e(t,i),e(i,l);for(let C=0;C<k.length;C+=1)k[C].m(i,null);e(t,s),e(t,o),O(o,n[0]),e(t,c),e(t,r),e(t,m),e(t,h),e(t,w),e(t,v),n[7](v),d||(p=[y(o,"input",n[6]),y(h,"click",n[4]),y(t,"submit",Nt(n[3]))],d=!0)},p(_,[T]){if(T&4){f=_[2];let C;for(C=0;C<f.length;C+=1){const P=ql(_,f,C);k[C]?k[C].p(P,T):(k[C]=Hl(P),k[C].c(),k[C].m(i,null))}for(;C<k.length;C+=1)k[C].d(1);k.length=f.length}T&1&&o.value!==_[0]&&O(o,_[0])},i:N,o:N,d(_){_&&L(t),It(k,_),n[7](null),d=!1,Y(p)}}}function Rl(){return document.getElementById("dir").value?parseInt(dir.value):null}function Di(n,t){const i=new Blob([n],{type:"application/octet-binary"}),l=new FileReader;l.onload=function(s){const o=s.target.result;t(o.substr(o.indexOf(",")+1))},l.readAsDataURL(i)}function ji(n,t,i){let{onMessage:l}=t,s="",o;const c=Object.keys(Cl).filter(v=>isNaN(parseInt(v))).map(v=>[v,Cl[v]]);function r(){const v=s.match(/\S+\.\S+$/g),d={dir:Rl()};(v?yl(s,d):ai(s,d)).then(function(f){if(v)if(s.includes(".png")||s.includes(".jpg"))Di(new Uint8Array(f),function(k){const _="data:image/png;base64,"+k;l('<img src="'+_+'"></img>')});else{const k=String.fromCharCode.apply(null,f);l('<textarea id="file-response" style="height: 400px"></textarea><button id="file-save">Save</button>'),setTimeout(()=>{const _=document.getElementById("file-response");_.value=k,document.getElementById("file-save").addEventListener("click",function(){writeFile({file:s,contents:_.value},{dir:Rl()}).catch(l)})})}else l(f)}).catch(l)}function m(){i(1,o.src=ui(s),o)}function h(){s=this.value,i(0,s)}function w(v){ri[v?"unshift":"push"](()=>{o=v,i(1,o)})}return n.$$set=v=>{"onMessage"in v&&i(5,l=v.onMessage)},[s,o,c,r,m,l,h,w]}class Bi extends G{constructor(t){super();V(this,t,ji,Ri,J,{onMessage:5})}}function Fi(n){let t,i,l,s,o,c,r,m,h,w,v,d,p,f,k,_,T;return{c(){t=a("form"),i=a("select"),l=a("option"),l.textContent="GET",s=a("option"),s.textContent="POST",o=a("option"),o.textContent="PUT",c=a("option"),c.textContent="PATCH",r=a("option"),r.textContent="DELETE",m=g(),h=a("input"),w=g(),v=a("br"),d=g(),p=a("textarea"),f=g(),k=a("button"),k.textContent="Make request",l.__value="GET",l.value=l.__value,s.__value="POST",s.value=s.__value,o.__value="PUT",o.value=o.__value,c.__value="PATCH",c.value=c.__value,r.__value="DELETE",r.value=r.__value,u(i,"class","button"),u(i,"id","request-method"),n[0]===void 0&&Ml(()=>n[5].call(i)),u(h,"id","request-url"),u(h,"placeholder","Type the request URL..."),u(p,"id","request-body"),u(p,"placeholder","Request body"),u(p,"rows","5"),ae(p,"width","100%"),ae(p,"margin-right","10px"),ae(p,"font-size","12px"),u(k,"class","button"),u(k,"id","make-request")},m(C,P){S(C,t,P),e(t,i),e(i,l),e(i,s),e(i,o),e(i,c),e(i,r),qt(i,n[0]),e(t,m),e(t,h),O(h,n[1]),e(t,w),e(t,v),e(t,d),e(t,p),O(p,n[2]),e(t,f),e(t,k),_||(T=[y(i,"change",n[5]),y(h,"input",n[6]),y(p,"input",n[7]),y(t,"submit",Nt(n[3]))],_=!0)},p(C,[P]){P&1&&qt(i,C[0]),P&2&&h.value!==C[1]&&O(h,C[1]),P&4&&O(p,C[2])},i:N,o:N,d(C){C&&L(t),_=!1,Y(T)}}}function Gi(n,t,i){let l="GET",s="https://jsonplaceholder.typicode.com/todos/1",o="",{onMessage:c}=t;async function r(){const v=await ci(),f={url:s||""||"",method:l||"GET"||"GET"};o.startsWith("{")&&o.endsWith("}")||o.startsWith("[")&&o.endsWith("]")?f.body=Tl.json(JSON.parse(o)):o!==""&&(f.body=Tl.text(o)),v.request(f).then(c).catch(c)}function m(){l=Sl(this),i(0,l)}function h(){s=this.value,i(1,s)}function w(){o=this.value,i(2,o)}return n.$$set=v=>{"onMessage"in v&&i(4,c=v.onMessage)},[l,s,o,r,c,m,h,w]}class Vi extends G{constructor(t){super();V(this,t,Gi,Fi,J,{onMessage:4})}}function Ji(n){let t,i,l;return{c(){t=a("button"),t.textContent="Send test notification",u(t,"class","button"),u(t,"id","notification")},m(s,o){S(s,t,o),i||(l=y(t,"click",n[0]),i=!0)},p:N,i:N,o:N,d(s){s&&L(t),i=!1,l()}}}function Dl(){new Notification("Notification title",{body:"This is the notification body"})}function Ki(n,t,i){let{onMessage:l}=t;function s(){Notification.permission==="default"?Notification.requestPermission().then(function(o){o==="granted"?Dl():l("Permission is "+o)}).catch(l):Notification.permission==="granted"?Dl():l("Permission is denied")}return n.$$set=o=>{"onMessage"in o&&i(1,l=o.onMessage)},[s,l]}class Xi extends G{constructor(t){super();V(this,t,Ki,Ji,J,{onMessage:1})}}function jl(n,t,i){const l=n.slice();return l[54]=t[i],l}function Bl(n){let t,i=n[54]+"",l,s;return{c(){t=a("option"),l=M(i),t.__value=s=n[54],t.value=t.__value},m(o,c){S(o,t,c),e(t,l)},p(o,c){c[0]&2&&i!==(i=o[54]+"")&&R(l,i),c[0]&2&&s!==(s=o[54])&&(t.__value=s,t.value=t.__value)},d(o){o&&L(t)}}}function Yi(n){let t,i,l,s,o,c,r,m,h,w,v,d,p,f,k,_,T,C,P,W,A,E,I,j,D,X,Z,U,ne,H,ie,ue,st,ot,Le,at,Re,Q,re,Ee,ut,$,rt,ze,ct,x,pt,ce,Oe,dt,ee,ft,Pe,ht,te,gt,q,Ce,bn,pe,wn,mt,kn,de,yn,Ae,vt,Cn,se,Mn,_t,Tn,oe,Ht,le,Ue,fe,Rt,Sn,De,Ln,bt=n[20].width+"",Dt,En,je,zn,wt=n[20].height+"",jt,On,he,Bt,Pn,Be,An,kt=n[21].width+"",Ft,Un,Fe,Wn,yt=n[21].height+"",Gt,Nn,We,ge,Vt,In,Ge,qn,Ct=n[20].toLogical(n[17]).width+"",Jt,Hn,Ve,Rn,Mt=n[20].toLogical(n[17]).height+"",Kt,Dn,me,Xt,jn,Je,Bn,Tt=n[21].toLogical(n[17]).width+"",Yt,Fn,Ke,Gn,St=n[21].toLogical(n[17]).height+"",Qt,Vn,Ne,ve,Zt,Jn,Xe,Kn,Lt=n[18].x+"",$t,Xn,Ye,Yn,Et=n[18].y+"",xt,Qn,_e,en,Zn,Qe,$n,zt=n[19].x+"",tn,xn,Ze,el,Ot=n[19].y+"",nn,tl,Ie,be,ln,nl,$e,ll,Pt=n[18].toLogical(n[17]).x+"",sn,il,xe,sl,At=n[18].toLogical(n[17]).y+"",on,ol,we,an,al,et,ul,Ut=n[19].toLogical(n[17]).x+"",un,rl,tt,cl,Wt=n[19].toLogical(n[17]).y+"",rn,cn,ke,Me,pl,nt,pn,ye,Te,dl,lt,dn,Se,fn,qe,hn,fl,He=Object.keys(n[1]),K=[];for(let b=0;b<He.length;b+=1)K[b]=Bl(jl(n,He,b));return{c(){t=a("div"),i=a("select");for(let b=0;b<K.length;b+=1)K[b].c();l=g(),s=a("div"),o=a("label"),c=a("input"),r=M(`
      Resizable`),m=g(),h=a("label"),w=a("input"),v=M(`
      Maximize`),d=g(),p=a("button"),p.textContent="Center",f=g(),k=a("button"),k.textContent="Minimize",_=g(),T=a("button"),T.textContent="Hide",C=g(),P=a("label"),W=a("input"),A=M(`
      Transparent`),E=g(),I=a("label"),j=a("input"),D=M(`
      Has decorations`),X=g(),Z=a("label"),U=a("input"),ne=M(`
      Always on top`),H=g(),ie=a("label"),ue=a("input"),st=M(`
      Fullscreen`),ot=g(),Le=a("button"),Le.textContent="Change icon",at=g(),Re=a("div"),Q=a("div"),re=a("div"),Ee=a("div"),ut=M(`X
          `),$=a("input"),rt=g(),ze=a("div"),ct=M(`Y
          `),x=a("input"),pt=g(),ce=a("div"),Oe=a("div"),dt=M(`Width
          `),ee=a("input"),ft=g(),Pe=a("div"),ht=M(`Height
          `),te=a("input"),gt=g(),q=a("div"),Ce=a("div"),bn=M(`Min width
          `),pe=a("input"),wn=g(),mt=a("div"),kn=M(`Min height
          `),de=a("input"),yn=g(),Ae=a("div"),vt=a("div"),Cn=M(`Max width
          `),se=a("input"),Mn=g(),_t=a("div"),Tn=M(`Max height
          `),oe=a("input"),Ht=g(),le=a("div"),Ue=a("div"),fe=a("div"),Rt=a("div"),Rt.textContent="Inner Size",Sn=g(),De=a("span"),Ln=M("Width: "),Dt=M(bt),En=g(),je=a("span"),zn=M("Height: "),jt=M(wt),On=g(),he=a("div"),Bt=a("div"),Bt.textContent="Outer Size",Pn=g(),Be=a("span"),An=M("Width: "),Ft=M(kt),Un=g(),Fe=a("span"),Wn=M("Height: "),Gt=M(yt),Nn=g(),We=a("div"),ge=a("div"),Vt=a("div"),Vt.textContent="Inner Logical Size",In=g(),Ge=a("span"),qn=M("Width: "),Jt=M(Ct),Hn=g(),Ve=a("span"),Rn=M("Height: "),Kt=M(Mt),Dn=g(),me=a("div"),Xt=a("div"),Xt.textContent="Outer Logical Size",jn=g(),Je=a("span"),Bn=M("Width: "),Yt=M(Tt),Fn=g(),Ke=a("span"),Gn=M("Height: "),Qt=M(St),Vn=g(),Ne=a("div"),ve=a("div"),Zt=a("div"),Zt.textContent="Inner Position",Jn=g(),Xe=a("span"),Kn=M("x: "),$t=M(Lt),Xn=g(),Ye=a("span"),Yn=M("y: "),xt=M(Et),Qn=g(),_e=a("div"),en=a("div"),en.textContent="Outer Position",Zn=g(),Qe=a("span"),$n=M("x: "),tn=M(zt),xn=g(),Ze=a("span"),el=M("y: "),nn=M(Ot),tl=g(),Ie=a("div"),be=a("div"),ln=a("div"),ln.textContent="Inner Logical Position",nl=g(),$e=a("span"),ll=M("x: "),sn=M(Pt),il=g(),xe=a("span"),sl=M("y: "),on=M(At),ol=g(),we=a("div"),an=a("div"),an.textContent="Outer Logical Position",al=g(),et=a("span"),ul=M("x: "),un=M(Ut),rl=g(),tt=a("span"),cl=M("y: "),rn=M(Wt),cn=g(),ke=a("form"),Me=a("input"),pl=g(),nt=a("button"),nt.textContent="Set title",pn=g(),ye=a("form"),Te=a("input"),dl=g(),lt=a("button"),lt.textContent="Open URL",dn=g(),Se=a("button"),Se.textContent="Request attention",fn=g(),qe=a("button"),qe.textContent="New window",u(i,"class","button"),n[0]===void 0&&Ml(()=>n[31].call(i)),u(c,"type","checkbox"),u(w,"type","checkbox"),u(p,"title","Unminimizes after 2 seconds"),u(k,"title","Unminimizes after 2 seconds"),u(T,"title","Visible again after 2 seconds"),u(W,"type","checkbox"),u(j,"type","checkbox"),u(U,"type","checkbox"),u(ue,"type","checkbox"),u($,"type","number"),u($,"min","0"),u($,"class","svelte-12ggtr4"),u(x,"type","number"),u(x,"min","0"),u(x,"class","svelte-12ggtr4"),u(re,"class","flex col grow svelte-12ggtr4"),u(ee,"type","number"),u(ee,"min","400"),u(ee,"class","svelte-12ggtr4"),u(te,"type","number"),u(te,"min","400"),u(te,"class","svelte-12ggtr4"),u(ce,"class","flex col grow svelte-12ggtr4"),u(pe,"type","number"),u(pe,"class","svelte-12ggtr4"),u(de,"type","number"),u(de,"class","svelte-12ggtr4"),u(q,"class","flex col grow svelte-12ggtr4"),u(se,"type","number"),u(se,"min","400"),u(se,"class","svelte-12ggtr4"),u(oe,"type","number"),u(oe,"min","400"),u(oe,"class","svelte-12ggtr4"),u(Ae,"class","flex col grow svelte-12ggtr4"),u(Q,"class","window-controls flex flex-row svelte-12ggtr4"),u(t,"class","flex col"),u(De,"class","svelte-12ggtr4"),u(je,"class","svelte-12ggtr4"),u(fe,"class","grow window-property svelte-12ggtr4"),u(Be,"class","svelte-12ggtr4"),u(Fe,"class","svelte-12ggtr4"),u(he,"class","grow window-property svelte-12ggtr4"),u(Ue,"class","flex"),u(Ge,"class","svelte-12ggtr4"),u(Ve,"class","svelte-12ggtr4"),u(ge,"class","grow window-property svelte-12ggtr4"),u(Je,"class","svelte-12ggtr4"),u(Ke,"class","svelte-12ggtr4"),u(me,"class","grow window-property svelte-12ggtr4"),u(We,"class","flex"),u(Xe,"class","svelte-12ggtr4"),u(Ye,"class","svelte-12ggtr4"),u(ve,"class","grow window-property svelte-12ggtr4"),u(Qe,"class","svelte-12ggtr4"),u(Ze,"class","svelte-12ggtr4"),u(_e,"class","grow window-property svelte-12ggtr4"),u(Ne,"class","flex"),u($e,"class","svelte-12ggtr4"),u(xe,"class","svelte-12ggtr4"),u(be,"class","grow window-property svelte-12ggtr4"),u(et,"class","svelte-12ggtr4"),u(tt,"class","svelte-12ggtr4"),u(we,"class","grow window-property svelte-12ggtr4"),u(Ie,"class","flex"),u(Me,"id","title"),u(nt,"class","button"),u(nt,"type","submit"),ae(ke,"margin-top","24px"),u(Te,"id","url"),u(lt,"class","button"),u(lt,"id","open-url"),ae(ye,"margin-top","24px"),u(Se,"class","button"),u(Se,"title","Minimizes the window, requests attention for 3s and then resets it"),u(qe,"class","button")},m(b,z){S(b,t,z),e(t,i);for(let B=0;B<K.length;B+=1)K[B].m(i,null);qt(i,n[0]),e(t,l),e(t,s),e(s,o),e(o,c),c.checked=n[2],e(o,r),e(s,m),e(s,h),e(h,w),w.checked=n[3],e(h,v),e(s,d),e(s,p),e(s,f),e(s,k),e(s,_),e(s,T),e(s,C),e(s,P),e(P,W),W.checked=n[16],e(P,A),e(s,E),e(s,I),e(I,j),j.checked=n[4],e(I,D),e(s,X),e(s,Z),e(Z,U),U.checked=n[5],e(Z,ne),e(s,H),e(s,ie),e(ie,ue),ue.checked=n[6],e(ie,st),e(s,ot),e(s,Le),e(t,at),e(t,Re),e(Re,Q),e(Q,re),e(re,Ee),e(Ee,ut),e(Ee,$),O($,n[13]),e(re,rt),e(re,ze),e(ze,ct),e(ze,x),O(x,n[14]),e(Q,pt),e(Q,ce),e(ce,Oe),e(Oe,dt),e(Oe,ee),O(ee,n[7]),e(ce,ft),e(ce,Pe),e(Pe,ht),e(Pe,te),O(te,n[8]),e(Q,gt),e(Q,q),e(q,Ce),e(Ce,bn),e(Ce,pe),O(pe,n[9]),e(q,wn),e(q,mt),e(mt,kn),e(mt,de),O(de,n[10]),e(Q,yn),e(Q,Ae),e(Ae,vt),e(vt,Cn),e(vt,se),O(se,n[11]),e(Ae,Mn),e(Ae,_t),e(_t,Tn),e(_t,oe),O(oe,n[12]),S(b,Ht,z),S(b,le,z),e(le,Ue),e(Ue,fe),e(fe,Rt),e(fe,Sn),e(fe,De),e(De,Ln),e(De,Dt),e(fe,En),e(fe,je),e(je,zn),e(je,jt),e(Ue,On),e(Ue,he),e(he,Bt),e(he,Pn),e(he,Be),e(Be,An),e(Be,Ft),e(he,Un),e(he,Fe),e(Fe,Wn),e(Fe,Gt),e(le,Nn),e(le,We),e(We,ge),e(ge,Vt),e(ge,In),e(ge,Ge),e(Ge,qn),e(Ge,Jt),e(ge,Hn),e(ge,Ve),e(Ve,Rn),e(Ve,Kt),e(We,Dn),e(We,me),e(me,Xt),e(me,jn),e(me,Je),e(Je,Bn),e(Je,Yt),e(me,Fn),e(me,Ke),e(Ke,Gn),e(Ke,Qt),e(le,Vn),e(le,Ne),e(Ne,ve),e(ve,Zt),e(ve,Jn),e(ve,Xe),e(Xe,Kn),e(Xe,$t),e(ve,Xn),e(ve,Ye),e(Ye,Yn),e(Ye,xt),e(Ne,Qn),e(Ne,_e),e(_e,en),e(_e,Zn),e(_e,Qe),e(Qe,$n),e(Qe,tn),e(_e,xn),e(_e,Ze),e(Ze,el),e(Ze,nn),e(le,tl),e(le,Ie),e(Ie,be),e(be,ln),e(be,nl),e(be,$e),e($e,ll),e($e,sn),e(be,il),e(be,xe),e(xe,sl),e(xe,on),e(Ie,ol),e(Ie,we),e(we,an),e(we,al),e(we,et),e(et,ul),e(et,un),e(we,rl),e(we,tt),e(tt,cl),e(tt,rn),S(b,cn,z),S(b,ke,z),e(ke,Me),O(Me,n[22]),e(ke,pl),e(ke,nt),S(b,pn,z),S(b,ye,z),e(ye,Te),O(Te,n[15]),e(ye,dl),e(ye,lt),S(b,dn,z),S(b,Se,z),S(b,fn,z),S(b,qe,z),hn||(fl=[y(i,"change",n[31]),y(c,"change",n[32]),y(w,"change",n[33]),y(p,"click",n[34]),y(k,"click",n[26]),y(T,"click",n[25]),y(W,"change",n[35]),y(j,"change",n[36]),y(U,"change",n[37]),y(ue,"change",n[38]),y(Le,"click",n[27]),y($,"input",n[39]),y(x,"input",n[40]),y(ee,"input",n[41]),y(te,"input",n[42]),y(pe,"input",n[43]),y(de,"input",n[44]),y(se,"input",n[45]),y(oe,"input",n[46]),y(Me,"input",n[47]),y(ke,"submit",Nt(n[24])),y(Te,"input",n[48]),y(ye,"submit",Nt(n[23])),y(Se,"click",n[29]),y(qe,"click",n[28])],hn=!0)},p(b,z){if(z[0]&2){He=Object.keys(b[1]);let B;for(B=0;B<He.length;B+=1){const hl=jl(b,He,B);K[B]?K[B].p(hl,z):(K[B]=Bl(hl),K[B].c(),K[B].m(i,null))}for(;B<K.length;B+=1)K[B].d(1);K.length=He.length}z[0]&3&&qt(i,b[0]),z[0]&4&&(c.checked=b[2]),z[0]&8&&(w.checked=b[3]),z[0]&65536&&(W.checked=b[16]),z[0]&16&&(j.checked=b[4]),z[0]&32&&(U.checked=b[5]),z[0]&64&&(ue.checked=b[6]),z[0]&8192&&F($.value)!==b[13]&&O($,b[13]),z[0]&16384&&F(x.value)!==b[14]&&O(x,b[14]),z[0]&128&&F(ee.value)!==b[7]&&O(ee,b[7]),z[0]&256&&F(te.value)!==b[8]&&O(te,b[8]),z[0]&512&&F(pe.value)!==b[9]&&O(pe,b[9]),z[0]&1024&&F(de.value)!==b[10]&&O(de,b[10]),z[0]&2048&&F(se.value)!==b[11]&&O(se,b[11]),z[0]&4096&&F(oe.value)!==b[12]&&O(oe,b[12]),z[0]&1048576&&bt!==(bt=b[20].width+"")&&R(Dt,bt),z[0]&1048576&&wt!==(wt=b[20].height+"")&&R(jt,wt),z[0]&2097152&&kt!==(kt=b[21].width+"")&&R(Ft,kt),z[0]&2097152&&yt!==(yt=b[21].height+"")&&R(Gt,yt),z[0]&1179648&&Ct!==(Ct=b[20].toLogical(b[17]).width+"")&&R(Jt,Ct),z[0]&1179648&&Mt!==(Mt=b[20].toLogical(b[17]).height+"")&&R(Kt,Mt),z[0]&2228224&&Tt!==(Tt=b[21].toLogical(b[17]).width+"")&&R(Yt,Tt),z[0]&2228224&&St!==(St=b[21].toLogical(b[17]).height+"")&&R(Qt,St),z[0]&262144&&Lt!==(Lt=b[18].x+"")&&R($t,Lt),z[0]&262144&&Et!==(Et=b[18].y+"")&&R(xt,Et),z[0]&524288&&zt!==(zt=b[19].x+"")&&R(tn,zt),z[0]&524288&&Ot!==(Ot=b[19].y+"")&&R(nn,Ot),z[0]&393216&&Pt!==(Pt=b[18].toLogical(b[17]).x+"")&&R(sn,Pt),z[0]&393216&&At!==(At=b[18].toLogical(b[17]).y+"")&&R(on,At),z[0]&655360&&Ut!==(Ut=b[19].toLogical(b[17]).x+"")&&R(un,Ut),z[0]&655360&&Wt!==(Wt=b[19].toLogical(b[17]).y+"")&&R(rn,Wt),z[0]&4194304&&Me.value!==b[22]&&O(Me,b[22]),z[0]&32768&&Te.value!==b[15]&&O(Te,b[15])},i:N,o:N,d(b){b&&L(t),It(K,b),b&&L(Ht),b&&L(le),b&&L(cn),b&&L(ke),b&&L(pn),b&&L(ye),b&&L(dn),b&&L(Se),b&&L(fn),b&&L(qe),hn=!1,Y(fl)}}}function Qi(n,t,i){window.UserAttentionType=Ll;let l=El.label;const s={[l]:El};let{onMessage:o}=t,c="https://tauri.studio",r=!0,m=!1,h=!1,w=!0,v=!1,d=!1,p=900,f=700,k=600,_=600,T=null,C=null,P=100,W=100,A=1,E=new vn(P,W),I=new vn(P,W),j=new _n(p,f),D=new _n(p,f),X,Z,U="Awesome Tauri Example!";function ne(){Ol(c)}function H(){s[l].setTitle(U)}function ie(){s[l].hide(),setTimeout(s[l].show,2e3)}function ue(){s[l].minimize(),setTimeout(s[l].unminimize,2e3)}function st(){kl({multiple:!1}).then(s[l].setIcon)}function ot(){const q=Math.random().toString(),Ce=new pi(q);i(1,s[q]=Ce,s),Ce.once("tauri://error",function(){o("Error creating new webview")})}function Le(){s[l].innerSize().then(q=>{i(20,j=q),i(7,p=j.width),i(8,f=j.height)}),s[l].outerSize().then(q=>{i(21,D=q)})}function at(){s[l].innerPosition().then(q=>{i(18,E=q)}),s[l].outerPosition().then(q=>{i(19,I=q),i(13,P=I.x),i(14,W=I.y)})}async function Re(q){X&&X(),Z&&Z(),Z=await q.listen("tauri://move",at),X=await q.listen("tauri://resize",Le)}async function Q(){await s[l].minimize(),await s[l].requestUserAttention(Ll.Critical),await new Promise(q=>setTimeout(q,3e3)),await s[l].requestUserAttention(null)}function re(){l=Sl(this),i(0,l),i(1,s)}function Ee(){r=this.checked,i(2,r)}function ut(){m=this.checked,i(3,m)}const $=()=>s[l].center();function rt(){h=this.checked,i(16,h)}function ze(){w=this.checked,i(4,w)}function ct(){v=this.checked,i(5,v)}function x(){d=this.checked,i(6,d)}function pt(){P=F(this.value),i(13,P)}function ce(){W=F(this.value),i(14,W)}function Oe(){p=F(this.value),i(7,p)}function dt(){f=F(this.value),i(8,f)}function ee(){k=F(this.value),i(9,k)}function ft(){_=F(this.value),i(10,_)}function Pe(){T=F(this.value),i(11,T)}function ht(){C=F(this.value),i(12,C)}function te(){U=this.value,i(22,U)}function gt(){c=this.value,i(15,c)}return n.$$set=q=>{"onMessage"in q&&i(30,o=q.onMessage)},n.$$.update=()=>{n.$$.dirty[0]&7&&s[l].setResizable(r),n.$$.dirty[0]&11&&(m?s[l].maximize():s[l].unmaximize()),n.$$.dirty[0]&19&&s[l].setDecorations(w),n.$$.dirty[0]&35&&s[l].setAlwaysOnTop(v),n.$$.dirty[0]&67&&s[l].setFullscreen(d),n.$$.dirty[0]&387&&s[l].setSize(new _n(p,f)),n.$$.dirty[0]&1539&&(k&&_?s[l].setMinSize(new zl(k,_)):s[l].setMinSize(null)),n.$$.dirty[0]&6147&&(T&&C?s[l].setMaxSize(new zl(T,C)):s[l].setMaxSize(null)),n.$$.dirty[0]&24579&&s[l].setPosition(new vn(P,W)),n.$$.dirty[0]&3&&s[l].scaleFactor().then(q=>i(17,A=q)),n.$$.dirty[0]&3&&Re(s[l])},[l,s,r,m,w,v,d,p,f,k,_,T,C,P,W,c,h,A,E,I,j,D,U,ne,H,ie,ue,st,ot,Q,o,re,Ee,ut,$,rt,ze,ct,x,pt,ce,Oe,dt,ee,ft,Pe,ht,te,gt]}class Zi extends G{constructor(t){super();V(this,t,Qi,Yi,J,{onMessage:30},[-1,-1])}}function Fl(n,t,i){const l=n.slice();return l[9]=t[i],l}function Gl(n){let t,i=n[9]+"",l,s,o,c,r;function m(){return n[8](n[9])}return{c(){t=a("div"),l=M(i),s=g(),o=a("button"),o.textContent="Unregister",u(o,"type","button")},m(h,w){S(h,t,w),e(t,l),e(t,s),e(t,o),c||(r=y(o,"click",m),c=!0)},p(h,w){n=h,w&2&&i!==(i=n[9]+"")&&R(l,i)},d(h){h&&L(t),c=!1,r()}}}function Vl(n){let t,i,l;return{c(){t=a("button"),t.textContent="Unregister all",u(t,"type","button")},m(s,o){S(s,t,o),i||(l=y(t,"click",n[5]),i=!0)},p:N,d(s){s&&L(t),i=!1,l()}}}function $i(n){let t,i,l,s,o,c,r,m,h,w,v=n[1],d=[];for(let f=0;f<v.length;f+=1)d[f]=Gl(Fl(n,v,f));let p=n[1].length&&Vl(n);return{c(){t=a("div"),i=a("div"),l=a("input"),s=g(),o=a("button"),o.textContent="Register",c=g(),r=a("div");for(let f=0;f<d.length;f+=1)d[f].c();m=g(),p&&p.c(),u(l,"placeholder","Type a shortcut with '+' as separator..."),u(o,"type","button")},m(f,k){S(f,t,k),e(t,i),e(i,l),O(l,n[0]),e(i,s),e(i,o),e(t,c),e(t,r);for(let _=0;_<d.length;_+=1)d[_].m(r,null);e(r,m),p&&p.m(r,null),h||(w=[y(l,"input",n[7]),y(o,"click",n[3])],h=!0)},p(f,[k]){if(k&1&&l.value!==f[0]&&O(l,f[0]),k&18){v=f[1];let _;for(_=0;_<v.length;_+=1){const T=Fl(f,v,_);d[_]?d[_].p(T,k):(d[_]=Gl(T),d[_].c(),d[_].m(r,m))}for(;_<d.length;_+=1)d[_].d(1);d.length=v.length}f[1].length?p?p.p(f,k):(p=Vl(f),p.c(),p.m(r,null)):p&&(p.d(1),p=null)},i:N,o:N,d(f){f&&L(t),It(d,f),p&&p.d(),h=!1,Y(w)}}}function xi(n,t,i){let l,{onMessage:s}=t;const o=Pl([]);di(n,o,d=>i(1,l=d));let c="CmdOrControl+X";function r(){const d=c;fi(d,()=>{s(`Shortcut ${d} triggered`)}).then(()=>{o.update(p=>[...p,d]),s(`Shortcut ${d} registered successfully`)}).catch(s)}function m(d){const p=d;hi(p).then(()=>{o.update(f=>f.filter(k=>k!==p)),s(`Shortcut ${p} unregistered`)}).catch(s)}function h(){gi().then(()=>{o.update(()=>[]),s("Unregistered all shortcuts")}).catch(s)}function w(){c=this.value,i(0,c)}const v=d=>m(d);return n.$$set=d=>{"onMessage"in d&&i(6,s=d.onMessage)},[c,l,o,r,m,h,s,w,v]}class es extends G{constructor(t){super();V(this,t,xi,$i,J,{onMessage:6})}}function Jl(n){let t,i,l,s,o;return{c(){t=a("input"),i=g(),l=a("button"),l.textContent="Write",u(t,"placeholder","write to stdin"),u(l,"class","button")},m(c,r){S(c,t,r),O(t,n[3]),S(c,i,r),S(c,l,r),s||(o=[y(t,"input",n[10]),y(l,"click",n[7])],s=!0)},p(c,r){r&8&&t.value!==c[3]&&O(t,c[3])},d(c){c&&L(t),c&&L(i),c&&L(l),s=!1,Y(o)}}}function ts(n){let t,i,l,s,o,c,r,m,h,w,v,d,p,f,k,_=n[4]&&Jl(n);return{c(){t=a("div"),i=a("div"),l=a("input"),s=g(),o=a("button"),o.textContent="Run",c=g(),r=a("button"),r.textContent="Kill",m=g(),_&&_.c(),h=g(),w=a("div"),v=a("input"),d=g(),p=a("input"),u(o,"class","button"),u(r,"class","button"),u(v,"placeholder","Working directory"),u(p,"placeholder","Environment variables"),ae(p,"width","300px")},m(T,C){S(T,t,C),e(t,i),e(i,l),O(l,n[0]),e(i,s),e(i,o),e(i,c),e(i,r),e(i,m),_&&_.m(i,null),e(t,h),e(t,w),e(w,v),O(v,n[1]),e(w,d),e(w,p),O(p,n[2]),f||(k=[y(l,"input",n[9]),y(o,"click",n[5]),y(r,"click",n[6]),y(v,"input",n[11]),y(p,"input",n[12])],f=!0)},p(T,[C]){C&1&&l.value!==T[0]&&O(l,T[0]),T[4]?_?_.p(T,C):(_=Jl(T),_.c(),_.m(i,null)):_&&(_.d(1),_=null),C&2&&v.value!==T[1]&&O(v,T[1]),C&4&&p.value!==T[2]&&O(p,T[2])},i:N,o:N,d(T){T&&L(t),_&&_.d(),f=!1,Y(k)}}}function ns(n,t,i){const l=navigator.userAgent.includes("Windows");let s=l?"cmd":"sh",o=l?["/C"]:["-c"],{onMessage:c}=t,r='echo "hello world"',m=null,h="SOMETHING=value ANOTHER=2",w="",v;function d(){return h.split(" ").reduce((W,A)=>{let[E,I]=A.split("=");return _l(vl({},W),{[E]:I})},{})}function p(){i(4,v=null);const W=new mi(s,[...o,r],{cwd:m||null,env:d()});W.on("close",A=>{c(`command finished with code ${A.code} and signal ${A.signal}`),i(4,v=null)}),W.on("error",A=>c(`command error: "${A}"`)),W.stdout.on("data",A=>c(`command stdout: "${A}"`)),W.stderr.on("data",A=>c(`command stderr: "${A}"`)),W.spawn().then(A=>{i(4,v=A)}).catch(c)}function f(){v.kill().then(()=>c("killed child process")).catch(c)}function k(){v.write(w).catch(c)}function _(){r=this.value,i(0,r)}function T(){w=this.value,i(3,w)}function C(){m=this.value,i(1,m)}function P(){h=this.value,i(2,h)}return n.$$set=W=>{"onMessage"in W&&i(8,c=W.onMessage)},[r,m,h,w,v,p,f,k,c,_,T,C,P]}class ls extends G{constructor(t){super();V(this,t,ns,ts,J,{onMessage:8})}}function is(n){let t,i,l,s,o,c;return{c(){t=a("div"),i=a("button"),i.textContent="Check update",l=g(),s=a("button"),s.textContent="Install update",u(i,"class","button"),u(i,"id","check_update"),u(s,"class","button hidden"),u(s,"id","start_update")},m(r,m){S(r,t,m),e(t,i),e(t,l),e(t,s),o||(c=[y(i,"click",n[0]),y(s,"click",n[1])],o=!0)},p:N,i:N,o:N,d(r){r&&L(t),o=!1,Y(c)}}}function ss(n,t,i){let{onMessage:l}=t,s;it(async()=>{s=await wl("tauri://update-status",l)}),gn(()=>{s&&s()});async function o(){try{document.getElementById("check_update").classList.add("hidden");const{shouldUpdate:r,manifest:m}=await vi();l(`Should update: ${r}`),l(m),r&&document.getElementById("start_update").classList.remove("hidden")}catch(r){l(r)}}async function c(){try{document.getElementById("start_update").classList.add("hidden"),await _i(),l("Installation complete, restart required."),await bl()}catch(r){l(r)}}return n.$$set=r=>{"onMessage"in r&&i(2,l=r.onMessage)},[o,c,l]}class os extends G{constructor(t){super();V(this,t,ss,is,J,{onMessage:2})}}function as(n){let t,i,l,s,o,c,r,m,h;return{c(){t=a("div"),i=a("div"),l=a("input"),s=g(),o=a("button"),o.textContent="Write",c=g(),r=a("button"),r.textContent="Read",u(l,"placeholder","Text to write to the clipboard"),u(o,"type","button"),u(r,"type","button")},m(w,v){S(w,t,v),e(t,i),e(i,l),O(l,n[0]),e(i,s),e(i,o),e(t,c),e(t,r),m||(h=[y(l,"input",n[4]),y(o,"click",n[1]),y(r,"click",n[2])],m=!0)},p(w,[v]){v&1&&l.value!==w[0]&&O(l,w[0])},i:N,o:N,d(w){w&&L(t),m=!1,Y(h)}}}function us(n,t,i){let{onMessage:l}=t,s="clipboard message";function o(){bi(s).then(()=>{l("Wrote to the clipboard")}).catch(l)}function c(){wi().then(m=>{l(`Clipboard contents: ${m}`)}).catch(l)}function r(){s=this.value,i(0,s)}return n.$$set=m=>{"onMessage"in m&&i(3,l=m.onMessage)},[s,o,c,l,r]}class rs extends G{constructor(t){super();V(this,t,us,as,J,{onMessage:3})}}function cs(n){let t;return{c(){t=a("div"),t.innerHTML=`<div class="alert"><p>Not available for Linux</p></div> 
  <video id="localVideo" autoplay="" playsinline=""><track kind="captions"/></video>`},m(i,l){S(i,t,l)},p:N,i:N,o:N,d(i){i&&L(t)}}}function ps(n,t,i){let{onMessage:l}=t;const s=window.constraints={audio:!0,video:!0};function o(r){const m=document.querySelector("video"),h=r.getVideoTracks();l("Got stream with constraints:",s),l(`Using video device: ${h[0].label}`),window.stream=r,m.srcObject=r}function c(r){if(r.name==="ConstraintNotSatisfiedError"){const m=s.video;l(`The resolution ${m.width.exact}x${m.height.exact} px is not supported by your device.`)}else r.name==="PermissionDeniedError"&&l("Permissions have not been granted to use your camera and microphone, you need to allow the page access to your devices in order for the demo to work.");l(`getUserMedia error: ${r.name}`,r)}return it(async()=>{try{const r=await navigator.mediaDevices.getUserMedia(s);o(r)}catch(r){c(r)}}),gn(()=>{window.stream.getTracks().forEach(function(r){r.stop()})}),n.$$set=r=>{"onMessage"in r&&i(0,l=r.onMessage)},[l]}class ds extends G{constructor(t){super();V(this,t,ps,cs,J,{onMessage:0})}}function fs(n){let t,i,l,s,o,c,r,m,h,w,v,d;return{c(){t=a("input"),i=g(),l=a("input"),s=g(),o=a("button"),o.textContent="Post it.",c=g(),r=a("p"),r.textContent="Result:",m=g(),h=a("pre"),w=M(n[2]),u(o,"type","button")},m(p,f){S(p,t,f),O(t,n[0]),S(p,i,f),S(p,l,f),O(l,n[1]),S(p,s,f),S(p,o,f),S(p,c,f),S(p,r,f),S(p,m,f),S(p,h,f),e(h,w),v||(d=[y(t,"input",n[4]),y(l,"input",n[5]),y(o,"click",n[3])],v=!0)},p(p,[f]){f&1&&t.value!==p[0]&&O(t,p[0]),f&2&&l.value!==p[1]&&O(l,p[1]),f&4&&R(w,p[2])},i:N,o:N,d(p){p&&L(t),p&&L(i),p&&L(l),p&&L(s),p&&L(o),p&&L(c),p&&L(r),p&&L(m),p&&L(h),v=!1,Y(d)}}}function hs(n,t,i){let l="baz",s="qux",o=null;async function c(){let h=navigator.userAgent.includes("Windows")?"https://customprotocol.test/example.html":"customprotocol://test/example.html";const v=await(await fetch(h,{method:"POST",body:JSON.stringify({foo:l,bar:s})})).json();i(2,o=JSON.stringify(v))}function r(){l=this.value,i(0,l)}function m(){s=this.value,i(1,s)}return[l,s,o,c,r,m]}class gs extends G{constructor(t){super();V(this,t,hs,fs,J,{})}}function Kl(n,t,i){const l=n.slice();return l[9]=t[i],l}function Xl(n){let t,i=n[9].label+"",l,s,o,c,r;function m(){return n[7](n[9])}return{c(){t=a("p"),l=M(i),s=g(),u(t,"class",o="nv noselect "+(n[0]===n[9]?"nv_selected":""))},m(h,w){S(h,t,w),e(t,l),e(t,s),c||(r=y(t,"click",m),c=!0)},p(h,w){n=h,w&1&&o!==(o="nv noselect "+(n[0]===n[9]?"nv_selected":""))&&u(t,"class",o)},d(h){h&&L(t),c=!1,r()}}}function ms(n){let t,i,l,s,o,c,r,m,h,w,v,d,p,f,k,_,T,C,P,W,A,E,I,j=n[2],D=[];for(let U=0;U<j.length;U+=1)D[U]=Xl(Kl(n,j,U));var X=n[0].component;function Z(U){return{props:{onMessage:U[5]}}}return X&&(d=new X(Z(n))),{c(){t=a("main"),i=a("div"),l=a("img"),o=g(),c=a("div"),c.innerHTML=`<a class="dark-link" target="_blank" href="https://tauri.studio/en/docs/get-started/intro">Documentation</a> 
      <a class="dark-link" target="_blank" href="https://github.com/tauri-apps/tauri">Github</a> 
      <a class="dark-link" target="_blank" href="https://github.com/tauri-apps/tauri/tree/dev/tauri/examples/api">Source</a>`,r=g(),m=a("div"),h=a("div");for(let U=0;U<D.length;U+=1)D[U].c();w=g(),v=a("div"),d&&Al(d.$$.fragment),p=g(),f=a("div"),k=a("p"),_=a("strong"),_.textContent="Tauri Console",T=g(),C=a("span"),C.textContent="clear",P=g(),u(l,"class","logo"),l.src!==(s="tauri logo.png")&&u(l,"src",s),u(l,"height","60"),u(l,"alt","logo"),u(i,"class","flex row noselect just-around"),u(i,"style","margin=1em;"),u(i,"data-tauri-drag-region",""),ae(h,"width","15em"),ae(h,"margin-left","0.5em"),u(v,"class","content"),u(m,"class","flex row"),u(C,"class","nv"),u(k,"class","flex row just-around"),W=new yi(null),u(f,"id","response"),ae(f,"white-space","pre-line")},m(U,ne){S(U,t,ne),e(t,i),e(i,l),e(i,o),e(i,c),e(t,r),e(t,m),e(m,h);for(let H=0;H<D.length;H+=1)D[H].m(h,null);e(m,w),e(m,v),d&&Ul(d,v,null),e(t,p),e(t,f),e(f,k),e(k,_),e(k,T),e(k,C),e(f,P),W.m(n[1],f),A=!0,E||(I=[y(l,"click",n[6]),y(C,"click",n[8])],E=!0)},p(U,[ne]){if(ne&21){j=U[2];let H;for(H=0;H<j.length;H+=1){const ie=Kl(U,j,H);D[H]?D[H].p(ie,ne):(D[H]=Xl(ie),D[H].c(),D[H].m(h,null))}for(;H<D.length;H+=1)D[H].d(1);D.length=j.length}if(X!==(X=U[0].component)){if(d){Ci();const H=d;Wl(H.$$.fragment,1,0,()=>{Il(H,1)}),ki()}X?(d=new X(Z(U)),Al(d.$$.fragment),Nl(d.$$.fragment,1),Ul(d,v,null)):d=null}(!A||ne&2)&&W.p(U[1])},i(U){A||(d&&Nl(d.$$.fragment,U),A=!0)},o(U){d&&Wl(d.$$.fragment,U),A=!1},d(U){U&&L(t),It(D,U),d&&Il(d),E=!1,Y(I)}}}const vs="ctrl+b";function _s(n,t,i){it(()=>{Mi(vs,()=>{mn("menu_toggle")})});const l=[{label:"Welcome",component:Ei},{label:"Messages",component:Wi},{label:"CLI",component:Pi},{label:"Dialog",component:Hi},{label:"File system",component:Bi},{label:"HTTP",component:Vi},{label:"HTTP Form",component:gs},{label:"Notifications",component:Xi},{label:"Window",component:Zi},{label:"Shortcuts",component:es},{label:"Shell",component:ls},{label:"Updater",component:os},{label:"Clipboard",component:rs},{label:"WebRTC",component:ds}];let s=l[0],o=Pl([]),c="";function r(d){i(0,s=d)}function m(d){o.update(p=>[`[${new Date().toLocaleTimeString()}]: `+(typeof d=="string"?d:JSON.stringify(d)),...p])}function h(){Ol("https://tauri.studio/")}return it(()=>{o.subscribe(d=>{i(1,c=d.join(`
`))})}),[s,c,l,o,r,m,h,d=>r(d),()=>{o.update(()=>[])}]}class bs extends G{constructor(t){super();V(this,t,_s,ms,J,{})}}new bs({target:document.body});
