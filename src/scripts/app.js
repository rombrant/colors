import Vue from 'vue';
import App from '../App.vue'
import router from '../router'
import store from '../store'
import SimpleVueValidation from 'simple-vue-validator';
import YmapPlugin from 'vue-yandex-maps'

const settings = { 
  apiKey: '0423c280-04ba-4332-8c06-0e252f4bcf93',
  lang: 'ru_RU',
  version: '2.1'
}
Vue.use(YmapPlugin, settings)
Vue.use(SimpleVueValidation);


new Vue({
  el: "#app-root",
  router,
  store,
  render: h => h(App)
});