(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function s(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(r){if(r.ep)return;r.ep=!0;const i=s(r);fetch(r.href,i)}})();function Lt(e,n){const s=Object.create(null),a=e.split(",");for(let r=0;r<a.length;r++)s[a[r]]=!0;return n?r=>!!s[r.toLowerCase()]:r=>!!s[r]}function tn(e){if(ue(e)){const n={};for(let s=0;s<e.length;s++){const a=e[s],r=Ve(a)?yh(a):tn(a);if(r)for(const i in r)n[i]=r[i]}return n}else{if(Ve(e))return e;if(Ie(e))return e}}const kh=/;(?![^(]*\))/g,bh=/:([^]+)/,vh=/\/\*.*?\*\//gs;function yh(e){const n={};return e.replace(vh,"").split(kh).forEach(s=>{if(s){const a=s.split(bh);a.length>1&&(n[a[0].trim()]=a[1].trim())}}),n}function We(e){let n="";if(Ve(e))n=e;else if(ue(e))for(let s=0;s<e.length;s++){const a=We(e[s]);a&&(n+=a+" ")}else if(Ie(e))for(const s in e)e[s]&&(n+=s+" ");return n.trim()}function N(e){if(!e)return null;let{class:n,style:s}=e;return n&&!Ve(n)&&(e.class=We(n)),s&&(e.style=tn(s)),e}const wh="html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot",xh="svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view",Ju=Lt(wh),Sh=Lt(xh),Eh="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",$h=Lt(Eh);function Qu(e){return!!e||e===""}const $n=e=>Ve(e)?e:e==null?"":ue(e)||Ie(e)&&(e.toString===tp||!me(e.toString))?JSON.stringify(e,Xu,2):String(e),Xu=(e,n)=>n&&n.__v_isRef?Xu(e,n.value):Qt(n)?{[`Map(${n.size})`]:[...n.entries()].reduce((s,[a,r])=>(s[`${a} =>`]=r,s),{})}:np(n)?{[`Set(${n.size})`]:[...n.values()]}:Ie(n)&&!ue(n)&&!sp(n)?String(n):n,qe=Object.freeze({}),xs=Object.freeze([]),kn=()=>{},ep=()=>!1,Ph=/^on[^a-z]/,Aa=e=>Ph.test(e),fr=e=>e.startsWith("onUpdate:"),He=Object.assign,Fi=(e,n)=>{const s=e.indexOf(n);s>-1&&e.splice(s,1)},Th=Object.prototype.hasOwnProperty,Ee=(e,n)=>Th.call(e,n),ue=Array.isArray,Qt=e=>Fa(e)==="[object Map]",np=e=>Fa(e)==="[object Set]",Ch=e=>Fa(e)==="[object RegExp]",me=e=>typeof e=="function",Ve=e=>typeof e=="string",Mi=e=>typeof e=="symbol",Ie=e=>e!==null&&typeof e=="object",Ni=e=>Ie(e)&&me(e.then)&&me(e.catch),tp=Object.prototype.toString,Fa=e=>tp.call(e),Ii=e=>Fa(e).slice(8,-1),sp=e=>Fa(e)==="[object Object]",Di=e=>Ve(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,sr=Lt(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Oh=Lt("bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"),Dr=e=>{const n=Object.create(null);return s=>n[s]||(n[s]=e(s))},Ah=/-(\w)/g,Xn=Dr(e=>e.replace(Ah,(n,s)=>s?s.toUpperCase():"")),Fh=/\B([A-Z])/g,ut=Dr(e=>e.replace(Fh,"-$1").toLowerCase()),rs=Dr(e=>e.charAt(0).toUpperCase()+e.slice(1)),zt=Dr(e=>e?`on${rs(e)}`:""),fa=(e,n)=>!Object.is(e,n),wt=(e,n)=>{for(let s=0;s<e.length;s++)e[s](n)},hr=(e,n,s)=>{Object.defineProperty(e,n,{configurable:!0,enumerable:!1,value:s})},Lo=e=>{const n=parseFloat(e);return isNaN(n)?e:n},Mh=e=>{const n=Ve(e)?Number(e):NaN;return isNaN(n)?e:n};let Il;const ap=()=>Il||(Il=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function mr(e,...n){console.warn(`[Vue warn] ${e}`,...n)}let Sn;class rp{constructor(n=!1){this.detached=n,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Sn,!n&&Sn&&(this.index=(Sn.scopes||(Sn.scopes=[])).push(this)-1)}get active(){return this._active}run(n){if(this._active){const s=Sn;try{return Sn=this,n()}finally{Sn=s}}else mr("cannot run an inactive effect scope.")}on(){Sn=this}off(){Sn=this.parent}stop(n){if(this._active){let s,a;for(s=0,a=this.effects.length;s<a;s++)this.effects[s].stop();for(s=0,a=this.cleanups.length;s<a;s++)this.cleanups[s]();if(this.scopes)for(s=0,a=this.scopes.length;s<a;s++)this.scopes[s].stop(!0);if(!this.detached&&this.parent&&!n){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function Nh(e){return new rp(e)}function Ih(e,n=Sn){n&&n.active&&n.effects.push(e)}function Li(){return Sn}function op(e){Sn?Sn.cleanups.push(e):mr("onScopeDispose() is called when there is no active effect scope to be associated with.")}const ji=e=>{const n=new Set(e);return n.w=0,n.n=0,n},ip=e=>(e.w&Mt)>0,lp=e=>(e.n&Mt)>0,Dh=({deps:e})=>{if(e.length)for(let n=0;n<e.length;n++)e[n].w|=Mt},Lh=e=>{const{deps:n}=e;if(n.length){let s=0;for(let a=0;a<n.length;a++){const r=n[a];ip(r)&&!lp(r)?r.delete(e):n[s++]=r,r.w&=~Mt,r.n&=~Mt}n.length=s}},gr=new WeakMap;let Js=0,Mt=1;const jo=30;let pn;const Xt=Symbol("iterate"),qo=Symbol("Map key iterate");class qi{constructor(n,s=null,a){this.fn=n,this.scheduler=s,this.active=!0,this.deps=[],this.parent=void 0,Ih(this,a)}run(){if(!this.active)return this.fn();let n=pn,s=Pt;for(;n;){if(n===this)return;n=n.parent}try{return this.parent=pn,pn=this,Pt=!0,Mt=1<<++Js,Js<=jo?Dh(this):Dl(this),this.fn()}finally{Js<=jo&&Lh(this),Mt=1<<--Js,pn=this.parent,Pt=s,this.parent=void 0,this.deferStop&&this.stop()}}stop(){pn===this?this.deferStop=!0:this.active&&(Dl(this),this.onStop&&this.onStop(),this.active=!1)}}function Dl(e){const{deps:n}=e;if(n.length){for(let s=0;s<n.length;s++)n[s].delete(e);n.length=0}}let Pt=!0;const cp=[];function is(){cp.push(Pt),Pt=!1}function ls(){const e=cp.pop();Pt=e===void 0?!0:e}function vn(e,n,s){if(Pt&&pn){let a=gr.get(e);a||gr.set(e,a=new Map);let r=a.get(s);r||a.set(s,r=ji()),up(r,{effect:pn,target:e,type:n,key:s})}}function up(e,n){let s=!1;Js<=jo?lp(e)||(e.n|=Mt,s=!ip(e)):s=!e.has(pn),s&&(e.add(pn),pn.deps.push(e),pn.onTrack&&pn.onTrack(Object.assign({effect:pn},n)))}function pt(e,n,s,a,r,i){const l=gr.get(e);if(!l)return;let c=[];if(n==="clear")c=[...l.values()];else if(s==="length"&&ue(e)){const p=Number(a);l.forEach((d,f)=>{(f==="length"||f>=p)&&c.push(d)})}else switch(s!==void 0&&c.push(l.get(s)),n){case"add":ue(e)?Di(s)&&c.push(l.get("length")):(c.push(l.get(Xt)),Qt(e)&&c.push(l.get(qo)));break;case"delete":ue(e)||(c.push(l.get(Xt)),Qt(e)&&c.push(l.get(qo)));break;case"set":Qt(e)&&c.push(l.get(Xt));break}const u={target:e,type:n,key:s,newValue:a,oldValue:r,oldTarget:i};if(c.length===1)c[0]&&Ro(c[0],u);else{const p=[];for(const d of c)d&&p.push(...d);Ro(ji(p),u)}}function Ro(e,n){const s=ue(e)?e:[...e];for(const a of s)a.computed&&Ll(a,n);for(const a of s)a.computed||Ll(a,n)}function Ll(e,n){(e!==pn||e.allowRecurse)&&(e.onTrigger&&e.onTrigger(He({effect:e},n)),e.scheduler?e.scheduler():e.run())}function jh(e,n){var s;return(s=gr.get(e))===null||s===void 0?void 0:s.get(n)}const qh=Lt("__proto__,__v_isRef,__isVue"),pp=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Mi)),Rh=Lr(),Bh=Lr(!1,!0),Vh=Lr(!0),zh=Lr(!0,!0),jl=Wh();function Wh(){const e={};return["includes","indexOf","lastIndexOf"].forEach(n=>{e[n]=function(...s){const a=ge(this);for(let i=0,l=this.length;i<l;i++)vn(a,"get",i+"");const r=a[n](...s);return r===-1||r===!1?a[n](...s.map(ge)):r}}),["push","pop","shift","unshift","splice"].forEach(n=>{e[n]=function(...s){is();const a=ge(this)[n].apply(this,s);return ls(),a}}),e}function Hh(e){const n=ge(this);return vn(n,"has",e),n.hasOwnProperty(e)}function Lr(e=!1,n=!1){return function(a,r,i){if(r==="__v_isReactive")return!e;if(r==="__v_isReadonly")return e;if(r==="__v_isShallow")return n;if(r==="__v_raw"&&i===(e?n?bp:kp:n?_p:gp).get(a))return a;const l=ue(a);if(!e){if(l&&Ee(jl,r))return Reflect.get(jl,r,i);if(r==="hasOwnProperty")return Hh}const c=Reflect.get(a,r,i);return(Mi(r)?pp.has(r):qh(r))||(e||vn(a,"get",r),n)?c:Ae(c)?l&&Di(r)?c:c.value:Ie(c)?e?Et(c):ze(c):c}}const Uh=dp(),Gh=dp(!0);function dp(e=!1){return function(s,a,r,i){let l=s[a];if(Nt(l)&&Ae(l)&&!Ae(r))return!1;if(!e&&(!_r(r)&&!Nt(r)&&(l=ge(l),r=ge(r)),!ue(s)&&Ae(l)&&!Ae(r)))return l.value=r,!0;const c=ue(s)&&Di(a)?Number(a)<s.length:Ee(s,a),u=Reflect.set(s,a,r,i);return s===ge(i)&&(c?fa(r,l)&&pt(s,"set",a,r,l):pt(s,"add",a,r)),u}}function Kh(e,n){const s=Ee(e,n),a=e[n],r=Reflect.deleteProperty(e,n);return r&&s&&pt(e,"delete",n,void 0,a),r}function Zh(e,n){const s=Reflect.has(e,n);return(!Mi(n)||!pp.has(n))&&vn(e,"has",n),s}function Yh(e){return vn(e,"iterate",ue(e)?"length":Xt),Reflect.ownKeys(e)}const fp={get:Rh,set:Uh,deleteProperty:Kh,has:Zh,ownKeys:Yh},hp={get:Vh,set(e,n){return mr(`Set operation on key "${String(n)}" failed: target is readonly.`,e),!0},deleteProperty(e,n){return mr(`Delete operation on key "${String(n)}" failed: target is readonly.`,e),!0}},Jh=He({},fp,{get:Bh,set:Gh}),Qh=He({},hp,{get:zh}),Ri=e=>e,jr=e=>Reflect.getPrototypeOf(e);function Wa(e,n,s=!1,a=!1){e=e.__v_raw;const r=ge(e),i=ge(n);s||(n!==i&&vn(r,"get",n),vn(r,"get",i));const{has:l}=jr(r),c=a?Ri:s?Bi:ha;if(l.call(r,n))return c(e.get(n));if(l.call(r,i))return c(e.get(i));e!==r&&e.get(n)}function Ha(e,n=!1){const s=this.__v_raw,a=ge(s),r=ge(e);return n||(e!==r&&vn(a,"has",e),vn(a,"has",r)),e===r?s.has(e):s.has(e)||s.has(r)}function Ua(e,n=!1){return e=e.__v_raw,!n&&vn(ge(e),"iterate",Xt),Reflect.get(e,"size",e)}function ql(e){e=ge(e);const n=ge(this);return jr(n).has.call(n,e)||(n.add(e),pt(n,"add",e,e)),this}function Rl(e,n){n=ge(n);const s=ge(this),{has:a,get:r}=jr(s);let i=a.call(s,e);i?mp(s,a,e):(e=ge(e),i=a.call(s,e));const l=r.call(s,e);return s.set(e,n),i?fa(n,l)&&pt(s,"set",e,n,l):pt(s,"add",e,n),this}function Bl(e){const n=ge(this),{has:s,get:a}=jr(n);let r=s.call(n,e);r?mp(n,s,e):(e=ge(e),r=s.call(n,e));const i=a?a.call(n,e):void 0,l=n.delete(e);return r&&pt(n,"delete",e,void 0,i),l}function Vl(){const e=ge(this),n=e.size!==0,s=Qt(e)?new Map(e):new Set(e),a=e.clear();return n&&pt(e,"clear",void 0,void 0,s),a}function Ga(e,n){return function(a,r){const i=this,l=i.__v_raw,c=ge(l),u=n?Ri:e?Bi:ha;return!e&&vn(c,"iterate",Xt),l.forEach((p,d)=>a.call(r,u(p),u(d),i))}}function Ka(e,n,s){return function(...a){const r=this.__v_raw,i=ge(r),l=Qt(i),c=e==="entries"||e===Symbol.iterator&&l,u=e==="keys"&&l,p=r[e](...a),d=s?Ri:n?Bi:ha;return!n&&vn(i,"iterate",u?qo:Xt),{next(){const{value:f,done:h}=p.next();return h?{value:f,done:h}:{value:c?[d(f[0]),d(f[1])]:d(f),done:h}},[Symbol.iterator](){return this}}}}function mt(e){return function(...n){{const s=n[0]?`on key "${n[0]}" `:"";console.warn(`${rs(e)} operation ${s}failed: target is readonly.`,ge(this))}return e==="delete"?!1:this}}function Xh(){const e={get(i){return Wa(this,i)},get size(){return Ua(this)},has:Ha,add:ql,set:Rl,delete:Bl,clear:Vl,forEach:Ga(!1,!1)},n={get(i){return Wa(this,i,!1,!0)},get size(){return Ua(this)},has:Ha,add:ql,set:Rl,delete:Bl,clear:Vl,forEach:Ga(!1,!0)},s={get(i){return Wa(this,i,!0)},get size(){return Ua(this,!0)},has(i){return Ha.call(this,i,!0)},add:mt("add"),set:mt("set"),delete:mt("delete"),clear:mt("clear"),forEach:Ga(!0,!1)},a={get(i){return Wa(this,i,!0,!0)},get size(){return Ua(this,!0)},has(i){return Ha.call(this,i,!0)},add:mt("add"),set:mt("set"),delete:mt("delete"),clear:mt("clear"),forEach:Ga(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{e[i]=Ka(i,!1,!1),s[i]=Ka(i,!0,!1),n[i]=Ka(i,!1,!0),a[i]=Ka(i,!0,!0)}),[e,s,n,a]}const[em,nm,tm,sm]=Xh();function qr(e,n){const s=n?e?sm:tm:e?nm:em;return(a,r,i)=>r==="__v_isReactive"?!e:r==="__v_isReadonly"?e:r==="__v_raw"?a:Reflect.get(Ee(s,r)&&r in a?s:a,r,i)}const am={get:qr(!1,!1)},rm={get:qr(!1,!0)},om={get:qr(!0,!1)},im={get:qr(!0,!0)};function mp(e,n,s){const a=ge(s);if(a!==s&&n.call(e,a)){const r=Ii(e);console.warn(`Reactive ${r} contains both the raw and reactive versions of the same object${r==="Map"?" as keys":""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`)}}const gp=new WeakMap,_p=new WeakMap,kp=new WeakMap,bp=new WeakMap;function lm(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function cm(e){return e.__v_skip||!Object.isExtensible(e)?0:lm(Ii(e))}function ze(e){return Nt(e)?e:Rr(e,!1,fp,am,gp)}function um(e){return Rr(e,!1,Jh,rm,_p)}function Et(e){return Rr(e,!0,hp,om,kp)}function ys(e){return Rr(e,!0,Qh,im,bp)}function Rr(e,n,s,a,r){if(!Ie(e))return console.warn(`value cannot be made reactive: ${String(e)}`),e;if(e.__v_raw&&!(n&&e.__v_isReactive))return e;const i=r.get(e);if(i)return i;const l=cm(e);if(l===0)return e;const c=new Proxy(e,l===2?a:s);return r.set(e,c),c}function es(e){return Nt(e)?es(e.__v_raw):!!(e&&e.__v_isReactive)}function Nt(e){return!!(e&&e.__v_isReadonly)}function _r(e){return!!(e&&e.__v_isShallow)}function kr(e){return es(e)||Nt(e)}function ge(e){const n=e&&e.__v_raw;return n?ge(n):e}function Br(e){return hr(e,"__v_skip",!0),e}const ha=e=>Ie(e)?ze(e):e,Bi=e=>Ie(e)?Et(e):e;function Vi(e){Pt&&pn&&(e=ge(e),up(e.dep||(e.dep=ji()),{target:e,type:"get",key:"value"}))}function zi(e,n){e=ge(e);const s=e.dep;s&&Ro(s,{target:e,type:"set",key:"value",newValue:n})}function Ae(e){return!!(e&&e.__v_isRef===!0)}function se(e){return vp(e,!1)}function et(e){return vp(e,!0)}function vp(e,n){return Ae(e)?e:new pm(e,n)}class pm{constructor(n,s){this.__v_isShallow=s,this.dep=void 0,this.__v_isRef=!0,this._rawValue=s?n:ge(n),this._value=s?n:ha(n)}get value(){return Vi(this),this._value}set value(n){const s=this.__v_isShallow||_r(n)||Nt(n);n=s?n:ge(n),fa(n,this._rawValue)&&(this._rawValue=n,this._value=s?n:ha(n),zi(this,n))}}function C(e){return Ae(e)?e.value:e}const dm={get:(e,n,s)=>C(Reflect.get(e,n,s)),set:(e,n,s,a)=>{const r=e[n];return Ae(r)&&!Ae(s)?(r.value=s,!0):Reflect.set(e,n,s,a)}};function yp(e){return es(e)?e:new Proxy(e,dm)}class fm{constructor(n){this.dep=void 0,this.__v_isRef=!0;const{get:s,set:a}=n(()=>Vi(this),()=>zi(this));this._get=s,this._set=a}get value(){return this._get()}set value(n){this._set(n)}}function wp(e){return new fm(e)}function hm(e){kr(e)||console.warn("toRefs() expects a reactive object but received a plain one.");const n=ue(e)?new Array(e.length):{};for(const s in e)n[s]=gm(e,s);return n}class mm{constructor(n,s,a){this._object=n,this._key=s,this._defaultValue=a,this.__v_isRef=!0}get value(){const n=this._object[this._key];return n===void 0?this._defaultValue:n}set value(n){this._object[this._key]=n}get dep(){return jh(ge(this._object),this._key)}}function gm(e,n,s){const a=e[n];return Ae(a)?a:new mm(e,n,s)}var xp;class _m{constructor(n,s,a,r){this._setter=s,this.dep=void 0,this.__v_isRef=!0,this[xp]=!1,this._dirty=!0,this.effect=new qi(n,()=>{this._dirty||(this._dirty=!0,zi(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=a}get value(){const n=ge(this);return Vi(n),(n._dirty||!n._cacheable)&&(n._dirty=!1,n._value=n.effect.run()),n._value}set value(n){this._setter(n)}}xp="__v_isReadonly";function km(e,n,s=!1){let a,r;const i=me(e);i?(a=e,r=()=>{console.warn("Write operation failed: computed value is readonly")}):(a=e.get,r=e.set);const l=new _m(a,r,i||!r,s);return n&&!s&&(l.effect.onTrack=n.onTrack,l.effect.onTrigger=n.onTrigger),l}const ns=[];function ar(e){ns.push(e)}function rr(){ns.pop()}function z(e,...n){is();const s=ns.length?ns[ns.length-1].component:null,a=s&&s.appContext.config.warnHandler,r=bm();if(a)ct(a,s,11,[e+n.join(""),s&&s.proxy,r.map(({vnode:i})=>`at <${Jr(s,i.type)}>`).join(`
`),r]);else{const i=[`[Vue warn]: ${e}`,...n];r.length&&i.push(`
`,...vm(r)),console.warn(...i)}ls()}function bm(){let e=ns[ns.length-1];if(!e)return[];const n=[];for(;e;){const s=n[0];s&&s.vnode===e?s.recurseCount++:n.push({vnode:e,recurseCount:0});const a=e.component&&e.component.parent;e=a&&a.vnode}return n}function vm(e){const n=[];return e.forEach((s,a)=>{n.push(...a===0?[]:[`
`],...ym(s))}),n}function ym({vnode:e,recurseCount:n}){const s=n>0?`... (${n} recursive calls)`:"",a=e.component?e.component.parent==null:!1,r=` at <${Jr(e.component,e.type,a)}`,i=">"+s;return e.props?[r,...wm(e.props),i]:[r+i]}function wm(e){const n=[],s=Object.keys(e);return s.slice(0,3).forEach(a=>{n.push(...Sp(a,e[a]))}),s.length>3&&n.push(" ..."),n}function Sp(e,n,s){return Ve(n)?(n=JSON.stringify(n),s?n:[`${e}=${n}`]):typeof n=="number"||typeof n=="boolean"||n==null?s?n:[`${e}=${n}`]:Ae(n)?(n=Sp(e,ge(n.value),!0),s?n:[`${e}=Ref<`,n,">"]):me(n)?[`${e}=fn${n.name?`<${n.name}>`:""}`]:(n=ge(n),s?n:[`${e}=`,n])}function xm(e,n){e!==void 0&&(typeof e!="number"?z(`${n} is not a valid number - got ${JSON.stringify(e)}.`):isNaN(e)&&z(`${n} is NaN - the duration expression might be incorrect.`))}const Wi={sp:"serverPrefetch hook",bc:"beforeCreate hook",c:"created hook",bm:"beforeMount hook",m:"mounted hook",bu:"beforeUpdate hook",u:"updated",bum:"beforeUnmount hook",um:"unmounted hook",a:"activated hook",da:"deactivated hook",ec:"errorCaptured hook",rtc:"renderTracked hook",rtg:"renderTriggered hook",[0]:"setup function",[1]:"render function",[2]:"watcher getter",[3]:"watcher callback",[4]:"watcher cleanup function",[5]:"native event handler",[6]:"component event handler",[7]:"vnode hook",[8]:"directive hook",[9]:"transition hook",[10]:"app errorHandler",[11]:"app warnHandler",[12]:"ref function",[13]:"async component loader",[14]:"scheduler flush. This is likely a Vue internals bug. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/core"};function ct(e,n,s,a){let r;try{r=a?e(...a):e()}catch(i){Vr(i,n,s)}return r}function Dn(e,n,s,a){if(me(e)){const i=ct(e,n,s,a);return i&&Ni(i)&&i.catch(l=>{Vr(l,n,s)}),i}const r=[];for(let i=0;i<e.length;i++)r.push(Dn(e[i],n,s,a));return r}function Vr(e,n,s,a=!0){const r=n?n.vnode:null;if(n){let i=n.parent;const l=n.proxy,c=Wi[s];for(;i;){const p=i.ec;if(p){for(let d=0;d<p.length;d++)if(p[d](e,l,c)===!1)return}i=i.parent}const u=n.appContext.config.errorHandler;if(u){ct(u,null,10,[e,l,c]);return}}Sm(e,s,r,a)}function Sm(e,n,s,a=!0){{const r=Wi[n];if(s&&ar(s),z(`Unhandled error${r?` during execution of ${r}`:""}`),s&&rr(),a)throw e;console.error(e)}}let ma=!1,Bo=!1;const an=[];let Zn=0;const Ss=[];let Kn=null,bt=0;const Ep=Promise.resolve();let Hi=null;const Em=100;function nn(e){const n=Hi||Ep;return e?n.then(this?e.bind(this):e):n}function $m(e){let n=Zn+1,s=an.length;for(;n<s;){const a=n+s>>>1;ga(an[a])<e?n=a+1:s=a}return n}function zr(e){(!an.length||!an.includes(e,ma&&e.allowRecurse?Zn+1:Zn))&&(e.id==null?an.push(e):an.splice($m(e.id),0,e),$p())}function $p(){!ma&&!Bo&&(Bo=!0,Hi=Ep.then(Cp))}function Pm(e){const n=an.indexOf(e);n>Zn&&an.splice(n,1)}function Pp(e){ue(e)?Ss.push(...e):(!Kn||!Kn.includes(e,e.allowRecurse?bt+1:bt))&&Ss.push(e),$p()}function zl(e,n=ma?Zn+1:0){for(e=e||new Map;n<an.length;n++){const s=an[n];if(s&&s.pre){if(Ui(e,s))continue;an.splice(n,1),n--,s()}}}function Tp(e){if(Ss.length){const n=[...new Set(Ss)];if(Ss.length=0,Kn){Kn.push(...n);return}for(Kn=n,e=e||new Map,Kn.sort((s,a)=>ga(s)-ga(a)),bt=0;bt<Kn.length;bt++)Ui(e,Kn[bt])||Kn[bt]();Kn=null,bt=0}}const ga=e=>e.id==null?1/0:e.id,Tm=(e,n)=>{const s=ga(e)-ga(n);if(s===0){if(e.pre&&!n.pre)return-1;if(n.pre&&!e.pre)return 1}return s};function Cp(e){Bo=!1,ma=!0,e=e||new Map,an.sort(Tm);const n=s=>Ui(e,s);try{for(Zn=0;Zn<an.length;Zn++){const s=an[Zn];if(s&&s.active!==!1){if(n(s))continue;ct(s,null,14)}}}finally{Zn=0,an.length=0,Tp(e),ma=!1,Hi=null,(an.length||Ss.length)&&Cp(e)}}function Ui(e,n){if(!e.has(n))e.set(n,1);else{const s=e.get(n);if(s>Em){const a=n.ownerInstance,r=a&&va(a.type);return z(`Maximum recursive updates exceeded${r?` in component <${r}>`:""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`),!0}else e.set(n,s+1)}}let Tt=!1;const ks=new Set;ap().__VUE_HMR_RUNTIME__={createRecord:ao(Op),rerender:ao(Am),reload:ao(Fm)};const os=new Map;function Cm(e){const n=e.type.__hmrId;let s=os.get(n);s||(Op(n,e.type),s=os.get(n)),s.instances.add(e)}function Om(e){os.get(e.type.__hmrId).instances.delete(e)}function Op(e,n){return os.has(e)?!1:(os.set(e,{initialDef:ea(n),instances:new Set}),!0)}function ea(e){return ld(e)?e.__vccOpts:e}function Am(e,n){const s=os.get(e);s&&(s.initialDef.render=n,[...s.instances].forEach(a=>{n&&(a.render=n,ea(a.type).render=n),a.renderCache=[],Tt=!0,a.update(),Tt=!1}))}function Fm(e,n){const s=os.get(e);if(!s)return;n=ea(n),Wl(s.initialDef,n);const a=[...s.instances];for(const r of a){const i=ea(r.type);ks.has(i)||(i!==s.initialDef&&Wl(i,n),ks.add(i)),r.appContext.optionsCache.delete(r.type),r.ceReload?(ks.add(i),r.ceReload(n.styles),ks.delete(i)):r.parent?zr(r.parent.update):r.appContext.reload?r.appContext.reload():typeof window<"u"?window.location.reload():console.warn("[HMR] Root or manually mounted instance modified. Full reload required.")}Pp(()=>{for(const r of a)ks.delete(ea(r.type))})}function Wl(e,n){He(e,n);for(const s in e)s!=="__file"&&!(s in n)&&delete e[s]}function ao(e){return(n,s)=>{try{return e(n,s)}catch(a){console.error(a),console.warn("[HMR] Something went wrong during Vue component hot-reload. Full reload required.")}}}let Yn,Qs=[],Vo=!1;function Ma(e,...n){Yn?Yn.emit(e,...n):Vo||Qs.push({event:e,args:n})}function Ap(e,n){var s,a;Yn=e,Yn?(Yn.enabled=!0,Qs.forEach(({event:r,args:i})=>Yn.emit(r,...i)),Qs=[]):typeof window<"u"&&window.HTMLElement&&!(!((a=(s=window.navigator)===null||s===void 0?void 0:s.userAgent)===null||a===void 0)&&a.includes("jsdom"))?((n.__VUE_DEVTOOLS_HOOK_REPLAY__=n.__VUE_DEVTOOLS_HOOK_REPLAY__||[]).push(i=>{Ap(i,n)}),setTimeout(()=>{Yn||(n.__VUE_DEVTOOLS_HOOK_REPLAY__=null,Vo=!0,Qs=[])},3e3)):(Vo=!0,Qs=[])}function Mm(e,n){Ma("app:init",e,n,{Fragment:Fe,Text:La,Comment:Xe,Static:or})}function Nm(e){Ma("app:unmount",e)}const zo=Gi("component:added"),Fp=Gi("component:updated"),Im=Gi("component:removed"),Dm=e=>{Yn&&typeof Yn.cleanupBuffer=="function"&&!Yn.cleanupBuffer(e)&&Im(e)};function Gi(e){return n=>{Ma(e,n.appContext.app,n.uid,n.parent?n.parent.uid:void 0,n)}}const Lm=Mp("perf:start"),jm=Mp("perf:end");function Mp(e){return(n,s,a)=>{Ma(e,n.appContext.app,n.uid,n,s,a)}}function qm(e,n,s){Ma("component:emit",e.appContext.app,e,n,s)}function Rm(e,n,...s){if(e.isUnmounted)return;const a=e.vnode.props||qe;{const{emitsOptions:d,propsOptions:[f]}=e;if(d)if(!(n in d))(!f||!(zt(n)in f))&&z(`Component emitted event "${n}" but it is neither declared in the emits option nor as an "${zt(n)}" prop.`);else{const h=d[n];me(h)&&(h(...s)||z(`Invalid event arguments: event validation failed for event "${n}".`))}}let r=s;const i=n.startsWith("update:"),l=i&&n.slice(7);if(l&&l in a){const d=`${l==="modelValue"?"model":l}Modifiers`,{number:f,trim:h}=a[d]||qe;h&&(r=s.map(m=>Ve(m)?m.trim():m)),f&&(r=s.map(Lo))}qm(e,n,r);{const d=n.toLowerCase();d!==n&&a[zt(d)]&&z(`Event "${d}" is emitted in component ${Jr(e,e.type)} but the handler is registered for "${n}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${ut(n)}" instead of "${n}".`)}let c,u=a[c=zt(n)]||a[c=zt(Xn(n))];!u&&i&&(u=a[c=zt(ut(n))]),u&&Dn(u,e,6,r);const p=a[c+"Once"];if(p){if(!e.emitted)e.emitted={};else if(e.emitted[c])return;e.emitted[c]=!0,Dn(p,e,6,r)}}function Np(e,n,s=!1){const a=n.emitsCache,r=a.get(e);if(r!==void 0)return r;const i=e.emits;let l={},c=!1;if(!me(e)){const u=p=>{const d=Np(p,n,!0);d&&(c=!0,He(l,d))};!s&&n.mixins.length&&n.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}return!i&&!c?(Ie(e)&&a.set(e,null),null):(ue(i)?i.forEach(u=>l[u]=null):He(l,i),Ie(e)&&a.set(e,l),l)}function Wr(e,n){return!e||!Aa(n)?!1:(n=n.slice(2).replace(/Once$/,""),Ee(e,n[0].toLowerCase()+n.slice(1))||Ee(e,ut(n))||Ee(e,n))}let Qe=null,Hr=null;function br(e){const n=Qe;return Qe=e,Hr=e&&e.type.__scopeId||null,n}function Bm(e){Hr=e}function Vm(){Hr=null}function w(e,n=Qe,s){if(!n||e._n)return e;const a=(...r)=>{a._d&&sc(-1);const i=br(n);let l;try{l=e(...r)}finally{br(i),a._d&&sc(1)}return Fp(n),l};return a._n=!0,a._c=!0,a._d=!0,a}let Wo=!1;function vr(){Wo=!0}function ro(e){const{type:n,vnode:s,proxy:a,withProxy:r,props:i,propsOptions:[l],slots:c,attrs:u,emit:p,render:d,renderCache:f,data:h,setupState:m,ctx:g,inheritAttrs:b}=e;let y,O;const x=br(e);Wo=!1;try{if(s.shapeFlag&4){const R=r||a;y=zn(d.call(R,R,f,i,m,h,g)),O=u}else{const R=n;u===i&&vr(),y=zn(R.length>1?R(i,{get attrs(){return vr(),u},slots:c,emit:p}):R(i,null)),O=n.props?u:Wm(u)}}catch(R){ta.length=0,Vr(R,e,1),y=q(Xe)}let E=y,A;if(y.patchFlag>0&&y.patchFlag&2048&&([E,A]=zm(y)),O&&b!==!1){const R=Object.keys(O),{shapeFlag:W}=E;if(R.length){if(W&7)l&&R.some(fr)&&(O=Hm(O,l)),E=Hn(E,O);else if(!Wo&&E.type!==Xe){const Y=Object.keys(u),j=[],K=[];for(let ae=0,fe=Y.length;ae<fe;ae++){const X=Y[ae];Aa(X)?fr(X)||j.push(X[2].toLowerCase()+X.slice(3)):K.push(X)}K.length&&z(`Extraneous non-props attributes (${K.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes.`),j.length&&z(`Extraneous non-emits event listeners (${j.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`)}}}return s.dirs&&(Hl(E)||z("Runtime directive used on component with non-element root node. The directives will not function as intended."),E=Hn(E),E.dirs=E.dirs?E.dirs.concat(s.dirs):s.dirs),s.transition&&(Hl(E)||z("Component inside <Transition> renders non-element root node that cannot be animated."),E.transition=s.transition),A?A(E):y=E,br(x),y}const zm=e=>{const n=e.children,s=e.dynamicChildren,a=Ip(n);if(!a)return[e,void 0];const r=n.indexOf(a),i=s?s.indexOf(a):-1,l=c=>{n[r]=c,s&&(i>-1?s[i]=c:c.patchFlag>0&&(e.dynamicChildren=[...s,c]))};return[zn(a),l]};function Ip(e){let n;for(let s=0;s<e.length;s++){const a=e[s];if(It(a)){if(a.type!==Xe||a.children==="v-if"){if(n)return;n=a}}else return}return n}const Wm=e=>{let n;for(const s in e)(s==="class"||s==="style"||Aa(s))&&((n||(n={}))[s]=e[s]);return n},Hm=(e,n)=>{const s={};for(const a in e)(!fr(a)||!(a.slice(9)in n))&&(s[a]=e[a]);return s},Hl=e=>e.shapeFlag&7||e.type===Xe;function Um(e,n,s){const{props:a,children:r,component:i}=e,{props:l,children:c,patchFlag:u}=n,p=i.emitsOptions;if((r||c)&&Tt||n.dirs||n.transition)return!0;if(s&&u>=0){if(u&1024)return!0;if(u&16)return a?Ul(a,l,p):!!l;if(u&8){const d=n.dynamicProps;for(let f=0;f<d.length;f++){const h=d[f];if(l[h]!==a[h]&&!Wr(p,h))return!0}}}else return(r||c)&&(!c||!c.$stable)?!0:a===l?!1:a?l?Ul(a,l,p):!0:!!l;return!1}function Ul(e,n,s){const a=Object.keys(n);if(a.length!==Object.keys(e).length)return!0;for(let r=0;r<a.length;r++){const i=a[r];if(n[i]!==e[i]&&!Wr(s,i))return!0}return!1}function Gm({vnode:e,parent:n},s){for(;n&&n.subTree===e;)(e=n.vnode).el=s,n=n.parent}const Dp=e=>e.__isSuspense;function Km(e,n){n&&n.pendingBranch?ue(e)?n.effects.push(...e):n.effects.push(e):Pp(e)}function En(e,n){if(!Ue)z("provide() can only be used inside setup().");else{let s=Ue.provides;const a=Ue.parent&&Ue.parent.provides;a===s&&(s=Ue.provides=Object.create(a)),s[e]=n}}function S(e,n,s=!1){const a=Ue||Qe;if(a){const r=a.parent==null?a.vnode.appContext&&a.vnode.appContext.provides:a.parent.provides;if(r&&e in r)return r[e];if(arguments.length>1)return s&&me(n)?n.call(a.proxy):n;z(`injection "${String(e)}" not found.`)}else z("inject() can only be used inside setup() or functional components.")}function cs(e,n){return Ki(e,null,n)}const Za={};function we(e,n,s){return me(n)||z("`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."),Ki(e,n,s)}function Ki(e,n,{immediate:s,deep:a,flush:r,onTrack:i,onTrigger:l}=qe){n||(s!==void 0&&z('watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'),a!==void 0&&z('watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'));const c=A=>{z("Invalid watch source: ",A,"A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types.")},u=Li()===(Ue==null?void 0:Ue.scope)?Ue:null;let p,d=!1,f=!1;if(Ae(e)?(p=()=>e.value,d=_r(e)):es(e)?(p=()=>e,a=!0):ue(e)?(f=!0,d=e.some(A=>es(A)||_r(A)),p=()=>e.map(A=>{if(Ae(A))return A.value;if(es(A))return Zt(A);if(me(A))return ct(A,u,2);c(A)})):me(e)?n?p=()=>ct(e,u,2):p=()=>{if(!(u&&u.isUnmounted))return h&&h(),Dn(e,u,3,[m])}:(p=kn,c(e)),n&&a){const A=p;p=()=>Zt(A())}let h,m=A=>{h=x.onStop=()=>{ct(A,u,4)}},g;if(ba)if(m=kn,n?s&&Dn(n,u,3,[p(),f?[]:void 0,m]):p(),r==="sync"){const A=e_();g=A.__watcherHandles||(A.__watcherHandles=[])}else return kn;let b=f?new Array(e.length).fill(Za):Za;const y=()=>{if(x.active)if(n){const A=x.run();(a||d||(f?A.some((R,W)=>fa(R,b[W])):fa(A,b)))&&(h&&h(),Dn(n,u,3,[A,b===Za?void 0:f&&b[0]===Za?[]:b,m]),b=A)}else x.run()};y.allowRecurse=!!n;let O;r==="sync"?O=y:r==="post"?O=()=>en(y,u&&u.suspense):(y.pre=!0,u&&(y.id=u.uid),O=()=>zr(y));const x=new qi(p,O);x.onTrack=i,x.onTrigger=l,n?s?y():b=x.run():r==="post"?en(x.run.bind(x),u&&u.suspense):x.run();const E=()=>{x.stop(),u&&u.scope&&Fi(u.scope.effects,x)};return g&&g.push(E),E}function Zm(e,n,s){const a=this.proxy,r=Ve(e)?e.includes(".")?Lp(a,e):()=>a[e]:e.bind(a,a);let i;me(n)?i=n:(i=n.handler,s=n);const l=Ue;As(this);const c=Ki(r,i.bind(a),s);return l?As(l):ss(),c}function Lp(e,n){const s=n.split(".");return()=>{let a=e;for(let r=0;r<s.length&&a;r++)a=a[s[r]];return a}}function Zt(e,n){if(!Ie(e)||e.__v_skip||(n=n||new Set,n.has(e)))return e;if(n.add(e),Ae(e))Zt(e.value,n);else if(ue(e))for(let s=0;s<e.length;s++)Zt(e[s],n);else if(np(e)||Qt(e))e.forEach(s=>{Zt(s,n)});else if(sp(e))for(const s in e)Zt(e[s],n);return e}function jp(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return us(()=>{e.isMounted=!0}),Ia(()=>{e.isUnmounting=!0}),e}const Fn=[Function,Array],Ym={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Fn,onEnter:Fn,onAfterEnter:Fn,onEnterCancelled:Fn,onBeforeLeave:Fn,onLeave:Fn,onAfterLeave:Fn,onLeaveCancelled:Fn,onBeforeAppear:Fn,onAppear:Fn,onAfterAppear:Fn,onAppearCancelled:Fn},setup(e,{slots:n}){const s=An(),a=jp();let r;return()=>{const i=n.default&&Zi(n.default(),!0);if(!i||!i.length)return;let l=i[0];if(i.length>1){let b=!1;for(const y of i)if(y.type!==Xe){if(b){z("<transition> can only be used on a single element or component. Use <transition-group> for lists.");break}l=y,b=!0}}const c=ge(e),{mode:u}=c;if(u&&u!=="in-out"&&u!=="out-in"&&u!=="default"&&z(`invalid <transition> mode: ${u}`),a.isLeaving)return oo(l);const p=Gl(l);if(!p)return oo(l);const d=_a(p,c,a,s);Os(p,d);const f=s.subTree,h=f&&Gl(f);let m=!1;const{getTransitionKey:g}=p.type;if(g){const b=g();r===void 0?r=b:b!==r&&(r=b,m=!0)}if(h&&h.type!==Xe&&(!St(p,h)||m)){const b=_a(h,c,a,s);if(Os(h,b),u==="out-in")return a.isLeaving=!0,b.afterLeave=()=>{a.isLeaving=!1,s.update.active!==!1&&s.update()},oo(l);u==="in-out"&&p.type!==Xe&&(b.delayLeave=(y,O,x)=>{const E=qp(a,h);E[String(h.key)]=h,y._leaveCb=()=>{O(),y._leaveCb=void 0,delete d.delayedLeave},d.delayedLeave=x})}return l}}},Jm=Ym;function qp(e,n){const{leavingVNodes:s}=e;let a=s.get(n.type);return a||(a=Object.create(null),s.set(n.type,a)),a}function _a(e,n,s,a){const{appear:r,mode:i,persisted:l=!1,onBeforeEnter:c,onEnter:u,onAfterEnter:p,onEnterCancelled:d,onBeforeLeave:f,onLeave:h,onAfterLeave:m,onLeaveCancelled:g,onBeforeAppear:b,onAppear:y,onAfterAppear:O,onAppearCancelled:x}=n,E=String(e.key),A=qp(s,e),R=(j,K)=>{j&&Dn(j,a,9,K)},W=(j,K)=>{const ae=K[1];R(j,K),ue(j)?j.every(fe=>fe.length<=1)&&ae():j.length<=1&&ae()},Y={mode:i,persisted:l,beforeEnter(j){let K=c;if(!s.isMounted)if(r)K=b||c;else return;j._leaveCb&&j._leaveCb(!0);const ae=A[E];ae&&St(e,ae)&&ae.el._leaveCb&&ae.el._leaveCb(),R(K,[j])},enter(j){let K=u,ae=p,fe=d;if(!s.isMounted)if(r)K=y||u,ae=O||p,fe=x||d;else return;let X=!1;const de=j._enterCb=De=>{X||(X=!0,De?R(fe,[j]):R(ae,[j]),Y.delayedLeave&&Y.delayedLeave(),j._enterCb=void 0)};K?W(K,[j,de]):de()},leave(j,K){const ae=String(e.key);if(j._enterCb&&j._enterCb(!0),s.isUnmounting)return K();R(f,[j]);let fe=!1;const X=j._leaveCb=de=>{fe||(fe=!0,K(),de?R(g,[j]):R(m,[j]),j._leaveCb=void 0,A[ae]===e&&delete A[ae])};A[ae]=e,h?W(h,[j,X]):X()},clone(j){return _a(j,n,s,a)}};return Y}function oo(e){if(Na(e))return e=Hn(e),e.children=null,e}function Gl(e){return Na(e)?e.children?e.children[0]:void 0:e}function Os(e,n){e.shapeFlag&6&&e.component?Os(e.component.subTree,n):e.shapeFlag&128?(e.ssContent.transition=n.clone(e.ssContent),e.ssFallback.transition=n.clone(e.ssFallback)):e.transition=n}function Zi(e,n=!1,s){let a=[],r=0;for(let i=0;i<e.length;i++){let l=e[i];const c=s==null?l.key:String(s)+String(l.key!=null?l.key:i);l.type===Fe?(l.patchFlag&128&&r++,a=a.concat(Zi(l.children,n,c))):(n||l.type!==Xe)&&a.push(c!=null?Hn(l,{key:c}):l)}if(r>1)for(let i=0;i<a.length;i++)a[i].patchFlag=-2;return a}function Me(e){return me(e)?{setup:e,name:e.name}:e}const Es=e=>!!e.type.__asyncLoader,Na=e=>e.type.__isKeepAlive,Qm={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(e,{slots:n}){const s=An(),a=s.ctx;if(!a.renderer)return()=>{const x=n.default&&n.default();return x&&x.length===1?x[0]:x};const r=new Map,i=new Set;let l=null;s.__v_cache=r;const c=s.suspense,{renderer:{p:u,m:p,um:d,o:{createElement:f}}}=a,h=f("div");a.activate=(x,E,A,R,W)=>{const Y=x.component;p(x,E,A,0,c),u(Y.vnode,x,E,A,Y,c,R,x.slotScopeIds,W),en(()=>{Y.isDeactivated=!1,Y.a&&wt(Y.a);const j=x.props&&x.props.onVnodeMounted;j&&Mn(j,Y.parent,x)},c),zo(Y)},a.deactivate=x=>{const E=x.component;p(x,h,null,1,c),en(()=>{E.da&&wt(E.da);const A=x.props&&x.props.onVnodeUnmounted;A&&Mn(A,E.parent,x),E.isDeactivated=!0},c),zo(E)};function m(x){io(x),d(x,s,c,!0)}function g(x){r.forEach((E,A)=>{const R=va(E.type);R&&(!x||!x(R))&&b(A)})}function b(x){const E=r.get(x);!l||!St(E,l)?m(E):l&&io(l),r.delete(x),i.delete(x)}we(()=>[e.include,e.exclude],([x,E])=>{x&&g(A=>Xs(x,A)),E&&g(A=>!Xs(E,A))},{flush:"post",deep:!0});let y=null;const O=()=>{y!=null&&r.set(y,lo(s.subTree))};return us(O),Gr(O),Ia(()=>{r.forEach(x=>{const{subTree:E,suspense:A}=s,R=lo(E);if(x.type===R.type&&x.key===R.key){io(R);const W=R.component.da;W&&en(W,A);return}m(x)})}),()=>{if(y=null,!n.default)return null;const x=n.default(),E=x[0];if(x.length>1)return z("KeepAlive should contain exactly one component child."),l=null,x;if(!It(E)||!(E.shapeFlag&4)&&!(E.shapeFlag&128))return l=null,E;let A=lo(E);const R=A.type,W=va(Es(A)?A.type.__asyncResolved||{}:R),{include:Y,exclude:j,max:K}=e;if(Y&&(!W||!Xs(Y,W))||j&&W&&Xs(j,W))return l=A,E;const ae=A.key==null?R:A.key,fe=r.get(ae);return A.el&&(A=Hn(A),E.shapeFlag&128&&(E.ssContent=A)),y=ae,fe?(A.el=fe.el,A.component=fe.component,A.transition&&Os(A,A.transition),A.shapeFlag|=512,i.delete(ae),i.add(ae)):(i.add(ae),K&&i.size>parseInt(K,10)&&b(i.values().next().value)),A.shapeFlag|=256,l=A,Dp(E.type)?E:A}}},Rp=Qm;function Xs(e,n){return ue(e)?e.some(s=>Xs(s,n)):Ve(e)?e.split(",").includes(n):Ch(e)?e.test(n):!1}function Bp(e,n){zp(e,"a",n)}function Vp(e,n){zp(e,"da",n)}function zp(e,n,s=Ue){const a=e.__wdc||(e.__wdc=()=>{let r=s;for(;r;){if(r.isDeactivated)return;r=r.parent}return e()});if(Ur(n,a,s),s){let r=s.parent;for(;r&&r.parent;)Na(r.parent.vnode)&&Xm(a,n,s,r),r=r.parent}}function Xm(e,n,s,a){const r=Ur(n,e,a,!0);Kr(()=>{Fi(a[n],r)},s)}function io(e){e.shapeFlag&=-257,e.shapeFlag&=-513}function lo(e){return e.shapeFlag&128?e.ssContent:e}function Ur(e,n,s=Ue,a=!1){if(s){const r=s[e]||(s[e]=[]),i=n.__weh||(n.__weh=(...l)=>{if(s.isUnmounted)return;is(),As(s);const c=Dn(n,s,e,l);return ss(),ls(),c});return a?r.unshift(i):r.push(i),i}else{const r=zt(Wi[e].replace(/ hook$/,""));z(`${r} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`)}}const dt=e=>(n,s=Ue)=>(!ba||e==="sp")&&Ur(e,(...a)=>n(...a),s),eg=dt("bm"),us=dt("m"),ng=dt("bu"),Gr=dt("u"),Ia=dt("bum"),Kr=dt("um"),tg=dt("sp"),sg=dt("rtg"),ag=dt("rtc");function rg(e,n=Ue){Ur("ec",e,n)}function Wp(e){Oh(e)&&z("Do not use built-in directive ids as custom directive id: "+e)}function Yi(e,n){const s=Qe;if(s===null)return z("withDirectives can only be used inside render functions."),e;const a=Yr(s)||s.proxy,r=e.dirs||(e.dirs=[]);for(let i=0;i<n.length;i++){let[l,c,u,p=qe]=n[i];l&&(me(l)&&(l={mounted:l,updated:l}),l.deep&&Zt(c),r.push({dir:l,instance:a,value:c,oldValue:void 0,arg:u,modifiers:p}))}return e}function jt(e,n,s,a){const r=e.dirs,i=n&&n.dirs;for(let l=0;l<r.length;l++){const c=r[l];i&&(c.oldValue=i[l].value);let u=c.dir[a];u&&(is(),Dn(u,s,8,[e.el,c,e,n]),ls())}}const Ho="components";function yr(e,n){return ig(Ho,e,!0,n)||e}const og=Symbol();function ig(e,n,s=!0,a=!1){const r=Qe||Ue;if(r){const i=r.type;if(e===Ho){const c=va(i,!1);if(c&&(c===n||c===Xn(n)||c===rs(Xn(n))))return i}const l=Kl(r[e]||i[e],n)||Kl(r.appContext[e],n);if(!l&&a)return i;if(s&&!l){const c=e===Ho?`
If this is a native custom element, make sure to exclude it from component resolution via compilerOptions.isCustomElement.`:"";z(`Failed to resolve ${e.slice(0,-1)}: ${n}${c}`)}return l}else z(`resolve${rs(e.slice(0,-1))} can only be used in render() or setup().`)}function Kl(e,n){return e&&(e[n]||e[Xn(n)]||e[rs(Xn(n))])}function Da(e,n,s,a){let r;const i=s&&s[a];if(ue(e)||Ve(e)){r=new Array(e.length);for(let l=0,c=e.length;l<c;l++)r[l]=n(e[l],l,void 0,i&&i[l])}else if(typeof e=="number"){Number.isInteger(e)||z(`The v-for range expect an integer value but got ${e}.`),r=new Array(e);for(let l=0;l<e;l++)r[l]=n(l+1,l,void 0,i&&i[l])}else if(Ie(e))if(e[Symbol.iterator])r=Array.from(e,(l,c)=>n(l,c,void 0,i&&i[c]));else{const l=Object.keys(e);r=new Array(l.length);for(let c=0,u=l.length;c<u;c++){const p=l[c];r[c]=n(e[p],p,c,i&&i[c])}}else r=[];return s&&(s[a]=r),r}function Ln(e,n,s={},a,r){if(Qe.isCE||Qe.parent&&Es(Qe.parent)&&Qe.parent.isCE)return n!=="default"&&(s.name=n),q("slot",s,a&&a());let i=e[n];i&&i.length>1&&(z("SSR-optimized slot function detected in a non-SSR-optimized render function. You need to mark this component with $dynamic-slots in the parent template."),i=()=>[]),i&&i._c&&(i._d=!1),k();const l=i&&Hp(i(s)),c=$(Fe,{key:s.key||l&&l.key||`_${n}`},l||(a?a():[]),l&&e._===1?64:-2);return!r&&c.scopeId&&(c.slotScopeIds=[c.scopeId+"-s"]),i&&i._c&&(i._d=!0),c}function Hp(e){return e.some(n=>It(n)?!(n.type===Xe||n.type===Fe&&!Hp(n.children)):!0)?e:null}const Uo=e=>e?rd(e)?Yr(e)||e.proxy:Uo(e.parent):null,ts=He(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>ys(e.props),$attrs:e=>ys(e.attrs),$slots:e=>ys(e.slots),$refs:e=>ys(e.refs),$parent:e=>Uo(e.parent),$root:e=>Uo(e.root),$emit:e=>e.emit,$options:e=>Qi(e),$forceUpdate:e=>e.f||(e.f=()=>zr(e.update)),$nextTick:e=>e.n||(e.n=nn.bind(e.proxy)),$watch:e=>Zm.bind(e)}),Ji=e=>e==="_"||e==="$",co=(e,n)=>e!==qe&&!e.__isScriptSetup&&Ee(e,n),Up={get({_:e},n){const{ctx:s,setupState:a,data:r,props:i,accessCache:l,type:c,appContext:u}=e;if(n==="__isVue")return!0;let p;if(n[0]!=="$"){const m=l[n];if(m!==void 0)switch(m){case 1:return a[n];case 2:return r[n];case 4:return s[n];case 3:return i[n]}else{if(co(a,n))return l[n]=1,a[n];if(r!==qe&&Ee(r,n))return l[n]=2,r[n];if((p=e.propsOptions[0])&&Ee(p,n))return l[n]=3,i[n];if(s!==qe&&Ee(s,n))return l[n]=4,s[n];Go&&(l[n]=0)}}const d=ts[n];let f,h;if(d)return n==="$attrs"&&(vn(e,"get",n),vr()),d(e);if((f=c.__cssModules)&&(f=f[n]))return f;if(s!==qe&&Ee(s,n))return l[n]=4,s[n];if(h=u.config.globalProperties,Ee(h,n))return h[n];Qe&&(!Ve(n)||n.indexOf("__v")!==0)&&(r!==qe&&Ji(n[0])&&Ee(r,n)?z(`Property ${JSON.stringify(n)} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`):e===Qe&&z(`Property ${JSON.stringify(n)} was accessed during render but is not defined on instance.`))},set({_:e},n,s){const{data:a,setupState:r,ctx:i}=e;return co(r,n)?(r[n]=s,!0):r.__isScriptSetup&&Ee(r,n)?(z(`Cannot mutate <script setup> binding "${n}" from Options API.`),!1):a!==qe&&Ee(a,n)?(a[n]=s,!0):Ee(e.props,n)?(z(`Attempting to mutate prop "${n}". Props are readonly.`),!1):n[0]==="$"&&n.slice(1)in e?(z(`Attempting to mutate public property "${n}". Properties starting with $ are reserved and readonly.`),!1):(n in e.appContext.config.globalProperties?Object.defineProperty(i,n,{enumerable:!0,configurable:!0,value:s}):i[n]=s,!0)},has({_:{data:e,setupState:n,accessCache:s,ctx:a,appContext:r,propsOptions:i}},l){let c;return!!s[l]||e!==qe&&Ee(e,l)||co(n,l)||(c=i[0])&&Ee(c,l)||Ee(a,l)||Ee(ts,l)||Ee(r.config.globalProperties,l)},defineProperty(e,n,s){return s.get!=null?e._.accessCache[n]=0:Ee(s,"value")&&this.set(e,n,s.value,null),Reflect.defineProperty(e,n,s)}};Up.ownKeys=e=>(z("Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."),Reflect.ownKeys(e));function lg(e){const n={};return Object.defineProperty(n,"_",{configurable:!0,enumerable:!1,get:()=>e}),Object.keys(ts).forEach(s=>{Object.defineProperty(n,s,{configurable:!0,enumerable:!1,get:()=>ts[s](e),set:kn})}),n}function cg(e){const{ctx:n,propsOptions:[s]}=e;s&&Object.keys(s).forEach(a=>{Object.defineProperty(n,a,{enumerable:!0,configurable:!0,get:()=>e.props[a],set:kn})})}function ug(e){const{ctx:n,setupState:s}=e;Object.keys(ge(s)).forEach(a=>{if(!s.__isScriptSetup){if(Ji(a[0])){z(`setup() return property ${JSON.stringify(a)} should not start with "$" or "_" which are reserved prefixes for Vue internals.`);return}Object.defineProperty(n,a,{enumerable:!0,configurable:!0,get:()=>s[a],set:kn})}})}function pg(){const e=Object.create(null);return(n,s)=>{e[s]?z(`${n} property "${s}" is already defined in ${e[s]}.`):e[s]=n}}let Go=!0;function dg(e){const n=Qi(e),s=e.proxy,a=e.ctx;Go=!1,n.beforeCreate&&Zl(n.beforeCreate,e,"bc");const{data:r,computed:i,methods:l,watch:c,provide:u,inject:p,created:d,beforeMount:f,mounted:h,beforeUpdate:m,updated:g,activated:b,deactivated:y,beforeDestroy:O,beforeUnmount:x,destroyed:E,unmounted:A,render:R,renderTracked:W,renderTriggered:Y,errorCaptured:j,serverPrefetch:K,expose:ae,inheritAttrs:fe,components:X,directives:de,filters:De}=n,Ke=pg();{const[ne]=e.propsOptions;if(ne)for(const pe in ne)Ke("Props",pe)}if(p&&fg(p,a,Ke,e.appContext.config.unwrapInjectedRef),l)for(const ne in l){const pe=l[ne];me(pe)?(Object.defineProperty(a,ne,{value:pe.bind(s),configurable:!0,enumerable:!0,writable:!0}),Ke("Methods",ne)):z(`Method "${ne}" has type "${typeof pe}" in the component definition. Did you reference the function correctly?`)}if(r){me(r)||z("The data option must be a function. Plain object usage is no longer supported.");const ne=r.call(s,s);if(Ni(ne)&&z("data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."),!Ie(ne))z("data() should return an object.");else{e.data=ze(ne);for(const pe in ne)Ke("Data",pe),Ji(pe[0])||Object.defineProperty(a,pe,{configurable:!0,enumerable:!0,get:()=>ne[pe],set:kn})}}if(Go=!0,i)for(const ne in i){const pe=i[ne],ye=me(pe)?pe.bind(s,s):me(pe.get)?pe.get.bind(s,s):kn;ye===kn&&z(`Computed property "${ne}" has no getter.`);const Le=!me(pe)&&me(pe.set)?pe.set.bind(s):()=>{z(`Write operation failed: computed property "${ne}" is readonly.`)},yn=L({get:ye,set:Le});Object.defineProperty(a,ne,{enumerable:!0,configurable:!0,get:()=>yn.value,set:sn=>yn.value=sn}),Ke("Computed",ne)}if(c)for(const ne in c)Gp(c[ne],a,s,ne);if(u){const ne=me(u)?u.call(s):u;Reflect.ownKeys(ne).forEach(pe=>{En(pe,ne[pe])})}d&&Zl(d,e,"c");function Re(ne,pe){ue(pe)?pe.forEach(ye=>ne(ye.bind(s))):pe&&ne(pe.bind(s))}if(Re(eg,f),Re(us,h),Re(ng,m),Re(Gr,g),Re(Bp,b),Re(Vp,y),Re(rg,j),Re(ag,W),Re(sg,Y),Re(Ia,x),Re(Kr,A),Re(tg,K),ue(ae))if(ae.length){const ne=e.exposed||(e.exposed={});ae.forEach(pe=>{Object.defineProperty(ne,pe,{get:()=>s[pe],set:ye=>s[pe]=ye})})}else e.exposed||(e.exposed={});R&&e.render===kn&&(e.render=R),fe!=null&&(e.inheritAttrs=fe),X&&(e.components=X),de&&(e.directives=de)}function fg(e,n,s=kn,a=!1){ue(e)&&(e=Ko(e));for(const r in e){const i=e[r];let l;Ie(i)?"default"in i?l=S(i.from||r,i.default,!0):l=S(i.from||r):l=S(i),Ae(l)?a?Object.defineProperty(n,r,{enumerable:!0,configurable:!0,get:()=>l.value,set:c=>l.value=c}):(z(`injected property "${r}" is a ref and will be auto-unwrapped and no longer needs \`.value\` in the next minor release. To opt-in to the new behavior now, set \`app.config.unwrapInjectedRef = true\` (this config is temporary and will not be needed in the future.)`),n[r]=l):n[r]=l,s("Inject",r)}}function Zl(e,n,s){Dn(ue(e)?e.map(a=>a.bind(n.proxy)):e.bind(n.proxy),n,s)}function Gp(e,n,s,a){const r=a.includes(".")?Lp(s,a):()=>s[a];if(Ve(e)){const i=n[e];me(i)?we(r,i):z(`Invalid watch handler specified by key "${e}"`,i)}else if(me(e))we(r,e.bind(s));else if(Ie(e))if(ue(e))e.forEach(i=>Gp(i,n,s,a));else{const i=me(e.handler)?e.handler.bind(s):n[e.handler];me(i)?we(r,i,e):z(`Invalid watch handler specified by key "${e.handler}"`,i)}else z(`Invalid watch option: "${a}"`,e)}function Qi(e){const n=e.type,{mixins:s,extends:a}=n,{mixins:r,optionsCache:i,config:{optionMergeStrategies:l}}=e.appContext,c=i.get(n);let u;return c?u=c:!r.length&&!s&&!a?u=n:(u={},r.length&&r.forEach(p=>wr(u,p,l,!0)),wr(u,n,l)),Ie(n)&&i.set(n,u),u}function wr(e,n,s,a=!1){const{mixins:r,extends:i}=n;i&&wr(e,i,s,!0),r&&r.forEach(l=>wr(e,l,s,!0));for(const l in n)if(a&&l==="expose")z('"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.');else{const c=hg[l]||s&&s[l];e[l]=c?c(e[l],n[l]):n[l]}return e}const hg={data:Yl,props:Wt,emits:Wt,methods:Wt,computed:Wt,beforeCreate:ln,created:ln,beforeMount:ln,mounted:ln,beforeUpdate:ln,updated:ln,beforeDestroy:ln,beforeUnmount:ln,destroyed:ln,unmounted:ln,activated:ln,deactivated:ln,errorCaptured:ln,serverPrefetch:ln,components:Wt,directives:Wt,watch:gg,provide:Yl,inject:mg};function Yl(e,n){return n?e?function(){return He(me(e)?e.call(this,this):e,me(n)?n.call(this,this):n)}:n:e}function mg(e,n){return Wt(Ko(e),Ko(n))}function Ko(e){if(ue(e)){const n={};for(let s=0;s<e.length;s++)n[e[s]]=e[s];return n}return e}function ln(e,n){return e?[...new Set([].concat(e,n))]:n}function Wt(e,n){return e?He(He(Object.create(null),e),n):n}function gg(e,n){if(!e)return n;if(!n)return e;const s=He(Object.create(null),e);for(const a in n)s[a]=ln(e[a],n[a]);return s}function _g(e,n,s,a=!1){const r={},i={};hr(i,Zr,1),e.propsDefaults=Object.create(null),Kp(e,n,r,i);for(const l in e.propsOptions[0])l in r||(r[l]=void 0);Yp(n||{},r,e),s?e.props=a?r:um(r):e.type.props?e.props=r:e.props=i,e.attrs=i}function kg(e){for(;e;){if(e.type.__hmrId)return!0;e=e.parent}}function bg(e,n,s,a){const{props:r,attrs:i,vnode:{patchFlag:l}}=e,c=ge(r),[u]=e.propsOptions;let p=!1;if(!kg(e)&&(a||l>0)&&!(l&16)){if(l&8){const d=e.vnode.dynamicProps;for(let f=0;f<d.length;f++){let h=d[f];if(Wr(e.emitsOptions,h))continue;const m=n[h];if(u)if(Ee(i,h))m!==i[h]&&(i[h]=m,p=!0);else{const g=Xn(h);r[g]=Zo(u,c,g,m,e,!1)}else m!==i[h]&&(i[h]=m,p=!0)}}}else{Kp(e,n,r,i)&&(p=!0);let d;for(const f in c)(!n||!Ee(n,f)&&((d=ut(f))===f||!Ee(n,d)))&&(u?s&&(s[f]!==void 0||s[d]!==void 0)&&(r[f]=Zo(u,c,f,void 0,e,!0)):delete r[f]);if(i!==c)for(const f in i)(!n||!Ee(n,f))&&(delete i[f],p=!0)}p&&pt(e,"set","$attrs"),Yp(n||{},r,e)}function Kp(e,n,s,a){const[r,i]=e.propsOptions;let l=!1,c;if(n)for(let u in n){if(sr(u))continue;const p=n[u];let d;r&&Ee(r,d=Xn(u))?!i||!i.includes(d)?s[d]=p:(c||(c={}))[d]=p:Wr(e.emitsOptions,u)||(!(u in a)||p!==a[u])&&(a[u]=p,l=!0)}if(i){const u=ge(s),p=c||qe;for(let d=0;d<i.length;d++){const f=i[d];s[f]=Zo(r,u,f,p[f],e,!Ee(p,f))}}return l}function Zo(e,n,s,a,r,i){const l=e[s];if(l!=null){const c=Ee(l,"default");if(c&&a===void 0){const u=l.default;if(l.type!==Function&&me(u)){const{propsDefaults:p}=r;s in p?a=p[s]:(As(r),a=p[s]=u.call(null,n),ss())}else a=u}l[0]&&(i&&!c?a=!1:l[1]&&(a===""||a===ut(s))&&(a=!0))}return a}function Zp(e,n,s=!1){const a=n.propsCache,r=a.get(e);if(r)return r;const i=e.props,l={},c=[];let u=!1;if(!me(e)){const d=f=>{u=!0;const[h,m]=Zp(f,n,!0);He(l,h),m&&c.push(...m)};!s&&n.mixins.length&&n.mixins.forEach(d),e.extends&&d(e.extends),e.mixins&&e.mixins.forEach(d)}if(!i&&!u)return Ie(e)&&a.set(e,xs),xs;if(ue(i))for(let d=0;d<i.length;d++){Ve(i[d])||z("props must be strings when using array syntax.",i[d]);const f=Xn(i[d]);Jl(f)&&(l[f]=qe)}else if(i){Ie(i)||z("invalid props options",i);for(const d in i){const f=Xn(d);if(Jl(f)){const h=i[d],m=l[f]=ue(h)||me(h)?{type:h}:Object.assign({},h);if(m){const g=Xl(Boolean,m.type),b=Xl(String,m.type);m[0]=g>-1,m[1]=b<0||g<b,(g>-1||Ee(m,"default"))&&c.push(f)}}}}const p=[l,c];return Ie(e)&&a.set(e,p),p}function Jl(e){return e[0]!=="$"?!0:(z(`Invalid prop name: "${e}" is a reserved property.`),!1)}function Yo(e){const n=e&&e.toString().match(/^\s*(function|class) (\w+)/);return n?n[2]:e===null?"null":""}function Ql(e,n){return Yo(e)===Yo(n)}function Xl(e,n){return ue(n)?n.findIndex(s=>Ql(s,e)):me(n)&&Ql(n,e)?0:-1}function Yp(e,n,s){const a=ge(n),r=s.propsOptions[0];for(const i in r){let l=r[i];l!=null&&vg(i,a[i],l,!Ee(e,i)&&!Ee(e,ut(i)))}}function vg(e,n,s,a){const{type:r,required:i,validator:l}=s;if(i&&a){z('Missing required prop: "'+e+'"');return}if(!(n==null&&!s.required)){if(r!=null&&r!==!0){let c=!1;const u=ue(r)?r:[r],p=[];for(let d=0;d<u.length&&!c;d++){const{valid:f,expectedType:h}=wg(n,u[d]);p.push(h||""),c=f}if(!c){z(xg(e,n,p));return}}l&&!l(n)&&z('Invalid prop: custom validator check failed for prop "'+e+'".')}}const yg=Lt("String,Number,Boolean,Function,Symbol,BigInt");function wg(e,n){let s;const a=Yo(n);if(yg(a)){const r=typeof e;s=r===a.toLowerCase(),!s&&r==="object"&&(s=e instanceof n)}else a==="Object"?s=Ie(e):a==="Array"?s=ue(e):a==="null"?s=e===null:s=e instanceof n;return{valid:s,expectedType:a}}function xg(e,n,s){let a=`Invalid prop: type check failed for prop "${e}". Expected ${s.map(rs).join(" | ")}`;const r=s[0],i=Ii(n),l=ec(n,r),c=ec(n,i);return s.length===1&&nc(r)&&!Sg(r,i)&&(a+=` with value ${l}`),a+=`, got ${i} `,nc(i)&&(a+=`with value ${c}.`),a}function ec(e,n){return n==="String"?`"${e}"`:n==="Number"?`${Number(e)}`:`${e}`}function nc(e){return["string","number","boolean"].some(s=>e.toLowerCase()===s)}function Sg(...e){return e.some(n=>n.toLowerCase()==="boolean")}const Jp=e=>e[0]==="_"||e==="$stable",Xi=e=>ue(e)?e.map(zn):[zn(e)],Eg=(e,n,s)=>{if(n._n)return n;const a=w((...r)=>(Ue&&z(`Slot "${e}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`),Xi(n(...r))),s);return a._c=!1,a},Qp=(e,n,s)=>{const a=e._ctx;for(const r in e){if(Jp(r))continue;const i=e[r];if(me(i))n[r]=Eg(r,i,a);else if(i!=null){z(`Non-function value encountered for slot "${r}". Prefer function slots for better performance.`);const l=Xi(i);n[r]=()=>l}}},Xp=(e,n)=>{Na(e.vnode)||z("Non-function value encountered for default slot. Prefer function slots for better performance.");const s=Xi(n);e.slots.default=()=>s},$g=(e,n)=>{if(e.vnode.shapeFlag&32){const s=n._;s?(e.slots=ge(n),hr(n,"_",s)):Qp(n,e.slots={})}else e.slots={},n&&Xp(e,n);hr(e.slots,Zr,1)},Pg=(e,n,s)=>{const{vnode:a,slots:r}=e;let i=!0,l=qe;if(a.shapeFlag&32){const c=n._;c?Tt?He(r,n):s&&c===1?i=!1:(He(r,n),!s&&c===1&&delete r._):(i=!n.$stable,Qp(n,r)),l=n}else n&&(Xp(e,n),l={default:1});if(i)for(const c in r)!Jp(c)&&!(c in l)&&delete r[c]};function ed(){return{app:null,config:{isNativeTag:ep,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Tg=0;function Cg(e,n){return function(a,r=null){me(a)||(a=Object.assign({},a)),r!=null&&!Ie(r)&&(z("root props passed to app.mount() must be an object."),r=null);const i=ed(),l=new Set;let c=!1;const u=i.app={_uid:Tg++,_component:a,_props:r,_container:null,_context:i,_instance:null,version:Sr,get config(){return i.config},set config(p){z("app.config cannot be replaced. Modify individual options instead.")},use(p,...d){return l.has(p)?z("Plugin has already been applied to target app."):p&&me(p.install)?(l.add(p),p.install(u,...d)):me(p)?(l.add(p),p(u,...d)):z('A plugin must either be a function or an object with an "install" function.'),u},mixin(p){return i.mixins.includes(p)?z("Mixin has already been applied to target app"+(p.name?`: ${p.name}`:"")):i.mixins.push(p),u},component(p,d){return Xo(p,i.config),d?(i.components[p]&&z(`Component "${p}" has already been registered in target app.`),i.components[p]=d,u):i.components[p]},directive(p,d){return Wp(p),d?(i.directives[p]&&z(`Directive "${p}" has already been registered in target app.`),i.directives[p]=d,u):i.directives[p]},mount(p,d,f){if(c)z("App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`");else{p.__vue_app__&&z("There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first.");const h=q(a,r);return h.appContext=i,i.reload=()=>{e(Hn(h),p,f)},d&&n?n(h,p):e(h,p,f),c=!0,u._container=p,p.__vue_app__=u,u._instance=h.component,Mm(u,Sr),Yr(h.component)||h.component.proxy}},unmount(){c?(e(null,u._container),u._instance=null,Nm(u),delete u._container.__vue_app__):z("Cannot unmount an app that is not mounted.")},provide(p,d){return p in i.provides&&z(`App already provides property with key "${String(p)}". It will be overwritten with the new value.`),i.provides[p]=d,u}};return u}}function Jo(e,n,s,a,r=!1){if(ue(e)){e.forEach((h,m)=>Jo(h,n&&(ue(n)?n[m]:n),s,a,r));return}if(Es(a)&&!r)return;const i=a.shapeFlag&4?Yr(a.component)||a.component.proxy:a.el,l=r?null:i,{i:c,r:u}=e;if(!c){z("Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function.");return}const p=n&&n.r,d=c.refs===qe?c.refs={}:c.refs,f=c.setupState;if(p!=null&&p!==u&&(Ve(p)?(d[p]=null,Ee(f,p)&&(f[p]=null)):Ae(p)&&(p.value=null)),me(u))ct(u,c,12,[l,d]);else{const h=Ve(u),m=Ae(u);if(h||m){const g=()=>{if(e.f){const b=h?Ee(f,u)?f[u]:d[u]:u.value;r?ue(b)&&Fi(b,i):ue(b)?b.includes(i)||b.push(i):h?(d[u]=[i],Ee(f,u)&&(f[u]=d[u])):(u.value=[i],e.k&&(d[e.k]=u.value))}else h?(d[u]=l,Ee(f,u)&&(f[u]=l)):m?(u.value=l,e.k&&(d[e.k]=l)):z("Invalid template ref type:",u,`(${typeof u})`)};l?(g.id=-1,en(g,s)):g()}else z("Invalid template ref type:",u,`(${typeof u})`)}}let qs,xt;function tt(e,n){e.appContext.config.performance&&xr()&&xt.mark(`vue-${n}-${e.uid}`),Lm(e,n,xr()?xt.now():Date.now())}function st(e,n){if(e.appContext.config.performance&&xr()){const s=`vue-${n}-${e.uid}`,a=s+":end";xt.mark(a),xt.measure(`<${Jr(e,e.type)}> ${n}`,s,a),xt.clearMarks(s),xt.clearMarks(a)}jm(e,n,xr()?xt.now():Date.now())}function xr(){return qs!==void 0||(typeof window<"u"&&window.performance?(qs=!0,xt=window.performance):qs=!1),qs}function Og(){const e=[];if(e.length){const n=e.length>1;console.warn(`Feature flag${n?"s":""} ${e.join(", ")} ${n?"are":"is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`)}}const en=Km;function Ag(e){return Fg(e)}function Fg(e,n){Og();const s=ap();s.__VUE__=!0,Ap(s.__VUE_DEVTOOLS_GLOBAL_HOOK__,s);const{insert:a,remove:r,patchProp:i,createElement:l,createText:c,createComment:u,setText:p,setElementText:d,parentNode:f,nextSibling:h,setScopeId:m=kn,insertStaticContent:g}=e,b=(_,v,F,V=null,B=null,G=null,Q=!1,U=null,Z=Tt?!1:!!v.dynamicChildren)=>{if(_===v)return;_&&!St(_,v)&&(V=re(_),mn(_,B,G,!0),_=null),v.patchFlag===-2&&(Z=!1,v.dynamicChildren=null);const{type:H,ref:ie,shapeFlag:oe}=v;switch(H){case La:y(_,v,F,V);break;case Xe:O(_,v,F,V);break;case or:_==null?x(v,F,V,Q):E(_,v,F,Q);break;case Fe:de(_,v,F,V,B,G,Q,U,Z);break;default:oe&1?W(_,v,F,V,B,G,Q,U,Z):oe&6?De(_,v,F,V,B,G,Q,U,Z):oe&64||oe&128?H.process(_,v,F,V,B,G,Q,U,Z,Pe):z("Invalid VNode type:",H,`(${typeof H})`)}ie!=null&&B&&Jo(ie,_&&_.ref,G,v||_,!v)},y=(_,v,F,V)=>{if(_==null)a(v.el=c(v.children),F,V);else{const B=v.el=_.el;v.children!==_.children&&p(B,v.children)}},O=(_,v,F,V)=>{_==null?a(v.el=u(v.children||""),F,V):v.el=_.el},x=(_,v,F,V)=>{[_.el,_.anchor]=g(_.children,v,F,V,_.el,_.anchor)},E=(_,v,F,V)=>{if(v.children!==_.children){const B=h(_.anchor);R(_),[v.el,v.anchor]=g(v.children,F,B,V)}else v.el=_.el,v.anchor=_.anchor},A=({el:_,anchor:v},F,V)=>{let B;for(;_&&_!==v;)B=h(_),a(_,F,V),_=B;a(v,F,V)},R=({el:_,anchor:v})=>{let F;for(;_&&_!==v;)F=h(_),r(_),_=F;r(v)},W=(_,v,F,V,B,G,Q,U,Z)=>{Q=Q||v.type==="svg",_==null?Y(v,F,V,B,G,Q,U,Z):ae(_,v,B,G,Q,U,Z)},Y=(_,v,F,V,B,G,Q,U)=>{let Z,H;const{type:ie,props:oe,shapeFlag:ce,transition:ke,dirs:$e}=_;if(Z=_.el=l(_.type,G,oe&&oe.is,oe),ce&8?d(Z,_.children):ce&16&&K(_.children,Z,null,V,B,G&&ie!=="foreignObject",Q,U),$e&&jt(_,null,V,"created"),j(Z,_,_.scopeId,Q,V),oe){for(const je in oe)je!=="value"&&!sr(je)&&i(Z,je,null,oe[je],G,_.children,V,B,J);"value"in oe&&i(Z,"value",null,oe.value),(H=oe.onVnodeBeforeMount)&&Mn(H,V,_)}Object.defineProperty(Z,"__vnode",{value:_,enumerable:!1}),Object.defineProperty(Z,"__vueParentComponent",{value:V,enumerable:!1}),$e&&jt(_,null,V,"beforeMount");const Be=(!B||B&&!B.pendingBranch)&&ke&&!ke.persisted;Be&&ke.beforeEnter(Z),a(Z,v,F),((H=oe&&oe.onVnodeMounted)||Be||$e)&&en(()=>{H&&Mn(H,V,_),Be&&ke.enter(Z),$e&&jt(_,null,V,"mounted")},B)},j=(_,v,F,V,B)=>{if(F&&m(_,F),V)for(let G=0;G<V.length;G++)m(_,V[G]);if(B){let G=B.subTree;if(G.patchFlag>0&&G.patchFlag&2048&&(G=Ip(G.children)||G),v===G){const Q=B.vnode;j(_,Q,Q.scopeId,Q.slotScopeIds,B.parent)}}},K=(_,v,F,V,B,G,Q,U,Z=0)=>{for(let H=Z;H<_.length;H++){const ie=_[H]=U?vt(_[H]):zn(_[H]);b(null,ie,v,F,V,B,G,Q,U)}},ae=(_,v,F,V,B,G,Q)=>{const U=v.el=_.el;let{patchFlag:Z,dynamicChildren:H,dirs:ie}=v;Z|=_.patchFlag&16;const oe=_.props||qe,ce=v.props||qe;let ke;F&&qt(F,!1),(ke=ce.onVnodeBeforeUpdate)&&Mn(ke,F,v,_),ie&&jt(v,_,F,"beforeUpdate"),F&&qt(F,!0),Tt&&(Z=0,Q=!1,H=null);const $e=B&&v.type!=="foreignObject";if(H?(fe(_.dynamicChildren,H,U,F,V,$e,G),F&&F.type.__hmrId&&na(_,v)):Q||ye(_,v,U,null,F,V,$e,G,!1),Z>0){if(Z&16)X(U,v,oe,ce,F,V,B);else if(Z&2&&oe.class!==ce.class&&i(U,"class",null,ce.class,B),Z&4&&i(U,"style",oe.style,ce.style,B),Z&8){const Be=v.dynamicProps;for(let je=0;je<Be.length;je++){const Ze=Be[je],Rn=oe[Ze],fs=ce[Ze];(fs!==Rn||Ze==="value")&&i(U,Ze,Rn,fs,B,_.children,F,V,J)}}Z&1&&_.children!==v.children&&d(U,v.children)}else!Q&&H==null&&X(U,v,oe,ce,F,V,B);((ke=ce.onVnodeUpdated)||ie)&&en(()=>{ke&&Mn(ke,F,v,_),ie&&jt(v,_,F,"updated")},V)},fe=(_,v,F,V,B,G,Q)=>{for(let U=0;U<v.length;U++){const Z=_[U],H=v[U],ie=Z.el&&(Z.type===Fe||!St(Z,H)||Z.shapeFlag&70)?f(Z.el):F;b(Z,H,ie,null,V,B,G,Q,!0)}},X=(_,v,F,V,B,G,Q)=>{if(F!==V){if(F!==qe)for(const U in F)!sr(U)&&!(U in V)&&i(_,U,F[U],null,Q,v.children,B,G,J);for(const U in V){if(sr(U))continue;const Z=V[U],H=F[U];Z!==H&&U!=="value"&&i(_,U,H,Z,Q,v.children,B,G,J)}"value"in V&&i(_,"value",F.value,V.value)}},de=(_,v,F,V,B,G,Q,U,Z)=>{const H=v.el=_?_.el:c(""),ie=v.anchor=_?_.anchor:c("");let{patchFlag:oe,dynamicChildren:ce,slotScopeIds:ke}=v;(Tt||oe&2048)&&(oe=0,Z=!1,ce=null),ke&&(U=U?U.concat(ke):ke),_==null?(a(H,F,V),a(ie,F,V),K(v.children,F,ie,B,G,Q,U,Z)):oe>0&&oe&64&&ce&&_.dynamicChildren?(fe(_.dynamicChildren,ce,F,B,G,Q,U),B&&B.type.__hmrId?na(_,v):(v.key!=null||B&&v===B.subTree)&&na(_,v,!0)):ye(_,v,F,ie,B,G,Q,U,Z)},De=(_,v,F,V,B,G,Q,U,Z)=>{v.slotScopeIds=U,_==null?v.shapeFlag&512?B.ctx.activate(v,F,V,Q,Z):Ke(v,F,V,B,G,Q,Z):Re(_,v,Z)},Ke=(_,v,F,V,B,G,Q)=>{const U=_.component=zg(_,V,B);if(U.type.__hmrId&&Cm(U),ar(_),tt(U,"mount"),Na(_)&&(U.ctx.renderer=Pe),tt(U,"init"),Hg(U),st(U,"init"),U.asyncDep){if(B&&B.registerDep(U,ne),!_.el){const Z=U.subTree=q(Xe);O(null,Z,v,F)}return}ne(U,_,v,F,B,G,Q),rr(),st(U,"mount")},Re=(_,v,F)=>{const V=v.component=_.component;if(Um(_,v,F))if(V.asyncDep&&!V.asyncResolved){ar(v),pe(V,v,F),rr();return}else V.next=v,Pm(V.update),V.update();else v.el=_.el,V.vnode=v},ne=(_,v,F,V,B,G,Q)=>{const U=()=>{if(_.isMounted){let{next:ie,bu:oe,u:ce,parent:ke,vnode:$e}=_,Be=ie,je;ar(ie||_.vnode),qt(_,!1),ie?(ie.el=$e.el,pe(_,ie,Q)):ie=$e,oe&&wt(oe),(je=ie.props&&ie.props.onVnodeBeforeUpdate)&&Mn(je,ke,ie,$e),qt(_,!0),tt(_,"render");const Ze=ro(_);st(_,"render");const Rn=_.subTree;_.subTree=Ze,tt(_,"patch"),b(Rn,Ze,f(Rn.el),re(Rn),_,B,G),st(_,"patch"),ie.el=Ze.el,Be===null&&Gm(_,Ze.el),ce&&en(ce,B),(je=ie.props&&ie.props.onVnodeUpdated)&&en(()=>Mn(je,ke,ie,$e),B),Fp(_),rr()}else{let ie;const{el:oe,props:ce}=v,{bm:ke,m:$e,parent:Be}=_,je=Es(v);if(qt(_,!1),ke&&wt(ke),!je&&(ie=ce&&ce.onVnodeBeforeMount)&&Mn(ie,Be,v),qt(_,!0),oe&&he){const Ze=()=>{tt(_,"render"),_.subTree=ro(_),st(_,"render"),tt(_,"hydrate"),he(oe,_.subTree,_,B,null),st(_,"hydrate")};je?v.type.__asyncLoader().then(()=>!_.isUnmounted&&Ze()):Ze()}else{tt(_,"render");const Ze=_.subTree=ro(_);st(_,"render"),tt(_,"patch"),b(null,Ze,F,V,_,B,G),st(_,"patch"),v.el=Ze.el}if($e&&en($e,B),!je&&(ie=ce&&ce.onVnodeMounted)){const Ze=v;en(()=>Mn(ie,Be,Ze),B)}(v.shapeFlag&256||Be&&Es(Be.vnode)&&Be.vnode.shapeFlag&256)&&_.a&&en(_.a,B),_.isMounted=!0,zo(_),v=F=V=null}},Z=_.effect=new qi(U,()=>zr(H),_.scope),H=_.update=()=>Z.run();H.id=_.uid,qt(_,!0),Z.onTrack=_.rtc?ie=>wt(_.rtc,ie):void 0,Z.onTrigger=_.rtg?ie=>wt(_.rtg,ie):void 0,H.ownerInstance=_,H()},pe=(_,v,F)=>{v.component=_;const V=_.vnode.props;_.vnode=v,_.next=null,bg(_,v.props,V,F),Pg(_,v.children,F),is(),zl(),ls()},ye=(_,v,F,V,B,G,Q,U,Z=!1)=>{const H=_&&_.children,ie=_?_.shapeFlag:0,oe=v.children,{patchFlag:ce,shapeFlag:ke}=v;if(ce>0){if(ce&128){yn(H,oe,F,V,B,G,Q,U,Z);return}else if(ce&256){Le(H,oe,F,V,B,G,Q,U,Z);return}}ke&8?(ie&16&&J(H,B,G),oe!==H&&d(F,oe)):ie&16?ke&16?yn(H,oe,F,V,B,G,Q,U,Z):J(H,B,G,!0):(ie&8&&d(F,""),ke&16&&K(oe,F,V,B,G,Q,U,Z))},Le=(_,v,F,V,B,G,Q,U,Z)=>{_=_||xs,v=v||xs;const H=_.length,ie=v.length,oe=Math.min(H,ie);let ce;for(ce=0;ce<oe;ce++){const ke=v[ce]=Z?vt(v[ce]):zn(v[ce]);b(_[ce],ke,F,null,B,G,Q,U,Z)}H>ie?J(_,B,G,!0,!1,oe):K(v,F,V,B,G,Q,U,Z,oe)},yn=(_,v,F,V,B,G,Q,U,Z)=>{let H=0;const ie=v.length;let oe=_.length-1,ce=ie-1;for(;H<=oe&&H<=ce;){const ke=_[H],$e=v[H]=Z?vt(v[H]):zn(v[H]);if(St(ke,$e))b(ke,$e,F,null,B,G,Q,U,Z);else break;H++}for(;H<=oe&&H<=ce;){const ke=_[oe],$e=v[ce]=Z?vt(v[ce]):zn(v[ce]);if(St(ke,$e))b(ke,$e,F,null,B,G,Q,U,Z);else break;oe--,ce--}if(H>oe){if(H<=ce){const ke=ce+1,$e=ke<ie?v[ke].el:V;for(;H<=ce;)b(null,v[H]=Z?vt(v[H]):zn(v[H]),F,$e,B,G,Q,U,Z),H++}}else if(H>ce)for(;H<=oe;)mn(_[H],B,G,!0),H++;else{const ke=H,$e=H,Be=new Map;for(H=$e;H<=ce;H++){const on=v[H]=Z?vt(v[H]):zn(v[H]);on.key!=null&&(Be.has(on.key)&&z("Duplicate keys found during update:",JSON.stringify(on.key),"Make sure keys are unique."),Be.set(on.key,H))}let je,Ze=0;const Rn=ce-$e+1;let fs=!1,Fl=0;const js=new Array(Rn);for(H=0;H<Rn;H++)js[H]=0;for(H=ke;H<=oe;H++){const on=_[H];if(Ze>=Rn){mn(on,B,G,!0);continue}let Gn;if(on.key!=null)Gn=Be.get(on.key);else for(je=$e;je<=ce;je++)if(js[je-$e]===0&&St(on,v[je])){Gn=je;break}Gn===void 0?mn(on,B,G,!0):(js[Gn-$e]=H+1,Gn>=Fl?Fl=Gn:fs=!0,b(on,v[Gn],F,null,B,G,Q,U,Z),Ze++)}const Ml=fs?Mg(js):xs;for(je=Ml.length-1,H=Rn-1;H>=0;H--){const on=$e+H,Gn=v[on],Nl=on+1<ie?v[on+1].el:V;js[H]===0?b(null,Gn,F,Nl,B,G,Q,U,Z):fs&&(je<0||H!==Ml[je]?sn(Gn,F,Nl,2):je--)}}},sn=(_,v,F,V,B=null)=>{const{el:G,type:Q,transition:U,children:Z,shapeFlag:H}=_;if(H&6){sn(_.component.subTree,v,F,V);return}if(H&128){_.suspense.move(v,F,V);return}if(H&64){Q.move(_,v,F,Pe);return}if(Q===Fe){a(G,v,F);for(let oe=0;oe<Z.length;oe++)sn(Z[oe],v,F,V);a(_.anchor,v,F);return}if(Q===or){A(_,v,F);return}if(V!==2&&H&1&&U)if(V===0)U.beforeEnter(G),a(G,v,F),en(()=>U.enter(G),B);else{const{leave:oe,delayLeave:ce,afterLeave:ke}=U,$e=()=>a(G,v,F),Be=()=>{oe(G,()=>{$e(),ke&&ke()})};ce?ce(G,$e,Be):Be()}else a(G,v,F)},mn=(_,v,F,V=!1,B=!1)=>{const{type:G,props:Q,ref:U,children:Z,dynamicChildren:H,shapeFlag:ie,patchFlag:oe,dirs:ce}=_;if(U!=null&&Jo(U,null,F,_,!0),ie&256){v.ctx.deactivate(_);return}const ke=ie&1&&ce,$e=!Es(_);let Be;if($e&&(Be=Q&&Q.onVnodeBeforeUnmount)&&Mn(Be,v,_),ie&6)te(_.component,F,V);else{if(ie&128){_.suspense.unmount(F,V);return}ke&&jt(_,null,v,"beforeUnmount"),ie&64?_.type.remove(_,v,F,B,Pe,V):H&&(G!==Fe||oe>0&&oe&64)?J(H,v,F,!1,!0):(G===Fe&&oe&384||!B&&ie&16)&&J(Z,v,F),V&&ht(_)}($e&&(Be=Q&&Q.onVnodeUnmounted)||ke)&&en(()=>{Be&&Mn(Be,v,_),ke&&jt(_,null,v,"unmounted")},F)},ht=_=>{const{type:v,el:F,anchor:V,transition:B}=_;if(v===Fe){_.patchFlag>0&&_.patchFlag&2048&&B&&!B.persisted?_.children.forEach(Q=>{Q.type===Xe?r(Q.el):ht(Q)}):D(F,V);return}if(v===or){R(_);return}const G=()=>{r(F),B&&!B.persisted&&B.afterLeave&&B.afterLeave()};if(_.shapeFlag&1&&B&&!B.persisted){const{leave:Q,delayLeave:U}=B,Z=()=>Q(F,G);U?U(_.el,G,Z):Z()}else G()},D=(_,v)=>{let F;for(;_!==v;)F=h(_),r(_),_=F;r(v)},te=(_,v,F)=>{_.type.__hmrId&&Om(_);const{bum:V,scope:B,update:G,subTree:Q,um:U}=_;V&&wt(V),B.stop(),G&&(G.active=!1,mn(Q,_,v,F)),U&&en(U,v),en(()=>{_.isUnmounted=!0},v),v&&v.pendingBranch&&!v.isUnmounted&&_.asyncDep&&!_.asyncResolved&&_.suspenseId===v.pendingId&&(v.deps--,v.deps===0&&v.resolve()),Dm(_)},J=(_,v,F,V=!1,B=!1,G=0)=>{for(let Q=G;Q<_.length;Q++)mn(_[Q],v,F,V,B)},re=_=>_.shapeFlag&6?re(_.component.subTree):_.shapeFlag&128?_.suspense.next():h(_.anchor||_.el),xe=(_,v,F)=>{_==null?v._vnode&&mn(v._vnode,null,null,!0):b(v._vnode||null,_,v,null,null,null,F),zl(),Tp(),v._vnode=_},Pe={p:b,um:mn,m:sn,r:ht,mt:Ke,mc:K,pc:ye,pbc:fe,n:re,o:e};let _e,he;return n&&([_e,he]=n(Pe)),{render:xe,hydrate:_e,createApp:Cg(xe,_e)}}function qt({effect:e,update:n},s){e.allowRecurse=n.allowRecurse=s}function na(e,n,s=!1){const a=e.children,r=n.children;if(ue(a)&&ue(r))for(let i=0;i<a.length;i++){const l=a[i];let c=r[i];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=r[i]=vt(r[i]),c.el=l.el),s||na(l,c)),c.type===La&&(c.el=l.el),c.type===Xe&&!c.el&&(c.el=l.el)}}function Mg(e){const n=e.slice(),s=[0];let a,r,i,l,c;const u=e.length;for(a=0;a<u;a++){const p=e[a];if(p!==0){if(r=s[s.length-1],e[r]<p){n[a]=r,s.push(a);continue}for(i=0,l=s.length-1;i<l;)c=i+l>>1,e[s[c]]<p?i=c+1:l=c;p<e[s[i]]&&(i>0&&(n[a]=s[i-1]),s[i]=a)}}for(i=s.length,l=s[i-1];i-- >0;)s[i]=l,l=n[l];return s}const Ng=e=>e.__isTeleport,$s=e=>e&&(e.disabled||e.disabled===""),tc=e=>typeof SVGElement<"u"&&e instanceof SVGElement,Qo=(e,n)=>{const s=e&&e.to;if(Ve(s))if(n){const a=n(s);return a||z(`Failed to locate Teleport target with selector "${s}". Note the target element must exist before the component is mounted - i.e. the target cannot be rendered by the component itself, and ideally should be outside of the entire Vue component tree.`),a}else return z("Current renderer does not support string target for Teleports. (missing querySelector renderer option)"),null;else return!s&&!$s(e)&&z(`Invalid Teleport target: ${s}`),s},Ig={__isTeleport:!0,process(e,n,s,a,r,i,l,c,u,p){const{mc:d,pc:f,pbc:h,o:{insert:m,querySelector:g,createText:b,createComment:y}}=p,O=$s(n.props);let{shapeFlag:x,children:E,dynamicChildren:A}=n;if(Tt&&(u=!1,A=null),e==null){const R=n.el=y("teleport start"),W=n.anchor=y("teleport end");m(R,s,a),m(W,s,a);const Y=n.target=Qo(n.props,g),j=n.targetAnchor=b("");Y?(m(j,Y),l=l||tc(Y)):O||z("Invalid Teleport target on mount:",Y,`(${typeof Y})`);const K=(ae,fe)=>{x&16&&d(E,ae,fe,r,i,l,c,u)};O?K(s,W):Y&&K(Y,j)}else{n.el=e.el;const R=n.anchor=e.anchor,W=n.target=e.target,Y=n.targetAnchor=e.targetAnchor,j=$s(e.props),K=j?s:W,ae=j?R:Y;if(l=l||tc(W),A?(h(e.dynamicChildren,A,K,r,i,l,c),na(e,n,!0)):u||f(e,n,K,ae,r,i,l,c,!1),O)j||Ya(n,s,R,p,1);else if((n.props&&n.props.to)!==(e.props&&e.props.to)){const fe=n.target=Qo(n.props,g);fe?Ya(n,fe,null,p,0):z("Invalid Teleport target on update:",W,`(${typeof W})`)}else j&&Ya(n,W,Y,p,1)}nd(n)},remove(e,n,s,a,{um:r,o:{remove:i}},l){const{shapeFlag:c,children:u,anchor:p,targetAnchor:d,target:f,props:h}=e;if(f&&i(d),(l||!$s(h))&&(i(p),c&16))for(let m=0;m<u.length;m++){const g=u[m];r(g,n,s,!0,!!g.dynamicChildren)}},move:Ya,hydrate:Dg};function Ya(e,n,s,{o:{insert:a},m:r},i=2){i===0&&a(e.targetAnchor,n,s);const{el:l,anchor:c,shapeFlag:u,children:p,props:d}=e,f=i===2;if(f&&a(l,n,s),(!f||$s(d))&&u&16)for(let h=0;h<p.length;h++)r(p[h],n,s,2);f&&a(c,n,s)}function Dg(e,n,s,a,r,i,{o:{nextSibling:l,parentNode:c,querySelector:u}},p){const d=n.target=Qo(n.props,u);if(d){const f=d._lpa||d.firstChild;if(n.shapeFlag&16)if($s(n.props))n.anchor=p(l(e),n,c(e),s,a,r,i),n.targetAnchor=f;else{n.anchor=l(e);let h=f;for(;h;)if(h=l(h),h&&h.nodeType===8&&h.data==="teleport anchor"){n.targetAnchor=h,d._lpa=n.targetAnchor&&l(n.targetAnchor);break}p(f,n,d,s,a,r,i)}nd(n)}return n.anchor&&l(n.anchor)}const Lg=Ig;function nd(e){const n=e.ctx;if(n&&n.ut){let s=e.children[0].el;for(;s!==e.targetAnchor;)s.nodeType===1&&s.setAttribute("data-v-owner",n.uid),s=s.nextSibling;n.ut()}}const Fe=Symbol("Fragment"),La=Symbol("Text"),Xe=Symbol("Comment"),or=Symbol("Static"),ta=[];let Wn=null;function k(e=!1){ta.push(Wn=e?null:[])}function jg(){ta.pop(),Wn=ta[ta.length-1]||null}let ka=1;function sc(e){ka+=e}function td(e){return e.dynamicChildren=ka>0?Wn||xs:null,jg(),ka>0&&Wn&&Wn.push(e),e}function ee(e,n,s,a,r,i){return td(t(e,n,s,a,r,i,!0))}function $(e,n,s,a,r){return td(q(e,n,s,a,r,!0))}function It(e){return e?e.__v_isVNode===!0:!1}function St(e,n){return n.shapeFlag&6&&ks.has(n.type)?(e.shapeFlag&=-257,n.shapeFlag&=-513,!1):e.type===n.type&&e.key===n.key}const qg=(...e)=>Rg(...e),Zr="__vInternal",sd=({key:e})=>e??null,ir=({ref:e,ref_key:n,ref_for:s})=>e!=null?Ve(e)||Ae(e)||me(e)?{i:Qe,r:e,k:n,f:!!s}:e:null;function t(e,n=null,s=null,a=0,r=null,i=e===Fe?0:1,l=!1,c=!1){const u={__v_isVNode:!0,__v_skip:!0,type:e,props:n,key:n&&sd(n),ref:n&&ir(n),scopeId:Hr,slotScopeIds:null,children:s,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:a,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Qe};return c?(el(u,s),i&128&&e.normalize(u)):s&&(u.shapeFlag|=Ve(s)?8:16),u.key!==u.key&&z("VNode created with invalid key (NaN). VNode type:",u.type),ka>0&&!l&&Wn&&(u.patchFlag>0||i&6)&&u.patchFlag!==32&&Wn.push(u),u}const q=qg;function Rg(e,n=null,s=null,a=0,r=null,i=!1){if((!e||e===og)&&(e||z(`Invalid vnode type when creating vnode: ${e}.`),e=Xe),It(e)){const c=Hn(e,n,!0);return s&&el(c,s),ka>0&&!i&&Wn&&(c.shapeFlag&6?Wn[Wn.indexOf(e)]=c:Wn.push(c)),c.patchFlag|=-2,c}if(ld(e)&&(e=e.__vccOpts),n){n=M(n);let{class:c,style:u}=n;c&&!Ve(c)&&(n.class=We(c)),Ie(u)&&(kr(u)&&!ue(u)&&(u=He({},u)),n.style=tn(u))}const l=Ve(e)?1:Dp(e)?128:Ng(e)?64:Ie(e)?4:me(e)?2:0;return l&4&&kr(e)&&(e=ge(e),z("Vue received a Component which was made a reactive object. This can lead to unnecessary performance overhead, and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",`
Component that was made reactive: `,e)),t(e,n,s,a,r,l,i,!0)}function M(e){return e?kr(e)||Zr in e?He({},e):e:null}function Hn(e,n,s=!1){const{props:a,ref:r,patchFlag:i,children:l}=e,c=n?le(a||{},n):a;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:c,key:c&&sd(c),ref:n&&n.ref?s&&r?ue(r)?r.concat(ir(n)):[r,ir(n)]:ir(n):r,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:i===-1&&ue(l)?l.map(ad):l,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:n&&e.type!==Fe?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Hn(e.ssContent),ssFallback:e.ssFallback&&Hn(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function ad(e){const n=Hn(e);return ue(e.children)&&(n.children=e.children.map(ad)),n}function o(e=" ",n=0){return q(La,null,e,n)}function Se(e="",n=!1){return n?(k(),$(Xe,null,e)):q(Xe,null,e)}function zn(e){return e==null||typeof e=="boolean"?q(Xe):ue(e)?q(Fe,null,e.slice()):typeof e=="object"?vt(e):q(La,null,String(e))}function vt(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Hn(e)}function el(e,n){let s=0;const{shapeFlag:a}=e;if(n==null)n=null;else if(ue(n))s=16;else if(typeof n=="object")if(a&65){const r=n.default;r&&(r._c&&(r._d=!1),el(e,r()),r._c&&(r._d=!0));return}else{s=32;const r=n._;!r&&!(Zr in n)?n._ctx=Qe:r===3&&Qe&&(Qe.slots._===1?n._=1:(n._=2,e.patchFlag|=1024))}else me(n)?(n={default:n,_ctx:Qe},s=32):(n=String(n),a&64?(s=16,n=[o(n)]):s=8);e.children=n,e.shapeFlag|=s}function le(...e){const n={};for(let s=0;s<e.length;s++){const a=e[s];for(const r in a)if(r==="class")n.class!==a.class&&(n.class=We([n.class,a.class]));else if(r==="style")n.style=tn([n.style,a.style]);else if(Aa(r)){const i=n[r],l=a[r];l&&i!==l&&!(ue(i)&&i.includes(l))&&(n[r]=i?[].concat(i,l):l)}else r!==""&&(n[r]=a[r])}return n}function Mn(e,n,s,a=null){Dn(e,n,7,[s,a])}const Bg=ed();let Vg=0;function zg(e,n,s){const a=e.type,r=(n?n.appContext:e.appContext)||Bg,i={uid:Vg++,vnode:e,type:a,parent:n,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new rp(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:n?n.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Zp(a,r),emitsOptions:Np(a,r),emit:null,emitted:null,propsDefaults:qe,inheritAttrs:a.inheritAttrs,ctx:qe,data:qe,props:qe,attrs:qe,slots:qe,refs:qe,setupState:qe,setupContext:null,suspense:s,suspenseId:s?s.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx=lg(i),i.root=n?n.root:i,i.emit=Rm.bind(null,i),e.ce&&e.ce(i),i}let Ue=null;const An=()=>Ue||Qe,As=e=>{Ue=e,e.scope.on()},ss=()=>{Ue&&Ue.scope.off(),Ue=null},Wg=Lt("slot,component");function Xo(e,n){const s=n.isNativeTag||ep;(Wg(e)||s(e))&&z("Do not use built-in or reserved HTML elements as component id: "+e)}function rd(e){return e.vnode.shapeFlag&4}let ba=!1;function Hg(e,n=!1){ba=n;const{props:s,children:a}=e.vnode,r=rd(e);_g(e,s,r,n),$g(e,a);const i=r?Ug(e,n):void 0;return ba=!1,i}function Ug(e,n){var s;const a=e.type;{if(a.name&&Xo(a.name,e.appContext.config),a.components){const i=Object.keys(a.components);for(let l=0;l<i.length;l++)Xo(i[l],e.appContext.config)}if(a.directives){const i=Object.keys(a.directives);for(let l=0;l<i.length;l++)Wp(i[l])}a.compilerOptions&&Gg()&&z('"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.')}e.accessCache=Object.create(null),e.proxy=Br(new Proxy(e.ctx,Up)),cg(e);const{setup:r}=a;if(r){const i=e.setupContext=r.length>1?id(e):null;As(e),is();const l=ct(r,e,0,[ys(e.props),i]);if(ls(),ss(),Ni(l)){if(l.then(ss,ss),n)return l.then(c=>{ac(e,c,n)}).catch(c=>{Vr(c,e,0)});if(e.asyncDep=l,!e.suspense){const c=(s=a.name)!==null&&s!==void 0?s:"Anonymous";z(`Component <${c}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`)}}else ac(e,l,n)}else od(e,n)}function ac(e,n,s){me(n)?e.type.__ssrInlineRender?e.ssrRender=n:e.render=n:Ie(n)?(It(n)&&z("setup() should not return VNodes directly - return a render function instead."),e.devtoolsRawSetupState=n,e.setupState=yp(n),ug(e)):n!==void 0&&z(`setup() should return an object. Received: ${n===null?"null":typeof n}`),od(e,s)}let ei;const Gg=()=>!ei;function od(e,n,s){const a=e.type;if(!e.render){if(!n&&ei&&!a.render){const r=a.template||Qi(e).template;if(r){tt(e,"compile");const{isCustomElement:i,compilerOptions:l}=e.appContext.config,{delimiters:c,compilerOptions:u}=a,p=He(He({isCustomElement:i,delimiters:c},l),u);a.render=ei(r,p),st(e,"compile")}}e.render=a.render||kn}As(e),is(),dg(e),ls(),ss(),!a.render&&e.render===kn&&!n&&(a.template?z('Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'):z("Component is missing template or render function."))}function Kg(e){return new Proxy(e.attrs,{get(n,s){return vr(),vn(e,"get","$attrs"),n[s]},set(){return z("setupContext.attrs is readonly."),!1},deleteProperty(){return z("setupContext.attrs is readonly."),!1}})}function id(e){const n=a=>{if(e.exposed&&z("expose() should be called only once per setup()."),a!=null){let r=typeof a;r==="object"&&(ue(a)?r="array":Ae(a)&&(r="ref")),r!=="object"&&z(`expose() should be passed a plain object, received ${r}.`)}e.exposed=a||{}};let s;return Object.freeze({get attrs(){return s||(s=Kg(e))},get slots(){return ys(e.slots)},get emit(){return(a,...r)=>e.emit(a,...r)},expose:n})}function Yr(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(yp(Br(e.exposed)),{get(n,s){if(s in n)return n[s];if(s in ts)return ts[s](e)},has(n,s){return s in n||s in ts}}))}const Zg=/(?:^|[-_])(\w)/g,Yg=e=>e.replace(Zg,n=>n.toUpperCase()).replace(/[-_]/g,"");function va(e,n=!0){return me(e)?e.displayName||e.name:e.name||n&&e.__name}function Jr(e,n,s=!1){let a=va(n);if(!a&&n.__file){const r=n.__file.match(/([^/\\]+)\.\w+$/);r&&(a=r[1])}if(!a&&e&&e.parent){const r=i=>{for(const l in i)if(i[l]===n)return l};a=r(e.components||e.parent.type.components)||r(e.appContext.components)}return a?Yg(a):s?"App":"Anonymous"}function ld(e){return me(e)&&"__vccOpts"in e}const L=(e,n)=>km(e,n,ba);function Jg(){return Qg().slots}function Qg(){const e=An();return e||z("useContext() called without active instance."),e.setupContext||(e.setupContext=id(e))}function Tn(e,n,s){const a=arguments.length;return a===2?Ie(n)&&!ue(n)?It(n)?q(e,null,[n]):q(e,n):q(e,null,n):(a>3?s=Array.prototype.slice.call(arguments,2):a===3&&It(s)&&(s=[s]),q(e,n,s))}const Xg=Symbol("ssrContext"),e_=()=>{{const e=S(Xg);return e||z("Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."),e}};function uo(e){return!!(e&&e.__v_isShallow)}function n_(){if(typeof window>"u")return;const e={style:"color:#3ba776"},n={style:"color:#0b1bc9"},s={style:"color:#b62e24"},a={style:"color:#9d288c"},r={header(f){return Ie(f)?f.__isVue?["div",e,"VueInstance"]:Ae(f)?["div",{},["span",e,d(f)],"<",c(f.value),">"]:es(f)?["div",{},["span",e,uo(f)?"ShallowReactive":"Reactive"],"<",c(f),`>${Nt(f)?" (readonly)":""}`]:Nt(f)?["div",{},["span",e,uo(f)?"ShallowReadonly":"Readonly"],"<",c(f),">"]:null:null},hasBody(f){return f&&f.__isVue},body(f){if(f&&f.__isVue)return["div",{},...i(f.$)]}};function i(f){const h=[];f.type.props&&f.props&&h.push(l("props",ge(f.props))),f.setupState!==qe&&h.push(l("setup",f.setupState)),f.data!==qe&&h.push(l("data",ge(f.data)));const m=u(f,"computed");m&&h.push(l("computed",m));const g=u(f,"inject");return g&&h.push(l("injected",g)),h.push(["div",{},["span",{style:a.style+";opacity:0.66"},"$ (internal): "],["object",{object:f}]]),h}function l(f,h){return h=He({},h),Object.keys(h).length?["div",{style:"line-height:1.25em;margin-bottom:0.6em"},["div",{style:"color:#476582"},f],["div",{style:"padding-left:1.25em"},...Object.keys(h).map(m=>["div",{},["span",a,m+": "],c(h[m],!1)])]]:["span",{}]}function c(f,h=!0){return typeof f=="number"?["span",n,f]:typeof f=="string"?["span",s,JSON.stringify(f)]:typeof f=="boolean"?["span",a,f]:Ie(f)?["object",{object:h?ge(f):f}]:["span",s,String(f)]}function u(f,h){const m=f.type;if(me(m))return;const g={};for(const b in f.ctx)p(m,b,h)&&(g[b]=f.ctx[b]);return g}function p(f,h,m){const g=f[m];if(ue(g)&&g.includes(h)||Ie(g)&&h in g||f.extends&&p(f.extends,h,m)||f.mixins&&f.mixins.some(b=>p(b,h,m)))return!0}function d(f){return uo(f)?"ShallowRef":f.effect?"ComputedRef":"Ref"}window.devtoolsFormatters?window.devtoolsFormatters.push(r):window.devtoolsFormatters=[r]}const Sr="3.2.47",t_="http://www.w3.org/2000/svg",Ut=typeof document<"u"?document:null,rc=Ut&&Ut.createElement("template"),s_={insert:(e,n,s)=>{n.insertBefore(e,s||null)},remove:e=>{const n=e.parentNode;n&&n.removeChild(e)},createElement:(e,n,s,a)=>{const r=n?Ut.createElementNS(t_,e):Ut.createElement(e,s?{is:s}:void 0);return e==="select"&&a&&a.multiple!=null&&r.setAttribute("multiple",a.multiple),r},createText:e=>Ut.createTextNode(e),createComment:e=>Ut.createComment(e),setText:(e,n)=>{e.nodeValue=n},setElementText:(e,n)=>{e.textContent=n},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Ut.querySelector(e),setScopeId(e,n){e.setAttribute(n,"")},insertStaticContent(e,n,s,a,r,i){const l=s?s.previousSibling:n.lastChild;if(r&&(r===i||r.nextSibling))for(;n.insertBefore(r.cloneNode(!0),s),!(r===i||!(r=r.nextSibling)););else{rc.innerHTML=a?`<svg>${e}</svg>`:e;const c=rc.content;if(a){const u=c.firstChild;for(;u.firstChild;)c.appendChild(u.firstChild);c.removeChild(u)}n.insertBefore(c,s)}return[l?l.nextSibling:n.firstChild,s?s.previousSibling:n.lastChild]}};function a_(e,n,s){const a=e._vtc;a&&(n=(n?[n,...a]:[...a]).join(" ")),n==null?e.removeAttribute("class"):s?e.setAttribute("class",n):e.className=n}function r_(e,n,s){const a=e.style,r=Ve(s);if(s&&!r){if(n&&!Ve(n))for(const i in n)s[i]==null&&ni(a,i,"");for(const i in s)ni(a,i,s[i])}else{const i=a.display;r?n!==s&&(a.cssText=s):n&&e.removeAttribute("style"),"_vod"in e&&(a.display=i)}}const o_=/[^\\];\s*$/,oc=/\s*!important$/;function ni(e,n,s){if(ue(s))s.forEach(a=>ni(e,n,a));else if(s==null&&(s=""),o_.test(s)&&z(`Unexpected semicolon at the end of '${n}' style value: '${s}'`),n.startsWith("--"))e.setProperty(n,s);else{const a=i_(e,n);oc.test(s)?e.setProperty(ut(a),s.replace(oc,""),"important"):e[a]=s}}const ic=["Webkit","Moz","ms"],po={};function i_(e,n){const s=po[n];if(s)return s;let a=Xn(n);if(a!=="filter"&&a in e)return po[n]=a;a=rs(a);for(let r=0;r<ic.length;r++){const i=ic[r]+a;if(i in e)return po[n]=i}return n}const lc="http://www.w3.org/1999/xlink";function l_(e,n,s,a,r){if(a&&n.startsWith("xlink:"))s==null?e.removeAttributeNS(lc,n.slice(6,n.length)):e.setAttributeNS(lc,n,s);else{const i=$h(n);s==null||i&&!Qu(s)?e.removeAttribute(n):e.setAttribute(n,i?"":s)}}function c_(e,n,s,a,r,i,l){if(n==="innerHTML"||n==="textContent"){a&&l(a,r,i),e[n]=s??"";return}if(n==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=s;const u=s??"";(e.value!==u||e.tagName==="OPTION")&&(e.value=u),s==null&&e.removeAttribute(n);return}let c=!1;if(s===""||s==null){const u=typeof e[n];u==="boolean"?s=Qu(s):s==null&&u==="string"?(s="",c=!0):u==="number"&&(s=0,c=!0)}try{e[n]=s}catch(u){c||z(`Failed setting prop "${n}" on <${e.tagName.toLowerCase()}>: value ${s} is invalid.`,u)}c&&e.removeAttribute(n)}function bs(e,n,s,a){e.addEventListener(n,s,a)}function u_(e,n,s,a){e.removeEventListener(n,s,a)}function p_(e,n,s,a,r=null){const i=e._vei||(e._vei={}),l=i[n];if(a&&l)l.value=a;else{const[c,u]=d_(n);if(a){const p=i[n]=m_(a,r);bs(e,c,p,u)}else l&&(u_(e,c,l,u),i[n]=void 0)}}const cc=/(?:Once|Passive|Capture)$/;function d_(e){let n;if(cc.test(e)){n={};let a;for(;a=e.match(cc);)e=e.slice(0,e.length-a[0].length),n[a[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):ut(e.slice(2)),n]}let fo=0;const f_=Promise.resolve(),h_=()=>fo||(f_.then(()=>fo=0),fo=Date.now());function m_(e,n){const s=a=>{if(!a._vts)a._vts=Date.now();else if(a._vts<=s.attached)return;Dn(g_(a,s.value),n,5,[a])};return s.value=e,s.attached=h_(),s}function g_(e,n){if(ue(n)){const s=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{s.call(e),e._stopped=!0},n.map(a=>r=>!r._stopped&&a&&a(r))}else return n}const uc=/^on[a-z]/,__=(e,n,s,a,r=!1,i,l,c,u)=>{n==="class"?a_(e,a,r):n==="style"?r_(e,s,a):Aa(n)?fr(n)||p_(e,n,s,a,l):(n[0]==="."?(n=n.slice(1),!0):n[0]==="^"?(n=n.slice(1),!1):k_(e,n,a,r))?c_(e,n,a,i,l,c,u):(n==="true-value"?e._trueValue=a:n==="false-value"&&(e._falseValue=a),l_(e,n,a,r))};function k_(e,n,s,a){return a?!!(n==="innerHTML"||n==="textContent"||n in e&&uc.test(n)&&me(s)):n==="spellcheck"||n==="draggable"||n==="translate"||n==="form"||n==="list"&&e.tagName==="INPUT"||n==="type"&&e.tagName==="TEXTAREA"||uc.test(n)&&Ve(s)?!1:n in e}const gt="transition",Rs="animation",cd={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},b_=He({},Jm.props,cd),Rt=(e,n=[])=>{ue(e)?e.forEach(s=>s(...n)):e&&e(...n)},pc=e=>e?ue(e)?e.some(n=>n.length>1):e.length>1:!1;function v_(e){const n={};for(const X in e)X in cd||(n[X]=e[X]);if(e.css===!1)return n;const{name:s="v",type:a,duration:r,enterFromClass:i=`${s}-enter-from`,enterActiveClass:l=`${s}-enter-active`,enterToClass:c=`${s}-enter-to`,appearFromClass:u=i,appearActiveClass:p=l,appearToClass:d=c,leaveFromClass:f=`${s}-leave-from`,leaveActiveClass:h=`${s}-leave-active`,leaveToClass:m=`${s}-leave-to`}=e,g=y_(r),b=g&&g[0],y=g&&g[1],{onBeforeEnter:O,onEnter:x,onEnterCancelled:E,onLeave:A,onLeaveCancelled:R,onBeforeAppear:W=O,onAppear:Y=x,onAppearCancelled:j=E}=n,K=(X,de,De)=>{kt(X,de?d:c),kt(X,de?p:l),De&&De()},ae=(X,de)=>{X._isLeaving=!1,kt(X,f),kt(X,m),kt(X,h),de&&de()},fe=X=>(de,De)=>{const Ke=X?Y:x,Re=()=>K(de,X,De);Rt(Ke,[de,Re]),dc(()=>{kt(de,X?u:i),at(de,X?d:c),pc(Ke)||fc(de,a,b,Re)})};return He(n,{onBeforeEnter(X){Rt(O,[X]),at(X,i),at(X,l)},onBeforeAppear(X){Rt(W,[X]),at(X,u),at(X,p)},onEnter:fe(!1),onAppear:fe(!0),onLeave(X,de){X._isLeaving=!0;const De=()=>ae(X,de);at(X,f),pd(),at(X,h),dc(()=>{X._isLeaving&&(kt(X,f),at(X,m),pc(A)||fc(X,a,y,De))}),Rt(A,[X,De])},onEnterCancelled(X){K(X,!1),Rt(E,[X])},onAppearCancelled(X){K(X,!0),Rt(j,[X])},onLeaveCancelled(X){ae(X),Rt(R,[X])}})}function y_(e){if(e==null)return null;if(Ie(e))return[ho(e.enter),ho(e.leave)];{const n=ho(e);return[n,n]}}function ho(e){const n=Mh(e);return xm(n,"<transition> explicit duration"),n}function at(e,n){n.split(/\s+/).forEach(s=>s&&e.classList.add(s)),(e._vtc||(e._vtc=new Set)).add(n)}function kt(e,n){n.split(/\s+/).forEach(a=>a&&e.classList.remove(a));const{_vtc:s}=e;s&&(s.delete(n),s.size||(e._vtc=void 0))}function dc(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let w_=0;function fc(e,n,s,a){const r=e._endId=++w_,i=()=>{r===e._endId&&a()};if(s)return setTimeout(i,s);const{type:l,timeout:c,propCount:u}=ud(e,n);if(!l)return a();const p=l+"end";let d=0;const f=()=>{e.removeEventListener(p,h),i()},h=m=>{m.target===e&&++d>=u&&f()};setTimeout(()=>{d<u&&f()},c+1),e.addEventListener(p,h)}function ud(e,n){const s=window.getComputedStyle(e),a=g=>(s[g]||"").split(", "),r=a(`${gt}Delay`),i=a(`${gt}Duration`),l=hc(r,i),c=a(`${Rs}Delay`),u=a(`${Rs}Duration`),p=hc(c,u);let d=null,f=0,h=0;n===gt?l>0&&(d=gt,f=l,h=i.length):n===Rs?p>0&&(d=Rs,f=p,h=u.length):(f=Math.max(l,p),d=f>0?l>p?gt:Rs:null,h=d?d===gt?i.length:u.length:0);const m=d===gt&&/\b(transform|all)(,|$)/.test(a(`${gt}Property`).toString());return{type:d,timeout:f,propCount:h,hasTransform:m}}function hc(e,n){for(;e.length<n.length;)e=e.concat(e);return Math.max(...n.map((s,a)=>mc(s)+mc(e[a])))}function mc(e){return Number(e.slice(0,-1).replace(",","."))*1e3}function pd(){return document.body.offsetHeight}const dd=new WeakMap,fd=new WeakMap,hd={name:"TransitionGroup",props:He({},b_,{tag:String,moveClass:String}),setup(e,{slots:n}){const s=An(),a=jp();let r,i;return Gr(()=>{if(!r.length)return;const l=e.moveClass||`${e.name||"v"}-move`;if(!T_(r[0].el,s.vnode.el,l))return;r.forEach(E_),r.forEach($_);const c=r.filter(P_);pd(),c.forEach(u=>{const p=u.el,d=p.style;at(p,l),d.transform=d.webkitTransform=d.transitionDuration="";const f=p._moveCb=h=>{h&&h.target!==p||(!h||/transform$/.test(h.propertyName))&&(p.removeEventListener("transitionend",f),p._moveCb=null,kt(p,l))};p.addEventListener("transitionend",f)})}),()=>{const l=ge(e),c=v_(l);let u=l.tag||Fe;r=i,i=n.default?Zi(n.default()):[];for(let p=0;p<i.length;p++){const d=i[p];d.key!=null?Os(d,_a(d,c,a,s)):z("<TransitionGroup> children must be keyed.")}if(r)for(let p=0;p<r.length;p++){const d=r[p];Os(d,_a(d,c,a,s)),dd.set(d,d.el.getBoundingClientRect())}return q(u,null,i)}}},x_=e=>delete e.mode;hd.props;const S_=hd;function E_(e){const n=e.el;n._moveCb&&n._moveCb(),n._enterCb&&n._enterCb()}function $_(e){fd.set(e,e.el.getBoundingClientRect())}function P_(e){const n=dd.get(e),s=fd.get(e),a=n.left-s.left,r=n.top-s.top;if(a||r){const i=e.el.style;return i.transform=i.webkitTransform=`translate(${a}px,${r}px)`,i.transitionDuration="0s",e}}function T_(e,n,s){const a=e.cloneNode();e._vtc&&e._vtc.forEach(l=>{l.split(/\s+/).forEach(c=>c&&a.classList.remove(c))}),s.split(/\s+/).forEach(l=>l&&a.classList.add(l)),a.style.display="none";const r=n.nodeType===1?n:n.parentNode;r.appendChild(a);const{hasTransform:i}=ud(a);return r.removeChild(a),i}const gc=e=>{const n=e.props["onUpdate:modelValue"]||!1;return ue(n)?s=>wt(n,s):n};function C_(e){e.target.composing=!0}function _c(e){const n=e.target;n.composing&&(n.composing=!1,n.dispatchEvent(new Event("input")))}const O_={created(e,{modifiers:{lazy:n,trim:s,number:a}},r){e._assign=gc(r);const i=a||r.props&&r.props.type==="number";bs(e,n?"change":"input",l=>{if(l.target.composing)return;let c=e.value;s&&(c=c.trim()),i&&(c=Lo(c)),e._assign(c)}),s&&bs(e,"change",()=>{e.value=e.value.trim()}),n||(bs(e,"compositionstart",C_),bs(e,"compositionend",_c),bs(e,"change",_c))},mounted(e,{value:n}){e.value=n??""},beforeUpdate(e,{value:n,modifiers:{lazy:s,trim:a,number:r}},i){if(e._assign=gc(i),e.composing||document.activeElement===e&&e.type!=="range"&&(s||a&&e.value.trim()===n||(r||e.type==="number")&&Lo(e.value)===n))return;const l=n??"";e.value!==l&&(e.value=l)}},A_={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},kc=(e,n)=>s=>{if(!("key"in s))return;const a=ut(s.key);if(n.some(r=>r===a||A_[r]===a))return e(s)},md={beforeMount(e,{value:n},{transition:s}){e._vod=e.style.display==="none"?"":e.style.display,s&&n?s.beforeEnter(e):Bs(e,n)},mounted(e,{value:n},{transition:s}){s&&n&&s.enter(e)},updated(e,{value:n,oldValue:s},{transition:a}){!n!=!s&&(a?n?(a.beforeEnter(e),Bs(e,!0),a.enter(e)):a.leave(e,()=>{Bs(e,!1)}):Bs(e,n))},beforeUnmount(e,{value:n}){Bs(e,n)}};function Bs(e,n){e.style.display=n?e._vod:"none"}const F_=He({patchProp:__},s_);let bc;function M_(){return bc||(bc=Ag(F_))}const N_=(...e)=>{const n=M_().createApp(...e);I_(n),D_(n);const{mount:s}=n;return n.mount=a=>{const r=L_(a);if(!r)return;const i=n._component;!me(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.innerHTML="";const l=s(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),l},n};function I_(e){Object.defineProperty(e.config,"isNativeTag",{value:n=>Ju(n)||Sh(n),writable:!1})}function D_(e){{const n=e.config.isCustomElement;Object.defineProperty(e.config,"isCustomElement",{get(){return n},set(){z("The `isCustomElement` config option is deprecated. Use `compilerOptions.isCustomElement` instead.")}});const s=e.config.compilerOptions,a='The `compilerOptions` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, `compilerOptions` must be passed to `@vue/compiler-dom` in the build setup instead.\n- For vue-loader: pass it via vue-loader\'s `compilerOptions` loader option.\n- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-dom';Object.defineProperty(e.config,"compilerOptions",{get(){return z(a),s},set(){z(a)}})}}function L_(e){if(Ve(e)){const n=document.querySelector(e);return n||z(`Failed to mount app: mount target selector "${e}" returned null.`),n}return window.ShadowRoot&&e instanceof window.ShadowRoot&&e.mode==="closed"&&z('mounting on a ShadowRoot with `{mode: "closed"}` may lead to unpredictable bugs'),e}function j_(){n_()}j_();function ti(e,n={},s){for(const a in e){const r=e[a],i=s?`${s}:${a}`:a;typeof r=="object"&&r!==null?ti(r,n,i):typeof r=="function"&&(n[i]=r)}return n}const q_={run:e=>e()},R_=()=>q_,gd=typeof console.createTask<"u"?console.createTask:R_;function B_(e,n){const s=n.shift(),a=gd(s);return e.reduce((r,i)=>r.then(()=>a.run(()=>i(...n))),Promise.resolve())}function V_(e,n){const s=n.shift(),a=gd(s);return Promise.all(e.map(r=>a.run(()=>r(...n))))}function mo(e,n){for(const s of e)s(n)}class z_{constructor(){this._hooks={},this._before=void 0,this._after=void 0,this._deprecatedMessages=void 0,this._deprecatedHooks={},this.hook=this.hook.bind(this),this.callHook=this.callHook.bind(this),this.callHookWith=this.callHookWith.bind(this)}hook(n,s,a={}){if(!n||typeof s!="function")return()=>{};const r=n;let i;for(;this._deprecatedHooks[n];)i=this._deprecatedHooks[n],n=i.to;if(i&&!a.allowDeprecated){let l=i.message;l||(l=`${r} hook has been deprecated`+(i.to?`, please use ${i.to}`:"")),this._deprecatedMessages||(this._deprecatedMessages=new Set),this._deprecatedMessages.has(l)||(console.warn(l),this._deprecatedMessages.add(l))}if(!s.name)try{Object.defineProperty(s,"name",{get:()=>"_"+n.replace(/\W+/g,"_")+"_hook_cb",configurable:!0})}catch{}return this._hooks[n]=this._hooks[n]||[],this._hooks[n].push(s),()=>{s&&(this.removeHook(n,s),s=void 0)}}hookOnce(n,s){let a,r=(...i)=>(typeof a=="function"&&a(),a=void 0,r=void 0,s(...i));return a=this.hook(n,r),a}removeHook(n,s){if(this._hooks[n]){const a=this._hooks[n].indexOf(s);a!==-1&&this._hooks[n].splice(a,1),this._hooks[n].length===0&&delete this._hooks[n]}}deprecateHook(n,s){this._deprecatedHooks[n]=typeof s=="string"?{to:s}:s;const a=this._hooks[n]||[];this._hooks[n]=void 0;for(const r of a)this.hook(n,r)}deprecateHooks(n){Object.assign(this._deprecatedHooks,n);for(const s in n)this.deprecateHook(s,n[s])}addHooks(n){const s=ti(n),a=Object.keys(s).map(r=>this.hook(r,s[r]));return()=>{for(const r of a.splice(0,a.length))r()}}removeHooks(n){const s=ti(n);for(const a in s)this.removeHook(a,s[a])}removeAllHooks(){for(const n in this._hooks)delete this._hooks[n]}callHook(n,...s){return s.unshift(n),this.callHookWith(B_,n,...s)}callHookParallel(n,...s){return s.unshift(n),this.callHookWith(V_,n,...s)}callHookWith(n,s,...a){const r=this._before||this._after?{name:s,args:a,context:{}}:void 0;this._before&&mo(this._before,r);const i=n(this._hooks[s]||[],a);return i instanceof Promise?i.finally(()=>{this._after&&r&&mo(this._after,r)}):(this._after&&r&&mo(this._after,r),i)}beforeEach(n){return this._before=this._before||[],this._before.push(n),()=>{const s=this._before.indexOf(n);s!==-1&&this._before.splice(s,1)}}afterEach(n){return this._after=this._after||[],this._after.push(n),()=>{const s=this._after.indexOf(n);s!==-1&&this._after.splice(s,1)}}}function W_(){return new z_}function H_(e){return Array.isArray(e)?e:[e]}const _d=["title","script","style","noscript"],nl=["base","meta","link","style","script","noscript"],U_=["title","titleTemplate","templateParams","base","htmlAttrs","bodyAttrs","meta","link","style","script","noscript"],G_=["base","title","titleTemplate","bodyAttrs","htmlAttrs"],K_=["tagPosition","tagPriority","tagDuplicateStrategy","innerHTML","textContent"];function kd(e){let n=9;for(let s=0;s<e.length;)n=Math.imul(n^e.charCodeAt(s++),9**9);return((n^n>>>9)+65536).toString(16).substring(1,8).toLowerCase()}function Er(e){return kd(`${e.tag}:${e.textContent||e.innerHTML||""}:${Object.entries(e.props).map(([n,s])=>`${n}:${String(s)}`).join(",")}`)}function Z_(e){let n=9;for(const s of e)for(let a=0;a<s.length;)n=Math.imul(n^s.charCodeAt(a++),9**9);return((n^n>>>9)+65536).toString(16).substring(1,8).toLowerCase()}function bd(e,n){const{props:s,tag:a}=e;if(G_.includes(a))return a;if(a==="link"&&s.rel==="canonical")return"canonical";if(s.charset)return"charset";const r=["id"];a==="meta"&&r.push("name","property","http-equiv");for(const i of r)if(typeof s[i]<"u"){const l=String(s[i]);return n&&!n(l)?!1:`${a}:${i}:${l}`}return!1}const vc=(e,n)=>e==null?n||null:typeof e=="function"?e(n):e,Ja=(e,n=!1,s)=>{const{tag:a,$el:r}=e;r&&(Object.entries(a.props).forEach(([i,l])=>{l=String(l);const c=`attr:${i}`;if(i==="class"){if(!l)return;for(const u of l.split(" ")){const p=`${c}:${u}`;s&&s(e,p,()=>r.classList.remove(u)),r.classList.contains(u)||r.classList.add(u)}return}s&&!i.startsWith("data-h-")&&s(e,c,()=>r.removeAttribute(i)),(n||r.getAttribute(i)!==l)&&r.setAttribute(i,l)}),_d.includes(a.tag)&&(a.textContent&&a.textContent!==r.textContent?r.textContent=a.textContent:a.innerHTML&&a.innerHTML!==r.innerHTML&&(r.innerHTML=a.innerHTML)))};let Vs=!1;async function vd(e,n={}){var h,m;const s={shouldRender:!0};if(await e.hooks.callHook("dom:beforeRender",s),!s.shouldRender)return;const a=n.document||e.resolvedOptions.document||window.document,r=(await e.resolveTags()).map(c);if(e.resolvedOptions.experimentalHashHydration&&(Vs=Vs||e._hash||!1,Vs)){const g=Z_(r.map(b=>b.tag._h));if(Vs===g)return;Vs=g}const i=e._popSideEffectQueue();e.headEntries().map(g=>g._sde).forEach(g=>{Object.entries(g).forEach(([b,y])=>{i[b]=y})});const l=(g,b,y)=>{b=`${g.renderId}:${b}`,g.entry&&(g.entry._sde[b]=y),delete i[b]};function c(g){const b=e.headEntries().find(O=>O._i===g._e),y={renderId:g._d||Er(g),$el:null,shouldRender:!0,tag:g,entry:b,markSideEffect:(O,x)=>l(y,O,x)};return y}const u=[],p={body:[],head:[]},d=g=>{e._elMap[g.renderId]=g.$el,u.push(g),l(g,"el",()=>{var b;(b=g.$el)==null||b.remove(),delete e._elMap[g.renderId]})};for(const g of r){if(await e.hooks.callHook("dom:beforeRenderTag",g),!g.shouldRender)continue;const{tag:b}=g;if(b.tag==="title"){a.title=b.textContent||"",u.push(g);continue}if(b.tag==="htmlAttrs"||b.tag==="bodyAttrs"){g.$el=a[b.tag==="htmlAttrs"?"documentElement":"body"],Ja(g,!1,l),u.push(g);continue}if(g.$el=e._elMap[g.renderId],!g.$el&&b.key&&(g.$el=a.querySelector(`${(h=b.tagPosition)!=null&&h.startsWith("body")?"body":"head"} > ${b.tag}[data-h-${b._h}]`)),g.$el){g.tag._d&&Ja(g),d(g);continue}p[(m=b.tagPosition)!=null&&m.startsWith("body")?"body":"head"].push(g)}const f={bodyClose:void 0,bodyOpen:void 0,head:void 0};Object.entries(p).forEach(([g,b])=>{var O;if(!b.length)return;const y=(O=a==null?void 0:a[g])==null?void 0:O.children;if(y){for(const x of[...y].reverse()){const E=x.tagName.toLowerCase();if(!nl.includes(E))continue;const A=x.getAttributeNames().reduce((j,K)=>({...j,[K]:x.getAttribute(K)}),{}),R={tag:E,props:A};x.innerHTML&&(R.innerHTML=x.innerHTML);const W=Er(R);let Y=b.findIndex(j=>(j==null?void 0:j.renderId)===W);if(Y===-1){const j=bd(R);Y=b.findIndex(K=>(K==null?void 0:K.tag._d)&&K.tag._d===j)}if(Y!==-1){const j=b[Y];j.$el=x,Ja(j),d(j),delete b[Y]}}b.forEach(x=>{const E=x.tag.tagPosition||"head";f[E]=f[E]||a.createDocumentFragment(),x.$el||(x.$el=a.createElement(x.tag.tag),Ja(x,!0)),f[E].appendChild(x.$el),d(x)})}}),f.head&&a.head.appendChild(f.head),f.bodyOpen&&a.body.insertBefore(f.bodyOpen,a.body.firstChild),f.bodyClose&&a.body.appendChild(f.bodyClose);for(const g of u)await e.hooks.callHook("dom:renderTag",g);Object.values(i).forEach(g=>g())}let go=null;async function yd(e,n={}){function s(){return go=null,vd(e,n)}const a=n.delayFn||(r=>setTimeout(r,10));return go=go||new Promise(r=>a(()=>r(s())))}const Y_=e=>({hooks:{"entries:updated":function(n){if(typeof(e==null?void 0:e.document)>"u"&&typeof window>"u")return;let s=e==null?void 0:e.delayFn;!s&&typeof requestAnimationFrame<"u"&&(s=requestAnimationFrame),yd(n,{document:(e==null?void 0:e.document)||window.document,delayFn:s})}}});function J_(e){var n;return((n=e==null?void 0:e.head.querySelector('meta[name="unhead:ssr"]'))==null?void 0:n.getAttribute("content"))||!1}const yc={critical:2,high:9,low:12,base:-1,title:1,meta:10};function wc(e){if(typeof e.tagPriority=="number")return e.tagPriority;if(e.tag==="meta"){if(e.props.charset)return-2;if(e.props["http-equiv"]==="content-security-policy")return 0}const n=e.tagPriority||e.tag;return n in yc?yc[n]:10}const Q_=[{prefix:"before:",offset:-1},{prefix:"after:",offset:1}];function X_(){return{hooks:{"tags:resolve":e=>{const n=s=>{var a;return(a=e.tags.find(r=>r._d===s))==null?void 0:a._p};for(const{prefix:s,offset:a}of Q_)for(const r of e.tags.filter(i=>typeof i.tagPriority=="string"&&i.tagPriority.startsWith(s))){const i=n(r.tagPriority.replace(s,""));typeof i<"u"&&(r._p=i+a)}e.tags.sort((s,a)=>s._p-a._p).sort((s,a)=>wc(s)-wc(a))}}}}const e1=()=>({hooks:{"tags:resolve":e=>{const{tags:n}=e;let s=n.findIndex(r=>r.tag==="titleTemplate");const a=n.findIndex(r=>r.tag==="title");if(a!==-1&&s!==-1){const r=vc(n[s].textContent,n[a].textContent);r!==null?n[a].textContent=r||n[a].textContent:delete n[a]}else if(s!==-1){const r=vc(n[s].textContent);r!==null&&(n[s].textContent=r,n[s].tag="title",s=-1)}s!==-1&&delete n[s],e.tags=n.filter(Boolean)}}}),n1=()=>({hooks:{"tag:normalise":function({tag:e}){typeof e.props.body<"u"&&(e.tagPosition="bodyClose",delete e.props.body)}}}),wd=typeof window<"u",t1=()=>({hooks:{"tag:normalise":e=>{var i,l;const{tag:n,entry:s,resolvedOptions:a}=e;a.experimentalHashHydration===!0&&(n._h=Er(n));const r=typeof n.props._dynamic<"u";!nl.includes(n.tag)||!n.key||wd||(l=(i=Sd())==null?void 0:i.resolvedOptions)!=null&&l.document||(s._m==="server"||r)&&(n._h=n._h||Er(n),n.props[`data-h-${n._h}`]="")},"tags:resolve":e=>{e.tags=e.tags.map(n=>(delete n.props._dynamic,n))}}}),xc=["script","link","bodyAttrs"],s1=()=>{const e=(n,s)=>{const a={},r={};Object.entries(s.props).forEach(([l,c])=>{l.startsWith("on")&&typeof c=="function"?r[l]=c:a[l]=c});let i;return n==="dom"&&s.tag==="script"&&typeof a.src=="string"&&typeof r.onload<"u"&&(i=a.src,delete a.src),{props:a,eventHandlers:r,delayedSrc:i}};return{hooks:{"ssr:render":function(n){n.tags=n.tags.map(s=>(!xc.includes(s.tag)||!Object.entries(s.props).find(([a,r])=>a.startsWith("on")&&typeof r=="function")||(s.props=e("ssr",s).props),s))},"dom:beforeRenderTag":function(n){if(!xc.includes(n.tag.tag)||!Object.entries(n.tag.props).find(([i,l])=>i.startsWith("on")&&typeof l=="function"))return;const{props:s,eventHandlers:a,delayedSrc:r}=e("dom",n.tag);Object.keys(a).length&&(n.tag.props=s,n.tag._eventHandlers=a,n.tag._delayedSrc=r)},"dom:renderTag":function(n){const s=n.$el;if(!n.tag._eventHandlers||!s)return;const a=n.tag.tag==="bodyAttrs"&&typeof window<"u"?window:s;Object.entries(n.tag._eventHandlers).forEach(([r,i])=>{const l=`${n.tag._d||n.tag._p}:${r}`,c=r.slice(2).toLowerCase(),u=`data-h-${c}`;if(n.markSideEffect(l,()=>{}),s.hasAttribute(u))return;const p=i;s.setAttribute(u,""),a.addEventListener(c,p),n.entry&&(n.entry._sde[l]=()=>{a.removeEventListener(c,p),s.removeAttribute(u)})}),n.tag._delayedSrc&&s.setAttribute("src",n.tag._delayedSrc)}}}},a1=["templateParams","htmlAttrs","bodyAttrs"],r1=()=>({hooks:{"tag:normalise":function({tag:e}){["hid","vmid","key"].forEach(s=>{e.props[s]&&(e.key=e.props[s],delete e.props[s])});const n=e.key?`${e.tag}:${e.key}`:bd(e);n&&(e._d=n)},"tags:resolve":function(e){const n={};e.tags.forEach(a=>{const r=a._d||a._p,i=n[r];if(i){let l=a==null?void 0:a.tagDuplicateStrategy;if(!l&&a1.includes(a.tag)&&(l="merge"),l==="merge"){const u=i.props;["class","style"].forEach(p=>{a.props[p]&&u[p]&&(p==="style"&&!u[p].endsWith(";")&&(u[p]+=";"),a.props[p]=`${u[p]} ${a.props[p]}`)}),n[r].props={...u,...a.props};return}else if(a._e===i._e){i._duped=i._duped||[],a._d=`${i._d}:${i._duped.length+1}`,i._duped.push(a);return}const c=Object.keys(a.props).length;if((c===0||c===1&&typeof a.props["data-h-key"]<"u")&&!a.innerHTML&&!a.textContent){delete n[r];return}}n[r]=a});const s=[];Object.values(n).forEach(a=>{const r=a._duped;delete a._duped,s.push(a),r&&s.push(...r)}),e.tags=s}}});function _o(e,n){function s(i){let l="";return["s","pageTitle"].includes(i)?l=n.pageTitle:i.includes(".")&&(l=i.split(".").reduce((c,u)=>c[u]||"",n)),l||n[i]||""}let a=e;try{a=decodeURI(e)}catch{}return(a.match(/%(\w+\.+\w+)|%(\w+)/g)||[]).sort().reverse().forEach(i=>{e=e.replaceAll(i,s(i.slice(1))).trim()}),n.separator&&(e.endsWith(n.separator)&&(e=e.slice(0,-n.separator.length).trim()),e.startsWith(n.separator)&&(e=e.slice(n.separator.length).trim()),e=e.replace(new RegExp(`\\${n.separator}\\s*\\${n.separator}`,"g"),n.separator)),e}function o1(){return{hooks:{"tags:resolve":e=>{var i;const{tags:n}=e,s=(i=n.find(l=>l.tag==="title"))==null?void 0:i.textContent,a=n.findIndex(l=>l.tag==="templateParams"),r=a!==-1?n[a].textContent:{};r.pageTitle=r.pageTitle||s||"";for(const l of n)if(["titleTemplate","title"].includes(l.tag)&&typeof l.textContent=="string")l.textContent=_o(l.textContent,r);else if(l.tag==="meta"&&typeof l.props.content=="string")l.props.content=_o(l.props.content,r);else if(l.tag==="script"&&["application/json","application/ld+json"].includes(l.props.type)&&typeof l.innerHTML=="string")try{l.innerHTML=JSON.stringify(JSON.parse(l.innerHTML),(c,u)=>typeof u=="string"?_o(u,r):u)}catch{}e.tags=n.filter(l=>l.tag!=="templateParams")}}}}let xd;const i1=e=>xd=e,Sd=()=>xd;async function l1(e,n){const s={tag:e,props:{}};return["title","titleTemplate","templateParams"].includes(e)?(s.textContent=n instanceof Promise?await n:n,s):typeof n=="string"?["script","noscript","style"].includes(e)?(e==="script"&&(/^(https?:)?\/\//.test(n)||n.startsWith("/"))?s.props.src=n:(s.innerHTML=n,s.key=kd(n)),s):!1:(s.props=await u1(e,{...n}),s.props.children&&(s.props.innerHTML=s.props.children),delete s.props.children,Object.keys(s.props).filter(a=>K_.includes(a)).forEach(a=>{(!["innerHTML","textContent"].includes(a)||_d.includes(s.tag))&&(s[a]=s.props[a]),delete s.props[a]}),["innerHTML","textContent"].forEach(a=>{if(s.tag==="script"&&typeof s[a]=="string"&&["application/ld+json","application/json"].includes(s.props.type))try{s[a]=JSON.parse(s[a])}catch{s[a]=""}typeof s[a]=="object"&&(s[a]=JSON.stringify(s[a]))}),s.props.class&&(s.props.class=c1(s.props.class)),s.props.content&&Array.isArray(s.props.content)?s.props.content.map(a=>({...s,props:{...s.props,content:a}})):s)}function c1(e){return typeof e=="object"&&!Array.isArray(e)&&(e=Object.keys(e).filter(n=>e[n])),(Array.isArray(e)?e.join(" "):e).split(" ").filter(n=>n.trim()).filter(Boolean).join(" ")}async function u1(e,n){for(const s of Object.keys(n)){const a=s.startsWith("data-");n[s]instanceof Promise&&(n[s]=await n[s]),String(n[s])==="true"?n[s]=a?"true":"":String(n[s])==="false"&&(a?n[s]="false":delete n[s])}return n}const p1=10;async function d1(e){const n=[];return Object.entries(e.resolvedInput).filter(([s,a])=>typeof a<"u"&&U_.includes(s)).forEach(([s,a])=>{const r=H_(a);n.push(...r.map(i=>l1(s,i)).flat())}),(await Promise.all(n)).flat().filter(Boolean).map((s,a)=>(s._e=e._i,s._p=(e._i<<p1)+a,s))}const f1=()=>[r1(),X_(),o1(),e1(),t1(),s1(),n1()],h1=(e={})=>[Y_({document:e==null?void 0:e.document,delayFn:e==null?void 0:e.domDelayFn})];function m1(e={}){const n=g1({...e,plugins:[...h1(e),...(e==null?void 0:e.plugins)||[]]});return e.experimentalHashHydration&&n.resolvedOptions.document&&(n._hash=J_(n.resolvedOptions.document)),i1(n),n}function g1(e={}){let n=[],s={},a=0;const r=W_();e!=null&&e.hooks&&r.addHooks(e.hooks),e.plugins=[...f1(),...(e==null?void 0:e.plugins)||[]],e.plugins.forEach(c=>c.hooks&&r.addHooks(c.hooks)),e.document=e.document||(wd?document:void 0);const i=()=>r.callHook("entries:updated",l),l={resolvedOptions:e,headEntries(){return n},get hooks(){return r},use(c){c.hooks&&r.addHooks(c.hooks)},push(c,u){const p={_i:a++,input:c,_sde:{}};return u!=null&&u.mode&&(p._m=u==null?void 0:u.mode),u!=null&&u.transform&&(p._t=u==null?void 0:u.transform),n.push(p),i(),{dispose(){n=n.filter(d=>d._i!==p._i?!0:(s={...s,...d._sde||{}},d._sde={},i(),!1))},patch(d){n=n.map(f=>(f._i===p._i&&(p.input=f.input=d,i()),f))}}},async resolveTags(){const c={tags:[],entries:[...n]};await r.callHook("entries:resolve",c);for(const u of c.entries){const p=u._t||(d=>d);u.resolvedInput=p(u.resolvedInput||u.input);for(const d of await d1(u)){const f={tag:d,entry:u,resolvedOptions:l.resolvedOptions};await r.callHook("tag:normalise",f),c.tags.push(f.tag)}}return await r.callHook("tags:resolve",c),c.tags},_popSideEffectQueue(){const c={...s};return s={},c},_elMap:{}};return l.hooks.callHook("init",l),l}function _1(e){return typeof e=="function"?e():C(e)}function $r(e,n=""){if(e instanceof Promise)return e;const s=_1(e);if(!e||!s)return s;if(Array.isArray(s))return s.map(a=>$r(a,n));if(typeof s=="object"){let a=!1;const r=Object.fromEntries(Object.entries(s).map(([i,l])=>i==="titleTemplate"||i.startsWith("on")?[i,C(l)]:((typeof l=="function"||Ae(l))&&(a=!0),[i,$r(l,i)])));return a&&nl.includes(String(n))&&(r._dynamic=!0),r}return s}const k1=Sr.startsWith("3"),b1=typeof window<"u",Ed="usehead";function tl(){return An()&&S(Ed)||Sd()}function v1(e){return{install(s){k1&&(s.config.globalProperties.$unhead=e,s.config.globalProperties.$head=e,s.provide(Ed,e))}}.install}function y1(e={}){const n=m1({...e,domDelayFn:s=>setTimeout(()=>nn(()=>s()),10),plugins:[w1(),...(e==null?void 0:e.plugins)||[]]});return n.install=v1(n),n}const w1=()=>({hooks:{"entries:resolve":function(e){for(const n of e.entries)n.resolvedInput=$r(n.input)}}});function x1(e,n={}){const s=tl(),a=se(!1),r=se({});cs(()=>{r.value=a.value?{}:$r(e)});const i=s.push(r.value,n);return we(r,c=>{i.patch(c)}),An()&&(Ia(()=>{i.dispose()}),Vp(()=>{a.value=!0}),Bp(()=>{a.value=!1})),i}function S1(e,n={}){return tl().push(e,n)}function sl(e,n={}){var a;const s=tl();if(s){const r=b1||!!((a=s.resolvedOptions)!=null&&a.document);return n.mode==="server"&&r||n.mode==="client"&&!r?void 0:r?x1(e,n):S1(e,n)}}const E1=e=>sl({htmlAttrs:e});function $1(e,n){const s=y1(n||{}),a={unhead:s,install(r){Sr.startsWith("3")&&(r.config.globalProperties.$head=s,r.provide("usehead",s))},use(r){s.use(r)},resolveTags(){return s.resolveTags()},headEntries(){return s.headEntries()},headTags(){return s.resolveTags()},push(r,i){return s.push(r,i)},addEntry(r,i){return s.push(r,i)},addHeadObjs(r,i){return s.push(r,i)},addReactiveEntry(r,i){const l=sl(r,i);return typeof l<"u"?l.dispose:()=>{}},removeHeadObjs(){},updateDOM(r,i){i?vd(s,{document:r}):yd(s,{delayFn:l=>setTimeout(()=>l(),50),document:r})},internalHooks:s.hooks,hooks:{"before:dom":[],"resolved:tags":[],"resolved:entries":[]}};return s.addHeadObjs=a.addHeadObjs,s.updateDOM=a.updateDOM,s.hooks.hook("dom:beforeRender",r=>{for(const i of a.hooks["before:dom"])i()===!1&&(r.shouldRender=!1)}),e&&a.addHeadObjs(e),a}const sa=Symbol("v-click-clicks"),Gt=Symbol("v-click-clicks-elements"),si=Symbol("v-click-clicks-order-map"),aa=Symbol("v-click-clicks-disabled"),$d=Symbol("slidev-slide-scale"),P=Symbol("slidev-slidev-context"),P1=Symbol("slidev-route"),T1=Symbol("slidev-slide-context"),Ht="slidev-vclick-target",ko="slidev-vclick-hidden",C1="slidev-vclick-fade",bo="slidev-vclick-hidden-explicitly",zs="slidev-vclick-current",Qa="slidev-vclick-prior",O1=["localhost","127.0.0.1"];let A1=(e=21)=>crypto.getRandomValues(new Uint8Array(e)).reduce((n,s)=>(s&=63,s<36?n+=s.toString(36):s<62?n+=(s-26).toString(36).toUpperCase():s>62?n+="-":n+="_",n),"");function ai(e,n){if(!e)return!1;const s=e.indexOf(n);return s>=0?(e.splice(s,1),!0):!1}function F1(...e){let n,s,a;e.length===1?(n=0,a=1,[s]=e):[n,s,a=1]=e;const r=[];let i=n;for(;i<s;)r.push(i),i+=a||1;return r}function M1(e){return e!=null}function N1(e,n){return Object.fromEntries(Object.entries(e).map(([s,a])=>n(s,a)).filter(M1))}const I1={theme:"./mathema-2023",titleTemplate:"%s - Slidev",addons:[],remoteAssets:!1,monaco:"dev",download:!1,export:{},info:`<h2>Von C# zu F# – Einführung in die funktionale Programmierung</h2>
`,highlighter:"prism",lineNumbers:!1,colorSchema:"light",routerMode:"history",aspectRatio:1.7777777777777777,canvasWidth:980,exportFilename:"",selectable:!1,themeConfig:{},fonts:{sans:["ui-sans-serif","system-ui","-apple-system","BlinkMacSystemFont",'"Segoe UI"',"Roboto",'"Helvetica Neue"',"Arial",'"Noto Sans"',"sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"','"Noto Color Emoji"'],serif:["ui-serif","Georgia","Cambria",'"Times New Roman"',"Times","serif"],mono:["ui-monospace","SFMono-Regular","Menlo","Monaco","Consolas",'"Liberation Mono"','"Courier New"',"monospace"],webfonts:[],provider:"google",local:[],italic:!1,weights:["200","400","600"]},favicon:"https://cdn.jsdelivr.net/gh/slidevjs/slidev/assets/favicon.png",drawings:{enabled:!0,persist:!1,presenterOnly:!1,syncAll:!0},plantUmlServer:"https://www.plantuml.com/plantuml",codeCopy:!0,record:"dev",css:"windicss",presenter:"Patrick Drechsler & Martin Grotz",htmlAttrs:{},hightlighter:"prism",defaults:{layout:"default-with-footer"},occasion:"MD-DevDays 2023",occasionLogoUrl:"images/logo-magdeburger-devdays-2023.png",company:"MATHEMA GmbH",contact:"patrick.drechsler@mathema.de & martin.grotz@mathema.de",layout:"cover"},Ce=I1,Ct=Ce.aspectRatio??16/9,Ot=Ce.canvasWidth??980,al=Math.ceil(Ot/Ct),rl=L(()=>N1(Ce.themeConfig||{},(e,n)=>[`--slidev-theme-${e}`,n]));function qn(e,n,s){Object.defineProperty(e,n,{value:s,writable:!0,enumerable:!1})}const ps=ze({page:0,clicks:0});let D1=[],L1=[];qn(ps,"$syncUp",!0);qn(ps,"$syncDown",!0);qn(ps,"$paused",!1);qn(ps,"$onSet",e=>D1.push(e));qn(ps,"$onPatch",e=>L1.push(e));qn(ps,"$patch",async()=>!1);function Pd(e,n,s=!1){const a=[];let r=!1,i=!1,l,c;const u=ze(n);function p(m){a.push(m)}function d(m,g){u[m]!==g&&(clearTimeout(l),r=!0,u[m]=g,l=setTimeout(()=>r=!1,0))}function f(m){r||(clearTimeout(c),i=!0,Object.entries(m).forEach(([g,b])=>{u[g]=b}),c=setTimeout(()=>i=!1,0))}function h(m){let g;s?s&&window.addEventListener("storage",y=>{y&&y.key===m&&y.newValue&&f(JSON.parse(y.newValue))}):(g=new BroadcastChannel(m),g.addEventListener("message",y=>f(y.data)));function b(){!s&&g&&!i?g.postMessage(ge(u)):s&&!i&&window.localStorage.setItem(m,JSON.stringify(u)),r||a.forEach(y=>y(u))}if(we(u,b,{deep:!0}),s){const y=window.localStorage.getItem(m);y&&f(JSON.parse(y))}}return{init:h,onPatch:p,patch:d,state:u}}const{init:j1,onPatch:q1,patch:Ws,state:vo}=Pd(ps,{page:1,clicks:0,viewerPage:1,viewerClicks:0}),ds=ze({});let R1=[],B1=[];qn(ds,"$syncUp",!0);qn(ds,"$syncDown",!0);qn(ds,"$paused",!1);qn(ds,"$onSet",e=>R1.push(e));qn(ds,"$onPatch",e=>B1.push(e));qn(ds,"$patch",async()=>!1);const{init:V1,onPatch:z1,patch:Td,state:Pr}=Pd(ds,{},!1),W1="modulepreload",H1=function(e){return"/2023-05-magdeburger-devdays-fp-csharp-to-fsharp/"+e},Sc={},ja=function(n,s,a){if(!s||s.length===0)return n();const r=document.getElementsByTagName("link");return Promise.all(s.map(i=>{if(i=H1(i),i in Sc)return;Sc[i]=!0;const l=i.endsWith(".css"),c=l?'[rel="stylesheet"]':"";if(!!a)for(let d=r.length-1;d>=0;d--){const f=r[d];if(f.href===i&&(!l||f.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${c}`))return;const p=document.createElement("link");if(p.rel=l?"stylesheet":W1,l||(p.as="script",p.crossOrigin=""),p.href=i,document.head.appendChild(p),l)return new Promise((d,f)=>{p.addEventListener("load",d),p.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>n())};var Ec;const ft=typeof window<"u",U1=e=>typeof e<"u",G1=Object.prototype.toString,Tr=e=>typeof e=="function",K1=e=>typeof e=="number",Cd=e=>typeof e=="string",ri=e=>G1.call(e)==="[object Object]",Z1=()=>+Date.now(),Ps=()=>{},Y1=ft&&((Ec=window==null?void 0:window.navigator)==null?void 0:Ec.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function dn(e){return typeof e=="function"?e():C(e)}function J1(e,n){function s(...a){return new Promise((r,i)=>{Promise.resolve(e(()=>n.apply(this,a),{fn:n,thisArg:this,args:a})).then(r).catch(i)})}return s}const Od=e=>e();function Q1(e=Od){const n=se(!0);function s(){n.value=!1}function a(){n.value=!0}const r=(...i)=>{n.value&&e(...i)};return{isActive:Et(n),pause:s,resume:a,eventFilter:r}}function X1(e){return e}function ek(e,n){var s;if(typeof e=="number")return e+n;const a=((s=e.match(/^-?[0-9]+\.?[0-9]*/))==null?void 0:s[0])||"",r=e.slice(a.length),i=parseFloat(a)+n;return Number.isNaN(i)?e:i+r}function nk(e,n){let s,a,r;const i=se(!0),l=()=>{i.value=!0,r()};we(e,l,{flush:"sync"});const c=Tr(n)?n:n.get,u=Tr(n)?void 0:n.set,p=wp((d,f)=>(a=d,r=f,{get(){return i.value&&(s=c(),i.value=!1),a(),s},set(h){u==null||u(h)}}));return Object.isExtensible(p)&&(p.trigger=l),p}function Is(e){return Li()?(op(e),!0):!1}function tk(e){if(!Ae(e))return ze(e);const n=new Proxy({},{get(s,a,r){return C(Reflect.get(e.value,a,r))},set(s,a,r){return Ae(e.value[a])&&!Ae(r)?e.value[a].value=r:e.value[a]=r,!0},deleteProperty(s,a){return Reflect.deleteProperty(e.value,a)},has(s,a){return Reflect.has(e.value,a)},ownKeys(){return Object.keys(e.value)},getOwnPropertyDescriptor(){return{enumerable:!0,configurable:!0}}});return ze(n)}function Ad(e){return typeof e=="function"?L(e):se(e)}var sk=Object.defineProperty,ak=Object.defineProperties,rk=Object.getOwnPropertyDescriptors,$c=Object.getOwnPropertySymbols,ok=Object.prototype.hasOwnProperty,ik=Object.prototype.propertyIsEnumerable,Pc=(e,n,s)=>n in e?sk(e,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[n]=s,lk=(e,n)=>{for(var s in n||(n={}))ok.call(n,s)&&Pc(e,s,n[s]);if($c)for(var s of $c(n))ik.call(n,s)&&Pc(e,s,n[s]);return e},ck=(e,n)=>ak(e,rk(n));function uk(e){if(!Ae(e))return hm(e);const n=Array.isArray(e.value)?new Array(e.value.length):{};for(const s in e.value)n[s]=wp(()=>({get(){return e.value[s]},set(a){if(Array.isArray(e.value)){const r=[...e.value];r[s]=a,e.value=r}else{const r=ck(lk({},e.value),{[s]:a});Object.setPrototypeOf(r,e.value),e.value=r}}}));return n}function Fd(e,n=!0){An()?us(e):n?e():nn(e)}function pk(e){An()&&Kr(e)}function dk(e,n,s={}){const{immediate:a=!0}=s,r=se(!1);let i=null;function l(){i&&(clearTimeout(i),i=null)}function c(){r.value=!1,l()}function u(...p){l(),r.value=!0,i=setTimeout(()=>{r.value=!1,i=null,e(...p)},dn(n))}return a&&(r.value=!0,ft&&u()),Is(c),{isPending:Et(r),start:u,stop:c}}function Md(e=!1,n={}){const{truthyValue:s=!0,falsyValue:a=!1}=n,r=Ae(e),i=se(e);function l(c){if(arguments.length)return i.value=c,i.value;{const u=dn(s);return i.value=i.value===u?dn(a):u,i.value}}return r?l:[i,l]}var Tc=Object.getOwnPropertySymbols,fk=Object.prototype.hasOwnProperty,hk=Object.prototype.propertyIsEnumerable,mk=(e,n)=>{var s={};for(var a in e)fk.call(e,a)&&n.indexOf(a)<0&&(s[a]=e[a]);if(e!=null&&Tc)for(var a of Tc(e))n.indexOf(a)<0&&hk.call(e,a)&&(s[a]=e[a]);return s};function gk(e,n,s={}){const a=s,{eventFilter:r=Od}=a,i=mk(a,["eventFilter"]);return we(e,J1(r,n),i)}var _k=Object.defineProperty,kk=Object.defineProperties,bk=Object.getOwnPropertyDescriptors,Cr=Object.getOwnPropertySymbols,Nd=Object.prototype.hasOwnProperty,Id=Object.prototype.propertyIsEnumerable,Cc=(e,n,s)=>n in e?_k(e,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[n]=s,vk=(e,n)=>{for(var s in n||(n={}))Nd.call(n,s)&&Cc(e,s,n[s]);if(Cr)for(var s of Cr(n))Id.call(n,s)&&Cc(e,s,n[s]);return e},yk=(e,n)=>kk(e,bk(n)),wk=(e,n)=>{var s={};for(var a in e)Nd.call(e,a)&&n.indexOf(a)<0&&(s[a]=e[a]);if(e!=null&&Cr)for(var a of Cr(e))n.indexOf(a)<0&&Id.call(e,a)&&(s[a]=e[a]);return s};function xk(e,n,s={}){const a=s,{eventFilter:r}=a,i=wk(a,["eventFilter"]),{eventFilter:l,pause:c,resume:u,isActive:p}=Q1(r);return{stop:gk(e,n,yk(vk({},i),{eventFilter:l})),pause:c,resume:u,isActive:p}}function Pn(e){var n;const s=dn(e);return(n=s==null?void 0:s.$el)!=null?n:s}const hn=ft?window:void 0,Sk=ft?window.document:void 0,Ek=ft?window.navigator:void 0;function Oe(...e){let n,s,a,r;if(Cd(e[0])||Array.isArray(e[0])?([s,a,r]=e,n=hn):[n,s,a,r]=e,!n)return Ps;Array.isArray(s)||(s=[s]),Array.isArray(a)||(a=[a]);const i=[],l=()=>{i.forEach(d=>d()),i.length=0},c=(d,f,h,m)=>(d.addEventListener(f,h,m),()=>d.removeEventListener(f,h,m)),u=we(()=>[Pn(n),dn(r)],([d,f])=>{l(),d&&i.push(...s.flatMap(h=>a.map(m=>c(d,h,m,f))))},{immediate:!0,flush:"post"}),p=()=>{u(),l()};return Is(p),p}let Oc=!1;function $k(e,n,s={}){const{window:a=hn,ignore:r=[],capture:i=!0,detectIframe:l=!1}=s;if(!a)return;Y1&&!Oc&&(Oc=!0,Array.from(a.document.body.children).forEach(h=>h.addEventListener("click",Ps)));let c=!0;const u=h=>r.some(m=>{if(typeof m=="string")return Array.from(a.document.querySelectorAll(m)).some(g=>g===h.target||h.composedPath().includes(g));{const g=Pn(m);return g&&(h.target===g||h.composedPath().includes(g))}}),d=[Oe(a,"click",h=>{const m=Pn(e);if(!(!m||m===h.target||h.composedPath().includes(m))){if(h.detail===0&&(c=!u(h)),!c){c=!0;return}n(h)}},{passive:!0,capture:i}),Oe(a,"pointerdown",h=>{const m=Pn(e);m&&(c=!h.composedPath().includes(m)&&!u(h))},{passive:!0}),l&&Oe(a,"blur",h=>{var m;const g=Pn(e);((m=a.document.activeElement)==null?void 0:m.tagName)==="IFRAME"&&!(g!=null&&g.contains(a.document.activeElement))&&n(h)})].filter(Boolean);return()=>d.forEach(h=>h())}const Pk=e=>typeof e=="function"?e:typeof e=="string"?n=>n.key===e:Array.isArray(e)?n=>e.includes(n.key):()=>!0;function Tk(...e){let n,s,a={};e.length===3?(n=e[0],s=e[1],a=e[2]):e.length===2?typeof e[1]=="object"?(n=!0,s=e[0],a=e[1]):(n=e[0],s=e[1]):(n=!0,s=e[0]);const{target:r=hn,eventName:i="keydown",passive:l=!1}=a,c=Pk(n);return Oe(r,i,p=>{c(p)&&s(p)},l)}function Ck(e={}){var n;const{window:s=hn}=e,a=(n=e.document)!=null?n:s==null?void 0:s.document,r=nk(()=>null,()=>a==null?void 0:a.activeElement);return s&&(Oe(s,"blur",i=>{i.relatedTarget===null&&r.trigger()},!0),Oe(s,"focus",r.trigger,!0)),r}function qa(e,n=!1){const s=se(),a=()=>s.value=Boolean(e());return a(),Fd(a,n),s}function vs(e,n={}){const{window:s=hn}=n,a=qa(()=>s&&"matchMedia"in s&&typeof s.matchMedia=="function");let r;const i=se(!1),l=()=>{r&&("removeEventListener"in r?r.removeEventListener("change",c):r.removeListener(c))},c=()=>{a.value&&(l(),r=s.matchMedia(Ad(e).value),i.value=r.matches,"addEventListener"in r?r.addEventListener("change",c):r.addListener(c))};return cs(c),Is(()=>l()),i}const Ok={sm:640,md:768,lg:1024,xl:1280,"2xl":1536};var Ak=Object.defineProperty,Ac=Object.getOwnPropertySymbols,Fk=Object.prototype.hasOwnProperty,Mk=Object.prototype.propertyIsEnumerable,Fc=(e,n,s)=>n in e?Ak(e,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[n]=s,Nk=(e,n)=>{for(var s in n||(n={}))Fk.call(n,s)&&Fc(e,s,n[s]);if(Ac)for(var s of Ac(n))Mk.call(n,s)&&Fc(e,s,n[s]);return e};function Ik(e,n={}){function s(c,u){let p=e[c];return u!=null&&(p=ek(p,u)),typeof p=="number"&&(p=`${p}px`),p}const{window:a=hn}=n;function r(c){return a?a.matchMedia(c).matches:!1}const i=c=>vs(`(min-width: ${s(c)})`,n),l=Object.keys(e).reduce((c,u)=>(Object.defineProperty(c,u,{get:()=>i(u),enumerable:!0,configurable:!0}),c),{});return Nk({greater(c){return vs(`(min-width: ${s(c,.1)})`,n)},greaterOrEqual:i,smaller(c){return vs(`(max-width: ${s(c,-.1)})`,n)},smallerOrEqual(c){return vs(`(max-width: ${s(c)})`,n)},between(c,u){return vs(`(min-width: ${s(c)}) and (max-width: ${s(u,-.1)})`,n)},isGreater(c){return r(`(min-width: ${s(c,.1)})`)},isGreaterOrEqual(c){return r(`(min-width: ${s(c)})`)},isSmaller(c){return r(`(max-width: ${s(c,-.1)})`)},isSmallerOrEqual(c){return r(`(max-width: ${s(c)})`)},isInBetween(c,u){return r(`(min-width: ${s(c)}) and (max-width: ${s(u,-.1)})`)}},l)}function Dk(e={}){const{navigator:n=Ek,read:s=!1,source:a,copiedDuring:r=1500,legacy:i=!1}=e,l=["copy","cut"],c=qa(()=>n&&"clipboard"in n),u=L(()=>c.value||i),p=se(""),d=se(!1),f=dk(()=>d.value=!1,r);function h(){c.value?n.clipboard.readText().then(y=>{p.value=y}):p.value=b()}if(u.value&&s)for(const y of l)Oe(y,h);async function m(y=dn(a)){u.value&&y!=null&&(c.value?await n.clipboard.writeText(y):g(y),p.value=y,d.value=!0,f.start())}function g(y){const O=document.createElement("textarea");O.value=y??"",O.style.position="absolute",O.style.opacity="0",document.body.appendChild(O),O.select(),document.execCommand("copy"),O.remove()}function b(){var y,O,x;return(x=(O=(y=document==null?void 0:document.getSelection)==null?void 0:y.call(document))==null?void 0:O.toString())!=null?x:""}return{isSupported:u,text:p,copied:d,copy:m}}function Lk(e){return JSON.parse(JSON.stringify(e))}const oi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},ii="__vueuse_ssr_handlers__";oi[ii]=oi[ii]||{};const jk=oi[ii];function qk(e,n){return jk[e]||n}function Rk(e){return e==null?"any":e instanceof Set?"set":e instanceof Map?"map":e instanceof Date?"date":typeof e=="boolean"?"boolean":typeof e=="string"?"string":typeof e=="object"?"object":Number.isNaN(e)?"any":"number"}var Bk=Object.defineProperty,Mc=Object.getOwnPropertySymbols,Vk=Object.prototype.hasOwnProperty,zk=Object.prototype.propertyIsEnumerable,Nc=(e,n,s)=>n in e?Bk(e,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[n]=s,Ic=(e,n)=>{for(var s in n||(n={}))Vk.call(n,s)&&Nc(e,s,n[s]);if(Mc)for(var s of Mc(n))zk.call(n,s)&&Nc(e,s,n[s]);return e};const Wk={boolean:{read:e=>e==="true",write:e=>String(e)},object:{read:e=>JSON.parse(e),write:e=>JSON.stringify(e)},number:{read:e=>Number.parseFloat(e),write:e=>String(e)},any:{read:e=>e,write:e=>String(e)},string:{read:e=>e,write:e=>String(e)},map:{read:e=>new Map(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e.entries()))},set:{read:e=>new Set(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e))},date:{read:e=>new Date(e),write:e=>e.toISOString()}},Dc="vueuse-storage";function Hk(e,n,s,a={}){var r;const{flush:i="pre",deep:l=!0,listenToStorageChanges:c=!0,writeDefaults:u=!0,mergeDefaults:p=!1,shallow:d,window:f=hn,eventFilter:h,onError:m=j=>{console.error(j)}}=a,g=(d?et:se)(n);if(!s)try{s=qk("getDefaultStorage",()=>{var j;return(j=hn)==null?void 0:j.localStorage})()}catch(j){m(j)}if(!s)return g;const b=dn(n),y=Rk(b),O=(r=a.serializer)!=null?r:Wk[y],{pause:x,resume:E}=xk(g,()=>A(g.value),{flush:i,deep:l,eventFilter:h});return f&&c&&(Oe(f,"storage",Y),Oe(f,Dc,W)),Y(),g;function A(j){try{if(j==null)s.removeItem(e);else{const K=O.write(j),ae=s.getItem(e);ae!==K&&(s.setItem(e,K),f&&f.dispatchEvent(new CustomEvent(Dc,{detail:{key:e,oldValue:ae,newValue:K,storageArea:s}})))}}catch(K){m(K)}}function R(j){const K=j?j.newValue:s.getItem(e);if(K==null)return u&&b!==null&&s.setItem(e,O.write(b)),b;if(!j&&p){const ae=O.read(K);return Tr(p)?p(ae,b):y==="object"&&!Array.isArray(ae)?Ic(Ic({},b),ae):ae}else return typeof K!="string"?K:O.read(K)}function W(j){Y(j.detail)}function Y(j){if(!(j&&j.storageArea!==s)){if(j&&j.key==null){g.value=b;return}if(!(j&&j.key!==e)){x();try{g.value=R(j)}catch(K){m(K)}finally{j?nn(E):E()}}}}}function Uk(e){return vs("(prefers-color-scheme: dark)",e)}var Gk=Object.defineProperty,Kk=Object.defineProperties,Zk=Object.getOwnPropertyDescriptors,Lc=Object.getOwnPropertySymbols,Yk=Object.prototype.hasOwnProperty,Jk=Object.prototype.propertyIsEnumerable,jc=(e,n,s)=>n in e?Gk(e,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[n]=s,Qk=(e,n)=>{for(var s in n||(n={}))Yk.call(n,s)&&jc(e,s,n[s]);if(Lc)for(var s of Lc(n))Jk.call(n,s)&&jc(e,s,n[s]);return e},Xk=(e,n)=>Kk(e,Zk(n));function eI(e,n={}){var s,a,r;const i=(s=n.draggingElement)!=null?s:hn,l=(a=n.handle)!=null?a:e,c=se((r=dn(n.initialValue))!=null?r:{x:0,y:0}),u=se(),p=g=>n.pointerTypes?n.pointerTypes.includes(g.pointerType):!0,d=g=>{dn(n.preventDefault)&&g.preventDefault(),dn(n.stopPropagation)&&g.stopPropagation()},f=g=>{var b;if(!p(g)||dn(n.exact)&&g.target!==dn(e))return;const y=dn(e).getBoundingClientRect(),O={x:g.clientX-y.left,y:g.clientY-y.top};((b=n.onStart)==null?void 0:b.call(n,O,g))!==!1&&(u.value=O,d(g))},h=g=>{var b;p(g)&&u.value&&(c.value={x:g.clientX-u.value.x,y:g.clientY-u.value.y},(b=n.onMove)==null||b.call(n,c.value,g),d(g))},m=g=>{var b;p(g)&&u.value&&(u.value=void 0,(b=n.onEnd)==null||b.call(n,c.value,g),d(g))};return ft&&(Oe(l,"pointerdown",f,!0),Oe(i,"pointermove",h,!0),Oe(i,"pointerup",m,!0)),Xk(Qk({},uk(c)),{position:c,isDragging:L(()=>!!u.value),style:L(()=>`left:${c.value.x}px;top:${c.value.y}px;`)})}var qc=Object.getOwnPropertySymbols,e0=Object.prototype.hasOwnProperty,n0=Object.prototype.propertyIsEnumerable,t0=(e,n)=>{var s={};for(var a in e)e0.call(e,a)&&n.indexOf(a)<0&&(s[a]=e[a]);if(e!=null&&qc)for(var a of qc(e))n.indexOf(a)<0&&n0.call(e,a)&&(s[a]=e[a]);return s};function s0(e,n,s={}){const a=s,{window:r=hn}=a,i=t0(a,["window"]);let l;const c=qa(()=>r&&"ResizeObserver"in r),u=()=>{l&&(l.disconnect(),l=void 0)},p=we(()=>Pn(e),f=>{u(),c.value&&r&&f&&(l=new ResizeObserver(n),l.observe(f,i))},{immediate:!0,flush:"post"}),d=()=>{u(),p()};return Is(d),{isSupported:c,stop:d}}function a0(e,n={width:0,height:0},s={}){const{window:a=hn,box:r="content-box"}=s,i=L(()=>{var u,p;return(p=(u=Pn(e))==null?void 0:u.namespaceURI)==null?void 0:p.includes("svg")}),l=se(n.width),c=se(n.height);return s0(e,([u])=>{const p=r==="border-box"?u.borderBoxSize:r==="content-box"?u.contentBoxSize:u.devicePixelContentBoxSize;if(a&&i.value){const d=Pn(e);if(d){const f=a.getComputedStyle(d);l.value=parseFloat(f.width),c.value=parseFloat(f.height)}}else if(p){const d=Array.isArray(p)?p:[p];l.value=d.reduce((f,{inlineSize:h})=>f+h,0),c.value=d.reduce((f,{blockSize:h})=>f+h,0)}else l.value=u.contentRect.width,c.value=u.contentRect.height},s),we(()=>Pn(e),u=>{l.value=u?n.width:0,c.value=u?n.height:0}),{width:l,height:c}}const Rc=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]];function r0(e,n={}){const{document:s=Sk,autoExit:a=!1}=n,r=e||(s==null?void 0:s.querySelector("html")),i=se(!1);let l=Rc[0];const c=qa(()=>{if(s){for(const b of Rc)if(b[1]in s)return l=b,!0}else return!1;return!1}),[u,p,d,,f]=l;async function h(){c.value&&(s!=null&&s[d]&&await s[p](),i.value=!1)}async function m(){if(!c.value)return;await h();const b=Pn(r);b&&(await b[u](),i.value=!0)}async function g(){i.value?await h():await m()}return s&&Oe(s,f,()=>{i.value=!!(s!=null&&s[d])},!1),a&&Is(h),{isSupported:c,isFullscreen:i,enter:m,exit:h,toggle:g}}function o0(e,n,s={}){const{root:a,rootMargin:r="0px",threshold:i=.1,window:l=hn}=s,c=qa(()=>l&&"IntersectionObserver"in l);let u=Ps;const p=c.value?we(()=>({el:Pn(e),root:Pn(a)}),({el:f,root:h})=>{if(u(),!f)return;const m=new IntersectionObserver(n,{root:h,rootMargin:r,threshold:i});m.observe(f),u=()=>{m.disconnect(),u=Ps}},{immediate:!0,flush:"post"}):Ps,d=()=>{u(),p()};return Is(d),{isSupported:c,stop:d}}function Un(e,n,s={}){const{window:a=hn}=s;return Hk(e,n,a==null?void 0:a.localStorage,s)}const i0={ctrl:"control",command:"meta",cmd:"meta",option:"alt",up:"arrowup",down:"arrowdown",left:"arrowleft",right:"arrowright"};function l0(e={}){const{reactive:n=!1,target:s=hn,aliasMap:a=i0,passive:r=!0,onEventFired:i=Ps}=e,l=ze(new Set),c={toJSON(){return{}},current:l},u=n?ze(c):c,p=new Set,d=new Set;function f(b,y){b in u&&(n?u[b]=y:u[b].value=y)}function h(){l.clear();for(const b of d)f(b,!1)}function m(b,y){var O,x;const E=(O=b.key)==null?void 0:O.toLowerCase(),R=[(x=b.code)==null?void 0:x.toLowerCase(),E].filter(Boolean);E&&(y?l.add(E):l.delete(E));for(const W of R)d.add(W),f(W,y);E==="meta"&&!y?(p.forEach(W=>{l.delete(W),f(W,!1)}),p.clear()):typeof b.getModifierState=="function"&&b.getModifierState("Meta")&&y&&[...l,...R].forEach(W=>p.add(W))}Oe(s,"keydown",b=>(m(b,!0),i(b)),{passive:r}),Oe(s,"keyup",b=>(m(b,!1),i(b)),{passive:r}),Oe("blur",h,{passive:!0}),Oe("focus",h,{passive:!0});const g=new Proxy(u,{get(b,y,O){if(typeof y!="string")return Reflect.get(b,y,O);if(y=y.toLowerCase(),y in a&&(y=a[y]),!(y in u))if(/[+_-]/.test(y)){const E=y.split(/[+_-]/g).map(A=>A.trim());u[y]=L(()=>E.every(A=>C(g[A])))}else u[y]=se(!1);const x=Reflect.get(b,y,O);return n?C(x):x}});return g}var lt;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(lt||(lt={}));function c0(e,n={}){const s=Ad(e),{threshold:a=50,onSwipe:r,onSwipeEnd:i,onSwipeStart:l}=n,c=ze({x:0,y:0}),u=(W,Y)=>{c.x=W,c.y=Y},p=ze({x:0,y:0}),d=(W,Y)=>{p.x=W,p.y=Y},f=L(()=>c.x-p.x),h=L(()=>c.y-p.y),{max:m,abs:g}=Math,b=L(()=>m(g(f.value),g(h.value))>=a),y=se(!1),O=se(!1),x=L(()=>b.value?g(f.value)>g(h.value)?f.value>0?lt.LEFT:lt.RIGHT:h.value>0?lt.UP:lt.DOWN:lt.NONE),E=W=>{var Y,j,K;const ae=W.buttons===0,fe=W.buttons===1;return(K=(j=(Y=n.pointerTypes)==null?void 0:Y.includes(W.pointerType))!=null?j:ae||fe)!=null?K:!0},A=[Oe(e,"pointerdown",W=>{var Y,j;if(!E(W))return;O.value=!0,(j=(Y=s.value)==null?void 0:Y.style)==null||j.setProperty("touch-action","none");const K=W.target;K==null||K.setPointerCapture(W.pointerId);const{clientX:ae,clientY:fe}=W;u(ae,fe),d(ae,fe),l==null||l(W)}),Oe(e,"pointermove",W=>{if(!E(W)||!O.value)return;const{clientX:Y,clientY:j}=W;d(Y,j),!y.value&&b.value&&(y.value=!0),y.value&&(r==null||r(W))}),Oe(e,"pointerup",W=>{var Y,j;E(W)&&(y.value&&(i==null||i(W,x.value)),O.value=!1,y.value=!1,(j=(Y=s.value)==null?void 0:Y.style)==null||j.setProperty("touch-action","initial"))})],R=()=>A.forEach(W=>W());return{isSwiping:Et(y),direction:Et(x),posStart:Et(c),posEnd:Et(p),distanceX:f,distanceY:h,stop:R}}var u0=Object.defineProperty,Bc=Object.getOwnPropertySymbols,p0=Object.prototype.hasOwnProperty,d0=Object.prototype.propertyIsEnumerable,Vc=(e,n,s)=>n in e?u0(e,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[n]=s,f0=(e,n)=>{for(var s in n||(n={}))p0.call(n,s)&&Vc(e,s,n[s]);if(Bc)for(var s of Bc(n))d0.call(n,s)&&Vc(e,s,n[s]);return e};const h0={easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]};f0({linear:X1},h0);function Jn(e,n,s,a={}){var r,i,l;const{clone:c=!1,passive:u=!1,eventName:p,deep:d=!1,defaultValue:f}=a,h=An(),m=s||(h==null?void 0:h.emit)||((r=h==null?void 0:h.$emit)==null?void 0:r.bind(h))||((l=(i=h==null?void 0:h.proxy)==null?void 0:i.$emit)==null?void 0:l.bind(h==null?void 0:h.proxy));let g=p;n||(n="modelValue"),g=p||g||`update:${n.toString()}`;const b=O=>c?Tr(c)?c(O):Lk(O):O,y=()=>U1(e[n])?b(e[n]):f;if(u){const O=y(),x=se(O);return we(()=>e[n],E=>x.value=b(E)),we(x,E=>{(E!==e[n]||d)&&m(g,E)},{deep:d}),x}else return L({get(){return y()},set(O){m(g,O)}})}function m0(e={}){const{window:n=hn,initialWidth:s=1/0,initialHeight:a=1/0,listenOrientation:r=!0,includeScrollbar:i=!0}=e,l=se(s),c=se(a),u=()=>{n&&(i?(l.value=n.innerWidth,c.value=n.innerHeight):(l.value=n.document.documentElement.clientWidth,c.value=n.document.documentElement.clientHeight))};return u(),Fd(u),Oe("resize",u,{passive:!0}),r&&Oe("orientationchange",u,{passive:!0}),{width:l,height:c}}function g0(){return Dd().__VUE_DEVTOOLS_GLOBAL_HOOK__}function Dd(){return typeof navigator<"u"&&typeof window<"u"?window:typeof global<"u"?global:{}}const _0=typeof Proxy=="function",k0="devtools-plugin:setup",b0="plugin:settings:set";let hs,li;function v0(){var e;return hs!==void 0||(typeof window<"u"&&window.performance?(hs=!0,li=window.performance):typeof global<"u"&&(!((e=global.perf_hooks)===null||e===void 0)&&e.performance)?(hs=!0,li=global.perf_hooks.performance):hs=!1),hs}function y0(){return v0()?li.now():Date.now()}class w0{constructor(n,s){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=n,this.hook=s;const a={};if(n.settings)for(const l in n.settings){const c=n.settings[l];a[l]=c.defaultValue}const r=`__vue-devtools-plugin-settings__${n.id}`;let i=Object.assign({},a);try{const l=localStorage.getItem(r),c=JSON.parse(l);Object.assign(i,c)}catch{}this.fallbacks={getSettings(){return i},setSettings(l){try{localStorage.setItem(r,JSON.stringify(l))}catch{}i=l},now(){return y0()}},s&&s.on(b0,(l,c)=>{l===this.plugin.id&&this.fallbacks.setSettings(c)}),this.proxiedOn=new Proxy({},{get:(l,c)=>this.target?this.target.on[c]:(...u)=>{this.onQueue.push({method:c,args:u})}}),this.proxiedTarget=new Proxy({},{get:(l,c)=>this.target?this.target[c]:c==="on"?this.proxiedOn:Object.keys(this.fallbacks).includes(c)?(...u)=>(this.targetQueue.push({method:c,args:u,resolve:()=>{}}),this.fallbacks[c](...u)):(...u)=>new Promise(p=>{this.targetQueue.push({method:c,args:u,resolve:p})})})}async setRealTarget(n){this.target=n;for(const s of this.onQueue)this.target.on[s.method](...s.args);for(const s of this.targetQueue)s.resolve(await this.target[s.method](...s.args))}}function x0(e,n){const s=e,a=Dd(),r=g0(),i=_0&&s.enableEarlyProxy;if(r&&(a.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__||!i))r.emit(k0,e,n);else{const l=i?new w0(s,r):null;(a.__VUE_DEVTOOLS_PLUGINS__=a.__VUE_DEVTOOLS_PLUGINS__||[]).push({pluginDescriptor:s,setupFn:n,proxy:l}),l&&n(l.proxiedTarget)}}/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const ot=typeof window<"u";function S0(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const Ne=Object.assign;function yo(e,n){const s={};for(const a in n){const r=n[a];s[a]=On(r)?r.map(e):e(r)}return s}const ra=()=>{},On=Array.isArray;function Te(e){const n=Array.from(arguments).slice(1);console.warn.apply(console,["[Vue Router warn]: "+e].concat(n))}const E0=/\/$/,$0=e=>e.replace(E0,"");function wo(e,n,s="/"){let a,r={},i="",l="";const c=n.indexOf("#");let u=n.indexOf("?");return c<u&&c>=0&&(u=-1),u>-1&&(a=n.slice(0,u),i=n.slice(u+1,c>-1?c:n.length),r=e(i)),c>-1&&(a=a||n.slice(0,c),l=n.slice(c,n.length)),a=C0(a??n,s),{fullPath:a+(i&&"?")+i+l,path:a,query:r,hash:l}}function P0(e,n){const s=n.query?e(n.query):"";return n.path+(s&&"?")+s+(n.hash||"")}function zc(e,n){return!n||!e.toLowerCase().startsWith(n.toLowerCase())?e:e.slice(n.length)||"/"}function Wc(e,n,s){const a=n.matched.length-1,r=s.matched.length-1;return a>-1&&a===r&&Dt(n.matched[a],s.matched[r])&&Ld(n.params,s.params)&&e(n.query)===e(s.query)&&n.hash===s.hash}function Dt(e,n){return(e.aliasOf||e)===(n.aliasOf||n)}function Ld(e,n){if(Object.keys(e).length!==Object.keys(n).length)return!1;for(const s in e)if(!T0(e[s],n[s]))return!1;return!0}function T0(e,n){return On(e)?Hc(e,n):On(n)?Hc(n,e):e===n}function Hc(e,n){return On(n)?e.length===n.length&&e.every((s,a)=>s===n[a]):e.length===1&&e[0]===n}function C0(e,n){if(e.startsWith("/"))return e;if(!n.startsWith("/"))return Te(`Cannot resolve a relative location without an absolute path. Trying to resolve "${e}" from "${n}". It should look like "/${n}".`),e;if(!e)return n;const s=n.split("/"),a=e.split("/");let r=s.length-1,i,l;for(i=0;i<a.length;i++)if(l=a[i],l!==".")if(l==="..")r>1&&r--;else break;return s.slice(0,r).join("/")+"/"+a.slice(i-(i===a.length?1:0)).join("/")}var ya;(function(e){e.pop="pop",e.push="push"})(ya||(ya={}));var oa;(function(e){e.back="back",e.forward="forward",e.unknown=""})(oa||(oa={}));function O0(e){if(!e)if(ot){const n=document.querySelector("base");e=n&&n.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),$0(e)}const A0=/^[^#]+#/;function F0(e,n){return e.replace(A0,"#")+n}function M0(e,n){const s=document.documentElement.getBoundingClientRect(),a=e.getBoundingClientRect();return{behavior:n.behavior,left:a.left-s.left-(n.left||0),top:a.top-s.top-(n.top||0)}}const Qr=()=>({left:window.pageXOffset,top:window.pageYOffset});function N0(e){let n;if("el"in e){const s=e.el,a=typeof s=="string"&&s.startsWith("#");if(typeof e.el=="string"&&(!a||!document.getElementById(e.el.slice(1))))try{const i=document.querySelector(e.el);if(a&&i){Te(`The selector "${e.el}" should be passed as "el: document.querySelector('${e.el}')" because it starts with "#".`);return}}catch{Te(`The selector "${e.el}" is invalid. If you are using an id selector, make sure to escape it. You can find more information about escaping characters in selectors at https://mathiasbynens.be/notes/css-escapes or use CSS.escape (https://developer.mozilla.org/en-US/docs/Web/API/CSS/escape).`);return}const r=typeof s=="string"?a?document.getElementById(s.slice(1)):document.querySelector(s):s;if(!r){Te(`Couldn't find element using selector "${e.el}" returned by scrollBehavior.`);return}n=M0(r,e)}else n=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(n):window.scrollTo(n.left!=null?n.left:window.pageXOffset,n.top!=null?n.top:window.pageYOffset)}function Uc(e,n){return(history.state?history.state.position-n:-1)+e}const ci=new Map;function I0(e,n){ci.set(e,n)}function D0(e){const n=ci.get(e);return ci.delete(e),n}let L0=()=>location.protocol+"//"+location.host;function jd(e,n){const{pathname:s,search:a,hash:r}=n,i=e.indexOf("#");if(i>-1){let c=r.includes(e.slice(i))?e.slice(i).length:1,u=r.slice(c);return u[0]!=="/"&&(u="/"+u),zc(u,"")}return zc(s,e)+a+r}function j0(e,n,s,a){let r=[],i=[],l=null;const c=({state:h})=>{const m=jd(e,location),g=s.value,b=n.value;let y=0;if(h){if(s.value=m,n.value=h,l&&l===g){l=null;return}y=b?h.position-b.position:0}else a(m);r.forEach(O=>{O(s.value,g,{delta:y,type:ya.pop,direction:y?y>0?oa.forward:oa.back:oa.unknown})})};function u(){l=s.value}function p(h){r.push(h);const m=()=>{const g=r.indexOf(h);g>-1&&r.splice(g,1)};return i.push(m),m}function d(){const{history:h}=window;h.state&&h.replaceState(Ne({},h.state,{scroll:Qr()}),"")}function f(){for(const h of i)h();i=[],window.removeEventListener("popstate",c),window.removeEventListener("beforeunload",d)}return window.addEventListener("popstate",c),window.addEventListener("beforeunload",d),{pauseListeners:u,listen:p,destroy:f}}function Gc(e,n,s,a=!1,r=!1){return{back:e,current:n,forward:s,replaced:a,position:window.history.length,scroll:r?Qr():null}}function q0(e){const{history:n,location:s}=window,a={value:jd(e,s)},r={value:n.state};r.value||i(a.value,{back:null,current:a.value,forward:null,position:n.length-1,replaced:!0,scroll:null},!0);function i(u,p,d){const f=e.indexOf("#"),h=f>-1?(s.host&&document.querySelector("base")?e:e.slice(f))+u:L0()+e+u;try{n[d?"replaceState":"pushState"](p,"",h),r.value=p}catch(m){Te("Error with push/replace State",m),s[d?"replace":"assign"](h)}}function l(u,p){const d=Ne({},n.state,Gc(r.value.back,u,r.value.forward,!0),p,{position:r.value.position});i(u,d,!0),a.value=u}function c(u,p){const d=Ne({},r.value,n.state,{forward:u,scroll:Qr()});n.state||Te(`history.state seems to have been manually replaced without preserving the necessary values. Make sure to preserve existing history state if you are manually calling history.replaceState:

history.replaceState(history.state, '', url)

You can find more information at https://next.router.vuejs.org/guide/migration/#usage-of-history-state.`),i(d.current,d,!0);const f=Ne({},Gc(a.value,u,null),{position:d.position+1},p);i(u,f,!1),a.value=u}return{location:a,state:r,push:c,replace:l}}function R0(e){e=O0(e);const n=q0(e),s=j0(e,n.state,n.location,n.replace);function a(i,l=!0){l||s.pauseListeners(),history.go(i)}const r=Ne({location:"",base:e,go:a,createHref:F0.bind(null,e)},n,s);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>n.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>n.state.value}),r}function B0(e){return typeof e=="string"||e&&typeof e=="object"}function qd(e){return typeof e=="string"||typeof e=="symbol"}const _t={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Rd=Symbol("navigation failure");var Kc;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(Kc||(Kc={}));const V0={[1]({location:e,currentLocation:n}){return`No match for
 ${JSON.stringify(e)}${n?`
while being at
`+JSON.stringify(n):""}`},[2]({from:e,to:n}){return`Redirected from "${e.fullPath}" to "${W0(n)}" via a navigation guard.`},[4]({from:e,to:n}){return`Navigation aborted from "${e.fullPath}" to "${n.fullPath}" via a navigation guard.`},[8]({from:e,to:n}){return`Navigation cancelled from "${e.fullPath}" to "${n.fullPath}" with a new navigation.`},[16]({from:e,to:n}){return`Avoided redundant navigation to current location: "${e.fullPath}".`}};function Fs(e,n){return Ne(new Error(V0[e](n)),{type:e,[Rd]:!0},n)}function nt(e,n){return e instanceof Error&&Rd in e&&(n==null||!!(e.type&n))}const z0=["params","query","hash"];function W0(e){if(typeof e=="string")return e;if("path"in e)return e.path;const n={};for(const s of z0)s in e&&(n[s]=e[s]);return JSON.stringify(n,null,2)}const Zc="[^/]+?",H0={sensitive:!1,strict:!1,start:!0,end:!0},U0=/[.+*?^${}()[\]/\\]/g;function G0(e,n){const s=Ne({},H0,n),a=[];let r=s.start?"^":"";const i=[];for(const p of e){const d=p.length?[]:[90];s.strict&&!p.length&&(r+="/");for(let f=0;f<p.length;f++){const h=p[f];let m=40+(s.sensitive?.25:0);if(h.type===0)f||(r+="/"),r+=h.value.replace(U0,"\\$&"),m+=40;else if(h.type===1){const{value:g,repeatable:b,optional:y,regexp:O}=h;i.push({name:g,repeatable:b,optional:y});const x=O||Zc;if(x!==Zc){m+=10;try{new RegExp(`(${x})`)}catch(A){throw new Error(`Invalid custom RegExp for param "${g}" (${x}): `+A.message)}}let E=b?`((?:${x})(?:/(?:${x}))*)`:`(${x})`;f||(E=y&&p.length<2?`(?:/${E})`:"/"+E),y&&(E+="?"),r+=E,m+=20,y&&(m+=-8),b&&(m+=-20),x===".*"&&(m+=-50)}d.push(m)}a.push(d)}if(s.strict&&s.end){const p=a.length-1;a[p][a[p].length-1]+=.7000000000000001}s.strict||(r+="/?"),s.end?r+="$":s.strict&&(r+="(?:/|$)");const l=new RegExp(r,s.sensitive?"":"i");function c(p){const d=p.match(l),f={};if(!d)return null;for(let h=1;h<d.length;h++){const m=d[h]||"",g=i[h-1];f[g.name]=m&&g.repeatable?m.split("/"):m}return f}function u(p){let d="",f=!1;for(const h of e){(!f||!d.endsWith("/"))&&(d+="/"),f=!1;for(const m of h)if(m.type===0)d+=m.value;else if(m.type===1){const{value:g,repeatable:b,optional:y}=m,O=g in p?p[g]:"";if(On(O)&&!b)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const x=On(O)?O.join("/"):O;if(!x)if(y)h.length<2&&(d.endsWith("/")?d=d.slice(0,-1):f=!0);else throw new Error(`Missing required param "${g}"`);d+=x}}return d||"/"}return{re:l,score:a,keys:i,parse:c,stringify:u}}function K0(e,n){let s=0;for(;s<e.length&&s<n.length;){const a=n[s]-e[s];if(a)return a;s++}return e.length<n.length?e.length===1&&e[0]===40+40?-1:1:e.length>n.length?n.length===1&&n[0]===40+40?1:-1:0}function Z0(e,n){let s=0;const a=e.score,r=n.score;for(;s<a.length&&s<r.length;){const i=K0(a[s],r[s]);if(i)return i;s++}if(Math.abs(r.length-a.length)===1){if(Yc(a))return 1;if(Yc(r))return-1}return r.length-a.length}function Yc(e){const n=e[e.length-1];return e.length>0&&n[n.length-1]<0}const Y0={type:0,value:""},J0=/[a-zA-Z0-9_]/;function Q0(e){if(!e)return[[]];if(e==="/")return[[Y0]];if(!e.startsWith("/"))throw new Error(`Route paths should start with a "/": "${e}" should be "/${e}".`);function n(m){throw new Error(`ERR (${s})/"${p}": ${m}`)}let s=0,a=s;const r=[];let i;function l(){i&&r.push(i),i=[]}let c=0,u,p="",d="";function f(){p&&(s===0?i.push({type:0,value:p}):s===1||s===2||s===3?(i.length>1&&(u==="*"||u==="+")&&n(`A repeatable param (${p}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:p,regexp:d,repeatable:u==="*"||u==="+",optional:u==="*"||u==="?"})):n("Invalid state to consume buffer"),p="")}function h(){p+=u}for(;c<e.length;){if(u=e[c++],u==="\\"&&s!==2){a=s,s=4;continue}switch(s){case 0:u==="/"?(p&&f(),l()):u===":"?(f(),s=1):h();break;case 4:h(),s=a;break;case 1:u==="("?s=2:J0.test(u)?h():(f(),s=0,u!=="*"&&u!=="?"&&u!=="+"&&c--);break;case 2:u===")"?d[d.length-1]=="\\"?d=d.slice(0,-1)+u:s=3:d+=u;break;case 3:f(),s=0,u!=="*"&&u!=="?"&&u!=="+"&&c--,d="";break;default:n("Unknown state");break}}return s===2&&n(`Unfinished custom RegExp for param "${p}"`),f(),l(),r}function X0(e,n,s){const a=G0(Q0(e.path),s);{const i=new Set;for(const l of a.keys)i.has(l.name)&&Te(`Found duplicated params with name "${l.name}" for path "${e.path}". Only the last one will be available on "$route.params".`),i.add(l.name)}const r=Ne(a,{record:e,parent:n,children:[],alias:[]});return n&&!r.record.aliasOf==!n.record.aliasOf&&n.children.push(r),r}function eb(e,n){const s=[],a=new Map;n=Xc({strict:!1,end:!0,sensitive:!1},n);function r(d){return a.get(d)}function i(d,f,h){const m=!h,g=nb(d);rb(g,f),g.aliasOf=h&&h.record;const b=Xc(n,d),y=[g];if("alias"in d){const E=typeof d.alias=="string"?[d.alias]:d.alias;for(const A of E)y.push(Ne({},g,{components:h?h.record.components:g.components,path:A,aliasOf:h?h.record:g}))}let O,x;for(const E of y){const{path:A}=E;if(f&&A[0]!=="/"){const R=f.record.path,W=R[R.length-1]==="/"?"":"/";E.path=f.record.path+(A&&W+A)}if(E.path==="*")throw new Error(`Catch all routes ("*") must now be defined using a param with a custom regexp.
See more at https://next.router.vuejs.org/guide/migration/#removed-star-or-catch-all-routes.`);if(O=X0(E,f,b),f&&A[0]==="/"&&ob(O,f),h?(h.alias.push(O),ab(h,O)):(x=x||O,x!==O&&x.alias.push(O),m&&d.name&&!Qc(O)&&l(d.name)),g.children){const R=g.children;for(let W=0;W<R.length;W++)i(R[W],O,h&&h.children[W])}h=h||O,(O.record.components&&Object.keys(O.record.components).length||O.record.name||O.record.redirect)&&u(O)}return x?()=>{l(x)}:ra}function l(d){if(qd(d)){const f=a.get(d);f&&(a.delete(d),s.splice(s.indexOf(f),1),f.children.forEach(l),f.alias.forEach(l))}else{const f=s.indexOf(d);f>-1&&(s.splice(f,1),d.record.name&&a.delete(d.record.name),d.children.forEach(l),d.alias.forEach(l))}}function c(){return s}function u(d){let f=0;for(;f<s.length&&Z0(d,s[f])>=0&&(d.record.path!==s[f].record.path||!Bd(d,s[f]));)f++;s.splice(f,0,d),d.record.name&&!Qc(d)&&a.set(d.record.name,d)}function p(d,f){let h,m={},g,b;if("name"in d&&d.name){if(h=a.get(d.name),!h)throw Fs(1,{location:d});{const x=Object.keys(d.params||{}).filter(E=>!h.keys.find(A=>A.name===E));x.length&&Te(`Discarded invalid param(s) "${x.join('", "')}" when navigating. See https://github.com/vuejs/router/blob/main/packages/router/CHANGELOG.md#414-2022-08-22 for more details.`)}b=h.record.name,m=Ne(Jc(f.params,h.keys.filter(x=>!x.optional).map(x=>x.name)),d.params&&Jc(d.params,h.keys.map(x=>x.name))),g=h.stringify(m)}else if("path"in d)g=d.path,g.startsWith("/")||Te(`The Matcher cannot resolve relative paths but received "${g}". Unless you directly called \`matcher.resolve("${g}")\`, this is probably a bug in vue-router. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/router.`),h=s.find(x=>x.re.test(g)),h&&(m=h.parse(g),b=h.record.name);else{if(h=f.name?a.get(f.name):s.find(x=>x.re.test(f.path)),!h)throw Fs(1,{location:d,currentLocation:f});b=h.record.name,m=Ne({},f.params,d.params),g=h.stringify(m)}const y=[];let O=h;for(;O;)y.unshift(O.record),O=O.parent;return{name:b,path:g,params:m,matched:y,meta:sb(y)}}return e.forEach(d=>i(d)),{addRoute:i,resolve:p,removeRoute:l,getRoutes:c,getRecordMatcher:r}}function Jc(e,n){const s={};for(const a of n)a in e&&(s[a]=e[a]);return s}function nb(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:tb(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function tb(e){const n={},s=e.props||!1;if("component"in e)n.default=s;else for(const a in e.components)n[a]=typeof s=="boolean"?s:s[a];return n}function Qc(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function sb(e){return e.reduce((n,s)=>Ne(n,s.meta),{})}function Xc(e,n){const s={};for(const a in e)s[a]=a in n?n[a]:e[a];return s}function ui(e,n){return e.name===n.name&&e.optional===n.optional&&e.repeatable===n.repeatable}function ab(e,n){for(const s of e.keys)if(!s.optional&&!n.keys.find(ui.bind(null,s)))return Te(`Alias "${n.record.path}" and the original record: "${e.record.path}" must have the exact same param named "${s.name}"`);for(const s of n.keys)if(!s.optional&&!e.keys.find(ui.bind(null,s)))return Te(`Alias "${n.record.path}" and the original record: "${e.record.path}" must have the exact same param named "${s.name}"`)}function rb(e,n){n&&n.record.name&&!e.name&&!e.path&&Te(`The route named "${String(n.record.name)}" has a child without a name and an empty path. Using that name won't render the empty path child so you probably want to move the name to the child instead. If this is intentional, add a name to the child route to remove the warning.`)}function ob(e,n){for(const s of n.keys)if(!e.keys.find(ui.bind(null,s)))return Te(`Absolute path "${e.record.path}" must have the exact same param named "${s.name}" as its parent "${n.record.path}".`)}function Bd(e,n){return n.children.some(s=>s===e||Bd(e,s))}const Vd=/#/g,ib=/&/g,lb=/\//g,cb=/=/g,ub=/\?/g,zd=/\+/g,pb=/%5B/g,db=/%5D/g,Wd=/%5E/g,fb=/%60/g,Hd=/%7B/g,hb=/%7C/g,Ud=/%7D/g,mb=/%20/g;function ol(e){return encodeURI(""+e).replace(hb,"|").replace(pb,"[").replace(db,"]")}function gb(e){return ol(e).replace(Hd,"{").replace(Ud,"}").replace(Wd,"^")}function pi(e){return ol(e).replace(zd,"%2B").replace(mb,"+").replace(Vd,"%23").replace(ib,"%26").replace(fb,"`").replace(Hd,"{").replace(Ud,"}").replace(Wd,"^")}function _b(e){return pi(e).replace(cb,"%3D")}function kb(e){return ol(e).replace(Vd,"%23").replace(ub,"%3F")}function bb(e){return e==null?"":kb(e).replace(lb,"%2F")}function wa(e){try{return decodeURIComponent(""+e)}catch{Te(`Error decoding "${e}". Using original value`)}return""+e}function vb(e){const n={};if(e===""||e==="?")return n;const a=(e[0]==="?"?e.slice(1):e).split("&");for(let r=0;r<a.length;++r){const i=a[r].replace(zd," "),l=i.indexOf("="),c=wa(l<0?i:i.slice(0,l)),u=l<0?null:wa(i.slice(l+1));if(c in n){let p=n[c];On(p)||(p=n[c]=[p]),p.push(u)}else n[c]=u}return n}function eu(e){let n="";for(let s in e){const a=e[s];if(s=_b(s),a==null){a!==void 0&&(n+=(n.length?"&":"")+s);continue}(On(a)?a.map(i=>i&&pi(i)):[a&&pi(a)]).forEach(i=>{i!==void 0&&(n+=(n.length?"&":"")+s,i!=null&&(n+="="+i))})}return n}function yb(e){const n={};for(const s in e){const a=e[s];a!==void 0&&(n[s]=On(a)?a.map(r=>r==null?null:""+r):a==null?a:""+a)}return n}const wb=Symbol("router view location matched"),nu=Symbol("router view depth"),il=Symbol("router"),Gd=Symbol("route location"),di=Symbol("router view location");function Hs(){let e=[];function n(a){return e.push(a),()=>{const r=e.indexOf(a);r>-1&&e.splice(r,1)}}function s(){e=[]}return{add:n,list:()=>e,reset:s}}function yt(e,n,s,a,r){const i=a&&(a.enterCallbacks[r]=a.enterCallbacks[r]||[]);return()=>new Promise((l,c)=>{const u=f=>{f===!1?c(Fs(4,{from:s,to:n})):f instanceof Error?c(f):B0(f)?c(Fs(2,{from:n,to:f})):(i&&a.enterCallbacks[r]===i&&typeof f=="function"&&i.push(f),l())},p=e.call(a&&a.instances[r],n,s,xb(u,n,s));let d=Promise.resolve(p);if(e.length<3&&(d=d.then(u)),e.length>2){const f=`The "next" callback was never called inside of ${e.name?'"'+e.name+'"':""}:
${e.toString()}
. If you are returning a value instead of calling "next", make sure to remove the "next" parameter from your function.`;if(typeof p=="object"&&"then"in p)d=d.then(h=>u._called?h:(Te(f),Promise.reject(new Error("Invalid navigation guard"))));else if(p!==void 0&&!u._called){Te(f),c(new Error("Invalid navigation guard"));return}}d.catch(f=>c(f))})}function xb(e,n,s){let a=0;return function(){a++===1&&Te(`The "next" callback was called more than once in one navigation guard when going from "${s.fullPath}" to "${n.fullPath}". It should be called exactly one time in each navigation guard. This will fail in production.`),e._called=!0,a===1&&e.apply(null,arguments)}}function xo(e,n,s,a){const r=[];for(const i of e){!i.components&&!i.children.length&&Te(`Record with path "${i.path}" is either missing a "component(s)" or "children" property.`);for(const l in i.components){let c=i.components[l];{if(!c||typeof c!="object"&&typeof c!="function")throw Te(`Component "${l}" in record with path "${i.path}" is not a valid component. Received "${String(c)}".`),new Error("Invalid route component");if("then"in c){Te(`Component "${l}" in record with path "${i.path}" is a Promise instead of a function that returns a Promise. Did you write "import('./MyPage.vue')" instead of "() => import('./MyPage.vue')" ? This will break in production if not fixed.`);const u=c;c=()=>u}else c.__asyncLoader&&!c.__warnedDefineAsync&&(c.__warnedDefineAsync=!0,Te(`Component "${l}" in record with path "${i.path}" is defined using "defineAsyncComponent()". Write "() => import('./MyPage.vue')" instead of "defineAsyncComponent(() => import('./MyPage.vue'))".`))}if(!(n!=="beforeRouteEnter"&&!i.instances[l]))if(Sb(c)){const p=(c.__vccOpts||c)[n];p&&r.push(yt(p,s,a,i,l))}else{let u=c();"catch"in u||(Te(`Component "${l}" in record with path "${i.path}" is a function that does not return a Promise. If you were passing a functional component, make sure to add a "displayName" to the component. This will break in production if not fixed.`),u=Promise.resolve(u)),r.push(()=>u.then(p=>{if(!p)return Promise.reject(new Error(`Couldn't resolve component "${l}" at "${i.path}"`));const d=S0(p)?p.default:p;i.components[l]=d;const h=(d.__vccOpts||d)[n];return h&&yt(h,s,a,i,l)()}))}}}return r}function Sb(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function tu(e){const n=S(il),s=S(Gd),a=L(()=>n.resolve(C(e.to))),r=L(()=>{const{matched:u}=a.value,{length:p}=u,d=u[p-1],f=s.matched;if(!d||!f.length)return-1;const h=f.findIndex(Dt.bind(null,d));if(h>-1)return h;const m=su(u[p-2]);return p>1&&su(d)===m&&f[f.length-1].path!==m?f.findIndex(Dt.bind(null,u[p-2])):h}),i=L(()=>r.value>-1&&Tb(s.params,a.value.params)),l=L(()=>r.value>-1&&r.value===s.matched.length-1&&Ld(s.params,a.value.params));function c(u={}){return Pb(u)?n[C(e.replace)?"replace":"push"](C(e.to)).catch(ra):Promise.resolve()}if(ot){const u=An();if(u){const p={route:a.value,isActive:i.value,isExactActive:l.value};u.__vrl_devtools=u.__vrl_devtools||[],u.__vrl_devtools.push(p),cs(()=>{p.route=a.value,p.isActive=i.value,p.isExactActive=l.value},{flush:"post"})}}return{route:a,href:L(()=>a.value.href),isActive:i,isExactActive:l,navigate:c}}const Eb=Me({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:tu,setup(e,{slots:n}){const s=ze(tu(e)),{options:a}=S(il),r=L(()=>({[au(e.activeClass,a.linkActiveClass,"router-link-active")]:s.isActive,[au(e.exactActiveClass,a.linkExactActiveClass,"router-link-exact-active")]:s.isExactActive}));return()=>{const i=n.default&&n.default(s);return e.custom?i:Tn("a",{"aria-current":s.isExactActive?e.ariaCurrentValue:null,href:s.href,onClick:s.navigate,class:r.value},i)}}}),$b=Eb;function Pb(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const n=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(n))return}return e.preventDefault&&e.preventDefault(),!0}}function Tb(e,n){for(const s in n){const a=n[s],r=e[s];if(typeof a=="string"){if(a!==r)return!1}else if(!On(r)||r.length!==a.length||a.some((i,l)=>i!==r[l]))return!1}return!0}function su(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const au=(e,n,s)=>e??n??s,Cb=Me({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:n,slots:s}){Ab();const a=S(di),r=L(()=>e.route||a.value),i=S(nu,0),l=L(()=>{let p=C(i);const{matched:d}=r.value;let f;for(;(f=d[p])&&!f.components;)p++;return p}),c=L(()=>r.value.matched[l.value]);En(nu,L(()=>l.value+1)),En(wb,c),En(di,r);const u=se();return we(()=>[u.value,c.value,e.name],([p,d,f],[h,m,g])=>{d&&(d.instances[f]=p,m&&m!==d&&p&&p===h&&(d.leaveGuards.size||(d.leaveGuards=m.leaveGuards),d.updateGuards.size||(d.updateGuards=m.updateGuards))),p&&d&&(!m||!Dt(d,m)||!h)&&(d.enterCallbacks[f]||[]).forEach(b=>b(p))},{flush:"post"}),()=>{const p=r.value,d=e.name,f=c.value,h=f&&f.components[d];if(!h)return ru(s.default,{Component:h,route:p});const m=f.props[d],g=m?m===!0?p.params:typeof m=="function"?m(p):m:null,y=Tn(h,Ne({},g,n,{onVnodeUnmounted:O=>{O.component.isUnmounted&&(f.instances[d]=null)},ref:u}));if(ot&&y.ref){const O={depth:l.value,name:f.name,path:f.path,meta:f.meta};(On(y.ref)?y.ref.map(E=>E.i):[y.ref.i]).forEach(E=>{E.__vrv_devtools=O})}return ru(s.default,{Component:y,route:p})||y}}});function ru(e,n){if(!e)return null;const s=e(n);return s.length===1?s[0]:s}const Ob=Cb;function Ab(){const e=An(),n=e.parent&&e.parent.type.name;if(n&&(n==="KeepAlive"||n.includes("Transition"))){const s=n==="KeepAlive"?"keep-alive":"transition";Te(`<router-view> can no longer be used directly inside <transition> or <keep-alive>.
Use slot props instead:

<router-view v-slot="{ Component }">
  <${s}>
    <component :is="Component" />
  </${s}>
</router-view>`)}}function Us(e,n){const s=Ne({},e,{matched:e.matched.map(a=>Rb(a,["instances","children","aliasOf"]))});return{_custom:{type:null,readOnly:!0,display:e.fullPath,tooltip:n,value:s}}}function Xa(e){return{_custom:{display:e}}}let Fb=0;function Mb(e,n,s){if(n.__hasDevtools)return;n.__hasDevtools=!0;const a=Fb++;x0({id:"org.vuejs.router"+(a?"."+a:""),label:"Vue Router",packageName:"vue-router",homepage:"https://router.vuejs.org",logo:"https://router.vuejs.org/logo.png",componentStateTypes:["Routing"],app:e},r=>{typeof r.now!="function"&&console.warn("[Vue Router]: You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html."),r.on.inspectComponent((d,f)=>{d.instanceData&&d.instanceData.state.push({type:"Routing",key:"$route",editable:!1,value:Us(n.currentRoute.value,"Current Route")})}),r.on.visitComponentTree(({treeNode:d,componentInstance:f})=>{if(f.__vrv_devtools){const h=f.__vrv_devtools;d.tags.push({label:(h.name?`${h.name.toString()}: `:"")+h.path,textColor:0,tooltip:"This component is rendered by &lt;router-view&gt;",backgroundColor:Kd})}On(f.__vrl_devtools)&&(f.__devtoolsApi=r,f.__vrl_devtools.forEach(h=>{let m=Jd,g="";h.isExactActive?(m=Yd,g="This is exactly active"):h.isActive&&(m=Zd,g="This link is active"),d.tags.push({label:h.route.path,textColor:0,tooltip:g,backgroundColor:m})}))}),we(n.currentRoute,()=>{u(),r.notifyComponentUpdate(),r.sendInspectorTree(c),r.sendInspectorState(c)});const i="router:navigations:"+a;r.addTimelineLayer({id:i,label:`Router${a?" "+a:""} Navigations`,color:4237508}),n.onError((d,f)=>{r.addTimelineEvent({layerId:i,event:{title:"Error during Navigation",subtitle:f.fullPath,logType:"error",time:r.now(),data:{error:d},groupId:f.meta.__navigationId}})});let l=0;n.beforeEach((d,f)=>{const h={guard:Xa("beforeEach"),from:Us(f,"Current Location during this navigation"),to:Us(d,"Target location")};Object.defineProperty(d.meta,"__navigationId",{value:l++}),r.addTimelineEvent({layerId:i,event:{time:r.now(),title:"Start of navigation",subtitle:d.fullPath,data:h,groupId:d.meta.__navigationId}})}),n.afterEach((d,f,h)=>{const m={guard:Xa("afterEach")};h?(m.failure={_custom:{type:Error,readOnly:!0,display:h?h.message:"",tooltip:"Navigation Failure",value:h}},m.status=Xa("❌")):m.status=Xa("✅"),m.from=Us(f,"Current Location during this navigation"),m.to=Us(d,"Target location"),r.addTimelineEvent({layerId:i,event:{title:"End of navigation",subtitle:d.fullPath,time:r.now(),data:m,logType:h?"warning":"default",groupId:d.meta.__navigationId}})});const c="router-inspector:"+a;r.addInspector({id:c,label:"Routes"+(a?" "+a:""),icon:"book",treeFilterPlaceholder:"Search routes"});function u(){if(!p)return;const d=p;let f=s.getRoutes().filter(h=>!h.parent);f.forEach(ef),d.filter&&(f=f.filter(h=>fi(h,d.filter.toLowerCase()))),f.forEach(h=>Xd(h,n.currentRoute.value)),d.rootNodes=f.map(Qd)}let p;r.on.getInspectorTree(d=>{p=d,d.app===e&&d.inspectorId===c&&u()}),r.on.getInspectorState(d=>{if(d.app===e&&d.inspectorId===c){const h=s.getRoutes().find(m=>m.record.__vd_id===d.nodeId);h&&(d.state={options:Ib(h)})}}),r.sendInspectorTree(c),r.sendInspectorState(c)})}function Nb(e){return e.optional?e.repeatable?"*":"?":e.repeatable?"+":""}function Ib(e){const{record:n}=e,s=[{editable:!1,key:"path",value:n.path}];return n.name!=null&&s.push({editable:!1,key:"name",value:n.name}),s.push({editable:!1,key:"regexp",value:e.re}),e.keys.length&&s.push({editable:!1,key:"keys",value:{_custom:{type:null,readOnly:!0,display:e.keys.map(a=>`${a.name}${Nb(a)}`).join(" "),tooltip:"Param keys",value:e.keys}}}),n.redirect!=null&&s.push({editable:!1,key:"redirect",value:n.redirect}),e.alias.length&&s.push({editable:!1,key:"aliases",value:e.alias.map(a=>a.record.path)}),Object.keys(e.record.meta).length&&s.push({editable:!1,key:"meta",value:e.record.meta}),s.push({key:"score",editable:!1,value:{_custom:{type:null,readOnly:!0,display:e.score.map(a=>a.join(", ")).join(" | "),tooltip:"Score used to sort routes",value:e.score}}}),s}const Kd=15485081,Zd=2450411,Yd=8702998,Db=2282478,Jd=16486972,Lb=6710886;function Qd(e){const n=[],{record:s}=e;s.name!=null&&n.push({label:String(s.name),textColor:0,backgroundColor:Db}),s.aliasOf&&n.push({label:"alias",textColor:0,backgroundColor:Jd}),e.__vd_match&&n.push({label:"matches",textColor:0,backgroundColor:Kd}),e.__vd_exactActive&&n.push({label:"exact",textColor:0,backgroundColor:Yd}),e.__vd_active&&n.push({label:"active",textColor:0,backgroundColor:Zd}),s.redirect&&n.push({label:typeof s.redirect=="string"?`redirect: ${s.redirect}`:"redirects",textColor:16777215,backgroundColor:Lb});let a=s.__vd_id;return a==null&&(a=String(jb++),s.__vd_id=a),{id:a,label:s.path,tags:n,children:e.children.map(Qd)}}let jb=0;const qb=/^\/(.*)\/([a-z]*)$/;function Xd(e,n){const s=n.matched.length&&Dt(n.matched[n.matched.length-1],e.record);e.__vd_exactActive=e.__vd_active=s,s||(e.__vd_active=n.matched.some(a=>Dt(a,e.record))),e.children.forEach(a=>Xd(a,n))}function ef(e){e.__vd_match=!1,e.children.forEach(ef)}function fi(e,n){const s=String(e.re).match(qb);if(e.__vd_match=!1,!s||s.length<3)return!1;if(new RegExp(s[1].replace(/\$$/,""),s[2]).test(n))return e.children.forEach(l=>fi(l,n)),e.record.path!=="/"||n==="/"?(e.__vd_match=e.re.test(n),!0):!1;const r=e.record.path.toLowerCase(),i=wa(r);return!n.startsWith("/")&&(i.includes(n)||r.includes(n))||i.startsWith(n)||r.startsWith(n)||e.record.name&&String(e.record.name).includes(n)?!0:e.children.some(l=>fi(l,n))}function Rb(e,n){const s={};for(const a in e)n.includes(a)||(s[a]=e[a]);return s}function Bb(e){const n=eb(e.routes,e),s=e.parseQuery||vb,a=e.stringifyQuery||eu,r=e.history;if(!r)throw new Error('Provide the "history" option when calling "createRouter()": https://next.router.vuejs.org/api/#history.');const i=Hs(),l=Hs(),c=Hs(),u=et(_t);let p=_t;ot&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const d=yo.bind(null,D=>""+D),f=yo.bind(null,bb),h=yo.bind(null,wa);function m(D,te){let J,re;return qd(D)?(J=n.getRecordMatcher(D),re=te):re=D,n.addRoute(re,J)}function g(D){const te=n.getRecordMatcher(D);te?n.removeRoute(te):Te(`Cannot remove non-existent route "${String(D)}"`)}function b(){return n.getRoutes().map(D=>D.record)}function y(D){return!!n.getRecordMatcher(D)}function O(D,te){if(te=Ne({},te||u.value),typeof D=="string"){const he=wo(s,D,te.path),_=n.resolve({path:he.path},te),v=r.createHref(he.fullPath);return v.startsWith("//")?Te(`Location "${D}" resolved to "${v}". A resolved location cannot start with multiple slashes.`):_.matched.length||Te(`No match found for location with path "${D}"`),Ne(he,_,{params:h(_.params),hash:wa(he.hash),redirectedFrom:void 0,href:v})}let J;if("path"in D)"params"in D&&!("name"in D)&&Object.keys(D.params).length&&Te(`Path "${D.path}" was passed with params but they will be ignored. Use a named route alongside params instead.`),J=Ne({},D,{path:wo(s,D.path,te.path).path});else{const he=Ne({},D.params);for(const _ in he)he[_]==null&&delete he[_];J=Ne({},D,{params:f(D.params)}),te.params=f(te.params)}const re=n.resolve(J,te),xe=D.hash||"";xe&&!xe.startsWith("#")&&Te(`A \`hash\` should always start with the character "#". Replace "${xe}" with "#${xe}".`),re.params=d(h(re.params));const Pe=P0(a,Ne({},D,{hash:gb(xe),path:re.path})),_e=r.createHref(Pe);return _e.startsWith("//")?Te(`Location "${D}" resolved to "${_e}". A resolved location cannot start with multiple slashes.`):re.matched.length||Te(`No match found for location with path "${"path"in D?D.path:D}"`),Ne({fullPath:Pe,hash:xe,query:a===eu?yb(D.query):D.query||{}},re,{redirectedFrom:void 0,href:_e})}function x(D){return typeof D=="string"?wo(s,D,u.value.path):Ne({},D)}function E(D,te){if(p!==D)return Fs(8,{from:te,to:D})}function A(D){return Y(D)}function R(D){return A(Ne(x(D),{replace:!0}))}function W(D){const te=D.matched[D.matched.length-1];if(te&&te.redirect){const{redirect:J}=te;let re=typeof J=="function"?J(D):J;if(typeof re=="string"&&(re=re.includes("?")||re.includes("#")?re=x(re):{path:re},re.params={}),!("path"in re)&&!("name"in re))throw Te(`Invalid redirect found:
${JSON.stringify(re,null,2)}
 when navigating to "${D.fullPath}". A redirect must contain a name or path. This will break in production.`),new Error("Invalid redirect");return Ne({query:D.query,hash:D.hash,params:"path"in re?{}:D.params},re)}}function Y(D,te){const J=p=O(D),re=u.value,xe=D.state,Pe=D.force,_e=D.replace===!0,he=W(J);if(he)return Y(Ne(x(he),{state:typeof he=="object"?Ne({},xe,he.state):xe,force:Pe,replace:_e}),te||J);const _=J;_.redirectedFrom=te;let v;return!Pe&&Wc(a,re,J)&&(v=Fs(16,{to:_,from:re}),Le(re,re,!0,!1)),(v?Promise.resolve(v):K(_,re)).catch(F=>nt(F)?nt(F,2)?F:ye(F):ne(F,_,re)).then(F=>{if(F){if(nt(F,2))return Wc(a,O(F.to),_)&&te&&(te._count=te._count?te._count+1:1)>10?(Te(`Detected an infinite redirection in a navigation guard when going from "${re.fullPath}" to "${_.fullPath}". Aborting to avoid a Stack Overflow. This will break in production if not fixed.`),Promise.reject(new Error("Infinite redirect in navigation guard"))):Y(Ne({replace:_e},x(F.to),{state:typeof F.to=="object"?Ne({},xe,F.to.state):xe,force:Pe}),te||_)}else F=fe(_,re,!0,_e,xe);return ae(_,re,F),F})}function j(D,te){const J=E(D,te);return J?Promise.reject(J):Promise.resolve()}function K(D,te){let J;const[re,xe,Pe]=Vb(D,te);J=xo(re.reverse(),"beforeRouteLeave",D,te);for(const he of re)he.leaveGuards.forEach(_=>{J.push(yt(_,D,te))});const _e=j.bind(null,D,te);return J.push(_e),ms(J).then(()=>{J=[];for(const he of i.list())J.push(yt(he,D,te));return J.push(_e),ms(J)}).then(()=>{J=xo(xe,"beforeRouteUpdate",D,te);for(const he of xe)he.updateGuards.forEach(_=>{J.push(yt(_,D,te))});return J.push(_e),ms(J)}).then(()=>{J=[];for(const he of D.matched)if(he.beforeEnter&&!te.matched.includes(he))if(On(he.beforeEnter))for(const _ of he.beforeEnter)J.push(yt(_,D,te));else J.push(yt(he.beforeEnter,D,te));return J.push(_e),ms(J)}).then(()=>(D.matched.forEach(he=>he.enterCallbacks={}),J=xo(Pe,"beforeRouteEnter",D,te),J.push(_e),ms(J))).then(()=>{J=[];for(const he of l.list())J.push(yt(he,D,te));return J.push(_e),ms(J)}).catch(he=>nt(he,8)?he:Promise.reject(he))}function ae(D,te,J){for(const re of c.list())re(D,te,J)}function fe(D,te,J,re,xe){const Pe=E(D,te);if(Pe)return Pe;const _e=te===_t,he=ot?history.state:{};J&&(re||_e?r.replace(D.fullPath,Ne({scroll:_e&&he&&he.scroll},xe)):r.push(D.fullPath,xe)),u.value=D,Le(D,te,J,_e),ye()}let X;function de(){X||(X=r.listen((D,te,J)=>{if(!ht.listening)return;const re=O(D),xe=W(re);if(xe){Y(Ne(xe,{replace:!0}),re).catch(ra);return}p=re;const Pe=u.value;ot&&I0(Uc(Pe.fullPath,J.delta),Qr()),K(re,Pe).catch(_e=>nt(_e,12)?_e:nt(_e,2)?(Y(_e.to,re).then(he=>{nt(he,20)&&!J.delta&&J.type===ya.pop&&r.go(-1,!1)}).catch(ra),Promise.reject()):(J.delta&&r.go(-J.delta,!1),ne(_e,re,Pe))).then(_e=>{_e=_e||fe(re,Pe,!1),_e&&(J.delta&&!nt(_e,8)?r.go(-J.delta,!1):J.type===ya.pop&&nt(_e,20)&&r.go(-1,!1)),ae(re,Pe,_e)}).catch(ra)}))}let De=Hs(),Ke=Hs(),Re;function ne(D,te,J){ye(D);const re=Ke.list();return re.length?re.forEach(xe=>xe(D,te,J)):(Te("uncaught error during route navigation:"),console.error(D)),Promise.reject(D)}function pe(){return Re&&u.value!==_t?Promise.resolve():new Promise((D,te)=>{De.add([D,te])})}function ye(D){return Re||(Re=!D,de(),De.list().forEach(([te,J])=>D?J(D):te()),De.reset()),D}function Le(D,te,J,re){const{scrollBehavior:xe}=e;if(!ot||!xe)return Promise.resolve();const Pe=!J&&D0(Uc(D.fullPath,0))||(re||!J)&&history.state&&history.state.scroll||null;return nn().then(()=>xe(D,te,Pe)).then(_e=>_e&&N0(_e)).catch(_e=>ne(_e,D,te))}const yn=D=>r.go(D);let sn;const mn=new Set,ht={currentRoute:u,listening:!0,addRoute:m,removeRoute:g,hasRoute:y,getRoutes:b,resolve:O,options:e,push:A,replace:R,go:yn,back:()=>yn(-1),forward:()=>yn(1),beforeEach:i.add,beforeResolve:l.add,afterEach:c.add,onError:Ke.add,isReady:pe,install(D){const te=this;D.component("RouterLink",$b),D.component("RouterView",Ob),D.config.globalProperties.$router=te,Object.defineProperty(D.config.globalProperties,"$route",{enumerable:!0,get:()=>C(u)}),ot&&!sn&&u.value===_t&&(sn=!0,A(r.location).catch(xe=>{Te("Unexpected error when starting the router:",xe)}));const J={};for(const xe in _t)J[xe]=L(()=>u.value[xe]);D.provide(il,te),D.provide(Gd,ze(J)),D.provide(di,u);const re=D.unmount;mn.add(D),D.unmount=function(){mn.delete(D),mn.size<1&&(p=_t,X&&X(),X=null,u.value=_t,sn=!1,Re=!1),re()},ot&&Mb(D,te,n)}};return ht}function ms(e){return e.reduce((n,s)=>n.then(()=>s()),Promise.resolve())}function Vb(e,n){const s=[],a=[],r=[],i=Math.max(n.matched.length,e.matched.length);for(let l=0;l<i;l++){const c=n.matched[l];c&&(e.matched.find(p=>Dt(p,c))?a.push(c):s.push(c));const u=e.matched[l];u&&(n.matched.find(p=>Dt(p,u))||r.push(u))}return[s,a,r]}const So=se(!1),ia=se(!1),ws=se(!1),zb=se(!0),hi=Ik({xs:460,...Ok}),as=m0(),nf=l0(),Wb=L(()=>as.height.value-as.width.value/Ct>180),tf=r0(ft?document.body:null),Ts=Ck(),Hb=L(()=>{var e,n;return["INPUT","TEXTAREA"].includes(((e=Ts.value)==null?void 0:e.tagName)||"")||((n=Ts.value)==null?void 0:n.classList.contains("CodeMirror-code"))}),Ub=L(()=>{var e;return["BUTTON","A"].includes(((e=Ts.value)==null?void 0:e.tagName)||"")});Un("slidev-camera","default");Un("slidev-mic","default");const lr=Un("slidev-scale",0),cn=Un("slidev-show-overview",!1),Eo=Un("slidev-presenter-cursor",!0),ou=Un("slidev-show-editor",!1);Un("slidev-editor-width",ft?window.innerWidth*.4:100);const sf=Md(cn);function iu(e,n,s,a=r=>r){return e*a(.5-n*(.5-s))}function Gb(e){return[-e[0],-e[1]]}function Vn(e,n){return[e[0]+n[0],e[1]+n[1]]}function Nn(e,n){return[e[0]-n[0],e[1]-n[1]]}function Bn(e,n){return[e[0]*n,e[1]*n]}function Kb(e,n){return[e[0]/n,e[1]/n]}function Gs(e){return[e[1],-e[0]]}function lu(e,n){return e[0]*n[0]+e[1]*n[1]}function Zb(e,n){return e[0]===n[0]&&e[1]===n[1]}function Yb(e){return Math.hypot(e[0],e[1])}function Jb(e){return e[0]*e[0]+e[1]*e[1]}function cu(e,n){return Jb(Nn(e,n))}function af(e){return Kb(e,Yb(e))}function Qb(e,n){return Math.hypot(e[1]-n[1],e[0]-n[0])}function Ks(e,n,s){let a=Math.sin(s),r=Math.cos(s),i=e[0]-n[0],l=e[1]-n[1],c=i*r-l*a,u=i*a+l*r;return[c+n[0],u+n[1]]}function mi(e,n,s){return Vn(e,Bn(Nn(n,e),s))}function uu(e,n,s){return Vn(e,Bn(n,s))}var{min:gs,PI:Xb}=Math,pu=.275,Zs=Xb+1e-4;function ev(e,n={}){let{size:s=16,smoothing:a=.5,thinning:r=.5,simulatePressure:i=!0,easing:l=ne=>ne,start:c={},end:u={},last:p=!1}=n,{cap:d=!0,easing:f=ne=>ne*(2-ne)}=c,{cap:h=!0,easing:m=ne=>--ne*ne*ne+1}=u;if(e.length===0||s<=0)return[];let g=e[e.length-1].runningLength,b=c.taper===!1?0:c.taper===!0?Math.max(s,g):c.taper,y=u.taper===!1?0:u.taper===!0?Math.max(s,g):u.taper,O=Math.pow(s*a,2),x=[],E=[],A=e.slice(0,10).reduce((ne,pe)=>{let ye=pe.pressure;if(i){let Le=gs(1,pe.distance/s),yn=gs(1,1-Le);ye=gs(1,ne+(yn-ne)*(Le*pu))}return(ne+ye)/2},e[0].pressure),R=iu(s,r,e[e.length-1].pressure,l),W,Y=e[0].vector,j=e[0].point,K=j,ae=j,fe=K,X=!1;for(let ne=0;ne<e.length;ne++){let{pressure:pe}=e[ne],{point:ye,vector:Le,distance:yn,runningLength:sn}=e[ne];if(ne<e.length-1&&g-sn<3)continue;if(r){if(i){let Pe=gs(1,yn/s),_e=gs(1,1-Pe);pe=gs(1,A+(_e-A)*(Pe*pu))}R=iu(s,r,pe,l)}else R=s/2;W===void 0&&(W=R);let mn=sn<b?f(sn/b):1,ht=g-sn<y?m((g-sn)/y):1;R=Math.max(.01,R*Math.min(mn,ht));let D=(ne<e.length-1?e[ne+1]:e[ne]).vector,te=ne<e.length-1?lu(Le,D):1,J=lu(Le,Y)<0&&!X,re=te!==null&&te<0;if(J||re){let Pe=Bn(Gs(Y),R);for(let _e=1/13,he=0;he<=1;he+=_e)ae=Ks(Nn(ye,Pe),ye,Zs*he),x.push(ae),fe=Ks(Vn(ye,Pe),ye,Zs*-he),E.push(fe);j=ae,K=fe,re&&(X=!0);continue}if(X=!1,ne===e.length-1){let Pe=Bn(Gs(Le),R);x.push(Nn(ye,Pe)),E.push(Vn(ye,Pe));continue}let xe=Bn(Gs(mi(D,Le,te)),R);ae=Nn(ye,xe),(ne<=1||cu(j,ae)>O)&&(x.push(ae),j=ae),fe=Vn(ye,xe),(ne<=1||cu(K,fe)>O)&&(E.push(fe),K=fe),A=pe,Y=Le}let de=e[0].point.slice(0,2),De=e.length>1?e[e.length-1].point.slice(0,2):Vn(e[0].point,[1,1]),Ke=[],Re=[];if(e.length===1){if(!(b||y)||p){let ne=uu(de,af(Gs(Nn(de,De))),-(W||R)),pe=[];for(let ye=1/13,Le=ye;Le<=1;Le+=ye)pe.push(Ks(ne,de,Zs*2*Le));return pe}}else{if(!(b||y&&e.length===1))if(d)for(let pe=1/13,ye=pe;ye<=1;ye+=pe){let Le=Ks(E[0],de,Zs*ye);Ke.push(Le)}else{let pe=Nn(x[0],E[0]),ye=Bn(pe,.5),Le=Bn(pe,.51);Ke.push(Nn(de,ye),Nn(de,Le),Vn(de,Le),Vn(de,ye))}let ne=Gs(Gb(e[e.length-1].vector));if(y||b&&e.length===1)Re.push(De);else if(h){let pe=uu(De,ne,R);for(let ye=1/29,Le=ye;Le<1;Le+=ye)Re.push(Ks(pe,De,Zs*3*Le))}else Re.push(Vn(De,Bn(ne,R)),Vn(De,Bn(ne,R*.99)),Nn(De,Bn(ne,R*.99)),Nn(De,Bn(ne,R)))}return x.concat(Re,E.reverse(),Ke)}function nv(e,n={}){var s;let{streamline:a=.5,size:r=16,last:i=!1}=n;if(e.length===0)return[];let l=.15+(1-a)*.85,c=Array.isArray(e[0])?e:e.map(({x:m,y:g,pressure:b=.5})=>[m,g,b]);if(c.length===2){let m=c[1];c=c.slice(0,-1);for(let g=1;g<5;g++)c.push(mi(c[0],m,g/4))}c.length===1&&(c=[...c,[...Vn(c[0],[1,1]),...c[0].slice(2)]]);let u=[{point:[c[0][0],c[0][1]],pressure:c[0][2]>=0?c[0][2]:.25,vector:[1,1],distance:0,runningLength:0}],p=!1,d=0,f=u[0],h=c.length-1;for(let m=1;m<c.length;m++){let g=i&&m===h?c[m].slice(0,2):mi(f.point,c[m],l);if(Zb(f.point,g))continue;let b=Qb(g,f.point);if(d+=b,m<h&&!p){if(d<r)continue;p=!0}f={point:g,pressure:c[m][2]>=0?c[m][2]:.5,vector:af(Nn(f.point,g)),distance:b,runningLength:d},u.push(f)}return u[0].vector=((s=u[1])==null?void 0:s.vector)||[0,0],u}function tv(e,n={}){return ev(nv(e,n),n)}var sv=()=>({events:{},emit(e,...n){let s=this.events[e]||[];for(let a=0,r=s.length;a<r;a++)s[a](...n)},on(e,n){var s;return(s=this.events[e])!=null&&s.push(n)||(this.events[e]=[n]),()=>{var a;this.events[e]=(a=this.events[e])==null?void 0:a.filter(r=>n!==r)}}});function Or(e,n){return e-n}function av(e){return e<0?-1:1}function Ar(e){return[Math.abs(e),av(e)]}function rf(){const e=()=>((1+Math.random())*65536|0).toString(16).substring(1);return`${e()+e()}-${e()}-${e()}-${e()}-${e()}${e()}${e()}`}var rv=2,it=rv,Ds=class{constructor(e){this.drauu=e,this.event=void 0,this.point=void 0,this.start=void 0,this.el=null}onSelected(e){}onUnselected(){}onStart(e){}onMove(e){return!1}onEnd(e){}get brush(){return this.drauu.brush}get shiftPressed(){return this.drauu.shiftPressed}get altPressed(){return this.drauu.altPressed}get svgElement(){return this.drauu.el}getMousePosition(e){var n;const s=this.drauu.el,a=this.drauu.options.coordinateScale??1;if(this.drauu.options.coordinateTransform===!1){const r=this.drauu.el.getBoundingClientRect();return{x:(e.pageX-r.left)*a,y:(e.pageY-r.top)*a,pressure:e.pressure}}else{const r=this.drauu.svgPoint;r.x=e.clientX,r.y=e.clientY;const i=r.matrixTransform((n=s.getScreenCTM())==null?void 0:n.inverse());return{x:i.x*a,y:i.y*a,pressure:e.pressure}}}createElement(e,n){const s=document.createElementNS("http://www.w3.org/2000/svg",e),a=n?{...this.brush,...n}:this.brush;return s.setAttribute("fill",a.fill??"transparent"),s.setAttribute("stroke",a.color),s.setAttribute("stroke-width",a.size.toString()),s.setAttribute("stroke-linecap","round"),a.dasharray&&s.setAttribute("stroke-dasharray",a.dasharray),s}attr(e,n){this.el.setAttribute(e,typeof n=="string"?n:n.toFixed(it))}_setEvent(e){this.event=e,this.point=this.getMousePosition(e)}_eventDown(e){return this._setEvent(e),this.start=this.point,this.onStart(this.point)}_eventMove(e){return this._setEvent(e),this.onMove(this.point)}_eventUp(e){return this._setEvent(e),this.onEnd(this.point)}},ov=class extends Ds{constructor(){super(...arguments),this.points=[]}onStart(e){return this.el=document.createElementNS("http://www.w3.org/2000/svg","path"),this.points=[e],this.attr("fill",this.brush.color),this.attr("d",this.getSvgData(this.points)),this.el}onMove(e){return this.el||this.onStart(e),this.points[this.points.length-1]!==e&&this.points.push(e),this.attr("d",this.getSvgData(this.points)),!0}onEnd(){const e=this.el;return this.el=null,!!e}getSvgData(e){const n=tv(e,{size:this.brush.size*2,thinning:.9,simulatePressure:!1,start:{taper:5},end:{taper:5},...this.brush.stylusOptions});if(!n.length)return"";const s=n.reduce((a,[r,i],l,c)=>{const[u,p]=c[(l+1)%c.length];return a.push(r,i,(r+u)/2,(i+p)/2),a},["M",...n[0],"Q"]);return s.push("Z"),s.map(a=>typeof a=="number"?a.toFixed(2):a).join(" ")}},iv=class extends Ds{onStart(e){return this.el=this.createElement("ellipse"),this.attr("cx",e.x),this.attr("cy",e.y),this.el}onMove(e){if(!this.el||!this.start)return!1;let[n,s]=Ar(e.x-this.start.x),[a,r]=Ar(e.y-this.start.y);if(this.shiftPressed){const i=Math.min(n,a);n=i,a=i}if(this.altPressed)this.attr("cx",this.start.x),this.attr("cy",this.start.y),this.attr("rx",n),this.attr("ry",a);else{const[i,l]=[this.start.x,this.start.x+n*s].sort(Or),[c,u]=[this.start.y,this.start.y+a*r].sort(Or);this.attr("cx",(i+l)/2),this.attr("cy",(c+u)/2),this.attr("rx",(l-i)/2),this.attr("ry",(u-c)/2)}return!0}onEnd(){const e=this.el;return this.el=null,!(!e||!e.getTotalLength())}};function of(e,n){const s=document.createElementNS("http://www.w3.org/2000/svg","defs"),a=document.createElementNS("http://www.w3.org/2000/svg","marker"),r=document.createElementNS("http://www.w3.org/2000/svg","path");return r.setAttribute("fill",n),a.setAttribute("id",e),a.setAttribute("viewBox","0 -5 10 10"),a.setAttribute("refX","5"),a.setAttribute("refY","0"),a.setAttribute("markerWidth","4"),a.setAttribute("markerHeight","4"),a.setAttribute("orient","auto"),r.setAttribute("d","M0,-5L10,0L0,5"),a.appendChild(r),s.appendChild(a),s}var lv=class extends Ds{onStart(e){if(this.el=this.createElement("line",{fill:"transparent"}),this.attr("x1",e.x),this.attr("y1",e.y),this.attr("x2",e.x),this.attr("y2",e.y),this.brush.arrowEnd){const n=rf(),s=document.createElementNS("http://www.w3.org/2000/svg","g");return s.append(of(n,this.brush.color)),s.append(this.el),this.attr("marker-end",`url(#${n})`),s}return this.el}onMove(e){if(!this.el)return!1;let{x:n,y:s}=e;if(this.shiftPressed){const a=e.x-this.start.x,r=e.y-this.start.y;if(r!==0){let i=a/r;i=Math.round(i),Math.abs(i)<=1?(n=this.start.x+r*i,s=this.start.y+r):(n=this.start.x+a,s=this.start.y)}}return this.altPressed?(this.attr("x1",this.start.x*2-n),this.attr("y1",this.start.y*2-s),this.attr("x2",n),this.attr("y2",s)):(this.attr("x1",this.start.x),this.attr("y1",this.start.y),this.attr("x2",n),this.attr("y2",s)),!0}onEnd(){const e=this.el;return this.el=null,!(!e||e.getTotalLength()<5)}},cv=class extends Ds{onStart(e){return this.el=this.createElement("rect"),this.brush.cornerRadius&&(this.attr("rx",this.brush.cornerRadius),this.attr("ry",this.brush.cornerRadius)),this.attr("x",e.x),this.attr("y",e.y),this.el}onMove(e){if(!this.el||!this.start)return!1;let[n,s]=Ar(e.x-this.start.x),[a,r]=Ar(e.y-this.start.y);if(this.shiftPressed){const i=Math.min(n,a);n=i,a=i}if(this.altPressed)this.attr("x",this.start.x-n),this.attr("y",this.start.y-a),this.attr("width",n*2),this.attr("height",a*2);else{const[i,l]=[this.start.x,this.start.x+n*s].sort(Or),[c,u]=[this.start.y,this.start.y+a*r].sort(Or);this.attr("x",i),this.attr("y",c),this.attr("width",l-i),this.attr("height",u-c)}return!0}onEnd(){const e=this.el;return this.el=null,!(!e||!e.getTotalLength())}};function uv(e,n){const s=e.x-n.x,a=e.y-n.y;return s*s+a*a}function pv(e,n,s){let a=n.x,r=n.y,i=s.x-a,l=s.y-r;if(i!==0||l!==0){const c=((e.x-a)*i+(e.y-r)*l)/(i*i+l*l);c>1?(a=s.x,r=s.y):c>0&&(a+=i*c,r+=l*c)}return i=e.x-a,l=e.y-r,i*i+l*l}function dv(e,n){let s=e[0];const a=[s];let r;for(let i=1,l=e.length;i<l;i++)r=e[i],uv(r,s)>n&&(a.push(r),s=r);return s!==r&&r&&a.push(r),a}function gi(e,n,s,a,r){let i=a,l=0;for(let c=n+1;c<s;c++){const u=pv(e[c],e[n],e[s]);u>i&&(l=c,i=u)}i>a&&(l-n>1&&gi(e,n,l,a,r),r.push(e[l]),s-l>1&&gi(e,l,s,a,r))}function fv(e,n){const s=e.length-1,a=[e[0]];return gi(e,0,s,n,a),a.push(e[s]),a}function du(e,n,s=!1){if(e.length<=2)return e;const a=n!==void 0?n*n:1;return e=s?e:dv(e,a),e=fv(e,a),e}var hv=class extends Ds{constructor(){super(...arguments),this.points=[],this.count=0}onStart(e){if(this.el=this.createElement("path",{fill:"transparent"}),this.points=[e],this.brush.arrowEnd){this.arrowId=rf();const n=of(this.arrowId,this.brush.color);this.el.appendChild(n)}return this.el}onMove(e){return this.el||this.onStart(e),this.points[this.points.length-1]!==e&&(this.points.push(e),this.count+=1),this.count>5&&(this.points=du(this.points,1,!0),this.count=0),this.attr("d",hu(this.points)),!0}onEnd(){const e=this.el;return this.el=null,!(!e||(e.setAttribute("d",hu(du(this.points,1,!0))),!e.getTotalLength()))}};function mv(e,n){const s=n.x-e.x,a=n.y-e.y;return{length:Math.sqrt(s**2+a**2),angle:Math.atan2(a,s)}}function fu(e,n,s,a){const r=n||e,i=s||e,l=.2,c=mv(r,i),u=c.angle+(a?Math.PI:0),p=c.length*l,d=e.x+Math.cos(u)*p,f=e.y+Math.sin(u)*p;return{x:d,y:f}}function gv(e,n,s){const a=fu(s[n-1],s[n-2],e),r=fu(e,s[n-1],s[n+1],!0);return`C ${a.x.toFixed(it)},${a.y.toFixed(it)} ${r.x.toFixed(it)},${r.y.toFixed(it)} ${e.x.toFixed(it)},${e.y.toFixed(it)}`}function hu(e){return e.reduce((n,s,a,r)=>a===0?`M ${s.x.toFixed(it)},${s.y.toFixed(it)}`:`${n} ${gv(s,a,r)}`,"")}var _v=class extends Ds{constructor(){super(...arguments),this.pathSubFactor=20,this.pathFragments=[]}onSelected(e){const n=(s,a)=>{if(s&&s.length)for(let r=0;r<s.length;r++){const i=s[r];if(i.getTotalLength){const l=i.getTotalLength();for(let c=0;c<this.pathSubFactor;c++){const u=i.getPointAtLength(l*c/this.pathSubFactor),p=i.getPointAtLength(l*(c+1)/this.pathSubFactor);this.pathFragments.push({x1:u.x,x2:p.x,y1:u.y,y2:p.y,segment:c,element:a||i})}}else i.children&&n(i.children,i)}};e&&n(e.children)}onUnselected(){this.pathFragments=[]}onStart(e){this.svgPointPrevious=this.svgElement.createSVGPoint(),this.svgPointPrevious.x=e.x,this.svgPointPrevious.y=e.y}onMove(e){this.svgPointCurrent=this.svgElement.createSVGPoint(),this.svgPointCurrent.x=e.x,this.svgPointCurrent.y=e.y;const n=this.checkAndEraseElement();return this.svgPointPrevious=this.svgPointCurrent,n}onEnd(){return this.svgPointPrevious=void 0,this.svgPointCurrent=void 0,!0}checkAndEraseElement(){const e=[];if(this.pathFragments.length)for(let n=0;n<this.pathFragments.length;n++){const s=this.pathFragments[n],a={x1:this.svgPointPrevious.x,x2:this.svgPointCurrent.x,y1:this.svgPointPrevious.y,y2:this.svgPointCurrent.y};this.lineLineIntersect(s,a)&&(s.element.remove(),e.push(n))}return e.length&&(this.pathFragments=this.pathFragments.filter((n,s)=>!e.includes(s))),e.length>0}lineLineIntersect(e,n){const s=e.x1,a=e.x2,r=n.x1,i=n.x2,l=e.y1,c=e.y2,u=n.y1,p=n.y2,d=(s-a)*(u-p)-(l-c)*(r-i),f=(s*c-l*a)*(r-i)-(s-a)*(r*p-u*i),h=(s*c-l*a)*(u-p)-(l-c)*(r*p-u*i),m=(g,b,y)=>g>=b&&g<=y?!0:g>=y&&g<=b;if(d===0)return!1;{const g={x:f/d,y:h/d};return m(g.x,s,a)&&m(g.y,l,c)&&m(g.x,r,i)&&m(g.y,u,p)}}};function kv(e){return{draw:new hv(e),stylus:new ov(e),line:new lv(e),rectangle:new cv(e),ellipse:new iv(e),eraseLine:new _v(e)}}var bv=class{constructor(e={}){this.options=e,this.el=null,this.svgPoint=null,this.eventEl=null,this.shiftPressed=!1,this.altPressed=!1,this.drawing=!1,this._emitter=sv(),this._models=kv(this),this._undoStack=[],this._disposables=[],this.options.brush||(this.options.brush={color:"black",size:3,mode:"stylus"}),e.el&&this.mount(e.el,e.eventTarget)}get model(){return this._models[this.mode]}get mounted(){return!!this.el}get mode(){return this.options.brush.mode||"stylus"}set mode(e){this._models[this.mode].onUnselected(),this.options.brush.mode=e,this.model.onSelected(this.el)}get brush(){return this.options.brush}set brush(e){this.options.brush=e}resolveSelector(e){return typeof e=="string"?document.querySelector(e):e||null}mount(e,n){if(this.el)throw new Error("[drauu] already mounted, unmount previous target first");if(this.el=this.resolveSelector(e),!this.el)throw new Error("[drauu] target element not found");if(this.el.tagName.toLocaleLowerCase()!=="svg")throw new Error("[drauu] can only mount to a SVG element");if(!this.el.createSVGPoint)throw new Error("[drauu] SVG element must be create by document.createElementNS('http://www.w3.org/2000/svg', 'svg')");this.svgPoint=this.el.createSVGPoint();const s=this.resolveSelector(n)||this.el,a=this.eventStart.bind(this),r=this.eventMove.bind(this),i=this.eventEnd.bind(this),l=this.eventKeyboard.bind(this);s.addEventListener("pointerdown",a,{passive:!1}),window.addEventListener("pointermove",r,{passive:!1}),window.addEventListener("pointerup",i,{passive:!1}),window.addEventListener("pointercancel",i,{passive:!1}),window.addEventListener("keydown",l,!1),window.addEventListener("keyup",l,!1),this._disposables.push(()=>{s.removeEventListener("pointerdown",a),window.removeEventListener("pointermove",r),window.removeEventListener("pointerup",i),window.removeEventListener("pointercancel",i),window.removeEventListener("keydown",l,!1),window.removeEventListener("keyup",l,!1)}),this._emitter.emit("mounted")}unmount(){this._disposables.forEach(e=>e()),this._disposables.length=0,this.el=null,this._emitter.emit("unmounted")}on(e,n){return this._emitter.on(e,n)}undo(){const e=this.el;return e.lastElementChild?(this._undoStack.push(e.lastElementChild.cloneNode(!0)),e.lastElementChild.remove(),this._emitter.emit("changed"),!0):!1}redo(){return this._undoStack.length?(this.el.appendChild(this._undoStack.pop()),this._emitter.emit("changed"),!0):!1}canRedo(){return!!this._undoStack.length}canUndo(){var e;return!!((e=this.el)!=null&&e.lastElementChild)}eventMove(e){!this.acceptsInput(e)||!this.drawing||this.model._eventMove(e)&&(e.stopPropagation(),e.preventDefault(),this._emitter.emit("changed"))}eventStart(e){this.acceptsInput(e)&&(e.stopPropagation(),e.preventDefault(),this._currentNode&&this.cancel(),this.drawing=!0,this._emitter.emit("start"),this._currentNode=this.model._eventDown(e),this._currentNode&&this.mode!=="eraseLine"&&this.el.appendChild(this._currentNode),this._emitter.emit("changed"))}eventEnd(e){if(!this.acceptsInput(e)||!this.drawing)return;const n=this.model._eventUp(e);n?(n instanceof Element&&n!==this._currentNode&&(this._currentNode=n),this.commit()):this.cancel(),this.drawing=!1,this._emitter.emit("end"),this._emitter.emit("changed")}acceptsInput(e){return!this.options.acceptsInputTypes||this.options.acceptsInputTypes.includes(e.pointerType)}eventKeyboard(e){this.shiftPressed===e.shiftKey&&this.altPressed===e.altKey||(this.shiftPressed=e.shiftKey,this.altPressed=e.altKey,this.model.point&&this.model.onMove(this.model.point)&&this._emitter.emit("changed"))}commit(){this._undoStack.length=0;const e=this._currentNode;this._currentNode=void 0,this._emitter.emit("committed",e)}clear(){this._undoStack.length=0,this.cancel(),this.el.innerHTML="",this._emitter.emit("changed")}cancel(){this._currentNode&&(this.el.removeChild(this._currentNode),this._currentNode=void 0,this._emitter.emit("canceled"))}dump(){return this.el.innerHTML}load(e){this.clear(),this.el.innerHTML=e}};function vv(e){return new bv(e)}const _i=["#ff595e","#ffca3a","#8ac926","#1982c4","#6a4c93","#ffffff","#000000"],Qn=Un("slidev-drawing-enabled",!1),nI=Un("slidev-drawing-pinned",!1),yv=se(!1),wv=se(!1),xv=se(!1),xa=se(!1),Yt=tk(Un("slidev-drawing-brush",{color:_i[0],size:4,mode:"stylus"})),mu=se("stylus"),lf=L(()=>Ce.drawings.syncAll||_n.value);let Sa=!1;const Ys=L({get(){return mu.value},set(e){mu.value=e,e==="arrow"?(Yt.mode="line",Yt.arrowEnd=!0):(Yt.mode=e,Yt.arrowEnd=!1)}}),Sv=ze({brush:Yt,acceptsInputTypes:L(()=>Qn.value&&(!Ce.drawings.presenterOnly||_n.value)?void 0:["pen"]),coordinateTransform:!1}),fn=Br(vv(Sv));function Ev(){fn.clear(),lf.value&&Td(Ge.value,"")}function ll(){var e;wv.value=fn.canRedo(),yv.value=fn.canUndo(),xv.value=!!((e=fn.el)!=null&&e.children.length)}function $v(e){Sa=!0;const n=Pr[e||Ge.value];n!=null?fn.load(n):fn.clear(),ll(),Sa=!1}fn.on("changed",()=>{if(ll(),!Sa){const e=fn.dump(),n=Ge.value;(Pr[n]||"")!==e&&lf.value&&Td(n,fn.dump())}});z1(e=>{Sa=!0,e[Ge.value]!=null&&fn.load(e[Ge.value]||""),Sa=!1,ll()});nn(()=>{we(Ge,()=>{fn.mounted&&$v()},{immediate:!0})});fn.on("start",()=>xa.value=!0);fn.on("end",()=>xa.value=!1);window.addEventListener("keydown",e=>{if(!Qn.value)return;const n=!e.ctrlKey&&!e.altKey&&!e.shiftKey&&!e.metaKey;let s=!0;e.code==="KeyZ"&&(e.ctrlKey||e.metaKey)?e.shiftKey?fn.redo():fn.undo():e.code==="Escape"?Qn.value=!1:e.code==="KeyL"&&n?Ys.value="line":e.code==="KeyA"&&n?Ys.value="arrow":e.code==="KeyS"&&n?Ys.value="stylus":e.code==="KeyR"&&n?Ys.value="rectangle":e.code==="KeyE"&&n?Ys.value="ellipse":e.code==="KeyC"&&n?Ev():e.code.startsWith("Digit")&&n&&+e.code[5]<=_i.length?Yt.color=_i[+e.code[5]-1]:s=!1,s&&(e.preventDefault(),e.stopPropagation())},!1);function Je(...e){return L(()=>e.every(n=>dn(n)))}function xn(e){return L(()=>!dn(e))}const gu=Uk(),$o=Un("slidev-color-schema","auto"),ki=L(()=>Ce.colorSchema!=="auto"),cl=L({get(){return ki.value?Ce.colorSchema==="dark":$o.value==="auto"?gu.value:$o.value==="dark"},set(e){ki.value||($o.value=e===gu.value?"auto":e?"dark":"light")}}),cf=Md(cl);ft&&we(cl,e=>{const n=document.querySelector("html");n.classList.toggle("dark",e),n.classList.toggle("light",!e)},{immediate:!0});const cr=se(1),ur=L(()=>Ye.length-1),Cn=se(0),ul=se(0);function Pv(){Cn.value>cr.value&&(Cn.value-=1)}function Tv(){Cn.value<ur.value&&(Cn.value+=1)}function Cv(){if(Cn.value>cr.value){let e=Cn.value-ul.value;e<cr.value&&(e=cr.value),Cn.value=e}}function Ov(){if(Cn.value<ur.value){let e=Cn.value+ul.value;e>ur.value&&(e=ur.value),Cn.value=e}}function Av(){const{escape:e,space:n,shift:s,left:a,right:r,up:i,down:l,enter:c,d:u,g:p,o:d}=nf;let f=[{name:"next_space",key:Je(n,xn(s)),fn:At,autoRepeat:!0},{name:"prev_space",key:Je(n,s),fn:Ft,autoRepeat:!0},{name:"next_right",key:Je(r,xn(s),xn(cn)),fn:At,autoRepeat:!0},{name:"prev_left",key:Je(a,xn(s),xn(cn)),fn:Ft,autoRepeat:!0},{name:"next_page_key",key:"pageDown",fn:At,autoRepeat:!0},{name:"prev_page_key",key:"pageUp",fn:Ft,autoRepeat:!0},{name:"next_down",key:Je(l,xn(cn)),fn:$a,autoRepeat:!0},{name:"prev_up",key:Je(i,xn(cn)),fn:()=>Pa(!1),autoRepeat:!0},{name:"next_shift",key:Je(r,s),fn:$a,autoRepeat:!0},{name:"prev_shift",key:Je(a,s),fn:()=>Pa(!1),autoRepeat:!0},{name:"toggle_dark",key:Je(u,xn(Qn)),fn:cf},{name:"toggle_overview",key:Je(d,xn(Qn)),fn:sf},{name:"hide_overview",key:Je(e,xn(Qn)),fn:()=>cn.value=!1},{name:"goto",key:Je(p,xn(Qn)),fn:()=>ws.value=!ws.value},{name:"next_overview",key:Je(r,cn),fn:Tv},{name:"prev_overview",key:Je(a,cn),fn:Pv},{name:"up_overview",key:Je(i,cn),fn:Cv},{name:"down_overview",key:Je(l,cn),fn:Ov},{name:"goto_from_overview",key:Je(c,cn),fn:()=>{Ns(Cn.value),cn.value=!1}}];const h=new Set(f.map(g=>g.name));if(f.filter(g=>g.name&&h.has(g.name)).length===0){const g=["========== WARNING ==========","defineShortcutsSetup did not return any of the base shortcuts.","See https://sli.dev/custom/config-shortcuts.html for migration.",'If it is intentional, return at least one shortcut with one of the base names (e.g. name:"goto").'].join(`

`);alert(g),console.warn(g)}return f}const uf=Je(xn(Hb),xn(Ub),zb);function Fv(e,n,s=!1){typeof e=="string"&&(e=nf[e]);const a=Je(e,uf);let r=0,i;const l=()=>{if(clearTimeout(i),!a.value){r=0;return}s&&(i=setTimeout(l,Math.max(1e3-r*250,150)),r++),n()};return we(a,l,{flush:"sync"})}function Mv(e,n){return Tk(e,s=>{uf.value&&(s.repeat||n())})}function Nv(){const e=Av();new Map(e.map(s=>[s.key,s])).forEach(s=>{s.fn&&Fv(s.key,s.fn,s.autoRepeat)}),Mv("f",()=>tf.toggle())}const Iv={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Dv=t("path",{fill:"currentColor",d:"M24 9.4L22.6 8L16 14.6L9.4 8L8 9.4l6.6 6.6L8 22.6L9.4 24l6.6-6.6l6.6 6.6l1.4-1.4l-6.6-6.6L24 9.4z"},null,-1),Lv=[Dv];function jv(e,n){return k(),ee("svg",Iv,Lv)}const qv={name:"carbon-close",render:jv};function pl(e,n=""){var r,i;const s=["slidev-page",n],a=(i=(r=e==null?void 0:e.meta)==null?void 0:r.slide)==null?void 0:i.no;return a!=null&&s.push(`slidev-page-${a}`),s.filter(Boolean).join(" ")}const Rv=Me({__name:"SlideContainer",props:{width:{type:Number},meta:{default:()=>({})},scale:{type:[Number,String]}},setup(e){const n=e;S(P);const s=se(),a=a0(s),r=L(()=>n.width?n.width:a.width.value),i=L(()=>n.width?n.width/Ct:a.height.value);n.width&&cs(()=>{s.value&&(s.value.style.width=`${r.value}px`,s.value.style.height=`${i.value}px`)});const l=L(()=>r.value/i.value),c=L(()=>n.scale&&!Ms.value?n.scale:l.value<Ct?r.value/Ot:i.value*Ct/Ot),u=L(()=>({height:`${al}px`,width:`${Ot}px`,transform:`translate(-50%, -50%) scale(${c.value})`})),p=L(()=>({"select-none":!Ce.selectable,"slidev-code-line-numbers":Ce.lineNumbers}));return En($d,c),(d,f)=>(k(),ee("div",{id:"slide-container",ref_key:"root",ref:s,class:We(C(p))},[t("div",{id:"slide-content",style:tn(C(u))},[Ln(d.$slots,"default")],4),Ln(d.$slots,"controls")],2))}});const T=(e,n)=>{const s=e.__vccOpts||e;for(const[a,r]of n)s[a]=r;return s},pf=T(Rv,[["__file","/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/node_modules/@slidev/client/internals/SlideContainer.vue"]]),dl=Me({name:"SlideWrapper",props:{clicks:{type:[Number,String],default:0},clicksElements:{type:Array,default:()=>[]},clicksOrderMap:{type:Map,default:()=>new Map},clicksDisabled:{type:Boolean,default:!1},context:{type:String,default:"main"},is:{type:Object,default:void 0},route:{type:Object,default:void 0}},setup(e,{emit:n}){const s=Jn(e,"clicks",n),a=Jn(e,"clicksElements",n),r=Jn(e,"clicksDisabled",n),i=Jn(e,"clicksOrderMap",n);a.value.length=0,En(P1,e.route),En(T1,e.context),En(sa,s),En(aa,r),En(Gt,a),En(si,i)},render(){var e,n;return this.$props.is?Tn(this.$props.is):(n=(e=this.$slots)==null?void 0:e.default)==null?void 0:n.call(e)}}),Bv=["innerHTML"],Vv=Me({__name:"DrawingPreview",props:{page:{type:Number,required:!0}},setup(e){return S(P),(n,s)=>C(Pr)[e.page]?(k(),ee("svg",{key:0,ref:"svg",class:"w-full h-full absolute top-0 pointer-events-none",innerHTML:C(Pr)[e.page]},null,8,Bv)):Se("v-if",!0)}}),df=T(Vv,[["__file","/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/node_modules/@slidev/client/internals/DrawingPreview.vue"]]),zv=Object.freeze(Object.defineProperty({__proto__:null,default:df},Symbol.toStringTag,{value:"Module"})),Wv={class:"slides-overview bg-main !bg-opacity-75 p-16 overflow-y-auto"},Hv=["onClick"],Uv=Me({__name:"SlidesOverview",props:{modelValue:{type:Boolean,required:!0}},emits:[],setup(e,{emit:n}){const s=e;S(P);const a=Jn(s,"modelValue",n);function r(){a.value=!1}function i(m){Ns(m),r()}function l(m){return m===Cn.value}const c=hi.smaller("xs"),u=hi.smaller("sm"),p=4*16*2,d=2*16,f=L(()=>c.value?as.width.value-p:u.value?(as.width.value-p-d)/2:300),h=L(()=>Math.floor((as.width.value-p)/(f.value+d)));return cs(()=>{Cn.value=Ge.value,ul.value=h.value}),(m,g)=>{const b=qv;return k(),ee(Fe,null,[Yi(t("div",Wv,[t("div",{class:"grid gap-y-4 gap-x-8 w-full",style:tn(`grid-template-columns: repeat(auto-fit,minmax(${C(f)}px,1fr))`)},[(k(!0),ee(Fe,null,Da(C(Ye).slice(0,-1),(y,O)=>(k(),ee("div",{key:y.path,class:"relative"},[t("div",{class:We(["inline-block border rounded border-opacity-50 overflow-hidden bg-main hover:border-$slidev-theme-primary",{"border-$slidev-theme-primary":l(O+1),"border-gray-400":!l(O+1)}]),style:tn(C(rl)),onClick:x=>i(+y.path)},[(k(),$(pf,{key:y.path,width:C(f),"clicks-disabled":!0,class:"pointer-events-none"},{default:w(()=>[q(C(dl),{is:y==null?void 0:y.component,"clicks-disabled":!0,class:We(C(pl)(y)),route:y,context:"overview"},null,8,["is","class","route"]),q(df,{page:+y.path},null,8,["page"])]),_:2},1032,["width"]))],14,Hv),t("div",{class:"absolute top-0 opacity-50",style:tn(`left: ${C(f)+5}px`)},$n(O+1),5)]))),128))],4)],512),[[md,C(a)]]),C(a)?(k(),ee("button",{key:0,class:"fixed text-2xl top-4 right-4 slidev-icon-btn text-gray-400",onClick:r},[q(b)])):Se("v-if",!0)],64)}}});const Gv=T(Uv,[["__file","/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/node_modules/@slidev/client/internals/SlidesOverview.vue"]]),Kv="/2023-05-magdeburger-devdays-fp-csharp-to-fsharp/assets/logo-b72bde5d.png",Zv={key:0,class:"fixed top-0 bottom-0 left-0 right-0 grid z-20"},Yv=Me({__name:"Modal",props:{modelValue:{default:!1},class:{default:""}},emits:["modelValue"],setup(e,{emit:n}){const s=e;S(P);const a=Jn(s,"modelValue",n);function r(){a.value=!1}return(i,l)=>(k(),$(Rp,null,[C(a)?(k(),ee("div",Zv,[t("div",{bg:"black opacity-80",class:"absolute top-0 bottom-0 left-0 right-0 -z-1",onClick:l[0]||(l[0]=c=>r())}),t("div",{class:We(["m-auto rounded-md bg-main shadow",s.class]),"dark:border":"~ gray-400 opacity-10"},[Ln(i.$slots,"default")],2)])):Se("v-if",!0)],1024))}}),Jv=T(Yv,[["__file","/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/node_modules/@slidev/client/internals/Modal.vue"]]),Qv={class:"slidev-info-dialog slidev-layout flex flex-col gap-4 text-base"},Xv=["innerHTML"],e2=t("a",{href:"https://github.com/slidevjs/slidev",target:"_blank",class:"!opacity-100 !border-none !text-current"},[t("div",{class:"flex gap-1 children:my-auto"},[t("div",{class:"opacity-50 text-sm mr-2"},"Powered by"),t("img",{class:"w-5 h-5",src:Kv,alt:"Slidev"}),t("div",{style:{color:"#2082A6"}},[t("b",null,"Sli"),o("dev ")])])],-1),n2=Me({__name:"InfoDialog",props:{modelValue:{default:!1}},emits:["modelValue"],setup(e,{emit:n}){const s=e;S(P);const a=Jn(s,"modelValue",n),r=L(()=>typeof Ce.info=="string");return(i,l)=>(k(),$(Jv,{modelValue:C(a),"onUpdate:modelValue":l[0]||(l[0]=c=>Ae(a)?a.value=c:null),class:"px-6 py-4"},{default:w(()=>[t("div",Qv,[C(r)?(k(),ee("div",{key:0,class:"mb-4",innerHTML:C(Ce).info},null,8,Xv)):Se("v-if",!0),e2])]),_:1},8,["modelValue"]))}});const t2=T(n2,[["__file","/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/node_modules/@slidev/client/internals/InfoDialog.vue"]]),s2=["disabled","onKeydown"],a2=Me({__name:"Goto",setup(e){S(P);const n=se(),s=se(""),a=L(()=>{if(s.value.startsWith("/"))return!!Ye.find(l=>l.path===s.value.substring(1));{const l=+s.value;return!isNaN(l)&&l>0&&l<=$f.value}});function r(){a.value&&(s.value.startsWith("/")?Ns(s.value.substring(1)):Ns(+s.value)),i()}function i(){ws.value=!1}return we(ws,async l=>{var c,u;l?(await nn(),s.value="",(c=n.value)==null||c.focus()):(u=n.value)==null||u.blur()}),we(s,l=>{l.match(/^[^0-9/]/)&&(s.value=s.value.substring(1))}),(l,c)=>(k(),ee("div",{id:"slidev-goto-dialog",class:We(["fixed right-5 bg-main transform transition-all",C(ws)?"top-5":"-top-20"]),shadow:"~",p:"x-4 y-2",border:"~ transparent rounded dark:gray-400 dark:opacity-25"},[Yi(t("input",{ref_key:"input",ref:n,"onUpdate:modelValue":c[0]||(c[0]=u=>s.value=u),type:"text",disabled:!C(ws),class:We(["outline-none bg-transparent",{"text-red-400":!C(a)&&s.value}]),placeholder:"Goto...",onKeydown:[kc(r,["enter"]),kc(i,["escape"])],onBlur:i},null,42,s2),[[O_,s.value]])],2))}}),r2=T(a2,[["__file","/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/node_modules/@slidev/client/internals/Goto.vue"]]),o2=Me({__name:"Controls",setup(e){S(P);const n=et(),s=et();return(a,r)=>(k(),ee(Fe,null,[q(Gv,{modelValue:C(cn),"onUpdate:modelValue":r[0]||(r[0]=i=>Ae(cn)?cn.value=i:null)},null,8,["modelValue"]),q(r2),C(n)?(k(),$(C(n),{key:0})):Se("v-if",!0),C(s)?(k(),$(C(s),{key:1,modelValue:C(So),"onUpdate:modelValue":r[1]||(r[1]=i=>Ae(So)?So.value=i:null)},null,8,["modelValue"])):Se("v-if",!0),C(Ce).info?(k(),$(t2,{key:2,modelValue:C(ia),"onUpdate:modelValue":r[2]||(r[2]=i=>Ae(ia)?ia.value=i:null)},null,8,["modelValue"])):Se("v-if",!0)],64))}}),i2=T(o2,[["__file","/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/node_modules/@slidev/client/internals/Controls.vue"]]),l2={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},c2=t("path",{fill:"currentColor",d:"M30 8h-4.1c-.5-2.3-2.5-4-4.9-4s-4.4 1.7-4.9 4H2v2h14.1c.5 2.3 2.5 4 4.9 4s4.4-1.7 4.9-4H30V8zm-9 4c-1.7 0-3-1.3-3-3s1.3-3 3-3s3 1.3 3 3s-1.3 3-3 3zM2 24h4.1c.5 2.3 2.5 4 4.9 4s4.4-1.7 4.9-4H30v-2H15.9c-.5-2.3-2.5-4-4.9-4s-4.4 1.7-4.9 4H2v2zm9-4c1.7 0 3 1.3 3 3s-1.3 3-3 3s-3-1.3-3-3s1.3-3 3-3z"},null,-1),u2=[c2];function p2(e,n){return k(),ee("svg",l2,u2)}const d2={name:"carbon-settings-adjust",render:p2},f2={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},h2=t("path",{fill:"currentColor",d:"M17 22v-8h-4v2h2v6h-3v2h8v-2h-3zM16 8a1.5 1.5 0 1 0 1.5 1.5A1.5 1.5 0 0 0 16 8z"},null,-1),m2=t("path",{fill:"currentColor",d:"M16 30a14 14 0 1 1 14-14a14 14 0 0 1-14 14Zm0-26a12 12 0 1 0 12 12A12 12 0 0 0 16 4Z"},null,-1),g2=[h2,m2];function _2(e,n){return k(),ee("svg",f2,g2)}const k2={name:"carbon-information",render:_2},b2={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},v2=t("path",{fill:"currentColor",d:"M26 24v4H6v-4H4v4a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2v-4zm0-10l-1.41-1.41L17 20.17V2h-2v18.17l-7.59-7.58L6 14l10 10l10-10z"},null,-1),y2=[v2];function w2(e,n){return k(),ee("svg",b2,y2)}const x2={name:"carbon-download",render:w2},S2={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},E2=t("path",{fill:"currentColor",d:"M15 10h2v8h-2zm5 4h2v4h-2zm-10-2h2v6h-2z"},null,-1),$2=t("path",{fill:"currentColor",d:"M25 4h-8V2h-2v2H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8v6h-4v2h10v-2h-4v-6h8a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 16H7V6h18Z"},null,-1),P2=[E2,$2];function T2(e,n){return k(),ee("svg",S2,P2)}const C2={name:"carbon-presentation-file",render:T2},O2={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},A2=t("path",{fill:"currentColor",d:"M27.307 6.107L30 3.414L28.586 2l-2.693 2.693L24.8 3.6a1.933 1.933 0 0 0-2.8 0l-18 18V28h6.4l18-18a1.933 1.933 0 0 0 0-2.8ZM9.6 26H6v-3.6L23.4 5L27 8.6ZM9 11.586L16.586 4L18 5.414L10.414 13z"},null,-1),F2=[A2];function M2(e,n){return k(),ee("svg",O2,F2)}const N2={name:"carbon-pen",render:M2},I2={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},D2=t("g",{fill:"currentColor"},[t("path",{d:"M213.66 201L201 213.66a8 8 0 0 1-11.31 0L140 164a8 8 0 0 0-13 2.46l-19.46 44.77a8 8 0 0 1-14.85-.71L40.41 50.44a8 8 0 0 1 10-10l160.1 52.24a8 8 0 0 1 .71 14.85L166.45 127a8 8 0 0 0-2.45 13l49.67 49.67a8 8 0 0 1-.01 11.33Z",opacity:".2"}),t("path",{d:"m169.64 134.33l44.77-19.46a16 16 0 0 0-1.41-29.8L52.92 32.8A16 16 0 0 0 32.8 52.92L85.07 213a15.83 15.83 0 0 0 14.41 11h.78a15.83 15.83 0 0 0 14.61-9.59l19.46-44.77L184 219.31a16 16 0 0 0 22.63 0l12.68-12.68a16 16 0 0 0 0-22.63Zm-69.48 73.76l.06-.05Zm95.15-.09l-49.67-49.67a16 16 0 0 0-26 4.94l-19.42 44.65L48 48l159.87 52.21l-44.64 19.41a16 16 0 0 0-4.94 26L208 195.31Z"})],-1),L2=[D2];function j2(e,n){return k(),ee("svg",I2,L2)}const q2={name:"ph-cursor-duotone",render:j2},R2={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},B2=t("path",{fill:"currentColor",d:"M219.31 192a16 16 0 0 1 0 22.63l-4.68 4.68a16 16 0 0 1-22.63 0l-55.25-55.24l-21.88 50.34a15.84 15.84 0 0 1-14.61 9.59h-.78a15.82 15.82 0 0 1-14.41-11L32.8 52.92A15.95 15.95 0 0 1 52.92 32.8L213 85.07a16 16 0 0 1 1.41 29.8l-50.34 21.88Z"},null,-1),V2=[B2];function z2(e,n){return k(),ee("svg",R2,V2)}const ff={name:"ph-cursor-fill",render:z2},W2={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},H2=t("path",{fill:"currentColor",d:"M16 12.005a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6ZM5.394 6.813L6.81 5.399l3.505 3.506L8.9 10.319zM2 15.005h5v2H2zm3.394 10.193L8.9 21.692l1.414 1.414l-3.505 3.506zM15 25.005h2v5h-2zm6.687-1.9l1.414-1.414l3.506 3.506l-1.414 1.414zm3.313-8.1h5v2h-5zm-3.313-6.101l3.506-3.506l1.414 1.414l-3.506 3.506zM15 2.005h2v5h-2z"},null,-1),U2=[H2];function G2(e,n){return k(),ee("svg",W2,U2)}const K2={name:"carbon-sun",render:G2},Z2={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Y2=t("path",{fill:"currentColor",d:"M13.502 5.414a15.075 15.075 0 0 0 11.594 18.194a11.113 11.113 0 0 1-7.975 3.39c-.138 0-.278.005-.418 0a11.094 11.094 0 0 1-3.2-21.584M14.98 3a1.002 1.002 0 0 0-.175.016a13.096 13.096 0 0 0 1.825 25.981c.164.006.328 0 .49 0a13.072 13.072 0 0 0 10.703-5.555a1.01 1.01 0 0 0-.783-1.565A13.08 13.08 0 0 1 15.89 4.38A1.015 1.015 0 0 0 14.98 3Z"},null,-1),J2=[Y2];function Q2(e,n){return k(),ee("svg",Z2,J2)}const X2={name:"carbon-moon",render:Q2},ey={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},ny=t("path",{fill:"currentColor",d:"M8 4v4H4V4Zm2-2H2v8h8Zm8 2v4h-4V4Zm2-2h-8v8h8Zm8 2v4h-4V4Zm2-2h-8v8h8ZM8 14v4H4v-4Zm2-2H2v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8ZM8 24v4H4v-4Zm2-2H2v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Z"},null,-1),ty=[ny];function sy(e,n){return k(),ee("svg",ey,ty)}const ay={name:"carbon-apps",render:sy},ry={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},oy=t("path",{fill:"currentColor",d:"m18 6l-1.43 1.393L24.15 15H4v2h20.15l-7.58 7.573L18 26l10-10L18 6z"},null,-1),iy=[oy];function ly(e,n){return k(),ee("svg",ry,iy)}const cy={name:"carbon-arrow-right",render:ly},uy={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},py=t("path",{fill:"currentColor",d:"m14 26l1.41-1.41L7.83 17H28v-2H7.83l7.58-7.59L14 6L4 16l10 10z"},null,-1),dy=[py];function fy(e,n){return k(),ee("svg",uy,dy)}const hy={name:"carbon-arrow-left",render:fy},my={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},gy=t("path",{fill:"currentColor",d:"M20 2v2h6.586L18 12.582L19.414 14L28 5.414V12h2V2H20zm-6 17.416L12.592 18L4 26.586V20H2v10h10v-2H5.414L14 19.416z"},null,-1),_y=[gy];function ky(e,n){return k(),ee("svg",my,_y)}const by={name:"carbon-maximize",render:ky},vy={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},yy=t("path",{fill:"currentColor",d:"M4 18v2h6.586L2 28.582L3.414 30L12 21.414V28h2V18H4zM30 3.416L28.592 2L20 10.586V4h-2v10h10v-2h-6.586L30 3.416z"},null,-1),wy=[yy];function xy(e,n){return k(),ee("svg",vy,wy)}const Sy={name:"carbon-minimize",render:xy},Ey={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},$y=t("path",{fill:"currentColor",d:"m13 24l-9-9l1.414-1.414L13 21.171L26.586 7.586L28 9L13 24z"},null,-1),Py=[$y];function Ty(e,n){return k(),ee("svg",Ey,Py)}const Cy={name:"carbon-checkmark",render:Ty},Oy={class:"select-list"},Ay={class:"title"},Fy={class:"items"},My=["onClick"],Ny=Me({__name:"SelectList",props:{modelValue:{type:[Object,String,Number]},title:{type:String},items:{type:Array}},setup(e,{emit:n}){const s=e;S(P);const a=Jn(s,"modelValue",n,{passive:!0});return(r,i)=>{const l=Cy;return k(),ee("div",Oy,[t("div",Ay,$n(e.title),1),t("div",Fy,[(k(!0),ee(Fe,null,Da(e.items,c=>(k(),ee("div",{key:c.value,class:We(["item",{active:C(a)===c.value}]),onClick:()=>{var u;a.value=c.value,(u=c.onClick)==null||u.call(c)}},[q(l,{class:We(["text-green-500",{"opacity-0":C(a)!==c.value}])},null,8,["class"]),o(" "+$n(c.display||c.value),1)],10,My))),128))])])}}});const Iy=T(Ny,[["__scopeId","data-v-3f89fa11"],["__file","/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/node_modules/@slidev/client/internals/SelectList.vue"]]),Dy={class:"text-sm"},Ly=Me({__name:"Settings",setup(e){S(P);const n=[{display:"Fit",value:0},{display:"1:1",value:1}];return(s,a)=>(k(),ee("div",Dy,[q(Iy,{modelValue:C(lr),"onUpdate:modelValue":a[0]||(a[0]=r=>Ae(lr)?lr.value=r:null),title:"Scale",items:n},null,8,["modelValue"])]))}}),jy=T(Ly,[["__file","/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/node_modules/@slidev/client/internals/Settings.vue"]]),qy={key:0,class:"rounded-md bg-main shadow absolute bottom-10 left-0 z-20","dark:border":"~ gray-400 opacity-10"},Ry=Me({__name:"MenuButton",props:{modelValue:{default:!1},disabled:{default:!1}},setup(e,{emit:n}){const s=e;S(P);const a=Jn(s,"modelValue",n,{passive:!0}),r=se();return $k(r,()=>{a.value=!1}),(i,l)=>(k(),ee("div",{ref_key:"el",ref:r,class:"flex relative"},[t("button",{class:We({disabled:e.disabled}),onClick:l[0]||(l[0]=c=>a.value=!C(a))},[Ln(i.$slots,"button",{class:We({disabled:e.disabled})})],2),(k(),$(Rp,null,[C(a)?(k(),ee("div",qy,[Ln(i.$slots,"menu")])):Se("v-if",!0)],1024))],512))}}),By=T(Ry,[["__file","/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/node_modules/@slidev/client/internals/MenuButton.vue"]]),Vy={class:"w-1px opacity-10 bg-current m-1 lg:m-2"},zy={__name:"VerticalDivider",setup(e){return S(P),(n,s)=>(k(),ee("div",Vy))}},er=T(zy,[["__file","/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/node_modules/@slidev/client/internals/VerticalDivider.vue"]]),Wy={render(){return[]}},Hy={class:"slidev-icon-btn"},Uy={class:"h-40px flex",p:"l-1 t-0.5 r-2",text:"sm leading-2"},Gy={class:"my-auto"},Ky={class:"opacity-50"},Zy=Me({__name:"NavControls",props:{persist:{default:!1}},setup(e){const n=e;S(P);const s=hi.smaller("md"),{isFullscreen:a,toggle:r}=tf,i=L(()=>vi.value?`?password=${vi.value}`:"");L(()=>`/presenter/${Ge.value}${i.value}`);const l=L(()=>`/${Ge.value}${i.value}`),c=se(),u=()=>{c.value&&Ts.value&&c.value.contains(Ts.value)&&Ts.value.blur()},p=L(()=>n.persist?"text-$slidev-controls-foreground bg-transparent":"rounded-md bg-main shadow dark:border dark:border-gray-400 dark:border-opacity-10"),d=et(),f=et();return ja(()=>import("./DrawingControls-58c1dd20.js"),[]).then(h=>f.value=h.default),(h,m)=>{const g=Sy,b=by,y=hy,O=cy,x=ay,E=X2,A=K2,R=ff,W=q2,Y=N2,j=C2,K=yr("RouterLink"),ae=x2,fe=k2,X=d2;return k(),ee("nav",{ref_key:"root",ref:c,class:"flex flex-col"},[t("div",{class:We(["flex flex-wrap-reverse text-xl gap-0.5 p-1 lg:gap-1 lg:p-2",C(p)]),onMouseleave:u},[C(rt)?Se("v-if",!0):(k(),ee("button",{key:0,class:"slidev-icon-btn",onClick:m[0]||(m[0]=(...de)=>C(r)&&C(r)(...de))},[C(a)?(k(),$(g,{key:0})):(k(),$(b,{key:1}))])),t("button",{class:We(["slidev-icon-btn",{disabled:!C(x5)}]),onClick:m[1]||(m[1]=(...de)=>C(Ft)&&C(Ft)(...de))},[q(y)],2),t("button",{class:We(["slidev-icon-btn",{disabled:!C(w5)}]),title:"Next",onClick:m[2]||(m[2]=(...de)=>C(At)&&C(At)(...de))},[q(O)],2),C(rt)?Se("v-if",!0):(k(),ee("button",{key:1,class:"slidev-icon-btn",title:"Slides overview",onClick:m[3]||(m[3]=de=>C(sf)())},[q(x)])),C(ki)?Se("v-if",!0):(k(),ee("button",{key:2,class:"slidev-icon-btn",title:"Toggle dark mode",onClick:m[4]||(m[4]=de=>C(cf)())},[C(cl)?(k(),$(E,{key:0})):(k(),$(A,{key:1}))])),q(er),C(rt)?Se("v-if",!0):(k(),ee(Fe,{key:3},[!C(_n)&&!C(s)&&C(d)?(k(),ee(Fe,{key:0},[q(C(d)),q(er)],64)):Se("v-if",!0),C(_n)?(k(),ee("button",{key:1,class:"slidev-icon-btn",title:"Show presenter cursor",onClick:m[5]||(m[5]=de=>Eo.value=!C(Eo))},[C(Eo)?(k(),$(R,{key:0})):(k(),$(W,{key:1,class:"opacity-50"}))])):Se("v-if",!0)],64)),(!C(Ce).drawings.presenterOnly||C(_n))&&!C(rt)?(k(),ee(Fe,{key:4},[t("button",{class:"slidev-icon-btn relative",title:"Drawing",onClick:m[6]||(m[6]=de=>Qn.value=!C(Qn))},[q(Y),C(Qn)?(k(),ee("div",{key:0,class:"absolute left-1 right-1 bottom-0 h-0.7 rounded-full",style:tn({background:C(Yt).color})},null,4)):Se("v-if",!0)]),q(er)],64)):Se("v-if",!0),C(rt)?Se("v-if",!0):(k(),ee(Fe,{key:5},[C(_n)?(k(),$(K,{key:0,to:C(l),class:"slidev-icon-btn",title:"Play Mode"},{default:w(()=>[q(j)]),_:1},8,["to"])):Se("v-if",!0),Se("v-if",!0),Se("v-if",!0)],64)),(k(),ee(Fe,{key:6},[C(Ce).download?(k(),ee("button",{key:0,class:"slidev-icon-btn",onClick:m[8]||(m[8]=(...de)=>C(yi)&&C(yi)(...de))},[q(ae)])):Se("v-if",!0)],64)),!C(_n)&&C(Ce).info&&!C(rt)?(k(),ee("button",{key:7,class:"slidev-icon-btn",onClick:m[9]||(m[9]=de=>ia.value=!C(ia))},[q(fe)])):Se("v-if",!0),!C(_n)&&!C(rt)?(k(),$(By,{key:8},{button:w(()=>[t("button",Hy,[q(X)])]),menu:w(()=>[q(jy)]),_:1})):Se("v-if",!0),C(rt)?Se("v-if",!0):(k(),$(er,{key:9})),t("div",Uy,[t("div",Gy,[o($n(C(Ge))+" ",1),t("span",Ky,"/ "+$n(C($f)),1)])]),q(C(Wy))],34)],512)}}}),Yy=T(Zy,[["__file","/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/node_modules/@slidev/client/internals/NavControls.vue"]]),hf={render(){return[]}},mf={render(){return[]}},Jy={key:0,class:"absolute top-0 left-0 right-0 bottom-0 pointer-events-none text-xl"},Qy=Me({__name:"PresenterMouse",setup(e){return S(P),(n,s)=>{const a=ff;return C(vo).cursor?(k(),ee("div",Jy,[q(a,{class:"absolute",style:tn({left:`${C(vo).cursor.x}%`,top:`${C(vo).cursor.y}%`})},null,8,["style"])])):Se("v-if",!0)}}}),Xy=T(Qy,[["__file","/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/node_modules/@slidev/client/internals/PresenterMouse.vue"]]),ew=Me({__name:"SlidesShow",props:{context:{type:String,required:!0}},setup(e){S(P),we(un,()=>{var a,r;(a=un.value)!=null&&a.meta&&un.value.meta.preload!==!1&&(un.value.meta.__preloaded=!0),(r=Po.value)!=null&&r.meta&&Po.value.meta.preload!==!1&&(Po.value.meta.__preloaded=!0)},{immediate:!0});const n=et();ja(()=>import("./DrawingLayer-84a11f37.js"),[]).then(a=>n.value=a.default);const s=L(()=>Ye.filter(a=>{var r;return((r=a.meta)==null?void 0:r.__preloaded)||a===un.value}));return(a,r)=>(k(),ee(Fe,null,[Se(" Global Bottom "),q(C(mf)),Se(" Slides "),q(S_,le(C($5),{id:"slideshow",tag:"div"}),{default:w(()=>[(k(!0),ee(Fe,null,Da(C(s),i=>{var l;return Yi((k(),$(C(dl),{key:i.path,is:i==null?void 0:i.component,clicks:i===C(un)?C(In):0,"clicks-elements":((l=i.meta)==null?void 0:l.__clicksElements)||[],"clicks-disabled":!1,class:We(C(pl)(i)),route:i,context:e.context},null,8,["is","clicks","clicks-elements","class","route","context"])),[[md,i===C(un)]])}),128))]),_:1},16),Se(" Global Top "),q(C(hf)),C(n)?(k(),$(C(n),{key:0})):Se("v-if",!0),C(_n)?Se("v-if",!0):(k(),$(Xy,{key:1}))],64))}});const nw=T(ew,[["__scopeId","data-v-afb4231e"],["__file","/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/node_modules/@slidev/client/internals/SlidesShow.vue"]]),tw=Me({__name:"PrintStyle",setup(e){S(P);function n(s,{slots:a}){if(a.default)return Tn("style",a.default())}return(s,a)=>(k(),$(n,null,{default:w(()=>[o(" @page { size: "+$n(C(Ot))+"px "+$n(C(al))+"px; margin: 0px; } ",1)]),_:1}))}}),gf=T(tw,[["__file","/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/node_modules/@slidev/client/internals/PrintStyle.vue"]]),sw=Me({__name:"Play",setup(e){S(P),Nv();const n=se();function s(i){var l;ou.value||((l=i.target)==null?void 0:l.id)==="slide-container"&&(i.screenX/window.innerWidth>.6?At():Ft())}P5(n);const a=L(()=>Wb.value||ou.value);et();const r=et();return ja(()=>import("./DrawingControls-58c1dd20.js"),[]).then(i=>r.value=i.default),(i,l)=>(k(),ee(Fe,null,[C(Ms)?(k(),$(gf,{key:0})):Se("v-if",!0),t("div",{id:"page-root",ref_key:"root",ref:n,class:"grid grid-cols-[1fr_max-content]",style:tn(C(rl))},[q(pf,{class:"w-full h-full",style:tn({background:"var(--slidev-slide-container-background, black)"}),width:C(Ms)?C(as).width.value:void 0,scale:C(lr),onPointerdown:s},{default:w(()=>[q(nw,{context:"slide"})]),controls:w(()=>[t("div",{class:We(["absolute bottom-0 left-0 transition duration-300 opacity-0 hover:opacity-100",[C(a)?"opacity-100 right-0":"opacity-0 p-2",C(xa)?"pointer-events-none":""]])},[q(Yy,{class:"m-auto",persist:C(a)},null,8,["persist"])],2),!C(Ce).drawings.presenterOnly&&!C(rt)&&C(r)?(k(),$(C(r),{key:0,class:"ml-0"})):Se("v-if",!0)]),_:1},8,["style","width","scale"]),Se("v-if",!0)],4),q(i2)],64))}}),aw=T(sw,[["__file","/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/node_modules/@slidev/client/internals/Play.vue"]]);/*! js-yaml 4.1.0 https://github.com/nodeca/js-yaml @license MIT */function _f(e){return typeof e>"u"||e===null}function rw(e){return typeof e=="object"&&e!==null}function ow(e){return Array.isArray(e)?e:_f(e)?[]:[e]}function iw(e,n){var s,a,r,i;if(n)for(i=Object.keys(n),s=0,a=i.length;s<a;s+=1)r=i[s],e[r]=n[r];return e}function lw(e,n){var s="",a;for(a=0;a<n;a+=1)s+=e;return s}function cw(e){return e===0&&Number.NEGATIVE_INFINITY===1/e}var uw=_f,pw=rw,dw=ow,fw=lw,hw=cw,mw=iw,fl={isNothing:uw,isObject:pw,toArray:dw,repeat:fw,isNegativeZero:hw,extend:mw};function kf(e,n){var s="",a=e.reason||"(unknown reason)";return e.mark?(e.mark.name&&(s+='in "'+e.mark.name+'" '),s+="("+(e.mark.line+1)+":"+(e.mark.column+1)+")",!n&&e.mark.snippet&&(s+=`

`+e.mark.snippet),a+" "+s):a}function Ea(e,n){Error.call(this),this.name="YAMLException",this.reason=e,this.mark=n,this.message=kf(this,!1),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack||""}Ea.prototype=Object.create(Error.prototype);Ea.prototype.constructor=Ea;Ea.prototype.toString=function(n){return this.name+": "+kf(this,n)};var Kt=Ea,gw=["kind","multi","resolve","construct","instanceOf","predicate","represent","representName","defaultStyle","styleAliases"],_w=["scalar","sequence","mapping"];function kw(e){var n={};return e!==null&&Object.keys(e).forEach(function(s){e[s].forEach(function(a){n[String(a)]=s})}),n}function bw(e,n){if(n=n||{},Object.keys(n).forEach(function(s){if(gw.indexOf(s)===-1)throw new Kt('Unknown option "'+s+'" is met in definition of "'+e+'" YAML type.')}),this.options=n,this.tag=e,this.kind=n.kind||null,this.resolve=n.resolve||function(){return!0},this.construct=n.construct||function(s){return s},this.instanceOf=n.instanceOf||null,this.predicate=n.predicate||null,this.represent=n.represent||null,this.representName=n.representName||null,this.defaultStyle=n.defaultStyle||null,this.multi=n.multi||!1,this.styleAliases=kw(n.styleAliases||null),_w.indexOf(this.kind)===-1)throw new Kt('Unknown kind "'+this.kind+'" is specified for "'+e+'" YAML type.')}var rn=bw;function _u(e,n){var s=[];return e[n].forEach(function(a){var r=s.length;s.forEach(function(i,l){i.tag===a.tag&&i.kind===a.kind&&i.multi===a.multi&&(r=l)}),s[r]=a}),s}function vw(){var e={scalar:{},sequence:{},mapping:{},fallback:{},multi:{scalar:[],sequence:[],mapping:[],fallback:[]}},n,s;function a(r){r.multi?(e.multi[r.kind].push(r),e.multi.fallback.push(r)):e[r.kind][r.tag]=e.fallback[r.tag]=r}for(n=0,s=arguments.length;n<s;n+=1)arguments[n].forEach(a);return e}function bi(e){return this.extend(e)}bi.prototype.extend=function(n){var s=[],a=[];if(n instanceof rn)a.push(n);else if(Array.isArray(n))a=a.concat(n);else if(n&&(Array.isArray(n.implicit)||Array.isArray(n.explicit)))n.implicit&&(s=s.concat(n.implicit)),n.explicit&&(a=a.concat(n.explicit));else throw new Kt("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");s.forEach(function(i){if(!(i instanceof rn))throw new Kt("Specified list of YAML types (or a single Type object) contains a non-Type object.");if(i.loadKind&&i.loadKind!=="scalar")throw new Kt("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");if(i.multi)throw new Kt("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.")}),a.forEach(function(i){if(!(i instanceof rn))throw new Kt("Specified list of YAML types (or a single Type object) contains a non-Type object.")});var r=Object.create(bi.prototype);return r.implicit=(this.implicit||[]).concat(s),r.explicit=(this.explicit||[]).concat(a),r.compiledImplicit=_u(r,"implicit"),r.compiledExplicit=_u(r,"explicit"),r.compiledTypeMap=vw(r.compiledImplicit,r.compiledExplicit),r};var yw=bi,ww=new rn("tag:yaml.org,2002:str",{kind:"scalar",construct:function(e){return e!==null?e:""}}),xw=new rn("tag:yaml.org,2002:seq",{kind:"sequence",construct:function(e){return e!==null?e:[]}}),Sw=new rn("tag:yaml.org,2002:map",{kind:"mapping",construct:function(e){return e!==null?e:{}}}),Ew=new yw({explicit:[ww,xw,Sw]});function $w(e){if(e===null)return!0;var n=e.length;return n===1&&e==="~"||n===4&&(e==="null"||e==="Null"||e==="NULL")}function Pw(){return null}function Tw(e){return e===null}var Cw=new rn("tag:yaml.org,2002:null",{kind:"scalar",resolve:$w,construct:Pw,predicate:Tw,represent:{canonical:function(){return"~"},lowercase:function(){return"null"},uppercase:function(){return"NULL"},camelcase:function(){return"Null"},empty:function(){return""}},defaultStyle:"lowercase"});function Ow(e){if(e===null)return!1;var n=e.length;return n===4&&(e==="true"||e==="True"||e==="TRUE")||n===5&&(e==="false"||e==="False"||e==="FALSE")}function Aw(e){return e==="true"||e==="True"||e==="TRUE"}function Fw(e){return Object.prototype.toString.call(e)==="[object Boolean]"}var Mw=new rn("tag:yaml.org,2002:bool",{kind:"scalar",resolve:Ow,construct:Aw,predicate:Fw,represent:{lowercase:function(e){return e?"true":"false"},uppercase:function(e){return e?"TRUE":"FALSE"},camelcase:function(e){return e?"True":"False"}},defaultStyle:"lowercase"});function Nw(e){return 48<=e&&e<=57||65<=e&&e<=70||97<=e&&e<=102}function Iw(e){return 48<=e&&e<=55}function Dw(e){return 48<=e&&e<=57}function Lw(e){if(e===null)return!1;var n=e.length,s=0,a=!1,r;if(!n)return!1;if(r=e[s],(r==="-"||r==="+")&&(r=e[++s]),r==="0"){if(s+1===n)return!0;if(r=e[++s],r==="b"){for(s++;s<n;s++)if(r=e[s],r!=="_"){if(r!=="0"&&r!=="1")return!1;a=!0}return a&&r!=="_"}if(r==="x"){for(s++;s<n;s++)if(r=e[s],r!=="_"){if(!Nw(e.charCodeAt(s)))return!1;a=!0}return a&&r!=="_"}if(r==="o"){for(s++;s<n;s++)if(r=e[s],r!=="_"){if(!Iw(e.charCodeAt(s)))return!1;a=!0}return a&&r!=="_"}}if(r==="_")return!1;for(;s<n;s++)if(r=e[s],r!=="_"){if(!Dw(e.charCodeAt(s)))return!1;a=!0}return!(!a||r==="_")}function jw(e){var n=e,s=1,a;if(n.indexOf("_")!==-1&&(n=n.replace(/_/g,"")),a=n[0],(a==="-"||a==="+")&&(a==="-"&&(s=-1),n=n.slice(1),a=n[0]),n==="0")return 0;if(a==="0"){if(n[1]==="b")return s*parseInt(n.slice(2),2);if(n[1]==="x")return s*parseInt(n.slice(2),16);if(n[1]==="o")return s*parseInt(n.slice(2),8)}return s*parseInt(n,10)}function qw(e){return Object.prototype.toString.call(e)==="[object Number]"&&e%1===0&&!fl.isNegativeZero(e)}var Rw=new rn("tag:yaml.org,2002:int",{kind:"scalar",resolve:Lw,construct:jw,predicate:qw,represent:{binary:function(e){return e>=0?"0b"+e.toString(2):"-0b"+e.toString(2).slice(1)},octal:function(e){return e>=0?"0o"+e.toString(8):"-0o"+e.toString(8).slice(1)},decimal:function(e){return e.toString(10)},hexadecimal:function(e){return e>=0?"0x"+e.toString(16).toUpperCase():"-0x"+e.toString(16).toUpperCase().slice(1)}},defaultStyle:"decimal",styleAliases:{binary:[2,"bin"],octal:[8,"oct"],decimal:[10,"dec"],hexadecimal:[16,"hex"]}}),Bw=new RegExp("^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");function Vw(e){return!(e===null||!Bw.test(e)||e[e.length-1]==="_")}function zw(e){var n,s;return n=e.replace(/_/g,"").toLowerCase(),s=n[0]==="-"?-1:1,"+-".indexOf(n[0])>=0&&(n=n.slice(1)),n===".inf"?s===1?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY:n===".nan"?NaN:s*parseFloat(n,10)}var Ww=/^[-+]?[0-9]+e/;function Hw(e,n){var s;if(isNaN(e))switch(n){case"lowercase":return".nan";case"uppercase":return".NAN";case"camelcase":return".NaN"}else if(Number.POSITIVE_INFINITY===e)switch(n){case"lowercase":return".inf";case"uppercase":return".INF";case"camelcase":return".Inf"}else if(Number.NEGATIVE_INFINITY===e)switch(n){case"lowercase":return"-.inf";case"uppercase":return"-.INF";case"camelcase":return"-.Inf"}else if(fl.isNegativeZero(e))return"-0.0";return s=e.toString(10),Ww.test(s)?s.replace("e",".e"):s}function Uw(e){return Object.prototype.toString.call(e)==="[object Number]"&&(e%1!==0||fl.isNegativeZero(e))}var Gw=new rn("tag:yaml.org,2002:float",{kind:"scalar",resolve:Vw,construct:zw,predicate:Uw,represent:Hw,defaultStyle:"lowercase"}),Kw=Ew.extend({implicit:[Cw,Mw,Rw,Gw]}),Zw=Kw,bf=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"),vf=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$");function Yw(e){return e===null?!1:bf.exec(e)!==null||vf.exec(e)!==null}function Jw(e){var n,s,a,r,i,l,c,u=0,p=null,d,f,h;if(n=bf.exec(e),n===null&&(n=vf.exec(e)),n===null)throw new Error("Date resolve error");if(s=+n[1],a=+n[2]-1,r=+n[3],!n[4])return new Date(Date.UTC(s,a,r));if(i=+n[4],l=+n[5],c=+n[6],n[7]){for(u=n[7].slice(0,3);u.length<3;)u+="0";u=+u}return n[9]&&(d=+n[10],f=+(n[11]||0),p=(d*60+f)*6e4,n[9]==="-"&&(p=-p)),h=new Date(Date.UTC(s,a,r,i,l,c,u)),p&&h.setTime(h.getTime()-p),h}function Qw(e){return e.toISOString()}var Xw=new rn("tag:yaml.org,2002:timestamp",{kind:"scalar",resolve:Yw,construct:Jw,instanceOf:Date,represent:Qw});function e3(e){return e==="<<"||e===null}var n3=new rn("tag:yaml.org,2002:merge",{kind:"scalar",resolve:e3}),hl=`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=
\r`;function t3(e){if(e===null)return!1;var n,s,a=0,r=e.length,i=hl;for(s=0;s<r;s++)if(n=i.indexOf(e.charAt(s)),!(n>64)){if(n<0)return!1;a+=6}return a%8===0}function s3(e){var n,s,a=e.replace(/[\r\n=]/g,""),r=a.length,i=hl,l=0,c=[];for(n=0;n<r;n++)n%4===0&&n&&(c.push(l>>16&255),c.push(l>>8&255),c.push(l&255)),l=l<<6|i.indexOf(a.charAt(n));return s=r%4*6,s===0?(c.push(l>>16&255),c.push(l>>8&255),c.push(l&255)):s===18?(c.push(l>>10&255),c.push(l>>2&255)):s===12&&c.push(l>>4&255),new Uint8Array(c)}function a3(e){var n="",s=0,a,r,i=e.length,l=hl;for(a=0;a<i;a++)a%3===0&&a&&(n+=l[s>>18&63],n+=l[s>>12&63],n+=l[s>>6&63],n+=l[s&63]),s=(s<<8)+e[a];return r=i%3,r===0?(n+=l[s>>18&63],n+=l[s>>12&63],n+=l[s>>6&63],n+=l[s&63]):r===2?(n+=l[s>>10&63],n+=l[s>>4&63],n+=l[s<<2&63],n+=l[64]):r===1&&(n+=l[s>>2&63],n+=l[s<<4&63],n+=l[64],n+=l[64]),n}function r3(e){return Object.prototype.toString.call(e)==="[object Uint8Array]"}var o3=new rn("tag:yaml.org,2002:binary",{kind:"scalar",resolve:t3,construct:s3,predicate:r3,represent:a3}),i3=Object.prototype.hasOwnProperty,l3=Object.prototype.toString;function c3(e){if(e===null)return!0;var n=[],s,a,r,i,l,c=e;for(s=0,a=c.length;s<a;s+=1){if(r=c[s],l=!1,l3.call(r)!=="[object Object]")return!1;for(i in r)if(i3.call(r,i))if(!l)l=!0;else return!1;if(!l)return!1;if(n.indexOf(i)===-1)n.push(i);else return!1}return!0}function u3(e){return e!==null?e:[]}var p3=new rn("tag:yaml.org,2002:omap",{kind:"sequence",resolve:c3,construct:u3}),d3=Object.prototype.toString;function f3(e){if(e===null)return!0;var n,s,a,r,i,l=e;for(i=new Array(l.length),n=0,s=l.length;n<s;n+=1){if(a=l[n],d3.call(a)!=="[object Object]"||(r=Object.keys(a),r.length!==1))return!1;i[n]=[r[0],a[r[0]]]}return!0}function h3(e){if(e===null)return[];var n,s,a,r,i,l=e;for(i=new Array(l.length),n=0,s=l.length;n<s;n+=1)a=l[n],r=Object.keys(a),i[n]=[r[0],a[r[0]]];return i}var m3=new rn("tag:yaml.org,2002:pairs",{kind:"sequence",resolve:f3,construct:h3}),g3=Object.prototype.hasOwnProperty;function _3(e){if(e===null)return!0;var n,s=e;for(n in s)if(g3.call(s,n)&&s[n]!==null)return!1;return!0}function k3(e){return e!==null?e:{}}var b3=new rn("tag:yaml.org,2002:set",{kind:"mapping",resolve:_3,construct:k3});Zw.extend({implicit:[Xw,n3],explicit:[o3,p3,m3,b3]});function ku(e){return e===48?"\0":e===97?"\x07":e===98?"\b":e===116||e===9?"	":e===110?`
`:e===118?"\v":e===102?"\f":e===114?"\r":e===101?"\x1B":e===32?" ":e===34?'"':e===47?"/":e===92?"\\":e===78?"":e===95?" ":e===76?"\u2028":e===80?"\u2029":""}var v3=new Array(256),y3=new Array(256);for(var _s=0;_s<256;_s++)v3[_s]=ku(_s)?1:0,y3[_s]=ku(_s);function w3(e){return Array.from(new Set(e))}function bu(...e){let n,s,a;e.length===1?(n=0,a=1,[s]=e):[n,s,a=1]=e;const r=[];let i=n;for(;i<s;)r.push(i),i+=a||1;return r}function yf(e,n){if(!n||n==="all"||n==="*")return bu(1,e+1);const s=[];for(const a of n.split(/[,;]/g))if(!a.includes("-"))s.push(+a);else{const[r,i]=a.split("-",2);s.push(...bu(+r,i?+i+1:e+1))}return w3(s).filter(a=>a<=e).sort((a,r)=>a-r)}function wf(e){const n=L(()=>e.value.path),s=L(()=>Ye.length-1),a=L(()=>parseInt(n.value.split(/\//g).slice(-1)[0])||1),r=L(()=>eo(a.value)),i=L(()=>Ye.find(h=>h.path===`${a.value}`)),l=L(()=>{var h,m,g;return(g=(m=(h=i.value)==null?void 0:h.meta)==null?void 0:m.slide)==null?void 0:g.id}),c=L(()=>{var h,m;return((m=(h=i.value)==null?void 0:h.meta)==null?void 0:m.layout)||(a.value===1?"cover":"default")}),u=L(()=>Ye.find(h=>h.path===`${Math.min(Ye.length,a.value+1)}`)),p=L(()=>Ye.filter(h=>{var m,g;return(g=(m=h.meta)==null?void 0:m.slide)==null?void 0:g.title}).reduce((h,m)=>(_l(h,m),h),[])),d=L(()=>kl(p.value,i.value)),f=L(()=>bl(d.value));return{route:e,path:n,total:s,currentPage:a,currentPath:r,currentRoute:i,currentSlideId:l,currentLayout:c,nextRoute:u,rawTree:p,treeWithActiveStatuses:d,tree:f}}function xf(e,n,s){const a=se(0);nn(()=>{bn.afterEach(async()=>{await nn(),a.value+=1})});const r=L(()=>{var u,p;return a.value,((p=(u=n.value)==null?void 0:u.meta)==null?void 0:p.__clicksElements)||[]}),i=L(()=>{var u,p;return+(((p=(u=n.value)==null?void 0:u.meta)==null?void 0:p.clicks)??r.value.length)}),l=L(()=>s.value<Ye.length-1||e.value<i.value),c=L(()=>s.value>1||e.value>0);return{clicks:e,clicksElements:r,clicksTotal:i,hasNext:l,hasPrev:c}}const x3=["id"],S3=Me({__name:"PrintSlideClick",props:{clicks:{type:Number,required:!0},clicksElements:{type:Array,required:!1},nav:{type:null,required:!0},route:{type:null,required:!0}},emits:["update:clicksElements"],setup(e,{emit:n}){const s=e,a=Jn(s,"clicksElements",n),r=L(()=>({height:`${al}px`,width:`${Ot}px`})),i=et();ja(()=>Promise.resolve().then(()=>zv),void 0).then(p=>i.value=p.default);const l=L(()=>s.clicks),c=xf(l,s.nav.currentRoute,s.nav.currentPage),u=L(()=>`${s.route.path.toString().padStart(3,"0")}-${(l.value+1).toString().padStart(2,"0")}`);return En(P,ze({nav:{...s.nav,...c},configs:Ce,themeConfigs:L(()=>Ce.themeConfig)})),(p,d)=>{var f;return k(),ee("div",{id:C(u),class:"print-slide-container",style:tn(C(r))},[q(C(mf)),q(C(dl),{is:(f=e.route)==null?void 0:f.component,"clicks-elements":C(a),"onUpdate:clicksElements":d[0]||(d[0]=h=>Ae(a)?a.value=h:null),clicks:C(l),"clicks-disabled":!1,class:We(C(pl)(e.route)),route:e.route},null,8,["is","clicks-elements","clicks","class","route"]),C(i)?(k(),$(C(i),{key:0,page:+e.route.path},null,8,["page"])):Se("v-if",!0),q(C(hf))],12,x3)}}}),vu=T(S3,[["__file","/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/node_modules/@slidev/client/internals/PrintSlideClick.vue"]]),E3=Me({__name:"PrintSlide",props:{route:{type:null,required:!0}},setup(e){var i;const n=e;S(P);const s=ze(((i=n.route.meta)==null?void 0:i.__clicksElements)||[]),a=L(()=>n.route),r=wf(a);return(l,c)=>(k(),ee(Fe,null,[q(vu,{"clicks-elements":s,"onUpdate:clicksElements":c[0]||(c[0]=u=>s=u),clicks:0,nav:C(r),route:C(a)},null,8,["clicks-elements","nav","route"]),C(la)?Se("v-if",!0):(k(!0),ee(Fe,{key:0},Da(s.length,u=>(k(),$(vu,{key:u,clicks:u,nav:C(r),route:C(a)},null,8,["clicks","nav","route"]))),128))],64))}}),$3=T(E3,[["__file","/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/node_modules/@slidev/client/internals/PrintSlide.vue"]]),P3={id:"print-content"},T3=Me({__name:"PrintContainer",props:{width:{type:Number,required:!0}},setup(e){const n=e;S(P);const s=L(()=>n.width),a=L(()=>n.width/Ct),r=L(()=>s.value/a.value),i=L(()=>r.value<Ct?s.value/Ot:a.value*Ct/Ot);let l=Ye.slice(0,-1);jn.value.query.range&&(l=yf(l.length,jn.value.query.range).map(p=>l[p-1]));const c=L(()=>({"select-none":!Ce.selectable,"slidev-code-line-numbers":Ce.lineNumbers}));return En($d,i),(u,p)=>(k(),ee("div",{id:"print-container",class:We(C(c))},[t("div",P3,[(k(!0),ee(Fe,null,Da(C(l),d=>(k(),$($3,{key:d.path,route:d},null,8,["route"]))),128))]),Ln(u.$slots,"controls")],2))}});const C3=T(T3,[["__file","/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/node_modules/@slidev/client/internals/PrintContainer.vue"]]),O3=Me({__name:"Print",setup(e){return S(P),cs(()=>{Ms?document.body.parentNode.classList.add("print"):document.body.parentNode.classList.remove("print")}),(n,s)=>(k(),ee(Fe,null,[C(Ms)?(k(),$(gf,{key:0})):Se("v-if",!0),t("div",{id:"page-root",class:"grid grid-cols-[1fr_max-content]",style:tn(C(rl))},[q(C3,{class:"w-full h-full",style:tn({background:"var(--slidev-slide-container-background, black)"}),width:C(as).width.value},null,8,["style","width"])],4)],64))}});const A3=T(O3,[["__file","/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/node_modules/@slidev/client/internals/Print.vue"]]);const F3={class:"slidev-layout end"},M3={__name:"end",setup(e){return S(P),(n,s)=>(k(),ee("div",F3," END "))}},N3=T(M3,[["__scopeId","data-v-e532b98d"],["__file","/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/node_modules/@slidev/client/layouts/end.vue"]]),I3="/2023-05-magdeburger-devdays-fp-csharp-to-fsharp/theme/mathema-logo.svg",D3={class:"slidev-layout cover"},L3={class:"flex flex-col justify-between items-start ml-5"},j3=t("img",{src:I3,alt:"Mathema Logo",class:"w-50 object-fit-contain"},null,-1),q3={class:"flex flex-col justify-center items-start ml-5 mt-10"},R3={class:"w-full flex justify-center"},B3=["src"],V3=t("div",{class:"gray-triangle"},null,-1),z3=t("div",{class:"red-triangle"},null,-1),W3={__name:"cover",setup(e){const n=S(P);return(s,a)=>(k(),ee("div",D3,[t("div",L3,[j3,t("div",q3,[Ln(s.$slots,"default")]),t("div",R3,[t("img",{src:C(n).configs.occasionLogoUrl,alt:"Occasion Logo",class:"w-50 object-fit-contain"},null,8,B3)])]),V3,z3]))}},H3=T(W3,[["__file","/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/mathema-2023/layouts/cover.vue"]]),U3=t("h1",null,"Von C# zu F#",-1),G3=t("h4",null,"Einführung in die funktionale Programmierung",-1),K3=t("h5",null,"Patrick Drechsler & Martin Grotz",-1),Z3={__name:"1",setup(e){const n={layout:"cover",theme:"./mathema-2023",defaults:{layout:"default-with-footer"},occasion:"MD-DevDays 2023",occasionLogoUrl:"images/logo-magdeburger-devdays-2023.png",company:"MATHEMA GmbH",presenter:"Patrick Drechsler & Martin Grotz",contact:"patrick.drechsler@mathema.de & martin.grotz@mathema.de",info:`## Von C# zu F# – Einführung in die funktionale Programmierung
`,canvasWidth:980,srcSequence:"./pages/00-title.md"};return S(P),(s,a)=>(k(),$(H3,N(M(n)),{default:w(()=>[U3,G3,K3]),_:1},16))}},Y3=T(Z3,[["__file","/@slidev/slides/1.md"]]),J3={class:"slidev-layout two-columns w-full h-full grid grid-cols-2"},Q3=Me({__name:"two-cols",props:{class:{type:String}},setup(e){const n=e;return S(P),(s,a)=>(k(),ee("div",J3,[t("div",{class:We(["col-left",n.class])},[Ln(s.$slots,"default")],2),t("div",{class:We(["col-right",n.class])},[Ln(s.$slots,"right")],2)]))}}),ml=T(Q3,[["__file","/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/node_modules/@slidev/client/layouts/two-cols.vue"]]),X3=t("h2",null,"Patrick Drechsler",-1),ex=t("ul",null,[t("li",null,"Software Entwickler"),t("li",null,"Beruflich: C#"),t("li",null,[o("Interessen: "),t("ul",null,[t("li",null,"Funktionale Programmierung"),t("li",null,"Software Crafting"),t("li",null,"Domain-Driven Design")])])],-1),nx=t("h2",null,"Martin Grotz",-1),tx=t("ul",null,[t("li",null,"Team Lead"),t("li",null,"Beruflich: C#, TypeScript/JavaScript"),t("li",null,[o("Interessen: "),t("ul",null,[t("li",null,"Funktionale Programmierung"),t("li",null,"Web&Mobile Development"),t("li",null,"Soft Skills")])])],-1),sx={__name:"2",setup(e){const n={layout:"two-cols",srcSequence:"./pages/01-intro.md"};return S(P),(s,a)=>(k(),$(ml,N(M(n)),{right:w(r=>[nx,tx]),default:w(()=>[X3,ex]),_:1},16))}},ax=T(sx,[["__file","/@slidev/slides/2.md"]]),rx={__name:"SlidesTotal",setup(e){const n=S(P);return(s,a)=>(k(),ee("span",null,$n(C(n).nav.total),1))}},ox=T(rx,[["__file","/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/node_modules/@slidev/client/builtin/SlidesTotal.vue"]]),ix={__name:"SlideCurrentNo",setup(e){const n=S(P);return(s,a)=>(k(),ee("span",null,$n(C(n).nav.currentPage),1))}},lx=T(ix,[["__file","/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/node_modules/@slidev/client/builtin/SlideCurrentNo.vue"]]),cx={class:"slidev-layout default-with-footer"},ux={class:"my-auto w-full"},px={class:"w-11/12 fixed bottom-0 flex justify-between mb-2 text-xs footer"},dx={style:{"min-width":"4rem"}},fx={__name:"default-with-footer",setup(e){const n=S(P);return(s,a)=>{const r=lx,i=ox;return k(),ee("div",cx,[t("div",ux,[Ln(s.$slots,"default"),t("div",px,[t("span",null,$n(C(n).configs.occasion),1),t("span",null,$n(C(n).configs.company)+" - "+$n(C(n).configs.presenter)+" - "+$n(C(n).configs.contact),1),t("span",dx,[q(r),o(" / "),q(i)])])])])}}},I=T(fx,[["__file","/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/mathema-2023/layouts/default-with-footer.vue"]]),hx=t("h2",null,"Vorstellungsrunde & Erwartungen",-1),mx={__name:"3",setup(e){const n={layout:"default-with-footer",srcSequence:"./pages/vorstellungsrunde_und_erwartungen.md"};return S(P),(s,a)=>(k(),$(I,N(M(n)),{default:w(()=>[hx]),_:1},16))}},gx=T(mx,[["__file","/@slidev/slides/3.md"]]),_x=t("h2",null,"Lernziele",-1),kx=t("ul",null,[t("li",null,"Grundlagen der funktionalen Programmierung"),t("li",null,"Funktionale Programmierung mit C#"),t("li",null,"Grundlagen von F#")],-1),bx={__name:"4",setup(e){const n={layout:"default-with-footer",srcSequence:"./pages/lernziele.md"};return S(P),(s,a)=>(k(),$(I,N(M(n)),{default:w(()=>[_x,kx]),_:1},16))}},vx=T(bx,[["__file","/@slidev/slides/4.md"]]),yx="/2023-05-magdeburger-devdays-fp-csharp-to-fsharp/images/mob-programming-setup.png",wx=t("h2",null,"Mob Programming",-1),xx=t("ul",null,[t("li",null,"wir lernen gemeinsam"),t("li",null,'"Pair Programming in der Gruppe"'),t("li",null,"Driver: Sitzt an der Tastatur (darf nicht denken)"),t("li",null,"Navigator: Sagt dem Driver, was zu tun ist"),t("li",null,"Mob: Unterstützt den Navigator"),t("li",null,"Regelmäßiger Wechsel (5-10min)")],-1),Sx=t("p",null,[t("img",{class:"absolute top-10 right-10 w-100",src:yx})],-1),Ex={__name:"5",setup(e){const n={layout:"default-with-footer",srcSequence:"./pages/mob-programming.md"};return S(P),(s,a)=>(k(),$(I,N(M(n)),{default:w(()=>[wx,xx,Sx]),_:1},16))}},$x=T(Ex,[["__file","/@slidev/slides/5.md"]]),Px=t("h2",null,"Aufgabenstellung - Automatischer Grußkarten-Versand",-1),Tx=t("ul",null,[t("li",null,"Es gibt eine Kundenkartei mit Personen."),t("li",null,[o("Zur Kontaktpflege bekommt jede Person einen personalisierten Geburtstagsgruss per Post "),t("ul",null,[t("li",null,[o("Ein Anwender kann eine neue Person anlegen. Diese wird nur im Arbeitsspeicher vorgehalten. "),t("ul",null,[t("li",null,"Dabei muss ein Vorname angegeben werden"),t("li",null,"Es kann ein Spitzname angegeben werden"),t("li",null,"Es muss ein Geburtstag angegeben werden")])])])])],-1),Cx={__name:"6",setup(e){const n={layout:"default-with-footer",srcSequence:"./pages/demo-app-intro.md"};return S(P),(s,a)=>(k(),$(I,N(M(n)),{default:w(()=>[Px,Tx]),_:1},16))}},Ox=T(Cx,[["__file","/@slidev/slides/6.md"]]),Ax=t("h2",null,"FP 101",-1),Fx=t("ul",null,[t("li",null,"Immutability"),t("li",null,"Functions as First Class Citizens"),t("li",null,"Pure Functions")],-1),Mx=t("p",null,"That’s it!",-1),Nx={__name:"7",setup(e){const n={layout:"default-with-footer",srcSequence:"./pages/02-fp-basics_und_immutability.md"};return S(P),(s,a)=>(k(),$(I,N(M(n)),{default:w(()=>[Ax,Fx,Mx]),_:1},16))}},Ix=T(Nx,[["__file","/@slidev/slides/7.md"]]),Dx={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},Lx=t("path",{fill:"currentColor",d:"M200 32h-36.26a47.92 47.92 0 0 0-71.48 0H56a16 16 0 0 0-16 16v168a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16Zm-72 0a32 32 0 0 1 32 32H96a32 32 0 0 1 32-32Zm72 184H56V48h26.75A47.93 47.93 0 0 0 80 64v8a8 8 0 0 0 8 8h80a8 8 0 0 0 8-8v-8a47.93 47.93 0 0 0-2.75-16H200Z"},null,-1),jx=[Lx];function qx(e,n){return k(),ee("svg",Dx,jx)}const Rx={name:"ph-clipboard",render:qx},Bx={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},Vx=t("path",{fill:"currentColor",d:"M173.66 98.34a8 8 0 0 1 0 11.32l-56 56a8 8 0 0 1-11.32 0l-24-24a8 8 0 0 1 11.32-11.32L112 148.69l50.34-50.35a8 8 0 0 1 11.32 0ZM232 128A104 104 0 1 1 128 24a104.11 104.11 0 0 1 104 104Zm-16 0a88 88 0 1 0-88 88a88.1 88.1 0 0 0 88-88Z"},null,-1),zx=[Vx];function Wx(e,n){return k(),ee("svg",Bx,zx)}const Hx={name:"ph-check-circle",render:Wx},Ux=["title"],Gx=Me({__name:"CodeBlockWrapper",props:{ranges:{default:()=>[]},at:{type:Number,default:void 0},maxHeight:{type:String,default:void 0}},setup(e){const n=e;S(P);const s=S(sa),a=S(Gt),r=S(aa);function i(f=5){const h=[],m="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",g=m.length;for(let b=0;b<f;b++)h.push(m.charAt(Math.floor(Math.random()*g)));return h.join("")}const l=se(),c=An();us(()=>{const f=n.at==null?a==null?void 0:a.value.length:n.at,h=L(()=>r!=null&&r.value?n.ranges.length-1:Math.min(Math.max(0,((s==null?void 0:s.value)||0)-(f||0)),n.ranges.length-1)),m=L(()=>n.ranges[h.value]||"");if(n.ranges.length>=2&&!(r!=null&&r.value)){const g=i(),b=F1(n.ranges.length-1).map(y=>g+y);a!=null&&a.value&&(a.value.push(...b),Kr(()=>b.forEach(y=>ai(a.value,y)),c))}cs(()=>{if(!l.value)return;const b=l.value.querySelector(".shiki-dark")?Array.from(l.value.querySelectorAll(".shiki")):[l.value];for(const y of b){const O=Array.from(y.querySelectorAll(".line")),x=yf(O.length,m.value);if(O.forEach((E,A)=>{const R=x.includes(A+1);E.classList.toggle(Ht,!0),E.classList.toggle("highlighted",R),E.classList.toggle("dishonored",!R)}),n.maxHeight){const E=y.querySelector(".line.highlighted");E&&E.scrollIntoView({behavior:"smooth",block:"center"})}}})});const{copied:u,copy:p}=Dk();function d(){var h,m;const f=(m=(h=l.value)==null?void 0:h.querySelector(".slidev-code"))==null?void 0:m.textContent;f&&p(f)}return(f,h)=>{const m=Hx,g=Rx;return k(),ee("div",{ref_key:"el",ref:l,class:"slidev-code-wrapper relative group",style:tn({"max-height":n.maxHeight,"overflow-y":n.maxHeight?"scroll":void 0})},[Ln(f.$slots,"default"),C(Ce).codeCopy?(k(),ee("button",{key:0,class:"slidev-code-copy absolute top-0 right-0 transition opacity-0 group-hover:opacity-20 hover:!opacity-100",title:C(u)?"Copied":"Copy",onClick:h[0]||(h[0]=b=>d())},[C(u)?(k(),$(m,{key:0,class:"p-2 w-8 h-8"})):(k(),$(g,{key:1,class:"p-2 w-8 h-8"}))],8,Ux)):Se("v-if",!0)],4)}}}),be=T(Gx,[["__file","/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/node_modules/@slidev/client/builtin/CodeBlockWrapper.vue"]]),Kx=t("h3",null,"Immutability in C#",-1),Zx=t("pre",{class:"slidev-code language-csharp"},[t("code",null,[t("span",{class:"line"},[t("span",{class:"token keyword"},"public"),o(),t("span",{class:"token keyword"},"class"),o(),t("span",{class:"token class-name"},"Customer")]),o(`
`),t("span",{class:"line"},[t("span",{class:"token punctuation"},"{")]),o(`
`),t("span",{class:"line"},[o("  "),t("span",{class:"token keyword"},"public"),o(),t("span",{class:"token return-type class-name"},[t("span",{class:"token keyword"},"string")]),o(" Name "),t("span",{class:"token punctuation"},"{"),o(),t("span",{class:"token keyword"},"get"),t("span",{class:"token punctuation"},";"),o(),t("span",{class:"token keyword"},"set"),t("span",{class:"token punctuation"},";"),o(),t("span",{class:"token punctuation"},"}"),o(),t("span",{class:"token comment"},"// set -> mutable :-(")]),o(`
`),t("span",{class:"line"},[t("span",{class:"token punctuation"},"}")])])],-1),Yx=t("p",null,"vs",-1),Jx=t("pre",{class:"slidev-code language-csharp"},[t("code",null,[t("span",{class:"line"},[t("span",{class:"token keyword"},"public"),o(),t("span",{class:"token keyword"},"class"),o(),t("span",{class:"token class-name"},"Customer")]),o(`
`),t("span",{class:"line"},[t("span",{class:"token punctuation"},"{")]),o(`
`),t("span",{class:"line"},[o("  "),t("span",{class:"token keyword"},"public"),o(),t("span",{class:"token function"},"Customer"),t("span",{class:"token punctuation"},"("),t("span",{class:"token class-name"},[t("span",{class:"token keyword"},"string")]),o(" name"),t("span",{class:"token punctuation"},")")]),o(`
`),t("span",{class:"line"},[o("  "),t("span",{class:"token punctuation"},"{")]),o(`
`),t("span",{class:"line"},[o("    Name "),t("span",{class:"token operator"},"="),o(" name"),t("span",{class:"token punctuation"},";")]),o(`
`),t("span",{class:"line"},[o("  "),t("span",{class:"token punctuation"},"}")]),o(`
`),t("span",{class:"line"},"  "),o(`
`),t("span",{class:"line"},[o("  "),t("span",{class:"token keyword"},"public"),o(),t("span",{class:"token return-type class-name"},[t("span",{class:"token keyword"},"string")]),o(" Name "),t("span",{class:"token punctuation"},"{"),o(),t("span",{class:"token keyword"},"get"),t("span",{class:"token punctuation"},";"),o(),t("span",{class:"token punctuation"},"}"),o(),t("span",{class:"token comment"},"// <- immutable")]),o(`
`),t("span",{class:"line"},[t("span",{class:"token punctuation"},"}")])])],-1),Qx={__name:"8",setup(e){const n={layout:"default-with-footer",srcSequence:"./pages/02-fp-basics_und_immutability.md"};return S(P),(s,a)=>{const r=be;return k(),$(I,N(M(n)),{default:w(()=>[Kx,q(r,le({},{ranges:[""]}),{default:w(()=>[Zx]),_:1},16),Yx,q(r,le({},{ranges:[""]}),{default:w(()=>[Jx]),_:1},16)]),_:1},16)}}},Xx=T(Qx,[["__file","/@slidev/slides/8.md"]]),eS=t("p",null,"Syntax matters!",-1),nS=t("p",null,"Classic C#",-1),tS=t("pre",{class:"slidev-code language-csharp"},[t("code",null,[t("span",{class:"line"},[t("span",{class:"token return-type class-name"},[t("span",{class:"token keyword"},"int")]),o(),t("span",{class:"token function"},"Add"),t("span",{class:"token punctuation"},"("),t("span",{class:"token class-name"},[t("span",{class:"token keyword"},"int")]),o(" a"),t("span",{class:"token punctuation"},","),o(),t("span",{class:"token class-name"},[t("span",{class:"token keyword"},"int")]),o(" b"),t("span",{class:"token punctuation"},")")]),o(`
`),t("span",{class:"line"},[t("span",{class:"token punctuation"},"{")]),o(`
`),t("span",{class:"line"},[o("  "),t("span",{class:"token keyword"},"return"),o(" a "),t("span",{class:"token operator"},"+"),o(" b"),t("span",{class:"token punctuation"},";")]),o(`
`),t("span",{class:"line"},[t("span",{class:"token punctuation"},"}")])])],-1),sS=t("p",null,"Expression body",-1),aS=t("pre",{class:"slidev-code language-csharp"},[t("code",null,[t("span",{class:"line"},[t("span",{class:"token return-type class-name"},[t("span",{class:"token keyword"},"int")]),o(),t("span",{class:"token function"},"Add"),t("span",{class:"token punctuation"},"("),t("span",{class:"token class-name"},[t("span",{class:"token keyword"},"int")]),o(" a"),t("span",{class:"token punctuation"},","),o(),t("span",{class:"token class-name"},[t("span",{class:"token keyword"},"int")]),o(" b"),t("span",{class:"token punctuation"},")"),o(),t("span",{class:"token operator"},"=>"),o(" a "),t("span",{class:"token operator"},"+"),o(" b"),t("span",{class:"token punctuation"},";")])])],-1),rS={__name:"9",setup(e){const n={layout:"default-with-footer",srcSequence:"./pages/02-fp-basics_und_immutability.md"};return S(P),(s,a)=>{const r=be;return k(),$(I,N(M(n)),{default:w(()=>[eS,nS,q(r,le({},{ranges:[""]}),{default:w(()=>[tS]),_:1},16),sS,q(r,le({},{ranges:[""]}),{default:w(()=>[aS]),_:1},16)]),_:1},16)}}},oS=T(rS,[["__file","/@slidev/slides/9.md"]]),iS=t("p",null,"Syntax matters!",-1),lS=t("p",null,"Classic C#",-1),cS=t("pre",{class:"slidev-code language-csharp"},[t("code",null,[t("span",{class:"line"},[t("span",{class:"token return-type class-name"},[t("span",{class:"token keyword"},"int")]),o(),t("span",{class:"token function"},"Add"),t("span",{class:"token punctuation"},"("),t("span",{class:"token class-name"},[t("span",{class:"token keyword"},"int")]),o(" a"),t("span",{class:"token punctuation"},","),o(),t("span",{class:"token class-name"},[t("span",{class:"token keyword"},"int")]),o(" b"),t("span",{class:"token punctuation"},")")]),o(`
`),t("span",{class:"line"},[t("span",{class:"token punctuation"},"{")]),o(`
`),t("span",{class:"line"},[o("  Console"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"WriteLine"),t("span",{class:"token punctuation"},"("),t("span",{class:"token string"},'"bla"'),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),o(),t("span",{class:"token comment"},"// <- side effect!")]),o(`
`),t("span",{class:"line"},[o("  "),t("span",{class:"token keyword"},"return"),o(" a "),t("span",{class:"token operator"},"+"),o(" b"),t("span",{class:"token punctuation"},";")]),o(`
`),t("span",{class:"line"},[t("span",{class:"token punctuation"},"}")])])],-1),uS=t("p",null,"Expression body: Seiteneffekte sind schwieriger reinzubauen",-1),pS=t("pre",{class:"slidev-code language-csharp"},[t("code",null,[t("span",{class:"line"},[t("span",{class:"token return-type class-name"},[t("span",{class:"token keyword"},"int")]),o(),t("span",{class:"token function"},"Add"),t("span",{class:"token punctuation"},"("),t("span",{class:"token class-name"},[t("span",{class:"token keyword"},"int")]),o(" a"),t("span",{class:"token punctuation"},","),o(),t("span",{class:"token class-name"},[t("span",{class:"token keyword"},"int")]),o(" b"),t("span",{class:"token punctuation"},")"),o(),t("span",{class:"token operator"},"=>"),o(" a "),t("span",{class:"token operator"},"+"),o(" b"),t("span",{class:"token punctuation"},";")])])],-1),dS={__name:"10",setup(e){const n={layout:"default-with-footer",srcSequence:"./pages/02-fp-basics_und_immutability.md"};return S(P),(s,a)=>{const r=be;return k(),$(I,N(M(n)),{default:w(()=>[iS,lS,q(r,le({},{ranges:[""]}),{default:w(()=>[cS]),_:1},16),uS,q(r,le({},{ranges:[""]}),{default:w(()=>[pS]),_:1},16)]),_:1},16)}}},fS=T(dS,[["__file","/@slidev/slides/10.md"]]),hS=t("h2",null,"Neue Anforderung!",-1),mS=t("p",null,"Der Vorname einer Person darf niemals leer sein",-1),gS={__name:"11",setup(e){const n={layout:"default-with-footer",srcSequence:"./pages/anforderung_vorname_darf_niemals_leer_sein.md"};return S(P),(s,a)=>(k(),$(I,N(M(n)),{default:w(()=>[hS,mS]),_:1},16))}},_S=T(gS,[["__file","/@slidev/slides/11.md"]]),kS=t("h1",null,"Value Objects",-1),bS={__name:"12",setup(e){const n={layout:"default-with-footer",srcSequence:"./pages/value-objects.md"};return S(P),(s,a)=>(k(),$(I,N(M(n)),{default:w(()=>[kS]),_:1},16))}},vS=T(bS,[["__file","/@slidev/slides/12.md"]]),yS=t("h2",null,"Value Objects",-1),wS=t("p",null,"Warum?",-1),xS=t("ul",null,[t("li",null,[o("Methoden sollten nicht lügen! "),t("ul",null,[t("li",null,"Null: NullPointerException, Null-Checks"),t("li",null,"Antipattern: Primitive Obsession")])])],-1),SS={__name:"13",setup(e){const n={layout:"default-with-footer",srcSequence:"./pages/value-objects.md"};return S(P),(s,a)=>(k(),$(I,N(M(n)),{default:w(()=>[yS,wS,xS]),_:1},16))}},ES=T(SS,[["__file","/@slidev/slides/13.md"]]),$S=t("h3",null,"Beispiele",-1),PS=t("pre",{class:"slidev-code language-csharp"},[t("code",null,[t("span",{class:"line"},[t("span",{class:"token comment"},"// :-(")]),o(`
`),t("span",{class:"line"},[t("span",{class:"token return-type class-name"},[t("span",{class:"token keyword"},"void")]),o(),t("span",{class:"token function"},"Einzahlen"),t("span",{class:"token punctuation"},"("),t("span",{class:"token class-name"},[t("span",{class:"token keyword"},"int")]),o(" wert"),t("span",{class:"token punctuation"},","),o(),t("span",{class:"token class-name"},"SomeEnum"),o(" waehrung"),t("span",{class:"token punctuation"},")"),o(),t("span",{class:"token punctuation"},"{"),o(),t("span",{class:"token comment"},"/* ... */"),o(),t("span",{class:"token punctuation"},"}")]),o(`
`),t("span",{class:"line"}),o(`
`),t("span",{class:"line"},[t("span",{class:"token comment"},"// ;-)")]),o(`
`),t("span",{class:"line"},[t("span",{class:"token return-type class-name"},[t("span",{class:"token keyword"},"void")]),o(),t("span",{class:"token function"},"Einzahlen"),t("span",{class:"token punctuation"},"("),t("span",{class:"token class-name"},"Geld"),o(" geld"),t("span",{class:"token punctuation"},")"),o(),t("span",{class:"token punctuation"},"{"),o(),t("span",{class:"token comment"},"/* ... */"),o(),t("span",{class:"token punctuation"},"}")])])],-1),TS=t("pre",{class:"slidev-code language-csharp"},[t("code",null,[t("span",{class:"line"},[t("span",{class:"token keyword"},"class"),o(),t("span",{class:"token class-name"},"Kunde"),o(),t("span",{class:"token punctuation"},"{")]),o(`
`),t("span",{class:"line"},[o("    "),t("span",{class:"token return-type class-name"},[t("span",{class:"token keyword"},"int")]),o(" Alter "),t("span",{class:"token punctuation"},"{"),o(),t("span",{class:"token keyword"},"get"),t("span",{class:"token punctuation"},";"),o(),t("span",{class:"token keyword"},"set"),t("span",{class:"token punctuation"},";"),o(),t("span",{class:"token punctuation"},"}"),o(),t("span",{class:"token comment"},"// :-(")]),o(`
`),t("span",{class:"line"},"    "),o(`
`),t("span",{class:"line"},[o("    "),t("span",{class:"token comment"},"// ist `i` das aktuelle Alter oder das Geburtsjahr??")]),o(`
`),t("span",{class:"line"},[o("    "),t("span",{class:"token return-type class-name"},[t("span",{class:"token keyword"},"bool")]),o(),t("span",{class:"token function"},"IstVolljaehrig"),t("span",{class:"token punctuation"},"("),t("span",{class:"token class-name"},[t("span",{class:"token keyword"},"int")]),o(" i"),t("span",{class:"token punctuation"},")"),o(),t("span",{class:"token punctuation"},"{"),o(),t("span",{class:"token comment"},"/* ... */"),t("span",{class:"token punctuation"},"}")]),o(`
`),t("span",{class:"line"},[t("span",{class:"token punctuation"},"}")]),o(`
`),t("span",{class:"line"}),o(`
`),t("span",{class:"line"},[t("span",{class:"token keyword"},"class"),o(),t("span",{class:"token class-name"},"Kunde"),o(),t("span",{class:"token punctuation"},"{")]),o(`
`),t("span",{class:"line"},[o("    "),t("span",{class:"token return-type class-name"},"Alter"),o(" Alter "),t("span",{class:"token punctuation"},"{"),o(),t("span",{class:"token keyword"},"get"),t("span",{class:"token punctuation"},";"),o(),t("span",{class:"token keyword"},"set"),t("span",{class:"token punctuation"},";"),o(),t("span",{class:"token punctuation"},"}"),o(),t("span",{class:"token comment"},"// ;-)")]),o(`
`),t("span",{class:"line"}),o(`
`),t("span",{class:"line"},[o("    "),t("span",{class:"token return-type class-name"},[t("span",{class:"token keyword"},"bool")]),o(),t("span",{class:"token function"},"IstVolljaehrig"),t("span",{class:"token punctuation"},"("),t("span",{class:"token class-name"},"Alter"),o(" alter"),t("span",{class:"token punctuation"},")"),o(),t("span",{class:"token punctuation"},"{"),o(),t("span",{class:"token comment"},"/* ... */"),t("span",{class:"token punctuation"},"}")]),o(`
`),t("span",{class:"line"}),o(`
`),t("span",{class:"line"},[o("    "),t("span",{class:"token return-type class-name"},[t("span",{class:"token keyword"},"bool")]),o(),t("span",{class:"token function"},"IstVolljaehrig"),t("span",{class:"token punctuation"},"("),t("span",{class:"token class-name"},"Geburtsjahr"),o(" geburtsjahr"),t("span",{class:"token punctuation"},")"),o(),t("span",{class:"token punctuation"},"{"),o(),t("span",{class:"token comment"},"/* ... */"),t("span",{class:"token punctuation"},"}")]),o(`
`),t("span",{class:"line"},[t("span",{class:"token punctuation"},"}")])])],-1),CS={__name:"14",setup(e){const n={layout:"default-with-footer",srcSequence:"./pages/value-objects.md"};return S(P),(s,a)=>{const r=be;return k(),$(I,N(M(n)),{default:w(()=>[$S,q(r,le({},{ranges:[""]}),{default:w(()=>[PS]),_:1},16),q(r,le({},{ranges:[""]}),{default:w(()=>[TS]),_:1},16)]),_:1},16)}}},OS=T(CS,[["__file","/@slidev/slides/14.md"]]),AS="/2023-05-magdeburger-devdays-fp-csharp-to-fsharp/images/wikipedia-value-objects.png",FS=t("p",null,[t("img",{src:AS,alt:"img"})],-1),MS={__name:"15",setup(e){const n={layout:"default-with-footer",srcSequence:"./pages/value-objects.md"};return S(P),(s,a)=>(k(),$(I,N(M(n)),{default:w(()=>[FS]),_:1},16))}},NS=T(MS,[["__file","/@slidev/slides/15.md"]]),IS=t("h2",null,"Value Objects",-1),DS=t("ul",null,[t("li",null,"nur gültige Objekte erlaubt"),t("li",null,"immutable"),t("li",null,"equality by structure")],-1),LS={__name:"16",setup(e){const n={layout:"default-with-footer",srcSequence:"./pages/value-objects.md"};return S(P),(s,a)=>(k(),$(I,N(M(n)),{default:w(()=>[IS,DS]),_:1},16))}},jS=T(LS,[["__file","/@slidev/slides/16.md"]]),qS=t("h3",null,"Nur gültige Objekte",-1),RS=t("p",null,"Es muss bei der Erstellung gewährleistet sein, dass das Objekt gültig ist.",-1),BS={__name:"17",setup(e){const n={layout:"default-with-footer",srcSequence:"./pages/value-objects.md"};return S(P),(s,a)=>(k(),$(I,N(M(n)),{default:w(()=>[qS,RS]),_:1},16))}},VS=T(BS,[["__file","/@slidev/slides/17.md"]]),zS=t("h3",null,"Nur gültige Objekte",-1),WS=t("p",null,"Optionen:",-1),HS=t("ul",null,[t("li",null,"Konstruktor mit allen Parametern"),t("li",null,"statische Hilfsmethode & privater Konstruktor")],-1),US={__name:"18",setup(e){const n={layout:"default-with-footer",srcSequence:"./pages/value-objects.md"};return S(P),(s,a)=>(k(),$(I,N(M(n)),{default:w(()=>[zS,WS,HS]),_:1},16))}},GS=T(US,[["__file","/@slidev/slides/18.md"]]),KS=t("h4",null,"Value Objects erstellen / 1",-1),ZS=t("pre",{class:"slidev-code language-csharp"},[t("code",null,[t("span",{class:"line"},[t("span",{class:"token keyword"},"class"),o(),t("span",{class:"token class-name"},"Geld"),o()]),o(`
`),t("span",{class:"line"},[t("span",{class:"token punctuation"},"{")]),o(`
`),t("span",{class:"line"},[o("    "),t("span",{class:"token return-type class-name"},[t("span",{class:"token keyword"},"int")]),o(" Betrag "),t("span",{class:"token punctuation"},"{"),o(),t("span",{class:"token keyword"},"get"),t("span",{class:"token punctuation"},";"),o(),t("span",{class:"token punctuation"},"}")]),o(`
`),t("span",{class:"line"},[o("    "),t("span",{class:"token return-type class-name"},"Waehrung"),o(" Waehrung "),t("span",{class:"token punctuation"},"{"),o(),t("span",{class:"token keyword"},"get"),t("span",{class:"token punctuation"},";"),o(),t("span",{class:"token punctuation"},"}")]),o(`
`),t("span",{class:"line"}),o(`
`),t("span",{class:"line"},[o("    "),t("span",{class:"token function"},"Geld"),t("span",{class:"token punctuation"},"("),t("span",{class:"token class-name"},[t("span",{class:"token keyword"},"int")]),o(" betrag"),t("span",{class:"token punctuation"},","),o(),t("span",{class:"token class-name"},"Waehrung"),o(" waehrung"),t("span",{class:"token punctuation"},")"),o(),t("span",{class:"token punctuation"},"{")]),o(`
`),t("span",{class:"line"},[o("        "),t("span",{class:"token keyword"},"if"),o(),t("span",{class:"token punctuation"},"("),t("span",{class:"token operator"},"!"),t("span",{class:"token function"},"IsValid"),t("span",{class:"token punctuation"},"("),o("betrag"),t("span",{class:"token punctuation"},","),o(" Waehrung"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},")"),o()]),o(`
`),t("span",{class:"line"},[o("            "),t("span",{class:"token keyword"},"throw"),o(),t("span",{class:"token keyword"},"new"),o(),t("span",{class:"token constructor-invocation class-name"},"InvalidGeldException"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";")]),o(`
`),t("span",{class:"line"}),o(`
`),t("span",{class:"line"},[o("        Betrag "),t("span",{class:"token operator"},"="),o(" betrag"),t("span",{class:"token punctuation"},";")]),o(`
`),t("span",{class:"line"},[o("        Waehrung "),t("span",{class:"token operator"},"="),o(" waehrung"),t("span",{class:"token punctuation"},";")]),o(`
`),t("span",{class:"line"},[o("    "),t("span",{class:"token punctuation"},"}")]),o(`
`),t("span",{class:"line"}),o(`
`),t("span",{class:"line"},[o("    "),t("span",{class:"token return-type class-name"},[t("span",{class:"token keyword"},"bool")]),o(),t("span",{class:"token function"},"IsValid"),t("span",{class:"token punctuation"},"("),t("span",{class:"token class-name"},[t("span",{class:"token keyword"},"int")]),o(" betrag"),t("span",{class:"token punctuation"},","),o(),t("span",{class:"token class-name"},"Waehrung"),o(" waehrung"),t("span",{class:"token punctuation"},")")]),o(`
`),t("span",{class:"line"},[o("        "),t("span",{class:"token operator"},"=>"),o(" betrag "),t("span",{class:"token operator"},">"),o(),t("span",{class:"token number"},"0"),o(),t("span",{class:"token operator"},"&&"),o(" waehrung "),t("span",{class:"token operator"},"!="),o(" Waehrung"),t("span",{class:"token punctuation"},"."),o("Undefined"),t("span",{class:"token punctuation"},";")]),o(`
`),t("span",{class:"line"},[t("span",{class:"token punctuation"},"}")])])],-1),YS={__name:"19",setup(e){const n={layout:"default-with-footer",srcSequence:"./pages/value-objects.md"};return S(P),(s,a)=>{const r=be;return k(),$(I,N(M(n)),{default:w(()=>[KS,q(r,le({},{ranges:[""]}),{default:w(()=>[ZS]),_:1},16)]),_:1},16)}}},JS=T(YS,[["__file","/@slidev/slides/19.md"]]),QS=t("h4",null,"Value Objects erstellen / 2",-1),XS=t("pre",{class:"slidev-code language-csharp"},[t("code",null,[t("span",{class:"line"},[t("span",{class:"token keyword"},"class"),o(),t("span",{class:"token class-name"},"Geld"),o()]),o(`
`),t("span",{class:"line"},[t("span",{class:"token punctuation"},"{")]),o(`
`),t("span",{class:"line"},[o("    "),t("span",{class:"token return-type class-name"},[t("span",{class:"token keyword"},"int")]),o(" Betrag "),t("span",{class:"token punctuation"},"{"),o(),t("span",{class:"token keyword"},"get"),t("span",{class:"token punctuation"},";"),o(),t("span",{class:"token punctuation"},"}")]),o(`
`),t("span",{class:"line"},[o("    "),t("span",{class:"token return-type class-name"},"Waehrung"),o(" Waehrung "),t("span",{class:"token punctuation"},"{"),o(),t("span",{class:"token keyword"},"get"),t("span",{class:"token punctuation"},";"),o(),t("span",{class:"token punctuation"},"}")]),o(`
`),t("span",{class:"line"}),o(`
`),t("span",{class:"line"},[o("    "),t("span",{class:"token keyword"},"static"),o(),t("span",{class:"token return-type class-name"},"Geld"),o(),t("span",{class:"token function"},"Create"),t("span",{class:"token punctuation"},"("),t("span",{class:"token class-name"},[t("span",{class:"token keyword"},"int")]),o(" betrag"),t("span",{class:"token punctuation"},","),o(),t("span",{class:"token class-name"},"Waehrung"),o(" waehrung"),t("span",{class:"token punctuation"},")"),o(),t("span",{class:"token punctuation"},"{")]),o(`
`),t("span",{class:"line"},[o("        "),t("span",{class:"token keyword"},"return"),o(),t("span",{class:"token keyword"},"new"),o(),t("span",{class:"token constructor-invocation class-name"},"Geld"),t("span",{class:"token punctuation"},"("),o("betrag"),t("span",{class:"token punctuation"},","),o(" waehrung"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";")]),o(`
`),t("span",{class:"line"},[o("    "),t("span",{class:"token punctuation"},"}")]),o(`
`),t("span",{class:"line"}),o(`
`),t("span",{class:"line"},[o("    "),t("span",{class:"token comment"},"// private ctor")]),o(`
`),t("span",{class:"line"},[o("    "),t("span",{class:"token keyword"},"private"),o(),t("span",{class:"token function"},"Geld"),t("span",{class:"token punctuation"},"("),t("span",{class:"token class-name"},[t("span",{class:"token keyword"},"int")]),o(" betrag"),t("span",{class:"token punctuation"},","),o(),t("span",{class:"token class-name"},"Waehrung"),o(" waehrung"),t("span",{class:"token punctuation"},")"),o(),t("span",{class:"token punctuation"},"{")]),o(`
`),t("span",{class:"line"},[o("        "),t("span",{class:"token keyword"},"if"),o(),t("span",{class:"token punctuation"},"("),t("span",{class:"token operator"},"!"),t("span",{class:"token function"},"IsValid"),t("span",{class:"token punctuation"},"("),o("betrag"),t("span",{class:"token punctuation"},","),o(" Waehrung"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},")"),o()]),o(`
`),t("span",{class:"line"},[o("            "),t("span",{class:"token keyword"},"throw"),o(),t("span",{class:"token keyword"},"new"),o(),t("span",{class:"token constructor-invocation class-name"},"InvalidGeldException"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";")]),o(`
`),t("span",{class:"line"}),o(`
`),t("span",{class:"line"},[o("        Betrag "),t("span",{class:"token operator"},"="),o(" betrag"),t("span",{class:"token punctuation"},";")]),o(`
`),t("span",{class:"line"},[o("        Waehrung "),t("span",{class:"token operator"},"="),o(" waehrung"),t("span",{class:"token punctuation"},";")]),o(`
`),t("span",{class:"line"},[o("    "),t("span",{class:"token punctuation"},"}")]),o(`
`),t("span",{class:"line"}),o(`
`),t("span",{class:"line"},[o("    "),t("span",{class:"token return-type class-name"},[t("span",{class:"token keyword"},"bool")]),o(),t("span",{class:"token function"},"IsValid"),t("span",{class:"token punctuation"},"("),t("span",{class:"token class-name"},[t("span",{class:"token keyword"},"int")]),o(" betrag"),t("span",{class:"token punctuation"},","),o(),t("span",{class:"token class-name"},"Waehrung"),o(" waehrung"),t("span",{class:"token punctuation"},")")]),o(`
`),t("span",{class:"line"},[o("        "),t("span",{class:"token operator"},"=>"),o(" betrag "),t("span",{class:"token operator"},">"),o(),t("span",{class:"token number"},"0"),o(),t("span",{class:"token operator"},"&&"),o(" waehrung "),t("span",{class:"token operator"},"!="),o(" Waehrung"),t("span",{class:"token punctuation"},"."),o("Undefined"),t("span",{class:"token punctuation"},";")]),o(`
`),t("span",{class:"line"},[t("span",{class:"token punctuation"},"}")])])],-1),eE={__name:"20",setup(e){const n={layout:"default-with-footer",srcSequence:"./pages/value-objects.md"};return S(P),(s,a)=>{const r=be;return k(),$(I,N(M(n)),{default:w(()=>[QS,q(r,le({},{ranges:[""]}),{default:w(()=>[XS]),_:1},16)]),_:1},16)}}},nE=T(eE,[["__file","/@slidev/slides/20.md"]]),tE=t("h3",null,"Immutability",-1),sE=t("p",null,[o("Damit ein C# Objekt unveränderlich wird, muss gewährleistet sein, dass es auch "),t("strong",null,"nach Erstellung nicht verändert wird"),o(".")],-1),aE=t("ul",null,[t("li",null,"interne Werte dürfen ausschließlich vom Konstruktor verändert werden"),t("li",null,"kein public oder private setter"),t("li",null,"kein parameterloser Konstrukor")],-1),rE={__name:"21",setup(e){const n={layout:"default-with-footer",srcSequence:"./pages/value-objects.md"};return S(P),(s,a)=>(k(),$(I,N(M(n)),{default:w(()=>[tE,sE,aE]),_:1},16))}},oE=T(rE,[["__file","/@slidev/slides/21.md"]]),iE=t("h3",null,"Equality by structure",-1),lE=t("p",null,"Zwei Objekte sind gleich, wenn sie die gleichen Werte haben.",-1),cE={__name:"22",setup(e){const n={layout:"default-with-footer",srcSequence:"./pages/value-objects.md"};return S(P),(s,a)=>(k(),$(I,N(M(n)),{default:w(()=>[iE,lE]),_:1},16))}},uE=T(cE,[["__file","/@slidev/slides/22.md"]]),pE=t("h3",null,"Exkurs: Vergleichbarkeit",-1),dE=t("ul",null,[t("li",null,"Equality by reference"),t("li",null,"Equality by id"),t("li",null,"Equality by structure")],-1),fE={__name:"23",setup(e){const n={layout:"default-with-footer",srcSequence:"./pages/value-objects.md"};return S(P),(s,a)=>(k(),$(I,N(M(n)),{default:w(()=>[pE,dE]),_:1},16))}},hE=T(fE,[["__file","/@slidev/slides/23.md"]]),mE=t("h3",null,"Equality by structure",-1),gE=t("p",null,"Zwei Objekte sind gleich, wenn sie die gleichen Werte haben.",-1),_E=t("ul",null,[t("li",null,[t("code",null,"Equals"),o(" und "),t("code",null,"GetHashcode"),o(" überschreiben")])],-1),kE=t("pre",{class:"slidev-code language-csharp"},[t("code",null,[t("span",{class:"line"},[t("span",{class:"token keyword"},"override"),o(),t("span",{class:"token return-type class-name"},[t("span",{class:"token keyword"},"bool")]),o(),t("span",{class:"token function"},"Equals"),t("span",{class:"token punctuation"},"("),t("span",{class:"token class-name"},"Geld"),o(" other"),t("span",{class:"token punctuation"},")")]),o(`
`),t("span",{class:"line"},[o("    "),t("span",{class:"token operator"},"=>"),o(" other"),t("span",{class:"token punctuation"},"."),o("Betrag   "),t("span",{class:"token operator"},"=="),o(),t("span",{class:"token keyword"},"this"),t("span",{class:"token punctuation"},"."),o("Betrag "),t("span",{class:"token operator"},"&&")]),o(`
`),t("span",{class:"line"},[o("       other"),t("span",{class:"token punctuation"},"."),o("Waehrung "),t("span",{class:"token operator"},"=="),o(),t("span",{class:"token keyword"},"this"),t("span",{class:"token punctuation"},"."),o("Waehrung"),t("span",{class:"token punctuation"},";")]),o(`
`),t("span",{class:"line"}),o(`
`),t("span",{class:"line"},[t("span",{class:"token keyword"},"override"),o(),t("span",{class:"token return-type class-name"},[t("span",{class:"token keyword"},"int")]),o(),t("span",{class:"token function"},"GetHashCode"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),o(),t("span",{class:"token punctuation"},"{"),o(),t("span",{class:"token comment"},"/* ... */"),o(),t("span",{class:"token punctuation"},"}")])])],-1),bE={__name:"24",setup(e){const n={layout:"default-with-footer",srcSequence:"./pages/value-objects.md"};return S(P),(s,a)=>{const r=be;return k(),$(I,N(M(n)),{default:w(()=>[mE,gE,_E,q(r,le({},{ranges:[""]}),{default:w(()=>[kE]),_:1},16)]),_:1},16)}}},vE=T(bE,[["__file","/@slidev/slides/24.md"]]),yE=t("h3",null,"C# 9 and greater…",-1),wE=t("p",null,"C# records sind ein erster Schritt in die richtige Richtung:",-1),xE=t("ul",null,[t("li",null,"immutable")],-1),SE={__name:"25",setup(e){const n={layout:"default-with-footer",srcSequence:"./pages/value-objects.md"};return S(P),(s,a)=>(k(),$(I,N(M(n)),{default:w(()=>[yE,wE,xE]),_:1},16))}},EE=T(SE,[["__file","/@slidev/slides/25.md"]]),$E=t("h3",null,"Exkurs",-1),PE=t("ul",null,[t("li",null,"manchmal genügt ein (leichtgewichtiges C#) record"),t("li",null,"aber: eigentlich will man soviel Logik wie möglich in ein Objekt packen (OO, Value Objekt, DDD)"),t("li",null,[o("(OO vs FP) und DDD "),t("ul",null,[t("li",null,"OO: Objekt mit Verhalten -> Ursprung von Value Objekt (und DDD)"),t("li",null,"FP: Strikte Trennung von Daten und Verhalten")])])],-1),TE=t("p",null,"Das Schöne an den unterschiedlichen Meinungen ist:",-1),CE=t("ul",null,[t("li",null,"man kann es situationsbedingt einfach lösen"),t("li",null,"Und sich das Beste rauspicken")],-1),OE={__name:"26",setup(e){const n={layout:"default-with-footer",srcSequence:"./pages/value-objects.md"};return S(P),(s,a)=>(k(),$(I,N(M(n)),{default:w(()=>[$E,PE,TE,CE]),_:1},16))}},AE=T(OE,[["__file","/@slidev/slides/26.md"]]),FE=t("h1",null,"Let’s code",-1),ME={__name:"27",setup(e){const n={layout:"default-with-footer",srcSequence:"./pages/letscode.md"};return S(P),(s,a)=>(k(),$(I,N(M(n)),{default:w(()=>[FE]),_:1},16))}},NE=T(ME,[["__file","/@slidev/slides/27.md"]]),IE=t("h2",null,"Neue Anforderung!",-1),DE=t("p",null,"Der Vorname einer Person darf niemals leer sein",-1),LE={__name:"28",setup(e){const n={layout:"default-with-footer",srcSequence:"./pages/anforderung_vorname_darf_niemals_leer_sein.md"};return S(P),(s,a)=>(k(),$(I,N(M(n)),{default:w(()=>[IE,DE]),_:1},16))}},jE=T(LE,[["__file","/@slidev/slides/28.md"]]),qE=t("h2",null,"FP 101 - functions",-1),RE=t("h3",null,"1st class functions in C#",-1),BE=t("p",null,"Funktionen können als Parameter verwendet werden",-1),VE={__name:"29",setup(e){const n={layout:"default-with-footer",srcSequence:"./pages/02-fp-basics_first_class_functions.md"};return S(P),(s,a)=>(k(),$(I,N(M(n)),{default:w(()=>[qE,RE,BE]),_:1},16))}},zE=T(VE,[["__file","/@slidev/slides/29.md"]]),WE=t("p",null,"…Ähnlichkeit mit Interfaces in der OO-Welt…",-1),HE={__name:"30",setup(e){const n={layout:"default-with-footer",srcSequence:"./pages/02-fp-basics_first_class_functions.md"};return S(P),(s,a)=>(k(),$(I,N(M(n)),{default:w(()=>[WE]),_:1},16))}},UE=T(HE,[["__file","/@slidev/slides/30.md"]]),GE=t("h4",null,"Strategy-Pattern",-1),KE=t("pre",{class:"slidev-code language-csharp"},[t("code",null,[t("span",{class:"line"},[t("span",{class:"token keyword"},"interface"),o(),t("span",{class:"token class-name"},"ICalculateSalary")]),o(`
`),t("span",{class:"line"},[t("span",{class:"token punctuation"},"{")]),o(`
`),t("span",{class:"line"},[o("  "),t("span",{class:"token return-type class-name"},[t("span",{class:"token keyword"},"int")]),o(),t("span",{class:"token function"},"ByInput"),t("span",{class:"token punctuation"},"("),t("span",{class:"token class-name"},[t("span",{class:"token keyword"},"int")]),o(" i"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),o("            "),t("span",{class:"token comment"},"// <- Methodensignatur")]),o(`
`),t("span",{class:"line"},[t("span",{class:"token punctuation"},"}")]),o(`
`),t("span",{class:"line"}),o(`
`),t("span",{class:"line"},[t("span",{class:"token keyword"},"class"),o(),t("span",{class:"token class-name"},"Manager"),t("span",{class:"token punctuation"},":"),o(),t("span",{class:"token type-list"},[t("span",{class:"token class-name"},"ICalculateSalary")])]),o(`
`),t("span",{class:"line"},[t("span",{class:"token punctuation"},"{")]),o(`
`),t("span",{class:"line"},[o("  "),t("span",{class:"token return-type class-name"},[t("span",{class:"token keyword"},"int")]),o(),t("span",{class:"token function"},"ByInput"),t("span",{class:"token punctuation"},"("),t("span",{class:"token class-name"},[t("span",{class:"token keyword"},"int")]),o(" i"),t("span",{class:"token punctuation"},")"),o(),t("span",{class:"token operator"},"=>"),o(" i"),t("span",{class:"token operator"},"*"),t("span",{class:"token number"},"2"),t("span",{class:"token punctuation"},";"),o("     "),t("span",{class:"token comment"},"// <- Implementierung")]),o(`
`),t("span",{class:"line"},[t("span",{class:"token punctuation"},"}")])])],-1),ZE=t("pre",{class:"slidev-code language-csharp"},[t("code",null,[t("span",{class:"line"},[t("span",{class:"token keyword"},"class"),o(),t("span",{class:"token class-name"},"SomeService")]),o(`
`),t("span",{class:"line"},[t("span",{class:"token punctuation"},"{")]),o(`
`),t("span",{class:"line"},[o("  "),t("span",{class:"token return-type class-name"},[t("span",{class:"token keyword"},"int")]),o(),t("span",{class:"token function"},"DoSomething"),t("span",{class:"token punctuation"},"("),t("span",{class:"token class-name"},"ICalculateSalary"),o(" salary"),t("span",{class:"token punctuation"},","),o(),t("span",{class:"token class-name"},[t("span",{class:"token keyword"},"int")]),o(" i"),t("span",{class:"token punctuation"},")"),o()]),o(`
`),t("span",{class:"line"},[o("    "),t("span",{class:"token operator"},"=>"),o(" salary"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"ByInput"),t("span",{class:"token punctuation"},"("),o("i"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),o("        "),t("span",{class:"token comment"},'// <- "deligiert"')]),o(`
`),t("span",{class:"line"},[t("span",{class:"token punctuation"},"}")])])],-1),YE=t("p",null,"(Verhalten als Parameter übergeben)",-1),JE={__name:"31",setup(e){const n={layout:"default-with-footer",srcSequence:"./pages/02-fp-basics_first_class_functions.md"};return S(P),(s,a)=>{const r=be;return k(),$(I,N(M(n)),{default:w(()=>[GE,q(r,le({},{ranges:[""]}),{default:w(()=>[KE]),_:1},16),q(r,le({},{ranges:[""]}),{default:w(()=>[ZE]),_:1},16),YE]),_:1},16)}}},QE=T(JE,[["__file","/@slidev/slides/31.md"]]),XE=t("h2",null,"Neue Anforderung!",-1),e$=t("ul",null,[t("li",null,"Es gibt eine Funktion, die einen Grußtext aus dem Vornamen und dem Spitznamen erzeugt."),t("li",null,[o("Die Funktion kann dabei verschiedene Texte erzeugen: "),t("ul",null,[t("li",null,"einen Standard-Text"),t("li",null,"einen Deluxe-Text, falls der Kunde die Bezahlversion hat"),t("li",null,"einen Debug-Text mit den reinen Daten")])]),t("li",null,"Welcher Text erzeugt wird, wird nicht in dieser Funktion entschieden.")],-1),n$={__name:"32",setup(e){const n={layout:"default-with-footer",srcSequence:"./pages/anforderung_pro_modus_anderer_output.md"};return S(P),(s,a)=>(k(),$(I,N(M(n)),{default:w(()=>[XE,e$]),_:1},16))}},t$=T(n$,[["__file","/@slidev/slides/32.md"]]),s$=t("h1",null,"Let’s code",-1),a$={__name:"33",setup(e){const n={layout:"default-with-footer",srcSequence:"./pages/letscode.md"};return S(P),(s,a)=>(k(),$(I,N(M(n)),{default:w(()=>[s$]),_:1},16))}},r$=T(a$,[["__file","/@slidev/slides/33.md"]]),o$=t("h2",null,"FP 101 - Pure Functions",-1),i$=t("h3",null,"Pure Functions in C#",-1),l$=t("ul",null,[t("li",null,"haben niemals Seiteneffekte!"),t("li",null,[o("sollten immer nach "),t("code",null,"static"),o(" umwandelbar sein")])],-1),c$={__name:"34",setup(e){const n={layout:"default-with-footer",srcSequence:"./pages/02-fp-basics_pure_functions.md"};return S(P),(s,a)=>(k(),$(I,N(M(n)),{default:w(()=>[o$,i$,l$]),_:1},16))}},u$=T(c$,[["__file","/@slidev/slides/34.md"]]),p$=t("h2",null,"Imperativ…",-1),d$=t("p",null,[t("strong",null,"Wie"),o(" mache ich etwas")],-1),f$=t("pre",{class:"slidev-code language-csharp"},[t("code",null,[t("span",{class:"line"},[t("span",{class:"token class-name"},[t("span",{class:"token keyword"},"var")]),o(" people "),t("span",{class:"token operator"},"="),o(),t("span",{class:"token keyword"},"new"),o(),t("span",{class:"token constructor-invocation class-name"},[o("List"),t("span",{class:"token punctuation"},"<"),o("Person"),t("span",{class:"token punctuation"},">")]),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";")]),o(`
`),t("span",{class:"line"},[t("span",{class:"token punctuation"},"{")]),o(`
`),t("span",{class:"line"},[o("    "),t("span",{class:"token keyword"},"new"),o(),t("span",{class:"token constructor-invocation class-name"},"Person"),o(),t("span",{class:"token punctuation"},"{"),o(" Age "),t("span",{class:"token operator"},"="),o(),t("span",{class:"token number"},"20"),t("span",{class:"token punctuation"},","),o(" Income "),t("span",{class:"token operator"},"="),o(),t("span",{class:"token number"},"1000"),o(),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},",")]),o(`
`),t("span",{class:"line"},[o("    "),t("span",{class:"token keyword"},"new"),o(),t("span",{class:"token constructor-invocation class-name"},"Person"),o(),t("span",{class:"token punctuation"},"{"),o(" Age "),t("span",{class:"token operator"},"="),o(),t("span",{class:"token number"},"26"),t("span",{class:"token punctuation"},","),o(" Income "),t("span",{class:"token operator"},"="),o(),t("span",{class:"token number"},"1100"),o(),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},",")]),o(`
`),t("span",{class:"line"},[o("    "),t("span",{class:"token keyword"},"new"),o(),t("span",{class:"token constructor-invocation class-name"},"Person"),o(),t("span",{class:"token punctuation"},"{"),o(" Age "),t("span",{class:"token operator"},"="),o(),t("span",{class:"token number"},"35"),t("span",{class:"token punctuation"},","),o(" Income "),t("span",{class:"token operator"},"="),o(),t("span",{class:"token number"},"1300"),o(),t("span",{class:"token punctuation"},"}")]),o(`
`),t("span",{class:"line"},[t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},";")]),o(`
`),t("span",{class:"line"}),o(`
`),t("span",{class:"line"},[t("span",{class:"token class-name"},[t("span",{class:"token keyword"},"var")]),o(" incomes "),t("span",{class:"token operator"},"="),o(),t("span",{class:"token keyword"},"new"),o(),t("span",{class:"token constructor-invocation class-name"},[o("List"),t("span",{class:"token punctuation"},"<"),t("span",{class:"token keyword"},"int"),t("span",{class:"token punctuation"},">")]),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";")]),o(`
`),t("span",{class:"line"},[t("span",{class:"token keyword"},"foreach"),o(),t("span",{class:"token punctuation"},"("),t("span",{class:"token class-name"},[t("span",{class:"token keyword"},"var")]),o(" person "),t("span",{class:"token keyword"},"in"),o(" people"),t("span",{class:"token punctuation"},")")]),o(`
`),t("span",{class:"line"},[t("span",{class:"token punctuation"},"{")]),o(`
`),t("span",{class:"line"},[o("    "),t("span",{class:"token keyword"},"if"),o(),t("span",{class:"token punctuation"},"("),o("person"),t("span",{class:"token punctuation"},"."),o("Age "),t("span",{class:"token operator"},">"),o(),t("span",{class:"token number"},"25"),t("span",{class:"token punctuation"},")")]),o(`
`),t("span",{class:"line"},[o("        incomes"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"Add"),t("span",{class:"token punctuation"},"("),o("person"),t("span",{class:"token punctuation"},"."),o("Income"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";")]),o(`
`),t("span",{class:"line"},[t("span",{class:"token punctuation"},"}")]),o(`
`),t("span",{class:"line"}),o(`
`),t("span",{class:"line"},[t("span",{class:"token class-name"},[t("span",{class:"token keyword"},"var")]),o(" avg "),t("span",{class:"token operator"},"="),o(" incomes"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"Sum"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),o(),t("span",{class:"token operator"},"/"),o(" incomes"),t("span",{class:"token punctuation"},"."),o("Count"),t("span",{class:"token punctuation"},";")])])],-1),h$=t("p",null,"versus…",-1),m$={__name:"35",setup(e){const n={layout:"default-with-footer",srcSequence:"./pages/02-fp-basics_pure_functions.md"};return S(P),(s,a)=>{const r=be;return k(),$(I,N(M(n)),{default:w(()=>[p$,d$,q(r,le({},{ranges:[""]}),{default:w(()=>[f$]),_:1},16),h$]),_:1},16)}}},g$=T(m$,[["__file","/@slidev/slides/35.md"]]),_$=t("h2",null,"Deklarativ",-1),k$=t("p",null,[t("strong",null,"Was"),o(" will ich erreichen?")],-1),b$=t("p",null,"Bsp: Filter / Map / Reduce",-1),v$=t("pre",{class:"slidev-code language-csharp"},[t("code",null,[t("span",{class:"line"},[t("span",{class:"token class-name"},[t("span",{class:"token keyword"},"var")]),o(" people "),t("span",{class:"token operator"},"="),o(),t("span",{class:"token keyword"},"new"),o(),t("span",{class:"token constructor-invocation class-name"},[o("List"),t("span",{class:"token punctuation"},"<"),o("Person"),t("span",{class:"token punctuation"},">")]),o(),t("span",{class:"token punctuation"},"{")]),o(`
`),t("span",{class:"line"},[o("  "),t("span",{class:"token keyword"},"new"),o(),t("span",{class:"token constructor-invocation class-name"},"Person"),o(),t("span",{class:"token punctuation"},"{"),o(" Age "),t("span",{class:"token operator"},"="),o(),t("span",{class:"token number"},"20"),t("span",{class:"token punctuation"},","),o(" Income "),t("span",{class:"token operator"},"="),o(),t("span",{class:"token number"},"1000"),o(),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},",")]),o(`
`),t("span",{class:"line"},[o("  "),t("span",{class:"token keyword"},"new"),o(),t("span",{class:"token constructor-invocation class-name"},"Person"),o(),t("span",{class:"token punctuation"},"{"),o(" Age "),t("span",{class:"token operator"},"="),o(),t("span",{class:"token number"},"26"),t("span",{class:"token punctuation"},","),o(" Income "),t("span",{class:"token operator"},"="),o(),t("span",{class:"token number"},"1100"),o(),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},",")]),o(`
`),t("span",{class:"line"},[o("  "),t("span",{class:"token keyword"},"new"),o(),t("span",{class:"token constructor-invocation class-name"},"Person"),o(),t("span",{class:"token punctuation"},"{"),o(" Age "),t("span",{class:"token operator"},"="),o(),t("span",{class:"token number"},"35"),t("span",{class:"token punctuation"},","),o(" Income "),t("span",{class:"token operator"},"="),o(),t("span",{class:"token number"},"1300"),o(),t("span",{class:"token punctuation"},"}")]),o(`
`),t("span",{class:"line"},[t("span",{class:"token punctuation"},"}")]),o(`
`),t("span",{class:"line"}),o(`
`),t("span",{class:"line"},[t("span",{class:"token class-name"},[t("span",{class:"token keyword"},"var")]),o(" averageIncomeAbove25 "),t("span",{class:"token operator"},"="),o(" people")]),o(`
`),t("span",{class:"line"},[o("  "),t("span",{class:"token function"},"Where"),t("span",{class:"token punctuation"},"("),o("p "),t("span",{class:"token operator"},"=>"),o(" p"),t("span",{class:"token punctuation"},"."),o("Age "),t("span",{class:"token operator"},">"),o(),t("span",{class:"token number"},"25"),t("span",{class:"token punctuation"},")"),o(),t("span",{class:"token comment"},'// "Filter"')]),o(`
`),t("span",{class:"line"},[o("  "),t("span",{class:"token function"},"Select"),t("span",{class:"token punctuation"},"("),o("p "),t("span",{class:"token operator"},"=>"),o(" p"),t("span",{class:"token punctuation"},"."),o("Income"),t("span",{class:"token punctuation"},")"),o("  "),t("span",{class:"token comment"},'// "Map"')]),o(`
`),t("span",{class:"line"},[o("  "),t("span",{class:"token function"},"Average"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),o("             "),t("span",{class:"token comment"},'// "Reduce"')])])],-1),y$=t("ul",null,[t("li",null,"aussagekräftiger"),t("li",null,"weniger fehleranfällig")],-1),w$={__name:"36",setup(e){const n={layout:"default-with-footer",srcSequence:"./pages/02-fp-basics_pure_functions.md"};return S(P),(s,a)=>{const r=be;return k(),$(I,N(M(n)),{default:w(()=>[_$,k$,b$,q(r,le({},{ranges:[""]}),{default:w(()=>[v$]),_:1},16),y$]),_:1},16)}}},x$=T(w$,[["__file","/@slidev/slides/36.md"]]),S$=t("h2",null,"Neue Anforderung!",-1),E$=t("ul",null,[t("li",null,"Es gibt eine Funktion, die für eine übergebene Menge von Einträgen die Anzahl der Personen bestimmt, die an einem bestimmten, ebenfalls übergebenem, Tag Geburtstag haben.")],-1),$$={__name:"37",setup(e){const n={layout:"default-with-footer",srcSequence:"./pages/anforderung_personen_mit_geburtstag_an_x_zaehlen.md"};return S(P),(s,a)=>(k(),$(I,N(M(n)),{default:w(()=>[S$,E$]),_:1},16))}},P$=T($$,[["__file","/@slidev/slides/37.md"]]),T$=t("h1",null,"Let’s code",-1),C$={__name:"38",setup(e){const n={layout:"default-with-footer",srcSequence:"./pages/letscode.md"};return S(P),(s,a)=>(k(),$(I,N(M(n)),{default:w(()=>[T$]),_:1},16))}},O$=T(C$,[["__file","/@slidev/slides/38.md"]]);function yu(e){return e.startsWith("/")?"/2023-05-magdeburger-devdays-fp-csharp-to-fsharp"+e.slice(1):e}function A$(e,n=!1){const s=e&&(e[0]==="#"||e.startsWith("rgb")),a={background:s?e:void 0,color:e&&!s?"white":void 0,backgroundImage:s?void 0:e?n?`linear-gradient(#0005, #0008), url(${yu(e)})`:`url("${yu(e)}")`:void 0,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover"};return a.background||delete a.background,a}const F$={class:"grid grid-cols-2 w-full h-full auto-rows-fr"},M$=Me({__name:"image-right",props:{image:{type:String},class:{type:String}},setup(e){const n=e;S(P);const s=L(()=>A$(n.image));return(a,r)=>(k(),ee("div",F$,[t("div",{class:We(["slidev-layout default",n.class])},[Ln(a.$slots,"default")],2),t("div",{class:"w-full w-full",style:tn(C(s))},null,4)]))}}),N$=T(M$,[["__file","/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/node_modules/@slidev/client/layouts/image-right.vue"]]),I$=t("h3",null,"Alternative Beschreibung",-1),D$=t("p",null,'aus "Grokking Simplicity"',-1),L$=t("p",null,"Code wird in drei Arten geteilt:",-1),j$=t("ul",null,[t("li",null,"Calculations"),t("li",null,"Actions"),t("li",null,"Data")],-1),q$=t("p",null,'👉 Unterschied zur "klassischen" Objektorientierung:',-1),R$=t("ul",null,[t("li",null,[o("Trennung zwischen Verhalten und Datenstrukur "),t("ul",null,[t("li",null,"Calculations: Pure Functions"),t("li",null,"Actions: Impure Functions"),t("li",null,"Data")])])],-1),B$={__name:"39",setup(e){const n={layout:"image-right",image:"/images/book-grokking-simplicity.png",srcSequence:"./pages/grokking-simplicity-01.md"};return S(P),(s,a)=>(k(),$(N$,N(M(n)),{default:w(()=>[I$,D$,L$,j$,q$,R$]),_:1},16))}},V$=T(B$,[["__file","/@slidev/slides/39.md"]]),z$="/2023-05-magdeburger-devdays-fp-csharp-to-fsharp/images/fp-languages-overview.png";const gl=e=>(Bm("data-v-42c9d943"),e=e(),Vm(),e),W$=gl(()=>t("p",null,[t("img",{class:"absolute top-0 right-10 w-150",src:z$})],-1)),H$=gl(()=>t("div",{id:"sig1"},'Image: "Get Programming with F#", Isaac Abraham',-1)),U$=gl(()=>t("ul",null,[t("li",null,"Die Abbildung stellt keine Wertung dar!"),t("li",null,"Man sollte verstehen, wo auf dieser Abbildung man sich befindet")],-1)),G$={__name:"40",setup(e){const n={layout:"two-cols",srcSequence:"./pages/02-fp-basics_sprachen.md"};return S(P),(s,a)=>(k(),$(ml,N(M(n)),{right:w(r=>[U$]),default:w(()=>[W$,H$]),_:1},16))}},K$=T(G$,[["__scopeId","data-v-42c9d943"],["__file","/@slidev/slides/40.md"]]),Z$=t("h2",null,"Neue Anforderung!",-1),Y$=t("ul",null,[t("li",null,"Es gibt zuviele NullReferenceExceptions. Die müssen wir loswerden!"),t("li",null,"Und dann natürlich allen bestehenden Code entsprechend anpassen.")],-1),J$={__name:"41",setup(e){const n={layout:"default-with-footer",srcSequence:"./pages/anforderung_was_soll_denn_dieses_fragezeichen.md"};return S(P),(s,a)=>(k(),$(I,N(M(n)),{default:w(()=>[Z$,Y$]),_:1},16))}},Q$=T(J$,[["__file","/@slidev/slides/41.md"]]),X$=t("h2",null,"Mögliches Vorhandensein eines Werts",-1),eP=t("h4",null,"oder: null muss weg.",-1),nP={__name:"42",setup(e){const n={layout:"default-with-footer",srcSequence:"./pages/option.md"};return S(P),(s,a)=>(k(),$(I,N(M(n)),{default:w(()=>[X$,eP]),_:1},16))}},tP=T(nP,[["__file","/@slidev/slides/42.md"]]),sP=t("pre",{class:"slidev-code language-csharp"},[t("code",null,[t("span",{class:"line"},[t("span",{class:"token comment"},"// Enthält die Signatur die ganze Wahrheit?")]),o(`
`),t("span",{class:"line"},[t("span",{class:"token keyword"},"public"),o(),t("span",{class:"token return-type class-name"},[t("span",{class:"token keyword"},"string")]),o(),t("span",{class:"token generic-method"},[t("span",{class:"token function"},"Stringify"),t("span",{class:"token generic class-name"},[t("span",{class:"token punctuation"},"<"),o("T"),t("span",{class:"token punctuation"},">")])]),t("span",{class:"token punctuation"},"("),t("span",{class:"token class-name"},"T"),o(" data"),t("span",{class:"token punctuation"},")")]),o(`
`),t("span",{class:"line"},[t("span",{class:"token punctuation"},"{")]),o(`
`),t("span",{class:"line"},[o("    "),t("span",{class:"token keyword"},"return"),o(),t("span",{class:"token keyword"},"null"),t("span",{class:"token punctuation"},";")]),o(`
`),t("span",{class:"line"},[t("span",{class:"token punctuation"},"}")])])],-1),aP={__name:"43",setup(e){const n={layout:"default-with-footer",srcSequence:"./pages/option.md"};return S(P),(s,a)=>{const r=be;return k(),$(I,N(M(n)),{default:w(()=>[q(r,le({},{ranges:[""]}),{default:w(()=>[sP]),_:1},16)]),_:1},16)}}},rP=T(aP,[["__file","/@slidev/slides/43.md"]]),oP=t("pre",{class:"slidev-code language-csharp"},[t("code",null,[t("span",{class:"line"},[t("span",{class:"token comment"},"// Sind Magic Values eine gute Idee?")]),o(`
`),t("span",{class:"line"},[t("span",{class:"token keyword"},"public"),o(),t("span",{class:"token return-type class-name"},[t("span",{class:"token keyword"},"int")]),o(),t("span",{class:"token function"},"Intify"),t("span",{class:"token punctuation"},"("),t("span",{class:"token class-name"},[t("span",{class:"token keyword"},"string")]),o(" s"),t("span",{class:"token punctuation"},")")]),o(`
`),t("span",{class:"line"},[t("span",{class:"token punctuation"},"{")]),o(`
`),t("span",{class:"line"},[o("    "),t("span",{class:"token class-name"},[t("span",{class:"token keyword"},"int")]),o(" result "),t("span",{class:"token operator"},"="),o(),t("span",{class:"token operator"},"-"),t("span",{class:"token number"},"1"),t("span",{class:"token punctuation"},";")]),o(`
`),t("span",{class:"line"},[o("    "),t("span",{class:"token keyword"},"int"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"TryParse"),t("span",{class:"token punctuation"},"("),o("s"),t("span",{class:"token punctuation"},","),o(),t("span",{class:"token keyword"},"out"),o(" result"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";")]),o(`
`),t("span",{class:"line"},[o("    "),t("span",{class:"token keyword"},"return"),o(" result"),t("span",{class:"token punctuation"},";")]),o(`
`),t("span",{class:"line"},[t("span",{class:"token punctuation"},"}")])])],-1),iP={__name:"44",setup(e){const n={layout:"default-with-footer",srcSequence:"./pages/option.md"};return S(P),(s,a)=>{const r=be;return k(),$(I,N(M(n)),{default:w(()=>[q(r,le({},{ranges:[""]}),{default:w(()=>[oP]),_:1},16)]),_:1},16)}}},lP=T(iP,[["__file","/@slidev/slides/44.md"]]),cP=t("p",null,"Gemein!",-1),uP=t("pre",{class:"slidev-code language-csharp"},[t("code",null,[t("span",{class:"line"},[t("span",{class:"token keyword"},"public"),o(),t("span",{class:"token keyword"},"class"),o(),t("span",{class:"token class-name"},"Data")]),o(`
`),t("span",{class:"line"},[t("span",{class:"token punctuation"},"{")]),o(`
`),t("span",{class:"line"},[o("    "),t("span",{class:"token keyword"},"public"),o(),t("span",{class:"token class-name"},[t("span",{class:"token keyword"},"string")]),o(" Name"),t("span",{class:"token punctuation"},";")]),o(`
`),t("span",{class:"line"},[t("span",{class:"token punctuation"},"}")]),o(`
`),t("span",{class:"line"}),o(`
`),t("span",{class:"line"},[t("span",{class:"token keyword"},"public"),o(),t("span",{class:"token keyword"},"class"),o(),t("span",{class:"token class-name"},"Do")]),o(`
`),t("span",{class:"line"},[t("span",{class:"token punctuation"},"{")]),o(`
`),t("span",{class:"line"},[o("    "),t("span",{class:"token keyword"},"public"),o(),t("span",{class:"token return-type class-name"},"Data"),o(),t("span",{class:"token function"},"CreateData"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),o(),t("span",{class:"token operator"},"=>"),o(),t("span",{class:"token keyword"},"null"),t("span",{class:"token punctuation"},";")]),o(`
`),t("span",{class:"line"}),o(`
`),t("span",{class:"line"},[o("    "),t("span",{class:"token keyword"},"public"),o(),t("span",{class:"token return-type class-name"},[t("span",{class:"token keyword"},"string")]),o(),t("span",{class:"token function"},"CreateAndUseData"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")")]),o(`
`),t("span",{class:"line"},[o("    "),t("span",{class:"token punctuation"},"{")]),o(`
`),t("span",{class:"line"},[o("        "),t("span",{class:"token class-name"},[t("span",{class:"token keyword"},"var")]),o(" data "),t("span",{class:"token operator"},"="),o(),t("span",{class:"token function"},"CreateData"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";")]),o(`
`),t("span",{class:"line"},[o("        "),t("span",{class:"token comment"},"// kein null-Check -> ist dem Compiler egal")]),o(`
`),t("span",{class:"line"},[o("        "),t("span",{class:"token keyword"},"return"),o(" data"),t("span",{class:"token punctuation"},"."),o("Name"),t("span",{class:"token punctuation"},";")]),o(`
`),t("span",{class:"line"},[o("    "),t("span",{class:"token punctuation"},"}")]),o(`
`),t("span",{class:"line"},[t("span",{class:"token punctuation"},"}")])])],-1),pP={__name:"45",setup(e){const n={layout:"default-with-footer",srcSequence:"./pages/option.md"};return S(P),(s,a)=>{const r=be;return k(),$(I,N(M(n)),{default:w(()=>[cP,q(r,le({},{ranges:[""]}),{default:w(()=>[uP]),_:1},16)]),_:1},16)}}},dP=T(pP,[["__file","/@slidev/slides/45.md"]]),fP=t("h2",null,"Option",-1),hP=t("pre",{class:"slidev-code language-fsharp"},[t("code",null,[t("span",{class:"line"},[t("span",{class:"token keyword"},"type"),o(),t("span",{class:"token class-name"},"Option"),t("span",{class:"token operator"},"<"),o("'T"),t("span",{class:"token operator"},">"),o(),t("span",{class:"token operator"},"="),o(" Some"),t("span",{class:"token operator"},"<"),o("'T"),t("span",{class:"token operator"},">"),o(),t("span",{class:"token operator"},"|"),o(" None")])])],-1),mP=t("ul",null,[t("li",null,'entweder ein Wert ist da - dann ist er in "Some" eingepackt'),t("li",null,'oder es ist kein Wert da, dann gibt es ein leeres "None"'),t("li",null,"alternative Bezeichnungen: Optional, Maybe")],-1),gP={__name:"46",setup(e){const n={layout:"default-with-footer",srcSequence:"./pages/option.md"};return S(P),(s,a)=>{const r=be;return k(),$(I,N(M(n)),{default:w(()=>[fP,q(r,le({},{ranges:[""]}),{default:w(()=>[hP]),_:1},16),mP]),_:1},16)}}},_P=T(gP,[["__file","/@slidev/slides/46.md"]]),kP=t("h2",null,"Mit Option",-1),bP=t("pre",{class:"slidev-code language-csharp"},[t("code",null,[t("span",{class:"line"},[t("span",{class:"token keyword"},"public"),o(),t("span",{class:"token return-type class-name"},[o("Option"),t("span",{class:"token punctuation"},"<"),t("span",{class:"token keyword"},"int"),t("span",{class:"token punctuation"},">")]),o(),t("span",{class:"token function"},"IntifyOption"),t("span",{class:"token punctuation"},"("),t("span",{class:"token class-name"},[t("span",{class:"token keyword"},"string")]),o(" s"),t("span",{class:"token punctuation"},")")]),o(`
`),t("span",{class:"line"},[t("span",{class:"token punctuation"},"{")]),o(`
`),t("span",{class:"line"},[o("    "),t("span",{class:"token class-name"},[t("span",{class:"token keyword"},"int")]),o(" result "),t("span",{class:"token operator"},"="),o(),t("span",{class:"token operator"},"-"),t("span",{class:"token number"},"1"),t("span",{class:"token punctuation"},";")]),o(`
`),t("span",{class:"line"},[o("    "),t("span",{class:"token class-name"},[t("span",{class:"token keyword"},"bool")]),o(" success "),t("span",{class:"token operator"},"="),o(),t("span",{class:"token keyword"},"int"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"TryParse"),t("span",{class:"token punctuation"},"("),o("s"),t("span",{class:"token punctuation"},","),o(),t("span",{class:"token keyword"},"out"),o(" result"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";")]),o(`
`),t("span",{class:"line"},[o("    "),t("span",{class:"token keyword"},"return"),o(),t("span",{class:"token return-type class-name"},[o("success "),t("span",{class:"token punctuation"},"?")]),o(),t("span",{class:"token function"},"Some"),t("span",{class:"token punctuation"},"("),o("result"),t("span",{class:"token punctuation"},")"),o(),t("span",{class:"token punctuation"},":"),o(" None"),t("span",{class:"token punctuation"},";")]),o(`
`),t("span",{class:"line"},[t("span",{class:"token punctuation"},"}")])])],-1),vP={__name:"47",setup(e){const n={layout:"default-with-footer",srcSequence:"./pages/option.md"};return S(P),(s,a)=>{const r=be;return k(),$(I,N(M(n)),{default:w(()=>[kP,q(r,le({},{ranges:[""]}),{default:w(()=>[bP]),_:1},16)]),_:1},16)}}},yP=T(vP,[["__file","/@slidev/slides/47.md"]]),wP=t("h3",null,"Wie komme ich an einen eingepackten Wert ran?",-1),xP=t("blockquote",null,[t("p",null,"Pattern matching allows you to match a value against some patterns to select a branch of the code.")],-1),SP=t("pre",{class:"slidev-code language-csharp"},[t("code",null,[t("span",{class:"line"},[t("span",{class:"token keyword"},"public"),o(),t("span",{class:"token return-type class-name"},[t("span",{class:"token keyword"},"string")]),o(),t("span",{class:"token generic-method"},[t("span",{class:"token function"},"Stringify"),t("span",{class:"token generic class-name"},[t("span",{class:"token punctuation"},"<"),o("T"),t("span",{class:"token punctuation"},">")])]),t("span",{class:"token punctuation"},"("),t("span",{class:"token class-name"},[o("Option"),t("span",{class:"token punctuation"},"<"),o("T"),t("span",{class:"token punctuation"},">")]),o(" data"),t("span",{class:"token punctuation"},")")]),o(`
`),t("span",{class:"line"},[t("span",{class:"token punctuation"},"{")]),o(`
`),t("span",{class:"line"},[o("    "),t("span",{class:"token keyword"},"return"),o(" data"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"Match"),t("span",{class:"token punctuation"},"(")]),o(`
`),t("span",{class:"line"},[o("        None"),t("span",{class:"token punctuation"},":"),o(),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),o(),t("span",{class:"token operator"},"=>"),o(),t("span",{class:"token string"},'""'),t("span",{class:"token punctuation"},",")]),o(`
`),t("span",{class:"line"},[o("        Some"),t("span",{class:"token punctuation"},":"),o(),t("span",{class:"token punctuation"},"("),o("existingData"),t("span",{class:"token punctuation"},")"),o(),t("span",{class:"token operator"},"=>"),o(" existingData"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"ToString"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")")]),o(`
`),t("span",{class:"line"},[o("    "),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";")]),o(`
`),t("span",{class:"line"},[t("span",{class:"token punctuation"},"}")])])],-1),EP={__name:"48",setup(e){const n={layout:"default-with-footer",srcSequence:"./pages/option.md"};return S(P),(s,a)=>{const r=be;return k(),$(I,N(M(n)),{default:w(()=>[wP,xP,q(r,le({},{ranges:[""]}),{default:w(()=>[SP]),_:1},16)]),_:1},16)}}},$P=T(EP,[["__file","/@slidev/slides/48.md"]]),PP=t("h3",null,"Vorteile",-1),TP=t("ul",null,[t("li",null,"Explizite Semantik: Wert ist da - oder eben nicht"),t("li",null,'Auch für Nicht-Programmierer verständlich(er): "optional" vs. "nullable"'),t("li",null,"Die Signatur von Match erzwingt eine Behandlung beider Fälle - nie wieder vergessene Null-Checks!"),t("li",null,'Achtung: In C# bleibt das Problem, dass "Option" auch ein Objekt ist - und daher selbst null sein kann')],-1),CP={__name:"49",setup(e){const n={layout:"default-with-footer",srcSequence:"./pages/option.md"};return S(P),(s,a)=>(k(),$(I,N(M(n)),{default:w(()=>[PP,TP]),_:1},16))}},OP=T(CP,[["__file","/@slidev/slides/49.md"]]),AP=t("p",null,"In FP unterscheidet man die Art der Wrapper-Klassen (z.B. IEnumerable) anhand der Funktionen, die sie bereitstellen",-1),FP={__name:"50",setup(e){const n={layout:"default-with-footer",srcSequence:"./pages/option.md"};return S(P),(s,a)=>(k(),$(I,N(M(n)),{default:w(()=>[AP]),_:1},16))}},MP=T(FP,[["__file","/@slidev/slides/50.md"]]),NP="/2023-05-magdeburger-devdays-fp-csharp-to-fsharp/images/book-csharp-fp-with-comment.png",IP=t("h3",null,"LaYumba",-1),DP=t("p",null,[t("img",{src:NP,alt:"img"})],-1),LP=t("ul",null,[t("li",null,"NuGet Paket"),t("li",null,"kann nicht alles"),t("li",null,"Fokus: Didaktik (Ähnlichkeit mit F#, Haskell)"),t("li",null,[o('"einfache" Variante von '),t("a",{href:"https://github.com/louthy/language-ext",target:"_blank",rel:"noopener"},"language-ext")])],-1),jP={__name:"51",setup(e){const n={layout:"default-with-footer",srcSequence:"./pages/layumba.md"};return S(P),(s,a)=>(k(),$(I,N(M(n)),{default:w(()=>[IP,DP,LP]),_:1},16))}},qP=T(jP,[["__file","/@slidev/slides/51.md"]]),RP="/2023-05-magdeburger-devdays-fp-csharp-to-fsharp/images/language-ext-screenshot-github-0.png",BP=t("h3",null,"language-ext",-1),VP=t("p",null,[t("img",{src:RP,alt:"img"})],-1),zP={__name:"52",setup(e){const n={layout:"default-with-footer",srcSequence:"./pages/layumba.md"};return S(P),(s,a)=>(k(),$(I,N(M(n)),{default:w(()=>[BP,VP]),_:1},16))}},WP=T(zP,[["__file","/@slidev/slides/52.md"]]),HP="/2023-05-magdeburger-devdays-fp-csharp-to-fsharp/images/language-ext-screenshot-github-1.png",UP=t("h3",null,"language-ext",-1),GP=t("p",null,[t("img",{src:HP,alt:"img"})],-1),KP={__name:"53",setup(e){const n={layout:"default-with-footer",srcSequence:"./pages/layumba.md"};return S(P),(s,a)=>(k(),$(I,N(M(n)),{default:w(()=>[UP,GP]),_:1},16))}},ZP=T(KP,[["__file","/@slidev/slides/53.md"]]),YP="/2023-05-magdeburger-devdays-fp-csharp-to-fsharp/images/language-ext-screenshot-github-2.png",JP=t("h3",null,"language-ext",-1),QP=t("p",null,[t("img",{src:YP,alt:"img"})],-1),XP={__name:"54",setup(e){const n={layout:"default-with-footer",srcSequence:"./pages/layumba.md"};return S(P),(s,a)=>(k(),$(I,N(M(n)),{default:w(()=>[JP,QP]),_:1},16))}},eT=T(XP,[["__file","/@slidev/slides/54.md"]]),nT="/2023-05-magdeburger-devdays-fp-csharp-to-fsharp/images/language-ext-screenshot-github-3.png",tT=t("h3",null,"language-ext",-1),sT=t("p",null,[t("img",{src:nT,alt:"img"})],-1),aT={__name:"55",setup(e){const n={layout:"default-with-footer",srcSequence:"./pages/layumba.md"};return S(P),(s,a)=>(k(),$(I,N(M(n)),{default:w(()=>[tT,sT]),_:1},16))}},rT=T(aT,[["__file","/@slidev/slides/55.md"]]),oT="/2023-05-magdeburger-devdays-fp-csharp-to-fsharp/images/language-ext-screenshot-github-4.png",iT=t("h3",null,"language-ext",-1),lT=t("p",null,[t("img",{src:oT,alt:"img"})],-1),cT={__name:"56",setup(e){const n={layout:"default-with-footer",srcSequence:"./pages/layumba.md"};return S(P),(s,a)=>(k(),$(I,N(M(n)),{default:w(()=>[iT,lT]),_:1},16))}},uT=T(cT,[["__file","/@slidev/slides/56.md"]]),pT="/2023-05-magdeburger-devdays-fp-csharp-to-fsharp/images/language-ext-screenshot-github-5.png",dT=t("h3",null,"language-ext",-1),fT=t("p",null,[t("img",{src:pT,alt:"img"})],-1),hT={__name:"57",setup(e){const n={layout:"default-with-footer",srcSequence:"./pages/layumba.md"};return S(P),(s,a)=>(k(),$(I,N(M(n)),{default:w(()=>[dT,fT]),_:1},16))}},mT=T(hT,[["__file","/@slidev/slides/57.md"]]),gT=t("h2",null,"Neue Anforderung!",-1),_T=t("ul",null,[t("li",null,"Es gibt zuviele NullReferenceExceptions. Die müssen wir loswerden!"),t("li",null,"Und dann natürlich allen bestehenden Code entsprechend anpassen.")],-1),kT={__name:"58",setup(e){const n={layout:"default-with-footer",srcSequence:"./pages/anforderung_was_soll_denn_dieses_fragezeichen.md"};return S(P),(s,a)=>(k(),$(I,N(M(n)),{default:w(()=>[gT,_T]),_:1},16))}},bT=T(kT,[["__file","/@slidev/slides/58.md"]]),vT=t("h1",null,"Let’s code",-1),yT={__name:"59",setup(e){const n={layout:"default-with-footer",srcSequence:"./pages/letscode.md"};return S(P),(s,a)=>(k(),$(I,N(M(n)),{default:w(()=>[vT]),_:1},16))}},wT=T(yT,[["__file","/@slidev/slides/59.md"]]),Xr="/2023-05-magdeburger-devdays-fp-csharp-to-fsharp/images/fsharp256.png",xT=t("h1",null,"Einführung in F#",-1),ST=t("p",null,[t("img",{src:Xr,alt:"img"})],-1),ET={__name:"60",setup(e){const n={layout:"default-with-footer",srcSequence:"./pages/fsharp.md"};return S(P),(s,a)=>(k(),$(I,N(M(n)),{default:w(()=>[xT,ST]),_:1},16))}},$T=T(ET,[["__file","/@slidev/slides/60.md"]]),PT=t("h2",null,"F#",-1),TT=t("ul",null,[t("li",null,"Ursprünglich: Microsoft Forschungsprojekt"),t("li",null,"Heute: Community-driven"),t("li",null,"inspiriert von OCaml"),t("li",null,"Multi-Paradigma"),t("li",null,"Fokus auf funktionale Programmierung")],-1),CT=t("p",null,[t("img",{class:"absolute top-10 right-10 w-100",src:Xr})],-1),OT={__name:"61",setup(e){const n={layout:"default-with-footer",srcSequence:"./pages/fsharp.md"};return S(P),(s,a)=>(k(),$(I,N(M(n)),{default:w(()=>[PT,TT,CT]),_:1},16))}},AT=T(OT,[["__file","/@slidev/slides/61.md"]]),FT=t("h2",null,"F#",-1),MT=t("ul",null,[t("li",null,"erzwingt keine puren Funktionen, sondern erlaubt Seiteneffekte"),t("li",null,"Statisch typisiert"),t("li",null,"integriert ins .NET Ökosystem"),t("li",null,"C# / VB.NET Interop")],-1),NT=t("p",null,[t("img",{class:"absolute top-10 right-10 w-100",src:Xr})],-1),IT={__name:"62",setup(e){const n={layout:"default-with-footer",srcSequence:"./pages/fsharp.md"};return S(P),(s,a)=>(k(),$(I,N(M(n)),{default:w(()=>[FT,MT,NT]),_:1},16))}},DT=T(IT,[["__file","/@slidev/slides/62.md"]]),LT=t("h2",null,"Besonderheiten",-1),jT=t("ul",null,[t("li",null,"Significant whitespace"),t("li",null,"Reihenfolge der Definitionen in Datei wichtig"),t("li",null,"Reihenfolge der Dateien im Projekt wichtig")],-1),qT=t("p",null,[t("img",{class:"absolute top-10 right-10 w-100",src:Xr})],-1),RT={__name:"63",setup(e){const n={layout:"default-with-footer",srcSequence:"./pages/fsharp.md"};return S(P),(s,a)=>(k(),$(I,N(M(n)),{default:w(()=>[LT,jT,qT]),_:1},16))}},BT=T(RT,[["__file","/@slidev/slides/63.md"]]),VT=t("h2",null,"Immutability als Default",-1),zT=t("pre",{class:"slidev-code language-fsharp"},[t("code",null,[t("span",{class:"line"},[t("span",{class:"token comment"},"// Achtung: = ist hier keine Zuweisung, sondern heißt ")]),o(`
`),t("span",{class:"line"},[t("span",{class:"token comment"},'// "linke und rechte Seite sind gleich und bleiben es auch immer"')]),o(`
`),t("span",{class:"line"},[t("span",{class:"token keyword"},"let"),o(" x "),t("span",{class:"token operator"},"="),o(),t("span",{class:"token number"},"3")]),o(`
`),t("span",{class:"line"},[t("span",{class:"token keyword"},"let"),o(" add a b "),t("span",{class:"token operator"},"="),o(" a "),t("span",{class:"token operator"},"+"),o(" b")]),o(`
`),t("span",{class:"line"},[t("span",{class:"token keyword"},"let"),o(" m "),t("span",{class:"token operator"},"="),o(),t("span",{class:"token keyword"},"if"),o(),t("span",{class:"token number"},"3"),o(),t("span",{class:"token operator"},">"),o(),t("span",{class:"token number"},"0"),o(),t("span",{class:"token keyword"},"then"),o(),t("span",{class:"token number"},"7"),o(),t("span",{class:"token keyword"},"else"),o(),t("span",{class:"token number"},"42")]),o(`
`),t("span",{class:"line"}),o(`
`),t("span",{class:"line"},[t("span",{class:"token comment"},"// Mutability nur auf Wunsch - normalerweise unnötig")]),o(`
`),t("span",{class:"line"},[t("span",{class:"token keyword"},"let"),o(),t("span",{class:"token keyword"},"mutable"),o(" y "),t("span",{class:"token operator"},"="),o(),t("span",{class:"token number"},"3")]),o(`
`),t("span",{class:"line"},[o("y "),t("span",{class:"token operator"},"<-"),o(),t("span",{class:"token number"},"42")])])],-1),WT={__name:"64",setup(e){const n={layout:"default-with-footer",srcSequence:"./pages/fsharp.md"};return S(P),(s,a)=>{const r=be;return k(),$(I,N(M(n)),{default:w(()=>[VT,q(r,le({},{ranges:[""]}),{default:w(()=>[zT]),_:1},16)]),_:1},16)}}},HT=T(WT,[["__file","/@slidev/slides/64.md"]]),UT=t("h2",null,"Typ-Inferenz",-1),GT=t("pre",{class:"slidev-code language-fsharp"},[t("code",null,[t("span",{class:"line"},[t("span",{class:"token comment"},"// Typen werden automatisch abgeleitet sofern möglich")]),o(`
`),t("span",{class:"line"},[t("span",{class:"token keyword"},"let"),o(" double a "),t("span",{class:"token operator"},"="),o(" a "),t("span",{class:"token operator"},"*"),o(),t("span",{class:"token number"},"2"),o(),t("span",{class:"token comment"},"// int -> int")]),o(`
`),t("span",{class:"line"}),o(`
`),t("span",{class:"line"},[t("span",{class:"token comment"},"// Explizite Angaben möglich")]),o(`
`),t("span",{class:"line"},[t("span",{class:"token keyword"},"let"),o(" doubleExplicit "),t("span",{class:"token punctuation"},"("),o("a"),t("span",{class:"token punctuation"},":"),o(),t("span",{class:"token class-name"},"int"),t("span",{class:"token punctuation"},")"),o(),t("span",{class:"token punctuation"},":"),o(" int "),t("span",{class:"token operator"},"="),o(" a "),t("span",{class:"token operator"},"*"),o(),t("span",{class:"token number"},"2")])])],-1),KT={__name:"65",setup(e){const n={layout:"default-with-footer",srcSequence:"./pages/fsharp.md"};return S(P),(s,a)=>{const r=be;return k(),$(I,N(M(n)),{default:w(()=>[UT,q(r,le({},{ranges:[""]}),{default:w(()=>[GT]),_:1},16)]),_:1},16)}}},ZT=T(KT,[["__file","/@slidev/slides/65.md"]]),YT=t("h2",null,"Currying",-1),JT=t("blockquote",null,[t("p",null,"Currying ist die Umwandlung einer Funktion mit mehreren Argumenten in eine Funktion mit einem Argument, die wiederum eine Funktion zurückgibt mit dem Rest der Argumente.")],-1),QT=t("pre",{class:"slidev-code language-fsharp"},[t("code",null,[t("span",{class:"line"},[t("span",{class:"token comment"},"// int -> int -> int -> int")]),o(`
`),t("span",{class:"line"},[t("span",{class:"token comment"},"// eigentlich: int -> (int -> (int -> int))")]),o(`
`),t("span",{class:"line"},[t("span",{class:"token keyword"},"let"),o(" addThree a b c "),t("span",{class:"token operator"},"="),o(" a "),t("span",{class:"token operator"},"+"),o(" b "),t("span",{class:"token operator"},"+"),o(" c")])])],-1),XT={__name:"66",setup(e){const n={layout:"default-with-footer",srcSequence:"./pages/fsharp.md"};return S(P),(s,a)=>{const r=be;return k(),$(I,N(M(n)),{default:w(()=>[YT,JT,q(r,le({},{ranges:[""]}),{default:w(()=>[QT]),_:1},16)]),_:1},16)}}},e6=T(XT,[["__file","/@slidev/slides/66.md"]]),n6=t("h2",null,"Partial Application",-1),t6=t("ul",null,[t("li",null,"Eine Funktion mit mehreren Parametern bekommt nur einen Teil ihrer Argumente übergeben - der Rest bleibt offen und kann später ausgefüllt werden")],-1),s6=t("pre",{class:"slidev-code language-fsharp"},[t("code",null,[t("span",{class:"line"},[t("span",{class:"token comment"},"// Partial Application")]),o(`
`),t("span",{class:"line"},[t("span",{class:"token keyword"},"let"),o(" add a b "),t("span",{class:"token operator"},"="),o(" a "),t("span",{class:"token operator"},"+"),o(" b "),t("span",{class:"token comment"},"// int -> (int -> (int))")]),o(`
`),t("span",{class:"line"},[t("span",{class:"token keyword"},"let"),o(" add2 "),t("span",{class:"token operator"},"="),o(" add "),t("span",{class:"token number"},"2"),o(),t("span",{class:"token comment"},"// (int -> (int))")]),o(`
`),t("span",{class:"line"},[t("span",{class:"token keyword"},"let"),o(" six "),t("span",{class:"token operator"},"="),o(" add2 "),t("span",{class:"token number"},"4"),o(),t("span",{class:"token comment"},"// (int)")]),o(`
`),t("span",{class:"line"},[t("span",{class:"token keyword"},"let"),o(" ten "),t("span",{class:"token operator"},"="),o(" add2 "),t("span",{class:"token number"},"8"),o(),t("span",{class:"token comment"},"// (int)")])])],-1),a6={__name:"67",setup(e){const n={layout:"default-with-footer",srcSequence:"./pages/fsharp.md"};return S(P),(s,a)=>{const r=be;return k(),$(I,N(M(n)),{default:w(()=>[n6,t6,q(r,le({},{ranges:[""]}),{default:w(()=>[s6]),_:1},16)]),_:1},16)}}},r6=T(a6,[["__file","/@slidev/slides/67.md"]]),o6=t("h2",null,"Pipe-Operator",-1),i6=t("pre",{class:"slidev-code language-fsharp"},[t("code",null,[t("span",{class:"line"},[t("span",{class:"token comment"},"// der letzte Parameter kann mit dem Ergebnis ")]),o(`
`),t("span",{class:"line"},[t("span",{class:"token comment"},"// der vorherigen Expression ausgefüllt werden")]),o(`
`),t("span",{class:"line"},[t("span",{class:"token keyword"},"let"),o(" double a "),t("span",{class:"token operator"},"="),o(" a "),t("span",{class:"token operator"},"*"),o(),t("span",{class:"token number"},"2")]),o(`
`),t("span",{class:"line"},[t("span",{class:"token number"},"4"),o(),t("span",{class:"token operator"},"|>"),o(" double "),t("span",{class:"token comment"},"// ergibt 8")]),o(`
`),t("span",{class:"line"},[t("span",{class:"token number"},"4"),o(),t("span",{class:"token operator"},"|>"),o(" double "),t("span",{class:"token operator"},"|>"),o(" double "),t("span",{class:"token comment"},"// ergibt 16")])])],-1),l6={__name:"68",setup(e){const n={layout:"default-with-footer",srcSequence:"./pages/fsharp.md"};return S(P),(s,a)=>{const r=be;return k(),$(I,N(M(n)),{default:w(()=>[o6,q(r,le({},{ranges:[""]}),{default:w(()=>[i6]),_:1},16)]),_:1},16)}}},c6=T(l6,[["__file","/@slidev/slides/68.md"]]),u6=t("h2",null,"Discriminated Unions",-1),p6=t("pre",{class:"slidev-code language-fsharp"},[t("code",null,[t("span",{class:"line"},[t("span",{class:"token comment"},'// Discriminated Unions ("Tagged Union", "Sum Type", "Choice Type")')]),o(`
`),t("span",{class:"line"},[t("span",{class:"token keyword"},"type"),o(),t("span",{class:"token class-name"},"Vehicle"),o(),t("span",{class:"token operator"},"="),o(" Bike "),t("span",{class:"token operator"},"|"),o(" Car "),t("span",{class:"token operator"},"|"),o(" Bus")]),o(`
`),t("span",{class:"line"}),o(`
`),t("span",{class:"line"},[t("span",{class:"token comment"},"// Pattern Matching zur Behandlung der verschiedenen Fälle")]),o(`
`),t("span",{class:"line"},[t("span",{class:"token keyword"},"let"),o(" vehicle "),t("span",{class:"token operator"},"="),o(" Bike")]),o(`
`),t("span",{class:"line"},[t("span",{class:"token keyword"},"let"),o(" laneText "),t("span",{class:"token operator"},"="),o()]),o(`
`),t("span",{class:"line"},[o("  "),t("span",{class:"token keyword"},"match"),o(" vehicle "),t("span",{class:"token keyword"},"with")]),o(`
`),t("span",{class:"line"},[o("  "),t("span",{class:"token operator"},"|"),o(" Bike "),t("span",{class:"token operator"},"->"),o(),t("span",{class:"token string"},'"Use the bike lane"')]),o(`
`),t("span",{class:"line"},[o("  "),t("span",{class:"token operator"},"|"),o(" Car "),t("span",{class:"token operator"},"->"),o(),t("span",{class:"token string"},'"Use the car driving lane"')]),o(`
`),t("span",{class:"line"},[o("  "),t("span",{class:"token operator"},"|"),o(" Bus "),t("span",{class:"token operator"},"->"),o(),t("span",{class:"token string"},'"The bus uses its own lane"')])])],-1),d6={__name:"69",setup(e){const n={layout:"default-with-footer",srcSequence:"./pages/fsharp.md"};return S(P),(s,a)=>{const r=be;return k(),$(I,N(M(n)),{default:w(()=>[u6,q(r,le({},{ranges:[""]}),{default:w(()=>[p6]),_:1},16)]),_:1},16)}}},f6=T(d6,[["__file","/@slidev/slides/69.md"]]),h6=t("h2",null,"Discriminated Unions mit Werten",-1),m6=t("pre",{class:"slidev-code language-fsharp"},[t("code",null,[t("span",{class:"line"},[t("span",{class:"token comment"},"// auch mit unterschiedlichen(!) Daten an jedem Fall möglich")]),o(`
`),t("span",{class:"line"},[t("span",{class:"token keyword"},"type"),o(),t("span",{class:"token class-name"},"Shape"),o(),t("span",{class:"token operator"},"=")]),o(`
`),t("span",{class:"line"},[o("    "),t("span",{class:"token operator"},"|"),o(" Circle "),t("span",{class:"token keyword"},"of"),o(),t("span",{class:"token class-name"},"float")]),o(`
`),t("span",{class:"line"},[o("    "),t("span",{class:"token operator"},"|"),o(" Rectangle "),t("span",{class:"token keyword"},"of"),o(),t("span",{class:"token class-name"},[o("float "),t("span",{class:"token operator"},"*"),o(" float")])]),o(`
`),t("span",{class:"line"}),o(`
`),t("span",{class:"line"},[t("span",{class:"token keyword"},"let"),o(" c "),t("span",{class:"token operator"},"="),o(" Circle "),t("span",{class:"token number"},"42.42")]),o(`
`),t("span",{class:"line"}),o(`
`),t("span",{class:"line"},[t("span",{class:"token keyword"},"match"),o(" c "),t("span",{class:"token keyword"},"with")]),o(`
`),t("span",{class:"line"},[t("span",{class:"token operator"},"|"),o(" Circle radius "),t("span",{class:"token operator"},"->"),o(" radius "),t("span",{class:"token operator"},"*"),o(" radius "),t("span",{class:"token operator"},"*"),o(" System"),t("span",{class:"token punctuation"},"."),o("Math"),t("span",{class:"token punctuation"},"."),o("PI")]),o(`
`),t("span",{class:"line"},[t("span",{class:"token operator"},"|"),o(),t("span",{class:"token function"},"Rectangle"),t("span",{class:"token punctuation"},"("),o("width"),t("span",{class:"token punctuation"},","),o(" height"),t("span",{class:"token punctuation"},")"),o(),t("span",{class:"token operator"},"->"),o(" width "),t("span",{class:"token operator"},"*"),o(" height")])])],-1),g6={__name:"70",setup(e){const n={layout:"default-with-footer",srcSequence:"./pages/fsharp.md"};return S(P),(s,a)=>{const r=be;return k(),$(I,N(M(n)),{default:w(()=>[h6,q(r,le({},{ranges:[""]}),{default:w(()=>[m6]),_:1},16)]),_:1},16)}}},_6=T(g6,[["__file","/@slidev/slides/70.md"]]),k6=t("h2",null,"Record Types",-1),b6=t("pre",{class:"slidev-code language-fsharp"},[t("code",null,[t("span",{class:"line"},[t("span",{class:"token comment"},"// Record Type")]),o(`
`),t("span",{class:"line"},[t("span",{class:"token keyword"},"type"),o(),t("span",{class:"token class-name"},"ShoppingCart"),o(),t("span",{class:"token operator"},"="),o(),t("span",{class:"token punctuation"},"{")]),o(`
`),t("span",{class:"line"},[o("    products"),t("span",{class:"token punctuation"},":"),o(),t("span",{class:"token class-name"},"Product"),o(" list")]),o(`
`),t("span",{class:"line"},[o("    total"),t("span",{class:"token punctuation"},":"),o(),t("span",{class:"token class-name"},"float")]),o(`
`),t("span",{class:"line"},[o("    createdAt"),t("span",{class:"token punctuation"},":"),o(),t("span",{class:"token class-name"},[o("System"),t("span",{class:"token punctuation"},"."),o("DateTime")])]),o(`
`),t("span",{class:"line"},[t("span",{class:"token punctuation"},"}")]),o(`
`),t("span",{class:"line"}),o(`
`),t("span",{class:"line"},[t("span",{class:"token comment"},"// Typ muss nur angegeben werden wenn er nicht eindeutig ist")]),o(`
`),t("span",{class:"line"},[t("span",{class:"token keyword"},"let"),o(" shoppingCart "),t("span",{class:"token operator"},"="),o(),t("span",{class:"token punctuation"},"{")]),o(`
`),t("span",{class:"line"},[o("    products "),t("span",{class:"token operator"},"="),o(),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"]")]),o(`
`),t("span",{class:"line"},[o("    total "),t("span",{class:"token operator"},"="),o(),t("span",{class:"token number"},"42.42")]),o(`
`),t("span",{class:"line"},[o("    createdAt "),t("span",{class:"token operator"},"="),o(" System"),t("span",{class:"token punctuation"},"."),o("DateTime"),t("span",{class:"token punctuation"},"."),o("Now")]),o(`
`),t("span",{class:"line"},[t("span",{class:"token punctuation"},"}")])])],-1),v6={__name:"71",setup(e){const n={layout:"default-with-footer",srcSequence:"./pages/fsharp.md"};return S(P),(s,a)=>{const r=be;return k(),$(I,N(M(n)),{default:w(()=>[k6,q(r,le({},{ranges:[""]}),{default:w(()=>[b6]),_:1},16)]),_:1},16)}}},y6=T(v6,[["__file","/@slidev/slides/71.md"]]),w6=t("h2",null,"…Also known as…",-1),x6=t("ul",null,[t("li",null,[o("Discriminated Union "),t("ul",null,[t("li",null,"OR-Type"),t("li",null,"Sum-Type: Der Zustand ergibt sich aus der Summe der Auswahlmöglichkeiten (*)")])]),t("li",null,[o("Record Type "),t("ul",null,[t("li",null,"AND-Type"),t("li",null,"Product-Type: Der Zustand ergibt sich aus dem kartesischen Produkt aller Möglichkeiten jedes Feldes (*)")])])],-1),S6=t("p",null,"(*) Algebraic Data Types",-1),E6={__name:"72",setup(e){const n={layout:"default-with-footer",srcSequence:"./pages/fsharp.md"};return S(P),(s,a)=>(k(),$(I,N(M(n)),{default:w(()=>[w6,x6,S6]),_:1},16))}},$6=T(E6,[["__file","/@slidev/slides/72.md"]]),P6=t("h3",null,"Algebraic Data Types: Sum Type",-1),T6=t("pre",{class:"slidev-code language-fsharp"},[t("code",null,[t("span",{class:"line"},[t("span",{class:"token keyword"},"type"),o(),t("span",{class:"token class-name"},"Vehicle"),o(),t("span",{class:"token operator"},"="),o(" Bike "),t("span",{class:"token operator"},"|"),o(" Car "),t("span",{class:"token operator"},"|"),o(" Bus")])])],-1),C6=t("p",null,[o("Alle möglichen Zustaende von "),t("code",null,"Vehicle"),o(" sind: "),t("code",null,"Bike"),o(", "),t("code",null,"Car"),o(", oder "),t("code",null,"Bus"),o(".")],-1),O6=t("p",null,[o("Dies entspricht der "),t("strong",null,"Summe"),o(" der Auswahlmöglichkeiten.")],-1),A6={__name:"73",setup(e){const n={layout:"default-with-footer",srcSequence:"./pages/fsharp.md"};return S(P),(s,a)=>{const r=be;return k(),$(I,N(M(n)),{default:w(()=>[P6,q(r,le({},{ranges:[""]}),{default:w(()=>[T6]),_:1},16),C6,O6]),_:1},16)}}},F6=T(A6,[["__file","/@slidev/slides/73.md"]]),M6=t("h3",null,"Algebraic Data Types: Product Type",-1),N6=t("pre",{class:"slidev-code language-fsharp"},[t("code",null,[t("span",{class:"line"},[t("span",{class:"token keyword"},"type"),o(),t("span",{class:"token class-name"},"TruthTable"),o(),t("span",{class:"token punctuation"},"{")]),o(`
`),t("span",{class:"line"},[o("  Wert1"),t("span",{class:"token punctuation"},":"),o(),t("span",{class:"token class-name"},"bool")]),o(`
`),t("span",{class:"line"},[o("  Wert2"),t("span",{class:"token punctuation"},":"),o(),t("span",{class:"token class-name"},"bool")]),o(`
`),t("span",{class:"line"},[t("span",{class:"token punctuation"},"}")])])],-1),I6=t("p",null,[o("Alle möglichen Zustände von "),t("code",null,"TruthTable"),o(" sind:")],-1),D6=t("ul",null,[t("li",null,[t("code",null,"true"),o(", "),t("code",null,"false")]),t("li",null,[t("code",null,"true"),o(", "),t("code",null,"true")]),t("li",null,[t("code",null,"false"),o(", "),t("code",null,"false")]),t("li",null,[t("code",null,"false"),o(", "),t("code",null,"true")])],-1),L6=t("p",null,[o("Diese Menge nennt man kartesisches "),t("strong",null,"Produkt"),o(".")],-1),j6={__name:"74",setup(e){const n={layout:"default-with-footer",srcSequence:"./pages/fsharp.md"};return S(P),(s,a)=>{const r=be;return k(),$(I,N(M(n)),{default:w(()=>[M6,q(r,le({},{ranges:[""]}),{default:w(()=>[N6]),_:1},16),I6,D6,L6]),_:1},16)}}},q6=T(j6,[["__file","/@slidev/slides/74.md"]]),R6=t("h2",null,"Record Types",-1),B6=t("ul",null,[t("li",null,"Immutable by default"),t("li",null,"Unmöglich einen ungültigen Record zu erzeugen"),t("li",null,"Structural Equality"),t("li",null,"Hint: C# Value Objects out of the box"),t("li",null,[o("✨ seit C# 9: "),t("code",null,"records")])],-1),V6={__name:"75",setup(e){const n={layout:"default-with-footer",srcSequence:"./pages/fsharp.md"};return S(P),(s,a)=>(k(),$(I,N(M(n)),{default:w(()=>[R6,B6]),_:1},16))}},z6=T(V6,[["__file","/@slidev/slides/75.md"]]),W6=t("h2",null,"Structural Equality",-1),H6=t("pre",{class:"slidev-code language-fsharp"},[t("code",null,[t("span",{class:"line"},[t("span",{class:"token comment"},"// Structural Equality")]),o(`
`),t("span",{class:"line"},[t("span",{class:"token keyword"},"type"),o(),t("span",{class:"token class-name"},"Thing"),o(),t("span",{class:"token operator"},"="),o(),t("span",{class:"token punctuation"},"{"),o("content"),t("span",{class:"token punctuation"},":"),o(),t("span",{class:"token class-name"},"string"),t("span",{class:"token punctuation"},";"),o(" id"),t("span",{class:"token punctuation"},":"),o(),t("span",{class:"token class-name"},"int"),t("span",{class:"token punctuation"},"}")]),o(`
`),t("span",{class:"line"},[t("span",{class:"token keyword"},"let"),o(" thing1 "),t("span",{class:"token operator"},"="),o(),t("span",{class:"token punctuation"},"{"),o("content "),t("span",{class:"token operator"},"="),o(),t("span",{class:"token string"},'"abc"'),t("span",{class:"token punctuation"},";"),o(" id "),t("span",{class:"token operator"},"="),o(),t("span",{class:"token number"},"15"),t("span",{class:"token punctuation"},"}")]),o(`
`),t("span",{class:"line"},[t("span",{class:"token keyword"},"let"),o(" thing2 "),t("span",{class:"token operator"},"="),o(),t("span",{class:"token punctuation"},"{"),o("content "),t("span",{class:"token operator"},"="),o(),t("span",{class:"token string"},'"abc"'),t("span",{class:"token punctuation"},";"),o(" id "),t("span",{class:"token operator"},"="),o(),t("span",{class:"token number"},"15"),t("span",{class:"token punctuation"},"}")]),o(`
`),t("span",{class:"line"},[t("span",{class:"token keyword"},"let"),o(" equal "),t("span",{class:"token operator"},"="),o(),t("span",{class:"token punctuation"},"("),o("thing1 "),t("span",{class:"token operator"},"="),o(" thing2"),t("span",{class:"token punctuation"},")"),o(),t("span",{class:"token comment"},"// true")])])],-1),U6=t("ul",null,[t("li",null,'Record Types mit Structural Equality sind ideal, um sehr kompakt "Value Objects" ausdrücken zu können')],-1),G6={__name:"76",setup(e){const n={layout:"default-with-footer",srcSequence:"./pages/fsharp.md"};return S(P),(s,a)=>{const r=be;return k(),$(I,N(M(n)),{default:w(()=>[W6,q(r,le({},{ranges:[""]}),{default:w(()=>[H6]),_:1},16),U6]),_:1},16)}}},K6=T(G6,[["__file","/@slidev/slides/76.md"]]),Z6=t("h2",null,"Structural Equality vs. DDD Aggregates",-1),Y6=t("ul",null,[t("li",null,"Möchte man die Standard-Equality nicht, ist es best practice, Equality und Comparison zu verbieten"),t("li",null,"dann muss explizit auf eine Eigenschaft verglichen werden (z.B. die Id)")],-1),J6=t("pre",{class:"slidev-code language-fsharp"},[t("code",null,[t("span",{class:"line"},[t("span",{class:"token annotation"},[t("span",{class:"token punctuation"},"[<"),t("span",{class:"token annotation-content"},[o("NoEquality"),t("span",{class:"token punctuation"},";"),o(" NoComparison")]),t("span",{class:"token punctuation"},">]")])]),o(`
`),t("span",{class:"line"},[t("span",{class:"token keyword"},"type"),o(),t("span",{class:"token class-name"},"NonEquatableNonComparable"),o(),t("span",{class:"token operator"},"="),o(),t("span",{class:"token punctuation"},"{")]),o(`
`),t("span",{class:"line"},[o("    Id"),t("span",{class:"token punctuation"},":"),o(),t("span",{class:"token class-name"},"int")]),o(`
`),t("span",{class:"line"},[t("span",{class:"token punctuation"},"}")])])],-1),Q6={__name:"77",setup(e){const n={layout:"default-with-footer",srcSequence:"./pages/fsharp.md"};return S(P),(s,a)=>{const r=be;return k(),$(I,N(M(n)),{default:w(()=>[Z6,Y6,q(r,le({},{ranges:[""]}),{default:w(()=>[J6]),_:1},16)]),_:1},16)}}},X6=T(Q6,[["__file","/@slidev/slides/77.md"]]),eC="/2023-05-magdeburger-devdays-fp-csharp-to-fsharp/images/tweet-don-syme-fsharp-csharp.png",nC=t("h3",null,"C# 9 and greater…",-1),tC=t("ul",null,[t("li",null,"(✅) record types"),t("li",null,"💥 discriminated unions"),t("li",null,"(✅) pattern matching"),t("li",null,"(✅) immutability / non-nullability")],-1),sC=t("p",null,[t("img",{src:eC,alt:"/images/tweet-don-syme-fsharp-csharp.png"})],-1),aC=t("p",null,[t("a",{href:"https://twitter.com/dsymetweets/status/1294280620823240706",target:"_blank",rel:"noopener"},"https://twitter.com/dsymetweets/status/1294280620823240706")],-1),rC={__name:"78",setup(e){const n={layout:"default-with-footer",srcSequence:"./pages/csharp9.md"};return S(P),(s,a)=>(k(),$(I,N(M(n)),{default:w(()=>[nC,tC,sC,aC]),_:1},16))}},oC=T(rC,[["__file","/@slidev/slides/78.md"]]),iC=t("h2",null,"Neue Anforderung!",-1),lC=t("ul",null,[t("li",null,"Es wird eine Menge von Personen verarbeitet"),t("li",null,"Der Spitzname jedes Eintrags soll zu Großbuchstaben umgewandelt werden - wenn er vorhanden ist."),t("li",null,"Danach wird die Länge jedes Spitznamens ermittelt - wenn er vorhanden ist"),t("li",null,"Dann wird die längste Länge ermittelt und zurückgegeben - fehlende Spitznamen werden als 0 gewertet")],-1),cC={__name:"79",setup(e){const n={layout:"default-with-footer",srcSequence:"./pages/anforderung_spitzname_normalisieren.md"};return S(P),(s,a)=>(k(),$(I,N(M(n)),{default:w(()=>[iC,lC]),_:1},16))}},uC=T(cC,[["__file","/@slidev/slides/79.md"]]),pC=t("h2",null,"Kleine Funktionen zu größeren verbinden",-1),dC=t("ul",null,[t("li",null,"Gängige Vorgehensweise: Kleine Funktionen werden zu immer größeren Funktionalitäten zusammengesteckt"),t("li",null,"Problem: Nicht alle Funktionen passen gut zusammen")],-1),fC={__name:"80",setup(e){const n={layout:"default-with-footer",srcSequence:"./pages/funktor.md"};return S(P),(s,a)=>(k(),$(I,N(M(n)),{default:w(()=>[pC,dC]),_:1},16))}},hC=T(fC,[["__file","/@slidev/slides/80.md"]]),mC=t("h3",null,"Problem: Wert in Container, Funktion kann nichts damit anfangen",-1),gC=t("pre",{class:"slidev-code language-fsharp"},[t("code",null,[t("span",{class:"line"},[t("span",{class:"token comment"},"// F#")]),o(`
`),t("span",{class:"line"},[t("span",{class:"token keyword"},"module"),o(" X")]),o(`
`),t("span",{class:"line"}),o(`
`),t("span",{class:"line"},[t("span",{class:"token keyword"},"let"),o(" toUpper "),t("span",{class:"token punctuation"},"("),o("s"),t("span",{class:"token punctuation"},":"),o(),t("span",{class:"token class-name"},"string"),t("span",{class:"token punctuation"},")"),o(),t("span",{class:"token operator"},"="),o(" s"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"ToUpper"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")")]),o(`
`),t("span",{class:"line"}),o(`
`),t("span",{class:"line"},[t("span",{class:"token keyword"},"let"),o(" stringToOption s "),t("span",{class:"token operator"},"=")]),o(`
`),t("span",{class:"line"},[o("    "),t("span",{class:"token keyword"},"if"),o(" String"),t("span",{class:"token punctuation"},"."),o("IsNullOrWhiteSpace s "),t("span",{class:"token keyword"},"then")]),o(`
`),t("span",{class:"line"},"        None"),o(`
`),t("span",{class:"line"},[o("    "),t("span",{class:"token keyword"},"else")]),o(`
`),t("span",{class:"line"},"        Some s"),o(`
`),t("span",{class:"line"}),o(`
`),t("span",{class:"line"},[t("span",{class:"token keyword"},"let"),o(" nonEmptyStringToUpper s "),t("span",{class:"token operator"},"=")]),o(`
`),t("span",{class:"line"},[o("    "),t("span",{class:"token keyword"},"let"),o(" nonEmpty "),t("span",{class:"token operator"},"="),o(" stringToOption s")]),o(`
`),t("span",{class:"line"},[o("    "),t("span",{class:"token comment"},'// passt nicht: "string" erwartet, aber "string option" bekommen')]),o(`
`),t("span",{class:"line"},[o("    "),t("span",{class:"token keyword"},"let"),o(" nonEmptyUpper "),t("span",{class:"token operator"},"="),o(" toUpper nonEmpty")])])],-1),_C={__name:"81",setup(e){const n={layout:"default-with-footer",srcSequence:"./pages/funktor.md"};return S(P),(s,a)=>{const r=be;return k(),$(I,N(M(n)),{default:w(()=>[mC,q(r,le({},{ranges:[""]}),{default:w(()=>[gC]),_:1},16)]),_:1},16)}}},kC=T(_C,[["__file","/@slidev/slides/81.md"]]),bC=t("pre",{class:"slidev-code language-csharp"},[t("code",null,[t("span",{class:"line"},[t("span",{class:"token comment"},"// C#")]),o(`
`),t("span",{class:"line"},[t("span",{class:"token keyword"},"using"),o(),t("span",{class:"token namespace"},[o("LaYumba"),t("span",{class:"token punctuation"},"."),o("Functional")]),t("span",{class:"token punctuation"},";")]),o(`
`),t("span",{class:"line"},[t("span",{class:"token keyword"},"using"),o(),t("span",{class:"token keyword"},"static"),o(),t("span",{class:"token class-name"},[o("LaYumba"),t("span",{class:"token punctuation"},"."),o("Functional"),t("span",{class:"token punctuation"},"."),o("F")]),t("span",{class:"token punctuation"},";")]),o(`
`),t("span",{class:"line"}),o(`
`),t("span",{class:"line"},[t("span",{class:"token keyword"},"static"),o(),t("span",{class:"token keyword"},"class"),o(),t("span",{class:"token class-name"},"X")]),o(`
`),t("span",{class:"line"},[t("span",{class:"token punctuation"},"{")]),o(`
`),t("span",{class:"line"},[o("  "),t("span",{class:"token return-type class-name"},[t("span",{class:"token keyword"},"string")]),o(),t("span",{class:"token function"},"ToUpper"),t("span",{class:"token punctuation"},"("),t("span",{class:"token class-name"},[t("span",{class:"token keyword"},"string")]),o(" s"),t("span",{class:"token punctuation"},")"),o(),t("span",{class:"token operator"},"=>"),o(" s"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"ToUpper"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";")]),o(`
`),t("span",{class:"line"}),o(`
`),t("span",{class:"line"},[o("  "),t("span",{class:"token return-type class-name"},[o("Option"),t("span",{class:"token punctuation"},"<"),t("span",{class:"token keyword"},"string"),t("span",{class:"token punctuation"},">")]),o(),t("span",{class:"token function"},"StringToOption"),t("span",{class:"token punctuation"},"("),t("span",{class:"token class-name"},[t("span",{class:"token keyword"},"string")]),o(" s"),t("span",{class:"token punctuation"},")")]),o(`
`),t("span",{class:"line"},[o("    "),t("span",{class:"token operator"},"=>"),o(),t("span",{class:"token keyword"},"string"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"IsNullOrEmpty"),t("span",{class:"token punctuation"},"("),o("s"),t("span",{class:"token punctuation"},")"),o(),t("span",{class:"token punctuation"},"?"),o(" None "),t("span",{class:"token punctuation"},":"),o(),t("span",{class:"token function"},"Some"),t("span",{class:"token punctuation"},"("),o("s"),t("span",{class:"token punctuation"},")")]),o(`
`),t("span",{class:"line"}),o(`
`),t("span",{class:"line"},[o("  "),t("span",{class:"token function"},"NonEmptyStringToUpper"),t("span",{class:"token punctuation"},"("),t("span",{class:"token class-name"},[t("span",{class:"token keyword"},"string")]),o(" s"),t("span",{class:"token punctuation"},")")]),o(`
`),t("span",{class:"line"},[o("  "),t("span",{class:"token punctuation"},"{")]),o(`
`),t("span",{class:"line"},[o("    "),t("span",{class:"token class-name"},[t("span",{class:"token keyword"},"var")]),o(" nonEmpty "),t("span",{class:"token operator"},"="),o(),t("span",{class:"token function"},"StringToOption"),t("span",{class:"token punctuation"},"("),o("s"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";")]),o(`
`),t("span",{class:"line"},[o("    "),t("span",{class:"token comment"},'// passt nicht: "string" erwartet, aber "string option" bekommen')]),o(`
`),t("span",{class:"line"},[o("    "),t("span",{class:"token keyword"},"return"),o(),t("span",{class:"token function"},"ToUpper"),t("span",{class:"token punctuation"},"("),o("s"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";")]),o(`
`),t("span",{class:"line"},[o("  "),t("span",{class:"token punctuation"},"}")]),o(`
`),t("span",{class:"line"},[t("span",{class:"token punctuation"},"}")])])],-1),vC={__name:"82",setup(e){const n={layout:"default-with-footer",srcSequence:"./pages/funktor.md"};return S(P),(s,a)=>{const r=be;return k(),$(I,N(M(n)),{default:w(()=>[q(r,le({},{ranges:[""]}),{default:w(()=>[bC]),_:1},16)]),_:1},16)}}},yC=T(vC,[["__file","/@slidev/slides/82.md"]]),wC="/2023-05-magdeburger-devdays-fp-csharp-to-fsharp/images/Funktor_1.png",xC=t("h3",null,'Funktor ("Mappable")',-1),SC=t("p",null,[t("img",{src:wC,alt:"img"})],-1),EC={__name:"83",setup(e){const n={layout:"default-with-footer",srcSequence:"./pages/funktor.md"};return S(P),(s,a)=>(k(),$(I,N(M(n)),{default:w(()=>[xC,SC]),_:1},16))}},$C=T(EC,[["__file","/@slidev/slides/83.md"]]),PC=t("h3",null,'Funktor ("Mappable")',-1),TC=t("ul",null,[t("li",null,'Container mit "map" Funktion (die bestimmten Regeln folgt): "Mappable"'),t("li",null,[o("Bezeichnung in der FP-Welt: "),t("strong",null,"Funktor")])],-1),CC=t("pre",{class:"slidev-code language-fsharp"},[t("code",null,[t("span",{class:"line"},[o("  map"),t("span",{class:"token punctuation"},":"),o(),t("span",{class:"token punctuation"},"("),o("a "),t("span",{class:"token operator"},"->"),o(" b"),t("span",{class:"token punctuation"},")"),o(),t("span",{class:"token operator"},"->"),o(" F a "),t("span",{class:"token operator"},"->"),o(" F b")])])],-1),OC={__name:"84",setup(e){const n={layout:"default-with-footer",srcSequence:"./pages/funktor.md"};return S(P),(s,a)=>{const r=be;return k(),$(I,N(M(n)),{default:w(()=>[PC,TC,q(r,le({},{ranges:[""]}),{default:w(()=>[CC]),_:1},16),o(' - Andere Bezeichnungen für "map": fmap (z.B. in Haskell), Select (LINQ), <$>, <!> ')]),_:1},16)}}},AC=T(OC,[["__file","/@slidev/slides/84.md"]]),FC=t("h3",null,"Wert in Container, Funktion passt nicht",-1),MC=t("pre",{class:"slidev-code language-fsharp"},[t("code",null,[t("span",{class:"line"},[t("span",{class:"token keyword"},"let"),o(" toUpper "),t("span",{class:"token punctuation"},"("),o("s"),t("span",{class:"token punctuation"},":"),o(),t("span",{class:"token class-name"},"string"),t("span",{class:"token punctuation"},")"),o(),t("span",{class:"token operator"},"="),o(" s"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"ToUpper"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")")]),o(`
`),t("span",{class:"line"}),o(`
`),t("span",{class:"line"},[t("span",{class:"token keyword"},"let"),o(" stringToOption s "),t("span",{class:"token operator"},"=")]),o(`
`),t("span",{class:"line"},[o("    "),t("span",{class:"token keyword"},"if"),o(" String"),t("span",{class:"token punctuation"},"."),o("IsNullOrWhiteSpace s "),t("span",{class:"token keyword"},"then")]),o(`
`),t("span",{class:"line"},"        None"),o(`
`),t("span",{class:"line"},[o("    "),t("span",{class:"token keyword"},"else")]),o(`
`),t("span",{class:"line"},"        Some s"),o(`
`),t("span",{class:"line"}),o(`
`),t("span",{class:"line"},[t("span",{class:"token keyword"},"let"),o(" nonEmptyStringToUpper s "),t("span",{class:"token operator"},"=")]),o(`
`),t("span",{class:"line"},[o("    "),t("span",{class:"token keyword"},"let"),o(" nonEmpty "),t("span",{class:"token operator"},"="),o(" stringToOption s")]),o(`
`),t("span",{class:"line"},[o("    "),t("span",{class:"token keyword"},"let"),o(" nonEmptyUpper "),t("span",{class:"token operator"},"="),o(" Option"),t("span",{class:"token punctuation"},"."),o("map toUpper nonEmpty")])])],-1),NC={__name:"85",setup(e){const n={layout:"default-with-footer",srcSequence:"./pages/funktor.md"};return S(P),(s,a)=>{const r=be;return k(),$(I,N(M(n)),{default:w(()=>[FC,q(r,le({},{ranges:[""]}),{default:w(()=>[MC]),_:1},16)]),_:1},16)}}},IC=T(NC,[["__file","/@slidev/slides/85.md"]]),DC=t("h2",null,"Neue Anforderung!",-1),LC=t("ul",null,[t("li",null,"Es wird eine Menge von Personen verarbeitet"),t("li",null,"Der Spitzname jedes Eintrags soll zu Großbuchstaben umgewandelt werden - wenn er vorhanden ist."),t("li",null,"Danach wird die Länge jedes Spitznamens ermittelt - wenn er vorhanden ist"),t("li",null,"Dann wird die längste Länge ermittelt und zurückgegeben - fehlende Spitznamen werden als 0 gewertet")],-1),jC={__name:"86",setup(e){const n={layout:"default-with-footer",srcSequence:"./pages/anforderung_spitzname_normalisieren.md"};return S(P),(s,a)=>(k(),$(I,N(M(n)),{default:w(()=>[DC,LC]),_:1},16))}},qC=T(jC,[["__file","/@slidev/slides/86.md"]]),RC=t("h1",null,"Let’s code",-1),BC={__name:"87",setup(e){const n={layout:"default-with-footer",srcSequence:"./pages/letscode.md"};return S(P),(s,a)=>(k(),$(I,N(M(n)),{default:w(()=>[RC]),_:1},16))}},VC=T(BC,[["__file","/@slidev/slides/87.md"]]),zC=t("h2",null,"Neue Anforderungen!",-1),WC=t("ul",null,[t("li",null,"Funktion, die eine Person entgegennimmt, und einen Grusskartentext erzeugt. (kann fehlschlagen)"),t("li",null,"Grusskartentext wird an DruckService geschickt. Es wird eine Grusskarte erzeugt. (kann fehlschlagen)"),t("li",null,"Grusskarte wird an Postversand uebermittelt. (kann fehlschlagen)"),t("li",null,"E-Mail versenden, ob alles geklappt hat (immer).")],-1),HC={__name:"88",setup(e){const n={layout:"default-with-footer",srcSequence:"./pages/anforderung_karte_versenden.md"};return S(P),(s,a)=>(k(),$(I,N(M(n)),{default:w(()=>[zC,WC]),_:1},16))}},UC=T(HC,[["__file","/@slidev/slides/88.md"]]),GC=t("h3",null,"Problem: Verkettung eingepackter Werte",-1),KC=t("pre",{class:"slidev-code language-fsharp"},[t("code",null,[t("span",{class:"line"},[t("span",{class:"token keyword"},"let"),o(" storeInDatabase path content "),t("span",{class:"token operator"},"="),o()]),o(`
`),t("span",{class:"line"},[o("  "),t("span",{class:"token keyword"},"try")]),o(`
`),t("span",{class:"line"},[o("    System"),t("span",{class:"token punctuation"},"."),o("IO"),t("span",{class:"token punctuation"},"."),o("File"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"WriteAllText"),t("span",{class:"token punctuation"},"("),o("path"),t("span",{class:"token punctuation"},","),o(" content"),t("span",{class:"token punctuation"},")")]),o(`
`),t("span",{class:"line"},"    Some content"),o(`
`),t("span",{class:"line"},[o("  "),t("span",{class:"token keyword"},"with")]),o(`
`),t("span",{class:"line"},[o("    ex "),t("span",{class:"token operator"},"->"),o(" None")]),o(`
`),t("span",{class:"line"}),o(`
`),t("span",{class:"line"},[t("span",{class:"token keyword"},"let"),o(" stringToOption s "),t("span",{class:"token operator"},"=")]),o(`
`),t("span",{class:"line"},[o("    "),t("span",{class:"token keyword"},"if"),o(" String"),t("span",{class:"token punctuation"},"."),o("IsNullOrWhiteSpace s "),t("span",{class:"token keyword"},"then"),o(" None "),t("span",{class:"token keyword"},"else"),o(" Some s")]),o(`
`),t("span",{class:"line"}),o(`
`),t("span",{class:"line"},[t("span",{class:"token keyword"},"let"),o(" toUpper "),t("span",{class:"token punctuation"},"("),o("s"),t("span",{class:"token punctuation"},":"),o(),t("span",{class:"token class-name"},"string"),t("span",{class:"token punctuation"},")"),o(),t("span",{class:"token operator"},"="),o(" s"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"ToUpper"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")")]),o(`
`),t("span",{class:"line"}),o(`
`),t("span",{class:"line"},[t("span",{class:"token keyword"},"let"),o(" nonEmptyStringStoreInPersistenceAndToUpper path content "),t("span",{class:"token operator"},"=")]),o(`
`),t("span",{class:"line"},[o("    "),t("span",{class:"token keyword"},"let"),o(" nonEmpty "),t("span",{class:"token operator"},"="),o(" stringToOption content")]),o(`
`),t("span",{class:"line"},[o("    "),t("span",{class:"token comment"},'// passt nicht: "string" erwartet, aber "string option" bekommen')]),o(`
`),t("span",{class:"line"},[o("    "),t("span",{class:"token keyword"},"let"),o(" stored "),t("span",{class:"token operator"},"="),o(" storeInDatabase path nonEmpty")]),o(`
`),t("span",{class:"line"},[o("    "),t("span",{class:"token comment"},'// passt nicht: "string option" erwartet, ')]),o(`
`),t("span",{class:"line"},[o("    "),t("span",{class:"token comment"},'// aber "string option option" bekommen')]),o(`
`),t("span",{class:"line"},[o("    "),t("span",{class:"token keyword"},"let"),o(" nonEmptyUpper "),t("span",{class:"token operator"},"="),o(" Option"),t("span",{class:"token punctuation"},"."),o("map toUpper stored")])])],-1),ZC={__name:"89",setup(e){const n={layout:"default-with-footer",srcSequence:"./pages/monade.md"};return S(P),(s,a)=>{const r=be;return k(),$(I,N(M(n)),{default:w(()=>[GC,q(r,le({},{ranges:[""]}),{default:w(()=>[KC]),_:1},16)]),_:1},16)}}},YC=T(ZC,[["__file","/@slidev/slides/89.md"]]),JC="/2023-05-magdeburger-devdays-fp-csharp-to-fsharp/images/Monade_1.png",QC=t("h3",null,'Monade ("Chainable")',-1),XC=t("p",null,[t("img",{src:JC,alt:"img"})],-1),eO={__name:"90",setup(e){const n={layout:"default-with-footer",srcSequence:"./pages/monade.md"};return S(P),(s,a)=>(k(),$(I,N(M(n)),{default:w(()=>[QC,XC]),_:1},16))}},nO=T(eO,[["__file","/@slidev/slides/90.md"]]),tO=t("h3",null,'Monade ("Chainable")',-1),sO=t("ul",null,[t("li",null,'Container mit "bind" Funktion (die bestimmten Regeln folgt): "Chainable"'),t("li",null,[o("Bezeichnung in der FP-Welt: "),t("strong",null,"Monade")])],-1),aO=t("pre",{class:"slidev-code language-fsharp"},[t("code",null,[t("span",{class:"line"},[o("  bind"),t("span",{class:"token punctuation"},":"),o(),t("span",{class:"token punctuation"},"("),o("a "),t("span",{class:"token operator"},"->"),o(" M b"),t("span",{class:"token punctuation"},")"),o(),t("span",{class:"token operator"},"->"),o(" M a "),t("span",{class:"token operator"},"->"),o(" M b")])])],-1),rO={__name:"91",setup(e){const n={layout:"default-with-footer",srcSequence:"./pages/monade.md"};return S(P),(s,a)=>{const r=be;return k(),$(I,N(M(n)),{default:w(()=>[tO,sO,q(r,le({},{ranges:[""]}),{default:w(()=>[aO]),_:1},16),o(' - Andere Bezeichnungen für "bind": flatMap, SelectMany (LINQ), >>= ')]),_:1},16)}}},oO=T(rO,[["__file","/@slidev/slides/91.md"]]),iO=t("h2",null,"Verkettung",-1),lO=t("pre",{class:"slidev-code language-fsharp"},[t("code",null,[t("span",{class:"line"},[t("span",{class:"token keyword"},"let"),o(" storeInDatabase path content "),t("span",{class:"token operator"},"="),o()]),o(`
`),t("span",{class:"line"},[o("  "),t("span",{class:"token keyword"},"try")]),o(`
`),t("span",{class:"line"},[o("    System"),t("span",{class:"token punctuation"},"."),o("IO"),t("span",{class:"token punctuation"},"."),o("File"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"WriteAllText"),t("span",{class:"token punctuation"},"("),o("path"),t("span",{class:"token punctuation"},","),o(" content"),t("span",{class:"token punctuation"},")")]),o(`
`),t("span",{class:"line"},"    Some content"),o(`
`),t("span",{class:"line"},[o("  "),t("span",{class:"token keyword"},"with")]),o(`
`),t("span",{class:"line"},[o("    ex "),t("span",{class:"token operator"},"->"),o(" None")]),o(`
`),t("span",{class:"line"}),o(`
`),t("span",{class:"line"},[t("span",{class:"token keyword"},"let"),o(" stringToOption s "),t("span",{class:"token operator"},"=")]),o(`
`),t("span",{class:"line"},[o("    "),t("span",{class:"token keyword"},"if"),o(" String"),t("span",{class:"token punctuation"},"."),o("IsNullOrWhiteSpace s "),t("span",{class:"token keyword"},"then"),o(" None "),t("span",{class:"token keyword"},"else"),o(" Some s")]),o(`
`),t("span",{class:"line"}),o(`
`),t("span",{class:"line"},[t("span",{class:"token keyword"},"let"),o(" toUpper "),t("span",{class:"token punctuation"},"("),o("s"),t("span",{class:"token punctuation"},":"),o(),t("span",{class:"token class-name"},"string"),t("span",{class:"token punctuation"},")"),o(),t("span",{class:"token operator"},"="),o(" s"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"ToUpper"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")")]),o(`
`),t("span",{class:"line"}),o(`
`),t("span",{class:"line"},[t("span",{class:"token keyword"},"let"),o(" nonEmptyStringStoreInPersistenceAndToUpper path content "),t("span",{class:"token operator"},"=")]),o(`
`),t("span",{class:"line"},[o("    "),t("span",{class:"token keyword"},"let"),o(" nonEmpty "),t("span",{class:"token operator"},"="),o(" stringToOption content")]),o(`
`),t("span",{class:"line"},[o("    "),t("span",{class:"token keyword"},"let"),o(" stored "),t("span",{class:"token operator"},"="),o(" Option"),t("span",{class:"token punctuation"},"."),o("bind "),t("span",{class:"token punctuation"},"("),o("storeInDatabase path"),t("span",{class:"token punctuation"},")"),o(" nonEmpty")]),o(`
`),t("span",{class:"line"},[o("    "),t("span",{class:"token keyword"},"let"),o(" nonEmptyUpper "),t("span",{class:"token operator"},"="),o(" Option"),t("span",{class:"token punctuation"},"."),o("map toUpper stored")])])],-1),cO={__name:"92",setup(e){const n={layout:"default-with-footer",srcSequence:"./pages/monade.md"};return S(P),(s,a)=>{const r=be;return k(),$(I,N(M(n)),{default:w(()=>[iO,q(r,le({},{ranges:[""]}),{default:w(()=>[lO]),_:1},16)]),_:1},16)}}},uO=T(cO,[["__file","/@slidev/slides/92.md"]]),pO=t("h2",null,"Railway Oriented Programming",-1),dO=t("p",null,'Funktionale Programmierung wird oft als das "Zusammenstöpseln" von Funktionen dargestellt…',-1),fO={__name:"93",setup(e){const n={layout:"default-with-footer",srcSequence:"./pages/railway.md"};return S(P),(s,a)=>(k(),$(I,N(M(n)),{default:w(()=>[pO,dO]),_:1},16))}},hO=T(fO,[["__file","/@slidev/slides/93.md"]]),mO=t("p",null,"Beispiel:",-1),gO=t("pre",{class:"slidev-code language-txt"},[t("code",null,[t("span",{class:"line"},"f1: Eingabe string, Ausgabe int"),o(`
`),t("span",{class:"line"},"f1: string -> int // FP Syntax"),o(`
`),t("span",{class:"line"}),o(`
`),t("span",{class:"line"},"f2: Eingabe int, Ausgabe bool"),o(`
`),t("span",{class:"line"},"f2: int -> bool // FP Syntax")])],-1),_O={__name:"94",setup(e){const n={layout:"default-with-footer",srcSequence:"./pages/railway.md"};return S(P),(s,a)=>{const r=be;return k(),$(I,N(M(n)),{default:w(()=>[mO,q(r,le({},{ranges:[""]}),{default:w(()=>[gO]),_:1},16)]),_:1},16)}}},kO=T(_O,[["__file","/@slidev/slides/94.md"]]),bO=t("pre",{class:"slidev-code language-csharp"},[t("code",null,[t("span",{class:"line"},[t("span",{class:"token comment"},"// Klassisch ===========================================================")]),o(`
`),t("span",{class:"line"},[t("span",{class:"token return-type class-name"},[t("span",{class:"token keyword"},"int")]),o(),t("span",{class:"token function"},"F1"),t("span",{class:"token punctuation"},"("),t("span",{class:"token class-name"},[t("span",{class:"token keyword"},"string")]),o(" s"),t("span",{class:"token punctuation"},")"),o(),t("span",{class:"token operator"},"=>"),o(),t("span",{class:"token keyword"},"int"),t("span",{class:"token punctuation"},"."),o("TryParse"),t("span",{class:"token class-name"},[t("span",{class:"token punctuation"},"("),o("s"),t("span",{class:"token punctuation"},","),o(),t("span",{class:"token keyword"},"out"),o(),t("span",{class:"token keyword"},"var"),o(" i"),t("span",{class:"token punctuation"},")"),o(),t("span",{class:"token punctuation"},"?")]),o(" i "),t("span",{class:"token punctuation"},":"),o(),t("span",{class:"token number"},"0"),t("span",{class:"token punctuation"},";")]),o(`
`),t("span",{class:"line"},[t("span",{class:"token return-type class-name"},[t("span",{class:"token keyword"},"bool")]),o(),t("span",{class:"token function"},"F2"),t("span",{class:"token punctuation"},"("),t("span",{class:"token class-name"},[t("span",{class:"token keyword"},"int")]),o(" i"),t("span",{class:"token punctuation"},")"),o(),t("span",{class:"token operator"},"=>"),o(" i "),t("span",{class:"token operator"},">"),o(),t("span",{class:"token number"},"0"),t("span",{class:"token punctuation"},";")]),o(`
`),t("span",{class:"line"}),o(`
`),t("span",{class:"line"},[t("span",{class:"token comment"},'// "verschachtelter" Aufruf')]),o(`
`),t("span",{class:"line"},[t("span",{class:"token function"},"F2"),t("span",{class:"token punctuation"},"("),t("span",{class:"token function"},"F1"),t("span",{class:"token punctuation"},"("),t("span",{class:"token string"},'"1"'),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},")"),o(),t("span",{class:"token comment"},"// -> true")]),o(`
`),t("span",{class:"line"},[t("span",{class:"token function"},"F2"),t("span",{class:"token punctuation"},"("),t("span",{class:"token function"},"F1"),t("span",{class:"token punctuation"},"("),t("span",{class:"token string"},'"0"'),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},")"),o(),t("span",{class:"token comment"},"// -> false")]),o(`
`),t("span",{class:"line"}),o(`
`),t("span",{class:"line"},[t("span",{class:"token comment"},'// "composition"')]),o(`
`),t("span",{class:"line"},[t("span",{class:"token return-type class-name"},[t("span",{class:"token keyword"},"bool")]),o(),t("span",{class:"token function"},"F3"),t("span",{class:"token punctuation"},"("),t("span",{class:"token class-name"},[t("span",{class:"token keyword"},"string")]),o(" s"),t("span",{class:"token punctuation"},")"),o(),t("span",{class:"token operator"},"=>"),o(),t("span",{class:"token function"},"F2"),t("span",{class:"token punctuation"},"("),t("span",{class:"token function"},"F1"),t("span",{class:"token punctuation"},"("),o("s"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";")])])],-1),vO=t("pre",{class:"slidev-code language-csharp"},[t("code",null,[t("span",{class:"line"},[t("span",{class:"token comment"},"// Method Chaining =====================================================")]),o(`
`),t("span",{class:"line"},[t("span",{class:"token comment"},"// mit C# extension methods")]),o(`
`),t("span",{class:"line"},[t("span",{class:"token keyword"},"static"),o(),t("span",{class:"token return-type class-name"},[t("span",{class:"token keyword"},"int")]),o(),t("span",{class:"token function"},"F1"),t("span",{class:"token punctuation"},"("),t("span",{class:"token keyword"},"this"),o(),t("span",{class:"token class-name"},[t("span",{class:"token keyword"},"string")]),o(" s"),t("span",{class:"token punctuation"},")"),o(),t("span",{class:"token operator"},"=>"),o(),t("span",{class:"token keyword"},"int"),t("span",{class:"token punctuation"},"."),o("TryParse"),t("span",{class:"token class-name"},[t("span",{class:"token punctuation"},"("),o("s"),t("span",{class:"token punctuation"},","),o(),t("span",{class:"token keyword"},"out"),o(),t("span",{class:"token keyword"},"var"),o(" i"),t("span",{class:"token punctuation"},")"),o(),t("span",{class:"token punctuation"},"?")]),o(" i "),t("span",{class:"token punctuation"},":"),o(),t("span",{class:"token number"},"0"),t("span",{class:"token punctuation"},";")]),o(`
`),t("span",{class:"line"},[t("span",{class:"token keyword"},"static"),o(),t("span",{class:"token return-type class-name"},[t("span",{class:"token keyword"},"bool")]),o(),t("span",{class:"token function"},"F2"),t("span",{class:"token punctuation"},"("),t("span",{class:"token keyword"},"this"),o(),t("span",{class:"token class-name"},[t("span",{class:"token keyword"},"int")]),o(" i"),t("span",{class:"token punctuation"},")"),o(),t("span",{class:"token operator"},"=>"),o(" i "),t("span",{class:"token operator"},">"),o(),t("span",{class:"token number"},"0"),t("span",{class:"token punctuation"},";")]),o(`
`),t("span",{class:"line"}),o(`
`),t("span",{class:"line"},[t("span",{class:"token comment"},"// Lesbarer (erst F1, dann F2)")]),o(`
`),t("span",{class:"line"},[t("span",{class:"token string"},'"1"'),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"F1"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"F2"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),o(),t("span",{class:"token comment"},"// ->true")]),o(`
`),t("span",{class:"line"},[t("span",{class:"token string"},'"0"'),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"F1"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"F2"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),o(),t("span",{class:"token comment"},"// ->false")]),o(`
`),t("span",{class:"line"}),o(`
`),t("span",{class:"line"},[t("span",{class:"token comment"},"// Lesbarer (erst F1, dann F2)")]),o(`
`),t("span",{class:"line"},[t("span",{class:"token return-type class-name"},[t("span",{class:"token keyword"},"bool")]),o(),t("span",{class:"token function"},"F3"),t("span",{class:"token punctuation"},"("),t("span",{class:"token class-name"},[t("span",{class:"token keyword"},"string")]),o(" s"),t("span",{class:"token punctuation"},")"),o(),t("span",{class:"token operator"},"=>"),o(" s"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"F1"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"F2"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";")])])],-1),yO={__name:"95",setup(e){const n={layout:"default-with-footer",srcSequence:"./pages/railway.md"};return S(P),(s,a)=>{const r=be;return k(),$(I,N(M(n)),{default:w(()=>[q(r,le({},{ranges:[""]}),{default:w(()=>[bO]),_:1},16),q(r,le({},{ranges:[""]}),{default:w(()=>[vO]),_:1},16)]),_:1},16)}}},wO=T(yO,[["__file","/@slidev/slides/95.md"]]),xO=t("p",null,"Problem: Keine standardisierte Strategie für Fehlerbehandlung",-1),SO={__name:"96",setup(e){const n={layout:"default-with-footer",srcSequence:"./pages/railway.md"};return S(P),(s,a)=>(k(),$(I,N(M(n)),{default:w(()=>[xO]),_:1},16))}},EO=T(SO,[["__file","/@slidev/slides/96.md"]]),$O=t("ul",null,[t("li",null,[o("Wenn wir davon ausgehen, dass Funktionen auch einen Fehlerfall haben, benötigen wir einen "),t("strong",null,"neuen Datentyp"),o(", der das abbilden kann")])],-1),PO={__name:"97",setup(e){const n={layout:"default-with-footer",srcSequence:"./pages/railway.md"};return S(P),(s,a)=>(k(),$(I,N(M(n)),{default:w(()=>[$O]),_:1},16))}},TO=T(PO,[["__file","/@slidev/slides/97.md"]]),CO=t("h4",null,"Result/Either",-1),OO=t("ul",null,[t("li",null,[o("kann entweder "),t("ul",null,[t("li",null,"das Ergebnis beinhalten, oder"),t("li",null,"einen Fehlerfall")])])],-1),AO={__name:"98",setup(e){const n={layout:"default-with-footer",srcSequence:"./pages/railway.md"};return S(P),(s,a)=>(k(),$(I,N(M(n)),{default:w(()=>[CO,OO]),_:1},16))}},FO=T(AO,[["__file","/@slidev/slides/98.md"]]),MO=t("ul",null,[t("li",null,'In Railway-Sprech bedeutet dass, dass man "zweigleisig" fährt:'),t("li",null,[o("Jede "),t("strong",null,"Funktion"),o(" bekommt eine Eingabe, und "),t("ul",null,[t("li",null,[o('hat "im Bauch" eine Weiche, die entscheidet ob '),t("ul",null,[t("li",null,"auf das Fehlergleis oder"),t("li",null,"auf das Erfolgsgleis umgeschaltet wird.")])])])]),t("li",null,[o("Die Wrapperklasse mit der "),t("strong",null,"Funktion"),o(" ist das Entscheidende!")])],-1),NO={__name:"99",setup(e){const n={layout:"default-with-footer",srcSequence:"./pages/railway.md"};return S(P),(s,a)=>(k(),$(I,N(M(n)),{default:w(()=>[MO]),_:1},16))}},IO=T(NO,[["__file","/@slidev/slides/99.md"]]),DO="/2023-05-magdeburger-devdays-fp-csharp-to-fsharp/images/rop-tracks-Page-2.png",LO=t("ul",null,[t("li",null,"In anderen Worten: die Funktionen haben aktuell 1 Eingabe (1 Gleis), und 2 Ausgaben (2 Gleise)")],-1),jO=t("p",null,[t("img",{class:"absolute bottom-50 left-10 w-200",src:DO})],-1),qO={__name:"100",setup(e){const n={layout:"default-with-footer",srcSequence:"./pages/railway.md"};return S(P),(s,a)=>(k(),$(I,N(M(n)),{default:w(()=>[LO,jO]),_:1},16))}},RO=T(qO,[["__file","/@slidev/slides/100.md"]]),BO="/2023-05-magdeburger-devdays-fp-csharp-to-fsharp/images/rop-tracks-Page-4.png",VO=t("ul",null,[t("li",null,"Man benötigt also einen Mechanismus, der eine 2-gleisige Ausgabe so umwandelt, dass eine Funktion, die eine 1-gleisige Eingabe erwartet, damit umgehen kann")],-1),zO=t("p",null,[t("img",{class:"absolute bottom-10 left-20 w-180",src:BO})],-1),WO={__name:"101",setup(e){const n={layout:"default-with-footer",srcSequence:"./pages/railway.md"};return S(P),(s,a)=>(k(),$(I,N(M(n)),{default:w(()=>[VO,zO]),_:1},16))}},HO=T(WO,[["__file","/@slidev/slides/101.md"]]),UO=t("h4",null,"Was muss dieser Mechanismus können?",-1),GO=t("ul",null,[t("li",null,"wenn die Eingabe fehlerhaft ist, muss die Funktion nichts tun, und kann den Fehler weiterreichen"),t("li",null,"wenn die Eingabe nicht fehlerhaft ist, wird der Wert an die Funktion gegeben")],-1),KO={__name:"102",setup(e){const n={layout:"default-with-footer",srcSequence:"./pages/railway.md"};return S(P),(s,a)=>(k(),$(I,N(M(n)),{default:w(()=>[UO,GO]),_:1},16))}},ZO=T(KO,[["__file","/@slidev/slides/102.md"]]),YO=t("pre",{class:"slidev-code language-haskell"},[t("code",null,[t("span",{class:"line"},[t("span",{class:"token hvariable"},"bind"),t("span",{class:"token operator"},":"),o(),t("span",{class:"token punctuation"},"("),t("span",{class:"token hvariable"},"string"),o(),t("span",{class:"token operator"},"->"),o(),t("span",{class:"token constant"},"Result"),o(),t("span",{class:"token hvariable"},"int"),t("span",{class:"token punctuation"},")"),o(),t("span",{class:"token operator"},"->"),o(),t("span",{class:"token constant"},"Result"),o(),t("span",{class:"token hvariable"},"string"),o(),t("span",{class:"token operator"},"->"),o(),t("span",{class:"token constant"},"Result"),o(),t("span",{class:"token hvariable"},"int")]),o(`
`),t("span",{class:"line"}),o(`
`),t("span",{class:"line"},[t("span",{class:"token hvariable"},"bind"),t("span",{class:"token operator"},":"),o(),t("span",{class:"token punctuation"},"("),t("span",{class:"token hvariable"},"a"),o(),t("span",{class:"token operator"},"->"),o(),t("span",{class:"token constant"},"M"),o(),t("span",{class:"token hvariable"},"b"),t("span",{class:"token punctuation"},")"),o(),t("span",{class:"token operator"},"->"),o(),t("span",{class:"token constant"},"M"),o(),t("span",{class:"token hvariable"},"a"),o(),t("span",{class:"token operator"},"->"),o(),t("span",{class:"token constant"},"M"),o(),t("span",{class:"token hvariable"},"b")])])],-1),JO=t("ul",null,[t("li",null,[o("FP-Jargon: eine Wrapper-Klasse, die "),t("code",null,"bind"),o(" bereitstellt, wird "),t("strong",null,"Monade"),o(" genannt (sehr stark vereinfacht!).")])],-1),QO=t("p",null,[o("TODO: Beispiel: siehe "),t("code",null,"ChainingOptions.Chaining_option_returning_functions"),o(".")],-1),XO={__name:"103",setup(e){const n={layout:"default-with-footer",srcSequence:"./pages/railway.md"};return S(P),(s,a)=>{const r=be;return k(),$(I,N(M(n)),{default:w(()=>[q(r,le({},{ranges:[""]}),{default:w(()=>[YO]),_:1},16),JO,QO]),_:1},16)}}},eA=T(XO,[["__file","/@slidev/slides/103.md"]]),nA=t("ul",null,[t("li",null,[t("code",null,"Either"),o(" besteht aus zwei Teilen "),t("ul",null,[t("li",null,[t("code",null,"Left")]),t("li",null,[t("code",null,"Right"),o(' ("richtig"…)')])])]),t("li",null,[t("code",null,"Result"),o(" besteht aus zwei Teilen "),t("ul",null,[t("li",null,[t("code",null,"Failure")]),t("li",null,[t("code",null,"Success")])])])],-1),tA={__name:"104",setup(e){const n={layout:"default-with-footer",srcSequence:"./pages/railway.md"};return S(P),(s,a)=>(k(),$(I,N(M(n)),{default:w(()=>[nA]),_:1},16))}},sA=T(tA,[["__file","/@slidev/slides/104.md"]]),aA=t("pre",{class:"slidev-code language-csharp"},[t("code",null,[t("span",{class:"line"},[t("span",{class:"token return-type class-name"},[o("Option"),t("span",{class:"token punctuation"},"<"),t("span",{class:"token keyword"},"string"),t("span",{class:"token punctuation"},">")]),o(),t("span",{class:"token function"},"IsValidOpt"),t("span",{class:"token punctuation"},"("),t("span",{class:"token class-name"},[t("span",{class:"token keyword"},"string")]),o(" s"),t("span",{class:"token punctuation"},")"),o(),t("span",{class:"token operator"},"=>")]),o(`
`),t("span",{class:"line"},[o("    "),t("span",{class:"token keyword"},"string"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"IsNullOrEmpty"),t("span",{class:"token punctuation"},"("),o("s"),t("span",{class:"token punctuation"},")")]),o(`
`),t("span",{class:"line"},[o("        "),t("span",{class:"token punctuation"},"?"),o(" None")]),o(`
`),t("span",{class:"line"},[o("        "),t("span",{class:"token punctuation"},":"),o(),t("span",{class:"token function"},"Some"),t("span",{class:"token punctuation"},"("),o("s"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";")])])],-1),rA=t("ul",null,[t("li",null,[t("code",null,"Option"),o(" hat "),t("code",null,"Some(T)"),o(" und "),t("code",null,"None")]),t("li",null,[t("code",null,"Either"),o("/"),t("code",null,"Result"),o(" ist ähnlich zu "),t("code",null,"Option")]),t("li",null,[t("code",null,"None"),o(" wird durch "),t("code",null,"Failure"),o("/"),t("code",null,"Left"),o(" ersetzt (frei wählbar, z.B. selbst definierter Error Typ).")])],-1),oA=t("pre",{class:"slidev-code language-csharp"},[t("code",null,[t("span",{class:"line"},[t("span",{class:"token return-type class-name"},[o("Either"),t("span",{class:"token punctuation"},"<"),t("span",{class:"token keyword"},"string"),t("span",{class:"token punctuation"},","),o(),t("span",{class:"token keyword"},"string"),t("span",{class:"token punctuation"},">")]),o(),t("span",{class:"token function"},"IsValidEither"),t("span",{class:"token punctuation"},"("),t("span",{class:"token class-name"},[t("span",{class:"token keyword"},"string")]),o(" s"),t("span",{class:"token punctuation"},")")]),o(`
`),t("span",{class:"line"},[o("    "),t("span",{class:"token operator"},"=>"),o(),t("span",{class:"token keyword"},"string"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"IsNullOrEmpty"),t("span",{class:"token punctuation"},"("),o("s"),t("span",{class:"token punctuation"},")")]),o(`
`),t("span",{class:"line"},[o("        "),t("span",{class:"token punctuation"},"?"),o(),t("span",{class:"token punctuation"},"("),o("Either"),t("span",{class:"token operator"},"<"),t("span",{class:"token keyword"},"string"),t("span",{class:"token punctuation"},","),o(),t("span",{class:"token keyword"},"string"),t("span",{class:"token operator"},">"),t("span",{class:"token punctuation"},")"),o(),t("span",{class:"token function"},"Left"),t("span",{class:"token punctuation"},"("),t("span",{class:"token string"},'"ups"'),t("span",{class:"token punctuation"},")")]),o(`
`),t("span",{class:"line"},[o("        "),t("span",{class:"token punctuation"},":"),o(),t("span",{class:"token function"},"Right"),t("span",{class:"token punctuation"},"("),o("s"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";")])])],-1),iA={__name:"105",setup(e){const n={layout:"default-with-footer",srcSequence:"./pages/railway.md"};return S(P),(s,a)=>{const r=be;return k(),$(I,N(M(n)),{default:w(()=>[q(r,le({},{ranges:[""]}),{default:w(()=>[aA]),_:1},16),rA,q(r,le({},{ranges:[""]}),{default:w(()=>[oA]),_:1},16)]),_:1},16)}}},lA=T(iA,[["__file","/@slidev/slides/105.md"]]),cA=t("h2",null,"Neue Anforderungen!",-1),uA=t("ul",null,[t("li",null,"Funktion, die eine Person entgegennimmt, und einen Grusskartentext erzeugt. (kann fehlschlagen)"),t("li",null,"Grusskartentext wird an DruckService geschickt. Es wird eine Grusskarte erzeugt. (kann fehlschlagen)"),t("li",null,"Grusskarte wird an Postversand uebermittelt. (kann fehlschlagen)"),t("li",null,"E-Mail versenden, ob alles geklappt hat (immer).")],-1),pA={__name:"106",setup(e){const n={layout:"default-with-footer",srcSequence:"./pages/anforderung_karte_versenden.md"};return S(P),(s,a)=>(k(),$(I,N(M(n)),{default:w(()=>[cA,uA]),_:1},16))}},dA=T(pA,[["__file","/@slidev/slides/106.md"]]),fA=t("h1",null,"Let’s code",-1),hA={__name:"107",setup(e){const n={layout:"default-with-footer",srcSequence:"./pages/letscode.md"};return S(P),(s,a)=>(k(),$(I,N(M(n)),{default:w(()=>[fA]),_:1},16))}},mA=T(hA,[["__file","/@slidev/slides/107.md"]]),gA=t("h2",null,"Neue Anforderung!",-1),_A=t("ul",null,[t("li",null,"Beim Anlegen eines Eintrags werden alle Pflichtfelder validiert. Validierungsfehler werden gesammelt und am Ende gebündelt zurückgegeben. Nur wenn alle Validierungen erfolgreich sind, wird der Eintrag angelegt."),t("li",null,[o("Die Felder und Regeln: "),t("ul",null,[t("li",null,[o("Vorname "),t("ul",null,[t("li",null,"Muss existieren"),t("li",null,"Darf nicht leer sein oder nur aus Whitespace bestehen")])]),t("li",null,[o("Geburtstag "),t("ul",null,[t("li",null,"Muss existieren"),t("li",null,"Darf nicht in der Zukunft liegen")])])])])],-1),kA={__name:"108",setup(e){const n={layout:"default-with-footer",srcSequence:"./pages/anforderung_fehler_sammeln_beim_validieren.md"};return S(P),(s,a)=>(k(),$(I,N(M(n)),{default:w(()=>[gA,_A]),_:1},16))}},bA=T(kA,[["__file","/@slidev/slides/108.md"]]),vA=t("h3",null,"Problem: Funktion mit mehreren eingepackten Parametern",-1),yA=t("pre",{class:"slidev-code language-fsharp"},[t("code",null,[t("span",{class:"line"},[t("span",{class:"token keyword"},"let"),o(" add a b "),t("span",{class:"token operator"},"="),o(" a "),t("span",{class:"token operator"},"+"),o(" b")]),o(`
`),t("span",{class:"line"}),o(`
`),t("span",{class:"line"},[t("span",{class:"token keyword"},"let"),o(" onlyPositive i "),t("span",{class:"token operator"},"=")]),o(`
`),t("span",{class:"line"},[o("  "),t("span",{class:"token keyword"},"if"),o(" i "),t("span",{class:"token operator"},">"),o(),t("span",{class:"token number"},"0"),o(),t("span",{class:"token keyword"},"then")]),o(`
`),t("span",{class:"line"},"    Some i"),o(`
`),t("span",{class:"line"},[o("  "),t("span",{class:"token keyword"},"else")]),o(`
`),t("span",{class:"line"},"    None"),o(`
`),t("span",{class:"line"}),o(`
`),t("span",{class:"line"},[t("span",{class:"token keyword"},"let"),o(" addTwoNumbers a b "),t("span",{class:"token operator"},"=")]),o(`
`),t("span",{class:"line"},[o("  "),t("span",{class:"token keyword"},"let"),o(" positiveA "),t("span",{class:"token operator"},"="),o(" onlyPositive a")]),o(`
`),t("span",{class:"line"},[o("  "),t("span",{class:"token keyword"},"let"),o(" positiveB "),t("span",{class:"token operator"},"="),o(" onlyPositive b")]),o(`
`),t("span",{class:"line"},[o("  "),t("span",{class:"token comment"},"// passt nicht, 2x int erwartet, aber 2x int option übergeben")]),o(`
`),t("span",{class:"line"},[o("  "),t("span",{class:"token keyword"},"let"),o(" sum "),t("span",{class:"token operator"},"="),o(" add positiveA positiveB")]),o(`
`),t("span",{class:"line"}),o(`
`),t("span",{class:"line"},[o("  "),t("span",{class:"token comment"},"// für zwei (und drei) in F# bereits vordefiniert:")]),o(`
`),t("span",{class:"line"},[o("  "),t("span",{class:"token keyword"},"let"),o(" sum "),t("span",{class:"token operator"},"="),o(" Option"),t("span",{class:"token punctuation"},"."),o("map2 add positiveA positiveB")]),o(`
`),t("span",{class:"line"}),o(`
`),t("span",{class:"line"},[o("  "),t("span",{class:"token comment"},"// aber was, wenn man mehr Parameter hat?")])])],-1),wA={__name:"109",setup(e){const n={layout:"default-with-footer",srcSequence:"./pages/applicative.md"};return S(P),(s,a)=>{const r=be;return k(),$(I,N(M(n)),{default:w(()=>[vA,q(r,le({},{ranges:[""]}),{default:w(()=>[yA]),_:1},16)]),_:1},16)}}},xA=T(wA,[["__file","/@slidev/slides/109.md"]]),SA="/2023-05-magdeburger-devdays-fp-csharp-to-fsharp/images/Applicative_1_small.png",EA=t("h3",null,"Applicative",-1),$A=t("p",null,[t("img",{class:"absolute bottom-10 right-10 w-150",src:SA})],-1),PA={__name:"110",setup(e){const n={layout:"default-with-footer",srcSequence:"./pages/applicative.md"};return S(P),(s,a)=>(k(),$(I,N(M(n)),{default:w(()=>[EA,$A]),_:1},16))}},TA=T(PA,[["__file","/@slidev/slides/110.md"]]),CA=t("h3",null,"Applicative",-1),OA=t("ul",null,[t("li",null,'Container mit "apply" Funktion (die bestimmten Regeln folgt): Applicative'),t("li",null,[o("Bezeichnung in der FP-Welt: "),t("strong",null,"Applicative Functor")])],-1),AA=t("pre",{class:"slidev-code language-fsharp"},[t("code",null,[t("span",{class:"line"},[o("  apply"),t("span",{class:"token punctuation"},":"),o(),t("span",{class:"token class-name"},"AF"),o(),t("span",{class:"token punctuation"},"("),o("a "),t("span",{class:"token operator"},"->"),o(" b"),t("span",{class:"token punctuation"},")"),o(),t("span",{class:"token operator"},"->"),o(" AF a "),t("span",{class:"token operator"},"->"),o(" AF b")])])],-1),FA=t("ul",null,[t("li",null,'Andere Bezeichnungen für "apply": ap, <*>')],-1),MA={__name:"111",setup(e){const n={layout:"default-with-footer",srcSequence:"./pages/applicative.md"};return S(P),(s,a)=>{const r=be;return k(),$(I,N(M(n)),{default:w(()=>[CA,OA,q(r,le({},{ranges:[""]}),{default:w(()=>[AA]),_:1},16),FA]),_:1},16)}}},NA=T(MA,[["__file","/@slidev/slides/111.md"]]),IA=t("h3",null,"Funktion mit mehreren Parametern",-1),DA=t("pre",{class:"slidev-code language-fsharp"},[t("code",null,[t("span",{class:"line"},[t("span",{class:"token comment"},"// F#")]),o(`
`),t("span",{class:"line"},[t("span",{class:"token keyword"},"let"),o(" sum a b c "),t("span",{class:"token operator"},"="),o(" a "),t("span",{class:"token operator"},"+"),o(" b "),t("span",{class:"token operator"},"+"),o(" c")]),o(`
`),t("span",{class:"line"}),o(`
`),t("span",{class:"line"},[t("span",{class:"token keyword"},"let"),o(" onlyPositive i "),t("span",{class:"token operator"},"=")]),o(`
`),t("span",{class:"line"},[o("    "),t("span",{class:"token keyword"},"if"),o(" i "),t("span",{class:"token operator"},">"),o(),t("span",{class:"token number"},"0"),o(),t("span",{class:"token keyword"},"then"),o(" Some i")]),o(`
`),t("span",{class:"line"},[o("    "),t("span",{class:"token keyword"},"else"),o(" None")]),o(`
`),t("span",{class:"line"}),o(`
`),t("span",{class:"line"},[t("span",{class:"token keyword"},"let"),o(" addNumbers a b c "),t("span",{class:"token operator"},"=")]),o(`
`),t("span",{class:"line"},[o("    "),t("span",{class:"token keyword"},"let"),o(" positiveA "),t("span",{class:"token operator"},"="),o(" onlyPositive a")]),o(`
`),t("span",{class:"line"},[o("    "),t("span",{class:"token keyword"},"let"),o(" positiveB "),t("span",{class:"token operator"},"="),o(" onlyPositive b")]),o(`
`),t("span",{class:"line"},[o("    "),t("span",{class:"token keyword"},"let"),o(" positiveC "),t("span",{class:"token operator"},"="),o(" onlyPositive c")]),o(`
`),t("span",{class:"line"}),o(`
`),t("span",{class:"line"},[o("    "),t("span",{class:"token comment"},"// sum ist vom Typ: (int -> int -> int -> int)")]),o(`
`),t("span",{class:"line"},[o("    "),t("span",{class:"token comment"},"// jede Zeile füllt ein Argument mehr aus")]),o(`
`),t("span",{class:"line"},[o("    "),t("span",{class:"token comment"},"// (Partial Application dank Currying)")]),o(`
`),t("span",{class:"line"},[o("    "),t("span",{class:"token keyword"},"let"),o(),t("span",{class:"token punctuation"},"("),o("sum' "),t("span",{class:"token punctuation"},":"),o(),t("span",{class:"token punctuation"},"("),o("int "),t("span",{class:"token operator"},"->"),o(" int "),t("span",{class:"token operator"},"->"),o(" int"),t("span",{class:"token punctuation"},")"),o(" option"),t("span",{class:"token punctuation"},")"),o(),t("span",{class:"token operator"},"="),o(" Option"),t("span",{class:"token punctuation"},"."),o("map sum positiveA")]),o(`
`),t("span",{class:"line"},[o("    "),t("span",{class:"token keyword"},"let"),o(),t("span",{class:"token punctuation"},"("),o("sum'' "),t("span",{class:"token punctuation"},":"),o(),t("span",{class:"token punctuation"},"("),o("int "),t("span",{class:"token operator"},"->"),o(" int"),t("span",{class:"token punctuation"},")"),o(" option"),t("span",{class:"token punctuation"},")"),o(),t("span",{class:"token operator"},"="),o(" Option"),t("span",{class:"token punctuation"},"."),o("apply sum' positiveB")]),o(`
`),t("span",{class:"line"},[o("    "),t("span",{class:"token keyword"},"let"),o(),t("span",{class:"token punctuation"},"("),o("sum''' "),t("span",{class:"token punctuation"},":"),o(),t("span",{class:"token punctuation"},"("),o("int"),t("span",{class:"token punctuation"},")"),o(" option"),t("span",{class:"token punctuation"},")"),o(),t("span",{class:"token operator"},"="),o(" Option"),t("span",{class:"token punctuation"},"."),o("apply sum'' positiveC")])])],-1),LA={__name:"112",setup(e){const n={layout:"default-with-footer",srcSequence:"./pages/applicative.md"};return S(P),(s,a)=>{const r=be;return k(),$(I,N(M(n)),{default:w(()=>[IA,q(r,le({},{ranges:[""]}),{default:w(()=>[DA]),_:1},16)]),_:1},16)}}},jA=T(LA,[["__file","/@slidev/slides/112.md"]]),qA=t("h3",null,"Funktion mit mehreren Parametern",-1),RA=t("pre",{class:"slidev-code language-csharp"},[t("code",null,[t("span",{class:"line"},[t("span",{class:"token comment"},"// C#")]),o(`
`),t("span",{class:"line"},[t("span",{class:"token class-name"},[o("Func"),t("span",{class:"token punctuation"},"<"),t("span",{class:"token keyword"},"int"),t("span",{class:"token punctuation"},","),o(),t("span",{class:"token keyword"},"int"),t("span",{class:"token punctuation"},","),o(),t("span",{class:"token keyword"},"int"),t("span",{class:"token punctuation"},","),o(),t("span",{class:"token keyword"},"int"),t("span",{class:"token punctuation"},">")]),o(" sum "),t("span",{class:"token operator"},"="),o(),t("span",{class:"token punctuation"},"("),o("a"),t("span",{class:"token punctuation"},","),o(" b"),t("span",{class:"token punctuation"},","),o(" c"),t("span",{class:"token punctuation"},")"),o(),t("span",{class:"token operator"},"=>"),o(" a "),t("span",{class:"token operator"},"+"),o(" b "),t("span",{class:"token operator"},"+"),o(" c"),t("span",{class:"token punctuation"},";")]),o(`
`),t("span",{class:"line"}),o(`
`),t("span",{class:"line"},[t("span",{class:"token class-name"},[o("Func"),t("span",{class:"token punctuation"},"<"),t("span",{class:"token keyword"},"int"),t("span",{class:"token punctuation"},","),o(" Validation"),t("span",{class:"token punctuation"},"<"),t("span",{class:"token keyword"},"int"),t("span",{class:"token punctuation"},">"),t("span",{class:"token punctuation"},">")]),o(" onlyPositive "),t("span",{class:"token operator"},"="),o(" i")]),o(`
`),t("span",{class:"line"},[o("    "),t("span",{class:"token operator"},"=>"),o(" i "),t("span",{class:"token operator"},">"),o(),t("span",{class:"token number"},"0")]),o(`
`),t("span",{class:"line"},[o("        "),t("span",{class:"token punctuation"},"?"),o(),t("span",{class:"token function"},"Valid"),t("span",{class:"token punctuation"},"("),o("i"),t("span",{class:"token punctuation"},")")]),o(`
`),t("span",{class:"line"},[o("        "),t("span",{class:"token punctuation"},":"),o(),t("span",{class:"token function"},"Error"),t("span",{class:"token punctuation"},"("),t("span",{class:"token interpolation-string"},[t("span",{class:"token string"},'$"Number '),t("span",{class:"token interpolation"},[t("span",{class:"token punctuation"},"{"),t("span",{class:"token expression language-csharp"},"i"),t("span",{class:"token punctuation"},"}")]),t("span",{class:"token string"},' is not positive."')]),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";")]),o(`
`),t("span",{class:"line"}),o(`
`),t("span",{class:"line"},[t("span",{class:"token return-type class-name"},[o("Validation"),t("span",{class:"token punctuation"},"<"),t("span",{class:"token keyword"},"int"),t("span",{class:"token punctuation"},">")]),o(),t("span",{class:"token function"},"AddNumbers"),t("span",{class:"token punctuation"},"("),t("span",{class:"token class-name"},[t("span",{class:"token keyword"},"int")]),o(" a"),t("span",{class:"token punctuation"},","),o(),t("span",{class:"token class-name"},[t("span",{class:"token keyword"},"int")]),o(" b"),t("span",{class:"token punctuation"},","),o(),t("span",{class:"token class-name"},[t("span",{class:"token keyword"},"int")]),o(" c"),t("span",{class:"token punctuation"},")"),o(),t("span",{class:"token punctuation"},"{")]),o(`
`),t("span",{class:"line"},[o("    "),t("span",{class:"token keyword"},"return"),o(),t("span",{class:"token function"},"Valid"),t("span",{class:"token punctuation"},"("),o("sum"),t("span",{class:"token punctuation"},")"),o("              "),t("span",{class:"token comment"},"// returns int -> int -> int -> int")]),o(`
`),t("span",{class:"line"},[o("        "),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"Apply"),t("span",{class:"token punctuation"},"("),t("span",{class:"token function"},"onlyPositive"),t("span",{class:"token punctuation"},"("),o("a"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},")"),o("    "),t("span",{class:"token comment"},"// returns int -> int -> int")]),o(`
`),t("span",{class:"line"},[o("        "),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"Apply"),t("span",{class:"token punctuation"},"("),t("span",{class:"token function"},"onlyPositive"),t("span",{class:"token punctuation"},"("),o("b"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},")"),o("    "),t("span",{class:"token comment"},"// returns int -> int")]),o(`
`),t("span",{class:"line"},[o("        "),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"Apply"),t("span",{class:"token punctuation"},"("),t("span",{class:"token function"},"onlyPositive"),t("span",{class:"token punctuation"},"("),o("c"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),o("   "),t("span",{class:"token comment"},"// returns int")]),o(`
`),t("span",{class:"line"}),o(`
`),t("span",{class:"line"},[t("span",{class:"token function"},"AddNumbers"),t("span",{class:"token punctuation"},"("),t("span",{class:"token number"},"1"),t("span",{class:"token punctuation"},","),o(),t("span",{class:"token number"},"2"),t("span",{class:"token punctuation"},","),o(),t("span",{class:"token number"},"3"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),o("    "),t("span",{class:"token comment"},"// --> Valid(6)")]),o(`
`),t("span",{class:"line"},[t("span",{class:"token function"},"AddNumbers"),t("span",{class:"token punctuation"},"("),t("span",{class:"token operator"},"-"),t("span",{class:"token number"},"1"),t("span",{class:"token punctuation"},","),o(),t("span",{class:"token operator"},"-"),t("span",{class:"token number"},"2"),t("span",{class:"token punctuation"},","),o(),t("span",{class:"token operator"},"-"),t("span",{class:"token number"},"3"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),o(),t("span",{class:"token comment"},"// --> [")]),o(`
`),t("span",{class:"line"},[o("                        "),t("span",{class:"token comment"},'// Error("Number -1 is not positive"),')]),o(`
`),t("span",{class:"line"},[o("                        "),t("span",{class:"token comment"},'// Error("Number -2 is not positive"),')]),o(`
`),t("span",{class:"line"},[o("                        "),t("span",{class:"token comment"},'// Error("Number -3 is not positive")')]),o(`
`),t("span",{class:"line"},[o("                        "),t("span",{class:"token comment"},"// ]")])])],-1),BA={__name:"113",setup(e){const n={layout:"default-with-footer",srcSequence:"./pages/applicative.md"};return S(P),(s,a)=>{const r=be;return k(),$(I,N(M(n)),{default:w(()=>[qA,q(r,le({},{ranges:[""]}),{default:w(()=>[RA]),_:1},16)]),_:1},16)}}},VA=T(BA,[["__file","/@slidev/slides/113.md"]]),zA="/2023-05-magdeburger-devdays-fp-csharp-to-fsharp/images/BusConf.png",WA=t("h3",null,"Veranstaltungen: BusConf",-1),HA=t("ul",null,[t("li",null,[t("a",{href:"https://www.bus-conf.org/",target:"_blank",rel:"noopener"},"https://www.bus-conf.org/")])],-1),UA=t("p",null,[t("img",{class:"absolute top-10 right-10 w-120",src:zA})],-1),GA={__name:"114",setup(e){const n={layout:"default-with-footer",srcSequence:"./pages/veranstaltungen.md"};return S(P),(s,a)=>(k(),$(I,N(M(n)),{default:w(()=>[WA,HA,UA]),_:1},16))}},KA=T(GA,[["__file","/@slidev/slides/114.md"]]),ZA="/2023-05-magdeburger-devdays-fp-csharp-to-fsharp/images/LambdaLounge.png",YA=t("h3",null,"Veranstaltungen: Lambda Lounge Nürnberg",-1),JA=t("ul",null,[t("li",null,[t("a",{href:"https://www.meetup.com/de-DE/Lambda-Lounge-Funktionale-Programmierung-Nurnberg/",target:"_blank",rel:"noopener"},"https://www.meetup.com/de-DE/Lambda-Lounge-Funktionale-Programmierung-Nurnberg/")])],-1),QA=t("p",null,[t("img",{class:"absolute bottom-10 right-10 w-110",src:ZA})],-1),XA={__name:"115",setup(e){const n={layout:"default-with-footer",srcSequence:"./pages/veranstaltungen.md"};return S(P),(s,a)=>(k(),$(I,N(M(n)),{default:w(()=>[YA,JA,QA]),_:1},16))}},e4=T(XA,[["__file","/@slidev/slides/115.md"]]),n4="/2023-05-magdeburger-devdays-fp-csharp-to-fsharp/images/Softwerkskammer.png",t4=t("h3",null,"Veranstaltungen: Softwerkskammer",-1),s4=t("ul",null,[t("li",null,[t("a",{href:"https://www.softwerkskammer.org/groups/magdeburg",target:"_blank",rel:"noopener"},"https://www.softwerkskammer.org/groups/magdeburg")])],-1),a4=t("p",null,[t("img",{class:"absolute top-10 right-10 w-90",src:n4})],-1),r4={__name:"116",setup(e){const n={layout:"default-with-footer",srcSequence:"./pages/veranstaltungen.md"};return S(P),(s,a)=>(k(),$(I,N(M(n)),{default:w(()=>[t4,s4,a4]),_:1},16))}},o4=T(r4,[["__file","/@slidev/slides/116.md"]]),i4=t("h2",null,"F# in bestehendes Projekt integrieren",-1),l4={__name:"117",setup(e){const n={layout:"default-with-footer",srcSequence:"./pages/introducing_fsharp.md"};return S(P),(s,a)=>(k(),$(I,N(M(n)),{default:w(()=>[i4]),_:1},16))}},c4=T(l4,[["__file","/@slidev/slides/117.md"]]),u4="/2023-05-magdeburger-devdays-fp-csharp-to-fsharp/images/FsUnit.png",p4=t("h3",null,"Tests",-1),d4=t("ul",null,[t("li",null,[t("a",{href:"https://github.com/fsprojects/FsUnit",target:"_blank",rel:"noopener"},"FsUnit"),o(" für lesbarere Tests")])],-1),f4=t("p",null,[t("img",{class:"absolute top-35 left-20 w-200",src:u4})],-1),h4={__name:"118",setup(e){const n={layout:"default-with-footer",srcSequence:"./pages/introducing_fsharp.md"};return S(P),(s,a)=>(k(),$(I,N(M(n)),{default:w(()=>[p4,d4,f4]),_:1},16))}},m4=T(h4,[["__file","/@slidev/slides/118.md"]]),g4="/2023-05-magdeburger-devdays-fp-csharp-to-fsharp/images/FsCheck.png",_4=t("h3",null,"Tests",-1),k4=t("ul",null,[t("li",null,[t("a",{href:"https://fscheck.github.io/FsCheck/",target:"_blank",rel:"noopener"},"FsCheck"),o(" für Property Based Testing")])],-1),b4=t("p",null,[t("img",{class:"absolute top-35 left-20 w-200",src:g4})],-1),v4={__name:"119",setup(e){const n={layout:"default-with-footer",srcSequence:"./pages/introducing_fsharp.md"};return S(P),(s,a)=>(k(),$(I,N(M(n)),{default:w(()=>[_4,k4,b4]),_:1},16))}},y4=T(v4,[["__file","/@slidev/slides/119.md"]]),w4="/2023-05-magdeburger-devdays-fp-csharp-to-fsharp/images/Unquote.png",x4=t("h3",null,"Tests",-1),S4=t("ul",null,[t("li",null,[t("a",{href:"https://github.com/SwensenSoftware/unquote",target:"_blank",rel:"noopener"},"Unquote"),o(' für besseren "Callstack" bei fehlschlagenden Tests')])],-1),E4=t("p",null,[t("img",{class:"absolute top-35 left-20 w-200",src:w4})],-1),$4={__name:"120",setup(e){const n={layout:"default-with-footer",srcSequence:"./pages/introducing_fsharp.md"};return S(P),(s,a)=>(k(),$(I,N(M(n)),{default:w(()=>[x4,S4,E4]),_:1},16))}},P4=T($4,[["__file","/@slidev/slides/120.md"]]),T4="/2023-05-magdeburger-devdays-fp-csharp-to-fsharp/images/FAKE.png",C4=t("h3",null,"Builds",-1),O4=t("ul",null,[t("li",null,[t("a",{href:"https://fake.build/",target:"_blank",rel:"noopener"},"FAKE"),o(" als erweiterbare DSL für Build-Tasks")])],-1),A4=t("p",null,[t("img",{class:"absolute top-35 left-20 w-200",src:T4})],-1),F4={__name:"121",setup(e){const n={layout:"default-with-footer",srcSequence:"./pages/introducing_fsharp.md"};return S(P),(s,a)=>(k(),$(I,N(M(n)),{default:w(()=>[C4,O4,A4]),_:1},16))}},M4=T(F4,[["__file","/@slidev/slides/121.md"]]),N4="/2023-05-magdeburger-devdays-fp-csharp-to-fsharp/images/Paket.png",I4=t("h3",null,"Builds",-1),D4=t("ul",null,[t("li",null,[t("a",{href:"https://github.com/fsprojects/Paket",target:"_blank",rel:"noopener"},"Paket"),o(" als Alternative zu Nuget")])],-1),L4=t("p",null,[t("img",{class:"absolute top-35 left-20 w-200",src:N4})],-1),j4={__name:"122",setup(e){const n={layout:"default-with-footer",srcSequence:"./pages/introducing_fsharp.md"};return S(P),(s,a)=>(k(),$(I,N(M(n)),{default:w(()=>[I4,D4,L4]),_:1},16))}},q4=T(j4,[["__file","/@slidev/slides/122.md"]]),R4="/2023-05-magdeburger-devdays-fp-csharp-to-fsharp/images/Farmer.png",B4=t("h3",null,"Builds",-1),V4=t("ul",null,[t("li",null,[t("a",{href:"https://compositionalit.github.io/farmer/",target:"_blank",rel:"noopener"},"Farmer"),o(": Making repeatable Azure deployments easy!")])],-1),z4=t("p",null,[t("img",{class:"absolute top-35 left-20 w-120",src:R4})],-1),W4={__name:"123",setup(e){const n={layout:"default-with-footer",srcSequence:"./pages/introducing_fsharp.md"};return S(P),(s,a)=>(k(),$(I,N(M(n)),{default:w(()=>[B4,V4,z4]),_:1},16))}},H4=T(W4,[["__file","/@slidev/slides/123.md"]]),U4="/2023-05-magdeburger-devdays-fp-csharp-to-fsharp/images/Fable.png",G4=t("h2",null,"Web",-1),K4=t("ul",null,[t("li",null,[o("Webseiten mit "),t("a",{href:"https://fable.io/",target:"_blank",rel:"noopener"},"Fable")])],-1),Z4=t("p",null,[t("img",{class:"absolute top-45 left-40 w-130",src:U4})],-1),Y4={__name:"124",setup(e){const n={layout:"default-with-footer",srcSequence:"./pages/introducing_fsharp.md"};return S(P),(s,a)=>(k(),$(I,N(M(n)),{default:w(()=>[G4,K4,Z4]),_:1},16))}},J4=T(Y4,[["__file","/@slidev/slides/124.md"]]),Q4="/2023-05-magdeburger-devdays-fp-csharp-to-fsharp/images/Fabulous.png",X4=t("h2",null,"Web",-1),eF=t("ul",null,[t("li",null,[o("Mobile Apps mit "),t("a",{href:"https://fabulous.dev/",target:"_blank",rel:"noopener"},"Fabulous"),o(" (Xamarin)")])],-1),nF=t("p",null,[t("img",{class:"absolute top-45 left-20 w-150",src:Q4})],-1),tF={__name:"125",setup(e){const n={layout:"default-with-footer",srcSequence:"./pages/introducing_fsharp.md"};return S(P),(s,a)=>(k(),$(I,N(M(n)),{default:w(()=>[X4,eF,nF]),_:1},16))}},sF=T(tF,[["__file","/@slidev/slides/125.md"]]),aF="/2023-05-magdeburger-devdays-fp-csharp-to-fsharp/images/SAFE.png",rF=t("h2",null,"Web",-1),oF=t("ul",null,[t("li",null,"Full-Stack-Webanwendungen mit dem SAFE-Stack")],-1),iF=t("p",null,[t("img",{class:"absolute top-45 left-20 w-180",src:aF})],-1),lF={__name:"126",setup(e){const n={layout:"default-with-footer",srcSequence:"./pages/introducing_fsharp.md"};return S(P),(s,a)=>(k(),$(I,N(M(n)),{default:w(()=>[rF,oF,iF]),_:1},16))}},cF=T(lF,[["__file","/@slidev/slides/126.md"]]),uF=t("h1",null,"Danke",-1),pF={__name:"127",setup(e){const n={layout:"default-with-footer",srcSequence:"./pages/99-exit.md"};return S(P),(s,a)=>(k(),$(I,N(M(n)),{default:w(()=>[uF]),_:1},16))}},dF=T(pF,[["__file","/@slidev/slides/127.md"]]),fF=t("h2",null,"Ressourcen",-1),hF=t("ul",null,[t("li",null,[o("FP "),t("ul",null,[t("li",null,[o("Blog: "),t("a",{href:"https://blog.ploeh.dk/",target:"_blank",rel:"noopener"},"Mark Seeman")]),t("li",null,[o("Book: "),t("a",{href:"https://pragprog.com/book/swdddf/domain-modeling-made-functional",target:"_blank",rel:"noopener"},"Domain Modeling Made Functional")]),t("li",null,[o("Book: "),t("a",{href:"https://www.manning.com/books/grokking-simplicity",target:"_blank",rel:"noopener"},"Grokking Simplicity")])])]),t("li",null,[o("C# "),t("ul",null,[t("li",null,[o("Book: "),t("a",{href:"https://www.manning.com/books/functional-programming-in-c-sharp",target:"_blank",rel:"noopener"},"Functional Programming in C#")]),t("li",null,[o("Blog: "),t("a",{href:"https://enterprisecraftsmanship.com/",target:"_blank",rel:"noopener"},"Vladimir Khorikov")])])]),t("li",null,[o("F# "),t("ul",null,[t("li",null,[t("a",{href:"https://fsharp.org/",target:"_blank",rel:"noopener"},"F# Homepage")]),t("li",null,[t("a",{href:"https://fsharpforfunandprofit.com/",target:"_blank",rel:"noopener"},"F# for Fun and Profit")]),t("li",null,[t("a",{href:"https://fsharpforfunandprofit.com/rop/",target:"_blank",rel:"noopener"},"Railway Oriented Programming")])])])],-1),mF={__name:"128",setup(e){const n={layout:"default-with-footer",srcSequence:"./pages/99-exit.md"};return S(P),(s,a)=>(k(),$(I,N(M(n)),{default:w(()=>[fF,hF]),_:1},16))}},gF=T(mF,[["__file","/@slidev/slides/128.md"]]),_F={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},kF=t("path",{fill:"#0A66C2",d:"M218.123 218.127h-37.931v-59.403c0-14.165-.253-32.4-19.728-32.4c-19.756 0-22.779 15.434-22.779 31.369v60.43h-37.93V95.967h36.413v16.694h.51a39.907 39.907 0 0 1 35.928-19.733c38.445 0 45.533 25.288 45.533 58.186l-.016 67.013ZM56.955 79.27c-12.157.002-22.014-9.852-22.016-22.009c-.002-12.157 9.851-22.014 22.008-22.016c12.157-.003 22.014 9.851 22.016 22.008A22.013 22.013 0 0 1 56.955 79.27m18.966 138.858H37.95V95.967h37.97v122.16ZM237.033.018H18.89C8.58-.098.125 8.161-.001 18.471v219.053c.122 10.315 8.576 18.582 18.89 18.474h218.144c10.336.128 18.823-8.139 18.966-18.474V18.454c-.147-10.33-8.635-18.588-18.966-18.453"},null,-1),bF=[kF];function vF(e,n){return k(),ee("svg",_F,bF)}const yF={name:"logos-linkedin-icon",render:vF},wF={class:"slidev-icon",viewBox:"0 0 256 274",width:"1.2em",height:"1.2em"},xF=t("path",{fill:"#3088D4",d:"M249.874 164.085c-3.753 19.307-33.613 40.438-67.908 44.533c-17.883 2.134-35.49 4.095-54.266 3.234c-30.705-1.407-54.933-7.33-54.933-7.33c0 2.99.184 5.836.553 8.498c3.992 30.302 30.047 32.118 54.728 32.964c24.912.852 47.094-6.142 47.094-6.142l1.023 22.521s-17.425 9.357-48.465 11.078c-17.116.94-38.369-.43-63.122-6.983c-53.686-14.21-62.92-71.436-64.332-129.502c-.43-17.24-.165-33.497-.165-47.094c0-59.375 38.903-76.779 38.903-76.779C58.6 4.074 92.259.286 127.25 0h.86c34.991.286 68.673 4.074 88.287 13.083c0 0 38.901 17.404 38.901 76.78c0 0 .488 43.807-5.425 74.222"},null,-1),SF=t("path",{fill:"#FFF",d:"M209.413 94.469v71.894H180.93V96.582c0-14.71-6.19-22.176-18.57-22.176c-13.687 0-20.547 8.857-20.547 26.37v38.195h-28.315v-38.195c0-17.513-6.862-26.37-20.55-26.37c-12.379 0-18.568 7.466-18.568 22.176v69.78H45.897V94.47c0-14.694 3.741-26.37 11.256-35.009c7.75-8.638 17.898-13.066 30.496-13.066c14.575 0 25.613 5.602 32.911 16.808l7.095 11.893l7.096-11.893c7.296-11.206 18.334-16.808 32.911-16.808c12.597 0 22.745 4.428 30.496 13.066c7.513 8.639 11.255 20.315 11.255 35.009"},null,-1),EF=[xF,SF];function $F(e,n){return k(),ee("svg",wF,EF)}const PF={name:"logos-mastodon-icon",render:$F},TF={class:"slidev-icon",viewBox:"0 0 256 209",width:"1.2em",height:"1.2em"},CF=t("path",{fill:"#55acee",d:"M256 25.45a105.04 105.04 0 0 1-30.166 8.27c10.845-6.5 19.172-16.793 23.093-29.057a105.183 105.183 0 0 1-33.351 12.745C205.995 7.201 192.346.822 177.239.822c-29.006 0-52.523 23.516-52.523 52.52c0 4.117.465 8.125 1.36 11.97c-43.65-2.191-82.35-23.1-108.255-54.876c-4.52 7.757-7.11 16.78-7.11 26.404c0 18.222 9.273 34.297 23.365 43.716a52.312 52.312 0 0 1-23.79-6.57c-.003.22-.003.44-.003.661c0 25.447 18.104 46.675 42.13 51.5a52.592 52.592 0 0 1-23.718.9c6.683 20.866 26.08 36.05 49.062 36.475c-17.975 14.086-40.622 22.483-65.228 22.483c-4.24 0-8.42-.249-12.529-.734c23.243 14.902 50.85 23.597 80.51 23.597c96.607 0 149.434-80.031 149.434-149.435c0-2.278-.05-4.543-.152-6.795A106.748 106.748 0 0 0 256 25.45"},null,-1),OF=[CF];function AF(e,n){return k(),ee("svg",TF,OF)}const FF={name:"logos-twitter",render:AF},MF={class:"slidev-icon",viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},NF=t("path",{fill:"currentColor",d:"M16.36 14c.08-.66.14-1.32.14-2c0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2m-5.15 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95a8.03 8.03 0 0 1-4.33 3.56M14.34 14H9.66c-.1-.66-.16-1.32-.16-2c0-.68.06-1.35.16-2h4.68c.09.65.16 1.32.16 2c0 .68-.07 1.34-.16 2M12 19.96c-.83-1.2-1.5-2.53-1.91-3.96h3.82c-.41 1.43-1.08 2.76-1.91 3.96M8 8H5.08A7.923 7.923 0 0 1 9.4 4.44C8.8 5.55 8.35 6.75 8 8m-2.92 8H8c.35 1.25.8 2.45 1.4 3.56A8.008 8.008 0 0 1 5.08 16m-.82-2C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2c0 .68.06 1.34.14 2M12 4.03c.83 1.2 1.5 2.54 1.91 3.97h-3.82c.41-1.43 1.08-2.77 1.91-3.97M18.92 8h-2.95a15.65 15.65 0 0 0-1.38-3.56c1.84.63 3.37 1.9 4.33 3.56M12 2C6.47 2 2 6.5 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2Z"},null,-1),IF=[NF];function DF(e,n){return k(),ee("svg",MF,IF)}const LF={name:"mdi-web",render:DF},jF={class:"slidev-icon",viewBox:"0 0 256 250",width:"1.2em",height:"1.2em"},qF=t("path",{fill:"#161614",d:"M128.001 0C57.317 0 0 57.307 0 128.001c0 56.554 36.676 104.535 87.535 121.46c6.397 1.185 8.746-2.777 8.746-6.158c0-3.052-.12-13.135-.174-23.83c-35.61 7.742-43.124-15.103-43.124-15.103c-5.823-14.795-14.213-18.73-14.213-18.73c-11.613-7.944.876-7.78.876-7.78c12.853.902 19.621 13.19 19.621 13.19c11.417 19.568 29.945 13.911 37.249 10.64c1.149-8.272 4.466-13.92 8.127-17.116c-28.431-3.236-58.318-14.212-58.318-63.258c0-13.975 5-25.394 13.188-34.358c-1.329-3.224-5.71-16.242 1.24-33.874c0 0 10.749-3.44 35.21 13.121c10.21-2.836 21.16-4.258 32.038-4.307c10.878.049 21.837 1.47 32.066 4.307c24.431-16.56 35.165-13.12 35.165-13.12c6.967 17.63 2.584 30.65 1.255 33.873c8.207 8.964 13.173 20.383 13.173 34.358c0 49.163-29.944 59.988-58.447 63.157c4.591 3.972 8.682 11.762 8.682 23.704c0 17.126-.148 30.91-.148 35.126c0 3.407 2.304 7.398 8.792 6.14C219.37 232.5 256 184.537 256 128.002C256 57.307 198.691 0 128.001 0Zm-80.06 182.34c-.282.636-1.283.827-2.194.39c-.929-.417-1.45-1.284-1.15-1.922c.276-.655 1.279-.838 2.205-.399c.93.418 1.46 1.293 1.139 1.931Zm6.296 5.618c-.61.566-1.804.303-2.614-.591c-.837-.892-.994-2.086-.375-2.66c.63-.566 1.787-.301 2.626.591c.838.903 1 2.088.363 2.66Zm4.32 7.188c-.785.545-2.067.034-2.86-1.104c-.784-1.138-.784-2.503.017-3.05c.795-.547 2.058-.055 2.861 1.075c.782 1.157.782 2.522-.019 3.08Zm7.304 8.325c-.701.774-2.196.566-3.29-.49c-1.119-1.032-1.43-2.496-.726-3.27c.71-.776 2.213-.558 3.315.49c1.11 1.03 1.45 2.505.701 3.27Zm9.442 2.81c-.31 1.003-1.75 1.459-3.199 1.033c-1.448-.439-2.395-1.613-2.103-2.626c.301-1.01 1.747-1.484 3.207-1.028c1.446.436 2.396 1.602 2.095 2.622Zm10.744 1.193c.036 1.055-1.193 1.93-2.715 1.95c-1.53.034-2.769-.82-2.786-1.86c0-1.065 1.202-1.932 2.733-1.958c1.522-.03 2.768.818 2.768 1.868Zm10.555-.405c.182 1.03-.875 2.088-2.387 2.37c-1.485.271-2.861-.365-3.05-1.386c-.184-1.056.893-2.114 2.376-2.387c1.514-.263 2.868.356 3.061 1.403Z"},null,-1),RF=[qF];function BF(e,n){return k(),ee("svg",jF,RF)}const VF={name:"logos-github-icon",render:BF},zF={class:"slidev-icon",viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},WF=t("path",{fill:"currentColor",d:"m20 8l-8 5l-8-5V6l8 5l8-5m0-2H4c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Z"},null,-1),HF=[WF];function UF(e,n){return k(),ee("svg",zF,HF)}const GF={name:"mdi-email",render:UF},KF="/2023-05-magdeburger-devdays-fp-csharp-to-fsharp/images/qr-code-magdegeburger-devdays.png",ZF=t("h3",null,"Patrick Drechsler",-1),YF=t("a",{href:"mailto:patrick.drechsler@mathema.de",target:"_blank",rel:"noopener"},"patrick.drechsler@mathema.de",-1),JF=t("a",{href:"https://github.com/draptik",target:"_blank",rel:"noopener"},"https://github.com/draptik",-1),QF=t("a",{href:"https://draptik.github.io",target:"_blank",rel:"noopener"},"https://draptik.github.io",-1),XF=t("a",{href:"https://www.linkedin.com/in/patrick-drechsler-985a2911/",target:"_blank",rel:"noopener"},"https://www.linkedin.com/in/patrick-drechsler-985a2911/",-1),e5=t("p",null,"Slides:",-1),n5=t("ul",null,[t("li",null,"QR-Code 👉"),t("li",null,[t("a",{href:"https://mathema-gmbh.github.io/2023-05-magdeburger-devdays-fp-csharp-to-fsharp",target:"_blank",rel:"noopener"},"https://mathema-gmbh.github.io/2023-05-magdeburger-devdays-fp-csharp-to-fsharp")])],-1),t5=t("h3",null,"Martin Grotz",-1),s5=t("a",{href:"mailto:martin.grotz@mathema.de",target:"_blank",rel:"noopener"},"martin.grotz@mathema.de",-1),a5=t("a",{href:"https://github.com/groma84",target:"_blank",rel:"noopener"},"https://github.com/groma84",-1),r5=t("a",{href:"https://elm.finde-ich-super.de",target:"_blank",rel:"noopener"},"https://elm.finde-ich-super.de",-1),o5=t("p",null,[t("img",{class:"absolute bottom-10 right-50 w-60",src:KF})],-1),i5={__name:"129",setup(e){const n={layout:"two-cols",srcSequence:"./pages/99-exit.md"};return S(P),(s,a)=>{const r=GF,i=VF,l=LF,c=FF,u=PF,p=yF;return k(),$(ml,N(M(n)),{right:w(d=>[t5,t("ul",null,[t("li",null,[q(r),o(),s5]),t("li",null,[q(i),o(),a5]),t("li",null,[q(l),o(" Blog: "),r5]),t("li",null,[q(c),o(" @mobilgroma")])]),o5]),default:w(()=>[ZF,t("ul",null,[t("li",null,[q(r),o(),YF]),t("li",null,[q(i),o(),JF]),t("li",null,[q(l),o(" Blog: "),QF]),t("li",null,[q(c),o(" @drechsler")]),t("li",null,[q(u),o(" @drechsler@floss.social")]),t("li",null,[q(p),o(),XF])]),e5,n5]),_:1},16)}}},l5=T(i5,[["__file","/@slidev/slides/129.md"]]),c5=t("h2",null,"Feedback und Fragen",-1),u5={__name:"130",setup(e){const n={layout:"default-with-footer",srcSequence:"./pages/99-exit.md"};return S(P),(s,a)=>(k(),$(I,N(M(n)),{default:w(()=>[c5]),_:1},16))}},p5=T(u5,[["__file","/@slidev/slides/130.md"]]),d5={__name:"131",setup(e){const n={layout:"default-with-footer",srcSequence:"./pages/99-exit.md"};return S(P),(s,a)=>(k(),$(I,N(M(n)),null,16))}},f5=T(d5,[["__file","/@slidev/slides/131.md"]]),h5=[{path:"1",name:"page-1",component:Y3,meta:{theme:"./mathema-2023",defaults:{layout:"default-with-footer"},occasion:"MD-DevDays 2023",occasionLogoUrl:"images/logo-magdeburger-devdays-2023.png",company:"MATHEMA GmbH",presenter:"Patrick Drechsler & Martin Grotz",contact:"patrick.drechsler@mathema.de & martin.grotz@mathema.de",info:`## Von C# zu F# – Einführung in die funktionale Programmierung
`,canvasWidth:980,layout:"cover",srcSequence:"./pages/00-title.md",slide:{raw:null,title:"Von C# zu F#",level:1,content:`# Von C# zu F#

#### Einführung in die funktionale Programmierung

##### Patrick Drechsler & Martin Grotz`,frontmatter:{theme:"./mathema-2023",defaults:{layout:"default-with-footer"},occasion:"MD-DevDays 2023",occasionLogoUrl:"images/logo-magdeburger-devdays-2023.png",company:"MATHEMA GmbH",presenter:"Patrick Drechsler & Martin Grotz",contact:"patrick.drechsler@mathema.de & martin.grotz@mathema.de",info:`## Von C# zu F# – Einführung in die funktionale Programmierung
`,canvasWidth:980,layout:"cover",srcSequence:"./pages/00-title.md"},index:0,start:0,end:6,source:{filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/00-title.md",raw:`# Von C# zu F#

#### Einführung in die funktionale Programmierung

##### Patrick Drechsler & Martin Grotz
`,title:"Von C# zu F#",level:1,content:`# Von C# zu F#

#### Einführung in die funktionale Programmierung

##### Patrick Drechsler & Martin Grotz`,frontmatter:{title:"Von C# zu F#"},index:0,start:0,end:6},inline:{raw:`---
theme: ./mathema-2023

defaults:
  layout: "default-with-footer"

# infos for the footer (on slides with the default-with-footer layout)
occasion: "MD-DevDays 2023"
occasionLogoUrl: "images/logo-magdeburger-devdays-2023.png"
company: "MATHEMA GmbH"
presenter: "Patrick Drechsler & Martin Grotz"
contact: "patrick.drechsler@mathema.de & martin.grotz@mathema.de"

info: |
  ## Von C# zu F# – Einführung in die funktionale Programmierung

canvasWidth: 980

layout: cover
src: ./pages/00-title.md
---
`,content:"",frontmatter:{theme:"./mathema-2023",defaults:{layout:"default-with-footer"},occasion:"MD-DevDays 2023",occasionLogoUrl:"images/logo-magdeburger-devdays-2023.png",company:"MATHEMA GmbH",presenter:"Patrick Drechsler & Martin Grotz",contact:"patrick.drechsler@mathema.de & martin.grotz@mathema.de",info:`## Von C# zu F# – Einführung in die funktionale Programmierung
`,canvasWidth:980,layout:"cover"},index:0,start:0,end:22},filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/00-title.md",noteHTML:"",id:0,no:1},__clicksElements:[],__preloaded:!1}},{path:"2",name:"page-2",component:ax,meta:{layout:"two-cols",title:"Patrick Drechsler",srcSequence:"./pages/01-intro.md",slide:{raw:null,title:"Patrick Drechsler",level:2,content:`## Patrick Drechsler

- Software Entwickler
- Beruflich: C#
- Interessen:
    - Funktionale Programmierung
    - Software Crafting
    - Domain-Driven Design

::right::

## Martin Grotz

- Team Lead
- Beruflich: C#, TypeScript/JavaScript
- Interessen:
    - Funktionale Programmierung
    - Web&Mobile Development
    - Soft Skills`,frontmatter:{layout:"two-cols",title:"Patrick Drechsler",srcSequence:"./pages/01-intro.md"},index:1,start:0,end:25,source:{filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/01-intro.md",raw:`---
layout: two-cols
---

## Patrick Drechsler

- Software Entwickler
- Beruflich: C#
- Interessen:
    - Funktionale Programmierung
    - Software Crafting
    - Domain-Driven Design

::right::

## Martin Grotz

- Team Lead
- Beruflich: C#, TypeScript/JavaScript
- Interessen:
    - Funktionale Programmierung
    - Web&Mobile Development
    - Soft Skills

`,title:"Patrick Drechsler",level:2,content:`## Patrick Drechsler

- Software Entwickler
- Beruflich: C#
- Interessen:
    - Funktionale Programmierung
    - Software Crafting
    - Domain-Driven Design

::right::

## Martin Grotz

- Team Lead
- Beruflich: C#, TypeScript/JavaScript
- Interessen:
    - Funktionale Programmierung
    - Web&Mobile Development
    - Soft Skills`,frontmatter:{layout:"two-cols",title:"Patrick Drechsler"},index:0,start:0,end:25},inline:{raw:`---
src: ./pages/01-intro.md
---
`,content:"",frontmatter:{},index:1,start:22,end:26},filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/01-intro.md",noteHTML:"",id:1,no:2},__clicksElements:[],__preloaded:!1}},{path:"3",name:"page-3",component:gx,meta:{title:"Vorstellungsrunde & Erwartungen",srcSequence:"./pages/vorstellungsrunde_und_erwartungen.md",slide:{raw:null,title:"Vorstellungsrunde & Erwartungen",level:2,content:"## Vorstellungsrunde & Erwartungen",frontmatter:{title:"Vorstellungsrunde & Erwartungen",srcSequence:"./pages/vorstellungsrunde_und_erwartungen.md"},index:2,start:0,end:2,source:{filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/vorstellungsrunde_und_erwartungen.md",raw:`## Vorstellungsrunde & Erwartungen
`,title:"Vorstellungsrunde & Erwartungen",level:2,content:"## Vorstellungsrunde & Erwartungen",frontmatter:{title:"Vorstellungsrunde & Erwartungen"},index:0,start:0,end:2},inline:{raw:`---
src: ./pages/vorstellungsrunde_und_erwartungen.md
---
`,content:"",frontmatter:{},index:2,start:26,end:30},filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/vorstellungsrunde_und_erwartungen.md",noteHTML:"",id:2,no:3},__clicksElements:[],__preloaded:!1}},{path:"4",name:"page-4",component:vx,meta:{title:"Lernziele",srcSequence:"./pages/lernziele.md",slide:{raw:null,title:"Lernziele",level:2,content:`## Lernziele

- Grundlagen der funktionalen Programmierung
- Funktionale Programmierung mit C#
- Grundlagen von F#`,frontmatter:{title:"Lernziele",srcSequence:"./pages/lernziele.md"},index:3,start:0,end:5,source:{filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/lernziele.md",raw:`## Lernziele

- Grundlagen der funktionalen Programmierung
- Funktionale Programmierung mit C#
- Grundlagen von F#`,title:"Lernziele",level:2,content:`## Lernziele

- Grundlagen der funktionalen Programmierung
- Funktionale Programmierung mit C#
- Grundlagen von F#`,frontmatter:{title:"Lernziele"},index:0,start:0,end:5},inline:{raw:`---
src: ./pages/lernziele.md
---
`,content:"",frontmatter:{},index:3,start:30,end:34},filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/lernziele.md",noteHTML:"",id:3,no:4},__clicksElements:[],__preloaded:!1}},{path:"5",name:"page-5",component:$x,meta:{title:"Mob Programming",srcSequence:"./pages/mob-programming.md",slide:{raw:null,title:"Mob Programming",level:2,content:`## Mob Programming

- wir lernen gemeinsam
- "Pair Programming in der Gruppe"
- Driver: Sitzt an der Tastatur (darf nicht denken)
- Navigator: Sagt dem Driver, was zu tun ist
- Mob: Unterstützt den Navigator
- Regelmäßiger Wechsel (5-10min)

<img
  class="absolute top-10 right-10 w-100"
  src="/images/mob-programming-setup.png"
/>`,frontmatter:{title:"Mob Programming",srcSequence:"./pages/mob-programming.md"},index:4,start:0,end:14,source:{filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/mob-programming.md",raw:`## Mob Programming

- wir lernen gemeinsam
- "Pair Programming in der Gruppe"
- Driver: Sitzt an der Tastatur (darf nicht denken)
- Navigator: Sagt dem Driver, was zu tun ist
- Mob: Unterstützt den Navigator
- Regelmäßiger Wechsel (5-10min)

<img
  class="absolute top-10 right-10 w-100"
  src="/images/mob-programming-setup.png"
/>
`,title:"Mob Programming",level:2,content:`## Mob Programming

- wir lernen gemeinsam
- "Pair Programming in der Gruppe"
- Driver: Sitzt an der Tastatur (darf nicht denken)
- Navigator: Sagt dem Driver, was zu tun ist
- Mob: Unterstützt den Navigator
- Regelmäßiger Wechsel (5-10min)

<img
  class="absolute top-10 right-10 w-100"
  src="/images/mob-programming-setup.png"
/>`,frontmatter:{title:"Mob Programming"},index:0,start:0,end:14},inline:{raw:`---
src: ./pages/mob-programming.md
---
`,content:"",frontmatter:{},index:4,start:34,end:38},filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/mob-programming.md",noteHTML:"",id:4,no:5},__clicksElements:[],__preloaded:!1}},{path:"6",name:"page-6",component:Ox,meta:{title:"Aufgabenstellung - Automatischer Grußkarten-Versand",srcSequence:"./pages/demo-app-intro.md",slide:{raw:null,title:"Aufgabenstellung - Automatischer Grußkarten-Versand",level:2,content:`## Aufgabenstellung - Automatischer Grußkarten-Versand

- Es gibt eine Kundenkartei mit Personen.
- Zur Kontaktpflege bekommt jede Person einen personalisierten Geburtstagsgruss per Post
    - Ein Anwender kann eine neue Person anlegen. Diese wird nur im Arbeitsspeicher vorgehalten.
        - Dabei muss ein Vorname angegeben werden
        - Es kann ein Spitzname angegeben werden
        - Es muss ein Geburtstag angegeben werden`,frontmatter:{title:"Aufgabenstellung - Automatischer Grußkarten-Versand",srcSequence:"./pages/demo-app-intro.md"},index:5,start:0,end:9,source:{filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/demo-app-intro.md",raw:`## Aufgabenstellung - Automatischer Grußkarten-Versand

- Es gibt eine Kundenkartei mit Personen.
- Zur Kontaktpflege bekommt jede Person einen personalisierten Geburtstagsgruss per Post
    - Ein Anwender kann eine neue Person anlegen. Diese wird nur im Arbeitsspeicher vorgehalten.
        - Dabei muss ein Vorname angegeben werden
        - Es kann ein Spitzname angegeben werden
        - Es muss ein Geburtstag angegeben werden
`,title:"Aufgabenstellung - Automatischer Grußkarten-Versand",level:2,content:`## Aufgabenstellung - Automatischer Grußkarten-Versand

- Es gibt eine Kundenkartei mit Personen.
- Zur Kontaktpflege bekommt jede Person einen personalisierten Geburtstagsgruss per Post
    - Ein Anwender kann eine neue Person anlegen. Diese wird nur im Arbeitsspeicher vorgehalten.
        - Dabei muss ein Vorname angegeben werden
        - Es kann ein Spitzname angegeben werden
        - Es muss ein Geburtstag angegeben werden`,frontmatter:{title:"Aufgabenstellung - Automatischer Grußkarten-Versand"},index:0,start:0,end:9},inline:{raw:`---
src: ./pages/demo-app-intro.md
---
`,content:"",frontmatter:{},index:5,start:38,end:42},filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/demo-app-intro.md",noteHTML:"",id:5,no:6},__clicksElements:[],__preloaded:!1}},{path:"7",name:"page-7",component:Ix,meta:{title:"FP 101",srcSequence:"./pages/02-fp-basics_und_immutability.md",slide:{raw:null,title:"FP 101",level:2,content:`## FP 101

- Immutability
- Functions as First Class Citizens
- Pure Functions

That's it!`,frontmatter:{title:"FP 101",srcSequence:"./pages/02-fp-basics_und_immutability.md"},index:6,start:0,end:8,source:{filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/02-fp-basics_und_immutability.md",raw:`## FP 101

- Immutability
- Functions as First Class Citizens
- Pure Functions

That's it!
`,title:"FP 101",level:2,content:`## FP 101

- Immutability
- Functions as First Class Citizens
- Pure Functions

That's it!`,frontmatter:{title:"FP 101"},index:0,start:0,end:8},inline:{raw:`---
src: ./pages/02-fp-basics_und_immutability.md
---
`,content:"",frontmatter:{},index:6,start:42,end:46},filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/02-fp-basics_und_immutability.md",noteHTML:"",id:6,no:7},__clicksElements:[],__preloaded:!1}},{path:"8",name:"page-8",component:Xx,meta:{srcSequence:"./pages/02-fp-basics_und_immutability.md",slide:{raw:`
### Immutability in C# #

\`\`\`csharp
public class Customer
{
  public string Name { get; set; } // set -> mutable :-(
}
\`\`\`

vs

\`\`\`csharp
public class Customer
{
  public Customer(string name)
  {
    Name = name;
  }
  
  public string Name { get; } // <- immutable
}
\`\`\`
`,title:"Immutability in C# #",level:3,content:`### Immutability in C# #

\`\`\`csharp
public class Customer
{
  public string Name { get; set; } // set -> mutable :-(
}
\`\`\`

vs

\`\`\`csharp
public class Customer
{
  public Customer(string name)
  {
    Name = name;
  }
  
  public string Name { get; } // <- immutable
}
\`\`\``,frontmatter:{srcSequence:"./pages/02-fp-basics_und_immutability.md"},index:7,start:9,end:33,source:{filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/02-fp-basics_und_immutability.md",raw:`
### Immutability in C# #

\`\`\`csharp
public class Customer
{
  public string Name { get; set; } // set -> mutable :-(
}
\`\`\`

vs

\`\`\`csharp
public class Customer
{
  public Customer(string name)
  {
    Name = name;
  }
  
  public string Name { get; } // <- immutable
}
\`\`\`
`,title:"Immutability in C# #",level:3,content:`### Immutability in C# #

\`\`\`csharp
public class Customer
{
  public string Name { get; set; } // set -> mutable :-(
}
\`\`\`

vs

\`\`\`csharp
public class Customer
{
  public Customer(string name)
  {
    Name = name;
  }
  
  public string Name { get; } // <- immutable
}
\`\`\``,frontmatter:{},index:1,start:9,end:33},filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/02-fp-basics_und_immutability.md",noteHTML:"",id:7,no:8},__clicksElements:[],__preloaded:!1}},{path:"9",name:"page-9",component:oS,meta:{srcSequence:"./pages/02-fp-basics_und_immutability.md",slide:{raw:`
Syntax matters!

Classic C#

\`\`\`csharp
int Add(int a, int b)
{
  return a + b;
}
\`\`\`

Expression body

\`\`\`csharp
int Add(int a, int b) => a + b;
\`\`\`
`,content:`Syntax matters!

Classic C#

\`\`\`csharp
int Add(int a, int b)
{
  return a + b;
}
\`\`\`

Expression body

\`\`\`csharp
int Add(int a, int b) => a + b;
\`\`\``,frontmatter:{srcSequence:"./pages/02-fp-basics_und_immutability.md"},index:8,start:34,end:52,source:{filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/02-fp-basics_und_immutability.md",raw:`
Syntax matters!

Classic C#

\`\`\`csharp
int Add(int a, int b)
{
  return a + b;
}
\`\`\`

Expression body

\`\`\`csharp
int Add(int a, int b) => a + b;
\`\`\`
`,content:`Syntax matters!

Classic C#

\`\`\`csharp
int Add(int a, int b)
{
  return a + b;
}
\`\`\`

Expression body

\`\`\`csharp
int Add(int a, int b) => a + b;
\`\`\``,frontmatter:{},index:2,start:34,end:52},filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/02-fp-basics_und_immutability.md",noteHTML:"",id:8,no:9},__clicksElements:[],__preloaded:!1}},{path:"10",name:"page-10",component:fS,meta:{srcSequence:"./pages/02-fp-basics_und_immutability.md",slide:{raw:`
Syntax matters!

Classic C#

\`\`\`csharp
int Add(int a, int b)
{
  Console.WriteLine("bla"); // <- side effect!
  return a + b;
}
\`\`\`

Expression body: Seiteneffekte sind schwieriger reinzubauen

\`\`\`csharp
int Add(int a, int b) => a + b;
\`\`\`
`,content:`Syntax matters!

Classic C#

\`\`\`csharp
int Add(int a, int b)
{
  Console.WriteLine("bla"); // <- side effect!
  return a + b;
}
\`\`\`

Expression body: Seiteneffekte sind schwieriger reinzubauen

\`\`\`csharp
int Add(int a, int b) => a + b;
\`\`\``,frontmatter:{srcSequence:"./pages/02-fp-basics_und_immutability.md"},index:9,start:53,end:72,source:{filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/02-fp-basics_und_immutability.md",raw:`
Syntax matters!

Classic C#

\`\`\`csharp
int Add(int a, int b)
{
  Console.WriteLine("bla"); // <- side effect!
  return a + b;
}
\`\`\`

Expression body: Seiteneffekte sind schwieriger reinzubauen

\`\`\`csharp
int Add(int a, int b) => a + b;
\`\`\`
`,content:`Syntax matters!

Classic C#

\`\`\`csharp
int Add(int a, int b)
{
  Console.WriteLine("bla"); // <- side effect!
  return a + b;
}
\`\`\`

Expression body: Seiteneffekte sind schwieriger reinzubauen

\`\`\`csharp
int Add(int a, int b) => a + b;
\`\`\``,frontmatter:{},index:3,start:53,end:72},filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/02-fp-basics_und_immutability.md",noteHTML:"",id:9,no:10},__clicksElements:[],__preloaded:!1}},{path:"11",name:"page-11",component:_S,meta:{title:"Neue Anforderung!",srcSequence:"./pages/anforderung_vorname_darf_niemals_leer_sein.md",slide:{raw:null,title:"Neue Anforderung!",level:2,content:`## Neue Anforderung!

Der Vorname einer Person darf niemals leer sein`,frontmatter:{title:"Neue Anforderung!",srcSequence:"./pages/anforderung_vorname_darf_niemals_leer_sein.md"},index:10,start:0,end:4,source:{filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/anforderung_vorname_darf_niemals_leer_sein.md",raw:`## Neue Anforderung!

Der Vorname einer Person darf niemals leer sein
`,title:"Neue Anforderung!",level:2,content:`## Neue Anforderung!

Der Vorname einer Person darf niemals leer sein`,frontmatter:{title:"Neue Anforderung!"},index:0,start:0,end:4},inline:{raw:`---
src: ./pages/anforderung_vorname_darf_niemals_leer_sein.md
---
`,content:"",frontmatter:{},index:7,start:46,end:50},filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/anforderung_vorname_darf_niemals_leer_sein.md",noteHTML:"",id:10,no:11},__clicksElements:[],__preloaded:!1}},{path:"12",name:"page-12",component:vS,meta:{title:"Value Objects",srcSequence:"./pages/value-objects.md",slide:{raw:null,title:"Value Objects",level:1,content:"# Value Objects",frontmatter:{title:"Value Objects",srcSequence:"./pages/value-objects.md"},index:11,start:0,end:2,source:{filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/value-objects.md",raw:`# Value Objects
`,title:"Value Objects",level:1,content:"# Value Objects",frontmatter:{title:"Value Objects"},index:0,start:0,end:2},inline:{raw:`---
src: ./pages/value-objects.md
---
`,content:"",frontmatter:{},index:8,start:50,end:54},filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/value-objects.md",noteHTML:"",id:11,no:12},__clicksElements:[],__preloaded:!1}},{path:"13",name:"page-13",component:ES,meta:{srcSequence:"./pages/value-objects.md",slide:{raw:`
## Value Objects

Warum?

- Methoden sollten nicht lügen!
  - Null: NullPointerException, Null-Checks
  - Antipattern: Primitive Obsession
`,title:"Value Objects",level:2,content:`## Value Objects

Warum?

- Methoden sollten nicht lügen!
  - Null: NullPointerException, Null-Checks
  - Antipattern: Primitive Obsession`,frontmatter:{srcSequence:"./pages/value-objects.md"},index:12,start:3,end:12,source:{filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/value-objects.md",raw:`
## Value Objects

Warum?

- Methoden sollten nicht lügen!
  - Null: NullPointerException, Null-Checks
  - Antipattern: Primitive Obsession
`,title:"Value Objects",level:2,content:`## Value Objects

Warum?

- Methoden sollten nicht lügen!
  - Null: NullPointerException, Null-Checks
  - Antipattern: Primitive Obsession`,frontmatter:{},index:1,start:3,end:12},filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/value-objects.md",noteHTML:"",id:12,no:13},__clicksElements:[],__preloaded:!1}},{path:"14",name:"page-14",component:OS,meta:{srcSequence:"./pages/value-objects.md",slide:{raw:`
### Beispiele

\`\`\`csharp
// :-(
void Einzahlen(int wert, SomeEnum waehrung) { /* ... */ }

// ;-)
void Einzahlen(Geld geld) { /* ... */ }
\`\`\`

\`\`\`csharp
class Kunde {
    int Alter { get; set; } // :-(
    
    // ist \`i\` das aktuelle Alter oder das Geburtsjahr??
    bool IstVolljaehrig(int i) { /* ... */}
}

class Kunde {
    Alter Alter { get; set; } // ;-)

    bool IstVolljaehrig(Alter alter) { /* ... */}

    bool IstVolljaehrig(Geburtsjahr geburtsjahr) { /* ... */}
}
\`\`\`
`,title:"Beispiele",level:3,content:`### Beispiele

\`\`\`csharp
// :-(
void Einzahlen(int wert, SomeEnum waehrung) { /* ... */ }

// ;-)
void Einzahlen(Geld geld) { /* ... */ }
\`\`\`

\`\`\`csharp
class Kunde {
    int Alter { get; set; } // :-(
    
    // ist \`i\` das aktuelle Alter oder das Geburtsjahr??
    bool IstVolljaehrig(int i) { /* ... */}
}

class Kunde {
    Alter Alter { get; set; } // ;-)

    bool IstVolljaehrig(Alter alter) { /* ... */}

    bool IstVolljaehrig(Geburtsjahr geburtsjahr) { /* ... */}
}
\`\`\``,frontmatter:{srcSequence:"./pages/value-objects.md"},index:13,start:13,end:41,source:{filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/value-objects.md",raw:`
### Beispiele

\`\`\`csharp
// :-(
void Einzahlen(int wert, SomeEnum waehrung) { /* ... */ }

// ;-)
void Einzahlen(Geld geld) { /* ... */ }
\`\`\`

\`\`\`csharp
class Kunde {
    int Alter { get; set; } // :-(
    
    // ist \`i\` das aktuelle Alter oder das Geburtsjahr??
    bool IstVolljaehrig(int i) { /* ... */}
}

class Kunde {
    Alter Alter { get; set; } // ;-)

    bool IstVolljaehrig(Alter alter) { /* ... */}

    bool IstVolljaehrig(Geburtsjahr geburtsjahr) { /* ... */}
}
\`\`\`
`,title:"Beispiele",level:3,content:`### Beispiele

\`\`\`csharp
// :-(
void Einzahlen(int wert, SomeEnum waehrung) { /* ... */ }

// ;-)
void Einzahlen(Geld geld) { /* ... */ }
\`\`\`

\`\`\`csharp
class Kunde {
    int Alter { get; set; } // :-(
    
    // ist \`i\` das aktuelle Alter oder das Geburtsjahr??
    bool IstVolljaehrig(int i) { /* ... */}
}

class Kunde {
    Alter Alter { get; set; } // ;-)

    bool IstVolljaehrig(Alter alter) { /* ... */}

    bool IstVolljaehrig(Geburtsjahr geburtsjahr) { /* ... */}
}
\`\`\``,frontmatter:{},index:2,start:13,end:41},filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/value-objects.md",noteHTML:"",id:13,no:14},__clicksElements:[],__preloaded:!1}},{path:"15",name:"page-15",component:NS,meta:{srcSequence:"./pages/value-objects.md",slide:{raw:`
![img](/images/wikipedia-value-objects.png)
`,content:"![img](/images/wikipedia-value-objects.png)",frontmatter:{srcSequence:"./pages/value-objects.md"},index:14,start:42,end:45,source:{filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/value-objects.md",raw:`
![img](/images/wikipedia-value-objects.png)
`,content:"![img](/images/wikipedia-value-objects.png)",frontmatter:{},index:3,start:42,end:45},filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/value-objects.md",noteHTML:"",id:14,no:15},__clicksElements:[],__preloaded:!1}},{path:"16",name:"page-16",component:jS,meta:{srcSequence:"./pages/value-objects.md",slide:{raw:`
## Value Objects

- nur gültige Objekte erlaubt
- immutable
- equality by structure
`,title:"Value Objects",level:2,content:`## Value Objects

- nur gültige Objekte erlaubt
- immutable
- equality by structure`,frontmatter:{srcSequence:"./pages/value-objects.md"},index:15,start:46,end:53,source:{filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/value-objects.md",raw:`
## Value Objects

- nur gültige Objekte erlaubt
- immutable
- equality by structure
`,title:"Value Objects",level:2,content:`## Value Objects

- nur gültige Objekte erlaubt
- immutable
- equality by structure`,frontmatter:{},index:4,start:46,end:53},filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/value-objects.md",noteHTML:"",id:15,no:16},__clicksElements:[],__preloaded:!1}},{path:"17",name:"page-17",component:VS,meta:{srcSequence:"./pages/value-objects.md",slide:{raw:`
### Nur gültige Objekte

Es muss bei der Erstellung gewährleistet sein, dass das Objekt gültig ist.
`,title:"Nur gültige Objekte",level:3,content:`### Nur gültige Objekte

Es muss bei der Erstellung gewährleistet sein, dass das Objekt gültig ist.`,frontmatter:{srcSequence:"./pages/value-objects.md"},index:16,start:54,end:59,source:{filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/value-objects.md",raw:`
### Nur gültige Objekte

Es muss bei der Erstellung gewährleistet sein, dass das Objekt gültig ist.
`,title:"Nur gültige Objekte",level:3,content:`### Nur gültige Objekte

Es muss bei der Erstellung gewährleistet sein, dass das Objekt gültig ist.`,frontmatter:{},index:5,start:54,end:59},filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/value-objects.md",noteHTML:"",id:16,no:17},__clicksElements:[],__preloaded:!1}},{path:"18",name:"page-18",component:GS,meta:{srcSequence:"./pages/value-objects.md",slide:{raw:`
### Nur gültige Objekte

Optionen:

- Konstruktor mit allen Parametern
- statische Hilfsmethode & privater Konstruktor
`,title:"Nur gültige Objekte",level:3,content:`### Nur gültige Objekte

Optionen:

- Konstruktor mit allen Parametern
- statische Hilfsmethode & privater Konstruktor`,frontmatter:{srcSequence:"./pages/value-objects.md"},index:17,start:60,end:68,source:{filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/value-objects.md",raw:`
### Nur gültige Objekte

Optionen:

- Konstruktor mit allen Parametern
- statische Hilfsmethode & privater Konstruktor
`,title:"Nur gültige Objekte",level:3,content:`### Nur gültige Objekte

Optionen:

- Konstruktor mit allen Parametern
- statische Hilfsmethode & privater Konstruktor`,frontmatter:{},index:6,start:60,end:68},filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/value-objects.md",noteHTML:"",id:17,no:18},__clicksElements:[],__preloaded:!1}},{path:"19",name:"page-19",component:JS,meta:{srcSequence:"./pages/value-objects.md",slide:{raw:`
#### Value Objects erstellen / 1

\`\`\`csharp
class Geld 
{
    int Betrag { get; }
    Waehrung Waehrung { get; }

    Geld(int betrag, Waehrung waehrung) {
        if (!IsValid(betrag, Waehrung)) 
            throw new InvalidGeldException();

        Betrag = betrag;
        Waehrung = waehrung;
    }

    bool IsValid(int betrag, Waehrung waehrung)
        => betrag > 0 && waehrung != Waehrung.Undefined;
}
\`\`\`
`,title:"Value Objects erstellen / 1",level:4,content:`#### Value Objects erstellen / 1

\`\`\`csharp
class Geld 
{
    int Betrag { get; }
    Waehrung Waehrung { get; }

    Geld(int betrag, Waehrung waehrung) {
        if (!IsValid(betrag, Waehrung)) 
            throw new InvalidGeldException();

        Betrag = betrag;
        Waehrung = waehrung;
    }

    bool IsValid(int betrag, Waehrung waehrung)
        => betrag > 0 && waehrung != Waehrung.Undefined;
}
\`\`\``,frontmatter:{srcSequence:"./pages/value-objects.md"},index:18,start:69,end:91,source:{filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/value-objects.md",raw:`
#### Value Objects erstellen / 1

\`\`\`csharp
class Geld 
{
    int Betrag { get; }
    Waehrung Waehrung { get; }

    Geld(int betrag, Waehrung waehrung) {
        if (!IsValid(betrag, Waehrung)) 
            throw new InvalidGeldException();

        Betrag = betrag;
        Waehrung = waehrung;
    }

    bool IsValid(int betrag, Waehrung waehrung)
        => betrag > 0 && waehrung != Waehrung.Undefined;
}
\`\`\`
`,title:"Value Objects erstellen / 1",level:4,content:`#### Value Objects erstellen / 1

\`\`\`csharp
class Geld 
{
    int Betrag { get; }
    Waehrung Waehrung { get; }

    Geld(int betrag, Waehrung waehrung) {
        if (!IsValid(betrag, Waehrung)) 
            throw new InvalidGeldException();

        Betrag = betrag;
        Waehrung = waehrung;
    }

    bool IsValid(int betrag, Waehrung waehrung)
        => betrag > 0 && waehrung != Waehrung.Undefined;
}
\`\`\``,frontmatter:{},index:7,start:69,end:91},filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/value-objects.md",noteHTML:"",id:18,no:19},__clicksElements:[],__preloaded:!1}},{path:"20",name:"page-20",component:nE,meta:{srcSequence:"./pages/value-objects.md",slide:{raw:`
#### Value Objects erstellen / 2

\`\`\`csharp
class Geld 
{
    int Betrag { get; }
    Waehrung Waehrung { get; }

    static Geld Create(int betrag, Waehrung waehrung) {
        return new Geld(betrag, waehrung);
    }

    // private ctor
    private Geld(int betrag, Waehrung waehrung) {
        if (!IsValid(betrag, Waehrung)) 
            throw new InvalidGeldException();

        Betrag = betrag;
        Waehrung = waehrung;
    }

    bool IsValid(int betrag, Waehrung waehrung)
        => betrag > 0 && waehrung != Waehrung.Undefined;
}
\`\`\`
`,title:"Value Objects erstellen / 2",level:4,content:`#### Value Objects erstellen / 2

\`\`\`csharp
class Geld 
{
    int Betrag { get; }
    Waehrung Waehrung { get; }

    static Geld Create(int betrag, Waehrung waehrung) {
        return new Geld(betrag, waehrung);
    }

    // private ctor
    private Geld(int betrag, Waehrung waehrung) {
        if (!IsValid(betrag, Waehrung)) 
            throw new InvalidGeldException();

        Betrag = betrag;
        Waehrung = waehrung;
    }

    bool IsValid(int betrag, Waehrung waehrung)
        => betrag > 0 && waehrung != Waehrung.Undefined;
}
\`\`\``,frontmatter:{srcSequence:"./pages/value-objects.md"},index:19,start:92,end:119,source:{filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/value-objects.md",raw:`
#### Value Objects erstellen / 2

\`\`\`csharp
class Geld 
{
    int Betrag { get; }
    Waehrung Waehrung { get; }

    static Geld Create(int betrag, Waehrung waehrung) {
        return new Geld(betrag, waehrung);
    }

    // private ctor
    private Geld(int betrag, Waehrung waehrung) {
        if (!IsValid(betrag, Waehrung)) 
            throw new InvalidGeldException();

        Betrag = betrag;
        Waehrung = waehrung;
    }

    bool IsValid(int betrag, Waehrung waehrung)
        => betrag > 0 && waehrung != Waehrung.Undefined;
}
\`\`\`
`,title:"Value Objects erstellen / 2",level:4,content:`#### Value Objects erstellen / 2

\`\`\`csharp
class Geld 
{
    int Betrag { get; }
    Waehrung Waehrung { get; }

    static Geld Create(int betrag, Waehrung waehrung) {
        return new Geld(betrag, waehrung);
    }

    // private ctor
    private Geld(int betrag, Waehrung waehrung) {
        if (!IsValid(betrag, Waehrung)) 
            throw new InvalidGeldException();

        Betrag = betrag;
        Waehrung = waehrung;
    }

    bool IsValid(int betrag, Waehrung waehrung)
        => betrag > 0 && waehrung != Waehrung.Undefined;
}
\`\`\``,frontmatter:{},index:8,start:92,end:119},filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/value-objects.md",noteHTML:"",id:19,no:20},__clicksElements:[],__preloaded:!1}},{path:"21",name:"page-21",component:oE,meta:{srcSequence:"./pages/value-objects.md",slide:{raw:`
### Immutability

Damit ein C# Objekt unveränderlich wird, muss gewährleistet sein, dass es auch **nach Erstellung nicht verändert wird**.

- interne Werte dürfen ausschließlich vom Konstruktor verändert werden
- kein public oder private setter
- kein parameterloser Konstrukor
`,title:"Immutability",level:3,content:`### Immutability

Damit ein C# Objekt unveränderlich wird, muss gewährleistet sein, dass es auch **nach Erstellung nicht verändert wird**.

- interne Werte dürfen ausschließlich vom Konstruktor verändert werden
- kein public oder private setter
- kein parameterloser Konstrukor`,frontmatter:{srcSequence:"./pages/value-objects.md"},index:20,start:120,end:129,source:{filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/value-objects.md",raw:`
### Immutability

Damit ein C# Objekt unveränderlich wird, muss gewährleistet sein, dass es auch **nach Erstellung nicht verändert wird**.

- interne Werte dürfen ausschließlich vom Konstruktor verändert werden
- kein public oder private setter
- kein parameterloser Konstrukor
`,title:"Immutability",level:3,content:`### Immutability

Damit ein C# Objekt unveränderlich wird, muss gewährleistet sein, dass es auch **nach Erstellung nicht verändert wird**.

- interne Werte dürfen ausschließlich vom Konstruktor verändert werden
- kein public oder private setter
- kein parameterloser Konstrukor`,frontmatter:{},index:9,start:120,end:129},filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/value-objects.md",noteHTML:"",id:20,no:21},__clicksElements:[],__preloaded:!1}},{path:"22",name:"page-22",component:uE,meta:{srcSequence:"./pages/value-objects.md",slide:{raw:`
### Equality by structure

Zwei Objekte sind gleich, wenn sie die gleichen Werte haben.
`,title:"Equality by structure",level:3,content:`### Equality by structure

Zwei Objekte sind gleich, wenn sie die gleichen Werte haben.`,frontmatter:{srcSequence:"./pages/value-objects.md"},index:21,start:130,end:135,source:{filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/value-objects.md",raw:`
### Equality by structure

Zwei Objekte sind gleich, wenn sie die gleichen Werte haben.
`,title:"Equality by structure",level:3,content:`### Equality by structure

Zwei Objekte sind gleich, wenn sie die gleichen Werte haben.`,frontmatter:{},index:10,start:130,end:135},filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/value-objects.md",noteHTML:"",id:21,no:22},__clicksElements:[],__preloaded:!1}},{path:"23",name:"page-23",component:hE,meta:{srcSequence:"./pages/value-objects.md",slide:{raw:`
### Exkurs: Vergleichbarkeit

- Equality by reference
- Equality by id
- Equality by structure
`,title:"Exkurs: Vergleichbarkeit",level:3,content:`### Exkurs: Vergleichbarkeit

- Equality by reference
- Equality by id
- Equality by structure`,frontmatter:{srcSequence:"./pages/value-objects.md"},index:22,start:136,end:143,source:{filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/value-objects.md",raw:`
### Exkurs: Vergleichbarkeit

- Equality by reference
- Equality by id
- Equality by structure
`,title:"Exkurs: Vergleichbarkeit",level:3,content:`### Exkurs: Vergleichbarkeit

- Equality by reference
- Equality by id
- Equality by structure`,frontmatter:{},index:11,start:136,end:143},filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/value-objects.md",noteHTML:"",id:22,no:23},__clicksElements:[],__preloaded:!1}},{path:"24",name:"page-24",component:vE,meta:{srcSequence:"./pages/value-objects.md",slide:{raw:`
### Equality by structure

Zwei Objekte sind gleich, wenn sie die gleichen Werte haben.

- \`Equals\` und \`GetHashcode\` überschreiben

\`\`\`csharp
override bool Equals(Geld other)
    => other.Betrag   == this.Betrag &&
       other.Waehrung == this.Waehrung;

override int GetHashCode() { /* ... */ }
\`\`\`
`,title:"Equality by structure",level:3,content:`### Equality by structure

Zwei Objekte sind gleich, wenn sie die gleichen Werte haben.

- \`Equals\` und \`GetHashcode\` überschreiben

\`\`\`csharp
override bool Equals(Geld other)
    => other.Betrag   == this.Betrag &&
       other.Waehrung == this.Waehrung;

override int GetHashCode() { /* ... */ }
\`\`\``,frontmatter:{srcSequence:"./pages/value-objects.md"},index:23,start:144,end:159,source:{filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/value-objects.md",raw:`
### Equality by structure

Zwei Objekte sind gleich, wenn sie die gleichen Werte haben.

- \`Equals\` und \`GetHashcode\` überschreiben

\`\`\`csharp
override bool Equals(Geld other)
    => other.Betrag   == this.Betrag &&
       other.Waehrung == this.Waehrung;

override int GetHashCode() { /* ... */ }
\`\`\`
`,title:"Equality by structure",level:3,content:`### Equality by structure

Zwei Objekte sind gleich, wenn sie die gleichen Werte haben.

- \`Equals\` und \`GetHashcode\` überschreiben

\`\`\`csharp
override bool Equals(Geld other)
    => other.Betrag   == this.Betrag &&
       other.Waehrung == this.Waehrung;

override int GetHashCode() { /* ... */ }
\`\`\``,frontmatter:{},index:12,start:144,end:159},filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/value-objects.md",noteHTML:"",id:23,no:24},__clicksElements:[],__preloaded:!1}},{path:"25",name:"page-25",component:EE,meta:{srcSequence:"./pages/value-objects.md",slide:{raw:`
### C# 9 and greater...

C# records sind ein erster Schritt in die richtige Richtung:

- immutable
`,title:"C# 9 and greater...",level:3,content:`### C# 9 and greater...

C# records sind ein erster Schritt in die richtige Richtung:

- immutable`,frontmatter:{srcSequence:"./pages/value-objects.md"},index:24,start:160,end:167,source:{filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/value-objects.md",raw:`
### C# 9 and greater...

C# records sind ein erster Schritt in die richtige Richtung:

- immutable
`,title:"C# 9 and greater...",level:3,content:`### C# 9 and greater...

C# records sind ein erster Schritt in die richtige Richtung:

- immutable`,frontmatter:{},index:13,start:160,end:167},filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/value-objects.md",noteHTML:"",id:24,no:25},__clicksElements:[],__preloaded:!1}},{path:"26",name:"page-26",component:AE,meta:{srcSequence:"./pages/value-objects.md",slide:{raw:`
### Exkurs

- manchmal genügt ein (leichtgewichtiges C#) record
- aber: eigentlich will man soviel Logik wie möglich in ein Objekt packen (OO, Value Objekt, DDD)
- (OO vs FP) und DDD
    - OO: Objekt mit Verhalten -> Ursprung von Value Objekt (und DDD)
    - FP: Strikte Trennung von Daten und Verhalten

Das Schöne an den unterschiedlichen Meinungen ist: 

- man kann es situationsbedingt einfach lösen 
- Und sich das Beste rauspicken
`,title:"Exkurs",level:3,content:`### Exkurs

- manchmal genügt ein (leichtgewichtiges C#) record
- aber: eigentlich will man soviel Logik wie möglich in ein Objekt packen (OO, Value Objekt, DDD)
- (OO vs FP) und DDD
    - OO: Objekt mit Verhalten -> Ursprung von Value Objekt (und DDD)
    - FP: Strikte Trennung von Daten und Verhalten

Das Schöne an den unterschiedlichen Meinungen ist: 

- man kann es situationsbedingt einfach lösen 
- Und sich das Beste rauspicken`,frontmatter:{srcSequence:"./pages/value-objects.md"},index:25,start:168,end:182,source:{filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/value-objects.md",raw:`
### Exkurs

- manchmal genügt ein (leichtgewichtiges C#) record
- aber: eigentlich will man soviel Logik wie möglich in ein Objekt packen (OO, Value Objekt, DDD)
- (OO vs FP) und DDD
    - OO: Objekt mit Verhalten -> Ursprung von Value Objekt (und DDD)
    - FP: Strikte Trennung von Daten und Verhalten

Das Schöne an den unterschiedlichen Meinungen ist: 

- man kann es situationsbedingt einfach lösen 
- Und sich das Beste rauspicken
`,title:"Exkurs",level:3,content:`### Exkurs

- manchmal genügt ein (leichtgewichtiges C#) record
- aber: eigentlich will man soviel Logik wie möglich in ein Objekt packen (OO, Value Objekt, DDD)
- (OO vs FP) und DDD
    - OO: Objekt mit Verhalten -> Ursprung von Value Objekt (und DDD)
    - FP: Strikte Trennung von Daten und Verhalten

Das Schöne an den unterschiedlichen Meinungen ist: 

- man kann es situationsbedingt einfach lösen 
- Und sich das Beste rauspicken`,frontmatter:{},index:14,start:168,end:182},filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/value-objects.md",noteHTML:"",id:25,no:26},__clicksElements:[],__preloaded:!1}},{path:"27",name:"page-27",component:NE,meta:{title:"Let's code",srcSequence:"./pages/letscode.md",slide:{raw:null,title:"Let's code",level:1,content:"# Let's code",frontmatter:{title:"Let's code",srcSequence:"./pages/letscode.md"},index:26,start:0,end:1,source:{filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/letscode.md",raw:"# Let's code",title:"Let's code",level:1,content:"# Let's code",frontmatter:{title:"Let's code"},index:0,start:0,end:1},inline:{raw:`---
src: ./pages/letscode.md
---
`,content:"",frontmatter:{},index:9,start:54,end:58},filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/letscode.md",noteHTML:"",id:26,no:27},__clicksElements:[],__preloaded:!1}},{path:"28",name:"page-28",component:jE,meta:{title:"Neue Anforderung!",srcSequence:"./pages/anforderung_vorname_darf_niemals_leer_sein.md",slide:{raw:null,title:"Neue Anforderung!",level:2,content:`## Neue Anforderung!

Der Vorname einer Person darf niemals leer sein`,frontmatter:{title:"Neue Anforderung!",srcSequence:"./pages/anforderung_vorname_darf_niemals_leer_sein.md"},index:27,start:0,end:4,source:{filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/anforderung_vorname_darf_niemals_leer_sein.md",raw:`## Neue Anforderung!

Der Vorname einer Person darf niemals leer sein
`,title:"Neue Anforderung!",level:2,content:`## Neue Anforderung!

Der Vorname einer Person darf niemals leer sein`,frontmatter:{title:"Neue Anforderung!"},index:0,start:0,end:4},inline:{raw:`---
src: ./pages/anforderung_vorname_darf_niemals_leer_sein.md
---
`,content:"",frontmatter:{},index:10,start:58,end:62},filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/anforderung_vorname_darf_niemals_leer_sein.md",noteHTML:"",id:27,no:28},__clicksElements:[],__preloaded:!1}},{path:"29",name:"page-29",component:zE,meta:{title:"FP 101 - functions",srcSequence:"./pages/02-fp-basics_first_class_functions.md",slide:{raw:null,title:"FP 101 - functions",level:2,content:`## FP 101 - functions

### 1st class functions in C# #

Funktionen können als Parameter verwendet werden`,frontmatter:{title:"FP 101 - functions",srcSequence:"./pages/02-fp-basics_first_class_functions.md"},index:28,start:0,end:6,source:{filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/02-fp-basics_first_class_functions.md",raw:`## FP 101 - functions

### 1st class functions in C# #

Funktionen können als Parameter verwendet werden
`,title:"FP 101 - functions",level:2,content:`## FP 101 - functions

### 1st class functions in C# #

Funktionen können als Parameter verwendet werden`,frontmatter:{title:"FP 101 - functions"},index:0,start:0,end:6},inline:{raw:`---
src: ./pages/02-fp-basics_first_class_functions.md
---
`,content:"",frontmatter:{},index:11,start:62,end:66},filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/02-fp-basics_first_class_functions.md",noteHTML:"",id:28,no:29},__clicksElements:[],__preloaded:!1}},{path:"30",name:"page-30",component:UE,meta:{srcSequence:"./pages/02-fp-basics_first_class_functions.md",slide:{raw:`
...Ähnlichkeit mit Interfaces in der OO-Welt...
`,content:"...Ähnlichkeit mit Interfaces in der OO-Welt...",frontmatter:{srcSequence:"./pages/02-fp-basics_first_class_functions.md"},index:29,start:7,end:10,source:{filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/02-fp-basics_first_class_functions.md",raw:`
...Ähnlichkeit mit Interfaces in der OO-Welt...
`,content:"...Ähnlichkeit mit Interfaces in der OO-Welt...",frontmatter:{},index:1,start:7,end:10},filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/02-fp-basics_first_class_functions.md",noteHTML:"",id:29,no:30},__clicksElements:[],__preloaded:!1}},{path:"31",name:"page-31",component:QE,meta:{srcSequence:"./pages/02-fp-basics_first_class_functions.md",slide:{raw:`
#### Strategy-Pattern

\`\`\`csharp
interface ICalculateSalary
{
  int ByInput(int i);            // <- Methodensignatur
}

class Manager: ICalculateSalary
{
  int ByInput(int i) => i*2;     // <- Implementierung
}
\`\`\`

\`\`\`csharp
class SomeService
{
  int DoSomething(ICalculateSalary salary, int i) 
    => salary.ByInput(i);        // <- "deligiert"
}
\`\`\`

(Verhalten als Parameter übergeben)
`,title:"Strategy-Pattern",level:4,content:`#### Strategy-Pattern

\`\`\`csharp
interface ICalculateSalary
{
  int ByInput(int i);            // <- Methodensignatur
}

class Manager: ICalculateSalary
{
  int ByInput(int i) => i*2;     // <- Implementierung
}
\`\`\`

\`\`\`csharp
class SomeService
{
  int DoSomething(ICalculateSalary salary, int i) 
    => salary.ByInput(i);        // <- "deligiert"
}
\`\`\`

(Verhalten als Parameter übergeben)`,frontmatter:{srcSequence:"./pages/02-fp-basics_first_class_functions.md"},index:30,start:11,end:36,source:{filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/02-fp-basics_first_class_functions.md",raw:`
#### Strategy-Pattern

\`\`\`csharp
interface ICalculateSalary
{
  int ByInput(int i);            // <- Methodensignatur
}

class Manager: ICalculateSalary
{
  int ByInput(int i) => i*2;     // <- Implementierung
}
\`\`\`

\`\`\`csharp
class SomeService
{
  int DoSomething(ICalculateSalary salary, int i) 
    => salary.ByInput(i);        // <- "deligiert"
}
\`\`\`

(Verhalten als Parameter übergeben)
`,title:"Strategy-Pattern",level:4,content:`#### Strategy-Pattern

\`\`\`csharp
interface ICalculateSalary
{
  int ByInput(int i);            // <- Methodensignatur
}

class Manager: ICalculateSalary
{
  int ByInput(int i) => i*2;     // <- Implementierung
}
\`\`\`

\`\`\`csharp
class SomeService
{
  int DoSomething(ICalculateSalary salary, int i) 
    => salary.ByInput(i);        // <- "deligiert"
}
\`\`\`

(Verhalten als Parameter übergeben)`,frontmatter:{},index:2,start:11,end:36},filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/02-fp-basics_first_class_functions.md",noteHTML:"",id:30,no:31},__clicksElements:[],__preloaded:!1}},{path:"32",name:"page-32",component:t$,meta:{title:"Neue Anforderung!",srcSequence:"./pages/anforderung_pro_modus_anderer_output.md",slide:{raw:null,title:"Neue Anforderung!",level:2,content:`## Neue Anforderung!

- Es gibt eine Funktion, die einen Grußtext aus dem Vornamen und dem Spitznamen erzeugt.
- Die Funktion kann dabei verschiedene Texte erzeugen: 
    - einen Standard-Text
    - einen Deluxe-Text, falls der Kunde die Bezahlversion hat
    - einen Debug-Text mit den reinen Daten
- Welcher Text erzeugt wird, wird nicht in dieser Funktion entschieden.`,frontmatter:{title:"Neue Anforderung!",srcSequence:"./pages/anforderung_pro_modus_anderer_output.md"},index:31,start:0,end:9,source:{filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/anforderung_pro_modus_anderer_output.md",raw:`## Neue Anforderung!

- Es gibt eine Funktion, die einen Grußtext aus dem Vornamen und dem Spitznamen erzeugt.
- Die Funktion kann dabei verschiedene Texte erzeugen: 
    - einen Standard-Text
    - einen Deluxe-Text, falls der Kunde die Bezahlversion hat
    - einen Debug-Text mit den reinen Daten
- Welcher Text erzeugt wird, wird nicht in dieser Funktion entschieden.
`,title:"Neue Anforderung!",level:2,content:`## Neue Anforderung!

- Es gibt eine Funktion, die einen Grußtext aus dem Vornamen und dem Spitznamen erzeugt.
- Die Funktion kann dabei verschiedene Texte erzeugen: 
    - einen Standard-Text
    - einen Deluxe-Text, falls der Kunde die Bezahlversion hat
    - einen Debug-Text mit den reinen Daten
- Welcher Text erzeugt wird, wird nicht in dieser Funktion entschieden.`,frontmatter:{title:"Neue Anforderung!"},index:0,start:0,end:9},inline:{raw:`---
src: ./pages/anforderung_pro_modus_anderer_output.md
---
`,content:"",frontmatter:{},index:12,start:66,end:70},filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/anforderung_pro_modus_anderer_output.md",noteHTML:"",id:31,no:32},__clicksElements:[],__preloaded:!1}},{path:"33",name:"page-33",component:r$,meta:{title:"Let's code",srcSequence:"./pages/letscode.md",slide:{raw:null,title:"Let's code",level:1,content:"# Let's code",frontmatter:{title:"Let's code",srcSequence:"./pages/letscode.md"},index:32,start:0,end:1,source:{filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/letscode.md",raw:"# Let's code",title:"Let's code",level:1,content:"# Let's code",frontmatter:{title:"Let's code"},index:0,start:0,end:1},inline:{raw:`---
src: ./pages/letscode.md
---
`,content:"",frontmatter:{},index:13,start:70,end:74},filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/letscode.md",noteHTML:"",id:32,no:33},__clicksElements:[],__preloaded:!1}},{path:"34",name:"page-34",component:u$,meta:{title:"FP 101 - Pure Functions",srcSequence:"./pages/02-fp-basics_pure_functions.md",slide:{raw:null,title:"FP 101 - Pure Functions",level:2,content:`## FP 101 - Pure Functions

### Pure Functions in C# #

- haben niemals Seiteneffekte!
- sollten immer nach \`static\` umwandelbar sein`,frontmatter:{title:"FP 101 - Pure Functions",srcSequence:"./pages/02-fp-basics_pure_functions.md"},index:33,start:0,end:7,source:{filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/02-fp-basics_pure_functions.md",raw:`## FP 101 - Pure Functions

### Pure Functions in C# #

- haben niemals Seiteneffekte!
- sollten immer nach \`static\` umwandelbar sein
`,title:"FP 101 - Pure Functions",level:2,content:`## FP 101 - Pure Functions

### Pure Functions in C# #

- haben niemals Seiteneffekte!
- sollten immer nach \`static\` umwandelbar sein`,frontmatter:{title:"FP 101 - Pure Functions"},index:0,start:0,end:7},inline:{raw:`---
src: ./pages/02-fp-basics_pure_functions.md
---
`,content:"",frontmatter:{},index:14,start:74,end:78},filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/02-fp-basics_pure_functions.md",noteHTML:"",id:33,no:34},__clicksElements:[],__preloaded:!1}},{path:"35",name:"page-35",component:g$,meta:{srcSequence:"./pages/02-fp-basics_pure_functions.md",slide:{raw:`
## Imperativ...

**Wie** mache ich etwas 

\`\`\`csharp
var people = new List<Person>();
{
    new Person { Age = 20, Income = 1000 },
    new Person { Age = 26, Income = 1100 },
    new Person { Age = 35, Income = 1300 }
};

var incomes = new List<int>();
foreach (var person in people)
{
    if (person.Age > 25)
        incomes.Add(person.Income);
}

var avg = incomes.Sum() / incomes.Count;
\`\`\`

versus...
`,title:"Imperativ...",level:2,content:`## Imperativ...

**Wie** mache ich etwas 

\`\`\`csharp
var people = new List<Person>();
{
    new Person { Age = 20, Income = 1000 },
    new Person { Age = 26, Income = 1100 },
    new Person { Age = 35, Income = 1300 }
};

var incomes = new List<int>();
foreach (var person in people)
{
    if (person.Age > 25)
        incomes.Add(person.Income);
}

var avg = incomes.Sum() / incomes.Count;
\`\`\`

versus...`,frontmatter:{srcSequence:"./pages/02-fp-basics_pure_functions.md"},index:34,start:8,end:33,source:{filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/02-fp-basics_pure_functions.md",raw:`
## Imperativ...

**Wie** mache ich etwas 

\`\`\`csharp
var people = new List<Person>();
{
    new Person { Age = 20, Income = 1000 },
    new Person { Age = 26, Income = 1100 },
    new Person { Age = 35, Income = 1300 }
};

var incomes = new List<int>();
foreach (var person in people)
{
    if (person.Age > 25)
        incomes.Add(person.Income);
}

var avg = incomes.Sum() / incomes.Count;
\`\`\`

versus...
`,title:"Imperativ...",level:2,content:`## Imperativ...

**Wie** mache ich etwas 

\`\`\`csharp
var people = new List<Person>();
{
    new Person { Age = 20, Income = 1000 },
    new Person { Age = 26, Income = 1100 },
    new Person { Age = 35, Income = 1300 }
};

var incomes = new List<int>();
foreach (var person in people)
{
    if (person.Age > 25)
        incomes.Add(person.Income);
}

var avg = incomes.Sum() / incomes.Count;
\`\`\`

versus...`,frontmatter:{},index:1,start:8,end:33},filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/02-fp-basics_pure_functions.md",noteHTML:"",id:34,no:35},__clicksElements:[],__preloaded:!1}},{path:"36",name:"page-36",component:x$,meta:{srcSequence:"./pages/02-fp-basics_pure_functions.md",slide:{raw:`
## Deklarativ

**Was** will ich erreichen?

Bsp: Filter / Map / Reduce

\`\`\`csharp
var people = new List<Person> {
  new Person { Age = 20, Income = 1000 },
  new Person { Age = 26, Income = 1100 },
  new Person { Age = 35, Income = 1300 }
}

var averageIncomeAbove25 = people
  Where(p => p.Age > 25) // "Filter"
  Select(p => p.Income)  // "Map"
  Average();             // "Reduce"
\`\`\`

- aussagekräftiger
- weniger fehleranfällig
`,title:"Deklarativ",level:2,content:`## Deklarativ

**Was** will ich erreichen?

Bsp: Filter / Map / Reduce

\`\`\`csharp
var people = new List<Person> {
  new Person { Age = 20, Income = 1000 },
  new Person { Age = 26, Income = 1100 },
  new Person { Age = 35, Income = 1300 }
}

var averageIncomeAbove25 = people
  Where(p => p.Age > 25) // "Filter"
  Select(p => p.Income)  // "Map"
  Average();             // "Reduce"
\`\`\`

- aussagekräftiger
- weniger fehleranfällig`,frontmatter:{srcSequence:"./pages/02-fp-basics_pure_functions.md"},index:35,start:34,end:57,source:{filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/02-fp-basics_pure_functions.md",raw:`
## Deklarativ

**Was** will ich erreichen?

Bsp: Filter / Map / Reduce

\`\`\`csharp
var people = new List<Person> {
  new Person { Age = 20, Income = 1000 },
  new Person { Age = 26, Income = 1100 },
  new Person { Age = 35, Income = 1300 }
}

var averageIncomeAbove25 = people
  Where(p => p.Age > 25) // "Filter"
  Select(p => p.Income)  // "Map"
  Average();             // "Reduce"
\`\`\`

- aussagekräftiger
- weniger fehleranfällig
`,title:"Deklarativ",level:2,content:`## Deklarativ

**Was** will ich erreichen?

Bsp: Filter / Map / Reduce

\`\`\`csharp
var people = new List<Person> {
  new Person { Age = 20, Income = 1000 },
  new Person { Age = 26, Income = 1100 },
  new Person { Age = 35, Income = 1300 }
}

var averageIncomeAbove25 = people
  Where(p => p.Age > 25) // "Filter"
  Select(p => p.Income)  // "Map"
  Average();             // "Reduce"
\`\`\`

- aussagekräftiger
- weniger fehleranfällig`,frontmatter:{},index:2,start:34,end:57},filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/02-fp-basics_pure_functions.md",noteHTML:"",id:35,no:36},__clicksElements:[],__preloaded:!1}},{path:"37",name:"page-37",component:P$,meta:{title:"Neue Anforderung!",srcSequence:"./pages/anforderung_personen_mit_geburtstag_an_x_zaehlen.md",slide:{raw:null,title:"Neue Anforderung!",level:2,content:`## Neue Anforderung!

- Es gibt eine Funktion, die für eine übergebene Menge von Einträgen die Anzahl der Personen bestimmt, die an einem bestimmten, ebenfalls übergebenem, Tag Geburtstag haben.`,frontmatter:{title:"Neue Anforderung!",srcSequence:"./pages/anforderung_personen_mit_geburtstag_an_x_zaehlen.md"},index:36,start:0,end:4,source:{filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/anforderung_personen_mit_geburtstag_an_x_zaehlen.md",raw:`## Neue Anforderung!

- Es gibt eine Funktion, die für eine übergebene Menge von Einträgen die Anzahl der Personen bestimmt, die an einem bestimmten, ebenfalls übergebenem, Tag Geburtstag haben.
`,title:"Neue Anforderung!",level:2,content:`## Neue Anforderung!

- Es gibt eine Funktion, die für eine übergebene Menge von Einträgen die Anzahl der Personen bestimmt, die an einem bestimmten, ebenfalls übergebenem, Tag Geburtstag haben.`,frontmatter:{title:"Neue Anforderung!"},index:0,start:0,end:4},inline:{raw:`---
src: ./pages/anforderung_personen_mit_geburtstag_an_x_zaehlen.md
---
`,content:"",frontmatter:{},index:15,start:78,end:82},filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/anforderung_personen_mit_geburtstag_an_x_zaehlen.md",noteHTML:"",id:36,no:37},__clicksElements:[],__preloaded:!1}},{path:"38",name:"page-38",component:O$,meta:{title:"Let's code",srcSequence:"./pages/letscode.md",slide:{raw:null,title:"Let's code",level:1,content:"# Let's code",frontmatter:{title:"Let's code",srcSequence:"./pages/letscode.md"},index:37,start:0,end:1,source:{filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/letscode.md",raw:"# Let's code",title:"Let's code",level:1,content:"# Let's code",frontmatter:{title:"Let's code"},index:0,start:0,end:1},inline:{raw:`---
src: ./pages/letscode.md
---
`,content:"",frontmatter:{},index:16,start:82,end:86},filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/letscode.md",noteHTML:"",id:37,no:38},__clicksElements:[],__preloaded:!1}},{path:"39",name:"page-39",component:V$,meta:{layout:"image-right",image:"/images/book-grokking-simplicity.png",title:"Alternative Beschreibung",srcSequence:"./pages/grokking-simplicity-01.md",slide:{raw:null,title:"Alternative Beschreibung",level:3,content:`### Alternative Beschreibung

aus "Grokking Simplicity"

Code wird in drei Arten geteilt:

- Calculations
- Actions
- Data

👉 Unterschied zur "klassischen" Objektorientierung:

- Trennung zwischen Verhalten und Datenstrukur
  - Calculations: Pure Functions
  - Actions: Impure Functions
  - Data`,frontmatter:{layout:"image-right",image:"/images/book-grokking-simplicity.png",title:"Alternative Beschreibung",srcSequence:"./pages/grokking-simplicity-01.md"},index:38,start:0,end:22,source:{filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/grokking-simplicity-01.md",raw:`---
layout: image-right
image: /images/book-grokking-simplicity.png
---

### Alternative Beschreibung

aus "Grokking Simplicity"

Code wird in drei Arten geteilt:

- Calculations
- Actions
- Data

👉 Unterschied zur "klassischen" Objektorientierung:

- Trennung zwischen Verhalten und Datenstrukur
  - Calculations: Pure Functions
  - Actions: Impure Functions
  - Data
`,title:"Alternative Beschreibung",level:3,content:`### Alternative Beschreibung

aus "Grokking Simplicity"

Code wird in drei Arten geteilt:

- Calculations
- Actions
- Data

👉 Unterschied zur "klassischen" Objektorientierung:

- Trennung zwischen Verhalten und Datenstrukur
  - Calculations: Pure Functions
  - Actions: Impure Functions
  - Data`,frontmatter:{layout:"image-right",image:"/images/book-grokking-simplicity.png",title:"Alternative Beschreibung"},index:0,start:0,end:22},inline:{raw:`---
src: ./pages/grokking-simplicity-01.md
---
`,content:"",frontmatter:{},index:17,start:86,end:90},filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/grokking-simplicity-01.md",noteHTML:"",id:38,no:39},__clicksElements:[],__preloaded:!1}},{path:"40",name:"page-40",component:K$,meta:{layout:"two-cols",srcSequence:"./pages/02-fp-basics_sprachen.md",slide:{raw:null,content:`<img
  class="absolute top-0 right-10 w-150"
  src="/images/fp-languages-overview.png"
/>

<div id="sig1">Image: "Get Programming with F#", Isaac Abraham</div>

::right::

- Die Abbildung stellt keine Wertung dar!
- Man sollte verstehen, wo auf dieser Abbildung man sich befindet

<style>
#sig1 {
  margin-top:350px;
  font-size: 12px;
}
</style>`,frontmatter:{layout:"two-cols",srcSequence:"./pages/02-fp-basics_sprachen.md"},index:39,start:0,end:23,source:{filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/02-fp-basics_sprachen.md",raw:`---
layout: two-cols
---

<img
  class="absolute top-0 right-10 w-150"
  src="/images/fp-languages-overview.png"
/>

<div id="sig1">Image: "Get Programming with F#", Isaac Abraham</div>

::right::

- Die Abbildung stellt keine Wertung dar!
- Man sollte verstehen, wo auf dieser Abbildung man sich befindet

<style>
#sig1 {
  margin-top:350px;
  font-size: 12px;
}
</style>
`,content:`<img
  class="absolute top-0 right-10 w-150"
  src="/images/fp-languages-overview.png"
/>

<div id="sig1">Image: "Get Programming with F#", Isaac Abraham</div>

::right::

- Die Abbildung stellt keine Wertung dar!
- Man sollte verstehen, wo auf dieser Abbildung man sich befindet

<style>
#sig1 {
  margin-top:350px;
  font-size: 12px;
}
</style>`,frontmatter:{layout:"two-cols"},index:0,start:0,end:23},inline:{raw:`---
src: ./pages/02-fp-basics_sprachen.md
---
`,content:"",frontmatter:{},index:18,start:90,end:94},filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/02-fp-basics_sprachen.md",noteHTML:"",id:39,no:40},__clicksElements:[],__preloaded:!1}},{path:"41",name:"page-41",component:Q$,meta:{title:"Neue Anforderung!",srcSequence:"./pages/anforderung_was_soll_denn_dieses_fragezeichen.md",slide:{raw:null,title:"Neue Anforderung!",level:2,content:`## Neue Anforderung!

- Es gibt zuviele NullReferenceExceptions. Die müssen wir loswerden!
- Und dann natürlich allen bestehenden Code entsprechend anpassen.`,frontmatter:{title:"Neue Anforderung!",srcSequence:"./pages/anforderung_was_soll_denn_dieses_fragezeichen.md"},index:40,start:0,end:5,source:{filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/anforderung_was_soll_denn_dieses_fragezeichen.md",raw:`## Neue Anforderung!

- Es gibt zuviele NullReferenceExceptions. Die müssen wir loswerden!
- Und dann natürlich allen bestehenden Code entsprechend anpassen.
`,title:"Neue Anforderung!",level:2,content:`## Neue Anforderung!

- Es gibt zuviele NullReferenceExceptions. Die müssen wir loswerden!
- Und dann natürlich allen bestehenden Code entsprechend anpassen.`,frontmatter:{title:"Neue Anforderung!"},index:0,start:0,end:5},inline:{raw:`---
src: ./pages/anforderung_was_soll_denn_dieses_fragezeichen.md
---
`,content:"",frontmatter:{},index:19,start:94,end:98},filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/anforderung_was_soll_denn_dieses_fragezeichen.md",noteHTML:"",id:40,no:41},__clicksElements:[],__preloaded:!1}},{path:"42",name:"page-42",component:tP,meta:{title:"Mögliches Vorhandensein eines Werts",srcSequence:"./pages/option.md",slide:{raw:null,title:"Mögliches Vorhandensein eines Werts",level:2,content:`## Mögliches Vorhandensein eines Werts

#### oder: null muss weg.`,frontmatter:{title:"Mögliches Vorhandensein eines Werts",srcSequence:"./pages/option.md"},index:41,start:0,end:4,source:{filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/option.md",raw:`## Mögliches Vorhandensein eines Werts

#### oder: null muss weg.
`,title:"Mögliches Vorhandensein eines Werts",level:2,content:`## Mögliches Vorhandensein eines Werts

#### oder: null muss weg.`,frontmatter:{title:"Mögliches Vorhandensein eines Werts"},index:0,start:0,end:4},inline:{raw:`---
src: ./pages/option.md
---
`,content:"",frontmatter:{},index:20,start:98,end:102},filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/option.md",noteHTML:"",id:41,no:42},__clicksElements:[],__preloaded:!1}},{path:"43",name:"page-43",component:rP,meta:{srcSequence:"./pages/option.md",slide:{raw:`
\`\`\`csharp
// Enthält die Signatur die ganze Wahrheit?
public string Stringify<T>(T data)
{
    return null;
}
\`\`\`
`,content:"```csharp\n// Enthält die Signatur die ganze Wahrheit?\npublic string Stringify<T>(T data)\n{\n    return null;\n}\n```",frontmatter:{srcSequence:"./pages/option.md"},index:42,start:5,end:14,source:{filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/option.md",raw:`
\`\`\`csharp
// Enthält die Signatur die ganze Wahrheit?
public string Stringify<T>(T data)
{
    return null;
}
\`\`\`
`,content:"```csharp\n// Enthält die Signatur die ganze Wahrheit?\npublic string Stringify<T>(T data)\n{\n    return null;\n}\n```",frontmatter:{},index:1,start:5,end:14},filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/option.md",noteHTML:"",id:42,no:43},__clicksElements:[],__preloaded:!1}},{path:"44",name:"page-44",component:lP,meta:{srcSequence:"./pages/option.md",slide:{raw:`
\`\`\`csharp
// Sind Magic Values eine gute Idee?
public int Intify(string s)
{
    int result = -1;
    int.TryParse(s, out result);
    return result;
}
\`\`\`
`,content:`\`\`\`csharp
// Sind Magic Values eine gute Idee?
public int Intify(string s)
{
    int result = -1;
    int.TryParse(s, out result);
    return result;
}
\`\`\``,frontmatter:{srcSequence:"./pages/option.md"},index:43,start:15,end:26,source:{filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/option.md",raw:`
\`\`\`csharp
// Sind Magic Values eine gute Idee?
public int Intify(string s)
{
    int result = -1;
    int.TryParse(s, out result);
    return result;
}
\`\`\`
`,content:`\`\`\`csharp
// Sind Magic Values eine gute Idee?
public int Intify(string s)
{
    int result = -1;
    int.TryParse(s, out result);
    return result;
}
\`\`\``,frontmatter:{},index:2,start:15,end:26},filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/option.md",noteHTML:"",id:43,no:44},__clicksElements:[],__preloaded:!1}},{path:"45",name:"page-45",component:dP,meta:{srcSequence:"./pages/option.md",slide:{raw:`
Gemein!

\`\`\`csharp
public class Data
{
    public string Name;
}

public class Do
{
    public Data CreateData() => null;

    public string CreateAndUseData()
    {
        var data = CreateData();
        // kein null-Check -> ist dem Compiler egal
        return data.Name;
    }
}
\`\`\`
`,content:`Gemein!

\`\`\`csharp
public class Data
{
    public string Name;
}

public class Do
{
    public Data CreateData() => null;

    public string CreateAndUseData()
    {
        var data = CreateData();
        // kein null-Check -> ist dem Compiler egal
        return data.Name;
    }
}
\`\`\``,frontmatter:{srcSequence:"./pages/option.md"},index:44,start:27,end:49,source:{filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/option.md",raw:`
Gemein!

\`\`\`csharp
public class Data
{
    public string Name;
}

public class Do
{
    public Data CreateData() => null;

    public string CreateAndUseData()
    {
        var data = CreateData();
        // kein null-Check -> ist dem Compiler egal
        return data.Name;
    }
}
\`\`\`
`,content:`Gemein!

\`\`\`csharp
public class Data
{
    public string Name;
}

public class Do
{
    public Data CreateData() => null;

    public string CreateAndUseData()
    {
        var data = CreateData();
        // kein null-Check -> ist dem Compiler egal
        return data.Name;
    }
}
\`\`\``,frontmatter:{},index:3,start:27,end:49},filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/option.md",noteHTML:"",id:44,no:45},__clicksElements:[],__preloaded:!1}},{path:"46",name:"page-46",component:_P,meta:{srcSequence:"./pages/option.md",slide:{raw:`
## Option

\`\`\`fsharp
type Option<'T> = Some<'T> | None
\`\`\`

- entweder ein Wert ist da - dann ist er in "Some" eingepackt
- oder es ist kein Wert da, dann gibt es ein leeres "None"
- alternative Bezeichnungen: Optional, Maybe
`,title:"Option",level:2,content:`## Option

\`\`\`fsharp
type Option<'T> = Some<'T> | None
\`\`\`

- entweder ein Wert ist da - dann ist er in "Some" eingepackt
- oder es ist kein Wert da, dann gibt es ein leeres "None"
- alternative Bezeichnungen: Optional, Maybe`,frontmatter:{srcSequence:"./pages/option.md"},index:45,start:50,end:61,source:{filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/option.md",raw:`
## Option

\`\`\`fsharp
type Option<'T> = Some<'T> | None
\`\`\`

- entweder ein Wert ist da - dann ist er in "Some" eingepackt
- oder es ist kein Wert da, dann gibt es ein leeres "None"
- alternative Bezeichnungen: Optional, Maybe
`,title:"Option",level:2,content:`## Option

\`\`\`fsharp
type Option<'T> = Some<'T> | None
\`\`\`

- entweder ein Wert ist da - dann ist er in "Some" eingepackt
- oder es ist kein Wert da, dann gibt es ein leeres "None"
- alternative Bezeichnungen: Optional, Maybe`,frontmatter:{},index:4,start:50,end:61},filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/option.md",noteHTML:"",id:45,no:46},__clicksElements:[],__preloaded:!1}},{path:"47",name:"page-47",component:yP,meta:{srcSequence:"./pages/option.md",slide:{raw:`
## Mit Option

\`\`\`csharp
public Option<int> IntifyOption(string s)
{
    int result = -1;
    bool success = int.TryParse(s, out result);
    return success ? Some(result) : None;
}
\`\`\`
`,title:"Mit Option",level:2,content:`## Mit Option

\`\`\`csharp
public Option<int> IntifyOption(string s)
{
    int result = -1;
    bool success = int.TryParse(s, out result);
    return success ? Some(result) : None;
}
\`\`\``,frontmatter:{srcSequence:"./pages/option.md"},index:46,start:62,end:74,source:{filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/option.md",raw:`
## Mit Option

\`\`\`csharp
public Option<int> IntifyOption(string s)
{
    int result = -1;
    bool success = int.TryParse(s, out result);
    return success ? Some(result) : None;
}
\`\`\`
`,title:"Mit Option",level:2,content:`## Mit Option

\`\`\`csharp
public Option<int> IntifyOption(string s)
{
    int result = -1;
    bool success = int.TryParse(s, out result);
    return success ? Some(result) : None;
}
\`\`\``,frontmatter:{},index:5,start:62,end:74},filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/option.md",noteHTML:"",id:46,no:47},__clicksElements:[],__preloaded:!1}},{path:"48",name:"page-48",component:$P,meta:{srcSequence:"./pages/option.md",slide:{raw:`
### Wie komme ich an einen eingepackten Wert ran?

> Pattern matching allows you to match a value against some patterns to select a branch of the code.

\`\`\`csharp
public string Stringify<T>(Option<T> data)
{
    return data.Match(
        None: () => "",
        Some: (existingData) => existingData.ToString()
    );
}
\`\`\`
`,title:"Wie komme ich an einen eingepackten Wert ran?",level:3,content:`### Wie komme ich an einen eingepackten Wert ran?

> Pattern matching allows you to match a value against some patterns to select a branch of the code.

\`\`\`csharp
public string Stringify<T>(Option<T> data)
{
    return data.Match(
        None: () => "",
        Some: (existingData) => existingData.ToString()
    );
}
\`\`\``,frontmatter:{srcSequence:"./pages/option.md"},index:47,start:75,end:90,source:{filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/option.md",raw:`
### Wie komme ich an einen eingepackten Wert ran?

> Pattern matching allows you to match a value against some patterns to select a branch of the code.

\`\`\`csharp
public string Stringify<T>(Option<T> data)
{
    return data.Match(
        None: () => "",
        Some: (existingData) => existingData.ToString()
    );
}
\`\`\`
`,title:"Wie komme ich an einen eingepackten Wert ran?",level:3,content:`### Wie komme ich an einen eingepackten Wert ran?

> Pattern matching allows you to match a value against some patterns to select a branch of the code.

\`\`\`csharp
public string Stringify<T>(Option<T> data)
{
    return data.Match(
        None: () => "",
        Some: (existingData) => existingData.ToString()
    );
}
\`\`\``,frontmatter:{},index:6,start:75,end:90},filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/option.md",noteHTML:"",id:47,no:48},__clicksElements:[],__preloaded:!1}},{path:"49",name:"page-49",component:OP,meta:{srcSequence:"./pages/option.md",slide:{raw:`
### Vorteile

- Explizite Semantik: Wert ist da - oder eben nicht
- Auch für Nicht-Programmierer verständlich(er): "optional" vs. "nullable"
- Die Signatur von Match erzwingt eine Behandlung beider Fälle - nie wieder vergessene Null-Checks!
- Achtung: In C# bleibt das Problem, dass "Option" auch ein Objekt ist - und daher selbst null sein kann
`,title:"Vorteile",level:3,content:`### Vorteile

- Explizite Semantik: Wert ist da - oder eben nicht
- Auch für Nicht-Programmierer verständlich(er): "optional" vs. "nullable"
- Die Signatur von Match erzwingt eine Behandlung beider Fälle - nie wieder vergessene Null-Checks!
- Achtung: In C# bleibt das Problem, dass "Option" auch ein Objekt ist - und daher selbst null sein kann`,frontmatter:{srcSequence:"./pages/option.md"},index:48,start:91,end:99,source:{filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/option.md",raw:`
### Vorteile

- Explizite Semantik: Wert ist da - oder eben nicht
- Auch für Nicht-Programmierer verständlich(er): "optional" vs. "nullable"
- Die Signatur von Match erzwingt eine Behandlung beider Fälle - nie wieder vergessene Null-Checks!
- Achtung: In C# bleibt das Problem, dass "Option" auch ein Objekt ist - und daher selbst null sein kann
`,title:"Vorteile",level:3,content:`### Vorteile

- Explizite Semantik: Wert ist da - oder eben nicht
- Auch für Nicht-Programmierer verständlich(er): "optional" vs. "nullable"
- Die Signatur von Match erzwingt eine Behandlung beider Fälle - nie wieder vergessene Null-Checks!
- Achtung: In C# bleibt das Problem, dass "Option" auch ein Objekt ist - und daher selbst null sein kann`,frontmatter:{},index:7,start:91,end:99},filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/option.md",noteHTML:"",id:48,no:49},__clicksElements:[],__preloaded:!1}},{path:"50",name:"page-50",component:MP,meta:{srcSequence:"./pages/option.md",slide:{raw:`
In FP unterscheidet man die Art der Wrapper-Klassen (z.B. IEnumerable) anhand der Funktionen, die sie bereitstellen
`,content:"In FP unterscheidet man die Art der Wrapper-Klassen (z.B. IEnumerable) anhand der Funktionen, die sie bereitstellen",frontmatter:{srcSequence:"./pages/option.md"},index:49,start:100,end:103,source:{filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/option.md",raw:`
In FP unterscheidet man die Art der Wrapper-Klassen (z.B. IEnumerable) anhand der Funktionen, die sie bereitstellen
`,content:"In FP unterscheidet man die Art der Wrapper-Klassen (z.B. IEnumerable) anhand der Funktionen, die sie bereitstellen",frontmatter:{},index:8,start:100,end:103},filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/option.md",noteHTML:"",id:49,no:50},__clicksElements:[],__preloaded:!1}},{path:"51",name:"page-51",component:qP,meta:{title:"LaYumba",srcSequence:"./pages/layumba.md",slide:{raw:null,title:"LaYumba",level:3,content:`### LaYumba

![img](/images/book-csharp-fp-with-comment.png)

- NuGet Paket
- kann nicht alles
- Fokus: Didaktik (Ähnlichkeit mit F#, Haskell)
- "einfache" Variante von [language-ext](https://github.com/louthy/language-ext)`,frontmatter:{title:"LaYumba",srcSequence:"./pages/layumba.md"},index:50,start:0,end:9,source:{filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/layumba.md",raw:`### LaYumba

![img](/images/book-csharp-fp-with-comment.png)

- NuGet Paket
- kann nicht alles
- Fokus: Didaktik (Ähnlichkeit mit F#, Haskell)
- "einfache" Variante von [language-ext](https://github.com/louthy/language-ext)
`,title:"LaYumba",level:3,content:`### LaYumba

![img](/images/book-csharp-fp-with-comment.png)

- NuGet Paket
- kann nicht alles
- Fokus: Didaktik (Ähnlichkeit mit F#, Haskell)
- "einfache" Variante von [language-ext](https://github.com/louthy/language-ext)`,frontmatter:{title:"LaYumba"},index:0,start:0,end:9},inline:{raw:`---
src: ./pages/layumba.md
---
`,content:"",frontmatter:{},index:21,start:102,end:106},filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/layumba.md",noteHTML:"",id:50,no:51},__clicksElements:[],__preloaded:!1}},{path:"52",name:"page-52",component:WP,meta:{srcSequence:"./pages/layumba.md",slide:{raw:`
### language-ext

![img](/images/language-ext-screenshot-github-0.png)
`,title:"language-ext",level:3,content:`### language-ext

![img](/images/language-ext-screenshot-github-0.png)`,frontmatter:{srcSequence:"./pages/layumba.md"},index:51,start:10,end:15,source:{filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/layumba.md",raw:`
### language-ext

![img](/images/language-ext-screenshot-github-0.png)
`,title:"language-ext",level:3,content:`### language-ext

![img](/images/language-ext-screenshot-github-0.png)`,frontmatter:{},index:1,start:10,end:15},filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/layumba.md",noteHTML:"",id:51,no:52},__clicksElements:[],__preloaded:!1}},{path:"53",name:"page-53",component:ZP,meta:{srcSequence:"./pages/layumba.md",slide:{raw:`
### language-ext

![img](/images/language-ext-screenshot-github-1.png)
`,title:"language-ext",level:3,content:`### language-ext

![img](/images/language-ext-screenshot-github-1.png)`,frontmatter:{srcSequence:"./pages/layumba.md"},index:52,start:16,end:21,source:{filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/layumba.md",raw:`
### language-ext

![img](/images/language-ext-screenshot-github-1.png)
`,title:"language-ext",level:3,content:`### language-ext

![img](/images/language-ext-screenshot-github-1.png)`,frontmatter:{},index:2,start:16,end:21},filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/layumba.md",noteHTML:"",id:52,no:53},__clicksElements:[],__preloaded:!1}},{path:"54",name:"page-54",component:eT,meta:{srcSequence:"./pages/layumba.md",slide:{raw:`
### language-ext

![img](/images/language-ext-screenshot-github-2.png)
`,title:"language-ext",level:3,content:`### language-ext

![img](/images/language-ext-screenshot-github-2.png)`,frontmatter:{srcSequence:"./pages/layumba.md"},index:53,start:22,end:27,source:{filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/layumba.md",raw:`
### language-ext

![img](/images/language-ext-screenshot-github-2.png)
`,title:"language-ext",level:3,content:`### language-ext

![img](/images/language-ext-screenshot-github-2.png)`,frontmatter:{},index:3,start:22,end:27},filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/layumba.md",noteHTML:"",id:53,no:54},__clicksElements:[],__preloaded:!1}},{path:"55",name:"page-55",component:rT,meta:{srcSequence:"./pages/layumba.md",slide:{raw:`
### language-ext

![img](/images/language-ext-screenshot-github-3.png)
`,title:"language-ext",level:3,content:`### language-ext

![img](/images/language-ext-screenshot-github-3.png)`,frontmatter:{srcSequence:"./pages/layumba.md"},index:54,start:28,end:33,source:{filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/layumba.md",raw:`
### language-ext

![img](/images/language-ext-screenshot-github-3.png)
`,title:"language-ext",level:3,content:`### language-ext

![img](/images/language-ext-screenshot-github-3.png)`,frontmatter:{},index:4,start:28,end:33},filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/layumba.md",noteHTML:"",id:54,no:55},__clicksElements:[],__preloaded:!1}},{path:"56",name:"page-56",component:uT,meta:{srcSequence:"./pages/layumba.md",slide:{raw:`
### language-ext

![img](/images/language-ext-screenshot-github-4.png)
`,title:"language-ext",level:3,content:`### language-ext

![img](/images/language-ext-screenshot-github-4.png)`,frontmatter:{srcSequence:"./pages/layumba.md"},index:55,start:34,end:39,source:{filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/layumba.md",raw:`
### language-ext

![img](/images/language-ext-screenshot-github-4.png)
`,title:"language-ext",level:3,content:`### language-ext

![img](/images/language-ext-screenshot-github-4.png)`,frontmatter:{},index:5,start:34,end:39},filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/layumba.md",noteHTML:"",id:55,no:56},__clicksElements:[],__preloaded:!1}},{path:"57",name:"page-57",component:mT,meta:{srcSequence:"./pages/layumba.md",slide:{raw:`
### language-ext

![img](/images/language-ext-screenshot-github-5.png)
`,title:"language-ext",level:3,content:`### language-ext

![img](/images/language-ext-screenshot-github-5.png)`,frontmatter:{srcSequence:"./pages/layumba.md"},index:56,start:40,end:45,source:{filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/layumba.md",raw:`
### language-ext

![img](/images/language-ext-screenshot-github-5.png)
`,title:"language-ext",level:3,content:`### language-ext

![img](/images/language-ext-screenshot-github-5.png)`,frontmatter:{},index:6,start:40,end:45},filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/layumba.md",noteHTML:"",id:56,no:57},__clicksElements:[],__preloaded:!1}},{path:"58",name:"page-58",component:bT,meta:{title:"Neue Anforderung!",srcSequence:"./pages/anforderung_was_soll_denn_dieses_fragezeichen.md",slide:{raw:null,title:"Neue Anforderung!",level:2,content:`## Neue Anforderung!

- Es gibt zuviele NullReferenceExceptions. Die müssen wir loswerden!
- Und dann natürlich allen bestehenden Code entsprechend anpassen.`,frontmatter:{title:"Neue Anforderung!",srcSequence:"./pages/anforderung_was_soll_denn_dieses_fragezeichen.md"},index:57,start:0,end:5,source:{filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/anforderung_was_soll_denn_dieses_fragezeichen.md",raw:`## Neue Anforderung!

- Es gibt zuviele NullReferenceExceptions. Die müssen wir loswerden!
- Und dann natürlich allen bestehenden Code entsprechend anpassen.
`,title:"Neue Anforderung!",level:2,content:`## Neue Anforderung!

- Es gibt zuviele NullReferenceExceptions. Die müssen wir loswerden!
- Und dann natürlich allen bestehenden Code entsprechend anpassen.`,frontmatter:{title:"Neue Anforderung!"},index:0,start:0,end:5},inline:{raw:`---
src: ./pages/anforderung_was_soll_denn_dieses_fragezeichen.md
---
`,content:"",frontmatter:{},index:22,start:106,end:110},filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/anforderung_was_soll_denn_dieses_fragezeichen.md",noteHTML:"",id:57,no:58},__clicksElements:[],__preloaded:!1}},{path:"59",name:"page-59",component:wT,meta:{title:"Let's code",srcSequence:"./pages/letscode.md",slide:{raw:null,title:"Let's code",level:1,content:"# Let's code",frontmatter:{title:"Let's code",srcSequence:"./pages/letscode.md"},index:58,start:0,end:1,source:{filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/letscode.md",raw:"# Let's code",title:"Let's code",level:1,content:"# Let's code",frontmatter:{title:"Let's code"},index:0,start:0,end:1},inline:{raw:`---
src: ./pages/letscode.md
---
`,content:"",frontmatter:{},index:23,start:110,end:114},filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/letscode.md",noteHTML:"",id:58,no:59},__clicksElements:[],__preloaded:!1}},{path:"60",name:"page-60",component:$T,meta:{title:"Einführung in F# #",srcSequence:"./pages/fsharp.md",slide:{raw:null,title:"Einführung in F# #",level:1,content:`# Einführung in F# #

![img](/images/fsharp256.png)`,frontmatter:{title:"Einführung in F# #",srcSequence:"./pages/fsharp.md"},index:59,start:0,end:4,source:{filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/fsharp.md",raw:`# Einführung in F# #

![img](/images/fsharp256.png)
`,title:"Einführung in F# #",level:1,content:`# Einführung in F# #

![img](/images/fsharp256.png)`,frontmatter:{title:"Einführung in F# #"},index:0,start:0,end:4},inline:{raw:`---
src: ./pages/fsharp.md
---
`,content:"",frontmatter:{},index:24,start:114,end:118},filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/fsharp.md",noteHTML:"",id:59,no:60},__clicksElements:[],__preloaded:!1}},{path:"61",name:"page-61",component:AT,meta:{srcSequence:"./pages/fsharp.md",slide:{raw:`
## F# #

- Ursprünglich: Microsoft Forschungsprojekt
- Heute: Community-driven
- inspiriert von OCaml
- Multi-Paradigma
- Fokus auf funktionale Programmierung

<img
  class="absolute top-10 right-10 w-100"
  src="/images/fsharp256.png"
/>
`,title:"F# #",level:2,content:`## F# #

- Ursprünglich: Microsoft Forschungsprojekt
- Heute: Community-driven
- inspiriert von OCaml
- Multi-Paradigma
- Fokus auf funktionale Programmierung

<img
  class="absolute top-10 right-10 w-100"
  src="/images/fsharp256.png"
/>`,frontmatter:{srcSequence:"./pages/fsharp.md"},index:60,start:5,end:19,source:{filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/fsharp.md",raw:`
## F# #

- Ursprünglich: Microsoft Forschungsprojekt
- Heute: Community-driven
- inspiriert von OCaml
- Multi-Paradigma
- Fokus auf funktionale Programmierung

<img
  class="absolute top-10 right-10 w-100"
  src="/images/fsharp256.png"
/>
`,title:"F# #",level:2,content:`## F# #

- Ursprünglich: Microsoft Forschungsprojekt
- Heute: Community-driven
- inspiriert von OCaml
- Multi-Paradigma
- Fokus auf funktionale Programmierung

<img
  class="absolute top-10 right-10 w-100"
  src="/images/fsharp256.png"
/>`,frontmatter:{},index:1,start:5,end:19},filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/fsharp.md",noteHTML:"",id:60,no:61},__clicksElements:[],__preloaded:!1}},{path:"62",name:"page-62",component:DT,meta:{srcSequence:"./pages/fsharp.md",slide:{raw:`
## F# #

- erzwingt keine puren Funktionen, sondern erlaubt Seiteneffekte
- Statisch typisiert
- integriert ins .NET Ökosystem
- C# / VB.NET Interop

<img
  class="absolute top-10 right-10 w-100"
  src="/images/fsharp256.png"
/>
`,title:"F# #",level:2,content:`## F# #

- erzwingt keine puren Funktionen, sondern erlaubt Seiteneffekte
- Statisch typisiert
- integriert ins .NET Ökosystem
- C# / VB.NET Interop

<img
  class="absolute top-10 right-10 w-100"
  src="/images/fsharp256.png"
/>`,frontmatter:{srcSequence:"./pages/fsharp.md"},index:61,start:20,end:33,source:{filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/fsharp.md",raw:`
## F# #

- erzwingt keine puren Funktionen, sondern erlaubt Seiteneffekte
- Statisch typisiert
- integriert ins .NET Ökosystem
- C# / VB.NET Interop

<img
  class="absolute top-10 right-10 w-100"
  src="/images/fsharp256.png"
/>
`,title:"F# #",level:2,content:`## F# #

- erzwingt keine puren Funktionen, sondern erlaubt Seiteneffekte
- Statisch typisiert
- integriert ins .NET Ökosystem
- C# / VB.NET Interop

<img
  class="absolute top-10 right-10 w-100"
  src="/images/fsharp256.png"
/>`,frontmatter:{},index:2,start:20,end:33},filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/fsharp.md",noteHTML:"",id:61,no:62},__clicksElements:[],__preloaded:!1}},{path:"63",name:"page-63",component:BT,meta:{srcSequence:"./pages/fsharp.md",slide:{raw:`
## Besonderheiten

- Significant whitespace
- Reihenfolge der Definitionen in Datei wichtig
- Reihenfolge der Dateien im Projekt wichtig

<img
  class="absolute top-10 right-10 w-100"
  src="/images/fsharp256.png"
/>
`,title:"Besonderheiten",level:2,content:`## Besonderheiten

- Significant whitespace
- Reihenfolge der Definitionen in Datei wichtig
- Reihenfolge der Dateien im Projekt wichtig

<img
  class="absolute top-10 right-10 w-100"
  src="/images/fsharp256.png"
/>`,frontmatter:{srcSequence:"./pages/fsharp.md"},index:62,start:34,end:46,source:{filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/fsharp.md",raw:`
## Besonderheiten

- Significant whitespace
- Reihenfolge der Definitionen in Datei wichtig
- Reihenfolge der Dateien im Projekt wichtig

<img
  class="absolute top-10 right-10 w-100"
  src="/images/fsharp256.png"
/>
`,title:"Besonderheiten",level:2,content:`## Besonderheiten

- Significant whitespace
- Reihenfolge der Definitionen in Datei wichtig
- Reihenfolge der Dateien im Projekt wichtig

<img
  class="absolute top-10 right-10 w-100"
  src="/images/fsharp256.png"
/>`,frontmatter:{},index:3,start:34,end:46},filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/fsharp.md",noteHTML:"",id:62,no:63},__clicksElements:[],__preloaded:!1}},{path:"64",name:"page-64",component:HT,meta:{srcSequence:"./pages/fsharp.md",slide:{raw:`
## Immutability als Default

\`\`\`fsharp
// Achtung: = ist hier keine Zuweisung, sondern heißt 
// "linke und rechte Seite sind gleich und bleiben es auch immer"
let x = 3
let add a b = a + b
let m = if 3 > 0 then 7 else 42

// Mutability nur auf Wunsch - normalerweise unnötig
let mutable y = 3
y <- 42
\`\`\`
`,title:"Immutability als Default",level:2,content:`## Immutability als Default

\`\`\`fsharp
// Achtung: = ist hier keine Zuweisung, sondern heißt 
// "linke und rechte Seite sind gleich und bleiben es auch immer"
let x = 3
let add a b = a + b
let m = if 3 > 0 then 7 else 42

// Mutability nur auf Wunsch - normalerweise unnötig
let mutable y = 3
y <- 42
\`\`\``,frontmatter:{srcSequence:"./pages/fsharp.md"},index:63,start:47,end:62,source:{filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/fsharp.md",raw:`
## Immutability als Default

\`\`\`fsharp
// Achtung: = ist hier keine Zuweisung, sondern heißt 
// "linke und rechte Seite sind gleich und bleiben es auch immer"
let x = 3
let add a b = a + b
let m = if 3 > 0 then 7 else 42

// Mutability nur auf Wunsch - normalerweise unnötig
let mutable y = 3
y <- 42
\`\`\`
`,title:"Immutability als Default",level:2,content:`## Immutability als Default

\`\`\`fsharp
// Achtung: = ist hier keine Zuweisung, sondern heißt 
// "linke und rechte Seite sind gleich und bleiben es auch immer"
let x = 3
let add a b = a + b
let m = if 3 > 0 then 7 else 42

// Mutability nur auf Wunsch - normalerweise unnötig
let mutable y = 3
y <- 42
\`\`\``,frontmatter:{},index:4,start:47,end:62},filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/fsharp.md",noteHTML:"",id:63,no:64},__clicksElements:[],__preloaded:!1}},{path:"65",name:"page-65",component:ZT,meta:{srcSequence:"./pages/fsharp.md",slide:{raw:`
## Typ-Inferenz

\`\`\`fsharp
// Typen werden automatisch abgeleitet sofern möglich
let double a = a * 2 // int -> int

// Explizite Angaben möglich
let doubleExplicit (a: int) : int = a * 2
\`\`\`
`,title:"Typ-Inferenz",level:2,content:`## Typ-Inferenz

\`\`\`fsharp
// Typen werden automatisch abgeleitet sofern möglich
let double a = a * 2 // int -> int

// Explizite Angaben möglich
let doubleExplicit (a: int) : int = a * 2
\`\`\``,frontmatter:{srcSequence:"./pages/fsharp.md"},index:64,start:63,end:74,source:{filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/fsharp.md",raw:`
## Typ-Inferenz

\`\`\`fsharp
// Typen werden automatisch abgeleitet sofern möglich
let double a = a * 2 // int -> int

// Explizite Angaben möglich
let doubleExplicit (a: int) : int = a * 2
\`\`\`
`,title:"Typ-Inferenz",level:2,content:`## Typ-Inferenz

\`\`\`fsharp
// Typen werden automatisch abgeleitet sofern möglich
let double a = a * 2 // int -> int

// Explizite Angaben möglich
let doubleExplicit (a: int) : int = a * 2
\`\`\``,frontmatter:{},index:5,start:63,end:74},filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/fsharp.md",noteHTML:"",id:64,no:65},__clicksElements:[],__preloaded:!1}},{path:"66",name:"page-66",component:e6,meta:{srcSequence:"./pages/fsharp.md",slide:{raw:`
## Currying

> Currying ist die Umwandlung einer Funktion mit mehreren Argumenten in eine Funktion mit einem Argument, die wiederum eine Funktion zurückgibt mit dem Rest der Argumente.

\`\`\`fsharp
// int -> int -> int -> int
// eigentlich: int -> (int -> (int -> int))
let addThree a b c = a + b + c
\`\`\`
`,title:"Currying",level:2,content:`## Currying

> Currying ist die Umwandlung einer Funktion mit mehreren Argumenten in eine Funktion mit einem Argument, die wiederum eine Funktion zurückgibt mit dem Rest der Argumente.

\`\`\`fsharp
// int -> int -> int -> int
// eigentlich: int -> (int -> (int -> int))
let addThree a b c = a + b + c
\`\`\``,frontmatter:{srcSequence:"./pages/fsharp.md"},index:65,start:75,end:86,source:{filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/fsharp.md",raw:`
## Currying

> Currying ist die Umwandlung einer Funktion mit mehreren Argumenten in eine Funktion mit einem Argument, die wiederum eine Funktion zurückgibt mit dem Rest der Argumente.

\`\`\`fsharp
// int -> int -> int -> int
// eigentlich: int -> (int -> (int -> int))
let addThree a b c = a + b + c
\`\`\`
`,title:"Currying",level:2,content:`## Currying

> Currying ist die Umwandlung einer Funktion mit mehreren Argumenten in eine Funktion mit einem Argument, die wiederum eine Funktion zurückgibt mit dem Rest der Argumente.

\`\`\`fsharp
// int -> int -> int -> int
// eigentlich: int -> (int -> (int -> int))
let addThree a b c = a + b + c
\`\`\``,frontmatter:{},index:6,start:75,end:86},filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/fsharp.md",noteHTML:"",id:65,no:66},__clicksElements:[],__preloaded:!1}},{path:"67",name:"page-67",component:r6,meta:{srcSequence:"./pages/fsharp.md",slide:{raw:`
## Partial Application

- Eine Funktion mit mehreren Parametern bekommt nur einen Teil ihrer Argumente übergeben - der Rest bleibt offen und kann später ausgefüllt werden

\`\`\`fsharp
// Partial Application
let add a b = a + b // int -> (int -> (int))
let add2 = add 2 // (int -> (int))
let six = add2 4 // (int)
let ten = add2 8 // (int)
\`\`\`
`,title:"Partial Application",level:2,content:`## Partial Application

- Eine Funktion mit mehreren Parametern bekommt nur einen Teil ihrer Argumente übergeben - der Rest bleibt offen und kann später ausgefüllt werden

\`\`\`fsharp
// Partial Application
let add a b = a + b // int -> (int -> (int))
let add2 = add 2 // (int -> (int))
let six = add2 4 // (int)
let ten = add2 8 // (int)
\`\`\``,frontmatter:{srcSequence:"./pages/fsharp.md"},index:66,start:87,end:100,source:{filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/fsharp.md",raw:`
## Partial Application

- Eine Funktion mit mehreren Parametern bekommt nur einen Teil ihrer Argumente übergeben - der Rest bleibt offen und kann später ausgefüllt werden

\`\`\`fsharp
// Partial Application
let add a b = a + b // int -> (int -> (int))
let add2 = add 2 // (int -> (int))
let six = add2 4 // (int)
let ten = add2 8 // (int)
\`\`\`
`,title:"Partial Application",level:2,content:`## Partial Application

- Eine Funktion mit mehreren Parametern bekommt nur einen Teil ihrer Argumente übergeben - der Rest bleibt offen und kann später ausgefüllt werden

\`\`\`fsharp
// Partial Application
let add a b = a + b // int -> (int -> (int))
let add2 = add 2 // (int -> (int))
let six = add2 4 // (int)
let ten = add2 8 // (int)
\`\`\``,frontmatter:{},index:7,start:87,end:100},filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/fsharp.md",noteHTML:"",id:66,no:67},__clicksElements:[],__preloaded:!1}},{path:"68",name:"page-68",component:c6,meta:{srcSequence:"./pages/fsharp.md",slide:{raw:`
## Pipe-Operator

\`\`\`fsharp
// der letzte Parameter kann mit dem Ergebnis 
// der vorherigen Expression ausgefüllt werden
let double a = a * 2
4 |> double // ergibt 8
4 |> double |> double // ergibt 16
\`\`\`
`,title:"Pipe-Operator",level:2,content:`## Pipe-Operator

\`\`\`fsharp
// der letzte Parameter kann mit dem Ergebnis 
// der vorherigen Expression ausgefüllt werden
let double a = a * 2
4 |> double // ergibt 8
4 |> double |> double // ergibt 16
\`\`\``,frontmatter:{srcSequence:"./pages/fsharp.md"},index:67,start:101,end:112,source:{filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/fsharp.md",raw:`
## Pipe-Operator

\`\`\`fsharp
// der letzte Parameter kann mit dem Ergebnis 
// der vorherigen Expression ausgefüllt werden
let double a = a * 2
4 |> double // ergibt 8
4 |> double |> double // ergibt 16
\`\`\`
`,title:"Pipe-Operator",level:2,content:`## Pipe-Operator

\`\`\`fsharp
// der letzte Parameter kann mit dem Ergebnis 
// der vorherigen Expression ausgefüllt werden
let double a = a * 2
4 |> double // ergibt 8
4 |> double |> double // ergibt 16
\`\`\``,frontmatter:{},index:8,start:101,end:112},filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/fsharp.md",noteHTML:"",id:67,no:68},__clicksElements:[],__preloaded:!1}},{path:"69",name:"page-69",component:f6,meta:{srcSequence:"./pages/fsharp.md",slide:{raw:`
## Discriminated Unions

\`\`\`fsharp
// Discriminated Unions ("Tagged Union", "Sum Type", "Choice Type")
type Vehicle = Bike | Car | Bus

// Pattern Matching zur Behandlung der verschiedenen Fälle
let vehicle = Bike
let laneText = 
  match vehicle with
  | Bike -> "Use the bike lane"
  | Car -> "Use the car driving lane"
  | Bus -> "The bus uses its own lane"

\`\`\`
`,title:"Discriminated Unions",level:2,content:`## Discriminated Unions

\`\`\`fsharp
// Discriminated Unions ("Tagged Union", "Sum Type", "Choice Type")
type Vehicle = Bike | Car | Bus

// Pattern Matching zur Behandlung der verschiedenen Fälle
let vehicle = Bike
let laneText = 
  match vehicle with
  | Bike -> "Use the bike lane"
  | Car -> "Use the car driving lane"
  | Bus -> "The bus uses its own lane"

\`\`\``,frontmatter:{srcSequence:"./pages/fsharp.md"},index:68,start:113,end:130,source:{filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/fsharp.md",raw:`
## Discriminated Unions

\`\`\`fsharp
// Discriminated Unions ("Tagged Union", "Sum Type", "Choice Type")
type Vehicle = Bike | Car | Bus

// Pattern Matching zur Behandlung der verschiedenen Fälle
let vehicle = Bike
let laneText = 
  match vehicle with
  | Bike -> "Use the bike lane"
  | Car -> "Use the car driving lane"
  | Bus -> "The bus uses its own lane"

\`\`\`
`,title:"Discriminated Unions",level:2,content:`## Discriminated Unions

\`\`\`fsharp
// Discriminated Unions ("Tagged Union", "Sum Type", "Choice Type")
type Vehicle = Bike | Car | Bus

// Pattern Matching zur Behandlung der verschiedenen Fälle
let vehicle = Bike
let laneText = 
  match vehicle with
  | Bike -> "Use the bike lane"
  | Car -> "Use the car driving lane"
  | Bus -> "The bus uses its own lane"

\`\`\``,frontmatter:{},index:9,start:113,end:130},filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/fsharp.md",noteHTML:"",id:68,no:69},__clicksElements:[],__preloaded:!1}},{path:"70",name:"page-70",component:_6,meta:{srcSequence:"./pages/fsharp.md",slide:{raw:`
## Discriminated Unions mit Werten

\`\`\`fsharp
// auch mit unterschiedlichen(!) Daten an jedem Fall möglich
type Shape =
    | Circle of float
    | Rectangle of float * float

let c = Circle 42.42

match c with
| Circle radius -> radius * radius * System.Math.PI
| Rectangle(width, height) -> width * height
\`\`\`
`,title:"Discriminated Unions mit Werten",level:2,content:`## Discriminated Unions mit Werten

\`\`\`fsharp
// auch mit unterschiedlichen(!) Daten an jedem Fall möglich
type Shape =
    | Circle of float
    | Rectangle of float * float

let c = Circle 42.42

match c with
| Circle radius -> radius * radius * System.Math.PI
| Rectangle(width, height) -> width * height
\`\`\``,frontmatter:{srcSequence:"./pages/fsharp.md"},index:69,start:131,end:147,source:{filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/fsharp.md",raw:`
## Discriminated Unions mit Werten

\`\`\`fsharp
// auch mit unterschiedlichen(!) Daten an jedem Fall möglich
type Shape =
    | Circle of float
    | Rectangle of float * float

let c = Circle 42.42

match c with
| Circle radius -> radius * radius * System.Math.PI
| Rectangle(width, height) -> width * height
\`\`\`
`,title:"Discriminated Unions mit Werten",level:2,content:`## Discriminated Unions mit Werten

\`\`\`fsharp
// auch mit unterschiedlichen(!) Daten an jedem Fall möglich
type Shape =
    | Circle of float
    | Rectangle of float * float

let c = Circle 42.42

match c with
| Circle radius -> radius * radius * System.Math.PI
| Rectangle(width, height) -> width * height
\`\`\``,frontmatter:{},index:10,start:131,end:147},filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/fsharp.md",noteHTML:"",id:69,no:70},__clicksElements:[],__preloaded:!1}},{path:"71",name:"page-71",component:y6,meta:{srcSequence:"./pages/fsharp.md",slide:{raw:`
## Record Types

\`\`\`fsharp
// Record Type
type ShoppingCart = {
    products: Product list
    total: float
    createdAt: System.DateTime
}

// Typ muss nur angegeben werden wenn er nicht eindeutig ist
let shoppingCart = {
    products = []
    total = 42.42
    createdAt = System.DateTime.Now
}
\`\`\`
`,title:"Record Types",level:2,content:`## Record Types

\`\`\`fsharp
// Record Type
type ShoppingCart = {
    products: Product list
    total: float
    createdAt: System.DateTime
}

// Typ muss nur angegeben werden wenn er nicht eindeutig ist
let shoppingCart = {
    products = []
    total = 42.42
    createdAt = System.DateTime.Now
}
\`\`\``,frontmatter:{srcSequence:"./pages/fsharp.md"},index:70,start:148,end:167,source:{filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/fsharp.md",raw:`
## Record Types

\`\`\`fsharp
// Record Type
type ShoppingCart = {
    products: Product list
    total: float
    createdAt: System.DateTime
}

// Typ muss nur angegeben werden wenn er nicht eindeutig ist
let shoppingCart = {
    products = []
    total = 42.42
    createdAt = System.DateTime.Now
}
\`\`\`
`,title:"Record Types",level:2,content:`## Record Types

\`\`\`fsharp
// Record Type
type ShoppingCart = {
    products: Product list
    total: float
    createdAt: System.DateTime
}

// Typ muss nur angegeben werden wenn er nicht eindeutig ist
let shoppingCart = {
    products = []
    total = 42.42
    createdAt = System.DateTime.Now
}
\`\`\``,frontmatter:{},index:11,start:148,end:167},filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/fsharp.md",noteHTML:"",id:70,no:71},__clicksElements:[],__preloaded:!1}},{path:"72",name:"page-72",component:$6,meta:{srcSequence:"./pages/fsharp.md",slide:{raw:`
## ...Also known as...

- Discriminated Union
  - OR-Type
  - Sum-Type: Der Zustand ergibt sich aus der Summe der Auswahlmöglichkeiten (*)
- Record Type
  - AND-Type
  - Product-Type: Der Zustand ergibt sich aus dem kartesischen Produkt aller Möglichkeiten jedes Feldes (*)

(*) Algebraic Data Types
`,title:"...Also known as...",level:2,content:`## ...Also known as...

- Discriminated Union
  - OR-Type
  - Sum-Type: Der Zustand ergibt sich aus der Summe der Auswahlmöglichkeiten (*)
- Record Type
  - AND-Type
  - Product-Type: Der Zustand ergibt sich aus dem kartesischen Produkt aller Möglichkeiten jedes Feldes (*)

(*) Algebraic Data Types`,frontmatter:{srcSequence:"./pages/fsharp.md"},index:71,start:168,end:180,source:{filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/fsharp.md",raw:`
## ...Also known as...

- Discriminated Union
  - OR-Type
  - Sum-Type: Der Zustand ergibt sich aus der Summe der Auswahlmöglichkeiten (*)
- Record Type
  - AND-Type
  - Product-Type: Der Zustand ergibt sich aus dem kartesischen Produkt aller Möglichkeiten jedes Feldes (*)

(*) Algebraic Data Types
`,title:"...Also known as...",level:2,content:`## ...Also known as...

- Discriminated Union
  - OR-Type
  - Sum-Type: Der Zustand ergibt sich aus der Summe der Auswahlmöglichkeiten (*)
- Record Type
  - AND-Type
  - Product-Type: Der Zustand ergibt sich aus dem kartesischen Produkt aller Möglichkeiten jedes Feldes (*)

(*) Algebraic Data Types`,frontmatter:{},index:12,start:168,end:180},filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/fsharp.md",noteHTML:"",id:71,no:72},__clicksElements:[],__preloaded:!1}},{path:"73",name:"page-73",component:F6,meta:{srcSequence:"./pages/fsharp.md",slide:{raw:"\n### Algebraic Data Types: Sum Type\n\n```fsharp\ntype Vehicle = Bike | Car | Bus\n```\n\nAlle möglichen Zustaende von `Vehicle` sind: `Bike`, `Car`, oder `Bus`. \n\nDies entspricht der **Summe** der Auswahlmöglichkeiten.\n",title:"Algebraic Data Types: Sum Type",level:3,content:"### Algebraic Data Types: Sum Type\n\n```fsharp\ntype Vehicle = Bike | Car | Bus\n```\n\nAlle möglichen Zustaende von `Vehicle` sind: `Bike`, `Car`, oder `Bus`. \n\nDies entspricht der **Summe** der Auswahlmöglichkeiten.",frontmatter:{srcSequence:"./pages/fsharp.md"},index:72,start:181,end:192,source:{filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/fsharp.md",raw:"\n### Algebraic Data Types: Sum Type\n\n```fsharp\ntype Vehicle = Bike | Car | Bus\n```\n\nAlle möglichen Zustaende von `Vehicle` sind: `Bike`, `Car`, oder `Bus`. \n\nDies entspricht der **Summe** der Auswahlmöglichkeiten.\n",title:"Algebraic Data Types: Sum Type",level:3,content:"### Algebraic Data Types: Sum Type\n\n```fsharp\ntype Vehicle = Bike | Car | Bus\n```\n\nAlle möglichen Zustaende von `Vehicle` sind: `Bike`, `Car`, oder `Bus`. \n\nDies entspricht der **Summe** der Auswahlmöglichkeiten.",frontmatter:{},index:13,start:181,end:192},filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/fsharp.md",noteHTML:"",id:72,no:73},__clicksElements:[],__preloaded:!1}},{path:"74",name:"page-74",component:q6,meta:{srcSequence:"./pages/fsharp.md",slide:{raw:"\n### Algebraic Data Types: Product Type\n\n```fsharp\ntype TruthTable {\n  Wert1: bool\n  Wert2: bool\n}\n```\n\nAlle möglichen Zustände von `TruthTable` sind:\n\n- `true`, `false`\n- `true`, `true`\n- `false`, `false`\n- `false`, `true`\n\nDiese Menge nennt man kartesisches **Produkt**.\n",title:"Algebraic Data Types: Product Type",level:3,content:"### Algebraic Data Types: Product Type\n\n```fsharp\ntype TruthTable {\n  Wert1: bool\n  Wert2: bool\n}\n```\n\nAlle möglichen Zustände von `TruthTable` sind:\n\n- `true`, `false`\n- `true`, `true`\n- `false`, `false`\n- `false`, `true`\n\nDiese Menge nennt man kartesisches **Produkt**.",frontmatter:{srcSequence:"./pages/fsharp.md"},index:73,start:193,end:212,source:{filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/fsharp.md",raw:"\n### Algebraic Data Types: Product Type\n\n```fsharp\ntype TruthTable {\n  Wert1: bool\n  Wert2: bool\n}\n```\n\nAlle möglichen Zustände von `TruthTable` sind:\n\n- `true`, `false`\n- `true`, `true`\n- `false`, `false`\n- `false`, `true`\n\nDiese Menge nennt man kartesisches **Produkt**.\n",title:"Algebraic Data Types: Product Type",level:3,content:"### Algebraic Data Types: Product Type\n\n```fsharp\ntype TruthTable {\n  Wert1: bool\n  Wert2: bool\n}\n```\n\nAlle möglichen Zustände von `TruthTable` sind:\n\n- `true`, `false`\n- `true`, `true`\n- `false`, `false`\n- `false`, `true`\n\nDiese Menge nennt man kartesisches **Produkt**.",frontmatter:{},index:14,start:193,end:212},filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/fsharp.md",noteHTML:"",id:73,no:74},__clicksElements:[],__preloaded:!1}},{path:"75",name:"page-75",component:z6,meta:{srcSequence:"./pages/fsharp.md",slide:{raw:`
## Record Types

- Immutable by default
- Unmöglich einen ungültigen Record zu erzeugen
- Structural Equality
- Hint: C# Value Objects out of the box
- ✨ seit C# 9: \`records\`
`,title:"Record Types",level:2,content:`## Record Types

- Immutable by default
- Unmöglich einen ungültigen Record zu erzeugen
- Structural Equality
- Hint: C# Value Objects out of the box
- ✨ seit C# 9: \`records\``,frontmatter:{srcSequence:"./pages/fsharp.md"},index:74,start:213,end:222,source:{filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/fsharp.md",raw:`
## Record Types

- Immutable by default
- Unmöglich einen ungültigen Record zu erzeugen
- Structural Equality
- Hint: C# Value Objects out of the box
- ✨ seit C# 9: \`records\`
`,title:"Record Types",level:2,content:`## Record Types

- Immutable by default
- Unmöglich einen ungültigen Record zu erzeugen
- Structural Equality
- Hint: C# Value Objects out of the box
- ✨ seit C# 9: \`records\``,frontmatter:{},index:15,start:213,end:222},filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/fsharp.md",noteHTML:"",id:74,no:75},__clicksElements:[],__preloaded:!1}},{path:"76",name:"page-76",component:K6,meta:{srcSequence:"./pages/fsharp.md",slide:{raw:`
## Structural Equality

\`\`\`fsharp
// Structural Equality
type Thing = {content: string; id: int}
let thing1 = {content = "abc"; id = 15}
let thing2 = {content = "abc"; id = 15}
let equal = (thing1 = thing2) // true
\`\`\`

- Record Types mit Structural Equality sind ideal, um sehr kompakt "Value Objects" ausdrücken zu können
`,title:"Structural Equality",level:2,content:`## Structural Equality

\`\`\`fsharp
// Structural Equality
type Thing = {content: string; id: int}
let thing1 = {content = "abc"; id = 15}
let thing2 = {content = "abc"; id = 15}
let equal = (thing1 = thing2) // true
\`\`\`

- Record Types mit Structural Equality sind ideal, um sehr kompakt "Value Objects" ausdrücken zu können`,frontmatter:{srcSequence:"./pages/fsharp.md"},index:75,start:223,end:236,source:{filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/fsharp.md",raw:`
## Structural Equality

\`\`\`fsharp
// Structural Equality
type Thing = {content: string; id: int}
let thing1 = {content = "abc"; id = 15}
let thing2 = {content = "abc"; id = 15}
let equal = (thing1 = thing2) // true
\`\`\`

- Record Types mit Structural Equality sind ideal, um sehr kompakt "Value Objects" ausdrücken zu können
`,title:"Structural Equality",level:2,content:`## Structural Equality

\`\`\`fsharp
// Structural Equality
type Thing = {content: string; id: int}
let thing1 = {content = "abc"; id = 15}
let thing2 = {content = "abc"; id = 15}
let equal = (thing1 = thing2) // true
\`\`\`

- Record Types mit Structural Equality sind ideal, um sehr kompakt "Value Objects" ausdrücken zu können`,frontmatter:{},index:16,start:223,end:236},filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/fsharp.md",noteHTML:"",id:75,no:76},__clicksElements:[],__preloaded:!1}},{path:"77",name:"page-77",component:X6,meta:{srcSequence:"./pages/fsharp.md",slide:{raw:`
## Structural Equality vs. DDD Aggregates

- Möchte man die Standard-Equality nicht, ist es best practice, Equality und Comparison zu verbieten
- dann muss explizit auf eine Eigenschaft verglichen werden (z.B. die Id)

\`\`\`fsharp
[<NoEquality; NoComparison>]
type NonEquatableNonComparable = {
    Id: int
}
\`\`\`
`,title:"Structural Equality vs. DDD Aggregates",level:2,content:`## Structural Equality vs. DDD Aggregates

- Möchte man die Standard-Equality nicht, ist es best practice, Equality und Comparison zu verbieten
- dann muss explizit auf eine Eigenschaft verglichen werden (z.B. die Id)

\`\`\`fsharp
[<NoEquality; NoComparison>]
type NonEquatableNonComparable = {
    Id: int
}
\`\`\``,frontmatter:{srcSequence:"./pages/fsharp.md"},index:76,start:237,end:250,source:{filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/fsharp.md",raw:`
## Structural Equality vs. DDD Aggregates

- Möchte man die Standard-Equality nicht, ist es best practice, Equality und Comparison zu verbieten
- dann muss explizit auf eine Eigenschaft verglichen werden (z.B. die Id)

\`\`\`fsharp
[<NoEquality; NoComparison>]
type NonEquatableNonComparable = {
    Id: int
}
\`\`\`
`,title:"Structural Equality vs. DDD Aggregates",level:2,content:`## Structural Equality vs. DDD Aggregates

- Möchte man die Standard-Equality nicht, ist es best practice, Equality und Comparison zu verbieten
- dann muss explizit auf eine Eigenschaft verglichen werden (z.B. die Id)

\`\`\`fsharp
[<NoEquality; NoComparison>]
type NonEquatableNonComparable = {
    Id: int
}
\`\`\``,frontmatter:{},index:17,start:237,end:250},filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/fsharp.md",noteHTML:"",id:76,no:77},__clicksElements:[],__preloaded:!1}},{path:"78",name:"page-78",component:oC,meta:{title:"C# 9 and greater...",srcSequence:"./pages/csharp9.md",slide:{raw:null,title:"C# 9 and greater...",level:3,content:`### C# 9 and greater...

- (✅) record types
- 💥 discriminated unions
- (✅) pattern matching
- (✅) immutability / non-nullability

![/images/tweet-don-syme-fsharp-csharp.png](/images/tweet-don-syme-fsharp-csharp.png)

https://twitter.com/dsymetweets/status/1294280620823240706`,frontmatter:{title:"C# 9 and greater...",srcSequence:"./pages/csharp9.md"},index:77,start:0,end:11,source:{filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/csharp9.md",raw:`### C# 9 and greater...

- (✅) record types
- 💥 discriminated unions
- (✅) pattern matching
- (✅) immutability / non-nullability

![/images/tweet-don-syme-fsharp-csharp.png](/images/tweet-don-syme-fsharp-csharp.png)

https://twitter.com/dsymetweets/status/1294280620823240706
`,title:"C# 9 and greater...",level:3,content:`### C# 9 and greater...

- (✅) record types
- 💥 discriminated unions
- (✅) pattern matching
- (✅) immutability / non-nullability

![/images/tweet-don-syme-fsharp-csharp.png](/images/tweet-don-syme-fsharp-csharp.png)

https://twitter.com/dsymetweets/status/1294280620823240706`,frontmatter:{title:"C# 9 and greater..."},index:0,start:0,end:11},inline:{raw:`---
src: ./pages/csharp9.md
---
`,content:"",frontmatter:{},index:25,start:118,end:122},filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/csharp9.md",noteHTML:"",id:77,no:78},__clicksElements:[],__preloaded:!1}},{path:"79",name:"page-79",component:uC,meta:{title:"Neue Anforderung!",srcSequence:"./pages/anforderung_spitzname_normalisieren.md",slide:{raw:null,title:"Neue Anforderung!",level:1,content:`## Neue Anforderung!

- Es wird eine Menge von Personen verarbeitet
- Der Spitzname jedes Eintrags soll zu Großbuchstaben umgewandelt werden - wenn er vorhanden ist.
- Danach wird die Länge jedes Spitznamens ermittelt - wenn er vorhanden ist 
- Dann wird die längste Länge ermittelt und zurückgegeben - fehlende Spitznamen werden als 0 gewertet`,frontmatter:{title:"Neue Anforderung!",srcSequence:"./pages/anforderung_spitzname_normalisieren.md"},index:78,start:0,end:12,source:{filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/anforderung_spitzname_normalisieren.md",raw:`---
title: Neue Anforderung!
---

## Neue Anforderung!

- Es wird eine Menge von Personen verarbeitet
- Der Spitzname jedes Eintrags soll zu Großbuchstaben umgewandelt werden - wenn er vorhanden ist.
- Danach wird die Länge jedes Spitznamens ermittelt - wenn er vorhanden ist 
- Dann wird die längste Länge ermittelt und zurückgegeben - fehlende Spitznamen werden als 0 gewertet

`,title:"Neue Anforderung!",level:1,content:`## Neue Anforderung!

- Es wird eine Menge von Personen verarbeitet
- Der Spitzname jedes Eintrags soll zu Großbuchstaben umgewandelt werden - wenn er vorhanden ist.
- Danach wird die Länge jedes Spitznamens ermittelt - wenn er vorhanden ist 
- Dann wird die längste Länge ermittelt und zurückgegeben - fehlende Spitznamen werden als 0 gewertet`,frontmatter:{title:"Neue Anforderung!"},index:0,start:0,end:12},inline:{raw:`---
src: ./pages/anforderung_spitzname_normalisieren.md
---
`,content:"",frontmatter:{},index:26,start:122,end:126},filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/anforderung_spitzname_normalisieren.md",noteHTML:"",id:78,no:79},__clicksElements:[],__preloaded:!1}},{path:"80",name:"page-80",component:hC,meta:{title:"Kleine Funktionen zu größeren verbinden",srcSequence:"./pages/funktor.md",slide:{raw:null,title:"Kleine Funktionen zu größeren verbinden",level:2,content:`## Kleine Funktionen zu größeren verbinden

- Gängige Vorgehensweise: Kleine Funktionen werden zu immer größeren Funktionalitäten zusammengesteckt
- Problem: Nicht alle Funktionen passen gut zusammen`,frontmatter:{title:"Kleine Funktionen zu größeren verbinden",srcSequence:"./pages/funktor.md"},index:79,start:0,end:5,source:{filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/funktor.md",raw:`## Kleine Funktionen zu größeren verbinden

- Gängige Vorgehensweise: Kleine Funktionen werden zu immer größeren Funktionalitäten zusammengesteckt
- Problem: Nicht alle Funktionen passen gut zusammen
`,title:"Kleine Funktionen zu größeren verbinden",level:2,content:`## Kleine Funktionen zu größeren verbinden

- Gängige Vorgehensweise: Kleine Funktionen werden zu immer größeren Funktionalitäten zusammengesteckt
- Problem: Nicht alle Funktionen passen gut zusammen`,frontmatter:{title:"Kleine Funktionen zu größeren verbinden"},index:0,start:0,end:5},inline:{raw:`---
src: ./pages/funktor.md
---
`,content:"",frontmatter:{},index:27,start:126,end:130},filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/funktor.md",noteHTML:"",id:79,no:80},__clicksElements:[],__preloaded:!1}},{path:"81",name:"page-81",component:kC,meta:{srcSequence:"./pages/funktor.md",slide:{raw:`
### Problem: Wert in Container, Funktion kann nichts damit anfangen

\`\`\`fsharp
// F#
module X

let toUpper (s: string) = s.ToUpper()

let stringToOption s =
    if String.IsNullOrWhiteSpace s then
        None
    else
        Some s

let nonEmptyStringToUpper s =
    let nonEmpty = stringToOption s
    // passt nicht: "string" erwartet, aber "string option" bekommen
    let nonEmptyUpper = toUpper nonEmpty
\`\`\`
`,title:"Problem: Wert in Container, Funktion kann nichts damit anfangen",level:3,content:`### Problem: Wert in Container, Funktion kann nichts damit anfangen

\`\`\`fsharp
// F#
module X

let toUpper (s: string) = s.ToUpper()

let stringToOption s =
    if String.IsNullOrWhiteSpace s then
        None
    else
        Some s

let nonEmptyStringToUpper s =
    let nonEmpty = stringToOption s
    // passt nicht: "string" erwartet, aber "string option" bekommen
    let nonEmptyUpper = toUpper nonEmpty
\`\`\``,frontmatter:{srcSequence:"./pages/funktor.md"},index:80,start:6,end:27,source:{filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/funktor.md",raw:`
### Problem: Wert in Container, Funktion kann nichts damit anfangen

\`\`\`fsharp
// F#
module X

let toUpper (s: string) = s.ToUpper()

let stringToOption s =
    if String.IsNullOrWhiteSpace s then
        None
    else
        Some s

let nonEmptyStringToUpper s =
    let nonEmpty = stringToOption s
    // passt nicht: "string" erwartet, aber "string option" bekommen
    let nonEmptyUpper = toUpper nonEmpty
\`\`\`
`,title:"Problem: Wert in Container, Funktion kann nichts damit anfangen",level:3,content:`### Problem: Wert in Container, Funktion kann nichts damit anfangen

\`\`\`fsharp
// F#
module X

let toUpper (s: string) = s.ToUpper()

let stringToOption s =
    if String.IsNullOrWhiteSpace s then
        None
    else
        Some s

let nonEmptyStringToUpper s =
    let nonEmpty = stringToOption s
    // passt nicht: "string" erwartet, aber "string option" bekommen
    let nonEmptyUpper = toUpper nonEmpty
\`\`\``,frontmatter:{},index:1,start:6,end:27},filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/funktor.md",noteHTML:"",id:80,no:81},__clicksElements:[],__preloaded:!1}},{path:"82",name:"page-82",component:yC,meta:{srcSequence:"./pages/funktor.md",slide:{raw:`
\`\`\`csharp
// C#
using LaYumba.Functional;
using static LaYumba.Functional.F;

static class X
{
  string ToUpper(string s) => s.ToUpper();

  Option<string> StringToOption(string s)
    => string.IsNullOrEmpty(s) ? None : Some(s)

  NonEmptyStringToUpper(string s)
  {
    var nonEmpty = StringToOption(s);
    // passt nicht: "string" erwartet, aber "string option" bekommen
    return ToUpper(s);
  }
}
\`\`\`
`,content:`\`\`\`csharp
// C#
using LaYumba.Functional;
using static LaYumba.Functional.F;

static class X
{
  string ToUpper(string s) => s.ToUpper();

  Option<string> StringToOption(string s)
    => string.IsNullOrEmpty(s) ? None : Some(s)

  NonEmptyStringToUpper(string s)
  {
    var nonEmpty = StringToOption(s);
    // passt nicht: "string" erwartet, aber "string option" bekommen
    return ToUpper(s);
  }
}
\`\`\``,frontmatter:{srcSequence:"./pages/funktor.md"},index:81,start:28,end:50,source:{filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/funktor.md",raw:`
\`\`\`csharp
// C#
using LaYumba.Functional;
using static LaYumba.Functional.F;

static class X
{
  string ToUpper(string s) => s.ToUpper();

  Option<string> StringToOption(string s)
    => string.IsNullOrEmpty(s) ? None : Some(s)

  NonEmptyStringToUpper(string s)
  {
    var nonEmpty = StringToOption(s);
    // passt nicht: "string" erwartet, aber "string option" bekommen
    return ToUpper(s);
  }
}
\`\`\`
`,content:`\`\`\`csharp
// C#
using LaYumba.Functional;
using static LaYumba.Functional.F;

static class X
{
  string ToUpper(string s) => s.ToUpper();

  Option<string> StringToOption(string s)
    => string.IsNullOrEmpty(s) ? None : Some(s)

  NonEmptyStringToUpper(string s)
  {
    var nonEmpty = StringToOption(s);
    // passt nicht: "string" erwartet, aber "string option" bekommen
    return ToUpper(s);
  }
}
\`\`\``,frontmatter:{},index:2,start:28,end:50},filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/funktor.md",noteHTML:"",id:81,no:82},__clicksElements:[],__preloaded:!1}},{path:"83",name:"page-83",component:$C,meta:{srcSequence:"./pages/funktor.md",slide:{raw:`
### Funktor ("Mappable")

![img](/images/Funktor_1.png)
`,title:'Funktor ("Mappable")',level:3,content:`### Funktor ("Mappable")

![img](/images/Funktor_1.png)`,frontmatter:{srcSequence:"./pages/funktor.md"},index:82,start:51,end:56,source:{filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/funktor.md",raw:`
### Funktor ("Mappable")

![img](/images/Funktor_1.png)
`,title:'Funktor ("Mappable")',level:3,content:`### Funktor ("Mappable")

![img](/images/Funktor_1.png)`,frontmatter:{},index:3,start:51,end:56},filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/funktor.md",noteHTML:"",id:82,no:83},__clicksElements:[],__preloaded:!1}},{path:"84",name:"page-84",component:AC,meta:{srcSequence:"./pages/funktor.md",slide:{raw:`
### Funktor ("Mappable")

- Container mit "map" Funktion (die bestimmten Regeln folgt): "Mappable"
- Bezeichnung in der FP-Welt: **Funktor**

\`\`\`fsharp
  map: (a -> b) -> F a -> F b
\`\`\`
- Andere Bezeichnungen für "map": fmap (z.B. in Haskell), Select (LINQ), &lt;$&gt;, &lt;!&gt;
`,title:'Funktor ("Mappable")',level:3,content:`### Funktor ("Mappable")

- Container mit "map" Funktion (die bestimmten Regeln folgt): "Mappable"
- Bezeichnung in der FP-Welt: **Funktor**

\`\`\`fsharp
  map: (a -> b) -> F a -> F b
\`\`\`
- Andere Bezeichnungen für "map": fmap (z.B. in Haskell), Select (LINQ), &lt;$&gt;, &lt;!&gt;`,frontmatter:{srcSequence:"./pages/funktor.md"},index:83,start:57,end:68,source:{filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/funktor.md",raw:`
### Funktor ("Mappable")

- Container mit "map" Funktion (die bestimmten Regeln folgt): "Mappable"
- Bezeichnung in der FP-Welt: **Funktor**

\`\`\`fsharp
  map: (a -> b) -> F a -> F b
\`\`\`
- Andere Bezeichnungen für "map": fmap (z.B. in Haskell), Select (LINQ), &lt;$&gt;, &lt;!&gt;
`,title:'Funktor ("Mappable")',level:3,content:`### Funktor ("Mappable")

- Container mit "map" Funktion (die bestimmten Regeln folgt): "Mappable"
- Bezeichnung in der FP-Welt: **Funktor**

\`\`\`fsharp
  map: (a -> b) -> F a -> F b
\`\`\`
- Andere Bezeichnungen für "map": fmap (z.B. in Haskell), Select (LINQ), &lt;$&gt;, &lt;!&gt;`,frontmatter:{},index:4,start:57,end:68},filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/funktor.md",noteHTML:"",id:83,no:84},__clicksElements:[],__preloaded:!1}},{path:"85",name:"page-85",component:IC,meta:{srcSequence:"./pages/funktor.md",slide:{raw:`
### Wert in Container, Funktion passt nicht

\`\`\`fsharp
let toUpper (s: string) = s.ToUpper()

let stringToOption s =
    if String.IsNullOrWhiteSpace s then
        None
    else
        Some s

let nonEmptyStringToUpper s =
    let nonEmpty = stringToOption s
    let nonEmptyUpper = Option.map toUpper nonEmpty
\`\`\`
`,title:"Wert in Container, Funktion passt nicht",level:3,content:`### Wert in Container, Funktion passt nicht

\`\`\`fsharp
let toUpper (s: string) = s.ToUpper()

let stringToOption s =
    if String.IsNullOrWhiteSpace s then
        None
    else
        Some s

let nonEmptyStringToUpper s =
    let nonEmpty = stringToOption s
    let nonEmptyUpper = Option.map toUpper nonEmpty
\`\`\``,frontmatter:{srcSequence:"./pages/funktor.md"},index:84,start:69,end:86,source:{filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/funktor.md",raw:`
### Wert in Container, Funktion passt nicht

\`\`\`fsharp
let toUpper (s: string) = s.ToUpper()

let stringToOption s =
    if String.IsNullOrWhiteSpace s then
        None
    else
        Some s

let nonEmptyStringToUpper s =
    let nonEmpty = stringToOption s
    let nonEmptyUpper = Option.map toUpper nonEmpty
\`\`\`
`,title:"Wert in Container, Funktion passt nicht",level:3,content:`### Wert in Container, Funktion passt nicht

\`\`\`fsharp
let toUpper (s: string) = s.ToUpper()

let stringToOption s =
    if String.IsNullOrWhiteSpace s then
        None
    else
        Some s

let nonEmptyStringToUpper s =
    let nonEmpty = stringToOption s
    let nonEmptyUpper = Option.map toUpper nonEmpty
\`\`\``,frontmatter:{},index:5,start:69,end:86},filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/funktor.md",noteHTML:"",id:84,no:85},__clicksElements:[],__preloaded:!1}},{path:"86",name:"page-86",component:qC,meta:{title:"Neue Anforderung!",srcSequence:"./pages/anforderung_spitzname_normalisieren.md",slide:{raw:null,title:"Neue Anforderung!",level:1,content:`## Neue Anforderung!

- Es wird eine Menge von Personen verarbeitet
- Der Spitzname jedes Eintrags soll zu Großbuchstaben umgewandelt werden - wenn er vorhanden ist.
- Danach wird die Länge jedes Spitznamens ermittelt - wenn er vorhanden ist 
- Dann wird die längste Länge ermittelt und zurückgegeben - fehlende Spitznamen werden als 0 gewertet`,frontmatter:{title:"Neue Anforderung!",srcSequence:"./pages/anforderung_spitzname_normalisieren.md"},index:85,start:0,end:12,source:{filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/anforderung_spitzname_normalisieren.md",raw:`---
title: Neue Anforderung!
---

## Neue Anforderung!

- Es wird eine Menge von Personen verarbeitet
- Der Spitzname jedes Eintrags soll zu Großbuchstaben umgewandelt werden - wenn er vorhanden ist.
- Danach wird die Länge jedes Spitznamens ermittelt - wenn er vorhanden ist 
- Dann wird die längste Länge ermittelt und zurückgegeben - fehlende Spitznamen werden als 0 gewertet

`,title:"Neue Anforderung!",level:1,content:`## Neue Anforderung!

- Es wird eine Menge von Personen verarbeitet
- Der Spitzname jedes Eintrags soll zu Großbuchstaben umgewandelt werden - wenn er vorhanden ist.
- Danach wird die Länge jedes Spitznamens ermittelt - wenn er vorhanden ist 
- Dann wird die längste Länge ermittelt und zurückgegeben - fehlende Spitznamen werden als 0 gewertet`,frontmatter:{title:"Neue Anforderung!"},index:0,start:0,end:12},inline:{raw:`---
src: ./pages/anforderung_spitzname_normalisieren.md
---
`,content:"",frontmatter:{},index:28,start:130,end:134},filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/anforderung_spitzname_normalisieren.md",noteHTML:"",id:85,no:86},__clicksElements:[],__preloaded:!1}},{path:"87",name:"page-87",component:VC,meta:{title:"Let's code",srcSequence:"./pages/letscode.md",slide:{raw:null,title:"Let's code",level:1,content:"# Let's code",frontmatter:{title:"Let's code",srcSequence:"./pages/letscode.md"},index:86,start:0,end:1,source:{filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/letscode.md",raw:"# Let's code",title:"Let's code",level:1,content:"# Let's code",frontmatter:{title:"Let's code"},index:0,start:0,end:1},inline:{raw:`---
src: ./pages/letscode.md
---
`,content:"",frontmatter:{},index:29,start:134,end:138},filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/letscode.md",noteHTML:"",id:86,no:87},__clicksElements:[],__preloaded:!1}},{path:"88",name:"page-88",component:UC,meta:{title:"Neue Anforderungen!",srcSequence:"./pages/anforderung_karte_versenden.md",slide:{raw:null,title:"Neue Anforderungen!",level:2,content:`## Neue Anforderungen!

- Funktion, die eine Person entgegennimmt, und einen Grusskartentext erzeugt. (kann fehlschlagen)
- Grusskartentext wird an DruckService geschickt. Es wird eine Grusskarte erzeugt. (kann fehlschlagen)
- Grusskarte wird an Postversand uebermittelt. (kann fehlschlagen)
- E-Mail versenden, ob alles geklappt hat (immer).`,frontmatter:{title:"Neue Anforderungen!",srcSequence:"./pages/anforderung_karte_versenden.md"},index:87,start:0,end:7,source:{filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/anforderung_karte_versenden.md",raw:`## Neue Anforderungen!

- Funktion, die eine Person entgegennimmt, und einen Grusskartentext erzeugt. (kann fehlschlagen)
- Grusskartentext wird an DruckService geschickt. Es wird eine Grusskarte erzeugt. (kann fehlschlagen)
- Grusskarte wird an Postversand uebermittelt. (kann fehlschlagen)
- E-Mail versenden, ob alles geklappt hat (immer).
`,title:"Neue Anforderungen!",level:2,content:`## Neue Anforderungen!

- Funktion, die eine Person entgegennimmt, und einen Grusskartentext erzeugt. (kann fehlschlagen)
- Grusskartentext wird an DruckService geschickt. Es wird eine Grusskarte erzeugt. (kann fehlschlagen)
- Grusskarte wird an Postversand uebermittelt. (kann fehlschlagen)
- E-Mail versenden, ob alles geklappt hat (immer).`,frontmatter:{title:"Neue Anforderungen!"},index:0,start:0,end:7},inline:{raw:`---
src: ./pages/anforderung_karte_versenden.md
---
`,content:"",frontmatter:{},index:30,start:138,end:142},filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/anforderung_karte_versenden.md",noteHTML:"",id:87,no:88},__clicksElements:[],__preloaded:!1}},{path:"89",name:"page-89",component:YC,meta:{title:"Problem: Verkettung eingepackter Werte",srcSequence:"./pages/monade.md",slide:{raw:null,title:"Problem: Verkettung eingepackter Werte",level:3,content:`### Problem: Verkettung eingepackter Werte

\`\`\`fsharp
let storeInDatabase path content = 
  try
    System.IO.File.WriteAllText(path, content)
    Some content
  with
    ex -> None

let stringToOption s =
    if String.IsNullOrWhiteSpace s then None else Some s

let toUpper (s: string) = s.ToUpper()

let nonEmptyStringStoreInPersistenceAndToUpper path content =
    let nonEmpty = stringToOption content
    // passt nicht: "string" erwartet, aber "string option" bekommen
    let stored = storeInDatabase path nonEmpty
    // passt nicht: "string option" erwartet, 
    // aber "string option option" bekommen
    let nonEmptyUpper = Option.map toUpper stored
\`\`\``,frontmatter:{title:"Problem: Verkettung eingepackter Werte",srcSequence:"./pages/monade.md"},index:88,start:0,end:24,source:{filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/monade.md",raw:`### Problem: Verkettung eingepackter Werte

\`\`\`fsharp
let storeInDatabase path content = 
  try
    System.IO.File.WriteAllText(path, content)
    Some content
  with
    ex -> None

let stringToOption s =
    if String.IsNullOrWhiteSpace s then None else Some s

let toUpper (s: string) = s.ToUpper()

let nonEmptyStringStoreInPersistenceAndToUpper path content =
    let nonEmpty = stringToOption content
    // passt nicht: "string" erwartet, aber "string option" bekommen
    let stored = storeInDatabase path nonEmpty
    // passt nicht: "string option" erwartet, 
    // aber "string option option" bekommen
    let nonEmptyUpper = Option.map toUpper stored
\`\`\`
`,title:"Problem: Verkettung eingepackter Werte",level:3,content:`### Problem: Verkettung eingepackter Werte

\`\`\`fsharp
let storeInDatabase path content = 
  try
    System.IO.File.WriteAllText(path, content)
    Some content
  with
    ex -> None

let stringToOption s =
    if String.IsNullOrWhiteSpace s then None else Some s

let toUpper (s: string) = s.ToUpper()

let nonEmptyStringStoreInPersistenceAndToUpper path content =
    let nonEmpty = stringToOption content
    // passt nicht: "string" erwartet, aber "string option" bekommen
    let stored = storeInDatabase path nonEmpty
    // passt nicht: "string option" erwartet, 
    // aber "string option option" bekommen
    let nonEmptyUpper = Option.map toUpper stored
\`\`\``,frontmatter:{title:"Problem: Verkettung eingepackter Werte"},index:0,start:0,end:24},inline:{raw:`---
src: ./pages/monade.md
---
`,content:"",frontmatter:{},index:31,start:142,end:146},filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/monade.md",noteHTML:"",id:88,no:89},__clicksElements:[],__preloaded:!1}},{path:"90",name:"page-90",component:nO,meta:{srcSequence:"./pages/monade.md",slide:{raw:`
### Monade ("Chainable")

![img](/images/Monade_1.png)
`,title:'Monade ("Chainable")',level:3,content:`### Monade ("Chainable")

![img](/images/Monade_1.png)`,frontmatter:{srcSequence:"./pages/monade.md"},index:89,start:25,end:30,source:{filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/monade.md",raw:`
### Monade ("Chainable")

![img](/images/Monade_1.png)
`,title:'Monade ("Chainable")',level:3,content:`### Monade ("Chainable")

![img](/images/Monade_1.png)`,frontmatter:{},index:1,start:25,end:30},filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/monade.md",noteHTML:"",id:89,no:90},__clicksElements:[],__preloaded:!1}},{path:"91",name:"page-91",component:oO,meta:{srcSequence:"./pages/monade.md",slide:{raw:`
### Monade ("Chainable")

- Container mit "bind" Funktion (die bestimmten Regeln folgt): "Chainable"
- Bezeichnung in der FP-Welt: **Monade**

\`\`\`fsharp
  bind: (a -> M b) -> M a -> M b
\`\`\`
- Andere Bezeichnungen für "bind": flatMap, SelectMany (LINQ), &gt;&gt;=
`,title:'Monade ("Chainable")',level:3,content:`### Monade ("Chainable")

- Container mit "bind" Funktion (die bestimmten Regeln folgt): "Chainable"
- Bezeichnung in der FP-Welt: **Monade**

\`\`\`fsharp
  bind: (a -> M b) -> M a -> M b
\`\`\`
- Andere Bezeichnungen für "bind": flatMap, SelectMany (LINQ), &gt;&gt;=`,frontmatter:{srcSequence:"./pages/monade.md"},index:90,start:31,end:42,source:{filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/monade.md",raw:`
### Monade ("Chainable")

- Container mit "bind" Funktion (die bestimmten Regeln folgt): "Chainable"
- Bezeichnung in der FP-Welt: **Monade**

\`\`\`fsharp
  bind: (a -> M b) -> M a -> M b
\`\`\`
- Andere Bezeichnungen für "bind": flatMap, SelectMany (LINQ), &gt;&gt;=
`,title:'Monade ("Chainable")',level:3,content:`### Monade ("Chainable")

- Container mit "bind" Funktion (die bestimmten Regeln folgt): "Chainable"
- Bezeichnung in der FP-Welt: **Monade**

\`\`\`fsharp
  bind: (a -> M b) -> M a -> M b
\`\`\`
- Andere Bezeichnungen für "bind": flatMap, SelectMany (LINQ), &gt;&gt;=`,frontmatter:{},index:2,start:31,end:42},filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/monade.md",noteHTML:"",id:90,no:91},__clicksElements:[],__preloaded:!1}},{path:"92",name:"page-92",component:uO,meta:{srcSequence:"./pages/monade.md",slide:{raw:`
## Verkettung

\`\`\`fsharp
let storeInDatabase path content = 
  try
    System.IO.File.WriteAllText(path, content)
    Some content
  with
    ex -> None

let stringToOption s =
    if String.IsNullOrWhiteSpace s then None else Some s

let toUpper (s: string) = s.ToUpper()

let nonEmptyStringStoreInPersistenceAndToUpper path content =
    let nonEmpty = stringToOption content
    let stored = Option.bind (storeInDatabase path) nonEmpty
    let nonEmptyUpper = Option.map toUpper stored
\`\`\`
`,title:"Verkettung",level:2,content:`## Verkettung

\`\`\`fsharp
let storeInDatabase path content = 
  try
    System.IO.File.WriteAllText(path, content)
    Some content
  with
    ex -> None

let stringToOption s =
    if String.IsNullOrWhiteSpace s then None else Some s

let toUpper (s: string) = s.ToUpper()

let nonEmptyStringStoreInPersistenceAndToUpper path content =
    let nonEmpty = stringToOption content
    let stored = Option.bind (storeInDatabase path) nonEmpty
    let nonEmptyUpper = Option.map toUpper stored
\`\`\``,frontmatter:{srcSequence:"./pages/monade.md"},index:91,start:43,end:65,source:{filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/monade.md",raw:`
## Verkettung

\`\`\`fsharp
let storeInDatabase path content = 
  try
    System.IO.File.WriteAllText(path, content)
    Some content
  with
    ex -> None

let stringToOption s =
    if String.IsNullOrWhiteSpace s then None else Some s

let toUpper (s: string) = s.ToUpper()

let nonEmptyStringStoreInPersistenceAndToUpper path content =
    let nonEmpty = stringToOption content
    let stored = Option.bind (storeInDatabase path) nonEmpty
    let nonEmptyUpper = Option.map toUpper stored
\`\`\`
`,title:"Verkettung",level:2,content:`## Verkettung

\`\`\`fsharp
let storeInDatabase path content = 
  try
    System.IO.File.WriteAllText(path, content)
    Some content
  with
    ex -> None

let stringToOption s =
    if String.IsNullOrWhiteSpace s then None else Some s

let toUpper (s: string) = s.ToUpper()

let nonEmptyStringStoreInPersistenceAndToUpper path content =
    let nonEmpty = stringToOption content
    let stored = Option.bind (storeInDatabase path) nonEmpty
    let nonEmptyUpper = Option.map toUpper stored
\`\`\``,frontmatter:{},index:3,start:43,end:65},filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/monade.md",noteHTML:"",id:91,no:92},__clicksElements:[],__preloaded:!1}},{path:"93",name:"page-93",component:hO,meta:{title:"Railway Oriented Programming",srcSequence:"./pages/railway.md",slide:{raw:null,title:"Railway Oriented Programming",level:2,content:`## Railway Oriented Programming

Funktionale Programmierung wird oft als das "Zusammenstöpseln" von Funktionen dargestellt...`,frontmatter:{title:"Railway Oriented Programming",srcSequence:"./pages/railway.md"},index:92,start:0,end:4,source:{filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/railway.md",raw:`## Railway Oriented Programming

Funktionale Programmierung wird oft als das "Zusammenstöpseln" von Funktionen dargestellt...
`,title:"Railway Oriented Programming",level:2,content:`## Railway Oriented Programming

Funktionale Programmierung wird oft als das "Zusammenstöpseln" von Funktionen dargestellt...`,frontmatter:{title:"Railway Oriented Programming"},index:0,start:0,end:4},inline:{raw:`---
src: ./pages/railway.md
---
`,content:"",frontmatter:{},index:32,start:146,end:150},filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/railway.md",noteHTML:"",id:92,no:93},__clicksElements:[],__preloaded:!1}},{path:"94",name:"page-94",component:kO,meta:{srcSequence:"./pages/railway.md",slide:{raw:`
Beispiel:

\`\`\`txt
f1: Eingabe string, Ausgabe int
f1: string -> int // FP Syntax

f2: Eingabe int, Ausgabe bool
f2: int -> bool // FP Syntax
\`\`\`
`,content:`Beispiel:

\`\`\`txt
f1: Eingabe string, Ausgabe int
f1: string -> int // FP Syntax

f2: Eingabe int, Ausgabe bool
f2: int -> bool // FP Syntax
\`\`\``,frontmatter:{srcSequence:"./pages/railway.md"},index:93,start:5,end:16,source:{filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/railway.md",raw:`
Beispiel:

\`\`\`txt
f1: Eingabe string, Ausgabe int
f1: string -> int // FP Syntax

f2: Eingabe int, Ausgabe bool
f2: int -> bool // FP Syntax
\`\`\`
`,content:`Beispiel:

\`\`\`txt
f1: Eingabe string, Ausgabe int
f1: string -> int // FP Syntax

f2: Eingabe int, Ausgabe bool
f2: int -> bool // FP Syntax
\`\`\``,frontmatter:{},index:1,start:5,end:16},filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/railway.md",noteHTML:"",id:93,no:94},__clicksElements:[],__preloaded:!1}},{path:"95",name:"page-95",component:wO,meta:{srcSequence:"./pages/railway.md",slide:{raw:`
\`\`\`csharp
// Klassisch ===========================================================
int F1(string s) => int.TryParse(s, out var i) ? i : 0;
bool F2(int i) => i > 0;

// "verschachtelter" Aufruf
F2(F1("1")) // -> true
F2(F1("0")) // -> false

// "composition"
bool F3(string s) => F2(F1(s));
\`\`\`

\`\`\`csharp
// Method Chaining =====================================================
// mit C# extension methods
static int F1(this string s) => int.TryParse(s, out var i) ? i : 0;
static bool F2(this int i) => i > 0;

// Lesbarer (erst F1, dann F2)
"1".F1().F2() // ->true
"0".F1().F2() // ->false

// Lesbarer (erst F1, dann F2)
bool F3(string s) => s.F1().F2();
\`\`\`
`,content:`\`\`\`csharp
// Klassisch ===========================================================
int F1(string s) => int.TryParse(s, out var i) ? i : 0;
bool F2(int i) => i > 0;

// "verschachtelter" Aufruf
F2(F1("1")) // -> true
F2(F1("0")) // -> false

// "composition"
bool F3(string s) => F2(F1(s));
\`\`\`

\`\`\`csharp
// Method Chaining =====================================================
// mit C# extension methods
static int F1(this string s) => int.TryParse(s, out var i) ? i : 0;
static bool F2(this int i) => i > 0;

// Lesbarer (erst F1, dann F2)
"1".F1().F2() // ->true
"0".F1().F2() // ->false

// Lesbarer (erst F1, dann F2)
bool F3(string s) => s.F1().F2();
\`\`\``,frontmatter:{srcSequence:"./pages/railway.md"},index:94,start:17,end:45,source:{filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/railway.md",raw:`
\`\`\`csharp
// Klassisch ===========================================================
int F1(string s) => int.TryParse(s, out var i) ? i : 0;
bool F2(int i) => i > 0;

// "verschachtelter" Aufruf
F2(F1("1")) // -> true
F2(F1("0")) // -> false

// "composition"
bool F3(string s) => F2(F1(s));
\`\`\`

\`\`\`csharp
// Method Chaining =====================================================
// mit C# extension methods
static int F1(this string s) => int.TryParse(s, out var i) ? i : 0;
static bool F2(this int i) => i > 0;

// Lesbarer (erst F1, dann F2)
"1".F1().F2() // ->true
"0".F1().F2() // ->false

// Lesbarer (erst F1, dann F2)
bool F3(string s) => s.F1().F2();
\`\`\`
`,content:`\`\`\`csharp
// Klassisch ===========================================================
int F1(string s) => int.TryParse(s, out var i) ? i : 0;
bool F2(int i) => i > 0;

// "verschachtelter" Aufruf
F2(F1("1")) // -> true
F2(F1("0")) // -> false

// "composition"
bool F3(string s) => F2(F1(s));
\`\`\`

\`\`\`csharp
// Method Chaining =====================================================
// mit C# extension methods
static int F1(this string s) => int.TryParse(s, out var i) ? i : 0;
static bool F2(this int i) => i > 0;

// Lesbarer (erst F1, dann F2)
"1".F1().F2() // ->true
"0".F1().F2() // ->false

// Lesbarer (erst F1, dann F2)
bool F3(string s) => s.F1().F2();
\`\`\``,frontmatter:{},index:2,start:17,end:45},filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/railway.md",noteHTML:"",id:94,no:95},__clicksElements:[],__preloaded:!1}},{path:"96",name:"page-96",component:EO,meta:{srcSequence:"./pages/railway.md",slide:{raw:`
Problem: Keine standardisierte Strategie für Fehlerbehandlung 
`,content:"Problem: Keine standardisierte Strategie für Fehlerbehandlung",frontmatter:{srcSequence:"./pages/railway.md"},index:95,start:46,end:49,source:{filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/railway.md",raw:`
Problem: Keine standardisierte Strategie für Fehlerbehandlung 
`,content:"Problem: Keine standardisierte Strategie für Fehlerbehandlung",frontmatter:{},index:3,start:46,end:49},filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/railway.md",noteHTML:"",id:95,no:96},__clicksElements:[],__preloaded:!1}},{path:"97",name:"page-97",component:TO,meta:{srcSequence:"./pages/railway.md",slide:{raw:`
- Wenn wir davon ausgehen, dass Funktionen auch einen Fehlerfall haben, benötigen wir einen **neuen Datentyp**, der das abbilden kann
`,content:"- Wenn wir davon ausgehen, dass Funktionen auch einen Fehlerfall haben, benötigen wir einen **neuen Datentyp**, der das abbilden kann",frontmatter:{srcSequence:"./pages/railway.md"},index:96,start:50,end:53,source:{filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/railway.md",raw:`
- Wenn wir davon ausgehen, dass Funktionen auch einen Fehlerfall haben, benötigen wir einen **neuen Datentyp**, der das abbilden kann
`,content:"- Wenn wir davon ausgehen, dass Funktionen auch einen Fehlerfall haben, benötigen wir einen **neuen Datentyp**, der das abbilden kann",frontmatter:{},index:4,start:50,end:53},filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/railway.md",noteHTML:"",id:96,no:97},__clicksElements:[],__preloaded:!1}},{path:"98",name:"page-98",component:FO,meta:{srcSequence:"./pages/railway.md",slide:{raw:`
#### Result/Either

- kann entweder 
  - das Ergebnis beinhalten, oder 
  - einen Fehlerfall
`,title:"Result/Either",level:4,content:`#### Result/Either

- kann entweder 
  - das Ergebnis beinhalten, oder 
  - einen Fehlerfall`,frontmatter:{srcSequence:"./pages/railway.md"},index:97,start:54,end:61,source:{filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/railway.md",raw:`
#### Result/Either

- kann entweder 
  - das Ergebnis beinhalten, oder 
  - einen Fehlerfall
`,title:"Result/Either",level:4,content:`#### Result/Either

- kann entweder 
  - das Ergebnis beinhalten, oder 
  - einen Fehlerfall`,frontmatter:{},index:5,start:54,end:61},filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/railway.md",noteHTML:"",id:97,no:98},__clicksElements:[],__preloaded:!1}},{path:"99",name:"page-99",component:IO,meta:{srcSequence:"./pages/railway.md",slide:{raw:`
- In Railway-Sprech bedeutet dass, dass man "zweigleisig" fährt:
- Jede **Funktion** bekommt eine Eingabe, und 
  - hat "im Bauch" eine Weiche, die entscheidet ob 
    - auf das Fehlergleis oder 
    - auf das Erfolgsgleis umgeschaltet wird.
- Die Wrapperklasse mit der **Funktion** ist das Entscheidende!
`,content:`- In Railway-Sprech bedeutet dass, dass man "zweigleisig" fährt:
- Jede **Funktion** bekommt eine Eingabe, und 
  - hat "im Bauch" eine Weiche, die entscheidet ob 
    - auf das Fehlergleis oder 
    - auf das Erfolgsgleis umgeschaltet wird.
- Die Wrapperklasse mit der **Funktion** ist das Entscheidende!`,frontmatter:{srcSequence:"./pages/railway.md"},index:98,start:62,end:70,source:{filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/railway.md",raw:`
- In Railway-Sprech bedeutet dass, dass man "zweigleisig" fährt:
- Jede **Funktion** bekommt eine Eingabe, und 
  - hat "im Bauch" eine Weiche, die entscheidet ob 
    - auf das Fehlergleis oder 
    - auf das Erfolgsgleis umgeschaltet wird.
- Die Wrapperklasse mit der **Funktion** ist das Entscheidende!
`,content:`- In Railway-Sprech bedeutet dass, dass man "zweigleisig" fährt:
- Jede **Funktion** bekommt eine Eingabe, und 
  - hat "im Bauch" eine Weiche, die entscheidet ob 
    - auf das Fehlergleis oder 
    - auf das Erfolgsgleis umgeschaltet wird.
- Die Wrapperklasse mit der **Funktion** ist das Entscheidende!`,frontmatter:{},index:6,start:62,end:70},filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/railway.md",noteHTML:"",id:98,no:99},__clicksElements:[],__preloaded:!1}},{path:"100",name:"page-100",component:RO,meta:{srcSequence:"./pages/railway.md",slide:{raw:`
- In anderen Worten: die Funktionen haben aktuell 1 Eingabe (1 Gleis), und 2 Ausgaben (2 Gleise)

<img
  class="absolute bottom-50 left-10 w-200"
  src="/images/rop-tracks-Page-2.png"
/>

`,content:`- In anderen Worten: die Funktionen haben aktuell 1 Eingabe (1 Gleis), und 2 Ausgaben (2 Gleise)

<img
  class="absolute bottom-50 left-10 w-200"
  src="/images/rop-tracks-Page-2.png"
/>`,frontmatter:{srcSequence:"./pages/railway.md"},index:99,start:71,end:80,source:{filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/railway.md",raw:`
- In anderen Worten: die Funktionen haben aktuell 1 Eingabe (1 Gleis), und 2 Ausgaben (2 Gleise)

<img
  class="absolute bottom-50 left-10 w-200"
  src="/images/rop-tracks-Page-2.png"
/>

`,content:`- In anderen Worten: die Funktionen haben aktuell 1 Eingabe (1 Gleis), und 2 Ausgaben (2 Gleise)

<img
  class="absolute bottom-50 left-10 w-200"
  src="/images/rop-tracks-Page-2.png"
/>`,frontmatter:{},index:7,start:71,end:80},filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/railway.md",noteHTML:"",id:99,no:100},__clicksElements:[],__preloaded:!1}},{path:"101",name:"page-101",component:HO,meta:{srcSequence:"./pages/railway.md",slide:{raw:`
- Man benötigt also einen Mechanismus, der eine 2-gleisige Ausgabe so umwandelt, dass eine Funktion, die eine 1-gleisige Eingabe erwartet, damit umgehen kann

<img
  class="absolute bottom-10 left-20 w-180"
  src="/images/rop-tracks-Page-4.png"
/>
`,content:`- Man benötigt also einen Mechanismus, der eine 2-gleisige Ausgabe so umwandelt, dass eine Funktion, die eine 1-gleisige Eingabe erwartet, damit umgehen kann

<img
  class="absolute bottom-10 left-20 w-180"
  src="/images/rop-tracks-Page-4.png"
/>`,frontmatter:{srcSequence:"./pages/railway.md"},index:100,start:81,end:89,source:{filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/railway.md",raw:`
- Man benötigt also einen Mechanismus, der eine 2-gleisige Ausgabe so umwandelt, dass eine Funktion, die eine 1-gleisige Eingabe erwartet, damit umgehen kann

<img
  class="absolute bottom-10 left-20 w-180"
  src="/images/rop-tracks-Page-4.png"
/>
`,content:`- Man benötigt also einen Mechanismus, der eine 2-gleisige Ausgabe so umwandelt, dass eine Funktion, die eine 1-gleisige Eingabe erwartet, damit umgehen kann

<img
  class="absolute bottom-10 left-20 w-180"
  src="/images/rop-tracks-Page-4.png"
/>`,frontmatter:{},index:8,start:81,end:89},filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/railway.md",noteHTML:"",id:100,no:101},__clicksElements:[],__preloaded:!1}},{path:"102",name:"page-102",component:ZO,meta:{srcSequence:"./pages/railway.md",slide:{raw:`
#### Was muss dieser Mechanismus können?

- wenn die Eingabe fehlerhaft ist, muss die Funktion nichts tun, und kann den Fehler weiterreichen
- wenn die Eingabe nicht fehlerhaft ist, wird der Wert an die Funktion gegeben
`,title:"Was muss dieser Mechanismus können?",level:4,content:`#### Was muss dieser Mechanismus können?

- wenn die Eingabe fehlerhaft ist, muss die Funktion nichts tun, und kann den Fehler weiterreichen
- wenn die Eingabe nicht fehlerhaft ist, wird der Wert an die Funktion gegeben`,frontmatter:{srcSequence:"./pages/railway.md"},index:101,start:90,end:96,source:{filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/railway.md",raw:`
#### Was muss dieser Mechanismus können?

- wenn die Eingabe fehlerhaft ist, muss die Funktion nichts tun, und kann den Fehler weiterreichen
- wenn die Eingabe nicht fehlerhaft ist, wird der Wert an die Funktion gegeben
`,title:"Was muss dieser Mechanismus können?",level:4,content:`#### Was muss dieser Mechanismus können?

- wenn die Eingabe fehlerhaft ist, muss die Funktion nichts tun, und kann den Fehler weiterreichen
- wenn die Eingabe nicht fehlerhaft ist, wird der Wert an die Funktion gegeben`,frontmatter:{},index:9,start:90,end:96},filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/railway.md",noteHTML:"",id:101,no:102},__clicksElements:[],__preloaded:!1}},{path:"103",name:"page-103",component:eA,meta:{srcSequence:"./pages/railway.md",slide:{raw:`
\`\`\`haskell
bind: (string -> Result int) -> Result string -> Result int

bind: (a -> M b) -> M a -> M b
\`\`\`

- FP-Jargon: eine Wrapper-Klasse, die \`bind\` bereitstellt, wird **Monade** genannt (sehr stark vereinfacht!).

TODO:
Beispiel: siehe \`ChainingOptions.Chaining_option_returning_functions\`.
`,content:"```haskell\nbind: (string -> Result int) -> Result string -> Result int\n\nbind: (a -> M b) -> M a -> M b\n```\n\n- FP-Jargon: eine Wrapper-Klasse, die `bind` bereitstellt, wird **Monade** genannt (sehr stark vereinfacht!).\n\nTODO:\nBeispiel: siehe `ChainingOptions.Chaining_option_returning_functions`.",frontmatter:{srcSequence:"./pages/railway.md"},index:102,start:97,end:109,source:{filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/railway.md",raw:`
\`\`\`haskell
bind: (string -> Result int) -> Result string -> Result int

bind: (a -> M b) -> M a -> M b
\`\`\`

- FP-Jargon: eine Wrapper-Klasse, die \`bind\` bereitstellt, wird **Monade** genannt (sehr stark vereinfacht!).

TODO:
Beispiel: siehe \`ChainingOptions.Chaining_option_returning_functions\`.
`,content:"```haskell\nbind: (string -> Result int) -> Result string -> Result int\n\nbind: (a -> M b) -> M a -> M b\n```\n\n- FP-Jargon: eine Wrapper-Klasse, die `bind` bereitstellt, wird **Monade** genannt (sehr stark vereinfacht!).\n\nTODO:\nBeispiel: siehe `ChainingOptions.Chaining_option_returning_functions`.",frontmatter:{},index:10,start:97,end:109},filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/railway.md",noteHTML:"",id:102,no:103},__clicksElements:[],__preloaded:!1}},{path:"104",name:"page-104",component:sA,meta:{srcSequence:"./pages/railway.md",slide:{raw:'\n- `Either` besteht aus zwei Teilen\n  - `Left`\n  - `Right` ("richtig"...)\n- `Result` besteht aus zwei Teilen\n  - `Failure`\n  - `Success`\n',content:'- `Either` besteht aus zwei Teilen\n  - `Left`\n  - `Right` ("richtig"...)\n- `Result` besteht aus zwei Teilen\n  - `Failure`\n  - `Success`',frontmatter:{srcSequence:"./pages/railway.md"},index:103,start:110,end:118,source:{filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/railway.md",raw:'\n- `Either` besteht aus zwei Teilen\n  - `Left`\n  - `Right` ("richtig"...)\n- `Result` besteht aus zwei Teilen\n  - `Failure`\n  - `Success`\n',content:'- `Either` besteht aus zwei Teilen\n  - `Left`\n  - `Right` ("richtig"...)\n- `Result` besteht aus zwei Teilen\n  - `Failure`\n  - `Success`',frontmatter:{},index:11,start:110,end:118},filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/railway.md",noteHTML:"",id:103,no:104},__clicksElements:[],__preloaded:!1}},{path:"105",name:"page-105",component:lA,meta:{srcSequence:"./pages/railway.md",slide:{raw:'\n```csharp\nOption<string> IsValidOpt(string s) =>\n    string.IsNullOrEmpty(s)\n        ? None\n        : Some(s);\n```\n\n- `Option` hat `Some(T)` und `None`\n- `Either`/`Result` ist ähnlich zu `Option`\n- `None` wird durch `Failure`/`Left` ersetzt (frei wählbar, z.B. selbst definierter Error Typ).\n\n```csharp\nEither<string, string> IsValidEither(string s)\n    => string.IsNullOrEmpty(s)\n        ? (Either<string, string>) Left("ups")\n        : Right(s);\n```\n',content:'```csharp\nOption<string> IsValidOpt(string s) =>\n    string.IsNullOrEmpty(s)\n        ? None\n        : Some(s);\n```\n\n- `Option` hat `Some(T)` und `None`\n- `Either`/`Result` ist ähnlich zu `Option`\n- `None` wird durch `Failure`/`Left` ersetzt (frei wählbar, z.B. selbst definierter Error Typ).\n\n```csharp\nEither<string, string> IsValidEither(string s)\n    => string.IsNullOrEmpty(s)\n        ? (Either<string, string>) Left("ups")\n        : Right(s);\n```',frontmatter:{srcSequence:"./pages/railway.md"},index:104,start:119,end:138,source:{filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/railway.md",raw:'\n```csharp\nOption<string> IsValidOpt(string s) =>\n    string.IsNullOrEmpty(s)\n        ? None\n        : Some(s);\n```\n\n- `Option` hat `Some(T)` und `None`\n- `Either`/`Result` ist ähnlich zu `Option`\n- `None` wird durch `Failure`/`Left` ersetzt (frei wählbar, z.B. selbst definierter Error Typ).\n\n```csharp\nEither<string, string> IsValidEither(string s)\n    => string.IsNullOrEmpty(s)\n        ? (Either<string, string>) Left("ups")\n        : Right(s);\n```\n',content:'```csharp\nOption<string> IsValidOpt(string s) =>\n    string.IsNullOrEmpty(s)\n        ? None\n        : Some(s);\n```\n\n- `Option` hat `Some(T)` und `None`\n- `Either`/`Result` ist ähnlich zu `Option`\n- `None` wird durch `Failure`/`Left` ersetzt (frei wählbar, z.B. selbst definierter Error Typ).\n\n```csharp\nEither<string, string> IsValidEither(string s)\n    => string.IsNullOrEmpty(s)\n        ? (Either<string, string>) Left("ups")\n        : Right(s);\n```',frontmatter:{},index:12,start:119,end:138},filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/railway.md",noteHTML:"",id:104,no:105},__clicksElements:[],__preloaded:!1}},{path:"106",name:"page-106",component:dA,meta:{title:"Neue Anforderungen!",srcSequence:"./pages/anforderung_karte_versenden.md",slide:{raw:null,title:"Neue Anforderungen!",level:2,content:`## Neue Anforderungen!

- Funktion, die eine Person entgegennimmt, und einen Grusskartentext erzeugt. (kann fehlschlagen)
- Grusskartentext wird an DruckService geschickt. Es wird eine Grusskarte erzeugt. (kann fehlschlagen)
- Grusskarte wird an Postversand uebermittelt. (kann fehlschlagen)
- E-Mail versenden, ob alles geklappt hat (immer).`,frontmatter:{title:"Neue Anforderungen!",srcSequence:"./pages/anforderung_karte_versenden.md"},index:105,start:0,end:7,source:{filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/anforderung_karte_versenden.md",raw:`## Neue Anforderungen!

- Funktion, die eine Person entgegennimmt, und einen Grusskartentext erzeugt. (kann fehlschlagen)
- Grusskartentext wird an DruckService geschickt. Es wird eine Grusskarte erzeugt. (kann fehlschlagen)
- Grusskarte wird an Postversand uebermittelt. (kann fehlschlagen)
- E-Mail versenden, ob alles geklappt hat (immer).
`,title:"Neue Anforderungen!",level:2,content:`## Neue Anforderungen!

- Funktion, die eine Person entgegennimmt, und einen Grusskartentext erzeugt. (kann fehlschlagen)
- Grusskartentext wird an DruckService geschickt. Es wird eine Grusskarte erzeugt. (kann fehlschlagen)
- Grusskarte wird an Postversand uebermittelt. (kann fehlschlagen)
- E-Mail versenden, ob alles geklappt hat (immer).`,frontmatter:{title:"Neue Anforderungen!"},index:0,start:0,end:7},inline:{raw:`---
src: ./pages/anforderung_karte_versenden.md
---
`,content:"",frontmatter:{},index:33,start:150,end:154},filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/anforderung_karte_versenden.md",noteHTML:"",id:105,no:106},__clicksElements:[],__preloaded:!1}},{path:"107",name:"page-107",component:mA,meta:{title:"Let's code",srcSequence:"./pages/letscode.md",slide:{raw:null,title:"Let's code",level:1,content:"# Let's code",frontmatter:{title:"Let's code",srcSequence:"./pages/letscode.md"},index:106,start:0,end:1,source:{filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/letscode.md",raw:"# Let's code",title:"Let's code",level:1,content:"# Let's code",frontmatter:{title:"Let's code"},index:0,start:0,end:1},inline:{raw:`---
src: ./pages/letscode.md
---
`,content:"",frontmatter:{},index:34,start:154,end:158},filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/letscode.md",noteHTML:"",id:106,no:107},__clicksElements:[],__preloaded:!1}},{path:"108",name:"page-108",component:bA,meta:{title:"Neue Anforderung!",srcSequence:"./pages/anforderung_fehler_sammeln_beim_validieren.md",slide:{raw:null,title:"Neue Anforderung!",level:2,content:`## Neue Anforderung!

- Beim Anlegen eines Eintrags werden alle Pflichtfelder validiert. Validierungsfehler werden gesammelt und am Ende gebündelt zurückgegeben. Nur wenn alle Validierungen erfolgreich sind, wird der Eintrag angelegt.
- Die Felder und Regeln:
    - Vorname
        - Muss existieren 
        - Darf nicht leer sein oder nur aus Whitespace bestehen 
    - Geburtstag
        - Muss existieren 
        - Darf nicht in der Zukunft liegen`,frontmatter:{title:"Neue Anforderung!",srcSequence:"./pages/anforderung_fehler_sammeln_beim_validieren.md"},index:107,start:0,end:11,source:{filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/anforderung_fehler_sammeln_beim_validieren.md",raw:`## Neue Anforderung!

- Beim Anlegen eines Eintrags werden alle Pflichtfelder validiert. Validierungsfehler werden gesammelt und am Ende gebündelt zurückgegeben. Nur wenn alle Validierungen erfolgreich sind, wird der Eintrag angelegt.
- Die Felder und Regeln:
    - Vorname
        - Muss existieren 
        - Darf nicht leer sein oder nur aus Whitespace bestehen 
    - Geburtstag
        - Muss existieren 
        - Darf nicht in der Zukunft liegen 
`,title:"Neue Anforderung!",level:2,content:`## Neue Anforderung!

- Beim Anlegen eines Eintrags werden alle Pflichtfelder validiert. Validierungsfehler werden gesammelt und am Ende gebündelt zurückgegeben. Nur wenn alle Validierungen erfolgreich sind, wird der Eintrag angelegt.
- Die Felder und Regeln:
    - Vorname
        - Muss existieren 
        - Darf nicht leer sein oder nur aus Whitespace bestehen 
    - Geburtstag
        - Muss existieren 
        - Darf nicht in der Zukunft liegen`,frontmatter:{title:"Neue Anforderung!"},index:0,start:0,end:11},inline:{raw:`---
src: ./pages/anforderung_fehler_sammeln_beim_validieren.md
---
`,content:"",frontmatter:{},index:35,start:158,end:162},filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/anforderung_fehler_sammeln_beim_validieren.md",noteHTML:"",id:107,no:108},__clicksElements:[],__preloaded:!1}},{path:"109",name:"page-109",component:xA,meta:{title:"Problem: Funktion mit mehreren eingepackten Parametern",srcSequence:"./pages/applicative.md",slide:{raw:null,title:"Problem: Funktion mit mehreren eingepackten Parametern",level:3,content:`### Problem: Funktion mit mehreren eingepackten Parametern

\`\`\`fsharp
let add a b = a + b

let onlyPositive i =
  if i > 0 then
    Some i
  else
    None

let addTwoNumbers a b =
  let positiveA = onlyPositive a
  let positiveB = onlyPositive b
  // passt nicht, 2x int erwartet, aber 2x int option übergeben
  let sum = add positiveA positiveB

  // für zwei (und drei) in F# bereits vordefiniert:
  let sum = Option.map2 add positiveA positiveB

  // aber was, wenn man mehr Parameter hat?
\`\`\``,frontmatter:{title:"Problem: Funktion mit mehreren eingepackten Parametern",srcSequence:"./pages/applicative.md"},index:108,start:0,end:23,source:{filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/applicative.md",raw:`### Problem: Funktion mit mehreren eingepackten Parametern

\`\`\`fsharp
let add a b = a + b

let onlyPositive i =
  if i > 0 then
    Some i
  else
    None

let addTwoNumbers a b =
  let positiveA = onlyPositive a
  let positiveB = onlyPositive b
  // passt nicht, 2x int erwartet, aber 2x int option übergeben
  let sum = add positiveA positiveB

  // für zwei (und drei) in F# bereits vordefiniert:
  let sum = Option.map2 add positiveA positiveB

  // aber was, wenn man mehr Parameter hat?
\`\`\`
`,title:"Problem: Funktion mit mehreren eingepackten Parametern",level:3,content:`### Problem: Funktion mit mehreren eingepackten Parametern

\`\`\`fsharp
let add a b = a + b

let onlyPositive i =
  if i > 0 then
    Some i
  else
    None

let addTwoNumbers a b =
  let positiveA = onlyPositive a
  let positiveB = onlyPositive b
  // passt nicht, 2x int erwartet, aber 2x int option übergeben
  let sum = add positiveA positiveB

  // für zwei (und drei) in F# bereits vordefiniert:
  let sum = Option.map2 add positiveA positiveB

  // aber was, wenn man mehr Parameter hat?
\`\`\``,frontmatter:{title:"Problem: Funktion mit mehreren eingepackten Parametern"},index:0,start:0,end:23},inline:{raw:`---
src: ./pages/applicative.md
---
`,content:"",frontmatter:{},index:36,start:162,end:166},filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/applicative.md",noteHTML:"",id:108,no:109},__clicksElements:[],__preloaded:!1}},{path:"110",name:"page-110",component:TA,meta:{srcSequence:"./pages/applicative.md",slide:{raw:`
### Applicative

<img
  class="absolute bottom-10 right-10 w-150"
  src="/images/Applicative_1_small.png"
/>
`,title:"Applicative",level:3,content:`### Applicative

<img
  class="absolute bottom-10 right-10 w-150"
  src="/images/Applicative_1_small.png"
/>`,frontmatter:{srcSequence:"./pages/applicative.md"},index:109,start:24,end:32,source:{filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/applicative.md",raw:`
### Applicative

<img
  class="absolute bottom-10 right-10 w-150"
  src="/images/Applicative_1_small.png"
/>
`,title:"Applicative",level:3,content:`### Applicative

<img
  class="absolute bottom-10 right-10 w-150"
  src="/images/Applicative_1_small.png"
/>`,frontmatter:{},index:1,start:24,end:32},filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/applicative.md",noteHTML:"",id:109,no:110},__clicksElements:[],__preloaded:!1}},{path:"111",name:"page-111",component:NA,meta:{srcSequence:"./pages/applicative.md",slide:{raw:`
### Applicative

- Container mit "apply" Funktion (die bestimmten Regeln folgt): Applicative
- Bezeichnung in der FP-Welt: **Applicative Functor**

\`\`\`fsharp
  apply: AF (a -> b) -> AF a -> AF b
\`\`\`

- Andere Bezeichnungen für "apply": ap, &lt;*&gt;
`,title:"Applicative",level:3,content:`### Applicative

- Container mit "apply" Funktion (die bestimmten Regeln folgt): Applicative
- Bezeichnung in der FP-Welt: **Applicative Functor**

\`\`\`fsharp
  apply: AF (a -> b) -> AF a -> AF b
\`\`\`

- Andere Bezeichnungen für "apply": ap, &lt;*&gt;`,frontmatter:{srcSequence:"./pages/applicative.md"},index:110,start:33,end:45,source:{filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/applicative.md",raw:`
### Applicative

- Container mit "apply" Funktion (die bestimmten Regeln folgt): Applicative
- Bezeichnung in der FP-Welt: **Applicative Functor**

\`\`\`fsharp
  apply: AF (a -> b) -> AF a -> AF b
\`\`\`

- Andere Bezeichnungen für "apply": ap, &lt;*&gt;
`,title:"Applicative",level:3,content:`### Applicative

- Container mit "apply" Funktion (die bestimmten Regeln folgt): Applicative
- Bezeichnung in der FP-Welt: **Applicative Functor**

\`\`\`fsharp
  apply: AF (a -> b) -> AF a -> AF b
\`\`\`

- Andere Bezeichnungen für "apply": ap, &lt;*&gt;`,frontmatter:{},index:2,start:33,end:45},filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/applicative.md",noteHTML:"",id:110,no:111},__clicksElements:[],__preloaded:!1}},{path:"112",name:"page-112",component:jA,meta:{srcSequence:"./pages/applicative.md",slide:{raw:`
### Funktion mit mehreren Parametern

\`\`\`fsharp
// F#
let sum a b c = a + b + c

let onlyPositive i =
    if i > 0 then Some i
    else None

let addNumbers a b c =
    let positiveA = onlyPositive a
    let positiveB = onlyPositive b
    let positiveC = onlyPositive c

    // sum ist vom Typ: (int -> int -> int -> int)
    // jede Zeile füllt ein Argument mehr aus
    // (Partial Application dank Currying)
    let (sum' : (int -> int -> int) option) = Option.map sum positiveA
    let (sum'' : (int -> int) option) = Option.apply sum' positiveB
    let (sum''' : (int) option) = Option.apply sum'' positiveC
\`\`\`
`,title:"Funktion mit mehreren Parametern",level:3,content:`### Funktion mit mehreren Parametern

\`\`\`fsharp
// F#
let sum a b c = a + b + c

let onlyPositive i =
    if i > 0 then Some i
    else None

let addNumbers a b c =
    let positiveA = onlyPositive a
    let positiveB = onlyPositive b
    let positiveC = onlyPositive c

    // sum ist vom Typ: (int -> int -> int -> int)
    // jede Zeile füllt ein Argument mehr aus
    // (Partial Application dank Currying)
    let (sum' : (int -> int -> int) option) = Option.map sum positiveA
    let (sum'' : (int -> int) option) = Option.apply sum' positiveB
    let (sum''' : (int) option) = Option.apply sum'' positiveC
\`\`\``,frontmatter:{srcSequence:"./pages/applicative.md"},index:111,start:46,end:70,source:{filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/applicative.md",raw:`
### Funktion mit mehreren Parametern

\`\`\`fsharp
// F#
let sum a b c = a + b + c

let onlyPositive i =
    if i > 0 then Some i
    else None

let addNumbers a b c =
    let positiveA = onlyPositive a
    let positiveB = onlyPositive b
    let positiveC = onlyPositive c

    // sum ist vom Typ: (int -> int -> int -> int)
    // jede Zeile füllt ein Argument mehr aus
    // (Partial Application dank Currying)
    let (sum' : (int -> int -> int) option) = Option.map sum positiveA
    let (sum'' : (int -> int) option) = Option.apply sum' positiveB
    let (sum''' : (int) option) = Option.apply sum'' positiveC
\`\`\`
`,title:"Funktion mit mehreren Parametern",level:3,content:`### Funktion mit mehreren Parametern

\`\`\`fsharp
// F#
let sum a b c = a + b + c

let onlyPositive i =
    if i > 0 then Some i
    else None

let addNumbers a b c =
    let positiveA = onlyPositive a
    let positiveB = onlyPositive b
    let positiveC = onlyPositive c

    // sum ist vom Typ: (int -> int -> int -> int)
    // jede Zeile füllt ein Argument mehr aus
    // (Partial Application dank Currying)
    let (sum' : (int -> int -> int) option) = Option.map sum positiveA
    let (sum'' : (int -> int) option) = Option.apply sum' positiveB
    let (sum''' : (int) option) = Option.apply sum'' positiveC
\`\`\``,frontmatter:{},index:3,start:46,end:70},filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/applicative.md",noteHTML:"",id:111,no:112},__clicksElements:[],__preloaded:!1}},{path:"113",name:"page-113",component:VA,meta:{srcSequence:"./pages/applicative.md",slide:{raw:`
### Funktion mit mehreren Parametern

\`\`\`csharp
// C#
Func<int, int, int, int> sum = (a, b, c) => a + b + c;

Func<int, Validation<int>> onlyPositive = i
    => i > 0
        ? Valid(i)
        : Error($"Number {i} is not positive.");

Validation<int> AddNumbers(int a, int b, int c) {
    return Valid(sum)              // returns int -> int -> int -> int
        .Apply(onlyPositive(a))    // returns int -> int -> int
        .Apply(onlyPositive(b))    // returns int -> int
        .Apply(onlyPositive(c));   // returns int

AddNumbers(1, 2, 3);    // --> Valid(6)
AddNumbers(-1, -2, -3); // --> [
                        // Error("Number -1 is not positive"),
                        // Error("Number -2 is not positive"),
                        // Error("Number -3 is not positive")
                        // ]
\`\`\`
`,title:"Funktion mit mehreren Parametern",level:3,content:`### Funktion mit mehreren Parametern

\`\`\`csharp
// C#
Func<int, int, int, int> sum = (a, b, c) => a + b + c;

Func<int, Validation<int>> onlyPositive = i
    => i > 0
        ? Valid(i)
        : Error($"Number {i} is not positive.");

Validation<int> AddNumbers(int a, int b, int c) {
    return Valid(sum)              // returns int -> int -> int -> int
        .Apply(onlyPositive(a))    // returns int -> int -> int
        .Apply(onlyPositive(b))    // returns int -> int
        .Apply(onlyPositive(c));   // returns int

AddNumbers(1, 2, 3);    // --> Valid(6)
AddNumbers(-1, -2, -3); // --> [
                        // Error("Number -1 is not positive"),
                        // Error("Number -2 is not positive"),
                        // Error("Number -3 is not positive")
                        // ]
\`\`\``,frontmatter:{srcSequence:"./pages/applicative.md"},index:112,start:71,end:97,source:{filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/applicative.md",raw:`
### Funktion mit mehreren Parametern

\`\`\`csharp
// C#
Func<int, int, int, int> sum = (a, b, c) => a + b + c;

Func<int, Validation<int>> onlyPositive = i
    => i > 0
        ? Valid(i)
        : Error($"Number {i} is not positive.");

Validation<int> AddNumbers(int a, int b, int c) {
    return Valid(sum)              // returns int -> int -> int -> int
        .Apply(onlyPositive(a))    // returns int -> int -> int
        .Apply(onlyPositive(b))    // returns int -> int
        .Apply(onlyPositive(c));   // returns int

AddNumbers(1, 2, 3);    // --> Valid(6)
AddNumbers(-1, -2, -3); // --> [
                        // Error("Number -1 is not positive"),
                        // Error("Number -2 is not positive"),
                        // Error("Number -3 is not positive")
                        // ]
\`\`\`
`,title:"Funktion mit mehreren Parametern",level:3,content:`### Funktion mit mehreren Parametern

\`\`\`csharp
// C#
Func<int, int, int, int> sum = (a, b, c) => a + b + c;

Func<int, Validation<int>> onlyPositive = i
    => i > 0
        ? Valid(i)
        : Error($"Number {i} is not positive.");

Validation<int> AddNumbers(int a, int b, int c) {
    return Valid(sum)              // returns int -> int -> int -> int
        .Apply(onlyPositive(a))    // returns int -> int -> int
        .Apply(onlyPositive(b))    // returns int -> int
        .Apply(onlyPositive(c));   // returns int

AddNumbers(1, 2, 3);    // --> Valid(6)
AddNumbers(-1, -2, -3); // --> [
                        // Error("Number -1 is not positive"),
                        // Error("Number -2 is not positive"),
                        // Error("Number -3 is not positive")
                        // ]
\`\`\``,frontmatter:{},index:4,start:71,end:97},filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/applicative.md",noteHTML:"",id:112,no:113},__clicksElements:[],__preloaded:!1}},{path:"114",name:"page-114",component:KA,meta:{title:"Veranstaltungen: BusConf",srcSequence:"./pages/veranstaltungen.md",slide:{raw:null,title:"Veranstaltungen: BusConf",level:3,content:`### Veranstaltungen: BusConf

- [https://www.bus-conf.org/](https://www.bus-conf.org/)

<img
  class="absolute top-10 right-10 w-120"
  src="/images/BusConf.png"
/>`,frontmatter:{title:"Veranstaltungen: BusConf",srcSequence:"./pages/veranstaltungen.md"},index:113,start:0,end:9,source:{filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/veranstaltungen.md",raw:`### Veranstaltungen: BusConf

- [https://www.bus-conf.org/](https://www.bus-conf.org/)

<img
  class="absolute top-10 right-10 w-120"
  src="/images/BusConf.png"
/>
`,title:"Veranstaltungen: BusConf",level:3,content:`### Veranstaltungen: BusConf

- [https://www.bus-conf.org/](https://www.bus-conf.org/)

<img
  class="absolute top-10 right-10 w-120"
  src="/images/BusConf.png"
/>`,frontmatter:{title:"Veranstaltungen: BusConf"},index:0,start:0,end:9},inline:{raw:`---
src: ./pages/veranstaltungen.md
---
`,content:"",frontmatter:{},index:37,start:166,end:170},filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/veranstaltungen.md",noteHTML:"",id:113,no:114},__clicksElements:[],__preloaded:!1}},{path:"115",name:"page-115",component:e4,meta:{srcSequence:"./pages/veranstaltungen.md",slide:{raw:`
### Veranstaltungen: Lambda Lounge Nürnberg

- [https://www.meetup.com/de-DE/Lambda-Lounge-Funktionale-Programmierung-Nurnberg/](https://www.meetup.com/de-DE/Lambda-Lounge-Funktionale-Programmierung-Nurnberg/)

<img
  class="absolute bottom-10 right-10 w-110"
  src="/images/LambdaLounge.png"
/>
`,title:"Veranstaltungen: Lambda Lounge Nürnberg",level:3,content:`### Veranstaltungen: Lambda Lounge Nürnberg

- [https://www.meetup.com/de-DE/Lambda-Lounge-Funktionale-Programmierung-Nurnberg/](https://www.meetup.com/de-DE/Lambda-Lounge-Funktionale-Programmierung-Nurnberg/)

<img
  class="absolute bottom-10 right-10 w-110"
  src="/images/LambdaLounge.png"
/>`,frontmatter:{srcSequence:"./pages/veranstaltungen.md"},index:114,start:10,end:20,source:{filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/veranstaltungen.md",raw:`
### Veranstaltungen: Lambda Lounge Nürnberg

- [https://www.meetup.com/de-DE/Lambda-Lounge-Funktionale-Programmierung-Nurnberg/](https://www.meetup.com/de-DE/Lambda-Lounge-Funktionale-Programmierung-Nurnberg/)

<img
  class="absolute bottom-10 right-10 w-110"
  src="/images/LambdaLounge.png"
/>
`,title:"Veranstaltungen: Lambda Lounge Nürnberg",level:3,content:`### Veranstaltungen: Lambda Lounge Nürnberg

- [https://www.meetup.com/de-DE/Lambda-Lounge-Funktionale-Programmierung-Nurnberg/](https://www.meetup.com/de-DE/Lambda-Lounge-Funktionale-Programmierung-Nurnberg/)

<img
  class="absolute bottom-10 right-10 w-110"
  src="/images/LambdaLounge.png"
/>`,frontmatter:{},index:1,start:10,end:20},filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/veranstaltungen.md",noteHTML:"",id:114,no:115},__clicksElements:[],__preloaded:!1}},{path:"116",name:"page-116",component:o4,meta:{srcSequence:"./pages/veranstaltungen.md",slide:{raw:`
### Veranstaltungen: Softwerkskammer

- [https://www.softwerkskammer.org/groups/magdeburg](https://www.softwerkskammer.org/groups/magdeburg)

<img
  class="absolute top-10 right-10 w-90"
  src="/images/Softwerkskammer.png"
/>
`,title:"Veranstaltungen: Softwerkskammer",level:3,content:`### Veranstaltungen: Softwerkskammer

- [https://www.softwerkskammer.org/groups/magdeburg](https://www.softwerkskammer.org/groups/magdeburg)

<img
  class="absolute top-10 right-10 w-90"
  src="/images/Softwerkskammer.png"
/>`,frontmatter:{srcSequence:"./pages/veranstaltungen.md"},index:115,start:21,end:31,source:{filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/veranstaltungen.md",raw:`
### Veranstaltungen: Softwerkskammer

- [https://www.softwerkskammer.org/groups/magdeburg](https://www.softwerkskammer.org/groups/magdeburg)

<img
  class="absolute top-10 right-10 w-90"
  src="/images/Softwerkskammer.png"
/>
`,title:"Veranstaltungen: Softwerkskammer",level:3,content:`### Veranstaltungen: Softwerkskammer

- [https://www.softwerkskammer.org/groups/magdeburg](https://www.softwerkskammer.org/groups/magdeburg)

<img
  class="absolute top-10 right-10 w-90"
  src="/images/Softwerkskammer.png"
/>`,frontmatter:{},index:2,start:21,end:31},filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/veranstaltungen.md",noteHTML:"",id:115,no:116},__clicksElements:[],__preloaded:!1}},{path:"117",name:"page-117",component:c4,meta:{title:"F# in bestehendes Projekt integrieren",srcSequence:"./pages/introducing_fsharp.md",slide:{raw:null,title:"F# in bestehendes Projekt integrieren",level:2,content:"## F# in bestehendes Projekt integrieren",frontmatter:{title:"F# in bestehendes Projekt integrieren",srcSequence:"./pages/introducing_fsharp.md"},index:116,start:0,end:2,source:{filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/introducing_fsharp.md",raw:`## F# in bestehendes Projekt integrieren
`,title:"F# in bestehendes Projekt integrieren",level:2,content:"## F# in bestehendes Projekt integrieren",frontmatter:{title:"F# in bestehendes Projekt integrieren"},index:0,start:0,end:2},inline:{raw:`---
src: ./pages/introducing_fsharp.md
---
`,content:"",frontmatter:{},index:38,start:170,end:174},filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/introducing_fsharp.md",noteHTML:"",id:116,no:117},__clicksElements:[],__preloaded:!1}},{path:"118",name:"page-118",component:m4,meta:{srcSequence:"./pages/introducing_fsharp.md",slide:{raw:`
### Tests

- [FsUnit](https://github.com/fsprojects/FsUnit) für lesbarere Tests

<img
  class="absolute top-35 left-20 w-200"
  src="/images/FsUnit.png"
/>
`,title:"Tests",level:3,content:`### Tests

- [FsUnit](https://github.com/fsprojects/FsUnit) für lesbarere Tests

<img
  class="absolute top-35 left-20 w-200"
  src="/images/FsUnit.png"
/>`,frontmatter:{srcSequence:"./pages/introducing_fsharp.md"},index:117,start:3,end:13,source:{filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/introducing_fsharp.md",raw:`
### Tests

- [FsUnit](https://github.com/fsprojects/FsUnit) für lesbarere Tests

<img
  class="absolute top-35 left-20 w-200"
  src="/images/FsUnit.png"
/>
`,title:"Tests",level:3,content:`### Tests

- [FsUnit](https://github.com/fsprojects/FsUnit) für lesbarere Tests

<img
  class="absolute top-35 left-20 w-200"
  src="/images/FsUnit.png"
/>`,frontmatter:{},index:1,start:3,end:13},filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/introducing_fsharp.md",noteHTML:"",id:117,no:118},__clicksElements:[],__preloaded:!1}},{path:"119",name:"page-119",component:y4,meta:{srcSequence:"./pages/introducing_fsharp.md",slide:{raw:`
### Tests

- [FsCheck](https://fscheck.github.io/FsCheck/) für Property Based Testing

<img
  class="absolute top-35 left-20 w-200"
  src="/images/FsCheck.png"
/>
`,title:"Tests",level:3,content:`### Tests

- [FsCheck](https://fscheck.github.io/FsCheck/) für Property Based Testing

<img
  class="absolute top-35 left-20 w-200"
  src="/images/FsCheck.png"
/>`,frontmatter:{srcSequence:"./pages/introducing_fsharp.md"},index:118,start:14,end:24,source:{filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/introducing_fsharp.md",raw:`
### Tests

- [FsCheck](https://fscheck.github.io/FsCheck/) für Property Based Testing

<img
  class="absolute top-35 left-20 w-200"
  src="/images/FsCheck.png"
/>
`,title:"Tests",level:3,content:`### Tests

- [FsCheck](https://fscheck.github.io/FsCheck/) für Property Based Testing

<img
  class="absolute top-35 left-20 w-200"
  src="/images/FsCheck.png"
/>`,frontmatter:{},index:2,start:14,end:24},filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/introducing_fsharp.md",noteHTML:"",id:118,no:119},__clicksElements:[],__preloaded:!1}},{path:"120",name:"page-120",component:P4,meta:{srcSequence:"./pages/introducing_fsharp.md",slide:{raw:`
### Tests

- [Unquote](https://github.com/SwensenSoftware/unquote) für besseren "Callstack" bei fehlschlagenden Tests

<img
  class="absolute top-35 left-20 w-200"
  src="/images/Unquote.png"
/>
`,title:"Tests",level:3,content:`### Tests

- [Unquote](https://github.com/SwensenSoftware/unquote) für besseren "Callstack" bei fehlschlagenden Tests

<img
  class="absolute top-35 left-20 w-200"
  src="/images/Unquote.png"
/>`,frontmatter:{srcSequence:"./pages/introducing_fsharp.md"},index:119,start:25,end:35,source:{filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/introducing_fsharp.md",raw:`
### Tests

- [Unquote](https://github.com/SwensenSoftware/unquote) für besseren "Callstack" bei fehlschlagenden Tests

<img
  class="absolute top-35 left-20 w-200"
  src="/images/Unquote.png"
/>
`,title:"Tests",level:3,content:`### Tests

- [Unquote](https://github.com/SwensenSoftware/unquote) für besseren "Callstack" bei fehlschlagenden Tests

<img
  class="absolute top-35 left-20 w-200"
  src="/images/Unquote.png"
/>`,frontmatter:{},index:3,start:25,end:35},filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/introducing_fsharp.md",noteHTML:"",id:119,no:120},__clicksElements:[],__preloaded:!1}},{path:"121",name:"page-121",component:M4,meta:{srcSequence:"./pages/introducing_fsharp.md",slide:{raw:`
### Builds

- [FAKE](https://fake.build/) als erweiterbare DSL für Build-Tasks

<img
  class="absolute top-35 left-20 w-200"
  src="/images/FAKE.png"
/>
`,title:"Builds",level:3,content:`### Builds

- [FAKE](https://fake.build/) als erweiterbare DSL für Build-Tasks

<img
  class="absolute top-35 left-20 w-200"
  src="/images/FAKE.png"
/>`,frontmatter:{srcSequence:"./pages/introducing_fsharp.md"},index:120,start:36,end:46,source:{filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/introducing_fsharp.md",raw:`
### Builds

- [FAKE](https://fake.build/) als erweiterbare DSL für Build-Tasks

<img
  class="absolute top-35 left-20 w-200"
  src="/images/FAKE.png"
/>
`,title:"Builds",level:3,content:`### Builds

- [FAKE](https://fake.build/) als erweiterbare DSL für Build-Tasks

<img
  class="absolute top-35 left-20 w-200"
  src="/images/FAKE.png"
/>`,frontmatter:{},index:4,start:36,end:46},filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/introducing_fsharp.md",noteHTML:"",id:120,no:121},__clicksElements:[],__preloaded:!1}},{path:"122",name:"page-122",component:q4,meta:{srcSequence:"./pages/introducing_fsharp.md",slide:{raw:`
### Builds

- [Paket](https://github.com/fsprojects/Paket) als Alternative zu Nuget

<img
  class="absolute top-35 left-20 w-200"
  src="/images/Paket.png"
/>
`,title:"Builds",level:3,content:`### Builds

- [Paket](https://github.com/fsprojects/Paket) als Alternative zu Nuget

<img
  class="absolute top-35 left-20 w-200"
  src="/images/Paket.png"
/>`,frontmatter:{srcSequence:"./pages/introducing_fsharp.md"},index:121,start:47,end:57,source:{filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/introducing_fsharp.md",raw:`
### Builds

- [Paket](https://github.com/fsprojects/Paket) als Alternative zu Nuget

<img
  class="absolute top-35 left-20 w-200"
  src="/images/Paket.png"
/>
`,title:"Builds",level:3,content:`### Builds

- [Paket](https://github.com/fsprojects/Paket) als Alternative zu Nuget

<img
  class="absolute top-35 left-20 w-200"
  src="/images/Paket.png"
/>`,frontmatter:{},index:5,start:47,end:57},filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/introducing_fsharp.md",noteHTML:"",id:121,no:122},__clicksElements:[],__preloaded:!1}},{path:"123",name:"page-123",component:H4,meta:{srcSequence:"./pages/introducing_fsharp.md",slide:{raw:`
### Builds

- [Farmer](https://compositionalit.github.io/farmer/): Making repeatable Azure deployments easy!

<img
  class="absolute top-35 left-20 w-120"
  src="/images/Farmer.png"
/>
`,title:"Builds",level:3,content:`### Builds

- [Farmer](https://compositionalit.github.io/farmer/): Making repeatable Azure deployments easy!

<img
  class="absolute top-35 left-20 w-120"
  src="/images/Farmer.png"
/>`,frontmatter:{srcSequence:"./pages/introducing_fsharp.md"},index:122,start:58,end:68,source:{filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/introducing_fsharp.md",raw:`
### Builds

- [Farmer](https://compositionalit.github.io/farmer/): Making repeatable Azure deployments easy!

<img
  class="absolute top-35 left-20 w-120"
  src="/images/Farmer.png"
/>
`,title:"Builds",level:3,content:`### Builds

- [Farmer](https://compositionalit.github.io/farmer/): Making repeatable Azure deployments easy!

<img
  class="absolute top-35 left-20 w-120"
  src="/images/Farmer.png"
/>`,frontmatter:{},index:6,start:58,end:68},filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/introducing_fsharp.md",noteHTML:"",id:122,no:123},__clicksElements:[],__preloaded:!1}},{path:"124",name:"page-124",component:J4,meta:{srcSequence:"./pages/introducing_fsharp.md",slide:{raw:`
## Web

- Webseiten mit [Fable](https://fable.io/)

<img
  class="absolute top-45 left-40 w-130"
  src="/images/Fable.png"
/>
`,title:"Web",level:2,content:`## Web

- Webseiten mit [Fable](https://fable.io/)

<img
  class="absolute top-45 left-40 w-130"
  src="/images/Fable.png"
/>`,frontmatter:{srcSequence:"./pages/introducing_fsharp.md"},index:123,start:69,end:79,source:{filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/introducing_fsharp.md",raw:`
## Web

- Webseiten mit [Fable](https://fable.io/)

<img
  class="absolute top-45 left-40 w-130"
  src="/images/Fable.png"
/>
`,title:"Web",level:2,content:`## Web

- Webseiten mit [Fable](https://fable.io/)

<img
  class="absolute top-45 left-40 w-130"
  src="/images/Fable.png"
/>`,frontmatter:{},index:7,start:69,end:79},filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/introducing_fsharp.md",noteHTML:"",id:123,no:124},__clicksElements:[],__preloaded:!1}},{path:"125",name:"page-125",component:sF,meta:{srcSequence:"./pages/introducing_fsharp.md",slide:{raw:`
## Web

- Mobile Apps mit [Fabulous](https://fabulous.dev/) (Xamarin)

<img
  class="absolute top-45 left-20 w-150"
  src="/images/Fabulous.png"
/>
`,title:"Web",level:2,content:`## Web

- Mobile Apps mit [Fabulous](https://fabulous.dev/) (Xamarin)

<img
  class="absolute top-45 left-20 w-150"
  src="/images/Fabulous.png"
/>`,frontmatter:{srcSequence:"./pages/introducing_fsharp.md"},index:124,start:80,end:90,source:{filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/introducing_fsharp.md",raw:`
## Web

- Mobile Apps mit [Fabulous](https://fabulous.dev/) (Xamarin)

<img
  class="absolute top-45 left-20 w-150"
  src="/images/Fabulous.png"
/>
`,title:"Web",level:2,content:`## Web

- Mobile Apps mit [Fabulous](https://fabulous.dev/) (Xamarin)

<img
  class="absolute top-45 left-20 w-150"
  src="/images/Fabulous.png"
/>`,frontmatter:{},index:8,start:80,end:90},filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/introducing_fsharp.md",noteHTML:"",id:124,no:125},__clicksElements:[],__preloaded:!1}},{path:"126",name:"page-126",component:cF,meta:{srcSequence:"./pages/introducing_fsharp.md",slide:{raw:`
## Web

- Full-Stack-Webanwendungen mit dem SAFE-Stack

<img
  class="absolute top-45 left-20 w-180"
  src="/images/SAFE.png"
/>
`,title:"Web",level:2,content:`## Web

- Full-Stack-Webanwendungen mit dem SAFE-Stack

<img
  class="absolute top-45 left-20 w-180"
  src="/images/SAFE.png"
/>`,frontmatter:{srcSequence:"./pages/introducing_fsharp.md"},index:125,start:91,end:101,source:{filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/introducing_fsharp.md",raw:`
## Web

- Full-Stack-Webanwendungen mit dem SAFE-Stack

<img
  class="absolute top-45 left-20 w-180"
  src="/images/SAFE.png"
/>
`,title:"Web",level:2,content:`## Web

- Full-Stack-Webanwendungen mit dem SAFE-Stack

<img
  class="absolute top-45 left-20 w-180"
  src="/images/SAFE.png"
/>`,frontmatter:{},index:9,start:91,end:101},filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/introducing_fsharp.md",noteHTML:"",id:125,no:126},__clicksElements:[],__preloaded:!1}},{path:"127",name:"page-127",component:dF,meta:{title:"Danke",srcSequence:"./pages/99-exit.md",slide:{raw:null,title:"Danke",level:1,content:"# Danke",frontmatter:{title:"Danke",srcSequence:"./pages/99-exit.md"},index:126,start:0,end:2,source:{filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/99-exit.md",raw:`# Danke
`,title:"Danke",level:1,content:"# Danke",frontmatter:{title:"Danke"},index:0,start:0,end:2},inline:{raw:`---
src: ./pages/99-exit.md
---
`,content:"",frontmatter:{},index:39,start:174,end:178},filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/99-exit.md",noteHTML:"",id:126,no:127},__clicksElements:[],__preloaded:!1}},{path:"128",name:"page-128",component:gF,meta:{srcSequence:"./pages/99-exit.md",slide:{raw:`
## Ressourcen

- FP
  - Blog: [Mark Seeman](https://blog.ploeh.dk/)
  - Book: [Domain Modeling Made Functional](https://pragprog.com/book/swdddf/domain-modeling-made-functional)
  - Book: [Grokking Simplicity](https://www.manning.com/books/grokking-simplicity)
- C#
  - Book: [Functional Programming in C#](https://www.manning.com/books/functional-programming-in-c-sharp)
  - Blog: [Vladimir Khorikov](https://enterprisecraftsmanship.com/)
- F#
  - [F# Homepage](https://fsharp.org/)
  - [F# for Fun and Profit](https://fsharpforfunandprofit.com/)
  - [Railway Oriented Programming](https://fsharpforfunandprofit.com/rop/)
`,title:"Ressourcen",level:2,content:`## Ressourcen

- FP
  - Blog: [Mark Seeman](https://blog.ploeh.dk/)
  - Book: [Domain Modeling Made Functional](https://pragprog.com/book/swdddf/domain-modeling-made-functional)
  - Book: [Grokking Simplicity](https://www.manning.com/books/grokking-simplicity)
- C#
  - Book: [Functional Programming in C#](https://www.manning.com/books/functional-programming-in-c-sharp)
  - Blog: [Vladimir Khorikov](https://enterprisecraftsmanship.com/)
- F#
  - [F# Homepage](https://fsharp.org/)
  - [F# for Fun and Profit](https://fsharpforfunandprofit.com/)
  - [Railway Oriented Programming](https://fsharpforfunandprofit.com/rop/)`,frontmatter:{srcSequence:"./pages/99-exit.md"},index:127,start:3,end:18,source:{filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/99-exit.md",raw:`
## Ressourcen

- FP
  - Blog: [Mark Seeman](https://blog.ploeh.dk/)
  - Book: [Domain Modeling Made Functional](https://pragprog.com/book/swdddf/domain-modeling-made-functional)
  - Book: [Grokking Simplicity](https://www.manning.com/books/grokking-simplicity)
- C#
  - Book: [Functional Programming in C#](https://www.manning.com/books/functional-programming-in-c-sharp)
  - Blog: [Vladimir Khorikov](https://enterprisecraftsmanship.com/)
- F#
  - [F# Homepage](https://fsharp.org/)
  - [F# for Fun and Profit](https://fsharpforfunandprofit.com/)
  - [Railway Oriented Programming](https://fsharpforfunandprofit.com/rop/)
`,title:"Ressourcen",level:2,content:`## Ressourcen

- FP
  - Blog: [Mark Seeman](https://blog.ploeh.dk/)
  - Book: [Domain Modeling Made Functional](https://pragprog.com/book/swdddf/domain-modeling-made-functional)
  - Book: [Grokking Simplicity](https://www.manning.com/books/grokking-simplicity)
- C#
  - Book: [Functional Programming in C#](https://www.manning.com/books/functional-programming-in-c-sharp)
  - Blog: [Vladimir Khorikov](https://enterprisecraftsmanship.com/)
- F#
  - [F# Homepage](https://fsharp.org/)
  - [F# for Fun and Profit](https://fsharpforfunandprofit.com/)
  - [Railway Oriented Programming](https://fsharpforfunandprofit.com/rop/)`,frontmatter:{},index:1,start:3,end:18},filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/99-exit.md",noteHTML:"",id:127,no:128},__clicksElements:[],__preloaded:!1}},{path:"129",name:"page-129",component:l5,meta:{layout:"two-cols",srcSequence:"./pages/99-exit.md",slide:{raw:`---
layout: two-cols
---

### Patrick Drechsler

- <mdi-email /> patrick.drechsler@mathema.de
- <logos-github-icon /> https://github.com/draptik
- <mdi-web /> Blog: https://draptik.github.io
- <logos-twitter /> @drechsler
- <logos-mastodon-icon /> @drechsler@floss.social
- <logos-linkedin-icon /> https://www.linkedin.com/in/patrick-drechsler-985a2911/

Slides: 

- QR-Code 👉
- https://mathema-gmbh.github.io/2023-05-magdeburger-devdays-fp-csharp-to-fsharp

::right::

### Martin Grotz

- <mdi-email /> martin.grotz@mathema.de
- <logos-github-icon /> https://github.com/groma84
- <mdi-web /> Blog: https://elm.finde-ich-super.de
- <logos-twitter /> @mobilgroma

<img 
  class="absolute bottom-10 right-50 w-60"
  src="/images/qr-code-magdegeburger-devdays.png" >
`,title:"Patrick Drechsler",level:3,content:`### Patrick Drechsler

- <mdi-email /> patrick.drechsler@mathema.de
- <logos-github-icon /> https://github.com/draptik
- <mdi-web /> Blog: https://draptik.github.io
- <logos-twitter /> @drechsler
- <logos-mastodon-icon /> @drechsler@floss.social
- <logos-linkedin-icon /> https://www.linkedin.com/in/patrick-drechsler-985a2911/

Slides: 

- QR-Code 👉
- https://mathema-gmbh.github.io/2023-05-magdeburger-devdays-fp-csharp-to-fsharp

::right::

### Martin Grotz

- <mdi-email /> martin.grotz@mathema.de
- <logos-github-icon /> https://github.com/groma84
- <mdi-web /> Blog: https://elm.finde-ich-super.de
- <logos-twitter /> @mobilgroma

<img 
  class="absolute bottom-10 right-50 w-60"
  src="/images/qr-code-magdegeburger-devdays.png" >`,frontmatter:{layout:"two-cols",srcSequence:"./pages/99-exit.md"},index:128,start:18,end:49,source:{filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/99-exit.md",raw:`---
layout: two-cols
---

### Patrick Drechsler

- <mdi-email /> patrick.drechsler@mathema.de
- <logos-github-icon /> https://github.com/draptik
- <mdi-web /> Blog: https://draptik.github.io
- <logos-twitter /> @drechsler
- <logos-mastodon-icon /> @drechsler@floss.social
- <logos-linkedin-icon /> https://www.linkedin.com/in/patrick-drechsler-985a2911/

Slides: 

- QR-Code 👉
- https://mathema-gmbh.github.io/2023-05-magdeburger-devdays-fp-csharp-to-fsharp

::right::

### Martin Grotz

- <mdi-email /> martin.grotz@mathema.de
- <logos-github-icon /> https://github.com/groma84
- <mdi-web /> Blog: https://elm.finde-ich-super.de
- <logos-twitter /> @mobilgroma

<img 
  class="absolute bottom-10 right-50 w-60"
  src="/images/qr-code-magdegeburger-devdays.png" >
`,title:"Patrick Drechsler",level:3,content:`### Patrick Drechsler

- <mdi-email /> patrick.drechsler@mathema.de
- <logos-github-icon /> https://github.com/draptik
- <mdi-web /> Blog: https://draptik.github.io
- <logos-twitter /> @drechsler
- <logos-mastodon-icon /> @drechsler@floss.social
- <logos-linkedin-icon /> https://www.linkedin.com/in/patrick-drechsler-985a2911/

Slides: 

- QR-Code 👉
- https://mathema-gmbh.github.io/2023-05-magdeburger-devdays-fp-csharp-to-fsharp

::right::

### Martin Grotz

- <mdi-email /> martin.grotz@mathema.de
- <logos-github-icon /> https://github.com/groma84
- <mdi-web /> Blog: https://elm.finde-ich-super.de
- <logos-twitter /> @mobilgroma

<img 
  class="absolute bottom-10 right-50 w-60"
  src="/images/qr-code-magdegeburger-devdays.png" >`,frontmatter:{layout:"two-cols"},index:2,start:18,end:49},filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/99-exit.md",noteHTML:"",id:128,no:129},__clicksElements:[],__preloaded:!1}},{path:"130",name:"page-130",component:p5,meta:{srcSequence:"./pages/99-exit.md",slide:{raw:`
## Feedback und Fragen
`,title:"Feedback und Fragen",level:2,content:"## Feedback und Fragen",frontmatter:{srcSequence:"./pages/99-exit.md"},index:129,start:50,end:53,source:{filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/99-exit.md",raw:`
## Feedback und Fragen
`,title:"Feedback und Fragen",level:2,content:"## Feedback und Fragen",frontmatter:{},index:3,start:50,end:53},filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/99-exit.md",noteHTML:"",id:129,no:130},__clicksElements:[],__preloaded:!1}},{path:"131",name:"page-131",component:f5,meta:{srcSequence:"./pages/99-exit.md",slide:{raw:"",content:"",frontmatter:{srcSequence:"./pages/99-exit.md"},index:130,start:54,end:55,source:{filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/99-exit.md",raw:"",content:"",frontmatter:{},index:4,start:54,end:55},filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/99-exit.md",noteHTML:"",id:130,no:131},__clicksElements:[],__preloaded:!1}},{path:"132",component:N3,meta:{layout:"end"}}],Ye=h5,m5=[{name:"play",path:"/",component:aw,children:[...Ye]},{name:"print",path:"/print",component:A3},{path:"",redirect:{path:"/1"}},{path:"/:pathMatch(.*)",redirect:{path:"/1"}}],bn=Bb({history:R0("/2023-05-magdeburger-devdays-fp-csharp-to-fsharp"),routes:m5});function g5(e,n,{mode:s="replace"}={}){return L({get(){const a=bn.currentRoute.value.query[e];return a==null?n??null:Array.isArray(a)?a.filter(Boolean):a},set(a){nn(()=>{bn[C(s)]({query:{...bn.currentRoute.value.query,[e]:a}})})}})}const Sf=se(0);nn(()=>{bn.afterEach(async()=>{await nn(),Sf.value+=1})});const Ef=se(0),jn=L(()=>bn.currentRoute.value),Ms=L(()=>jn.value.query.print!==void 0),_5=L(()=>jn.value.query.print==="clicks"),rt=L(()=>jn.value.query.embedded!==void 0),_n=L(()=>jn.value.path.startsWith("/presenter")),k5=L(()=>jn.value.path.startsWith("/notes")),la=L(()=>Ms.value&&!_5.value),vi=L(()=>jn.value.query.password);L(()=>!_n.value&&(!Ce.remote||vi.value===Ce.remote));const wu=g5("clicks","0"),$f=L(()=>Ye.length-1),b5=L(()=>jn.value.path),Ge=L(()=>parseInt(b5.value.split(/\//g).slice(-1)[0])||1);L(()=>eo(Ge.value));const un=L(()=>Ye.find(e=>e.path===`${Ge.value}`));L(()=>{var e,n,s;return(s=(n=(e=un.value)==null?void 0:e.meta)==null?void 0:n.slide)==null?void 0:s.id});L(()=>{var e,n;return((n=(e=un.value)==null?void 0:e.meta)==null?void 0:n.layout)||(Ge.value===1?"cover":"default")});const Po=L(()=>Ye.find(e=>e.path===`${Math.min(Ye.length,Ge.value+1)}`)),v5=L(()=>Ye.find(e=>e.path===`${Math.max(1,Ge.value-1)}`)),y5=L(()=>{var e,n;return Sf.value,((n=(e=un.value)==null?void 0:e.meta)==null?void 0:n.__clicksElements)||[]}),In=L({get(){if(la.value)return 99999;let e=+(wu.value||0);return isNaN(e)&&(e=0),e},set(e){wu.value=e.toString()}}),Fr=L(()=>{var e,n;return+(((n=(e=un.value)==null?void 0:e.meta)==null?void 0:n.clicks)??y5.value.length)}),w5=L(()=>Ge.value<Ye.length-1||In.value<Fr.value),x5=L(()=>Ge.value>1||In.value>0),S5=L(()=>Ye.filter(e=>{var n,s;return(s=(n=e.meta)==null?void 0:n.slide)==null?void 0:s.title}).reduce((e,n)=>(_l(e,n),e),[])),E5=L(()=>kl(S5.value,un.value));L(()=>bl(E5.value));const $5=L(()=>A5(Ef.value,un.value,v5.value));we(un,(e,n)=>{Ef.value=Number(e==null?void 0:e.path)-Number(n==null?void 0:n.path)});function At(){Fr.value<=In.value?$a():In.value+=1}async function Ft(){In.value<=0?await Pa():In.value-=1}function eo(e){return _n.value?`/presenter/${e}`:`/${e}`}function $a(){const e=Math.min(Ye.length,Ge.value+1);return Ns(e)}async function Pa(e=!0){const n=Math.max(1,Ge.value-1);await Ns(n),e&&Fr.value&&bn.replace({query:{...jn.value.query,clicks:Fr.value}})}function Ns(e,n){return bn.push({path:eo(e),query:{...jn.value.query,clicks:n}})}function P5(e){const n=se(0),{direction:s,distanceX:a,distanceY:r}=c0(e,{onSwipeStart(i){i.pointerType==="touch"&&(xa.value||(n.value=Z1()))},onSwipeEnd(i){if(i.pointerType!=="touch"||!n.value||xa.value)return;const l=Math.abs(a.value),c=Math.abs(r.value);l/window.innerWidth>.3||l>100?s.value===lt.LEFT?At():Ft():(c/window.innerHeight>.4||c>200)&&(s.value===lt.DOWN?Pa():$a())}})}async function yi(){const{saveAs:e}=await ja(()=>import("./FileSaver.min-17c85779.js").then(n=>n.F),[]);e(Cd(Ce.download)?Ce.download:Ce.exportFilename?`${Ce.exportFilename}.pdf`:"/2023-05-magdeburger-devdays-fp-csharp-to-fsharpslidev-exported.pdf",`${Ce.title}.pdf`)}async function T5(e){var n,s;if(e==null){const a=(s=(n=un.value)==null?void 0:n.meta)==null?void 0:s.slide;if(!(a!=null&&a.filepath))return!1;e=`${a.filepath}:${a.start}`}return await fetch(`/__open-in-editor?file=${encodeURIComponent(e)}`),!0}function _l(e,n,s=1){var r,i,l,c,u;const a=(i=(r=n.meta)==null?void 0:r.slide)==null?void 0:i.level;a&&a>s&&e.length>0?_l(e[e.length-1].children,n,s+1):e.push({children:[],level:s,path:n.path,hideInToc:Boolean((l=n.meta)==null?void 0:l.hideInToc),title:(u=(c=n.meta)==null?void 0:c.slide)==null?void 0:u.title})}function kl(e,n,s=!1,a){return e.map(r=>{const i={...r,active:r.path===(n==null?void 0:n.path),hasActiveParent:s};return i.children.length>0&&(i.children=kl(i.children,n,i.active||i.hasActiveParent,i)),a&&(i.active||i.activeParent)&&(a.activeParent=!0),i})}function bl(e,n=1){return e.filter(s=>!s.hideInToc).map(s=>({...s,children:bl(s.children,n+1)}))}const C5={"slide-left":"slide-left | slide-right","slide-right":"slide-right | slide-left","slide-up":"slide-up | slide-down","slide-down":"slide-down | slide-up"};function O5(e,n=!1){if(!e||(typeof e=="string"&&(e={name:e}),!e.name))return;let s=e.name.includes("|")?e.name:C5[e.name]||e.name;if(s.includes("|")){const[a,r]=s.split("|").map(i=>i.trim());s=n?r:a}if(s)return{...e,name:s}}function A5(e,n,s){var r,i;let a=e>0?(r=s==null?void 0:s.meta)==null?void 0:r.transition:(i=n==null?void 0:n.meta)==null?void 0:i.transition;return a||(a=Ce.transition),O5(a,e<0)}function F5(){const e=Ce.titleTemplate.replace("%s",Ce.title||"Slidev");sl({title:e}),E1(Ce.htmlAttrs),j1(`${e} - shared`),V1(`${e} - drawings`);const n=`${location.origin}_${A1()}`;function s(){k5.value||!_n.value&&!O1.includes(location.host.split(":")[0])||(_n.value?(Ws("page",+Ge.value),Ws("clicks",In.value)):(Ws("viewerPage",+Ge.value),Ws("viewerClicks",In.value)),Ws("lastUpdate",{id:n,type:_n.value?"presenter":"viewer",time:new Date().getTime()}))}bn.afterEach(s),we(In,s),q1(a=>{var i;bn.currentRoute.value.path.match(/^\/(\d+|presenter)\/?/)&&((i=a.lastUpdate)==null?void 0:i.type)==="presenter"&&(+a.page!=+Ge.value||+In.value!=+a.clicks)&&bn.replace({path:eo(a.page),query:{...bn.currentRoute.value.query,clicks:a.clicks||0}})})}const M5=Me({__name:"App",setup(e){return S(P),F5(),(n,s)=>{const a=yr("RouterView"),r=yr("StarportCarrier");return k(),ee(Fe,null,[q(a),q(r)],64)}}}),N5=T(M5,[["__file","/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/node_modules/@slidev/client/App.vue"]]);function To(e){return e!==null&&typeof e=="object"}function wi(e,n,s=".",a){if(!To(n))return wi(e,{},s,a);const r=Object.assign({},n);for(const i in e){if(i==="__proto__"||i==="constructor")continue;const l=e[i];l!=null&&(a&&a(r,i,l,s)||(Array.isArray(l)&&Array.isArray(r[i])?r[i]=[...l,...r[i]]:To(l)&&To(r[i])?r[i]=wi(l,r[i],(s?`${s}.`:"")+i.toString(),a):r[i]=l))}return r}function I5(e){return(...n)=>n.reduce((s,a)=>wi(s,a,"",e),{})}const D5=I5(),Pf=1/60*1e3,L5=typeof performance<"u"?()=>performance.now():()=>Date.now(),Tf=typeof window<"u"?e=>window.requestAnimationFrame(e):e=>setTimeout(()=>e(L5()),Pf);function j5(e){let n=[],s=[],a=0,r=!1,i=!1;const l=new WeakSet,c={schedule:(u,p=!1,d=!1)=>{const f=d&&r,h=f?n:s;return p&&l.add(u),h.indexOf(u)===-1&&(h.push(u),f&&r&&(a=n.length)),u},cancel:u=>{const p=s.indexOf(u);p!==-1&&s.splice(p,1),l.delete(u)},process:u=>{if(r){i=!0;return}if(r=!0,[n,s]=[s,n],s.length=0,a=n.length,a)for(let p=0;p<a;p++){const d=n[p];d(u),l.has(d)&&(c.schedule(d),e())}r=!1,i&&(i=!1,c.process(u))}};return c}const q5=40;let xi=!0,Ta=!1,Si=!1;const Cs={delta:0,timestamp:0},Ra=["read","update","preRender","render","postRender"],no=Ra.reduce((e,n)=>(e[n]=j5(()=>Ta=!0),e),{}),Ei=Ra.reduce((e,n)=>{const s=no[n];return e[n]=(a,r=!1,i=!1)=>(Ta||V5(),s.schedule(a,r,i)),e},{}),R5=Ra.reduce((e,n)=>(e[n]=no[n].cancel,e),{});Ra.reduce((e,n)=>(e[n]=()=>no[n].process(Cs),e),{});const B5=e=>no[e].process(Cs),Cf=e=>{Ta=!1,Cs.delta=xi?Pf:Math.max(Math.min(e-Cs.timestamp,q5),1),Cs.timestamp=e,Si=!0,Ra.forEach(B5),Si=!1,Ta&&(xi=!1,Tf(Cf))},V5=()=>{Ta=!0,xi=!0,Si||Tf(Cf)},Of=()=>Cs;function Af(e,n){var s={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&n.indexOf(a)<0&&(s[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,a=Object.getOwnPropertySymbols(e);r<a.length;r++)n.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(s[a[r]]=e[a[r]]);return s}var vl=function(){},Ca=function(){};vl=function(e,n){!e&&typeof console<"u"&&console.warn(n)},Ca=function(e,n){if(!e)throw new Error(n)};const $i=(e,n,s)=>Math.min(Math.max(s,e),n),Co=.001,z5=.01,xu=10,W5=.05,H5=1;function U5({duration:e=800,bounce:n=.25,velocity:s=0,mass:a=1}){let r,i;vl(e<=xu*1e3,"Spring duration must be 10 seconds or less");let l=1-n;l=$i(W5,H5,l),e=$i(z5,xu,e/1e3),l<1?(r=p=>{const d=p*l,f=d*e,h=d-s,m=Pi(p,l),g=Math.exp(-f);return Co-h/m*g},i=p=>{const f=p*l*e,h=f*s+s,m=Math.pow(l,2)*Math.pow(p,2)*e,g=Math.exp(-f),b=Pi(Math.pow(p,2),l);return(-r(p)+Co>0?-1:1)*((h-m)*g)/b}):(r=p=>{const d=Math.exp(-p*e),f=(p-s)*e+1;return-Co+d*f},i=p=>{const d=Math.exp(-p*e),f=(s-p)*(e*e);return d*f});const c=5/e,u=K5(r,i,c);if(e=e*1e3,isNaN(u))return{stiffness:100,damping:10,duration:e};{const p=Math.pow(u,2)*a;return{stiffness:p,damping:l*2*Math.sqrt(a*p),duration:e}}}const G5=12;function K5(e,n,s){let a=s;for(let r=1;r<G5;r++)a=a-e(a)/n(a);return a}function Pi(e,n){return e*Math.sqrt(1-n*n)}const Z5=["duration","bounce"],Y5=["stiffness","damping","mass"];function Su(e,n){return n.some(s=>e[s]!==void 0)}function J5(e){let n=Object.assign({velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1},e);if(!Su(e,Y5)&&Su(e,Z5)){const s=U5(e);n=Object.assign(Object.assign(Object.assign({},n),s),{velocity:0,mass:1}),n.isResolvedFromDuration=!0}return n}function yl(e){var{from:n=0,to:s=1,restSpeed:a=2,restDelta:r}=e,i=Af(e,["from","to","restSpeed","restDelta"]);const l={done:!1,value:n};let{stiffness:c,damping:u,mass:p,velocity:d,duration:f,isResolvedFromDuration:h}=J5(i),m=Eu,g=Eu;function b(){const y=d?-(d/1e3):0,O=s-n,x=u/(2*Math.sqrt(c*p)),E=Math.sqrt(c/p)/1e3;if(r===void 0&&(r=Math.min(Math.abs(s-n)/100,.4)),x<1){const A=Pi(E,x);m=R=>{const W=Math.exp(-x*E*R);return s-W*((y+x*E*O)/A*Math.sin(A*R)+O*Math.cos(A*R))},g=R=>{const W=Math.exp(-x*E*R);return x*E*W*(Math.sin(A*R)*(y+x*E*O)/A+O*Math.cos(A*R))-W*(Math.cos(A*R)*(y+x*E*O)-A*O*Math.sin(A*R))}}else if(x===1)m=A=>s-Math.exp(-E*A)*(O+(y+E*O)*A);else{const A=E*Math.sqrt(x*x-1);m=R=>{const W=Math.exp(-x*E*R),Y=Math.min(A*R,300);return s-W*((y+x*E*O)*Math.sinh(Y)+A*O*Math.cosh(Y))/A}}}return b(),{next:y=>{const O=m(y);if(h)l.done=y>=f;else{const x=g(y)*1e3,E=Math.abs(x)<=a,A=Math.abs(s-O)<=r;l.done=E&&A}return l.value=l.done?s:O,l},flipTarget:()=>{d=-d,[n,s]=[s,n],b()}}}yl.needsInterpolation=(e,n)=>typeof e=="string"||typeof n=="string";const Eu=e=>0,Ff=(e,n,s)=>{const a=n-e;return a===0?1:(s-e)/a},wl=(e,n,s)=>-s*e+s*n+e,Mf=(e,n)=>s=>Math.max(Math.min(s,n),e),ca=e=>e%1?Number(e.toFixed(5)):e,Oa=/(-)?([\d]*\.?[\d])+/g,Ti=/(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,Q5=/^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;function Ba(e){return typeof e=="string"}const Va={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},ua=Object.assign(Object.assign({},Va),{transform:Mf(0,1)}),nr=Object.assign(Object.assign({},Va),{default:1}),xl=e=>({test:n=>Ba(n)&&n.endsWith(e)&&n.split(" ").length===1,parse:parseFloat,transform:n=>`${n}${e}`}),Bt=xl("deg"),pa=xl("%"),ve=xl("px"),$u=Object.assign(Object.assign({},pa),{parse:e=>pa.parse(e)/100,transform:e=>pa.transform(e*100)}),Sl=(e,n)=>s=>Boolean(Ba(s)&&Q5.test(s)&&s.startsWith(e)||n&&Object.prototype.hasOwnProperty.call(s,n)),Nf=(e,n,s)=>a=>{if(!Ba(a))return a;const[r,i,l,c]=a.match(Oa);return{[e]:parseFloat(r),[n]:parseFloat(i),[s]:parseFloat(l),alpha:c!==void 0?parseFloat(c):1}},Jt={test:Sl("hsl","hue"),parse:Nf("hue","saturation","lightness"),transform:({hue:e,saturation:n,lightness:s,alpha:a=1})=>"hsla("+Math.round(e)+", "+pa.transform(ca(n))+", "+pa.transform(ca(s))+", "+ca(ua.transform(a))+")"},X5=Mf(0,255),Oo=Object.assign(Object.assign({},Va),{transform:e=>Math.round(X5(e))}),$t={test:Sl("rgb","red"),parse:Nf("red","green","blue"),transform:({red:e,green:n,blue:s,alpha:a=1})=>"rgba("+Oo.transform(e)+", "+Oo.transform(n)+", "+Oo.transform(s)+", "+ca(ua.transform(a))+")"};function e8(e){let n="",s="",a="",r="";return e.length>5?(n=e.substr(1,2),s=e.substr(3,2),a=e.substr(5,2),r=e.substr(7,2)):(n=e.substr(1,1),s=e.substr(2,1),a=e.substr(3,1),r=e.substr(4,1),n+=n,s+=s,a+=a,r+=r),{red:parseInt(n,16),green:parseInt(s,16),blue:parseInt(a,16),alpha:r?parseInt(r,16)/255:1}}const Ci={test:Sl("#"),parse:e8,transform:$t.transform},gn={test:e=>$t.test(e)||Ci.test(e)||Jt.test(e),parse:e=>$t.test(e)?$t.parse(e):Jt.test(e)?Jt.parse(e):Ci.parse(e),transform:e=>Ba(e)?e:e.hasOwnProperty("red")?$t.transform(e):Jt.transform(e)},If="${c}",Df="${n}";function n8(e){var n,s,a,r;return isNaN(e)&&Ba(e)&&((s=(n=e.match(Oa))===null||n===void 0?void 0:n.length)!==null&&s!==void 0?s:0)+((r=(a=e.match(Ti))===null||a===void 0?void 0:a.length)!==null&&r!==void 0?r:0)>0}function Lf(e){typeof e=="number"&&(e=`${e}`);const n=[];let s=0;const a=e.match(Ti);a&&(s=a.length,e=e.replace(Ti,If),n.push(...a.map(gn.parse)));const r=e.match(Oa);return r&&(e=e.replace(Oa,Df),n.push(...r.map(Va.parse))),{values:n,numColors:s,tokenised:e}}function jf(e){return Lf(e).values}function qf(e){const{values:n,numColors:s,tokenised:a}=Lf(e),r=n.length;return i=>{let l=a;for(let c=0;c<r;c++)l=l.replace(c<s?If:Df,c<s?gn.transform(i[c]):ca(i[c]));return l}}const t8=e=>typeof e=="number"?0:e;function s8(e){const n=jf(e);return qf(e)(n.map(t8))}const za={test:n8,parse:jf,createTransformer:qf,getAnimatableNone:s8},a8=new Set(["brightness","contrast","saturate","opacity"]);function r8(e){let[n,s]=e.slice(0,-1).split("(");if(n==="drop-shadow")return e;const[a]=s.match(Oa)||[];if(!a)return e;const r=s.replace(a,"");let i=a8.has(n)?1:0;return a!==s&&(i*=100),n+"("+i+r+")"}const o8=/([a-z-]*)\(.*?\)/g,Oi=Object.assign(Object.assign({},za),{getAnimatableNone:e=>{const n=e.match(o8);return n?n.map(r8).join(" "):e}});function Ao(e,n,s){return s<0&&(s+=1),s>1&&(s-=1),s<1/6?e+(n-e)*6*s:s<1/2?n:s<2/3?e+(n-e)*(2/3-s)*6:e}function Pu({hue:e,saturation:n,lightness:s,alpha:a}){e/=360,n/=100,s/=100;let r=0,i=0,l=0;if(!n)r=i=l=s;else{const c=s<.5?s*(1+n):s+n-s*n,u=2*s-c;r=Ao(u,c,e+1/3),i=Ao(u,c,e),l=Ao(u,c,e-1/3)}return{red:Math.round(r*255),green:Math.round(i*255),blue:Math.round(l*255),alpha:a}}const i8=(e,n,s)=>{const a=e*e,r=n*n;return Math.sqrt(Math.max(0,s*(r-a)+a))},l8=[Ci,$t,Jt],Tu=e=>l8.find(n=>n.test(e)),Cu=e=>`'${e}' is not an animatable color. Use the equivalent color code instead.`,Rf=(e,n)=>{let s=Tu(e),a=Tu(n);Ca(!!s,Cu(e)),Ca(!!a,Cu(n));let r=s.parse(e),i=a.parse(n);s===Jt&&(r=Pu(r),s=$t),a===Jt&&(i=Pu(i),a=$t);const l=Object.assign({},r);return c=>{for(const u in l)u!=="alpha"&&(l[u]=i8(r[u],i[u],c));return l.alpha=wl(r.alpha,i.alpha,c),s.transform(l)}},c8=e=>typeof e=="number",u8=(e,n)=>s=>n(e(s)),Bf=(...e)=>e.reduce(u8);function Vf(e,n){return c8(e)?s=>wl(e,n,s):gn.test(e)?Rf(e,n):Wf(e,n)}const zf=(e,n)=>{const s=[...e],a=s.length,r=e.map((i,l)=>Vf(i,n[l]));return i=>{for(let l=0;l<a;l++)s[l]=r[l](i);return s}},p8=(e,n)=>{const s=Object.assign(Object.assign({},e),n),a={};for(const r in s)e[r]!==void 0&&n[r]!==void 0&&(a[r]=Vf(e[r],n[r]));return r=>{for(const i in a)s[i]=a[i](r);return s}};function Ou(e){const n=za.parse(e),s=n.length;let a=0,r=0,i=0;for(let l=0;l<s;l++)a||typeof n[l]=="number"?a++:n[l].hue!==void 0?i++:r++;return{parsed:n,numNumbers:a,numRGB:r,numHSL:i}}const Wf=(e,n)=>{const s=za.createTransformer(n),a=Ou(e),r=Ou(n);return a.numHSL===r.numHSL&&a.numRGB===r.numRGB&&a.numNumbers>=r.numNumbers?Bf(zf(a.parsed,r.parsed),s):(vl(!0,`Complex values '${e}' and '${n}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`),l=>`${l>0?n:e}`)},d8=(e,n)=>s=>wl(e,n,s);function f8(e){if(typeof e=="number")return d8;if(typeof e=="string")return gn.test(e)?Rf:Wf;if(Array.isArray(e))return zf;if(typeof e=="object")return p8}function h8(e,n,s){const a=[],r=s||f8(e[0]),i=e.length-1;for(let l=0;l<i;l++){let c=r(e[l],e[l+1]);if(n){const u=Array.isArray(n)?n[l]:n;c=Bf(u,c)}a.push(c)}return a}function m8([e,n],[s]){return a=>s(Ff(e,n,a))}function g8(e,n){const s=e.length,a=s-1;return r=>{let i=0,l=!1;if(r<=e[0]?l=!0:r>=e[a]&&(i=a-1,l=!0),!l){let u=1;for(;u<s&&!(e[u]>r||u===a);u++);i=u-1}const c=Ff(e[i],e[i+1],r);return n[i](c)}}function Hf(e,n,{clamp:s=!0,ease:a,mixer:r}={}){const i=e.length;Ca(i===n.length,"Both input and output ranges must be the same length"),Ca(!a||!Array.isArray(a)||a.length===i-1,"Array of easing functions must be of length `input.length - 1`, as it applies to the transitions **between** the defined values."),e[0]>e[i-1]&&(e=[].concat(e),n=[].concat(n),e.reverse(),n.reverse());const l=h8(n,a,r),c=i===2?m8(e,l):g8(e,l);return s?u=>c($i(e[0],e[i-1],u)):c}const to=e=>n=>1-e(1-n),El=e=>n=>n<=.5?e(2*n)/2:(2-e(2*(1-n)))/2,_8=e=>n=>Math.pow(n,e),Uf=e=>n=>n*n*((e+1)*n-e),k8=e=>{const n=Uf(e);return s=>(s*=2)<1?.5*n(s):.5*(2-Math.pow(2,-10*(s-1)))},Gf=1.525,b8=4/11,v8=8/11,y8=9/10,Kf=e=>e,$l=_8(2),w8=to($l),Zf=El($l),Yf=e=>1-Math.sin(Math.acos(e)),Jf=to(Yf),x8=El(Jf),Pl=Uf(Gf),S8=to(Pl),E8=El(Pl),$8=k8(Gf),P8=4356/361,T8=35442/1805,C8=16061/1805,Mr=e=>{if(e===1||e===0)return e;const n=e*e;return e<b8?7.5625*n:e<v8?9.075*n-9.9*e+3.4:e<y8?P8*n-T8*e+C8:10.8*e*e-20.52*e+10.72},O8=to(Mr),A8=e=>e<.5?.5*(1-Mr(1-e*2)):.5*Mr(e*2-1)+.5;function F8(e,n){return e.map(()=>n||Zf).splice(0,e.length-1)}function M8(e){const n=e.length;return e.map((s,a)=>a!==0?a/(n-1):0)}function N8(e,n){return e.map(s=>s*n)}function pr({from:e=0,to:n=1,ease:s,offset:a,duration:r=300}){const i={done:!1,value:e},l=Array.isArray(n)?n:[e,n],c=N8(a&&a.length===l.length?a:M8(l),r);function u(){return Hf(c,l,{ease:Array.isArray(s)?s:F8(l,s)})}let p=u();return{next:d=>(i.value=p(d),i.done=d>=r,i),flipTarget:()=>{l.reverse(),p=u()}}}function I8({velocity:e=0,from:n=0,power:s=.8,timeConstant:a=350,restDelta:r=.5,modifyTarget:i}){const l={done:!1,value:n};let c=s*e;const u=n+c,p=i===void 0?u:i(u);return p!==u&&(c=p-n),{next:d=>{const f=-c*Math.exp(-d/a);return l.done=!(f>r||f<-r),l.value=l.done?p:p+f,l},flipTarget:()=>{}}}const Au={keyframes:pr,spring:yl,decay:I8};function D8(e){if(Array.isArray(e.to))return pr;if(Au[e.type])return Au[e.type];const n=new Set(Object.keys(e));return n.has("ease")||n.has("duration")&&!n.has("dampingRatio")?pr:n.has("dampingRatio")||n.has("stiffness")||n.has("mass")||n.has("damping")||n.has("restSpeed")||n.has("restDelta")?yl:pr}function Qf(e,n,s=0){return e-n-s}function L8(e,n,s=0,a=!0){return a?Qf(n+-e,n,s):n-(e-n)+s}function j8(e,n,s,a){return a?e>=n+s:e<=-s}const q8=e=>{const n=({delta:s})=>e(s);return{start:()=>Ei.update(n,!0),stop:()=>R5.update(n)}};function Xf(e){var n,s,{from:a,autoplay:r=!0,driver:i=q8,elapsed:l=0,repeat:c=0,repeatType:u="loop",repeatDelay:p=0,onPlay:d,onStop:f,onComplete:h,onRepeat:m,onUpdate:g}=e,b=Af(e,["from","autoplay","driver","elapsed","repeat","repeatType","repeatDelay","onPlay","onStop","onComplete","onRepeat","onUpdate"]);let{to:y}=b,O,x=0,E=b.duration,A,R=!1,W=!0,Y;const j=D8(b);!((s=(n=j).needsInterpolation)===null||s===void 0)&&s.call(n,a,y)&&(Y=Hf([0,100],[a,y],{clamp:!1}),a=0,y=100);const K=j(Object.assign(Object.assign({},b),{from:a,to:y}));function ae(){x++,u==="reverse"?(W=x%2===0,l=L8(l,E,p,W)):(l=Qf(l,E,p),u==="mirror"&&K.flipTarget()),R=!1,m&&m()}function fe(){O.stop(),h&&h()}function X(De){if(W||(De=-De),l+=De,!R){const Ke=K.next(Math.max(0,l));A=Ke.value,Y&&(A=Y(A)),R=W?Ke.done:l<=0}g==null||g(A),R&&(x===0&&(E??(E=l)),x<c?j8(l,E,p,W)&&ae():fe())}function de(){d==null||d(),O=i(X),O.start()}return r&&de(),{stop:()=>{f==null||f(),O.stop()}}}function eh(e,n){return n?e*(1e3/n):0}function R8({from:e=0,velocity:n=0,min:s,max:a,power:r=.8,timeConstant:i=750,bounceStiffness:l=500,bounceDamping:c=10,restDelta:u=1,modifyTarget:p,driver:d,onUpdate:f,onComplete:h,onStop:m}){let g;function b(E){return s!==void 0&&E<s||a!==void 0&&E>a}function y(E){return s===void 0?a:a===void 0||Math.abs(s-E)<Math.abs(a-E)?s:a}function O(E){g==null||g.stop(),g=Xf(Object.assign(Object.assign({},E),{driver:d,onUpdate:A=>{var R;f==null||f(A),(R=E.onUpdate)===null||R===void 0||R.call(E,A)},onComplete:h,onStop:m}))}function x(E){O(Object.assign({type:"spring",stiffness:l,damping:c,restDelta:u},E))}if(b(e))x({from:e,velocity:n,to:y(e)});else{let E=r*n+e;typeof p<"u"&&(E=p(E));const A=y(E),R=A===s?-1:1;let W,Y;const j=K=>{W=Y,Y=K,n=eh(K-W,Of().delta),(R===1&&K>A||R===-1&&K<A)&&x({from:K,to:A,velocity:n})};O({type:"decay",from:e,velocity:n,timeConstant:i,power:r,restDelta:u,modifyTarget:p,onUpdate:b(E)?j:void 0})}return{stop:()=>g==null?void 0:g.stop()}}const nh=(e,n)=>1-3*n+3*e,th=(e,n)=>3*n-6*e,sh=e=>3*e,Nr=(e,n,s)=>((nh(n,s)*e+th(n,s))*e+sh(n))*e,ah=(e,n,s)=>3*nh(n,s)*e*e+2*th(n,s)*e+sh(n),B8=1e-7,V8=10;function z8(e,n,s,a,r){let i,l,c=0;do l=n+(s-n)/2,i=Nr(l,a,r)-e,i>0?s=l:n=l;while(Math.abs(i)>B8&&++c<V8);return l}const W8=8,H8=.001;function U8(e,n,s,a){for(let r=0;r<W8;++r){const i=ah(n,s,a);if(i===0)return n;const l=Nr(n,s,a)-e;n-=l/i}return n}const dr=11,tr=1/(dr-1);function G8(e,n,s,a){if(e===n&&s===a)return Kf;const r=new Float32Array(dr);for(let l=0;l<dr;++l)r[l]=Nr(l*tr,e,s);function i(l){let c=0,u=1;const p=dr-1;for(;u!==p&&r[u]<=l;++u)c+=tr;--u;const d=(l-r[u])/(r[u+1]-r[u]),f=c+d*tr,h=ah(f,e,s);return h>=H8?U8(l,f,e,s):h===0?f:z8(l,c,c+tr,e,s)}return l=>l===0||l===1?l:Nr(i(l),n,a)}const Fo={};class K8{constructor(){this.subscriptions=new Set}add(n){return this.subscriptions.add(n),()=>this.subscriptions.delete(n)}notify(n,s,a){if(this.subscriptions.size)for(const r of this.subscriptions)r(n,s,a)}clear(){this.subscriptions.clear()}}const Fu=e=>!isNaN(parseFloat(e));class Z8{constructor(n){this.timeDelta=0,this.lastUpdated=0,this.updateSubscribers=new K8,this.canTrackVelocity=!1,this.updateAndNotify=s=>{this.prev=this.current,this.current=s;const{delta:a,timestamp:r}=Of();this.lastUpdated!==r&&(this.timeDelta=a,this.lastUpdated=r),Ei.postRender(this.scheduleVelocityCheck),this.updateSubscribers.notify(this.current)},this.scheduleVelocityCheck=()=>Ei.postRender(this.velocityCheck),this.velocityCheck=({timestamp:s})=>{this.canTrackVelocity||(this.canTrackVelocity=Fu(this.current)),s!==this.lastUpdated&&(this.prev=this.current)},this.prev=this.current=n,this.canTrackVelocity=Fu(this.current)}onChange(n){return this.updateSubscribers.add(n)}clearListeners(){this.updateSubscribers.clear()}set(n){this.updateAndNotify(n)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){return this.canTrackVelocity?eh(parseFloat(this.current)-parseFloat(this.prev),this.timeDelta):0}start(n){return this.stop(),new Promise(s=>{const{stop:a}=n(s);this.stopAnimation=a}).then(()=>this.clearAnimation())}stop(){this.stopAnimation&&this.stopAnimation(),this.clearAnimation()}isAnimating(){return!!this.stopAnimation}clearAnimation(){this.stopAnimation=null}destroy(){this.updateSubscribers.clear(),this.stop()}}function Y8(e){return new Z8(e)}const{isArray:J8}=Array;function Q8(){const e=se({}),n=a=>{const r=i=>{e.value[i]&&(e.value[i].stop(),e.value[i].destroy(),delete e.value[i])};a?J8(a)?a.forEach(r):r(a):Object.keys(e.value).forEach(r)},s=(a,r,i)=>{if(e.value[a])return e.value[a];const l=Y8(r);return l.onChange(c=>i[a]=c),e.value[a]=l,l};return pk(n),{motionValues:e,get:s,stop:n}}const X8=e=>Array.isArray(e),Vt=()=>({type:"spring",stiffness:500,damping:25,restDelta:.5,restSpeed:10}),Mo=e=>({type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restDelta:.01,restSpeed:10}),eM=e=>({type:"spring",stiffness:550,damping:e===0?100:30,restDelta:.01,restSpeed:10}),No=()=>({type:"keyframes",ease:"linear",duration:300}),nM=e=>({type:"keyframes",duration:800,values:e}),Mu={default:eM,x:Vt,y:Vt,z:Vt,rotate:Vt,rotateX:Vt,rotateY:Vt,rotateZ:Vt,scaleX:Mo,scaleY:Mo,scale:Mo,backgroundColor:No,color:No,opacity:No},rh=(e,n)=>{let s;return X8(n)?s=nM:s=Mu[e]||Mu.default,{to:n,...s(n)}},Nu={...Va,transform:Math.round},oh={color:gn,backgroundColor:gn,outlineColor:gn,fill:gn,stroke:gn,borderColor:gn,borderTopColor:gn,borderRightColor:gn,borderBottomColor:gn,borderLeftColor:gn,borderWidth:ve,borderTopWidth:ve,borderRightWidth:ve,borderBottomWidth:ve,borderLeftWidth:ve,borderRadius:ve,radius:ve,borderTopLeftRadius:ve,borderTopRightRadius:ve,borderBottomRightRadius:ve,borderBottomLeftRadius:ve,width:ve,maxWidth:ve,height:ve,maxHeight:ve,size:ve,top:ve,right:ve,bottom:ve,left:ve,padding:ve,paddingTop:ve,paddingRight:ve,paddingBottom:ve,paddingLeft:ve,margin:ve,marginTop:ve,marginRight:ve,marginBottom:ve,marginLeft:ve,rotate:Bt,rotateX:Bt,rotateY:Bt,rotateZ:Bt,scale:nr,scaleX:nr,scaleY:nr,scaleZ:nr,skew:Bt,skewX:Bt,skewY:Bt,distance:ve,translateX:ve,translateY:ve,translateZ:ve,x:ve,y:ve,z:ve,perspective:ve,transformPerspective:ve,opacity:ua,originX:$u,originY:$u,originZ:ve,zIndex:Nu,filter:Oi,WebkitFilter:Oi,fillOpacity:ua,strokeOpacity:ua,numOctaves:Nu},Tl=e=>oh[e],ih=(e,n)=>n&&typeof e=="number"&&n.transform?n.transform(e):e;function tM(e,n){let s=Tl(e);return s!==Oi&&(s=za),s.getAnimatableNone?s.getAnimatableNone(n):void 0}const sM={linear:Kf,easeIn:$l,easeInOut:Zf,easeOut:w8,circIn:Yf,circInOut:x8,circOut:Jf,backIn:Pl,backInOut:E8,backOut:S8,anticipate:$8,bounceIn:O8,bounceInOut:A8,bounceOut:Mr},Iu=e=>{if(Array.isArray(e)){const[n,s,a,r]=e;return G8(n,s,a,r)}else if(typeof e=="string")return sM[e];return e},aM=e=>Array.isArray(e)&&typeof e[0]!="number",Du=(e,n)=>e==="zIndex"?!1:!!(typeof n=="number"||Array.isArray(n)||typeof n=="string"&&za.test(n)&&!n.startsWith("url("));function rM(e){return Array.isArray(e.to)&&e.to[0]===null&&(e.to=[...e.to],e.to[0]=e.from),e}function oM({ease:e,times:n,delay:s,...a}){const r={...a};return n&&(r.offset=n),e&&(r.ease=aM(e)?e.map(Iu):Iu(e)),s&&(r.elapsed=-s),r}function iM(e,n,s){return Array.isArray(n.to)&&(e.duration||(e.duration=800)),rM(n),lM(e)||(e={...e,...rh(s,n.to)}),{...n,...oM(e)}}function lM({delay:e,repeat:n,repeatType:s,repeatDelay:a,from:r,...i}){return!!Object.keys(i).length}function cM(e,n){return e[n]||e.default||e}function uM(e,n,s,a,r){const i=cM(a,e);let l=i.from===null||i.from===void 0?n.get():i.from;const c=Du(e,s);l==="none"&&c&&typeof s=="string"&&(l=tM(e,s));const u=Du(e,l);function p(f){const h={from:l,to:s,velocity:a.velocity?a.velocity:n.getVelocity(),onUpdate:m=>n.set(m)};return i.type==="inertia"||i.type==="decay"?R8({...h,...i}):Xf({...iM(i,h,e),onUpdate:m=>{h.onUpdate(m),i.onUpdate&&i.onUpdate(m)},onComplete:()=>{a.onComplete&&a.onComplete(),r&&r(),f&&f()}})}function d(f){return n.set(s),a.onComplete&&a.onComplete(),r&&r(),f&&f(),{stop:()=>{}}}return!u||!c||i.type===!1?d:p}function pM(){const{motionValues:e,stop:n,get:s}=Q8();return{motionValues:e,stop:n,push:(r,i,l,c={},u)=>{const p=l[r],d=s(r,p,l);if(c&&c.immediate){d.set(i);return}const f=uM(r,d,i,c,u);d.start(f)}}}function dM(e,n={},{motionValues:s,push:a,stop:r}=pM()){const i=C(n),l=se(!1);we(s,f=>{l.value=Object.values(f).filter(h=>h.isAnimating()).length>0},{immediate:!0,deep:!0});const c=f=>{if(!i||!i[f])throw new Error(`The variant ${f} does not exist.`);return i[f]},u=f=>(typeof f=="string"&&(f=c(f)),Promise.all(Object.entries(f).map(([h,m])=>{if(h!=="transition")return new Promise(g=>a(h,m,e,f.transition||rh(h,f[h]),g))}).filter(Boolean)));return{isAnimating:l,apply:u,set:f=>{const h=ri(f)?f:c(f);Object.entries(h).forEach(([m,g])=>{m!=="transition"&&a(m,g,e,{immediate:!0})})},leave:async f=>{let h;if(i&&(i.leave&&(h=i.leave),!i.leave&&i.initial&&(h=i.initial)),!h){f();return}await u(h),f()},stop:r}}const Cl=typeof window<"u",fM=()=>Cl&&window.onpointerdown===null,hM=()=>Cl&&window.ontouchstart===null,mM=()=>Cl&&window.onmousedown===null;function gM({target:e,state:n,variants:s,apply:a}){const r=C(s),i=se(!1),l=se(!1),c=se(!1),u=L(()=>{let d=[];return r&&(r.hovered&&(d=[...d,...Object.keys(r.hovered)]),r.tapped&&(d=[...d,...Object.keys(r.tapped)]),r.focused&&(d=[...d,...Object.keys(r.focused)])),d}),p=L(()=>{const d={};Object.assign(d,n.value),i.value&&r.hovered&&Object.assign(d,r.hovered),l.value&&r.tapped&&Object.assign(d,r.tapped),c.value&&r.focused&&Object.assign(d,r.focused);for(const f in d)u.value.includes(f)||delete d[f];return d});r.hovered&&(Oe(e,"mouseenter",()=>i.value=!0),Oe(e,"mouseleave",()=>{i.value=!1,l.value=!1}),Oe(e,"mouseout",()=>{i.value=!1,l.value=!1})),r.tapped&&(mM()&&(Oe(e,"mousedown",()=>l.value=!0),Oe(e,"mouseup",()=>l.value=!1)),fM()&&(Oe(e,"pointerdown",()=>l.value=!0),Oe(e,"pointerup",()=>l.value=!1)),hM()&&(Oe(e,"touchstart",()=>l.value=!0),Oe(e,"touchend",()=>l.value=!1))),r.focused&&(Oe(e,"focus",()=>c.value=!0),Oe(e,"blur",()=>c.value=!1)),we(p,a)}function _M({set:e,target:n,apply:s,variants:a,variant:r}){const i=C(a);we(()=>n,()=>{i&&(i.initial&&e("initial"),i.enter&&(r.value="enter"))},{immediate:!0,flush:"pre"})}function kM({state:e,apply:n}){we(e,s=>{s&&n(s)},{immediate:!0})}function bM({target:e,variants:n,variant:s}){const a=C(n);a&&(a.visible||a.visibleOnce)&&o0(e,([{isIntersecting:r}])=>{a.visible?r?s.value="visible":s.value="initial":a.visibleOnce&&(r&&s.value!=="visibleOnce"?s.value="visibleOnce":s.value||(s.value="initial"))})}function vM(e,n={syncVariants:!0,lifeCycleHooks:!0,visibilityHooks:!0,eventListeners:!0}){n.lifeCycleHooks&&_M(e),n.syncVariants&&kM(e),n.visibilityHooks&&bM(e),n.eventListeners&&gM(e)}function lh(e={}){const n=ze({...e}),s=se({});return we(n,()=>{const a={};for(const[r,i]of Object.entries(n)){const l=Tl(r),c=ih(i,l);a[r]=c}s.value=a},{immediate:!0,deep:!0}),{state:n,style:s}}function Ol(e,n){we(()=>Pn(e),s=>{s&&n(s)},{immediate:!0})}const yM={x:"translateX",y:"translateY",z:"translateZ"};function ch(e={},n=!0){const s=ze({...e}),a=se("");return we(s,r=>{let i="",l=!1;if(n&&(r.x||r.y||r.z)){const c=[r.x||0,r.y||0,r.z||0].map(ve.transform).join(",");i+=`translate3d(${c}) `,l=!0}for(const[c,u]of Object.entries(r)){if(n&&(c==="x"||c==="y"||c==="z"))continue;const p=Tl(c),d=ih(u,p);i+=`${yM[c]||c}(${d}) `}n&&!l&&(i+="translateZ(0px) "),a.value=i.trim()},{immediate:!0,deep:!0}),{state:s,transform:a}}const wM=["","X","Y","Z"],xM=["perspective","translate","scale","rotate","skew"],uh=["transformPerspective","x","y","z"];xM.forEach(e=>{wM.forEach(n=>{const s=e+n;uh.push(s)})});const SM=new Set(uh);function Al(e){return SM.has(e)}const EM=new Set(["originX","originY","originZ"]);function ph(e){return EM.has(e)}function $M(e){const n={},s={};return Object.entries(e).forEach(([a,r])=>{Al(a)||ph(a)?n[a]=r:s[a]=r}),{transform:n,style:s}}function dh(e){const{transform:n,style:s}=$M(e),{transform:a}=ch(n),{style:r}=lh(s);return a.value&&(r.value.transform=a.value),r.value}function PM(e,n){let s,a;const{state:r,style:i}=lh();return Ol(e,l=>{a=l;for(const c of Object.keys(oh))l.style[c]===null||l.style[c]===""||Al(c)||ph(c)||(r[c]=l.style[c]);s&&Object.entries(s).forEach(([c,u])=>l.style[c]=u),n&&n(r)}),we(i,l=>{if(!a){s=l;return}for(const c in l)a.style[c]=l[c]},{immediate:!0}),{style:r}}function TM(e){const n=e.trim().split(/\) |\)/);if(n.length===1)return{};const s=a=>a.endsWith("px")||a.endsWith("deg")?parseFloat(a):isNaN(Number(a))?Number(a):a;return n.reduce((a,r)=>{if(!r)return a;const[i,l]=r.split("("),u=l.split(",").map(d=>s(d.endsWith(")")?d.replace(")",""):d.trim())),p=u.length===1?u[0]:u;return{...a,[i]:p}},{})}function CM(e,n){Object.entries(TM(n)).forEach(([s,a])=>{const r=["x","y","z"];if(s==="translate3d"){if(a===0){r.forEach(i=>e[i]=0);return}a.forEach((i,l)=>e[r[l]]=i);return}if(a=parseFloat(a),s==="translateX"){e.x=a;return}if(s==="translateY"){e.y=a;return}if(s==="translateZ"){e.z=a;return}e[s]=a})}function OM(e,n){let s,a;const{state:r,transform:i}=ch();return Ol(e,l=>{a=l,l.style.transform&&CM(r,l.style.transform),s&&(l.style.transform=s),n&&n(r)}),we(i,l=>{if(!a){s=l;return}a.style.transform=l},{immediate:!0}),{transform:r}}function AM(e,n){const s=ze({}),a=l=>Object.entries(l).forEach(([c,u])=>s[c]=u),{style:r}=PM(e,a),{transform:i}=OM(e,a);return we(s,l=>{Object.entries(l).forEach(([c,u])=>{const p=Al(c)?i:r;p[c]&&p[c]===u||(p[c]=u)})},{immediate:!0,deep:!0}),Ol(e,()=>n&&a(n)),{motionProperties:s,style:r,transform:i}}function FM(e={}){const n=C(e),s=se();return{state:L(()=>{if(s.value)return n[s.value]}),variant:s}}function fh(e,n={},s){const{motionProperties:a}=AM(e),{variant:r,state:i}=FM(n),l=dM(a,n),c={target:e,variant:r,variants:n,state:i,motionProperties:a,...l};return vM(c,s),c}const MM=["initial","enter","leave","visible","visible-once","hovered","tapped","focused","delay"],NM=(e,n)=>{const s=e.props?e.props:e.data&&e.data.attrs?e.data.attrs:{};s&&(s.variants&&ri(s.variants)&&(n.value={...n.value,...s.variants}),MM.forEach(a=>{if(a==="delay"){if(s&&s[a]&&K1(s[a])){const r=s[a];n&&n.value&&(n.value.enter&&(n.value.enter.transition||(n.value.enter.transition={}),n.value.enter.transition={delay:r,...n.value.enter.transition}),n.value.visible&&(n.value.visible.transition||(n.value.visible.transition={}),n.value.visible.transition={delay:r,...n.value.visible.transition}),n.value.visibleOnce&&(n.value.visibleOnce.transition||(n.value.visibleOnce.transition={}),n.value.visibleOnce.transition={delay:r,...n.value.visibleOnce.transition}))}return}a==="visible-once"&&(a="visibleOnce"),s&&s[a]&&ri(s[a])&&(n.value[a]=s[a])}))},Io=e=>({created:(s,a,r)=>{const i=a.value&&typeof a.value=="string"?a.value:r.key;i&&Fo[i]&&Fo[i].stop();const l=se(e||{});typeof a.value=="object"&&(l.value=a.value),NM(r,l);const c=fh(s,l);s.motionInstance=c,i&&(Fo[i]=c)},getSSRProps(s,a){let{initial:r}=s.value||a&&(a==null?void 0:a.props)||{};r=C(r);const i=D5((e==null?void 0:e.initial)||{},r||{});return!i||Object.keys(i).length===0?void 0:{style:dh(i)}}}),IM={initial:{opacity:0},enter:{opacity:1}},DM={initial:{opacity:0},visible:{opacity:1}},LM={initial:{opacity:0},visibleOnce:{opacity:1}},jM={initial:{scale:0,opacity:0},enter:{scale:1,opacity:1}},qM={initial:{scale:0,opacity:0},visible:{scale:1,opacity:1}},RM={initial:{scale:0,opacity:0},visibleOnce:{scale:1,opacity:1}},BM={initial:{x:-100,rotate:90,opacity:0},enter:{x:0,rotate:0,opacity:1}},VM={initial:{x:-100,rotate:90,opacity:0},visible:{x:0,rotate:0,opacity:1}},zM={initial:{x:-100,rotate:90,opacity:0},visibleOnce:{x:0,rotate:0,opacity:1}},WM={initial:{x:100,rotate:-90,opacity:0},enter:{x:0,rotate:0,opacity:1}},HM={initial:{x:100,rotate:-90,opacity:0},visible:{x:0,rotate:0,opacity:1}},UM={initial:{x:100,rotate:-90,opacity:0},visibleOnce:{x:0,rotate:0,opacity:1}},GM={initial:{y:-100,rotate:-90,opacity:0},enter:{y:0,rotate:0,opacity:1}},KM={initial:{y:-100,rotate:-90,opacity:0},visible:{y:0,rotate:0,opacity:1}},ZM={initial:{y:-100,rotate:-90,opacity:0},visibleOnce:{y:0,rotate:0,opacity:1}},YM={initial:{y:100,rotate:90,opacity:0},enter:{y:0,rotate:0,opacity:1}},JM={initial:{y:100,rotate:90,opacity:0},visible:{y:0,rotate:0,opacity:1}},QM={initial:{y:100,rotate:90,opacity:0},visibleOnce:{y:0,rotate:0,opacity:1}},XM={initial:{x:-100,opacity:0},enter:{x:0,opacity:1}},eN={initial:{x:-100,opacity:0},visible:{x:0,opacity:1}},nN={initial:{x:-100,opacity:0},visibleOnce:{x:0,opacity:1}},tN={initial:{x:100,opacity:0},enter:{x:0,opacity:1}},sN={initial:{x:100,opacity:0},visible:{x:0,opacity:1}},aN={initial:{x:100,opacity:0},visibleOnce:{x:0,opacity:1}},rN={initial:{y:-100,opacity:0},enter:{y:0,opacity:1}},oN={initial:{y:-100,opacity:0},visible:{y:0,opacity:1}},iN={initial:{y:-100,opacity:0},visibleOnce:{y:0,opacity:1}},lN={initial:{y:100,opacity:0},enter:{y:0,opacity:1}},cN={initial:{y:100,opacity:0},visible:{y:0,opacity:1}},uN={initial:{y:100,opacity:0},visibleOnce:{y:0,opacity:1}},Ai={__proto__:null,fade:IM,fadeVisible:DM,fadeVisibleOnce:LM,pop:jM,popVisible:qM,popVisibleOnce:RM,rollBottom:YM,rollLeft:BM,rollRight:WM,rollTop:GM,rollVisibleBottom:JM,rollVisibleLeft:VM,rollVisibleOnceBottom:QM,rollVisibleOnceLeft:zM,rollVisibleOnceRight:UM,rollVisibleOnceTop:ZM,rollVisibleRight:HM,rollVisibleTop:KM,slideBottom:lN,slideLeft:XM,slideRight:tN,slideTop:rN,slideVisibleBottom:cN,slideVisibleLeft:eN,slideVisibleOnceBottom:uN,slideVisibleOnceLeft:nN,slideVisibleOnceRight:aN,slideVisibleOnceTop:iN,slideVisibleRight:sN,slideVisibleTop:oN},pN=Me({props:{is:{type:[String,Object],required:!1},preset:{type:String,required:!1},instance:{type:Object,required:!1},variants:{type:Object,required:!1},initial:{type:Object,required:!1},enter:{type:Object,required:!1},leave:{type:Object,required:!1},visible:{type:Object,required:!1},visibleOnce:{type:Object,required:!1},hovered:{type:Object,required:!1},tapped:{type:Object,required:!1},focused:{type:Object,required:!1},delay:{type:[Number,String],required:!1}},setup(e){var c;const n=Jg(),s=ze({});if(!e.is&&!n.default)return()=>Tn("div",{});const a=L(()=>{let u;return e.preset&&(u=Ai[e.preset]),u}),r=L(()=>({initial:e.initial,enter:e.enter,leave:e.leave,visible:e.visible,visibleOnce:e.visibleOnce,hovered:e.hovered,tapped:e.tapped,focused:e.focused})),i=L(()=>{const u={...r.value,...a.value||{},...e.variants||{}};return e.delay&&(u.enter.transition={...u.enter.transition},u.enter.transition.delay=parseInt(e.delay)),u}),l=L(()=>{if(!e.is)return;let u=e.is;return typeof l.value=="string"&&!Ju(u)&&(u=yr(u)),u});if(((c=process==null?void 0:process.env)==null?void 0:c.NODE_ENV)==="development"||process!=null&&process.dev){const u=p=>{var d;(d=p.variants)!=null&&d.initial&&p.set("initial"),setTimeout(()=>{var f,h,m;(f=p.variants)!=null&&f.enter&&p.apply("enter"),(h=p.variants)!=null&&h.visible&&p.apply("visible"),(m=p.variants)!=null&&m.visibleOnce&&p.apply("visibleOnce")},10)};Gr(()=>Object.entries(s).forEach(([p,d])=>u(d)))}return{slots:n,component:l,motionConfig:i,instances:s}},render({slots:e,motionConfig:n,instances:s,component:a}){var c;const r=dh(n.initial||{}),i=(u,p)=>(u.props||(u.props={}),u.props.style=r,u.props.onVnodeMounted=({el:d})=>{const f=fh(d,n);s[p]=f},u);if(a){const u=Tn(a,void 0,e);return i(u,0),u}return(((c=e.default)==null?void 0:c.call(e))||[]).map((u,p)=>i(u,p))}});function dN(e){const n="àáâäæãåāăąçćčđďèéêëēėęěğǵḧîïíīįìłḿñńǹňôöòóœøōõőṕŕřßśšşșťțûüùúūǘůűųẃẍÿýžźż·/_,:;",s="aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------",a=new RegExp(n.split("").join("|"),"g");return e.toString().replace(/[A-Z]/g,r=>`-${r}`).toLowerCase().replace(/\s+/g,"-").replace(a,r=>s.charAt(n.indexOf(r))).replace(/&/g,"-and-").replace(/[^\w\-]+/g,"").replace(/\-\-+/g,"-").replace(/^-+/,"").replace(/-+$/,"")}const fN={install(e,n){if(e.directive("motion",Io()),e.component("Motion",pN),!n||n&&!n.excludePresets)for(const s in Ai){const a=Ai[s];e.directive(`motion-${dN(s)}`,Io(a))}if(n&&n.directives)for(const s in n.directives){const a=n.directives[s];a.initial,e.directive(`motion-${s}`,Io(a))}}};var Lu;const da=typeof window<"u",hN=Object.prototype.toString,mN=e=>hN.call(e)==="[object Object]";da&&((Lu=window==null?void 0:window.navigator)!=null&&Lu.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function gN(e){return Li()?(op(e),!0):!1}function _N(e){var n;const s=C(e);return(n=s==null?void 0:s.$el)!=null?n:s}const kN=da?window:void 0,ju=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},qu="__vueuse_ssr_handlers__";ju[qu]=ju[qu]||{};function bN(e,n={}){const{immediate:s=!0,window:a=kN}=n,r=se(!1);let i=null;function l(){!r.value||!a||(e(),i=a.requestAnimationFrame(l))}function c(){!r.value&&a&&(r.value=!0,l())}function u(){r.value=!1,i!=null&&a&&(a.cancelAnimationFrame(i),i=null)}return s&&c(),gN(u),{isActive:r,pause:u,resume:c}}var Ru;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(Ru||(Ru={}));const so="vue-starport-injection",hh="vue-starport-options",vN={duration:800,easing:"cubic-bezier(0.45, 0, 0.55, 1)",keepAlive:!1},mh={port:{type:String,required:!0},duration:{type:Number,required:!1},easing:{type:String,required:!1},keepAlive:{type:Boolean,required:!1,default:void 0},mountedProps:{type:Object,required:!1},initialProps:{type:Object,required:!1}};var yN=Object.defineProperty,Ir=Object.getOwnPropertySymbols,gh=Object.prototype.hasOwnProperty,_h=Object.prototype.propertyIsEnumerable,Bu=(e,n,s)=>n in e?yN(e,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[n]=s,wN=(e,n)=>{for(var s in n||(n={}))gh.call(n,s)&&Bu(e,s,n[s]);if(Ir)for(var s of Ir(n))_h.call(n,s)&&Bu(e,s,n[s]);return e},Vu=(e,n)=>{var s={};for(var a in e)gh.call(e,a)&&n.indexOf(a)<0&&(s[a]=e[a]);if(e!=null&&Ir)for(var a of Ir(e))n.indexOf(a)<0&&_h.call(e,a)&&(s[a]=e[a]);return s};const xN=Me({name:"StarportProxy",props:wN({props:{type:Object,default:()=>({})},component:{type:Object,required:!0}},mh),setup(e,n){const s=S(so),a=L(()=>s.getInstance(e.port,e.component)),r=se(),i=a.value.generateId(),l=se(!1);return a.value.isVisible||(a.value.land(),l.value=!0),us(async()=>{if(a.value.el){console.error(`[Vue Starport] Multiple proxies of "${a.value.componentName}" with port "${e.port}" detected. The later one will be ignored.`);return}if(a.value.el=r.value,await nn(),l.value=!0,a.value.rect.update(),a.value.rect.width===0||a.value.rect.height===0){const c=a.value.rect.width===0?"width":"height";console.warn(`[Vue Starport] The proxy of component "${a.value.componentName}" (port "${e.port}") has no ${c} on initial render, have you set the size for it?`),console.warn("element:",a.value.el),console.warn("rect:",a.value.rect)}}),Ia(async()=>{a.value.rect.update(),a.value.liftOff(),a.value.el=void 0,l.value=!1,!a.value.options.keepAlive&&(await nn(),await nn(),!a.value.el&&s.dispose(a.value.port))}),we(()=>e,async()=>{a.value.props&&await nn();const c=e,{props:u}=c,p=Vu(c,["props"]);a.value.props=u||{},a.value.setLocalOptions(p)},{deep:!0,immediate:!0}),()=>{const c=e,{initialProps:u,mountedProps:p}=c,d=Vu(c,["initialProps","mountedProps"]),f=le(d,(l.value?p:u)||{});return Tn("div",le(f,{id:i,ref:r,"data-starport-proxy":a.value.componentId,"data-starport-landed":a.value.isLanded?"true":void 0,"data-starport-floating":a.value.isLanded?void 0:"true"}),n.slots.default?Tn(n.slots.default):void 0)}}});var SN=Object.defineProperty,EN=Object.defineProperties,$N=Object.getOwnPropertyDescriptors,zu=Object.getOwnPropertySymbols,PN=Object.prototype.hasOwnProperty,TN=Object.prototype.propertyIsEnumerable,Wu=(e,n,s)=>n in e?SN(e,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[n]=s,CN=(e,n)=>{for(var s in n||(n={}))PN.call(n,s)&&Wu(e,s,n[s]);if(zu)for(var s of zu(n))TN.call(n,s)&&Wu(e,s,n[s]);return e},ON=(e,n)=>EN(e,$N(n));const AN=Me({name:"Starport",inheritAttrs:!0,props:mh,setup(e,n){const s=se(!1);return us(()=>{if(s.value=!0,!S(so))throw new Error("[Vue Starport] Failed to find the carrier, all Starport components must be wrapped in a <StarportCarrier> component.")}),()=>{var l,c;const a=(c=(l=n.slots).default)==null?void 0:c.call(l);if(!a)throw new Error("[Vue Starport] Slot is required to use <Starport>");if(a.length!==1)throw new Error(`[Vue Starport] <Starport> requires exactly one slot, but got ${a.length}`);const r=a[0];let i=r.type;return(!mN(i)||It(i))&&(i={render(){return a}}),Tn(xN,ON(CN({},e),{key:e.port,component:Br(i),props:r.props}))}}});function FN(e){const n=ze({height:0,width:0,left:0,top:0,update:a,listen:i,pause:l,margin:"0px",padding:"0px"}),s=da?document.documentElement||document.body:void 0;function a(){if(!da)return;const c=_N(e);if(!c)return;const{height:u,width:p,left:d,top:f}=c.getBoundingClientRect(),h=window.getComputedStyle(c),m=h.margin,g=h.padding;Object.assign(n,{height:u,width:p,left:d,top:s.scrollTop+f,margin:m,padding:g})}const r=bN(a,{immediate:!1});function i(){da&&(a(),r.resume())}function l(){r.pause()}return n}let MN=(e,n=21)=>(s=n)=>{let a="",r=s;for(;r--;)a+=e[Math.random()*e.length|0];return a};const Hu=MN("abcdefghijklmnopqrstuvwxyz",5);function Uu(e){return e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase().replace(/[^\w\d_-]/g,"")}function NN(e){var n;return e.name||((n=e.__file)==null?void 0:n.split(/[\/\\.]/).slice(-2)[0])||""}var IN=Object.defineProperty,Gu=Object.getOwnPropertySymbols,DN=Object.prototype.hasOwnProperty,LN=Object.prototype.propertyIsEnumerable,Ku=(e,n,s)=>n in e?IN(e,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[n]=s,Do=(e,n)=>{for(var s in n||(n={}))DN.call(n,s)&&Ku(e,s,n[s]);if(Gu)for(var s of Gu(n))LN.call(n,s)&&Ku(e,s,n[s]);return e};function jN(e,n,s={}){const a=NN(n),r=Uu(a)||Hu(),i=se(),l=se(null),c=se(!1),u=se(!1),p=Nh(!0),d=se({}),f=L(()=>Do(Do(Do({},vN),s),d.value)),h=se(0);let m;p.run(()=>{m=FN(i),we(i,async O=>{O&&(u.value=!0),await nn(),i.value||(u.value=!1)})});const g=Uu(e);function b(){return`starport-${r}-${g}-${Hu()}`}const y=b();return ze({el:i,id:y,port:e,props:l,rect:m,scope:p,isLanded:c,isVisible:u,options:f,liftOffTime:h,component:n,componentName:a,componentId:r,generateId:b,setLocalOptions(O={}){d.value=JSON.parse(JSON.stringify(O))},elRef(){return i},liftOff(){c.value&&(c.value=!1,h.value=Date.now(),m.listen())},land(){c.value||(c.value=!0,m.pause())}})}function qN(e){const n=ze(new Map);function s(r,i){let l=n.get(r);return l||(l=jN(r,i,e),n.set(r,l)),l.component=i,l}function a(r){var i;(i=n.get(r))==null||i.scope.stop(),n.delete(r)}return{portMap:n,dispose:a,getInstance:s}}var RN=Object.defineProperty,BN=Object.defineProperties,VN=Object.getOwnPropertyDescriptors,Zu=Object.getOwnPropertySymbols,zN=Object.prototype.hasOwnProperty,WN=Object.prototype.propertyIsEnumerable,Yu=(e,n,s)=>n in e?RN(e,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[n]=s,HN=(e,n)=>{for(var s in n||(n={}))zN.call(n,s)&&Yu(e,s,n[s]);if(Zu)for(var s of Zu(n))WN.call(n,s)&&Yu(e,s,n[s]);return e},UN=(e,n)=>BN(e,VN(n));const GN=Me({name:"StarportCraft",props:{port:{type:String,required:!0},component:{type:Object,required:!0}},setup(e){const n=S(so);if(!n)throw new Error("[Vue Starport] Failed to find the carrier, all Starport components must be wrapped in a <StarportCarrier> component.");const s=L(()=>n.getInstance(e.port,e.component)),a=L(()=>{var l;return((l=s.value.el)==null?void 0:l.id)||s.value.id}),r=L(()=>{const l=Date.now()-s.value.liftOffTime,c=Math.max(0,s.value.options.duration-l),u=s.value.rect,p={position:"absolute",left:0,top:0,width:`${u.width}px`,height:`${u.height}px`,margin:u.margin,padding:u.padding,transform:`translate3d(${u.left}px,${u.top}px,0px)`};return!s.value.isVisible||!s.value.el?UN(HN({},p),{zIndex:-1,display:"none"}):(s.value.isLanded?p.display="none":Object.assign(p,{transitionProperty:"all",transitionDuration:`${c}ms`,transitionTimingFunction:s.value.options.easing}),p)}),i={onTransitionend(l){s.value.isLanded||console.warn(`[Vue Starport] Transition duration of component "${s.value.componentName}" is too short (${l.elapsedTime}s) that may cause animation glitches. Try to increase the duration of that component, or decrease the duration the Starport (current: ${s.value.options.duration/1e3}s).`)}};return()=>{const l=!!(s.value.isLanded&&s.value.el);return Tn("div",{style:r.value,"data-starport-craft":s.value.componentId,"data-starport-landed":s.value.isLanded?"true":void 0,"data-starport-floating":s.value.isLanded?void 0:"true",onTransitionend:s.value.land},Tn(Lg,{to:l?`#${a.value}`:"body",disabled:!l},Tn(s.value.component,le(i,s.value.props))))}}}),KN=Me({name:"StarportCarrier",setup(e,{slots:n}){const s=qN(S(hh,{}));return An().appContext.app.provide(so,s),()=>{var r;return[(r=n.default)==null?void 0:r.call(n),Array.from(s.portMap.entries()).map(([i,{component:l}])=>Tn(GN,{key:i,port:i,component:l}))]}}});function ZN(e={}){return{install(n){n.provide(hh,e),n.component("Starport",AN),n.component("StarportCarrier",KN)}}}function YN(e){function n(){document.documentElement.style.setProperty("--vh",`${window.innerHeight*.01}px`)}n(),window.addEventListener("resize",n),e.app.use(fN),e.app.use(ZN({keepAlive:!0}))}function wn(e,n,s){var a;return((a=e.instance)==null?void 0:a.$).provides[n]??s}function JN(){return{install(e){e.directive("click",{name:"v-click",mounted(n,s){var d,f,h,m;if(la.value||(d=wn(s,aa))!=null&&d.value)return;const a=wn(s,Gt),r=wn(s,sa),i=wn(s,si),l=s.modifiers.hide!==!1&&s.modifiers.hide!=null,c=s.modifiers.fade!==!1&&s.modifiers.fade!=null,u=((f=a==null?void 0:a.value)==null?void 0:f.length)||0,p=c?C1:ko;if(a&&!((h=a==null?void 0:a.value)!=null&&h.includes(n))&&a.value.push(n),s.value==null&&(s.value=a==null?void 0:a.value.length),!(i!=null&&i.value.has(s.value)))i==null||i.value.set(s.value,[n]);else if(!((m=i==null?void 0:i.value.get(s.value))!=null&&m.includes(n))){const g=(i==null?void 0:i.value.get(s.value))||[];i==null||i.value.set(s.value,[n].concat(g))}n==null||n.classList.toggle(Ht,!0),r&&we(r,()=>{const g=(r==null?void 0:r.value)??0,b=s.value!=null?g>=s.value:g>u;n.classList.contains(bo)||n.classList.toggle(p,!b),l!==!1&&l!==void 0&&n.classList.toggle(p,b),n.classList.toggle(zs,!1);const y=i==null?void 0:i.value.get(g);y==null||y.forEach((O,x)=>{O.classList.toggle(Qa,!1),x===y.length-1?O.classList.toggle(zs,!0):O.classList.toggle(Qa,!0)}),n.classList.contains(zs)||n.classList.toggle(Qa,b)},{immediate:!0})},unmounted(n,s){n==null||n.classList.toggle(Ht,!1);const a=wn(s,Gt);a!=null&&a.value&&ai(a.value,n)}}),e.directive("after",{name:"v-after",mounted(n,s){var c,u;if(la.value||(c=wn(s,aa))!=null&&c.value)return;const a=wn(s,Gt),r=wn(s,sa),i=wn(s,si),l=a==null?void 0:a.value.length;s.value==null&&(s.value=a==null?void 0:a.value.length),i!=null&&i.value.has(s.value)?(u=i==null?void 0:i.value.get(s.value))==null||u.push(n):i==null||i.value.set(s.value,[n]),n==null||n.classList.toggle(Ht,!0),r&&we(r,()=>{const p=(r.value??0)>=(s.value??l??0);n.classList.contains(bo)||n.classList.toggle(ko,!p),n.classList.toggle(zs,!1),n.classList.contains(zs)||n.classList.toggle(Qa,p)},{immediate:!0})},unmounted(n){n==null||n.classList.toggle(Ht,!0)}}),e.directive("click-hide",{name:"v-click-hide",mounted(n,s){var l,c,u;if(la.value||(l=wn(s,aa))!=null&&l.value)return;const a=wn(s,Gt),r=wn(s,sa),i=((c=a==null?void 0:a.value)==null?void 0:c.length)||0;a&&!((u=a==null?void 0:a.value)!=null&&u.includes(n))&&a.value.push(n),n==null||n.classList.toggle(Ht,!0),r&&we(r,()=>{const p=(r==null?void 0:r.value)??0,d=s.value!=null?p>=s.value:p>i;n.classList.toggle(ko,d),n.classList.toggle(bo,d)},{immediate:!0})},unmounted(n,s){n==null||n.classList.toggle(Ht,!1);const a=wn(s,Gt);a!=null&&a.value&&ai(a.value,n)}})}}}function QN(e,n){const s=wf(e),a=xf(n,s.currentRoute,s.currentPage);return{nav:{...s,...a,downloadPDF:yi,next:At,nextSlide:$a,openInEditor:T5,prev:Ft,prevSlide:Pa},configs:Ce,themeConfigs:L(()=>Ce.themeConfig)}}function XN(){return{install(e){const n=QN(jn,In);e.provide(P,ze(n))}}}const Ls=N_(N5);Ls.use(bn);Ls.use($1());Ls.use(JN());Ls.use(XN());YN({app:Ls,router:bn});Ls.mount("#app");export{Yi as A,md as B,nI as C,fn as D,N2 as E,Fe as F,$d as G,us as H,we as I,$v as J,Ia as K,er as V,T as _,t as a,P as b,ee as c,Me as d,eI as e,Ln as f,C as g,$ as h,S as i,We as j,q as k,Ys as l,Se as m,tn as n,k as o,Da as p,Yt as q,se as r,Qn as s,_i as t,Un as u,yv as v,w,wv as x,xv as y,Ev as z};
