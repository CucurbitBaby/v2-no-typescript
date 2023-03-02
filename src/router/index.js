import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Layout from '@/layout'
// import testAxiosRouter from './test-axios'
// import testVue2Router from './test-vue2'
// import vueDemoRouter from './vue2-demo'

import { testAxiosRouter, testVue2Router, testElementUiRouter, testChartRouter } from './test-demo'
import { compositionApiRouter } from './vue2-demo'
import { treeRouter } from './data-structures-and-algorithms'

Vue.use(VueRouter)

const routes = [

  {
    path: '/',
    component: Layout,
    children: [{
      path: '',
      name: 'Home',
      component: HomeView
    }]
  },

  testAxiosRouter,
  testVue2Router,
  testElementUiRouter,
  testChartRouter,
  compositionApiRouter,

  treeRouter

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
