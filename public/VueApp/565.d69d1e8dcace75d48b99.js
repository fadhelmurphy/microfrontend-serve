"use strict";(self.webpackChunkmf=self.webpackChunkmf||[]).push([[565],{565:(e,n,t)=>{t.r(n),t.d(n,{mount:()=>C});var r=t(22),o={style:{border:"1px solid #3fb27f"}},a={class:"input-counter"},c=["value"],i=function(e){return(0,r.pushScopeId)("data-v-93bdc556"),e=e(),(0,r.popScopeId)(),e}((function(){return(0,r.createElementVNode)("br",null,null,-1)}));const u={props:["counter","update"],data:function(){return{message:"From Vue!",count:window.myapp.counter}},mounted:function(){var e=this;window.addEventListener("onIncrement",(function(){e.count=window.myapp.counter})),window.addEventListener("onDecrement",(function(){e.count=window.myapp.counter}))},methods:{handleIncrement:function(){window.myapp.incrementor()},handleDecrement:function(){window.myapp.decrementor()}}};var s=t(892),d=t.n(s),p=t(760),l=t.n(p),f=t(311),m=t.n(f),v=t(192),h=t.n(v),b=t(60),y=t.n(b),x=t(865),g=t.n(x),w=t(797),E={};E.styleTagTransform=g(),E.setAttributes=h(),E.insert=m().bind(null,"head"),E.domAPI=l(),E.insertStyleElement=y(),d()(w.Z,E),w.Z&&w.Z.locals&&w.Z.locals;const I=(0,t(959).Z)(u,[["render",function(e,n,t,u,s,d){return(0,r.openBlock)(),(0,r.createElementBlock)("div",o,[(0,r.createElementVNode)("h2",null,(0,r.toDisplayString)(s.message),1),(0,r.createElementVNode)("div",a,[(0,r.createElementVNode)("input",{class:"minus",type:"button",onClick:n[0]||(n[0]=function(){return d.handleDecrement&&d.handleDecrement.apply(d,arguments)}),value:"-"}),(0,r.createElementVNode)("input",{class:"counter",type:"text",disabled:"",value:s.count},null,8,c),(0,r.createElementVNode)("input",{class:"plus",type:"button",onClick:n[1]||(n[1]=function(){return d.handleIncrement&&d.handleIncrement.apply(d,arguments)}),value:"+"})]),i])}],["__scopeId","data-v-93bdc556"]]);var C=function(e){(0,r.createApp)(I,{}).mount(e.selector)}},797:(e,n,t)=>{t.d(n,{Z:()=>i});var r=t(933),o=t.n(r),a=t(476),c=t.n(a)()(o());c.push([e.id,"\nh2[data-v-93bdc556] {\r\n  color: #3fb27f;\n}\n.input-counter .counter[data-v-93bdc556] {\r\n    border:1px solid #ddd;\r\n    border-radius:4px;\r\n    width: 44px;\r\n    height: 40px;\r\n    outline: none;\r\n    font-size: 12px;\r\n    text-align: center;\r\n    box-sizing: border-box;\r\n    font-size: 18px;\r\n    line-height: 14px;\r\n    margin: 0 10px;\n}\n.minus[data-v-93bdc556], .plus[data-v-93bdc556]{\r\n\t\t\t    margin: 0;\r\n    outline: none;\r\n    border:1px solid #ddd;\r\n    width: 44px;\r\n    height: 40px;\r\n    cursor: pointer;\r\n    background:#f2f2f2;\r\n\t\tborder-radius:4px;\r\n    font-weight: 400;\r\n    font-size: 22px;\r\n    line-height: 18px;\n}\r\n",""]);const i=c},476:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var c={};if(r)for(var i=0;i<this.length;i++){var u=this[i][0];null!=u&&(c[u]=!0)}for(var s=0;s<e.length;s++){var d=[].concat(e[s]);r&&c[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),n.push(d))}},n}},933:e=>{e.exports=function(e){return e[1]}},892:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var a={},c=[],i=0;i<e.length;i++){var u=e[i],s=r.base?u[0]+r.base:u[0],d=a[s]||0,p="".concat(s," ").concat(d);a[s]=d+1;var l=t(p),f={css:u[1],media:u[2],sourceMap:u[3],supports:u[4],layer:u[5]};if(-1!==l)n[l].references++,n[l].updater(f);else{var m=o(f,r);r.byIndex=i,n.splice(i,0,{identifier:p,updater:m,references:1})}c.push(p)}return c}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var c=0;c<a.length;c++){var i=t(a[c]);n[i].references--}for(var u=r(e,o),s=0;s<a.length;s++){var d=t(a[s]);0===n[d].references&&(n[d].updater(),n.splice(d,1))}a=u}}},311:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},60:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},192:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},760:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},865:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},959:(e,n)=>{n.Z=(e,n)=>{const t=e.__vccOpts||e;for(const[e,r]of n)t[e]=r;return t}}}]);