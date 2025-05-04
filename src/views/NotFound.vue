<!-- src/views/NotFound.vue -->
<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()

// “Go Back”
function goBack() {
  if (window.history.length > 1) {
    router.back()
  } else {
    router.push('/')
  }
}

// “Back to Home”
function goHome() {
  router.push('/')
}
</script>

<template>
  <div class="flex items-center justify-center min-h-screen bg-white px-4">
    <div class="text-center max-w-md">
      <h1 class="text-9xl font-extrabold text-gray-900">404</h1>
      <p class="mt-4 text-2xl font-semibold text-gray-800">Oops! Page Not Found!</p>
      <p class="mt-2 text-gray-500">
        It seems like the page you&#39;re looking for does not exist or might have been removed.
      </p>
      <div class="mt-8 flex justify-center gap-4">
        <button
            @click="goBack"
            class="px-6 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 transition"
        >
          Go Back
        </button>
        <button
            @click="goHome"
            class="px-6 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition"
        >
          Back to Home
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.text-9xl {
  font-size: 8rem;
  line-height: 1;
}
</style>
