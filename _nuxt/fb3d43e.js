(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{599:function(t,e,n){"use strict";n(9),n(10),n(14),n(16);var r=n(3),o=(n(25),n(11),n(38),n(73),n(338),n(22),n(37),n(339),n(340),n(341),n(342),n(343),n(344),n(345),n(346),n(347),n(348),n(349),n(350),n(351),n(41),n(40),n(12),n(76),n(352),n(2)),c=n(92),l=n(1);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var h=["sm","md","lg","xl"],v=h.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{}),m=h.reduce((function(t,e){return t["offset"+Object(l.D)(e)]={type:[String,Number],default:null},t}),{}),y=h.reduce((function(t,e){return t["order"+Object(l.D)(e)]={type:[String,Number],default:null},t}),{}),O={col:Object.keys(v),offset:Object.keys(m),order:Object.keys(y)};function j(t,e,n){var r=t;if(null!=n&&!1!==n){if(e){var o=e.replace(t,"");r+="-".concat(o)}return"col"!==t||""!==n&&!0!==n?(r+="-".concat(n)).toLowerCase():r.toLowerCase()}}var w=new Map;e.a=o.default.extend({name:"v-col",functional:!0,props:d(d(d(d({cols:{type:[Boolean,String,Number],default:!1}},v),{},{offset:{type:[String,Number],default:null}},m),{},{order:{type:[String,Number],default:null}},y),{},{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var n=e.props,data=e.data,o=e.children,l=(e.parent,"");for(var f in n)l+=String(n[f]);var d=w.get(l);return d||function(){var t,e;for(e in d=[],O)O[e].forEach((function(t){var r=n[t],o=j(e,t,r);o&&d.push(o)}));var o=d.some((function(t){return t.startsWith("col-")}));d.push((t={col:!o||!n.cols},Object(r.a)(t,"col-".concat(n.cols),n.cols),Object(r.a)(t,"offset-".concat(n.offset),n.offset),Object(r.a)(t,"order-".concat(n.order),n.order),Object(r.a)(t,"align-self-".concat(n.alignSelf),n.alignSelf),t)),w.set(l,d)}(),t(n.tag,Object(c.a)(data,{class:d}),o)}})},600:function(t,e,n){"use strict";n(9),n(10),n(14),n(16);var r=n(3),o=(n(40),n(59),n(33),n(11),n(38),n(73),n(338),n(22),n(37),n(339),n(340),n(341),n(342),n(343),n(344),n(345),n(346),n(347),n(348),n(349),n(350),n(351),n(41),n(12),n(352),n(2)),c=n(92),l=n(1);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var h=["sm","md","lg","xl"],v=["start","end","center"];function m(t,e){return h.reduce((function(n,r){return n[t+Object(l.D)(r)]=e(),n}),{})}var y=function(t){return[].concat(v,["baseline","stretch"]).includes(t)},O=m("align",(function(){return{type:String,default:null,validator:y}})),j=function(t){return[].concat(v,["space-between","space-around"]).includes(t)},w=m("justify",(function(){return{type:String,default:null,validator:j}})),_=function(t){return[].concat(v,["space-between","space-around","stretch"]).includes(t)},x=m("alignContent",(function(){return{type:String,default:null,validator:_}})),C={align:Object.keys(O),justify:Object.keys(w),alignContent:Object.keys(x)},S={align:"align",justify:"justify",alignContent:"align-content"};function P(t,e,n){var r=S[t];if(null!=n){if(e){var o=e.replace(t,"");r+="-".concat(o)}return(r+="-".concat(n)).toLowerCase()}}var D=new Map;e.a=o.default.extend({name:"v-row",functional:!0,props:d(d(d({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:y}},O),{},{justify:{type:String,default:null,validator:j}},w),{},{alignContent:{type:String,default:null,validator:_}},x),render:function(t,e){var n=e.props,data=e.data,o=e.children,l="";for(var f in n)l+=String(n[f]);var d=D.get(l);return d||function(){var t,e;for(e in d=[],C)C[e].forEach((function(t){var r=n[t],o=P(e,t,r);o&&d.push(o)}));d.push((t={"no-gutters":n.noGutters,"row--dense":n.dense},Object(r.a)(t,"align-".concat(n.align),n.align),Object(r.a)(t,"justify-".concat(n.justify),n.justify),Object(r.a)(t,"align-content-".concat(n.alignContent),n.alignContent),t)),D.set(l,d)}(),t(n.tag,Object(c.a)(data,{staticClass:"row",class:d}),o)}})},640:function(t,e,n){var content=n(641);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(20).default)("0cd63bd9",content,!0,{sourceMap:!1})},641:function(t,e,n){var r=n(19)(!1);r.push([t.i,".v-parallax{position:relative;overflow:hidden;z-index:0}.v-parallax__image-container{position:absolute;top:0;left:0;right:0;bottom:0;z-index:1;contain:strict}.v-parallax__image{position:absolute;bottom:0;left:50%;min-width:100%;min-height:100%;display:none;transform:translate(-50%);will-change:transform;transition:opacity .3s cubic-bezier(.25,.8,.5,1);z-index:1}.v-parallax__content{color:#fff;height:100%;z-index:2;position:relative;display:flex;flex-direction:column;justify-content:center;padding:0 1rem}",""]),t.exports=r},699:function(t,e,n){"use strict";n.r(e);n(90);var r=n(28),o=n(42),c=n(47),l=n(45),f=n(32),d=n(17),h=(n(14),n(91));function v(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(f.a)(t);if(e){var o=Object(f.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(l.a)(this,n)}}var m=function(t,e,n,desc){var r,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(c=(o<3?r(c):o>3?r(e,n,c):r(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},y=function(t){Object(c.a)(n,t);var e=v(n);function n(){var t;return Object(r.a)(this,n),(t=e.apply(this,arguments)).baseUrl="https://hi-ut.github.io/outougata",t.siteName=t.$t("応答型翻訳支援システム・データセット"),t.siteDesc="応答型翻訳支援システムのデータセットを検索するプロトタイプシステムです。",t.top="https://hi-ut.github.io/outougata/img/ogp/home.jpg",t.visualization="https://nakamura196.github.io/dd2",t.items=[{label:t.$t("search"),path:{name:"search"},description:"",icon:"mdi-magnify"},{label:t.$t("category"),path:{name:"category"},description:"",icon:"mdi-tag"}],t}return Object(o.a)(n,[{key:"head",value:function(){return{titleTemplate:null,title:this.siteName}}}]),n}(h.Vue),O=y=m([Object(h.Component)({})],y),j=n(97),w=n(111),_=n.n(w),x=n(246),C=n(224),S=n(181),P=n(599),D=n(575),k=n(226),B=n(178),E=(n(245),n(285)),H=Object(E.a)("layout"),N=(n(25),n(640),n(2).default.extend({name:"translatable",props:{height:Number},data:function(){return{elOffsetTop:0,parallax:0,parallaxDist:0,percentScrolled:0,scrollTop:0,windowHeight:0,windowBottom:0}},computed:{imgHeight:function(){return this.objHeight()}},beforeDestroy:function(){window.removeEventListener("scroll",this.translate,!1),window.removeEventListener("resize",this.translate,!1)},methods:{calcDimensions:function(){var t=this.$el.getBoundingClientRect();this.scrollTop=window.pageYOffset,this.parallaxDist=this.imgHeight-this.height,this.elOffsetTop=t.top+this.scrollTop,this.windowHeight=window.innerHeight,this.windowBottom=this.scrollTop+this.windowHeight},listeners:function(){window.addEventListener("scroll",this.translate,!1),window.addEventListener("resize",this.translate,!1)},objHeight:function(){throw new Error("Not implemented !")},translate:function(){this.calcDimensions(),this.percentScrolled=(this.windowBottom-this.elOffsetTop)/(parseInt(this.height)+this.windowHeight),this.parallax=Math.round(this.parallaxDist*this.percentScrolled)}}})),V=n(6),R=Object(V.a)(N).extend().extend({name:"v-parallax",props:{alt:{type:String,default:""},height:{type:[String,Number],default:500},src:String,srcset:String},data:function(){return{isBooted:!1}},computed:{styles:function(){return{display:"block",opacity:this.isBooted?1:0,transform:"translate(-50%, ".concat(this.parallax,"px)")}}},mounted:function(){this.init()},methods:{init:function(){var t=this,img=this.$refs.img;img&&(img.complete?(this.translate(),this.listeners()):img.addEventListener("load",(function(){t.translate(),t.listeners()}),!1),this.isBooted=!0)},objHeight:function(){return this.$refs.img.naturalHeight}},render:function(t){var e=t("div",{staticClass:"v-parallax__image-container"},[t("img",{staticClass:"v-parallax__image",style:this.styles,attrs:{src:this.src,srcset:this.srcset,alt:this.alt},ref:"img"})]),content=t("div",{staticClass:"v-parallax__content"},this.$slots.default);return t("div",{staticClass:"v-parallax",style:{height:"".concat(this.height,"px")},on:this.$listeners},[e,content])}}),T=n(600),component=Object(j.a)(O,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("section",{staticClass:"mb-5"},[n("v-parallax",{attrs:{src:t.top,height:"300"}},[n("v-layout",{staticClass:"white--text",attrs:{column:"","align-center":"","justify-center":""}},[n("h1",{staticClass:"white--text mb-2 display-1 text-center"},[n("b",[t._v(t._s(t.siteName))])]),t._v(" "),n("v-btn",{staticClass:"mt-5",attrs:{large:"",to:t.localePath({name:"search"}),color:"primary"}},[t._v(t._s(t.$t("try_out")))])],1)],1)],1),t._v(" "),n("v-container",{staticClass:"mt-10"},[n("div",{staticClass:"mb-5 pb-5 text-center"},[n("p",{staticClass:"py-5",domProps:{innerHTML:t._s(t.siteDesc)}})]),t._v(" "),t.items.length>0?n("div",[n("h3",{staticClass:"mt-5 mb-10 text-center"},[t._v(t._s(t.$t("menu")))]),t._v(" "),n("v-row",{staticClass:"mb-10"},t._l(t.items,(function(e,r){return n("v-col",{key:r,attrs:{cols:"12",sm:3}},[n("v-card",{staticClass:"mb-4",attrs:{flat:"","no-body":""}},[e.href?[n("a",{attrs:{href:e.href,target:"_blank"}},[e.img?[n("div",{staticClass:"text-center grey lighten-2",staticStyle:{height:"150px"}},[n("v-img",{staticStyle:{height:"150px"},attrs:{contain:"",src:e.img}})],1)]:[n("div",{staticClass:"text-center grey lighten-2 pa-10",staticStyle:{height:"150px"}},[n("v-icon",{attrs:{size:"75"}},[t._v(t._s(e.icon))])],1)]],2),t._v(" "),n("div",{staticClass:"pa-4"},[n("a",{attrs:{href:e.href,target:"_blank"}},[n("h4",[t._v(t._s(e.label))])]),t._v(" "),e.description?n("p",{staticClass:"mt-2 mb-0"},[t._v("\n                  "+t._s(e.description)+"\n                ")]):t._e()])]:[n("nuxt-link",{attrs:{to:t.localePath(e.path)}},[n("div",{staticClass:"text-center grey lighten-2 pa-10",staticStyle:{height:"150px"}},[n("v-icon",{attrs:{size:"75"}},[t._v(t._s(e.icon))])],1)]),t._v(" "),n("div",{staticClass:"pa-4"},[n("nuxt-link",{attrs:{to:t.localePath(e.path)}},[n("h4",[t._v(t._s(e.label))])]),t._v(" "),e.description?n("p",{staticClass:"mt-2 mb-0"},[t._v("\n                  "+t._s(e.description)+"\n                ")]):t._e()],1)]],2)],1)})),1)],1):t._e(),t._v(" "),t._e(),t._v(" "),n("br")],1)],1)}),[],!1,null,null,null);e.default=component.exports;_()(component,{VBtn:x.a,VCard:C.a,VCardText:S.b,VCardTitle:S.c,VCol:P.a,VContainer:D.a,VIcon:k.a,VImg:B.a,VLayout:H,VParallax:R,VRow:T.a})}}]);