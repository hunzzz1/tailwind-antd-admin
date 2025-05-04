<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { RouterView } from 'vue-router'
import { useAuthStore } from '@/store/user.js'
import Sidebar from '@/layout/Sidebar.vue'
import router from '@/router/index.js'

const store = useAuthStore()
const isCollapsed = ref(false)
const isMobile = ref(false)

function toggleSidebar() {
  isCollapsed.value = !isCollapsed.value
}

// 检测并设置移动端默认折叠
function checkMobile() {
  isMobile.value = window.innerWidth < 768
  // 移动端默认折叠，桌面端默认展开
  isCollapsed.value = isMobile.value
}

onMounted(() => {
  checkMobile()
  window.addEventListener('resize', checkMobile)
})
onBeforeUnmount(() => {
  window.removeEventListener('resize', checkMobile)
})

function handleLogout() {
  store.logout()
  router.push('/login')
  // logoutApp().then(() => {
  //   store.logout()
  // })
}
</script>

<template>
  <div class="flex h-screen bg-gray-50 text-gray-950 text-sm overflow-hidden">
    <!-- 侧边栏 -->
    <aside
        class="fixed top-0 left-0 h-screen bg-white border-r border-gray-200 overflow-hidden
         transition-transform duration-300 ease-in-out md:transition-all md:duration-300"
        :class="[
    // 提升层级
    'z-30',
    // 移动端：滑入滑出
    isMobile
      ? (isCollapsed ? '-translate-x-full w-64' : 'translate-x-0 w-64')
      // 桌面端：宽度控制
      : (isCollapsed ? 'w-0' : 'w-64')
  ]"
    >

      <Sidebar />
    </aside>
    <!-- 遮罩层：仅在移动端且侧边栏展开时显示 -->
    <div
        v-if="isMobile && !isCollapsed"
        @click="toggleSidebar"
        class="fixed inset-0  bg-transparent bg-opacity-50 z-20"
    ></div>
    <!-- 右侧主区域 -->
    <div
        :class="[
        'flex-1 flex flex-col min-h-0 min-w-0 transition-all duration-300 ease-in-out',
        // 移动端内容始终 ml-0；桌面端根据折叠决定 ml
        isMobile
          ? 'ml-0'
          : (isCollapsed ? 'ml-0' : 'ml-64')
      ]"
    >
      <!-- 顶部 Header -->
      <header
          class="flex items-center justify-between h-16 px-6 bg-white border-b border-gray-200 sticky top-0 z-10"
      >
        <!-- 折叠/展开按钮 -->
        <div @click="toggleSidebar" class="cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
               fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
               stroke-linejoin="round" class="lucide lucide-panel-left-close-icon">
            <rect width="18" height="18" x="3" y="3" rx="2"/>
            <path d="M9 3v18"/>
            <path d="m16 15-3-3 3-3"/>
          </svg>
        </div>

        <!-- 右侧其他控件 -->
        <div class="flex items-center gap-x-4">
          <div class="relative inline-block cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                 viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                 stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sun-moon-icon">
              <path d="M12 8a2.83 2.83 0 0 0 4 4 4 4 0 1 1-4-4"/>
              <path d="M12 2v2"/>
              <path d="M12 20v2"/>
              <path d="m4.9 4.9 1.4 1.4"/>
              <path d="m17.7 17.7 1.4 1.4"/>
              <path d="M2 12h2"/>
              <path d="M20 12h2"/>
              <path d="m6.3 17.7-1.4 1.4"/>
              <path d="m19.1 4.9-1.4 1.4"/>
            </svg>
          </div>
          <div @click="handleLogout" class="cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                 viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                 stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-log-out-icon">
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
              <polyline points="16 17 21 12 16 7"/>
              <line x1="21" x2="9" y1="12" y2="12"/>
            </svg>
          </div>
        </div>
      </header>

      <!-- 可滚动内容区 -->
      <main class="flex-1 w-full overflow-auto p-4">
        <RouterView />
      </main>
    </div>
  </div>
</template>

<style scoped>
/*
  - 若需要自定义尺寸（如 w-9.5 / h-9.5），可在 Tailwind 配置中扩展，
    或直接使用 w-10 h-10 等现有类。
*/
</style>
