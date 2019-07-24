import Vue from 'vue'
import '../plugins/vuetify'
import Projekat1 from '../views/Projekat1.vue'
import router from '../router'
import store from '../store'
// import Vuetify from 'vuetify'
// import 'vuetify/dist/vuetify.min.css'

// Vue.use(Vuetify)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(Projekat1)
}).$mount('#app')
