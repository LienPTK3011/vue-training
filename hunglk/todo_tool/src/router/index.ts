import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Home from '../views/Home.vue';
import UserListPage from '../views/user/UserListPage.vue';
import UserEditPage from '../views/user/UserEditPage.vue';
import ProjectListPage from '../views/project/ProjectListPage.vue';
import ProjectEditPage from '../views/project/ProjectEditPage.vue';
import Dashboard from '../views/Dashboard.vue';
Vue.use(VueRouter);

const routes: RouteConfig[] = [
  {
    path: '',
    component: Dashboard,
    children: [
      {
        path: '/user',
        name: 'user',
        component: UserListPage,
      },
      {
        path: '/user',
        name: 'user_edit',
        component: UserEditPage,
      },
      {
        path: '/user',
        name: 'user_add',
        component: UserEditPage,
      },

      {
        path: '/project',
        name: 'project',
        component: ProjectListPage,
      },
      {
        path: '/project',
        name: 'project_edit',
        component: ProjectEditPage,
      },
      {
        path: '/project',
        name: 'project_add',
        component: ProjectEditPage,
      },
    ],
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
