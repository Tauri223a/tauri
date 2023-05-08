"use strict";var __TAURI_IIFE__=(()=>{var D=Object.defineProperty;var Z=Object.getOwnPropertyDescriptor;var J=Object.getOwnPropertyNames;var Y=Object.prototype.hasOwnProperty;var d=(t,e)=>{for(var n in e)D(t,n,{get:e[n],enumerable:!0})},X=(t,e,n,o)=>{if(e&&typeof e=="object"||typeof e=="function")for(let l of J(e))!Y.call(t,l)&&l!==n&&D(t,l,{get:()=>e[l],enumerable:!(o=Z(e,l))||o.enumerable});return t};var B=t=>X(D({},"__esModule",{value:!0}),t);var nt={};d(nt,{app:()=>S,event:()=>L,invoke:()=>tt,os:()=>V,path:()=>O,process:()=>R,tauri:()=>C,updater:()=>F,window:()=>N});var S={};d(S,{getName:()=>ae,getTauriVersion:()=>re,getVersion:()=>ie,hide:()=>se,show:()=>oe});var C={};d(C,{channel:()=>te,convertFileSrc:()=>ne,invoke:()=>r,transformCallback:()=>p});function ee(){return window.crypto.getRandomValues(new Uint32Array(1))[0]}function p(t,e=!1){let n=ee(),o=`_${n}`;return Object.defineProperty(window,o,{value:l=>(e&&Reflect.deleteProperty(window,o),t?.(l)),writable:!1,configurable:!0}),n}var T=class{constructor(e){this.id=e}toJSON(){return`__CHANNEL__:${this.id}`}};function te(t){return new T(p(t))}async function r(t,e={}){return new Promise((n,o)=>{let l=p(u=>{n(u),Reflect.deleteProperty(window,`_${s}`)},!0),s=p(u=>{o(u),Reflect.deleteProperty(window,`_${l}`)},!0);window.__TAURI_IPC__({cmd:t,callback:l,error:s,...e})})}function ne(t,e="asset"){let n=encodeURIComponent(t);return navigator.userAgent.includes("Windows")?`https://${e}.localhost/${n}`:`${e}://localhost/${n}`}async function i(t){return r("tauri",t)}async function ie(){return i({__tauriModule:"App",message:{cmd:"getAppVersion"}})}async function ae(){return i({__tauriModule:"App",message:{cmd:"getAppName"}})}async function re(){return i({__tauriModule:"App",message:{cmd:"getTauriVersion"}})}async function oe(){return i({__tauriModule:"App",message:{cmd:"show"}})}async function se(){return i({__tauriModule:"App",message:{cmd:"hide"}})}var L={};d(L,{TauriEvent:()=>w,emit:()=>f,listen:()=>U,once:()=>x});async function H(t,e){return i({__tauriModule:"Event",message:{cmd:"unlisten",event:t,eventId:e}})}async function _(t,e,n){await i({__tauriModule:"Event",message:{cmd:"emit",event:t,windowLabel:e,payload:n}})}async function h(t,e,n){return i({__tauriModule:"Event",message:{cmd:"listen",event:t,windowLabel:e,handler:p(n)}}).then(o=>async()=>H(t,o))}async function P(t,e,n){return h(t,e,o=>{n(o),H(t,o.id).catch(()=>{})})}var w=(c=>(c.WINDOW_RESIZED="tauri://resize",c.WINDOW_MOVED="tauri://move",c.WINDOW_CLOSE_REQUESTED="tauri://close-requested",c.WINDOW_CREATED="tauri://window-created",c.WINDOW_DESTROYED="tauri://destroyed",c.WINDOW_FOCUS="tauri://focus",c.WINDOW_BLUR="tauri://blur",c.WINDOW_SCALE_FACTOR_CHANGED="tauri://scale-change",c.WINDOW_THEME_CHANGED="tauri://theme-changed",c.WINDOW_FILE_DROP="tauri://file-drop",c.WINDOW_FILE_DROP_HOVER="tauri://file-drop-hover",c.WINDOW_FILE_DROP_CANCELLED="tauri://file-drop-cancelled",c.MENU="tauri://menu",c.CHECK_UPDATE="tauri://update",c.UPDATE_AVAILABLE="tauri://update-available",c.INSTALL_UPDATE="tauri://update-install",c.STATUS_UPDATE="tauri://update-status",c.DOWNLOAD_PROGRESS="tauri://update-download-progress",c))(w||{});async function U(t,e){return h(t,null,e)}async function x(t,e){return P(t,null,e)}async function f(t,e){return _(t,void 0,e)}var O={};d(O,{BaseDirectory:()=>G,appCacheDir:()=>me,appConfigDir:()=>ue,appDataDir:()=>ce,appLocalDataDir:()=>de,appLogDir:()=>Ue,audioDir:()=>pe,basename:()=>ze,cacheDir:()=>ye,configDir:()=>ge,dataDir:()=>he,delimiter:()=>Le,desktopDir:()=>be,dirname:()=>Fe,documentDir:()=>_e,downloadDir:()=>Pe,executableDir:()=>we,extname:()=>ke,fontDir:()=>fe,homeDir:()=>ve,isAbsolute:()=>Ne,join:()=>Ie,localDataDir:()=>We,normalize:()=>Re,pictureDir:()=>Me,publicDir:()=>Ee,resolve:()=>Oe,resolveResource:()=>De,resourceDir:()=>Ae,runtimeDir:()=>Te,sep:()=>xe,templateDir:()=>Ce,videoDir:()=>Se});function b(){return navigator.appVersion.includes("Win")}var G=(a=>(a[a.Audio=1]="Audio",a[a.Cache=2]="Cache",a[a.Config=3]="Config",a[a.Data=4]="Data",a[a.LocalData=5]="LocalData",a[a.Document=6]="Document",a[a.Download=7]="Download",a[a.Picture=8]="Picture",a[a.Public=9]="Public",a[a.Video=10]="Video",a[a.Resource=11]="Resource",a[a.Temp=12]="Temp",a[a.AppConfig=13]="AppConfig",a[a.AppData=14]="AppData",a[a.AppLocalData=15]="AppLocalData",a[a.AppCache=16]="AppCache",a[a.AppLog=17]="AppLog",a[a.Desktop=18]="Desktop",a[a.Executable=19]="Executable",a[a.Font=20]="Font",a[a.Home=21]="Home",a[a.Runtime=22]="Runtime",a[a.Template=23]="Template",a))(G||{});async function ue(){return r("plugin:path|resolve_directory",{directory:13})}async function ce(){return r("plugin:path|resolve_directory",{directory:14})}async function de(){return r("plugin:path|resolve_directory",{directory:15})}async function me(){return r("plugin:path|resolve_directory",{directory:16})}async function pe(){return r("plugin:path|resolve_directory",{directory:1})}async function ye(){return r("plugin:path|resolve_directory",{directory:2})}async function ge(){return r("plugin:path|resolve_directory",{directory:3})}async function he(){return r("plugin:path|resolve_directory",{directory:4})}async function be(){return r("plugin:path|resolve_directory",{directory:18})}async function _e(){return r("plugin:path|resolve_directory",{directory:6})}async function Pe(){return r("plugin:path|resolve_directory",{directory:7})}async function we(){return r("plugin:path|resolve_directory",{directory:19})}async function fe(){return r("plugin:path|resolve_directory",{directory:20})}async function ve(){return r("plugin:path|resolve_directory",{directory:21})}async function We(){return r("plugin:path|resolve_directory",{directory:5})}async function Me(){return r("plugin:path|resolve_directory",{directory:8})}async function Ee(){return r("plugin:path|resolve_directory",{directory:9})}async function Ae(){return r("plugin:path|resolve_directory",{directory:11})}async function De(t){return r("plugin:path|resolve_directory",{directory:11,path:t})}async function Te(){return r("plugin:path|resolve_directory",{directory:22})}async function Ce(){return r("plugin:path|resolve_directory",{directory:23})}async function Se(){return r("plugin:path|resolve_directory",{directory:10})}async function Ue(){return r("plugin:path|resolve_directory",{directory:17})}var xe=b()?"\\":"/",Le=b()?";":":";async function Oe(...t){return r("plugin:path|resolve",{paths:t})}async function Re(t){return r("plugin:path|normalize",{path:t})}async function Ie(...t){return r("plugin:path|join",{paths:t})}async function Fe(t){return r("plugin:path|dirname",{path:t})}async function ke(t){return r("plugin:path|extname",{path:t})}async function ze(t,e){return r("plugin:path|basename",{path:t,ext:e})}async function Ne(t){return r("plugin:path|isAbsolute",{path:t})}var R={};d(R,{exit:()=>Ve,relaunch:()=>He});async function Ve(t=0){return i({__tauriModule:"Process",message:{cmd:"exit",exitCode:t}})}async function He(){return i({__tauriModule:"Process",message:{cmd:"relaunch"}})}var F={};d(F,{checkUpdate:()=>$e,installUpdate:()=>Ge,onUpdaterEvent:()=>I});async function I(t){return U("tauri://update-status",e=>{t(e?.payload)})}async function Ge(){let t;function e(){t&&t(),t=void 0}return new Promise((n,o)=>{function l(s){if(s.error){e(),o(s.error);return}s.status==="DONE"&&(e(),n())}I(l).then(s=>{t=s}).catch(s=>{throw e(),s}),f("tauri://update-install").catch(s=>{throw e(),s})})}async function $e(){let t;function e(){t&&t(),t=void 0}return new Promise((n,o)=>{function l(u){e(),n({manifest:u,shouldUpdate:!0})}function s(u){if(u.error){e(),o(u.error);return}u.status==="UPTODATE"&&(e(),n({shouldUpdate:!1}))}x("tauri://update-available",u=>{l(u?.payload)}).catch(u=>{throw e(),u}),I(s).then(u=>{t=u}).catch(u=>{throw e(),u}),f("tauri://update").catch(u=>{throw e(),u})})}var N={};d(N,{CloseRequestedEvent:()=>A,LogicalPosition:()=>W,LogicalSize:()=>v,PhysicalPosition:()=>g,PhysicalSize:()=>y,UserAttentionType:()=>j,WebviewWindow:()=>m,WebviewWindowHandle:()=>M,WindowManager:()=>E,appWindow:()=>k,availableMonitors:()=>Qe,currentMonitor:()=>qe,getAll:()=>q,getCurrent:()=>je,primaryMonitor:()=>Ke});var v=class{constructor(e,n){this.type="Logical";this.width=e,this.height=n}},y=class{constructor(e,n){this.type="Physical";this.width=e,this.height=n}toLogical(e){return new v(this.width/e,this.height/e)}},W=class{constructor(e,n){this.type="Logical";this.x=e,this.y=n}},g=class{constructor(e,n){this.type="Physical";this.x=e,this.y=n}toLogical(e){return new W(this.x/e,this.y/e)}},j=(n=>(n[n.Critical=1]="Critical",n[n.Informational=2]="Informational",n))(j||{});function je(){return new m(window.__TAURI_METADATA__.__currentWindow.label,{skip:!0})}function q(){return window.__TAURI_METADATA__.__windows.map(t=>new m(t.label,{skip:!0}))}var $=["tauri://created","tauri://error"],M=class{constructor(e){this.label=e,this.listeners=Object.create(null)}async listen(e,n){return this._handleTauriEvent(e,n)?Promise.resolve(()=>{let o=this.listeners[e];o.splice(o.indexOf(n),1)}):h(e,this.label,n)}async once(e,n){return this._handleTauriEvent(e,n)?Promise.resolve(()=>{let o=this.listeners[e];o.splice(o.indexOf(n),1)}):P(e,this.label,n)}async emit(e,n){if($.includes(e)){for(let o of this.listeners[e]||[])o({event:e,id:-1,windowLabel:this.label,payload:n});return Promise.resolve()}return _(e,this.label,n)}_handleTauriEvent(e,n){return $.includes(e)?(e in this.listeners?this.listeners[e].push(n):this.listeners[e]=[n],!0):!1}},E=class extends M{async scaleFactor(){return i({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"scaleFactor"}}}})}async innerPosition(){return i({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"innerPosition"}}}}).then(({x:e,y:n})=>new g(e,n))}async outerPosition(){return i({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"outerPosition"}}}}).then(({x:e,y:n})=>new g(e,n))}async innerSize(){return i({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"innerSize"}}}}).then(({width:e,height:n})=>new y(e,n))}async outerSize(){return i({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"outerSize"}}}}).then(({width:e,height:n})=>new y(e,n))}async isFullscreen(){return i({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"isFullscreen"}}}})}async isMinimized(){return i({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"isMinimized"}}}})}async isMaximized(){return i({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"isMaximized"}}}})}async isDecorated(){return i({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"isDecorated"}}}})}async isResizable(){return i({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"isResizable"}}}})}async isVisible(){return i({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"isVisible"}}}})}async title(){return i({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"title"}}}})}async theme(){return i({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"theme"}}}})}async center(){return i({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"center"}}}})}async requestUserAttention(e){let n=null;return e&&(e===1?n={type:"Critical"}:n={type:"Informational"}),i({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"requestUserAttention",payload:n}}}})}async setResizable(e){return i({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"setResizable",payload:e}}}})}async setTitle(e){return i({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"setTitle",payload:e}}}})}async maximize(){return i({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"maximize"}}}})}async unmaximize(){return i({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"unmaximize"}}}})}async toggleMaximize(){return i({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"toggleMaximize"}}}})}async minimize(){return i({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"minimize"}}}})}async unminimize(){return i({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"unminimize"}}}})}async show(){return i({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"show"}}}})}async hide(){return i({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"hide"}}}})}async close(){return i({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"close"}}}})}async setDecorations(e){return i({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"setDecorations",payload:e}}}})}async setShadow(e){return i({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"setShadow",payload:e}}}})}async setAlwaysOnTop(e){return i({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"setAlwaysOnTop",payload:e}}}})}async setContentProtected(e){return i({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"setContentProtected",payload:e}}}})}async setSize(e){if(!e||e.type!=="Logical"&&e.type!=="Physical")throw new Error("the `size` argument must be either a LogicalSize or a PhysicalSize instance");return i({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"setSize",payload:{type:e.type,data:{width:e.width,height:e.height}}}}}})}async setMinSize(e){if(e&&e.type!=="Logical"&&e.type!=="Physical")throw new Error("the `size` argument must be either a LogicalSize or a PhysicalSize instance");return i({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"setMinSize",payload:e?{type:e.type,data:{width:e.width,height:e.height}}:null}}}})}async setMaxSize(e){if(e&&e.type!=="Logical"&&e.type!=="Physical")throw new Error("the `size` argument must be either a LogicalSize or a PhysicalSize instance");return i({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"setMaxSize",payload:e?{type:e.type,data:{width:e.width,height:e.height}}:null}}}})}async setPosition(e){if(!e||e.type!=="Logical"&&e.type!=="Physical")throw new Error("the `position` argument must be either a LogicalPosition or a PhysicalPosition instance");return i({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"setPosition",payload:{type:e.type,data:{x:e.x,y:e.y}}}}}})}async setFullscreen(e){return i({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"setFullscreen",payload:e}}}})}async setFocus(){return i({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"setFocus"}}}})}async setIcon(e){return i({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"setIcon",payload:{icon:typeof e=="string"?e:Array.from(e)}}}}})}async setSkipTaskbar(e){return i({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"setSkipTaskbar",payload:e}}}})}async setCursorGrab(e){return i({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"setCursorGrab",payload:e}}}})}async setCursorVisible(e){return i({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"setCursorVisible",payload:e}}}})}async setCursorIcon(e){return i({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"setCursorIcon",payload:e}}}})}async setCursorPosition(e){if(!e||e.type!=="Logical"&&e.type!=="Physical")throw new Error("the `position` argument must be either a LogicalPosition or a PhysicalPosition instance");return i({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"setCursorPosition",payload:{type:e.type,data:{x:e.x,y:e.y}}}}}})}async setIgnoreCursorEvents(e){return i({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"setIgnoreCursorEvents",payload:e}}}})}async startDragging(){return i({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"startDragging"}}}})}async onResized(e){return this.listen("tauri://resize",n=>{n.payload=Q(n.payload),e(n)})}async onMoved(e){return this.listen("tauri://move",n=>{n.payload=K(n.payload),e(n)})}async onCloseRequested(e){return this.listen("tauri://close-requested",n=>{let o=new A(n);Promise.resolve(e(o)).then(()=>{if(!o.isPreventDefault())return this.close()})})}async onFocusChanged(e){let n=await this.listen("tauri://focus",l=>{e({...l,payload:!0})}),o=await this.listen("tauri://blur",l=>{e({...l,payload:!1})});return()=>{n(),o()}}async onScaleChanged(e){return this.listen("tauri://scale-change",e)}async onMenuClicked(e){return this.listen("tauri://menu",e)}async onFileDropEvent(e){let n=await this.listen("tauri://file-drop",s=>{e({...s,payload:{type:"drop",paths:s.payload}})}),o=await this.listen("tauri://file-drop-hover",s=>{e({...s,payload:{type:"hover",paths:s.payload}})}),l=await this.listen("tauri://file-drop-cancelled",s=>{e({...s,payload:{type:"cancel"}})});return()=>{n(),o(),l()}}async onThemeChanged(e){return this.listen("tauri://theme-changed",e)}},A=class{constructor(e){this._preventDefault=!1;this.event=e.event,this.windowLabel=e.windowLabel,this.id=e.id}preventDefault(){this._preventDefault=!0}isPreventDefault(){return this._preventDefault}},m=class extends E{constructor(e,n={}){super(e),n?.skip||i({__tauriModule:"Window",message:{cmd:"createWebview",data:{options:{label:e,...n}}}}).then(async()=>this.emit("tauri://created")).catch(async o=>this.emit("tauri://error",o))}static getByLabel(e){return q().some(n=>n.label===e)?new m(e,{skip:!0}):null}},k;"__TAURI_METADATA__"in window?k=new m(window.__TAURI_METADATA__.__currentWindow.label,{skip:!0}):(console.warn(`Could not find "window.__TAURI_METADATA__". The "appWindow" value will reference the "main" window label.
Note that this is not an issue if running this frontend on a browser instead of a Tauri window.`),k=new m("main",{skip:!0}));function z(t){return t===null?null:{name:t.name,scaleFactor:t.scaleFactor,position:K(t.position),size:Q(t.size)}}function K(t){return new g(t.x,t.y)}function Q(t){return new y(t.width,t.height)}async function qe(){return i({__tauriModule:"Window",message:{cmd:"manage",data:{cmd:{type:"currentMonitor"}}}}).then(z)}async function Ke(){return i({__tauriModule:"Window",message:{cmd:"manage",data:{cmd:{type:"primaryMonitor"}}}}).then(z)}async function Qe(){return i({__tauriModule:"Window",message:{cmd:"manage",data:{cmd:{type:"availableMonitors"}}}}).then(t=>t.map(z))}var V={};d(V,{EOL:()=>Ze,arch:()=>Be,platform:()=>Je,tempdir:()=>et,type:()=>Xe,version:()=>Ye});var Ze=b()?`\r
`:`
`;async function Je(){return i({__tauriModule:"Os",message:{cmd:"platform"}})}async function Ye(){return i({__tauriModule:"Os",message:{cmd:"version"}})}async function Xe(){return i({__tauriModule:"Os",message:{cmd:"osType"}})}async function Be(){return i({__tauriModule:"Os",message:{cmd:"arch"}})}async function et(){return i({__tauriModule:"Os",message:{cmd:"tempdir"}})}var tt=r;return B(nt);})();
window.__TAURI__ = __TAURI_IIFE__
