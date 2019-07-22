import Vue from 'vue'
import Projekat1 from '../views/Projekat1.vue'
import router from '../router'
import store from '../store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(Projekat1)
}).$mount('#app')
