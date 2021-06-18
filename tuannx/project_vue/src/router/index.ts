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
    path: '/project',
    name: 'Project',
    component: () =>
      import(
        /* webpackChunkName: "Project" */ '../components/project/Project.vue'
      )
  },
  {
    path: '/employee',
    name: 'Empoyee',
    component: () =>
      import(
        /* webpackChunkName: "Employee" */ '../components/employee/Employee.vue'
      )
  },
  {
    path: '/project-detail/:id',
    name: 'ProjectDetail',
    component: () =>
      import(
        /* webpackChunkName: "ProjectDetail" */ '../components/project/ProjectDetail.vue'
      ),
    props: true
  },
  {
    path: '/customer',
    name: 'Customer',
    component: () =>
      import(
        /* webpackChunkName: "Customer" */ '../components/customer/Customer.vue'
      )
  },
  {
    path: '/login',
    name: 'Login',
    component: () =>
      import(/* webpackChunkName: "Login" */ '../components/login/Login.vue')
  },
  {
    path: '/user',
    name: 'User',
    component: () =>
      import(/* webpackChunkName: "Login" */ '../components/login/User.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
