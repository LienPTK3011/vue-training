import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import ManagerProject from "@/view/project/management_project.vue";
import CreateProject from "@/view/project/create_project.vue";
import UpdateProject from "@/view/project/update_project.vue";
import ManagerUser from "@/view/user/management_user.vue";
import CreateUser from "@/view/user/create_user.vue";
import UpdateUser from "@/view/user/update_user.vue";
import DetailUser from "@/view/user/detail_user.vue";
import ManagerWork from "@/view/work/management_work.vue";
import CreateWork from "@/view/work/create_work.vue";
import UpdateWork from "@/view/work/update_work.vue";
import LoginView from "@/view/user/login_view.vue";
Vue.use(VueRouter);

const routes: RouteConfig[] = [
  {
    path: "/",
    name: "login",
    component: LoginView,
    meta: { requiresAuth: true },
  },
  {
    path: "/project",
    name: "project",
    component: ManagerProject,
    meta: { requiresAuth: true },
  },
  {
    path: "/create-project",
    name: "create_project",
    component: CreateProject,
    meta: { requiresAuth: true },
  },
  {
    path: "/update-project",
    name: "update_project",
    component: UpdateProject,
    meta: {
      requiresAuth: true,
      adminAuth: true,
      userAuth: true,
      btjCompanyAuth: true,
      isMenu: true,
    },
  },
  {
    path: "/user",
    name: "user",
    component: ManagerUser,
    meta: {
      requiresAuth: true,
      adminAuth: true,
      userAuth: true,
      btjCompanyAuth: true,
      isMenu: true,
    },
  },
  {
    path: "/create-user",
    name: "create_user",
    component: CreateUser,
    meta: {
      requiresAuth: true,
      adminAuth: true,
      userAuth: true,
      btjCompanyAuth: true,
      isMenu: true,
    },
  },
  {
    path: "/update-user/:id",
    name: "update_user",
    component: UpdateUser,
    meta: {
      requiresAuth: true,
      adminAuth: true,
      userAuth: true,
      btjCompanyAuth: true,
      isMenu: true,
    },
    props: true,
  },
  {
    path: "/detail-user/:id",
    name: "detail_user",
    component: DetailUser,
    meta: {
      requiresAuth: true,
      adminAuth: true,
      userAuth: true,
      btjCompanyAuth: true,
      isMenu: true,
    },
    props: true,
  },
  {
    path: "/work",
    name: "work",
    component: ManagerWork,
    meta: {},
  },
  {
    path: "/create-work",
    name: "create_work",
    component: CreateWork,
    meta: {
      requiresAuth: true,
      adminAuth: true,
      userAuth: true,
      btjCompanyAuth: true,
      isMenu: true,
    },
  },
  {
    path: "/update-work",
    name: "update_work",
    component: UpdateWork,
    meta: {
      requiresAuth: true,
      adminAuth: true,
      userAuth: true,
      btjCompanyAuth: true,
      isMenu: true,
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
