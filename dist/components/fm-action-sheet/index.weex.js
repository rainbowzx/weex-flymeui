// { "framework": "Vue" }

!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["npm/weex-flymeui/components/fm-action-sheet/index"]=t():e["npm/weex-flymeui/components/fm-action-sheet/index"]=t()}("undefined"!=typeof self?self:this,function(){return function(e){var t={};function o(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}return o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/",o(o.s=89)}({1:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.use=t.t=void 0;var n=function(e){return e&&e.__esModule?e:{default:e}}(o(8)).default,r=t.t=function(e,t){for(var o=void 0,r=e.split("."),i=n,s=0,a=r.length;s<a;s++){if(o=i[r[s]],s===a-1)return o;if(!o)return"";i=o}return""},i=t.use=function(e){n=e||n};t.default={t:r,use:i}},16:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o(17);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return function(e){return e&&e.__esModule?e:{default:e}}(n).default}})},17:function(e,t,o){var n,r,i=[];i.push(o(18)),n=o(19);var s=o(20);r=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(Object.keys(n).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),r=n=n.default),"function"==typeof r&&(r=r.options),r.__file="/Users/suen/Documents/develop/project/weex-flymeui/packages/fm-overlay/index.vue",r.render=s.render,r.staticRenderFns=s.staticRenderFns,r._scopeId="data-v-e3dfd8de",r.style=r.style||{},i.forEach(function(e){for(var t in e)r.style[t]=e[t]}),"function"==typeof __register_static_styles__&&__register_static_styles__(r._scopeId,i),e.exports=n},18:function(e,t){e.exports={"fm-overlay":{width:"1080",position:"fixed",left:0,top:0,bottom:0,right:0,alignItems:"center",justifyContent:"center"}}},19:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=weex.requireModule("animation");t.default={name:"FmOverlay",props:{show:{type:Boolean,default:!0},hasAnimation:{type:Boolean,default:!0},duration:{type:[Number,String],default:300},timingFunction:{type:Array,default:function(){return["ease-in","ease-out"]}},opacity:{type:[Number,String],default:.5},canAutoClose:{type:Boolean,default:!0}},computed:{overlayStyle:function(){return{opacity:this.hasAnimation?0:1,backgroundColor:"rgba(0, 0, 0,"+this.opacity+")"}},shouldShow:function(){var e=this;if(!this.isCreator){var t=this.show;return this.hasAnimation&&setTimeout(function(){e.appearOverlay(t)},50),t}},isCreator:function(){return weex.supports&&weex.supports("@component/FmOverlayNative")}},methods:{overlayClicked:function(e){this.canAutoClose?this.appearOverlay(!1):this.$emit("fmOverlayBodyClicked",{})},appearOverlay:function(e){var t=this,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.duration,r=this.hasAnimation,i=this.timingFunction,s=this.canAutoClose,a=!e&&s;a&&this.$emit("fmOverlayBodyClicking",{});var u=this.$refs["fm-overlay"];r&&u?n.transition(u,{styles:{opacity:e?1:0},duration:o,timingFunction:i[e?0:1],delay:0},function(){a&&t.$emit("fmOverlayBodyClicked",{})}):a&&this.$emit("fmOverlayBodyClicked",{})},hide:function(){this.appearOverlay(!1)}}}},20:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o(e.isCreator?"FmOverlayNative":"div",{tag:"component",attrs:{visible:e.show,touchable:e.canAutoClose},on:{onDismiss:e.overlayClicked}},[e.show&&!e.isCreator?o("div",{ref:"fm-overlay",staticClass:["fm-overlay"],style:e.overlayStyle,attrs:{watch:e.shouldShow},on:{click:e.overlayClicked}},[e._t("default")],2):e._e(),e.isCreator?o("div",[e._t("default")],2):e._e()])},staticRenderFns:[]},e.exports.render._withStripped=!0},37:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o(38);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return function(e){return e&&e.__esModule?e:{default:e}}(n).default}})},38:function(e,t,o){var n,r,i=[];i.push(o(39)),n=o(40);var s=o(41);r=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(Object.keys(n).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),r=n=n.default),"function"==typeof r&&(r=r.options),r.__file="/Users/suen/Documents/develop/project/weex-flymeui/packages/fm-simple-btn/index.vue",r.render=s.render,r.staticRenderFns=s.staticRenderFns,r._scopeId="data-v-c414c094",r.style=r.style||{},i.forEach(function(e){for(var t in e)r.style[t]=e[t]}),"function"==typeof __register_static_styles__&&__register_static_styles__(r._scopeId,i),e.exports=n},39:function(e,t){e.exports={"dialog-btn":{flex:1},btnText:{fontFamily:"sans-serif-medium",fontWeight:"500",fontSize:"48",color:"#198ded",textAlign:"center"},"dialog-btnText":{paddingTop:"36",paddingRight:"36",paddingBottom:"36",paddingLeft:"36"},"actionSheet-btnText":{lineHeight:"192",borderBottomStyle:"solid",borderBottomWidth:"1",borderBottomColor:"#E6E6E6"}}},40:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"FmSimpleBtn",props:{text:String,type:String,color:String,msg:[String,Number,Array,Object],scene:{type:String,defalut:"dialog"}},computed:{btnClz:function(){var e=["btnText"];return"dialog"===this.scene?e.push("dialog-btnText"):"actionSheet"===this.scene&&e.push("actionSheet-btnText"),e},btnStyle:function(){var e=this.color;if(e)return{color:e}}},methods:{click:function(){var e=this.text,t=this.msg,o=this.type;this.$emit("click",{text:e,type:o,msg:t})}}}},41:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:["dialog-btn"]},[o("text",{class:e.btnClz,style:e.btnStyle,on:{click:function(t){e.click()}}},[e._v(e._s(e.text))])])},staticRenderFns:[]},e.exports.render._withStripped=!0},53:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o(54);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return function(e){return e&&e.__esModule?e:{default:e}}(n).default}})},54:function(e,t,o){var n,r,i=[];i.push(o(55)),n=o(56);var s=o(57);r=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(Object.keys(n).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),r=n=n.default),"function"==typeof r&&(r=r.options),r.__file="/Users/suen/Documents/develop/project/weex-flymeui/packages/fm-popup/index.vue",r.render=s.render,r.staticRenderFns=s.staticRenderFns,r._scopeId="data-v-e2b76326",r.style=r.style||{},i.forEach(function(e){for(var t in e)r.style[t]=e[t]}),"function"==typeof __register_static_styles__&&__register_static_styles__(r._scopeId,i),e.exports=n},55:function(e,t){e.exports={"fm-popup":{position:"fixed",width:"1080"},top:{left:0,right:0},bottom:{left:0,right:0},left:{bottom:0,top:0},right:{bottom:0,top:0}}},56:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i=function(e){return e&&e.__esModule?e:{default:e}}(o(16));var s=weex.requireModule("animation"),a=weex.config.env.platform,u="object"===("undefined"==typeof window?"undefined":r(window))&&"web"===a.toLowerCase();t.default={name:"FmPopup",components:{FmOverlay:i.default},props:{show:{type:Boolean,default:!1},pos:{type:String,default:"bottom"},popupColor:{type:String,default:"#FFFFFF"},overlayCfg:{type:Object,default:function(){return{hasAnimation:!0,timingFunction:["ease-in","ease-out"],duration:300,opacity:.5}}},height:{type:[Number,String],default:840},standOut:{type:[Number,String],default:0},width:{type:[Number,String],default:1080},animation:{type:Object,default:function(){return{timingFunction:"ease-out"}}}},data:function(){return{haveOverlay:!0,isOverShow:!0}},computed:{isNeedShow:function(){var e=this;return setTimeout(function(){e.appearPopup(e.show)},50),this.show},_height:function(){return this.appearPopup(this.show,150),this.height},transformValue:function(){return this.getTransform(this.pos,this.width,this.height,!0)},padStyle:function(){var e=this.pos,t=this.width,o=this.height,r={width:t+"px",backgroundColor:this.popupColor};return"top"===e&&(r=n({},r,{top:-o+"px",height:o+"px"})),"bottom"===e&&(r=n({},r,{bottom:-o+"px",height:o+"px"})),"left"===e&&(r=n({},r,{left:-t+"px"})),"right"===e&&(r=n({},r,{right:-t+"px"})),r}},methods:{handleTouchEnd:function(e){"Web"===weex.config.env.platform&&e.preventDefault&&e.preventDefault()},hide:function(){this.appearPopup(!1),this.$refs.overlay.appearOverlay(!1)},fmOverlayBodyClicking:function(){this.isShow&&this.appearPopup(!1)},appearPopup:function(e){var t=this,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:300;this.isShow=e;var r=this.$refs["fm-popup"];r&&s.transition(r,n({styles:{transform:this.getTransform(this.pos,this.width,this.height,!e)},duration:o,delay:0},this.animation),function(){e||t.$emit("fmPopupOverlayClicked",{pos:t.pos})})},getTransform:function(e,t,o,n){var r="top"===e||"bottom"===e?o:t,i=void 0;switch(u&&(r-=this.standOut),n&&(r=0),e){case"top":i="translateY("+r+"px)";break;case"bottom":i="translateY(-"+r+"px)";break;case"left":i="translateX("+r+"px)";break;case"right":i="translateX(-"+r+"px)"}return i}}}},57:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("div",{on:{touchend:e.handleTouchEnd}},[e.show?o("fm-overlay",e._b({ref:"overlay",attrs:{show:e.haveOverlay&&e.isOverShow},on:{fmOverlayBodyClicking:e.fmOverlayBodyClicking}},"fm-overlay",e.overlayCfg,!1)):e._e()],1),e.show?o("div",{ref:"fm-popup",class:["fm-popup",e.pos],style:e.padStyle,attrs:{height:e._height,hack:e.isNeedShow},on:{click:function(){}}},[e._t("default")],2):e._e()])},staticRenderFns:[]},e.exports.render._withStripped=!0},7:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o(1);t.default={methods:{t:function(){for(var e=arguments.length,t=Array(e),o=0;o<e;o++)t[o]=arguments[o];return n.t.apply(this,t)}}}},8:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={el:{common:{delete:"删除",cancel:"取消",confirm:"确认",close:"关闭",title:"标题",more:"更多"},titlebar:{title:"标题"},searchbar:{search:"搜索"},foldabletext:{more:"更多"},input:{placeholder:"请输入",inputError:"输入有误"},tag:{tagName:"标签"}}}},89:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o(90);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return function(e){return e&&e.__esModule?e:{default:e}}(n).default}})},90:function(e,t,o){var n,r,i=[];i.push(o(91)),n=o(92);var s=o(93);r=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(Object.keys(n).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),r=n=n.default),"function"==typeof r&&(r=r.options),r.__file="/Users/suen/Documents/develop/project/weex-flymeui/packages/fm-action-sheet/index.vue",r.render=s.render,r.staticRenderFns=s.staticRenderFns,r._scopeId="data-v-852f7086",r.style=r.style||{},i.forEach(function(e){for(var t in e)r.style[t]=e[t]}),"function"==typeof __register_static_styles__&&__register_static_styles__(r._scopeId,i),e.exports=n},91:function(e,t){e.exports={}},92:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(o(53)),r=a(o(37)),i=a(o(7)),s=o(1);function a(e){return e&&e.__esModule?e:{default:e}}t.default={name:"FmActionSheet",mixins:[i.default],components:{FmPopup:n.default,FmSimpleBtn:r.default},props:{show:{type:Boolean,default:!1},canAutoClose:{type:Boolean,default:!0},confirmText:{type:String,default:function(){return(0,s.t)("el.common.confirm")}},confirmColor:{type:String,default:"#DE3938"},cancelText:{type:String,default:function(){return(0,s.t)("el.common.cancel")}},actionBtns:{type:Array,default:function(){return[]}}},data:function(){return{}},computed:{overlayCfg:function(){return{hasAnimation:!0,timingFunction:["ease-in","ease-out"],duration:300,opacity:.5,canAutoClose:this.canAutoClose}},_height:function(){return 192*this.btns.length},btns:function(){var e=[];return e=this.actionBtns&&this.actionBtns.length?this.actionBtns.concat([{text:this.cancelText,type:"cancel"}]):[{text:this.confirmText,color:this.confirmColor,type:"confirm"},{text:this.cancelText,type:"cancel"}],e}},methods:{popupOverlayClick:function(){this.canAutoClose&&this.$emit("fmActionSheetOverlayClick",{})},btnClick:function(e){this.$refs["fm-popup"].hide(),this.$emit("fmActionSheetBtnClicked",e)}}}},93:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("fm-popup",{ref:"fm-popup",attrs:{haveOverlay:!0,popupColor:"#FFFFFF",show:e.show,overlayCfg:e.overlayCfg,pos:"bottom",height:e._height},on:{fmPopupOverlayClicked:e.popupOverlayClick}},e._l(e.btns,function(t,n){return o("fm-simple-btn",{key:n,attrs:{scene:"actionSheet",color:t.color,text:t.text,type:t.type,msg:t.msg},on:{click:e.btnClick}})}))},staticRenderFns:[]},e.exports.render._withStripped=!0}})});