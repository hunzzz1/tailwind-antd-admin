// utils/permission.js

import router from '@/router'
import {useAuthStore} from "@/store/user.js";
// 白名单页面：不需要登录即可访问的页面
const whiteList = ['/login', '/register']

// 获取用户角色的方法（根据你的项目结构修改）
function hasPermission(roles, route) {
    if (route.meta && route.meta.roles) {
        return roles.some(role => route.meta.roles.includes(role))
    }
    return true
}

// 前置守卫
router.beforeEach((to, from, next) => {
    const store = useAuthStore()
    const token = store.token // 或者使用 Pinia/Vuex 获取 token
    const roles = store.roles || []

    if (token) {
        // 用户已登录
        if (to.path === '/login') {
            // 如果是登录页，重定向至首页
            next({ path: '/' })
        } else {
            // 是否需要权限验证
            if (to.meta.requiresAuth !== false) {
                // 检查是否有权限访问该路由
                if (hasPermission(roles, to)) {
                    next()
                } else {
                    // 无权限时跳转到 403 页面
                    next({ path: '/403' })
                }
            } else {
                // 不需要权限验证，直接放行
                next()
            }
        }
    } else {
        // 用户未登录
        if (whiteList.includes(to.path)) {
            // 白名单页面，直接放行
            next()
        } else {
            // 其他页面重定向到登录页并记录当前路径
            next(`/login?redirect=${encodeURIComponent(to.fullPath)}`)
        }
    }
})