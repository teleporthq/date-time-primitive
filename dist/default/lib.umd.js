(function(O,T){typeof exports=="object"&&typeof module<"u"?T(exports):typeof define=="function"&&define.amd?define(["exports"],T):(O=typeof globalThis<"u"?globalThis:O||self,T(O.DateTimePrimitive={}))})(this,function(O){"use strict";/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const T=window,ht=T.ShadowRoot&&(T.ShadyCSS===void 0||T.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,St=Symbol(),wt=new WeakMap;let Bt=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==St)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(ht&&t===void 0){const i=e!==void 0&&e.length===1;i&&(t=wt.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&wt.set(e,t))}return t}toString(){return this.cssText}};const Wt=s=>new Bt(typeof s=="string"?s:s+"",void 0,St),Yt=(s,t)=>{ht?s.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):t.forEach(e=>{const i=document.createElement("style"),n=T.litNonce;n!==void 0&&i.setAttribute("nonce",n),i.textContent=e.cssText,s.appendChild(i)})},bt=ht?s=>s:s=>s instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return Wt(e)})(s):s;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var at;const et=window,Et=et.trustedTypes,Vt=Et?Et.emptyScript:"",Ct=et.reactiveElementPolyfillSupport,ut={toAttribute(s,t){switch(t){case Boolean:s=s?Vt:null;break;case Object:case Array:s=s==null?s:JSON.stringify(s)}return s},fromAttribute(s,t){let e=s;switch(t){case Boolean:e=s!==null;break;case Number:e=s===null?null:Number(s);break;case Object:case Array:try{e=JSON.parse(s)}catch{e=null}}return e}},Mt=(s,t)=>t!==s&&(t==t||s==s),dt={attribute:!0,type:String,converter:ut,reflect:!1,hasChanged:Mt},ct="finalized";let z=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var e;this.finalize(),((e=this.h)!==null&&e!==void 0?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((e,i)=>{const n=this._$Ep(i,e);n!==void 0&&(this._$Ev.set(n,i),t.push(n))}),t}static createProperty(t,e=dt){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i=typeof t=="symbol"?Symbol():"__"+t,n=this.getPropertyDescriptor(t,i,e);n!==void 0&&Object.defineProperty(this.prototype,t,n)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(n){const l=this[t];this[e]=n,this.requestUpdate(t,l,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||dt}static finalize(){if(this.hasOwnProperty(ct))return!1;this[ct]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const e=this.properties,i=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const n of i)this.createProperty(n,e[n])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const n of i)e.unshift(bt(n))}else t!==void 0&&e.push(bt(t));return e}static _$Ep(t,e){const i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(e=>e(this))}addController(t){var e,i;((e=this._$ES)!==null&&e!==void 0?e:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((i=t.hostConnected)===null||i===void 0||i.call(t))}removeController(t){var e;(e=this._$ES)===null||e===void 0||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;const e=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return Yt(e,this.constructor.elementStyles),e}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostConnected)===null||i===void 0?void 0:i.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostDisconnected)===null||i===void 0?void 0:i.call(e)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=dt){var n;const l=this.constructor._$Ep(t,i);if(l!==void 0&&i.reflect===!0){const r=(((n=i.converter)===null||n===void 0?void 0:n.toAttribute)!==void 0?i.converter:ut).toAttribute(e,i.type);this._$El=t,r==null?this.removeAttribute(l):this.setAttribute(l,r),this._$El=null}}_$AK(t,e){var i;const n=this.constructor,l=n._$Ev.get(t);if(l!==void 0&&this._$El!==l){const r=n.getPropertyOptions(l),y=typeof r.converter=="function"?{fromAttribute:r.converter}:((i=r.converter)===null||i===void 0?void 0:i.fromAttribute)!==void 0?r.converter:ut;this._$El=l,this[l]=y.fromAttribute(e,r.type),this._$El=null}}requestUpdate(t,e,i){let n=!0;t!==void 0&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||Mt)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),i.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,i))):n=!1),!this.isUpdatePending&&n&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((n,l)=>this[l]=n),this._$Ei=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),(t=this._$ES)===null||t===void 0||t.forEach(n=>{var l;return(l=n.hostUpdate)===null||l===void 0?void 0:l.call(n)}),this.update(i)):this._$Ek()}catch(n){throw e=!1,this._$Ek(),n}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;(e=this._$ES)===null||e===void 0||e.forEach(i=>{var n;return(n=i.hostUpdated)===null||n===void 0?void 0:n.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((e,i)=>this._$EO(i,this[i],e)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};z[ct]=!0,z.elementProperties=new Map,z.elementStyles=[],z.shadowRootOptions={mode:"open"},Ct==null||Ct({ReactiveElement:z}),((at=et.reactiveElementVersions)!==null&&at!==void 0?at:et.reactiveElementVersions=[]).push("1.6.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var $t;const it=window,B=it.trustedTypes,Dt=B?B.createPolicy("lit-html",{createHTML:s=>s}):void 0,pt="$lit$",x=`lit$${(Math.random()+"").slice(9)}$`,Ot="?"+x,Jt=`<${Ot}>`,k=document,J=()=>k.createComment(""),Z=s=>s===null||typeof s!="object"&&typeof s!="function",Ht=Array.isArray,Zt=s=>Ht(s)||typeof(s==null?void 0:s[Symbol.iterator])=="function",ft=`[ 	
\f\r]`,F=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Pt=/-->/g,Tt=/>/g,R=RegExp(`>|${ft}(?:([^\\s"'>=/]+)(${ft}*=${ft}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),xt=/'/g,Ut=/"/g,Nt=/^(?:script|style|textarea|title)$/i,W=Symbol.for("lit-noChange"),b=Symbol.for("lit-nothing"),kt=new WeakMap,j=k.createTreeWalker(k,129,null,!1),Ft=(s,t)=>{const e=s.length-1,i=[];let n,l=t===2?"<svg>":"",r=F;for(let u=0;u<e;u++){const d=s[u];let M,f,g=-1,S=0;for(;S<d.length&&(r.lastIndex=S,f=r.exec(d),f!==null);)S=r.lastIndex,r===F?f[1]==="!--"?r=Pt:f[1]!==void 0?r=Tt:f[2]!==void 0?(Nt.test(f[2])&&(n=RegExp("</"+f[2],"g")),r=R):f[3]!==void 0&&(r=R):r===R?f[0]===">"?(r=n??F,g=-1):f[1]===void 0?g=-2:(g=r.lastIndex-f[2].length,M=f[1],r=f[3]===void 0?R:f[3]==='"'?Ut:xt):r===Ut||r===xt?r=R:r===Pt||r===Tt?r=F:(r=R,n=void 0);const H=r===R&&s[u+1].startsWith("/>")?" ":"";l+=r===F?d+Jt:g>=0?(i.push(M),d.slice(0,g)+pt+d.slice(g)+x+H):d+x+(g===-2?(i.push(void 0),u):H)}const y=l+(s[e]||"<?>")+(t===2?"</svg>":"");if(!Array.isArray(s)||!s.hasOwnProperty("raw"))throw Error("invalid template strings array");return[Dt!==void 0?Dt.createHTML(y):y,i]};class q{constructor({strings:t,_$litType$:e},i){let n;this.parts=[];let l=0,r=0;const y=t.length-1,u=this.parts,[d,M]=Ft(t,e);if(this.el=q.createElement(d,i),j.currentNode=this.el.content,e===2){const f=this.el.content,g=f.firstChild;g.remove(),f.append(...g.childNodes)}for(;(n=j.nextNode())!==null&&u.length<y;){if(n.nodeType===1){if(n.hasAttributes()){const f=[];for(const g of n.getAttributeNames())if(g.endsWith(pt)||g.startsWith(x)){const S=M[r++];if(f.push(g),S!==void 0){const H=n.getAttribute(S.toLowerCase()+pt).split(x),I=/([.?@])?(.*)/.exec(S);u.push({type:1,index:l,name:I[2],strings:H,ctor:I[1]==="."?Kt:I[1]==="?"?Qt:I[1]==="@"?Xt:nt})}else u.push({type:6,index:l})}for(const g of f)n.removeAttribute(g)}if(Nt.test(n.tagName)){const f=n.textContent.split(x),g=f.length-1;if(g>0){n.textContent=B?B.emptyScript:"";for(let S=0;S<g;S++)n.append(f[S],J()),j.nextNode(),u.push({type:2,index:++l});n.append(f[g],J())}}}else if(n.nodeType===8)if(n.data===Ot)u.push({type:2,index:l});else{let f=-1;for(;(f=n.data.indexOf(x,f+1))!==-1;)u.push({type:7,index:l}),f+=x.length-1}l++}}static createElement(t,e){const i=k.createElement("template");return i.innerHTML=t,i}}function Y(s,t,e=s,i){var n,l,r,y;if(t===W)return t;let u=i!==void 0?(n=e._$Co)===null||n===void 0?void 0:n[i]:e._$Cl;const d=Z(t)?void 0:t._$litDirective$;return(u==null?void 0:u.constructor)!==d&&((l=u==null?void 0:u._$AO)===null||l===void 0||l.call(u,!1),d===void 0?u=void 0:(u=new d(s),u._$AT(s,e,i)),i!==void 0?((r=(y=e)._$Co)!==null&&r!==void 0?r:y._$Co=[])[i]=u:e._$Cl=u),u!==void 0&&(t=Y(s,u._$AS(s,t.values),u,i)),t}class qt{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;const{el:{content:i},parts:n}=this._$AD,l=((e=t==null?void 0:t.creationScope)!==null&&e!==void 0?e:k).importNode(i,!0);j.currentNode=l;let r=j.nextNode(),y=0,u=0,d=n[0];for(;d!==void 0;){if(y===d.index){let M;d.type===2?M=new K(r,r.nextSibling,this,t):d.type===1?M=new d.ctor(r,d.name,d.strings,this,t):d.type===6&&(M=new te(r,this,t)),this._$AV.push(M),d=n[++u]}y!==(d==null?void 0:d.index)&&(r=j.nextNode(),y++)}return j.currentNode=k,l}v(t){let e=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class K{constructor(t,e,i,n){var l;this.type=2,this._$AH=b,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=n,this._$Cp=(l=n==null?void 0:n.isConnected)===null||l===void 0||l}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Y(this,t,e),Z(t)?t===b||t==null||t===""?(this._$AH!==b&&this._$AR(),this._$AH=b):t!==this._$AH&&t!==W&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):Zt(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==b&&Z(this._$AH)?this._$AA.nextSibling.data=t:this.$(k.createTextNode(t)),this._$AH=t}g(t){var e;const{values:i,_$litType$:n}=t,l=typeof n=="number"?this._$AC(t):(n.el===void 0&&(n.el=q.createElement(n.h,this.options)),n);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===l)this._$AH.v(i);else{const r=new qt(l,this),y=r.u(this.options);r.v(i),this.$(y),this._$AH=r}}_$AC(t){let e=kt.get(t.strings);return e===void 0&&kt.set(t.strings,e=new q(t)),e}T(t){Ht(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,n=0;for(const l of t)n===e.length?e.push(i=new K(this.k(J()),this.k(J()),this,this.options)):i=e[n],i._$AI(l),n++;n<e.length&&(this._$AR(i&&i._$AB.nextSibling,n),e.length=n)}_$AR(t=this._$AA.nextSibling,e){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,e);t&&t!==this._$AB;){const n=t.nextSibling;t.remove(),t=n}}setConnected(t){var e;this._$AM===void 0&&(this._$Cp=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}}class nt{constructor(t,e,i,n,l){this.type=1,this._$AH=b,this._$AN=void 0,this.element=t,this.name=e,this._$AM=n,this.options=l,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=b}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,n){const l=this.strings;let r=!1;if(l===void 0)t=Y(this,t,e,0),r=!Z(t)||t!==this._$AH&&t!==W,r&&(this._$AH=t);else{const y=t;let u,d;for(t=l[0],u=0;u<l.length-1;u++)d=Y(this,y[i+u],e,u),d===W&&(d=this._$AH[u]),r||(r=!Z(d)||d!==this._$AH[u]),d===b?t=b:t!==b&&(t+=(d??"")+l[u+1]),this._$AH[u]=d}r&&!n&&this.j(t)}j(t){t===b?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Kt extends nt{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===b?void 0:t}}const Gt=B?B.emptyScript:"";class Qt extends nt{constructor(){super(...arguments),this.type=4}j(t){t&&t!==b?this.element.setAttribute(this.name,Gt):this.element.removeAttribute(this.name)}}class Xt extends nt{constructor(t,e,i,n,l){super(t,e,i,n,l),this.type=5}_$AI(t,e=this){var i;if((t=(i=Y(this,t,e,0))!==null&&i!==void 0?i:b)===W)return;const n=this._$AH,l=t===b&&n!==b||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,r=t!==b&&(n===b||l);l&&this.element.removeEventListener(this.name,this,n),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;typeof this._$AH=="function"?this._$AH.call((i=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&i!==void 0?i:this.element,t):this._$AH.handleEvent(t)}}class te{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){Y(this,t)}}const Rt=it.litHtmlPolyfillSupport;Rt==null||Rt(q,K),(($t=it.litHtmlVersions)!==null&&$t!==void 0?$t:it.litHtmlVersions=[]).push("2.7.4");const ee=(s,t,e)=>{var i,n;const l=(i=e==null?void 0:e.renderBefore)!==null&&i!==void 0?i:t;let r=l._$litPart$;if(r===void 0){const y=(n=e==null?void 0:e.renderBefore)!==null&&n!==void 0?n:null;l._$litPart$=r=new K(t.insertBefore(J(),y),y,void 0,e??{})}return r._$AI(s),r};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var vt,_t;class G extends z{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return(t=(e=this.renderOptions).renderBefore)!==null&&t!==void 0||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=ee(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!1)}render(){return W}}G.finalized=!0,G._$litElement$=!0,(vt=globalThis.litElementHydrateSupport)===null||vt===void 0||vt.call(globalThis,{LitElement:G});const jt=globalThis.litElementPolyfillSupport;jt==null||jt({LitElement:G}),((_t=globalThis.litElementVersions)!==null&&_t!==void 0?_t:globalThis.litElementVersions=[]).push("3.3.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ie=s=>t=>typeof t=="function"?((e,i)=>(customElements.define(e,i),i))(s,t):((e,i)=>{const{kind:n,elements:l}=i;return{kind:n,elements:l,finisher(r){customElements.define(e,r)}}})(s,t);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ne=(s,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(e){e.createProperty(t.key,s)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(e){e.createProperty(t.key,s)}},se=(s,t,e)=>{t.constructor.createProperty(e,s)};function mt(s){return(t,e)=>e!==void 0?se(s,t,e):ne(s,t)}var re=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function oe(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var It={exports:{}};(function(s,t){(function(e,i){s.exports=i()})(re,function(){var e=1e3,i=6e4,n=36e5,l="millisecond",r="second",y="minute",u="hour",d="day",M="week",f="month",g="quarter",S="year",H="date",I="Invalid Date",ue=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,de=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,ce={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(c){var a=["th","st","nd","rd"],o=c%100;return"["+c+(a[(o-20)%10]||a[o]||a[0])+"]"}},yt=function(c,a,o){var $=String(c);return!$||$.length>=a?c:""+Array(a+1-$.length).join(o)+c},$e={s:yt,z:function(c){var a=-c.utcOffset(),o=Math.abs(a),$=Math.floor(o/60),h=o%60;return(a<=0?"+":"-")+yt($,2,"0")+":"+yt(h,2,"0")},m:function c(a,o){if(a.date()<o.date())return-c(o,a);var $=12*(o.year()-a.year())+(o.month()-a.month()),h=a.clone().add($,f),v=o-h<0,p=a.clone().add($+(v?-1:1),f);return+(-($+(o-h)/(v?h-p:p-h))||0)},a:function(c){return c<0?Math.ceil(c)||0:Math.floor(c)},p:function(c){return{M:f,y:S,w:M,d,D:H,h:u,m:y,s:r,ms:l,Q:g}[c]||String(c||"").toLowerCase().replace(/s$/,"")},u:function(c){return c===void 0}},Q="en",L={};L[Q]=ce;var gt=function(c){return c instanceof ot},rt=function c(a,o,$){var h;if(!a)return Q;if(typeof a=="string"){var v=a.toLowerCase();L[v]&&(h=v),o&&(L[v]=o,h=v);var p=a.split("-");if(!h&&p.length>1)return c(p[0])}else{var m=a.name;L[m]=a,h=m}return!$&&h&&(Q=h),h||!$&&Q},E=function(c,a){if(gt(c))return c.clone();var o=typeof a=="object"?a:{};return o.date=c,o.args=arguments,new ot(o)},_=$e;_.l=rt,_.i=gt,_.w=function(c,a){return E(c,{locale:a.$L,utc:a.$u,x:a.$x,$offset:a.$offset})};var ot=function(){function c(o){this.$L=rt(o.locale,null,!0),this.parse(o)}var a=c.prototype;return a.parse=function(o){this.$d=function($){var h=$.date,v=$.utc;if(h===null)return new Date(NaN);if(_.u(h))return new Date;if(h instanceof Date)return new Date(h);if(typeof h=="string"&&!/Z$/i.test(h)){var p=h.match(ue);if(p){var m=p[2]-1||0,w=(p[7]||"0").substring(0,3);return v?new Date(Date.UTC(p[1],m,p[3]||1,p[4]||0,p[5]||0,p[6]||0,w)):new Date(p[1],m,p[3]||1,p[4]||0,p[5]||0,p[6]||0,w)}}return new Date(h)}(o),this.$x=o.x||{},this.init()},a.init=function(){var o=this.$d;this.$y=o.getFullYear(),this.$M=o.getMonth(),this.$D=o.getDate(),this.$W=o.getDay(),this.$H=o.getHours(),this.$m=o.getMinutes(),this.$s=o.getSeconds(),this.$ms=o.getMilliseconds()},a.$utils=function(){return _},a.isValid=function(){return this.$d.toString()!==I},a.isSame=function(o,$){var h=E(o);return this.startOf($)<=h&&h<=this.endOf($)},a.isAfter=function(o,$){return E(o)<this.startOf($)},a.isBefore=function(o,$){return this.endOf($)<E(o)},a.$g=function(o,$,h){return _.u(o)?this[$]:this.set(h,o)},a.unix=function(){return Math.floor(this.valueOf()/1e3)},a.valueOf=function(){return this.$d.getTime()},a.startOf=function(o,$){var h=this,v=!!_.u($)||$,p=_.p(o),m=function(V,D){var N=_.w(h.$u?Date.UTC(h.$y,D,V):new Date(h.$y,D,V),h);return v?N:N.endOf(d)},w=function(V,D){return _.w(h.toDate()[V].apply(h.toDate("s"),(v?[0,0,0,0]:[23,59,59,999]).slice(D)),h)},A=this.$W,C=this.$M,U=this.$D,P="set"+(this.$u?"UTC":"");switch(p){case S:return v?m(1,0):m(31,11);case f:return v?m(1,C):m(0,C+1);case M:var X=this.$locale().weekStart||0,tt=(A<X?A+7:A)-X;return m(v?U-tt:U+(6-tt),C);case d:case H:return w(P+"Hours",0);case u:return w(P+"Minutes",1);case y:return w(P+"Seconds",2);case r:return w(P+"Milliseconds",3);default:return this.clone()}},a.endOf=function(o){return this.startOf(o,!1)},a.$set=function(o,$){var h,v=_.p(o),p="set"+(this.$u?"UTC":""),m=(h={},h[d]=p+"Date",h[H]=p+"Date",h[f]=p+"Month",h[S]=p+"FullYear",h[u]=p+"Hours",h[y]=p+"Minutes",h[r]=p+"Seconds",h[l]=p+"Milliseconds",h)[v],w=v===d?this.$D+($-this.$W):$;if(v===f||v===S){var A=this.clone().set(H,1);A.$d[m](w),A.init(),this.$d=A.set(H,Math.min(this.$D,A.daysInMonth())).$d}else m&&this.$d[m](w);return this.init(),this},a.set=function(o,$){return this.clone().$set(o,$)},a.get=function(o){return this[_.p(o)]()},a.add=function(o,$){var h,v=this;o=Number(o);var p=_.p($),m=function(C){var U=E(v);return _.w(U.date(U.date()+Math.round(C*o)),v)};if(p===f)return this.set(f,this.$M+o);if(p===S)return this.set(S,this.$y+o);if(p===d)return m(1);if(p===M)return m(7);var w=(h={},h[y]=i,h[u]=n,h[r]=e,h)[p]||1,A=this.$d.getTime()+o*w;return _.w(A,this)},a.subtract=function(o,$){return this.add(-1*o,$)},a.format=function(o){var $=this,h=this.$locale();if(!this.isValid())return h.invalidDate||I;var v=o||"YYYY-MM-DDTHH:mm:ssZ",p=_.z(this),m=this.$H,w=this.$m,A=this.$M,C=h.weekdays,U=h.months,P=function(D,N,At,lt){return D&&(D[N]||D($,v))||At[N].slice(0,lt)},X=function(D){return _.s(m%12||12,D,"0")},tt=h.meridiem||function(D,N,At){var lt=D<12?"AM":"PM";return At?lt.toLowerCase():lt},V={YY:String(this.$y).slice(-2),YYYY:_.s(this.$y,4,"0"),M:A+1,MM:_.s(A+1,2,"0"),MMM:P(h.monthsShort,A,U,3),MMMM:P(U,A),D:this.$D,DD:_.s(this.$D,2,"0"),d:String(this.$W),dd:P(h.weekdaysMin,this.$W,C,2),ddd:P(h.weekdaysShort,this.$W,C,3),dddd:C[this.$W],H:String(m),HH:_.s(m,2,"0"),h:X(1),hh:X(2),a:tt(m,w,!0),A:tt(m,w,!1),m:String(w),mm:_.s(w,2,"0"),s:String(this.$s),ss:_.s(this.$s,2,"0"),SSS:_.s(this.$ms,3,"0"),Z:p};return v.replace(de,function(D,N){return N||V[D]||p.replace(":","")})},a.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},a.diff=function(o,$,h){var v,p=_.p($),m=E(o),w=(m.utcOffset()-this.utcOffset())*i,A=this-m,C=_.m(this,m);return C=(v={},v[S]=C/12,v[f]=C,v[g]=C/3,v[M]=(A-w)/6048e5,v[d]=(A-w)/864e5,v[u]=A/n,v[y]=A/i,v[r]=A/e,v)[p]||A,h?C:_.a(C)},a.daysInMonth=function(){return this.endOf(f).$D},a.$locale=function(){return L[this.$L]},a.locale=function(o,$){if(!o)return this.$L;var h=this.clone(),v=rt(o,$,!0);return v&&(h.$L=v),h},a.clone=function(){return _.w(this.$d,this)},a.toDate=function(){return new Date(this.valueOf())},a.toJSON=function(){return this.isValid()?this.toISOString():null},a.toISOString=function(){return this.$d.toISOString()},a.toString=function(){return this.$d.toUTCString()},c}(),zt=ot.prototype;return E.prototype=zt,[["$ms",l],["$s",r],["$m",y],["$H",u],["$W",d],["$M",f],["$y",S],["$D",H]].forEach(function(c){zt[c[1]]=function(a){return this.$g(a,c[0],c[1])}}),E.extend=function(c,a){return c.$i||(c(a,ot,E),c.$i=!0),E},E.locale=rt,E.isDayjs=gt,E.unix=function(c){return E(1e3*c)},E.en=L[Q],E.Ls=L,E.p={},E})})(It);var le=It.exports;const Lt=oe(le);var he=Object.defineProperty,ae=Object.getOwnPropertyDescriptor,st=(s,t,e,i)=>{for(var n=i>1?void 0:i?ae(t,e):t,l=s.length-1,r;l>=0;l--)(r=s[l])&&(n=(i?r(t,e,n):r(n))||n);return i&&n&&he(t,e,n),n};O.DangerouslySetInnerHtmlContent=class extends G{createRenderRoot(){return this.shadow?this.attachShadow({mode:"open"}):this}render(){const t=Lt.unix(new Date(this.date).getTime()/1e3);return Lt(t).format(this.format)}},st([mt()],O.DangerouslySetInnerHtmlContent.prototype,"date",2),st([mt()],O.DangerouslySetInnerHtmlContent.prototype,"format",2),st([mt()],O.DangerouslySetInnerHtmlContent.prototype,"shadow",2),O.DangerouslySetInnerHtmlContent=st([ie("date-time-primitive")],O.DangerouslySetInnerHtmlContent),Object.defineProperty(O,Symbol.toStringTag,{value:"Module"})});
