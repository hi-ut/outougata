(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{592:function(e,t,r){var content=r(593);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(20).default)("b1bed018",content,!0,{sourceMap:!1})},593:function(e,t,r){var n=r(19)(!1);n.push([e.i,".theme--light.v-breadcrumbs .v-breadcrumbs__divider,.theme--light.v-breadcrumbs .v-breadcrumbs__item--disabled{color:rgba(0,0,0,.38)}.theme--dark.v-breadcrumbs .v-breadcrumbs__divider,.theme--dark.v-breadcrumbs .v-breadcrumbs__item--disabled{color:hsla(0,0%,100%,.5)}.v-breadcrumbs{align-items:center;display:flex;flex-wrap:wrap;flex:0 1 auto;list-style-type:none;margin:0;padding:18px 12px}.v-breadcrumbs li{align-items:center;display:inline-flex;font-size:14px}.v-breadcrumbs li .v-icon{font-size:16px}.v-breadcrumbs li:nth-child(2n){padding:0 12px}.v-breadcrumbs__item{align-items:center;display:inline-flex;text-decoration:none;transition:.3s cubic-bezier(.25,.8,.5,1)}.v-breadcrumbs__item--disabled{pointer-events:none}.v-breadcrumbs--large li,.v-breadcrumbs--large li .v-icon{font-size:16px}",""]),e.exports=n},622:function(e,t,r){"use strict";r(11),r(9),r(10),r(14),r(12),r(16);var n=r(3),c=(r(77),r(592),r(87)),o=r(6);function l(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function d(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var f=Object(o.a)(c.a).extend({name:"v-breadcrumbs-item",props:{activeClass:{type:String,default:"v-breadcrumbs__item--disabled"},ripple:{type:[Boolean,Object],default:!1}},computed:{classes:function(){return Object(n.a)({"v-breadcrumbs__item":!0},this.activeClass,this.disabled)}},render:function(e){var t=this.generateRouteLink(),r=t.tag,data=t.data;return e("li",[e(r,d(d({},data),{},{attrs:d(d({},data.attrs),{},{"aria-current":this.isActive&&this.isLink?"page":void 0})}),this.$slots.default)])}}),h=r(1),v=Object(h.h)("v-breadcrumbs__divider","li"),m=r(21);function y(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}t.a=Object(o.a)(m.a).extend({name:"v-breadcrumbs",props:{divider:{type:String,default:"/"},items:{type:Array,default:function(){return[]}},large:Boolean},computed:{classes:function(){return function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?y(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):y(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({"v-breadcrumbs--large":this.large},this.themeClasses)}},methods:{genDivider:function(){return this.$createElement(v,this.$slots.divider?this.$slots.divider:this.divider)},genItems:function(){for(var e=[],t=!!this.$scopedSlots.item,r=[],i=0;i<this.items.length;i++){var n=this.items[i];r.push(n.text),t?e.push(this.$scopedSlots.item({item:n})):e.push(this.$createElement(f,{key:r.join("."),props:n},[n.text])),i<this.items.length-1&&e.push(this.genDivider())}return e}},render:function(e){var t=this.$slots.default||this.genItems();return e("ul",{staticClass:"v-breadcrumbs",class:this.classes},t)}})},629:function(e,t,r){var content=r(670);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(20).default)("893f16aa",content,!0,{sourceMap:!1})},669:function(e,t,r){"use strict";r(629)},670:function(e,t,r){var n=r(19)(!1);n.push([e.i,".nuxt-content h2,.nuxt-content h3,.nuxt-content h4{margin-top:12px;margin-bottom:8px}",""]),e.exports=n},705:function(e,t,r){"use strict";r.r(t);r(90);var n=r(24),c=r(28),o=r(42),l=r(47),d=r(45),f=r(32),h=r(17),v=(r(79),r(14),r(91));function m(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=Object(f.a)(e);if(t){var c=Object(f.a)(this).constructor;r=Reflect.construct(n,arguments,c)}else r=n.apply(this,arguments);return Object(d.a)(this,r)}}var y=function(e,t,r,desc){var n,c=arguments.length,o=c<3?t:null===desc?desc=Object.getOwnPropertyDescriptor(t,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(h.a)(Reflect))&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,desc);else for(var i=e.length-1;i>=0;i--)(n=e[i])&&(o=(c<3?n(o):c>3?n(t,r,o):n(t,r))||o);return c>3&&o&&Object.defineProperty(t,r,o),o},O=function(e){Object(l.a)(d,e);var t,r=m(d);function d(){var e;return Object(c.a)(this,d),(e=r.apply(this,arguments)).baseUrl="https://hi-ut.github.io/outougata",e}return Object(o.a)(d,[{key:"asyncData",value:(t=Object(n.a)(regeneratorRuntime.mark((function e(t){var r,n,c,o,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.app,n=t.$content,c=t.params,"ja"===(o=r.i18n.locale)?o="":o+="/",e.next=5,n(o+"page/"+c.slug).fetch();case 5:return l=e.sent,e.abrupt("return",{page:l});case 7:case"end":return e.stop()}}),e)}))),function(e){return t.apply(this,arguments)})},{key:"title",get:function(){return this.page.title}},{key:"head",value:function(){return{title:this.title}}},{key:"bh",get:function(){return[{text:this.$t("top"),disabled:!1,to:this.localePath({name:"index"}),exact:!0},{text:this.title}]}}]),d}(v.Vue),j=O=y([Object(v.Component)({components:{}})],O),x=(r(669),r(97)),_=r(111),w=r.n(_),P=r(622),k=r(575),D=r(226),R=r(71),component=Object(x.a)(j,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("v-sheet",{attrs:{color:"grey lighten-2"}},[r("v-container",{staticClass:"py-4",attrs:{fluid:""}},[r("v-breadcrumbs",{staticClass:"py-0",attrs:{items:e.bh},scopedSlots:e._u([{key:"divider",fn:function(){return[r("v-icon",[e._v("mdi-chevron-right")])]},proxy:!0}])})],1)],1),e._v(" "),r("v-container",{staticClass:"my-5"},[r("h1",{staticClass:"mb-5"},[e._v(e._s(e.page.title))]),e._v(" "),r("nuxt-content",{attrs:{document:e.page}})],1)],1)}),[],!1,null,null,null);t.default=component.exports;w()(component,{VBreadcrumbs:P.a,VContainer:k.a,VIcon:D.a,VSheet:R.a})}}]);