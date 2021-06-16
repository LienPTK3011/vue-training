import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Project from "../views/project/Project.vue";
import DetailProject from "../views/project/DetailProject.vue";
import Staff from "../views/staff/Staff.vue";
import StaffAction from "../views/staff/StaffAction.vue";
import Home from "../views/home/Home.vue";
import Add from "../views/staff/Add.vue";
import Search from "../views/staff/Search.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/project",
    name: "Project",
    component: Project,
  },
  {
    path: "/project/detail/:id",
    name: "DetailProject",
    component: DetailProject,
    props: true,
  },
  {
    path: "/staff",
    name: "Staff",
    component: Staff,
  },
  {
    path: "/staff/:id",
    name: "StaffAction",
    component: StaffAction,
    props: true,
  },
  {
    path: "/test",
    name: "Test",
    component: () => import("../views/kimbap/test.vue"),
  },
  {
    path: "/testParam/:param/:param2",
    name: "TestParam",
    component: () => import("../views/kimbap/test.vue"),
  },
  {
    path: "/guard",
    name: "Guard",
    component: () => import("../views/guard/Guard.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/user/Login.vue"),
  },
  {
    path: "/logout",
    name: "Logout",
    component: () => import("../views/user/Logout.vue"),
  },
  {
    path: "/search",
    name: "Search",
    component: Search,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

// Guard
const routerGuard: Array<string | null | undefined> = ["Guard", "Logout"];

const token = localStorage.getItem("token");
router.beforeEach((to, from, next) => {
  if (routerGuard.includes(to.name)) {
    if (to.name == "Logout" && token == null) {
      alert("Ban chua dang nhap");
      return;
    }
    if (to.name == "Logout" && token != null) {
      next();
    }

    if (token == null) {
      alert("Chua dang nhap, token error ^^!!!");
      return;
    } else {
      next();
    }
  }
  next();
});

export default router;
