(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{371:function(t,r,e){},410:function(t,r,e){"use strict";var o=e(371);e.n(o).a},444:function(t,r,e){"use strict";e.r(r);var o=function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("h2",[t._v("Страница Продукта:  "+t._s(t.detailProduct.title)),e("div",{staticClass:"product-card-item"},[e("card-root",{attrs:{title:t.detailProduct.title,price:t.detailProduct.price,img:t.detailProduct.pic,code:t.detailProduct.code,desc:t.detailProduct.text},on:{compare:t.compareProducts,favor:t.favorProducts,buy:t.buyProducts}})],1)])};o._withStripped=!0;var c=e(34);function n(t){for(var r=1;r<arguments.length;r++){var e=null!=arguments[r]?arguments[r]:{},o=Object.keys(e);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(e).filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.forEach(function(r){u(t,r,e[r])})}return t}function u(t,r,e){return r in t?Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[r]=e,t}var i={components:{cardRoot:function(){return Promise.all([e.e(1),e.e(0)]).then(e.bind(null,451))}},computed:n({},Object(c.d)("curProducts",{detailProduct:function(t){return t.detailProduct},cards:function(t){return t.cards}})),methods:n({},Object(c.b)("curProducts",["addProductCompare","addNewCard"]),Object(c.b)("cart",["addProductCart","addProductFavor"]),Object(c.c)("curProducts",["ADD_TO_MATCHING","ADD_NEW_BREND_CATEGORY"]),{admitCategory:function(t,r){var e=this.cards.filter(function(r){return r.brend===t});console.log(e),this.ADD_NEW_BREND_CATEGORY(e),this.showSlider=!1},compareProducts:function(t){var r=this.cards.filter(function(r){return r.title===t});console.log(r),this.addProductCompare(r[0]),this.showResult=!1},buyProducts:function(t){var r=this.cards.filter(function(r){return r.title===t});this.addProductCart(r[0]),this.showResult=!1},favorProducts:function(t){var r=this.cards.filter(function(r){return r.title===t});this.addProductFavor(r[0]),this.showResult=!1}})},d=(e(410),e(50)),a=Object(d.a)(i,o,[],!1,null,null,null);a.options.__file="src/components/pages/product.vue";r.default=a.exports}}]);