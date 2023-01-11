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
    }
  ]
}
