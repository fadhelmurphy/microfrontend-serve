"use strict";(self.webpackChunkhelloReac=self.webpackChunkhelloReac||[]).push([[975],{975:(e,n,t)=>{t.r(n),t.d(n,{mount:()=>f});var r=t(492),o=t.n(r),a=t(33),i=t.n(a),l=t(808);function u(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}var c=t(947),p=["history"],s=function(){var e,n,t=(e=(0,r.useState)(0),n=2,function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,o,a=[],i=!0,l=!1;try{for(t=t.call(e);!(i=(r=t.next()).done)&&(a.push(r.value),!n||a.length!==n);i=!0);}catch(e){l=!0,o=e}finally{try{i||null==t.return||t.return()}finally{if(l)throw o}}return a}}(e,n)||function(e,n){if(e){if("string"==typeof e)return u(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?u(e,n):void 0}}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),a=(t[0],t[1]);return(0,r.useEffect)((function(){window.addEventListener("onIncrement",(function(){a(window.myapp.counter)})),window.addEventListener("onDecrement",(function(){a(window.myapp.counter)}))}),[]),o().createElement("div",{style:{border:"1px solid #5ed3f3"}},o().createElement("h2",null,"This is from React!"),o().createElement("div",{className:"input-counter"},o().createElement("input",{className:"minus",type:"button",onClick:function(){return window.myapp.decrementor()},value:"-"}),o().createElement("input",{className:"counter",type:"text",disabled:!0,value:window.myapp.counter}),o().createElement("input",{className:"plus",type:"button",onClick:function(){return window.myapp.incrementor()},value:"+"})),o().createElement("br",null),o().createElement("style",{jsx:"true"},"\n        h2{\n          color: #5ed3f3;\n        }\n          .input-counter .counter {\n            border: 1px solid #ddd;\n            border-radius: 4px;\n            width: 44px;\n            height: 40px;\n            outline: none;\n            font-size: 12px;\n            text-align: center;\n            box-sizing: border-box;\n            font-size: 18px;\n            line-height: 14px;\n            margin: 0 10px;\n          }\n          .minus,\n          .plus {\n            margin: 0;\n            outline: none;\n            border: 1px solid #ddd;\n            width: 44px;\n            height: 40px;\n            cursor: pointer;\n            background: #f2f2f2;\n            border-radius: 4px;\n            font-weight: 400;\n            font-size: 22px;\n            line-height: 18px;\n          }\n        "))};const d=function(e){var n=e.history,t=function(e,n){if(null==e)return{};var t,r,o=(0,l.Z)(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}(e,p);return o().createElement(o().Fragment,null,o().createElement(c.Router,{history:n},o().createElement(c.Switch,null,o().createElement(c.Route,{path:"/react",render:function(){return o().createElement(s,t)}}),o().createElement(c.Route,{path:"/",render:function(){return o().createElement(s,t)}}))))};var m=t(534),f=function(e){var n=(0,m.lX)();return i().render(o().createElement(d,{history:n}),e.selector),{onParentNavigate:function(e){var t=e.pathname;n.location.pathname!==t&&n.push(t)}}}}}]);