import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './style/main.scss'

import '@/plugins/firebase'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  beforeCreate () {
    this.$store.dispatch('FIREBASE__INIT')
  },
  render: h => h(App)
}).$mount('#app')
