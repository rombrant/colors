(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{381:function(t,e,n){},434:function(t,e,n){"use strict";var r=n(381);n.n(r).a},449:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"categories"},[n("ul",{staticClass:"list-categories"},t._l(t.brends,function(e){return n("li",{staticClass:"item-categories"},[n("button",{staticClass:"categories-link",on:{click:function(n){return t.$emit("category",e)}}},[t._v(t._s(e)),n("span",{staticClass:"counter"},[t._v(" ( "+t._s(t.cards.filter(function(t){return t.brend===e}).length)+" )")]),n("router-link",{staticClass:"tabs__link",attrs:{"data-text":"Продукция",to:t.link,"exact-active-class":"active"}})],1)])}),0)])};r._withStripped=!0;var c=n(34);function s(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var i={props:{link:""},data:function(){return{showList:!1}},computed:function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),r.forEach(function(e){s(t,e,n[e])})}return t}({},Object(c.d)("curProducts",{cards:function(t){return t.cards},brends:function(t){return t.brends}}))},a=(n(434),n(50)),o=Object(a.a)(i,r,[],!1,null,null,null);o.options.__file="src/components/categories.vue";e.default=o.exports}}]);