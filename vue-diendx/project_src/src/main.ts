import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

import vuesax from 'vuesax'

import 'vuesax/dist/vuesax.css'

Vue.use(vuesax)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
