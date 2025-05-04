<script setup>
import { computed, ref } from 'vue'
import { RouterLink } from 'vue-router'
import * as LucideIcons from 'lucide-vue-next'

const props = defineProps({
  menu: Object,
  collapsed: Boolean
})

// 获取用户定义的图标
const getIcon = name => LucideIcons[name] || null
const icon = computed(() => getIcon(props.menu.icon))

// 控制子菜单的展开/收起状态
const isOpen = ref(false)

// 切换图标：收起时箭头向右，展开时箭头向下
const toggleIcon = computed(() => getIcon(isOpen.value ? 'ChevronDown' : 'ChevronRight'))

// 切换子菜单展开
function toggle() {
  isOpen.value = !isOpen.value
}
</script>

<template>
  <li>
    <!-- 无子菜单 -->
    <template v-if="!menu.children.length">
      <RouterLink
          :to="menu.path"
          class="flex items-center gap-x-2 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100"
          active-class="bg-gray-200"
      >
        <component :is="icon" class="w-5 h-5 shrink-0" v-if="menu.icon" />
        <span v-if="!collapsed">{{ menu.title }}</span>
      </RouterLink>
    </template>

    <!-- 有子菜单 -->
    <template v-else>
      <div>
        <button
            type="button"
            @click="toggle"
            class="w-full text-start flex items-center gap-x-2 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100"
        >
          <component :is="icon" class="w-5 h-5 shrink-0" v-if="menu.icon" />
          <span v-if="!collapsed">{{ menu.title }}</span>
          <!-- 子菜单下拉图标 -->
          <component :is="toggleIcon" class="w-4 h-4 ml-auto shrink-0" v-if="!collapsed" />
        </button>

        <!-- 仅在未折叠且 isOpen=true 时显示子菜单 -->
        <ul v-if="isOpen && !collapsed" class="pl-6 space-y-1">
          <MenuTree
              v-for="child in menu.children"
              :key="child.path"
              :menu="child"
              :collapsed="collapsed"
          />
        </ul>
      </div>
    </template>
  </li>
</template>

<style scoped>
/* 可根据需求添加图标旋转动画 */
</style>