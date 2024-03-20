import{useState as e,useEffect as t,Children as n,createElement as r,useRef as o,useCallback as i,useMemo as a,Fragment as c,memo as s}from"react";import u from"../../../shared/plotly.js";import l from"../../../shared/ace.js";import d from"big.js";var f,g={exports:{}};
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/f=g,function(){var e={}.hasOwnProperty;function t(){for(var n=[],r=0;r<arguments.length;r++){var o=arguments[r];if(o){var i=typeof o;if("string"===i||"number"===i)n.push(o);else if(Array.isArray(o)){if(o.length){var a=t.apply(null,o);a&&n.push(a)}}else if("object"===i){if(o.toString!==Object.prototype.toString&&!o.toString.toString().includes("[native code]")){n.push(o.toString());continue}for(var c in o)e.call(o,c)&&o[c]&&n.push(c)}}}return n.join(" ")}f.exports?(t.default=t,f.exports=t):window.classNames=t}();var h=g.exports;function p(e){const t={};if(e.width&&(t.width="percentage"===e.widthUnit?"".concat(e.width,"%"):"".concat(e.width,"px")),e.height)if("percentageOfWidth"===e.heightUnit&&e.width){const n=e.height/100*e.width;"percentage"===e.widthUnit?(t.height="auto",t.paddingBottom="".concat(n,"%")):t.height="".concat(n,"px")}else"pixels"===e.heightUnit?t.height="".concat(e.height,"px"):"percentageOfParent"===e.heightUnit&&(t.height="".concat(e.height,"%"));return t}var m=function(e){return function(e){return!!e&&"object"==typeof e}(e)&&!function(e){var t=Object.prototype.toString.call(e);return"[object RegExp]"===t||"[object Date]"===t||function(e){return e.$$typeof===v}(e)}(e)};var v="function"==typeof Symbol&&Symbol.for?Symbol.for("react.element"):60103;function b(e,t){return!1!==t.clone&&t.isMergeableObject(e)?_((n=e,Array.isArray(n)?[]:{}),e,t):e;var n}function y(e,t,n){return e.concat(t).map((function(e){return b(e,n)}))}function w(e){return Object.keys(e).concat(function(e){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e).filter((function(t){return Object.propertyIsEnumerable.call(e,t)})):[]}(e))}function A(e,t){try{return t in e}catch(e){return!1}}function O(e,t,n){var r={};return n.isMergeableObject(e)&&w(e).forEach((function(t){r[t]=b(e[t],n)})),w(t).forEach((function(o){(function(e,t){return A(e,t)&&!(Object.hasOwnProperty.call(e,t)&&Object.propertyIsEnumerable.call(e,t))})(e,o)||(A(e,o)&&n.isMergeableObject(t[o])?r[o]=function(e,t){if(!t.customMerge)return _;var n=t.customMerge(e);return"function"==typeof n?n:_}(o,n)(e[o],t[o],n):r[o]=b(t[o],n))})),r}function _(e,t,n){(n=n||{}).arrayMerge=n.arrayMerge||y,n.isMergeableObject=n.isMergeableObject||m,n.cloneUnlessOtherwiseSpecified=b;var r=Array.isArray(t);return r===Array.isArray(e)?r?n.arrayMerge(e,t,n):O(e,t,n):b(t,n)}_.all=function(e,t){if(!Array.isArray(e))throw new Error("first argument should be an array");return e.reduce((function(e,n){return _(e,n,t)}),{})};var k=_,x=function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function a(e){try{s(r.next(e))}catch(e){i(e)}}function c(e){try{s(r.throw(e))}catch(e){i(e)}}function s(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,c)}s((r=r.apply(e,t||[])).next())}))};var E=function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function a(e){try{s(r.next(e))}catch(e){i(e)}}function c(e){try{s(r.throw(e))}catch(e){i(e)}}function s(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,c)}s((r=r.apply(e,t||[])).next())}))};const N={layout:{font:{family:"Open Sans",size:14,color:"#555"},autosize:!0,hovermode:"closest",hoverlabel:{bgcolor:"#888",bordercolor:"#888",font:{color:"#FFF"}},margin:{l:60,r:60,b:60,t:60,pad:10}},configuration:{displayModeBar:!1,doubleClick:!1},series:{connectgaps:!0,hoverinfo:"none",hoveron:"points"}};function S(e){console.warn("Error in theme folder configuration file: ".concat(e))}const C=(n,r)=>{const[o,i]=e({layout:{},configuration:{},series:{}});return t((()=>{r&&function(){E(this,void 0,void 0,(function*(){try{const e=yield function(){return x(this,void 0,void 0,(function*(){try{if(!window)return null;const e=yield window.fetch("".concat(window.mx.remoteUrl,"com.mendix.charts.json"));if(e.ok)return yield e.json()}catch(e){return null}}))}();if(null==e)return;if(!(e instanceof Object))return void S("invalid json object");if(!e.layout&&!e.configuration&&!e.charts)return void S("no 'layout', 'configuration', or 'charts' property found");i((t=>{var r;return{configuration:e.configuration||t.configuration,layout:e.layout||t.layout,series:(null===(r=e.charts)||void 0===r?void 0:r[n])||t.series}}))}catch(e){S(e)}}))}()}),[n,r]),o},L=e=>{let{className:t,bootstrapStyle:o,children:i,role:a}=e;return n.count(i)>0?r("div",{className:h("alert alert-".concat(o),t),role:a},i):null};function j(e,n){t((()=>{const{current:t}=Array.isArray(e)?e[0]:e;if(!t)return;const r=t.ownerDocument,o=function(e,t){const n=Array.isArray(e)?e:[e];return e=>{n.every((t=>{let{current:n}=t;return n&&!n.contains(e.target)}))&&t()}}(e,n);return r.addEventListener("mousedown",o),r.addEventListener("touchstart",o),()=>{r.removeEventListener("mousedown",o),r.removeEventListener("touchstart",o)}}),[e,n])}L.displayName="Alert";const R=e=>{let{className:t,isOpen:n,onBlur:o,onClick:i,children:a}=e;return r("div",{className:h("widget-sidebar",t,{"widget-sidebar-open":n}),onClick:i},r("div",{className:"overlay",onClick:o}),r("div",{className:"sidebar-content"},a))},T=e=>{let{className:t,onClose:n,children:o}=e;const i=n?10:12;return r("div",{className:h("sidebar-content-header",t)},r("div",{className:"header-content col-sm-".concat(i," col-xs-").concat(i)},o),n?r("div",{className:"col-sm-2 col-xs-2"},r("button",{className:"btn btn-image btn-icon close-button",onClick:n},r("img",{src:"widgets/com/mendix/widget/web/timeseries/assets/a67f3e73956c1a2a.svg",className:"removeIcon",alt:"Close the playground sidebar"}))):null)};const I="{}";function D(e){return function(e){return null!=e&&""!==e}(e)?e:I}const P=()=>{const[t,n]=e(!1),i=o(null),a=o(null);return j(a,(()=>n(!1))),r("button",{className:"info-tooltip",ref:i,onClick:()=>n(!0)},r("img",{src:"widgets/com/mendix/widget/web/timeseries/assets/3f4e15cb9aac0353.svg",className:"info-tooltip-icon",alt:"Show inline editor information"}),t?r("div",{ref:a,className:"info-tooltip-info",style:{width:i.current&&i.current.parentElement?.9*i.current.parentElement.clientWidth:"auto"}},r(L,{bootstrapStyle:"info",className:"info-tooltip-info-content"},r("p",null,r("strong",null,"Changes made in this editor are only for preview purposes.")),r("p",null,"The JSON can be copied and pasted into the widgets properties in the desktop modeler"),r("p",null,"Check out the chart options here:"," ",r("a",{href:"https://plot.ly/javascript/reference/",target:"_blank",rel:"noreferrer"},"https://plot.ly/javascript/reference/")))):null)},B=t=>{let{children:n,renderPanels:o,renderSidebarHeaderTools:a}=t;const[c,s]=e(!1),u=i((()=>s(!1)),[]),l=i((()=>s((e=>!e))),[]);return r("div",{className:h("widget-charts-playground",{"playground-open":c})},r(R,{isOpen:c,onBlur:u},r(T,{className:"row",onClose:u},a),r("div",{className:"sidebar-content-body"},r(P,null),o)),r("div",{className:"widget-charts-playground-toggle"},r("button",{className:"mx-button btn",onClick:l},"Toggle Editor")),n)},M=e=>{let{className:t,heading:n,headingClassName:o,children:i}=e;return r("div",{className:h("widget-panel",t)},n?r("div",{className:h("widget-panel-header",o)},n):null,i)},U=e=>{let{className:t,children:n}=e;return r("div",{className:h("sidebar-header-tools",t)},n)},V=e=>{let{onChange:t,options:n}=e;return r("select",{className:"form-control",onChange:e=>t(e.currentTarget.value)},n.map((e=>r("option",{key:"select-option-".concat(e.value),value:e.value,defaultChecked:e.isDefaultSelected},e.name))))};function F(e){return new Array(e).fill(I)}const J=n=>{let{data:r,customConfig:c,customLayout:s}=n;const[u,l]=e("layout"),[d,f]=e(D(c)),[g,h]=e(D(s)),[p,m]=e(F(r.length)),v=o(null),b=o(!1);t((()=>{r.length!==p.length&&m(F(r.length))}),[r.length,p.length]);const y=i((e=>{v.current&&clearTimeout(v.current),v.current=window.setTimeout((()=>{try{const t=b.current?JSON.stringify(JSON.parse(e),null,2):function(e){const t=e.replace(/(['"])?([a-z0-9A-Z_]+)(['"])?:/g,'"$2": ').replace(/'/g,'"');return JSON.stringify(JSON.parse(t),null,2)}(e);switch(u){case"layout":h(t);break;case"config":f(t);break;default:const e=parseInt(u,10);m((n=>n.map(((n,r)=>r===e?t:n))))}}catch(e){b.current=!1}}),1e3)}),[u]),w=i((e=>{b.current=e}),[]),A=a((()=>r.map(((e,t)=>Object.assign(Object.assign({},e),{customSeriesOptions:p[t]})))),[r,p]);return{activeEditableCode:a((()=>"layout"===u?g:"config"===u?d:p[parseInt(u,10)]),[u,d,g,p]),activeView:u,changeActiveView:l,changeEditableCode:y,changeEditableCodeIsValid:w,editedConfig:d,editedData:A,editedLayout:g}};
/*!
 * https://github.com/Starcounter-Jack/JSON-Patch
 * (c) 2017-2022 Joachim Wester
 * MIT licensed
 */var $,H=($=function(e,t){return $=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},$(e,t)},function(e,t){function n(){this.constructor=e}$(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),z=Object.prototype.hasOwnProperty;function q(e,t){return z.call(e,t)}function W(e){if(Array.isArray(e)){for(var t=new Array(e.length),n=0;n<t.length;n++)t[n]=""+n;return t}if(Object.keys)return Object.keys(e);var r=[];for(var o in e)q(e,o)&&r.push(o);return r}function Y(e){switch(typeof e){case"object":return JSON.parse(JSON.stringify(e));case"undefined":return null;default:return e}}function X(e){for(var t,n=0,r=e.length;n<r;){if(!((t=e.charCodeAt(n))>=48&&t<=57))return!1;n++}return!0}function G(e){return-1===e.indexOf("/")&&-1===e.indexOf("~")?e:e.replace(/~/g,"~0").replace(/\//g,"~1")}function Q(e){return e.replace(/~1/g,"/").replace(/~0/g,"~")}function Z(e){if(void 0===e)return!0;if(e)if(Array.isArray(e)){for(var t=0,n=e.length;t<n;t++)if(Z(e[t]))return!0}else if("object"==typeof e)for(var r=W(e),o=r.length,i=0;i<o;i++)if(Z(e[r[i]]))return!0;return!1}function K(e,t){var n=[e];for(var r in t){var o="object"==typeof t[r]?JSON.stringify(t[r],null,2):t[r];void 0!==o&&n.push(r+": "+o)}return n.join("\n")}var ee=function(e){function t(t,n,r,o,i){var a=this.constructor,c=e.call(this,K(t,{name:n,index:r,operation:o,tree:i}))||this;return c.name=n,c.index=r,c.operation=o,c.tree=i,Object.setPrototypeOf(c,a.prototype),c.message=K(t,{name:n,index:r,operation:o,tree:i}),c}return H(t,e),t}(Error),te=ee,ne=Y,re={add:function(e,t,n){return e[t]=this.value,{newDocument:n}},remove:function(e,t,n){var r=e[t];return delete e[t],{newDocument:n,removed:r}},replace:function(e,t,n){var r=e[t];return e[t]=this.value,{newDocument:n,removed:r}},move:function(e,t,n){var r=ie(n,this.path);r&&(r=Y(r));var o=ae(n,{op:"remove",path:this.from}).removed;return ae(n,{op:"add",path:this.path,value:o}),{newDocument:n,removed:r}},copy:function(e,t,n){var r=ie(n,this.from);return ae(n,{op:"add",path:this.path,value:Y(r)}),{newDocument:n}},test:function(e,t,n){return{newDocument:n,test:le(e[t],this.value)}},_get:function(e,t,n){return this.value=e[t],{newDocument:n}}},oe={add:function(e,t,n){return X(t)?e.splice(t,0,this.value):e[t]=this.value,{newDocument:n,index:t}},remove:function(e,t,n){return{newDocument:n,removed:e.splice(t,1)[0]}},replace:function(e,t,n){var r=e[t];return e[t]=this.value,{newDocument:n,removed:r}},move:re.move,copy:re.copy,test:re.test,_get:re._get};function ie(e,t){if(""==t)return e;var n={op:"_get",path:t};return ae(e,n),n.value}function ae(e,t,n,r,o,i){if(void 0===n&&(n=!1),void 0===r&&(r=!0),void 0===o&&(o=!0),void 0===i&&(i=0),n&&("function"==typeof n?n(t,0,e,t.path):se(t,0)),""===t.path){var a={newDocument:e};if("add"===t.op)return a.newDocument=t.value,a;if("replace"===t.op)return a.newDocument=t.value,a.removed=e,a;if("move"===t.op||"copy"===t.op)return a.newDocument=ie(e,t.from),"move"===t.op&&(a.removed=e),a;if("test"===t.op){if(a.test=le(e,t.value),!1===a.test)throw new te("Test operation failed","TEST_OPERATION_FAILED",i,t,e);return a.newDocument=e,a}if("remove"===t.op)return a.removed=e,a.newDocument=null,a;if("_get"===t.op)return t.value=e,a;if(n)throw new te("Operation `op` property is not one of operations defined in RFC-6902","OPERATION_OP_INVALID",i,t,e);return a}r||(e=Y(e));var c=(t.path||"").split("/"),s=e,u=1,l=c.length,d=void 0,f=void 0,g=void 0;for(g="function"==typeof n?n:se;;){if((f=c[u])&&-1!=f.indexOf("~")&&(f=Q(f)),o&&("__proto__"==f||"prototype"==f&&u>0&&"constructor"==c[u-1]))throw new TypeError("JSON-Patch: modifying `__proto__` or `constructor/prototype` prop is banned for security reasons, if this was on purpose, please set `banPrototypeModifications` flag false and pass it to this function. More info in fast-json-patch README");if(n&&void 0===d&&(void 0===s[f]?d=c.slice(0,u).join("/"):u==l-1&&(d=t.path),void 0!==d&&g(t,0,e,d)),u++,Array.isArray(s)){if("-"===f)f=s.length;else{if(n&&!X(f))throw new te("Expected an unsigned base-10 integer value, making the new referenced value the array element with the zero-based index","OPERATION_PATH_ILLEGAL_ARRAY_INDEX",i,t,e);X(f)&&(f=~~f)}if(u>=l){if(n&&"add"===t.op&&f>s.length)throw new te("The specified index MUST NOT be greater than the number of elements in the array","OPERATION_VALUE_OUT_OF_BOUNDS",i,t,e);if(!1===(a=oe[t.op].call(t,s,f,e)).test)throw new te("Test operation failed","TEST_OPERATION_FAILED",i,t,e);return a}}else if(u>=l){if(!1===(a=re[t.op].call(t,s,f,e)).test)throw new te("Test operation failed","TEST_OPERATION_FAILED",i,t,e);return a}if(s=s[f],n&&u<l&&(!s||"object"!=typeof s))throw new te("Cannot perform operation at the desired path","OPERATION_PATH_UNRESOLVABLE",i,t,e)}}function ce(e,t,n,r,o){if(void 0===r&&(r=!0),void 0===o&&(o=!0),n&&!Array.isArray(t))throw new te("Patch sequence must be an array","SEQUENCE_NOT_AN_ARRAY");r||(e=Y(e));for(var i=new Array(t.length),a=0,c=t.length;a<c;a++)i[a]=ae(e,t[a],n,!0,o,a),e=i[a].newDocument;return i.newDocument=e,i}function se(e,t,n,r){if("object"!=typeof e||null===e||Array.isArray(e))throw new te("Operation is not an object","OPERATION_NOT_AN_OBJECT",t,e,n);if(!re[e.op])throw new te("Operation `op` property is not one of operations defined in RFC-6902","OPERATION_OP_INVALID",t,e,n);if("string"!=typeof e.path)throw new te("Operation `path` property is not a string","OPERATION_PATH_INVALID",t,e,n);if(0!==e.path.indexOf("/")&&e.path.length>0)throw new te('Operation `path` property must start with "/"',"OPERATION_PATH_INVALID",t,e,n);if(("move"===e.op||"copy"===e.op)&&"string"!=typeof e.from)throw new te("Operation `from` property is not present (applicable in `move` and `copy` operations)","OPERATION_FROM_REQUIRED",t,e,n);if(("add"===e.op||"replace"===e.op||"test"===e.op)&&void 0===e.value)throw new te("Operation `value` property is not present (applicable in `add`, `replace` and `test` operations)","OPERATION_VALUE_REQUIRED",t,e,n);if(("add"===e.op||"replace"===e.op||"test"===e.op)&&Z(e.value))throw new te("Operation `value` property is not present (applicable in `add`, `replace` and `test` operations)","OPERATION_VALUE_CANNOT_CONTAIN_UNDEFINED",t,e,n);if(n)if("add"==e.op){var o=e.path.split("/").length,i=r.split("/").length;if(o!==i+1&&o!==i)throw new te("Cannot perform an `add` operation at the desired path","OPERATION_PATH_CANNOT_ADD",t,e,n)}else if("replace"===e.op||"remove"===e.op||"_get"===e.op){if(e.path!==r)throw new te("Cannot perform the operation at a path that does not exist","OPERATION_PATH_UNRESOLVABLE",t,e,n)}else if("move"===e.op||"copy"===e.op){var a=ue([{op:"_get",path:e.from,value:void 0}],n);if(a&&"OPERATION_PATH_UNRESOLVABLE"===a.name)throw new te("Cannot perform the operation from a path that does not exist","OPERATION_FROM_UNRESOLVABLE",t,e,n)}}function ue(e,t,n){try{if(!Array.isArray(e))throw new te("Patch sequence must be an array","SEQUENCE_NOT_AN_ARRAY");if(t)ce(Y(t),Y(e),n||!0);else{n=n||se;for(var r=0;r<e.length;r++)n(e[r],r,t,void 0)}}catch(e){if(e instanceof te)return e;throw e}}function le(e,t){if(e===t)return!0;if(e&&t&&"object"==typeof e&&"object"==typeof t){var n,r,o,i=Array.isArray(e),a=Array.isArray(t);if(i&&a){if((r=e.length)!=t.length)return!1;for(n=r;0!=n--;)if(!le(e[n],t[n]))return!1;return!0}if(i!=a)return!1;var c=Object.keys(e);if((r=c.length)!==Object.keys(t).length)return!1;for(n=r;0!=n--;)if(!t.hasOwnProperty(c[n]))return!1;for(n=r;0!=n--;)if(!le(e[o=c[n]],t[o]))return!1;return!0}return e!=e&&t!=t}var de=Object.freeze({__proto__:null,JsonPatchError:te,deepClone:ne,getValueByPointer:ie,applyOperation:ae,applyPatch:ce,applyReducer:function(e,t,n){var r=ae(e,t);if(!1===r.test)throw new te("Test operation failed","TEST_OPERATION_FAILED",n,t,e);return r.newDocument},validator:se,validate:ue,_areEquals:le}),fe=new WeakMap,ge=function(e){this.observers=new Map,this.obj=e},he=function(e,t){this.callback=e,this.observer=t};
/*!
 * https://github.com/Starcounter-Jack/JSON-Patch
 * (c) 2017-2021 Joachim Wester
 * MIT license
 */function pe(e,t){void 0===t&&(t=!1);var n=fe.get(e.object);me(n.value,e.object,e.patches,"",t),e.patches.length&&ce(n.value,e.patches);var r=e.patches;return r.length>0&&(e.patches=[],e.callback&&e.callback(r)),r}function me(e,t,n,r,o){if(t!==e){"function"==typeof t.toJSON&&(t=t.toJSON());for(var i=W(t),a=W(e),c=!1,s=a.length-1;s>=0;s--){var u=e[d=a[s]];if(!q(t,d)||void 0===t[d]&&void 0!==u&&!1===Array.isArray(t))Array.isArray(e)===Array.isArray(t)?(o&&n.push({op:"test",path:r+"/"+G(d),value:Y(u)}),n.push({op:"remove",path:r+"/"+G(d)}),c=!0):(o&&n.push({op:"test",path:r,value:e}),n.push({op:"replace",path:r,value:t}));else{var l=t[d];"object"==typeof u&&null!=u&&"object"==typeof l&&null!=l&&Array.isArray(u)===Array.isArray(l)?me(u,l,n,r+"/"+G(d),o):u!==l&&(o&&n.push({op:"test",path:r+"/"+G(d),value:Y(u)}),n.push({op:"replace",path:r+"/"+G(d),value:Y(l)}))}}if(c||i.length!=a.length)for(s=0;s<i.length;s++){var d;q(e,d=i[s])||void 0===t[d]||n.push({op:"add",path:r+"/"+G(d),value:Y(t[d])})}}}function ve(e,t,n){void 0===n&&(n=!1);var r=[];return me(e,t,r,"",n),r}var be=Object.freeze({__proto__:null,unobserve:function(e,t){t.unobserve()},observe:function(e,t){var n,r=function(e){return fe.get(e)}(e);if(r){var o=function(e,t){return e.observers.get(t)}(r,t);n=o&&o.observer}else r=new ge(e),fe.set(e,r);if(n)return n;if(n={},r.value=Y(e),t){n.callback=t,n.next=null;var i=function(){pe(n)},a=function(){clearTimeout(n.next),n.next=setTimeout(i)};"undefined"!=typeof window&&(window.addEventListener("mouseup",a),window.addEventListener("keyup",a),window.addEventListener("mousedown",a),window.addEventListener("keydown",a),window.addEventListener("change",a))}return n.patches=[],n.object=e,n.unobserve=function(){pe(n),clearTimeout(n.next),function(e,t){e.observers.delete(t.callback)}(r,n),"undefined"!=typeof window&&(window.removeEventListener("mouseup",a),window.removeEventListener("keyup",a),window.removeEventListener("mousedown",a),window.removeEventListener("keydown",a),window.removeEventListener("change",a))},r.observers.set(t,new he(t,n)),n},generate:pe,compare:ve});Object.assign({},de,be,{JsonPatchError:ee,deepClone:Y,escapePathComponent:G,unescapePathComponent:Q});var ye={b:"\b",f:"\f",n:"\n",r:"\r",t:"\t",'"':'"',"/":"/","\\":"\\"},we="a".charCodeAt(),Ae=function(e,t,n){var r={},o=0,i=0,a=0,c=n&&n.bigint&&"undefined"!=typeof BigInt;return{data:s("",!0),pointers:r};function s(t,n){var r;u(),m(t,"value");var o=f();switch(o){case"t":d("rue"),r=!0;break;case"f":d("alse"),r=!1;break;case"n":d("ull"),r=null;break;case'"':r=l();break;case"[":r=function(e){u();var t=[],n=0;if("]"==f())return t;g();for(;;){var r=e+"/"+n;t.push(s(r)),u();var o=f();if("]"==o)break;","!=o&&w(),u(),n++}return t}(t);break;case"{":r=function(e){u();var t={};if("}"==f())return t;g();for(;;){var n=b();'"'!=f()&&w();var r=l(),o=e+"/"+ke(r);v(o,"key",n),m(o,"keyEnd"),u(),":"!=f()&&w(),u(),t[r]=s(o),u();var i=f();if("}"==i)break;","!=i&&w(),u()}return t}(t);break;default:g(),"-0123456789".indexOf(o)>=0?r=function(){var t="",n=!0;"-"==e[a]&&(t+=f());t+="0"==e[a]?f():p(),"."==e[a]&&(t+=f()+p(),n=!1);"e"!=e[a]&&"E"!=e[a]||(t+=f(),"+"!=e[a]&&"-"!=e[a]||(t+=f()),t+=p(),n=!1);var r=+t;return c&&n&&(r>Number.MAX_SAFE_INTEGER||r<Number.MIN_SAFE_INTEGER)?BigInt(t):r}():y()}return m(t,"valueEnd"),u(),n&&a<e.length&&y(),r}function u(){e:for(;a<e.length;){switch(e[a]){case" ":i++;break;case"\t":i+=4;break;case"\r":i=0;break;case"\n":i=0,o++;break;default:break e}a++}}function l(){for(var e,t="";'"'!=(e=f());)"\\"==e?(e=f())in ye?t+=ye[e]:"u"==e?t+=h():w():t+=e;return t}function d(e){for(var t=0;t<e.length;t++)f()!==e[t]&&w()}function f(){A();var t=e[a];return a++,i++,t}function g(){a--,i--}function h(){for(var e=4,t=0;e--;){t<<=4;var n=f().toLowerCase();n>="a"&&n<="f"?t+=n.charCodeAt()-we+10:n>="0"&&n<="9"?t+=+n:w()}return String.fromCharCode(t)}function p(){for(var t="";e[a]>="0"&&e[a]<="9";)t+=f();if(t.length)return t;A(),y()}function m(e,t){v(e,t,b())}function v(e,t,n){r[e]=r[e]||{},r[e][t]=n}function b(){return{line:o,column:i,pos:a}}function y(){throw new SyntaxError("Unexpected token "+e[a]+" in JSON at position "+a)}function w(){g(),y()}function A(){if(a>=e.length)throw new SyntaxError("Unexpected end of JSON input")}},Oe=/~/g,_e=/\//g;function ke(e){return e.replace(Oe,"~0").replace(_e,"~1")}!function(e,t){ace.define("ace/mode/json_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"],(function(e,t,n){var r=e("../lib/oop"),o=e("./text_highlight_rules").TextHighlightRules,i=function(){this.$rules={start:[{token:"variable",regex:'["](?:(?:\\\\.)|(?:[^"\\\\]))*?["]\\s*(?=:)'},{token:"string",regex:'"',next:"string"},{token:"constant.numeric",regex:"0[xX][0-9a-fA-F]+\\b"},{token:"constant.numeric",regex:"[+-]?\\d+(?:(?:\\.\\d*)?(?:[eE][+-]?\\d+)?)?\\b"},{token:"constant.language.boolean",regex:"(?:true|false)\\b"},{token:"text",regex:"['](?:(?:\\\\.)|(?:[^'\\\\]))*?[']"},{token:"comment",regex:"\\/\\/.*$"},{token:"comment.start",regex:"\\/\\*",next:"comment"},{token:"paren.lparen",regex:"[[({]"},{token:"paren.rparen",regex:"[\\])}]"},{token:"punctuation.operator",regex:/[,]/},{token:"text",regex:"\\s+"}],string:[{token:"constant.language.escape",regex:/\\(?:x[0-9a-fA-F]{2}|u[0-9a-fA-F]{4}|["\\\/bfnrt])/},{token:"string",regex:'"|$',next:"start"},{defaultToken:"string"}],comment:[{token:"comment.end",regex:"\\*\\/",next:"start"},{defaultToken:"comment"}]}};r.inherits(i,o),t.JsonHighlightRules=i})),ace.define("ace/mode/matching_brace_outdent",["require","exports","module","ace/range"],(function(e,t,n){var r=e("../range").Range,o=function(){};(function(){this.checkOutdent=function(e,t){return!!/^\s+$/.test(e)&&/^\s*\}/.test(t)},this.autoOutdent=function(e,t){var n=e.getLine(t).match(/^(\s*\})/);if(!n)return 0;var o=n[1].length,i=e.findMatchingBracket({row:t,column:o});if(!i||i.row==t)return 0;var a=this.$getIndent(e.getLine(i.row));e.replace(new r(t,0,t,o-1),a)},this.$getIndent=function(e){return e.match(/^\s*/)[0]}}).call(o.prototype),t.MatchingBraceOutdent=o})),ace.define("ace/mode/folding/cstyle",["require","exports","module","ace/lib/oop","ace/range","ace/mode/folding/fold_mode"],(function(e,t,n){var r=e("../../lib/oop"),o=e("../../range").Range,i=e("./fold_mode").FoldMode,a=t.FoldMode=function(e){e&&(this.foldingStartMarker=new RegExp(this.foldingStartMarker.source.replace(/\|[^|]*?$/,"|"+e.start)),this.foldingStopMarker=new RegExp(this.foldingStopMarker.source.replace(/\|[^|]*?$/,"|"+e.end)))};r.inherits(a,i),function(){this.foldingStartMarker=/([\{\[\(])[^\}\]\)]*$|^\s*(\/\*)/,this.foldingStopMarker=/^[^\[\{\(]*([\}\]\)])|^[\s\*]*(\*\/)/,this.singleLineBlockCommentRe=/^\s*(\/\*).*\*\/\s*$/,this.tripleStarBlockCommentRe=/^\s*(\/\*\*\*).*\*\/\s*$/,this.startRegionRe=/^\s*(\/\*|\/\/)#?region\b/,this._getFoldWidgetBase=this.getFoldWidget,this.getFoldWidget=function(e,t,n){var r=e.getLine(n);if(this.singleLineBlockCommentRe.test(r)&&!this.startRegionRe.test(r)&&!this.tripleStarBlockCommentRe.test(r))return"";var o=this._getFoldWidgetBase(e,t,n);return!o&&this.startRegionRe.test(r)?"start":o},this.getFoldWidgetRange=function(e,t,n,r){var o,i=e.getLine(n);if(this.startRegionRe.test(i))return this.getCommentRegionBlock(e,i,n);if(o=i.match(this.foldingStartMarker)){var a=o.index;if(o[1])return this.openingBracketBlock(e,o[1],n,a);var c=e.getCommentFoldRange(n,a+o[0].length,1);return c&&!c.isMultiLine()&&(r?c=this.getSectionRange(e,n):"all"!=t&&(c=null)),c}if("markbegin"!==t&&(o=i.match(this.foldingStopMarker))){a=o.index+o[0].length;return o[1]?this.closingBracketBlock(e,o[1],n,a):e.getCommentFoldRange(n,a,-1)}},this.getSectionRange=function(e,t){for(var n=e.getLine(t),r=n.search(/\S/),i=t,a=n.length,c=t+=1,s=e.getLength();++t<s;){var u=(n=e.getLine(t)).search(/\S/);if(-1!==u){if(r>u)break;var l=this.getFoldWidgetRange(e,"all",t);if(l){if(l.start.row<=i)break;if(l.isMultiLine())t=l.end.row;else if(r==u)break}c=t}}return new o(i,a,c,e.getLine(c).length)},this.getCommentRegionBlock=function(e,t,n){for(var r=t.search(/\s*$/),i=e.getLength(),a=n,c=/^\s*(?:\/\*|\/\/|--)#?(end)?region\b/,s=1;++n<i;){t=e.getLine(n);var u=c.exec(t);if(u&&(u[1]?s--:s++,!s))break}if(n>a)return new o(a,r,n,t.length)}}.call(a.prototype)})),ace.define("ace/mode/json",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/json_highlight_rules","ace/mode/matching_brace_outdent","ace/mode/folding/cstyle","ace/worker/worker_client"],(function(e,t,n){var r=e("../lib/oop"),o=e("./text").Mode,i=e("./json_highlight_rules").JsonHighlightRules,a=e("./matching_brace_outdent").MatchingBraceOutdent,c=e("./folding/cstyle").FoldMode,s=e("../worker/worker_client").WorkerClient,u=function(){this.HighlightRules=i,this.$outdent=new a,this.$behaviour=this.$defaultBehaviour,this.foldingRules=new c};r.inherits(u,o),function(){this.lineCommentStart="//",this.blockComment={start:"/*",end:"*/"},this.getNextLineIndent=function(e,t,n){var r=this.$getIndent(t);"start"==e&&(t.match(/^.*[\{\(\[]\s*$/)&&(r+=n));return r},this.checkOutdent=function(e,t,n){return this.$outdent.checkOutdent(t,n)},this.autoOutdent=function(e,t,n){this.$outdent.autoOutdent(t,n)},this.createWorker=function(e){var t=new s(["ace"],"ace/mode/json_worker","JsonWorker");return t.attachToDocument(e.getDocument()),t.on("annotate",(function(t){e.setAnnotations(t.data)})),t.on("terminate",(function(){e.clearAnnotations()})),t},this.$id="ace/mode/json"}.call(u.prototype),t.Mode=u})),ace.require(["ace/mode/json"],(function(t){e&&(e.exports=t)}))}({exports:{}});!function(e,t){ace.define("ace/theme/github-css",["require","exports","module"],(function(e,t,n){n.exports='/* CSS style content from github\'s default pygments highlighter template.\n   Cursor and selection styles from textmate.css. */\n.ace-github .ace_gutter {\n  background: #e8e8e8;\n  color: #AAA;\n}\n\n.ace-github  {\n  background: #fff;\n  color: #000;\n}\n\n.ace-github .ace_keyword {\n  font-weight: bold;\n}\n\n.ace-github .ace_string {\n  color: #D14;\n}\n\n.ace-github .ace_variable.ace_class {\n  color: teal;\n}\n\n.ace-github .ace_constant.ace_numeric {\n  color: #099;\n}\n\n.ace-github .ace_constant.ace_buildin {\n  color: #0086B3;\n}\n\n.ace-github .ace_support.ace_function {\n  color: #0086B3;\n}\n\n.ace-github .ace_comment {\n  color: #998;\n  font-style: italic;\n}\n\n.ace-github .ace_variable.ace_language  {\n  color: #0086B3;\n}\n\n.ace-github .ace_paren {\n  font-weight: bold;\n}\n\n.ace-github .ace_boolean {\n  font-weight: bold;\n}\n\n.ace-github .ace_string.ace_regexp {\n  color: #009926;\n  font-weight: normal;\n}\n\n.ace-github .ace_variable.ace_instance {\n  color: teal;\n}\n\n.ace-github .ace_constant.ace_language {\n  font-weight: bold;\n}\n\n.ace-github .ace_cursor {\n  color: black;\n}\n\n.ace-github.ace_focus .ace_marker-layer .ace_active-line {\n  background: rgb(255, 255, 204);\n}\n.ace-github .ace_marker-layer .ace_active-line {\n  background: rgb(245, 245, 245);\n}\n\n.ace-github .ace_marker-layer .ace_selection {\n  background: rgb(181, 213, 255);\n}\n\n.ace-github.ace_multiselect .ace_selection.ace_start {\n  box-shadow: 0 0 3px 0px white;\n}\n/* bold keywords cause cursor issues for some fonts */\n/* this disables bold style for editor and keeps for static highlighter */\n.ace-github.ace_nobold .ace_line > span {\n    font-weight: normal !important;\n}\n\n.ace-github .ace_marker-layer .ace_step {\n  background: rgb(252, 255, 0);\n}\n\n.ace-github .ace_marker-layer .ace_stack {\n  background: rgb(164, 229, 101);\n}\n\n.ace-github .ace_marker-layer .ace_bracket {\n  margin: -1px 0 0 -1px;\n  border: 1px solid rgb(192, 192, 192);\n}\n\n.ace-github .ace_gutter-active-line {\n    background-color : rgba(0, 0, 0, 0.07);\n}\n\n.ace-github .ace_marker-layer .ace_selected-word {\n  background: rgb(250, 250, 255);\n  border: 1px solid rgb(200, 200, 250);\n}\n\n.ace-github .ace_invisible {\n  color: #BFBFBF\n}\n\n.ace-github .ace_print-margin {\n  width: 1px;\n  background: #e8e8e8;\n}\n\n.ace-github .ace_indent-guide {\n  background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAE0lEQVQImWP4////f4bLly//BwAmVgd1/w11/gAAAABJRU5ErkJggg==") right repeat-y;\n}\n\n.ace-github .ace_indent-guide-active {\n  background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAAZSURBVHjaYvj///9/hivKyv8BAAAA//8DACLqBhbvk+/eAAAAAElFTkSuQmCC") right repeat-y;\n}\n'})),ace.define("ace/theme/github",["require","exports","module","ace/theme/github-css","ace/lib/dom"],(function(e,t,n){t.isDark=!1,t.cssClass="ace-github",t.cssText=e("./github-css"),e("../lib/dom").importCssString(t.cssText,t.cssClass,!1)})),ace.require(["ace/theme/github"],(function(t){e&&(e.exports=t)}))}({exports:{}});const xe=e=>{let{readOnly:t,value:n,onChange:o,onValidate:a,overwriteValue:c}=e;const s=i((e=>{o&&o(function(e){const t=e.split("\n");""===t[t.length-1]&&t.pop();return t.join("\n")}(e))}),[o]);return r(l,{className:t?"ace-editor-read-only":void 0,editorProps:{$blockScrolling:1/0},mode:"json",markers:c?Ee(n,c):void 0,maxLines:1e3,onChange:o?s:void 0,onValidate:a,readOnly:t,setOptions:{showLineNumbers:!1,highlightActiveLine:!1,highlightGutterLine:!0},theme:"github",value:"".concat(n,"\n"),width:"100%"})};function Ee(e,t){const n=[];if(t){ve(JSON.parse(e),JSON.parse(t)).forEach((t=>{if("replace"===t.op){const r=function(e,t){const n=Ae(e).pointers[t.path];if(n&&n.key&&n.valueEnd)return{startRow:n.key.line,startCol:n.key.column,endRow:n.valueEnd.line,endCol:n.valueEnd.column,type:"text",className:"replaced-config"};return null}(e,t);r&&n.push(r)}}))}return n}const Ne={},Se=e=>{let{data:n,configOptions:c,layoutOptions:s,seriesOptions:l,customConfig:d,customLayout:f}=e;const g=a((()=>k(s,Ce(f))),[s,f]),h=a((()=>k(c,Ce(d))),[c,d]),p=a((()=>{return e=l,n.map((t=>{const n=Object.assign({},t),r=Ce(n.customSeriesOptions);return delete n.customSeriesOptions,delete n.dataSourceItems,k.all([e,n,r],{arrayMerge:(e,t)=>{const n=e.filter((e=>void 0!==e)),r=t.filter((e=>void 0!==e));return k(n,r)}})}));var e}),[n,l]),m=i((e=>{const[{curveNumber:t,pointIndex:r,pointIndices:o}]=e.points,{dataSourceItems:i,onClick:a}=n[t],c=function(e,t){const n=null!=e?e:null==t?void 0:t.at(-1);if("number"!=typeof n)throw new Error("Unable to get item index for given point.");return n}(r,o),s=i[c];null==a||a(s)}),[n]);return function(e){const n=o(!1);t((()=>{!n.current&&e.length>0&&(window.dispatchEvent(new Event("resize")),n.current=!0)}),[e])}(n),r(u,{className:"mx-react-plotly-chart",data:p,style:Ne,config:h,layout:g,onClick:m})};function Ce(e){return JSON.parse(D(e))}const Le=["x","y","z","customSeriesOptions"],je=e=>{let{data:t,layoutOptions:n,configOptions:o,seriesOptions:i,customLayout:s,customConfig:u}=e;const{activeEditableCode:l,activeView:d,changeActiveView:f,changeEditableCode:g,changeEditableCodeIsValid:h,editedConfig:p,editedData:m,editedLayout:v}=J({data:t,customConfig:u,customLayout:s}),b=a((()=>{if("layout"===d)return n;if("config"===d)return o;const e=parseInt(d,10);return Object.fromEntries(Object.entries(t[e]).filter((e=>{let[t]=e;return!Le.includes(t)})))}),[d,o,t,n]);return r(B,{renderPanels:r(c,null,r(M,{key:d,heading:"Custom settings"},r(xe,{readOnly:!1,value:l,onChange:g,onValidate:e=>h(!e.length)})),r(M,{key:"modeler",heading:"Settings from the Studio/Studio Pro",headingClassName:"read-only"},r(xe,{readOnly:!0,value:JSON.stringify(b,null,2),overwriteValue:l}))),renderSidebarHeaderTools:r(U,null,r(V,{onChange:f,options:[{name:"Layout",value:"layout",isDefaultSelected:!0},...t.map(((e,t)=>({name:e.name||"trace ".concat(t),value:t,isDefaultSelected:!1}))),{name:"Configuration",value:"config",isDefaultSelected:!1}]}))},r(Se,{data:m,layoutOptions:n,customLayout:v,configOptions:o,customConfig:p,seriesOptions:i}))},Re=e=>{let{className:t,data:n,widthUnit:o,width:i,heightUnit:c,height:s,showLegend:u,xAxisLabel:l,yAxisLabel:d,gridLinesMode:f,showSidebarEditor:g,customLayout:m,customConfig:v,layoutOptions:b,configOptions:y,seriesOptions:w,type:A,enableThemeConfig:O}=e;const _=C(A,O),x=a((()=>function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return k.all([N.layout,...t])}((e=>{let{showLegend:t,xAxisLabel:n,gridLinesMode:r,yAxisLabel:o}=e;return{showlegend:t,xaxis:{title:{text:n},showgrid:"both"===r||"vertical"===r},yaxis:{title:{text:o},showgrid:"both"===r||"horizontal"===r}}})({showLegend:u,xAxisLabel:l,gridLinesMode:f,yAxisLabel:d}),b,_.layout)),[u,l,f,d,b,_.layout]),E=a((()=>function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return k.all([N.configuration,...t])}(y,_.configuration)),[y,_.configuration]),S=a((()=>function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return k.all([N.series,...t])}(w,_.series)),[w,_.series]),L=g?je:Se;return r("div",{className:h("widget-chart",t),style:p({widthUnit:o,width:i,heightUnit:c,height:s})},r(L,{data:n,layoutOptions:x,customLayout:m,configOptions:E,customConfig:v,seriesOptions:S}))},Te=Object.is;function Ie(e){return"object"==typeof e&&null!==e}function De(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:Te;if(Ie(e)&&Ie(t)){const r=new Set(Object.keys(e).concat(Object.keys(t)));for(const o of r)if(!n(e[o],t[o],o))return!1;return!0}return Te(e,t)}function Pe(e,t){return De(e,t,((e,t,n)=>"staticOnClickAction"===n||"dynamicOnClickAction"===n||Te(e,t)))}function Be(e){if(null==e)throw new Error(arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Did not expect an argument to be undefined");return e}const Me=e=>{e&&e.canExecute&&!e.isExecuting&&e.execute()};function Ue(e){return t=>Me(e.get(t))}function Ve(e,t){const{staticName:n,dataSet:r,customSeriesOptions:o,staticOnClickAction:i}=e;if("static"!==r)throw Error("Expected series to be static");const a=Je(e,null==n?void 0:n.value);return a?Object.assign(Object.assign(Object.assign(Object.assign({},i?{onClick:Ue(i)}:void 0),t(e,a,He)),a),{customSeriesOptions:o}):null}function Fe(e,t){const{dataSet:n,customSeriesOptions:r,dynamicOnClickAction:o}=e;if("dynamic"!==n)throw Error("Expected series to be dynamic");const i=function(e){var t;const{dynamicDataSource:n,dynamicName:r,groupByAttribute:o,dataSet:i}=e;if("dynamic"!==i)throw Error("Expected series to be dynamic");const a=Be(n);if(!a.items)return null;const c=[];for(const e of a.items){const n=Be(o).get(e);if("loading"===n.status)return null;const i=null!==(t=n.value)&&void 0!==t?t:"";let a=c.find((e=>i instanceof Date&&e.groupByAttributeValue instanceof Date?e.groupByAttributeValue.getTime()===i.getTime():i instanceof d&&e.groupByAttributeValue instanceof d?e.groupByAttributeValue.eq(i):e.groupByAttributeValue===i));if(a||(a={groupByAttributeValue:i,items:[]},c.push(a)),a.items.push(e),r&&(!a.dynamicNameValue||"(empty)"===a.dynamicNameValue)){const{status:t,value:n}=r.get(e);if("loading"===t)return null;a.dynamicNameValue=null!=n?n:"(empty)"}}return c}(e);if(!i)return null;return i.map((n=>{const i=Je(e,n.dynamicNameValue,n.items);return i?Object.assign(Object.assign(Object.assign(Object.assign({},o?{onClick:Ue(o)}:void 0),t(e,i,He)),i),{customSeriesOptions:r}):null})).filter((e=>Boolean(e)))}function Je(e,t,n){const r="static"===e.dataSet?Be(e.staticXAttribute):Be(e.dynamicXAttribute),o="static"===e.dataSet?Be(e.staticYAttribute):Be(e.dynamicYAttribute);if(!n){const t=Be(e.staticDataSource);if(!t.items)return null;n=t.items}const i=[],a=[],c=[];for(const t of n){const n=r.get(t),s=o.get(t);n.value?i.push(n.value instanceof d?n.value.toNumber():n.value):i.push(null),s.value?a.push(s.value instanceof d?s.value.toNumber():s.value):a.push(null);const u="dynamic"===e.dataSet?e.dynamicTooltipHoverText:e.staticTooltipHoverText;c.push(null==u?void 0:u.get(t).value)}return Object.assign(Object.assign({},t?{name:t}:{}),{x:i,y:a,dataSourceItems:n,hovertext:c.some((e=>void 0!==e&&""!==e))?c:void 0,hoverinfo:c.some((e=>void 0!==e&&""!==e))?"text":"none"})}function $e(e,t){return"none"===e?[]:[{type:"aggregate",groups:t.x.map((e=>null==e?"":"string"==typeof e||"number"==typeof e?e.toLocaleString():e.toLocaleDateString())),aggregations:[{target:"y",func:e,enabled:!0}]}]}const He={getExpressionValue(e,t){for(const n of t){const t=e.get(n);return"available"!==t.status?void 0:t.value}}},ze={responsive:!0},qe={type:"scatter",hoverinfo:"none"},We=s((function(n){var o,c;const s=function(n,r){const[o,i]=e(null);return t((()=>{const e=n.map((e=>("static"===e.dataSet?Ve:Fe)(e,r))).filter((e=>Boolean(e))).flat();i(0===e.length?null:e)}),[n,r]),o}(n.lines,i(((e,t)=>{var n,r,o;return{mode:"line"===e.lineStyle?"lines":"lines+markers",fill:e.enableFillArea?"tonexty":"none",fillcolor:null===(n=e.fillColor)||void 0===n?void 0:n.value,line:{shape:e.interpolation,color:null===(r=e.lineColor)||void 0===r?void 0:r.value},marker:{color:null===(o=e.markerColor)||void 0===o?void 0:o.value},transforms:$e(e.aggregationType,t)}}),[])),u=a((()=>{return e=n.showRangeSlider,t=n.yAxisRangeMode,{font:{color:"#555",size:12},legend:{font:{family:"Open Sans",size:14,color:"#555"}},xaxis:{type:"date",autorange:!0,gridcolor:"#d7d7d7",zerolinecolor:"#d7d7d7",zeroline:!0,rangeslider:{visible:e,borderwidth:1,bordercolor:"#d7d7d7"}},yaxis:{fixedrange:!0,gridcolor:"#d7d7d7",zeroline:!0,zerolinecolor:"#d7d7d7",rangemode:t||"tozero"}};var e,t}),[n.showRangeSlider,n.yAxisRangeMode]);return r(Re,{type:"TimeSeries",className:h("widget-time-series-chart",n.class),data:null!=s?s:[],width:n.width,widthUnit:n.widthUnit,height:n.height,heightUnit:n.heightUnit,showLegend:n.showLegend,xAxisLabel:null===(o=n.xAxisLabel)||void 0===o?void 0:o.value,yAxisLabel:null===(c=n.yAxisLabel)||void 0===c?void 0:c.value,gridLinesMode:n.gridLines,showSidebarEditor:n.enableDeveloperMode,customLayout:n.customLayout,customConfig:n.customConfigurations,layoutOptions:u,configOptions:ze,seriesOptions:qe,enableThemeConfig:n.enableThemeConfig})}),((e,t)=>De(e,t,((e,t,n)=>"lines"===n?De(e,t,Pe):Te(e,t)))));export{We as TimeSeries};
