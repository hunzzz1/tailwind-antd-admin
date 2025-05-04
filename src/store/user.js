import { defineStore } from 'pinia'
import {getAppToken,setAppToken, removeAppToken} from "@/utils/session.js";

export const useAuthStore = defineStore('auth', {
    state: () => ({
        token: getAppToken() || '',
        userInfo: null,
        roles: [],
    }),

    actions: {
        setToken(token) {
            this.token = token
            setAppToken(token)
        },

        clearToken() {
            this.token = ''
            removeAppToken()
        },

        setUserInfo(user) {
            this.userInfo = user
            this.roles = user?.roles || []
        },

        logout() {
            this.clearToken()
            this.userInfo = null
            this.roles = []
        },
    },
})
