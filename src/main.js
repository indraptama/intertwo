import Vue from 'vue'
import App from './App.vue'
import router from './router'

import VueScrollReveal from 'vue-scroll-reveal';


Vue.config.productionTip = false



Vue.use(VueScrollReveal, {
  scale: 1,
  delay: 250,
  useDelay: 'onload',
  reset: false,

});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
