import { createRouter, createWebHistory } from 'vue-router';
import Templete from '../views/Templete.vue'
import TreeHole from '../views/TreeHole.vue'
import Search from '../views/Search.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Error from '../views/Error.vue'
import SearchRole from '../views/Search-Role.vue';
import SearchSkill from '../views/Search-Skill.vue';

const routes = [
    {
        path: '/',
        name: 'search',
        component: Search,
        children: [
            {
                path: '',
                name: 'role',
                component: SearchRole,
             },
            {
                path: 'skill',
                name: 'skill',
                component: SearchSkill,
            }
            ]
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
    },
    {
        path: '/error',
        name: 'error',
        component: Error,
    }
    
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;