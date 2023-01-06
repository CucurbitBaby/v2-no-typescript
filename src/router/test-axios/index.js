import Layout from '@/layout'

export default {
  path: '/test-axios',
  component: Layout,
  children: [
    {
      path: 'demo-01',
      name: 'demo-01',
      component: () => import('@/views/test-axios/demo-01/index.vue')
    }
  ]
}
