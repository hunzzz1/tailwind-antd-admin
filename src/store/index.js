import { defineStore } from 'pinia'

export const appStore = defineStore('appStore', {
    state: () => ({
        isAuthenticated: false,
    }),
    actions: {
        login() {
            this.isAuthenticated = true
        },
        logout() {
            this.isAuthenticated = false
        },
    },
})
