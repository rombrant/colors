    
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import curProducts from './modules/curProducts';
import cart from './modules/cart';


export default new Vuex.Store({
  modules: {
    curProducts,
    cart
  } 
});