(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{270:function(t,n,e){t.exports=e.p+"img/pin.e70c4fe.png"},271:function(t,n,e){t.exports=e.p+"img/app-large.eaf2c1b.png"},272:function(t,n,e){t.exports=e.p+"img/app-utils-create.51d39a0.png"},273:function(t,n,e){t.exports=e.p+"img/app-utils-edit.615021a.png"},274:function(t,n,e){t.exports=e.p+"img/app-utils-state.35f1382.png"},275:function(t,n,e){var map={"./app-large.png":271,"./app-utils-create.png":272,"./app-utils-edit.png":273,"./app-utils-notifications.png":285,"./app-utils-state.png":274,"./averta-extrabold.woff2":188,"./averta-semibold-italic.woff2":187,"./display-32.png":276,"./display-43.png":282,"./display-46.png":283,"./fonts.css":186,"./join-01.svg":286,"./join-02.svg":287,"./join-03.svg":288,"./join-04.svg":289,"./join-05.svg":290,"./join-06.svg":291,"./join-07.svg":292,"./join-bg.svg":277,"./join-display.svg":278,"./join-screen-01.svg":279,"./join-screen-02.svg":280,"./join-screen-bg.svg":281,"./lucky-local-poster.jpg":293,"./lucky-local.mp4":294,"./numbers.png":284,"./pin.png":270};function o(t){var n=r(t);return e(n)}function r(t){if(!e.o(map,t)){var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}return map[t]}o.keys=function(){return Object.keys(map)},o.resolve=r,t.exports=o,o.id=275},276:function(t,n,e){t.exports=e.p+"img/display-32.92b2c33.png"},277:function(t,n,e){t.exports=e.p+"img/join-bg.41a4b40.svg"},278:function(t,n,e){t.exports=e.p+"img/join-display.2fb4aa0.svg"},279:function(t,n,e){t.exports=e.p+"img/join-screen-01.4110dfc.svg"},280:function(t,n,e){t.exports=e.p+"img/join-screen-02.edcb43b.svg"},281:function(t,n){t.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgMTg3IDM0NyI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImMiIHgxPSIyMy41MjUlIiB4Mj0iNzYuNDc1JSIgeTE9IjAlIiB5Mj0iMTAwJSI+CiAgICAgIDxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiNFRjM3OEIiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSI0Ny42ODclIiBzdG9wLWNvbG9yPSIjRTYyOTREIi8+CiAgICAgIDxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iI0VFNjk2MCIvPgogICAgPC9saW5lYXJHcmFkaWVudD4KICA8L2RlZnM+CiAgICAgIDxnIG1hc2s9InVybCgjYikiPgogICAgICAgIDxwYXRoIGZpbGw9InVybCgjYykiIGQ9Ik0wIDBoMzM0djQ1OUgweiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTYzIC03NC40ODMpIi8+CiAgICAgIDwvZz4KPC9zdmc+Cg=="},282:function(t,n,e){t.exports=e.p+"img/display-43.fb45972.png"},283:function(t,n,e){t.exports=e.p+"img/display-46.a087626.png"},284:function(t,n,e){t.exports=e.p+"img/numbers.2abf007.png"},285:function(t,n,e){t.exports=e.p+"img/app-utils-notifications.bc64ca2.png"},286:function(t,n,e){t.exports=e.p+"img/join-01.d39829a.svg"},287:function(t,n,e){t.exports=e.p+"img/join-02.632d178.svg"},288:function(t,n,e){t.exports=e.p+"img/join-03.52e0fc9.svg"},289:function(t,n,e){t.exports=e.p+"img/join-04.24c542c.svg"},290:function(t,n,e){t.exports=e.p+"img/join-05.7afd288.svg"},291:function(t,n,e){t.exports=e.p+"img/join-06.9065171.svg"},292:function(t,n,e){t.exports=e.p+"img/join-07.14f2bd8.svg"},293:function(t,n,e){t.exports=e.p+"img/lucky-local-poster.25d351e.jpg"},294:function(t,n,e){t.exports=e.p+"videos/lucky-local.c075bed.mp4"},295:function(t,n,e){"use strict";e.r(n);var o=e(37),r=e(0),l={props:{poster:{type:String},src:{type:String}},mounted:function(){console.log(this),addEventListener("click",this.toggle),this.$refs.main.addEventListener("mouseenter",this.fadeIn),this.$refs.main.addEventListener("mouseleave",this.fadeOut)},methods:{fadeIn:function(){o.a.killTweensOf(this.$refs.controls),o.a.to(this.$refs.controls,{display:"block",opacity:1,duration:.4,ease:r.b.easeInOut})},fadeOut:function(){o.a.to(this.$refs.controls,{display:"none",opacity:0,duration:.2,delay:.5,ease:r.b.easeInOut})},toggle:function(){this.playing?(this.$refs.video.pause(),this.$refs.play.style.display="block",this.$refs.pause.style.display="none"):(this.$refs.video.play(),this.$refs.play.style.display="none",this.$refs.pause.style.display="block"),this.playing=!this.playing}},data:function(){return{playing:!1}}},c=e(11),component=Object(c.a)(l,(function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("div",{ref:"main"},[o("video",{ref:"video",attrs:{src:e(275)("./"+t.src),poster:e(275)("./"+t.poster)}}),t._v(" "),o("div",{ref:"controls",staticClass:"absolute w-full h-full top-0 left-0 text-white"},[o("div",{staticClass:"w-full h-full bg-black absolute opacity-25"}),t._v(" "),o("div",{staticClass:"absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 md:w-14 lg:w-19"},[o("button",{ref:"play",staticClass:"w-full"},[o("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 77 77"}},[o("g",{attrs:{fill:"none","fill-rule":"evenodd"}},[o("circle",{attrs:{cx:"38.5",cy:"38.5",r:"37",stroke:"currentColor","stroke-width":"3"}}),t._v(" "),o("path",{attrs:{fill:"currentColor",d:"M33 27.93v20.14a1 1 0 001.577.817l14.266-10.07a1 1 0 000-1.634l-14.266-10.07A1 1 0 0033 27.93z"}})])])]),t._v(" "),o("button",{ref:"pause",staticClass:"w-full hidden"},[o("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 77 77"}},[o("g",{attrs:{fill:"none","fill-rule":"evenodd"}},[o("circle",{attrs:{cx:"38.5",cy:"38.5",r:"37",stroke:"currentColor","stroke-width":"3"}}),t._v(" "),o("g",{attrs:{fill:"currentColor",transform:"translate(30 26)"}},[o("rect",{attrs:{width:"6",height:"24",x:"11",rx:"2"}}),t._v(" "),o("rect",{attrs:{width:"6",height:"24",rx:"2"}})])])])])])])])}),[],!1,null,null,null);n.default=component.exports;installComponents(component,{Video:e(295).default})}}]);