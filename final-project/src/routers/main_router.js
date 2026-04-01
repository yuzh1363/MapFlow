import { createRouter, createWebHistory } from 'vue-router';

import Templete from '../views/Templete.vue'
import TreeHole from '../views/TreeHole.vue'
import Search from '../views/Search.vue'

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
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;