    
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import curProducts from './modules/curProducts'


export default new Vuex.Store({
  modules: {
    curProducts
  } 
});