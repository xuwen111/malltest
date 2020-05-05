import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import toast from '@/components/common/toast'

import VueAwesomeSwiper from 'vue-awesome-swiper'
import '@/components/common/swiper/swiper.css'

Vue.use(VueAwesomeSwiper)
Vue.use(toast)


Vue.config.productionTip = false

Vue.prototype.$bus = new Vue()

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
 