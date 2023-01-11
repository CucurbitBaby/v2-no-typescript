import Layout from '@/layout'

export default {
  path: '/vue2-demo',
  component: Layout,
  children: [
    {
      path: 'composition-api/demo-01',
      name: 'composition-api-demo-01',
      component: () => import('@/views/vue2-demo/composition-api/demo-01')
    }
  ]
}
