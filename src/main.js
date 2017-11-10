import Vue from 'vue'
import Layout from './components/Layout.vue'
import router from './router'
import VueResource from 'vue-resource'
Vue.use(VueResource);
new Vue({
  el: '#app',
  router,
  render: h => h(Layout)
})
