import Layout from '@/layout'

export default {
  path: '/test-demo',
  component: Layout,
  children: [
    {
      path: 'element-ui/demo-01',
      name: 'test-demo-element-ui-demo-01',
      component: () => import('@/views/test-demo/element-ui/demo-01/index.vue')
    },
    {
      path: 'element-ui/demo-02',
      name: 'test-demo-element-ui-demo-02',
      component: () => import('@/views/test-demo/element-ui/demo-02/index.vue')
    },
    {
      path: 'element-ui/demo-03',
      name: 'test-demo-element-ui-demo-03',
      component: () => import('@/views/test-demo/element-ui/demo-03/index.vue')
    },
    {
      path: 'element-ui/demo-04',
      name: 'test-demo-element-ui-demo-04',
      component: () => import('@/views/test-demo/element-ui/demo-04/index.vue')
    },
    {
      path: 'element-ui/demo-05',
      name: 'test-demo-element-ui-demo-05',
      component: () => import('@/views/test-demo/element-ui/demo-05/index.vue')
    }
  ]
}
