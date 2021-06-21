import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import ManagerProject from "@/view/project/management_project.vue";
import CreateProject from "@/view/project/create_project.vue";
import UpdateProject from "@/view/project/update_project.vue";
import DetailProject from "@/view/project/detail_project.vue";
import ManagerUser from "@/view/user/management_user.vue";
import CreateUser from "@/view/user/create_user.vue";
import UpdateUser from "@/view/user/update_user.vue";
import DetailUser from "@/view/user/detail_user.vue";
import ManagerWork from "@/view/work/management_work.vue";
import CreateWork from "@/view/work/create_work.vue";
import UpdateWork from "@/view/work/update_work.vue";
import LoginView from "@/view/user/login_view.vue";
import Dashboard from "@/view/Dashboard.vue";
Vue.use(VueRouter);

const routes: RouteConfig[] = [
  {
    path: "/",
    name: "login",
    component: LoginView,
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: Dashboard,
    children: [
      {
        path: "/project",
        name: "project",
        component: ManagerProject,
      },
      {
        path: "/create-project",
        name: "create_project",
        component: CreateProject,
      },
      {
        path: "/update-project/:id",
        name: "update_project",
        component: UpdateProject,
        props: true,
      },
      {
        path: "/detail-project/:id",
        name: "detail_project",
        component: DetailProject,
        props: true,
      },
      {
        path: "/user",
        name: "user",
        component: ManagerUser,
      },
      {
        path: "/create-user",
        name: "create_user",
        component: CreateUser,
      },
      {
        path: "/update-user/:id",
        name: "update_user",
        component: UpdateUser,
        props: true,
      },
      {
        path: "/detail-user/:id",
        name: "detail_user",
        component: DetailUser,
        props: true,
      },
      {
        path: "/work",
        name: "work",
        component: ManagerWork,
      },
      {
        path: "/create-work",
        name: "create_work",
        component: CreateWork,
      },
      {
        path: "/update-work/:id",
        name: "update_work",
        component: UpdateWork,
        props: true,
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
