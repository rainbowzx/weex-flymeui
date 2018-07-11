// { "framework": "Vue" }

!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["npm/weex-flymeui/components/fm-foldable-text/index"]=t():e["npm/weex-flymeui/components/fm-foldable-text/index"]=t()}("undefined"!=typeof self?self:this,function(){return function(e){var t={};function n(i){if(t[i])return t[i].exports;var o=t[i]={i:i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:i})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=108)}({1:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.use=t.t=void 0;var i=function(e){return e&&e.__esModule?e:{default:e}}(n(8)).default,o=t.t=function(e,t){for(var n=void 0,o=e.split("."),r=i,l=0,s=o.length;l<s;l++){if(n=r[o[l]],l===s-1)return n;if(!n)return"";r=n}return""},r=t.use=function(e){i=e||i};t.default={t:o,use:r}},108:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(109);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return function(e){return e&&e.__esModule?e:{default:e}}(i).default}})},109:function(e,t,n){var i,o,r=[];r.push(n(110)),i=n(111);var l=n(112);o=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(Object.keys(i).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),o=i=i.default),"function"==typeof o&&(o=o.options),o.__file="/Users/suen/Documents/develop/project/weex-flymeui/packages/fm-foldable-text/index.vue",o.render=l.render,o.staticRenderFns=l.staticRenderFns,o._scopeId="data-v-19e1f2e0",o.style=o.style||{},r.forEach(function(e){for(var t in e)o.style[t]=e[t]}),"function"==typeof __register_static_styles__&&__register_static_styles__(o._scopeId,r),e.exports=i},110:function(e,t){e.exports={container:{position:"relative"},text:{fontFamily:'"Source Han Sans CN", Roboto, sans-serif',color:"#999999"},text_small:{fontSize:"36",lineHeight:"42"},text_large:{fontFamily:"sans-serif-medium",fontWeight:"500",fontSize:"48",lineHeight:"72"},text_huge:{fontFamily:"sans-serif-medium",fontWeight:"500",fontSize:"54",lineHeight:"78"},more:{position:"absolute",right:"18",bottom:0,fontFamily:"sans-serif-medium",fontWeight:"500"},test:{flexDirection:"row"}}},111:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},o=function(e){return e&&e.__esModule?e:{default:e}}(n(7)),r=n(1);t.default={name:"FmFoldableText",mixins:[o.default],data:function(){return{expandHeight:"",unexpandHeight:"",animationHeight:"",foldText:"",foldable:!0}},props:{width:{type:Number,default:1020},text:{type:String,default:""},lines:{type:Number,default:2},folded:{type:Boolean,default:!0},size:{type:String,default:"small"},textStyle:Object,tipStyle:Object,tipValue:{type:String,default:function(){return(0,r.t)("el.foldabletext.more")}}},mounted:function(){if(""===this.foldText){var e=this.textStyle,t=e&&e.fontSize?e.fontSize:this.large?48:this.huge?54:36,n=t+1.44,i=.56*t,o=.556*t,r=.8*t,l=.2*t,s=0,f="",u=this.width*this.lines+t,a=this.width*this.lines-n*this.tipValue.length,d=!0,c=!1,p=void 0;try{for(var h,x=this.text[Symbol.iterator]();!(d=(h=x.next()).done);d=!0){var y=h.value;if(/^[\u4e00-\u9fa5]/.test(y)?s+=n:/^[a-zA-Z]/.test(y)?s+=i:/^[0-9]/.test(y)?s+=o:/^[·《》，。？、：；“”‘’——【】]/.test(y)?s+=r:/^[`~!@#\$%\^&\*\(\)_\-\+=\{\}\[\]|\\:;"'<>,.\?\/\s]/.test(y)?s+=l:s+=n,s>=a){if(s>=u){f+="..";break}}else f+=y}}catch(e){c=!0,p=e}finally{try{!d&&x.return&&x.return()}finally{if(c)throw p}}s<u&&(this.foldable=!1)&&(this.folded=!1),this.foldText=f}},computed:{getText:function(){return this.folded&&this.foldable?this.foldText:this.text},planeStyle:function(){return{width:this.width+"px"}},moreStyle:function(){return i({fontSize:("large"===this.size?48:"huge"===this.size?54:36)+"px",lineHeight:("large"===this.size?72:"huge"===this.size?78:42)+"px",color:"#198ded",fontWeight:"600"},this.tipStyle)},textClz:function(){var e=["text","text_small"];return"large"===this.size?e.push("text_large"):"huge"===this.size&&e.push("text_huge"),e}},methods:{fold:function(){this.foldable&&(this.folded=!this.folded)}}}},112:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:["wrapper"],on:{click:e.fold}},[n("div",{ref:"plane",staticClass:["container"],style:e.planeStyle},[n("text",{ref:"text",class:e.textClz,style:e.textStyle},[e._v(e._s(e.getText))]),e.foldable&&e.folded?n("text",{ref:"more",staticClass:["more"],style:e.moreStyle},[e._v(e._s(e.tipValue))]):e._e()])])},staticRenderFns:[]},e.exports.render._withStripped=!0},7:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(1);t.default={methods:{t:function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return i.t.apply(this,t)}}}},8:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={el:{common:{delete:"删除",cancel:"取消",confirm:"确认",close:"关闭",title:"标题",more:"更多"},titlebar:{title:"标题"},searchbar:{search:"搜索"},foldabletext:{more:"更多"},input:{placeholder:"请输入",inputError:"输入有误"},tag:{tagName:"标签"}}}}})});