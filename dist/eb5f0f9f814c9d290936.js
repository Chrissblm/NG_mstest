/*! For license information please see eb5f0f9f814c9d290936.js.LICENSE.txt */
function _typeof(t){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},_typeof(t)}function _regeneratorRuntime(){"use strict";_regeneratorRuntime=function(){return t};var t={},e=Object.prototype,n=e.hasOwnProperty,r=Object.defineProperty||function(t,e,n){t[e]=n.value},o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(t){u=function(t,e,n){return t[e]=n}}function l(t,e,n,o){var a=e&&e.prototype instanceof d?e:d,i=Object.create(a.prototype),c=new I(o||[]);return r(i,"_invoke",{value:b(t,n,c)}),i}function s(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=l;var f={};function d(){}function y(){}function h(){}var p={};u(p,a,(function(){return this}));var m=Object.getPrototypeOf,v=m&&m(m(_([])));v&&v!==e&&n.call(v,a)&&(p=v);var g=h.prototype=d.prototype=Object.create(p);function w(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function E(t,e){function o(r,a,i,c){var u=s(t[r],t,a);if("throw"!==u.type){var l=u.arg,f=l.value;return f&&"object"==_typeof(f)&&n.call(f,"__await")?e.resolve(f.__await).then((function(t){o("next",t,i,c)}),(function(t){o("throw",t,i,c)})):e.resolve(f).then((function(t){l.value=t,i(l)}),(function(t){return o("throw",t,i,c)}))}c(u.arg)}var a;r(this,"_invoke",{value:function(t,n){function r(){return new e((function(e,r){o(t,n,e,r)}))}return a=a?a.then(r,r):r()}})}function b(t,e,n){var r="suspendedStart";return function(o,a){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw a;return{value:void 0,done:!0}}for(n.method=o,n.arg=a;;){var i=n.delegate;if(i){var c=x(i,n);if(c){if(c===f)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var u=s(t,e,n);if("normal"===u.type){if(r=n.done?"completed":"suspendedYield",u.arg===f)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(r="completed",n.method="throw",n.arg=u.arg)}}}function x(t,e){var n=e.method,r=t.iterator[n];if(void 0===r)return e.delegate=null,"throw"===n&&t.iterator.return&&(e.method="return",e.arg=void 0,x(t,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),f;var o=s(r,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,f;var a=o.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,f):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,f)}function L(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function k(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function I(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(L,this),this.reset(!0)}function _(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,o=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:S}}function S(){return{value:void 0,done:!0}}return y.prototype=h,r(g,"constructor",{value:h,configurable:!0}),r(h,"constructor",{value:y,configurable:!0}),y.displayName=u(h,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===y||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,h):(t.__proto__=h,u(t,c,"GeneratorFunction")),t.prototype=Object.create(g),t},t.awrap=function(t){return{__await:t}},w(E.prototype),u(E.prototype,i,(function(){return this})),t.AsyncIterator=E,t.async=function(e,n,r,o,a){void 0===a&&(a=Promise);var i=new E(l(e,n,r,o),a);return t.isGeneratorFunction(n)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},w(g),u(g,c,"Generator"),u(g,a,(function(){return this})),u(g,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),n=[];for(var r in e)n.push(r);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},t.values=_,I.prototype={constructor:I,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(k),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(n,r){return i.type="throw",i.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var c=n.call(a,"catchLoc"),u=n.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,f):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),k(n),f}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;k(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:_(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),f}},t}function asyncGeneratorStep(t,e,n,r,o,a,i){try{var c=t[a](i),u=c.value}catch(t){return void n(t)}c.done?e(u):Promise.resolve(u).then(r,o)}function _asyncToGenerator(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var a=t.apply(e,n);function i(t){asyncGeneratorStep(a,r,o,i,c,"next",t)}function c(t){asyncGeneratorStep(a,r,o,i,c,"throw",t)}i(void 0)}))}}Office.onReady((function(){document.getElementById("keysave")&&(document.getElementById("keysave").onclick=window.keySave),document.getElementById("sideload-msg")&&(document.getElementById("sideload-msg").style.display="none");var t=document.getElementById("keysave"),e=document.getElementById("msgkey");console.log("Save button:",t),console.log("Message element:",e)})),document.addEventListener("DOMContentLoaded",(function(){function t(t){var e=document.getElementById("chat-output"),n=document.createElement("p");n.textContent=t,e.appendChild(n),e.scrollTop=e.scrollHeight}document.getElementById("Tab3").addEventListener("click",(function(){document.getElementById("temperature-slider").addEventListener("input",(function(){document.getElementById("temperature-output").innerText=this.value})),document.getElementById("max-tokens-slider").addEventListener("input",(function(){document.getElementById("max-tokens-output").innerText=this.value})),document.getElementById("myButton").addEventListener("click",(function(){document.getElementById("chat-input").focus()})),document.getElementById("chat-input").addEventListener("keydown",(function(e){var n;"Enter"===e.key&&(t("User: "+(n=document.getElementById("chat-input").value)),function(t){return new Promise((function(e,n){var r=localStorage.getItem("apikey");if(r){var o={prompt:t,temperature:document.getElementById("temperature-slider").value,model:document.getElementById("model-dropdown").value,max_tokens:document.getElementById("max-tokens-slider").value},a=new XMLHttpRequest;a.open("POST","https://api.openai.com/v1/completions",!0),a.setRequestHeader("Content-Type","application/json"),a.setRequestHeader("Authorization","Bearer "+r),a.onreadystatechange=function(){if(a.readyState===XMLHttpRequest.DONE&&200===a.status){var t=JSON.parse(a.responseText);e(t.choices[0].text.trim())}},a.send(JSON.stringify(o)),a.onerror=function(t){n(t.error)}}else n("No API Key Found! You have not subscribed to the ChatGPT key yet!")}))}(n).then((function(e){t("ChatGPT: "+e)})).catch((function(t){console.error("Error: "+t)})),document.getElementById("chat-input").value="")}))}))})),window.openTab=function(t,e){var n,r,o;for(r=document.getElementsByClassName("tabcontent"),n=0;n<r.length;n++)r[n].style.display="none";for(o=document.getElementsByClassName("tablink"),n=0;n<o.length;n++)o[n].className=o[n].className.replace(" active","");document.getElementById(e).style.display="block",t.currentTarget.className+=" active"},window.onload=function(){document.querySelector(".tablink").click()},window.keySave=function(){try{console.log("Save button clicked");var t=document.getElementById("key").value;localStorage.setItem("apikey",t),console.log(localStorage.getItem("apikey"));var e=document.getElementById("msgkey");localStorage.getItem("apikey")&&""!==localStorage.getItem("apikey").trim()?(e.classList.add("alert-saved"),e.innerHTML="OPEN AI Key Saved"):(e.classList.remove("alert-saved"),e.innerHTML="")}catch(t){console.log(t)}};export function run(){return _run.apply(this,arguments)}function _run(){return _run=_asyncToGenerator(_regeneratorRuntime().mark((function t(){return _regeneratorRuntime().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Excel.run(function(){var t=_asyncToGenerator(_regeneratorRuntime().mark((function t(e){return _regeneratorRuntime().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.sync();case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());case 3:t.next=8;break;case 5:t.prev=5,t.t0=t.catch(0),console.error(t.t0);case 8:case"end":return t.stop()}}),t,null,[[0,5]])}))),_run.apply(this,arguments)}