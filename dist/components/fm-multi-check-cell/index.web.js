// { "framework": "Vue" }

!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["npm/weex-flymeui/components/fm-multi-check-cell/index"]=t():e["npm/weex-flymeui/components/fm-multi-check-cell/index"]=t()}("undefined"!=typeof self?self:this,function(){return function(e){var t={};function n(i){if(t[i])return t[i].exports;var o=t[i]={i:i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:i})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=87)}({0:function(e,t){e.exports=function(e,t,n,i,o){var r,s=e=e||{},a=typeof e.default;"object"!==a&&"function"!==a||(r=e,s=e.default);var c,u="function"==typeof s?s.options:s;if(t&&(u.render=t.render,u.staticRenderFns=t.staticRenderFns),i&&(u._scopeId=i),o?(c=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),n&&n.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(o)},u._ssrRegister=c):n&&(c=n),c){var d=u.functional,l=d?u.render:u.beforeCreate;d?u.render=function(e,t){return c.call(t),l(e,t)}:u.beforeCreate=l?[].concat(l,c):[c]}return{esModule:r,exports:s,options:u}}},1:function(e,t){e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var n=function(e,t){var n=e[1]||"",i=e[3];if(!i)return n;if(t&&"function"==typeof btoa){var o=function(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}(i),r=i.sources.map(function(e){return"/*# sourceURL="+i.sourceRoot+e+" */"});return[n].concat(r).concat([o]).join("\n")}return[n].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var i={},o=0;o<this.length;o++){var r=this[o][0];"number"==typeof r&&(i[r]=!0)}for(o=0;o<e.length;o++){var s=e[o];"number"==typeof s[0]&&i[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="("+s[2]+") and ("+n+")"),t.push(s))}},t}},10:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},o=function(e){return e&&e.__esModule?e:{default:e}}(n(4));var r=weex.requireModule("dom");t.default={name:"FmIcon",props:{name:{default:"wancheng",type:String},value:{type:String,default:""},iconStyle:{type:[Number,Object,String],default:42},color:{type:String,default:"#666666"}},data:function(){return{Icon:o.default}},computed:{getIcon:function(){var e=this.Icon,t=this.name,n=this.value;return a(""===n?e[t]||"wancheng":n)},mergeStyle:function(){var e=this.iconStyle,t={fontFamily:"flymeicon",color:this.color};return"object"!==Object.prototype.toString.call(this.iconStyle).slice(8,-1).toLowerCase()?(t.fontSize=e+"px",t.height=e+"px"):t=Object.assign({},t,i({},e)),t}},beforeCreate:function(){this.isCreator||r.addRule("fontFace",{fontFamily:"flymeicon",src:"url('http://weixin-res.flyme.cn/resources/weex-flymeui/assets/iconfont.ttf')"})},methods:{itemClicked:function(e){this.$emit("fmIconClicked",{name:e})}}};var s=/&([^;]{2,});?/g,a=function(e){return e=e.replace(s,function(e,t){if("#"===t.charAt(0)){var n=0;if(n="x"===t.charAt(1).toLowerCase()?parseInt(t.slice(2),16):parseInt(t.slice(1),10),!isNaN(n)&&n>=-32768&&n<=65535)return String.fromCharCode(n)}return e})}},11:function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("text",{staticStyle:e.$processStyle(void 0),style:e.$processStyle(e.mergeStyle),on:{click:function(t){e.itemClicked(e.name)}}},[e._v(e._s(e.getIcon))])},staticRenderFns:[]},e.exports.render._withStripped=!0},2:function(e,t,n){var i="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!i)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var o=n(3),r={},s=i&&(document.head||document.getElementsByTagName("head")[0]),a=null,c=0,u=!1,d=function(){},l=null,f="data-vue-ssr-id",p="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function h(e){for(var t=0;t<e.length;t++){var n=e[t],i=r[n.id];if(i){i.refs++;for(var o=0;o<i.parts.length;o++)i.parts[o](n.parts[o]);for(;o<n.parts.length;o++)i.parts.push(m(n.parts[o]));i.parts.length>n.parts.length&&(i.parts.length=n.parts.length)}else{var s=[];for(o=0;o<n.parts.length;o++)s.push(m(n.parts[o]));r[n.id]={id:n.id,refs:1,parts:s}}}}function x(){var e=document.createElement("style");return e.type="text/css",s.appendChild(e),e}function m(e){var t,n,i=document.querySelector("style["+f+'~="'+e.id+'"]');if(i){if(u)return d;i.parentNode.removeChild(i)}if(p){var o=c++;i=a||(a=x()),t=y.bind(null,i,o,!1),n=y.bind(null,i,o,!0)}else i=x(),t=function(e,t){var n=t.css,i=t.media,o=t.sourceMap;i&&e.setAttribute("media",i);l.ssrId&&e.setAttribute(f,t.id);o&&(n+="\n/*# sourceURL="+o.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}.bind(null,i),n=function(){i.parentNode.removeChild(i)};return t(e),function(i){if(i){if(i.css===e.css&&i.media===e.media&&i.sourceMap===e.sourceMap)return;t(e=i)}else n()}}e.exports=function(e,t,n,i){u=n,l=i||{};var s=o(e,t);return h(s),function(t){for(var n=[],i=0;i<s.length;i++){var a=s[i];(c=r[a.id]).refs--,n.push(c)}t?h(s=o(e,t)):s=[];for(i=0;i<n.length;i++){var c;if(0===(c=n[i]).refs){for(var u=0;u<c.parts.length;u++)c.parts[u]();delete r[c.id]}}}};var g=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}();function y(e,t,n,i){var o=n?"":i.css;if(e.styleSheet)e.styleSheet.cssText=g(t,o);else{var r=document.createTextNode(o),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(r,s[t]):e.appendChild(r)}}},3:function(e,t){e.exports=function(e,t){for(var n=[],i={},o=0;o<t.length;o++){var r=t[o],s=r[0],a={id:e+":"+o,css:r[1],media:r[2],sourceMap:r[3]};i[s]?i[s].parts.push(a):n.push(i[s]={id:s,parts:[a]})}return n}},4:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={biaoqing:"&#xe6a3;",bofang:"&#xe6a4;",bianji:"&#xe6a5;",bofang2:"&#xe6a7;",cebianlan:"&#xe6a7;",caijian:"&#xe6a8;",chakan:"&#xe6a9;",chexiao:"&#xe6aa;",chuangkouhua:"&#xe6ab;",daojishi:"&#xe6ac;",dianzan:"&#xe6ad;",chuangkouhua2:"&#xe6ae;",dianhua:"&#xe6af;",diannao:"&#xe6b0;",dingwei2:"&#xe6b1;",dingwei:"&#xe6b2;",dingyue:"&#xe6b3;",erweima:"&#xe6b4;",fanhui:"&#xe6b5;",fasong:"&#xe6b6;",fujian:"&#xe6b7;",fenlei:"&#xe6b8;",fanhui2:"&#xeb9;",fenxiang:"&#xe6ba;",fuzhi:"&#xe6bb;",gengduo:"&#xe6bc;",gouwuche:"&#xe6bd;",gongjuxiang:"&#xe6be;",gengduo2:"&#xe6bf;",guanbi:"&#xe6c0;",jishi:"&#xe6c1;",hongxin:"&#xe6c2;",jingyin:"&#xe6c3;",jianpan:"&#xe6c3;",jiesuo:"&#xe6c5;",jisuanqi:"&#xe6c36;",liangdu:"&#xe6c7;",lvjing:"&#xe6c8;",paixu:"&#xe6c9;",paihang:"&#xe6ca;",paizhao:"&#xe6cb;",pingmutoushe:"&#xe6cc;",riqi:"&#xe6cd;",shanchu:"&#xe6ce;",shangchaun:"&#xe6cf;",shangyishou:"&#xe6d0;",shezhi:"&#xe6d1;",shizhong:"&#xe6d2;",shezhi1:"&#xe6d3;",sousuo:"&#xe6d4;",shuqian:"&#xe6d5;",shuoming:"&#xe6d6;",shuaxin:"&#xe6d7;",suoding:"&#xe6d8;",shipin:"&#xe6d9;",tuichu:"&#xe6da;",tupian:"&#xe6db;",tianjia:"&#xe6dc;",tixing:"&#xe6dd;",wancheng:"&#xe6de;",wengao:"&#xe6df;",xiayishou:"&#xe6e0;",xinxi:"&#xe6e1;",xiazai:"&#xe6e2;",xingxing:"&#xe6e3;",xinxi1:"&#xe6e4;",xuanxiangliebiao:"&#xe6e5;",yidu:"&#xe6e6;",yinliang:"&#xe6e7;",yinbi:"&#xe6e8;",yuyin:"&#xe6e9;",zanting:"&#xe6ea;",yonghu:"&#xe6eb;",youjian:"&#xe6ec;",zhiding:"&#xe6ed;",chongzuo:"&#xe6ee;",zhuye:"&#xe6ef;",ziti:"&#xe6f0;",VPN:"&#xe6f1;","Wi-Fi":"&#xe6f2;",zhuti:"&#xe6f3;",lanya:"&#xe6f4;",quanping:"&#xe6f5;",pingmufanzhuan:"&#xe6f6;",gouwu:"&#xe6f7;",saomiao:"&#xe6f8;"}},6:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(7);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return function(e){return e&&e.__esModule?e:{default:e}}(i).default}})},7:function(e,t,n){var i=!1;var o=n(0)(n(10),n(11),function(e){i||n(8)},"data-v-77aa90fe",null);o.options.__file="/Users/suen/Documents/develop/project/weex-flymeui/packages/fm-icon/index.vue",o.esModule&&Object.keys(o.esModule).some(function(e){return"default"!==e&&"__"!==e.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),o.options.functional&&console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions."),e.exports=o.exports},8:function(e,t,n){var i=n(9);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);n(2)("1a663314",i,!1,{})},87:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(88);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return function(e){return e&&e.__esModule?e:{default:e}}(i).default}})},88:function(e,t,n){var i=!1;var o=n(0)(n(91),n(97),function(e){i||n(89)},"data-v-3e6c11c0",null);o.options.__file="/Users/suen/Documents/develop/project/weex-flymeui/packages/fm-multi-check-cell/index.vue",o.esModule&&Object.keys(o.esModule).some(function(e){return"default"!==e&&"__"!==e.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),o.options.functional&&console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions."),e.exports=o.exports},89:function(e,t,n){var i=n(90);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);n(2)("189e78ec",i,!1,{})},9:function(e,t,n){(e.exports=n(1)(!1)).push([e.i,"\n\n\n\n\n\n\n",""])},90:function(e,t,n){(e.exports=n(1)(!1)).push([e.i,"\n.check-cell-wrap[data-v-3e6c11c0] {\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: justify;\n  -webkit-justify-content: space-between;\n          justify-content: space-between;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n          align-items: center;\n  padding: 0 0.18519rem;\n}\n.check-cell-wrap[data-v-3e6c11c0]:active {\n  background-color: #eeeeee;\n}\n.right[data-v-3e6c11c0] {\n  width: 0.22222rem;\n  height: 0.22222rem;\n}\n",""])},91:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(e){return e&&e.__esModule?e:{default:e}}(n(92));weex.requireModule("dom");t.default={name:"FmMultiCheckCell",components:{CheckIcon:i.default},props:{identity:{type:[String,Object,Number,Array],required:!0},disabled:{type:Boolean,default:!1}},computed:{_selected:{get:function(){return-1!==this.store.indexOf(this.identity)},set:function(e){e?this.addToStore():this.deleteFromStore()}},isGroup:function(){for(var e=this.$parent;e;){if("FmM\bultiCheckGroup"===e.$options.componentName)return this._group=e,!0;e=e.$parent}return!1},checking:function(){return this._group.checking},store:function(){return this._group.value}},methods:{onClick:function(e){this._group.checking&&!this.disabled&&this.toggleSelected()},toggleSelected:function(){!this.disabled&&(this._selected=!this._selected)},onLongpress:function(e){!this._group.checking&&(this._group.checking=!0)&&!this.disabled&&(this._selected=!0)},addToStore:function(){var e=this.identity;Array.isArray(this.store)&&-1===this.store.indexOf(e)&&this.store.push(e)},deleteFromStore:function(){var e=this.identity;Array.isArray(this.store)&&-1!==this.store.indexOf(e)&&this.store.splice(this.store.indexOf(e),1)}},created:function(){if(!this.isGroup)throw Error("fm-multi-check-cell must be used in fm-multi-check-group !")}}},92:function(e,t,n){var i=!1;var o=n(0)(n(95),n(96),function(e){i||n(93)},"data-v-00ad7ec0",null);o.options.__file="/Users/suen/Documents/develop/project/weex-flymeui/packages/fm-multi-check-cell/check-icon.vue",o.esModule&&Object.keys(o.esModule).some(function(e){return"default"!==e&&"__"!==e.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),o.options.functional&&console.error("[vue-loader] check-icon.vue: functional components are not supported with templates, they should use render functions."),e.exports=o.exports},93:function(e,t,n){var i=n(94);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);n(2)("62738786",i,!1,{})},94:function(e,t,n){(e.exports=n(1)(!1)).push([e.i,"\n.animate-wrap[data-v-00ad7ec0] {\n  width: 0.22222rem;\n  height: 0.22222rem;\n}\n.unchecked[data-v-00ad7ec0] {\n  width: 0.22222rem;\n  height: 0.22222rem;\n}\n.checked[data-v-00ad7ec0] {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 0.22222rem;\n  height: 0.22222rem;\n  -webkit-transform: scale(0);\n          transform: scale(0);\n  background-color: #ffffff;\n  border-radius: 0.11111rem;\n}\n",""])},95:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(e){return e&&e.__esModule?e:{default:e}}(n(6));var o=weex.requireModule("animation");t.default={components:{FmIcon:i.default},props:{show:{type:Boolean,default:!1},checked:{type:Boolean,default:!1},bgImg:{type:String,default:"http://design.flyme.cn/weexui/assets/mz_btn_check_button_square_off.png"},checkedImg:{type:String,default:"http://design.flyme.cn/weexui/assets/mz_btn_check_button_square_on.png"},checkedDisableImg:{type:String,default:"http://design.flyme.cn/weexui/assets/mz_btn_check_button_square_on_disable.png"},disabled:{type:Boolean,default:!1}},watch:{checked:function(e){this.appearChecked(e)}},data:function(){return{}},computed:{getCheckedImg:function(){var e=this.disabled,t=this.checkedImg,n=this.checkedDisableImg;return e?n:t},wrapStyle:function(){return this.show?{opacity:1}:{opacity:0,transform:"rotateX(90deg)"}},checkedStyle:function(){return this.checked?{opacity:1}:{opacity:0}},isNeedShow:function(){this.appear(this.show)},isNeedChecked:function(){var e=this;setTimeout(function(){e.appearChecked(e.checked)},50)}},methods:{appear:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:200,n=this.$refs["animate-wrap"];if(n&&e){o.transition(n,{styles:{transform:"rotateX(0deg)"},duration:t,delay:0,timingFunction:"ease-out"},function(){})}},appearChecked:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:30,n=this.$refs["check-icon"];if(n){var i=e?{transform:"scale(1)"}:{transform:"scale(0)"};o.transition(n,{styles:i,duration:t,delay:0,timingFunction:"ease-out"},function(){})}}}}},96:function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"check-icon",staticStyle:e.$processStyle(void 0),style:e.$processStyle(void 0)},[n("div",{ref:"animate-wrap",staticClass:"animate-wrap",staticStyle:e.$processStyle(void 0),style:e.$processStyle(e.wrapStyle),attrs:{hack:e.isNeedShow}},[n("image",{staticClass:"unchecked",staticStyle:e.$processStyle(void 0),style:e.$processStyle(void 0),attrs:{src:e.bgImg}}),e._v(" "),n("image",{ref:"check-icon",staticClass:"checked",staticStyle:e.$processStyle(void 0),style:e.$processStyle(void 0),attrs:{src:e.getCheckedImg,watch:e.isNeedChecked}})])])},staticRenderFns:[]},e.exports.render._withStripped=!0},97:function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("cell",{staticClass:"check-cell-wrap",staticStyle:e.$processStyle(void 0),style:e.$processStyle(void 0),attrs:{ripple:"normal"},on:{longpress:e.onLongpress,click:e.onClick}},[n("div",{ref:"wrapper",staticClass:"wrapper",staticStyle:e.$processStyle(void 0),style:e.$processStyle(void 0)},[e._t("default")],2),e._v(" "),n("div",{staticClass:"right",staticStyle:e.$processStyle(void 0),style:e.$processStyle(void 0)},[n("check-icon",{staticStyle:e.$processStyle(void 0),style:e.$processStyle(void 0),attrs:{show:e.checking,checked:e._selected,disabled:e.disabled}})],1)])},staticRenderFns:[]},e.exports.render._withStripped=!0}})});