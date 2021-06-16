import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Home from '../views/Home.vue';
import UserListPage from '../views/user/UserListPage.vue';
import UserEditPage from '../views/user/UserEditPage.vue';
Vue.use(VueRouter);

const routes: RouteConfig[] = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/user',
    name: 'user',
    component: UserListPage,
    // children: [
    //   {
    //     path: '/user/:id',
    //     name: 'user_edit',
    //     component: UserEditPage,
    //   }
    // ]
  },
   {
      path: '/user/:id',
      name: 'user_edit',
      component: UserEditPage,
    },
    {
      path: '/user',
      name: 'user_add',
      component: UserEditPage,
    },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
