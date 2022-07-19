import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SingleView from "@/views/SingleView";
import AutView from "@/views/AutView";

const routes = [
    {
        path: '/',
        name: 'aut',
        component: AutView
    },
    {
        path: '/main',
        name: 'home',
        component: HomeView
    },
    {
        path: '/:id',
        name: 'SingleView',
        component: SingleView,
        props: true
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
