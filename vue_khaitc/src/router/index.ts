import Vue from 'vue'
import VueRouter, {RouteConfig} from 'vue-router'
import Home from '../views/Home.vue'
import employee from "@/components/employee/employeeList/employee.vue";
import ProjectList from "@/components/project/project-list/ProjectList.vue";
import projectDetail from "@/components/project/detail/projectDetail.vue";

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
        component: ProjectList,
        props: true
    },
    {
        path: '/employee',
        name: 'Employee',
        component: employee
    },
    {
        path: '/project/detail/:id',
        name: 'ProjectDetail',
        component: projectDetail
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
