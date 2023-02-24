import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import UmyUi from 'umy-ui'
import 'umy-ui/lib/theme-chalk/index.css'
import '@/styles/index.scss' // global css

import App from './App.vue'
import router from './router'
// import './test1'  // 测试模块加载顺序 例: router
import store from './store'

Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.use(UmyUi)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
