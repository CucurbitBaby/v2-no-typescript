import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/styles/index.scss' // global css

import App from './App.vue'
import router from './router'
// import './test1'  // 测试模块加载顺序 例: router
import store from './store'

Vue.config.productionTip = false

Vue.use(ElementUI)

Vue.prototype.$bus = new Vue()

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
