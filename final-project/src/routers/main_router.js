import { createRouter, createWebHistory } from 'vue-router';
import Templete from '../views/Templete.vue'
import TreeHole from '../views/TreeHole.vue'
import Search from '../views/Search.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'

const routes = [
    {
        path: '/',
        name: 'search',
        component: Search
    },
    {
        path: '/templete',
        name: 'templete',
        component: Templete
    },
    {
        path: '/treeHole',
        name: 'treeHole',
        component: TreeHole
    },
    {
        path: '/login',
        name: 'login',
        component: Login
    },
    {
        path: '/register',
        name: 'register',
        component: Register
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;