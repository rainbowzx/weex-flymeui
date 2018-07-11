// { "framework": "Vue" }

!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports["npm/weex-flymeui/components/fm-tag/index"]=e():t["npm/weex-flymeui/components/fm-tag/index"]=e()}("undefined"!=typeof self?self:this,function(){return function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:o})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/",n(n.s=48)}({1:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.use=e.t=void 0;var o=function(t){return t&&t.__esModule?t:{default:t}}(n(8)).default,r=e.t=function(t,e){for(var n=void 0,r=t.split("."),i=o,a=0,s=r.length;a<s;a++){if(n=i[r[a]],a===s-1)return n;if(!n)return"";i=n}return""},i=e.use=function(t){o=t||o};e.default={t:r,use:i}},48:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(49);Object.defineProperty(e,"default",{enumerable:!0,get:function(){return function(t){return t&&t.__esModule?t:{default:t}}(o).default}})},49:function(t,e,n){var o,r,i=[];i.push(n(50)),o=n(51);var a=n(52);r=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(Object.keys(o).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),r=o=o.default),"function"==typeof r&&(r=r.options),r.__file="/Users/suen/Documents/develop/project/weex-flymeui/packages/fm-tag/index.vue",r.render=a.render,r.staticRenderFns=a.staticRenderFns,r._scopeId="data-v-2d637d5b",r.style=r.style||{},i.forEach(function(t){for(var e in t)r.style[e]=t[e]}),"function"==typeof __register_static_styles__&&__register_static_styles__(r._scopeId,i),t.exports=o},50:function(t,e){t.exports={"fm-tag":{alignItems:"center",flexDirection:"row"},"tag-item":{paddingTop:"9",paddingRight:"9",paddingBottom:"9",paddingLeft:"9",justifyContent:"center",alignItems:"center",overflow:"hidden"},"tag-border":{borderRadius:"4.5"},"tag-huge":{borderRadius:"100",height:"72",paddingTop:"12",paddingRight:"42",paddingBottom:"12",paddingLeft:"42"},"tag-hollow":{borderWidth:"3"},"tag-text":{fontFamily:'"Source Han Sans CN", Roboto, sans-serif',fontWeight:"bold"},"tag-font-small":{fontSize:"24"},"tag-font-big":{fontSize:"30"},"tag-font-huge":{fontSize:"42",fontFamily:"sans-serif-medium",fontWeight:"500"},"tag-margin-small":{marginRight:"6",marginBottom:"6"},"tag-margin-big":{marginRight:"12",marginBottom:"12"},"tag-margin-huge":{marginRight:"36",marginBottom:"36"}}},51:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=function(t){return t&&t.__esModule?t:{default:t}}(n(7)),r=n(1);e.default={name:"FmTag",mixins:[o.default],props:{type:{type:String,default:"solid"},size:{type:String,default:"small"},value:{type:[String,Number],default:function(){return(0,r.t)("el.tag.tagName")}},color:{type:String,default:"#198DED"},fontColor:{type:String,default:"#FFFFFF"}},computed:{showSolid:function(){var t=this.type,e=this.value;return"solid"===t&&""!==e},showHollow:function(){var t=this.type,e=this.value;return"hollow"===t&&""!==e},tagTextStyle:function(){var t=this.color;return this.showSolid?{backgroundColor:t}:{borderColor:t}},textStyle:function(){return{color:this.fontColor}},textClass:function(){var t=["tag-text"],e=this.size;return t.push("tag-font-"+e),t},tagClass:function(){var t=["fm-tag"],e=this.size;return t.push("tag-margin-"+e),t}},created:function(){this.$slots.default&&(this.value=this.$slots.default[0].text)}}},52:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:t.tagClass},[t.showSolid||t.showHollow?n("div",{class:["tag-item","tag-border","huge"===t.size&&"tag-huge",t.showHollow&&"tag-hollow"],style:t.tagTextStyle},[n("text",{ref:"content",class:t.textClass,style:t.textStyle},[t._t("default"),t.$slots.default?t._e():[t._v(t._s(t.value))]],2)]):t._e()])},staticRenderFns:[]},t.exports.render._withStripped=!0},7:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(1);e.default={methods:{t:function(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];return o.t.apply(this,e)}}}},8:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={el:{common:{delete:"删除",cancel:"取消",confirm:"确认",close:"关闭",title:"标题",more:"更多"},titlebar:{title:"标题"},searchbar:{search:"搜索"},foldabletext:{more:"更多"},input:{placeholder:"请输入",inputError:"输入有误"},tag:{tagName:"标签"}}}}})});