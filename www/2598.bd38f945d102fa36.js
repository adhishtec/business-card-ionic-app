"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[2598],{5961:(ee,A,m)=>{m.d(A,{GW:()=>P,dk:()=>s,oK:()=>u});var u=function(p){return p.Prompt="PROMPT",p.Camera="CAMERA",p.Photos="PHOTOS",p}(u||{}),P=function(p){return p.Rear="REAR",p.Front="FRONT",p}(P||{}),s=function(p){return p.Uri="uri",p.Base64="base64",p.DataUrl="dataUrl",p}(s||{})},2726:(ee,A,m)=>{m.d(A,{Plugins:()=>F,Uw:()=>$,fo:()=>N,xz:()=>_});var u=m(5861);typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"&&global;var L=function(r){return r.Unimplemented="UNIMPLEMENTED",r.Unavailable="UNAVAILABLE",r}(L||{});class _ extends Error{constructor(e,n,o){super(e),this.message=e,this.code=n,this.data=o}}const J=r=>{var e,n,o,a,c;const d=r.CapacitorCustomPlatform||null,l=r.Capacitor||{},b=l.Plugins=l.Plugins||{},f=r.CapacitorPlatforms,U=(null===(e=f?.currentPlatform)||void 0===e?void 0:e.getPlatform)||(()=>null!==d?d.name:(r=>{var e,n;return r?.androidBridge?"android":null!==(n=null===(e=r?.webkit)||void 0===e?void 0:e.messageHandlers)&&void 0!==n&&n.bridge?"ios":"web"})(r)),ue=(null===(n=f?.currentPlatform)||void 0===n?void 0:n.isNativePlatform)||(()=>"web"!==U()),fe=(null===(o=f?.currentPlatform)||void 0===o?void 0:o.isPluginAvailable)||(g=>{const h=D.get(g);return!(!h?.platforms.has(U())&&!ae(g))}),ae=(null===(a=f?.currentPlatform)||void 0===a?void 0:a.getPluginHeader)||(g=>{var h;return null===(h=l.PluginHeaders)||void 0===h?void 0:h.find(E=>E.name===g)}),D=new Map,be=(null===(c=f?.currentPlatform)||void 0===c?void 0:c.registerPlugin)||((g,h={})=>{const E=D.get(g);if(E)return console.warn(`Capacitor plugin "${g}" already registered. Cannot register plugins twice.`),E.proxy;const O=U(),H=ae(g);let I;const ve=function(){var v=(0,u.Z)(function*(){return!I&&O in h?I=I="function"==typeof h[O]?yield h[O]():h[O]:null!==d&&!I&&"web"in h&&(I=I="function"==typeof h.web?yield h.web():h.web),I});return function(){return v.apply(this,arguments)}}(),V=v=>{let w;const C=(...k)=>{const x=ve().then(y=>{const T=((v,w)=>{var C,k;if(!H){if(v)return null===(k=v[w])||void 0===k?void 0:k.bind(v);throw new _(`"${g}" plugin is not implemented on ${O}`,L.Unimplemented)}{const x=H?.methods.find(y=>w===y.name);if(x)return"promise"===x.rtype?y=>l.nativePromise(g,w.toString(),y):(y,T)=>l.nativeCallback(g,w.toString(),y,T);if(v)return null===(C=v[w])||void 0===C?void 0:C.bind(v)}})(y,v);if(T){const S=T(...k);return w=S?.remove,S}throw new _(`"${g}.${v}()" is not implemented on ${O}`,L.Unimplemented)});return"addListener"===v&&(x.remove=(0,u.Z)(function*(){return w()})),x};return C.toString=()=>`${v.toString()}() { [capacitor code] }`,Object.defineProperty(C,"name",{value:v,writable:!1,configurable:!1}),C},ce=V("addListener"),le=V("removeListener"),we=(v,w)=>{const C=ce({eventName:v},w),k=function(){var y=(0,u.Z)(function*(){const T=yield C;le({eventName:v,callbackId:T},w)});return function(){return y.apply(this,arguments)}}(),x=new Promise(y=>C.then(()=>y({remove:k})));return x.remove=(0,u.Z)(function*(){console.warn("Using addListener() without 'await' is deprecated."),yield k()}),x},X=new Proxy({},{get(v,w){switch(w){case"$$typeof":return;case"toJSON":return()=>({});case"addListener":return H?we:ce;case"removeListener":return le;default:return V(w)}}});return b[g]=X,D.set(g,{name:g,proxy:X,platforms:new Set([...Object.keys(h),...H?[O]:[]])}),X});return l.convertFileSrc||(l.convertFileSrc=g=>g),l.getPlatform=U,l.handleError=g=>r.console.error(g),l.isNativePlatform=ue,l.isPluginAvailable=fe,l.pluginMethodNoop=(g,h,E)=>Promise.reject(`${E} does not have an implementation of "${h}".`),l.registerPlugin=be,l.Exception=_,l.DEBUG=!!l.DEBUG,l.isLoggingEnabled=!!l.isLoggingEnabled,l.platform=l.getPlatform(),l.isNative=l.isNativePlatform(),l},Z=(r=>r.Capacitor=J(r))(typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}),N=Z.registerPlugin,F=Z.Plugins;class ${constructor(e){this.listeners={},this.windowListeners={},e&&(console.warn(`Capacitor WebPlugin "${e.name}" config object was deprecated in v3 and will be removed in v4.`),this.config=e)}addListener(e,n){var o=this;this.listeners[e]||(this.listeners[e]=[]),this.listeners[e].push(n);const c=this.windowListeners[e];c&&!c.registered&&this.addWindowListener(c);const d=function(){var b=(0,u.Z)(function*(){return o.removeListener(e,n)});return function(){return b.apply(this,arguments)}}(),l=Promise.resolve({remove:d});return Object.defineProperty(l,"remove",{value:(b=(0,u.Z)(function*(){console.warn("Using addListener() without 'await' is deprecated."),yield d()}),function(){return b.apply(this,arguments)})}),l;var b}removeAllListeners(){var e=this;return(0,u.Z)(function*(){e.listeners={};for(const n in e.windowListeners)e.removeWindowListener(e.windowListeners[n]);e.windowListeners={}})()}notifyListeners(e,n){const o=this.listeners[e];o&&o.forEach(a=>a(n))}hasListeners(e){return!!this.listeners[e].length}registerWindowListener(e,n){this.windowListeners[n]={registered:!1,windowEventName:e,pluginEventName:n,handler:o=>{this.notifyListeners(n,o)}}}unimplemented(e="not implemented"){return new Z.Exception(e,L.Unimplemented)}unavailable(e="not available"){return new Z.Exception(e,L.Unavailable)}removeListener(e,n){var o=this;return(0,u.Z)(function*(){const a=o.listeners[e];if(!a)return;const c=a.indexOf(n);o.listeners[e].splice(c,1),o.listeners[e].length||o.removeWindowListener(o.windowListeners[e])})()}addWindowListener(e){window.addEventListener(e.windowEventName,e.handler),e.registered=!0}removeWindowListener(e){e&&(window.removeEventListener(e.windowEventName,e.handler),e.registered=!1)}}const j=r=>encodeURIComponent(r).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape),M=r=>r.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent);class z extends ${getCookies(){return(0,u.Z)(function*(){const e=document.cookie,n={};return e.split(";").forEach(o=>{if(o.length<=0)return;let[a,c]=o.replace(/=/,"CAP_COOKIE").split("CAP_COOKIE");a=M(a).trim(),c=M(c).trim(),n[a]=c}),n})()}setCookie(e){return(0,u.Z)(function*(){try{const n=j(e.key),o=j(e.value),a=`; expires=${(e.expires||"").replace("expires=","")}`,c=(e.path||"/").replace("path=",""),d=null!=e.url&&e.url.length>0?`domain=${e.url}`:"";document.cookie=`${n}=${o||""}${a}; path=${c}; ${d};`}catch(n){return Promise.reject(n)}})()}deleteCookie(e){return(0,u.Z)(function*(){try{document.cookie=`${e.key}=; Max-Age=0`}catch(n){return Promise.reject(n)}})()}clearCookies(){return(0,u.Z)(function*(){try{const e=document.cookie.split(";")||[];for(const n of e)document.cookie=n.replace(/^ +/,"").replace(/=.*/,`=;expires=${(new Date).toUTCString()};path=/`)}catch(e){return Promise.reject(e)}})()}clearAllCookies(){var e=this;return(0,u.Z)(function*(){try{yield e.clearCookies()}catch(n){return Promise.reject(n)}})()}}N("CapacitorCookies",{web:()=>new z});const R=function(){var r=(0,u.Z)(function*(e){return new Promise((n,o)=>{const a=new FileReader;a.onload=()=>{const c=a.result;n(c.indexOf(",")>=0?c.split(",")[1]:c)},a.onerror=c=>o(c),a.readAsDataURL(e)})});return function(n){return r.apply(this,arguments)}}();class Q extends ${request(e){return(0,u.Z)(function*(){const n=((r,e={})=>{const n=Object.assign({method:r.method||"GET",headers:r.headers},e),a=((r={})=>{const e=Object.keys(r);return Object.keys(r).map(a=>a.toLocaleLowerCase()).reduce((a,c,d)=>(a[c]=r[e[d]],a),{})})(r.headers)["content-type"]||"";if("string"==typeof r.data)n.body=r.data;else if(a.includes("application/x-www-form-urlencoded")){const c=new URLSearchParams;for(const[d,l]of Object.entries(r.data||{}))c.set(d,l);n.body=c.toString()}else if(a.includes("multipart/form-data")){const c=new FormData;if(r.data instanceof FormData)r.data.forEach((l,b)=>{c.append(b,l)});else for(const l of Object.keys(r.data))c.append(l,r.data[l]);n.body=c;const d=new Headers(n.headers);d.delete("content-type"),n.headers=d}else(a.includes("application/json")||"object"==typeof r.data)&&(n.body=JSON.stringify(r.data));return n})(e,e.webFetchExtra),o=((r,e=!0)=>r?Object.entries(r).reduce((o,a)=>{const[c,d]=a;let l,b;return Array.isArray(d)?(b="",d.forEach(f=>{l=e?encodeURIComponent(f):f,b+=`${c}=${l}&`}),b.slice(0,-1)):(l=e?encodeURIComponent(d):d,b=`${c}=${l}`),`${o}&${b}`},"").substr(1):null)(e.params,e.shouldEncodeUrlParams),a=o?`${e.url}?${o}`:e.url,c=yield fetch(a,n),d=c.headers.get("content-type")||"";let b,f,{responseType:l="text"}=c.ok?e:{};switch(d.includes("application/json")&&(l="json"),l){case"arraybuffer":case"blob":f=yield c.blob(),b=yield R(f);break;case"json":b=yield c.json();break;default:b=yield c.text()}const q={};return c.headers.forEach((U,Y)=>{q[Y]=U}),{data:b,headers:q,status:c.status,url:c.url}})()}get(e){var n=this;return(0,u.Z)(function*(){return n.request(Object.assign(Object.assign({},e),{method:"GET"}))})()}post(e){var n=this;return(0,u.Z)(function*(){return n.request(Object.assign(Object.assign({},e),{method:"POST"}))})()}put(e){var n=this;return(0,u.Z)(function*(){return n.request(Object.assign(Object.assign({},e),{method:"PUT"}))})()}patch(e){var n=this;return(0,u.Z)(function*(){return n.request(Object.assign(Object.assign({},e),{method:"PATCH"}))})()}delete(e){var n=this;return(0,u.Z)(function*(){return n.request(Object.assign(Object.assign({},e),{method:"DELETE"}))})()}}N("CapacitorHttp",{web:()=>new Q})},2598:(ee,A,m)=>{m.r(A),m.d(A,{HomePageModule:()=>Q});var u=m(6814),P=m(7027),s=m(95),p=m(3044),te=m(5861),W=m(2726),B=m(5961);(0,W.fo)("Camera",{web:()=>m.e(6468).then(m.bind(m,6468)).then(i=>new i.CameraWeb)});var _=m(2096),t=m(6689),J=m(553),ne=m(9862);let Z=(()=>{var i;class r{constructor(n){this.http=n,this.apiUrl="https://backend.stg.snapaddy.com/business-card/"}uploadBusinessCard(n,o){return this.http.post(this.apiUrl,{front:n,back:o},{headers:{"x-api-key":J.N.apiKey}})}}return(i=r).\u0275fac=function(n){return new(n||i)(t.LFG(ne.eN))},i.\u0275prov=t.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),r})();function N(i,r){1&i&&(t.TgZ(0,"div"),t._uU(1,"Front uploaded"),t.qZA())}function F(i,r){1&i&&(t.TgZ(0,"div"),t._uU(1,"Back uploaded"),t.qZA())}function re(i,r){1&i&&(t.TgZ(0,"div")(1,"ion-item"),t._UZ(2,"ion-spinner",10),t.qZA()())}function $(i,r){if(1&i&&(t.TgZ(0,"ion-item")(1,"ion-label",15),t._uU(2),t.qZA(),t._UZ(3,"ion-input",16),t.qZA()),2&i){const e=r.$implicit;t.xp6(2),t.Oqu(e),t.xp6(1),t.Q6J("formControlName",e)}}function oe(i,r){if(1&i&&(t.TgZ(0,"div"),t.YNc(1,$,4,2,"ion-item",13),t.qZA()),2&i){const e=t.oxw().$implicit,n=t.oxw(3);t.xp6(1),t.Q6J("ngForOf",n.getKeys(n.businessCard[e]))}}function j(i,r){if(1&i&&(t.TgZ(0,"ion-label",15),t._uU(1),t.qZA(),t._UZ(2,"ion-input",16)),2&i){const e=t.oxw().$implicit;t.xp6(1),t.Oqu(e),t.xp6(1),t.Q6J("formControlName",e)}}function M(i,r){if(1&i&&(t.TgZ(0,"ion-item"),t.YNc(1,oe,2,1,"div",8),t.YNc(2,j,3,2,"ng-template",null,14,t.W1O),t.qZA()),2&i){const e=r.$implicit,n=t.MAs(3),o=t.oxw(3);t.xp6(1),t.Q6J("ngIf","object"===o.checkType(o.businessCard[e]))("ngIfElse",n)}}function z(i,r){if(1&i&&(t.TgZ(0,"form",12),t.YNc(1,M,4,2,"ion-item",13),t.qZA()),2&i){const e=t.oxw(2);t.Q6J("formGroup",e.ionicForm),t.xp6(1),t.Q6J("ngForOf",e.businessCardKeys)}}function ie(i,r){if(1&i&&(t.TgZ(0,"ion-content"),t.YNc(1,z,2,2,"form",11),t.qZA()),2&i){const e=t.oxw();t.xp6(1),t.Q6J("ngIf",e.businessCard&&e.businessCard.contact&&e.businessCard.contact.organization)}}const{Camera:R}=W.Plugins,G=[{path:"",component:(()=>{var i;class r{constructor(n){this.businessCardService=n,this.frontB64Image="",this.backB64Image="",this.businessCardKeys=[],this.loading=(0,_.of)(!1)}ngOnInit(){this.ionicForm=new s.cw({city:new s.NI("",[s.kI.required]),country:new s.NI("",[s.kI.required]),email:new s.NI("",[s.kI.required,s.kI.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$")]),fax:new s.NI("",[s.kI.required]),firstName:new s.NI("",[s.kI.required]),gender:new s.NI("",[s.kI.required]),lastName:new s.NI("",[s.kI.required]),mobile:new s.NI("",[s.kI.required,s.kI.pattern("^[0-9]+$")]),organization:new s.NI("",[s.kI.required]),phone:new s.NI("",[s.kI.required]),position:new s.NI("",[s.kI.required]),state:new s.NI("",[s.kI.required]),street:new s.NI("",[s.kI.required]),street2:new s.NI("",[s.kI.required]),vat:new s.NI("",[s.kI.required]),website:new s.NI("",[s.kI.required]),zip:new s.NI("",[s.kI.required]),text:new s.NI("",[s.kI.required]),imageOrientation:new s.NI("",[s.kI.required])})}openCamera(n){var o=this;return(0,te.Z)(function*(){try{const a=yield R.getPhoto({quality:90,allowEditing:!1,resultType:B.dk.Base64,source:B.oK.Camera});"front"===n?o.frontB64Image=a.base64String:o.backB64Image=a.base64String}catch(a){console.error("Error opening camera:",a)}})()}fetchBusinessCardDetails(){this.loading=(0,_.of)(!0),this.businessCardService.uploadBusinessCard(this.frontB64Image,this.backB64Image).subscribe(n=>{this.loading=(0,_.of)(!1),this.businessCard=n,this.businessCardKeys=Object.keys(this.businessCard),this.ionicForm.setValue({city:this.businessCard.contact.city,country:this.businessCard.contact.country,firstName:this.businessCard.contact.firstName,lastName:this.businessCard.contact.lastName,organization:this.businessCard.contact.organization,imageOrientation:this.businessCard.imageOrientation,text:this.businessCard.text,email:this.businessCard.contact.email,fax:this.businessCard.contact.fax,gender:this.businessCard.contact.gender,mobile:this.businessCard.contact.mobile,phone:this.businessCard.contact.phone,position:this.businessCard.contact.position,state:this.businessCard.contact.state,street:this.businessCard.contact.street,street2:this.businessCard.contact.street2,vat:this.businessCard.contact.vat,website:this.businessCard.contact.website,zip:this.businessCard.contact.zip})},n=>{this.loading=(0,_.of)(!1),alert(`Failed to fetch details: ${n}`)})}checkType(n){return typeof n}getKeys(n){return Object.keys(n)}}return(i=r).\u0275fac=function(n){return new(n||i)(t.Y36(Z))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-home"]],decls:24,vars:9,consts:[[3,"translucent"],[3,"fullscreen"],["collapse","condense"],["size","large"],[3,"click"],["name","scan-outline"],[4,"ngIf"],["color","success",3,"disabled","click"],[4,"ngIf","ngIfElse"],["loaded",""],["name","lines-sharp"],[3,"formGroup",4,"ngIf"],[3,"formGroup"],[4,"ngFor","ngForOf"],["showInput",""],["position","floating"],["type","text",3,"formControlName"]],template:function(n,o){if(1&n&&(t.TgZ(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-title"),t._uU(3," Business Card Application "),t.qZA()()(),t.TgZ(4,"ion-content",1)(5,"ion-header",2)(6,"ion-toolbar")(7,"ion-title",3),t._uU(8,"Business Card Application"),t.qZA()()(),t.TgZ(9,"ion-button",4),t.NdJ("click",function(){return o.openCamera("front")}),t._UZ(10,"ion-icon",5),t._uU(11,"Scan front page"),t.qZA(),t.YNc(12,N,2,0,"div",6),t._UZ(13,"br"),t.TgZ(14,"ion-button",4),t.NdJ("click",function(){return o.openCamera("back")}),t._uU(15,"Scan back page"),t.qZA(),t.YNc(16,F,2,0,"div",6),t._UZ(17,"br"),t.TgZ(18,"ion-button",7),t.NdJ("click",function(){return o.fetchBusinessCardDetails()}),t._uU(19,"Submit Image"),t.qZA(),t.YNc(20,re,3,0,"div",8),t.ALo(21,"async"),t.YNc(22,ie,2,1,"ng-template",null,9,t.W1O),t.qZA()),2&n){const a=t.MAs(23);t.Q6J("translucent",!0),t.xp6(4),t.Q6J("fullscreen",!0),t.xp6(8),t.Q6J("ngIf",o.frontB64Image),t.xp6(4),t.Q6J("ngIf",o.backB64Image),t.xp6(2),t.Q6J("disabled",!o.frontB64Image||!o.backB64Image),t.xp6(2),t.Q6J("ngIf",t.lcZ(21,7,o.loading))("ngIfElse",a)}},dependencies:[u.sg,u.O5,s._Y,s.JJ,s.JL,P.YG,P.W2,P.Gu,P.gu,P.pK,P.Ie,P.Q$,P.PQ,P.wd,P.sr,P.j9,s.sg,s.u,u.Ov],styles:["#container[_ngcontent-%COMP%]{text-align:center;position:absolute;left:0;right:0;top:50%;transform:translateY(-50%)}#container[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-size:20px;line-height:26px}#container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px;line-height:22px;color:#8c8c8c;margin:0}#container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none}"]}),r})()}];let K=(()=>{var i;class r{}return(i=r).\u0275fac=function(n){return new(n||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[p.Bz.forChild(G),p.Bz]}),r})(),Q=(()=>{var i;class r{}return(i=r).\u0275fac=function(n){return new(n||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[u.ez,s.u5,P.Pc,K,s.UX]}),r})()}}]);