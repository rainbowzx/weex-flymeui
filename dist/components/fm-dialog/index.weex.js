// { "framework": "Vue" }

!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["npm/weex-flymeui/components/fm-dialog/index"]=t():e["npm/weex-flymeui/components/fm-dialog/index"]=t()}("undefined"!=typeof self?self:this,function(){return function(e){var t={};function i(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,i),o.l=!0,o.exports}return i.m=e,i.c=t,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i(i.s=103)}([function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={biaoqing:"&#xe6a3;",bofang:"&#xe6a4;",bianji:"&#xe6a5;",bofang2:"&#xe6a7;",cebianlan:"&#xe6a7;",caijian:"&#xe6a8;",chakan:"&#xe6a9;",chexiao:"&#xe6aa;",chuangkouhua:"&#xe6ab;",daojishi:"&#xe6ac;",dianzan:"&#xe6ad;",chuangkouhua2:"&#xe6ae;",dianhua:"&#xe6af;",diannao:"&#xe6b0;",dingwei2:"&#xe6b1;",dingwei:"&#xe6b2;",dingyue:"&#xe6b3;",erweima:"&#xe6b4;",fanhui:"&#xe6b5;",fasong:"&#xe6b6;",fujian:"&#xe6b7;",fenlei:"&#xe6b8;",fanhui2:"&#xeb9;",fenxiang:"&#xe6ba;",fuzhi:"&#xe6bb;",gengduo:"&#xe6bc;",gouwuche:"&#xe6bd;",gongjuxiang:"&#xe6be;",gengduo2:"&#xe6bf;",guanbi:"&#xe6c0;",jishi:"&#xe6c1;",hongxin:"&#xe6c2;",jingyin:"&#xe6c3;",jianpan:"&#xe6c3;",jiesuo:"&#xe6c5;",jisuanqi:"&#xe6c36;",liangdu:"&#xe6c7;",lvjing:"&#xe6c8;",paixu:"&#xe6c9;",paihang:"&#xe6ca;",paizhao:"&#xe6cb;",pingmutoushe:"&#xe6cc;",riqi:"&#xe6cd;",shanchu:"&#xe6ce;",shangchaun:"&#xe6cf;",shangyishou:"&#xe6d0;",shezhi:"&#xe6d1;",shizhong:"&#xe6d2;",shezhi1:"&#xe6d3;",sousuo:"&#xe6d4;",shuqian:"&#xe6d5;",shuoming:"&#xe6d6;",shuaxin:"&#xe6d7;",suoding:"&#xe6d8;",shipin:"&#xe6d9;",tuichu:"&#xe6da;",tupian:"&#xe6db;",tianjia:"&#xe6dc;",tixing:"&#xe6dd;",wancheng:"&#xe6de;",wengao:"&#xe6df;",xiayishou:"&#xe6e0;",xinxi:"&#xe6e1;",xiazai:"&#xe6e2;",xingxing:"&#xe6e3;",xinxi1:"&#xe6e4;",xuanxiangliebiao:"&#xe6e5;",yidu:"&#xe6e6;",yinliang:"&#xe6e7;",yinbi:"&#xe6e8;",yuyin:"&#xe6e9;",zanting:"&#xe6ea;",yonghu:"&#xe6eb;",youjian:"&#xe6ec;",zhiding:"&#xe6ed;",chongzuo:"&#xe6ee;",zhuye:"&#xe6ef;",ziti:"&#xe6f0;",VPN:"&#xe6f1;","Wi-Fi":"&#xe6f2;",zhuti:"&#xe6f3;",lanya:"&#xe6f4;",quanping:"&#xe6f5;",pingmufanzhuan:"&#xe6f6;",gouwu:"&#xe6f7;",saomiao:"&#xe6f8;"}},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.use=t.t=void 0;var n=function(e){return e&&e.__esModule?e:{default:e}}(i(8)).default,o=t.t=function(e,t){for(var i=void 0,o=e.split("."),r=n,s=0,a=o.length;s<a;s++){if(i=r[o[s]],s===a-1)return i;if(!i)return"";r=i}return""},r=t.use=function(e){n=e||n};t.default={t:o,use:r}},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(3);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return function(e){return e&&e.__esModule?e:{default:e}}(n).default}})},function(e,t,i){var n,o,r=[];r.push(i(4)),n=i(5);var s=i(6);o=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(Object.keys(n).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),o=n=n.default),"function"==typeof o&&(o=o.options),o.__file="/Users/suen/Documents/develop/project/weex-flymeui/packages/fm-icon/index.vue",o.render=s.render,o.staticRenderFns=s.staticRenderFns,o._scopeId="data-v-08d175ee",o.style=o.style||{},r.forEach(function(e){for(var t in e)o.style[t]=e[t]}),"function"==typeof __register_static_styles__&&__register_static_styles__(o._scopeId,r),e.exports=n},function(e,t){e.exports={}},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e},o=function(e){return e&&e.__esModule?e:{default:e}}(i(0));var r=weex.requireModule("dom");t.default={name:"FmIcon",props:{name:{default:"wancheng",type:String},value:{type:String,default:""},iconStyle:{type:[Number,Object,String],default:42},color:{type:String,default:"#666666"}},data:function(){return{Icon:o.default}},computed:{getIcon:function(){var e=this.Icon,t=this.name,i=this.value;return a(""===i?e[t]||"wancheng":i)},mergeStyle:function(){var e=this.iconStyle,t={fontFamily:"flymeicon",color:this.color};return"object"!==Object.prototype.toString.call(this.iconStyle).slice(8,-1).toLowerCase()?(t.fontSize=e+"px",t.height=e+"px"):t=Object.assign({},t,n({},e)),t}},beforeCreate:function(){this.isCreator||r.addRule("fontFace",{fontFamily:"flymeicon",src:"url('http://weixin-res.flyme.cn/resources/weex-flymeui/assets/iconfont.ttf')"})},methods:{itemClicked:function(e){this.$emit("fmIconClicked",{name:e})}}};var s=/&([^;]{2,});?/g,a=function(e){return e=e.replace(s,function(e,t){if("#"===t.charAt(0)){var i=0;if(i="x"===t.charAt(1).toLowerCase()?parseInt(t.slice(2),16):parseInt(t.slice(1),10),!isNaN(i)&&i>=-32768&&i<=65535)return String.fromCharCode(i)}return e})}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("text",{style:e.mergeStyle,on:{click:function(t){e.itemClicked(e.name)}}},[e._v(e._s(e.getIcon))])},staticRenderFns:[]},e.exports.render._withStripped=!0},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(1);t.default={methods:{t:function(){for(var e=arguments.length,t=Array(e),i=0;i<e;i++)t[i]=arguments[i];return n.t.apply(this,t)}}}},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={el:{common:{delete:"删除",cancel:"取消",confirm:"确认",close:"关闭",title:"标题",more:"更多"},titlebar:{title:"标题"},searchbar:{search:"搜索"},foldabletext:{more:"更多"},input:{placeholder:"请输入",inputError:"输入有误"},tag:{tagName:"标签"}}}},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={primaryColor:"#198DED",disabledColor:"#BDE2FB",highlightColor:"#156DC9",lightColor:"#42A2F1",weakColor:"#E6F8FF",grayColor:"#F2F3F4",fontColorLight:"#FFFFFF",fontColorDark:"#3D3D3D",fontColorGray:"#F2F3F4"}},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(11);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return function(e){return e&&e.__esModule?e:{default:e}}(n).default}})},function(e,t,i){var n,o,r=[];n=i(12);var s=i(13);o=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(Object.keys(n).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),o=n=n.default),"function"==typeof o&&(o=o.options),o.__file="/Users/suen/Documents/develop/project/weex-flymeui/packages/fm-image/index.vue",o.render=s.render,o.staticRenderFns=s.staticRenderFns,o.style=o.style||{},r.forEach(function(e){for(var t in e)o.style[t]=e[t]}),"function"==typeof __register_static_styles__&&__register_static_styles__(o._scopeId,r),e.exports=n},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e};t.default={name:"FmImage",data:function(){return{loaded:!1}},props:{src:{type:String,default:""},scale:{type:Number,default:0},width:{type:Number,default:1},height:{type:Number,default:1},occupyingColor:{type:String,default:"transparent"},imgStyle:{type:Object}},computed:{getStyle:function(){return n({width:this.width+"px",height:this.height+"px",backgroundColor:this.loaded?"transparent":this.occupyingColor},this.imgStyle)}},methods:{onLoad:function(e){this.$emit("fmImageLoaded",e),e.success&&(this.loaded=!0),e.success&&e.size&&e.size.naturalWidth>0&&this.scale&&(this.width=e.size.naturalWidth*this.scale,this.height=e.size.naturalHeight*this.scale)}}}},function(e,t){e.exports={render:function(){var e=this.$createElement;return(this._self._c||e)("image",{ref:"img",style:this.getStyle,attrs:{src:this.src},on:{load:this.onLoad}})},staticRenderFns:[]},e.exports.render._withStripped=!0},,,function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(17);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return function(e){return e&&e.__esModule?e:{default:e}}(n).default}})},function(e,t,i){var n,o,r=[];r.push(i(18)),n=i(19);var s=i(20);o=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(Object.keys(n).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),o=n=n.default),"function"==typeof o&&(o=o.options),o.__file="/Users/suen/Documents/develop/project/weex-flymeui/packages/fm-overlay/index.vue",o.render=s.render,o.staticRenderFns=s.staticRenderFns,o._scopeId="data-v-e3dfd8de",o.style=o.style||{},r.forEach(function(e){for(var t in e)o.style[t]=e[t]}),"function"==typeof __register_static_styles__&&__register_static_styles__(o._scopeId,r),e.exports=n},function(e,t){e.exports={"fm-overlay":{width:"1080",position:"fixed",left:0,top:0,bottom:0,right:0,alignItems:"center",justifyContent:"center"}}},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=weex.requireModule("animation");t.default={name:"FmOverlay",props:{show:{type:Boolean,default:!0},hasAnimation:{type:Boolean,default:!0},duration:{type:[Number,String],default:300},timingFunction:{type:Array,default:function(){return["ease-in","ease-out"]}},opacity:{type:[Number,String],default:.5},canAutoClose:{type:Boolean,default:!0}},computed:{overlayStyle:function(){return{opacity:this.hasAnimation?0:1,backgroundColor:"rgba(0, 0, 0,"+this.opacity+")"}},shouldShow:function(){var e=this;if(!this.isCreator){var t=this.show;return this.hasAnimation&&setTimeout(function(){e.appearOverlay(t)},50),t}},isCreator:function(){return weex.supports&&weex.supports("@component/FmOverlayNative")}},methods:{overlayClicked:function(e){this.canAutoClose?this.appearOverlay(!1):this.$emit("fmOverlayBodyClicked",{})},appearOverlay:function(e){var t=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.duration,o=this.hasAnimation,r=this.timingFunction,s=this.canAutoClose,a=!e&&s;a&&this.$emit("fmOverlayBodyClicking",{});var l=this.$refs["fm-overlay"];o&&l?n.transition(l,{styles:{opacity:e?1:0},duration:i,timingFunction:r[e?0:1],delay:0},function(){a&&t.$emit("fmOverlayBodyClicked",{})}):a&&this.$emit("fmOverlayBodyClicked",{})},hide:function(){this.appearOverlay(!1)}}}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i(e.isCreator?"FmOverlayNative":"div",{tag:"component",attrs:{visible:e.show,touchable:e.canAutoClose},on:{onDismiss:e.overlayClicked}},[e.show&&!e.isCreator?i("div",{ref:"fm-overlay",staticClass:["fm-overlay"],style:e.overlayStyle,attrs:{watch:e.shouldShow},on:{click:e.overlayClicked}},[e._t("default")],2):e._e(),e.isCreator?i("div",[e._t("default")],2):e._e()])},staticRenderFns:[]},e.exports.render._withStripped=!0},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(33);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return function(e){return e&&e.__esModule?e:{default:e}}(n).default}})},,,,,,function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(28);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return function(e){return e&&e.__esModule?e:{default:e}}(n).default}})},function(e,t,i){var n,o,r=[];r.push(i(29)),n=i(30);var s=i(32);o=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(Object.keys(n).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),o=n=n.default),"function"==typeof o&&(o=o.options),o.__file="/Users/suen/Documents/develop/project/weex-flymeui/packages/fm-item/index.vue",o.render=s.render,o.staticRenderFns=s.staticRenderFns,o._scopeId="data-v-04a087f0",o.style=o.style||{},r.forEach(function(e){for(var t in e)o.style[t]=e[t]}),"function"==typeof __register_static_styles__&&__register_static_styles__(o._scopeId,r),e.exports=n},function(e,t){e.exports={"fm-item":{paddingTop:0,paddingRight:"48",paddingBottom:0,paddingLeft:"48","backgroundColor:active":"rgba(0,0,0,0.04)"},"item-wrapper":{flexDirection:"row",alignItems:"center"},"item-border":{backgroundColor:"rgba(0,0,0,0.1)",height:"2"},content:{flex:1,flexDirection:"row",alignItems:"center"},"content-text":{flex:1,justifyContent:"center"},"text-title":{fontSize:"48",color:"#000000",lineHeight:"57",textOverflow:"ellipsis",lines:1},"text-summary":{marginTop:"9",fontSize:"36",color:"rgba(0,0,0,0.4)",lineHeight:"42",textOverflow:"ellipsis",lines:1},"text-description":{flex:1,marginTop:"9",fontSize:"36",color:"rgba(0,0,0,0.4)",lineHeight:"42"},image:{marginRight:"48"}}},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(i(10)),o=r(i(31));function r(e){return e&&e.__esModule?e:{default:e}}t.default={name:"FmItem",components:{FmImage:n.default},props:{type:{type:String,default:"normal"},title:String,summary:String,description:String,imgSrc:String,titleColor:{type:String,default:"#000000"},summaryColor:{type:String,default:"rgba(0, 0, 0, 0.4)"},descColor:{type:String,default:"rgba(0, 0, 0, 0.4)"},imgWidth:{type:Number,default:96},imgHeight:{type:Number,default:96},imgRadius:{type:Number,default:0},imgPosition:{type:String,default:"center"},paddingTop:{type:Number,default:54},paddingBottom:{type:Number,default:54},occupyingColor:{type:String,default:"rgba(0, 0, 0, 0.1)"},border:{type:Boolean,default:!0}},data:function(){return{scene:{}}},computed:{wrapStyle:function(){var e=this.paddingTop,t=this.paddingBottom,i=this.imgPosition,n=this.scene;return{paddingTop:(n.paddingTop||e)+"px",paddingBottom:(n.paddingBottom||t)+"px",alignItems:"top"===(n.imgPosition||i)?"flex-start":"bottom"===(n.imgPosition||i)?"flex-end":"center"}}},watch:{type:function(e){this.scene=e}},created:function(){this.scene=o.default[this.type]},methods:{itemClicked:function(e){this.$emit("fmItemClicked",e)},itemLongpress:function(e){this.$emit("fmItemLongpress",e)}}}},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={single:{paddingTop:48,paddingBottom:48},normal:{},"avatar-single":{imgWidth:120,imgHeight:120,imgRadius:60,paddingTop:48,paddingBottom:48},"avatar-normal":{imgWidth:120,imgHeight:120,imgRadius:60,paddingTop:48,paddingBottom:48,imgPosition:"top"},"icon-small":{imgWidth:96,imgHeight:96,paddingTop:36,paddingBottom:36},"icon-middle":{imgWidth:138,imgHeight:138,imgRadius:4,paddingTop:24,paddingBottom:24},"icon-large":{imgWidth:192,imgHeight:192,paddingTop:36,paddingBottom:36}}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:["fm-item"],on:{click:e.itemClicked,longpress:e.itemLongpress}},[i("div",{staticClass:["item-wrapper"],style:e.wrapStyle},[e.imgSrc?i("div",{staticClass:["image"]},[i("fm-image",{style:{borderRadius:e.scene.imgRadius||e.imgRadius},attrs:{src:e.imgSrc,width:e.scene.imgWidth||e.imgWidth,height:e.scene.imgHeight||e.imgHeight,occupyingColor:e.occupyingColor}})],1):e._e(),i("div",{staticClass:["content"]},[e._t("left"),i("div",{staticClass:["content-text"]},[e._t("title",[e.title?i("text",{staticClass:["text-title"],style:{color:e.titleColor}},[e._v(e._s(e.title))]):e._e()]),e.summary?i("text",{staticClass:["text-summary"],style:{color:e.summaryColor}},[e._v(e._s(e.summary))]):e._e(),e.description?i("text",{staticClass:["text-description"],style:{color:e.descColor}},[e._v(e._s(e.description))]):e._e()],2),e._t("right")],2)]),e.border?i("div",{staticClass:["item-border"],style:{marginLeft:e.imgSrc?(e.scene.imgWidth||e.imgWidth)+48:0}}):e._e()])},staticRenderFns:[]},e.exports.render._withStripped=!0},function(e,t,i){var n,o,r=[];r.push(i(34)),n=i(35);var s=i(36);o=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(Object.keys(n).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),o=n=n.default),"function"==typeof o&&(o=o.options),o.__file="/Users/suen/Documents/develop/project/weex-flymeui/packages/fm-text/index.vue",o.render=s.render,o.staticRenderFns=s.staticRenderFns,o._scopeId="data-v-5cfa2da2",o.style=o.style||{},r.forEach(function(e){for(var t in e)o.style[t]=e[t]}),"function"==typeof __register_static_styles__&&__register_static_styles__(o._scopeId,r),e.exports=n},function(e,t){e.exports={text:{fontSize:"42",lineHeight:"63",color:"#999999",fontFamily:'"Source Han Sans CN", Roboto, sans-serif'},medium:{fontFamily:"sans-serif-medium",fontWeight:"500"},bold:{fontWeight:"700"},light:{fontWeight:"400"},small:{fontSize:"36"},large:{fontSize:"48",fontWeight:"500",lineHeight:"72",color:"#000000"},huge:{fontSize:"54",lineHeight:"81",color:"#000000"},"margin-text":{marginRight:"9"}}},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"FmText",props:{value:String,fontWeight:{type:String,default:"normal"},size:{type:String,default:"normal"},textStyle:{type:Object,default:function(){return{}}},hasTextMargin:{type:Boolean,default:!0}},data:function(){return{inValue:""}},watch:{value:function(e){this.inValue=e}},computed:{textClz:function(){var e=["text"];return this.hasTextMargin&&e.push("margin-text"),"normal"!==this.size&&e.push(""+this.size),"normal"!==this.fontWeight&&e.push(""+this.fontWeight),e}},created:function(){this.value&&(this.inValue=this.value),this.$slots.default&&(this.inValue=this.$slots.default[0].text)}}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("text",{class:e.textClz,style:e.textStyle},[e._t("default"),e.$slots.default?e._e():[e._v(e._s(e.inValue))]],2)},staticRenderFns:[]},e.exports.render._withStripped=!0},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(38);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return function(e){return e&&e.__esModule?e:{default:e}}(n).default}})},function(e,t,i){var n,o,r=[];r.push(i(39)),n=i(40);var s=i(41);o=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(Object.keys(n).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),o=n=n.default),"function"==typeof o&&(o=o.options),o.__file="/Users/suen/Documents/develop/project/weex-flymeui/packages/fm-simple-btn/index.vue",o.render=s.render,o.staticRenderFns=s.staticRenderFns,o._scopeId="data-v-c414c094",o.style=o.style||{},r.forEach(function(e){for(var t in e)o.style[t]=e[t]}),"function"==typeof __register_static_styles__&&__register_static_styles__(o._scopeId,r),e.exports=n},function(e,t){e.exports={"dialog-btn":{flex:1},btnText:{fontFamily:"sans-serif-medium",fontWeight:"500",fontSize:"48",color:"#198ded",textAlign:"center"},"dialog-btnText":{paddingTop:"36",paddingRight:"36",paddingBottom:"36",paddingLeft:"36"},"actionSheet-btnText":{lineHeight:"192",borderBottomStyle:"solid",borderBottomWidth:"1",borderBottomColor:"#E6E6E6"}}},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"FmSimpleBtn",props:{text:String,type:String,color:String,msg:[String,Number,Array,Object],scene:{type:String,defalut:"dialog"}},computed:{btnClz:function(){var e=["btnText"];return"dialog"===this.scene?e.push("dialog-btnText"):"actionSheet"===this.scene&&e.push("actionSheet-btnText"),e},btnStyle:function(){var e=this.color;if(e)return{color:e}}},methods:{click:function(){var e=this.text,t=this.msg,i=this.type;this.$emit("click",{text:e,type:i,msg:t})}}}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:["dialog-btn"]},[i("text",{class:e.btnClz,style:e.btnStyle,on:{click:function(t){e.click()}}},[e._v(e._s(e.text))])])},staticRenderFns:[]},e.exports.render._withStripped=!0},function(e,t,i){var n,o,r=[];r.push(i(43)),n=i(44);var s=i(46);o=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(Object.keys(n).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),o=n=n.default),"function"==typeof o&&(o=o.options),o.__file="/Users/suen/Documents/develop/project/weex-flymeui/packages/fm-checkbox/index.vue",o.render=s.render,o.staticRenderFns=s.staticRenderFns,o._scopeId="data-v-0453e3b8",o.style=o.style||{},r.forEach(function(e){for(var t in e)o.style[t]=e[t]}),"function"==typeof __register_static_styles__&&__register_static_styles__(o._scopeId,r),e.exports=n},function(e,t){e.exports={"icon-wrap":{opacity:1,overflow:"hidden",height:"72",width:"72"},"icon-outer":{width:"72",height:"72",overflow:"hidden"}}},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(i(45)),o=r(i(27));function r(e){return e&&e.__esModule?e:{default:e}}var s=weex.requireModule("animation");t.default={name:"FmCheckbox",components:{FmItem:o.default},props:{value:{type:[String,Number,Object,Boolean],default:""},checked:Boolean,disabled:Boolean,checkedIcon:{type:String,default:n.default.CHECKED},disabledIcon:{type:String,default:n.default.CHECKED_DISABLED},listModel:Boolean,border:{type:Boolean,default:!0}},data:function(){return{model:{},isChecked:!1,innerChecked:!1}},watch:{checked:function(e){this.innerChecked=e,this.appearIcon(this.innerChecked)}},methods:{itemClicked:function(){if(this.listModel)this.$emit("fmCheckBoxItemChecked",{value:i,checked:this.innerChecked});else{var e=this.disabled,t=this.innerChecked,i=this.value;e||(this.innerChecked=!t,this.appearIcon(this.innerChecked),this.$emit("fmCheckBoxItemChecked",{value:i,checked:this.innerChecked}))}},appearIcon:function(e){var t=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:150,n=this.$refs.icon;if(n){var o=e?{opacity:1,width:72}:{opacity:0};s.transition(n,{styles:o,duration:i,delay:0,timingFunction:"ease-out"},function(){t.isChecked=e})}}},created:function(){this.checked&&(this.innerChecked=!0)&&(this.isChecked=!0),this.STYLE=n.default,this.model=this.$attrs}}},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){return e&&e.__esModule?e:{default:e}}(i(9));t.default=Object.assign({},n.default,{CHECKED:"http://p1nq9peby.bkt.clouddn.com/weex-flymeui/check_blue.png",CHECKED_DISABLED:"http://p1nq9peby.bkt.clouddn.com/weex-flymeui/check_disabled_blue.png"})},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("fm-item",e._b({attrs:{border:e.border,titleColor:e.innerChecked?e.disabled?e.STYLE.lightColor:e.STYLE.primaryColor:"#000000"},on:{fmItemClicked:e.itemClicked}},"fm-item",Object.assign({},e.model),!1),[i("div",{staticClass:["icon-wrap"],attrs:{slot:"right"},slot:"right"},[i("div",{ref:"icon",staticClass:["icon-outer"],style:{width:(e.isChecked?72:1)+"px"}},[i("image",{staticClass:["icon"],style:{width:"72px",height:"72px"},attrs:{resize:"cover",src:e.disabled?e.disabledIcon:e.checkedIcon}})])])])},staticRenderFns:[]},e.exports.render._withStripped=!0},,,,,,,,,,,,,,,,,function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(64);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return function(e){return e&&e.__esModule?e:{default:e}}(n).default}})},function(e,t,i){var n,o,r=[];n=i(65);var s=i(66);o=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(Object.keys(n).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),o=n=n.default),"function"==typeof o&&(o=o.options),o.__file="/Users/suen/Documents/develop/project/weex-flymeui/packages/fm-checkbox-list/index.vue",o.render=s.render,o.staticRenderFns=s.staticRenderFns,o.style=o.style||{},r.forEach(function(e){for(var t in e)o.style[t]=e[t]}),"function"==typeof __register_static_styles__&&__register_static_styles__(o._scopeId,r),e.exports=n},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e},o=function(e){return e&&e.__esModule?e:{default:e}}(i(42));t.default={name:"FmCheckboxList",components:{FmCheckbox:o.default},props:{list:{type:Array,default:function(){return[]}},single:{type:Boolean,default:!1},lastBorderHidden:{type:Boolean,default:!1},limit:{type:Number}},data:function(){return{checkedList:[],inList:this.initList()}},watch:{list:function(){this.inList=this.initList()}},created:function(){var e=this,t=this.list;t&&t.length>0&&t.forEach(function(t,i){t.checked&&e.checkedList.push(t.value)})},methods:{onSelect:function(e){var t=this.inList[e].checked;this.limit>0&&this.limit<=this.checkedCount&&!t?this.$emit("overLimit",this.limit):(this.updateList(e),this.$emit("fmCheckBoxListChecked",{selectIndex:e,checked:!t,checkedList:this.inList.filter(function(e){return e.checked})}))},initList:function(){var e=this.single,t=0,i=this.list.map(function(i,o){var r=i.checked,s=i.disabled;return r=!((s=!!s)||!r||e&&0!==t),i.checked&&(t+=1),n({},i,{checked:r,disabled:s})});return this.checkedCount=t,i},updateList:function(e){var t=this.single,i=0;this.inList=this.inList.map(function(n,o){return t?n.checked=e===o&&!n.checked:o===e&&(n.checked=!n.checked),n.checked&&(i+=1),n}),this.checkedCount=i},reset:function(){this.inList=this.list.map(function(e,t){e.checked;var i=e.disabled;return!1,n({},e,{checked:!1,disabled:i=!!i})})}}}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",e._l(e.inList,function(t,n){return i("fm-checkbox",e._b({key:n,attrs:{border:!e.lastBorderHidden||n!==e.inList.length-1,listModel:!0},on:{fmCheckBoxItemChecked:function(t){e.onSelect(n)}}},"fm-checkbox",t,!1))}))},staticRenderFns:[]},e.exports.render._withStripped=!0},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(68);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return function(e){return e&&e.__esModule?e:{default:e}}(n).default}})},function(e,t,i){var n,o,r=[];r.push(i(69)),n=i(70);var s=i(71);o=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(Object.keys(n).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),o=n=n.default),"function"==typeof o&&(o=o.options),o.__file="/Users/suen/Documents/develop/project/weex-flymeui/packages/fm-input/index.vue",o.render=s.render,o.staticRenderFns=s.staticRenderFns,o._scopeId="data-v-e94d2fea",o.style=o.style||{},r.forEach(function(e){for(var t in e)o.style[t]=e[t]}),"function"==typeof __register_static_styles__&&__register_static_styles__(o._scopeId,r),e.exports=n},function(e,t){e.exports={"fm-wrapper":{paddingTop:"72",paddingRight:"48",paddingLeft:"48"},"fm-input":{paddingBottom:"17",borderBottomStyle:"solid",borderBottomWidth:"3",borderBottomColor:"#e6e6e6",fontSize:"48",height:"85",color:"#000000",placeholderColor:"#dddddd"},"fm-input-wrap":{position:"relative"},delete:{position:"absolute",bottom:"30",right:"72",width:"50",height:"50",paddingTop:"7",paddingLeft:"6",backgroundColor:"rgba(77,77,77,0.5)",borderRadius:"30",fontWeight:"700"},visible:{position:"absolute",top:"63",right:"72",width:"72",height:"72"},"error-msg":{fontSize:"36",color:"#df2b18",marginLeft:"24"}}},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(i(9)),o=a(i(7)),r=i(1),s=a(i(2));function a(e){return e&&e.__esModule?e:{default:e}}t.default={name:"FmInput",mixins:[o.default],components:{FmIcon:s.default},mounted:function(){"password"===this.type&&(this.pwdModel=!0),this.value=this.defaultValue||""},data:function(){return{value:"",rows:1,isFocus:!1,pwdModel:!1,pwdVisible:!1}},watch:{defaultValue:function(e){this.value=e}},props:{defaultValue:{type:[String,Number],default:""},placeholder:{type:String,default:function(){return(0,r.t)("el.input.placeholder")}},autoError:{type:String,default:!0},maxlength:[String,Number],inputPattern:RegExp,inputErrorMessage:{type:String,default:"输入有误"},type:String,autofocus:{type:Boolean,default:!1},disabled:Boolean,returnKeyType:{type:String,default:"default"},nightMode:{type:Boolean,default:!1}},computed:{visibleValue:function(){return"password"===this.type?"chakan":"yinbi"},inputStyle:function(){var e={paddingRight:0};return e.borderBottomColor=this.hasError&&this.autoError?"#df2b18":this.isFocus?n.default.primaryColor:"#e6e6e6",e.caretColor=n.default.primaryColor,(this.delShow||this.visibleShow)&&(e.paddingRight="108px"),e},delShow:function(){return!this.pwdModel&&this.isFocus&&this.value},visibleShow:function(){return this.isFocus&&this.pwdModel},hasError:function(){var e=this.inputPattern,t=this.value;return!!e&&!t.match(e)}},methods:{delClick:function(e){this.value=""},toggleVisible:function(e){this.$refs.input.setType?(this.pwdVisible?this.$refs.input.setType("password"):this.$refs.input.setType("visible"),this.pwdVisible=!this.pwdVisible):"password"===this.type?this.type="text":this.type="password"},input:function(e){this.value=e.value,this.$emit("input",e)},change:function(e){this.$emit("change",e)},beFocus:function(e){this.isFocus=!0,this.$emit("focus",e)},beBlur:function(e){this.isFocus=!1,this.$emit("blur",e)},focus:function(){this.$refs.input.focus()},blur:function(){this.$refs.input.blur()},setSelectionRange:function(e,t){this.$refs.input.setSelectionRange(e,t)},getEditSelectionRange:function(e){this.$refs.input.getEditSelectionRange(e)},setValue:function(e){this.value=e}}}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:["fm-wrapper"]},[i("input",{ref:"input",staticClass:["fm-input"],style:e.inputStyle,attrs:{type:e.type,value:e.value,maxlength:e.maxlength,placeholder:e.placeholder,autofocus:e.autofocus,disabled:e.disabled,returnKeyType:e.returnKeyType,nightMode:e.nightMode},on:{input:e.input,change:e.change,focus:e.beFocus,blur:e.beBlur}}),e.delShow?i("fm-icon",{staticClass:["delete"],attrs:{name:"guanbi",iconStyle:38,color:"#fff"},on:{fmIconClicked:e.delClick}}):e._e(),e.visibleShow?i("fm-icon",{staticClass:["visible"],attrs:{name:e.visibleValue,iconStyle:72,color:"#666"},on:{fmIconClicked:e.toggleVisible}}):e._e(),e.hasError&&e.autoError?i("text",{staticClass:["error-msg"]},[e._v(e._s(e.inputErrorMessage))]):e._e()],1)},staticRenderFns:[]},e.exports.render._withStripped=!0},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(104);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return function(e){return e&&e.__esModule?e:{default:e}}(n).default}})},function(e,t,i){var n,o,r=[];r.push(i(105)),n=i(106);var s=i(107);o=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(Object.keys(n).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),o=n=n.default),"function"==typeof o&&(o=o.options),o.__file="/Users/suen/Documents/develop/project/weex-flymeui/packages/fm-dialog/index.vue",o.render=s.render,o.staticRenderFns=s.staticRenderFns,o._scopeId="data-v-0317c17d",o.style=o.style||{},r.forEach(function(e){for(var t in e)o.style[t]=e[t]}),"function"==typeof __register_static_styles__&&__register_static_styles__(o._scopeId,r),e.exports=n},function(e,t){e.exports={container:{position:"fixed",width:"1080",zIndex:99999},"dialog-box":{width:"936",backgroundColor:"#FFFFFF",borderRadius:"10",boxShadow:"0 0 30px 0 rgba(0, 0, 0, 0.3)"},"dialog-box-H5":{position:"fixed",left:"72"},"content-title":{marginTop:"63",paddingLeft:"72",paddingRight:"72",marginBottom:"1.5"},"content-title--input":{marginTop:"48",paddingLeft:"48",paddingRight:"48",marginBottom:"1.5",fontFamily:"sans-serif-medium",fontWeight:"500"},"content-subtext":{paddingLeft:"72",paddingRight:"72"},"dialog-footer":{justifyContent:"center",alignItems:"center",flexWrap:"wrap",paddingTop:"36",paddingRight:"72",paddingBottom:"36",paddingLeft:"72"},input:{marginTop:"-15",marginBottom:"24",marginLeft:"24"}}},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=u(i(16)),o=u(i(21)),r=u(i(37)),s=u(i(67)),a=u(i(63)),l=u(i(7)),c=i(1);function u(e){return e&&e.__esModule?e:{default:e}}var d=weex.requireModule("animation");t.default={name:"FmDialog",mixins:[l.default],components:{FmOverlay:n.default,FmText:o.default,FmSimpleBtn:r.default,FmInput:s.default,FmCheckboxList:a.default},props:{show:{type:Boolean,default:!1},title:{type:String,default:""},content:{type:String,default:""},top:{type:Number,default:400},bodyStyles:{type:Object,default:function(){return{}}},titleStyles:{type:Object,default:function(){return{}}},contentStyles:{type:Object,default:function(){return{}}},cancelText:{type:String,default:function(){return(0,c.t)("el.common.cancel")}},confirmText:{type:String,default:function(){return(0,c.t)("el.common.confirm")}},confirmColor:{type:String,default:"#198DED"},cancelColor:{type:String,default:"#198DED"},hasAnimation:{type:Boolean,default:!0},duration:{type:Number,default:300},timingFunction:{type:Array,default:function(){return["ease-out","ease-out"]}},canAutoClose:{type:Boolean,default:!0},btns:{type:Array,default:function(){return[]}},placeholder:{type:String,default:""},inputDefaultText:{type:[String,Array],default:""},selectData:{type:Array,default:function(){return[]}},selectModel:{type:String,default:"single"},selectLimit:{type:Number,default:0},btnDirection:{type:String,default:"row"},cancelCb:Function,confirmCb:Function,type:{type:String,default:"confirm"},contentType:{type:String,default:"default"},overlayOpacity:{type:Number,default:.5}},data:function(){return{pageHeight:1334,self_show:!1,dialogOpacity:0,inputText:"",selectList:[],selectDataIn:[]}},created:function(){var e=weex.config.env,t=e.deviceHeight,i=e.deviceWidth;this.pageHeight=t/i*1080,this.self_show=this.show,this.inputText=this.inputDefaultText,this.selectDataIn=this.selectData},watch:{show:function(e,t){var i=this;e?(this.self_show=!0,this.$nextTick(function(){i.$refs.inputEl&&i.$refs.inputEl.focus(),i.appearDialog(!0)})):(!this.isCreator&&this.$refs["fm-overlay"].hide(),this.$refs.selectEl&&this.$refs.selectEl.reset(),this.selectList=[],this.appearDialog(!1))},inputDefaultText:function(e){this.inputText=e},selectData:function(e){this.selectDataIn=e}},computed:{isCreator:function(){return weex.supports&&weex.supports("@component/FmOverlayNative")},dialogBtns:function(){var e=[];return this.btns&&this.btns.length?e=e.concat(this.btns):"alert"===this.type?e=[{text:this.confirmText,color:this.confirmColor,type:"confirm"}]:"confirm"===this.type&&(e=[{text:this.cancelText,color:this.cancelColor,type:"cancel"},{text:this.confirmText,color:this.confirmColor,type:"confirm"}]),e},dialogStyle:function(){return Object.assign({opacity:this.dialogOpacity,top:(this.isCreator?0:this.top)+"px"},this.bodyStyles)},btnStyle:function(){var e=this.btnDirection;return{flexDirection:this.btns.length>2?"column":e}},eventMsg:function(){var e=this.contentType,t={};return"input"===e&&(t.inputValue=this.inputText),"select"===e&&(t.selectList=this.selectList),t}},methods:{handleTouchEnd:function(e){e.preventDefault&&e.preventDefault()},overlayClicked:function(){this.canAutoClose&&(this.appearDialog(!1)||this.$emit("fmDialogDisappeared",{})),this.cancelCb&&this.cancelCb()},btnClick:function(e){var t=this.eventMsg;e.type&&"cancel"===e.type?(this.$emit("fmDialogBtnClicked",{type:"cancel"}),this.cancelCb&&this.cancelCb()):e.type&&"confirm"===e.type?(this.$emit("fmDialogBtnClicked",Object.assign({type:"confirm"},t)),this.confirmCb&&this.confirmCb()):this.$emit("fmDialogBtnClicked",Object.assign(t,e))},appearDialog:function(e){var t=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.duration,n=this.hasAnimation,o=this.timingFunction;if(this.isCreator)return this.self_show=e,void(this.dialogOpacity=e?1:0);var r=this.$refs["dialog-box"];this.dialogOpacity=e?0:1,n&&r?d.transition(r,{styles:{opacity:e?1:0},duration:i,timingFunction:o[e?0:1],delay:0},function(){t.self_show=e,t.dialogOpacity=e?1:0}):(this.self_show=e,this.dialogOpacity=e?1:0)},inputing:function(e){this.inputText=e.value},onSelect:function(e){this.selectList=e.checkedList,"single"===this.selectModel&&this.$emit("fmDialogSingleSelected",{selectList:this.selectList})}}}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i(e.isCreator?"FmOverlayNative":"div",{tag:"component",staticClass:["container"],attrs:{visible:e.self_show,touchable:e.canAutoClose},on:{onDismiss:e.overlayClicked}},[e.self_show&&!e.isCreator?i("fm-overlay",{ref:"fm-overlay",attrs:{hasAnimation:!0,canAutoClose:!1,opacity:e.overlayOpacity},on:{fmOverlayBodyClicked:e.overlayClicked}}):e._e(),e.self_show||e.isCreator?i("div",{ref:"dialog-box",staticClass:["dialog-box"],class:!e.isCreator&&["dialog-box-H5"],style:e.dialogStyle,on:{touchend:e.handleTouchEnd}},[i("div",{staticClass:["dialog-content"]},[e._t("title",["select"===e.contentType?[i("fm-text",{staticClass:["content-title--input"],style:e.titleStyles,attrs:{value:e.title}})]:i("fm-text",{staticClass:["content-title"],style:e.titleStyles,attrs:{fontWeight:"medium",size:"large",value:e.title}})]),e._t("content",["default"===e.contentType?[i("fm-text",{staticClass:["content-subtext"],style:e.contentStyles,attrs:{value:e.content}})]:e._e(),"input"===e.contentType?[i("fm-input",{ref:"inputEl",staticClass:["input"],attrs:{defaultValue:e.inputText,type:"text",placeholder:e.placeholder,autofocus:!0},on:{input:e.inputing}})]:e._e(),"select"===e.contentType?[i("fm-checkbox-list",{ref:"selectEl",attrs:{list:e.selectDataIn,single:"single"===e.selectModel,limit:e.selectLimit,lastBorderHidden:"single"===e.selectModel},on:{fmCheckBoxListChecked:e.onSelect}})]:e._e()])],2),"select"!==e.contentType||"single"!==e.selectModel?i("div",{staticClass:["dialog-footer"],style:e.btnStyle},[e._t("btn-group",e._l(e.dialogBtns,function(t,n){return i("fm-simple-btn",e._b({key:n,attrs:{scene:"dialog"},on:{click:e.btnClick}},"fm-simple-btn",t,!1))}))],2):e._e()]):e._e()],1)},staticRenderFns:[]},e.exports.render._withStripped=!0}])});