import { createRouter, createWebHistory } from 'vue-router';
import Templete from '../views/Templete.vue'
import TreeHole from '../views/TreeHole.vue'
import Search from '../views/Search.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Error from '../views/Error.vue'
import SearchRole from '../views/Search-Role.vue';
import SearchSkill from '../views/Search-Skill.vue';
import Skill from '../views/Skill.vue'
import MyAccount from '../views/MyAccount.vue';
import Role from '../views/Role.vue';

const routes = [
    {
        path: '/',
        name: 'search',
        component: Search,
        children: [
            {
                path: '',
                name: 'searchrole',
                component: SearchRole,
             },
            {
                path: 'skill',
                name: 'searchskill',
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
    },
    {
        path: '/photoshop',
        name: 'photoshop',
        component: Skill,
    },
    {
        path: '/myaccount',
        name: 'myaccount',
        component: MyAccount,
    },
    {
        path: '/role',
        name: 'role',
        component: Role,
    }
    
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;