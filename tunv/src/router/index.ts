import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import ProjectList from '../views/ProjectList.vue'
import ProjectDetail from '../views/ProjectDetail.vue'
import StaffList from '../views/StaffList.vue'
import StaffDetail from '../views/StaffDetail.vue'
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
    path: '/information',
    name: 'infomation',
    component: ProjectList
  },
  {
    path: '/project-detail/:name',
    name: 'project-detail',
    component: ProjectDetail,
    props: true
  },
  {
    path: '/staff-list',
    name: 'staff-list',
    component: StaffList
  },
  {
    path: '/staff-detail/:id',
    name: 'staff-detail',
    component: StaffDetail,
    props: true
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
