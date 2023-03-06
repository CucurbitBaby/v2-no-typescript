import Layout from '@/layout'
export default {
  path: '/test-demo',
  component: Layout,
  children: [
    {
      path: 'chart/demo-01',
      name: 'test-demo-chart-demo-01',
      component: () => import('@/views/test-demo/chart/demo-01/index.vue')
    },
    {
      path: 'chart/demo-02',
      name: 'test-demo-chart-demo-02',
      component: () => import('@/views/test-demo/chart/demo-02/index.vue')
    }
  ]
}
