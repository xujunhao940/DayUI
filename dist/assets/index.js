(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function e(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(s){if(s.ep)return;s.ep=!0;const o=e(s);fetch(s.href,o)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const it=globalThis,gt=it.ShadowRoot&&(it.ShadyCSS===void 0||it.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,$t=Symbol(),At=new WeakMap;let Dt=class{constructor(t,e,r){if(this._$cssResult$=!0,r!==$t)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(gt&&t===void 0){const r=e!==void 0&&e.length===1;r&&(t=At.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),r&&At.set(e,t))}return t}toString(){return this.cssText}};const Wt=i=>new Dt(typeof i=="string"?i:i+"",void 0,$t),v=(i,...t)=>{const e=i.length===1?i[0]:t.reduce((r,s,o)=>r+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+i[o+1],i[0]);return new Dt(e,i,$t)},Gt=(i,t)=>{if(gt)i.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const e of t){const r=document.createElement("style"),s=it.litNonce;s!==void 0&&r.setAttribute("nonce",s),r.textContent=e.cssText,i.appendChild(r)}},wt=gt?i=>i:i=>i instanceof CSSStyleSheet?(t=>{let e="";for(const r of t.cssRules)e+=r.cssText;return Wt(e)})(i):i;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Kt,defineProperty:Ft,getOwnPropertyDescriptor:Jt,getOwnPropertyNames:Zt,getOwnPropertySymbols:Qt,getPrototypeOf:Xt}=Object,w=globalThis,Et=w.trustedTypes,te=Et?Et.emptyScript:"",ht=w.reactiveElementPolyfillSupport,B=(i,t)=>i,rt={toAttribute(i,t){switch(t){case Boolean:i=i?te:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,t){let e=i;switch(t){case Boolean:e=i!==null;break;case Number:e=i===null?null:Number(i);break;case Object:case Array:try{e=JSON.parse(i)}catch{e=null}}return e}},_t=(i,t)=>!Kt(i,t),St={attribute:!0,type:String,converter:rt,reflect:!1,hasChanged:_t};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),w.litPropertyMetadata??(w.litPropertyMetadata=new WeakMap);class M extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=St){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const r=Symbol(),s=this.getPropertyDescriptor(t,r,e);s!==void 0&&Ft(this.prototype,t,s)}}static getPropertyDescriptor(t,e,r){const{get:s,set:o}=Jt(this.prototype,t)??{get(){return this[e]},set(n){this[e]=n}};return{get(){return s==null?void 0:s.call(this)},set(n){const l=s==null?void 0:s.call(this);o.call(this,n),this.requestUpdate(t,l,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??St}static _$Ei(){if(this.hasOwnProperty(B("elementProperties")))return;const t=Xt(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(B("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(B("properties"))){const e=this.properties,r=[...Zt(e),...Qt(e)];for(const s of r)this.createProperty(s,e[s])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[r,s]of e)this.elementProperties.set(r,s)}this._$Eh=new Map;for(const[e,r]of this.elementProperties){const s=this._$Eu(e,r);s!==void 0&&this._$Eh.set(s,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const r=new Set(t.flat(1/0).reverse());for(const s of r)e.unshift(wt(s))}else t!==void 0&&e.push(wt(t));return e}static _$Eu(t,e){const r=e.attribute;return r===!1?void 0:typeof r=="string"?r:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(e=>e(this))}addController(t){var e;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((e=t.hostConnected)==null||e.call(t))}removeController(t){var e;(e=this._$EO)==null||e.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const r of e.keys())this.hasOwnProperty(r)&&(t.set(r,this[r]),delete this[r]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Gt(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(e=>{var r;return(r=e.hostConnected)==null?void 0:r.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(e=>{var r;return(r=e.hostDisconnected)==null?void 0:r.call(e)})}attributeChangedCallback(t,e,r){this._$AK(t,r)}_$EC(t,e){var o;const r=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,r);if(s!==void 0&&r.reflect===!0){const n=(((o=r.converter)==null?void 0:o.toAttribute)!==void 0?r.converter:rt).toAttribute(e,r.type);this._$Em=t,n==null?this.removeAttribute(s):this.setAttribute(s,n),this._$Em=null}}_$AK(t,e){var o;const r=this.constructor,s=r._$Eh.get(t);if(s!==void 0&&this._$Em!==s){const n=r.getPropertyOptions(s),l=typeof n.converter=="function"?{fromAttribute:n.converter}:((o=n.converter)==null?void 0:o.fromAttribute)!==void 0?n.converter:rt;this._$Em=s,this[s]=l.fromAttribute(e,n.type),this._$Em=null}}requestUpdate(t,e,r){if(t!==void 0){if(r??(r=this.constructor.getPropertyOptions(t)),!(r.hasChanged??_t)(this[t],e))return;this.P(t,e,r)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(t,e,r){this._$AL.has(t)||this._$AL.set(t,e),r.reflect===!0&&this._$Em!==t&&(this._$Ej??(this._$Ej=new Set)).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var r;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[o,n]of this._$Ep)this[o]=n;this._$Ep=void 0}const s=this.constructor.elementProperties;if(s.size>0)for(const[o,n]of s)n.wrapped!==!0||this._$AL.has(o)||this[o]===void 0||this.P(o,this[o],n)}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),(r=this._$EO)==null||r.forEach(s=>{var o;return(o=s.hostUpdate)==null?void 0:o.call(s)}),this.update(e)):this._$EU()}catch(s){throw t=!1,this._$EU(),s}t&&this._$AE(e)}willUpdate(t){}_$AE(t){var e;(e=this._$EO)==null||e.forEach(r=>{var s;return(s=r.hostUpdated)==null?void 0:s.call(r)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&(this._$Ej=this._$Ej.forEach(e=>this._$EC(e,this[e]))),this._$EU()}updated(t){}firstUpdated(t){}}M.elementStyles=[],M.shadowRootOptions={mode:"open"},M[B("elementProperties")]=new Map,M[B("finalized")]=new Map,ht==null||ht({ReactiveElement:M}),(w.reactiveElementVersions??(w.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const V=globalThis,ot=V.trustedTypes,Pt=ot?ot.createPolicy("lit-html",{createHTML:i=>i}):void 0,Lt="$lit$",A=`lit$${Math.random().toFixed(9).slice(2)}$`,Ht="?"+A,ee=`<${Ht}>`,O=document,Y=()=>O.createComment(""),W=i=>i===null||typeof i!="object"&&typeof i!="function",xt=Array.isArray,se=i=>xt(i)||typeof(i==null?void 0:i[Symbol.iterator])=="function",ut=`[ 	
\f\r]`,j=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,kt=/-->/g,Ot=/>/g,P=RegExp(`>|${ut}(?:([^\\s"'>=/]+)(${ut}*=${ut}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Ct=/'/g,Rt=/"/g,It=/^(?:script|style|textarea|title)$/i,ie=i=>(t,...e)=>({_$litType$:i,strings:t,values:e}),y=ie(1),D=Symbol.for("lit-noChange"),u=Symbol.for("lit-nothing"),Ut=new WeakMap,k=O.createTreeWalker(O,129);function zt(i,t){if(!xt(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return Pt!==void 0?Pt.createHTML(t):t}const re=(i,t)=>{const e=i.length-1,r=[];let s,o=t===2?"<svg>":t===3?"<math>":"",n=j;for(let l=0;l<e;l++){const a=i[l];let d,p,h=-1,g=0;for(;g<a.length&&(n.lastIndex=g,p=n.exec(a),p!==null);)g=n.lastIndex,n===j?p[1]==="!--"?n=kt:p[1]!==void 0?n=Ot:p[2]!==void 0?(It.test(p[2])&&(s=RegExp("</"+p[2],"g")),n=P):p[3]!==void 0&&(n=P):n===P?p[0]===">"?(n=s??j,h=-1):p[1]===void 0?h=-2:(h=n.lastIndex-p[2].length,d=p[1],n=p[3]===void 0?P:p[3]==='"'?Rt:Ct):n===Rt||n===Ct?n=P:n===kt||n===Ot?n=j:(n=P,s=void 0);const x=n===P&&i[l+1].startsWith("/>")?" ":"";o+=n===j?a+ee:h>=0?(r.push(d),a.slice(0,h)+Lt+a.slice(h)+A+x):a+A+(h===-2?l:x)}return[zt(i,o+(i[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),r]};class G{constructor({strings:t,_$litType$:e},r){let s;this.parts=[];let o=0,n=0;const l=t.length-1,a=this.parts,[d,p]=re(t,e);if(this.el=G.createElement(d,r),k.currentNode=this.el.content,e===2||e===3){const h=this.el.content.firstChild;h.replaceWith(...h.childNodes)}for(;(s=k.nextNode())!==null&&a.length<l;){if(s.nodeType===1){if(s.hasAttributes())for(const h of s.getAttributeNames())if(h.endsWith(Lt)){const g=p[n++],x=s.getAttribute(h).split(A),st=/([.?@])?(.*)/.exec(g);a.push({type:1,index:o,name:st[2],strings:x,ctor:st[1]==="."?ne:st[1]==="?"?ae:st[1]==="@"?le:lt}),s.removeAttribute(h)}else h.startsWith(A)&&(a.push({type:6,index:o}),s.removeAttribute(h));if(It.test(s.tagName)){const h=s.textContent.split(A),g=h.length-1;if(g>0){s.textContent=ot?ot.emptyScript:"";for(let x=0;x<g;x++)s.append(h[x],Y()),k.nextNode(),a.push({type:2,index:++o});s.append(h[g],Y())}}}else if(s.nodeType===8)if(s.data===Ht)a.push({type:2,index:o});else{let h=-1;for(;(h=s.data.indexOf(A,h+1))!==-1;)a.push({type:7,index:o}),h+=A.length-1}o++}}static createElement(t,e){const r=O.createElement("template");return r.innerHTML=t,r}}function L(i,t,e=i,r){var n,l;if(t===D)return t;let s=r!==void 0?(n=e._$Co)==null?void 0:n[r]:e._$Cl;const o=W(t)?void 0:t._$litDirective$;return(s==null?void 0:s.constructor)!==o&&((l=s==null?void 0:s._$AO)==null||l.call(s,!1),o===void 0?s=void 0:(s=new o(i),s._$AT(i,e,r)),r!==void 0?(e._$Co??(e._$Co=[]))[r]=s:e._$Cl=s),s!==void 0&&(t=L(i,s._$AS(i,t.values),s,r)),t}class oe{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:r}=this._$AD,s=((t==null?void 0:t.creationScope)??O).importNode(e,!0);k.currentNode=s;let o=k.nextNode(),n=0,l=0,a=r[0];for(;a!==void 0;){if(n===a.index){let d;a.type===2?d=new J(o,o.nextSibling,this,t):a.type===1?d=new a.ctor(o,a.name,a.strings,this,t):a.type===6&&(d=new ce(o,this,t)),this._$AV.push(d),a=r[++l]}n!==(a==null?void 0:a.index)&&(o=k.nextNode(),n++)}return k.currentNode=O,s}p(t){let e=0;for(const r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(t,r,e),e+=r.strings.length-2):r._$AI(t[e])),e++}}class J{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,e,r,s){this.type=2,this._$AH=u,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=r,this.options=s,this._$Cv=(s==null?void 0:s.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=L(this,t,e),W(t)?t===u||t==null||t===""?(this._$AH!==u&&this._$AR(),this._$AH=u):t!==this._$AH&&t!==D&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):se(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==u&&W(this._$AH)?this._$AA.nextSibling.data=t:this.T(O.createTextNode(t)),this._$AH=t}$(t){var o;const{values:e,_$litType$:r}=t,s=typeof r=="number"?this._$AC(t):(r.el===void 0&&(r.el=G.createElement(zt(r.h,r.h[0]),this.options)),r);if(((o=this._$AH)==null?void 0:o._$AD)===s)this._$AH.p(e);else{const n=new oe(s,this),l=n.u(this.options);n.p(e),this.T(l),this._$AH=n}}_$AC(t){let e=Ut.get(t.strings);return e===void 0&&Ut.set(t.strings,e=new G(t)),e}k(t){xt(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let r,s=0;for(const o of t)s===e.length?e.push(r=new J(this.O(Y()),this.O(Y()),this,this.options)):r=e[s],r._$AI(o),s++;s<e.length&&(this._$AR(r&&r._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var r;for((r=this._$AP)==null?void 0:r.call(this,!1,!0,e);t&&t!==this._$AB;){const s=t.nextSibling;t.remove(),t=s}}setConnected(t){var e;this._$AM===void 0&&(this._$Cv=t,(e=this._$AP)==null||e.call(this,t))}}class lt{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,r,s,o){this.type=1,this._$AH=u,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=o,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=u}_$AI(t,e=this,r,s){const o=this.strings;let n=!1;if(o===void 0)t=L(this,t,e,0),n=!W(t)||t!==this._$AH&&t!==D,n&&(this._$AH=t);else{const l=t;let a,d;for(t=o[0],a=0;a<o.length-1;a++)d=L(this,l[r+a],e,a),d===D&&(d=this._$AH[a]),n||(n=!W(d)||d!==this._$AH[a]),d===u?t=u:t!==u&&(t+=(d??"")+o[a+1]),this._$AH[a]=d}n&&!s&&this.j(t)}j(t){t===u?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class ne extends lt{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===u?void 0:t}}class ae extends lt{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==u)}}class le extends lt{constructor(t,e,r,s,o){super(t,e,r,s,o),this.type=5}_$AI(t,e=this){if((t=L(this,t,e,0)??u)===D)return;const r=this._$AH,s=t===u&&r!==u||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,o=t!==u&&(r===u||s);s&&this.element.removeEventListener(this.name,this,r),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e;typeof this._$AH=="function"?this._$AH.call(((e=this.options)==null?void 0:e.host)??this.element,t):this._$AH.handleEvent(t)}}class ce{constructor(t,e,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){L(this,t)}}const pt=V.litHtmlPolyfillSupport;pt==null||pt(G,J),(V.litHtmlVersions??(V.litHtmlVersions=[])).push("3.2.1");const de=(i,t,e)=>{const r=(e==null?void 0:e.renderBefore)??t;let s=r._$litPart$;if(s===void 0){const o=(e==null?void 0:e.renderBefore)??null;r._$litPart$=s=new J(t.insertBefore(Y(),o),o,void 0,e??{})}return s._$AI(i),s};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let b=class extends M{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e;const t=super.createRenderRoot();return(e=this.renderOptions).renderBefore??(e.renderBefore=t.firstChild),t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=de(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return D}};var Mt;b._$litElement$=!0,b.finalized=!0,(Mt=globalThis.litElementHydrateSupport)==null||Mt.call(globalThis,{LitElement:b});const bt=globalThis.litElementPolyfillSupport;bt==null||bt({LitElement:b});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.1.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const f=i=>(t,e)=>{e!==void 0?e.addInitializer(()=>{customElements.define(i,t)}):customElements.define(i,t)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const he={attribute:!0,type:String,converter:rt,reflect:!1,hasChanged:_t},ue=(i=he,t,e)=>{const{kind:r,metadata:s}=e;let o=globalThis.litPropertyMetadata.get(s);if(o===void 0&&globalThis.litPropertyMetadata.set(s,o=new Map),o.set(e.name,i),r==="accessor"){const{name:n}=e;return{set(l){const a=t.get.call(this);t.set.call(this,l),this.requestUpdate(n,a,i)},init(l){return l!==void 0&&this.P(n,void 0,i),l}}}if(r==="setter"){const{name:n}=e;return function(l){const a=this[n];t.call(this,l),this.requestUpdate(n,a,i)}}throw Error("Unsupported decorator location: "+r)};function c(i){return(t,e)=>typeof e=="object"?ue(i,t,e):((r,s,o)=>{const n=s.hasOwnProperty(o);return s.constructor.createProperty(o,n?{...r,wrapped:!0}:r),n?Object.getOwnPropertyDescriptor(s,o):void 0})(i,t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const pe=(i,t,e)=>(e.configurable=!0,e.enumerable=!0,Reflect.decorate&&typeof t!="object"&&Object.defineProperty(i,t,e),e);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Z(i){return(t,e)=>{const{slot:r,selector:s}=i??{},o="slot"+(r?`[name=${r}]`:":not([name])");return pe(t,e,{get(){var a;const n=(a=this.renderRoot)==null?void 0:a.querySelector(o),l=(n==null?void 0:n.assignedElements(i))??[];return s===void 0?l:l.filter(d=>d.matches(s))}})}}const jt=v`
    :host {
        display: inline-block;
        vertical-align: middle;
    }

    .button {
        cursor: pointer;
        user-select: none;
        display: flex;
        align-items: center;
        outline: none;
        border: none;
        height: 40px;
        border-radius: 20px;
        padding-inline: 12px;
        transition: 150ms;
        background: transparent;
        font-size: 12px;
        -webkit-tap-highlight-color: transparent;
        user-select: none;

        &:focus-visible {
            outline: 2px solid rgba(var(--dayui-color-primary), .8);
        }

        &:active {
            scale: .85;
        }

        &[variant=filled] {
            color: rgb(var(--dayui-color-on-primary-container));
            background: rgba(var(--dayui-color-primary-container));

            &:hover {
                background: rgba(var(--dayui-color-primary-container), .8);
            }

            &:active {
                background: rgba(var(--dayui-color-primary), .3);
            }
        }

        &[variant=outlined] {
            color: rgb(var(--dayui-color-primary));
            border: 1px solid rgb(var(--dayui-color-primary-container));

            &:hover {
                background: rgba(var(--dayui-color-primary-container), .2);
            }

            &:active {
                background: rgba(var(--dayui-color-primary-container), 1);
            }
        }

        &[variant=text] {
            color: rgb(var(--dayui-color-primary));

            &:hover {
                background: rgba(var(--dayui-color-primary-container), .2);
            }

            &:active {
                background: rgba(var(--dayui-color-primary-container), 1);
            }
        }

        &[disabled] {
            cursor: default;
            background: rgba(var(--dayui-color-inverse-surface), .2);

            &:active {
                scale: 1;
                background: rgba(var(--dayui-color-inverse-surface), .2);
            }

            &:hover {
                background: rgba(var(--dayui-color-inverse-surface), .2);
            }
        }
    }

    .text {
        margin-inline: 8px;
    }

`,be=v`
    .button {
        padding: 0;
        width: 40px;
        justify-content: center;
    }
`,E=v`
    :host,
    * {
        -webkit-tap-highlight-color: transparent;
        user-select: none;
        -webkit-user-select: none;
        -webkit-user-drag: none;
        -webkit-touch-callout: none;
    }
`;var ye=Object.defineProperty,fe=Object.getOwnPropertyDescriptor,T=(i,t,e,r)=>{for(var s=r>1?void 0:r?fe(t,e):t,o=i.length-1,n;o>=0;o--)(n=i[o])&&(s=(r?n(t,e,s):n(s))||s);return r&&s&&ye(t,e,s),s};let K=class extends b{constructor(){super(...arguments),this.variant="filled",this.disabled=!1}render(){return y`
            <div part="container">
                <button type="button" class="button day-f" part="button" variant=${this.variant}
                        ?disabled=${this.disabled} tabindex="0">
                    <slot class="startEl" part="startEl" name="startEl"></slot>
                    <span class="text" part="text"><slot></slot></span>
                    <slot class="endEl" part="endEl" name="endEl"></slot>
                </button>
            </div>
        `}};K.styles=[jt,E];T([c({type:String})],K.prototype,"variant",2);T([c({type:Boolean})],K.prototype,"disabled",2);K=T([f("day-button")],K);let F=class extends b{constructor(){super(...arguments),this.variant="filled",this.disabled=!1}render(){return y`
            <div part="container">
                <button class="button day-f" part="button" variant=${this.variant} ?disabled=${this.disabled}
                        tabindex="0">
                    <slot></slot>
                </button>
            </div>
        `}};F.styles=[jt,be,E];T([c({type:String})],F.prototype,"variant",2);T([c({type:Boolean})],F.prototype,"disabled",2);F=T([f("day-button-icon")],F);let ft=class extends b{render(){return y`
            <div>
                <slot></slot>
            </div>
        `}};ft.styles=v`
        :host div {
            display: inline-flex;
        }
    `;ft=T([f("day-button-group")],ft);var ve=Object.defineProperty,me=Object.getOwnPropertyDescriptor,Bt=(i,t,e,r)=>{for(var s=r>1?void 0:r?me(t,e):t,o=i.length-1,n;o>=0;o--)(n=i[o])&&(s=(r?n(t,e,s):n(s))||s);return r&&s&&ve(t,e,s),s};let vt=class extends b{constructor(){super(...arguments),this.size=24}render(){return y`
            <style>
                :host {
                    width: ${this.size}px;
                    height: ${this.size}px;
                }

                :host,
                * {
                    -webkit-tap-highlight-color: transparent;
                    user-select: none;
                    -webkit-user-select: none;
                    -webkit-user-drag: none;
                    -webkit-touch-callout: none;
                }

                span {
                    -webkit-user-select: none;
                    user-select: none;
                    font-size: ${this.size}px;
                }
            </style>
            <span part="icon" class="material-symbols-outlined"><slot></slot></span>
        `}};Bt([c({type:Number})],vt.prototype,"size",2);vt=Bt([f("day-icon")],vt);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ge=i=>i.strings===void 0;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const $e={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},_e=i=>(...t)=>({_$litDirective$:i,values:t});let xe=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,r){this._$Ct=t,this._$AM=e,this._$Ci=r}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const q=(i,t)=>{var r;const e=i._$AN;if(e===void 0)return!1;for(const s of e)(r=s._$AO)==null||r.call(s,t,!1),q(s,t);return!0},nt=i=>{let t,e;do{if((t=i._$AM)===void 0)break;e=t._$AN,e.delete(i),i=t}while((e==null?void 0:e.size)===0)},Vt=i=>{for(let t;t=i._$AM;i=t){let e=t._$AN;if(e===void 0)t._$AN=e=new Set;else if(e.has(i))break;e.add(i),Ee(t)}};function Ae(i){this._$AN!==void 0?(nt(this),this._$AM=i,Vt(this)):this._$AM=i}function we(i,t=!1,e=0){const r=this._$AH,s=this._$AN;if(s!==void 0&&s.size!==0)if(t)if(Array.isArray(r))for(let o=e;o<r.length;o++)q(r[o],!1),nt(r[o]);else r!=null&&(q(r,!1),nt(r));else q(this,i)}const Ee=i=>{i.type==$e.CHILD&&(i._$AP??(i._$AP=we),i._$AQ??(i._$AQ=Ae))};class Se extends xe{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,e,r){super._$AT(t,e,r),Vt(this),this.isConnected=t._$AU}_$AO(t,e=!0){var r,s;t!==this.isConnected&&(this.isConnected=t,t?(r=this.reconnected)==null||r.call(this):(s=this.disconnected)==null||s.call(this)),e&&(q(this,t),nt(this))}setValue(t){if(ge(this._$Ct))this._$Ct._$AI(t,this);else{const e=[...this._$Ct._$AH];e[this._$Ci]=t,this._$Ct._$AI(e,this,0)}}disconnected(){}reconnected(){}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Q=()=>new Pe;class Pe{}const yt=new WeakMap,X=_e(class extends Se{render(i){return u}update(i,[t]){var r;const e=t!==this.Y;return e&&this.Y!==void 0&&this.rt(void 0),(e||this.lt!==this.ct)&&(this.Y=t,this.ht=(r=i.options)==null?void 0:r.host,this.rt(this.ct=i.element)),u}rt(i){if(this.isConnected||(i=void 0),typeof this.Y=="function"){const t=this.ht??globalThis;let e=yt.get(t);e===void 0&&(e=new WeakMap,yt.set(t,e)),e.get(this.Y)!==void 0&&this.Y.call(this.ht,void 0),e.set(this.Y,i),i!==void 0&&this.Y.call(this.ht,i)}else this.Y.value=i}get lt(){var i,t;return typeof this.Y=="function"?(i=yt.get(this.ht??globalThis))==null?void 0:i.get(this.Y):(t=this.Y)==null?void 0:t.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}}),ke=v`
    .day-input-container {
        position: relative;
        border-radius: 16px;
        transition: .2s;
        border: 1px solid rgba(var(--dayui-color-on-background));

        .day-input-label {
            z-index: 0;
            pointer-events: none;
            user-select: none;
            position: absolute;
            top: 50%;
            left: 14px;
            transform: translateY(-50%);
            transition: .2s;
            transform-origin: 0% 0%;
            color: rgba(var(--dayui-color-on-background));
        }

        &.focused .day-input-label,
        &.filled .day-input-label {
            transform: translateY(-125%);
            scale: .75;
        }

        &.focused {
            border-color: rgba(var(--dayui-color-primary));
        }

        &:hover {
            border-color: rgba(var(--dayui-color-secondary));
        }

        .day-input {
            padding: 12px;
            padding-top: 28px;
            color: rgba(var(--dayui-color-on-background));
            outline: none;
            border: none;
            background: transparent;
            width: 100%;
            font-size: 16px;
            box-sizing: border-box;
        }
    }

    .day-input-container.variant-filled {
        background: rgb(var(--dayui-color-surface-variant));
        border-color: transparent;
        color: rgb(var(--dayui-color-on-surface-variant));

        &.focused {
            border-color: rgba(var(--dayui-color-secondary));
        }

        &:hover {
            border-color: rgba(var(--dayui-color-primary));
        }
    }
`;var Oe=Object.defineProperty,Ce=Object.getOwnPropertyDescriptor,$=(i,t,e,r)=>{for(var s=r>1?void 0:r?Ce(t,e):t,o=i.length-1,n;o>=0;o--)(n=i[o])&&(s=(r?n(t,e,s):n(s))||s);return r&&s&&Oe(t,e,s),s};let m=class extends b{constructor(){super(...arguments),this.name="",this.label="Input",this.tabIndex=0,this.variant="outlined",this.type="text",this.value="",this.disabled=!1,this.readonly=!1,this.inputRef=Q()}render(){var t,e;const i=this.inputRef.value;return(t=i==null?void 0:i.parentElement)==null||t.classList.remove("filled"),this.value.length>0&&((e=i==null?void 0:i.parentElement)==null||e.classList.add("filled")),y`
            <div class=${`day-input-container variant-${this.variant}`}>
                <span class="day-input-label">${this.label}</span>
                <input class="day-input" ${X(this.inputRef)} tabindex=${this.tabIndex} ?disabled=${this.disabled}
                       ?readonly=${this.readonly} name=${this.name}
                       type=${this.type} value=${this.value}/>
            </div>
        `}firstUpdated(){const i=this.inputRef.value;i==null||i.addEventListener("focus",()=>{var t;(t=i.parentElement)==null||t.classList.add("focused")}),i==null||i.addEventListener("blur",()=>{var t;(t=i.parentElement)==null||t.classList.remove("focused")}),i==null||i.addEventListener("input",()=>{var t,e;i.value.length>0?(t=i.parentElement)==null||t.classList.add("filled"):(e=i.parentElement)==null||e.classList.remove("filled")})}};m.styles=[ke,E];$([c({type:String})],m.prototype,"name",2);$([c({type:String})],m.prototype,"label",2);$([c({type:Number})],m.prototype,"tabIndex",2);$([c({type:String})],m.prototype,"variant",2);$([c({type:String})],m.prototype,"type",2);$([c({type:String})],m.prototype,"value",2);$([c({type:Boolean})],m.prototype,"disabled",2);$([c({type:Boolean})],m.prototype,"readonly",2);m=$([f("day-input")],m);const Re=v`
    .day-menu-container {
        position: relative;
    }

    .day-menu {
        z-index: 99;
        transition: 200ms;
        width: 200px;
        padding: 4px;
        border-radius: 16px;
        -webkit-backdrop-filter: blur(12px);
        backdrop-filter: blur(12px);
        scale: 1;
        opacity: 1;
    }

    .day-menu::before {
        z-index: -1;
        border-radius: 16px;
        content: ' ';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(var(--dayui-color-primary-container), .2);
    }

    [shadowed] {
        box-shadow: 0 0 16px -8px rgba(var(--dayui-color-shadow));
    }

    [position=top-left] {
        transform-origin: 0 0;
    }

    [position=top-right] {
        transform-origin: 100% 0;
    }

    [position=bottom-left] {
        transform-origin: 0 100%;
    }

    [position=bottom-right] {
        transform-origin: 100% 100%;
    }

    [closed] {
        scale: .9;
        opacity: .8;
    }
`,Ue=v`
    .day-menu-item {
        box-sizing: border-box;
        text-align: left;
        user-select: none;
        display: flex;
        justify-items: center;
        align-items: center;
        color: rgb(var(--dayui-color-on-primary-container));
        border: none;
        outline: none;
        width: 100%;
        background: transparent;
        font-size: 14px;
        margin: 2px 0 2px 0;
        padding: 8px;
        border-radius: 12px;
        transition: 150ms;
        user-select: none;
        tab-index: -1;

        & > * {
            touch-action: none;
            pointer-events: none;
        }

        & > span {
            margin: auto;
            margin-left: 0;
            user-select: none;
        }

        .day-menu-item-start {
            display: flex;
            margin-right: 8px;
        }

        .day-menu-item-end {
            display: flex;
        }

        &:hover {
            background-color: rgba(var(--dayui-color-primary-container), .8);
        }

        &:active {
            scale: .95;
            background-color: rgba(var(--dayui-color-primary), .2);
        }

        &.disabled {
            background: rgba(var(--dayui-color-on-surface), .2);
        }

        &:focus-visible {
            outline: 2px solid rgba(var(--dayui-color-primary), .8);
        }

        &:first-child {
            margin-top: 0;
        }

        &:last-child {
            margin-bottom: 0;
        }
    }
`;var Ne=Object.defineProperty,Te=Object.getOwnPropertyDescriptor,S=(i,t,e,r)=>{for(var s=r>1?void 0:r?Te(t,e):t,o=i.length-1,n;o>=0;o--)(n=i[o])&&(s=(r?n(t,e,s):n(s))||s);return r&&s&&Ne(t,e,s),s};let C=class extends b{constructor(){super(...arguments),this.shadowed=!1,this.closed=!1,this.position="top-left"}updated(){this.items.length>0&&(this.items[0].tabindex=0)}render(){return y`
            <div class="day-menu-container">
                <div class="day-menu" ?shadowed=${this.shadowed} ?closed=${this.closed} position=${this.position}>
                    <slot></slot>
                </div>
            </div>
        `}};C.styles=[Re,E];S([c({type:Boolean})],C.prototype,"shadowed",2);S([c({type:Boolean})],C.prototype,"closed",2);S([c({type:String})],C.prototype,"position",2);S([Z({selector:"day-menu-item"})],C.prototype,"items",2);C=S([f("day-menu")],C);let at=class extends b{constructor(){super(...arguments),this.value="",this.tabindex=-1,this.buttonRef=Q()}focusNext(i){const t=i.nextElementSibling;if(t!==null)if(t.tagName==="DAY-MENU-ITEM"){t.buttonRef.value.focus();return}else{this.focusNext(t);return}}focusPrev(i){const t=i.previousElementSibling;if(t!==null)if(t.tagName==="DAY-MENU-ITEM"){t.buttonRef.value.focus();return}else{this.focusPrev(t);return}}firstUpdated(){var i;(i=this.buttonRef.value)==null||i.addEventListener("keydown",t=>{t.key==="ArrowDown"&&(this.focusNext(this),t.preventDefault()),t.key==="ArrowUp"&&(this.focusPrev(this),t.preventDefault())})}render(){return y`
            <button class="day-menu-item" tabindex=${this.tabindex} ${X(this.buttonRef)}>
                <div class="day-menu-item-start">
                    <slot name="startEl"></slot>
                </div>
                <span><slot></slot></span>
                <div class="day-menu-item-end">
                    <slot name="endEl"></slot>
                </div>
            </button>
        `}};at.styles=Ue;S([c({type:String})],at.prototype,"value",2);at=S([f("day-menu-item")],at);let mt=class extends b{render(){return y`
            <div class="day-menu-divider"></div>
        `}};mt.styles=v`
        .day-menu-divider {
            background: rgba(var(--dayui-color-primary-container));
            height: 2px;
        }
    `;mt=S([f("day-menu-divider")],mt);const Me=v`
    
    .day-dropdown-position-origin{
        position: relative;
    }
    
    .day-dropdown-position-container{
        position: absolute;
        top: 8px;
        z-index: 9999;
    }
`;var De=Object.defineProperty,Le=Object.getOwnPropertyDescriptor,ct=(i,t,e,r)=>{for(var s=r>1?void 0:r?Le(t,e):t,o=i.length-1,n;o>=0;o--)(n=i[o])&&(s=(r?n(t,e,s):n(s))||s);return r&&s&&De(t,e,s),s};let H=class extends b{constructor(){super(...arguments),this.disabled=!1,this.itemsArr=[],this._close=i=>{this._menuElements[0].setAttribute("closed","true"),setTimeout(()=>{this._menuElements[0].style.display="none"},i)},this._open=()=>{this.disabled||(this._menuElements[0].style.display="block",setTimeout(()=>{this._menuElements[0].removeAttribute("closed"),this.itemsArr[0].buttonRef.value.focus()},1))}}firstUpdated(){this._menuElements[0].tabIndex=-1,this._menuElements[0].setAttribute("shadowed","true"),this._triggerElements[0].addEventListener("click",()=>{this._open()}),this._menuElements[0].children[0].tagName==="SLOT"?this.itemsArr=this._menuElements[0].children[0].assignedElements():this.itemsArr=Array.from(this._menuElements[0].children),this.itemsArr.forEach(i=>{var t,e;(e=(t=i.shadowRoot)==null?void 0:t.querySelector(".day-menu-item"))==null||e.addEventListener("blur",r=>{this.itemsArr.indexOf(r.relatedTarget)===-1&&setTimeout(()=>{this._close(100)},100)}),i.shadowRoot.querySelectorAll("day-menu-item").length<=0&&i.addEventListener("click",()=>{this._close(100)})}),this._close(0)}render(){return y`
            <div class="day-dropdown-container">
                <slot name="trigger"></slot>
                <div class="day-dropdown-position-origin">
                    <div class="day-dropdown-position-container">
                        <slot></slot>
                    </div>
                </div>
            </div>
        `}};H.styles=[Me,E];ct([c({type:Boolean})],H.prototype,"disabled",2);ct([Z({slot:"trigger"})],H.prototype,"_triggerElements",2);ct([Z()],H.prototype,"_menuElements",2);H=ct([f("day-dropdown")],H);var He=Object.defineProperty,Ie=Object.getOwnPropertyDescriptor,tt=(i,t,e,r)=>{for(var s=r>1?void 0:r?Ie(t,e):t,o=i.length-1,n;o>=0;o--)(n=i[o])&&(s=(r?n(t,e,s):n(s))||s);return r&&s&&He(t,e,s),s};let R=class extends b{constructor(){super(...arguments),this.name="",this.label="",this.disabled=!1,this.value=""}firstUpdated(){this._menuElements.forEach(i=>{i.onclick=()=>{this.value=i.value,this.requestUpdate()}})}render(){return y`
            <div class="day-select-container">
                <day-dropdown ?disabled=${this.disabled}>
                    <day-input label=${this.label} value=${this.value} slot="trigger" tabIndex="0" readonly
                               @focus=${i=>{i.target.click()}} ?disabled=${this.disabled} name=${this.name}></day-input>
                    <day-menu>
                        <slot></slot>
                    </day-menu>
                </day-dropdown>
            </div>
        `}};R.styles=E;tt([c({type:String})],R.prototype,"name",2);tt([c({type:String})],R.prototype,"label",2);tt([c({type:Boolean})],R.prototype,"disabled",2);tt([Z()],R.prototype,"_menuElements",2);R=tt([f("day-select")],R);const ze=v`
    
    .day-checkbox-container {
        display: inline-flex;
        position: relative;
        height: 24px;
        width: 24px;
        transition: 100ms;
        scale: 1;
        border-radius: 4px;
        
        &[disabled] .day-checkbox-icon{
            fill: rgba(var(--dayui-color-outline));
        }

        &:not([disabled]) {
            &:focus-visible {
                outline: 2px solid rgba(var(--dayui-color-primary), .8);
            }
            
            &:hover {
                background: rgba(var(--dayui-color-primary-container), .4);
            }

            &:active {
                scale: .8;
            }
        }
    }

    .day-checkbox-input {
        display: none;
    }

    .day-checkbox-icon {
        position: absolute;
        width: 24px;
        height: 24px;
        fill: rgba(var(--dayui-color-primary));
        transition: 100ms;
        scale: .8;
        opacity: 0;
        transform-origin: 50% 50%;

        &:not([disabled]) {
            &[selected] {
                opacity: 1;
                scale: 1;
            }
        }
    }
`;var je=Object.defineProperty,Be=Object.getOwnPropertyDescriptor,et=(i,t,e,r)=>{for(var s=r>1?void 0:r?Be(t,e):t,o=i.length-1,n;o>=0;o--)(n=i[o])&&(s=(r?n(t,e,s):n(s))||s);return r&&s&&je(t,e,s),s};let U=class extends b{constructor(){super(...arguments),this.name="",this.disabled=!1,this.checked=!1,this.indeterminate=!1,this.inputRef=Q()}_handleClick(){if(!this.disabled){if(this.indeterminate){this.indeterminate=!1,this.checked=!0;return}this.checked=!this.checked}}updated(){var i,t,e,r,s,o,n;(i=this.shadowRoot)==null||i.querySelectorAll(".day-checkbox-icon").forEach(l=>l.removeAttribute("selected")),this.indeterminate?(e=(t=this.shadowRoot)==null?void 0:t.querySelector(".indeterminate"))==null||e.setAttribute("selected",""):this.checked?(s=(r=this.shadowRoot)==null?void 0:r.querySelector(".checked"))==null||s.setAttribute("selected",""):this.checked||(n=(o=this.shadowRoot)==null?void 0:o.querySelector(".unchecked"))==null||n.setAttribute("selected","")}firstUpdated(){var i;(i=this.inputRef.value)==null||i.addEventListener("change",()=>{var t;this.disabled||(this.checked=((t=this.inputRef.value)==null?void 0:t.checked)??!1)})}render(){return y`
            <div class="day-checkbox-container" tabindex=${this.disabled?"-1":"0"} ?disabled=${this.disabled}
                 @keydown=${i=>{(i.key==="Enter"||i.key===" ")&&this._handleClick()}}>
                <input type="checkbox" class="day-checkbox-input" ${X(this.inputRef)} ?disabled=${this.disabled}
                       name=${this.name}>
                <div @click=${this._handleClick}>
                    <svg xmlns="http://www.w3.org/2000/svg" class="day-checkbox-icon unchecked" viewBox="0 0 24 24">
                        <path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"></path>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" class="day-checkbox-icon checked" viewBox="0 0 24 24">
                        <path d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm-9 14-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" class="day-checkbox-icon indeterminate" viewBox="0 0 24 24">
                        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"></path>
                    </svg>
                </div>
            </div>
        `}};U.styles=[ze,E];et([c({type:String})],U.prototype,"name",2);et([c({type:Boolean})],U.prototype,"disabled",2);et([c({type:Boolean})],U.prototype,"checked",2);et([c({type:Boolean})],U.prototype,"indeterminate",2);U=et([f("day-checkbox")],U);const Ve=v`
    .day-switch-container {
        display: inline-flex;
        position: relative;
        border-radius: 16px;
        height: 32px;
        width: 52px;
        transition: 150ms;
        background: transparent;
        box-sizing: border-box;
        border: 2px solid rgba(var(--dayui-color-primary));

        .day-switch-input {
            display: none;
        }

        .day-switch-thumb {
            transition: 150ms;
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            border-radius: 7px;
            width: 14px;
            height: 14px;
            background: rgba(var(--dayui-color-primary));
            left: 7px;
        }

        &[disabled] {
            border-color: rgba(var(--dayui-color-outline));
            
            .day-switch-thumb {
                background: rgba(var(--dayui-color-outline));
            }
        }

        &:not([disabled]) {
            &:focus-visible {
                outline: 2px solid rgba(var(--dayui-color-primary), .8);
            }

            &:active .day-switch-thumb {
                border-radius: 13px;
                left: 1px;
                width: 26px;
                height: 26px;
            }

            &:hover .day-switch-thumb {
                box-shadow: 0 0 0px 8px rgba(var(--dayui-color-primary-container), .4);
            }
        }

        &[checked] {
            background: rgba(var(--dayui-color-primary));

            .day-switch-thumb {
                border-radius: 12px;
                left: unset;
                //right: 2px;
                left: 22px;
                width: 24px;
                height: 24px;
                background: rgba(var(--dayui-color-primary-container));
            }

            &:active .day-switch-thumb {
                left: 14px;
                width: 32px;
            }
        }
    }
`;var qe=Object.defineProperty,Ye=Object.getOwnPropertyDescriptor,dt=(i,t,e,r)=>{for(var s=r>1?void 0:r?Ye(t,e):t,o=i.length-1,n;o>=0;o--)(n=i[o])&&(s=(r?n(t,e,s):n(s))||s);return r&&s&&qe(t,e,s),s};let I=class extends b{constructor(){super(...arguments),this.name="",this.disabled=!1,this.checked=!1,this.inputRef=Q()}_handleClick(){this.disabled||(this.checked=!this.checked)}firstUpdated(){var i;(i=this.inputRef.value)==null||i.addEventListener("change",()=>{var t;this.disabled||(this.checked=((t=this.inputRef.value)==null?void 0:t.checked)??!1)})}render(){return y`
            <div class="day-switch-container" tabindex=${this.disabled?"-1":"0"} ?disabled=${this.disabled}
                 @keydown=${i=>{(i.key==="Enter"||i.key===" ")&&this._handleClick()}} ?checked=${this.checked} @click=${this._handleClick}>
                <input type="checkbox" class="day-switch-input" ${X(this.inputRef)} ?disabled=${this.disabled}
                       name=${this.name}>
                <div>
                    <span class="day-switch-thumb"></span>
                </div>
            </div>
        `}};I.styles=[Ve,E];dt([c({type:String})],I.prototype,"name",2);dt([c({type:Boolean})],I.prototype,"disabled",2);dt([c({type:Boolean})],I.prototype,"checked",2);I=dt([f("day-switch")],I);const We=v`
    .day-radio-container {
        display: flex;
        flex-direction: row;
        gap: 8px;
    }

    .circle {
        transition: 100ms;
        position: relative;
        width: 16px;
        height: 16px;
        border-radius: 50%;
        border: 2px solid rgba(var(--dayui-color-primary));

        &::before {
            transition: 100ms;
            position: absolute;
            content: " ";
            width: 16px;
            height: 16px;
            background: rgba(var(--dayui-color-primary));
            border-radius: 50%;
            opacity: 0;
            scale: .5;
        }
        
        &[checked]::before {
            opacity: 1;
            scale: .7;
        }

        &:focus-visible, &:hover {
            outline: none;
            box-shadow: 0 0 0px 6px rgba(var(--dayui-color-primary-container), .4);
        }
    }
`,Ge=v`
`;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let qt=class extends Event{constructor(t,e,r){super("context-request",{bubbles:!0,composed:!0}),this.context=t,this.callback=e,this.subscribe=r??!1}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 *//**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Nt=class{constructor(t,e,r,s){if(this.subscribe=!1,this.provided=!1,this.value=void 0,this.t=(o,n)=>{this.unsubscribe&&(this.unsubscribe!==n&&(this.provided=!1,this.unsubscribe()),this.subscribe||this.unsubscribe()),this.value=o,this.host.requestUpdate(),this.provided&&!this.subscribe||(this.provided=!0,this.callback&&this.callback(o,n)),this.unsubscribe=n},this.host=t,e.context!==void 0){const o=e;this.context=o.context,this.callback=o.callback,this.subscribe=o.subscribe??!1}else this.context=e,this.callback=r,this.subscribe=s??!1;this.host.addController(this)}hostConnected(){this.dispatchRequest()}hostDisconnected(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=void 0)}dispatchRequest(){this.host.dispatchEvent(new qt(this.context,this.t,this.subscribe))}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Ke{get value(){return this.o}set value(t){this.setValue(t)}setValue(t,e=!1){const r=e||!Object.is(t,this.o);this.o=t,r&&this.updateObservers()}constructor(t){this.subscriptions=new Map,this.updateObservers=()=>{for(const[e,{disposer:r}]of this.subscriptions)e(this.o,r)},t!==void 0&&(this.value=t)}addCallback(t,e,r){if(!r)return void t(this.value);this.subscriptions.has(t)||this.subscriptions.set(t,{disposer:()=>{this.subscriptions.delete(t)},consumerHost:e});const{disposer:s}=this.subscriptions.get(t);t(this.value,s)}clearCallbacks(){this.subscriptions.clear()}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Fe=class extends Event{constructor(t){super("context-provider",{bubbles:!0,composed:!0}),this.context=t}};class Tt extends Ke{constructor(t,e,r){var s,o;super(e.context!==void 0?e.initialValue:r),this.onContextRequest=n=>{const l=n.composedPath()[0];n.context===this.context&&l!==this.host&&(n.stopPropagation(),this.addCallback(n.callback,l,n.subscribe))},this.onProviderRequest=n=>{const l=n.composedPath()[0];if(n.context!==this.context||l===this.host)return;const a=new Set;for(const[d,{consumerHost:p}]of this.subscriptions)a.has(d)||(a.add(d),p.dispatchEvent(new qt(this.context,d,!0)));n.stopPropagation()},this.host=t,e.context!==void 0?this.context=e.context:this.context=e,this.attachListeners(),(o=(s=this.host).addController)==null||o.call(s,this)}attachListeners(){this.host.addEventListener("context-request",this.onContextRequest),this.host.addEventListener("context-provider",this.onProviderRequest)}hostConnected(){this.host.dispatchEvent(new Fe(this.context))}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Je({context:i}){return(t,e)=>{const r=new WeakMap;if(typeof e=="object")return e.addInitializer(function(){r.set(this,new Tt(this,{context:i}))}),{get(){return t.get.call(this)},set(s){var o;return(o=r.get(this))==null||o.setValue(s),t.set.call(this,s)},init(s){var o;return(o=r.get(this))==null||o.setValue(s),s}};{t.constructor.addInitializer(n=>{r.set(n,new Tt(n,{context:i}))});const s=Object.getOwnPropertyDescriptor(t,e);let o;if(s===void 0){const n=new WeakMap;o={get(){return n.get(this)},set(l){r.get(this).setValue(l),n.set(this,l)},configurable:!0,enumerable:!0}}else{const n=s.set;o={...s,set(l){r.get(this).setValue(l),n==null||n.call(this,l)}}}return void Object.defineProperty(t,e,o)}}}/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Ze({context:i,subscribe:t}){return(e,r)=>{typeof r=="object"?r.addInitializer(function(){new Nt(this,{context:i,callback:s=>{e.set.call(this,s)},subscribe:t})}):e.constructor.addInitializer(s=>{new Nt(s,{context:i,callback:o=>{s[r]=o},subscribe:t})})}}var Qe=Object.defineProperty,Xe=Object.getOwnPropertyDescriptor,_=(i,t,e,r)=>{for(var s=r>1?void 0:r?Xe(t,e):t,o=i.length-1,n;o>=0;o--)(n=i[o])&&(s=(r?n(t,e,s):n(s))||s);return r&&s&&Qe(t,e,s),s};const Yt="radioContext";let N=class extends b{constructor(){super(...arguments),this.value="",this.direction="row",this.name=""}firstUpdated(){this.items.forEach(i=>{i.addEventListener("click",()=>{this.value=i.value})})}updated(){this.items.length>0&&(this.items[0].tabindex=0)}render(){return y`
            <div>
                <input style="display: none" class="day-radio-group-input" type="radio" value=${this.value}
                       tabindex="-1" name=${this.name}>
                <slot style=${`display:flex;gap:8px;flex-direction:${this.direction}`}></slot>
            </div>
        `}};N.styles=Ge;_([Je({context:Yt}),c({type:String})],N.prototype,"value",2);_([c({type:String})],N.prototype,"direction",2);_([c({type:String})],N.prototype,"name",2);_([Z({selector:"day-radio"})],N.prototype,"items",2);N=_([f("day-radio-group")],N);let z=class extends b{constructor(){super(...arguments),this.groupValue="",this.disabled=!1,this.value="",this.tabindex=-1,this.divRef=Q()}focusNext(i){const t=i.nextElementSibling;if(t!==null)if(t.tagName==="DAY-RADIO"){t.divRef.value.focus();return}else{this.focusNext(t);return}}focusPrev(i){const t=i.previousElementSibling;if(t!==null)if(t.tagName==="DAY-RADIO"){t.divRef.value.focus();return}else{this.focusPrev(t);return}}firstUpdated(){var i;(i=this.divRef.value)==null||i.addEventListener("keydown",t=>{t.key==="ArrowDown"||t.key==="ArrowRight"?(this.focusNext(this),t.preventDefault()):t.key==="ArrowUp"||t.key==="ArrowLeft"?(this.focusPrev(this),t.preventDefault()):(t.key==="Enter"||t.key===" ")&&(this.parentElement.value=this.value)})}render(){return y`
            <div class="day-radio-container">
                <div class="circle" ${X(this.divRef)} tabindex=${this.tabindex}
                     ?checked=${this.groupValue===this.value}>
                </div>
                <slot></slot>
            </div>
        `}};z.styles=We;_([Ze({context:Yt,subscribe:!0}),c({attribute:!1})],z.prototype,"groupValue",2);_([c({type:Boolean})],z.prototype,"disabled",2);_([c({type:String})],z.prototype,"value",2);z=_([f("day-radio")],z);
