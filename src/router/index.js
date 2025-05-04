import { createRouter, createWebHistory } from 'vue-router'
import Basic from '@/layout/Basic.vue'

const routes = [
    {
        path: '/login',
        component: () => import('@/views/login/Index.vue'),
        meta: { hidden: true }
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: () => import('@/views/NotFound.vue'),
    },
    {
        path: '/',
        component: Basic,
        name: 'Basic',
        redirect: '/dashboard',
        children: [
            {
                path: 'dashboard',                     // 相对路径
                component: () => import('@/views/dashboard/Index.vue'),
                name: 'Dashboard',
                meta: {
                    hidden: false,
                    requiresAuth: true,
                    title: 'Dashboard',
                    icon: 'Home'
                }
            },
            {
                path: 'users',                         // 相对路径
                name: 'Users',
                redirect: '/users/sub2',               // 重定向到子路由
                meta: {
                    hidden: false,
                    requiresAuth: true,
                    title: 'Users',
                    icon: 'Users'
                },
                children: [
                    {
                        path: 'sub1',                      // 相对路径
                        component: () => import('@/views/examples/Index.vue'),
                        name: 'Sub1',
                        meta: {
                            hidden: false,
                            requiresAuth: true,
                            title: 'Sub Menu 1',
                            icon: ''
                        }
                    },
                    {
                        path: 'sub2',                      // 相对路径
                        component: () => import('@/views/examples/Index.vue'),
                        name: 'Sub2',
                        meta: {
                            hidden: false,
                            requiresAuth: true,
                            title: 'Sub Menu 2'
                        }
                    }
                ]
            },
            {
                path: 'examples',                      // 相对路径
                component: () => import('@/views/examples/Index.vue'),
                name: 'Examples',
                meta: {
                    hidden: false,
                    requiresAuth: true,
                    title: 'Examples',
                    icon: 'BookText'
                }
            },
            {
                path: 'NotFound1',                      // 相对路径
                name: 'NotFound1',
                redirect: '/NotFound',
                meta: {
                    hidden: false,
                    requiresAuth: true,
                    title: 'NotFound',
                    icon: 'FileWarning'
                }
            }
        ]
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
