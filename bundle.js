(()=>{"use strict";var e={601:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(537),o=n.n(r),i=n(645),a=n.n(i)()(o());a.push([e.id,".field {\n    position: relative;\n    background-color: white;\n}\n\n.target {\n    position: absolute;\n    top: 0;\n    left: 0;\n    background-color: black;\n    animation: 3s infinite linear alternate horizontal;\n}\n\n@keyframes horizontal {\n    from {\n        left: 0;\n    }\n\n    to {\n        left: 100%;\n    }\n}\n","",{version:3,sources:["webpack://./src/target.css"],names:[],mappings:"AAAA;IACI,kBAAkB;IAClB,uBAAuB;AAC3B;;AAEA;IACI,kBAAkB;IAClB,MAAM;IACN,OAAO;IACP,uBAAuB;IACvB,kDAAkD;AACtD;;AAEA;IACI;QACI,OAAO;IACX;;IAEA;QACI,UAAU;IACd;AACJ",sourcesContent:[".field {\n    position: relative;\n    background-color: white;\n}\n\n.target {\n    position: absolute;\n    top: 0;\n    left: 0;\n    background-color: black;\n    animation: 3s infinite linear alternate horizontal;\n}\n\n@keyframes horizontal {\n    from {\n        left: 0;\n    }\n\n    to {\n        left: 100%;\n    }\n}\n"],sourceRoot:""}]);const s=a},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,i){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(a[c]=!0)}for(var l=0;l<e.length;l++){var u=[].concat(e[l]);r&&a[u[0]]||(void 0!==i&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=i),n&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=n):u[2]=n),o&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=o):u[4]="".concat(o)),t.push(u))}},t}},537:e=>{e.exports=function(e){var t=e[1],n=e[3];if(!n)return t;if("function"==typeof btoa){var r=btoa(unescape(encodeURIComponent(JSON.stringify(n)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r),i="/*# ".concat(o," */"),a=n.sources.map((function(e){return"/*# sourceURL=".concat(n.sourceRoot||"").concat(e," */")}));return[t].concat(a).concat([i]).join("\n")}return[t].join("\n")}},315:(e,t,n)=>{n.r(t),n.d(t,{default:()=>m});var r=n(379),o=n.n(r),i=n(795),a=n.n(i),s=n(569),c=n.n(s),l=n(565),u=n.n(l),d=n(216),p=n.n(d),f=n(589),h=n.n(f),v=n(601),g={};g.styleTagTransform=h(),g.setAttributes=u(),g.insert=c().bind(null,"head"),g.domAPI=a(),g.insertStyleElement=p(),o()(v.Z,g);const m=v.Z&&v.Z.locals?v.Z.locals:void 0},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var i={},a=[],s=0;s<e.length;s++){var c=e[s],l=r.base?c[0]+r.base:c[0],u=i[l]||0,d="".concat(l," ").concat(u);i[l]=u+1;var p=n(d),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)t[p].references++,t[p].updater(f);else{var h=o(f,r);r.byIndex=s,t.splice(s,0,{identifier:d,updater:h,references:1})}a.push(d)}return a}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var i=r(e=e||[],o=o||{});return function(e){e=e||[];for(var a=0;a<i.length;a++){var s=n(i[a]);t[s].references--}for(var c=r(e,o),l=0;l<i.length;l++){var u=n(i[l]);0===t[u].references&&(t[u].updater(),t.splice(u,1))}i=c}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},913:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.ConfigPanel=void 0,t.ConfigPanel=class{constructor(e){this.parentElement=e,this.panel=null}render(){this.panel=document.createElement("div"),this.parentElement.appendChild(this.panel)}getConfig(){return{fieldSize:{widthPx:800,heightPx:200},targetSize:{widthPx:50,heightPx:50},horizontalSpeed:100}}}},109:function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const o=r(n(389)),i=n(913),a=document.createElement("div");a.id="root",document.body.appendChild(a);const s=new i.ConfigPanel(a);new o.default(a,s).render()},389:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),n(315),t.default=class{constructor(e,t){this.parentElement=e,this.configPanel=t,this.field=null,this.target=null}render(){const e=this.configPanel.getConfig();this.field=document.createElement("div"),this.field.classList.add("field"),this.field.style.setProperty("width",e.fieldSize.widthPx.toString()+"px"),this.field.style.setProperty("height",e.fieldSize.heightPx.toString()+"px"),this.target=document.createElement("div"),this.target.classList.add("target"),this.target.style.setProperty("width",e.targetSize.widthPx.toString()+"px"),this.target.style.setProperty("height",e.targetSize.heightPx.toString()+"px"),this.field.appendChild(this.target),this.parentElement.appendChild(this.field)}}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={id:r,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.nc=void 0,n(109)})();
//# sourceMappingURL=bundle.js.map