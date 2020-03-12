import Vue from 'vue'
import VueRouter from 'vue-router'
import '../store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/Home')
  },
  {
    path: '/edit/:id',
    name: 'edit',
    component: () => import('@/views/Edit'),
    props: true
  },
  {
    path: '/edit',
    name: 'create',
    component: () => import('@/views/Edit'),
    props: true
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
