// { "framework": "Vue" }

!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["npm/weex-flymeui/components/fm-rich-text/index"]=t():e["npm/weex-flymeui/components/fm-rich-text/index"]=t()}("undefined"!=typeof self?self:this,function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=173)}({0:function(e,t){e.exports=function(e,t,n,r,o){var i,a=e=e||{},s=typeof e.default;"object"!==s&&"function"!==s||(i=e,a=e.default);var u,l="function"==typeof a?a.options:a;if(t&&(l.render=t.render,l.staticRenderFns=t.staticRenderFns),r&&(l._scopeId=r),o?(u=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),n&&n.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(o)},l._ssrRegister=u):n&&(u=n),u){var c=l.functional,f=c?l.render:l.beforeCreate;c?l.render=function(e,t){return u.call(t),f(e,t)}:l.beforeCreate=f?[].concat(f,u):[u]}return{esModule:i,exports:a,options:l}}},1:function(e,t){e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var o=function(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}(r),i=r.sources.map(function(e){return"/*# sourceURL="+r.sourceRoot+e+" */"});return[n].concat(i).concat([o]).join("\n")}return[n].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<e.length;o++){var a=e[o];"number"==typeof a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),t.push(a))}},t}},10:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=function(e){return e&&e.__esModule?e:{default:e}}(n(4));var i=weex.requireModule("dom");t.default={name:"FmIcon",props:{name:{default:"wancheng",type:String},value:{type:String,default:""},iconStyle:{type:[Number,Object,String],default:42},color:{type:String,default:"#666666"}},data:function(){return{Icon:o.default}},computed:{getIcon:function(){var e=this.Icon,t=this.name,n=this.value;return s(""===n?e[t]||"wancheng":n)},mergeStyle:function(){var e=this.iconStyle,t={fontFamily:"flymeicon",color:this.color};return"object"!==Object.prototype.toString.call(this.iconStyle).slice(8,-1).toLowerCase()?(t.fontSize=e+"px",t.height=e+"px"):t=Object.assign({},t,r({},e)),t}},beforeCreate:function(){this.isCreator||i.addRule("fontFace",{fontFamily:"flymeicon",src:"url('http://weixin-res.flyme.cn/resources/weex-flymeui/assets/iconfont.ttf')"})},methods:{itemClicked:function(e){this.$emit("fmIconClicked",{name:e})}}};var a=/&([^;]{2,});?/g,s=function(e){return e=e.replace(a,function(e,t){if("#"===t.charAt(0)){var n=0;if(n="x"===t.charAt(1).toLowerCase()?parseInt(t.slice(2),16):parseInt(t.slice(1),10),!isNaN(n)&&n>=-32768&&n<=65535)return String.fromCharCode(n)}return e})}},11:function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("text",{staticStyle:e.$processStyle(void 0),style:e.$processStyle(e.mergeStyle),on:{click:function(t){e.itemClicked(e.name)}}},[e._v(e._s(e.getIcon))])},staticRenderFns:[]},e.exports.render._withStripped=!0},12:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(5);t.default={methods:{t:function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return r.t.apply(this,t)}}}},13:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={el:{common:{delete:"删除",cancel:"取消",confirm:"确认",close:"关闭",title:"标题",more:"更多"},titlebar:{title:"标题"},searchbar:{search:"搜索"},foldabletext:{more:"更多"},input:{placeholder:"请输入",inputError:"输入有误"},tag:{tagName:"标签"}}}},173:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(174);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return function(e){return e&&e.__esModule?e:{default:e}}(r).default}})},174:function(e,t,n){var r=!1;var o=n(0)(n(177),n(181),function(e){r||n(175)},"data-v-a8d59aa2",null);o.options.__file="/Users/suen/Documents/develop/project/weex-flymeui/packages/fm-rich-text/index.vue",o.esModule&&Object.keys(o.esModule).some(function(e){return"default"!==e&&"__"!==e.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),o.options.functional&&console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions."),e.exports=o.exports},175:function(e,t,n){var r=n(176);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(2)("480fdde4",r,!1,{})},176:function(e,t,n){(e.exports=n(1)(!1)).push([e.i,"\n.fm-rich-text[data-v-a8d59aa2] {\n  -webkit-box-pack: start;\n  -webkit-justify-content: flex-start;\n          justify-content: flex-start;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n          align-items: center;\n  -webkit-flex-wrap: wrap;\n          flex-wrap: wrap;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: row;\n          flex-direction: row;\n  -webkit-flex-shrink: 1;\n          flex-shrink: 1;\n}\n.default-text[data-v-a8d59aa2] {\n  color: #A5A5A5;\n  font-size: 0.33333rem;\n  line-height: 0.44444rem;\n}\n",""])},177:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=u(n(98)),o=u(n(27)),i=u(n(6)),a=u(n(59)),s=u(n(178));function u(e){return e&&e.__esModule?e:{default:e}}t.default={name:"FmRichText",components:{FmText:o.default,FmIcon:i.default,FmTag:a.default,FmRichTextLink:s.default},props:{configList:{type:[Array,String],default:function(){return[]}},hasTextMargin:{type:Boolean,default:!0}},data:function(){return{}},computed:{isNotEmptyArray:function(){return r.default.isNonEmptyArray(this.configList)},isString:function(){return r.default.isString(this.configList)}},methods:{linkBeClick:function(e){this.$emit("linkBeClick",e)}}}},178:function(e,t,n){var r=n(0)(n(179),n(180),null,null,null);r.options.__file="/Users/suen/Documents/develop/project/weex-flymeui/packages/fm-rich-text/fm-rich-text-link.vue",r.esModule&&Object.keys(r.esModule).some(function(e){return"default"!==e&&"__"!==e.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),r.options.functional&&console.error("[vue-loader] fm-rich-text-link.vue: functional components are not supported with templates, they should use render functions."),e.exports=r.exports},179:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(e){return e&&e.__esModule?e:{default:e}}(n(27));t.default={components:{FmText:r.default},props:{linkValue:{type:[String,Number],default:""},hasTextMargin:{type:Boolean,default:!0},linkHref:{type:String,default:""},linkStyle:{type:Object,default:function(){return{}}}},methods:{onLinkClick:function(e){this.$emit("fmRichTextLinkClick",{event:e,href:this.linkHref})}}}},180:function(e,t,n){e.exports={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticStyle:this.$processStyle(void 0),style:this.$processStyle(void 0),on:{click:this.onLinkClick}},[t("fm-text",{staticStyle:this.$processStyle(void 0),style:this.$processStyle(void 0),attrs:{value:this.linkValue,"has-text-margin":this.hasTextMargin}})],1)},staticRenderFns:[]},e.exports.render._withStripped=!0},181:function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e.isNotEmptyArray?n("div",{staticClass:"fm-rich-text",staticStyle:e.$processStyle(void 0),style:e.$processStyle(void 0)},e._l(e.configList,function(t,r){return n("div",{key:r,staticStyle:e.$processStyle(void 0),style:e.$processStyle(void 0)},["text"==t.type&&t.text?n("fm-text",{staticStyle:e.$processStyle(void 0),style:e.$processStyle(void 0),attrs:{value:t.text,"has-text-margin":e.hasTextMargin}}):e._e(),e._v(" "),"link"==t.type&&t.href&&t.text?n("fm-rich-text-link",{staticStyle:e.$processStyle(void 0),style:e.$processStyle(void 0),attrs:{"link-value":t.text,"link-style":t.style,"link-href":t.href,"has-text-margin":e.hasTextMargin},on:{fmRichTextLinkClick:e.linkBeClick}}):e._e(),e._v(" "),"icon"==t.type?n("fm-icon",{staticStyle:e.$processStyle(void 0),style:e.$processStyle(void 0),attrs:{color:t.color,name:t.value,iconStyle:t.style}}):e._e(),e._v(" "),"tag"==t.type?n("fm-tag",{staticStyle:e.$processStyle(void 0),style:e.$processStyle(void 0),attrs:{type:t.tagType,size:t.size,value:t.value,color:t.color,fontColor:t.fontColor}}):e._e()],1)})):e._e(),e._v(" "),e.isString?n("fm-text",{staticStyle:e.$processStyle(void 0),style:e.$processStyle(void 0),attrs:{value:e.configList}}):e._e()],1)},staticRenderFns:[]},e.exports.render._withStripped=!0},2:function(e,t,n){var r="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!r)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var o=n(3),i={},a=r&&(document.head||document.getElementsByTagName("head")[0]),s=null,u=0,l=!1,c=function(){},f=null,d="data-vue-ssr-id",p="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function h(e){for(var t=0;t<e.length;t++){var n=e[t],r=i[n.id];if(r){r.refs++;for(var o=0;o<r.parts.length;o++)r.parts[o](n.parts[o]);for(;o<n.parts.length;o++)r.parts.push(m(n.parts[o]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{var a=[];for(o=0;o<n.parts.length;o++)a.push(m(n.parts[o]));i[n.id]={id:n.id,refs:1,parts:a}}}}function x(){var e=document.createElement("style");return e.type="text/css",a.appendChild(e),e}function m(e){var t,n,r=document.querySelector("style["+d+'~="'+e.id+'"]');if(r){if(l)return c;r.parentNode.removeChild(r)}if(p){var o=u++;r=s||(s=x()),t=v.bind(null,r,o,!1),n=v.bind(null,r,o,!0)}else r=x(),t=function(e,t){var n=t.css,r=t.media,o=t.sourceMap;r&&e.setAttribute("media",r);f.ssrId&&e.setAttribute(d,t.id);o&&(n+="\n/*# sourceURL="+o.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}.bind(null,r),n=function(){r.parentNode.removeChild(r)};return t(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap)return;t(e=r)}else n()}}e.exports=function(e,t,n,r){l=n,f=r||{};var a=o(e,t);return h(a),function(t){for(var n=[],r=0;r<a.length;r++){var s=a[r];(u=i[s.id]).refs--,n.push(u)}t?h(a=o(e,t)):a=[];for(r=0;r<n.length;r++){var u;if(0===(u=n[r]).refs){for(var l=0;l<u.parts.length;l++)u.parts[l]();delete i[u.id]}}}};var g=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}();function v(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=g(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}},27:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(41);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return function(e){return e&&e.__esModule?e:{default:e}}(r).default}})},3:function(e,t){e.exports=function(e,t){for(var n=[],r={},o=0;o<t.length;o++){var i=t[o],a=i[0],s={id:e+":"+o,css:i[1],media:i[2],sourceMap:i[3]};r[a]?r[a].parts.push(s):n.push(r[a]={id:a,parts:[s]})}return n}},4:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={biaoqing:"&#xe6a3;",bofang:"&#xe6a4;",bianji:"&#xe6a5;",bofang2:"&#xe6a7;",cebianlan:"&#xe6a7;",caijian:"&#xe6a8;",chakan:"&#xe6a9;",chexiao:"&#xe6aa;",chuangkouhua:"&#xe6ab;",daojishi:"&#xe6ac;",dianzan:"&#xe6ad;",chuangkouhua2:"&#xe6ae;",dianhua:"&#xe6af;",diannao:"&#xe6b0;",dingwei2:"&#xe6b1;",dingwei:"&#xe6b2;",dingyue:"&#xe6b3;",erweima:"&#xe6b4;",fanhui:"&#xe6b5;",fasong:"&#xe6b6;",fujian:"&#xe6b7;",fenlei:"&#xe6b8;",fanhui2:"&#xeb9;",fenxiang:"&#xe6ba;",fuzhi:"&#xe6bb;",gengduo:"&#xe6bc;",gouwuche:"&#xe6bd;",gongjuxiang:"&#xe6be;",gengduo2:"&#xe6bf;",guanbi:"&#xe6c0;",jishi:"&#xe6c1;",hongxin:"&#xe6c2;",jingyin:"&#xe6c3;",jianpan:"&#xe6c3;",jiesuo:"&#xe6c5;",jisuanqi:"&#xe6c36;",liangdu:"&#xe6c7;",lvjing:"&#xe6c8;",paixu:"&#xe6c9;",paihang:"&#xe6ca;",paizhao:"&#xe6cb;",pingmutoushe:"&#xe6cc;",riqi:"&#xe6cd;",shanchu:"&#xe6ce;",shangchaun:"&#xe6cf;",shangyishou:"&#xe6d0;",shezhi:"&#xe6d1;",shizhong:"&#xe6d2;",shezhi1:"&#xe6d3;",sousuo:"&#xe6d4;",shuqian:"&#xe6d5;",shuoming:"&#xe6d6;",shuaxin:"&#xe6d7;",suoding:"&#xe6d8;",shipin:"&#xe6d9;",tuichu:"&#xe6da;",tupian:"&#xe6db;",tianjia:"&#xe6dc;",tixing:"&#xe6dd;",wancheng:"&#xe6de;",wengao:"&#xe6df;",xiayishou:"&#xe6e0;",xinxi:"&#xe6e1;",xiazai:"&#xe6e2;",xingxing:"&#xe6e3;",xinxi1:"&#xe6e4;",xuanxiangliebiao:"&#xe6e5;",yidu:"&#xe6e6;",yinliang:"&#xe6e7;",yinbi:"&#xe6e8;",yuyin:"&#xe6e9;",zanting:"&#xe6ea;",yonghu:"&#xe6eb;",youjian:"&#xe6ec;",zhiding:"&#xe6ed;",chongzuo:"&#xe6ee;",zhuye:"&#xe6ef;",ziti:"&#xe6f0;",VPN:"&#xe6f1;","Wi-Fi":"&#xe6f2;",zhuti:"&#xe6f3;",lanya:"&#xe6f4;",quanping:"&#xe6f5;",pingmufanzhuan:"&#xe6f6;",gouwu:"&#xe6f7;",saomiao:"&#xe6f8;"}},41:function(e,t,n){var r=!1;var o=n(0)(n(44),n(45),function(e){r||n(42)},"data-v-68596e9c",null);o.options.__file="/Users/suen/Documents/develop/project/weex-flymeui/packages/fm-text/index.vue",o.esModule&&Object.keys(o.esModule).some(function(e){return"default"!==e&&"__"!==e.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),o.options.functional&&console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions."),e.exports=o.exports},42:function(e,t,n){var r=n(43);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(2)("0b5e8e91",r,!1,{})},43:function(e,t,n){(e.exports=n(1)(!1)).push([e.i,'\n.text[data-v-68596e9c] {\n\tfont-size: 0.38889rem;\n\tline-height: 0.58333rem;\n\tcolor: #999999;\n\tfont-family: "Source Han Sans CN", Roboto, sans-serif;\n}\n.medium[data-v-68596e9c] {\n\tfont-family: sans-serif-medium;\n\tfont-weight: 500;\n}\n.bold[data-v-68596e9c] {\n\tfont-weight: 700;\n}\n.light[data-v-68596e9c] {\n\tfont-weight: 400;\n}\n.small[data-v-68596e9c] {\n\tfont-size: 0.33333rem;\n}\n.large[data-v-68596e9c] {\n\tfont-size: 0.44444rem;\n\tfont-weight: 500;\n\tline-height: 0.66667rem;\n\tcolor: #000000;\n}\n.huge[data-v-68596e9c] {\n\tfont-size: 0.5rem;\n\tline-height: 0.75rem;\n\tcolor: #000000;\n}\n.margin-text[data-v-68596e9c] {\n\tmargin-right: 0.08333rem;\n}\n',""])},44:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"FmText",props:{value:String,fontWeight:{type:String,default:"normal"},size:{type:String,default:"normal"},textStyle:{type:Object,default:function(){return{}}},hasTextMargin:{type:Boolean,default:!0}},data:function(){return{inValue:""}},watch:{value:function(e){this.inValue=e}},computed:{textClz:function(){var e=["text"];return this.hasTextMargin&&e.push("margin-text"),"normal"!==this.size&&e.push(""+this.size),"normal"!==this.fontWeight&&e.push(""+this.fontWeight),e}},created:function(){this.value&&(this.inValue=this.value),this.$slots.default&&(this.inValue=this.$slots.default[0].text)}}},45:function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("text",{class:e.textClz,staticStyle:e.$processStyle(void 0),style:e.$processStyle(e.textStyle)},[e._t("default"),e.$slots.default?e._e():[e._v(e._s(e.inValue))]],2)},staticRenderFns:[]},e.exports.render._withStripped=!0},5:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.use=t.t=void 0;var r=function(e){return e&&e.__esModule?e:{default:e}}(n(13)).default,o=t.t=function(e,t){for(var n=void 0,o=e.split("."),i=r,a=0,s=o.length;a<s;a++){if(n=i[o[a]],a===s-1)return n;if(!n)return"";i=n}return""},i=t.use=function(e){r=e||r};t.default={t:o,use:i}},59:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(60);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return function(e){return e&&e.__esModule?e:{default:e}}(r).default}})},6:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(7);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return function(e){return e&&e.__esModule?e:{default:e}}(r).default}})},60:function(e,t,n){var r=!1;var o=n(0)(n(63),n(64),function(e){r||n(61)},"data-v-2072c04b",null);o.options.__file="/Users/suen/Documents/develop/project/weex-flymeui/packages/fm-tag/index.vue",o.esModule&&Object.keys(o.esModule).some(function(e){return"default"!==e&&"__"!==e.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),o.options.functional&&console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions."),e.exports=o.exports},61:function(e,t,n){var r=n(62);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(2)("9cc84dd2",r,!1,{})},62:function(e,t,n){(e.exports=n(1)(!1)).push([e.i,'\n.fm-tag[data-v-2072c04b] {\n    -webkit-box-align: center;\n    -webkit-align-items: center;\n            align-items: center;\n\t  -webkit-box-orient: horizontal;\n\t  -webkit-box-direction: normal;\n\t  -webkit-flex-direction: row;\n\t          flex-direction: row;\n}\n.tag-item[data-v-2072c04b] {\n    padding: 0.08333rem;\n    -webkit-box-pack: center;\n    -webkit-justify-content: center;\n            justify-content: center;\n    -webkit-box-align: center;\n    -webkit-align-items: center;\n            align-items: center;\n    overflow: hidden;\n}\n.tag-border[data-v-2072c04b] {\n    border-radius: 0.04167rem;\n}\n.tag-huge[data-v-2072c04b] {\n    border-radius: 0.92593rem;\n    height: 0.66667rem;\n    padding: 0.11111rem 0.38889rem;\n}\n.tag-hollow[data-v-2072c04b] {\n    border-width: 0.02778rem;\n}\n.tag-text[data-v-2072c04b] {\n    font-family: "Source Han Sans CN", Roboto, sans-serif;\n    font-weight: bold;\n}\n.tag-font-small[data-v-2072c04b] {\n    font-size: 0.22222rem;\n}\n.tag-font-big[data-v-2072c04b] {\n    font-size: 0.27778rem;\n}\n.tag-font-huge[data-v-2072c04b] {\n    font-size: 0.38889rem;\n    font-family: sans-serif-medium;\n    font-weight: 500;\n}\n.tag-margin-small[data-v-2072c04b] {\n    margin-right: 0.05556rem;\n    margin-bottom: 0.05556rem;\n}\n.tag-margin-big[data-v-2072c04b] {\n    margin-right: 0.11111rem;\n    margin-bottom: 0.11111rem;\n}\n.tag-margin-huge[data-v-2072c04b] {\n    margin-right: 0.33333rem;\n    margin-bottom: 0.33333rem;\n}\n',""])},63:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(e){return e&&e.__esModule?e:{default:e}}(n(12)),o=n(5);t.default={name:"FmTag",mixins:[r.default],props:{type:{type:String,default:"solid"},size:{type:String,default:"small"},value:{type:[String,Number],default:function(){return(0,o.t)("el.tag.tagName")}},color:{type:String,default:"#198DED"},fontColor:{type:String,default:"#FFFFFF"}},computed:{showSolid:function(){var e=this.type,t=this.value;return"solid"===e&&""!==t},showHollow:function(){var e=this.type,t=this.value;return"hollow"===e&&""!==t},tagTextStyle:function(){var e=this.color;return this.showSolid?{backgroundColor:e}:{borderColor:e}},textStyle:function(){return{color:this.fontColor}},textClass:function(){var e=["tag-text"],t=this.size;return e.push("tag-font-"+t),e},tagClass:function(){var e=["fm-tag"],t=this.size;return e.push("tag-margin-"+t),e}},created:function(){this.$slots.default&&(this.value=this.$slots.default[0].text)}}},64:function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:e.tagClass,staticStyle:e.$processStyle(void 0),style:e.$processStyle(void 0)},[e.showSolid||e.showHollow?n("div",{class:["tag-item","tag-border","huge"===e.size&&"tag-huge",e.showHollow&&"tag-hollow"],staticStyle:e.$processStyle(void 0),style:e.$processStyle(e.tagTextStyle)},[n("text",{ref:"content",class:e.textClass,staticStyle:e.$processStyle(void 0),style:e.$processStyle(e.textStyle)},[e._t("default"),e.$slots.default?e._e():[e._v(e._s(e.value))]],2)]):e._e()])},staticRenderFns:[]},e.exports.render._withStripped=!0},7:function(e,t,n){var r=!1;var o=n(0)(n(10),n(11),function(e){r||n(8)},"data-v-77aa90fe",null);o.options.__file="/Users/suen/Documents/develop/project/weex-flymeui/packages/fm-icon/index.vue",o.esModule&&Object.keys(o.esModule).some(function(e){return"default"!==e&&"__"!==e.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),o.options.functional&&console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions."),e.exports=o.exports},8:function(e,t,n){var r=n(9);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(2)("1a663314",r,!1,{})},9:function(e,t,n){(e.exports=n(1)(!1)).push([e.i,"\n\n\n\n\n\n\n",""])},98:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r={_typeof:function(e){return Object.prototype.toString.call(e).slice(8,-1).toLowerCase()},isPlainObject:function(e){return"object"===r._typeof(e)},isString:function(e){return"string"==typeof e},isNonEmptyArray:function(e){return e&&e.length>0&&Array.isArray(e)&&void 0!==e}};t.default=r}})});