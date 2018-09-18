import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from './api/axios'
import http from './api/http'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import moment from 'moment'
import ElementUI from 'element-ui'
import glo from './js/global.js'
import VueBus from 'vue-bus'
import 'element-ui/lib/theme-chalk/index.css'
// 全局配置moment为中文
import '@/css/index.scss'
import '@/css/styleCommon.scss'
// require('swiper/dist/css/swiper.css')

Vue.use(VueBus)
Vue.use(ElementUI)
Vue.use(glo)
Vue.use(VueAwesomeSwiper)
Vue.prototype.$axios = axios
Vue.prototype.$http=http
Vue.config.productionTip = false
moment.locale('zh-cn')

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
