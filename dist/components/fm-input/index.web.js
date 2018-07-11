// { "framework": "Vue" }

!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["npm/weex-flymeui/components/fm-input/index"]=t():e["npm/weex-flymeui/components/fm-input/index"]=t()}("undefined"!=typeof self?self:this,function(){return function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:o})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=81)}({0:function(e,t){e.exports=function(e,t,n,o,r){var i,a=e=e||{},s=typeof e.default;"object"!==s&&"function"!==s||(i=e,a=e.default);var u,l="function"==typeof a?a.options:a;if(t&&(l.render=t.render,l.staticRenderFns=t.staticRenderFns),o&&(l._scopeId=o),r?(u=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),n&&n.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(r)},l._ssrRegister=u):n&&(u=n),u){var d=l.functional,c=d?l.render:l.beforeCreate;d?l.render=function(e,t){return u.call(t),c(e,t)}:l.beforeCreate=c?[].concat(c,u):[u]}return{esModule:i,exports:a,options:l}}},1:function(e,t){e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var n=function(e,t){var n=e[1]||"",o=e[3];if(!o)return n;if(t&&"function"==typeof btoa){var r=function(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}(o),i=o.sources.map(function(e){return"/*# sourceURL="+o.sourceRoot+e+" */"});return[n].concat(i).concat([r]).join("\n")}return[n].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var o={},r=0;r<this.length;r++){var i=this[r][0];"number"==typeof i&&(o[i]=!0)}for(r=0;r<e.length;r++){var a=e[r];"number"==typeof a[0]&&o[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),t.push(a))}},t}},10:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r=function(e){return e&&e.__esModule?e:{default:e}}(n(4));var i=weex.requireModule("dom");t.default={name:"FmIcon",props:{name:{default:"wancheng",type:String},value:{type:String,default:""},iconStyle:{type:[Number,Object,String],default:42},color:{type:String,default:"#666666"}},data:function(){return{Icon:r.default}},computed:{getIcon:function(){var e=this.Icon,t=this.name,n=this.value;return s(""===n?e[t]||"wancheng":n)},mergeStyle:function(){var e=this.iconStyle,t={fontFamily:"flymeicon",color:this.color};return"object"!==Object.prototype.toString.call(this.iconStyle).slice(8,-1).toLowerCase()?(t.fontSize=e+"px",t.height=e+"px"):t=Object.assign({},t,o({},e)),t}},beforeCreate:function(){this.isCreator||i.addRule("fontFace",{fontFamily:"flymeicon",src:"url('http://weixin-res.flyme.cn/resources/weex-flymeui/assets/iconfont.ttf')"})},methods:{itemClicked:function(e){this.$emit("fmIconClicked",{name:e})}}};var a=/&([^;]{2,});?/g,s=function(e){return e=e.replace(a,function(e,t){if("#"===t.charAt(0)){var n=0;if(n="x"===t.charAt(1).toLowerCase()?parseInt(t.slice(2),16):parseInt(t.slice(1),10),!isNaN(n)&&n>=-32768&&n<=65535)return String.fromCharCode(n)}return e})}},11:function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("text",{staticStyle:e.$processStyle(void 0),style:e.$processStyle(e.mergeStyle),on:{click:function(t){e.itemClicked(e.name)}}},[e._v(e._s(e.getIcon))])},staticRenderFns:[]},e.exports.render._withStripped=!0},12:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(5);t.default={methods:{t:function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return o.t.apply(this,t)}}}},13:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={el:{common:{delete:"删除",cancel:"取消",confirm:"确认",close:"关闭",title:"标题",more:"更多"},titlebar:{title:"标题"},searchbar:{search:"搜索"},foldabletext:{more:"更多"},input:{placeholder:"请输入",inputError:"输入有误"},tag:{tagName:"标签"}}}},14:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={primaryColor:"#198DED",disabledColor:"#BDE2FB",highlightColor:"#156DC9",lightColor:"#42A2F1",weakColor:"#E6F8FF",grayColor:"#F2F3F4",fontColorLight:"#FFFFFF",fontColorDark:"#3D3D3D",fontColorGray:"#F2F3F4"}},2:function(e,t,n){var o="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!o)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var r=n(3),i={},a=o&&(document.head||document.getElementsByTagName("head")[0]),s=null,u=0,l=!1,d=function(){},c=null,f="data-vue-ssr-id",p="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function h(e){for(var t=0;t<e.length;t++){var n=e[t],o=i[n.id];if(o){o.refs++;for(var r=0;r<o.parts.length;r++)o.parts[r](n.parts[r]);for(;r<n.parts.length;r++)o.parts.push(x(n.parts[r]));o.parts.length>n.parts.length&&(o.parts.length=n.parts.length)}else{var a=[];for(r=0;r<n.parts.length;r++)a.push(x(n.parts[r]));i[n.id]={id:n.id,refs:1,parts:a}}}}function m(){var e=document.createElement("style");return e.type="text/css",a.appendChild(e),e}function x(e){var t,n,o=document.querySelector("style["+f+'~="'+e.id+'"]');if(o){if(l)return d;o.parentNode.removeChild(o)}if(p){var r=u++;o=s||(s=m()),t=v.bind(null,o,r,!1),n=v.bind(null,o,r,!0)}else o=m(),t=function(e,t){var n=t.css,o=t.media,r=t.sourceMap;o&&e.setAttribute("media",o);c.ssrId&&e.setAttribute(f,t.id);r&&(n+="\n/*# sourceURL="+r.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}.bind(null,o),n=function(){o.parentNode.removeChild(o)};return t(e),function(o){if(o){if(o.css===e.css&&o.media===e.media&&o.sourceMap===e.sourceMap)return;t(e=o)}else n()}}e.exports=function(e,t,n,o){l=n,c=o||{};var a=r(e,t);return h(a),function(t){for(var n=[],o=0;o<a.length;o++){var s=a[o];(u=i[s.id]).refs--,n.push(u)}t?h(a=r(e,t)):a=[];for(o=0;o<n.length;o++){var u;if(0===(u=n[o]).refs){for(var l=0;l<u.parts.length;l++)u.parts[l]();delete i[u.id]}}}};var g=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}();function v(e,t,n,o){var r=n?"":o.css;if(e.styleSheet)e.styleSheet.cssText=g(t,r);else{var i=document.createTextNode(r),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}},3:function(e,t){e.exports=function(e,t){for(var n=[],o={},r=0;r<t.length;r++){var i=t[r],a=i[0],s={id:e+":"+r,css:i[1],media:i[2],sourceMap:i[3]};o[a]?o[a].parts.push(s):n.push(o[a]={id:a,parts:[s]})}return n}},4:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={biaoqing:"&#xe6a3;",bofang:"&#xe6a4;",bianji:"&#xe6a5;",bofang2:"&#xe6a7;",cebianlan:"&#xe6a7;",caijian:"&#xe6a8;",chakan:"&#xe6a9;",chexiao:"&#xe6aa;",chuangkouhua:"&#xe6ab;",daojishi:"&#xe6ac;",dianzan:"&#xe6ad;",chuangkouhua2:"&#xe6ae;",dianhua:"&#xe6af;",diannao:"&#xe6b0;",dingwei2:"&#xe6b1;",dingwei:"&#xe6b2;",dingyue:"&#xe6b3;",erweima:"&#xe6b4;",fanhui:"&#xe6b5;",fasong:"&#xe6b6;",fujian:"&#xe6b7;",fenlei:"&#xe6b8;",fanhui2:"&#xeb9;",fenxiang:"&#xe6ba;",fuzhi:"&#xe6bb;",gengduo:"&#xe6bc;",gouwuche:"&#xe6bd;",gongjuxiang:"&#xe6be;",gengduo2:"&#xe6bf;",guanbi:"&#xe6c0;",jishi:"&#xe6c1;",hongxin:"&#xe6c2;",jingyin:"&#xe6c3;",jianpan:"&#xe6c3;",jiesuo:"&#xe6c5;",jisuanqi:"&#xe6c36;",liangdu:"&#xe6c7;",lvjing:"&#xe6c8;",paixu:"&#xe6c9;",paihang:"&#xe6ca;",paizhao:"&#xe6cb;",pingmutoushe:"&#xe6cc;",riqi:"&#xe6cd;",shanchu:"&#xe6ce;",shangchaun:"&#xe6cf;",shangyishou:"&#xe6d0;",shezhi:"&#xe6d1;",shizhong:"&#xe6d2;",shezhi1:"&#xe6d3;",sousuo:"&#xe6d4;",shuqian:"&#xe6d5;",shuoming:"&#xe6d6;",shuaxin:"&#xe6d7;",suoding:"&#xe6d8;",shipin:"&#xe6d9;",tuichu:"&#xe6da;",tupian:"&#xe6db;",tianjia:"&#xe6dc;",tixing:"&#xe6dd;",wancheng:"&#xe6de;",wengao:"&#xe6df;",xiayishou:"&#xe6e0;",xinxi:"&#xe6e1;",xiazai:"&#xe6e2;",xingxing:"&#xe6e3;",xinxi1:"&#xe6e4;",xuanxiangliebiao:"&#xe6e5;",yidu:"&#xe6e6;",yinliang:"&#xe6e7;",yinbi:"&#xe6e8;",yuyin:"&#xe6e9;",zanting:"&#xe6ea;",yonghu:"&#xe6eb;",youjian:"&#xe6ec;",zhiding:"&#xe6ed;",chongzuo:"&#xe6ee;",zhuye:"&#xe6ef;",ziti:"&#xe6f0;",VPN:"&#xe6f1;","Wi-Fi":"&#xe6f2;",zhuti:"&#xe6f3;",lanya:"&#xe6f4;",quanping:"&#xe6f5;",pingmufanzhuan:"&#xe6f6;",gouwu:"&#xe6f7;",saomiao:"&#xe6f8;"}},5:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.use=t.t=void 0;var o=function(e){return e&&e.__esModule?e:{default:e}}(n(13)).default,r=t.t=function(e,t){for(var n=void 0,r=e.split("."),i=o,a=0,s=r.length;a<s;a++){if(n=i[r[a]],a===s-1)return n;if(!n)return"";i=n}return""},i=t.use=function(e){o=e||o};t.default={t:r,use:i}},6:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(7);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return function(e){return e&&e.__esModule?e:{default:e}}(o).default}})},7:function(e,t,n){var o=!1;var r=n(0)(n(10),n(11),function(e){o||n(8)},"data-v-77aa90fe",null);r.options.__file="/Users/suen/Documents/develop/project/weex-flymeui/packages/fm-icon/index.vue",r.esModule&&Object.keys(r.esModule).some(function(e){return"default"!==e&&"__"!==e.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),r.options.functional&&console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions."),e.exports=r.exports},8:function(e,t,n){var o=n(9);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);n(2)("1a663314",o,!1,{})},81:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(82);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return function(e){return e&&e.__esModule?e:{default:e}}(o).default}})},82:function(e,t,n){var o=!1;var r=n(0)(n(85),n(86),function(e){o||n(83)},"data-v-10b8a20a",null);r.options.__file="/Users/suen/Documents/develop/project/weex-flymeui/packages/fm-input/index.vue",r.esModule&&Object.keys(r.esModule).some(function(e){return"default"!==e&&"__"!==e.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),r.options.functional&&console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions."),e.exports=r.exports},83:function(e,t,n){var o=n(84);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);n(2)("1f1daaf8",o,!1,{})},84:function(e,t,n){(e.exports=n(1)(!1)).push([e.i,"\n.fm-wrapper[data-v-10b8a20a] {\n  padding-top: 0.66667rem;\n  padding-right: 0.44444rem;\n  padding-left: 0.44444rem;\n}\n.fm-input[data-v-10b8a20a] {\n  padding-bottom: 0.15741rem;\n  border-bottom-style: solid;\n  border-bottom-width: 0.02778rem;\n  border-bottom-color: #e6e6e6;\n  font-size: 0.44444rem;\n  height: 0.78704rem;\n  color: #000000;\n  placeholder-color: #dddddd;\n}\n.fm-input[data-v-10b8a20a]::-webkit-input-placeholder {\n  color: #dddddd;\n}\n.fm-input[data-v-10b8a20a]:-moz-placeholder {\n  color: #dddddd;\n}\n.fm-input[data-v-10b8a20a]::-moz-placeholder {\n  color: #dddddd;\n}\n.fm-input[data-v-10b8a20a]:-ms-input-placeholder {\n  color: #dddddd;\n}\n.fm-input[data-v-10b8a20a]:placeholder-shown {\n  color: #dddddd;\n}\n.fm-input-wrap[data-v-10b8a20a] {\n  position: relative;\n}\n.delete[data-v-10b8a20a] {\n  position: absolute;\n  bottom: 0.27778rem;\n  right: 0.66667rem;\n  width: 0.46296rem;\n  height: 0.46296rem;\n  padding-top: 0.06481rem;\n  padding-left: 0.05556rem;\n  background-color:  rgba(77, 77, 77, 0.50);\n  border-radius: 0.27778rem;\n  font-weight: 700;\n}\n.visible[data-v-10b8a20a] {\n  position: absolute;\n  top: 0.58333rem;\n  right: 0.66667rem;\n  width: 0.66667rem;\n  height: 0.66667rem;\n}\n.error-msg[data-v-10b8a20a] {\n  font-size: 0.33333rem;\n  color: #df2b18;\n  margin-left: 0.22222rem;\n}\n",""])},85:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=s(n(14)),r=s(n(12)),i=n(5),a=s(n(6));function s(e){return e&&e.__esModule?e:{default:e}}t.default={name:"FmInput",mixins:[r.default],components:{FmIcon:a.default},mounted:function(){"password"===this.type&&(this.pwdModel=!0),this.value=this.defaultValue||""},data:function(){return{value:"",rows:1,isFocus:!1,pwdModel:!1,pwdVisible:!1}},watch:{defaultValue:function(e){this.value=e}},props:{defaultValue:{type:[String,Number],default:""},placeholder:{type:String,default:function(){return(0,i.t)("el.input.placeholder")}},autoError:{type:String,default:!0},maxlength:[String,Number],inputPattern:RegExp,inputErrorMessage:{type:String,default:"输入有误"},type:String,autofocus:{type:Boolean,default:!1},disabled:Boolean,returnKeyType:{type:String,default:"default"},nightMode:{type:Boolean,default:!1}},computed:{visibleValue:function(){return"password"===this.type?"chakan":"yinbi"},inputStyle:function(){var e={paddingRight:0};return e.borderBottomColor=this.hasError&&this.autoError?"#df2b18":this.isFocus?o.default.primaryColor:"#e6e6e6",e.caretColor=o.default.primaryColor,(this.delShow||this.visibleShow)&&(e.paddingRight="108px"),e},delShow:function(){return!this.pwdModel&&this.isFocus&&this.value},visibleShow:function(){return this.isFocus&&this.pwdModel},hasError:function(){var e=this.inputPattern,t=this.value;return!!e&&!t.match(e)}},methods:{delClick:function(e){this.value=""},toggleVisible:function(e){this.$refs.input.setType?(this.pwdVisible?this.$refs.input.setType("password"):this.$refs.input.setType("visible"),this.pwdVisible=!this.pwdVisible):"password"===this.type?this.type="text":this.type="password"},input:function(e){this.value=e.value,this.$emit("input",e)},change:function(e){this.$emit("change",e)},beFocus:function(e){this.isFocus=!0,this.$emit("focus",e)},beBlur:function(e){this.isFocus=!1,this.$emit("blur",e)},focus:function(){this.$refs.input.focus()},blur:function(){this.$refs.input.blur()},setSelectionRange:function(e,t){this.$refs.input.setSelectionRange(e,t)},getEditSelectionRange:function(e){this.$refs.input.getEditSelectionRange(e)},setValue:function(e){this.value=e}}}},86:function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"fm-wrapper",staticStyle:e.$processStyle(void 0),style:e.$processStyle(void 0)},[n("input",{ref:"input",staticClass:"fm-input",staticStyle:e.$processStyle(void 0),style:e.$processStyle(e.inputStyle),attrs:{type:e.type,maxlength:e.maxlength,placeholder:e.placeholder,autofocus:e.autofocus,disabled:e.disabled,"return-key-type":e.returnKeyType,nightMode:e.nightMode},domProps:{value:e.value},on:{input:e.input,change:e.change,focus:e.beFocus,blur:e.beBlur}}),e._v(" "),e.delShow?n("fm-icon",{staticClass:"delete",staticStyle:e.$processStyle(void 0),style:e.$processStyle(void 0),attrs:{name:"guanbi","icon-style":38,color:"#fff"},on:{fmIconClicked:e.delClick}}):e._e(),e._v(" "),e.visibleShow?n("fm-icon",{staticClass:"visible",staticStyle:e.$processStyle(void 0),style:e.$processStyle(void 0),attrs:{name:e.visibleValue,"icon-style":72,color:"#666"},on:{fmIconClicked:e.toggleVisible}}):e._e(),e._v(" "),e.hasError&&e.autoError?n("text",{staticClass:"error-msg",staticStyle:e.$processStyle(void 0),style:e.$processStyle(void 0)},[e._v(e._s(e.inputErrorMessage))]):e._e()],1)},staticRenderFns:[]},e.exports.render._withStripped=!0},9:function(e,t,n){(e.exports=n(1)(!1)).push([e.i,"\n\n\n\n\n\n\n",""])}})});