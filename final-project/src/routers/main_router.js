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
import EditData from '../views/EditData.vue';
import Mytemplete from '../views/Mytemplete.vue';

const routes = [
    {
        path: '/',
        name: 'search-main',
        component: Search,
        children: [
            {
                path: '',
                name: 'search-role-tab',
                component: SearchRole,
             },
            {
                path: 'skill',
                name: 'search-skill-tab',
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
        path: '/editdata',
        name: 'editdata',
        component: EditData,
    },
    {
        path: '/mytemplete',
        name: 'mytemplete',
        component: Mytemplete,
    },
    {
        path: '/role',
        name: 'role-detail',
        component: Role,
    }
    
];

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        }
        // 如果是切換相同頁面的子路由（如首頁標籤切換），則不捲動
        if (to.matched[0]?.path === from.matched[0]?.path) {
            return false;
        }
        // 跨頁面跳轉才回到頂端
        return { top: 0 };
    }
});

export default router;