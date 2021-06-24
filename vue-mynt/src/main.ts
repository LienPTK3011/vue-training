import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// import eventBus from './eventBus/EventBus'
import "vuesax/dist/vuesax.css";
import { BootstrapVue, BootstrapVueIcons } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "bootstrap-vue/dist/bootstrap-vue-icons.min.css";

import "../src/validations/validation";

// Với Vue 2 thì dùng cái này
import { ValidationProvider, ValidationObserver } from "vee-validate";



Vue.component("ValidationProvider", ValidationProvider);
Vue.component("ValidationObserver", ValidationObserver);
// Với Vue 2 thì dùng cái này

Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);



Vue.directive('rainbow', {
  bind(el, binding, vnode){
    el.style.color = "#"  + Math.random().toString().slice(2,8)
  }
})

Vue.directive('theme', {
  bind(el, binding, vnode){
    if (binding.value == 'Wide') {
      el.style.maxWidth = '1200px'
    } else if(binding.value == 'Narrow'){
      el.style.maxWidth = '560px'
    }
  }
})
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
