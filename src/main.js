import Vue from 'vue'
import App from './App.vue'
import Router from './router/index'
import {BootstrapVue, BootstrapVueIcons} from 'bootstrap-vue';


import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);

new Vue({
  el: '#app',
  render: h => h(App),
  router: Router
})
