import Layout from '@/layout'

export default {
  path: '/test-demo',
  component: Layout,
  children: [
    {
      path: 'vue2/demo-01',
      name: 'test-demo-vue2-demo-01',
      component: () => import('@/views/test-demo/vue2/demo-01/index.vue')
    },
    {
      path: 'vue2/demo-02',
      name: 'test-demo-vue2-demo-02',
      component: () => import('@/views/test-demo/vue2/demo-02/index.vue')
    },
    {
      path: 'vue2/demo-03',
      name: 'test-demo-vue2-demo-03',
      component: () => import('@/views/test-demo/vue2/demo-03/index.vue')
    },
    {
      path: 'vue2/demo-04',
      name: 'test-demo-vue2-demo-04',
      component: () => import('@/views/test-demo/vue2/demo-04/index.vue')
    },
    {
      path: 'vue2/demo-05',
      name: 'test-demo-vue2-demo-05',
      component: () => import('@/views/test-demo/vue2/demo-05/index.vue')
    },
    {
      path: 'vue2/demo-06',
      name: 'test-demo-vue2-demo-06',
      component: () => import('@/views/test-demo/vue2/demo-06/index.vue')
    },
    {
      path: 'vue2/demo-07',
      name: 'test-demo-vue2-demo-07',
      component: () => import('@/views/test-demo/vue2/demo-07/index.vue')
    }
  ]
}
