parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"Jugo":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.__wbindgen_closure_wrapper306=exports.__wbindgen_closure_wrapper540=exports.__wbindgen_throw=exports.__wbindgen_debug_string=exports.__wbindgen_string_get=exports.__wbg_set_afe54b1eeb1aa77c=exports.__wbg_global_62ea2619f58bf94d=exports.__wbg_globalThis_8ebfea75c2dd63ee=exports.__wbg_window_492cfe63a6e41dfa=exports.__wbg_self_179e8c2a5a4c73a3=exports.__wbg_new_8172f4fed77fdb7c=exports.__wbg_is_a2bc492e20d950cf=exports.__wbg_newnoargs_e2fdfe2af14a2323=exports.__wbg_call_e9f0ce4da840ab94=exports.__wbg_hash_118e5e08a994d5a7=exports.__wbg_search_9444c9b4f9d75474=exports.__wbg_pathname_e5d7dbebdeeddf83=exports.__wbg_removeChild_be8cb6ec13799e04=exports.__wbg_insertBefore_9eecc8d5bbe722b5=exports.__wbg_appendChild_8658f795c44d1316=exports.__wbg_setnodeValue_b246d98e9aea8713=exports.__wbg_lastChild_b7825410c31c6d62=exports.__wbg_replaceState_c1e57cfd0600163b=exports.__wbg_pushState_e37da71e3deb8da5=exports.__wbg_state_a6faa97d2b62299c=exports.__wbg_preventDefault_7670dc6ff59bc226=exports.__wbg_warn_f88df7e1e2a26187=exports.__wbg_log_7fc0936bf7223435=exports.__wbg_info_0c64856d96c69122=exports.__wbg_error_b47ee9a774776bfa=exports.__wbg_error_7dcc755846c00ef7=exports.__wbg_debug_cd8a0aad17c8c92f=exports.__wbg_setAttribute_156f15ecfed9f628=exports.__wbg_removeAttribute_3ae98ff009f689b3=exports.__wbg_namespaceURI_36cdaf4b00c65482=exports.__wbg_state_1eb59e81cf66c118=exports.__wbg_instanceof_PopStateEvent_5743cfa21cfcdf6c=exports.__wbg_removeEventListener_ccf115bbfa1fb019=exports.__wbg_addEventListener_27eb43df29303d67=exports.__wbg_setvalue_dc3cce23da13c2e9=exports.__wbg_value_6d2605b80cdcbc03=exports.__wbg_settype_d3d5022d7fd1ef0d=exports.__wbg_setchecked_4c76d21b2d916833=exports.__wbg_instanceof_HtmlInputElement_aae90057bd26cb78=exports.__wbg_settype_b026aad6dfe74b9d=exports.__wbg_instanceof_HtmlButtonElement_f5c73c981d727655=exports.__wbg_setvalue_fc815a91d9a4dec3=exports.__wbg_value_036b553531ffb781=exports.__wbg_instanceof_HtmlTextAreaElement_2be5c0dd95f91e2f=exports.__wbg_querySelector_e0528b8b8b25e9be=exports.__wbg_createTextNode_b7dc170e5271d075=exports.__wbg_createElementNS_8f6ff05d30034b4f=exports.__wbg_createElement_d00b8e24838e36e1=exports.__wbg_history_3de8d9a8b716d5e0=exports.__wbg_location_4c98b1eeb5ceccc0=exports.__wbg_document_d3b6d86af1c5d199=exports.__wbg_instanceof_Window_e8f84259147dce74=exports.__wbg_error_4bb6c2a97407129a=exports.__wbg_stack_558ba5917b466edd=exports.__wbg_new_59cb74e423758ede=exports.__wbindgen_is_undefined=exports.__wbindgen_object_clone_ref=exports.__wbindgen_cb_drop=exports.__wbindgen_string_new=exports.__wbindgen_object_drop_ref=exports.run=exports.default=void 0;var _=e(require("./pkg/yew_app_bg.wasm"));function e(_){return _&&_.__esModule?_:{default:_}}var t=_.default;exports.default=t;var a=_.default.run;exports.run=a;var b=_.default.__wbindgen_object_drop_ref;exports.__wbindgen_object_drop_ref=b;var d=_.default.__wbindgen_string_new;exports.__wbindgen_string_new=d;var r=_.default.__wbindgen_cb_drop;exports.__wbindgen_cb_drop=r;var f=_.default.__wbindgen_object_clone_ref;exports.__wbindgen_object_clone_ref=f;var c=_.default.__wbindgen_is_undefined;exports.__wbindgen_is_undefined=c;var o=_.default.__wbg_new_59cb74e423758ede;exports.__wbg_new_59cb74e423758ede=o;var s=_.default.__wbg_stack_558ba5917b466edd;exports.__wbg_stack_558ba5917b466edd=s;var w=_.default.__wbg_error_4bb6c2a97407129a;exports.__wbg_error_4bb6c2a97407129a=w;var g=_.default.__wbg_instanceof_Window_e8f84259147dce74;exports.__wbg_instanceof_Window_e8f84259147dce74=g;var n=_.default.__wbg_document_d3b6d86af1c5d199;exports.__wbg_document_d3b6d86af1c5d199=n;var p=_.default.__wbg_location_4c98b1eeb5ceccc0;exports.__wbg_location_4c98b1eeb5ceccc0=p;var l=_.default.__wbg_history_3de8d9a8b716d5e0;exports.__wbg_history_3de8d9a8b716d5e0=l;var x=_.default.__wbg_createElement_d00b8e24838e36e1;exports.__wbg_createElement_d00b8e24838e36e1=x;var u=_.default.__wbg_createElementNS_8f6ff05d30034b4f;exports.__wbg_createElementNS_8f6ff05d30034b4f=u;var i=_.default.__wbg_createTextNode_b7dc170e5271d075;exports.__wbg_createTextNode_b7dc170e5271d075=i;var v=_.default.__wbg_querySelector_e0528b8b8b25e9be;exports.__wbg_querySelector_e0528b8b8b25e9be=v;var m=_.default.__wbg_instanceof_HtmlTextAreaElement_2be5c0dd95f91e2f;exports.__wbg_instanceof_HtmlTextAreaElement_2be5c0dd95f91e2f=m;var h=_.default.__wbg_value_036b553531ffb781;exports.__wbg_value_036b553531ffb781=h;var E=_.default.__wbg_setvalue_fc815a91d9a4dec3;exports.__wbg_setvalue_fc815a91d9a4dec3=E;var S=_.default.__wbg_instanceof_HtmlButtonElement_f5c73c981d727655;exports.__wbg_instanceof_HtmlButtonElement_f5c73c981d727655=S;var y=_.default.__wbg_settype_b026aad6dfe74b9d;exports.__wbg_settype_b026aad6dfe74b9d=y;var A=_.default.__wbg_instanceof_HtmlInputElement_aae90057bd26cb78;exports.__wbg_instanceof_HtmlInputElement_aae90057bd26cb78=A;var C=_.default.__wbg_setchecked_4c76d21b2d916833;exports.__wbg_setchecked_4c76d21b2d916833=C;var H=_.default.__wbg_settype_d3d5022d7fd1ef0d;exports.__wbg_settype_d3d5022d7fd1ef0d=H;var T=_.default.__wbg_value_6d2605b80cdcbc03;exports.__wbg_value_6d2605b80cdcbc03=T;var j=_.default.__wbg_setvalue_dc3cce23da13c2e9;exports.__wbg_setvalue_dc3cce23da13c2e9=j;var k=_.default.__wbg_addEventListener_27eb43df29303d67;exports.__wbg_addEventListener_27eb43df29303d67=k;var B=_.default.__wbg_removeEventListener_ccf115bbfa1fb019;exports.__wbg_removeEventListener_ccf115bbfa1fb019=B;var I=_.default.__wbg_instanceof_PopStateEvent_5743cfa21cfcdf6c;exports.__wbg_instanceof_PopStateEvent_5743cfa21cfcdf6c=I;var L=_.default.__wbg_state_1eb59e81cf66c118;exports.__wbg_state_1eb59e81cf66c118=L;var N=_.default.__wbg_namespaceURI_36cdaf4b00c65482;exports.__wbg_namespaceURI_36cdaf4b00c65482=N;var q=_.default.__wbg_removeAttribute_3ae98ff009f689b3;exports.__wbg_removeAttribute_3ae98ff009f689b3=q;var P=_.default.__wbg_setAttribute_156f15ecfed9f628;exports.__wbg_setAttribute_156f15ecfed9f628=P;var D=_.default.__wbg_debug_cd8a0aad17c8c92f;exports.__wbg_debug_cd8a0aad17c8c92f=D;var R=_.default.__wbg_error_7dcc755846c00ef7;exports.__wbg_error_7dcc755846c00ef7=R;var U=_.default.__wbg_error_b47ee9a774776bfa;exports.__wbg_error_b47ee9a774776bfa=U;var V=_.default.__wbg_info_0c64856d96c69122;exports.__wbg_info_0c64856d96c69122=V;var W=_.default.__wbg_log_7fc0936bf7223435;exports.__wbg_log_7fc0936bf7223435=W;var M=_.default.__wbg_warn_f88df7e1e2a26187;exports.__wbg_warn_f88df7e1e2a26187=M;var O=_.default.__wbg_preventDefault_7670dc6ff59bc226;exports.__wbg_preventDefault_7670dc6ff59bc226=O;var z=_.default.__wbg_state_a6faa97d2b62299c;exports.__wbg_state_a6faa97d2b62299c=z;var F=_.default.__wbg_pushState_e37da71e3deb8da5;exports.__wbg_pushState_e37da71e3deb8da5=F;var G=_.default.__wbg_replaceState_c1e57cfd0600163b;exports.__wbg_replaceState_c1e57cfd0600163b=G;var J=_.default.__wbg_lastChild_b7825410c31c6d62;exports.__wbg_lastChild_b7825410c31c6d62=J;var K=_.default.__wbg_setnodeValue_b246d98e9aea8713;exports.__wbg_setnodeValue_b246d98e9aea8713=K;var Q=_.default.__wbg_appendChild_8658f795c44d1316;exports.__wbg_appendChild_8658f795c44d1316=Q;var X=_.default.__wbg_insertBefore_9eecc8d5bbe722b5;exports.__wbg_insertBefore_9eecc8d5bbe722b5=X;var Y=_.default.__wbg_removeChild_be8cb6ec13799e04;exports.__wbg_removeChild_be8cb6ec13799e04=Y;var Z=_.default.__wbg_pathname_e5d7dbebdeeddf83;exports.__wbg_pathname_e5d7dbebdeeddf83=Z;var $=_.default.__wbg_search_9444c9b4f9d75474;exports.__wbg_search_9444c9b4f9d75474=$;var __=_.default.__wbg_hash_118e5e08a994d5a7;exports.__wbg_hash_118e5e08a994d5a7=__;var e_=_.default.__wbg_call_e9f0ce4da840ab94;exports.__wbg_call_e9f0ce4da840ab94=e_;var t_=_.default.__wbg_newnoargs_e2fdfe2af14a2323;exports.__wbg_newnoargs_e2fdfe2af14a2323=t_;var a_=_.default.__wbg_is_a2bc492e20d950cf;exports.__wbg_is_a2bc492e20d950cf=a_;var b_=_.default.__wbg_new_8172f4fed77fdb7c;exports.__wbg_new_8172f4fed77fdb7c=b_;var d_=_.default.__wbg_self_179e8c2a5a4c73a3;exports.__wbg_self_179e8c2a5a4c73a3=d_;var r_=_.default.__wbg_window_492cfe63a6e41dfa;exports.__wbg_window_492cfe63a6e41dfa=r_;var f_=_.default.__wbg_globalThis_8ebfea75c2dd63ee;exports.__wbg_globalThis_8ebfea75c2dd63ee=f_;var c_=_.default.__wbg_global_62ea2619f58bf94d;exports.__wbg_global_62ea2619f58bf94d=c_;var o_=_.default.__wbg_set_afe54b1eeb1aa77c;exports.__wbg_set_afe54b1eeb1aa77c=o_;var s_=_.default.__wbindgen_string_get;exports.__wbindgen_string_get=s_;var w_=_.default.__wbindgen_debug_string;exports.__wbindgen_debug_string=w_;var g_=_.default.__wbindgen_throw;exports.__wbindgen_throw=g_;var n_=_.default.__wbindgen_closure_wrapper540;exports.__wbindgen_closure_wrapper540=n_;var p_=_.default.__wbindgen_closure_wrapper306;exports.__wbindgen_closure_wrapper306=p_;
},{"./pkg/yew_app_bg.wasm":"HmKK"}],"QCba":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("../Cargo.toml");e.run();
},{"../Cargo.toml":"Jugo"}],"FheM":[function(require,module,exports) {
var t=null;function e(){return t||(t=n()),t}function n(){try{throw new Error}catch(e){var t=(""+e.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);if(t)return r(t[0])}return"/"}function r(t){return(""+t).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}exports.getBundleURL=e,exports.getBaseURL=r;
},{}],"TUK3":[function(require,module,exports) {
var r=require("./bundle-url").getBundleURL;function e(r){Array.isArray(r)||(r=[r]);var e=r[r.length-1];try{return Promise.resolve(require(e))}catch(n){if("MODULE_NOT_FOUND"===n.code)return new s(function(n,i){t(r.slice(0,-1)).then(function(){return require(e)}).then(n,i)});throw n}}function t(r){return Promise.all(r.map(u))}var n={};function i(r,e){n[r]=e}module.exports=exports=e,exports.load=t,exports.register=i;var o={};function u(e){var t;if(Array.isArray(e)&&(t=e[1],e=e[0]),o[e])return o[e];var i=(e.substring(e.lastIndexOf(".")+1,e.length)||e).toLowerCase(),u=n[i];return u?o[e]=u(r()+e).then(function(r){return r&&module.bundle.register(t,r),r}).catch(function(r){throw delete o[e],r}):void 0}function s(r){this.executor=r,this.promise=null}s.prototype.then=function(r,e){return null===this.promise&&(this.promise=new Promise(this.executor)),this.promise.then(r,e)},s.prototype.catch=function(r){return null===this.promise&&(this.promise=new Promise(this.executor)),this.promise.catch(r)};
},{"./bundle-url":"FheM"}],"rDCW":[function(require,module,exports) {

},{}],"fISM":[function(require,module,exports) {
var global = arguments[3];
var __dirname = "/home/chrisp/lab/clpweb/node_modules/parcel-plugin-wasm.rs";
var e,n=arguments[3],t="/home/chrisp/lab/clpweb/node_modules/parcel-plugin-wasm.rs";const _={},r=new Array(32).fill(void 0);function c(e){return r[e]}r.push(void 0,null,!0,!1);let o=r.length;function i(e){e<36||(r[e]=o,o=e)}function u(e){const n=c(e);return i(e),n}const f="undefined"==typeof TextDecoder?(0,module.require)("util").TextDecoder:TextDecoder;let a=new f("utf-8",{ignoreBOM:!0,fatal:!0});a.decode();let b=null;function l(){return null!==b&&b.buffer===e.memory.buffer||(b=new Uint8Array(e.memory.buffer)),b}function d(e,n){return a.decode(l().subarray(e,e+n))}function s(e){o===r.length&&r.push(r.length+1);const n=o;return o=r[n],r[n]=e,n}let g=0;const w="undefined"==typeof TextEncoder?(0,module.require)("util").TextEncoder:TextEncoder;let m=new w("utf-8");const p="function"==typeof m.encodeInto?function(e,n){return m.encodeInto(e,n)}:function(e,n){const t=m.encode(e);return n.set(t),{read:e.length,written:t.length}};function h(e,n,t){if(void 0===t){const t=m.encode(e),_=n(t.length);return l().subarray(_,_+t.length).set(t),g=t.length,_}let _=e.length,r=n(_);const c=l();let o=0;for(;o<_;o++){const n=e.charCodeAt(o);if(n>127)break;c[r+o]=n}if(o!==_){0!==o&&(e=e.slice(o)),r=t(r,_,_=o+3*e.length);const n=l().subarray(r+o,r+_);o+=p(e,n).written}return g=o,r}function y(e){return null==e}let v=null;function E(){return null!==v&&v.buffer===e.memory.buffer||(v=new Int32Array(e.memory.buffer)),v}function A(e){const n=typeof e;if("number"==n||"boolean"==n||null==e)return`${e}`;if("string"==n)return`"${e}"`;if("symbol"==n){const n=e.description;return null==n?"Symbol":`Symbol(${n})`}if("function"==n){const n=e.name;return"string"==typeof n&&n.length>0?`Function(${n})`:"Function"}if(Array.isArray(e)){const n=e.length;let t="[";n>0&&(t+=A(e[0]));for(let _=1;_<n;_++)t+=", "+A(e[_]);return t+="]"}const t=/\[object ([^\]]+)\]/.exec(toString.call(e));let _;if(!(t.length>1))return toString.call(e);if("Object"==(_=t[1]))try{return"Object("+JSON.stringify(e)+")"}catch(r){return"Object"}return e instanceof Error?`${e.name}: ${e.message}\n${e.stack}`:_}function S(n,t,_,r){const c={a:n,b:t,cnt:1,dtor:_},o=(...n)=>{c.cnt++;const t=c.a;c.a=0;try{return r(t,c.b,...n)}finally{0==--c.cnt?e.__wbindgen_export_2.get(c.dtor)(t,c.b):c.a=t}};return o.original=c,o}let x=32;function T(e){if(1==x)throw new Error("out of js stack");return r[--x]=e,x}function j(n,t,_){try{e._dyn_core__ops__function__FnMut___A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h2a6ca983b8f6f762(n,t,T(_))}finally{r[x++]=void 0}}function O(n,t,_){try{e._dyn_core__ops__function__FnMut___A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__hb49748894b4b9e96(n,t,T(_))}finally{r[x++]=void 0}}function k(n){return function(){try{return n.apply(this,arguments)}catch(t){e.__wbindgen_exn_store(s(t))}}}function C(n){const t=fetch(n);let r;return(r="function"==typeof WebAssembly.instantiateStreaming?WebAssembly.instantiateStreaming(t,{"./yew_app_bg.js":_}):t.then(e=>e.arrayBuffer()).then(e=>WebAssembly.instantiate(e,{"./yew_app_bg.js":_}))).then(({instance:n})=>{e=C.wasm=n.exports,_.wasm=e})}function W(n){const r=require("fs");return new Promise(function(e,_){r.readFile(t+n,function(n,t){n?_(n):e(t.buffer)})}).then(e=>WebAssembly.instantiate(e,{"./yew_app_bg":_})).then(({instance:n})=>{e=C.wasm=n.exports,_.wasm=e})}_.run=function(){e.run()},_.__wbindgen_object_drop_ref=function(e){u(e)},_.__wbindgen_string_new=function(e,n){return s(d(e,n))},_.__wbindgen_cb_drop=function(e){const n=u(e).original;if(1==n.cnt--)return n.a=0,!0;return!1},_.__wbindgen_object_clone_ref=function(e){return s(c(e))},_.__wbindgen_is_undefined=function(e){return void 0===c(e)},_.__wbg_new_59cb74e423758ede=function(){return s(new Error)},_.__wbg_stack_558ba5917b466edd=function(n,t){var _=h(c(t).stack,e.__wbindgen_malloc,e.__wbindgen_realloc),r=g;E()[n/4+1]=r,E()[n/4+0]=_},_.__wbg_error_4bb6c2a97407129a=function(n,t){try{console.error(d(n,t))}finally{e.__wbindgen_free(n,t)}},_.__wbg_instanceof_Window_e8f84259147dce74=function(e){return c(e)instanceof Window},_.__wbg_document_d3b6d86af1c5d199=function(e){var n=c(e).document;return y(n)?0:s(n)},_.__wbg_location_4c98b1eeb5ceccc0=function(e){return s(c(e).location)},_.__wbg_history_3de8d9a8b716d5e0=k(function(e){return s(c(e).history)}),_.__wbg_createElement_d00b8e24838e36e1=k(function(e,n,t){return s(c(e).createElement(d(n,t)))}),_.__wbg_createElementNS_8f6ff05d30034b4f=k(function(e,n,t,_,r){return s(c(e).createElementNS(0===n?void 0:d(n,t),d(_,r)))}),_.__wbg_createTextNode_b7dc170e5271d075=function(e,n,t){return s(c(e).createTextNode(d(n,t)))},_.__wbg_querySelector_e0528b8b8b25e9be=k(function(e,n,t){var _=c(e).querySelector(d(n,t));return y(_)?0:s(_)}),_.__wbg_instanceof_HtmlTextAreaElement_2be5c0dd95f91e2f=function(e){return c(e)instanceof HTMLTextAreaElement},_.__wbg_value_036b553531ffb781=function(n,t){var _=h(c(t).value,e.__wbindgen_malloc,e.__wbindgen_realloc),r=g;E()[n/4+1]=r,E()[n/4+0]=_},_.__wbg_setvalue_fc815a91d9a4dec3=function(e,n,t){c(e).value=d(n,t)},_.__wbg_instanceof_HtmlButtonElement_f5c73c981d727655=function(e){return c(e)instanceof HTMLButtonElement},_.__wbg_settype_b026aad6dfe74b9d=function(e,n,t){c(e).type=d(n,t)},_.__wbg_instanceof_HtmlInputElement_aae90057bd26cb78=function(e){return c(e)instanceof HTMLInputElement},_.__wbg_setchecked_4c76d21b2d916833=function(e,n){c(e).checked=0!==n},_.__wbg_settype_d3d5022d7fd1ef0d=function(e,n,t){c(e).type=d(n,t)},_.__wbg_value_6d2605b80cdcbc03=function(n,t){var _=h(c(t).value,e.__wbindgen_malloc,e.__wbindgen_realloc),r=g;E()[n/4+1]=r,E()[n/4+0]=_},_.__wbg_setvalue_dc3cce23da13c2e9=function(e,n,t){c(e).value=d(n,t)},_.__wbg_addEventListener_27eb43df29303d67=k(function(e,n,t,_,r){c(e).addEventListener(d(n,t),c(_),c(r))}),_.__wbg_removeEventListener_ccf115bbfa1fb019=k(function(e,n,t,_,r){c(e).removeEventListener(d(n,t),c(_),0!==r)}),_.__wbg_instanceof_PopStateEvent_5743cfa21cfcdf6c=function(e){return c(e)instanceof PopStateEvent},_.__wbg_state_1eb59e81cf66c118=function(e){return s(c(e).state)},_.__wbg_namespaceURI_36cdaf4b00c65482=function(n,t){var _=c(t).namespaceURI,r=y(_)?0:h(_,e.__wbindgen_malloc,e.__wbindgen_realloc),o=g;E()[n/4+1]=o,E()[n/4+0]=r},_.__wbg_removeAttribute_3ae98ff009f689b3=k(function(e,n,t){c(e).removeAttribute(d(n,t))}),_.__wbg_setAttribute_156f15ecfed9f628=k(function(e,n,t,_,r){c(e).setAttribute(d(n,t),d(_,r))}),_.__wbg_debug_cd8a0aad17c8c92f=function(e,n,t,_){console.debug(c(e),c(n),c(t),c(_))},_.__wbg_error_7dcc755846c00ef7=function(e){console.error(c(e))},_.__wbg_error_b47ee9a774776bfa=function(e,n,t,_){console.error(c(e),c(n),c(t),c(_))},_.__wbg_info_0c64856d96c69122=function(e,n,t,_){console.info(c(e),c(n),c(t),c(_))},_.__wbg_log_7fc0936bf7223435=function(e,n,t,_){console.log(c(e),c(n),c(t),c(_))},_.__wbg_warn_f88df7e1e2a26187=function(e,n,t,_){console.warn(c(e),c(n),c(t),c(_))},_.__wbg_preventDefault_7670dc6ff59bc226=function(e){c(e).preventDefault()},_.__wbg_state_a6faa97d2b62299c=k(function(e){return s(c(e).state)}),_.__wbg_pushState_e37da71e3deb8da5=k(function(e,n,t,_,r,o){c(e).pushState(c(n),d(t,_),0===r?void 0:d(r,o))}),_.__wbg_replaceState_c1e57cfd0600163b=k(function(e,n,t,_,r,o){c(e).replaceState(c(n),d(t,_),0===r?void 0:d(r,o))}),_.__wbg_lastChild_b7825410c31c6d62=function(e){var n=c(e).lastChild;return y(n)?0:s(n)},_.__wbg_setnodeValue_b246d98e9aea8713=function(e,n,t){c(e).nodeValue=0===n?void 0:d(n,t)},_.__wbg_appendChild_8658f795c44d1316=k(function(e,n){return s(c(e).appendChild(c(n)))}),_.__wbg_insertBefore_9eecc8d5bbe722b5=k(function(e,n,t){return s(c(e).insertBefore(c(n),c(t)))}),_.__wbg_removeChild_be8cb6ec13799e04=k(function(e,n){return s(c(e).removeChild(c(n)))}),_.__wbg_pathname_e5d7dbebdeeddf83=k(function(n,t){var _=h(c(t).pathname,e.__wbindgen_malloc,e.__wbindgen_realloc),r=g;E()[n/4+1]=r,E()[n/4+0]=_}),_.__wbg_search_9444c9b4f9d75474=k(function(n,t){var _=h(c(t).search,e.__wbindgen_malloc,e.__wbindgen_realloc),r=g;E()[n/4+1]=r,E()[n/4+0]=_}),_.__wbg_hash_118e5e08a994d5a7=k(function(n,t){var _=h(c(t).hash,e.__wbindgen_malloc,e.__wbindgen_realloc),r=g;E()[n/4+1]=r,E()[n/4+0]=_}),_.__wbg_call_e9f0ce4da840ab94=k(function(e,n){return s(c(e).call(c(n)))}),_.__wbg_newnoargs_e2fdfe2af14a2323=function(e,n){return s(new Function(d(e,n)))},_.__wbg_is_a2bc492e20d950cf=function(e,n){return Object.is(c(e),c(n))},_.__wbg_new_8172f4fed77fdb7c=function(){return s(new Object)},_.__wbg_self_179e8c2a5a4c73a3=k(function(){return s(self.self)}),_.__wbg_window_492cfe63a6e41dfa=k(function(){return s(window.window)}),_.__wbg_globalThis_8ebfea75c2dd63ee=k(function(){return s(globalThis.globalThis)}),_.__wbg_global_62ea2619f58bf94d=k(function(){return s(n.global)}),_.__wbg_set_afe54b1eeb1aa77c=k(function(e,n,t){return Reflect.set(c(e),c(n),c(t))}),_.__wbindgen_string_get=function(n,t){const _=c(t);var r="string"==typeof _?_:void 0,o=y(r)?0:h(r,e.__wbindgen_malloc,e.__wbindgen_realloc),i=g;E()[n/4+1]=i,E()[n/4+0]=o},_.__wbindgen_debug_string=function(n,t){var _=h(A(c(t)),e.__wbindgen_malloc,e.__wbindgen_realloc),r=g;E()[n/4+1]=r,E()[n/4+0]=_},_.__wbindgen_throw=function(e,n){throw new Error(d(e,n))},_.__wbindgen_closure_wrapper540=function(e,n,t){return s(S(e,n,219,O))},_.__wbindgen_closure_wrapper306=function(e,n,t){return s(S(e,n,135,j))};const I=Object.assign(C,_);module.exports=function(e){return I(e).then(()=>_)};
},{"fs":"rDCW"}],0:[function(require,module,exports) {
var b=require("TUK3");b.register("wasm",require("fISM"));b.load([["yew_app_bg.6344e4fa.wasm","HmKK"]]).then(function(){require("QCba");});
},{}]},{},[0], null)
//# sourceMappingURL=static.088fedbc.js.map