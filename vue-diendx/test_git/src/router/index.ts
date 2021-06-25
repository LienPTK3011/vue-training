import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/QA',
    name: 'QA',
    component: () => import(/* webpackChunkName: "QA" */ '../views/QA.vue')
  },
  {
    path: '/order',
    name: 'order',
    component: () => import('../views/order.vue')
  },
  {
    path: '/order101',
    name: 'order101',
    component: () => import('../views/order101.vue')
  },
  {
    path: '/order202',
    name: 'order202',
    component: () => import('../views/order202.vue')
  },
  {
    path: '/confirm/:param',
    name: 'confirm',
    component: () => import('../views/confirm.vue')
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
