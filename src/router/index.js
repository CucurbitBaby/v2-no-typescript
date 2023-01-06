import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Layout from '@/layout'
import testAxiosRouter from './test-axios'

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

  testAxiosRouter

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
