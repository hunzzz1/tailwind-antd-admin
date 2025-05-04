<script setup>
import {reactive} from "vue";
import {useAuthStore} from "@/store/user.js";
import router from "@/router/index.js";

import {loginApp} from "@/api/auth.js";

const params = reactive({
  username: "example@email.com",
  password: 'example',
})

const store = useAuthStore()
const handleLogin = () => {
  router.push("/dashboard")
  // loginApp().then(res => {
  //   store.setToken(res.data.token)
  //   router.push("/dashboard")
  // })
}
</script>

<template>
  <div class="flex justify-center items-center min-h-screen bg-gray-50">
    <div class="w-full max-w-md bg-white rounded-xl shadow-md p-6 space-y-6">
      <div class="text-center">
        <h1 class="text-2xl font-bold">Login</h1>
        <p class="text-gray-500">Enter your email below to login to your account</p>
      </div>

      <form class="space-y-4">
        <div>
          <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
          <input
              id="email"
              type="email"
              v-model="params.username"
              placeholder="m@example.com"
              class="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-black focus:ring-black"
          />
        </div>

        <div>
          <label for="password" class="flex justify-between text-sm font-medium text-gray-700">
            <span>Password</span>
            <a href="#" class="text-sm text-gray-500 hover:underline">Forgot your password?</a>
          </label>
          <input
              id="password"
              type="password"
              v-model="params.password"
              class="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-black focus:ring-black"
          />
        </div>

        <button
            @click="handleLogin"
            type="button"
            class="w-full bg-black text-white py-2 px-4 rounded-md hover:bg-gray-900 transition"
        >
          Login
        </button>
      </form>

      <button
          @click="handleLogin"
          type="button"
          class="w-full border border-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-100 transition"
      >
        Login with Google
      </button>

      <p class="text-center text-sm text-gray-500">
        Don't have an account?
        <a href="#" class="font-medium text-black hover:underline">Sign up</a>
      </p>
    </div>
  </div>
</template>

<style scoped>

</style>