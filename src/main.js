import Vue from 'vue'
import App from './App.vue'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import router from './router'
import 'swiper/dist/css/swiper.css'
import './assets/xp_iconfont/iconfont.css'
Vue.use(MintUI)
Vue.config.productionTip = false
new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
