// { "framework": "Vue" }

!function(e,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define([],n):"object"==typeof exports?exports["npm/weex-flymeui/components/utils/index"]=n():e["npm/weex-flymeui/components/utils/index"]=n()}("undefined"!=typeof self?self:this,function(){return function(e){var n={};function t(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,t),i.l=!0,i.exports}return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="/",t(t.s=20)}({20:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var o={_typeof:function(e){return Object.prototype.toString.call(e).slice(8,-1).toLowerCase()},isPlainObject:function(e){return"object"===o._typeof(e)},isString:function(e){return"string"==typeof e},isNonEmptyArray:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return e&&e.length>0&&Array.isArray(e)&&void 0!==e},isObject:function(e){return e&&"object"===(void 0===e?"undefined":r(e))&&!Array.isArray(e)},isEmptyObject:function(e){return 0===Object.keys(e).length&&e.constructor===Object},decodeIconFont:function(e){var n=/&#x[a-z|0-9]{4,5};?/g;return n.test(e)?e.replace(new RegExp(n,"g"),function(e){var n=e.replace(/&#x/,"0x").replace(/;$/,"");return String.fromCharCode(n)}):e},mergeDeep:function(e){for(var n=arguments.length,t=Array(n>1?n-1:0),r=1;r<n;r++)t[r-1]=arguments[r];if(!t.length)return e;var c=t.shift();if(o.isObject(e)&&o.isObject(c))for(var u in c)o.isObject(c[u])?(e[u]||Object.assign(e,i({},u,{})),o.mergeDeep(e[u],c[u])):Object.assign(e,i({},u,c[u]));return o.mergeDeep.apply(o,[e].concat(t))},appendProtocol:function(e){if(/^\/\//.test(e)){var n=weex.config.bundleUrl;return"http"+(/^https:/.test(n)?"s":"")+":"+e}return e},encodeURLParams:function(e){return new UrlParser(e,!0).toString()},goToH5Page:function(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,r=weex.requireModule("navigator"),i=new o.UrlParser(e,!0),c=o.appendProtocol(i.toString());r.push({url:o.encodeURLParams(c),animated:n.toString()},t)},env:{isWeb:function(){var e=weex.config.env.platform;return"object"===("undefined"==typeof window?"undefined":r(window))&&"web"===e.toLowerCase()},isIOS:function(){return"ios"===weex.config.env.platform.toLowerCase()},isIPhoneX:function(){var e=weex.config.env.deviceHeight;return o.env.isWeb()?void 0!==("undefined"==typeof window?"undefined":r(window))&&window.screen&&window.screen.width&&window.screen.height&&375===parseInt(window.screen.width,10)&&812===parseInt(window.screen.height,10):o.env.isIOS()&&2436===e},isAndroid:function(){return"android"===weex.config.env.platform.toLowerCase()},getPageHeight:function(){var e=weex.config.env,n=o.env.isWeb()?0:o.env.isIPhoneX()?176:132;return e.deviceHeight/e.deviceWidth*750-n},getScreenHeight:function(){var e=weex.config.env;return e.deviceHeight/e.deviceWidth*750}},compareVersion:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"0.0.0",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"0.0.0";if(e===n)return!0;for(var t=e.split("."),r=n.split("."),i=Math.max(t.length,r.length),o=0;o<i;o++){var c=~~r[o],u=~~t[o];if(c<u)return!0;if(c>u)return!1}return!1},arrayChunk:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:4,t=[];return e&&e.length>0&&(t=e.map(function(t,r){return r%n==0?e.slice(r,r+n):null}).filter(function(e){return e})),t},truncateString:function(e,n){for(var t=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],r=0,i="",o="",c=/[^\x00-\xff]/g,u=e.replace(c,"**").length,f=0;f<u&&(null!==(o=e.charAt(f).toString()).match(c)?r+=2:r++,!(r>n));f++)i+=o;return t&&u>n&&(i+="..."),i},animation:{pageTransitionAnimation:function(e,n,t,r){weex.requireModule("animation").transition(e,{styles:{transform:n},duration:t?250:300,timingFunction:t?"ease-in":"ease-out",delay:0},function(){r&&r()})}},uiStyle:{pageTransitionAnimationStyle:function(e){return"push"===e?{left:"750px",top:"0px",height:weex.config.env.deviceHeight/weex.config.env.deviceWidth*750+"px"}:"model"===e?{top:weex.config.env.deviceHeight/weex.config.env.deviceWidth*750+"px",left:"0px",height:weex.config.env.deviceHeight/weex.config.env.deviceWidth*750+"px"}:{}}}};n.default=o}})});