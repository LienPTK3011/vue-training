import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import ProjectManager from '../views/ProjectManager.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'ProjectManager',
    component: ProjectManager
  },
  {
    path: '/employeeList',
    name: 'Employee List',
    component: () => import('@/views/ListEmployee.vue')
  },
  {
    path: '/workList',
    name: 'Work List',
    component: () => import('@/views/ListWork.vue')
  },

  {
    path: '/practice',
    name: 'Practice',
    component: () => import('@/views/Practice.vue')
  },

  {
    path: '/counter',
    name: 'AppCounter',
    component: () => import('@/views/AppCounter.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
